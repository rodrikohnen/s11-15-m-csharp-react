"use client";
import { UserCard } from "@/components/UserCard";
import { UserFilterBar } from "@/components/UserFilterBar";
import { MdPersonSearch } from "react-icons/md";
import { useUsers } from "@/hooks/useUsers";
import { useSearch } from "@/hooks/useSearch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiErrorCircle} from 'react-icons/bi'
import { useState } from "react";

export const UserPageComponent = () => {
  const [sort, setSort] = useState(false)
  const { saveUsers, setSaveUsers, error } = useSearch();
  const { users, getUsers, isLoading, isError } = useUsers({ saveUsers, sort });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers({ saveUsers});
  };

  const handleChange = (e) => {
    setSaveUsers(e.target.value);
  };

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <UserFilterBar sort={sort} handleSort={handleSort}/>
      <main className="mainContainer gap-2">
        <form onSubmit={handleSubmit} className="flex flex-row items-center ">
          <input
            name="search"
            onChange={handleChange}
            value={saveUsers}
            placeholder="Buscar..."
            className={`${
              error ? "border-pink-700" : "border-green-500"
            } w-72 border-2 border-gray-950 rounded-md`}
          />
          <button type="submit">
            <MdPersonSearch className="w-10 h-8 overflow-hidden transform hover:scale-90 transition-transform" />
          </button>
        </form>
        {error && <p className="text-pink-700 font-bold">{error}</p>}
        {isLoading ? (
          <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
        ) : (
          <UserCard users={users} />
        )}
        {isError && <BiErrorCircle  className="w-10 h-10  text-pink-700" />}
      </main>
    </>
  );
};
