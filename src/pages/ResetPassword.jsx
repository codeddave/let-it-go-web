import { Field, Form, Formik } from "formik";
import React from "react";
import LetItGoLogo from "../assets/images/let-it-go.jpg";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-page">
      <section>
        <img src={LetItGoLogo} className="logo" alt="" />
      </section>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
      >
        {({}) => (
          <Form className="reset-form">
            <Field name="password" placeholder="password" />
            <Field name="confirmPassword" placeholder="confirm password" />
            <button className="reset-button">Reset Password</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
