import React from "react";

import { SelectForms, LabelForm, Divcont } from "./style";

export const SelectForm = ({ placeholderSelectForm, TextLabelForm, ...rest }) => {
  return (
    <><Divcont>
      {TextLabelForm ? <LabelForm>{TextLabelForm}</LabelForm> : ""}
      <SelectForms placeholder={placeholderSelectForm} {...rest} />
      </Divcont>
    </>
  );
};
