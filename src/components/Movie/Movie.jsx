import React from "react";
import { useState } from "react";

import './Movie.scss';

export const Movie = ({ movie }) => {
  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <article className="movie">
      <div className="movie__titles">
        <h3 className="movie__title">{movie.title}</h3>
        <p className="movie__year">{movie.release}</p>
      </div>
      <button
        className="movie__button"
        type='button'
        onClick={() => setInfoVisible(!infoVisible)}
      >
        {infoVisible ? 'Hide info' : 'Read more'}
      </button>
      {infoVisible && (
        <div className="movie__info">
          <p><span className="movie__info-title">Format:</span> {movie.format}</p>
          <p><span className="movie__info-title">Actors:</span> {movie.stars}</p>
        </div>
      )}

    </article>
  );
}
