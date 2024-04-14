import React from "react";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const RegistrationPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Registration form
      </Typography>
      <RegistrationForm />
    </Container>
  );
};

export default RegistrationPage;
