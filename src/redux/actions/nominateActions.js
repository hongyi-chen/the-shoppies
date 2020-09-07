import * as types from "../constants/types";

export const nominateMovie = (movie) => (dispatch) => {
    dispatch({
      type: types.NOMINATE_MOVIE,
    });
  
    try {
      dispatch({
        type: types.NOMINATE_MOVIE_SUCCESS,
        payload: movie,
      });
    } catch (error) {
      dispatch({
        type: types.NOMINATE_MOVIE_FAILURE,
      });
    }
  };
  
export const removeNominatedMovie = (movie) => (dispatch) => {
    dispatch({
      type: types.REMOVE_MOVIE,
    });
  
    try {
      dispatch({
        type: types.REMOVE_MOVIE_SUCCESS,
        payload: movie.imdbID,
      });
    } catch (error) {
      dispatch({
        type: types.REMOVE_MOVIE_FAILURE,
      });
    }
  };