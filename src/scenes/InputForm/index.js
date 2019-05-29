import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "./components/Form";

import useStyles from "./styles";

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
  preferredFruit: yup.string().required("Preferred Fruit is required"),
  skills: yup
    .array()
    .of(yup.string())
    .min(2, "You must select at least 2 skills")
    .required(),
  age: yup.number().required("Age is required"),
  hobbies: yup
    .array()
    .of(yup.string())
    .required("You must select at least 1 hobby"),
  otherSkill: yup.string().when("skills", {
    is: val => val.includes("other-123"), // alternatively: (val) => val == true
    then: yup.string().required("Other skill is required")
  }),
  signUpForNewsletter: yup.bool().oneOf([true], "Sign up is required")
});

const initialValues = {
  name: "",
  email: "",
  confirmPassword: "",
  password: "",
  preferredFruit: "",
  skills: [],
  otherSkill: "",
  hobbies: [],
  gender: "",
  age: 10,
  signUpForNewsletter: false
};

const InputForm = props => {
  const classes = useStyles();
  return (
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
  );
};

export default InputForm;
