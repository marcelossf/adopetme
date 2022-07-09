import React from "react";
import {
  Container,
  FilterContainer,
  SearchContaier,
  SloganContainer,
} from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import {ImSearch} from "react-icons/im"

export const SearchBar = () => {
  return (
    <Container>
      <SloganContainer>
        <h2>Adote um amigo!</h2>
      </SloganContainer>
      <FilterContainer>
        <span>Aplicar Filtro</span><IoMdArrowDropdown size={50}/>
      </FilterContainer>
      <SearchContaier>
        <input type="text" placeholder="Procure aqui."/>
        <button><ImSearch size={30}/></button>
      </SearchContaier>
    </Container>
  );
};
