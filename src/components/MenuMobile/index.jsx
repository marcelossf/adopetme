import { useContext } from "react";
import { Link } from "react-router-dom";

import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";

import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";

import { Section } from "./style";

const MenuMobile = ({ setOpen, selected }) => {
	const { setLogado } = useContext(LoginLogoutContext);
	const { activeOng } = useContext(PetOngContext);
	const { redirectToPage } = useContext(RedirectContext);

	const token = JSON.parse(localStorage.getItem("token")) || "";

	const closeModal = () => {
		setOpen(false);
	};

	const logout = () => {
		setLogado(false);
		localStorage.clear();
		redirectToPage("/");
	};

	return (
		<Section>
			<div className="container-img">
				<img className="logoBlack" src={LogoBlack} alt="AdoPetMe"></img>
				<img
					onClick={closeModal}
					className="logoClose"
					src={Close}
					alt="LogoClose"
				/>
			</div>
			<div className="menu-links">
				{token && activeOng ? (
					<>
						<p
							className={
								selected === "inicio"
									? "link-menu link-menu--selected"
									: "link-menu"
							}>
							Início
						</p>
						<p className="link-menu">Solicitações</p>
						<p
							onClick={() => redirectToPage("/registerPet")}
							className="link-menu">
							Cadastrar Pet
						</p>
						<p onClick={logout} className="link-menu">
							Logout
						</p>
					</>
				) : (
					<>
						<Link
							to="/"
							className={
								selected === "inicio"
									? "link-menu link-menu--selected"
									: "link-menu"
							}>
							Início
						</Link>
						<Link
							to="/login"
							className={
								selected === "login"
									? "link-menu link-menu--selected"
									: "link-menu"
							}>
							Login
						</Link>
						<Link
							to="/cadastrar"
							className={
								selected === "cadastrar"
									? "link-menu link-menu--selected"
									: "link-menu"
							}>
							Cadastrar
						</Link>
						<Link
							to="/quem-somos"
							className={
								selected === "quem somos"
									? "link-menu link-menu--selected"
									: "link-menu"
							}>
							Quem somos
						</Link>
					</>
				)}
			</div>
		</Section>
	);
};

export default MenuMobile;
