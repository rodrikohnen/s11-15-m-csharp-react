import { CircleChoices } from "../svg/Svgs";
import ChoiceInfo from "./ChoiceInfo";

const cardChoices = [
  {
    id: 1,
    logo: <CircleChoices />,
    title: "Reuniones",
    description: "Únete a las salas para hablar y aprender con otras personas.",
  },
  {
    id: 2,
    logo: <CircleChoices />,
    title: "Profesores",
    description: "Clases con profesores expertos según tu nivel",
  },
  {
    id: 3,
    logo: <CircleChoices />,
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
