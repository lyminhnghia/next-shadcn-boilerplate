import axios, {
  AxiosHeaderValue,
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  RawAxiosRequestHeaders,
} from 'axios';
import { ApiClientConfig } from '../types/api.types';

const defaultConfig: ApiClientConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

class AxiosClient {
  private static instance: AxiosClient;
  private axiosInstance: AxiosInstance;

  private constructor(config: ApiClientConfig = defaultConfig) {
    this.axiosInstance = axios.create({
      ...config,
      headers: {
        ...defaultConfig.headers,
        ...config.headers,
      } as RawAxiosRequestHeaders,
    });
  }

  public static getInstance(config?: ApiClientConfig): AxiosClient {
    if (!AxiosClient.instance) {
      AxiosClient.instance = new AxiosClient(config);
    }
    return AxiosClient.instance;
  }

  public get client(): AxiosInstance {
    return this.axiosInstance;
  }

  public setAuthToken(token: string | null): void {
    if (token) {
      this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.axiosInstance.defaults.headers.common['Authorization'];
    }
  }

  public updateConfig(
    config: Partial<Omit<AxiosRequestConfig, 'headers'>> & {
      headers?: RawAxiosRequestHeaders;
    }
  ): void {
    this.axiosInstance.defaults = {
      ...this.axiosInstance.defaults,
      ...config,
      headers: {
        ...this.axiosInstance.defaults.headers,
        ...config.headers,
      } as HeadersDefaults & {
        [key: string]: AxiosHeaderValue;
      },
    };
  }
}

export const axiosClient = AxiosClient.getInstance();
export default axiosClient;
