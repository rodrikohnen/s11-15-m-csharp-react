export const UserFilterBar = ({ setFilterType }) => {
  const handleRadioClick = (e) => {
    e.stopPropagation();
    setFilterType(e.target.value);
  };

  return (
    <section className="h-12 bg-gray-400 w-full m-0">
      <form className="flex items-center h-12">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="general"
            className="relative">
            General
            <input
              type="radio"
              id="general"
              name="filterBtn"
              value="general"
              className="filterRadioBtn"
              onClick={handleRadioClick}
            />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="populares"
            className="relative">
            Más Populares
            <input
              type="radio"
              id="populares"
              name="filterBtn"
              value="populares"
              className="filterRadioBtn"
              onClick={handleRadioClick}
            />
          </label>
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="cerca"
            className="relative">
            Cerca
            <input
              type="radio"
              id="cerca"
              name="filterBtn"
              value="cerca"
              className="filterRadioBtn"
              onClick={handleRadioClick}
            />
          </label>
        </div>
      </form>
    </section>
  );
};
