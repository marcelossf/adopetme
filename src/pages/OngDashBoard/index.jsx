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

const OngDashBoard = () => {
  const { user } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const userID = user.id;
  const { setOngPets } = useContext(PetOngContext);
  const history = useHistory();

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
