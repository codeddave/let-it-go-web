import { Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { resetPasssword } from "../api/resetPassword";
import LetItGoLogo from "../assets/images/let-it-go.jpg";
import "./ResetPassword.css";

const ResetPassword = () => {
  const { token } = useParams();
  const handleSubmit = (values) => {
    resetPasssword(values.password, token);
  };
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
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="reset-form">
            <Field name="password" placeholder="password" />
            <Field name="confirmPassword" placeholder="confirm password" />
            <button type="submit" className="reset-button">
              Reset Password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
