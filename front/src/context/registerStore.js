"use client";
import { create } from "zustand";

export const useRegisterStore = create((set) => ({
  user: {
    idRol: 1,
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    activo: "0",
    usuario1: "",
  },
  setUser: (newUser) => {
    set((state) => ({
      user: {
        ...state.user,
        ...newUser,
      },
    }));
  },
  resetUser: () => {
    set({
      user: {
        idRol: 1,
        nombre: "",
        apellido: "",
        correo: "",
        password: "",
        activo: "0",
        usuario1: "",
      },
    });
  },
}));
