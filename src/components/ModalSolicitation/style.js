import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #4db1b3;
  border: solid white 8px;
  border-radius: 24px;
  align-items: center;
  min-height: 470px;
  max-width: 305px;
  width: 100%;
  position: fixed;

  .container-adopet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0px;
    width: 100%;
    height: 40px;
  }

  .text-solicitation {
    font-family: "Fredoka";
    font-weight: 600;
    font-size: 20px;
    color: white;
    margin-left: 20px;
  }

  .container-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    max-height: 205px;
    justify-content: flex-start;
    max-width: 260px;
    margin-bottom: 10px;
  }

  img {
    max-width: 250px;
    max-height: 200px;
    width: 100%;
    height: 100%;

    border-radius: 8px 8px 0px 0px;

    border: solid 3px white;
  }

  .button-close {
    width: 25px;
    height: 30px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }

  .pet-name {
    font-size: 20px;
    font-weight: 600;
    font-family: "Fredoka";
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 280px;
    justify-content: space-evenly;
    gap: 10px;
  }

  input {
    background-color: #3b8788;
    border: solid white 2px;
    border-radius: 5px;
    color: white;
    padding: 7px;
    max-width: 250px;
    width: 250px;
    box-shadow: -2px 3px 5px 1px #282828;

    ::placeholder {
      color: white;
      font-family: "Inter";
    }
  }

  button {
    max-width: 100px;
    height: 30px;
    width: 100%;

    font-size: 16px;

    border-radius: 5px;
    min-height: 29px;
    background-color: #3b8788;
    color: white;
    border: solid white 2px;
    &:hover{
      
      background-color: #4db1b3;
    
    }
  }

  @media (min-width: 1024px) {
    min-height: 600px;
    max-width: 500px;
    justify-content: space-around;

    gap: 10px;
    padding: 10px;
    form {
      gap: 20px;
      width: 100%;
    }
    img {
      max-width: 500px;
      width: 100%;
      max-height: 250px;

      border-radius: 8px 8px 0px 0px;
    }

    .container-img {
      width: 100%;
      max-height: 400px;
      max-width: 380px;

      gap: 5px;
    }
    .text-solicitation {
      margin-left: 30%;
    }

    input {
      max-width: 380px;
      width: 100%;
    }

    button {
      max-width: 200px;
      height: 40px;
      width: 100%;

      font-size: 20px;

      border-radius: 5px;
      min-height: 29px;
      background-color: #3b8788;
      color: white;
      border: solid white 2px;
      
    }
    button::hover{
      background-color: white;
    }
   
  }
`;
export const Containerpai = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;
