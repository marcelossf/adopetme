import React, { useContext } from "react";
import { Input } from "../InputLabel";
import api from "../../api/api";
import { SelectForm } from "../SelectForm";
import { RedirectContext } from "../../context/redirect";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toastError, toastSucess } from "../../utils/toast";
import { BtnFormEnter, ButtonForm, FormCadastre, TitleForm } from "./style";

export const CadastreForm = () => {
	const { redirectToPage, setForm } = useContext(RedirectContext);

	const formSchema = yup.object().shape({
		type: yup.string().required("Campo obrigatório"),
		name: yup.string().required("Campo obrigatório"),
		email: yup
			.string()
			.required("Campo obrigatório")
			.email("Email Inválido."),
		password: yup
			.string()
			.required("Senha obrigatório.")
			.min(6, "Mínimo 6 caracteres."),
		passwordConf: yup
			.string()
			.required("Campo obrigatório.")
			.oneOf([yup.ref("password")], "Senhas diferentes."),
		cpfcnpj: yup.string().required("Campo obrigatório").min(11).max(14),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	function onLogin(dados) {
		console.log(dados);
		api.post("/register", dados)
			.then(() => {
				toastSucess("Cadastro realizado com sucesso");
				setForm(true);
				redirectToPage("/login");
			})
			.catch((_) => toastError("Campos Incorretos"));
	}

	return (
		<>
			<FormCadastre onSubmit={handleSubmit(onLogin)}>
				<TitleForm>Crie sua conta:</TitleForm>
				<SelectForm
					className="loginInput"
					type="text"
					register={register}
					name="type"
					placeholder="Senha">
					<option value="adotante">Adotante</option>
					<option value="ong">ONG</option>
				</SelectForm>
				{errors.email && <span> {errors.type?.message}</span>}
				<Input
					placeholderInput={"Nome"}
					register={register}
					name="name"
					type="text"
				/>
				{errors.email && <span> {errors.name?.message}</span>}
				<Input
					placeholderInput={"Email"}
					register={register}
					name="email"
					type="text"
				/>
				{errors.email && <span> {errors.email?.message}</span>}
				<Input
					placeholderInput={"Senha"}
					register={register}
					name="password"
					type="password"
				/>
				{errors.email && <span> {errors.password?.message}</span>}
				<Input
					placeholderInput={"Confirme sua Senha"}
					register={register}
					name="passwordConf"
					type="password"
				/>
				{errors.email && <span> {errors.passwordConf?.message}</span>}
				<label className="observation">
					obs: somente numeros
					<Input
						placeholderInput={"(CPF / CNPJ)"}
						register={register}
						name="cpfcnpj"
						type="text"
					/>
				</label>
				{errors.email && <span> {errors.cpfcnpj?.message}</span>}
				<BtnFormEnter type="submit">Criar conta</BtnFormEnter>
				<div className="btn-container">
					<ButtonForm
						type="button"
						onClick={() => {
							setForm(true);
							redirectToPage("/login");
						}}>
						Já possui uma conta? <span>Faça login </span>
					</ButtonForm>
				</div>
			</FormCadastre>
		</>
	);
};
