import React from "react";

import TextField from "@material-ui/core/TextField";

const FormikInputText = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <TextField
      error={touched[field.name] && Boolean(errors[field.name])}
      variant="outlined"
      fullWidth
      {...field}
      {...props}
      helperText={
        touched[field.name] && Boolean(errors[field.name])
          ? errors[field.name]
          : props.helperText
          ? props.helperText
          : ""
      }
    />
  );
};

export default FormikInputText;
