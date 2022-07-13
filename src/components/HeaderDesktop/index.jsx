import { useContext, useState } from "react";

import PawsLogo from "../../assets/pawslogo.png";

import { NavMenu } from "../NavMenu";

import { NavDesktop } from "../HeaderMobile/style";

import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

const HeaderDekstop = ({ children, selected }) => {
	const [open, setOpen] = useState(false);
	const { redirectToPage } = useContext(RedirectContext);
	const { logado } = useContext(LoginLogoutContext);
	const token = JSON.parse(localStorage.getItem("token")) || "";

	const OpenModal = () => {
		setOpen(!open);
	};

	return (
		<>
			<NavDesktop>
				<div className="logo-nav">
					<img
						className="pawsLogo"
						src={PawsLogo}
						alt="Patinhas Logo"></img>
					<div className="logo-circle"></div>
				</div>
				<NavMenu>{children}</NavMenu>
			</NavDesktop>
		</>
	);
};

export default HeaderDekstop;
