import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.trim().toLowerCase()) ||
          number.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
