import { useState } from "react";
import { createContext } from "react";

export const SolicitationContext = createContext([]);

export const SolicitationProvider = ({ children }) => {
  const [solicitationForm, setSolicitationForm] = useState([]);
  const [userData, setUserData] = useState([]);
  const [petData, setPetData] = useState([]);

  
  return (
    <SolicitationContext.Provider
      value={{
        solicitationForm,
        setSolicitationForm,
        setUserData,
        userData,
        setPetData,
        petData,
      }}
    >
      {children}
    </SolicitationContext.Provider>
  );
};
