import React from "react";
import PropTypes from "prop-types";
import { FormControlLabel, FormHelperText, Checkbox } from "@material-ui/core";

const FormikCheckbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  inputValue,
  helperText,
  ...props
}) => {
  const isTouchedAndHasError = touched[name] && errors[name];
  return (
    <>
      <FormControlLabel
        name={name}
        label={label}
        control={
          <Checkbox
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={String(inputValue) || String(value)}
            color={props.color}
          />
        }
        {...props}
        checked={Boolean(value)}
      />
      {(isTouchedAndHasError || helperText) && (
        <FormHelperText error={isTouchedAndHasError}>
          {isTouchedAndHasError ? errors[name] : helperText ? helperText : ""}
        </FormHelperText>
      )}
    </>
  );
};

FormikCheckbox.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  inputValue: PropTypes.string,
  helperText: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary", "default"])
};

FormikCheckbox.defaultProps = {
  color: "primary"
};

export default FormikCheckbox;
