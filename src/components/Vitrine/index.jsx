import { useEffect, useContext, useState } from "react";
import { AnimalsListContext } from "../../context/animals";
import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { SearchContext } from "../../context/search";
import Card from "../Card";
import { ButtonsLeftRight, Container } from "./styles";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Vitrine() {
  const { pets } = useContext(AnimalsListContext);
  const { input } = useContext(SearchContext);
  const { ongPets, activeOng } = useContext(PetOngContext);
  const petsPerPage = 6;
  const pages = Math.ceil(pets?.length / petsPerPage);
  const [petsPage, setPetsPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPetsPage([]);
    const newPetsPage = [];
    for (var i = 0; i < pets.length; i = i + petsPerPage) {
      newPetsPage.push(pets.slice(i, i + petsPerPage));
    }
    setPetsPage(newPetsPage);
  }, [pets]);

  function subHandlePage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function addHandlePage() {
    if (currentPage < pages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  const token = JSON.parse(localStorage.getItem("token")) || "";

  return (
    <Container>
      {!token ? (
        <>
          <span className="fraseVitrine">
            Amigo não se compra, <span style={{ color: "red" }}>adote</span>!
          </span>
          <ul>
            {petsPage[currentPage]
              ?.filter(
                ({ petName, species }) =>
                  petName.toLowerCase().includes(input.toLowerCase()) ||
                  species.toLowerCase().includes(input.toLowerCase())
              )
              .map((pet) => (
                <li key={pet.id}>
                  <Card pet={pet} />
                </li>
              ))}
          </ul>
        </>
      ) : activeOng ? (
        <>
          <span className="fraseVitrine">
            Seus <span style={{ color: "var(--orange)" }}>Pets!</span>
          </span>
          <ul>
            {ongPets.length > 0 ? (
              ongPets
                ?.filter(
                  ({ petName, species }) =>
                    petName.toLowerCase().includes(input.toLowerCase()) ||
                    species.toLowerCase().includes(input.toLowerCase())
                )
                .map((pet) => <li key={pet.id}>{/* <Card pet={pet} /> */}</li>)
            ) : (
              <h1>Você não adicionou nenhum pet Ainda :( </h1>
            )}
          </ul>
        </>
      ) : (
        <>
          {/* trocar a ongPets pelo context do usarioPets */}
          {/* <span className="fraseVitrine">
            Seus <span style={{ color: "var(--orange)" }}>Pets!</span>
          </span>
          <ul>
            {ongPets.length > 0 ? (
              ongPets
                ?.filter(
                  ({ petName, species }) =>
                    petName.toLowerCase().includes(input.toLowerCase()) ||
                    species.toLowerCase().includes(input.toLowerCase())
                )
                .map((pet) => (
                  <li key={pet.id}>
                    <Card pet={pet} />
                  </li>
                ))
            ) : (
              <h1>Você não adicionou nenhum pet Ainda :(</h1>
            )}
          </ul> */}
        </>
      )}
      <ButtonsLeftRight>
        <button onClick={() => subHandlePage()}>
          <AiOutlineArrowLeft size={30}/>
        </button>
        <button onClick={() => addHandlePage()}>
          <AiOutlineArrowRight size={30}/>
        </button>
      </ButtonsLeftRight>
    </Container>
  );
}

export default Vitrine;
