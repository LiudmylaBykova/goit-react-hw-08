import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ContactList from "../components/ContactList/ContactList";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../redux/contacts/selectors";
import { getUserContacts } from "../redux/contacts/operations";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getUserContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Phonebook
      </Typography>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <ContactList />}
    </Container>
  );
};

export default ContactsPage;
