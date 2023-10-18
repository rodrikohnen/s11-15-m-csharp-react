"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { object, string } from 'valibot';
import { useRouter } from 'next/navigation';

const schema = object({
  categoria: string('Este campo es obligatorio'),
  descripcion: string('Este campo es obligatorio'),
});

export default function CreateRooms() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: valibotResolver(schema),
  });
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setShowModal(true);

    // Redirigir automáticamente después de 3 segundos (ajusta el tiempo según tus preferencias)
    setTimeout(() => {
      setShowModal(false);
      router.push('/rooms');
    }, 3000);
  };

  const onSubmit = (data) => {
    console.log('Sala creada', data);
    openModal();
  };

  return (
    <>
      <div className="component w-[324px] border rounded-lg shadow-md flex items-center">
        <div className="inline-flex flex-col items-center gap-4 p-3 relative bg-white rounded-4">
          <div className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap">
            <h1>Instrucciones para el anfitrión</h1>
          </div>

          <h2 className="text-black text-xs sm:text-xs font-bold tracking-normal leading-normal w-72">
            Los usuarios que puedan traer contenido positivo a las salas de Mate Speak son bienvenidos para aplicar como anfitriones.
          </h2>
          <p className="text-xs sm:text-xs font-normal text-3e3e3e tracking-normal leading-normal w-72 h-172">
            <span className="text-3e3e3e text-10 font-normal tracking-normal">
              1. La sala permite reunir a un gran número de compañeros de idioma para practicar el lenguaje hablado mediante interacciones diarias. En paralelo puedes mejorar tus habilidades en el idioma de tu interés.
              <br />
              2. Puedes abrir una Sala de diferentes temas, generando un ambiente de comunidad empática.
              <br />
              3. Una vez seas anfitrión puedes administrar tu sala. Tus responsabilidades incluyen: designar moderadores, cumplir con los tiempos de transmisión acordados, administrar los usuarios que entren a las sala, organizar y compartir el contenido multimedia.
              <br />
              4. Después de hacer clic en Crear sala, tu perfil estará habilitado como anfitrión y tus salas se verán reflejadas en la sección <span className="font-bold">Mis salas</span>.
            </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 items-center">
          <h2 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal p-8 whitespace-nowrap ">
            Completa la información
          </h2>

   <div className="flex flex-col gap-8">
  <div className="flex flex-col">
    <h3 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap w-72">
      Categoria de la sala
    </h3>
    <select
      {...register('categoria', { required: 'Este campo es obligatorio' })}
      placeholder="Categoria"
      id="categoria"
      className="mt-2 p-2 w-[17rem] border rounded origin-bottom "
    >
      <option value="">Selecciona una categoria</option>
      <option value="Reunion">Reunion</option>
      <option value="Clase programada">Clase programada</option>
      <option value="Clase paga">Clase paga</option>
    </select>
    {errors.categoria && (
      <span className="text-red-500">
        {errors.categoria.message}
      </span>
    )}
  </div>

  <div className="flex flex-col">
    <h3 className="font-bold text-black text-sm sm:text-sm tracking-normal leading-normal whitespace-nowrap w-72">
      Descripcion
    </h3>
    <textarea
      {...register('descripcion', {
        required: 'Este campo es obligatorio',
        maxLength: {
          value: 50,
          message: 'La descripción no puede tener más de 50 caracteres',
        },
      })}
      className="mt-2 p-2 w-[17rem] border rounded"
      placeholder="Descripcion"
    ></textarea>
    {errors.descripcion && <span className="text-red-500">{errors.descripcion.message}</span>}
    <span className="text-gray-500">
      {errors.descripcion ? `${50 - errors.descripcion.value.length}/50` : '0/50'}
    </span>
  </div>
</div>



          <div className="p-8">
            <button
              type="submit"
              className="bg-primary text-base text-white py-2 px-4 rounded-full w-[16rem] hover:bg-primary-100 p-2 mt-4"
            >
              Crear Sala
            </button>
          </div>
        </div>

        {/* Modal de felicitaciones */}
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${showModal ? '' : 'hidden'}`}>
          <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
          <div className="bg-white p-4 rounded-md z-10">
            <p>Felicitaciones! tu sala fue creada con éxito</p>
          </div>
        </div>
      </form>
    </>
  );
}







        
    
