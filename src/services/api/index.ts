import { AxiosRequestConfig } from 'axios';
import { axiosClient } from './config/axios.config';
import { handleApiError } from './utils/error-handler';
import { transformResponse } from './utils/response-handler';
import { ApiRequestConfig, ApiResponse } from './types/api.types';

export class BaseApiService {
  protected async request<T>({
    method,
    url,
    data,
    params,
    ...config
  }: ApiRequestConfig): Promise<ApiResponse<T>> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        method,
        url,
        data,
        params,
        ...config,
        signal: config.signal || undefined, // Ensure signal is either undefined or AbortSignal
      };

      const response = await axiosClient.client.request(axiosConfig);
      return transformResponse<T>(response);
    } catch (error) {
      return handleApiError(error);
    }
  }

  protected get<T>(
    url: string,
    config?: Omit<ApiRequestConfig, 'method' | 'url'>
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'GET', url, ...config });
  }

  protected post<T>(
    url: string,
    data?: any,
    config?: Omit<ApiRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'POST', url, data, ...config });
  }

  protected put<T>(
    url: string,
    data?: any,
    config?: Omit<ApiRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PUT', url, data, ...config });
  }

  protected patch<T>(
    url: string,
    data?: any,
    config?: Omit<ApiRequestConfig, 'method' | 'url' | 'data'>
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'PATCH', url, data, ...config });
  }

  protected delete<T>(
    url: string,
    config?: Omit<ApiRequestConfig, 'method' | 'url'>
  ): Promise<ApiResponse<T>> {
    return this.request<T>({ method: 'DELETE', url, ...config });
  }
}

// Example of how to create an endpoint-specific service
export class AuthService extends BaseApiService {
  private static instance: AuthService;
  private readonly baseUrl = '/auth';

  private constructor() {
    super();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(email: string, password: string) {
    return this.post<{ token: string }>(`${this.baseUrl}/login`, {
      email,
      password,
    });
  }

  public async logout() {
    return this.post(`${this.baseUrl}/logout`);
  }

  public async refreshToken() {
    return this.post<{ token: string }>(`${this.baseUrl}/refresh-token`);
  }
}

// Export singleton instances
export const authService = AuthService.getInstance();
