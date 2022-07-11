import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logoAdopet.png";
import MenuDropdown from "../../assets/Menu.png";

import { Footer } from "../../components/Footer";
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
					<table className="request-table">
						<caption className="request-caption">
							Processo de adoção
						</caption>
						<tr className="table-headers">
							<th>Nome pet</th>
							<th>Ong responsável</th>
							<th className="status"> status</th>
						</tr>
						<tr className="table-data">
							<td className="first">
								<span></span>PitbullFofo
							</td>
							<td>LovePaws</td>
							<td className="status aprovado entregue negado revisao pendente">
								em revisão
							</td>
						</tr>
						<tr className="table-data">
							<td className="first">
								<span></span>PitbullFofo
							</td>
							<td>LovePaws</td>
							<td>pendente</td>
						</tr>
					</table>
				</section>
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
