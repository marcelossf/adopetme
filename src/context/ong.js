import { useState } from "react";
import { createContext } from "react";

export const PetOngContext = createContext([]);

export const PetOngProvider = ({ children }) => {
  const [ongPets, setOngPets] = useState([]);
  const [activeOng, setActiveOng] = useState(true)


  return (
    <PetOngContext.Provider value={{ ongPets, setOngPets, activeOng, setActiveOng }}>
      {children}
    </PetOngContext.Provider>
  );
};
