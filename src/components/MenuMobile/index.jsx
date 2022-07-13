import { useContext } from "react";

import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";

import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";

import { Section } from "./style";

const MenuMobile = ({ OpenModal, selected, children }) => {
	const { setLogado } = useContext(LoginLogoutContext);
	const { activeOng } = useContext(PetOngContext);
	const { redirectToPage } = useContext(RedirectContext);

	const token = JSON.parse(localStorage.getItem("token")) || "";

	const logout = () => {
		setLogado(false);
		localStorage.clear();
		redirectToPage("/");
	};

	return (
		<Section>
			<div className="container-img">
				<img className="logoBlack" src={LogoBlack} alt="AdoPetMe" />
				<button className="logoClose-button">
					<img
						onClick={OpenModal}
						className="logoClose"
						src={Close}
						alt="LogoClose"
					/>
				</button>
			</div>
			<div className="links-container">{children}</div>
		</Section>
	);
};

export default MenuMobile;
