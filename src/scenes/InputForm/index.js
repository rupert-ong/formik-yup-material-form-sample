import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Form from "./components/Form";
import { Typography } from "@material-ui/core";
import * as yup from "yup";

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
    .oneOf([yup.ref("password")], "Password does not match")
});

const initialValues = {
  name: "",
  email: "",
  confirmPassword: "",
  password: ""
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

export default withStyles(styles)(InputForm);
