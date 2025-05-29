import { WebSocketClientImpl } from './config/websocket.client';
import {
  WebSocketClient,
  WebSocketClientConfig,
  WebSocketEventHandler,
  WebSocketMessage,
} from './types/websocket.types';

export class BaseWebSocketService {
  protected client: WebSocketClient;

  constructor(config: WebSocketClientConfig) {
    this.client = WebSocketClientImpl.getInstance(config);
  }

  public async connect(): Promise<void> {
    return this.client.connect();
  }

  public disconnect(): void {
    this.client.disconnect();
  }

  public getState() {
    return this.client.getState();
  }

  protected send<T>(type: string, payload: T): void {
    this.client.send(type, payload);
  }

  protected subscribe<T>(type: string, handler: WebSocketEventHandler<T>): () => void {
    return this.client.subscribe(type, handler);
  }

  protected unsubscribe(type: string, handler: WebSocketEventHandler): void {
    this.client.unsubscribe(type, handler);
  }
}

// Example of a specific WebSocket service implementation
export class ChatWebSocketService extends BaseWebSocketService {
  private static instance: ChatWebSocketService;
  private readonly baseUrl: string;

  private constructor() {
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3000/ws/chat';
    super({
      url: wsUrl,
      autoReconnect: true,
      reconnectAttempts: 5,
      reconnectInterval: 3000,
      heartbeatInterval: 10000,
      onOpen: () => {
        console.log('Chat WebSocket connected');
      },
      onClose: (event) => {
        console.log('Chat WebSocket closed:', event);
      },
      onError: (error) => {
        console.error('Chat WebSocket error:', error);
      },
    });
    this.baseUrl = wsUrl;
  }

  public static getInstance(): ChatWebSocketService {
    if (!ChatWebSocketService.instance) {
      ChatWebSocketService.instance = new ChatWebSocketService();
    }
    return ChatWebSocketService.instance;
  }

  // Chat-specific methods
  public async sendMessage(message: string, roomId: string): Promise<void> {
    this.send('chat:message', { message, roomId });
  }

  public async joinRoom(roomId: string): Promise<void> {
    this.send('chat:join', { roomId });
  }

  public async leaveRoom(roomId: string): Promise<void> {
    this.send('chat:leave', { roomId });
  }

  public onMessage(
    handler: (message: WebSocketMessage<{ text: string; sender: string }>) => void
  ): () => void {
    return this.subscribe('chat:message', handler);
  }

  public onUserJoined(
    handler: (message: WebSocketMessage<{ userId: string; username: string }>) => void
  ): () => void {
    return this.subscribe('chat:user:joined', handler);
  }

  public onUserLeft(handler: (message: WebSocketMessage<{ userId: string }>) => void): () => void {
    return this.subscribe('chat:user:left', handler);
  }
}

// Export singleton instance
export const chatWebSocketService = ChatWebSocketService.getInstance();
