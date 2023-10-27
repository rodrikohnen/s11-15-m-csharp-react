"use client";

import React, { useState, useEffect, useContext } from "react";
import CardMoreRooms from "@/components/Rooms/CardMoreRooms";
import NavBarRooms from "@/components/Rooms/NavBarRooms";
import GroupVideo from "../../assets/pictures/Group-video-pana1.jpg";
import Image from "next/image";
import Link from "next/link";
import { GrStatusGood, GrStatusWarning } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Medalla, PerfilDefault } from "@/components/svg/Svgs";
import { CreateRoomContext } from "@/context/createRoom";
import { useGetRooms } from "@/hooks/useGetRooms";

export default function Rooms() {
  const { isLoading, listRooms, setRooms } = useContext(CreateRoomContext);
  const { showRooms, getRooms, setShowRooms } = useGetRooms();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const storedRooms = JSON.parse(localStorage.getItem("listrooms"));
    if (storedRooms && showRooms.ready === true) {
      setShowRooms(storedRooms);
    } else if (storedRooms && showRooms.ready === false) {
      setShowRooms(localStorage.removeItem("listrooms"));
    }
    getRooms();
  }, []);

  useEffect(() => {
    const createRoom = JSON.parse(localStorage.getItem("rooms"));
    if (createRoom) {
      setRooms(createRoom);
    } else {
      setRooms(localStorage.removeItem("rooms"));
    }
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
          <CardMoreRooms />
          <h2
            className={`sm:text-xl text-xl family text-negromate mt-20 mb-10  ${
              isMobile ? "mx-auto" : ""
            }`}
          >
            Mis Salas
          </h2>

          {isLoading ? (
            <div className=" flex items-center justify-center">
              <AiOutlineLoading3Quarters className=" w-10 h-10 animate-spin " />
            </div>
          ) : (
            <div className="flex flex-col mt-4 sm:flex-row sm:mt-6 gap-4 sm:justify-start ">
              {showRooms ? (
                <>
                  {[...showRooms].map((room) => (
                    <Link legacyBehavior href={`${listRooms.links?.gui}`}>
                      <span
                        className=" p-[1rem] text-sm border shadow-xl rounded-lg overflow-hidden transform hover:scale-95 transition-transform cursor-pointer"
                        href="#"
                      >
                        <div className="p-1 ">
                          <div className="flex justify-between">
                            <h1 className="mb-2 font-medium text-secondary">
                              {room.name}
                            </h1>
                            <div className="flex flex-row">
                              <Medalla />
                            </div>
                          </div>
                          <div className="flex flex-row justify-between py-1">
                            <PerfilDefault />
                            <div className="flex flex-col ml-3">
                              <div className="flex flex-col">
                                <div className="flex flex-row space-x-2">
                                  {/* Ratings */}
                                </div>
                              </div>
                              {room.ready ? (
                                <GrStatusGood className="w-10 h-10 " />
                              ) : (
                                <GrStatusWarning className="w-10 h-10 text-orange-400" />
                              )}
                            </div>
                          </div>
                          <div className="flex font-bold py-1 text-negromate">
                            <div className="flex flex-row">
                              {room.started_at}
                            </div>
                            <div className="flex flex-row"></div>
                          </div>
                        </div>
                      </span>
                    </Link>
                  ))}
                </>
              ) : (
                <p>No hay salas</p>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
