import React from "react";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const LoginForm = ({ setForm, form }) => {
  const muda = () => {
    setForm(!form);
  };

  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

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

     axios
      .post("https://json-server-adopetme.herokuapp.com/login", dados)

       .then((response) => localStorage.setItem("token",response.data.accessToken))
        //  .then(() => navegation("/Home"))
       .catch((error) => console.log(error));

  }

  return (
    <>
      <FormLogin onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button type="button" onClick={muda} className="btnslogin disable">
            Login
          </button>
          <button type="button" onClick={muda} className="btnslogin">
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
        <button type="submiit" className="btnslogin--orange">Logar</button>
      </FormLogin>
    </>
  );
};
