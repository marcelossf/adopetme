import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  height: 500px;
  width: 100%;
  @media (max-width: 999px) {
    .logoAdopetme {
      visibility: hidden;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .logoAdopetme {
      width: 50%;
    }
  }
`;

export const Slogan = styled.div`
  font-family: "Fredoka";
  font-weight: 500;
  color: #ffffff;

  figure {
    position: relative;
    display: flex;
    align-items: flex-start;

    .vectorDesktop {
      width: 95%;
    }

    span {
      position: absolute;

      box-sizing: border-box;
      padding: 35px;

      width: 100%;
      font-size: 21px;
      line-height: 36px;
    }
  }

  @media (min-width: 1024px) {
    width: 80%;

    figure {
      display: flex;
      align-items: center;
      width: 100%;

      .vectorDesktop {
        width: 71%;
        margin-left: 2vw;
      }

      span {
        position: absolute; 

        box-sizing: border-box;
        padding-left: 120px;
        margin-bottom: 30px;

        width: 68%;
        font-size: 36px;
        line-height: 46px;
      }
    }
  }
`;
