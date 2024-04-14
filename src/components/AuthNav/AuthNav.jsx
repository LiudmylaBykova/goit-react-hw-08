import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
import { Box } from "@mui/material";

const AuthNav = () => {
  const getNavLinkClassName = ({ isActive }) => {
    return clsx(css.navLink, {
      [css.active]: isActive,
    });
  };
  return (
    <Box sx={{ display: "flex", gap: "36px" }}>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Log in
      </NavLink>
    </Box>
  );
};

export default AuthNav;
