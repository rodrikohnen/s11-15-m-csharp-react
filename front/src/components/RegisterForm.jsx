"use client";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  email,
  minLength,
  maxLength,
  object,
  string,
  ValiError,
} from "valibot";

const RegisterSchema = object(
  {
    name: string([
      minLength(2, "Tu nombre debe tener un mínimo de dos caracteres"),
    ]),
    lastname: string([
      minLength(1, "Tu apellido debe tener un mínimo de un caracteres"),
    ]),
    username: string([
      minLength(1, "Tu username debe tener un mínimo de 1 caracteres"),
      maxLength(10, "Tu username debe tener un máximo de 10 caracteres"),
    ]),
    email: string([
      minLength(1, "Debes ingresar un e-mail."),
      email("Tu e-mail cuenta con un formato incorrecto."),
    ]),
    password: string([
      minLength(1, "Ingresa tu contraseña"),
      minLength(6, "Tu password debe contener de 6 caracteres"),
    ]),
    confirmpassword: string([
      minLength(1, "Confirma tu contraseña"),
      minLength(6, "Tu contraseña debe contener 6 caracteres"),
    ]),
    city: string([minLength(2, "Por favor ingresa tu ciudad")]),
    nativelanguage: string([minLength(2, "Elije un idioma del listado")]),
    languagetolearn: string([minLength(2, "Elije un idioma del listado")]),
    level: string([minLength(2, "Debes seleccionar un nivel del listado")]),
  },
  [
    (input) => {
      if (input.password !== input.confirmpassword) {
        throw new ValiError([
          {
            reason: "string",
            validation: "custom",
            origin: "value",
            message: "Las contraseñas no son iguales.",
            input: input.confirmpassword,
            path: [
              {
                schema: "object",
                input: input.confirmpassword,
                key: "confirmpassword",
                value: input.confirmpassword,
              },
            ],
          },
        ]);
      }
      return input;
    },
  ]
);

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: valibotResolver(RegisterSchema) });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col w-full justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Nombre</label>
      <input
        name="name"
        type="text"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("name")}
      />
      {errors.name && (
        <p className="text-xs text-red-600	mb-4">{errors.name.message}</p>
      )}
      <label htmlFor="lastname">Apellido</label>
      <input
        name="lastname"
        type="text"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("lastname")}
      />
      {errors.lastname && (
        <p className="text-xs text-red-600	mb-4">{errors.lastname.message}</p>
      )}
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("username")}
      />
      {errors.username && (
        <p className="text-xs text-red-600	mb-4">{errors.username.message}</p>
      )}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("email")}
      />
      {errors.email && (
        <p className="text-xs text-red-600	mb-4">{errors.email.message}</p>
      )}
      <label htmlFor="city">Ciudad</label>
      <input
        name="city"
        type="text"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("city")}
      />
      {errors.city && (
        <p className="text-xs text-red-600	mb-4">{errors.city.message}</p>
      )}
      <label htmlFor="nativelanguage"> Idioma Nativo</label>
      <select
        {...register("nativelanguage")}
        name="nativelanguage"
        className="w-11/12 border-solid border-2 border-slate-500"
      >
        <option value="">-</option>
        <option value="english">Inglés</option>
        <option value="spanish">Español</option>
      </select>
      {errors.nativelanguage && (
        <p className="text-xs text-red-600	mb-4">
          {errors.nativelanguage.message}
        </p>
      )}
      <label htmlFor="languagetolearn">Lenguaje a aprender</label>
      <select
        {...register("languagetolearn")}
        name="languagetolearn"
        className="w-11/12 border-solid border-2 border-slate-500"
      >
        <option value="">-</option>
        <option value="english">Inglés</option>
        <option value="spanish">Español</option>
      </select>
      {errors.languagetolearn && (
        <p className="text-xs text-red-600	mb-4">
          {errors.languagetolearn.message}
        </p>
      )}
      <label htmlFor="level">Nivel</label>
      <select
        {...register("level")}
        name="level"
        className="w-11/12 border-solid border-2 border-slate-500"
      >
        <option value="-">-</option>
        <option value="begginer">Principiante</option>
        <option value="intermediate">Intermedio</option>
        <option value="advanced">Avanzado</option>
      </select>
      {errors.level && (
        <p className="text-xs text-red-600	mb-4">{errors.level.message}</p>
      )}
      <label htmlFor="password" className="w-11/12">
        Contraseña
      </label>
      <input
        name="password"
        type="password"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("password")}
      />
      {errors.password && (
        <p className="text-xs text-red-600 mb-4">{errors.password.message}</p>
      )}
      <label className="w-11/12">Confirmar contraseña</label>
      <input
        type="password"
        className="w-11/12 border-solid border-2 border-slate-500"
        {...register("confirmpassword")}
      />
      {errors.confirmpassword && (
        <p className="text-xs text-red-600 mb-4">
          {errors.confirmpassword.message}
        </p>
      )}
      <button
        className="bg-red-500 w-11/12 rounded"
        type="submit"
        value="Registrarme"
      >
        Registrarme
      </button>
    </form>
  );
};
