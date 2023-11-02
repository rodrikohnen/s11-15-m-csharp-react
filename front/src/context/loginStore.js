"use client";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

export const useLoginStore = create(persist(
  (set) => ({
    loginInfo: {
      token: "",
      usuario: {
        nombre: "",
        apellido: "",
      },
      isAuth: false,
    },
    setLoginInfo: (newLogin) => {
      set({
        token: newLogin.token,
        usuario: {
          nombre: newLogin.usuario.nombre,
          apellido: newLogin.usuario.apellido,
        },
        isAuth: true,
      });
    },
    logout: () => {
      set({ token: null, usuario: null, isAuth: null });
    },
  }),
  {
    name: 'login-storage'
  }
));
export default useLoginStore;
