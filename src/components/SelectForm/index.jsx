import React from "react";

import { SelectForms, LabelForm, Divcont } from "./style";

export const SelectForm = ({
  placeholderSelectForm,
  TextLabelForm,
  register,
  name,
  ...rest
}) => {
  return (
    <>
      <Divcont>
        {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
        <SelectForms
          placeholder={placeholderSelectForm}
          {...register(name)}
          {...rest}
        />
      </Divcont>
    </>
  );
};
