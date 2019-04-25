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
  helperText,
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

  const isTouchedAndHasError = Boolean(touched) && Boolean(error);

  return (
    <FormControl component="fieldset">
      {label && (
        <FormLabel component="legend" focused={false}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      >
        {children}
      </RadioGroup>
      {(isTouchedAndHasError || helperText) && (
        <FormHelperText error={isTouchedAndHasError}>
          {isTouchedAndHasError ? error : helperText ? helperText : ""}
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
  helperText: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default FormikRadioGroup;
