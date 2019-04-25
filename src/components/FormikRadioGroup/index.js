import React from "react";
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
    onChange(name, e.target.value);
  };

  const handleBlur = () => {
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

export default FormikRadioGroup;
