import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const FormikFieldTextField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
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

FormikFieldTextField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired
};

export default FormikFieldTextField;
