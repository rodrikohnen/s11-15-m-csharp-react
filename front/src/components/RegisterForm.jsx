"use client";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input
        name="name"
        type="text"
        className="w-96"
        {...register("name")}
      />
      <label htmlFor="lastname">Apellido</label>
      <input
        name="lastname"
        type="text"
        className="w-96"
        {...register("lastname")}
      />
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        className="w-96"
        {...register("username")}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        className="w-96"
        {...register("email")}
      />
      <label htmlFor="city">Ciudad</label>
      <input
        name="city"
        type="text"
        className="w-96"
        {...register("city")}
      />
      <label htmlFor="nativelanguage"> Idioma Nativo</label>
      <select
        {...register("nativelanguage")}
        name="nativelanguage"
        className="w-96">
        <option value="-">-</option>
        <option value="english">Inglés</option>
        <option value="spanish">Español</option>
      </select>
      <label htmlFor="languagetolearn">Lenguaje a aprender</label>

      <select
        {...register("languagetolearn")}
        name="languagetolearn"
        className="w-96">
        <option value="-">-</option>
        <option value="english">Inglés</option>
        <option value="spanish">Español</option>
      </select>
      <label htmlFor="level">Nivel</label>
      <select
        {...register("level")}
        name="level"
        className="w-96">
        <option value="-">-</option>
        <option value="begginer">Principiante</option>
        <option value="intermediate">Intermedio</option>
        <option value="advanced">Avanzado</option>
      </select>
      <label
        htmlFor="password"
        className="w-96">
        Contraseña
      </label>
      <input
        name="password"
        type="password"
        className="w-96"
        {...register("pasword")}
      />
      <button
        type="submit"
        value="Registrarme">
        Registrarme
      </button>
    </form>
  );
};
