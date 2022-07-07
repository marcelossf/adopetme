import { useEffect, useState } from "react";
import api from "../../api/api";
import Card from "../Card";

import { Container } from "./styles";

function Vitrine() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    api
      .get("/pet")
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => err);
  }, []);

  //contexto acima

  return (
    <Container>
      <ul>
        {pets?.map((pet) => (
          <li key={pet.id}>
            <Card pet={pet}/>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Vitrine;
