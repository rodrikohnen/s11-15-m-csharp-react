import FormTutor from "@/components/FormTutor";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex-col ">
      <div className="text-2xl flex justify-start flex-col mt-12 mb-12 ml-4">
        <h1>Bienvenido al perfil de tutor</h1>
        <Link className="text-sm text-zinc-500" href="/signup">
        Completa tu información para habilitar tu perfil como profesor y compartir clases programadas.
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <FormTutor />
      </div>
    </main>
  );
}
