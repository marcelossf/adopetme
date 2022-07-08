import LogoBlack from "../../assets/adoPetPreto.png";
import Close from "../../assets/fechar.png";
import { Section } from "./style";

const MenuMobile = ({ setOpen }) => {
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
      <div>
        <p className="text-menu">Início</p>
        <div className="div-half"></div>
        <p className="text-menu">Login</p>
        <p className="text-menu">Cadastrar</p>
        <p className="text-menu">Quem somos</p>
      </div>
    </Section>
  );
};

export default MenuMobile;
