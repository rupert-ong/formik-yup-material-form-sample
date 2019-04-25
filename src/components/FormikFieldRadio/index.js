import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Radio } from "@material-ui/core";

const FormikFieldRadio = ({ field, form, id, label, inputValue, ...props }) => {
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

FormikFieldRadio.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "default"])
};

FormikFieldRadio.defaultProps = {
  color: "primary"
};

export default FormikFieldRadio;
