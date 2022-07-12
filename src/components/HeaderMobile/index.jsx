import { useContext, useState } from "react";
import Menu from "../../assets/Menu.png";
import Logo from "../../assets/logoAdopet.png";
import MenuMobile from "../MenuMobile";
import PawsLogo from "../../assets/pawslogo.png";
import { Head, StyledButton } from "./style";
import { RedirectContext } from "../../context/redirect";
import { LoginLogoutContext } from "../../context/login-logout";
import PhotoPerfil from "../PhotoPerfil";
import { NavMenu } from "../NavMenu";

const Header = ({ children }) => {
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
        logado ? (
          <MenuMobile setOpen={setOpen}>
            <p onClick={redirectToPage("/")}>início</p>
            <p onClick={redirectToPage("/ong-solicitation")}>Solicitações</p>
            <p onClick={redirectToPage("/registerPet")}>Cadastrar Pet</p>
            <p onClick={redirectToPage("/")}>Logout</p>
          </MenuMobile>
        ) : (
          <MenuMobile>
            <p onClick={redirectToPage("/")}>início</p>
            <p onClick={redirectToPage("/login")}>Login</p>
            <p onClick={redirectToPage("/cadastrar")}>Cadastrar</p>
            <p onClick={redirectToPage("/quem-somos")}>Quem somos</p>
          </MenuMobile>
        )
      ) : (
        false
      )}
    </>
  );
};

export default Header;
