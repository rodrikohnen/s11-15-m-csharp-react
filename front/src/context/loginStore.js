"use client";
import { create } from "zustand";

export const useLoginStore = create((set) => ({
  loginInfo: {
    token: "",
    usuario: {
      nombre: "",
      apellido: "",
    },
  },
  setLoginInfo: (newLogin) => {
    set({
      token: newLogin.token,
      usuario: {
        nombre: newLogin.usuario.nombre,
        apellido: newLogin.usuario.apellido,
      },
    });
  },
  logout: () => {
    set({ token: null, usuario: null });
  },
}));
export default useLoginStore;
