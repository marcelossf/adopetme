import React, { useContext } from "react";
import { Button } from "../Button";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
import { RedirectContext } from "../../context/redirect";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {LoginLogoutContext} from '../../context/login-logout';

import api from "../../api/api";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const LoginForm = ({ setForm }) => {
  const { redirectToPage, form } = useContext(RedirectContext);
  const {logado, changeLogado} = useContext(LoginLogoutContext);

  const token = localStorage.getItem('token');
  
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
      .post("https://json-server-adopetme.herokuapp.com/login", dados)

      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.accessToken));
        changeLogado();
        redirectToPage('/')
      })
      .catch((error) => console.log(error));
  }

  if(logado) {
    redirectToPage('/')
  }

  return (
    <>
      <FormLogin onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button
            type="button"
            className="btnslogin"
            onClick={() => {
              redirectToPage("/login");
              muda()
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
