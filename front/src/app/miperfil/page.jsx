import Image from "next/image";
import Banner from "@/assets/pictures/portadaPerfil.jpg";
import Perfil from "@/assets/pictures/Perfil-fem-3.jpg";
import { MedallaWhite } from "@/components/svg/Svgs";
import FormPerfil from "@/components/FormPerfil";

export default function MiPerfil() {
  return (
    <>
      <Image src={Banner} className="h-52" />
      <div className="flex flex-row relative bottom-44 pl-5  font-bold justify-start items-center gap-[1rem]  text-black ">
        <Image
          src={Perfil}
          className="sm:w-52 sm:h-52 w-32 h-32 rounded-full border-2  border-white"
        />
        <div className="flex flex-col text-xl">
          <h1>Nombre de usuario</h1>
          <p>Chile</p>
        </div>

        <MedallaWhite  />
      </div>

      <span className="mt-[-10rem]">
        <FormPerfil />
      </span>
    </>
  );
}
