import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;

  width: 330px;
  height: 560px;
  background-color: #d9d9d9;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1000px) {
    width: 400px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const FigureStyled = styled.figure`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  img {
    width: 271px;
    height: 182.51px;
  }

  span {
    font-family: "Fredoka";
    font-weight: 500;
    font-size: 20px;
  }

  @media (min-width: 1000px) {
    margin-top: -5px;
    img {
      width: 333.98px;
      height: 185.45px;

      border-radius: 15px 15px 0px 0px;
    }
  }
`;

export const DivInfos = styled.div`
  box-sizing: border-box;
  gap: 15px;

  width: 267px;
  height: 138.63px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-family: "Fredoka";
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #000000; 

  @media (min-width: 1000px) {
    width: 85%;
  }
`;
