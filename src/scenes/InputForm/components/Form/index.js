import React from "react";
import PropTypes from "prop-types";
import { Grid, Button, Divider } from "@material-ui/core";
import { Form as FormikForm, Field } from "formik";
import FormikFieldTextField from "../../../../components/FormikFieldTextField";
import FormikRadioGroup from "../../../../components/FormikRadioGroup";
import FormikFieldCheckbox from "../../../../components/FormikFieldCheckbox";
import FormikCheckboxGroup from "../../../../components/FormikCheckboxGroup";
import FormikFieldSelect from "../../../../components/FormikFieldSelect";
import FormikFieldRadio from "../../../../components/FormikFieldRadio";

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
  // TODO: Extract this into a Context Provider
  const ageOptions = [
    { id: 10, value: "Ten" },
    { id: 20, value: "Twenty" },
    { id: 30, value: "Thirty" }
  ];

  const fruitOptions = [
    { id: "apples", value: "Delicious Apples" },
    { id: "oranges", value: "Juicy Oranges" },
    { id: "bananas", value: "Ripe Bananas" }
  ];

  const skillOptions = [
    { id: "js-123", value: "JavaScript" },
    { id: "css-123", value: "CSS" },
    { id: "react-123", value: "React" },
    { id: "other-123", value: "Other" }
  ];

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
      </Grid>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} />
      <Grid container spacing={32}>
        <Grid item xs={12}>
          <FormikRadioGroup
            id="radioGroup"
            name="preferredFruit"
            label="Pick One of These Fruits"
            helperText="This components is using an options array of objects prop"
            value={values.preferredFruit}
            error={errors.preferredFruit}
            touched={touched.preferredFruit}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            options={fruitOptions}
            row={true}
          />
        </Grid>

        <Grid item xs={12}>
          <FormikRadioGroup
            id="radioGroup2"
            name="gender"
            label="Pick Your Gender"
            helperText="This component uses children components"
            value={values.gender}
            error={errors.gender}
            touched={touched.gender}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            row={true}
          >
            <Field
              component={FormikFieldRadio}
              name="gender"
              id="gender1"
              label="Male"
              value="male-456"
            />
            <Field
              component={FormikFieldRadio}
              name="gender"
              id="gender2"
              label="Female"
              value="female-123"
            />
            <Field
              component={FormikFieldRadio}
              name="gender"
              id="gender3"
              label="Binary"
              value="binary-456"
            />
            <Field
              component={FormikFieldRadio}
              name="gender"
              id="gender4"
              label="Other"
              value="other-123"
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
              value="html-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill2"
              label="JavaScript"
              value="js-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill3"
              label="CSS"
              value="css-123"
            />

            <Field
              component={FormikFieldCheckbox}
              name="skills"
              id="skill4"
              label="Other"
              value="other-123"
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
            component={FormikFieldSelect}
            name="age"
            id="select1"
            label="Age"
            helperText="Be honest!"
            options={ageOptions}
            optionValueKey="id"
            optionLabelKey="value"
            fullWidth
          />
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
