import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { apiDeleteContact } from "../../redux/contacts/slice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(apiDeleteContact(contact.id));
  };

  const handleEdit = () => {
    // dispatch(apiDeleteContact(contact.id));
  };
  return (
    <li>
      <div className={css.contactCard}>
        <div>
          <p className={css.cardText}>
            <BsFillPersonFill className={css.cardIcon} />
            {contact.name}
          </p>

          <p className={css.cardText}>
            <BsFillTelephoneFill className={css.cardIcon} />
            {contact.number}
          </p>
        </div>
        <button className={css.contactCardBtn} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.contactCardBtn} onClick={handleEdit}>
          Edit
        </button>
      </div>
    </li>
  );
};

export default Contact;
