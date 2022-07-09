import React from "react";
import { StyledButton } from "./style";

export const Button = ({ children, blackSchema, width }) => {
  return <StyledButton width={width} blackSchema={blackSchema}>{children}</StyledButton>;
};
