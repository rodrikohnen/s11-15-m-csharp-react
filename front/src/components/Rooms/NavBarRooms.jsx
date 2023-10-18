import Link from "next/link";
import { ArrowBack } from "../svg/Svgs";


export default function NavBarRooms() {
  return (
   
         <div className="py-2 border-b-[black] border-b border-solid">
         <Link 
         href="/"
        className="flex items-center text-[18px] font-medium">
          
      <ArrowBack />
      <h2>Mis Salas</h2>
      </Link>

    </div>
  );
}