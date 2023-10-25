"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import CardGrupos from "./CardGrupo";

export default function SwiperHome() {
  return (
    <div>
      <Swiper
        className="max-w-xs w-[18rem] h-full p-8"
        loop={true}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade" // Establece el efecto de desvanecimiento
        fadeEffect={{ crossFade: true }}
        slidesPerView={1} // Configuración para mostrar solo una imagen a la vez
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide className="ml-4 bg-secondary-20 w-[18rem] h-[6.5rem] shadow-xl  rounded-lg hover:scale-95 transition-transform cursor-pointer">
          <CardGrupos />
        </SwiperSlide>
        <SwiperSlide>
          <CardGrupos />
        </SwiperSlide>
        <SwiperSlide className="ml-4 max-w-xs w-[18rem] h-[6.5rem] border border-black rounded-lg overflow-hidden transform hover:scale-95 transition-transform cursor-pointer">
          <CardGrupos />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
