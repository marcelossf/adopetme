import React from "react";
import { MenuDropDown } from "../MenuDropDown";
import { DropDownContainer } from "./style";
import { IoMdArrowDropdown } from "react-icons/io";

export const FilterDropDown = () => {
  const FiltersData = [
    {
      title: "Todos",
      filters: ["Macho", "Fêmea"],
      icon: <IoMdArrowDropdown size={30} />,
    },
    {
      title: "Gato",
      filters: ["Macho", "Fêmea"],
      icon: <IoMdArrowDropdown size={30} />,
    },
    {
      title: "Cachorro",
      filters: ["Macho", "Fêmea"],
      icon: <IoMdArrowDropdown size={30} />,
    },
    {
      title: "Roedor",
      filters: ["Macho", "Fêmea"],
      icon: <IoMdArrowDropdown size={30} />,
    },
  ];

  return (
    <DropDownContainer>
      {FiltersData.map(({ title, filters, icon }, index) => {
        return (
          <MenuDropDown
            key={index}
            title={title}
            filters={filters}
            icon={icon}
          />
        );
      })}
    </DropDownContainer>
  );
};
