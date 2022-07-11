import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logoAdopet.png";
import MenuDropdown from "../../assets/Menu.png";

import { Footer } from "../../components/Footer";
import SloganRequest from "../../components/SloganRequest";
import { TableRequest } from "../../components/TableRequest";

import {
	HeaderContainer,
	MainContainer,
	NavContainer_mobile,
	Title,
} from "./style";

const UserRequest = () => {
	return (
		<>
			<HeaderContainer>
				<NavContainer_mobile className="menu-container">
					<button className="Menu-button">
						<img src={MenuDropdown} alt="Menu lateral" />
					</button>
				</NavContainer_mobile>

				<Title>
					<img src={Logo} alt="Logo" className="Logo" />
					<h1>Acompanhe o processo de adoção</h1>
				</Title>
			</HeaderContainer>

			<MainContainer>
				<section className="request-container">
					<h2 className="request-caption">Processo de adoção</h2>

					<TableRequest />
				</section>
				<div>
					<SloganRequest />
				</div>
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
