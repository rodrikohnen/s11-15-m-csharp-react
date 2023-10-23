"use client";

import { UserFilterBar } from "@/components/UserFilterBar";
import { MdPersonSearch } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { useAllUsers } from "@/hooks/useAllUsers";
import { UserCard } from "./UserCard";

export const UserPageComponent = () => {
  const [filteredUsers, setFilteredUsers] = useState("");
  const [error, setError] = useState(null);
  const inputSearch = useRef(true);
  const { listUsers, isLoading, isError, getUsers } = useAllUsers({
    filteredUsers,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers({ filteredUsers });
  };

  const handleChange = (e) => {
    const newFilter = e.target.value
    setFilteredUsers(newFilter);

    if (inputSearch.current) {
      inputSearch.current = filteredUsers === "";
      return;
    }

    if (filteredUsers === "") {
      setError("No se puede buscar un usuario vacio");
      return;
    }

    if (filteredUsers.length < 3) {
      setError("Debe ingresar al menos 3 caracteres");
      return;
    }

    if (filteredUsers.match(/^\d+$/)) {
      setError("No se puede buscar un usuario con numeros");
      return
    }

   
    setError(null);
  };

  return (
    <>
<<<<<<< HEAD
      <UserFilterBar />
=======
      <UserFilterBar
        setFilterType={setFilterType}
        filterType={filterType}
      />
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
      <main className="mainContainer gap-2">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-row items-center ">
            <input
              name="search"
              id="search"
              placeholder="Buscar..."
              onChange={handleChange}
              className={`
              } w-72 border-2 border-gray-950 rounded-md`}
            />
            <button type="submit">
              <MdPersonSearch className="w-10 h-8 overflow-hidden transform hover:scale-90 transition-transform" />
            </button>
          </form>
          {error && <p className="text-pink-700 font-bold">{error}</p>}
        </div>

        {isLoading ? (
          <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
        ) : (
          <UserCard listUsers={listUsers} filteredUsers={filteredUsers} />
        )}
       {/*  {isError && <BiErrorCircle className="w-10 h-10  text-pink-700" />} */}
      </main>
    </>
  );
};
