import { UserBackArrow } from "@/components/UserBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";
import { UserType } from "@/components/UserType";

const UserPage = () => {
  return (
    <>
      <header className="w-full h-[60px] lg:h-20 bg-primary flex items-center">
        <UserBackArrow />
      </header>
      <h1 className="text-lg font-normal self-start p-4">Usuarios</h1>
      <UserType />
      <UserPageComponent />
    </>
  );
};

export default UserPage;
