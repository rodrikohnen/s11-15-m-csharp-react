export default function NavBar() {
  return (
    <div
      className="flex flex-row mt-4 justify-around border-black  border-b-[1.5px] pb-3
    "
    >
      <h2 className=" p-2">LOGO</h2>
      <div className="flex flex-row">
        <button className="rounded-full px-4 py-2 text-sm	 min-w-min sm:text-base">
          Registrarme
        </button>
        <button className="rounded-full text-white	text-sm	 px-4 py-2 bg-gray-600	 min-w-fit sm:text-base">
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
}
