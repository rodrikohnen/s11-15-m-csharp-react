"use client"

import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  object,
  string,
  minLength,
  maxLength,
  email,
} from "valibot";
import {
  useForm,
  Controller
} from "react-hook-form";

const LoginSchema = object({
  correo: string('Your email must be a string.', [
    minLength(1, 'Please enter your email.'),
    email('The email address is badly formatted.'),
  ]),
  contrasena: string('Your password must be a string.', [
    minLength(8, 'Please enter your password.'),
    maxLength(15, 'Your password must have 8 characters or more.'),
  ]),
});

export default function LoginForm() {
  const { control, handleSubmit, formState: { errors, isSubmitted  } } = useForm(
    {resolver: valibotResolver(LoginSchema),}
  );

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return(
    <>
    <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
      <div className='font-bold'>
        <h1>Mate Speak</h1>
      </div>
      <div className='flex flex-col'>
      <Controller
            name="correo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                placeholder='Correo'
                className='border border-red-500 w-60 m-1 rounded-md'
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
                placeholder='Contraseña'
                className='border border-red-500 w-60 m-1 rounded-md'
                type="password"
                {...field}
              />
            )}
          />
          {errors.contrasena && <p>{errors.contrasena.message}</p>}</div>
      <button type='submit' className='border border-red-500 rounded-md w-20'>
        Ingresar
      </button>
    </form>
    </>
  )
}