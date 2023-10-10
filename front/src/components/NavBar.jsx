import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3 w-full">
      <Link href="/">
        <h2 className=" p-2">LOGO</h2>
      </Link>
      <div className="flex flex-row justify-around">
        <Link
          className="rounded-full px-4 py-2 text-sm	 min-w-min hover:bg-gray-400 sm:text-base mx-1"
          href="/signup">
          Registrarme
        </Link>
        <Link
          className="hover:bg-gray-800 rounded-full text-white	text-sm	 px-4 py-2 bg-gray-600 min-w-fit sm:text-base "
          href="/login">
          Iniciar sesión
        </Link>
      </div>
    </header>
  );
}
