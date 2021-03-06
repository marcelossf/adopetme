import { ContainerCard, Container, Separator, ContainerButton, LoaderContainer } from "./style";
import { useContext } from "react";
import { SolicitationContext } from "../../context/solicitation";
import { UserContext } from "../../context/user";
import { Button } from "../Button";
import { Loading } from "../Loading";

const CardRetangle = () => {
  const { solicitationData, solicitationLoading } =
    useContext(SolicitationContext);
  const { user } = useContext(UserContext);
  const ongName = user?.name;

  const ongSolicitation = solicitationData.filter(
    (solicitation) => solicitation?.petData.ong === ongName
  );
  const newOngSolicitation = ongSolicitation.filter(
    (solicitation) => solicitation.user
  );

  return (
    <>
      {solicitationLoading ? (
        <LoaderContainer>
          <Loading />
        </LoaderContainer>
      ) : (
        <ContainerCard>
          <section className="start-align">
            <div className="page">
              <h2 className="solicitacao">Solicitações</h2>
            </div>
            <div className="card-blue">
              <div>
                <p className="card-p">Solicitações</p>
                <div className="trace-line"></div>

                {newOngSolicitation?.map((solicitation, index) => {
                  return (
                    <p key={index} className="card-p">
                      {solicitation.user.name}
                    </p>
                  );
                })}
              </div>
              <div className="trace-up"></div>
              <div className="div">
                <p className="nul">null</p>

                {newOngSolicitation?.map((solicitation) => {
                  return (
                    <>
                      <Container>
                        <p className="card-p-block">
                          Tem grade em casa? : {solicitation.data.pergunta1}
                        </p>
                        <p className="card-p-block">
                          Tem outros animais? : {solicitation.data.pergunta2}
                        </p>
                        <p className="card-p-block">
                          Tem condições de dar auxílio médico? :{" "}
                          {solicitation.data.pergunta3}
                        </p>
                        <p className="card-p-block">
                          Tem um ambiente adequado? :{" "}
                          {solicitation.data.pergunta4}
                        </p>
                        <p className="card-p-block">
                          Tem Crianças? : {solicitation.data.pergunta5}
                        </p>
                        <div className="divpergutnas">
                          <label>Tem tela em casa?</label>
                          <input value={solicitation.data.pergunta1} />

                          <label>Tem outros animais?</label>
                          <input value={solicitation.data.pergunta2} />

                          <label>Tem condições de dar auxílio médico?</label>
                          <input value={solicitation.data.pergunta3} />

                          <label>Tem um ambiente adequado?</label>
                          <input value={solicitation.data.pergunta4} />

                          <label>Tem Crianças?</label>
                          <input value={solicitation.data.pergunta5} />
                        </div>

                        <div className="container-inputs">
                          <img
                            src={solicitation.petData.img}
                            alt={solicitation.petData.petName}
                          ></img>
                          <span>
                            <p className="p-hide">
                              Nome: {solicitation.petData.petName}
                            </p>
                          </span>
                          <span>
                            <p className="p-hide">
                              Idade: {solicitation.petData.age}
                            </p>
                          </span>
                          <span>
                            <p className="p-hide">
                              Sexo: {solicitation.petData.gender}
                            </p>
                          </span>
                        </div>
                      </Container>
                      <ContainerButton>
                        <Button blackSchema>Aceitar</Button>
                        <Button blackSchema>Rejeitar</Button>
                      </ContainerButton>
                      <Separator></Separator>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        </ContainerCard>
      )}
    </>
  );
};

export default CardRetangle;
