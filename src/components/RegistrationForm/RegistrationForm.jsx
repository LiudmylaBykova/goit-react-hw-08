import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please, enter your name! This field is required!")
    .min(3, "User name must be at least 3 characters long!")
    .max(50, "User name must be less 50 characters long!"),
  email: Yup.string()
    .required("Please, enter your email! This field is required!")
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, {
      message: "Must be a valid email!",
      excludeEmptyString: false,
    }),
  password: Yup.string()
    .required("Please, enter your password! This field is required!")
    .min(8, "Password must be at least 8 characters long!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ onRegister }) => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  //   const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    onRegister(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
      validationSchema={UserRegisterSchema}
    >
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Jack Wilson"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>

        <div className={css.label}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="jackwilson@gmail.com"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="div" />
        </div>

        <div className={css.label}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            id={passwordFieldId}
          />
          <ErrorMessage className={css.error} name="password" component="div" />
        </div>

        <button className={css.btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
