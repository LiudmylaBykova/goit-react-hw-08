import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { logoutUser } from "../../redux/auth/operations";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "36px" }}>
      <Typography sx={{ ml: "auto" }}>Welcome, {userData.name}!</Typography>
      <button className={css.btn} type="button" onClick={onLogOut}>
        Logout
      </button>
    </Box>
  );
};

export default UserMenu;
