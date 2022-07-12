import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  
  width: 330px;
  height: 530px;
  background-color: #d9d9d9;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;


  box-shadow:10px 10px 5px 2px rgba( 0 , 0, 0, 0.25);

  Button{
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    width: 400px;
    padding: 0px 10px;
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
    width: 270px;
    height: 180px;
    margin-top:10px

  }

  span {
    font-family: "Fredoka";
    font-weight: 500;
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    margin-top: -5px;
    img {
      width: 335px;
      height: 185px;

      border-radius: 15px 15px 0px 0px;
    }
  }
`;

export const DivInfos = styled.div`
  box-sizing: border-box;
  gap: 15px;

  width: 270px;
  height: 140px;

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
