import { createContext, useState } from "react";

export const LoginLogoutContext = createContext();

export const LoginLogoutProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const changeLogado = () => {
    setLogado(!logado)
  }

  return (
    <LoginLogoutContext.Provider value={{ logado, changeLogado }}>{children}</LoginLogoutContext.Provider>
  );
};
