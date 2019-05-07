import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from "@material-ui/core";

const FormikFieldSelect = ({ field, form: { touched, errors }, ...props }) => {
  const {
    id,
    helperText,
    options,
    optionValueKey,
    optionLabelKey,
    optionEmptyLabel,
    variant,
    readOnly,
    label,
    ...restProps
  } = props;

  const [labelWidth, setLabelWidth] = React.useState(0);

  let inputLabelRef = React.createRef();

  const isTouchedAndHasError =
    touched[field.name] && Boolean(errors[field.name]);

  useEffect(() => {
    setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
  }, []);

  const renderedOptions = Array.isArray(options) ? options.map(option => {
    return (
      <MenuItem
        key={`${field.name}-${option[optionValueKey]}`}
        value={option[optionValueKey]}
      >
        {option[optionLabelKey]}
      </MenuItem>
    );
  }) : Object.keys(options).map(k=> {
    return (
    <MenuItem
      key={`${field.name}-${k}`}
      value={k}
    >
      {options[k]}
    </MenuItem>);
  });

  return (
    <FormControl variant={variant} {...restProps}>
      <InputLabel ref={inputLabelRef} htmlFor={id}>
        {label}
      </InputLabel>
      <Select
        input={
          variant === "outlined" ? (
            <OutlinedInput labelWidth={labelWidth} name={field.name} id={id} />
          ) : variant === "filled" ? (
            <FilledInput name={field.name} id={id} />
          ) : null
        }
        {...field}
        readOnly={readOnly}
      >
        <MenuItem value="">{optionEmptyLabel}</MenuItem>
        {renderedOptions}
      </Select>
      {(isTouchedAndHasError || helperText) && (
        <FormHelperText error={isTouchedAndHasError}>
          {isTouchedAndHasError
            ? errors[field.name]
            : helperText
            ? helperText
            : ""}
        </FormHelperText>
      )}
    </FormControl>
  );
};

FormikFieldSelect.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.shape()]),
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  optionEmptyLabel: PropTypes.string,
  variant: PropTypes.oneOf(["outlined", "filled"]),
  readOnly: PropTypes.bool
};

FormikFieldSelect.defaultProps = {
  variant: "outlined",
  optionEmptyLabel: "None",
  optionValueKey: "id",
  optionLabelKey: "value"
};

export default FormikFieldSelect;
