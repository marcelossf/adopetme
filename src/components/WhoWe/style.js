import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .paragraph {
    background-color: #4db1b3;
    display: flex;
    text-align: center;
    line-height: 25px;
    height: 200px;
    align-items: center;
    padding: 0px;
    font-weight: 700px;
    font-size: 15px;
    color: white;
    box-shadow: 1px 2px 3px 5px #4db1b3;
    margin-bottom: 25px;
    width: 100%;
    max-height: 200px;
    min-height: 157px;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    .div-half {
      display: block;
      background-color: #f2ae2f;
      height: 180px;
      min-width: 2px;
      max-width: 5px;
      position: relative;
      margin-bottom: 31px;
    }
    .paragraph {
      margin-top: 66px;
      padding-right: 15px;
      padding-left: 15px;
      text-align: justify;
    }

    .redPaw {
      width: 148px;
      height: 139px;
      position: absolute;
      display: block;
    }
  }
  @media (max-width: 1025px) {
    .redPaw {
      display: none;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  margin-top: -13px;
  max-height: 345px;
  height: 331px;
  min-width: 271px;

  .imgFace {
    max-width: 124px;
    min-width: 103px;
  }

  .list-who {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin-right: 16px;
    margin-top: 12px;
  }
  .container-informations {
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    border-radius: 30px;
    max-width: 153px;
    border-radius: 30px;
    max-height: 142px;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    min-width: 141px;
    min-height: 121px;
  }
  .logoLink,
  .logoGit {
    max-width: 31px;
    max-height: 31px;
    min-width: 23px;
    min-height: 26px;
  }

  .box-link,
  .box-git {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .phrase-link,
  .phrase-git,
  .name {
    font-size: 15px;
    font-weight: 700;
    color: black;
    text-decoration: none;
  }

  @media (min-width: 1025px) {
    justify-content: center;
    overflow: hidden;

    .list-who {
      margin-right: 74px;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
  }
`;

export const DivText = styled.div`
  display: flex;
  justify-content: center;

  .title-ul {
    font-size: 35px;
    font-family: "Fredoka One";
    color: #f22222;
  }

  @media (max-width: 1025px) {
    display: none;
  }
`;
