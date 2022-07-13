import { useContext, useState } from "react";
import { useEffect } from "react";
import api from "../../api/api";
import { Footer } from "../../components/Footer";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import Vitrine from "../../components/Vitrine";
import { PetOngContext } from "../../context/ong";
import { Container } from "./style";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";
import HeaderDekstop from "../../components/HeaderDesktop";
import { Button } from "../../components/Button";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import { MarginNavBar } from "../../styles/marginNavBar";

const OngDashBoard = () => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const userID = user.id;
  const { setOngPets } = useContext(PetOngContext);
  const history = useHistory();
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  useEffect(() => {
    api
      .get(`/pet?userId=${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setOngPets(response.data))
      .catch((err) => console.log(err));
  }, [setOngPets]);

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
      <Vitrine />
      <Footer>
        <MenuFooter>
          <Link to="/">Início</Link>
          <Link to="/solicitationOng">Solicitações</Link>
          <Link to="/registerPet">Cadastrar Pet</Link>
        </MenuFooter>
      </Footer>
    </Container>
  );
};

export default OngDashBoard;
