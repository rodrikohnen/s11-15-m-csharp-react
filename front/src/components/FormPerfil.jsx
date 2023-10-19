"use client"

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, maxLength, email } from "valibot";

const schema = object({
  username: string("Este campo es obligatorio"),
  email: string("Este campo es obligatorio"),
  password: string("Este campo es obligatorio"),
});

export default function FormPerfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: valibotResolver(schema) });

  const onSubmit = (e) => {
    /*  e.preventDefault(); */
    login();
    router.push("/user");
    console.log("Formulario enviado:", e);
  };

  return(
    <>
        <form className="flex flex-col items-center max-w-100 gap-6 mb-[10rem]">
          <input type="text" className="border-b-2 border-black w-[17rem]" placeholder="User Name"/>
          <input type="text" className="border-b-2 border-black w-[17rem]" placeholder="Email"/>
          <input type="password" className="border-b-2 border-black w-[17rem]" placeholder="Password"/>
          <input type="number" className="border-b-2 border-black w-[17rem]" placeholder="Telefono"/>
          <input type="text" className="border-b-2 border-black w-[17rem]" placeholder="Pais"/>
          <button className="bg-primary-50 w-[8rem] rounded-full text-white">Editar Perfil</button>
          <button className="border border-primary-100 w-[8rem] rounded-full text-primary-50">Guardar Perfil</button>
        </form>
    </>
  )
}