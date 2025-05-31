// Common type definitions
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// API Response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User related types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  status: number;
}

// Component Props types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'checkbox';
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
}

// Add more type definitions as needed
