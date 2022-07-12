import React, { useContext, useState } from "react";
import { FilterContent, InnerContaier, InnerMenu } from "./style";
import { IoMdArrowDropright } from "react-icons/io";
import { SearchContext } from "../../context/search";
import { AnimalsListContext } from "../../context/animals";

export const MenuDropDown = ({ title, filters, icon }) => {
  const [subNav, setSubNav] = useState(false);
  const { setFiltredPets } = useContext(SearchContext);
  const { pets } = useContext(AnimalsListContext);
  const [typeFilter, setTypeFilter] = useState("");

  function handleFilter(title) {
    setSubNav(!subNav);
    setTypeFilter(title.title);
  }

  function handleSubFilter(title) {
    if (typeFilter === "Todos") {
      const filtersPets = pets.filter((pet) => pet.gender === title);
      setFiltredPets(filtersPets);
    } else if (typeFilter === "Gato") {
      const type = pets.filter((pet) => pet.species === typeFilter);
      const filtersPets = type.filter((pet) => pet.gender === title);
      setFiltredPets(filtersPets);
    } else if (typeFilter === "Cachorro") {
      const type = pets.filter((pet) => pet.species === typeFilter);
      const filtersPets = type.filter((pet) => pet.gender === title);
      setFiltredPets(filtersPets);
    } else if (typeFilter === "Roedor") {
      const type = pets.filter((pet) => pet.species === typeFilter);
      const filtersPets = type.filter((pet) => pet.gender === title);
      setFiltredPets(filtersPets);
    }
  }

  return (
    <>
      <InnerMenu onClick={() => handleFilter({ title })}>
        <span>{title}</span>
        {icon}
      </InnerMenu>
      <InnerContaier>
        {subNav &&
          filters.map((filter, index) => {
            return (
              <FilterContent
                key={index}
                onClick={() => handleSubFilter(filter)}
              >
                <IoMdArrowDropright size={40} />
                <span>{filter}</span>
              </FilterContent>
            );
          })}
      </InnerContaier>
    </>
  );
};
