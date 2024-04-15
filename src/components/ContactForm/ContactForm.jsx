import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addNewContact } from "../../redux/contacts/operations";
import { Toaster, toast } from "react-hot-toast";
import { Box } from "@mui/material";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "User name must be at least 3 characters long!")
    .max(50, "User name must be less 50 characters long!")
    .required("Please, enter your name! This field is required!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, {
      message: "Please, enter the correct phone number: 999-99-99!",
      excludeEmptyString: false,
    })
    .required("Please, enter your phone number! This field is required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      dispatch(addNewContact(values));
      toast.success(`Contact "${values.name}" added to phonebook!`, {
        position: "top-right",
      });
      actions.resetForm();
    } catch (error) {
      toast.error("Failed to add contact");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
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
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.input}
              type="tel"
              name="number"
              placeholder="999-99-99"
              id={numberFieldId}
            />
            <ErrorMessage className={css.error} name="number" component="div" />
          </div>
          <button className={css.btn} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
};

export default ContactForm;
