import React from "react";
import "./ShoppiesApp.css";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingBag from "../../images/shopping-bag.png";
import SubmitButton from "../SubmitButton/SubmitButton";
import MovieCard from "../MovieCard/MovieCard";

function ShoppiesApp() {
  const testMovies = [
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
      Title: "Black Panther",
      Type: "movie",
      Year: "2018",
      imdbID: "tt1825683",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
      Title: "Black Panther",
      Type: "movie",
      Year: "2018",
      imdbID: "tt1825682",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
      Title: "Black Panther",
      Type: "movie",
      Year: "2018",
      imdbID: "tt1825684",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
      Title: "Black Panther",
      Type: "movie",
      Year: "2018",
      imdbID: "tt1825687",
    },
  ];

  return (
    <div>
      <div className="search-section">
      <img
            src={ShoppingBag}
            alt="shopping bag trophy"
            height="40px"
            width="40px"
          ></img>
        <h1>
          The Shoppies{" "}
        </h1>
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
          <h2>Results for</h2>
          <h3>
            <span role="img" aria-label="green-checkmark">
              &#9989;
            </span>{" "}
            Click on a movie to nominate it!
          </h3>
          {/* Remember to change this to include the search */}
          <div className="movie-cards">
            {testMovies.map((movieData) => (
              <MovieCard movie={movieData} />
            ))}
          </div>
        </div>
        <div className="nominations">
          <h2>Nominations</h2>
          <h3>
            <span role="img" aria-label="red-x">
              &#10060;
            </span>{" "}
            Click on a movie to un-nominate!
          </h3>
          <div className="nominated-movies"></div>
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default ShoppiesApp;
