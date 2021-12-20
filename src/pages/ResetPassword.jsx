import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { resetPasssword } from "../api/resetPassword";
import LetItGoLogo from "../assets/images/let-it-go.jpg";
import "./ResetPassword.css";
import * as yup from "yup";

const ResetPasswordValidationSchema = yup.object().shape({
  password: yup.string().min(8, "Too Short!").required("Required!"),
  confirmPassword: yup
    .string()
    .required("Required!")
    .test(
      "passwords-match",
      "Passwords must match",
      function validatePassword(value) {
        return this.parent.password === value;
      }
    ),
});
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
        validationSchema={ResetPasswordValidationSchema}
      >
        {({ errors, touched }) => (
          <Form className="reset-form">
            <div>
              <div>
                <Field name="password" placeholder="password" />
              </div>
              <span className="form-error">
                <ErrorMessage name="password" />
              </span>
            </div>
            <div>
              <div>
                <Field name="confirmPassword" placeholder="confirm password" />
              </div>
              <span className="form-error">
                <ErrorMessage name="confirmPassword" />
              </span>
            </div>
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
