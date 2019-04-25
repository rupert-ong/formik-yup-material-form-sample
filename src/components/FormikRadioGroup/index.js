import React from "react";
import { RadioGroup } from "@material-ui/core";
import { getIn } from "formik";

const FormikRadioGroup = ({
  value,
  error,
  touched,
  name,
  label,
  children,
  id,
  row,
  classes,
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
    <>
      <RadioGroup
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        row={row}
        classes={classes}
        {...props}
      >
        {children}
      </RadioGroup>
      {touched && error}
    </>
  );
};

export default FormikRadioGroup;
