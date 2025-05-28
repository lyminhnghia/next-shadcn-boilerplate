export type WebSocketEventType = string;

export interface WebSocketMessage<T = any> {
  type: WebSocketEventType;
  payload: T;
  timestamp: number;
}

export interface WebSocketConfig {
  url: string;
  autoReconnect?: boolean;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  heartbeatInterval?: number;
  heartbeatMessage?: string;
}

export interface WebSocketState {
  isConnected: boolean;
  isConnecting: boolean;
  reconnectAttempts: number;
  lastError?: Error;
}

export type WebSocketEventHandler<T = any> = (
  message: WebSocketMessage<T>
) => void;

export interface WebSocketEventMap {
  [key: string]: WebSocketEventHandler[];
}

export interface WebSocketClientConfig extends WebSocketConfig {
  onOpen?: () => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (error: Event) => void;
  onMessage?: (event: MessageEvent) => void;
  onReconnect?: (attempt: number) => void;
  onReconnectFailed?: () => void;
}

export interface WebSocketClient {
  connect(): Promise<void>;
  disconnect(): void;
  send<T>(type: WebSocketEventType, payload: T): void;
  subscribe<T>(
    type: WebSocketEventType,
    handler: WebSocketEventHandler<T>
  ): () => void;
  unsubscribe(type: WebSocketEventType, handler: WebSocketEventHandler): void;
  getState(): WebSocketState;
}
