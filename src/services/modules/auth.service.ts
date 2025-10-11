import { api } from '@/services/api';

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
  token: 'mock-jwt-token-12345'
};

export async function login(payload: LoginPayload) {
  // Check if using mock credentials
  if (payload.email === MOCK_USER.email && payload.password === MOCK_USER.password) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      token: MOCK_USER.token,
      user: MOCK_USER.user
    };
  }

  // If not mock credentials, try real API
  try {
    const { data } = await api.post('/auth/login', payload);
    return data as { token: string; user: { id: string; name: string; role?: string } };
  } catch (error) {
    // If API fails and credentials don't match mock, throw error
    throw new Error('Invalid credentials');
  }
}
