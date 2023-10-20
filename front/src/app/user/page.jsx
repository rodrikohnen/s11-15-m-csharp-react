import { UserBackArrow } from "@/components/UserBackArrow";
import { UserPageComponent } from "@/components/UserPageComponent";
import { UserType } from "@/components/UserType";

const UserPage = () => {
  return (
    <>
      <UserBackArrow />
      <h1 className="text-lg font-normal self-start p-4">Usuarios</h1>
      <UserType />
      <UserPageComponent />
    </>
  );
};

export default UserPage;
