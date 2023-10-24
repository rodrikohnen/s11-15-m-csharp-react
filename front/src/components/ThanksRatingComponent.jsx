"use client";
import { useRouter } from "next/navigation";
import Thanks from "../assets/pictures/ThanksIllustration.svg";
import Image from "next/image";

export const ThanksRatingComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <section className=" lg:bg-primary lg:bg-opacity-20 lg:w-full lg:rounded-lg lg:h-[488px] lg:flex lg:items-center">
      <article className="w-full flex flex-col items-center lg:w-[50%] ">
        <div className="w-40 h-40 lg:w-80 lg:h-320 flex items-center justify-center mt-12">
          <Image
            src={Thanks}
            alt="Thank You"
          />
        </div>
      </article>
      <div className=" mt-8 lg:mt-4 w-full lg:w-[50%]">
        <h3 className="text-center font-semibold text-xl mt-12 lg:mt-6 lg:text-[26px] lg:font-semibold">
          ¡Gracias por tu tiempo!
        </h3>
        <p className="font-normal text-sm text-center mt-4 lg:mt-2 w-full">
          Tu opinión puede ayudar a otras personas.
        </p>
        <div className="flex mt-4 justify-center flex-col items-center">
          <button
            onClick={handleClick}
            className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white absolute top-[600px] bg-secondary disabled:bg-gray-300 lg:static lg:mt-8">
            Continuar
          </button>
        </div>
      </div>
    </section>
  );
};
