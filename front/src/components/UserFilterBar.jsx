export const UserFilterBar = ({ filterType, setFilterType }) => {
  const handleRadioClick = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <section className="h-12 bg-primary w-full m-0 mt-4 ">
      <form className="flex items-center h-12 relative ">
        <div
          className={` flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1  after:top-11 ${
            filterType === "general" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="general"
            className={`relative ${
              filterType === "general" ? "text-white " : ""
            }`}>
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
        <div
          className={` flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1  after:top-11 ${
            filterType === "populares" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="populares"
            className={`relative ${
              filterType === "populares" ? "text-white" : ""
            }`}>
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
        <div
          className={`flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1 after:top-11 ${
            filterType === "cerca" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="cerca"
            className={`relative  ${
              filterType === "cerca" ? "text-white" : ""
            }`}>
            Cerca
            <input
              type="radio"
              id="cerca"
              name="filterBtn"
              value="cerca"
              className="filterRadioBtn "
              onClick={handleRadioClick}
            />
          </label>
        </div>
      </form>
    </section>
  );
};
