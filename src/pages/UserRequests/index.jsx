import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logoAdopet.png";
import MenuDropdown from "../../assets/Menu.png";

import { Footer } from "../../components/Footer";
import SloganRequest from "../../components/SloganRequest";
import StepsRequest from "../../components/StepsRequest";
import { TableRequest } from "../../components/TableRequest";
import { SolicitationContext } from "../../context/solicitation";

import {
	HeaderContainer,
	MainContainer,
	NAVCONTAINER_MOBILE,
	Title,
} from "./style";
const UserRequest = () => {

	return (
		<>
			<HeaderContainer>
				<NAVCONTAINER_MOBILE className="menu-container">
					<button className="Menu-button">
						<img src={MenuDropdown} alt="Menu lateral" />
					</button>
				</NAVCONTAINER_MOBILE>

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
           <StepsRequest />
				</div>



};

export default UserRequest;
