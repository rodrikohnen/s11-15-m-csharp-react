"use client";
import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  isLogin: () => {
    set({
      isAuthenticated: true,
    });
  },
  isLogout: () => {
    set({
      isAuthenticated: false,
    });
  },
}));
