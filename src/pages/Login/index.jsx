import React, { useContext } from "react";
import { useState } from "react";
import logoAdopet from "../../assets/logoAdopet.png";
import { DivRigth, DivLeft, DivInstructionImg, DivsContainer } from "./styles";
import { CadastreForm } from "../../components/CadastreForm";
import { LoginForm } from "../../components/LoginForm";
import { RedirectContext } from "../../context/redirect";
import form1 from "../../assets/form1.png";
import trueFriend2 from "../../assets/trueFriend2.png";
import adocao1 from "../../assets/adocao1.png";
import a1 from "../../assets/pet 1.png";
import a6 from "../../assets/contact1.png";
import resposta1 from "../../assets/resposta1.png";
import calendar1 from "../../assets/calendar1.png";
import seeYouSoon from "../../assets/seeYouSoon.png";

function Login() {
  const [formulario, setFormulario] = useState(true);
  const { redirectToPage, form } = useContext(RedirectContext);
  const [userOng, setUserOng] = useState(false);
  const [disablebtn1, setDisablebtn1] = useState(false);
  const [disablebtn2, setDisablebtn2] = useState(true);

  const muda = () => {
    setUserOng(!userOng);
    setDisablebtn1(!disablebtn1);
    setDisablebtn2(!disablebtn2);
  };

  const instruction = [
    { img: form1, Text: "Crie a sua conta." },
    { img: trueFriend2, Text: "Procure o bixinho para adotar." },
    { img: adocao1, Text: "Preencha o formulário de adoção." },
    { img: resposta1, Text: "Aguarde a resposta da ONG." },
    {
      img: calendar1,
      Text: "A ONG responsável tem até três dias úteis para retornar a sua solicitação.",
    },
    {
      img: seeYouSoon,
      Text: "Caso aprovado, é só combinar o formato de entrega do seu novo amigo!",
    },
  ];
  const instruction2 = [
    { img: form1, Text: "Crie a sua conta." },
    { img: a1, Text: "Registre os animais que estão para adoção." },
    { img: adocao1, Text: "Aguardar solicitações de animais." },
    { img: calendar1, Text: "Confirmar solicitações dentro do prazo." },
    { img: resposta1, Text: "Entrar em contato com o adotante." },
    { img: a6, Text: "Caso aprovado, combinar formato de entrega do pet!" },
  ];

  return (
    <DivsContainer>
      <DivRigth>
        <img src={logoAdopet} className="imgLogo" alt="logo" />

        {form ? <LoginForm /> : <CadastreForm />}
      </DivRigth>
      <div className="linha"></div>
      <DivLeft>
        {userOng ? (
          <span className="textspan">
            Entenda como encontrar um adotante pro seu animalzinho
          </span>
        ) : (
          <span className="textspan">
            Entenda como encontrar seu animalzinho
          </span>
        )}

        <div className="btns">
          <button
            type="button"
            onClick={(muda)}
            className={disablebtn1 ? "btnslogin" : "btnslogin disable"}
          >
            Adotante
          </button>

          <button
            type="button"
            onClick={muda}
            className={disablebtn2 ? "btnslogin" : "btnslogin disable"}
          >
            ONG
          </button>
        </div>

        {userOng ? (
          <DivInstructionImg>
            {instruction2.map((item, index) => (
              <div className="textimg" key={index}>
                <div className="divimg">
                  <img
                    src={item.img}
                    key={index}
                    className="instructionimg"
                    alt={item.Text}
                  />
                </div>
                <span>{item.Text}</span>
              </div>
            ))}
          </DivInstructionImg>
        ) : (
          <DivInstructionImg>
            {instruction.map((item, index) => (
              <div className="textimg" key={index}>
                <div className="divimg">
                  <img
                    src={item.img}
                    key={index}
                    className="instructionimg"
                    alt={item.Text}
                  />
                </div>
                <span>{item.Text}</span>
              </div>
            ))}
          </DivInstructionImg>
        )}

        <button
          type="button"
          className="btnslogin"
          onClick={() => {
            redirectToPage("/");
          }}
        >
          Voltar
        </button>
      </DivLeft>
    </DivsContainer>
  );
}

export default Login;
