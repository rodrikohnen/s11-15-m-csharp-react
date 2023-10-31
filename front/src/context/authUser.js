"use client";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isLogin: (tkn) =>
    set({
      isAuthenticated: true,
      token: "",
    }),
  isLogout: () =>
    set({
      isAuthenticated: false,
      token: null,
    }),
}));
