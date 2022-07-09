import React from "react";

import { InputForms, LabelForm, Divcont } from "./style";

export const Input = ({ placeholderInput, TextLabelForm, register ,name, ...rest }) => {
  return (
    <><Divcont>
      {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
      <InputForms placeholder={placeholderInput} {...register(name)} {...rest} />
      </Divcont>
    </>
  );
};
