import * as types from "../constants/types";

export const setSearchValue = (searchValue) => {
  return {
    type: types.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};

export const getAllMovies = (movieName) => async (dispatch) => {
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
