import React from "react";
import "./Nomination.css";
import { ReactComponent as Close } from "../../images/close.svg";
import { useDispatch } from "react-redux";
import actions from "../../redux/actions/movieActions";

const Nomination = ({ movie }) => {
  const dispatch = useDispatch();
  const { Title, Year } = movie;
  const { removeNominatedMovie } = actions;

  const handleRemove = () => {
    dispatch(removeNominatedMovie(movie));
  };

  return (
    <div className="nomination-card" onClick={handleRemove}>
      <Close />
      <div className="nomination-label">
        <h2>{Title}</h2>
        <p className="year">{Year}</p>
      </div>
    </div>
  );
};

export default Nomination;
