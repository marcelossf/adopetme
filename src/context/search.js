import { createContext, useState } from "react";

export const SearchContext = createContext("");

export const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <SearchContext.Provider value={{ input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
};
