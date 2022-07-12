import { useContext } from "react";
import { set } from "react-hook-form";
import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";
import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";

import { Section, Paragraph } from "./style";

const MenuMobile = ({ setOpen, children }) => {
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
        <div className="place"></div>
        <Paragraph>{children}</Paragraph>
      </div>
    </Section>
  );
};

export default MenuMobile;
