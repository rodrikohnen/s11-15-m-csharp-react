import { useForm } from "react-hook-form";
import Link from "next/link";

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUser({
      ...user,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    setFormView(formView + 1);
  };

  return (
    <>
      <aside className="flex flex-col justify-start  w-full mb-4">
        <h1 className="text-xl text-black font-semibold text-left mb-2">
          Creá una cuenta
        </h1>
        <span className="text-sm text-black flex gap-4 font-semibold">
          <h2 className="text-gray-400 font-light">¿Ya tenés cuenta?</h2>
          <Link href={"/login"}>Inicia sesión</Link>
        </span>
      </aside>
      {formView === 1 && (
        <form
          className="flex flex-col w-full justify-start items-start gap-6"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <input
              placeholder="Nombres"
              name="name"
              type="text"
              className="input"
              {...register("name", {
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
            {errors.name && <p className="errormsj">{errors.name.message}</p>}
          </div>
          <div className="w-full">
            <input
              placeholder="Apellido"
              name="lastname"
              type="text"
              className="input"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Tu apellido debe tener un mínimo de dos caracteres",
                },
              })}
            />
            {errors.lastname && (
              <p className="errormsj">{errors.lastname.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              placeholder="Correo electrónico"
              name="email"
              type="email"
              className="input"
              {...register("email", {
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
            {errors.email && <p className="errormsj">{errors.email.message}</p>}
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
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/,
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

>>>>>>> bb63923 (Change: Validations Changes)
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
