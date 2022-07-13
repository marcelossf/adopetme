import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";
import { Link, useHistory } from "react-router-dom";
import { RedirectContext } from "../../context/redirect";
import { useContext, useEffect, useState } from "react";
import HeaderDekstop from "../../components/HeaderDesktop";
import { Button } from "../../components/Button";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import { MarginNavBar } from "../../styles/marginNavBar";
import PhotoPerfil from "../../components/PhotoPerfil";
import { UserContext } from "../../context/user";

const UserDashBoard = () => {
  const [selected] = useState(true);
  const history = useHistory();
  const { logout } = useContext(UserContext);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     history.push("/login");
  //   }
  // }, []);

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };
  return (
    <>
      <HeaderDekstop>
        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => handleRoute()}
        >
          Início
        </Button>
        <Button
          width={"230px"}
          onClick={() => handleRoute("user-solicitation")}
        >
          Solicitações
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("quem-somos")}>
          Quem somos
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
        <LinksMenu onClick={() => handleRoute("quem-somos")}>
          Quem somos
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("user-solicitation")}>
          Solicitações
        </LinksMenu>
        <LinksMenu onClick={() => logout()}>Logout</LinksMenu>
      </HeaderMobile>

      <MarginNavBar></MarginNavBar>
      <UserTitle />
      <SearchBar />
      <Vitrine />
      <Footer>
        <MenuFooter>
          <Link to="/user">Início</Link>
          <Link to="/user-solicitation">Solicitações</Link>
          <Link to="quem-somos">Quem Somos</Link>
        </MenuFooter>
      </Footer>
    </>
  );
};

export default UserDashBoard;
