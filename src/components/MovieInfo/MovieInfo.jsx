/* eslint-disable react/prop-types */
import React from 'react';

export const MovieInfo = ({ format, actors }) => (
  <div className="movie__info">
    <p>
      <span className="movie__info-title">Format:</span>
      {' '}
      {format}
    </p>
    <p>
      <span className="movie__info-title">Actors:</span>
      {' '}
      {actors.join(', ')}
    </p>
  </div>
);
