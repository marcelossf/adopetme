import { useContext, useState } from "react";
import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";
import { SolicitationContext } from "../../context/solicitation";
import { Button } from "../Button";
import ModalSolicitation from "../ModalSolicitation";
import { Container, DivInfos, FigureStyled } from "./styles";

function Card({ pet }) {
  const { logado } = useContext(LoginLogoutContext);
  const { redirectToPage } = useContext(RedirectContext);
  const [open, setOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  const { setPetData } = useContext(SolicitationContext);


  const handleRedirect = (pet) => {
    if (!token) {
      redirectToPage("/login");
    } else {
      setOpen(true);
      setPetData(pet)
    }
  };

  return (
    <Container>
      {open === true ? (
        <ModalSolicitation setOpen={setOpen} open={open} />
      ) : (
        false
      )}
      <FigureStyled>
        <img src={pet.img} alt="" />
        <span>
          {pet.petName.replace(pet.petName[0], pet.petName[0].toUpperCase())}
        </span>
      </FigureStyled>

      <DivInfos>
        <span>Raça: {pet.breed}</span>

        {/* <span>Idade: {pet?.age.replace(pet?.age[0], pet?.age[0].toUpperCase())}</span> */}
        <span>ONG: {pet.ong}</span>

        <span></span>
      </DivInfos>

      <Button onClick={()=>handleRedirect(pet)}>Solicitar Adoção</Button>
    </Container>
  );
}

export default Card;
