import { useMemo, useRef, useState } from "react";
import { GRUPO_URL } from "@/libs/routes";
import noResults from "../../public/no-results.json";

const API_URL = "http://www.matespeakapi.somee.com";

export function useUsers({ saveUsers, sort }) {
  const [getAllusers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const previousSearch = useRef(saveUsers);

  const getUsers = async () => {
    if (saveUsers === previousSearch.current) return;
    try {
      setIsLoading(true);
      setIsError(null);
      previousSearch.current = saveUsers;
      if (saveUsers) {
        const response = await fetch(`${API_URL}${GRUPO_URL}?=${saveUsers}`, {
          method: "GET",
        });
        const json = await response.json();
        const users = getAllusers;
        setAllUsers(json);

        //Controlando para que no llegue profundamente a nuestro Tree
        return Object.entries(users).map(([value]) => ({
          idGrupo: value.idGrupo,
          grupo: value.grupo,
        }));
      } else {
        setAllUsers(noResults);
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortedUsers = useMemo(() => {
    return sort
      ? [...getAllusers].sort((a, b) => a.grupo.localeCompare(b.grupo))
      : getAllusers;
  }, [sort, getAllusers]);

  return { users: sortedUsers, getUsers, isLoading, isError };
}
