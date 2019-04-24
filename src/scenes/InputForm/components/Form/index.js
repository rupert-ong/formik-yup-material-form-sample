import React from "react";
import { Grid, Button } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { Form as FormikForm, Field } from "formik";
import FormikInputText from "../../../../components/FormikInputText";

const Form = props => {
  const { isValid, isSubmitting } = props;

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
