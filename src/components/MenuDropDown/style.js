import styled from "styled-components";

export const InnerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: var(--orange);
  width: 100%;

  &:hover {
    filter: brightness(1.1);
  }
  span {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 58px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: white;
  }

  svg {
    color: white;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
`;

export const InnerContaier = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
  border-radius: 10px;
`;

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  &:hover {
    filter: brightness(1.3);
    background-color: var(--orange);

    span, svg {
      color: white;
      filter: drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.3));
    }
    
  }

  svg {
    color: var(--orange);
    filter: drop-shadow(0px 7px 3px rgba(0, 0, 0, 0.3));
  }

  span {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: 0.06em;
    text-indent: 46px;
    color: var(--orange);

    
  }
`;
