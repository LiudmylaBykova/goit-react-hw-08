import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isSignedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};

export default Navigation;
