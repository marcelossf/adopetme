import { useContext } from "react";
import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";
import { LoginLogoutContext } from "../../context/login-logout";
import { LinksMenuMobile } from "../LinksMenuMobile";
import { Section } from "./style";

const MenuMobile = ({ setOpen }) => {
  const { logado } = useContext(LoginLogoutContext);

  const closeModal = () => {
    setOpen(false);
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
        ></img>
      </div>
      <div className="menu-links">
        {logado ? (
          <>
          <p className="text-menu">Início</p>
          <p className="text-menu">Quero Adotar</p>
          <p className="text-menu">Solicitações</p>
          <p className="text-menu">Logout</p>
        </>
        ) : (
          <>
            <p className="text-menu">Início</p>
            <p className="text-menu">Login</p>
            <p className="text-menu">Cadastrar</p>
            <p className="text-menu">Quem somos</p>
          </>
        )}
      </div>
    </Section>
  );
};

export default MenuMobile;
