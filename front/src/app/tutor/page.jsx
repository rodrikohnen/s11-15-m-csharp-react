import FormTutor from "@/components/FormTutor";
import Link from "next/link";

export default function Login() {
  return (
    <main className="mainContainer items-center ">
      <div className="text-2xl flex justify-start flex-col mt-12 mb-12 ml-4 self-start">
        <h1 className="text-normal lg:text-2xl mb-4 text-xl ">
          Bienvenido al perfil de tutor
        </h1>
        <p className="lg:w-7/12 lg:text-lg text-[#545454] text-sm">
          Completa tu información para habilitar tu perfil como Mentor y
          compartir clases programadas.
        </p>
        <p className="lg:w-7/12 mt-4 lg:text-lg text-[#545454] text-sm">
          IMPORTANTE. Para crear un perfil como Mentor es necesario poseer nivel
          de Idiomas C1 o C2.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <FormTutor />
      </div>
    </main>
  );
}
