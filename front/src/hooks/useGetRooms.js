import { ROOM_API_URL } from "@/hooks/useCreateRoom";
import React from "react";

export function useGetRooms() {
  const [showRooms, setShowRooms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(null);

  const getRooms = async () => {
    try {
      setIsLoading(true);
      setIsError(null);
      const response = await fetch(`https://api.eyeson.team/rooms`, {
        method: "GET",
        headers: {
          Authorization: `${ROOM_API_URL}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const data = await response.json();
      localStorage.setItem("listrooms", JSON.stringify(data));
      setShowRooms(data);
      const allRooms = data;

      return allRooms?.map((room) => ({
        Name: room.name,
        Ready: room.ready,
        Started: room.started_at,
      }));
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, getRooms, showRooms, setShowRooms };
}
