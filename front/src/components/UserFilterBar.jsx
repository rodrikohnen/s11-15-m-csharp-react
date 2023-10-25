<<<<<<< HEAD
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
=======
export const UserFilterBar = ({ filterType, setFilterType }) => {
  const handleRadioClick = (e) => {
    setFilterType(e.target.value);
  };

  return (
>>>>>>> 66c5d27 (Change: User Page Reverse)
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
<<<<<<< HEAD
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
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
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="flex items-center justify-center w-full">
          <label htmlFor="populares" className="relative">
=======
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
        <div
          className={` flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1  after:top-11 ${
            filterType === "populares" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="populares"
            className={`relative ${
              filterType === "populares" ? "text-white" : ""
            }`}>
<<<<<<< HEAD
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
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
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="flex items-center justify-center w-full">
          <label htmlFor="cerca" className="relative">
=======
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
        <div
          className={`flex items-center justify-center w-full after:content-[''] after:absolute after:w-[33.33%] after:h-1 after:top-11 ${
            filterType === "cerca" ? "after:bg-white" : "after:bg-negromate"
          }`}>
          <label
            htmlFor="cerca"
            className={`relative  ${
              filterType === "cerca" ? "text-white" : ""
            }`}>
<<<<<<< HEAD
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
            Cerca
            <input
              type="radio"
              id="cerca"
              name="filterBtn"
              value="cerca"
<<<<<<< HEAD
<<<<<<< HEAD
              className="filterRadioBtn"
=======
              className="filterRadioBtn "
              onClick={handleRadioClick}
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
              className="filterRadioBtn "
              onClick={handleRadioClick}
>>>>>>> 66c5d27 (Change: User Page Reverse)
            />
          </label>
        </div>
      </form>
    </section>
  );
};
