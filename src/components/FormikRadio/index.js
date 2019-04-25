import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio } from "@material-ui/core";

const FormikRadio = ({ field, form, id, label, inputValue, ...props }) => {
  return (
    <FormControlLabel
      name={field.name}
      label={label}
      value={inputValue}
      control={<Radio id={id} color={props.color} />}
      {...props}
      color="default"
      checked={field.value === inputValue}
    />
  );
};

FormikRadio.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "default"])
};

FormikRadio.defaultProps = {
  color: "primary"
};

export default FormikRadio;
