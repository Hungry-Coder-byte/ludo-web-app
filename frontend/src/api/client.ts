import axios from 'axios';

interface AxiosError {
  response?: any;
}

const apiClient = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:5000/api',
  timeout: 5000,
});

// Request interceptor to add JWT token to Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error instanceof axios.AxiosError && error.response) {
      console.error('Response error:', error.response);
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        // Handle unauthorized state, e.g., redirect to login page
        throw new Error('Unauthorized');
      }
      throw error;
    }
    throw error;
  }
);

export default apiClient;