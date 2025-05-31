export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  DASHBOARD: {
    ROOT: '/dashboard',
    PROFILE: '/dashboard/profile',
    SETTINGS: '/dashboard/settings',
  },
  API: {
    AUTH: '/api/auth',
    USERS: '/api/users',
  },
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.AUTH.LOGIN,
  ROUTES.AUTH.REGISTER,
  ROUTES.AUTH.FORGOT_PASSWORD,
  ROUTES.AUTH.RESET_PASSWORD,
] as const;

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD.ROOT,
  ROUTES.DASHBOARD.PROFILE,
  ROUTES.DASHBOARD.SETTINGS,
] as const;
