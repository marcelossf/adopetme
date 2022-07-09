import React from "react";

import { Container, Slogan } from "./styles";
import VectorDesktop from "../../assets/vectorDesktop.png";
import LogoAdopetme from "../../assets/logoAdopet.png";

function SloganAdopetme() {
  return (
    <Container>
      <Slogan>
        <figure>
          <img src={VectorDesktop} alt="" className="vectorDesktop" />
          <span>
            Conectando diariamente ONGs parceiras com potenciais adotantes.
          </span>
        </figure>
      </Slogan>
      <img src={LogoAdopetme} className="logoAdopetme" />
    </Container>
  );
}

export default SloganAdopetme;
