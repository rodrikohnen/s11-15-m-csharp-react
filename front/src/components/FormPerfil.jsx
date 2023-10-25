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
          <div className="flex flex-col gap-5 pt-10">
          <button className="bg-secondary px-16 py-1  rounded-full text-white">Editar perfil</button>
          <button className="border-2 border-secondary hover:bg-gray-300 rounded-full text-secondary">Guardar cambios</button>
          </div>
        </form>
    </>
  )
}