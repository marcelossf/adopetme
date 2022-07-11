import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  background-color: var(--petroleumBlue);
  height: 240px;
  box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const SloganContainer = styled.div`
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: white;
`;

export const FilterBox = styled.div`
width: 80%;
max-width: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
`

export const FilterContainer = styled.div`
  background-color: var(--orange);
  width: 100%;
  /* min-width: 316px; */
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
  

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

export const SearchContaier = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 65%;
    height: 58px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0px 0px 10px;
    border: 0;
    padding-left: 1rem;
    font-size: 20px;
    outline: none;

    ::placeholder {
      color: #cfcfcf;
      font-size: 20px;
      font-family: Comfortaa;
    }
  }

  button {
    width: 58px;
    height: 58px;
    border-radius: 0px 10px 10px 0px;
    border: none;
    background-color: var(--orange);
    color: white;
  }
`;
