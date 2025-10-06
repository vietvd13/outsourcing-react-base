import { api } from '@/services/api';

export type LoginPayload = { email: string; password: string };

export async function login(payload: LoginPayload) {
  const { data } = await api.post('/auth/login', payload);
  return data as { token: string; user: { id: string; name: string; role?: string } };
}
