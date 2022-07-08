import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 10px;
  }

  @media (min-width: 1000px) {
    width: 100%;
    ul {
        flex-wrap: wrap;
    }
  }
`;
