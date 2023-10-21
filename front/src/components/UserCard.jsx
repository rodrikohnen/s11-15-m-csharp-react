import Image from "next/image";
import avatarwhite from "../assets/icons/avatarwhite.png";
import { Fragment } from "react";

export const UserCard = ({ listUsers, filteredUsers }) => {
  return (
    <>
      {listUsers ? (
        <>
          {listUsers
            .filter((user) => {
              return filteredUsers === ""
                ? user
                : user.grupo
                    .toLowerCase()
                    .includes(filteredUsers.toLowerCase());
            })
            .map((user) => (
              <Fragment key={user.idGrupo}>
                <article className="w-full bg-gray-200 flex gap-4 rounded-md p-4">
                  <span className="text-lg font-bold">
                    Grupo # {user.idGrupo}
                  </span>
                  <aside className="bg-white rounded-full flex items-center p-4">
                    <Image
                      src={avatarwhite}
                      alt="avatar"
                      className="object-contain"
                    />
                  </aside>
                  <div className="flex flex-col gap-1 items-start">
                    <p className="text-sm font-medium text-black">
                      {user.grupo}
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
