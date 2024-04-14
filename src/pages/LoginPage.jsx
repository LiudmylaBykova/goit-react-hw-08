import { useDispatch } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { loginUser } from "../redux/auth/operations";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(loginUser(formData));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mb: 2, mt: 4 }}>
        Login form
      </Typography>
      <LoginForm onLogin={onLogin} />
    </Container>
  );
};

export default LoginPage;
