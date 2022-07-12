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
        <img
          onClick={OpenModal}
          className="imgMenu"
          src={Menu}
          alt="Menu"
        ></img>
        <div className="circle"></div>
        <img className="pawsLogo" src={PawsLogo} alt="Patinhas Logo"></img>
        <NavMenu>{children}</NavMenu>
        <img className="imgLogo" src={Logo} alt="logoAdopet"></img>
      </Head>
      {open === true ? (
        token ? (
          <MenuMobile OpenModal={OpenModal}>
            <p onClick={() => redirectToPage("/")}>início</p>
            <p onClick={() => redirectToPage("/ong-solicitation")}>
              Solicitações
            </p>
            <p onClick={() => redirectToPage("/registerPet")}>Cadastrar Pet</p>
            <p onClick={() => redirectToPage("/")}>Logout</p>
          </MenuMobile>
        ) : (
          <MenuMobile  OpenModal={OpenModal}>
            <p onClick={() => redirectToPage("/")}>início</p>
            <p onClick={() => redirectToPage("/login")}>Login</p>
            <p onClick={() => redirectToPage("/cadastrar")}>Cadastrar</p>
            <p onClick={() => redirectToPage("/quem-somos")}>Quem somos</p>
          </MenuMobile>
        )
      ) : (
        false
      )}
    </>
  );
};

export default Header;
