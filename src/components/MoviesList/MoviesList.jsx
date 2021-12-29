import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Movie } from '../Movie/Movie';
import './MoviesList.scss';

export function MoviesList() {
  const movies = useSelector(state => (
    state.movies
  ));

  const [searchQuery, setSearchQuery] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  let visibleMovies = movies;

  if (movies.length && searchQuery) {
    visibleMovies = visibleMovies.filter(({ title, actors }) => {
      const query = searchQuery.toLowerCase().trim();

      return (
        title.toLowerCase().includes(query)
          || actors.join(' ').toLowerCase().includes(searchQuery)
      );
    });
  }

  if (isSorted) {
    visibleMovies = visibleMovies.sort((movie1, movie2) => (
      movie1.title.localeCompare(movie2.title)
    ));
  }

  const handleSort = (event) => {
    event.preventDefault();
    setIsSorted(!isSorted);
  };

  return (
    <div className="movies-list">
      <form className="movies-list__form">
        <label>
          Search
          <input
            className="movies-list__input"
            type="text"
            value={searchQuery}
            onChange={handleSearch}
          />
        </label>

        <button
          className="movies-list__button"
          type="button"
          onClick={handleSort}
        >
          Sort by name
        </button>
      </form>

      <h2>Added movies</h2>
      {movies.length > 0 ? (
        <ul className="movies-list__list">
          {visibleMovies.map(movie => (
            <li key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no added movies yet</p>
      )}
    </div>
  );
}

export default MoviesList;
