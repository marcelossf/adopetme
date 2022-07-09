import { createContext } from "react";
import { useHistory } from "react-router-dom";

export const RedirectContext = createContext([]);

export const RedirectProvider = ({ children }) => {
  const history = useHistory();

  const redirectToPage = (page) => {
    history.push(page);
  };

  return (
    <RedirectContext.Provider value={{ redirectToPage }}>
      {children}
    </RedirectContext.Provider>
  );
};
