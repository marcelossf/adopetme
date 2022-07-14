import { useContext } from "react";

import Pitbull from "../../assets/pit.png";

import { SolicitationContext } from "../../context/solicitation";

import { ContainerCard } from "./style";

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
              
              <input placeholder="User 123"></input>
              <label>pergunta 1</label>


							<p className="card-p">Ivete </p>
							<p className="card-p">Didi </p>
							<p className="card-p">Igor </p>
						</div>
						<div className="trace-up"></div>
						<div className="div">
							<p className="nul">null</p>
							{userData ? (
								<p className="card-p">{userData.name}</p>
							) : (
								<p className="card-p-block">Ivete</p>
							)}
							{userData ? (
								<p className="card-p-block">
									{solicitationForm.pergunta1}
								</p>
							) : (
								<p className="card-p-block">pergunta</p>
							)}
						
							<input placeholder="User 123"></input>
							<label>A casa é telada?</label>

							<input placeholder="User 123"></input>
							<label>Tem outros animais?</label>

							<input placeholder="resposta"></input>
							<label>Tem condições de dar auxilio médico?</label>

							<input placeholder="resposta"></input>
							<label>O pet terá acesso a rua?</label>

							<input placeholder="resposta"></input>
							<label>Possui crianças?</label>
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
