import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 163px;
  justify-content: center;
  width: 100%;

  .title-ong {
    color: #4db1b3;
    font-weight: 500;
    font-family: "Fredoka";
    margin-bottom: 13px;
    font-size: 40px;
  }

  .paragraph-ong {
    color: #000000;
    font-family: "Fredoka";
    font-size: 25px;
    text-align: center;
  }

  .adopet-logo {
    display: none;
  }

  @media (min-width: 1025px) {
    flex-direction: row;

    .adopet-logo {
      display: block;
      width: 30%;
      height: 30%;
    }
    .ong-container {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
    }
  }
`;
