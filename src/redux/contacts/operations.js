// import axios from "axios";
import { instance } from "../auth/operations";

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = (token) => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestGetUserContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

export const requestAddNewContact = async (formData) => {
  const { data } = await instance.post("/contacts", formData);

  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
