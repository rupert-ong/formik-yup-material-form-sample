import React from "react";
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
      <FormGroup {...props}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            field: {
              name,
              value: value.includes(child.props.inputValue),
              onChange: handleChange,
              onBlur: handleBlur
            },
            displayError: false
          });
        })}
      </FormGroup>
      {(isTouchedAndHasError || helperText) && (
        <FormHelperText error={isTouchedAndHasError}>
          {isTouchedAndHasError ? error : helperText ? helperText : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormikCheckboxGroup;
