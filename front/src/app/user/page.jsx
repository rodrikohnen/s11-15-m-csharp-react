import { UserCard } from "@/components/UserCard";

const users = [
  {
    id: 1,
    name: "Alice",
    lastname: "Smith",
    country: "USA",
    rating: 4,
    nativelanguage: "English",
    languagetolearn: "Spanish",
  },
  {
    id: 2,
    name: "Bob",
    lastname: "Johnson",
    country: "Canada",
    rating: 3,
    nativelanguage: "Spanish",
    languagetolearn: "English",
  },
  {
    id: 3,
    name: "Charlie",
    lastname: "Brown",
    country: "Mexico",
    rating: 5,
    nativelanguage: "Portuguese",
    languagetolearn: "English",
  },
  {
    id: 4,
    name: "David",
    lastname: "Lee",
    country: "Spain",
    rating: 2,
    nativelanguage: "English",
    languagetolearn: "Portuguese",
  },
  {
    id: 5,
    name: "Eva",
    lastname: "Garcia",
    country: "Brazil",
    rating: 1,
    nativelanguage: "Portuguese",
    languagetolearn: "Spanish",
  },
  {
    id: 6,
    name: "Frank",
    lastname: "Martinez",
    country: "Argentina",
    rating: 4,
    nativelanguage: "Spanish",
    languagetolearn: "Portuguese",
  },
  {
    id: 7,
    name: "Grace",
    lastname: "Chen",
    country: "Portugal",
    rating: 5,
    nativelanguage: "English",
    languagetolearn: "Spanish",
  },
  {
    id: 8,
    name: "Hector",
    lastname: "Lopez",
    country: "France",
    rating: 3,
    nativelanguage: "Portuguese",
    languagetolearn: "English",
  },
  {
    id: 9,
    name: "Ivy",
    lastname: "Wang",
    country: "Germany",
    rating: 2,
    nativelanguage: "English",
    languagetolearn: "Portuguese",
  },
  {
    id: 10,
    name: "Jack",
    lastname: "Taylor",
    country: "Italy",
    rating: 4,
    nativelanguage: "Spanish",
    languagetolearn: "English",
  },
];

const UserPage = () => {
  return (
    <main className="mainContainer gap-2">
      <UserCard users={users} />
    </main>
  );
};

export default UserPage;
