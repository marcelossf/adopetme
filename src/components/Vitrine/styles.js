import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;

  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .fraseVitrine {
    color: var(--black);
    font-family: 'Fredoka';
    font-size: 48px;
    text-align: center;
    font-weight: 500;
  }

  ul {
    width: 100%;
    max-width: 2000px;

    display: flex;
    flex-direction: row;
    
    overflow-x: auto;
    gap: 60px;

    padding-bottom:30px;
  }

  @media (max-width: 1024px) {
    ul {
      margin-left: 3vw;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    ul {
    justify-content: center;

      margin: auto;

      flex-wrap: wrap;
    }
  }
`;
