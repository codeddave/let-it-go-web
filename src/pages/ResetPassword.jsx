import { Field, Form, Formik } from "formik";
import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <Formik>
        {({}) => (
          <Form>
            <Field></Field>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
