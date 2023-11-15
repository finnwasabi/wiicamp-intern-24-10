import { create } from "zustand";

const useAuthStore = create((set) => ({
  isInitApp: false,
  setInitApp: () => set({ isInitApp: true }),

  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
export default useAuthStore;
