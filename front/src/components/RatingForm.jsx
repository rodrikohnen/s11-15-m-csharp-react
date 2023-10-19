"use client";
import { useState } from "react";

export const RatingForm = ({ rating }) => {
  const [formValues, setFormValues] = useState({
    rating,
    comprension: false,
    nivel: false,
    recursos: false,
    duracion: false,
    temario: false,
    /* otro: "", */
  });

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: checked,
      /* otro: value, */
    }));
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);
  };

  return (
    <form
      className="mt-4 w-full flex flex-col gap-2"
      onSubmit={handleSubmit}>
      <h3 className="text-center font-medium mb-4">Selecciona los motivos</h3>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="comprension"
          checked={formValues.comprension}
          onChange={handleChange}
        />
        <label htmlFor="comprension">Fácil de comprender</label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="nivel"
          checked={formValues.nivel}
          onChange={handleChange}
        />
        <label htmlFor="nivel">Acorde al nivel de idioma</label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="recursos"
          checked={formValues.recursos}
          onChange={handleChange}
        />
        <label htmlFor="recursos">Calidad de los recursos</label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="duracion"
          checked={formValues.duracion}
          onChange={handleChange}
        />
        <label htmlFor="duracion">Duración justa</label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="temario"
          checked={formValues.temario}
          onChange={handleChange}
        />
        <label htmlFor="temario">Temario actualizado y relevante</label>
      </div>
      {/*  <div className="checkboxRating">
        <input
          type="checkbox"
          name="otro"
          checked={formValues.otro}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Otro"
          className="w-full border border-solid border-gray-400 px-2"
          disabled={formValues.otro === ""}></input>
      </div> */}
      <button
        type="submit"
        className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white  bg-primary disabled:bg-gray-300 self-center mt-4">
        Continuar
      </button>
    </form>
  );
};
