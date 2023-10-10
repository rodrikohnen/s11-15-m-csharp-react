"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string } from "valibot";

const schema = object({
  idioma: string("Este campo es obligatorio"),
  nivel: string("Este campo es obligatorio"),
  certificado: string("Este campo es obligatorio"),
});

export default function FormTutor() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: valibotResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="rounded-2xl bg-zinc-400 w-[20rem] border">
      <div className="flex flex-col justify-center items-center mb-4">
        <select {...register("idioma")} placeholder="Idioma" id="idioma" className="mt-2 p-2 w-[17rem] border rounded">
          <option value="">Selecciona un idioma</option>
          <option value="ingles">Inglés</option>
          <option value="espanol">Español</option>
        </select>
        {errors.idioma && <span className="text-red-500">{errors.idioma.message}</span>}
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <select
          {...register("nivel", { required: "Este campo es obligatorio" })}
          placeholder="Nivel de ingles"
          id="nivel"
          className="mt-1 p-2 w-[17rem] border rounded"
        >
          <option value="">Selecciona un nivel</option>
          <option value="Inicial">Inicial</option>
          <option value="Intermedio">intermedio</option>
        </select>
        {errors.nivel && <span className="text-red-500">{errors.nivel.message}</span>}
      </div>

      <div className="flex justify-center items-center mb-4">
        <input
          {...register("certificado", { required: "Este campo es obligatorio" })}
          id="certificado"
          type="file"
          placeholder="Certificafo (EF SET)"
          className="mt-1 p-2 w-[17rem] border rounded"
        />
        {errors.certificado && <span className="text-red-500">{errors.certificado.message}</span>}
      </div>
    </div>
    <div className="flex justify-center items-center mt-16 mb-16">
      <button type="submit" className="bg-primary text-base text-white py-2 px-4 rounded-full w-[16rem] hover:bg-primary-100">
      Cargar mi perfil de Tutor
      </button>
    </div>
    </form>
  );
};
