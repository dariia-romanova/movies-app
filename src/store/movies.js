/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';

const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const IMPORT_MOVIES = 'IMPORT_MOVIES';

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    ...movie,
  };
}

export function deleteMovie(id) {
  return {
    type: DELETE_MOVIE,
    id,
  };
}

export function importMovies(moviesFromFile) {
  return {
    type: IMPORT_MOVIES,
    ...moviesFromFile,
  };
}

const defaultMovies = [
  {
    id: 1,
    release: 1100,
    title: 'dddd',
    format: 'ffff',
    stars: 'ddd',
  },
];

function movies(state = defaultMovies, action) {
  switch (action.type) {
    case ADD_MOVIE:
      let newId = 1;

      if (state[state.length - 1]) {
        newId = state[state.length - 1].id + 1;
      }

      return [
        ...state,
        {
          ...action,
          id: newId,
        },
      ];

    case DELETE_MOVIE:
      return [
        ...state.filter(movie => movie.id !== action.id),
      ];

    case IMPORT_MOVIES:
      // eslint-disable-next-line no-console
      console.log(action, action.importedMovies);

      return [
        ...state,
        ...action.importedMovies,
      ];

    default:
      return state;
  }
}

export const moviesApp = combineReducers({
  movies,
});
