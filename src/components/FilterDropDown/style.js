import styled from "styled-components";

export const DropDownContainer = styled.div`
  background-color: var(--orange);
  width: 100%;
  max-width: 400px;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  position: relative;
  transition: 0.3;
  z-index: 10;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

@media (min-width: 501px) {
  left: 11.8%;
}

@media (min-width: 768px) {
  top: 13%;
  left: 24%;
}

@media (min-width: 1024px) {
  width: 332px;
  top: 8.7%;
  left: 28.5%;
}

@media (min-width: 1440px) {
  width: 400px;
  top: 8%;
  left: 32.65%;
}
`;
