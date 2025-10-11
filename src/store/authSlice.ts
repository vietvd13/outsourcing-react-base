import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = { id: string; name: string; role?: string };
export type User = { id: string; name: string; role?: string };
export type AuthState = { token: string | null; refreshToken: string | null; user?: User };

const initialState: AuthState = { token: null, refreshToken: null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (s, a: PayloadAction<AuthState>) => {
      s.token = a.payload.token;
      s.refreshToken = a.payload.refreshToken;
      s.user = a.payload.user;
    },
    updateToken: (s, a: PayloadAction<{ token: string; refreshToken: string }>) => {
      s.token = a.payload.token;
      s.refreshToken = a.payload.refreshToken;
    },
    logout: (s) => {
      s.token = null;
      s.refreshToken = null;
      s.user = undefined;
    }
  }
});

export const { setCredentials, updateToken, logout } = slice.actions;
export default slice.reducer;
