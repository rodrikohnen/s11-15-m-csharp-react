"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/context/authUser";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import Link from "next/link";
=======
import useLogin from "./../hooks/useLogin";
>>>>>>> 69f4169 (add:Clogin-connection)

const { handleLogin } = useLogin();
const LoginSchema = object({
  correo: string([
    minLength(1, "Ingresa tu email."),
    email("El email tiene un formato inválido"),
  ]),
  contraseña: string("Debes ingresar caracteres validos.", [
    minLength(1, "Ingresa tu contraseña"),
<<<<<<< HEAD
    minLength(8, "Tu contraseña debe contener 8 caracteres."),
=======
    minLength(4, "Tu contraseña debe contener 4 caracteres."),
>>>>>>> 4222815 (add: cambios en el log in)
    maxLength(15, "Tu contraseña no puede contener mas de 15 caracteres."),
  ]),
});

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: valibotResolver(LoginSchema),
  });

  const onSubmit = (e) => {
<<<<<<< HEAD
    /*  e.preventDefault(); */
    login();
    router.push("/user");
=======
>>>>>>> 69f4169 (add:Clogin-connection)
    console.log("Formulario enviado:", e);
    handleLogin(e);
    // login();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="flex flex-col w-full justify-start items-start gap-6 lg:justify-center lg:items-center lg:w-[328px] lg:mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Correo electrónico"
          type="email"
          className="input"
          {...register("correo")}
        />
        {errors.correo && <p className="errormsj">{errors.correo?.message}</p>}
        <input
          placeholder="Contraseña"
          type="text"
          className="input"
          {...register("contraseña")}
        />
        {errors.contraseña && (
          <p className="errormsj">{errors.contraseña?.message}</p>
        )}
<<<<<<< HEAD
        <aside className="flex flex-col justify-start w-full mb-4">
          <h1 className="text-xl text-black font-extrabold text-left mb-2 lg:text-[26px]">
            Inicia Sesión
          </h1>
          <span className="text-sm text-black flex gap-4 font-semibold">
            <h2 className="text-gray-400 font-light">
              ¿Has olvidado tu contraseña?
            </h2>
            <Link href={"/"}>Recuperala</Link>
          </span>
        </aside>
        <button
          type="submit"
          className="registerBtn">
=======

        <button type="submit" className="registerBtn">
>>>>>>> 69f4169 (add:Clogin-connection)
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
