import CardRetangle from "../../components/CardRetangle";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";
import { RedirectContext } from "../../context/redirect";
import { useContext, useEffect, useState } from "react";
import HeaderDekstop from "../../components/HeaderDesktop";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import { MarginNavBar } from "../../styles/marginNavBar";


const OngSolicitation = () => {
  const { redirectToPage } = useContext(RedirectContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useHistory()
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, []);

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };

  return (
    <Container>
       <HeaderDekstop>
        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => handleRoute()}
        >
          Início
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("quem-somos")}>
          Quem somos
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("login")}>
          Login
        </Button>
      </HeaderDekstop>
      <HeaderMobile selected={selected}>
        <LinksMenu
          selected={selected}
          onClick={() => handleRoute()}
          className="link--selected "
        >
          Início
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("quem-somos")}>
          Quem somos
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("login")}>Login</LinksMenu>
      </HeaderMobile>

      <MarginNavBar></MarginNavBar>
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
