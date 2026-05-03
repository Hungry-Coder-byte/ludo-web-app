import { create } from 'zustand';
import axios from 'axios';
import { type } from 'zod';
import { User } from '../../types/User';

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const useAuthStore = create<AuthState>()((set, get) => ({
  token: '',
  user: null,
  isLoading: false,
  error: null,

  login: async (credentials) => {
    try {
      const response = await axios.post('/api/users/login', credentials);
      const data = response.data;
      set({ token: data.token, user: data.user, isLoading: false, error: null });
    } catch (error: any) {
      console.error('Login error:', error);
      set({ error: error.message, isLoading: false, token: null });
    }
  },

  logout: () => {
    set({ token: null, user: null, isLoading: false, error: null });
    localStorage.removeItem('token');
  },

  // Add more auth actions here (e.g., signup, forgot password)
}));

export default useAuthStore;