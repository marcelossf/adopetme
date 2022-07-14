import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AnimalRegister } from "../../components/AnimalRegister";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import OngTile from "../../components/OngTitle";
import PhotoPerfil from "../../components/PhotoPerfil";
import { MarginNavBar } from "../../styles/marginNavBar";
import { Container } from "./style";

export const RegisterPet = () => {
	const [selected] = useState(true);
	const history = useHistory();

	const handleRoute = (route) => {
		route && history.push(`/${route}`);
	};

	return (
		<Container>
			<HeaderDekstop>
				<Button width={"230px"} onClick={() => handleRoute()}>
					Início
				</Button>
				<Button
					width={"230px"}
					onClick={() => handleRoute("ong-solicitation")}>
					Solicitações
				</Button>
				<Button
					className="button-selected"
					width={"230px"}
					onClick={() => handleRoute("registerPet")}>
					Cadastrar Pet
				</Button>
				<PhotoPerfil />
			</HeaderDekstop>

			<HeaderMobile selected={selected}>
				<LinksMenu onClick={() => handleRoute()}>Início</LinksMenu>
				<LinksMenu onClick={() => handleRoute("ong-solicitation")}>
					Solicitações
				</LinksMenu>
				<LinksMenu
					lected={selected}
					className="link--selected"
					onClick={() => handleRoute("registerPet")}>
					Cadastrar Pet
				</LinksMenu>
				<LinksMenu onClick={() => handleRoute()}>Logout</LinksMenu>
			</HeaderMobile>
			<MarginNavBar></MarginNavBar>
			<OngTile />

			<AnimalRegister />
			<Footer>
				<Link to="/">Início</Link>
				<Link to="/ong-solicitation">Solicitações</Link>
				<Link to="/registerPet">Cadastrar Pet</Link>
			</Footer>
		</Container>
	);
};
