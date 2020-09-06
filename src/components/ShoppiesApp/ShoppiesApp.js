import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShoppiesApp.css";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingBag from "../../images/shopping-bag.png";
import SubmitButton from "../SubmitButton/SubmitButton";
import MovieCard from "../MovieCard/MovieCard";

function ShoppiesApp() {
  const searchValue = useSelector((state) => state.movies.searchValue);
  const movieResults = useSelector((state) => state.movies.allMovies);
  const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
  const status = useSelector((state) => state.movies.isLoading);

  const resultsText =
    movieResults.length === 0
      ? "Please search for a movie above"
      : "Click on a movie to nominate it";
  let nomsText = "Please search for a movie above";
  if (movieResults.length !== 0 && nominatedMovies.length === 0) {
    nomsText = "Please nominate a movie first";
  } else if (nominatedMovies.length !== 0) {
    nomsText = "Click on a movie to un-nominate it";
  }

  return (
    <div>
      <div className="search-section">
        <img
          src={ShoppingBag}
          alt="shopping bag trophy"
          height="40px"
          width="40px"
        ></img>
        <h1>The Shoppies </h1>
        <h3>
          <span role="img" aria-label="popcorn">
            &#127871;
          </span>{" "}
          Built by Hong Yi Chen
        </h3>
        <SearchBar />
      </div>
      <div className="results-and-noms-section">
        <div className="results">
          <h2>Results for: {`"${searchValue}"`}</h2>
          <h3>
            <span role="img" aria-label="green-checkmark">
              &#9989;
            </span>{" "}
            {resultsText}
          </h3>
          <div className="movie-cards">
            {status ? ( // you can add in a loading indicator here
              <p>Loading...</p>
            ) : (
              movieResults.map((movieData) => (
                <MovieCard key={movieData.imdbID} movie={movieData} />
              ))
            )}
          </div>
        </div>
        <div className="nominations">
          <h2>Nominations</h2>
          <h3>
            <span role="img" aria-label="red-x">
              &#10060;
            </span>{" "}
            {nomsText}
          </h3>
          <div className="nominated-movies"></div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default ShoppiesApp;
