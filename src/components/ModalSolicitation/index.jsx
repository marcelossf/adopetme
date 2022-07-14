import Close from "../../assets/fechar.png";
import { Container, ContainerPai } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { SolicitationContext } from "../../context/solicitation";
import { toastSucess } from "../../utils/toast";
import { Error } from "../Error";

const ModalSolicitation = ({ pet, setOpen, open }) => {
	const { setSolicitationForm, setUserData } =
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
		setSolicitationForm(data);
		setUserData(JSON.parse(localStorage.getItem("user")));
		toastSucess("Solicitação Enviada");
	};

	return (
		<ContainerPai onClick={() => setOpen(false)}>
			<Container>
				<div className="container-adopet">
					<p className="text-solicitation">Solicitação de Adoção</p>
					<img
						onClick={() => setOpen(false)}
						className="button-close"
						src={Close}
						alt="botão fechar"></img>
				</div>
				<div className="container-img">
					<img src={pet.img} alt={pet.petName}></img>
					<p className="pet-name">{pet.petName}</p>
				</div>
				<form onClick={handleSubmit(submitForm)}>
					<input
						type="text"
						placeholder="A casa é telada?"
						{...register("pergunta1")}></input>
					<Error>{errors?.pergunta1?.message}</Error>
					<input
						type="text"
						placeholder="Tem outros animais?"
						{...register("pergunta2")}></input>
					<Error>{errors?.pergunta2?.message}</Error>
					<input
						type="text"
						placeholder="Tem condições de dar auxilio médico?"
						{...register("pergunta3")}></input>
					<Error>{errors?.pergunta3?.message}</Error>
					<input
						type="text"
						placeholder="O pet terá acesso a rua?"
						{...register("pergunta4")}></input>
					<Error>{errors?.pergunta4?.message}</Error>
					<input
						type="text"
						placeholder="Possui crianças?"
						{...register("pergunta5")}></input>
					<Error>{errors?.pergunta5?.message}</Error>
					<button type="submit">enviar</button>
				</form>
			</Container>
		</ContainerPai>
	);
};

export default ModalSolicitation;
