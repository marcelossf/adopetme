import { DivStyled, DivContainerMax } from "./style";
import AdoPet from "../../assets/logoAdopet.png";

const UserTitle = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const nameUser = user.name
  return (
    <DivContainerMax>
      <DivStyled>
        <div className="ong-container">
          <h1 className="title-ong">Bem vindo, {nameUser}.</h1>
          <p className="paragraph-ong">
           
            Nosso site está cheio de adoráveis Pets ansiosos por uma familia.
          </p>
          <p className="paragraph-ong">
            Faça a diferença na vida de um deles! </p>
        </div>
        <img className="adopet-logo" src={AdoPet} alt="logoPet"></img>
      </DivStyled>
    </DivContainerMax>
  );
};

export default UserTitle;
