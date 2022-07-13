import React, { useContext, useEffect } from "react";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
import { RedirectContext } from "../../context/redirect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../context/user";

export const LoginForm = () => {
  const { redirectToPage, setForm } = useContext(RedirectContext);
  const { user, onLogin } = useContext(UserContext);
  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  useEffect(() => {
    if (user) {
      redirectToPage("/");
    }
  }, []);

  return (
    <>
      <FormLogin onSubmit={handleSubmit(onLogin)}>
        <div className="btns">
          <button type="button" className="btnslogin disable">
            Login
          </button>
          <button
            type="button"
            className="btnslogin"
            onClick={() => {
              setForm(false);
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
