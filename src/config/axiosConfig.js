import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL for your API
const BASE_URL = 'https://txc1sj5w-2018.euw.devtunnels.ms';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token to headers
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Error getting token from storage:', error);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Helper functions for token management
export const authService = {
  // Save tokens after login
  saveTokens: async (token, refreshToken = null, userData = null) => {
    try {
      await AsyncStorage.setItem('authToken', token);
      if (refreshToken) {
        await AsyncStorage.setItem('refreshToken', refreshToken);
      }
      if (userData) {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Error saving tokens:', error);
    }
  },

  // Get current token
  getToken: async () => {
    try {
      return await AsyncStorage.getItem('authToken');
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  },

  // Get user data
  getUserData: async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  },

  // Clear all auth data
  logout: async () => {
    try {
      await AsyncStorage.multiRemove(['authToken', 'refreshToken', 'userData']);
    } catch (error) {
      console.error('Error clearing auth data:', error);
    }
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return !!token;
    } catch (error) {
      return false;
    }
  },
};

export default axiosInstance;

