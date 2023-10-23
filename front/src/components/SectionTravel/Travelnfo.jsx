import TravelImg from '@/assets/pictures/landing-1.jpg'
import Image from 'next/image'
import styled from "@/app/Home.module.css";
export default function Travelnfo() {
  return (
    <>
      <div className={`${styled.travelInfo}`}>
        <Image className='sm:w-96 sm:h-96 w-72 h-72 rounded-full' src={TravelImg}/>
        <div className={`${styled.travelSubInfo}`}>
          <p>
            Comienza tu viaje lingüístico con Mate Speak, se parte de nuestra
            comunidad global y experimenta una forma emocionante y efectiva de
            aprender un nuevo idioma.
          </p>
          <div className={`${styled.divButton}`}>Registrarse</div>
        </div>
      </div>
    </>
  );
}