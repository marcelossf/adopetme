import React from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
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
    <Footer />
    </>
  );
}

export default Home;
