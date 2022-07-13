import { useContext, useEffect, useState } from "react";

import { AnimalsListContext } from "../../context/animals";
import { PetOngContext } from "../../context/ong";
import { SearchContext } from "../../context/search";

import Card from "../Card";

import { ButtonContainer, ButtonsLeftRight, ContainerVitrine } from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../Button";

function Vitrine() {
  const { pets } = useContext(AnimalsListContext);
  const { input, filtredPets } = useContext(SearchContext);
  const petsPerPage = 6;
  const pages = Math.ceil(pets?.length / petsPerPage);
  const [petsPage, setPetsPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const type = "ong";
  // const [pets, setPets] = useState([]);
  console.log(filtredPets)
  useEffect(() => {
    setPetsPage([]);
    const newPetsPage = [];
    for (let i = 0; i < pets.length; i = i + petsPerPage) {
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

  return (
    <ContainerVitrine>
      {filtredPets.length === 0 ? (
        <>
          <span className="fraseVitrine">
            Amigo não se compra,
            <span style={{ color: "red" }}> adote</span>!
          </span>
          <ButtonContainer>
            {currentPage === 0 ? (
              <Button
                isSelected
                isDisable
                width={"125px"}
                onClick={() => subHandlePage()}
              >
                <span>&lt;</span> voltar
              </Button>
            ) : (
              <Button width={"125px"} onClick={() => subHandlePage()}>
                <span>&lt;</span> voltar
              </Button>
            )}
            <Button width={"125px"} onClick={() => addHandlePage()}>
              próximo <span>&gt;</span>
            </Button>
          </ButtonContainer>

          <ul className="vitrine-container vitrine-container--HomePage">
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
      ) : filtredPets.length > 0 ? (
        <>
          <span className="fraseVitrine">
            Amigo não se compra,
            <span style={{ color: "red" }}> adote</span>!
          </span>

          <ul className="vitrine-container">
            {filtredPets.length > 0 ? (
              filtredPets.map((pet) => (
                <li key={pet.id}>
                  <Card pet={pet} />
                </li>
              ))
            ) : (
              <h1>Você não adicionou nenhum pet Ainda :( </h1>
            )}
          </ul>
        </>
      ) : (
        <>
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
      {/* <ButtonsLeftRight>
        <button onClick={() => subHandlePage()}>
          <AiOutlineArrowLeft size={30} />
        </button>
        <button onClick={() => addHandlePage()}>
          <AiOutlineArrowRight size={30} />
        </button>
      </ButtonsLeftRight> */}
    </ContainerVitrine>
  );
}

export default Vitrine;
