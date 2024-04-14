import { createSlice } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  getUserContacts,
  updateContact,
} from "./operations";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      //get
      .addCase(getUserContacts.pending, handlePending)
      .addCase(getUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts = action.payload;
      })
      .addCase(getUserContacts.rejected, handleRejected)

      //add
      .addCase(addNewContact.pending, handlePending)
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addNewContact.rejected, handleRejected)

      //delete
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      //
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        const index = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts[index] = action.payload;
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
