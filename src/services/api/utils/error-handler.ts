import { AxiosError } from 'axios';
import { ApiError } from '../types/api.types';

export class ApiException extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly errors?: Record<string, string[]>;

  constructor(error: ApiError) {
    super(error.message);
    this.name = 'ApiException';
    this.status = error.status;
    this.code = error.code;
    this.errors = error.errors;
  }
}

export const handleApiError = (error: unknown): never => {
  if (error instanceof AxiosError) {
    const apiError: ApiError = {
      code: error.code || 'UNKNOWN_ERROR',
      message: error.response?.data?.message || error.message || 'An unexpected error occurred',
      status: error.response?.status || 500,
      errors: error.response?.data?.errors,
    };
    throw new ApiException(apiError);
  }

  if (error instanceof ApiException) {
    throw error;
  }

  // Handle unknown errors
  throw new ApiException({
    code: 'UNKNOWN_ERROR',
    message: error instanceof Error ? error.message : 'An unexpected error occurred',
    status: 500,
  });
};

export const isApiError = (error: unknown): error is ApiException => {
  return error instanceof ApiException;
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ApiException) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};
