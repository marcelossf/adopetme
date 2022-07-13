
import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";


import { Link, useHistory } from 'react-router-dom'

import { RedirectContext } from "../../context/redirect";
import { useContext, useState } from "react";
import HeaderDekstop from "../../components/HeaderDesktop";
import { Button } from "../../components/Button";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import { MarginNavBar } from "../../styles/marginNavBar";



const UserDashBoard = () => {
  const { redirectToPage } = useContext(RedirectContext);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(true);
  const token = JSON.parse(localStorage.getItem('token'))
  const OpenModal = () => {
    setOpen(!open);
  };

  const history = useHistory()

  if(!token){
    redirectToPage('/')
  }

  const handleRoute = (route) => {
		route && history.push(`/${route}`);
	};
  return (
    <>
      {/* <Header>
        <MenuMobile OpenModal={OpenModal}>
          <p onClick={() => redirectToPage("/")}>início</p>
          <p onClick={() => redirectToPage("/ong-solicitation")}>
            Solicitações
          </p>
          <p onClick={() => redirectToPage("/registerPet")}>Cadastrar Papar</p>
          <p onClick={() => redirectToPage("/")}>Logout</p>
        </MenuMobile>
        <NavMenu>

        </NavMenu>
      </Header> */}
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
      <UserTitle />
      <SearchBar />
      <Vitrine />
      <Footer>

        <MenuFooter>
          <Link to='/user'>Início</Link>
          <Link to='/user-solicitation'>Solicitações</Link>
          <Link to='quem-somos'>Quem Somos</Link>

        </MenuFooter>
      </Footer>
    </>
  );
};

export default UserDashBoard;
