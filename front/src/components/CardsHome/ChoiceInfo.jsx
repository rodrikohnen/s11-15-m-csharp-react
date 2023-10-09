export default function ChoiceInfo({
  choiceLogo,
  choiceTitle,
  choiceDescription,
}) {
  return (
    <>
      <div className="flex flex-col text-center items-center py-[2rem] max-w-[15rem] rounded-lg bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="w-28 h-28">{choiceLogo}</div>
        <h1 className="text-xl font-bold">{choiceTitle}</h1>
        <p>{choiceDescription}</p>
      </div>
    </>
  );
}
