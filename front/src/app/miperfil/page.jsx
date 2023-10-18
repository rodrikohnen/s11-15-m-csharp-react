import Image from "next/image"
import Banner from "../../../public/banner.png"
import Perfil from "../../../public/perfil.jpeg"
import { MedallaWhite } from "@/components/svg/Svgs"
import FormPerfil from "@/components/FormPerfil"

export default function MiPerfil() {
  return(
    <>
      <div className="mb-[-6rem]">
        <Image src={Banner} alt="sdasd" className="max-w-[32rem}"/>
        <Image src={Perfil} alt="" className="relative max-w-[5rem] top-4 rounded-full border border-white translate-x-6 -translate-y-20" />
        <div className="relative flex justify-between e w-[13rem] ml-8 mt-6 text-white translate-x-20 -translate-y-40">
          <div className="flex flex-col">
            <h1>Nombre de usuario</h1>
            <p>Chile</p>
          </div>
          <MedallaWhite />
        </div>
      </div>
      <span className="mt-[-10rem]">
        <FormPerfil/>
      </span>
    </>
  )
}