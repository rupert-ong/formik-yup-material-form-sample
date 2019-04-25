import React from "react";
import PropTypes from "prop-types";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormHelperText
} from "@material-ui/core";

const FormikRadioGroup = ({
  value,
  error,
  touched,
  name,
  label,
  children,
  onChange,
  onBlur,
  ...props
}) => {
  const handleChange = e => {
    // setFieldValue method prop call
    onChange(name, e.target.value);
  };

  const handleBlur = () => {
    // setFieldTouched method prop call
    onBlur(name, true);
  };

  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      >
        {children}
      </RadioGroup>
      {(Boolean(error) || props.helperText) && (
        <FormHelperText error={Boolean(error)}>
          {touched && Boolean(error)
            ? error
            : props.helperText
            ? props.helperText
            : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormikRadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default FormikRadioGroup;
