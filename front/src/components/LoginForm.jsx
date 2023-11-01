"use client";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";
=======
import useLogin from "./../hooks/useLogin";
>>>>>>> 69f4169 (add:Clogin-connection)

const { handleLogin } = useLogin();
=======
import { API_URL, AUTENTICACION_URL } from "@/libs/routes";
import { toast } from "react-toastify";

import { HttpRequest } from "@/helpers/httpRequest";
<<<<<<< HEAD
>>>>>>> 3876c4a (coneccion realizada)
=======
import useLoginStore from "@/context/loginStore";
>>>>>>> fa762d0 (add: connection to server)
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
  const loginState = useLoginStore();
  const { setLoginInfo } = useLoginStore();
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
    const req = HttpRequest();

    const url = `${API_URL}${AUTENTICACION_URL}`;
    const options = {
      headers: { "content-type": "application/json" },

      body: {
        correo: e.correo,
        password: e.contraseña,
      },
    };
    req.post(url, options).then((res) => {
      console.log(res, "respuesta");
      if (res.token) {
        setLoginInfo({
          token: res.token,
          usuario: {
            nombre: res.usuario?.nombre,
            apellido: res.usuario?.apellido,
          },
          isAuth: true,
        });
        toast(`Bienvenido ${res.usuario?.nombre}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/");
      } else {
        console.log("error");
      }
    });
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

<<<<<<< HEAD
        <button type="submit" className="registerBtn">
>>>>>>> 69f4169 (add:Clogin-connection)
=======
        <button
          type="submit"
          className="registerBtn">
>>>>>>> bc73c91 (Add: Toastify in Login and Tutor Form)
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
