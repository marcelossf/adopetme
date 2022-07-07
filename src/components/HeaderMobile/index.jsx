import { useState } from "react";
import Menu from "../../assets/Menu.png";
import Logo from "../../assets/logoAdopet.png";
import MenuMobile from "../MenuMobile";
import PawsLogo from "../../assets/pawslogo.png";
import { Head, StyledButton } from "./style";

const Header = () => {
  const [open, setOpen] = useState(false);
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
        <nav className="container-buttons">
          <StyledButton>Início</StyledButton>
          <StyledButton>Quem somos</StyledButton>
          <StyledButton>Cadastrar</StyledButton>
          <StyledButton>Login</StyledButton>
        </nav>
        <img className="imgLogo" src={Logo} alt="logoAdopet"></img>
      </Head>
      {open === true ? <MenuMobile setOpen={setOpen} /> : false}
    </>
  );
};

export default Header;
