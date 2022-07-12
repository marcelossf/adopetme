import { useContext } from "react";
import { set } from "react-hook-form";
import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";
import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";

import { Section } from "./style";

const MenuMobile = ({ setOpen }) => {
  const { setLogado } = useContext(LoginLogoutContext);
  const { activeOng } = useContext(PetOngContext);
  const { redirectToPage } = useContext(RedirectContext);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const closeModal = () => {
    setOpen(false);
  };

  const logout = () => {
    setLogado(false);
    localStorage.clear();
    redirectToPage("/");
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
        {token && activeOng ? (
          <>
            <p className="text-menu">Início</p>
            <p className="text-menu">Solicitações</p>
            <p
              onClick={() => redirectToPage("/registerPet")}
              className="text-menu"
            >
              Cadastrar Pet
            </p>
            <p onClick={logout} className="text-menu">
              Logout
            </p>
          </>
        ) : (
          <>
            <p onClick={() => redirectToPage("/")} className="text-menu">
              Início
            </p>
            <p onClick={() => redirectToPage("/login")} className="text-menu">
              Login
            </p>
            <p
              onClick={() => redirectToPage("/cadastrar")}
              className="text-menu"
            >
              Cadastrar
            </p>
            <p
              onClick={() => redirectToPage("/quem-somos")}
              className="text-menu"
            >
              Quem somos
            </p>
          </>
        )}
      </div>
    </Section>
  );
};

export default MenuMobile;
