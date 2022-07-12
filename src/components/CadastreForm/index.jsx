import React, { useContext } from "react";
import { FormCadastre } from "./style";
import { Input } from "../InputLabel";
import { SelectForm } from "../SelectForm";
import { RedirectContext } from "../../context/redirect";

import { useForm } from "react-hook-form";

import api from "../../api/api";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const CadastreForm = ({ setForm, form }) => {
  const { redirectToPage } = useContext(RedirectContext);

  const muda = () => {
    setForm(!form);
  };

  const formSchema = yup.object().shape({
    type: yup.string().required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email Inválido."),
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
    console.log(dados)
    api
      .post("/register", dados)
      .then(() => {
        setForm(!form);
        redirectToPage("/login");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <FormCadastre onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button
            type="button"
            onClick={() => {
              redirectToPage("/login");
            }}
            className="btnslogin"
          >
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
          name="type"
          placeholder="Senha"
        >
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
        <Input
          placeholderInput={"(CPF / CNPJ) Obs:Somente numeros"}
          register={register}
          name="cpfcnpj"
          type="text"
        />
        {errors.email && <span> {errors.cpfcnpj?.message}</span>}
        <button type="submit" className="btnslogin--orange">
          Cadastrar
        </button>
      </FormCadastre>
    </>
  );
};
