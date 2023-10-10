import Image from "next/image";
import avatarwhite from "../assets/icons/avatarwhite.png";
import { ArrowLeft } from "./svg/Svgs";
import { UserRating } from "./UserRating";

export const UserCard = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <article
          key={user.id}
          className="w-full bg-[lightgrey] flex gap-4 rounded-md p-4">
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
    </>
  );
};
