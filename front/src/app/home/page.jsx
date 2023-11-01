import SwiperHome from "@/components/Swiper.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";
=======

import { LiveCard } from "../rooms/page";
>>>>>>> b6b0af8 (add: changes for components)
=======
import { LiveCard } from "../rooms/page";
<<<<<<< HEAD
import { HomeGreeting } from "@/components/HomeGreeting";
>>>>>>> a6024b4 (Change: Correcciones)
=======

import dynamic from "next/dynamic";

const CSRHomeGreeting = dynamic(() => import("@/components/HomeGreeting"), {
  ssr: false
})
>>>>>>> a71572a (fix: Improve dynamic render for client)

export default function HomeUser() {
  return (
    <main className="mainContainer p-4 sm:p-20">
      {/* Reduzco el espacio en dispositivos pequeños */}
      <div className="flex flex-col mt-4 sm:flex-row sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
<<<<<<< HEAD
        <CSRHomeGreeting />
        <span className="text-sm sm:flex items-center mt-4 sm-mt-0">
          <input
            type="text"
            placeholder="Search"
            className="border border-zinc-400  mb-4 sm:w-72 sm:h-8 rounded-sm"
          />
        </span>
=======
        <HomeGreeting />
      </div>
      <div className="text-sm sm:flex items-center m-1 ">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:px-4 mt-4"
        />
>>>>>>> d281a82 (add: styling to search bar in home)
      </div>
      <h1 className="mt-20 sm:mt-4 text-negromate text-xl font-bold">
        Mis grupos
      </h1>
      <span className="flex mt-4 sm:mt-10">
        <SwiperHome />
      </span>
      <h1 className="mt-20 sm:mt-10 text-negromate text-xl font-bold">
        En vivo
      </h1>
      <span className="flex flex-col mt-4 sm:flex-row sm:mt-6 gap-4 sm:justify-start">
        {cardsData.map((item, index) => (
          <CardEnVivo key={index} />
        ))}
      </span>
    </main>
  );
}
