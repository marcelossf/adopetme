import React, { useContext } from "react";
import { Button } from "../Button";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
import { RedirectContext } from "../../context/redirect";

export const LoginForm = () => {
    const {redirectToPage} = useContext(RedirectContext);
    return (
        <>
        <FormLogin>

        <div className="btns">        
        
        <button type="button" className="btnslogin"  onClick={() => {redirectToPage('/login')}}>Login</button>
        <button type="button" className="btnslogin" onClick={() => {redirectToPage('/cadastrar')}}>Cadastrar</button>

        </div>
        <Input placeholderInput={"Nome"}  type="text"/>
        <Input placeholderInput={"Senha"} type="password" />
        <button className="btnslogin--orange">Cadastrar</button>

        </FormLogin>
        </>
    )
    
};
