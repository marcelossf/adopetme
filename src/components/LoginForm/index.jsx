import React, { useContext, useEffect } from "react";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
import { RedirectContext } from "../../context/redirect";
import { useForm } from "react-hook-form";
import { LoginLogoutContext } from "../../context/login-logout";
import api from "../../api/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PetOngContext } from "../../context/ong";
import { toastError, toastSucess } from "../../utils/toast";
import { UserContext } from "../../context/user";

export const LoginForm = ({ setForm }) => {
  const { redirectToPage, form } = useContext(RedirectContext);
  const { logado, changeLogado } = useContext(LoginLogoutContext);
  const { setActiveOng } = useContext(PetOngContext);
  const { setActiveUser } = useContext(UserContext);

  const muda = () => {
    setForm(!form);
  };

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
    api
      .post("/login", dados)

      .then((response) => {
        
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(response.data.user));
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
      .catch((_) => toastError("Senha/Email incorretos")).finally((response)=>console.log(response));
  }

  if (logado) {
    redirectToPage("/");
  }

  return (
    <>
      <FormLogin onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button
            type="button"
            className="btnslogin disable"
            onClick={() => {
              muda();
              redirectToPage("/login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            className="btnslogin"
            onClick={() => {
              redirectToPage("/cadastrar");
            }}
          >
            Cadastrar
          </button>
        </div>
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
        <button type="submiit" className="btnslogin--orange">
          Logar
        </button>
      </FormLogin>
    </>
  );
};
