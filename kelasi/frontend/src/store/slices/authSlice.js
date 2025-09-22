import { create } from 'zustand';
import { getStoredToken, logout as doLogout } from '../../services/auth';

export const useAuthStore = create((set) => ({
  token: getStoredToken(),
  user: null,
  setAuth: (payload) => set({ token: payload?.token || '', user: payload?.user || null }),
  logout: () => {
    doLogout();
    set({ token: '', user: null });
  },
}));
