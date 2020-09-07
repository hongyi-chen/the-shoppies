import * as types from "../constants/types";
import { combineReducers } from "redux";

const shoppiesState = {
  searchValue: "",
  omdbResults: {},
  allMovies: [],
  nominatedMovies: [],
  isLoading: false,
};

export const moviesReducer = (state = shoppiesState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case types.GET_MOVIES:
    case types.NOMINATE_MOVIE:
    case types.REMOVE_MOVIE:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        omdbResults: action.payload,
        allMovies: action.payload.Search,
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        allMovies: (state.allMovies = []),
      };
    case types.NOMINATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nominatedMovies: [...state.nominatedMovies, action.payload],
      };
    case types.REMOVE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        canNominate: false,
        nominatedMovies: state.nominatedMovies.filter(
          (movies) => movies.imdbID !== action.payload
        ),
      };
    case types.NOMINATE_MOVIE_FAILURE:
    case types.REMOVE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
