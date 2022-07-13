import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import { QuemSomos } from "../../components/WhoWe";
import { MarginNavBar } from "../../styles/marginNavBar";

function WhoWeAre() {
  const [selected, setSelected] = useState(true);

  const history = useHistory();

  const handleRoute = (route) => {
    route ? history.push(`/${route}`) : history.push("/");
  };

  return (
    <>
      <HeaderDekstop>
        <Button width={"230px"} onClick={() => handleRoute()}>
          Início
        </Button>
        <Button
          className="button-selected"
          width={"230px"}
          onClick={() => handleRoute("quem-somos")}
        >
          Quem somos
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("login")}>
          Login
        </Button>
      </HeaderDekstop>
      <HeaderMobile>
        <LinksMenu onClick={() => handleRoute()}>Início</LinksMenu>
        <LinksMenu
          selected={selected}
          onClick={() => handleRoute("quem-somos")}
          className="link--selected "
        >
          Quem somos
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </LinksMenu>
        <LinksMenu onClick={() => handleRoute("login")}>Login</LinksMenu>
      </HeaderMobile>

      <MarginNavBar></MarginNavBar>

      <QuemSomos />
      <Footer>
        <Link to="/">Início</Link>
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/login">Login</Link>
      </Footer>
    </>
  );
}

export default WhoWeAre;
