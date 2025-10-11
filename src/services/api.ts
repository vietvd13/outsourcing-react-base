import axios from 'axios';
import i18n from '@/locales/i18n';
import { store } from '@/store/store';
import { logout } from '@/store/authSlice';
import type { RootState } from '@/store/store';

export const api = axios.create({ baseURL: (import.meta.env.VITE_API_URL as string) || '/api' });

api.interceptors.request.use((config) => {
  const token = (store.getState() as RootState).auth.token;
  if (token && config.headers) (config.headers as any)['Authorization'] = `Bearer ${token}`;
  if (config.headers) (config.headers as any)['Accept-Language'] = i18n.language || 'en';
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) store.dispatch(logout());
    return Promise.reject(err);
  }
);
