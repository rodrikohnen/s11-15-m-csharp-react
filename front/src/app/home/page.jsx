import CardEnVivo from "@/components/CardEnVIvo";
import CardGrupos from "@/components/CardGrupo";
import SwiperHome from "@/components/Swiper.jsx";
import { LiveCard } from "../rooms/page";
import { HomeGreeting } from "@/components/HomeGreeting";

export default function HomeUser() {
  /*   const cardsData = [1, 2, 3, 4];
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Buenos días 🌤️";
  } else if (currentHour >= 12 && currentHour < 22) {
    greeting = "Buenas tardes 🌄";
  } else {
    greeting = "Buenas noches 🌙";
  } */

  return (
    <main className="p-4 sm:p-20">
      {/* Reduzco el espacio en dispositivos pequeños */}
      <div className="flex flex-col mt-4 sm:flex-row sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-8">
        <HomeGreeting />
        <span className="text-sm sm:flex items-center mt-4 sm-mt-0">
          <input
            type="text"
            placeholder="Search"
            className="border border-zinc-400  mb-4 sm:w-72 sm:h-8 rounded-sm"
          />
        </span>
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
