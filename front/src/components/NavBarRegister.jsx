"use client";

import Image from "next/image";
import Logo from '@/assets/logos/LogoMateSpeakColor.png'
import {
  MenuRegister,
  UserRegister,
  Salas,
  MisSalas,
  Usuarios,
<<<<<<< HEAD
=======
  Tutor,
<<<<<<< HEAD
  Ajustes,
  CerrarSesion,
<<<<<<< HEAD
>>>>>>> 6fbab3f (add: changes rooms)
=======
>>>>>>> 49d8884 (add: dev-front + search branches)
=======
>>>>>>> 7c949e0 (fix: Improve logic for the render)
} from "./svg/Svgs";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LogoWhite from "../assets/logos/LogoMateSpeakWhite.png";
import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
import useLoginStore from "@/context/loginStore";
>>>>>>> 7c949e0 (fix: Improve logic for the render)

export default function NavBarRegister({ isAuthenticared }) {
  const logout = useLoginStore((state) => state.logout);
  const router = useRouter();

  // Definición de estados iniciales utilizando el hook useState
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const [selectedOption, setSelectedOption] = useState(null); // Estado para mantener la opción seleccionada en el menú
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(true); // Estado para determinar si mostrar el menú hamburguesa
  const menuRef = useRef(null); // Ref para el menú hamburguesa
  const userMenuRef = useRef(null); // Ref para el menú de usuario
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowHamburgerMenu(false); // Establece el menú de escritorio si el ancho es mayor o igual a 768px
    } else {
      setShowHamburgerMenu(true);
    }
  };

  useEffect(() => {
    handleResize(); // Llama a la función en el montaje inicial
    window.addEventListener("resize", handleResize); // Agrega un evento de cambio de tamaño de ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento en el desmontaje
    };
  }, []);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  // Función para seleccionar una opción del menú
  const selectOption = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); // Cerrar el menú después de seleccionar una opción
  };

<<<<<<< HEAD
<<<<<<< HEAD
  // Definición de las opciones del menú
  const menuOptions = ["Salas", "Mis Salas", "Usuarios"];

  return (
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3 w-full">
=======
=======
  // Manejador de clic en cualquier lugar de la pantalla
  const handleDocumentClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false); // Cierra el menú hamburguesa si el clic fue fuera de él
    }
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setUserMenuOpen(false); // Cierra el menú de usuario si el clic fue fuera de él
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleDocumentClick); // Agrega el manejador de clic global
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleDocumentClick); // Limpia el manejador de clic global
    };
  }, []);

