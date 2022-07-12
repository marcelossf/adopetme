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
      {open === true ? <MenuMobile setOpen={setOpen} /> : false}
    </>
  );
};

export default Header;
