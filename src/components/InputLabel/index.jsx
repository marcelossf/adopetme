import React from "react";

import { InputForms, LabelForm, Divcont } from "./style";

export const Input = ({
  placeholderInput,
  TextLabelForm,
  register,
  name,
  value,
  ...rest
}) => {
  return (
    <>
      <Divcont>
        {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
        <InputForms
          value={value}
          placeholder={placeholderInput}
          {...register(name)}
          {...rest}
        />
      </Divcont>
    </>
  );
};
