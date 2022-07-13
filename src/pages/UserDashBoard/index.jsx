import Header from "../../components/HeaderMobile";
import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";

import { RegisterPet } from "../RegisterPet";
import { Link } from 'react-router-dom'

import { RedirectContext, redirectToPage } from "../../context/redirect";
import { useContext, useState } from "react";
import { NavMenu } from "../../components/NavMenu";
import MenuMobile from "../../components/MenuMobile";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const { redirectToPage } = useContext(RedirectContext);
  const [open, setOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem('token'))
  const OpenModal = () => {
    setOpen(!open);
  };

  if(!token){
    redirectToPage('/')
  }

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
      <UserTitle />
      <SearchBar />
      <Vitrine />
      <Footer>

        <MenuFooter>
          <Link to='/user'>Início</Link>
          <Link to='/solicitacao'>Solicitações</Link>
          <Link to='quem-somos'>Quem Somos</Link>

        </MenuFooter>
      </Footer>
    </>
  );
};

export default UserDashBoard;
