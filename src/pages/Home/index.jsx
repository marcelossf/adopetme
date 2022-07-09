import React from "react";
import { Carousel } from "../../components/Carousel";
import Header from "../../components/HeaderMobile";
import SloganAdopetme from '../../components/SloganAdopetme';
import Vitrine from '../../components/Vitrine'

function Home() {
  return (
    <>
    <Header />
    <SloganAdopetme />
    <Carousel />
    <Vitrine />
    </>
  );
}

export default Home;
