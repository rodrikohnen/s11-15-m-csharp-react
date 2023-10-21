export const UserFilterBar = () => {
  return (
    <section className="h-12 bg-gray-400 w-full m-0 mt-4">
      <form className="flex items-center h-12">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="general" className="relative">
            General
            <input
              type="checkbox"
              id="general"
              name="filterBtn"
              value="general"
              className="filterRadioBtn"
            />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="populares" className="relative">
            Más Populares
            <input
              type="checkbox"
              id="populares"
              name="filterBtn"
              value="populares"
              className="filterRadioBtn"
            />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label htmlFor="cerca" className="relative">
            Cerca
            <input
              type="checkbox"
              id="cerca"
              name="filterBtn"
              value="cerca"
              className="filterRadioBtn"
            />
          </label>
        </div>
      </form>
    </section>
  );
};
