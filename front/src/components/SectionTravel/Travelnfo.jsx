import { CircleTravel } from "../svg/Svgs";
import styled from "@/app/Home.module.css";
export default function Travelnfo() {
  return (
    <>
      <div className={`${styled.travelInfo}`}>
        <CircleTravel />
        <div className={`${styled.travelSubInfo}`}>
          <p>
            Comienza tu viaje lingüístico con Mate Speak, se parte de nuestra
            comunidad global y experimenta una forma emocionante y efectiva de
            aprender un nuevo idioma.
          </p>
          <div className={`${styled.divButton}`}>Unknown</div>
        </div>
      </div>
    </>
  );
}