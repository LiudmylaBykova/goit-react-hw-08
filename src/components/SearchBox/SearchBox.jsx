import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";
import { Box } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  return (
    <Box>
      <div className={css.searchWrap}>
        <label>
          Find contact by name
          <input
            className={css.searchInput}
            type="text"
            name="search"
            placeholder="Jack Wilson"
            value={value}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </label>
      </div>
    </Box>
  );
};

export default SearchBox;
