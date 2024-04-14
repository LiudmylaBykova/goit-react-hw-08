import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddNewContact,
  requestDeleteContact,
  requestGetUserContacts,
  requestUpdateContact,
} from "../../service";
import axios from "axios";

export const getUserContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetUserContacts();

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/add",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddNewContact(formData);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (userId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(userId);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  "phonebook/update",
  async (editedContact, thunkAPI) => {
    try {
      const data = await requestUpdateContact(editedContact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updateContact = createAsyncThunk(
//   "contacts/update",
//   async (userData, thunkAPI) => {
//     try {
//       const data = await requesUpdateContact(userData);

//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
