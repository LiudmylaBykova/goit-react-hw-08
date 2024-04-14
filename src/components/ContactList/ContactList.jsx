import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { Box } from "@mui/material";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <Box>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.contactInfo}>No contacts in your contact list!</p>
      )}
    </Box>
  );
};

export default ContactList;
