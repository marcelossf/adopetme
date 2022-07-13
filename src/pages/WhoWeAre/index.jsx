import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import PhotoPerfil from "../../components/PhotoPerfil";
import { QuemSomos } from "../../components/WhoWe";
import { UserContext } from "../../context/user";
import { MarginNavBar } from "../../styles/marginNavBar";

function WhoWeAre() {
	const { user, logout } = useContext(UserContext);

	const [selected, setSelected] = useState(true);

	const history = useHistory();

	const handleRoute = (route) => {
		route ? history.push(`/${route}`) : history.push("/");
	};

	return (
		<>
			{user ? (
				<>
					<HeaderDekstop>
						<Button width={"230px"} onClick={() => handleRoute()}>
							Início
						</Button>
						<Button
							width={"230px"}
							onClick={() => handleRoute("user-solicitation")}>
							Solicitações
						</Button>
						<Button
							className="button-selected"
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
						<LinksMenu
							onClick={() => handleRoute("user-solicitation")}>
							Solicitações
						</LinksMenu>
						<LinksMenu onClick={() => logout()}>Logout</LinksMenu>
					</HeaderMobile>
					<MarginNavBar></MarginNavBar>
					<QuemSomos />
					<Footer>
						<Link to="/">Início</Link>
						<Link to="/user-solicitation">Solicitações</Link>
						<Link to="/quem-somos">Quem somos</Link>
					</Footer>
				</>
			) : (
				<>
					<HeaderDekstop>
						<Button width={"230px"} onClick={() => handleRoute()}>
							Início
						</Button>
						<Button
							className="button-selected"
							width={"230px"}
							onClick={() => handleRoute("quem-somos")}>
							Quem somos
						</Button>
						<Button
							width={"230px"}
							onClick={() => handleRoute("cadastrar")}>
							Cadastrar
						</Button>
						<Button
							width={"230px"}
							onClick={() => handleRoute("login")}>
							Login
						</Button>
					</HeaderDekstop>
					<HeaderMobile>
						<LinksMenu onClick={() => handleRoute()}>
							Início
						</LinksMenu>
						<LinksMenu
							selected={selected}
							onClick={() => handleRoute("quem-somos")}
							className="link--selected ">
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
					<QuemSomos />
					<Footer>
						<Link to="/">Início</Link>
						<Link to="/quem-somos">Quem somos</Link>
						<Link to="/cadastrar">Cadastrar</Link>
						<Link to="/login">Login</Link>
					</Footer>
				</>
			)}
		</>
	);
}

export default WhoWeAre;
