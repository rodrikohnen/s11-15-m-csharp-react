"use client";

import Link from "next/link";
import {
  MenuRegister,
  UserRegister,
  Salas,
  MisSalas,
  Usuarios,
<<<<<<< HEAD
=======
  Tutor,
  Ajustes,
  CerrarSesion,
>>>>>>> 6fbab3f (add: changes rooms)
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

<<<<<<< HEAD
  // Definición de las opciones del menú
  const menuOptions = ["Salas", "Mis Salas", "Usuarios"];

  return (
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3 w-full">
=======
  // Opciones del menú de usuario, incluyendo "Cerrar sesión"
  const userMenuOptions = [
    "Mi perfil",
    "Notificaciones",
    "Ayuda",
    "Cerrar sesión",
  ];

  const handleUserMenuClick = (userOption) => {
    if (userOption === "Mi perfil") {
      router.push("/miperfil");
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

  // Función para redirigir a las rutas correspondientes al hacer clic en una opción del menú
  const handleMenuOptionClick = (option) => {
    if (option === "Salas") {
      router.push("/rooms");
    } else if (option === "Usuarios") {
      router.push("/user");
    } else if (option === "Mis Salas") {
      router.push("/home");
    } else if (option === "Quiero ser Tutor") {
      router.push("/tutor");
    } else if (option === "Ajustes") {
      router.push("/ajustes");
    }

    setMenuOpen(false); // Cierra el menú después de seleccionar una opción
  };

  // Definición de las opciones del menú
  const menuOptions = [
    "Salas",
    "Mis Salas",
    "Usuarios",
    "Quiero ser Tutor",
    "Ajustes",
  ];

  return (
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black border-b-[1.5px] pb-3 w-full">
      {/* MENU HAMBURGUESA */}
>>>>>>> 6fbab3f (add: changes rooms)
      <span>
        <div className="relative">
          <button onClick={toggleMenu}>
            <MenuRegister /> {/* Renderizar el icono del menú */}
          </button>
          {menuOpen && (
<<<<<<< HEAD
            // Renderizar el menú desplegable si menuOpen es true
            <ul className="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
=======
            <ul className="absolute w-[222px] left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
>>>>>>> 6fbab3f (add: changes rooms)
              {menuOptions.map((option, index) => (
                <li
                  key={index}
<<<<<<< HEAD
                  className={`px-10 py-2 cursor-pointer flex items-center ${
                    option === selectedOption ? "hover:bg-gray-400" : ""
                  }`}
                  onClick={() => selectOption(option)}>
                  {/* Renderizar iconos de acuerdo a la opción seleccionada */}
                  {option === "Salas" && <Salas />}
                  {option === "Mis Salas" && <MisSalas />}
                  {option === "Usuarios" && <Usuarios />}
=======
                  className="px-5 py-2 cursor-pointer flex items-left hover:bg-gray-400"
                  onClick={() => handleMenuOptionClick(option)}
                >
                  {option === "Salas" && <Salas />}

                  {option === "Usuarios" && <Usuarios />}

                  {option === "Mis Salas" && <MisSalas />}

                  {option === "Quiero ser Tutor" && <Tutor />}

                  {option === "Ajustes" && <Ajustes />}
<<<<<<< HEAD
                  
>>>>>>> a2d0d73 (add:change rooms 1)
=======

>>>>>>> 6fbab3f (add: changes rooms)
                  <span className="ml-4">{option}</span>
                  {/* Renderizar el nombre de la opción */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </span>
<<<<<<< HEAD
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
=======

      {/* LOGO*/}
      <h2 className="p-2">LOGO</h2>

      {/* MENI DE PERFIL */}
      <div className="flex flex-col justify-around relative">
        <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
          <UserRegister />
        </button>
        {userMenuOpen && (
          <ul className="absolute right-0 mt-60 bg-white border border-gray-300 rounded shadow z-10">
            {userMenuOptions.map((userOption, index) => (
              <li
                key={index}
                className="px-10 py-2 cursor-pointer flex items-center hover:bg-gray-400"
                onClick={() => handleUserMenuClick(userOption)}
              >
                <span className="ml-4">{userOption}</span>
              </li>
            ))}
          </ul>
        )}
>>>>>>> 6fbab3f (add: changes rooms)
      </div>
    </header>
  );
}
