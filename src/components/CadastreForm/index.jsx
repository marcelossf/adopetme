import React from "react";
import { Button } from "../Button";
import { FormLogin } from "./style";
import { Input } from "../InputLabel";
import { SelectForm } from "../SelectForm";
export const CadastreForm = () => {
    return (
        <>
        <FormLogin>

        <div className="btns">        
        
        <button type="button" className="btnslogin">Login</button>
        <button type="button" className="btnslogin">Cadastrar</button>

        </div>

        <SelectForm className="loginInput" type="text"  placeholder="Senha">
         <option value="Adotante">Adotante</option>
         <option value="ONG">ONG</option>
        </SelectForm> 
        <Input placeholderInput={"Nome"} type="text"/>
        <Input placeholderInput={"Email"} type="text"/>
        <Input placeholderInput={"Senha"} type="password"/>
        <Input placeholderInput={"Confirme sua Senha"} type="password"/>
        <Input placeholderInput={"CPF / CNPJ"} type="text"/>
        <button className="btnslogin--orange">Cadastrar</button>

        </FormLogin>
        </>
    )
};
