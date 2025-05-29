import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { axiosClient } from './axios.config';

// Request interceptor
axiosClient.client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can add common request handling here
    // For example, adding loading state, logging, etc.
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.client.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can handle successful responses here
    // For example, transforming the response data
    return response;
  },
  async (error: AxiosError) => {
    // const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      // You can implement token refresh logic here
      // For example:
      // const newToken = await refreshToken();
      // if (newToken) {
      //   axiosClient.setAuthToken(newToken);
      //   return axiosClient.client(originalRequest);
      // }
    }

    // Handle other errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);
