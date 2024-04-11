import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestAddNewContact,
  requestDeleteContact,
  requestGetUserContacts,
} from "./operations";

export const apiGetUserContacts = createAsyncThunk(
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

export const apiAddNewContact = createAsyncThunk(
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

export const apiDeleteContact = createAsyncThunk(
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
      .addCase(apiGetUserContacts.pending, handlePending)
      .addCase(apiGetUserContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.contacts = action.payload;
      })
      .addCase(apiGetUserContacts.rejected, handleRejected);

    //add
    // .addCase(apiAddNewContact.pending, handlePending)
    // .addCase(apiAddNewContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   state.contacts = [...state.contacts, action.payload];
    // })
    // .addCase(apiAddNewContact.rejected, handleRejected)

    //delete
    // .addCase(apiDeleteContact.pending, handlePending)
    // .addCase(apiDeleteContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = null;
    //   state.contacts = state.contacts.filter(
    //     (contact) => contact.id !== action.payload.id
    //   );
    // })
    // .addCase(apiDeleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
