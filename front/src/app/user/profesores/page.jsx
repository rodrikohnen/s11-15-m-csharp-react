import { ProfessorBackArrow } from "@/components/ProfessorBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";

const UserPageProffesor = () => {
  return (
    <>
      <header className="w-full h-[60px] lg:h-20 bg-primary flex items-center">
        <ProfessorBackArrow />
      </header>
      <h1 className="text-lg font-normal self-start p-4">Profesores</h1>
      <UserPageComponent />
    </>
  );
};

export default UserPageProffesor;
