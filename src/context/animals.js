import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AnimalsListContext = createContext([]);

export const AnimalsListProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [active, setActive] =useState(false)

  useEffect(() => {
    api
      .get("/pet")
      .then((response) => {
        setPets(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimalsListContext.Provider value={{ pets, setPets, active, setActive }}>
      {children}
    </AnimalsListContext.Provider>
  );
