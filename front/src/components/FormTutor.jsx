"use client";

import { useForm } from "react-hook-form";
import { SubirArchivo } from "./svg/Svgs";
import { useState } from "react";
import { toast } from "react-toastify";

export default function FormTutor() {
  const [fileTitle, setFileTitle] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileTitle(selectedFile.name);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    toast(
      `Tu certificado fue enviado con éxito. Tu petición será evaluada por nuestro equipo y recibirás una respuesta en las próximas 72hs.`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="rounded-2xl bg-zinc-400 w-[20rem] border">
        <div className="flex flex-col justify-center items-center mb-4">
          <select
            {...register("idioma")}
            placeholder="Idioma"
            id="idioma"
            className="mt-2 p-2 w-[17rem] border rounded">
            <option value="">Selecciona un idioma</option>
            <option value="ingles">Inglés</option>
            <option value="espanol">Español</option>
          </select>
          {errors.idioma && (
            <span className="errormsj">{errors.idioma.message}</span>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mb-4">
          <select
            {...register("nivel", { required: "Este campo es obligatorio" })}
            placeholder="Nivel de ingles"
            id="nivel"
            className="mt-1 p-2 w-[17rem] border rounded">
            <option value="">Selecciona un nivel</option>
            <option value="C1">Avanzado C1</option>
            <option value="C2">Avanzado C2</option>
          </select>
          {errors.nivel && (
            <span className="errormsj">{errors.nivel.message}</span>
          )}
        </div>

        <div className="flex justify-center items-center mb-4">
          <input
            {...register("certificado", {
              required: "Este campo es obligatorio",
            })}
            id="certificado"
            type="file"
            placeholder="Certificafo (EF SET)"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="certificado"
            className="flex flex-row justify-between items-center mt-1 p-2 w-[17rem] border rounded bg-white text-black cursor-pointer">
            {fileTitle !== ""
              ? `Nombre del archivo: ${fileTitle}`
              : "Subir Certificado (EF SET)"}
            <SubirArchivo />
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center mt-16 mb-16">
        <button
          type="submit"
          className="bg-primary text-base text-white py-2 px-4 rounded-full w-[16rem] hover:bg-primary-100">
          Cargar mi perfil de Tutor
        </button>
      </div>
    </form>
  );
}
