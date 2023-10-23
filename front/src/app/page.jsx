import CardChoices from "@/components/CardsHome/CardChoices";
import TravelInfo from "@/components/SectionTravel/Travelnfo";
import About from "@/components/CardsHome/CardAbout";
import Image from 'next/image'
import bgHome from '@/assets/logos/bgHome.webp'

export default function Home() {
  return (
    <>
      <main className="space-y-[5rem]">
        <section className="flex flex-col sm:flex-row sm:text-start text-center items-center justify-center p-[1rem] gap-[2rem]">
          <div className="flex flex-col items-center sm:items-start gap-[1rem]">
            <h1 className="sm:text-2xl text-2xl font-bold">
              ¡Domina un nuevo idioma con Mate Speak!
            </h1>
            <p className="sm:text-lg text-md text-primary-50">
              Comienza hablar el idioma que amas de manera efectiva.
            </p>
            <div className="flex items-center justify-center shadow-xl text-white w-36 h-10 bg-secondary rounded-full">
              Registrarse
            </div>
          </div>

          <Image src={bgHome}/>
        </section>
        <section className="space-y-5">
          <h1 className="text-center text-2xl font-bold">
            ¿Por qué usar Mate Speak?
          </h1>
          <div>
            <CardChoices />
          </div>
        </section>
        <section className="flex justify-center p-[1rem]">
          <TravelInfo />
        </section>
        <section>
          <About />
        </section>
      </main>
    </>
  );
}
