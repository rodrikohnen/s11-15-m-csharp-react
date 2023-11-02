import Link from "next/link";
import Image from "next/image";
import teacherIllustration from "../assets/pictures/userProfesoresIllustration.svg";
import mentorIllustration from "../assets/pictures/userMentoresIllustration.svg";

export const UserType = () => {
  return (
    <section className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:w-[942px] lg:gap-8 lg:m-auto">
      <article className="flex flex-col items-center w-52 mt-8 lg:flex-row lg:gap-4 lg:w-[455px] lg:h-40 lg:justify-end">
        <div className="w-24 h-24 rounded-full mb-4 lg:w-40">
          <Image
            src={teacherIllustration}
            objectFit="contain"
            alt="teacher illustration"
          />
        </div>
        <div className="flex flex-col items-center lg:w-60">
          <h2 className="text-sm font-semibold leading-5 text-center mb-4">
            Profesores
          </h2>
          <p className="leading-4 text-xs text-center mb-4">
            Acude a un profesor para acceder a clases programadas y recibe una
            guía personalizada.
          </p>
          <Link
            href="/user/profesores"
            className=" w-[147px] rounded-full bg-secondary text-white text-sm py-[6px] px-4 cursor-pointer mt-2 text-center">
            Buscar Profesores
          </Link>
        </div>
      </article>
      <article className="flex flex-col items-center w-52 mt-8 lg:flex-row lg:gap-4 lg:w-[455px] lg:h-40 lg:justify-end">
        <div className="w-24 h-24 rounded-full mb-4 lg:w-40">
          <Image
            src={mentorIllustration}
            objectFit="contain"
            alt="mentor illustration"
          />
        </div>
        <div className="flex flex-col items-center lg:w-60">
          <h2 className="text-sm font-semibold leading-5 text-center mb-4">
            Mentores
          </h2>
          <p className="leading-4 text-xs text-center mb-4">
            Acude a un profesor para acceder a clases programadas y recibe una
            guía personalizada.
          </p>
          <Link
            href="/user/mentores"
            className="w-[147px] rounded-full bg-secondary text-white text-sm py-[6px] px-4 cursor-pointer mt-2 text-center">
            Buscar Mentores
          </Link>
        </div>
      </article>
    </section>
  );
};
