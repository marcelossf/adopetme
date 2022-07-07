import React from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { MenuFooter } from "../../components/MenuFooter";
import Vitrine from "../../components/Vitrine";
import { Container } from "./styles";

// import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Carousel />
      <h2>
        Amigo não se compra, <span>adota!</span>
      </h2>
      <Vitrine />
      <Footer>
        <MenuFooter>
          <li>Quem Somos</li>
          <li>Login</li>
          <li>Register</li>
        </MenuFooter>
      </Footer>
    </Container>
  );
}

export default Home;
