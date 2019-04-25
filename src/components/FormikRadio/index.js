import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";

const FormikRadio = ({
  field,
  form,
  id,
  label,
  inputValue,
  disabled,
  ...props
}) => {
  return (
    <FormControlLabel
      name={field.name}
      label={label}
      value={inputValue}
      control={<Radio id={id} />}
      {...props}
      checked={field.value === inputValue}
    />
  );
};

export default FormikRadio;
