import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import FormikFieldCheckbox from "../FormikFieldCheckbox";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel
} from "@material-ui/core";

const FormikCheckboxGroup = ({
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
    const target = e.target;
    let valueArray = [...value] || [];

    if (target.checked) {
      valueArray.push(target.value);
    } else {
      valueArray.splice(valueArray.indexOf(target.value), 1);
    }
    // setFieldValue method prop call
    onChange(name, valueArray);
  };

  const handleBlur = () => {
    // setFieldTouched method prop call
    onBlur(name, [true]);
  };

  const isTouchedAndHasError = Boolean(touched) && Boolean(error);

  return (
    <FormControl component="fieldset">
      {label && (
        <FormLabel component="legend" focused={false}>
          {label}
        </FormLabel>
      )}
      <FormGroup {...props}>
        {typeof options !== "undefined"
          ? options.map(option => {
              return React.cloneElement(
                <Field
                  key={`${name}-${option[optionValueKey]}`}
                  component={FormikFieldCheckbox}
                  name={name}
                  id={`${name}-${option[optionValueKey]}`}
                  label={option[optionLabelKey]}
                  value={option[optionValueKey]}
                  field={{
                    name,
                    value: value.includes(option[optionValueKey]),
                    onChange: handleChange,
                    onBlur: handleBlur
                  }}
                  displayError={false}
                />
              );
            })
          : typeof children !== "undefined"
          ? React.Children.map(children, child => {
              return React.cloneElement(child, {
                field: {
                  name,
                  value: value.includes(child.props.value),
                  onChange: handleChange,
                  onBlur: handleBlur
                },
                displayError: false
              });
            })
          : ""}
      </FormGroup>
      {(isTouchedAndHasError || helperText) && (
        <FormHelperText error={isTouchedAndHasError}>
          {isTouchedAndHasError ? error : helperText ? helperText : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormikCheckboxGroup.propTypes = {
  value: PropTypes.array.isRequired,
  error: PropTypes.string,
  touched: PropTypes.array,
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

FormikCheckboxGroup.defaultProps = {
  optionValueKey: "id",
  optionLabelKey: "value"
};

export default FormikCheckboxGroup;
