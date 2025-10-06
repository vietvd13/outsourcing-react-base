import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = { id: string; name: string; role?: string };
export type AuthState = { token: string | null; user?: User };

const initialState: AuthState = { token: null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (s, a: PayloadAction<AuthState>) => {
      s.token = a.payload.token;
      s.user = a.payload.user;
    },
    logout: (s) => {
      s.token = null;
      s.user = undefined;
    }
  }
});

export const { setCredentials, logout } = slice.actions;
export default slice.reducer;
