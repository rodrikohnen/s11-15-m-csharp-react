"use client";
import { useState } from "react";
import Image from "next/image";
import { RoomRating } from "./RoomRating";
import appRating from "../assets/pictures/appRatingIllustration.svg";
import { RatingAppForm } from "./RatingAppForm";
import { useRouter } from "next/navigation";

export const RatingComponent = () => {
  const router = useRouter();
  const [ratingIsSet, setRatingIsSet] = useState(false);
  const [isRatingLocked, setIsRatingLocked] = useState(false);
  const [formValues, setFormValues] = useState({
    rating: 0,
    comprension: false,
    nivel: false,
    recursos: false,
    duracion: false,
    temario: false,
    otroCheck: false,
    otroValue: "",
  });

  const handleChange = (index) => {
    if (!isRatingLocked) {
      setFormValues({ ...formValues, rating: index + 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
    setFormValues(formValues);
    router.push("/teacherratings");
  };

  const handleRatingLock = (e) => {
    e.preventDefault();
    setRatingIsSet(true);
    setIsRatingLocked(true);
  };

  return (
    <form
      className="lg:bg-secondary lg:bg-opacity-20 lg:w-full lg:rounded-lg lg:h-[488px] lg:flex lg:items-center"
      onSubmit={handleSubmit}>
      <article className="w-full flex flex-col items-center lg:w-[50%] ">
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
        <RoomRating
          formValues={formValues}
          handleChange={handleChange}
          isRatingLocked={isRatingLocked}
          ratingIsSet={ratingIsSet}
          handleRatingLock={handleRatingLock}
        />
      </article>
      <article className="lg:w-[50%] px-8">
        {ratingIsSet && (
          <RatingAppForm
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}
      </article>
    </form>
  );
};
