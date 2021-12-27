
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../store/movies';

import './Movie.scss';

export const Movie = ({ movie }) => {
  const [infoVisible, setInfoVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClear = (movieToDelete) => {
    dispatch(deleteMovie(movieToDelete.id));
  };

  return (
    <article className="movie">
      <div className="movie__titles">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__year">{movie.release}</p>
        <button
          className="movie__clear-button"
          type="button"
          onClick={() => handleClear(movie)}
        >
          X
        </button>
      </div>
      <button
        className="movie__button"
        type="button"
        onClick={() => setInfoVisible(!infoVisible)}
      >
        {infoVisible ? 'Hide info' : 'Read more'}
      </button>
      {infoVisible && (
        <div className="movie__info">
          <p>
            <span className="movie__info-title">Format:</span>
            {movie.format}
          </p>
          <p>
            <span className="movie__info-title">Actors:</span>
            {movie.stars}
          </p>
        </div>
      )}

    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
};
