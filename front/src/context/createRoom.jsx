import { useCreateRoom } from "@/hooks/useCreateRoom";
import { createContext } from "react";

export const CreateRoomContext = createContext();

export function CreateRoomProvider({ children }) {
  const createRoomValue = useCreateRoom();

  return (
    <CreateRoomContext.Provider value={createRoomValue}>
      {children}
    </CreateRoomContext.Provider>
  );
}
