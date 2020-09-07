import * as types from "../constants/types";

const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};

const nominateMovie = (movie) => (dispatch) => {
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

const removeNominatedMovie = (movie) => (dispatch) => {
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

const getAllMovies = (movieName) => async (dispatch) => {
  const moviesResponse = `https://www.omdbapi.com/?apikey=94d41b07&type=movie&s=${movieName}`;

  dispatch({
    type: types.GET_MOVIES,
  });

  try {
    const allMovies = await fetch(moviesResponse);
    const movieData = await allMovies.json();

    if (movieData.Error) {
      dispatch({
        type: types.GET_MOVIES_FAILURE,
        payload: movieData.Error,
      });
      throw movieData.Error;
    } else {
      dispatch({
        type: types.GET_MOVIES_SUCCESS,
        payload: movieData,
      });
    }
  } catch (data) {
    dispatch({
      type: types.GET_MOVIES_FAILURE,
      payload: data.Error,
    });
  }
};

export default {
  getAllMovies,
  setSearchValue,
  nominateMovie,
  removeNominatedMovie,
};
