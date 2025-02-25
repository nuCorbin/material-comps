// apiService.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Base URL for your Express API - ensure this environment variable is set.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

// Create an Axios instance with common configurations.
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Attach Azure B2C tokens to outgoing requests.
// Adjust this as needed depending on how you store/manage the token.
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from local storage or your authentication context.
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Centralized response error handling.
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // You can handle global error responses here (e.g., auto logout on 401).
    return Promise.reject(error);
  }
);

// Define the API service with common HTTP methods.
export const apiService = {
  // GET request with optional query parameters.
  get: async <T>(url: string, params?: object): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.get(url, { params });
    return response.data;
  },

  // POST request with JSON body.
  post: async <T>(url: string, data?: object): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, data);
    return response.data;
  },

  // PUT request to update resources.
  put: async <T>(url: string, data?: object): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.put(url, data);
    return response.data;
  },

  // DELETE request to remove resources.
  delete: async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.delete(url);
    return response.data;
  },

  // Specialized upload function for handling multipart/form-data (e.g., file uploads).
  upload: async <T>(url: string, formData: FormData): Promise<T> => {
    const response: AxiosResponse<T> = await apiClient.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },
};

export default apiService;
