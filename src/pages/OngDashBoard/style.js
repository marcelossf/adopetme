import styled from "styled-components";

export const StyledButton = styled.button`
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: 1024px) {
    padding: 0.5rem 2rem;
    color: white;
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    background-color: var(--petroleumBlue);
    margin-right: 32px;
    display: block;
    &:hover {
      box-shadow: inset 0px 0px 19px 6px rgba(0, 0, 0, 0.63);
    }
  }
`;