import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SolicitationContext } from "../../context/solicitation";
import { UserContext } from "../../context/user";
import { Button } from "../Button";
import ModalSolicitation from "../ModalSolicitation";
import { Container, DivInfos, FigureStyled } from "./styles";

function Card({ pet }) {
	const token = localStorage.getItem("token");
	const { user } = useContext(UserContext);
	const [open, setOpen] = useState(false);
	const { setPetData } = useContext(SolicitationContext);
	const history = useHistory();

	const handleRedirect = (pet) => {
		if (!token) {
			history.push("/login");
		} else {
			setOpen(true);
			setPetData(pet);
		}
	};

	const handleRedirectOng = (pet) => {
		setPetData(pet);
		history.push("/registerPet");
	};

	return (
		<Container>
			{open === true ? (
				<ModalSolicitation pet={pet} setOpen={setOpen} open={open} />
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
				<span>Idade: {pet.age}</span>
				<span>ONG: {pet.ong}</span>
				<span>Gênero: {pet.gender}</span>

				<span></span>
			</DivInfos>
			{user.type === "ong" ? (
				<Button onClick={() => handleRedirectOng(pet)}>Editar</Button>
			) : (
				<Button onClick={() => handleRedirect(pet)}>
					Solicitar Adoção
				</Button>
			)}
		</Container>
	);
}

export default Card;
