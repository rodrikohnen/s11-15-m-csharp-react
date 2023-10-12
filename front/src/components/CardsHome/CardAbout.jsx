import React from "react";
import styled from "@/app/Home.module.css";
import AboutInfo from "./AboutInfo";

const cardFeedbacks = [
  {
    id: 1,
    name: "Mariano Lopez",
    about: "Excelente app aprendi muchisimo",
    rating: 4,
  },
  {
    id: 2,
    name: "Carlos Aguirre",
    about: "La mejor app para aprender idiomas",
    rating: 5,
  },
  {
    id: 3,
    name: "Estefania Gomez",
    about: "Aprendi muchisimo en las salas",
    rating: 3,
  },
];

export default function About() {
  return (
    <>
      <div>
        <h1 className={`${styled.titleChoice}`}>¡Nuestras reseñas!</h1>
        <div className={`${styled.aboutResponsive}`}>
          {cardFeedbacks.map((feedback) => (
            <>
              <AboutInfo
                key={feedback.id}
                feedbackAbout={feedback.about}
                feedbackName={feedback.name}
                feedbackRating={feedback.rating}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}