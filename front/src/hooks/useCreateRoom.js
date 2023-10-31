import useLoginStore from "@/context/loginStore";
import { useState } from "react";

export const ROOM_API_URL = "2ywMtiDGjH9kj1KOtHe8s8RMj8HGOtL04wkacqMhfe";

export function useCreateRoom() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [countdown, setCountdow] = useState(60);
  const infoUser = useLoginStore(state => state.usuario)
  const fullName = `${infoUser?.nombre} ${infoUser?.apellido}`

  const createRoom = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(
        `https://api.eyeson.team/rooms?user[name]=${fullName}`,
        {
          method: "POST",
          headers: {
            Authorization: `${ROOM_API_URL}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const json = await response.json();
      localStorage.setItem("rooms", JSON.stringify(json))
      setRooms(json);
      const listRooms = json;
      
      return listRooms?.map((room) => ({
        username: room.user.name,
        room: room.room.name,
        ready: room.room.ready,
        start: room.room.started_at,
        link: room.links.gui,
        guest: room.links.guest_join,
      }));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdow(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  return {
    createRoom,
    listRooms: rooms,
    isLoading,
    isError,
    countdown,
    setRooms
    
  };
}
