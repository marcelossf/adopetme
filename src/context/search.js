import { createContext, useState } from "react";

export const SearchContext = createContext("");

export const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filtredPets, setFiltredPets] = useState([])
  
  return (
    <SearchContext.Provider
      value={{ input, setInput, filter, setFilter, typeFilter, setTypeFilter, filtredPets, setFiltredPets }}
    >
      {children}
    </SearchContext.Provider>
  );
};
