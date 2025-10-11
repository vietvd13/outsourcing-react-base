import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Represents a user in the authentication system.
 */
export type User = {
  id: string;
  name: string;
  role?: string;
};

/**
 * Represents the authentication state in the Redux store.
 */
export type AuthState = {
  token: string | null;
  refreshToken: string | null;
  user?: User;
};

/**
 * Initial state for the authentication slice.
 */
const initialState: AuthState = { token: null, refreshToken: null };

/**
 * Authentication slice for managing user authentication state.
 * Handles login, token refresh, and logout operations.
 */
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * Sets user credentials after successful login.
     * @param state - Current authentication state
     * @param action - Payload containing token, refreshToken, and user data
     */
    setCredentials: (s, a: PayloadAction<AuthState>) => {
      s.token = a.payload.token;
      s.refreshToken = a.payload.refreshToken;
      s.user = a.payload.user;
    },
    /**
     * Updates authentication tokens after refresh.
     * @param state - Current authentication state
     * @param action - Payload containing new token and refreshToken
     */
    updateToken: (s, a: PayloadAction<{ token: string; refreshToken: string }>) => {
      s.token = a.payload.token;
      s.refreshToken = a.payload.refreshToken;
    },
    /**
     * Clears all authentication data on logout.
     * @param state - Current authentication state
     */
    logout: (s) => {
      s.token = null;
      s.refreshToken = null;
      s.user = undefined;
    }
  }
});

export const { setCredentials, updateToken, logout } = slice.actions;
export default slice.reducer;
