import Link from "next/link";
import { useForm } from "react-hook-form";
import { API_URL, USUARIOS_URL } from "@/libs/routes";
import { HttpRequest } from "@/helpers/httpRequest";
import { useEffect } from "react";
import { useRegisterStore } from "@/context/registerStore";

<<<<<<< HEAD
<<<<<<< HEAD
import { email, minLength, object, string } from "valibot";
import Link from "next/link";

const RegisterSchema = object({
  name: string([
    minLength(2, "Tu nombre debe tener un mínimo de dos caracteres"),
  ]),
  lastname: string([
    minLength(1, "Tu apellido debe tener un mínimo de un caracteres"),
  ]),
  email: string([
    minLength(1, "Debes ingresar un e-mail."),
    email("Tu e-mail cuenta con un formato incorrecto."),
  ]),
  password: string([
    minLength(1, "Ingresa tu contraseña"),
    minLength(6, "Tu password debe contener de 6 caracteres"),
  ]),
});
=======
>>>>>>> bb63923 (Change: Validations Changes)
export const RegisterForm = ({ setFormView, formView, user, setUser }) => {
=======
export const RegisterForm = ({ setFormView, formView }) => {
>>>>>>> 0dc47e2 (Add: User Register Post)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

<<<<<<< HEAD
  const onSubmit = (user) => {
    setUser({
      ...user,
<<<<<<< HEAD
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
=======
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
>>>>>>> a4e841a (Change: Register Form Styles)
=======
  const user = useRegisterStore((state) => state.user);
  const { setUser } = useRegisterStore();

  const onSubmit = (data) => {
    const req = HttpRequest();

    const url = `${API_URL}${USUARIOS_URL}`;
    const options = {
      headers: { "content-type": "application/json" },
      body: {
        ...user,
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo,
        password: data.password,
        usuario1: data.usuario1,
      },
    };
    req.post(url, options).then((res) => {
      console.log(res);
      if (res.usuario) {
        setUser({
          ...user,
          idUsuario: res.usuario,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          password: data.password,
          usuario1: data.usuario1,
        });
        setFormView(formView + 1);

        console.log(user);
      }
>>>>>>> 0dc47e2 (Add: User Register Post)
    });
  };

  return (
    <>
      <aside className="flex flex-col justify-start w-full mb-4">
        <h1 className="text-xl text-black font-extrabold text-left mb-2 lg:text-[26px]">
          Creá una cuenta
        </h1>
        <span className="text-sm text-black flex gap-4 font-semibold">
          <h2 className="text-gray-400 font-light">¿Ya tenés cuenta?</h2>
          <Link href={"/login"}>Inicia sesión</Link>
        </span>
      </aside>
      {formView === 1 && (
        <form
          className="flex flex-col w-full justify-start items-start gap-6 lg:justify-center lg:items-center lg:w-[328px] lg:mt-8"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <input
              placeholder="Nombres"
              name="nombre"
              type="text"
              className="input"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Tu apellido debe tener un mínimo de dos caracteres",
                },
                minLength: {
                  value: 2,
                  message: "Tu nombre debe tener un mínimo de dos caracteres",
                },
              })}
            />
            {errors.nombre && (
              <p className="errormsj">{errors.nombre.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              placeholder="Apellido"
              name="apellido"
              type="text"
              className="input"
              {...register("apellido", {
                required: {
                  value: true,
                  message: "Tu apellido debe tener un mínimo de dos caracteres",
                },
              })}
            />
            {errors.apellido && (
              <p className="errormsj">{errors.apellido.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              placeholder="Correo electrónico"
              name="correo"
              type="email"
              className="input"
              {...register("correo", {
                required: {
                  value: true,
                  message: "El e-mail es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Tu e-mail cuenta con un formato incorreto",
                },
              })}
            />
            {errors.correo && (
              <p className="errormsj">{errors.correo.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              placeholder="username"
              name="usuario1"
              type="text"
              className="input"
              {...register("usuario1", {
                required: {
                  value: true,
                  message: "Debes ingresar un username",
                },
              })}
            />
            {errors.usuario1 && (
              <p className="errormsj">{errors.usuario1.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              placeholder="Contraseña"
              name="password"
              type="password"
              className="input"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                  message:
                    "*La contraseña debe contener al menos 1 número, una mayúscula y 6 caracteres",
                },
                validate: (value) => {
                  const confirmPasswordValue = getValues("confirmPassword");
                  if (confirmPasswordValue === value) {
                    return true;
                  } else {
                    return "Las contraseñas no coinciden";
                  }
                },
              })}
            />
            {errors.password && (
              <p className="errormsj">{errors.password.message}</p>
            )}
          </div>
<<<<<<< HEAD
=======
          <div className="w-full">
            <input
              placeholder="Confirmar Contraseña"
              name="confirmPassword"
              type="password"
              className="input"
              {...register("confirmPassword", {
                required: "Por favor, confirma tu contraseña",
                validate: (value) => {
                  const passwordValue = getValues("password");
                  if (passwordValue === value) {
                    return true;
                  } else {
                    return "Las contraseñas no coinciden";
                  }
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="errormsj">{errors.confirmPassword.message}</p>
            )}
          </div>
<<<<<<< HEAD

>>>>>>> bb63923 (Change: Validations Changes)
=======
>>>>>>> 0dc47e2 (Add: User Register Post)
          <input
            className="registerBtn"
            type="submit"
            value="Crear Cuenta"
          />
        </form>
      )}
    </>
  );
};
