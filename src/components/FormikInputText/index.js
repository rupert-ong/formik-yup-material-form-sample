import React from "react";
import PropTypes from "prop-types";

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

FormikInputText.propTypes = {
  // Formik injected
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
  }).isRequired,
  form: PropTypes.object.isRequired,
  // Material UI TextField (Common ones)
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array
  ]),
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
};

export default FormikInputText;
