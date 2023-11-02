import Image from "next/image";
import pinkStar from "../assets/icons/StarPink.svg";
import starWhite from "../assets/icons/StarWhiteBorderPink.svg";

export const UserRating = ({ rating }) => {
  const renderImagenes = () => {
    const images = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        images.push(
          <Image
            key={i}
            src={pinkStar}
            alt="Black"
          />
        );
      } else {
        images.push(
          <Image
            key={i}
            src={starWhite}
            alt="White"
          />
        );
      }
    }
    return images;
  };

  return <article className="flex gap-1">{renderImagenes()}</article>;
};
