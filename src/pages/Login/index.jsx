import React, { useContext } from "react";
import { useState } from "react";
import logoAdopet from "../../assets/logoAdopet.png";
import { DivRigth, DivLeft, DivInstructionImg, DivsContainer } from "./styles";
import { CadastreForm } from "../../components/CadastreForm";
import { LoginForm } from "../../components/LoginForm";
import {RedirectContext} from '../../context/redirect'

function Login() {
  // const [form, setForm] = useState(false);

  const {redirectToPage, form} = useContext(RedirectContext);

  const instruction = [
    { img: "", Text: "oioi" },
    { img: "", Text: "oioi" },
    { img: "", Text: "oioi" },
    { img: "", Text: "oioi" },
    { img: "", Text: "oioi" },
    { img: "", Text: "oioi" },
  ];

  return (
    <DivsContainer>
      <DivRigth>
        <img src={logoAdopet} className="imgLogo" alt="logo" />

        {form ? <LoginForm /> : <CadastreForm />}
      </DivRigth>
      <div className="linha"></div>
      <DivLeft>
        {form ? (
          <span className="textspan">
            Entenda como encontrar seu animalzinho
          </span>
        ) : (
          <span className="textspan">
            Entenda como encontrar um adotante pro seu animalzinho
          </span>
        )}

        <div className="btns">
          <button type="button" className="btnslogin">
            Adotante
          </button>
          <button type="button" className="btnslogin">
            ONG
          </button>
        </div>

        <DivInstructionImg>
          {instruction.map((item) => (
            <img src={item.img} className="instructionimg" alt={item.text} />
          ))}
        </DivInstructionImg>

        <button type="button" className="btnslogin" onClick={() => {redirectToPage('/')}}>
          Voltar
        </button>
      </DivLeft>
    </DivsContainer>
  );
}

export default Login;
