"use client";

import React, { useState, useEffect } from "react";
import CardMoreRooms from "@/components/Rooms/CardMoreRooms";
import NavBarRooms from "@/components/Rooms/NavBarRooms";
import GroupVideo from "../../assets/pictures/Group-video-pana1.jpg";
import Image from "next/image";

export default function Rooms() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect the screen width and set isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta el punto de quiebre según tus necesidades
    };

    // Comprobación inicial
    handleResize();

    // Escucha los eventos de redimensionamiento de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBarRooms className="w-full" />
      <div className="flex flex-col h-screen w-[screen] gap-10 p-10">
        <section className="flex  items-center justify-center p-4 gap-10 text-center">
          <div className="flex items-center sm:items-start gap-5">
            <p className="sm:text-lg text-sm  text-negromate">
              En esta sección puedes ver las salas que creaste
            </p>
          </div>
          <Image
            src={GroupVideo}
            alt="Group Video"
            width={275}
            className="w-300 h-200 sm:w-173 sm:h-115"
          />
        </section>
        <section className={`sm:text-left text-center`}>
          <h2
            className={`sm:text-xl text-xl family text-negromate mt-20 mb-10  ${
              isMobile ? "mx-auto" : ""
            }`}
          >
            Mis Salas
          </h2>
          <CardMoreRooms />
        </section>
      </div>
    </>
  );
}
