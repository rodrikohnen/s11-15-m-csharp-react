"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";
import { useForm } from "react-hook-form";

const LoginSchema = object({
  correo: string("Debes ingresar caracteres validos.", [
    minLength(1, "Ingresa tu email."),
    email("The email address is badly formatted."),
  ]),
  contraseña: string("Debes ingresar caracteres validos.", [
    minLength(1, "Ingresa tu contraseña"),
    minLength(8, "Tu contraseña debe contener 8 caracteres."),
    maxLength(15, "Tu contraseña no puede contener mas de 15 caracteres."),
  ]),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: valibotResolver(LoginSchema)});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", e);
  };

  return (
    <span className="flex flex-col items-center justify-center ">
      <form
        className="flex flex-col items-center max-full mb-20 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-xl font-bold">Correo</label>
        <input
          type="email"
          className="rounded-xl border border-primary-50"
          {...register("correo")}
        />
        {errors.correo && (
          <p className="text-pink-700">{errors.correo?.message}</p>
        )}
        <label className="text-xl font-bold">Contraseña</label>
        <input
          type="password"
          className="rounded-xl border border-primary-50"
          {...register("contraseña")}
        />
        {errors.contraseña && (
          <p className="text-pink-700">{errors.contraseña?.message}</p>
        )}
        <a className="text-sm text-sky-500">¿Olvidaste tu contraseña?</a>
        <button
          type="submit"
          className="border border-zinc-800 rounded-xl h-[2rem] w-[20rem] mt-60"
        >
          Iniciar sesión
        </button>
      </form>
    </span>
  );
}
