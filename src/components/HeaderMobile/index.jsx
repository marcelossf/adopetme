import { useContext, useEffect, useState } from "react";
import Menu from "../../assets/Menu.png";
import Logo from "../../assets/logoAdopet.png";
import MenuMobile from "../MenuMobile";
import PawsLogo from "../../assets/pawslogo.png";
import { Head, StyledButton } from "./style";
import { RedirectContext } from "../../context/redirect";
import {LoginLogoutContext} from '../../context/login-logout';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { redirectToPage } = useContext(RedirectContext);
  const {logado, changeLogado} = useContext(LoginLogoutContext);

  const OpenModal = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const logout = () => {
    changeLogado();
    localStorage.removeItem('token');
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
        <nav className="container-buttons">
          <StyledButton
            onClick={() => {
              redirectToPage("/");
            }}
          >
            Início
          </StyledButton>
          <StyledButton
            onClick={() => {
              redirectToPage("/quem-somos");
            }}
          >
            Quem somos
          </StyledButton>
          <StyledButton
            onClick={() => {
              redirectToPage("/cadastrar");
            }}
          >
            Cadastrar
          </StyledButton>
          {logado ? (
            <StyledButton
              onClick={() => {
                logout();
              }}
            >
              Logout
            </StyledButton>
          ) : (
            <StyledButton
              onClick={() => {
                redirectToPage("/login");
              }}
            >
              Login
            </StyledButton>
          )}
        </nav>
        <img className="imgLogo" src={Logo} alt="logoAdopet"></img>
      </Head>
      {open === true ? <MenuMobile setOpen={setOpen} /> : false}
    </>
  );
};

export default Header;
