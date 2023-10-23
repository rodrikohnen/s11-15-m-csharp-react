import Image from "next/image";
import avatarwhite from "../assets/icons/avatarwhite.png";
import { Fragment } from "react";

export const UserCard = ({ listUsers, filteredUsers }) => {
  return (
    <>
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
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
    </>
  );
};

function NoUsersResults() {
  return (
    <p className="text-pink-700 font-bold text-center">
      No se encontraron usuarios para esta búsqueda
    </p>
  );
}

export const Users = ({ listUsers }) => {
  const hasUser = listUsers.length > 0;

  return hasUser ? <UserCard listUsers={listUsers} /> : <NoUsersResults />;
};
