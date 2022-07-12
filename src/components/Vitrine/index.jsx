import { useContext } from "react";
import { AnimalsListContext } from "../../context/animals";
import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { SearchContext } from "../../context/search";
import Card from "../Card";
import { Container } from "./styles";

function Vitrine() {
  const { pets } = useContext(AnimalsListContext);
  const { input } = useContext(SearchContext);
  const { ongPets, activeOng } = useContext(PetOngContext);
   const token = JSON.parse(localStorage.getItem('token')) || ''
  
   console.log(ongPets)

  return (
    <Container>
      {!token ? (
        <>
          <span className="fraseVitrine">
            Amigo não se compra, <span style={{ color: "red" }}>adote</span>!
          </span>
          <ul>
            {pets
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
                .map((pet) => (
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
    </Container>
  );
}

export default Vitrine;
