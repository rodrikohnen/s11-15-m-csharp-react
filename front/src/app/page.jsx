import CardChoices from "@/components/CardsHome/CardChoices";
import { CircleHome } from "@/components/svg/Svgs";

export default function Home() {
  return (
    <>
      <main className="space-y-[5rem]">
        <section className="flex flex-col sm:flex-row sm:text-start text-center items-center justify-center p-[1rem] gap-[2rem]">
          <div className="flex flex-col items-center sm:items-start gap-[1rem]">
            <h1 className="sm:text-4xl text-2xl font-bold">
              ¡Domina un nuevo idioma con Mate Speak!
            </h1>
            <p className="sm:text-xl text-lg text-primary-50">
              Comienza hablar el idioma que amas de manera efectiva.
            </p>
            <div className="flex items-center justify-center shadow-xl text-white w-36 h-10 bg-primary-50 rounded-full">
              Unknown
            </div>
          </div>

          <CircleHome />
        </section>
        <section>
          <h1 className="text-center text-4xl font-bold">
            ¿Por qué usar Mate Speak?
          </h1>
          <div>
            <CardChoices />
          </div>
        </section>
      </main>
    </>
  );
}
