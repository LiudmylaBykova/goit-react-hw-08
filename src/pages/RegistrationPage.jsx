import React from "react";
import { useDispatch } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { registerUser } from "../redux/auth/operations";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(registerUser(formData));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Registration form
      </Typography>
      <RegistrationForm onRegister={onRegister} />
    </Container>
  );
};

export default RegistrationPage;
