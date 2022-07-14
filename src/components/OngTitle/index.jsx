import { useContext } from "react";
import AdoPet from "../../assets/logoAdopet.png";
import { UserContext } from "../../context/user";
import { DivStyled } from "./style";

const OngTile = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<DivStyled>
				<div className="ong-container">
					<h1 className="title-ong">Bem vindo, {user.name}!</h1>
					<p className="paragraph-ong">
						Aqui você encontra apoio para abrigar seus bichinhos
					</p>
				</div>
				<img className="adopet-logo" src={AdoPet} alt="logoPet" />
			</DivStyled>
		</>
	);
};

export default OngTile;
