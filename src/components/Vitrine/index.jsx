import { useState, useEffect } from "react";
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

  return (
    <Container>

      <span className="fraseVitrine">Amigo não se compra, <span style={{color:'red'}}>adote</span>!</span>
      <ul>
        {pets?.map((pet) => (
          <li key={pet.id}>
            <Card pet={pet} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Vitrine;
