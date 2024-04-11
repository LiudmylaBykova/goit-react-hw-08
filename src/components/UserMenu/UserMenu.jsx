import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/selectors";
import { apiLogoutUser } from "../../redux/auth/slice";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  return (
    <div>
      <p>Hello, {userData.name}!</p>
      <button type="button" onClick={onLogOut}>
        Logut
      </button>
    </div>
  );
};

export default UserMenu;
