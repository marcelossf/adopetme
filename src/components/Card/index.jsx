import { useContext } from "react";
import { useState } from "react";
import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";
import { Button } from "../Button";
import { Container, DivInfos, FigureStyled } from "./styles";
import ModalSolicitation from "../ModalSolicitation";
function Card({ pet }) {

  const token = JSON.parse(localStorage.getItem('token'))
  
  const {redirectToPage} = useContext(RedirectContext);
  const [state, setState]= useState(false);
  

  const handleRedirect = () => {
     if(token){
      setState(true)
     }else{
      redirectToPage("/login")
     }
  }

  return (
    <Container>
      <FigureStyled>
        <img src={pet.img} alt="" />
        <span>{pet.petName.replace(pet.petName[0], pet.petName[0].toUpperCase())}</span>
      </FigureStyled>
      {state ? (<ModalSolicitation 
      image={pet.img}
      state={state}
      setState={setState}
      />):("")}
      <DivInfos>
        <span>Raça: {pet.breed}</span>
        <span>Idade: {pet.age}</span>
        <span>ONG: {pet.ONG}</span>
        <span></span>
      </DivInfos>

      <Button  onClick={()=>handleRedirect()}>Solicitar Adoção</Button>
    </Container>
  );
}

export default Card;
