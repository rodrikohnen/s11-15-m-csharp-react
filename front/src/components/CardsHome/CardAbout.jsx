import React from "react";
import styled from "@/app/Home.module.css";
import AboutInfo from "./AboutInfo";
import Image from 'next/image'
import Perfil1 from '@/assets/pictures/Perfil-masc-2.jpg'
import Perfil2 from '@/assets/pictures/Perfil-masc-5.jpg'
import Perfil3 from '@/assets/pictures/Perfil-fem-4.jpg'

const cardFeedbacks = [
  {
    id: 1,
    name: "Mariano Lopez",
    avatar: <Image src={Perfil1} className="rounded-full" alt="Perfil masculino"/>,
    about: "Excelente app aprendi muchisimo",
    rating: 4,
  },
  {
    id: 2,
    name: "Carlos Aguirre",
    avatar: <Image src={Perfil2} className="rounded-full" alt="Perfil masculino"/>,
    about: "La mejor app para aprender idiomas",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Gomez",
    avatar: <Image src={Perfil3} className="rounded-full" alt="Perfil femenino"/>,
    about: "Aprendi muchisimo en las salas",
    rating: 3,
  },
];

export default function About() {
  return (
    <>
      <div className="bg-secondary py-[5rem]">
        <h1 className={`${styled.titleChoice}`}>¡Nuestras reseñas!</h1>
        <div className={`${styled.aboutResponsive}`}>
          {cardFeedbacks.map((feedback) => (
            <>
              <AboutInfo
                key={feedback.id}
                feedbackName={feedback.name}
                feedbackAvatar={feedback.avatar}
                feedbackAbout={feedback.about}
                feedbackRating={feedback.rating}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}