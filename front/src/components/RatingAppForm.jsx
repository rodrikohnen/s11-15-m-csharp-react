"use client";

export const RatingAppForm = ({ formValues, setFormValues }) => {
  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: checked,
      otroValue: value,
    }));
    console.log(formValues);
  };

  return (
    <div className="mt-4 w-full flex flex-col gap-2">
      <h3 className="text-center font-medium mb-4">Selecciona los motivos</h3>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="comprension"
          checked={formValues.comprension}
          onChange={handleChange}
        />
        <label htmlFor="comprension">
          {formValues.rating > 3
            ? "Fácil de comprender"
            : "No es fácil de comprender"}
        </label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="nivel"
          checked={formValues.nivel}
          onChange={handleChange}
        />
        <label htmlFor="nivel">
          {formValues.rating > 3
            ? "Acorde al nivel de idioma"
            : "No está acorde al nivel de idioma"}
        </label>
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
        <label htmlFor="temario">
          {formValues.rating > 3
            ? "Temario actualizado y relevante"
            : "Temario desactualizado"}
        </label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="otroCheck"
          checked={formValues.otroCheck}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Otro"
          className="w-full border border-solid border-gray-400 px-2 outline-none"
          onChange={handleChange}
          disabled={formValues.otroCheck === false}></input>
      </div>
      <button
        type="submit"
        className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white  bg-primary disabled:bg-gray-300 self-center mt-4">
        Continuar
      </button>
    </div>
  );
};
