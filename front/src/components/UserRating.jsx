import Image from "next/image";
import starblack from "../assets/icons/starblack.png";
import starwhite from "../assets/icons/starwhite.png";

export const UserRating = ({ rating }) => {
  const renderImagenes = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        images.push(
          <Image
            key={i}
            src={starblack}
            alt="Black"
          />
        );
      } else {
        images.push(
          <Image
            key={i}
            src={starwhite}
            alt="White"
          />
        );
      }
    }
    return images;
  };

  return <article className="flex gap-1">{renderImagenes()}</article>;
};
