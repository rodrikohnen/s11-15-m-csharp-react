<<<<<<< HEAD
export const UserFilterBar = () => {
  return (
    <section className="h-12 bg-gray-400 w-full m-0 mt-4">
      <form className="flex items-center h-12">
        <div className="flex items-center justify-center w-full">
          <label htmlFor="general" className="relative">
=======
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
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
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
<<<<<<< HEAD
        <div className="flex items-center justify-center w-full">
          <label htmlFor="populares" className="relative">
=======
        <div
          className={` flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1  after:top-11 ${
            filterType === "populares" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="populares"
            className={`relative ${
              filterType === "populares" ? "text-white" : ""
            }`}>
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
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
<<<<<<< HEAD
        <div className="flex items-center justify-center w-full">
          <label htmlFor="cerca" className="relative">
=======
        <div
          className={`flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1 after:top-11 ${
            filterType === "cerca" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="cerca"
            className={`relative  ${
              filterType === "cerca" ? "text-white" : ""
            }`}>
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
            Cerca
            <input
              type="checkbox"
              id="cerca"
              name="filterBtn"
              value="cerca"
<<<<<<< HEAD
              className="filterRadioBtn"
=======
              className="filterRadioBtn "
              onClick={handleRadioClick}
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
            />
          </label>
        </div>
      </form>
    </section>
  );
};
