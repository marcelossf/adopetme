import React, { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logoAdopet.png";

import MenuDropdown from "../../assets/Menu.png";

import { Button } from "../../components/Button";

import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import PhotoPerfil from "../../components/PhotoPerfil";
import SloganRequest from "../../components/SloganRequest";
import StepsRequest from "../../components/StepsRequest";
import { TableRequest } from "../../components/TableRequest";

import { UserContext } from "../../context/user";
import { MarginNavBar } from "../../styles/marginNavBar";

import { SolicitationContext } from "../../context/solicitation";

import { HeaderContainer, MainContainer, Title } from "./style";

const UserRequest = () => {
	const { logout } = useContext(UserContext);

	const [selected, setSelected] = useState(true);
	const history = useHistory();

	const handleRoute = (route) => {
		route && history.push(`/${route}`);
	};

	return (
		<>
			<HeaderDekstop>
				<Button width={"230px"} onClick={() => handleRoute("user")}>
					Início
				</Button>
				<Button
					width={"230px"}
					className="button-selected"
					onClick={() => handleRoute("user-solicitation")}>
					Solicitações
				</Button>
				<Button
					width={"230px"}
					onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</Button>
				<PhotoPerfil />
			</HeaderDekstop>

			<HeaderMobile>
				<LinksMenu onClick={() => handleRoute("user")}>
					Início
				</LinksMenu>
				<LinksMenu
					selected={selected}
					className="link--selected"
					onClick={() => handleRoute("user-solicitation")}>
					Solicitações
				</LinksMenu>
				<LinksMenu onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</LinksMenu>
				<LinksMenu
					onClick={() => {
						logout();
					}}>
					Logout
				</LinksMenu>
			</HeaderMobile>

			<MarginNavBar></MarginNavBar>

			<MainContainer>
				<section className="request-container">
					<h2 className="request-caption">Processo de adoção</h2>

					<TableRequest />
				</section>
				<div>
					<SloganRequest />
					<StepsRequest />
				</div>

				<StepsRequest />
			</MainContainer>

			<Footer>
				<Link to="/">Início</Link>
				<Link to="">Quero adotar</Link>
				<Link to="/">Solicitações</Link>
			</Footer>
		</>
	);

};

export default UserRequest;
