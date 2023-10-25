"use client";

import { useCreateRoom } from "@/hooks/useCreateRoom";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import Logo from "@/assets/logos/LogoMateSpeakColor.png";
import Image from "next/image";
import Link from "next/link";

export default function CreateRooms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const { isLoading, isError, listRooms, createRoom } = useCreateRoom();

  useEffect(() => {
    register("categoria", {
      required: "Este campo es obligatorio",
    });
    register("descripcion", {
      required: "Este campo es obligatorio",
      maxLength: {
        value: 50,
        message: "La descripción no puede tener más de 50 caracteres",
      },
    });
  }, [register]);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = (e) => {
    openModal();
    createRoom();
  };

  return (
    <>
      <div className="component w-[324px] border rounded-lg shadow-md flex items-center">
        <div className="inline-flex flex-col items-center gap-4 p-3 relative bg-white rounded-4">
          <div className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap">
            <h1>Instrucciones para el anfitrión</h1>
          </div>

          <h2 className="text-black text-xs sm:text-xs font-bold tracking-normal leading-normal w-72">
            Los usuarios que puedan traer contenido positivo a las salas de Mate
            Speak son bienvenidos para aplicar como anfitriones.
          </h2>
          <p className="text-xs sm:text-xs font-normal text-3e3e3e tracking-normal leading-normal w-72 h-172">
            <span className="text-3e3e3e text-10 font-normal tracking-normal">
              1. La sala permite reunir a un gran número de compañeros de idioma
              para practicar el lenguaje hablado mediante interacciones diarias.
              En paralelo puedes mejorar tus habilidades en el idioma de tu
              interés.
              <br />
              2. Puedes abrir una Sala de diferentes temas, generando un
              ambiente de comunidad empática.
              <br />
              3. Una vez seas anfitrión puedes administrar tu sala. Tus
              responsabilidades incluyen: designar moderadores, cumplir con los
              tiempos de transmisión acordados, administrar los usuarios que
              entren a las sala, organizar y compartir el contenido multimedia.
              <br />
              4. Después de hacer clic en Crear sala, tu perfil estará
              habilitado como anfitrión y tus salas se verán reflejadas en la
              sección <span className="font-bold">Mis salas</span>.
            </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 items-center">
          <h2 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal p-8 whitespace-nowrap ">
            Completa la información
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <h3 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap w-72">
                Categoria de la sala
              </h3>
              <select
                {...register("categoria")}
                placeholder="Categoria"
                id="categoria"
                className="mt-2 p-2 w-[17rem] border rounded origin-bottom "
              >
                <option value="">Selecciona una categoria</option>
                <option value="Reunion">Reunion</option>
                <option value="Clase programada">Clase programada</option>
                <option value="Clase paga">Clase paga</option>
              </select>
              {errors.categoria && (
                <span className="text-red-500">{errors.categoria.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap w-72">
                Descripcion
              </h3>
              <textarea
                {...register("descripcion")}
                className="mt-2 p-2 w-[17rem] border rounded"
                placeholder="Descripcion"
              ></textarea>
              {errors.descripcion && (
                <span className="text-red-500">
                  {errors.descripcion.message}
                </span>
              )}
              <span className="text-gray-500">
                {errors.descripcion
                  ? `${50 - (errors.descripcion.value || "").length}/50`
                  : "0/50"}
              </span>
            </div>
          </div>

          <div className="p-8">
            <button
              type="submit"
              className="bg-primary text-base text-white py-2 px-4 rounded-full w-[16rem] hover:bg-primary-100 p-2 mt-4"
            >
              Crear Sala
            </button>
          </div>
        </div>

        {/* Modal de felicitaciones */}
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            showModal ? "block" : "hidden"
          }`}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

          {isLoading ? (
            <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
          ) : (
            <div className="flex flex-col  bg-white p-4 rounded-md z-10">
              <div className="flex flex-row  items-center justify-between">
                <Image src={Logo} className="w-16 h-16" alt="Logo MateSpeak" />
                {showModal && (
                  <AiOutlineCloseCircle
                    onClick={openModal}
                    className=" w-10 h-10 text-red-700 hover:cursor-pointer"
                  />
                )}
              </div>

              <div>
                <p className="font-bold text-emerald-500 text-center p-5 text-lg">
                  Felicitaciones! tu sala fue creada con éxito
                </p>
                <p className="font-bold">Informacion de tu sala:</p>
                <p>Creador: {listRooms.user?.name}</p>
                <p className="font-bold">Link principal:</p>
                <Link legacyBehavior href={`${listRooms.links?.gui}`}>
                  <a className="underline">Con este link puedes manipular tu sala</a>
                </Link>

                <p className="font-bold">Link invitacion:</p>
                <Link legacyBehavior href={`${listRooms.links?.guest_join}`}>
                  <a className="underline">Con este link puede invitar a quien desees</a>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* {isError && <BiErrorCircle className="w-10 h-10  text-pink-700" />}  */}
      </form>
    </>
  );
}
