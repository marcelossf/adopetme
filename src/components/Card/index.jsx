import { useContext, useState } from "react";

import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

import { Button } from "../Button";
import ModalSolicitation from "../ModalSolicitation";

import { Container, DivInfos, FigureStyled } from "./styles";

function Card({ pet }) {
	const { logado } = useContext(LoginLogoutContext);
	const { redirectToPage } = useContext(RedirectContext);
	const [open, setOpen] = useState(false);

	const handleRedirect = () => {
		if (!logado) {
			redirectToPage("/login");
		} else {
			setOpen(true);
		}
	};

	return (
		<Container>
			{open === true ? (
				<ModalSolicitation setOpen={setOpen} open={open} />
			) : (
				false
			)}
			<FigureStyled>
				<figure>
					<img src={pet.img} alt={pet.petName} />
				</figure>
				<p>
					{pet.petName.replace(
						pet.petName[0],
						pet.petName[0].toUpperCase()
					)}
				</p>
			</FigureStyled>

			<DivInfos>
				<span>Raça: {pet.breed}</span>

				{/* <span>Idade: {pet?.age.replace(pet?.age[0], pet?.age[0].toUpperCase())}</span> */}
				<span>ONG: {pet.ong}</span>

				<span></span>
			</DivInfos>

			<Button onClick={handleRedirect}>Solicitar Adoção</Button>
		</Container>
	);
}

export default Card;
