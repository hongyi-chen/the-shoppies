import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/movieActions";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { Poster, Title, Year, imdbID } = movie;
  const { nominateMovie, removeNominatedMovie } = actions;
  const nominatedMovies = useSelector((state) => state.movies.nominatedMovies);
  const defaultChecked =
    nominatedMovies.filter((movie) => movie.imdbID === imdbID).length === 0
      ? false
      : true;
  const [checked, setChecked] = useState(defaultChecked);
  movie.isChecked = checked;
  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(defaultChecked);
  }, [nominatedMovies, defaultChecked, movie]);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      if (nominatedMovies.length === 5) {
        alert("Maximum number of nominations added!");
        setChecked(false);
      } else {
        dispatch(nominateMovie(movie));
      }
    } else if (checked) {
      dispatch(removeNominatedMovie(movie));
    }
  };

  return (
    <div className="input-group">
      <input
        id={imdbID}
        name="option"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
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
