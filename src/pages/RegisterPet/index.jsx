import React from "react";
import { AnimalRegister } from "../../components/AnimalRegister";
import { Footer } from "../../components/Footer";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { Button } from "../../components/Button";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PhotoPerfil from "../../components/PhotoPerfil";
import CardRetangle from "../../components/CardRetangle";

export const RegisterPet = () => {
  const [selected] = useState(true);
  const history = useHistory();

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
        <LinksMenu onClick={() => handleRoute()}>Logout</LinksMenu>
      </HeaderMobile>
      <OngTile />
      <AnimalRegister />
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
