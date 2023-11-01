import SwiperHome from "@/components/Swiper.jsx";
import { LiveCard } from "../rooms/page";
import { HomeGreeting } from "@/components/HomeGreeting";

export default function HomeUser() {
  return (
    <main className="mainContainer p-4 sm:p-20">
      {/* Reduzco el espacio en dispositivos pequeños */}
      <div className="flex flex-col mt-4 sm:flex-row sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
        <HomeGreeting />
      </div>
      <div className="text-sm sm:flex items-center m-1 ">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:px-4 mt-4"
        />
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
        <LiveCard />
      </span>
    </main>
  );
}
