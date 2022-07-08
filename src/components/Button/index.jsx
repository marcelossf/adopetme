import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, blackSchema }) => {
  return <StyledButton blackSchema={blackSchema}>{children}</StyledButton>;
};
