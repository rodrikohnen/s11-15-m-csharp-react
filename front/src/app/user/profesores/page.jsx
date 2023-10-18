import { ProfessorBackArrow } from "@/components/ProfessorBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";

const UserPageProffesor = () => {
  return (
    <>
      <ProfessorBackArrow />
      <h1 className="text-lg font-normal self-start p-4">Profesores</h1>
      <UserPageComponent />
    </>
  );
};

export default UserPageProffesor;
