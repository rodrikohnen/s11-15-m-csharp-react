import Image from "next/image";
import avatarwhite from "../assets/icons/avatarwhite.png";
import { Fragment } from "react";

export const UserCard = ({ users }) => {
  return (
    <>
      {users ? (
        <>
          {Object.entries(users)?.map(([key, user]) => (
            <Fragment key={key}>
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
                  <p className="text-sm font-medium text-black">{user.grupo}</p>
                </div>
              </article>
            </Fragment>
          ))}
        </>
      ) : <p className="">No se encontraron usuarios en la busqueda</p>}
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

export const Users = ({ users }) => {
  const hasUser = users.length > 0;

  return hasUser ? <UserCard users={users} /> : <NoUsersResults />;
};
