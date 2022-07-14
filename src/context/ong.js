import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../api/api";

export const PetOngContext = createContext([]);

export const PetOngProvider = ({ children }) => {
  const [ongPets, setOngPets] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    api
      .get(`/pet?userId=${userID}`)
      .then((response) => setOngPets(response.data))
      .catch((err) => console.log(err));
    }, []);
    
    
  return (
    <PetOngContext.Provider value={{ ongPets, setOngPets }}>
      {children}
    </PetOngContext.Provider>
  );
};
