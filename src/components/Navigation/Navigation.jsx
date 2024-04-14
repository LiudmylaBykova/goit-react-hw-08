import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { Box } from "@mui/material";

const Navigation = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const getNavLinkClassName = ({ isActive }) => {
    return clsx(css.navLink, {
      [css.active]: isActive,
    });
  };
  return (
    <Box sx={{ display: "flex", gap: "36px" }}>
      <NavLink className={getNavLinkClassName} to="/">
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink className={getNavLinkClassName} to="/contacts">
          Contacts
        </NavLink>
      )}
    </Box>
  );
};

export default Navigation;
