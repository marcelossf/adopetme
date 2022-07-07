import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    
    overflow-x: auto;
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    width: 100%;
    ul {
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
    }
  }
`;
