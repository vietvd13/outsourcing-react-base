import axios from 'axios';
import i18n from '@/locales/i18n';
import { store } from '@/store/store';
import { logout, updateToken } from '@/store/authSlice';
import type { RootState } from '@/store/store';
import { refreshToken as refreshTokenAPI } from './modules/auth.service';

export const api = axios.create({ baseURL: (import.meta.env.VITE_API_URL as string) || '/api' });

// Refresh token state management
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
}> = [];

api.interceptors.request.use((config) => {
  const token = (store.getState() as RootState).auth.token;
  if (token && config.headers) (config.headers as any)['Authorization'] = `Bearer ${token}`;
  if (config.headers) (config.headers as any)['Accept-Language'] = i18n.language || 'en';
  return config;
});

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(token => {
          originalRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const state = store.getState() as RootState;
      if (!state.auth.refreshToken) {
        processQueue(error, null);
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        const response = await refreshTokenAPI();
        const { token, refreshToken } = response;

        // Update tokens in store
        store.dispatch(updateToken({ token, refreshToken }));

        // Update authorization header for the original request
        originalRequest.headers['Authorization'] = `Bearer ${token}`;

        // Process all queued requests
        processQueue(null, token);

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        store.dispatch(logout());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

 
// Generic API call helpers
export const get = async <T>(url: string, params?: object): Promise<T> => {
  const response = await api.get<T>(url, { params });
  return response.data;
};

export const post = async <T>(url: string, data: any): Promise<T> => {
  const response = await api.post<T>(url, data);
  return response.data;
};

export const put = async <T>(url: string, data: any): Promise<T> => {
  const response = await api.put<T>(url, data);
  return response.data;
};

export const del = async <T>(url: string): Promise<T> => {
  const response = await api.delete<T>(url);
  return response.data;
};

export const postFormData = async <T>(url: string, formData: FormData): Promise<T> => {
  const response = await api.post<T>(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};