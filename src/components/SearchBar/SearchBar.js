import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar() {
    const [value, setValue] = useState();
  return (
    <div class="input-icon">
      <input
        type="search"
        name="searchBar"
        value={value}
        placeholder="Find your favourite movie!"
      />
    </div>
  );
}

export default SearchBar;
