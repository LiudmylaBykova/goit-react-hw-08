import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  console.log("first");
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log("second");
  return (
    <>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.contactList}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.contactInfo}>No contacts in your contact list!</p>
      )}
    </>
  );
};

export default ContactList;
