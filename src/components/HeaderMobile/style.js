import styled from "styled-components";

export const Head = styled.header`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -10px;
  width: 100%;
  min-width: 317px;
  height: 111px;

  .imgMenu {
    max-width: 198px;
    max-height: 160px;
    min-width: 61px;
    min-height: 46px;
  }

  .imgLogo {
    max-width: 398px;
    max-height: 167px;
    min-width: 202px;
    min-height: 99px;
    margin-right: 10px;
  }

  .pawsLogo,
  .circle {
    display: none;
  }

  @media (min-width: 1025px) {
    background-color: #f2ae2f;
    justify-content: flex-start;
    box-shadow: -3px 7px 9px 2px rgb(0 0 0 / 25%);

    .container-buttons {
      display: flex;
      width: 787px;
      justify-content: center;
    }
    .imgLogo,
    .imgMenu {
      display: none;
    }

    .circle {
      width: 90px;
      height: 88px;
      background-color: #e9a82f;
      border-radius: 53px;
      margin-left: 31px;
      box-shadow: -3px 7px 9px 2px rgba(0, 0, 0, 0.25);
      display: block;
      margin-right: 36px;
    }

    .pawsLogo {
      position: absolute;
      width: 117px;
      margin-left: 17px;
      min-height: 118px;
      display: block;
    }
  }
`;

export const StyledButton = styled.button`
  @media (max-width: 1025px) {
    display: none;
  }
  @media (min-width: 1025px) {
    padding: 0.5rem 2rem;
    color: white;
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    background-color: var(--petroleumBlue);
    margin-right: 32px;
    display: block;
    &:hover {
      box-shadow: inset 0px 0px 19px 6px rgba(0, 0, 0, 0.63);
    }
  }
`;
