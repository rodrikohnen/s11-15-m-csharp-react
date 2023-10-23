import whiteArrowBack from "../assets/icons/backwhite-arrow.png";
import Image from "next/image";

export const WhiteArrowBack = () => {
  return (
    <Image
      src={whiteArrowBack}
      alt="go back"
      className="object-contain"
    />
  );
};
