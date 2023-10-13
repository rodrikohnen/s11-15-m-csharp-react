import CardEnVivo from "@/components/CardEnVIvo";
import CardMisGrupos from "@/components/CardMisGrupos";
import Link from "next/link";

export default function HomeUser() {
  const cardsData = [1, 2, 3, 4];
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Buenos días 🌤️";
  } else if (currentHour >= 12 && currentHour < 22) {
    greeting = "Buenas tardes 🌄";
  } else {
    greeting = "Buenas noches 🌙";
  }

  return (
    <main className="flex-col">
      <div className="text-3xl flex justify-start flex-col mt-12  ml-4">
        <h1 className="mb-4">{greeting}</h1>
        <span className="flex flex-row justify-start items-start text-sm">
          <input type="text" placeholder="Search" className="border border-zinc-400 mb-8 w-[17rem] h-[2rem] rounded-sm" />
        </span>
        <h1>Mis grupos</h1>
        <span className="flex flex-col justify-start items-start ">
          <CardMisGrupos/>
        </span>
        <h1>En vivo</h1>
        <span className="flex flex-col justify-start items-start ">
          {cardsData.map((item, index) => (
            <CardEnVivo key={index} />
          ))}
        </span>
      </div>
    </main>
  );
}
