export const APP_CONFIG = {
  APP_NAME: 'Next.js App',
  APP_DESCRIPTION: 'A modern Next.js application with shadcn/ui',
  APP_VERSION: '1.0.0',
  DEFAULT_LOCALE: 'en-US',
  SUPPORTED_LOCALES: ['en-US', 'es-ES', 'fr-FR'] as const,
  DEFAULT_THEME: 'system',
  SUPPORTED_THEMES: ['light', 'dark', 'system'] as const,
} as const;

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes
} as const;

export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 days
} as const;

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100] as const,
  MAX_PAGE_SIZE: 100,
} as const;

export const FILE_UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'] as const,
  MAX_FILES: 5,
} as const;
