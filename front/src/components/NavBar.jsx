export default function NavBar() {
  return (
    <div
      className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3 w-[24.5rem]">
      <h2 className=" p-2">LOGO</h2>
      <div className="flex flex-row">
        <a className="rounded-full px-4 py-2 text-sm	 min-w-min sm:text-base" href="/signup">
          Registrarme
        </a>
        <a className="rounded-full text-white	text-sm	 px-4 py-2 bg-gray-600 min-w-fit sm:text-base " href="/login">
          Iniciar Sesion
        </a>
      </div>
    </div>
  );
}
