import React, { useState } from "react";
import "./SearchBar.css";

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
