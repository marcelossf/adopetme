import { Container, DivInfos, FigureStyled } from "./styles";
import {Button} from '../Button';
import {useContext} from 'react';
import {PetContext} from '../../providers/Pet'

function Card({ pet }) {

  const {} = useContext(PetContext);

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
      </DivInfos>
      
      <Button>Solicitar Adoção</Button>
    </Container>
  );
}

export default Card;
