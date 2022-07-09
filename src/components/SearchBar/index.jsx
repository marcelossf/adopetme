import React, { useContext } from "react";
import {
  Container,
  FilterContainer,
  SearchContaier,
  SloganContainer,
} from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { SearchContext } from "../../context/search";

export const SearchBar = () => {
  const { setInput } = useContext(SearchContext);
  
  return (
    <Container>
      <SloganContainer>
        <h2>Adote um amigo!</h2>
      </SloganContainer>
      <FilterContainer>
        <span>Aplicar Filtro</span>
        <IoMdArrowDropdown size={50} />
      </FilterContainer>
      <SearchContaier>
        <input
          onChange={(event) => setInput(event.target.value)}
          type="text"
          placeholder="Procure aqui."
        />
        <button>
          <ImSearch size={30} />
        </button>
      </SearchContaier>
    </Container>
  );
};
