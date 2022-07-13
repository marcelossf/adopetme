import React from "react";
import { SpinnerContainer } from "./style";

export const Loading = () => {
  return (
    <SpinnerContainer >
      <div className="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </SpinnerContainer>
  );
};
