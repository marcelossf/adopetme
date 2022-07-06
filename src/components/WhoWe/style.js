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
  }
  .div-hide {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  margin-top: -13px;
  height: 345px;

  .imgFace {
    width: 124px;
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
    width: 153px;
    border-radius: 30px;
    height: 142px;
    justify-content: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  }
  .logoLink,
  .logoGit {
    width: 31px;
    height: 31px;
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
`;
