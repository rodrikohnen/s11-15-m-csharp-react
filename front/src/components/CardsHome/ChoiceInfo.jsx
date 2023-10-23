

export default function ChoiceInfo({
  choiceLogo,
  choiceTitle,
  choiceDescription,
}) {
  return (
    <>
      <div className="flex flex-col text-center items-center py-[2rem] max-w-[15rem] rounded-lg bg-primary shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <span className='flex w-32 h-32'>{choiceLogo}</span>
        <h1 className="text-xl font-bold text-white">{choiceTitle}</h1>
        <p>{choiceDescription}</p>
      </div>
    </>
  );
}
