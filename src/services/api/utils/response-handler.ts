import { AxiosResponse } from 'axios';
import { ApiResponse } from '../types/api.types';

export const transformResponse = <T>(response: AxiosResponse): ApiResponse<T> => {
  const { data, status } = response;

  // If the response is already in our ApiResponse format, return it
  if (data && typeof data === 'object' && 'data' in data && 'success' in data) {
    return data as ApiResponse<T>;
  }

  // Transform the response into our standard format
  return {
    data: data as T,
    status,
    message: 'Success',
    success: true,
  };
};

export const createSuccessResponse = <T>(data: T, message = 'Success'): ApiResponse<T> => ({
  data,
  status: 200,
  message,
  success: true,
});

export const createErrorResponse = <T>(
  message: string,
  status = 500,
  data: T | null = null
): ApiResponse<T | null> => ({
  data,
  status,
  message,
  success: false,
});
