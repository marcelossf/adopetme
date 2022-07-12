import styled from "styled-components";

export const DropDownContainer = styled.div`
  background-color: var(--orange);
  width: 100%;
  max-width: 400px;
  /* height: 100%; */
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  transition: 0.3;
  position: absolute;
  top: 58px;
  right: 0;
  z-index: 10;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

`;
