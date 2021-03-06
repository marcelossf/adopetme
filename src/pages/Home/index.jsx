import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";

import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";

import SloganAdopetme from "../../components/SloganAdopetme";
import Vitrine from "../../components/Vitrine";
import { LoginLogoutContext } from "../../context/login-logout";
import { RedirectContext } from "../../context/redirect";

import { LinksMenu } from "../../components/MenuMobile/style.js";

import { MarginNavBar } from "../../styles/marginNavBar";
import { UserContext } from "../../context/user";
import { useEffect } from "react";

function Home() {
  const { setForm } = useContext(RedirectContext);
  const { user } = useContext(UserContext);
	const token = localStorage.getItem('token')
  const [selected, setSelected] = useState(true);


  useEffect(() => {
    if (user) {
      if (user.type === "ong") {
        history.push("/ong");
      } else {
        history.push("/user");
      }
    }
  }, [user]);

  const history = useHistory();

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };

  const handleRegister = (route) => {
    route === 'login' ? setForm(true) : setForm(false)
    history.push(`/${route}`)
  }

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
        <Button width={"230px"} onClick={() => handleRoute("quem-somos")}>
          Quem somos
        </Button>
        <Button width={"230px"} onClick={() => handleRegister('cadastrar')} >
          Cadastrar
        </Button>
        <Button width={"230px"} onClick={() => handleRegister("login")}>
          Login
        </Button>
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
        <LinksMenu onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("login")}>Login</LinksMenu>
      </HeaderMobile>

      <MarginNavBar></MarginNavBar>

      <SloganAdopetme />
      <Carousel />
      <Vitrine />

      <Footer>
        <Link to="/">Início</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/login">Login</Link>
      </Footer>
    </>
  );
}

export default Home;
