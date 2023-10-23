import Image from "next/image";
import Perfil1 from '@/assets/pictures/Perfil-fem-1.jpg'
import Perfil2 from '@/assets/pictures/Perfil-masc-1.jpg'
import Perfil3 from '@/assets/pictures/Perfil-fem-2.jpg'
import ChoiceInfo from "./ChoiceInfo";

const cardChoices = [
  {
    id: 1,
    logo: <Image src={Perfil1} className="rounded-full" alt="Perfil femenino"  />,
    title: "Reuniones",
    description: "Únete a las salas para hablar y aprender con otras personas.",
  },
  {
    id: 2,
    logo: <Image src={Perfil2} className="rounded-full" alt="Perfil masculino"/>,
    title: "Profesores",
    description: "Clases con profesores expertos según tu nivel",
  },
  {
    id: 3,
    logo: <Image src={Perfil3} className="rounded-full" alt="Perfil femenino" />,
    title: "Mentores",
    description: "Sé mentor o recibe ayuda de otros.",
  },
];

export default function CardChoices() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-items-center items-center justify-center gap-[1rem]">
        {cardChoices.map((choice) => (
          <ChoiceInfo
            key={choice.id}
            choiceLogo={choice.logo}
            choiceTitle={choice.title}
            choiceDescription={choice.description}
          />
        ))}
      </div>
    </>
  );
}
