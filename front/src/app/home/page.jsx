import CardEnVivo from "@/components/CardEnVIvo";
import Link from "next/link";

export default function HomeUser() {
  return (
    <main className="flex-col">
      <div className="text-3xl flex justify-start flex-col mt-12 mb-24 ml-4">
        <h1>¡Hola!</h1>
      <span className="flex flex-col justify-center items-center text-center">
      <Link href="" className=" bg-gray-400 m-2 rounded-full text-white text-center	text-base	w-[15rem] h-[2rem]">
        Quiero ser tutor
      </Link>
      <Link href="" className=" bg-gray-400 m-2 rounded-full text-white text-center	text-base	w-[15rem] h-[2rem]">
        Quiero ser mentor
      </Link>
      </span>
      </div> 
      <di className="text-3xl flex justify-start flex-col mt-12 mb-24 ml-4"v>
        <h1>En vivo</h1>
        <CardEnVivo/>
      </di>
    </main>
  );
}