import { ContainerCard } from "./style";
import Pitbull from "../../assets/pit.png";
import { useContext } from "react";
import { SolicitationContext } from "../../context/solicitation";

const CardRetangle = () => {
  const { solicitationForm, userData, petData } =
    useContext(SolicitationContext);

  return (
    <>
      <ContainerCard>
        <section className="start-align">
          <div className="page">
            <h2 className="solicitacao">Solicitações</h2>
          </div>
          <div className="card-blue">
            <div>
              <p className="card-p">Solicitações</p>
              <div className="trace-line"></div>
              {userData ? (
                <p className="card-p">{userData.name}</p>
              ) : (
                <p className="card-p">User 123</p>
              )}
              <p className="card-p">User 123</p>
              <p className="card-p">User 123</p>
              <p className="card-p">User 123</p>
            </div>
            <div className="trace-up"></div>
            <div className="div">
              <p className="nul">null</p>
              {userData ? (
                <p className="card-p">{userData.name}</p>
              ) : (
                <p className="card-p-block">User 123</p>
              )}
              {userData ? (
                <p className="card-p-block">{solicitationForm.pergunta1}</p>
              ) : (
                <p className="card-p-block">pergunta 1 : resposta</p>
              )}
              <p className="card-p-block">pergunta 2 : resposta</p>
              <p className="card-p-block">pergunta 3 : resposta</p>
              <p className="card-p-block">pergunta 4 : resposta</p>
              <p className="card-p-block">pergunta 5 : resposta</p>
              <input placeholder="User 123"></input>
              <label>pergunta 1</label>

              <input placeholder="User 123"></input>
              <label>pergunta 2</label>

              <input placeholder="resposta"></input>
              <label>pergunta 3</label>

              <input placeholder="resposta"></input>
              <label>pergunta 4</label>

              <input placeholder="resposta"></input>
              <label>pergunta 5</label>

              <input placeholder="resposta"></input>
              <label>pergunta 6</label>
            </div>
            <div className="container-inputs">
              <img src={Pitbull} alt="pitbull"></img>
              <span>
                <p className="p-hide">Nome: Pitbull fofo</p>
              </span>
              <span>
                <p className="p-hide">Idade: 1 ano</p>
              </span>
              <span>
                <p className="p-hide">Cidade: guarulhos</p>
              </span>
              <span>
                <p className="p-hide">sexo: Masculino</p>
              </span>
            </div>
          </div>
        </section>
      </ContainerCard>
    </>
  );
};

export default CardRetangle;
