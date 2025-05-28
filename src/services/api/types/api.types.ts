export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

export interface RequestConfig extends Omit<RequestInit, 'body'> {
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ApiRequestConfig extends RequestConfig {
  method: HttpMethod;
  url: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}
