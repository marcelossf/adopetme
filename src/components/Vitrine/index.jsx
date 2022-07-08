import { useContext } from "react";
// import api from "../../api/api";
import { AnimalsListContext } from "../../Context/animals";
import Card from "../Card";

import { Container } from "./styles";

function Vitrine() {
  const { pets } = useContext(AnimalsListContext);
  // const [pets, setPets] = useState([]);
  // useEffect(() => {
  //   api
  //     .get("/pet")
  //     .then((res) => {
  //       setPets(res.data);
  //     })
  //     .catch((err) => err);
  // }, []);

  return (
    <Container>
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
