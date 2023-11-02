"use client";
import useLoginStore from "@/context/loginStore";

export default function HomeGreeting() {
  const loginState = useLoginStore((state) => state.usuario);
  console.log(loginState);
  return (
    <h1 className="text-negromate text-3xl font-bold">
      Hola {loginState?.nombre}!
    </h1>
  );
};
