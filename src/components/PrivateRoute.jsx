import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? Component : <Navigate to={redirectTo} />;
};
