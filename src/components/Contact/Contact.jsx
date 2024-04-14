import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import DeleteContactDialog from "../DeleteContactDialog/DeleteContactDialog";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });
  const [isMadalEditOpen, setIsModalEditOpen] = useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast(`Contact "${contact.name}" has been deleted from phonebook!`, {
      position: "top-right",
    });
  };

  const handleOpenEditModal = () => {
    setIsModalEditOpen(true);
  };
  const handleSave = () => {
    dispatch(updateContact(editedContact));
    setIsModalEditOpen(false);
    toast("Contact has been updated!", {
      position: "top-right",
    });
  };
  const handleCancelEdit = () => {
    setIsModalEditOpen(false);
    setEditedContact({ ...contact });
  };
  useEffect(() => {
    setEditedContact(editedContact);
  }, [editedContact]);

  return (
    <>
      <li>
        <div className={css.contactCard}>
          <div>
            <p className={css.cardText}>
              <BsFillPersonFill className={css.cardIconPerson} />
              {contact.name}
            </p>

            <p className={css.cardText}>
              <BsFillTelephoneFill className={css.cardIconPerson} />
              {contact.number}
            </p>
          </div>
          <div className={css.btnWrap}>
            <button
              className={css.contactCardBtn}
              onClick={handleClickOpenDialog}
              title="Delete contact"
            >
              <IoTrashOutline className={css.cardIcon} />
            </button>
            <button
              className={css.contactCardBtn}
              onClick={handleOpenEditModal}
              title="Edit contact"
            >
              <RiEdit2Fill className={css.cardIcon} />
            </button>
          </div>
        </div>
      </li>

      <DeleteContactDialog
        open={open}
        id={contact.id}
        handleClose={handleCloseDialog}
        handleDelete={handleDelete}
      />

      <Modal
        className={css.modal}
        isOpen={isMadalEditOpen}
        ariaHideApp={false}
        onRequestClose={() => setIsModalEditOpen(false)}
      >
        <div className={css.modalFormWrap}>
          <button
            className={css.closeModalBtn}
            onClick={handleCancelEdit}
          ></button>
          <h2>Edit Contact</h2>
          <form className={css.modalForm}>
            <input
              className={css.modalInput}
              label="name:"
              type="text"
              value={editedContact.name}
              onChange={(e) =>
                setEditedContact({ ...editedContact, name: e.target.value })
              }
            />

            <input
              className={css.modalInput}
              label="number:"
              type="text"
              value={editedContact.number}
              onChange={(e) =>
                setEditedContact({ ...editedContact, number: e.target.value })
              }
            />
          </form>
          <div className={css.buttonContainerModal}>
            <button type="submit" className={css.modalBtn} onClick={handleSave}>
              Save
            </button>
            <button
              type="submit"
              className={css.modalBtn}
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <Toaster />
    </>
  );
};

export default Contact;
