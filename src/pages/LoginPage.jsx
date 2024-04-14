import LoginForm from "../components/LoginForm/LoginForm";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Login form
      </Typography>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
