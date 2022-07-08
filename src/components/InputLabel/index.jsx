import React from "react";

import { InputForms, LabelForm, Divcont } from "./style";

export const Input = ({ placeholderInput, TextLabelForm, ...rest }) => {
  return (
    <><Divcont>
      {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
      <InputForms placeholder={placeholderInput} {...rest} />
      </Divcont>
    </>
  );
};
