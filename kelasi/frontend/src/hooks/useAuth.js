import { useAuthStore } from '../store/slices/authSlice';

export default function useAuth() {
  const { token, user, setAuth, logout } = useAuthStore();
  return { token, user, setAuth, logout, isAuthenticated: Boolean(token) };
}
