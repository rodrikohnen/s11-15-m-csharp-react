import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function NavBarRooms() {
  return (
    <div className="gap-4 py-4  bg-primary ">
      <Link href="/" className="flex items-center text-[18px] font-medium">
        <IoIosArrowBack className="ml-7 h-6 text-white" />
        <h2 className="ml-4 text-white">Mis Salas</h2>
      </Link>
    </div>
  );
}
