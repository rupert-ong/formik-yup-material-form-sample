import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { Form as FormikForm, Field } from "formik";
import FormikInputText from "../../../../components/FormikInputText";
import FormikRadioGroup from "../../../../components/FormikRadioGroup";
import FormikRadio from "../../../../components/FormikRadio";

const Form = props => {
  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    setFieldValue,
    setFieldTouched
  } = props;

  return (
    <FormikForm>
      <Grid container spacing={props.theme.spacing.unit * 3}>
        <Grid item xs={12}>
          <Field
            name="name"
            helperText="Enter your full name"
            label="Name"
            component={FormikInputText}
          />
        </Grid>

        <Grid item xs={12}>
          <Field name="email" label="Email" component={FormikInputText} />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="password"
            label="Password"
            component={FormikInputText}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="confirmPassword"
            label="Confirm Your Password"
            component={FormikInputText}
            type="password"
          />
        </Grid>

        <Grid item xs={12}>
          <FormikRadioGroup
            id="radioGroup"
            name="preferredFruit"
            label="Pick One of These Fruits"
            value={values.preferredFruit}
            error={errors.preferredFruit}
            touched={touched.preferredFruit}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            row={true}
          >
            <Field
              component={FormikRadio}
              name="preferredFruit"
              id="radioOption1"
              label="Delicious Apples"
              inputValue="Apples"
            />
            <Field
              component={FormikRadio}
              name="preferredFruit"
              id="radioOption2"
              label="Ripe Oranges"
              inputValue="Oranges"
            />
          </FormikRadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={/*!isValid || */ isSubmitting}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {<pre>{JSON.stringify(values, null, 2)}</pre>}
      {<pre>{JSON.stringify(errors, null, 2)}</pre>}
      {<pre>{JSON.stringify(touched, null, 2)}</pre>}
    </FormikForm>
  );
};

Form.propTypes = {
  // Formik props
  dirty: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  isValidating: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  setTouched: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  status: PropTypes.any,
  submitForm: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
  touched: PropTypes.object.isRequired,
  validateForm: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  // Material UI
  theme: PropTypes.object.isRequired
};

export default withTheme()(Form);
