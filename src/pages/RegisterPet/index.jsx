import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AnimalRegister } from "../../components/AnimalRegister";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style.js";
import OngTile from "../../components/OngTitle";
import PhotoPerfil from "../../components/PhotoPerfil";
import { MarginNavBar } from "../../styles/marginNavBar";
import { Container } from "./style";
import {MenuFooter} from '../../components/MenuFooter';
import { UserContext } from "../../context/user";
import { useContext } from "react";



export const RegisterPet = () => {
	const [selected] = useState(true);
	const history = useHistory();
  const { logout} = useContext(UserContext);

	const handleRoute = (route) => {
		route && history.push(`/${route}`);
	};

  return (
    <Container>
      <HeaderDekstop>
        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => history.push('/ong')}
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
          onClick={() => history.push('/')}
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
        <LinksMenu onClick={logout}>Logout</LinksMenu>
      </HeaderMobile>
      <MarginNavBar></MarginNavBar>
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
