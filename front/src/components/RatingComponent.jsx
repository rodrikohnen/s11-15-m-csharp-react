import Image from "next/image";
import { RoomRating } from "./RoomRating";
import appRating from "../assets/pictures/appRatingIllustration.svg";

export const RatingComponent = () => {
  return (
    <>
      <div className=" bg-gray-300 rounded-full w-40 h-40 flex items-center justify-center mt-12">
        <Image
          src={appRating}
          alt="Rating Illustration"
        />
      </div>
      <div className=" px-12 mt-8">
        <p className="text-center font-normal text-base">
          ¿Cómo fue tu experiencia con la sala
          <span className="font-medium"> Conversaciones laborales</span>?
        </p>
      </div>
      <RoomRating />
    </>
  );
};
