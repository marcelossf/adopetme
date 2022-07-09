import { useContext } from "react";
// import api from "../../api/api";
import { AnimalsListContext } from "../../context/animals";
import { SearchContext } from "../../context/search";
import Card from "../Card";

import { Container } from "./styles";

function Vitrine() {
  const { pets } = useContext(AnimalsListContext);
  const { input } = useContext(SearchContext);

  return (
    <Container>
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
    </Container>
  );
}

export default Vitrine;
