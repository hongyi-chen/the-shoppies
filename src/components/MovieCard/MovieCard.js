import React, { useState } from "react";
import "./MovieCard.css";

function MovieCard() {
  const [checked, setChecked] = useState(false);

  return (
    <div class="input-group">
      <input id="option1" name="option1" type="checkbox" />
      <label for="option1">
        <div className="card-label">
        <h4>Black Panther </h4>
        <p>2018 - Action/Adventure</p>
        </div>
        <div className="card-poster">
        <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"></img>
        </div>
      </label>
    </div>
  );
}

export default MovieCard;
{
  /* 
className="movie-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)} */
}
