/**
 * @file Defines the types and interfaces for API responses.
 * This ensures type safety and consistency across the application when handling API data.
 */

import type { User } from '@/store/authSlice';

/**
 * Represents the response from the login API endpoint.
 */
export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}

/**
 * Represents the response from the refresh token API endpoint.
 */
export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
}

