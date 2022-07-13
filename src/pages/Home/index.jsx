import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";

import SloganAdopetme from "../../components/SloganAdopetme";
import Vitrine from "../../components/Vitrine";

import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

import { Link } from "../../components/MenuMobile/style.js";
import { MarginNavBar } from "../../styles/marginNavBar";

function Home() {
	const { logado, changeLogado } = useContext(LoginLogoutContext);
	const { redirectToPage } = useContext(RedirectContext);
	const token = JSON.parse(localStorage.getItem("token")) || "";
	const user = JSON.parse(localStorage.getItem("user")) || "";

	const [selected, setSelected] = useState(true);

	if (token) {
		if (user.type === "ong") {
			redirectToPage("/ong");
		} else {
			redirectToPage("/user");
		}
	}

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
				<Link
					selected={selected}
					onClick={() => handleRoute()}
					className="link--selected ">
					Início
				</Link>
				<Link onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</Link>
				<Link onClick={() => handleRoute("cadastrar")}>Cadastrar</Link>
				<Link onClick={() => handleRoute("login")}>Login</Link>
			</HeaderMobile>

			<MarginNavBar></MarginNavBar>

			<SloganAdopetme />
			<Carousel />
			<Vitrine />

			<Footer>
				<Link to="/">Início</Link>
				<Link to="/quem-somos">Quem Somos</Link>
				<Link to="/cadastrar">Cadastrar</Link>
				<Link to="/login">Login</Link>
			</Footer>
		</>
	);
}

export default Home;
