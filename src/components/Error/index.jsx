import React from "react";
import { Container, SpanError } from "./style";

export const Error = ({ children }) => {
  return (
    <Container>
      <SpanError>{children}</SpanError>
    </Container>
  );
};
