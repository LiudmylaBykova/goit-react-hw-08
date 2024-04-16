import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";

const AppBar = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <Container maxWidth="lg">
      <Toolbar sx={{ display: "flex", bgcolor: "#EEEFF3" }}>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </Container>
  );
};
export default AppBar;
