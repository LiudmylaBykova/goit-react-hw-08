import { useDispatch } from "react-redux";
import { apiLoginUser } from "../redux/auth/slice";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
