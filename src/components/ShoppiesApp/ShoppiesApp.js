import React from "react";
import "./ShoppiesApp.css";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingBag from "../../images/shopping-bag.png";
import SubmitButton from "../SubmitButton/SubmitButton";
import MovieCard from "../MovieCard/MovieCard";

function ShoppiesApp() {
  return (
    <div>
      <div className="search-section">
        <h1>
          The Shoppies{" "}
          <img
            src={ShoppingBag}
            alt="shopping bag trophy"
            height="40px"
            width="40px"
          ></img>
        </h1>
        <h3>Search for a movie:</h3>
        <SearchBar />
      </div>
      <div className="results-and-noms-section">
        <div className="results">
          <h2>Results for</h2>{" "}
          {/* Remember to change this to include the search */}
          <div className="movie-cards">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
        <div className="nominations">
          <h2>Nominations</h2>
          <div className="nominated-movies"></div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default ShoppiesApp;
