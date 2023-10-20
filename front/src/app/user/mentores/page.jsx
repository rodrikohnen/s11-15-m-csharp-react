import { ProfessorBackArrow } from "@/components/ProfessorBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";

const UserPageMentor = () => {
  return (
    <>
      <ProfessorBackArrow />
      <h1 className="text-lg font-normal self-start p-4">Mentores</h1>
      <UserPageComponent />
    </>
  );
};

export default UserPageMentor;
