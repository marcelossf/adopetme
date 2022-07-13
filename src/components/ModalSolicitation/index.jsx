import PickDog from "../../assets/pit.png";
import Close from "../../assets/fechar.png";
import { Container } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import * as yup from "yup";
import { SolicitationContext } from "../../context/solicitation";
import { toastSucess } from "../../utils/toast";
import { Error } from "../Error";

const ModalSolicitation = ({ setOpen, open }) => {
  const { setSolicitationForm, setUserData, petData } =
    useContext(SolicitationContext);

  const formRes = yup.object().shape({
    pergunta1: yup.string().required("Campo obrigatório"),
    pergunta2: yup.string().required("Campo obrigatório"),
    pergunta3: yup.string().required("Campo obrigatório"),
    pergunta4: yup.string().required("Campo obrigatório"),
    pergunta5: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formRes) });
  const submitForm = (data) => {
    setSolicitationForm(data);
    setUserData(JSON.parse(localStorage.getItem("user")));
    toastSucess("Solicitação Enviada");
  };

  return (
    <Container>
      <div className="container-adopet">
        <p className="text-solicitation">Solicitação de Adoção</p>
        <img onClick={()=>setOpen(false)} className="button-close" src={Close} alt="botão fechar"></img>
      </div>
      <div className="container-img">
        <img src={petData.img} alt="Foto-Animal"></img>
        <p className="pet-name">{petData.petName}</p>
      </div>
      <form onClick={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="Pergunta 1"
          {...register("pergunta1")}
        ></input>
        <Error>{errors?.pergunta1?.message}</Error>
        <input
          type="text"
          placeholder="Pergunta 2"
          {...register("pergunta2")}
        ></input>
        <Error>{errors?.pergunta2?.message}</Error>
        <input
          type="text"
          placeholder="Pergunta 3"
          {...register("pergunta3")}
        ></input>
        <Error>{errors?.pergunta3?.message}</Error>
        <input
          type="text"
          placeholder="Pergunta 4"
          {...register("pergunta4")}
        ></input>
        <Error>{errors?.pergunta4?.message}</Error>
        <input
          type="text"
          placeholder="Pergunta 5"
          {...register("pergunta5")}
        ></input>
        <Error>{errors?.pergunta5?.message}</Error>
        <button type="submit">enviar</button>
      </form>
    </Container>
  );
};

export default ModalSolicitation;
