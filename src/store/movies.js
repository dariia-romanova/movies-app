import { combineReducers } from 'redux';
import {
  addMovieToServer,
  deleteMovieFromServer,
} from '../api/api';

const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';

export const addMovie = movie => (dispatch) => {
  addMovieToServer(movie)
    .then((receivedMovie) => {
      if (receivedMovie.status === 0) {
        // eslint-disable-next-line no-console
        console.log('Movie already added');

        return;
      }

      dispatch({
        type: ADD_MOVIE,
        ...receivedMovie.data,
      });
    });
};

export const deleteMovie = id => (dispatch) => {
  deleteMovieFromServer(id)
    .then((response) => {
      dispatch({
        type: DELETE_MOVIE,
        id,
      });
    });
};

function movies(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      return [
        ...state,

        {
          ...action,
          actors: action.actors.map(actor => actor.name),
        },
      ];

    case DELETE_MOVIE:
      return [
        ...state.filter(movie => movie.id !== action.id),
      ];

    default:
      return state;
  }
}

export const reducer = combineReducers({
  movies,
});
