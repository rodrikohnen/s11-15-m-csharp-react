import Image from "next/image";
import avatarwhite from "../assets/icons/avatarwhite.png";
import { ArrowLeft } from "./svg/Svgs";
import { UserRating } from "./UserRating";

export const UserCard = ({ users, filterType }) => {
  let filteredUsers = users;

  if (filterType === "populares") {
    filteredUsers = users.filter((user) => user.rating >= 4);
    filteredUsers.sort((a, b) => b.rating - a.rating);
  } else if (filterType === "cerca") {
    filteredUsers = users.filter((user) => user.country === "Argentina");
  }
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      {listUsers ? (
        <>
          {listUsers
            .filter((user) => {
              return filteredUsers === ""
                ? user
                : user.nombre
                    .toLowerCase()
                    .includes(filteredUsers.toLowerCase());
            })
            .map((user) => (
              <Fragment key={user.id}>
                <article className="w-full bg-gray-200 flex gap-4 rounded-md p-4">
                  <span className="text-lg font-bold">#1 {user.id}</span>
                  <aside className="bg-white rounded-full flex items-center p-4">
                    <Image
                      src={avatarwhite}
                      alt="avatar"
                      className="object-contain"
                    />
                  </aside>
                  <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-medium text-black">
                      {user.nombre} {user.apellido}
                    </p>
                  </div>
                </article>
              </Fragment>
            ))}
        </>
      ) : (
        <p className="text-xl font-bold">
          No se encontraron usuarios en la busqueda
        </p>
      )}
=======
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
      {filteredUsers.map((user) => (
        <article
          key={user.id}
          className="w-full bg-gray-200 flex gap-8 rounded-md p-4 lg:w-[326px]">
          <aside className="bg-white rounded-full flex items-center p-4">
            <Image
              src={avatarwhite}
              alt="avatar"
              className="object-contain"
            />
          </aside>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm font-medium">
              {user.name} {user.lastname}
            </p>
            <div className="flex items-center gap-2 text-xs font-normal">
              {user.nativelanguage}
              <span>
                <ArrowLeft />
              </span>
              {user.languagetolearn}
            </div>
            <UserRating rating={user.rating} />
          </div>
        </article>
      ))}
<<<<<<< HEAD
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
    </>
  );
};
