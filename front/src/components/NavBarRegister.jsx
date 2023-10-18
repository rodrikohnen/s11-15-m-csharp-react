"use client"

import Link from "next/link";
import {
  MenuRegister,
  UserRegister,
  Salas,
  MisSalas,
  Usuarios,
  Tutor,
  Ajustes,
  CerrarSesion
} from "./svg/Svgs";
import { useState } from "react";
import { useAuthStore } from "@/context/authUser";
import { useRouter } from "next/navigation"; 

export default function NavBarRegister() {
  const logout = useAuthStore((state) => state.isLogout);
  const router = useRouter();

  // Definición de estados iniciales utilizando el hook useState
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Estado para controlar el menú de usuario
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

  // Opciones del menú de usuario, incluyendo "Cerrar sesión"
  const userMenuOptions = ["Mi perfil", "Notificaciones", "Ayuda", "Cerrar sesión"];

  const handleUserMenuClick = (userOption) => {
    if (userOption === "Mi perfil") {
      // Agrega la lógica para ir a la página de perfil
    } else if (userOption === "Notificaciones") {
      // Agrega la lógica para ir a la página de notificaciones
    } else if (userOption === "Ayuda") {
      // Agrega la lógica para ir a la página de ayuda
    } else if (userOption === "Cerrar sesión") {
      handleLogout(); // Llama a la función handleLogout para cerrar la sesión
    }

    setUserMenuOpen(false); // Cierra el menú de usuario después de seleccionar una opción
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  // Definición de las opciones del menú
  const menuOptions = ["Salas", "Mis Salas", "Usuarios", "Quiero ser Tutor", "Ajustes"];

  return (
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black border-b-[1.5px] pb-3 w-full">

    {/* MENU HAMBURGUESA */}
      <span>
        <div className="relative">
          <button onClick={toggleMenu}>
            <MenuRegister /> {/* Renderizar el icono del menú */}
          </button>
          {menuOpen && (
            <ul className="absolute w-[222px] left-0  mt-2 bg-white border border-gray-300 rounded shadow z-10">
              {menuOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-5 py-2 cursor-pointer flex items-left hover:bg-gray-400"
                
                  onClick={() => selectOption(option)}
                >
                  {option === "Salas" && (
                    <Link href="/rooms">
                      <Salas />
                    </Link>
                  )}

                  {option === "Usuarios" && (
                    <Link href="/user">
                    <Usuarios />
                  </Link>
                  )}

                  {option === "Mis Salas" && (
                    <Link href="/rooms">
                      <MisSalas />
                    </Link>
                  )}

                  {option === "Quiero ser Tutor" && (
                    <Link href="/tutor">
                      <Tutor />
                    </Link>
                  )}

                  {option === "Ajustes" && <Ajustes />}
                  
                  <span className="ml-4">{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </span>

       {/* LOGO*/}
        <h2 className="p-2">LOGO</h2>

      {/* MENI DE PERFIL */}
      <div className="flex flex-col justify-around relative]">
        <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
          <UserRegister />
        </button>
        {userMenuOpen && (
          <ul className="absolute right-0  mt-60 bg-white border border-gray-300 rounded shadow z-10">
            {userMenuOptions.map((userOption, index) => (
              <li
                key={index}
                className={`px-10 py-2 cursor-pointer flex items-center hover:bg-gray-400`}
                onClick={() => handleUserMenuClick(userOption)}
              >
                <span className="ml-4">{userOption}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

