import css from "./LoginForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

const UserLoginSchema = Yup.object().shape({
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
  email: "",
  password: "",
};

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        toast.success("Welcome in your phonebook!", {
          position: "top-right",
        });
      })
      .catch(() => {
        toast.error("login error");
      });
    actions.resetForm();
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
        validationSchema={UserLoginSchema}
      >
        <Form className={css.form}>
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
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </div>

          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
};

export default LoginForm;
