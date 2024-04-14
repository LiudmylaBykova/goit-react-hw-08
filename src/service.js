import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

//auth
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = (token) => {
  instance.defaults.headers.common.Authorization = "";
};

export const requestSignUp = async (formData) => {
  const { data } = await instance.post("/users/signup", formData);
  setToken(data.token);
  return data;
};

export const requestSignIn = async (formData) => {
  const { data } = await instance.post("/users/login", formData);
  setToken(data.token);
  return data;
};

export const requestGetCurrentUser = async () => {
  const { data } = await instance.get("/users/current");

  return data;
};

export const requestLogOut = async () => {
  const { data } = await instance.post("/users/logout");

  return data;
};

//contacts

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

export const requestUpdateContact = async (editedContact) => {
  const { data } = await instance.patch(`/contacts/${editedContact.id}`, {
    name: editedContact.name,
    number: editedContact.number,
  });
  return data;
};
