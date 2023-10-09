"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";
import { useForm, Controller } from "react-hook-form";

const LoginSchema = object({
  correo: string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  contrasena: string("Your password must be a string.", [
    minLength(8, "Please enter your password."),
    maxLength(15, "Your password must have 8 characters or more."),
  ]),
});

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({ resolver: valibotResolver(LoginSchema) });

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <span className="flex flex-col items-center justify-center">
      <form
        className="flex flex-col items-center max-full mb-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <Controller
            name="correo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                placeholder="Correo electronico"
                className="border border-zinc-800 h-[2.5rem] w-[20rem] m-3 rounded-sm"
                {...field}
              />
            )}
          />
          {errors.correo && <p>{errors.correo.message}</p>}
          <Controller
            name="contrasena"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                placeholder="Contraseña"
                className="border border-zinc-800 w-[20rem] h-[2.5rem] m-3 rounded-sm"
                type="password"
                {...field}
              />
            )}
          />
          {errors.contrasena && <p>{errors.contrasena.message}</p>}
        </div>
        <a className="text-sm text-sky-500" href="">
          ¿Olvidaste tu contraseña?
        </a>
        <button
          type="submit"
          className="border border-zinc-800 rounded-xl h-[2rem] w-[20rem] mt-[6.5rem]"
        >
          Iniciar sesión
        </button>
      </form>
    </span>
  );
}
