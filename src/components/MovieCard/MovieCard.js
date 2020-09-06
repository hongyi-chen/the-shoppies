import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { Poster, Title, Year, imdbID } = movie;
  const [checked, setChecked] = useState(false);

  return (
    <div className="input-group">
      <input
        id={imdbID}
        name="option"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={imdbID}>
        <div className="card-label">
          <h4>{Title}</h4>
          <p>{Year}</p>
        </div>
        <div className="card-poster">
          <img src={Poster} alt="movie card poster"></img>
        </div>
      </label>
    </div>
  );
};

export default MovieCard;
