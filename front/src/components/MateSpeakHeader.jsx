import Image from "next/image";
import LogoWhite from "../assets/logos/LogoMateSpeakWhite.png";

export const MateSpeakHeader = () => {
  return (
    <Image
      src={LogoWhite}
      alt="Logo Mate Speak"
      width={77}
    />
  );
};
