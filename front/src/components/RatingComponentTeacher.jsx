"use client";
import { TeacherRating } from "./TeacherRating";
import Image from "next/image";
import appRating from "../assets/pictures/appRatingIllustration.svg";
import ratingComment from "../assets/pictures/ratingCommentIllustration.svg";
import { useState } from "react";

export const RatingComponentTeacher = () => {
  const [view, setView] = useState(1);
  return (
    <>
      <div className=" bg-gray-300 rounded-full w-40 h-40 flex items-center justify-center mt-12">
        {view === 1 ? (
          <Image
            src={appRating}
            alt="Rating Illustration"
          />
        ) : (
          <Image
            src={ratingComment}
            alt="Rating Illustration"
          />
        )}
      </div>
      <div className=" px-12 mt-8">
        <p className="text-center font-normal text-base">
          ¿Cómo fue tu experiencia con el
          <span className="font-medium"> Profesor</span>?
        </p>
      </div>
      <TeacherRating
        view={view}
        setView={setView}
      />
    </>
  );
};
