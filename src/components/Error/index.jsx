import React from "react";
import { Container, SpanError } from "./style";

export const Error = ({ error }) => {
  return (
    <Container>
      <SpanError>{error}</SpanError>
    </Container>
  );
};
