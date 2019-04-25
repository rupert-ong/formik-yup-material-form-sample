import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { Form as FormikForm, Field } from "formik";
import FormikInputText from "../../../../components/FormikInputText";
import FormikRadioGroup from "../../../../components/FormikRadioGroup";
import FormikRadio from "../../../../components/FormikRadio";
import FormikCheckbox from "../../../../components/FormikCheckbox";

const Form = ({
  values,
  errors,
  touched,
  isValid,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  theme,
  ...props
}) => {
  return (
    <FormikForm>
      <Grid container spacing={theme.spacing.unit * 3}>
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
            helperText="Fruits are a healthy source of vitamins and nutrients"
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
            <Field
              component={FormikRadio}
              name="preferredFruit"
              id="radioOption3"
              label="Ripe Bananas"
              inputValue="Bananas"
              disabled
            />
          </FormikRadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Field
            component={FormikCheckbox}
            name="signUpForNewsletter"
            id="checkbox1"
            label="Sign up for our newsletter"
            helperText="We won't spam you"
          />
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
      {
        <pre>
          <strong>State</strong>
          <br />
          {JSON.stringify(values, null, 2)}
        </pre>
      }
      {
        <pre>
          <strong>Errors</strong>
          <br />
          {JSON.stringify(errors, null, 2)}
        </pre>
      }
      {
        <pre>
          <strong>Touched</strong>
          <br />
          {JSON.stringify(touched, null, 2)}
        </pre>
      }
    </FormikForm>
  );
};

Form.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withTheme()(Form);
