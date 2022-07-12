import PickDog from "../../assets/pit.png";
import Close from "../../assets/fechar.png";
import { Container, Containerpai} from "./style";
import { useState } from "react";


const ModalSolicitation = ({state,  setState , image}) => {

  const close = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const onSolicition = () =>{
    // colocar o toast
    setState(false)

  }
  return (
  <Containerpai>
    <Container>
      <div className="container-adopet">
        <p className="text-solicitation">Solicitação de Adoção</p>
        <img
          onClick={close}
          className="button-close"
          src={Close}
          alt="botão fechar"
        ></img>
      </div>
      <div className="container-img">
        <img src={image} className="dog-image" alt="Foto-Animal"></img>
        <p className="pet-name">PitBull fofo</p>
      </div>
      <form>
        <input placeholder="Tem tempo para passear com o animal?"></input>
        <input placeholder="Possui um ambiente limpo para o animal ficar?"></input>
        <input placeholder="Possui condições de dar auxilio médico?"></input>
        <input placeholder="Sua casa tem grades nas janelas?"></input>
        <input placeholder="Possui outros animais?"></input>
        <button type="button" onClick={()=>onSolicition()}> Enviar</button>
      </form>
    </Container>
  </Containerpai>
  );
};

export default ModalSolicitation;
