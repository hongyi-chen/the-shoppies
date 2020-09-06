import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState();

  async function getMovies(movieName) {
      let response = await fetch(`http://www.omdbapi.com/?apikey=94d41b07&type=movie&s=${movieName}`);
      let movieData = await response.json();
      return movieData;
  }
  
  const handleSearchChange = (event) => {
      const { value } = event.target;
      getMovies(value).then(movieData => console.log(movieData))
  }

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
