
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../store/movies';

import './Movie.scss';
import { MovieInfo } from '../MovieInfo/MovieInfo';

export const Movie = ({ movie }) => {
  const [infoVisible, setInfoVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClear = async(movieToDelete) => {
    await dispatch(deleteMovie(movieToDelete.id));
  };

  const handleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <article className="movie">
      <div className="movie__titles">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__year">{movie.year}</p>
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
        onClick={() => handleInfo(movie)}
      >
        {infoVisible ? 'Hide info' : 'Read more'}
      </button>
      {infoVisible && (
        <MovieInfo format={movie.format} actors={movie.actors} />
      )
}
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    format: PropTypes.string,
    year: PropTypes.number.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
