/**
 * @file Defines the API endpoints for the application.
 * This helps in managing all API URLs in one place, making it easy to update and maintain.
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh-token' // Assuming this is the endpoint for refreshing tokens
  },
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: (id: string | number) => `/users/${id}`
  }
};

