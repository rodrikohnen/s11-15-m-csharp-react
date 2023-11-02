"use client";
import Logo from "@/assets/logos/LogoMateSpeakColor.png";
import {
  MenuRegister,
  UserRegister,
  Salas,
  MisSalas,
  Usuarios,
  Tutor,
} from "./svg/Svgs";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LogoWhite from "../assets/logos/LogoMateSpeakWhite.png";
import Image from "next/image";
import Link from "next/link";
import useLoginStore from "@/context/loginStore";

export default function NavBarRegister({ isAuthenticared }) {
  const logout = useLoginStore((state) => state.logout);
  const router = useRouter();

  // Definición de estados iniciales utilizando el hook useState
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura/cierre del menú
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Estado para controlar el menú de usuario
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
    <header className="flex flex-row justify-center bg-primary border-b-[1.5px] w-full">
      {showHamburgerMenu ? (
        // MENÚ HAMBURGUESA A LA IZQUIERDA EN VERSIÓN MÓVIL

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
      ) : null}
      {/* LOGO EN EL CENTRO EN VERSIÓN MÓVIL */}
      <div className={`mt-6  ${showHamburgerMenu ? "mx-auto" : "ml-10"}`}>
        <Link href={"/"}>
          <Image src={LogoWhite} alt="Logo Mate Speak" width={77} />
        </Link>
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
      {/* MENÚ DE PERFIL */}
      <div
        className="flex flex-col justify-around mr-6 mt-4 mb-4"
        ref={userMenuRef}
      >
        <button onClick={toggleUserMenu}>
          <UserRegister />
        </button>
        {userMenuOpen && (
          <ul className="absolute right-0 mt-40 bg-white border border-gray-300 rounded shadow z-10">
            {userMenuOptions.map((userOption, index) => (
              <li
                key={index}
                className="px-10 py-2 text-secondary cursor-pointer flex items-center hover-bg-gray-400"
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
