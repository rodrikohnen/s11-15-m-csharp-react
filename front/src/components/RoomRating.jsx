import Image from "next/image";
import whiteStar from "../assets/pictures/whiteStar.svg";
import blueStar from "../assets/pictures/blueStar.svg";

export const RoomRating = ({
  formValues,
  handleChange,
  isRatingLocked,
  ratingIsSet,
  handleRatingLock,
}) => {
  const renderImages = () => {
    let images = [];
    for (let i = 0; i < 5; i++) {
      if (i < formValues.rating) {
        images.push(
          <div
            className="relative"
            key={i}>
            <input
              onChange={() => handleChange(i)}
              type="radio"
              name="rating"
              className="ratingRadioBtn"
              disabled={isRatingLocked}
            />
            <Image
              src={blueStar}
              alt="Black"
              width={28}
              height={28}
              className="relative"
            />
          </div>
        );
      } else {
        images.push(
          <div
            className="relative"
            key={i}>
            <input
              onChange={() => handleChange(i)}
              className="ratingRadioBtn "
              type="radio"
              name="rating"
              disabled={isRatingLocked}
            />
            <Image
              src={whiteStar}
              alt="White"
              width={28}
              height={28}
              className="relative z-0"
            />
          </div>
        );
      }
    }
    return images;
  };

  return (
    <>
      <div className="flex mt-4 justify-center flex-col items-center">
        <aside className="flex gap-8 mt-4 justify-center">
          {renderImages()}
        </aside>
        {ratingIsSet === false && (
          <button
            onClick={handleRatingLock}
            disabled={formValues.rating > 0 ? false : true}
            className="pt-1.5 pb-[5px] px-8 rounded-2xl text-white absolute top-[600px] bg-secondary disabled:bg-gray-300 lg:static lg:mt-8">
            Continuar
          </button>
        )}
      </div>
    </>
  );
};
