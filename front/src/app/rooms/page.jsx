"use client"

import CardMoreRooms from "@/components/Rooms/CardMoreRooms";
import { CircleSalas } from "@/components/svg/Svgs";

export default function Rooms() {
  return (
    <>
      <main className="mainContainer">
        <section className="flex items-center sm:text-start text-center justify-center p-4 gap-8">
          <div className="flex items-center sm:items-start gap-4">
            <p className="sm:text-lg text-lg text-primary-50">
              En esta sección puedes ver las salas que creaste
            </p>

          </div>
          <CircleSalas />
        </section>
        
        <section>
       
        <CardMoreRooms />
        </section>
     
       
    
      </main>
    </>
  );
}
