import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #4db1b3;
  border: solid white 8px;
  border-radius: 24px;
  align-items: center;
  min-height: 472px;
  max-width: 305px;
  width: 100%;
  position: absolute;

  .container-adopet {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  .text-solicitation {
    font-family: "Fredoka";
    font-weight: 600;
    font-size: 20px;
    color: white;
    margin-left: 42px;
  }

  .container-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    max-height: 204px;
    justify-content: flex-start;
    max-width: 258px;
    min-width: 17%;
  }

  img {
    max-width: 244px;
    width: 100%;
  }

  .button-close {
    max-width: 25px;
    min-width: 30px;
  }

  .pet-name {
    font-size: 20px;
    font-weight: 600;
    font-family: "Fredoka";
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 277px;
    justify-content: space-evenly;
    width: 25%;
  }

  input {
    background-color: #3b8788;
    border: solid white 2px;
    border-radius: 5px;
    color: white;
    padding: 7px;
    min-width: 223px;
    width: 64%;
    box-shadow: -2px 3px 5px 1px #282828;

    ::placeholder {
      color: white;
      font-family: "Inter";
    }
  }

  button {
    min-width: 100px;
    border-radius: 5px;
    min-height: 29px;
    background-color: #3b8788;
    color: white;
    border: solid white 2px;
  }

  @media (min-width: 1024px) {
    max-width: 374px;
  }
`;

export const ContainerPai = styled.div`
z-index: 99999;
width: 100vw;
height: 100%;
left: 0;
top: 0;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.25);

`

