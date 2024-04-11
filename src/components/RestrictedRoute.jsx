import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../redux/auth/selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};
