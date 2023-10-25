import { API_URL, USUARIOS_URL } from "@/libs/routes";
import { useCallback, useRef, useState } from "react";

export function useAllUsers({ filteredUsers }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [users, setUsers] = useState([]);
  const previousSearch = useRef(filteredUsers);

  const getUsers = useCallback(async ({ filteredUsers }) => {
    if (filteredUsers === previousSearch.current) return;
    try {
      setIsLoading(true);
      setIsError(null);
      previousSearch.current = filteredUsers;
      const response = await fetch(`${API_URL}${USUARIOS_URL}`, {
        method: "GET",
        mode: "cors",
      });
      const data = await response.json();
      setUsers(data);

      const listUsers = data;

      //Controlando el contrato del endpoint
      return listUsers?.map((user) => ({
        firstname: user.nombre,
        secondname: user.apellido,
      }));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, isError, listUsers: users, getUsers };
}
