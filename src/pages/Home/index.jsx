import React, { useContext } from "react";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import Header from "../../components/HeaderMobile";
import SloganAdopetme from "../../components/SloganAdopetme";
import Vitrine from "../../components/Vitrine";
import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

function Home() {
  const { logado, changeLogado } = useContext(LoginLogoutContext);
  const { redirectToPage } = useContext(RedirectContext);
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const user = JSON.parse(localStorage.getItem("user")) || "";
  console.log(logado);
  console.log(token)

  if (token) {
    if (user.type === "ong") {
      redirectToPage("/ong");
    } else {
      redirectToPage("/user");
    }
  }

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
