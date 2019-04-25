import React from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { Form as FormikForm, Field } from "formik";
import FormikFieldTextField from "../../../../components/FormikFieldTextField";
import FormikRadioGroup from "../../../../components/FormikRadioGroup";
import FormikFieldRadio from "../../../../components/FormikFieldRadio";
import FormikFieldCheckbox from "../../../../components/FormikFieldCheckbox";
import FormikCheckboxGroup from "../../../../components/FormikCheckboxGroup";

const Form = ({
  values,
  errors,
  touched,
  isValid,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  ...props
}) => {
  return (
    <FormikForm style={{ width: "100%" }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Field
            name="name"
            helperText="Enter your full name"
            label="Name"
            component={FormikFieldTextField}
          />
        </Grid>

        <Grid item xs={12}>
          <Field name="email" label="Email" component={FormikFieldTextField} />
        </Grid>

        <Grid item xs={12}>
          <Field
            name="password"
            label="Password"
            component={FormikFieldTextField}
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="confirmPassword"
            label="Confirm Your Password"
            component={FormikFieldTextField}
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
              component={FormikFieldRadio}
              name="preferredFruit"
              id="radioOption1"
              label="Delicious Apples"
              inputValue="Apples"
            />
            <Field
              component={FormikFieldRadio}
              name="preferredFruit"
              id="radioOption2"
              label="Ripe Oranges"
              inputValue="Oranges"
            />
            <Field
              component={FormikFieldRadio}
              name="preferredFruit"
              id="radioOption3"
              label="Ripe Bananas"
              inputValue="Bananas"
              disabled
            />
          </FormikRadioGroup>
        </Grid>

        <Grid item xs={12}>
          <FormikCheckboxGroup
            id="checkboxGroup"
            name="skills"
            label="Skills"
            helperText="Select at least 2"
            value={values.skills}
            error={errors.skills}
            touched={touched.skills}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            row={true}
          >
            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill1"
              label="HTML"
              inputValue="html-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill2"
              label="JavaScript"
              inputValue="js-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill3"
              label="CSS"
              inputValue="css-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill4"
              label="Other"
              inputValue="other-123"
            />
          </FormikCheckboxGroup>
          {values.skills.includes("other-123") && (
            <Field
              component={FormikFieldTextField}
              name="otherSkill"
              label="Other Skill"
              style={{ marginTop: 24 }}
            />
          )}
        </Grid>

        <Grid item xs={12}>
          <Field
            component={FormikFieldCheckbox}
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
  values: PropTypes.object.isRequired
};

export default Form;
