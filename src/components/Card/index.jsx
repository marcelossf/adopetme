import { useContext } from "react";
import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";
import { Button } from "../Button";
import { Container, DivInfos, FigureStyled } from "./styles";

function Card({ pet }) {

  const {logado} = useContext(LoginLogoutContext);
  const {redirectToPage} = useContext(RedirectContext);

  const handleRedirect = () => {
    !logado && redirectToPage('/login')
  }

  return (
    <Container>
      <FigureStyled>
        <img src={pet.img} alt="" />
        <span>{pet.petName.replace(pet.petName[0], pet.petName[0].toUpperCase())}</span>
      </FigureStyled>

      <DivInfos>
        <span>Raça: {pet.breed}</span>
        <span>Idade: {pet.age.replace(pet.age[0], pet.age[0].toUpperCase())}</span>
        <span>ONG: {pet.ONG}</span>
        <span></span>
      </DivInfos>

      <Button onClick={handleRedirect}>Solicitar Adoção</Button>
    </Container>
  );
}

export default Card;
