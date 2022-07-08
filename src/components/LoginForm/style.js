import styled from "styled-components";

export const FormLogin = styled.form`
  background-color: var(--petroleumBlue);
  width: 330px;
  border-radius: 15px;
  border: solid 5px var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 20px 0px;

  .btnslogin {
    width: 100px;
    height: 25px;
    background-color: var(--petroleumBlue);
    border-radius:5px; 
    border: solid white 3px;
    color : white;
    font-family:Comfortaa;
    font-weight: bold;
    
  }
  .btnslogin:hover{
    background-color: #3B8788;
  }
  .btnslogin--orange{
    width: 100px;
    height: 25px;
    background-color: var(--orange);
    border-radius:5px; 
    border: none;
    color : black;
    font-family:Comfortaa;
    font-weight: bold;
    margin-top:10px;
  }
  .btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:30px;
  }


`;