import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const FormikFieldTextField = ({
  field,
  form: { touched, errors },
  helperText,
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
          : helperText || ""
      }
    />
  );
};

FormikFieldTextField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  helperText: PropTypes.string,
};

export default FormikFieldTextField;
