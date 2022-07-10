import CardRetangle from "../../components/CardRetangle";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";

const OngDashBoard = () => {
  return (
    <Container>
      <Header />
      <OngTile />
      <CardRetangle/>
      <Footer>
        <MenuFooter>
          <li>Início</li>
          <li>Solicitações</li>
          <li>Cadastrar Pet</li>
        </MenuFooter>
      </Footer>
    </Container>
  );
};

export default OngDashBoard;
