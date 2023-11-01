import Image from "next/image";
import Banner from "@/assets/pictures/portadaPerfil.jpg";
import { MedallaWhite } from "@/components/svg/Svgs";
import FormPerfil from "@/components/FormPerfil";
import DatosPerfil from "@/components/miPerfil/DatosPerfil";
import avatar from "../../assets/icons/avatar.png";
export default function MiPerfil() {
  return (
    <main className="mainContainer p-0 m-0 items-center">
      <Image
        src={Banner}
        className="lg:h-52 h-[106px]"
        alt="banner"
      />
      <div className="flex flex-row relative bottom-24 pl-5 font-bold justify-start items-center gap-[1rem]  text-black ">
        <div className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px]">
          <Image
            src={avatar}
            alt="avatar"
            className="w-full h-full object-contain rounded-full border-2  border-white"
          />
        </div>
        <DatosPerfil />
        <MedallaWhite />
      </div>
      <article>
        <FormPerfil />
      </article>
    </main>
  );
}
