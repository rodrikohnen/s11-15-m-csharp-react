"use client";
import { UserCard } from "@/components/UserCard";
import { UserFilterBar } from "@/components/UserFilterBar";
import { UserType } from "@/components/UserType";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Alice",
    lastname: "Smith",
    country: "USA",
    rating: 4,
    nativelanguage: "EN",
    languagetolearn: "ES",
  },
  {
    id: 2,
    name: "Bob",
    lastname: "Johnson",
    country: "Canada",
    rating: 3,
    nativelanguage: "ES",
    languagetolearn: "EN",
  },
  {
    id: 3,
    name: "Charlie",
    lastname: "Brown",
    country: "Mexico",
    rating: 5,
    nativelanguage: "PR",
    languagetolearn: "EN",
  },
  {
    id: 4,
    name: "David",
    lastname: "Lee",
    country: "Spain",
    rating: 2,
    nativelanguage: "EN",
    languagetolearn: "PR",
  },
  {
    id: 5,
    name: "Eva",
    lastname: "Garcia",
    country: "Brazil",
    rating: 1,
    nativelanguage: "PR",
    languagetolearn: "ES",
  },
  {
    id: 6,
    name: "Frank",
    lastname: "Martinez",
    country: "Argentina",
    rating: 4,
    nativelanguage: "ES",
    languagetolearn: "PR",
  },
  {
    id: 7,
    name: "Grace",
    lastname: "Chen",
    country: "Portugal",
    rating: 5,
    nativelanguage: "EN",
    languagetolearn: "ES",
  },
  {
    id: 8,
    name: "Hector",
    lastname: "Lopez",
    country: "France",
    rating: 3,
    nativelanguage: "PR",
    languagetolearn: "EN",
  },
  {
    id: 9,
    name: "Ivy",
    lastname: "Wang",
    country: "Germany",
    rating: 2,
    nativelanguage: "EN",
    languagetolearn: "PR",
  },
  {
    id: 10,
    name: "Jack",
    lastname: "Taylor",
    country: "Italy",
    rating: 4,
    nativelanguage: "ES",
    languagetolearn: "EN",
  },
];

export const UserPageComponent = () => {
  const [filterType, setFilterType] = useState("general");

  console.log(filterType);

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <UserFilterBar />
=======
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
      <UserFilterBar
        setFilterType={setFilterType}
        filterType={filterType}
      />
<<<<<<< HEAD
>>>>>>> 30dce80 (Change: Login and User styles with Desktop view)
=======
>>>>>>> 66c5d27 (Change: User Page Reverse)
      <main className="mainContainer gap-2">
        <UserCard
          users={users}
          filterType={filterType}
        />
      </main>
    </>
  );
};
