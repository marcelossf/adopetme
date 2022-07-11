import styled from "styled-components";

export const DivStyled = styled.div`

  
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 163px;
  justify-content: space-between;
  width: 100%;
  max-width:1300px;
  gap:10px;
  margin-left:30px;
  margin-top:30px;
  margin-bottom: 20px;
  
  @media (min-width: 1024px){
    margin-left:0px;
    margin-top:0px;
  }
  .title-ong {
    color: #4db1b3;
    font-weight: 500;
    font-family: "Fredoka";
    margin-left: 20px;
    margin-bottom: 13px;
    font-size: 40px;
  }

  .paragraph-ong {
    color: #000000;
    font-family: "Fredoka";
    font-size: 25px;
    text-align: left;
    max-width:500px;
    margin-bottom:10px;
  }

  .adopet-logo {
    display: none;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    .adopet-logo {
      display: block;
      max-width:50% ;
      
    }
    .ong-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
    }
  }
`;
export const DivContainerMax= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`