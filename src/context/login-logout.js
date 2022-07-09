import { createContext, useEffect, useState } from "react";

export const LoginLogoutContext = createContext([]);

export const LoginLogoutProvider = ({ children }) => {
  const [logado, setLogado] = useState([]);

  const changeLogado = () => {
    setLogado(!logado)
  }

  return (
    <LoginLogoutContext.Provider value={{ logado, changeLogado }}>{children}</LoginLogoutContext.Provider>
  );
};
