import styled from "styled-components";

export const DivRigth = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .imgLogo {
    max-width: 100%;
    max-height: 300px;
    width: auto;
    height: auto;
  }
  @media (min-width: 1025px) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;
export const DivsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .linha{
    display:none;
  }
  
  
  @media (min-width: 1025px) {
    flex-direction: row-reverse;
    height: 100vh;
    align-items:center;
    justify-content:center;
  }
  .linha{
    display:flex;

    width: 3px;
    height: 80%;
    background-color:var(--orange);
    border-radius:10px
  }
`;

export const DivLeft = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 30px;


  .btnslogin {
    width: 100px;
    height: 25px;
    background-color: var(--petroleumBlue);
    border-radius: 5px;
    border: solid white 3px;
    color: white;
    font-family: Comfortaa;
    font-weight: bold;
    box-shadow: -1px 1px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .disable{
    background-color:#3b8788;
  }

  .btnslogin:hover {
    background-color: #3b8788;
  }

  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .textspan {
    color: var(--petroleumBlue);
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  @media (min-width: 1025px) {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const DivInstructionImg = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  overflow-x: scroll;
  padding-left:30px;
  ::-webkit-scrollbar {
    display: none;
  }

  .instructionimg {
    width: 140px;
    height: 140px;
  }
  .divimg{
    height:130px;
  }

  .textimg{
    width: 140px;
    
    display: flex;
    flex-direction:column;
    margin-left:30px;
    font-size:12px;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
  }
  @media (min-width: 1025px) {
    max-width:750px;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    flex-wrap:wrap;
    
    gap: 30px;
  }
  .instructionimg {
    max-width:130px;
    max-height:130px;
    width: auto;
    height: auto;
    margin-left: 0;
  }
`;
