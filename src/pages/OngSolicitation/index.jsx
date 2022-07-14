import CardRetangle from "../../components/CardRetangle";
import { Footer } from "../../components/Footer";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import PhotoPerfil from "../../components/PhotoPerfil";
import { UserContext } from "../../context/user";
import { MarginNavBar } from "../../styles/marginNavBar";
import { SolicitationContext } from "../../context/solicitation";

const OngSolicitation = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { logout } = useContext(UserContext);
  const [selected] = useState(true);
  const history = useHistory();
  const { solicitationData } = useContext(SolicitationContext);
  const { user } = useContext(UserContext);
  const ongName = user?.name;

  const ongSolicitation = solicitationData.filter(
    (solicitation) => solicitation?.petData.ong === ongName
  );

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  }, []);

  return (
    <Container>
      <HeaderDekstop>
        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => history.push("/ong")}
        >
          Início
        </Button>

        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => handleRoute("ong-solicitation")}
        >
          Solicitações
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("registerPet")}>
          Cadastrar Pet
        </Button>
        <PhotoPerfil />
      </HeaderDekstop>
      <HeaderMobile selected={selected}>
        <LinksMenu selected={selected} onClick={() => history.push("/")}>
          Início
        </LinksMenu>

        <LinksMenu
          className="link--selected "
          onClick={() => handleRoute("ong-solicitation")}
        >
          Solicitações
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("registerPet")}>
          Cadastrar Pet
        </LinksMenu>
        <LinksMenu onClick={() => logout()}>Logout</LinksMenu>
      </HeaderMobile>
      <MarginNavBar></MarginNavBar>

      <OngTile />
      {solicitationData.length < 0 ? (
        <CardRetangle />
      ) : (
        <div>
          <p>Você não tem nenhuma solicitação</p>
        </div>
      )}

      <Footer>
        <Link to="/">Início</Link>
        <Link to="/ong-solicitation">Solicitações</Link>
        <Link to="/registerPet">Cadastrar Pet</Link>
      </Footer>
    </Container>
  );
};

export default OngSolicitation;
