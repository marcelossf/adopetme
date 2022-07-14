import Close from "../../assets/fechar.png";
import { Container, ContainerPai } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SolicitationContext } from "../../context/solicitation";
import { toastSucess } from "../../utils/toast";
import { Error } from "../Error";
import { UserContext } from "../../context/user";

const ModalSolicitation = ({ pet, setOpen, open }) => {

  const { postSolicitation } =
    useContext(SolicitationContext);


	const formRes = yup.object().shape({
		pergunta1: yup.string().required("Todos os campos são obrigatório"),
		pergunta2: yup.string().required("Todos os campos são obrigatório"),
		pergunta3: yup.string().required("Todos os campos são obrigatório"),
		pergunta4: yup.string().required("Todos os campos são obrigatório"),
		pergunta5: yup.string().required("Todos os campos são obrigatório"),
	});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formRes) });
  const submitForm = (data) => {
    postSolicitation(data)
    toastSucess("Solicitação Enviada");
  };

  return (
    <ContainerPai>
      <Container>
        <div className="container-adopet">
          <p className="text-solicitation">Solicitação de Adoção</p>
          <img
            onClick={() => setOpen(false)}
            className="button-close"
            src={Close}
            alt="botão fechar"
          ></img>
        </div>
        <div className="container-img">
          <img src={pet.img} alt={pet.petName}></img>
          <p className="pet-name">{pet.petName}</p>
        </div>
        <form onClick={handleSubmit(submitForm)}>
          <Error>{errors?.pergunta1?.message}</Error>
          <input
            type="text"
            placeholder="Tem grade em casa?"
            {...register("pergunta1")}
          ></input>
          <input
            type="text"
            placeholder="Tem outros animais?"
            {...register("pergunta2")}
          ></input>
          <input
            type="text"
            placeholder="Tem condições de dar auxílio médico ao animal"
            {...register("pergunta3")}
          ></input>
          <input
            type="text"
            placeholder="Tem um ambiente adequado?"
            {...register("pergunta4")}
          ></input>
          <input
            type="text"
            placeholder="Tem crianças?"
            {...register("pergunta5")}
          ></input>
          <button type="submit">ENVIAR</button>
        </form>
      </Container>
    </ContainerPai>
  );

};

export default ModalSolicitation;
