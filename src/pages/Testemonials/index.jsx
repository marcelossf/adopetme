import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/api";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import HeaderDekstop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import { LinksMenu } from "../../components/MenuMobile/style";
import UserTitle from "../../components/UserTitle";
import { RedirectContext } from "../../context/redirect";
import { UserContext } from "../../context/user";
import { MarginNavBar } from "../../styles/marginNavBar";
import { toastError, toastSucess } from "../../utils/toast";

export const Testemonials = () => {
  const [post, setPost] = useState("");
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const { user } = useContext(UserContext);
  const [selected, setSelected] = useState(true);
  const history = useHistory()

  const handleRoute = (route) => {
    route && history.push(`/${route}`);
  };

  const handlePost = (data) => {
    // api
    //   .post(
    //     "/testemonials",
    //     { text: data, user: user },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     toastSucess("Depoimento Enviado com sucesso");
    //     return redirectToPage("/user");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toastError("Algo inesperado aconteceu");
    //   });
  };

  return (
    <div>
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
        <Button width={"230px"} onClick={() => handleRoute("cadastrar")}>
          Cadastrar
        </Button>
        <Button width={"230px"} onClick={() => handleRoute("login")}>
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
      <UserTitle />
      <main>
        <div>
          <textarea
            onChange={(e) => setPost(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={() => handlePost(post)}>Enviar</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
