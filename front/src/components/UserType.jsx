import Link from "next/link";

export const UserType = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <article className="flex flex-col items-center w-52 mt-8">
        <div className="bg-slate-300 w-24 h-24 rounded-full mb-4"></div>
        <h2 className="text-sm font-semibold leading-5 text-center mb-4">
          Profesores
        </h2>
        <p className="leading-4 text-xs text-center mb-4">
          Acude a un profesor para acceder a clases programadas y recibe una
          guía personalizada.
        </p>
        <Link
          href="/user/profesores"
          className=" pt-1.5 pb-[5px] px-4 bg-gray-500 rounded-2xl text-white mb-4 text-sm">
          Buscar Profesores
        </Link>
      </article>
      <article className="flex flex-col items-center mt-8 w-52">
        <div className="bg-slate-300 w-24 h-24 rounded-full mb-4"></div>
        <h2 className="text-sm font-semibold leading-5 text-center mb-4">
          Mentores
        </h2>
        <p className="leading-4 text-xs text-center mb-4">
          Acude a un profesor para acceder a clases programadas y recibe una
          guía personalizada.
        </p>
        <Link
          href="/user/mentores"
          className=" pt-1.5 pb-[5px] px-4 bg-gray-500 rounded-2xl text-white mb-4 text-sm">
          Buscar Mentores
        </Link>
      </article>
    </section>
  );
};
