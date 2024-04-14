import { Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        component="h1"
        sx={{ mb: 2, mt: 4, textAlign: "center" }}
      >
        Welcome!
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2, textAlign: "center" }}
      >
        Create your own phonebook!
      </Typography>
    </Container>
  );
};

export default HomePage;