>>>>>>> fb6c751 (changes home, travel, navBarRegister)
  // Opciones del menú de usuario, incluyendo "Cerrar sesión"
  const userMenuOptions = ["Mi perfil", "Cerrar sesión"];

  const handleUserMenuClick = (userOption) => {
    if (userOption === "Mi perfil") {
      router.push("/miperfil");
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
      router.push("/home");
    } else if (option === "Usuarios") {
      router.push("/user");
    } else if (option === "Mis Salas") {
      router.push("/rooms");
    } else if (option === "Quiero ser Tutor") {
      router.push("/tutor");
    }

    setMenuOpen(false); // Cierra el menú después de seleccionar una opción
  };

  // Definición de las opciones del menú
  const menuOptions = ["Salas", "Mis Salas", "Usuarios", "Quiero ser Tutor"];

  return (
<<<<<<< HEAD
    // Renderizado de la barra de navegación
    <header className="flex flex-row mt-4 justify-around border-black border-b-[1.5px] pb-3 w-full">
      {/* MENU HAMBURGUESA */}
<<<<<<< HEAD
>>>>>>> 6fbab3f (add: changes rooms)
=======
>>>>>>> 49d8884 (add: dev-front + search branches)
      <span>
        <div className="relative">
          <button onClick={toggleMenu}>
            <MenuRegister /> {/* Renderizar el icono del menú */}
          </button>
          {menuOpen && (
<<<<<<< HEAD
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
=======
            <ul className="absolute w-[222px] left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
              {menuOptions.map((option, index) => (
=======
    <header className="flex flex-row justify-center bg-primary border-b-[1.5px] w-full">
      {showHamburgerMenu ? (
        // MENÚ HAMBURGUESA A LA IZQUIERDA EN VERSIÓN MÓVIL
<<<<<<< HEAD
        <span>
          <div className="relative mt-4">
            <button onClick={toggleMenu}>
              <MenuRegister className="bg-white" />{" "}
            </button>
            {menuOpen && (
              <ul className="absolute w-[222px] left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
                {menuOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-5 py-2 cursor-pointer flex items-left hover-bg-gray-400"
                    onClick={() => handleMenuOptionClick(option)}
                  >
                    {showHamburgerMenu ? (
                      <>
                        {option === "Salas" && <Salas />}
                        {option === "Usuarios" && <Usuarios />}
                        {option === "Mis Salas" && <MisSalas />}
                        {option === "Quiero ser Tutor" && <Tutor />}
                      </>
                    ) : (
                      option
                    )}
                    <span className="ml-4">{option}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </span>
=======

        <div className="relative mt-4" ref={menuRef}>
          <button onClick={toggleMenu}>
            <MenuRegister className="bg-white" />{" "}
          </button>
          {menuOpen && (
            <ul className="absolute w-[222px] left-0 mt-2 bg-white border border-gray-300 rounded shadow z-10">
              {menuOptions.map((option, index) => (
                <li
                  key={index}
                  className="px-5 py-2 cursor-pointer flex items-left hover-bg-gray-400"
                  onClick={() => handleMenuOptionClick(option)}
                >
                  {showHamburgerMenu ? (
                    <>
                      {option === "Salas" && <Salas />}
                      {option === "Usuarios" && <Usuarios />}
                      {option === "Mis Salas" && <MisSalas />}
                      {option === "Quiero ser Tutor" && <Tutor />}
                    </>
                  ) : (
                    option
                  )}
                  <span className="ml-4">{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
>>>>>>> 7c949e0 (fix: Improve logic for the render)
      ) : null}

      {/* LOGO EN EL CENTRO EN VERSIÓN MÓVIL */}
      <div className={`mt-6  ${showHamburgerMenu ? "mx-auto" : "ml-10"}`}>
<<<<<<< HEAD
<<<<<<< HEAD
        <Image src={LogoWhite} alt="Logo Mate Speak" width={77} />
=======
        <Link href={"/home"}>
=======
        <Link href={"/"}>
>>>>>>> fb6c751 (changes home, travel, navBarRegister)
          <Image src={LogoWhite} alt="Logo Mate Speak" width={77} />
        </Link>
>>>>>>> 7c949e0 (fix: Improve logic for the render)
      </div>

      {showHamburgerMenu ? null : (
        // MENÚ DE ESCRITORIO (sin menú hamburguesa)
        <ul className="flex space-x-6 text-white text-lg justify-center w-full mt-8 ">
          {menuOptions.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer hover-bg-gray-400"
              onClick={() => handleMenuOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
<<<<<<< HEAD

      {
        /* MENÚ DE PERFIL */
        <div className="flex flex-col justify-around mr-6 mt-4 mb-4 ">
          <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <UserRegister />
          </button>
          {userMenuOpen && (
            <ul className="absolute right-0 mt-40 bg-white border border-gray-300 rounded shadow z-10">
              {userMenuOptions.map((userOption, index) => (
>>>>>>> e770273 (chages alta definicion salas y home)
                <li
                  key={index}
                  className="px-10 py-2 text-secondary cursor-pointer flex items-center hover-bg-gray-400"
                  onClick={() => handleUserMenuClick(userOption)}
                >
<<<<<<< HEAD
                  {option === "Salas" && <Salas />}

                  {option === "Usuarios" && <Usuarios />}
>>>>>>> 49d8884 (add: dev-front + search branches)

                  {option === "Mis Salas" && <MisSalas />}

                  {option === "Quiero ser Tutor" && <Tutor />}

                  {option === "Ajustes" && <Ajustes />}
<<<<<<< HEAD
<<<<<<< HEAD
                  
>>>>>>> a2d0d73 (add:change rooms 1)
=======

>>>>>>> 6fbab3f (add: changes rooms)
=======

>>>>>>> 49d8884 (add: dev-front + search branches)
                  <span className="ml-4">{option}</span>
                  {/* Renderizar el nombre de la opción */}
=======
                  <span className="ml-4">{userOption}</span>
>>>>>>> e770273 (chages alta definicion salas y home)
                </li>
              ))}
            </ul>
          )}
        </div>
<<<<<<< HEAD
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
      <Image className="w-20 h-14" src={Logo} alt="Logo MateSpeak" />

      {/* MENI DE PERFIL */}
      <div className="flex flex-col justify-around relative">
        <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
=======
      {/* MENÚ DE PERFIL */}
      <div
        className="flex flex-col justify-around mr-6 mt-4 mb-4"
        ref={userMenuRef}
      >
        <button onClick={toggleUserMenu}>
>>>>>>> fb6c751 (changes home, travel, navBarRegister)
          <UserRegister />
        </button>
        {userMenuOpen && (
          <ul className="absolute right-0 mt-60 bg-white border border-gray-300 rounded shadow z-10">
            {userMenuOptions.map((userOption, index) => (
              <li
                key={index}
<<<<<<< HEAD
                className="px-10 py-2 cursor-pointer flex items-center hover:bg-gray-400"
=======
                className="px-10 py-2 text-secondary cursor-pointer flex items-center hover-bg-gray-400"
>>>>>>> 7c949e0 (fix: Improve logic for the render)
                onClick={() => handleUserMenuClick(userOption)}
              >
                <span className="ml-4">{userOption}</span>
              </li>
            ))}
          </ul>
        )}
>>>>>>> 6fbab3f (add: changes rooms)
      </div>
=======
      }
>>>>>>> e770273 (chages alta definicion salas y home)
    </header>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 49d8884 (add: dev-front + search branches)
=======
>>>>>>> e770273 (chages alta definicion salas y home)
