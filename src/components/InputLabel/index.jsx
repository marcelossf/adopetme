import React from "react";

import { InputForms, LabelForm, Divcont } from "./style";

export const Input = ({ placeholderInput, register, name, TextLabelForm, ...rest }) => {
    return (
    <>
      <Divcont>
        {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
        <InputForms {...register(name)} placeholder={placeholderInput}  {...rest} />
      </Divcont>
    </>
  );
};
