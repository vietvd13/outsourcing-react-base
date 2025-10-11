import { api } from '@/services/api';
import { API_ENDPOINTS } from '@/constants/api';
import type { LoginResponse, RefreshTokenResponse } from '@/types/api';

export type LoginPayload = { email: string; password: string };

// Mock user data for development
const MOCK_USER = {
  email: 'vanha@gmail.com',
  password: '111111',
  user: {
    id: '1',
    name: 'Nguyen Van Ha',
    email: 'vanha@gmail.com',
    role: 'admin'
  },
  token: 'mock-jwt-token-12345',
  refreshToken: 'mock-refresh-token-67890'
};

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  // Check if using mock credentials
  if (payload.email === MOCK_USER.email && payload.password === MOCK_USER.password) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      token: MOCK_USER.token,
      refreshToken: MOCK_USER.refreshToken,
      user: MOCK_USER.user
    };
  }

  // If not mock credentials, try real API
  try {
        const { data } = await api.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, payload);
    return data;
  } catch (error) {
    // If API fails and credentials don't match mock, throw error
    throw new Error('Invalid credentials');
  }
}

export async function refreshToken(): Promise<RefreshTokenResponse> {
  // This is a mock API call. In a real application, you would call:
  // const { data } = await api.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
  // return data;

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Generate new mock tokens
  const newToken = `mock-jwt-token-${Date.now()}`;
  const newRefreshToken = `mock-refresh-token-${Date.now()}`;

  return {
    token: newToken,
    refreshToken: newRefreshToken
  };
}
