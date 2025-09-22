import api from './api';
import { setToken, clearToken, getToken } from './storage';

export async function login(email, password) {
  const { data } = await api.post('/auth/login', { email, password });
  setToken(data.token);
  return data;
}

export function logout() {
  clearToken();
}

export function getStoredToken() {
  return getToken();
}
