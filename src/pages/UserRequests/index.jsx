import React from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/logoAdopet.png";
import { Footer } from "../../components/Footer";
import SloganRequest from "../../components/SloganRequest";
import StepsRequest from "../../components/StepsRequest";
import { TableRequest } from "../../components/TableRequest";
import { SolicitationContext } from "../../context/solicitation";
import { HeaderContainer, MainContainer, Title } from "./style";
import HeaderDekstop from "../../components/HeaderDesktop";
import { Button } from "../../components/Button";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import PhotoPerfil from "../../components/PhotoPerfil";
import { useState } from "react";
import { UserContext } from "../../context/user";

const UserRequest = () => {
  const [selected] = useState(true);
  const history = useHistory();
  const { logout } = useContext(UserContext);

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
      <HeaderContainer>
        <Title>
          <img src={Logo} alt="Logo" className="Logo" />
          <h1>Acompanhe o processo de adoção</h1>
        </Title>
      </HeaderContainer>

      <MainContainer>
        <section className="request-container">
          <h2 className="request-caption">Processo de adoção</h2>

          <TableRequest />
        </section>
        <div>
          <SloganRequest />
          <StepsRequest />
        </div>

        <StepsRequest />
      </MainContainer>

      <Footer>
        <Link to="/">Início</Link>
        <Link to="/quem-somos">Quem somos</Link>
        <Link to="/user-solicitation">Solicitações</Link>
      </Footer>
    </>
  );
};

export default UserRequest;
