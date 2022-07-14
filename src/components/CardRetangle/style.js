import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    max-width: 650px;
  }
`;

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .start-align {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
  }

  .page {
    min-height: 39px;
    max-width: 30%;
    background-color: #3b8788;
    border-radius: 17px 17px 0 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    padding: 0 1em;
  }

  .solicitacao {
    color: white;
    font-family: "Fredoka";
    font-size: 100%;
  }
  .card-blue {
    background-color: #4db1b3;
    width: 100%;
    height: auto;
    border-radius: 0 28px 28px 28px;
    display: flex;
    max-width: 1000px;
    padding-right: 35px;
    padding-bottom: 19px;
  }

  .trace-line {
    height: 2px;
    background-color: white;
    position: absolute;
    margin-left: 4px;
    min-width: 361px;
  }

  .trace-up {
    width: 2px;
    height: auto;
    background-color: white;
  }

  .card-p,
  .card-p-block {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: white;
    padding: 10px;
    display: block;
  }

  .card-p:hover {
    text-decoration: underline;
  }

  .nul {
    color: #4db1b3;
  }

  .div {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }

  input,
  label,
  img,
  .p-hide {
    display: none;
  }

  @media (min-width: 1025px) {
    .trace-line {
      width: 750px;
    }

    .solicitacao {
      font-size: 20px;
    }
    .card-p-block {
      display: none;
    }
    input {
      background-color: #3b8788;
      border: solid white 2px;
      border-radius: 6px;
      color: white;
      padding: 6px;
      width: 280px;
      margin-left: 16px;
      display: block;
      ::placeholder {
        color: white;
      }
    }
    label {
      margin-top: 8px;
      color: white;
      margin-left: 16px;
      display: block;
    }

    .container-inputs {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 50%;
      flex-direction: column;
      padding-left: 24px;
    }

    span {
      border-radius: 8px;
      border: solid white 2px;
      width: 285px;
      height: 31px;
      background-color: #3b8788;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .p-hide {
      display: block;
    }
    img {
      margin-top: 38px;
      display: block;
      width: 50%;
    }
  }
`;
export const Separator = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
  margin: 1rem 0;
`;
export const ContainerButton =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`
