"use client";
import { useRouter } from "next/navigation";
import { Mountain } from "./svg/Svgs";

export const ThanksRatingComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <>
      <div className=" bg-gray-300 rounded-full w-40 h-40 flex items-center justify-center mt-12">
        <Mountain />
      </div>
      <div className=" mt-8 w-full">
        <h3 className="text-center font-semibold text-xl mt-12">
          ¡Gracias por tu tiempo!
        </h3>
        <p className="font-normal text-sm text-center mt-4 w-full">
          Tu opinión puede ayudar a otras personas.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white absolute top-[600px] bg-primary">
        Continuar
      </button>
    </>
  );
};
