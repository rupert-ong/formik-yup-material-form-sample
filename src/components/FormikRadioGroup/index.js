import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import FormikFieldRadio from "../FormikFieldRadio";
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
  options,
  optionLabelKey,
  optionValueKey,
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
        {typeof options !== "undefined"
          ? options.map(option => {
              return (
                <Field
                  key={`${name}-${option[optionValueKey]}`}
                  component={FormikFieldRadio}
                  name={name}
                  id={`${name}-${option[optionValueKey]}`}
                  label={option[optionLabelKey]}
                  value={option[optionValueKey]}
                />
              );
            })
          : typeof children !== "undefined"
          ? children
          : ""}
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
  options: PropTypes.arrayOf(PropTypes.object),
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

FormikRadioGroup.defaultProps = {
  optionValueKey: "id",
  optionLabelKey: "value"
};

export default FormikRadioGroup;
