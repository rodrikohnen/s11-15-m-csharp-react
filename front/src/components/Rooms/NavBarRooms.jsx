import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function NavBarRooms() {
  return (
    <div className="gap-4 py-4 border-b-[black] border-b border-solid">
      <Link href="/" className="flex items-center text-[18px] font-medium">
        <IoIosArrowBack className="ml-7 h-6" />
        <h2 className="ml-4">Mis Salas</h2>
      </Link>
    </div>
  );
}
