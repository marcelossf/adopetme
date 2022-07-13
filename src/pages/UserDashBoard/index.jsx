import { useContext, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import { LinksMenu } from "../../components/MenuMobile/style";
import PhotoPerfil from "../../components/PhotoPerfil";

import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import Vitrine from "../../components/Vitrine";

import { UserContext } from "../../context/user";

import { MarginNavBar } from "../../styles/marginNavBar";




const UserDashBoard = () => {
	const [selected, setSelected] = useState(true);
	const history = useHistory();
	const { logout } = useContext(UserContext);

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
					onClick={() => handleRoute("user-solicitation")}>
					Solicitações
				</Button>
				<Button
					width={"230px"}
					onClick={() => handleRoute("quem-somos")}>
					Quem somos
				</Button>
				<PhotoPerfil />
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
				<LinksMenu onClick={() => handleRoute("user-solicitation")}>
					Solicitações
				</LinksMenu>
				<LinksMenu
					onClick={() => {
						logout();
					}}>
					Logout
				</LinksMenu>
			</HeaderMobile>

			<MarginNavBar></MarginNavBar>
			<UserTitle />
			<SearchBar />
			<Vitrine />
			<Footer>
				<MenuFooter>
					<Link to="/user">Início</Link>
					<Link to="/user-solicitation">Solicitações</Link>
					<Link to="quem-somos">Quem Somos</Link>
				</MenuFooter>
			</Footer>
		</>
	);
};

export default UserDashBoard;
