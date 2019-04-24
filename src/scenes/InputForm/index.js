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

class InputForm extends Component {
  state = {
    formValues: {
      name: "",
      email: "",
      confirmPassword: "",
      password: ""
    },
    touchedFields: {}
  };

  handleChangeFormValuesClick = () => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        name: "Bozo the Clown"
      }
    });
  };

  handleFormValuesChange = e => {
    // TODO: If e.target.name contains periods (like social.twitter, separate and store it as an object social: ...social, { twitter: value })
    this.setState(prevState => ({
      formValues: {
        ...prevState.formValues,
        [e.target.name]: e.target.value
      },
      touchedFields: { ...prevState.touchedFields, [e.target.name]: true }
    }));
  };

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
              initialValues={this.state.formValues}
              isInitialValid={({ validationSchema, initialValues }) =>
                validationSchema.isValidSync(initialValues)
              }
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values, actions) => {
                console.log(JSON.stringify(values, null, 2));
                setTimeout(() => actions.setSubmitting(false), 3000);
              }}
              render={props => {
                return (
                  <Form
                    handleFormValuesChange={this.handleFormValuesChange}
                    touchedFields={this.state.touchedFields}
                    {...props}
                  />
                );
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleChangeFormValuesClick}
              style={{ marginTop: "16px" }}
            >
              Change Name (But Keep Others)
            </Button>
          </Paper>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(InputForm);
