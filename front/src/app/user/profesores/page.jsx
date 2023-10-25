import { ProfessorBackArrow } from "@/components/ProfessorBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";

const UserPageProffesor = () => {
  return (
    <>
      <header className="w-full h-[60px] lg:h-20 bg-primary flex items-center">
        <ProfessorBackArrow />
      </header>
      <div className="flex flex-col p-[1rem]">
        <h1 className="text-lg font-normal  pb-2">Profesores</h1>
      </div>
      <UserPageComponent />
    </>
  );
};

export default UserPageProffesor;
