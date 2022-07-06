import { List, Main } from "./style";
import Dev1 from "../../assets/dev1.png";
import Dev2 from "../../assets/dev2.png";
import Dev3 from "../../assets/dev3.png";
import Dev4 from "../../assets/dev4.png";
import Dev5 from "../../assets/dev5.png";
import LogoGit from "../../assets/git.png";
import LogoLinkedin from "../../assets/linkedin.png";
import Paws from "../../assets/paws.png";
import "./style.css";
import Header from "../HeaderOff";

export const QuemSomos = () => {
  const images = [
    {
      img: Dev1,
      name: "Igor",
      logoGit: LogoGit,
      logoLink: LogoLinkedin,
      linkLinkedin: "https://www.linkedin.com/in/igorgarciags/",
      linkGit: "https://github.com/devigorgarcia",
    },
    {
      img: Dev2,
      name: "Diego",
      logoGit: LogoGit,
      logoLink: LogoLinkedin,
      linkLinkedin:
        "https://www.linkedin.com/in/diego-de-oliveira-guimar%C3%A3esguimara/",
      linkGit: "https://github.com/DiegoOlive29",
    },
    {
      img: Dev3,
      name: "Joyce",
      logoGit: LogoGit,
      logoLink: LogoLinkedin,
      linkLinkedin:
        "https://www.linkedin.com/in/joyce-pereira-da-gama-bbb88714a/",
      linkGit: "https://github.com/JoyceGama",
    },
    {
      img: Dev4,
      name: "Marcelo",
      logoGit: LogoGit,
      logoLink: LogoLinkedin,
      linkLinkedin: "https://www.linkedin.com/in/marcelo-soares-741317169/",
      linkGit: "https://github.com/marcelossf",
    },
    {
      img: Dev5,
      name: "Mari",
      logoGit: LogoGit,
      logoLink: LogoLinkedin,
      linkLinkedin: "https://www.linkedin.com/in/mariana-spinola-federico",
      linkGit: "https://github.com/Mapinko",
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <p className="paragraph">
          O nosso propósito nasceu a partir da procura de conectar ONGs que
          trabalham com a causa animal, com potenciais adotantes, promovendo
          essa acessibilidade tanto para nossos usuários, quanto para as ONGs.
        </p>
        <div className="div-half"></div>
        <p className="paragraph">
          Centralizamos o local de busca de animais, facilitando essa procura.
          Dessa forma, conseguimos aumentar a rotatividade dos animais
          abrigados.
        </p>
        <div className="div-hide">
          <img className="paw-red" src={Paws} alt="Patinha"></img>
          <h1 className="title-ul">Conheça nossa equipe!</h1>
        </div>
      </Main>
      <List>
        {images.map((pick, index) => (
          <li className="list-who" key={index}>
            <img className="imgFace" src={pick.img} alt={pick.name}></img>
            <p className="name">{pick.name}</p>
            <div className="container-informations">
              <div className="box-link">
                <img
                  className="logoLink"
                  src={pick.logoLink}
                  alt="Linkedin"
                ></img>
                <p>
                  <a
                    className="phrase-link"
                    href={pick.linkLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
              <div className="box-git">
                <img className="logoGit" src={pick.logoGit} alt="GitHub"></img>
                <p>
                  <a
                    className="phrase-git"
                    href={pick.linkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </li>
        ))}
      </List>
    </>
  );
};
