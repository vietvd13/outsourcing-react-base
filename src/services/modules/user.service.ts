import { api } from '@/services/api';

export async function getMe() {
  const { data } = await api.get('/me');
  return data as { id: string; name: string; role?: string };
}
