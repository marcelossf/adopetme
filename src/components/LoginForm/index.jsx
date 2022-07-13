import React, { useContext } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import api from "../../api/api";
import { Input } from "../InputLabel";

import { LoginLogoutContext } from "../../context/login-logout";
import { PetOngContext } from "../../context/ong";
import { RedirectContext } from "../../context/redirect";
import { UserContext } from "../../context/user";

import { toastError, toastSucess } from "../../utils/toast";

import { BtnFormEnter, ButtonForm, TitleForm } from "../CadastreForm/style";
import { FormLogin } from "./style";

export const LoginForm = () => {
	const { redirectToPage, form, setForm } = useContext(RedirectContext);
	const { logado, changeLogado } = useContext(LoginLogoutContext);
	const { setActiveOng } = useContext(PetOngContext);
	const { setActiveUser } = useContext(UserContext);

	const token = JSON.parse(localStorage.getItem("token"));

	const formSchema = yup.object().shape({
		email: yup.string().required("Campo obrigatório"),
		password: yup.string().required("Campo obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	function onLogin(dados) {
		api.post("/login", dados)

			.then((response) => {
				localStorage.setItem(
					"token",
					JSON.stringify(response.data.accessToken)
				);
				localStorage.setItem(
					"user",
					JSON.stringify(response.data.user)
				);
				const user = response.data.user;
				changeLogado();
				toastSucess("Login Realizado com Sucesso");
				if (user.type === "ong") {
					setActiveOng(true);
					return redirectToPage("/ong");
				} else {
					setActiveUser(true);
					return redirectToPage("/user");
				}
			})
			.catch((_) => toastError("Senha/Email incorretos"))
			.finally((response) => console.log(response));
	}

	if (token) {
		redirectToPage("/");
	}

	return (
		<>
			<FormLogin onSubmit={handleSubmit(onLogin)}>
				<TitleForm>Acesse sua conta!</TitleForm>

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
				{errors.email && <span> {errors.email?.message}</span>}
				<BtnFormEnter type="submiit">Login</BtnFormEnter>
				<div className="btn-container">
					<ButtonForm
						type="button"
						onClick={() => {
							setForm(false);
							redirectToPage("/cadastrar");
						}}>
						Não possui uma conta? <span>Cadastre-se</span>
					</ButtonForm>
				</div>
			</FormLogin>
		</>
	);
};
