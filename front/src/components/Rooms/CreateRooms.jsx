"use client";
<<<<<<< HEAD
//sofi
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 49d8884 (add: dev-front + search branches)
=======
import { useCreateRoom } from "@/hooks/useCreateRoom";
>>>>>>> bc4e456 (fix: Improve logic for show the room)
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect, useContext } from "react";
>>>>>>> 21b2f58 (fix: custom context)
=======
import { useCreateRoom } from "@/hooks/useCreateRoom";
import React, { useState, useEffect } from "react";
>>>>>>> e4589f6 (Revert "Search")
import { useForm } from "react-hook-form";
import {
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import Logo from "@/assets/logos/LogoMateSpeakColor.png";
import Image from "next/image";
<<<<<<< HEAD
import Link from "next/link";
=======
import { useRouter } from "next/navigation";
import { CreateRoomContext } from "@/context/createRoom";
>>>>>>> b6b0af8 (add: changes for components)

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
      required: "Por favor seleccione una categoria",
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
      <div className="p-3 bg-white rounded-4">
        <div className="text-left">
          <h1 className="font-bold text-secondary text-2xl sm:text-2xl">
            Instrucciones para el anfitrión
          </h1>
          <h2 className="text-mateblack mt-6 text-xl sm:text-xl font-medium">
            Los usuarios que puedan traer contenido positivo a las salas de Mate
            Speak son bienvenidos para aplicar como anfitriones.
          </h2>
        </div>
        <div className="mt-20 space-y-6 md:space-y-0 md:space-x-12 md:flex">
          <div className="component p-6 bg-secondary-20 border rounded-lg flex flex-col w-full md:w-[261px]">
            <span className="text-accent items-left text-8xl font-bold tracking-normal mt-[-0.7em]">
              1.
            </span>
            <p className="text-sm sm:text-sm mt-5 mb-5 font-normal text-negromate">
              La sala permite reunir a un gran número de compañeros de idioma
              para practicar el lenguaje hablado mediante interacciones diarias.
              En paralelo puedes mejorar tus habilidades en el idioma de tu
              interés.
            </p>
          </div>

          <div className="component p-6 bg-primary-20 border rounded-lg flex flex-col w-full md:w-[261px]">
            <span className="text-accent items-left text-8xl font-bold tracking-normal mt-[-0.7em]">
              2.
            </span>
            <p className="text-sm sm:text-sm mt-5 mb-5 font-normal text-negromate">
              Puedes abrir una Sala de diferentes temas, generando un ambiente
              de comunidad empática.
            </p>
          </div>
          <div className="component p-6 bg-secondary-20 border rounded-lg flex flex-col w-full md:w-[261px]">
            <span className="text-accent items-left text-8xl font-bold tracking-normal mt-[-0.7em]">
              3.
            </span>
            <p className="text-sm sm:text-sm mt-5 mb-5 font-normal text-negromate">
              Una vez seas anfitrión puedes administrar tu sala. Tus
              responsabilidades incluyen: designar moderadores, cumplir con los
              tiempos de transmisión acordados, administrar los usuarios que
              entren a las sala, organizar y compartir el contenido multimedia.
            </p>
          </div>
          <div className="component p-6 bg-primary-20 border rounded-lg flex flex-col w-full md:w-[261px]">
            <span className="text-accent items-left text-8xl font-bold tracking-normal mt-[-0.7em]">
              4.
            </span>
            <p className="text-sm sm:text-sm mt-5 mb-5 font-normal text-negromate">
              Después de hacer clic en Crear sala, tu perfil estará habilitado
              como anfitrión y tus salas se verán reflejadas en la sección{" "}
              <span className="font-bold">Mis salas</span>.
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-3 flex flex-col mt-4 md:mt-10"
      >
        <h2 className="font-bold text-secondary text-2xl sm:text-2xl mb-4 text-left">
          Completa la información
        </h2>

        <div className=" ">
          <div className="md:ml-80 mt-5">
            <h3 className="text-base flex flex-col sm:text-base font-medium text-negromate">
              Categoria de la sala
            </h3>
            <div className="mt-4">
              <select
                {...register("categoria")}
                name="categoria"
                className="p-2 w-full md:w-[264px]  border rounded border-[#4F4F4F] "
              >
                <option className="text-[#4F4F4F]" value="">
                  Selecciona una categoria
                </option>
                <option value="Reunion">Reunion</option>
                <option value="Clase programada">Clase programada</option>
                <option value="Clase paga">Clase paga</option>
              </select>
            </div>
            {errors.categoria && (
              <span className="text-accent text-sm flex flex-col mt-1">
                {errors.categoria.message}
              </span>
            )}
          </div>

          <div className="md:ml-80 mt-5 border-[#4F4F4F]">
            <h3 className="text-base sm:text-base font-medium   text-negromate">
              Descripcion
            </h3>
            <textarea
              {...register("descripcion")}
              id="descripcion"
              className="p-2 w-full md:w-[540px] h-[129px] border border-[#4F4F4F] rounded mt-2"
              placeholder="Escribe aqui tu texto"
            ></textarea>
            {errors.descripcion && (
              <span className="text-accent text-sm flex flex-col mt-1 ">
                {errors.descripcion.message}
              </span>
            )}
            <span className="text-[#4F4F4F] flex flex-col ">
              {errors.descripcion
                ? `${50 - (errors.descripcion.value || "").length}/50`
                : "0/50"}
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-secondary text-base text-white py-2 px-4 rounded-full w-[16rem] hover:bg-[#3F1E6C] p-2"
          >
            Crear Sala
          </button>
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
