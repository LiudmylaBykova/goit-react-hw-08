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
import { apiAddNewContact, apiGetUserContacts } from "../redux/contacts/slice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <ContactList />}
    </div>
  );
};

export default ContactsPage;
