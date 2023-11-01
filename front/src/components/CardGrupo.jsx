"use client";
import useLoginStore from "@/context/loginStore";
import { PerfilDefault, UsusariosSala } from "./svg/Svgs";
import { Medalla } from "./svg/Svgs";
import { LenguajeSala } from "./svg/Svgs";

export default function CardGrupos() {
  const loginState = useLoginStore((state) => state.usuario);
  return (
    <span
      className="max-w-xs w-[18rem] h-[6.5rem] bg-secondary-20 border shadow-xl rounded-lg text-sm  overflow-hidden transform hover:scale-95 transition-transform cursor-pointer"
      href="#">
      <div className="px-3 mx-3 mt-2 mb-2">
        <div className="flex justify-between">
          <h1 className="mb-2  text-secondary font-bold">
            Conversación laboral
          </h1>
          <Medalla />
        </div>
        <div className="flex flex-row">
          <PerfilDefault />
          <p className="m-2">
            {loginState?.nombre} {loginState?.apellido}
          </p>
        </div>
        <div className="flex justify-end gap-4 text-accent">
          <div className="flex flex-row">
            <LenguajeSala />
            <p>EN</p>
          </div>
          <UsusariosSala />
          <p>12</p>
        </div>
      </div>
    </span>
  );
}
