import styled from "styled-components";

export const Section = styled.section`
  background-color: #f2ae2f;
  display: flex;
  flex-direction: column;
  max-width: 341px;
  height: 320px;
  border-radius: 0px 25px 25px 0px;
  position: fixed;

  .container-img {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 300px;
    justify-content: space-between;
  }

  .div-half {
    background-color: white;
    height: 2px;
    width: 340px;
  }

  .text-menu {
    color: white;
    font-weight: bolder;
    font-size: 16px;
    padding-left: 25px;
  }
  .logoBlack {
    width: 273px;
    margin-top: 12px;
  }
  .logoClose {
    width: 39px;
    margin-top: 19px;
  }
`;
