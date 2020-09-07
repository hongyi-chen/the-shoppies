import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/movieActions";
import "./SearchBar.css";

function SearchBar() {
  const { getAllMovies, setSearchValue } = actions;
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.movies.searchValue);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    dispatch(setSearchValue(value));
  };

  useEffect(() => {
    dispatch(getAllMovies(searchValue));
  }, [dispatch, getAllMovies, searchValue]);

  return (
    <input
      type="search"
      name="searchBar"
      value={searchValue}
      placeholder="Find your favourite movie!"
      onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
