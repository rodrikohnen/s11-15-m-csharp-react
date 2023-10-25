import { PerfilDefault, UsusariosSala } from "./svg/Svgs";
import { LenguajeSala } from "./svg/Svgs";
import { Start } from "./svg/Svgs";
import { Medalla } from "./svg/Svgs"; // Cambia el orden de importación

export default function CardEnVivo() {
  return (
    <span
      className="max-w-xs w-[324px] h-[108px] text-sm border shadow-xl rounded-lg overflow-hidden transform hover:scale-95 transition-transform cursor-pointer"
      href="#"
    >
      <div className="px-3 mx-3 mt-2 mb-2">
        <div className="flex justify-between">
          <h1 className="mb-2 font-medium text-secondary">
            Conversación laboral
          </h1>
          <div className="flex flex-row">
            <Medalla />
          </div>
        </div>
        <div className="flex flex-row">
          <PerfilDefault />
          <div className="flex flex-col ml-3">
            <p className="text-negromate">Nombre Usuario</p>
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2">
                <Start />
                <Start />
                <Start />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 text-accent">
          <div className="flex flex-row">
            <LenguajeSala />
            <p>EN</p>
          </div>
          <div className="flex flex-row">
            <UsusariosSala />
            <p>12</p>
          </div>
        </div>
      </div>
    </span>
  );
}
