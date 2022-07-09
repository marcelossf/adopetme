import React from "react";
import { Button } from "../Button";
import { FormCadastre } from "./style";
import { Input } from "../InputLabel";
import { SelectForm } from "../SelectForm";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const CadastreForm = ({ setForm, form }) => {
  const muda = () => {
    setForm(!form);
  };

  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

  const formSchema = yup.object().shape({
   
    Type:yup.string().required("Campo obrigatório"),
    Name:yup.string().required("Campo obrigatório"),
    email:yup.string().required("Campo obrigatório").email("Email Inválido."),
    password: yup
      .string()
      .required("Senha obrigatório.")
      .min(6, "Mínimo 6 caracteres."),
    passwordConf:yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("password")], "Senhas diferentes."),
    cpfcnpj:yup.string().required("Campo obrigatório").min(11).max(14)
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onLogin(dados) {
    console.log(dados);
     axios
    .post("https://json-server-adopetme.herokuapp.com/register", dados)
    
    .then(() =>setForm(!form))
    .catch((error) => console.log(error));
  }

  return (
    <>
      <FormCadastre onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button type="button" onClick={muda} className="btnslogin">
            Login
          </button>
          <button type="button" onClick={muda} className="btnslogin disable">
            Cadastrar
          </button>
        </div>

        <SelectForm
          className="loginInput"
          type="text"
          register={register}
          name="Type"
          placeholder="Senha"
        >
          <option value="Adotante">Adotante</option>
          <option value="ONG">ONG</option>
        </SelectForm>
        {errors.email && <span> {errors.Type?.message}</span>}
        <Input
          placeholderInput={"Nome"}
          register={register}
          name="Name"
          type="text"
        />
        {errors.email && <span> {errors.Name?.message}</span>}
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
        <Input
          placeholderInput={"(CPF / CNPJ) Obs:Somente numeros"}
          register={register}
          name="cpfcnpj"
          type="text"
        />
        {errors.email && <span> {errors.cpfcnpj?.message}</span>}
        <button type="submite" className="btnslogin--orange">
          Cadastrar
        </button>
      </FormCadastre>
    </>
  );
};
