import { DivStyled } from "./style";
import AdoPet from "../../assets/logoAdopet.png";

const OngTile = ({nameUserOng}) => {
  return (
    <>
      <DivStyled>
        <div className="ong-container">
          <h1 className="title-ong">Bem vindo, {nameUserOng}.</h1>
          <p className="paragraph-ong">
            Aqui você encontra apoio para abrigar seus bichinhos
          </p>
        </div>
        <img className="adopet-logo" src={AdoPet} alt="logoPet"></img>
      </DivStyled>
    </>
  );
};

export default OngTile;
