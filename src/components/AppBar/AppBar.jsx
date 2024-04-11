import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <header>
      <Navigation />
      {isSignedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
