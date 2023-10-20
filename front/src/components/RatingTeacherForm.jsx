"use client";

export const RatingTeacherForm = ({ formValues, setFormValues }) => {
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
          name="comunicacion"
          checked={formValues.comunicacion}
          onChange={handleChange}
        />
        <label htmlFor="comunicacion">
          {formValues.rating > 3
            ? "Claridad en la comunicación"
            : "No hay claridad en la comunicación"}
        </label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="interaccion"
          checked={formValues.interaccion}
          onChange={handleChange}
        />
        <label htmlFor="interaccion">
          {formValues.interaccion > 3
            ? "Interacciona con los estudiantes"
            : "No interacciona con los estudiantes"}
        </label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="retroalimentacion"
          checked={formValues.retroalimentacion}
          onChange={handleChange}
        />
        <label htmlFor="retroalimentacion">
          {formValues.retroalimentacion > 3
            ? "Proporciona retroalimentación constructiva"
            : "No proporciona retroalimentación"}
        </label>
      </div>
      <div className="checkboxRating">
        <input
          type="checkbox"
          name="respuesta"
          checked={formValues.respuesta}
          onChange={handleChange}
        />
        <label htmlFor="respuesta">
          {formValues.respuesta > 3
            ? "Contesta consultas fuera de clases"
            : "No contesta consultas fuera de clases"}
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
          className="w-full border border-solid border-gray-400 px-2"
          onChange={handleChange}
          disabled={formValues.otroValue === ""}></input>
      </div>
      <button
        type="submit"
        className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white  bg-primary disabled:bg-gray-300 self-center mt-4">
        Continuar
      </button>
    </div>
  );
};
