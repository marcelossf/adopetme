import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import api from "../api/api";
import { SearchContext } from "./search";

export const AnimalsListContext = createContext([]);

export const AnimalsListProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [ownerPets, setOwnerPet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/pet")
      .then((response) => {
        setPets(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimalsListContext.Provider value={{ pets, setPets, loading }}>
      {children}
    </AnimalsListContext.Provider>
  );
};
