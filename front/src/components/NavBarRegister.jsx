"use client";

import Link from "next/link";
import {
  MenuRegister,
  UserRegister,
  Salas,
  MisSalas,
  Usuarios,
} from "./svg/Svgs";
import { useState } from "react";
import { useAuthStore } from "@/context/authUser";
import { useRouter } from "next/navigation";

export default function NavBarRegister() {
  const logout = useAuthStore((state) => state.isLogout);
  const router = useRouter();

  // Definición de estados iniciales utilizando el hook useState
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const [selectedOption, setSelectedOption] = useState(null); // Estado para mantener la opción seleccionada en el menú

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para seleccionar una opción del menú
  const selectOption = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); // Cerrar el menú después de seleccionar una opción
  };

  // Definición de las opciones del menú
  const menuOptions = ["Salas", "Mis Salas", "Usuarios"];

  return (
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3 w-full">
      <span>
        <div className="relative">
          <button onClick={toggleMenu}>
            <MenuRegister /> {/* Renderizar el icono del menú */}
          </button>
          {menuOpen && (
            // Renderizar el menú desplegable si menuOpen es true
            <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
              {menuOptions.map((option, index) => (
                <li
                  key={index}
                  className={`px-10 py-2 cursor-pointer flex items-center ${
                    option === selectedOption ? "hover:bg-gray-400" : ""
                  }`}
                  onClick={() => selectOption(option)}>
                  {/* Renderizar iconos de acuerdo a la opción seleccionada */}
                  {option === "Salas" && <Salas />}
                  {option === "Mis Salas" && <MisSalas />}
                  {option === "Usuarios" && <Usuarios />}
                  <span className="ml-4">{option}</span>
                  {/* Renderizar el nombre de la opción */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </span>
      <Link href="/">
        <h2 className="p-2">LOGO</h2> {/* Renderizar el enlace de "LOGO" */}
      </Link>
      <div className="flex flex-col justify-around">
        <Link href="/home">
          <UserRegister /> {/* Renderizar el icono de usuario */}
        </Link>
        <button
          onClick={() => {
            logout();
            router.push("/");
          }}>
          Logout
        </button>
      </div>
    </header>
  );
}
