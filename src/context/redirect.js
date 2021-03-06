import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const RedirectContext = createContext([]);

export const RedirectProvider = ({ children }) => {
  const [form, setForm] = useState(true);
  const history = useHistory();

  const redirectToPage = (page) => {
    history.push(page);
  };

  return (
    <RedirectContext.Provider value={{ redirectToPage, form, setForm }}>
      {children}
    </RedirectContext.Provider>
  );
};
