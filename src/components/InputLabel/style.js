import styled from "styled-components";

export const InputForms = styled.input` 
    width: 285px;
    height: 30px;
    background-color: #3b8788;
    border-radius: 5px;
    border: solid white 3px;
    padding-left: 5px;
    color: white;
    font-family: Comfortaa;
    font-weight: bold;
    box-shadow: -4px 4px 4px 0px rgba(0,0,0, 0.25);
    ::placeholder {
      color: white;
    }
`;
  export const LabelForm = styled.label`
  font-family:Comforta;
  font-size:16;
  color:white;
  `
  export const Divcont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  
  `