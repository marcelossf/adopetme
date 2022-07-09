import React from "react";
import { AnimalRegister } from "../../components/AnimalRegister";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import { MenuFooter } from "../../components/MenuFooter";
import OngTile from "../../components/OngTitle";
import { Container } from "./style";

export const RegisterPet = () => {
  return (
    <Container>
      <Header />
      <OngTile />
      <AnimalRegister />
      <Footer>
        <MenuFooter>
          <li>Início</li>
          <li>Solicitações</li>
          <li>Cadastrar Pet</li>
        </MenuFooter>
      </Footer>
    </Container>
  );
};
