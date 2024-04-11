import React from "react";
import { useDispatch } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { apiRegisterUser } from "../redux/auth/slice";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData));
  };

  return (
    <div>
      <h2>Registration form</h2>
      <RegistrationForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
