"use client";

import React, { useState, useEffect, Fragment } from "react";
import CardMoreRooms from "@/components/Rooms/CardMoreRooms";
import NavBarRooms from "@/components/Rooms/NavBarRooms";
import GroupVideo from "../../assets/pictures/Group-video-pana1.jpg";
import Image from "next/image";
import { ROOM_API_URL } from "@/hooks/useCreateRoom";
import { GrStatusGood, GrStatusWarning } from "react-icons/gr";

export default function Rooms() {
  const [isMobile, setIsMobile] = useState(false);
  const [showRooms, setShowRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const getRooms = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(`https://api.eyeson.team/rooms`, {
        method: "GET",
        headers: {
          Authorization: `${ROOM_API_URL}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const data = await response.json();
      setShowRooms(data);
      const allRooms = data;
      return allRooms?.map((room) => ({
        Name: room.name,
        Ready: room.ready,
        Started: room.started_at,
      }));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRooms();
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
          <div className=" pt-5">
          {showRooms ? (
            <>
              {showRooms.map((room) => (
                <Fragment key={room.id}>
                  <div className="border-2 rounded-lg max-w-xs p-5 shadow-2xl">
                    <h1>Nombre de la sala: {room.name}</h1>
                    <p className=" flex flex-row items-center gap-1">
                      Estado de la sala:
                      {room.ready ? (
                        <p className="text-green-500 font-bold">Encendida</p>
                      ) : (
                        <p className="text-pink-700 font-bold">Apagada</p>
                      )}
                    </p>
                    <p className="font-bold">
                      Fecha de creacion: {room.started_at}
                    </p>
                  </div>
                </Fragment>
              ))}
            </>
          ) : (
            <p>No hay salas creadas</p>
          )}
          </div>
        </section>
      </div>
    </>
  );
}
