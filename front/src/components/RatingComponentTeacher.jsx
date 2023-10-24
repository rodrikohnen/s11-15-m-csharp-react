"use client";
import { TeacherRating } from "./TeacherRating";
import Image from "next/image";
import appRating from "../assets/pictures/appRatingIllustration.svg";
import ratingComment from "../assets/pictures/ratingCommentIllustration.svg";
import ratingCommentDesktop from "../assets/pictures/ratingCommentIllustrationDesktop.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RatingTeacherForm } from "./RatingTeacherForm";

export const RatingComponentTeacher = () => {
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
    comentario: "",
  });
  const [view, setView] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/thanksratings");
    console.log("submit", formValues);
  };
  return (
    <>
      <form
        className="lg:bg-primary lg:bg-opacity-20 lg:w-full lg:rounded-lg lg:h-[488px] lg:flex lg:items-center"
        onSubmit={handleSubmit}>
        <article className="w-full flex flex-col items-center lg:w-[50%] ">
          <div className="w-40 h-40 lg:w-80 lg:h-320 flex items-center justify-center mt-12">
            {view === 1 ? (
              <Image
                src={appRating}
                alt="Rating Illustration"
              />
            ) : (
              <>
                <Image
                  src={ratingComment}
                  alt="Rating Illustration"
                  className="lg:hidden block md:hidden sm:hidden"
                />
                <Image
                  src={ratingCommentDesktop}
                  alt="Rating Illustration"
                  className="hidden lg:block"
                />
              </>
            )}
          </div>
          <div className=" px-12 mt-8 lg:hidden">
            <p className="text-center font-normal text-base">
              ¿Cómo fue tu experiencia con el
              <span className="font-medium"> Profesor</span>?
            </p>
          </div>
          <TeacherRating
            view={view}
            setView={setView}
            setFormValues={setFormValues}
            formValues={formValues}
            isRatingLocked={isRatingLocked}
            setIsRatingLocked={setIsRatingLocked}
            ratingIsSet={ratingIsSet}
            setRatingIsSet={setRatingIsSet}
          />
        </article>
        <article>
          {ratingIsSet && (
            <RatingTeacherForm
              formValues={formValues}
              setFormValues={setFormValues}
              view={view}
              setView={setView}
            />
          )}
        </article>
      </form>
    </>
  );
};
