import PickDog from "../../assets/pit.png";
import Close from "../../assets/fechar.png";
import { Container } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import * as yup from "yup";
import { SolicitationContext } from "../../context/solicitation";

const ModalSolicitation = ({ setOpen, open }) => {
  const formRes = yup.object().shape({
    pergunta1: yup.string().required("todos os campos são obrigatórios"),
    pergunta2: yup.string().required("todos os campos são obrigatórios"),
    pergunta3: yup.string().required("todos os campos são obrigatórios"),
    pergunta4: yup.string().required("todos os campos são obrigatórios"),
    pergunta5: yup.string().required("todos os campos são obrigatórios"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formRes) });

  const submitForm = (data) => {
    console.log(data);
    setSolicitationForm(data);
    setUserData(localStorage.getItem("user"));
    setPetData();

  };

  const { setSolicitationForm, setUserData, setPetData } =
    useContext(SolicitationContext);

  return (
    <Container>
      <div className="container-adopet">
        <p className="text-solicitation">Solicitação de Adoção</p>
        <img className="button-close" src={Close} alt="botão fechar"></img>
      </div>
      <div className="container-img">
        <img src={PickDog} alt="Foto-Animal"></img>
        <p className="pet-name">PitBull fofo</p>
      </div>
      <form onClick={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="Pergunta 1"
          {...register("pergunta1")}
        ></input>

        <input
          type="text"
          placeholder="Pergunta 2"
          {...register("pergunta2")}
        ></input>

        <input
          type="text"
          placeholder="Pergunta 3"
          {...register("pergunta3")}
        ></input>

        <input
          type="text"
          placeholder="Pergunta 4"
          {...register("pergunta4")}
        ></input>
        <span className="div-error">{errors?.pergunta5?.message}</span>
        <input
          type="text"
          placeholder="Pergunta 5"
          {...register("pergunta5")}
        ></input>
        <button type="submit">enviar</button>
      </form>
    </Container>
  );
};

export default ModalSolicitation;
