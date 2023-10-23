import LoginForm from "@/components/LoginForm";
import { MateSpeakHeader } from "@/components/MateSpeakHeader";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <header
        className="w-full h-[60px] lg:h-20 bg-primary flex 
           justify-center items-center">
        <MateSpeakHeader />
      </header>
      <main className="mainContainer">
        <aside className="flex flex-col justify-start w-full mb-4">
          <h1 className="text-xl text-black font-extrabold text-left mb-2 lg:text-[26px]">
            Inicia Sesión
          </h1>
          <span className="text-sm text-black flex gap-4 font-semibold">
            <h2 className="text-gray-400 font-light">
              ¿Aún no tienes cuenta?{" "}
            </h2>
            <Link href={"/signup"}>Registrate</Link>
          </span>
        </aside>
        <LoginForm />
      </main>
    </>
  );
}
