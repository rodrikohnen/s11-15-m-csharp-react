"use client";
import Image from "next/image";
import starblack from "../assets/icons/starblack.png";
import starwhite from "../assets/icons/starwhite.png";
import { useState } from "react";
import { RatingTeacherForm } from "./RatingTeacherForm";
import { useRouter } from "next/navigation";

export const TeacherRating = () => {
  const router = useRouter();

  const [ratingIsSet, setRatingIsSet] = useState(false);
  const [isRatingLocked, setIsRatingLocked] = useState(false);
  const [formValues, setFormValues] = useState({
    rating: 0,
    comunicacion: false,
    interaccion: false,
    retroalimentacion: false,
    respuesta: false,
    otroCheck: false,
    otroValue: "",
  });

  const handleChange = (index) => {
    if (!isRatingLocked) {
      setFormValues({ ...formValues, rating: index + 1 });
    }
  };

  const renderImages = () => {
    let images = [];
    for (let i = 0; i < 5; i++) {
      if (i < formValues.rating) {
        images.push(
          <div
            className="relative"
            key={i}>
            <input
              onChange={() => handleChange(i)}
              type="radio"
              name="rating"
              className="ratingRadioBtn"
              disabled={isRatingLocked}
            />
            <Image
              src={starblack}
              alt="Black"
              width={28}
              height={28}
              className="relative"
            />
          </div>
        );
      } else {
        images.push(
          <div
            className="relative"
            key={i}>
            <input
              onChange={() => handleChange(i)}
              className="ratingRadioBtn "
              type="radio"
              name="rating"
              disabled={isRatingLocked}
            />
            <Image
              src={starwhite}
              alt="White"
              width={28}
              height={28}
              className="relative z-0"
            />
          </div>
        );
      }
    }
    return images;
  };

  const handleRatingLock = (e) => {
    e.preventDefault();
    setRatingIsSet(true);
    setIsRatingLocked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
  };

  return (
    <>
      <form
        className="flex mt-4 justify-center flex-col items-center"
        onSubmit={handleSubmit}>
        <aside className="flex gap-8 mt-4 justify-center">
          {renderImages()}
        </aside>
        <article>
          {ratingIsSet && (
            <RatingTeacherForm
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}
        </article>
        {ratingIsSet === false && (
          <button
            onClick={handleRatingLock}
            disabled={formValues.rating > 0 ? false : true}
            className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white absolute top-[600px] bg-primary disabled:bg-gray-300">
            Continuar
          </button>
        )}
      </form>
    </>
  );
};
