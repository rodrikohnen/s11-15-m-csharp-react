import { ProfessorBackArrow } from "@/components/ProfessorBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";


const UserPageProffesor = () => {
  


  return (
    <>
      <ProfessorBackArrow />
      <div className="flex flex-col p-[1rem]">
      <h1 className="text-lg font-normal  pb-2">Profesores</h1>
      
      </div>
      <UserPageComponent />
    </>
  );
};

export default UserPageProffesor;
