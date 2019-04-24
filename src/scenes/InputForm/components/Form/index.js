import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { Form as FormikForm, Field } from "formik";
import FormikInputText from "../../../../components/FormikInputText";

const Form = props => {
  const {
    values: { name, email, password, confirmPassword },
    handleBlur,
    isValid,
    isSubmitting,
    setTouched,
    handleFormValuesChange,
    touchedFields
  } = props;

  const handleOnBlur = e => {
    handleBlur(e);
    handleFormValuesChange(e);
    setTimeout(() => {
      if (Object.keys(touchedFields).length) {
        setTouched(touchedFields);
      }
    }, 10);
  };

  return (
    <FormikForm>
      <Grid container spacing={props.theme.spacing.unit * 3}>
        <Grid item xs={12}>
          <Field
            name="name"
            helperText="Enter your full name"
            label="Name"
            value={name}
            onBlur={handleOnBlur}
            component={FormikInputText}
          />
          {/*
          <TextField
            name="name"
            helperText={touched.name ? errors.name : ""}
            error={touched.name && Boolean(errors.name)}
            label="Name"
            value={name}
            onChange={handleChange}
            onBlur={handleOnBlur}
            variant="outlined"
            fullWidth
          />
        */}
        </Grid>

        <Grid item xs={12}>
          <Field
            name="email"
            label="Email"
            value={email}
            onBlur={handleOnBlur}
            component={FormikInputText}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="password"
            label="Password"
            value={password}
            onBlur={handleOnBlur}
            component={FormikInputText}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="confirmPassword"
            label="Confirm Your Password"
            value={confirmPassword}
            onBlur={handleOnBlur}
            component={FormikInputText}
            type="password"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {<pre>{JSON.stringify(props.values, null, 2)}</pre>}
    </FormikForm>
  );
};

export default withTheme()(Form);
