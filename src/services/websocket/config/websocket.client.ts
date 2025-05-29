import {
  WebSocketClient,
  WebSocketClientConfig,
  WebSocketEventHandler,
  WebSocketEventMap,
  WebSocketMessage,
  WebSocketState
} from '../types/websocket.types';

const DEFAULT_CONFIG: Partial<WebSocketClientConfig> = {
  autoReconnect: true,
  reconnectAttempts: 5,
  reconnectInterval: 3000,
  heartbeatInterval: 30000,
  heartbeatMessage: 'ping'
};

export class WebSocketClientImpl implements WebSocketClient {
  private static instance: WebSocketClientImpl;
  private socket: WebSocket | null = null;
  private eventHandlers: WebSocketEventMap = {};
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private state: WebSocketState = {
    isConnected: false,
    isConnecting: false,
    reconnectAttempts: 0
  };

  private constructor(private config: WebSocketClientConfig) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  public static getInstance(
    config: WebSocketClientConfig
  ): WebSocketClientImpl {
    if (!WebSocketClientImpl.instance) {
      WebSocketClientImpl.instance = new WebSocketClientImpl(config);
    }
    return WebSocketClientImpl.instance;
  }

  public async connect(): Promise<void> {
    if (this.socket?.readyState === WebSocket.OPEN) {
      return;
    }

    if (this.socket?.readyState === WebSocket.CONNECTING) {
      return new Promise((resolve) => {
        const checkConnection = setInterval(() => {
          if (this.socket?.readyState === WebSocket.OPEN) {
            clearInterval(checkConnection);
            resolve();
          }
        }, 100);
      });
    }

    this.state.isConnecting = true;
    this.state.reconnectAttempts = 0;

    try {
      this.socket = new WebSocket(this.config.url);
      this.setupEventListeners();
      await this.waitForConnection();
      this.startHeartbeat();
    } catch (error) {
      this.handleError(error as Error);
      throw error;
    } finally {
      this.state.isConnecting = false;
    }
  }

  public disconnect(): void {
    this.stopHeartbeat();
    this.clearReconnectTimer();

    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }

    this.state.isConnected = false;
    this.state.isConnecting = false;
    this.state.reconnectAttempts = 0;
  }

  public send<T>(type: string, payload: T): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not connected');
    }

    const message: WebSocketMessage<T> = {
      type,
      payload,
      timestamp: Date.now()
    };

    this.socket.send(JSON.stringify(message));
  }

  public subscribe<T>(
    type: string,
    handler: WebSocketEventHandler<T>
  ): () => void {
    if (!this.eventHandlers[type]) {
      this.eventHandlers[type] = [];
    }
    this.eventHandlers[type].push(handler as WebSocketEventHandler);

    // Return unsubscribe function
    return () => this.unsubscribe(type, handler as WebSocketEventHandler);
  }

  public unsubscribe(type: string, handler: WebSocketEventHandler): void {
    if (!this.eventHandlers[type]) return;

    this.eventHandlers[type] = this.eventHandlers[type].filter(
      (h) => h !== handler
    );

    if (this.eventHandlers[type].length === 0) {
      delete this.eventHandlers[type];
    }
  }

  public getState(): WebSocketState {
    return { ...this.state };
  }

  private setupEventListeners(): void {
    if (!this.socket) return;

    this.socket.onopen = () => {
      this.state.isConnected = true;
      this.state.isConnecting = false;
      this.state.reconnectAttempts = 0;
      this.config.onOpen?.();
    };

    this.socket.onclose = (event: CloseEvent) => {
      this.state.isConnected = false;
      this.stopHeartbeat();
      this.config.onClose?.(event);

      if (this.shouldReconnect(event)) {
        this.scheduleReconnect();
      }
    };

    this.socket.onerror = (error: Event) => {
      this.state.lastError = new Error('WebSocket error occurred');
      this.config.onError?.(error);
    };

    this.socket.onmessage = (event: MessageEvent) => {
      try {
        const message = JSON.parse(event.data) as WebSocketMessage;
        this.handleMessage(message);
        this.config.onMessage?.(event);
      } catch (error) {
        this.handleError(error as Error);
      }
    };
  }

  private handleMessage(message: WebSocketMessage): void {
    const handlers = this.eventHandlers[message.type] || [];
    handlers.forEach((handler) => handler(message));
  }

  private handleError(error: Error): void {
    this.state.lastError = error;
    this.state.isConnected = false;
    this.state.isConnecting = false;

    if (this.shouldReconnect()) {
      this.scheduleReconnect();
    }
  }

  private shouldReconnect(event?: CloseEvent): boolean {
    if (!this.config.autoReconnect) return false;
    if (this.state.reconnectAttempts >= (this.config.reconnectAttempts || 0))
      return false;
    if (event?.wasClean) return false;
    return true;
  }

  private scheduleReconnect(): void {
    this.clearReconnectTimer();

    this.reconnectTimer = setTimeout(async () => {
      this.state.reconnectAttempts++;
      this.config.onReconnect?.(this.state.reconnectAttempts);

      try {
        await this.connect();
      } catch (error) {
        this.handleError(error as Error);
        if (
          this.state.reconnectAttempts >= (this.config.reconnectAttempts || 0)
        ) {
          this.config.onReconnectFailed?.();
        }
      }
    }, this.config.reconnectInterval);
  }

  private startHeartbeat(): void {
    if (!this.config.heartbeatInterval) return;

    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.socket?.readyState === WebSocket.OPEN) {
        this.send('heartbeat', this.config.heartbeatMessage);
      }
    }, this.config.heartbeatInterval);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private waitForConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('WebSocket instance not created'));
        return;
      }

      if (this.socket.readyState === WebSocket.OPEN) {
        resolve();
        return;
      }

      const timeout = setTimeout(() => {
        this.socket?.removeEventListener('open', onOpen);
        this.socket?.removeEventListener('error', onError);
        reject(new Error('WebSocket connection timeout'));
      }, 10000);

      const onOpen = () => {
        clearTimeout(timeout);
        this.socket?.removeEventListener('error', onError);
        resolve();
      };

      const onError = (error: Event) => {
        clearTimeout(timeout);
        this.socket?.removeEventListener('open', onOpen);
        reject(error);
      };

      this.socket.addEventListener('open', onOpen);
      this.socket.addEventListener('error', onError);
    });
  }
}
