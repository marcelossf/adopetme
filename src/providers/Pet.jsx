import { createContext, useState } from "react";
import api from "../api/api";

export const PetContext = createContext([]);

export const PetProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [type, setType] = useState("");

  const verificaToken = JSON.parse(localStorage.getItem("token"));
  if(verificaToken) {
    setToken(verificaToken);
    api.get('/users', {
        "Authorization": `Bearer ${token}`
    })
    .then(response => setType(response.data.type))
  }
  return <PetContext.Provider value={{type}}>{children}</PetContext.Provider>;
};
