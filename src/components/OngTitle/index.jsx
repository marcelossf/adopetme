import { DivStyled } from "./style";
import AdoPet from "../../assets/logoAdopet.png";
import { UserContext } from "../../context/user";
import { useContext } from "react";


const OngTile = () => {
 
  const { user } = useContext(UserContext);
  const { name } = user;

  
  return (
    <>
      <DivStyled>
        <div className="ong-container">
          <h1 className="title-ong">Bem vindo, {name}.</h1>
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
