import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import api from "../api/api";
import { SearchContext } from "./search";

export const AnimalsListContext = createContext([]);

export const AnimalsListProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [ownerPets, setOwnerPet] = useState([])
  
  useEffect(() => {
    api
      .get("/pet")
      .then((response) => {
        setPets(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <AnimalsListContext.Provider value={{ pets, setPets }}>
      {children}
    </AnimalsListContext.Provider>
  );
};
