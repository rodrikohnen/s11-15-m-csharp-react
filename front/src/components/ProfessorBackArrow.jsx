import Link from "next/link";
import { WhiteArrowBack } from "./WhiteArrowBack";

export const ProfessorBackArrow = () => {
  return (
    <div className="py-2">
      <Link
        href="/user"
        className="flex items-center text-[18px] font-medium">
        <WhiteArrowBack />
        <h2 className="text-lg text-white font-medium">Usuarios</h2>
      </Link>
    </div>
  );
};
