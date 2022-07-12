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

	const OpenModal = () => {
		if (open === false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};

	return (
		<>
			<Head>
				<button className="menuMobile-button" onClick={OpenModal}>
					<img className="imgMenu" src={Menu} alt="Menu" />
				</button>
				{open === true ? (
					<div className="background">
						<MenuMobile setOpen={setOpen} selected={selected} />
					</div>
				) : (
					false
				)}
				<div className="logo-nav">
					<div className="logo-circle"></div>
					<img
						className="pawsLogo"
						src={PawsLogo}
						alt="Patinhas Logo"></img>
				</div>
				<NavMenu>{children}</NavMenu>
				<img className="imgLogo" src={Logo} alt="logoAdopet"></img>
			</Head>
		</>
	);
};

export default Header;
