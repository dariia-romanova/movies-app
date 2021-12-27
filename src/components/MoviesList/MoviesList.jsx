import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Movie } from '../Movie/Movie';
import './MoviesList.scss';

export function MoviesList() {
  const movies = useSelector(state => state.movies);
  const [searchQuery, setSearchQuery] = useState('');

  const visibleMovies = movies.filter((movie) => movie.title.includes(searchQuery) || movie.stars.includes(searchQuery));

  return (
    <div className="movies-list">
      <form className="movies-list__form">
        <label className="">
          Search
          <input
            className="movies-list__input"
            type="text"
            value={searchQuery}
            onChange={() => setSearchQuery()}
          />
        </label>

        <button className="movies-list__button">
          Sort by name
        </button>
      </form>

      <ul className="movies-list__list">
        {visibleMovies.map((movie) => (
          <li id={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
