import CardRetangle from "../../components/CardRetangle";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";
import { RedirectContext } from "../../context/redirect";
import { useContext, useEffect } from "react";


const OngSolicitation = () => {
  const { redirectToPage } = useContext(RedirectContext);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      redirectToPage("/");
    }
  }, []);

  return (
    <Container>
      <Header></Header>
      <OngTile />
      <CardRetangle />
      <Footer>
        <MenuFooter>
          <li onClick={redirectToPage("/")}>início</li>
          <li onClick={redirectToPage("/ong-solicitation")}>Solitações</li>
          <li onClick={redirectToPage("/registerPet")}>Cadastrar Pet</li>
        </MenuFooter>
      </Footer>
    </Container>
  );
};

export default OngSolicitation;
