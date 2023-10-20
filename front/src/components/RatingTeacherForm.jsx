"use client";
export const RatingTeacherForm = ({
  formValues,
  setFormValues,
  view,
  setView,
}) => {
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormValues((prevFormValues) => {
      if (type === "checkbox") {
        return {
          ...prevFormValues,
          [name]: checked,
        };
      } else {
        return {
          ...prevFormValues,
          [name]: value,
        };
      }
    });
    console.log(formValues);
  };

  const handleView = () => {
    setView(2);
  };

  return (
    <>
      {view === 1 && (
        <div className="mt-4 w-full flex flex-col gap-2">
          <h3 className="text-center font-medium mb-4">
            Selecciona los motivos
          </h3>
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
              className="w-full border border-solid border-gray-400 px-2 outline-none"
              onChange={handleChange}
              disabled={formValues.otroCheck === false}></input>
          </div>
          <button
            onClick={handleView}
            className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white  bg-secondary disabled:bg-gray-300 self-center mt-4">
            Continuar
          </button>
        </div>
      )}
      {view === 2 && (
        <div className="flex flex-col justify-center mt-8">
          <h3 className="text-sm font-medium mb-4">
            Deja un comentario en el perfil del tutor
          </h3>
          <textarea
            onChange={handleChange}
            name="comentario"
            className="w-[282px] rounded-md h-28 overflow-x-auto border border-solid border-gray-400 outline-none p-2 resize-none mb-8"
            placeholder="Tu comentario"></textarea>
          <button
            type="submit"
            className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white  bg-secondary disabled:bg-gray-300 self-center mt-4">
            Continuar
          </button>
        </div>
      )}
    </>
  );
};
