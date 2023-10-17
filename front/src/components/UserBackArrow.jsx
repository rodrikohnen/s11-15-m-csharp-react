import Image from "next/image";
import backArrow from "../assets/icons/back-arrow.png";
import Link from "next/link";

export const UserBackArrow = () => {
  return (
    <div className="py-2 border-b-[black] border-b border-solid">
      <Link
        href="/home"
        className="flex items-center text-[18px] font-medium">
        <Image
          src={backArrow}
          alt="back arrow"
        />
        <h2>Usuarios</h2>
      </Link>
    </div>
  );
};
