import { useContext } from "react";
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
import HeaderMobile from "../../components/HeaderMobile";
import { Button } from "../../components/Button";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import { useState } from "react";
import PhotoPerfil from "../../components/PhotoPerfil";

const OngDashBoard = () => {
  const { user, logout } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const userID = user.id;
  const { setOngPets } = useContext(PetOngContext);
  const [selected] = useState(true);
  const history = useHistory();

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };

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
      <Vitrine />
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

export default OngDashBoard;
