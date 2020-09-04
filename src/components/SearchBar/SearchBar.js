import React, {useState} from "react";
import "./SearchBar.css";
import searchIcon from '../../images/search.png';

function SearchBar() {
    const [value, setValue] = useState();
  return (
      <input
        type="search"
        name="searchBar"
        value={value}
        placeholder="Find your favourite movie!"
      />
  );
}

export default SearchBar;
