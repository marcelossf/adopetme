import React, { useContext, useState } from "react";

import adocao1 from "../../assets/adocao1.png";
import calendar1 from "../../assets/calendar1.png";
import a6 from "../../assets/contact1.png";
import form1 from "../../assets/form1.png";
import logoAdopet from "../../assets/logoAdopet.png";
import a1 from "../../assets/pet 1.png";
import resposta1 from "../../assets/resposta1.png";
import seeYouSoon from "../../assets/seeYouSoon.png";
import trueFriend2 from "../../assets/trueFriend2.png";

import { CadastreForm } from "../../components/CadastreForm";
import { ButtonForm } from "../../components/CadastreForm/style";
import { LoginForm } from "../../components/LoginForm";
import { RedirectContext } from "../../context/redirect";

import {
	DivInstructionImg,
	DivLeft,
	DivRigth,
	DivsContainer,
	HeaderLeft,
} from "./styles";

function Login() {

	const [formulario, setFormulario] = useState(true);
	const [disablebtn2, setDisablebtn2] = useState(true);
	const [userOng, setUserOng] = useState(false);
	const [disablebtn1, setDisablebtn1] = useState(false);


	const { redirectToPage, form } = useContext(RedirectContext);

	const muda = () => {
		setUserOng(!userOng);
		setDisablebtn1(!disablebtn1);
		setDisablebtn2(!disablebtn2);
	};

	const instruction = [
		{ img: form1, Text: "1. Crie a sua conta." },
		{ img: trueFriend2, Text: "2. Procure o bixinho para adotar." },
		{ img: adocao1, Text: "3. Preencha o formulário de adoção." },
		{ img: resposta1, Text: "4. Aguarde a resposta da ONG." },
		{
			img: calendar1,
			Text: "5. A ONG responsável tem até três dias úteis para retornar a sua solicitação.",
		},
		{
			img: seeYouSoon,
			Text: "6. Caso aprovado, é só combinar o formato de entrega do seu novo amigo!",
		},
	];

	const instruction2 = [
		{ img: form1, Text: "1. Crie a sua conta." },
		{ img: a1, Text: "2. Registre os animais que estão para adoção." },
		{ img: adocao1, Text: "3. Aguardar solicitações de animais." },
		{ img: calendar1, Text: "4. Confirmar solicitações dentro do prazo." },
		{ img: resposta1, Text: "5. Entrar em contato com o adotante." },
		{
			img: a6,
			Text: "6. Caso aprovado, combinar formato de entrega do pet!",
		},
	];

	return (
		<DivsContainer>
			<DivRigth>
				<div className="imgLogo">
					<img src={logoAdopet} alt="logo" />
				</div>
				{form ? <LoginForm /> : <CadastreForm />}
			</DivRigth>
			<div className="linha"></div>
			<DivLeft>
				{userOng ? (
					<HeaderLeft>
						<ButtonForm
							type="button"
							className="Home"
							onClick={() => {
								redirectToPage("/");
							}}>
							voltar
						</ButtonForm>
						<h1 className="textspan">
							Como encontrar um adotante:
						</h1>
					</HeaderLeft>
				) : (
					<HeaderLeft>
						<ButtonForm
							type="button"
							className="Home"
							onClick={() => {
								redirectToPage("/");
							}}>
							voltar
						</ButtonForm>
						<h1 className="textspan ">Como adotar um Pet:</h1>
					</HeaderLeft>
				)}

				<div className="btns">
					<button
						type="button"
						onClick={muda}
						className={
							disablebtn1 ? "btnslogin" : "btnslogin disable"
						}>
						Adotante
					</button>

					<button
						type="button"
						onClick={muda}
						className={
							disablebtn2 ? "btnslogin" : "btnslogin disable"
						}>
						ONG
					</button>
				</div>

				{userOng ? (
					<DivInstructionImg>
						{instruction2.map((item, index) => (
							<div className="textimg" key={index}>
								<div className="divimg">
									<img
										key={index}
										src={item.img}
										className="instructionimg"
										alt={item.Text}
									/>
								</div>
								<p>{item.Text}</p>
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
			</DivLeft>
		</DivsContainer>
	);
}

export default Login;
