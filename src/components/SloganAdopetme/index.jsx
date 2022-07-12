import React from "react";

import LogoAdopetme from "../../assets/logoAdopet.png";

import { Container, Slogan } from "./styles";

function SloganAdopetme() {
	return (
		<Container>
			<Slogan>
				<p>
					Conectando diariamente ONGs parceiras com potenciais
					adotantes.
				</p>
			</Slogan>
			<img src={LogoAdopetme} className="logoAdopetme" />
		</Container>
	);
}

export default SloganAdopetme;
