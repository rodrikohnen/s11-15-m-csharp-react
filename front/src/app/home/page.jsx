import CardEnVivo from "@/components/CardEnVIvo";
import Link from "next/link";

export default function HomeUser() {

  const cardsData = [1, 2, 3, 4];

  return (
    <main className="flex-col">
      <div className="text-3xl flex justify-start flex-col mt-12 mb-24 ml-4">
        <h1>¡Hola!</h1>
      <span className="flex flex-col justify-center items-center text-center">
      <Link href="" className=" bg-gray-400 m-2 rounded-full text-white text-center	text-base	w-[15rem] h-[2.5rem]">
        Quiero ser tutor
      </Link>
      <Link href="" className=" bg-gray-400 m-2 rounded-full text-white text-center	text-base	w-[15rem] h-[2.5rem]">
        Quiero ser mentor
      </Link>
      </span>
      </div> 
      <div className="text-3xl flex justify-start flex-col mt-12 mb-24 ml-4">
      <div >
        <h1>En vivo</h1>
        <span className="flex flex-col justify-start items-start ">
          {cardsData.map((item, index) => (
            <CardEnVivo key={index} />
          ))}
        </span>
      </div>
      </div> 
    </main>
  );
}