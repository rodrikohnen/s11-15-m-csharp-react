import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [saveUsers, setSaveUsers] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = saveUsers === ''
      return;
    }

    if (saveUsers === "") {
      setError("No se puede buscar un usuario vacio");
      return;
    }

    if (saveUsers.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (saveUsers.length > 25) {
      setError("Has alcanzado el limite de caracteres");
      return;
    }
    setError(null);
  }, [saveUsers]);

  return { saveUsers, setSaveUsers, error };
}
