import PickDog from "../../assets/pit.png";
import Close from "../../assets/fechar.png";
import { Container } from "./style";

const ModalSolicitation = () => {
  return (
    <Container>
      <div className="container-adopet">
        <p className="text-solicitation">Solicitação de Adoção</p>
        <img className="button-close" src={Close} alt="botão fechar"></img>
      </div>
      <div className="container-img">
        <img src={PickDog} alt="Foto-Animal"></img>
        <p className="pet-name">PitBull fofo</p>
      </div>
      <form>
        <input placeholder="Pergunta 1"></input>
        <input placeholder="Pergunta 2"></input>
        <input placeholder="Pergunta 3"></input>
        <input placeholder="Pergunta 4"></input>
        <input placeholder="Pergunta 5"></input>
        <button>enviar</button>
      </form>
    </Container>
  );
};

export default ModalSolicitation;
