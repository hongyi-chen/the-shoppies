import * as types from "../constants/types";
import { combineReducers } from "redux";

const shoppiesState = {
  searchValue: "",
  omdbResults: {},
  allMovies: [],
  nominatedMovies: [], // just check if this reaches 5
  canNominate: false, // might not be useful
  isLoading: false,
  errorMessage: "",
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
        canNominate: true,
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
        errorMessage: action.payload,
        allMovies: state.allMovies = [], // if there are no results, you just set it to 0
      };
    case types.NOMINATE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        canNominate: false,
        nominatedMovies: [...state.nominatedMovies, action.payload],
      };
    case types.REMOVE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        canNominate: false,
        nominatedMovies: state.nominatedMovies.filter(
          (movies) => movies.imdbID !== action.payload
        ), // interesting way of removing, might need to redo
      };
    case types.NOMINATE_MOVIE_FAILURE:
    case types.REMOVE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        canNominate: false,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
