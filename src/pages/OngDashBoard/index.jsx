import { useContext } from "react";
import { useEffect } from "react";
import api from "../../api/api";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import { NavMenu } from "../../components/NavMenu";
import OngTile from "../../components/OngTitle";
import Vitrine from "../../components/Vitrine";
import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";
import { Container } from "./style";
import { Link } from "react-router-dom";

const OngDashBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const userID = user.id;
  const { setOngPets } = useContext(PetOngContext);
  const { redirectToPage } = useContext(RedirectContext);

  useEffect(() => {
    if (!token) {
      redirectToPage("/login");
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
      {/* <Header>
        <NavMenu>
          <Button>Início</Button>
          <Button>Solicitações</Button>
          <Button>Cadastrar Pet</Button>
        </NavMenu>
      </Header> */}
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
