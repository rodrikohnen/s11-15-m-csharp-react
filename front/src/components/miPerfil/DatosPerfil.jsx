"use client";
import useLoginStore from "@/context/loginStore";
export default function DatosPerfil() {
  const loginState = useLoginStore((state) => state.usuario);

  console.log(loginState);
  return (
    <div className="flex flex-col text-xl">
      <h1>
        {loginState?.nombre} {loginState?.apellido}
      </h1>
    </div>
  );
}
