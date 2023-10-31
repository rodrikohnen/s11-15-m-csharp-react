import useLoginStore from "@/context/loginStore";
import { useState } from "react";

export const ROOM_API_URL = "2ywMtiDGjH9kj1KOtHe8s8RMj8HGOtL04wkacqMhfe";

export function useCreateRoom() {
  const [rooms, setRooms] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
<<<<<<< HEAD
=======
  const [countdown, setCountdow] = useState(60);
  const infoUser = useLoginStore(state => state.usuario)
  const fullName = `${infoUser?.nombre} ${infoUser?.apellido}`

>>>>>>> 58f3a45 (fix: diisplay info in the fetch)
  const createRoom = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(
        `https://api.eyeson.team/rooms?user[name]=${fullName}`,
        {
          method: "POST",
          headers: {
            'Authorization': `${ROOM_API_URL}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        }
      );
      const json = await response.json();
      setRooms(json);
      const listRooms = json;

      return listRooms?.map((room) => ({
        username: room.user.name,
        link: room.links.gui,
        guest: room.links.guest_join,
      }));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { createRoom, listRooms: rooms, isLoading, isError };
}
