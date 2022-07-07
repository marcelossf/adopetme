import { useEffect, useState, useContext } from "react";
import api from "../../api/api";
import Card from "../Card";
import { PetContext } from "../../providers/Pet";

import { ContainerVitrine, ContainerOng, AbaSolicitacoes } from "./styles";

function Vitrine() {
  // const { type } = useContext(PetContext);
  const type = 'ong'
  const [pets, setPets] = useState([]);
  useEffect(() => {
    api
      .get("/pet")
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => err);
  }, []);

  if(type === 'ong') {
    return (
      <ContainerOng>
        <AbaSolicitacoes>Solicitações</AbaSolicitacoes>
      </ContainerOng>
    )
  }

  return (
    <ContainerVitrine>
      <ul>
        {pets?.map((pet) => {
          return (
            <li key={pet.id}>
              <Card pet={pet} />
            </li>
          );
        })}
      </ul>
    </ContainerVitrine>
  );
}

export default Vitrine;
