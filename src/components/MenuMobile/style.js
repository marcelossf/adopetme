import styled from "styled-components";

export const Section = styled.section`
  background-color: #f2ae2f;
  display: flex;
  flex-direction: column;
  max-width: 341px;
  min-height: 320px;
  border-radius: 0px 25px 25px 0px;
  position: fixed;
  min-width: 307px;
  z-index: 9999;
  -webkit-animation: slide-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .container-img {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 300px;
    justify-content: space-between;
    cursor: pointer;
  }

  .place {
    display: none;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    :hover {
      .place {
        background-color: white;
        width: 100%;
        height: 5px;
      }
    }
  }

  .text-menu {
    font-family: "Fredoka";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-indent: 25px;

    color: white;
    animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(-300px);
      transform: translateX(-300px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-300px);
      transform: translateX(-300px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .text-menu:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }

  .logoBlack {
    max-width: 273px;
    min-width: 195px;
    margin-top: 12px;
  }
  .logoClose {
    max-width: 39px;
    min-width: 29px;
    margin-top: 19px;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: "Fredoka";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  display: flex;

  text-indent: 25px;

  color: white;
  animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  cursor: pointer;
`;
