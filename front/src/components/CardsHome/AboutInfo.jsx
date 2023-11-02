import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { RiStarSLine } from "react-icons/ri";
import styled from "@/app/Home.module.css";

export default function AboutInfo({
  feedbackName,
  feedbackAvatar,
  feedbackAbout,
  feedbackRating,
}) {
  return (
    <>
      <div className={`${styled.aboutName}`}>
        <div className={`${styled.aboutSubName}`}>
          <span className="flex w-32 h-24 ">{feedbackAvatar}</span>
          <h1 className="text-center">{feedbackName}</h1>
        </div>
        
        <BiSolidQuoteAltLeft className="relative right-2" />
        <article className={`${styled.aboutArticle}`}>{feedbackAbout}</article>
        <BiSolidQuoteAltRight className="relative left-36 bottom-3" />

        <p className={`${styled.aboutRating}`}>
          <RiStarSLine className="w-12 h-9 text-orange-300" /> {feedbackRating}
        </p>
      </div>
    </>
  );
}