import React, { useContext, useState } from "react";
import {
  Container,
  FilterBox,
  FilterContainer,
  SearchContaier,
  SloganContainer,
} from "./style";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import { SearchContext } from "../../context/search";
import { FilterDropDown } from "../FilterDropDown";
import {AnimalsListContext} from '../../context/animals';

export const SearchBar = () => {
  const { setInput } = useContext(SearchContext);
  const [active, setActive] = useState(false);
  const {setFiltredPets} = useContext(SearchContext);
  const { setPets } = useContext(AnimalsListContext);
  
  return (
    <Container>
      <SloganContainer>
        <h2>Adote um amigo!</h2>
      </SloganContainer>
      <FilterBox>
        <FilterContainer onClick={() => {setActive(!active)}}>
          <span>Aplicar Filtro</span>
          <IoMdArrowDropdown size={50} />
        </FilterContainer>
        {active && <FilterDropDown />}
      </FilterBox>
      <button onClick={()=>{setPets([])
      }}>Limpar Filtros</button>
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
