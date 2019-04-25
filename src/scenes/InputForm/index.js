import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Paper, Typography } from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "./components/Form";

import styles from "./styles";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),
  preferredFruit: yup.string().required("A radio option is required")
});

const initialValues = {
  name: "",
  email: "",
  confirmPassword: "",
  password: "",
  preferredFruit: ""
};

class InputForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Form
            </Typography>
            <Formik
              initialValues={initialValues}
              isInitialValid={({ validationSchema, initialValues }) =>
                validationSchema.isValidSync(initialValues)
              }
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2));
                setTimeout(() => actions.setSubmitting(false), 3000);
              }}
              render={props => {
                return <Form {...props} />;
              }}
            />
          </Paper>
        </div>
      </>
    );
  }
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputForm);
