import { useState } from "react";

export function useLocalStorage(key, inicialValue) {
  const [storedValue, setStoredValue] = useState();
    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error){
            console.log(error);
        }
    }
  return [storedValue, setValue];
}
