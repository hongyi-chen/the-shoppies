import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/movieActions";
import "./MovieCard.css";
import NomToast from "../Toasts/NominationToast/NomToast";

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

  const toastMessage = "You have 5 nominations!";
  useEffect(() => {
    setChecked(defaultChecked);
    if (nominatedMovies.length === 5) {
      const toast = document.getElementById("nom-toast");
      toast.className = "show";
      setTimeout(function () {
        toast.className = toast.className.replace("show", "");
      }, 2000);
    }
  }, [nominatedMovies, defaultChecked, movie]);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      if (nominatedMovies.length === 5) {
        setChecked(false);
      } else {
        dispatch(nominateMovie(movie));
      }
    } else if (checked) {
      dispatch(removeNominatedMovie(movie));
    }
  };

  return (
    <div>
      {nominatedMovies.length === 5 && <NomToast message={toastMessage} />}
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
    </div>
  );
};

export default MovieCard;
