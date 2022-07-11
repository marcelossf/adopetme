import React, { useState } from "react";
import { FilterContent, InnerContaier, InnerMenu } from "./style";
import { IoMdArrowDropright } from "react-icons/io";

export const MenuDropDown = ({ title, filters, icon }) => {
  const [subNav, setSubNav] = useState(false);

  return (
    <>
      <InnerMenu onClick={() => setSubNav(!subNav)}>
        <span>{title}</span>
        {icon}
      </InnerMenu>
      <InnerContaier>
        {subNav &&
          filters.map((filter, index) => {
            return (
              <FilterContent key={index} onClick={()=>console.log(filter)}>
                <IoMdArrowDropright size={40}/>
                <span >{filter}</span>
              </FilterContent>
            );
          })}
      </InnerContaier>
    </>
  );
};
