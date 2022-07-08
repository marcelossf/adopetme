import styled from "styled-components";

export const FootContainer = styled.footer`
  width: 100%;
  display: flex;
  background-color: var(--green);
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: 200px;
  max-height: 300px;
  padding: 0 1rem;

  img {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    img {
      display: flex;
      max-width: 248px;
      max-height: 248px;
      border-radius: 50%;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 50%;

  h2 {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    display: flex;
    align-items: center;
    color: #f2f2f2;
    text-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    
    h2 {
      max-width: 212px;
    }
  }
`;

export const Separator = styled.div`
  background-color: white;
  height: 120px;
  width: 2px;
`

export const NavContainer = styled.div`
  display: flex;
  @media (min-width: 1024px) {
  }
`;
