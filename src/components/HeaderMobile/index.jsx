import { useContext, useState } from "react";

import Logo from "../../assets/logoAdopet.png";
import Menu from "../../assets/Menu.png";
import PawsLogo from "../../assets/pawslogo.png";

import MenuMobile from "../MenuMobile";
import { NavMenu } from "../NavMenu";

import { Head } from "./style";

import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

const Header = ({ children, selected }) => {
	const [open, setOpen] = useState(false);
	const { redirectToPage } = useContext(RedirectContext);
	const { logado } = useContext(LoginLogoutContext);
	const token = JSON.parse(localStorage.getItem("token")) || "";

	const OpenModal = () => {
		setOpen(!open);
	};

	return (
		<>
			<Head>
				<button className="menuMobile-button">
					<img onClick={OpenModal} src={Menu} alt="Menu" />
				</button>
				<div className="logo-nav">
					<img
						className="pawsLogo"
						src={PawsLogo}
						alt="Patinhas Logo"></img>
					<div className="logo-circle"></div>
				</div>
				<NavMenu>{children}</NavMenu>
				<img className="imgLogo" src={Logo} alt="logoAdopet" />
			</Head>
			{open === true ? (
				token ? (
					<MenuMobile OpenModal={OpenModal}>
						<a onClick={() => redirectToPage("/")}>início</a>
						<a onClick={() => redirectToPage("/ong-solicitation")}>
							Solicitações
						</a>
						<a onClick={() => redirectToPage("/registerPet")}>
							Cadastrar Pet
						</a>
						<a onClick={() => redirectToPage("/")}>Logout</a>
					</MenuMobile>
				) : (
					<MenuMobile OpenModal={OpenModal}>
						<a onClick={() => redirectToPage("/")}>início</a>
						<a onClick={() => redirectToPage("/login")}>Login</a>
						<a onClick={() => redirectToPage("/cadastrar")}>
							Cadastrar
						</a>
						<a onClick={() => redirectToPage("/quem-somos")}>
							Quem somos
						</a>
					</MenuMobile>
				)
			) : (
				false
			)}
		</>
	);
};

export default Header;
