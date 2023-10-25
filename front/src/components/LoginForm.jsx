"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/context/authUser";
import { useRouter } from "next/navigation";

const LoginSchema = object({
  correo: string("Debes ingresar caracteres validos.", [
    minLength(1, "Ingresa tu email."),
    email("The email address is badly formatted."),
  ]),
  contraseña: string("Debes ingresar caracteres validos.", [
    minLength(1, "Ingresa tu contraseña"),
    minLength(6, "Tu contraseña debe contener 6 caracteres."),
    maxLength(15, "Tu contraseña no puede contener mas de 15 caracteres."),
  ]),
});

export default function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.isLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: valibotResolver(LoginSchema) });

  const onSubmit = (e) => {
    /*  e.preventDefault(); */
    login();
    router.push("/home");
    console.log("Formulario enviado:", e);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="flex flex-col w-full justify-start items-start gap-6 lg:justify-center lg:items-center lg:w-[328px] lg:mt-8"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Correo electrónico"
          type="email"
          className="input"
          {...register("correo")}
        />
        {errors.correo && <p className="errormsj">{errors.correo?.message}</p>}
        <input
          placeholder="Contraseña"
          type="password"
          className="input"
          {...register("contraseña")}
        />
        {errors.contraseña && (
          <p className="errormsj">{errors.contraseña?.message}</p>
        )}

        <button
          type="submit"
          className="registerBtn">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
