import React from "react";
import { Button } from "../Button";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
export const LoginForm = () => {
    return (
        <>
        <FormLogin>

        <div className="btns">        
        
        <button type="" className="btnslogin">Login</button>
        <button className="btnslogin">Cadastrar</button>

        </div>
        <Input placeholderInput={"Nome"}  type="text"/>
        <Input placeholderInput={"Senha"} type="password" />
        <button className="btnslogin--orange">Cadastrar</button>

        </FormLogin>
        </>
    )
    
};
