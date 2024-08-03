import create from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export interface User {
  id: number;
  email: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  setUser: (user: User | null) => void;
  setUserToken: (data: { token: string }) => void;
  logout: () => void;
}

type AuthPersist = (set: any, get: any, api: any) => AuthState;

const useAuthStore = create<AuthState>(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      setUserToken: (data) => set({ isAuthenticated: true, token: data.token }),
      setUser: (user) => set({ user }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage', // unique name
      getStorage: () => localStorage, // (optional) use 'sessionStorage' for session storage
    } as PersistOptions<AuthState> // Ensure proper typing for PersistOptions
  ) as AuthPersist // Ensure proper typing for the middleware
);

export { useAuthStore };
