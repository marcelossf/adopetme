import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";

const OngDashBoard = () => {
  return (
    <>
      <Header />
      <OngTile />
      <Footer>
        <MenuFooter>
          <li>Início</li>
          <li>Solicitações</li>
          <li>Cadastrar Pet</li>
        </MenuFooter>
      </Footer>
    </>
  );
};

export default OngDashBoard;
