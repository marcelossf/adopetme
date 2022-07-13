import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { Button } from "../../components/Button";

import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import SloganRequest from "../../components/SloganRequest";
import StepsRequest from "../../components/StepsRequest";
import { TableRequest } from "../../components/TableRequest";
import { MarginNavBar } from "../../styles/marginNavBar";

import { MainContainer } from "./style";
const UserRequest = () => {
	const [selected, setSelected] = useState(true);
	const history = useHistory();
	const handleRoute = (route) => {
		route && history.push(`/${route}`);
	};

	return (
		<>
			<HeaderDekstop>
				<Button
					className="button-selected"
					width={"230px"}
					onClick={() => handleRoute()}>
					Início
				</Button>
				<Button
					width={"230px"}
					onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</Button>
				<Button
					width={"230px"}
					onClick={() => handleRoute("cadastrar")}>
					Cadastrar
				</Button>
				<Button width={"230px"} onClick={() => handleRoute("login")}>
					Login
				</Button>
			</HeaderDekstop>
			<HeaderMobile selected={selected}>
				<LinksMenu
					selected={selected}
					onClick={() => handleRoute()}
					className="link--selected ">
					Início
				</LinksMenu>
				<LinksMenu onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</LinksMenu>
				<LinksMenu onClick={() => handleRoute("cadastrar")}>
					Cadastrar
				</LinksMenu>
				<LinksMenu onClick={() => handleRoute("login")}>
					Login
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
