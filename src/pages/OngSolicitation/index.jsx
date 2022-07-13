import CardRetangle from "../../components/CardRetangle";
import { Footer } from "../../components/Footer";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";
import { RedirectContext } from "../../context/redirect";

import { useContext, useEffect, useState } from "react";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { Button } from "../../components/Button";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import { Link, useHistory } from "react-router-dom";
import PhotoPerfil from "../../components/PhotoPerfil";
import { UserContext } from "../../context/user";

import { useContext, useEffect, useState } from "react";
import HeaderDekstop from "../../components/HeaderDesktop";
import { useHistory } from "react-router-dom";
import { MarginNavBar } from "../../styles/marginNavBar";


const OngSolicitation = () => {
  const { redirectToPage } = useContext(RedirectContext);
  const token = JSON.parse(localStorage.getItem("token"));

  const { logout } = useContext(UserContext);

  const [selected] = useState(true);
  const history = useHistory();

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };
  const history = useHistory()

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

        <Button width={"230px"} onClick={() => handleRoute("ong-solicitation")}>
          Solicitações
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("registerPet")}>
          Cadastrar Pet
        </Button>
        <PhotoPerfil />
      </HeaderDekstop>

      <HeaderMobile selected={selected}>
        <LinksMenu
          selected={selected}
          onClick={() => handleRoute()}
          className="link--selected "
        >
          Início
        </LinksMenu>

        <LinksMenu onClick={() => handleRoute("ong-solicitation")}>
          Solicitações
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("registerPet")}>
          Cadastrar Pet
        </LinksMenu>
        <LinksMenu onClick={() => logout()}>Logout</LinksMenu>
      </HeaderMobile>

      <OngTile />
      <CardRetangle />
      <Footer>
        <MenuFooter>
          <Link to="/">Início</Link>
          <Link to="/ong-solicitation">Solicitações</Link>
          <Link to="/registerPet">Cadastrar Pet</Link>
        </MenuFooter>
      </Footer>
    </Container>
  );
};

export default OngSolicitation;
