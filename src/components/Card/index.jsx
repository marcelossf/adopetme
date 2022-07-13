import { useContext, useState } from "react";
import { RedirectContext } from "../../context/redirect";
import { SolicitationContext } from "../../context/solicitation";
import { Button } from "../Button";
import ModalSolicitation from "../ModalSolicitation";
import { Container, DivInfos, FigureStyled } from "./styles";

function Card({ pet }) {
  
  const token = localStorage.getItem('token')
  const { redirectToPage } = useContext(RedirectContext);
  const [open, setOpen] = useState(false);
  const { setPetData } = useContext(SolicitationContext);

  const handleRedirect = () => {
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
        <ModalSolicitation pet={pet} setOpen={setOpen} open={open} />
      ) : (
        false
      )}
      <FigureStyled>
        <figure>
          <img src={pet.img} alt={pet.petName} />
        </figure>
        <p>
          {pet.petName.replace(pet.petName[0], pet.petName[0].toUpperCase())}
        </p>
      </FigureStyled>

      <DivInfos>
        <span>Raça: {pet.breed}</span>

        {/* <span>Idade: {pet?.age.replace(pet?.age[0], pet?.age[0].toUpperCase())}</span> */}
        <span>ONG: {pet.ong}</span>

        <span></span>
      </DivInfos>

      <Button onClick={handleRedirect}>Solicitar Adoção</Button>
    </Container>
  );
}

export default Card;
