import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../store/movies';

import './AddMovieForm.scss';

export const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState(2021);
  const [format, setFormat] = useState('VHS');
  const [stars, setStars] = useState('');
  const [importedMovies, setImportedMovies] = useState('');

  const dispatch = useDispatch();

  const submitMovie = (event) => {
    event.preventDefault();

    dispatch(addMovie({
      title,
      release,
      format,
      stars,
    }));

    setTitle('');
    setRelease(2021);
    setFormat('VHS');
    setStars('');
  };

  const getText = async(event) => {
    event.preventDefault();

    const reader = new FileReader();

    reader.onload = async(loadEvent) => {
      const text = (loadEvent.target.result);

      const movies = text.split(/\n\r\n/).map((movie) => {
        const movieProperties = movie.trim().split(/\r\n/);

        const moviesParts = movieProperties.map((property) => {
          const value = property.split(': ');

          return value[1];
        });

        return {
          title: moviesParts[0],
          release: Number(moviesParts[1]),
          format: moviesParts[2],
          stars: moviesParts[3],
        };
      });

      setImportedMovies(movies);
    };

    reader.readAsText(event.target.files[0]);
  };

  const submitMovies = (event) => {
    event.preventDefault();

    importedMovies.forEach((movie) => {
      dispatch(addMovie({
        ...movie,
      }));
    });

    setImportedMovies('');
  };

  return (
    <div className="forms">
      <form className="forms__form">
        <legend className="forms__title">Add Movie</legend>

        <div className="forms__inputs">
          <label>
            Title
            <input
              className="forms__input"
              type="text"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
          </label>

          <label>
            Year
            <input
              className="forms__input"
              type="number"
              min="1900"
              max="2021"
              step="1"
              value={release}
              onChange={event => setRelease(event.target.value)}
            />
          </label>

          <label>
            Format
            <select
              className="forms__input"
              onChange={event => setFormat(event.target.value)}
            >
              <option value="VHS">VHS</option>
              <option value="DVS">DVD</option>
              <option value="Blue-Ray">Blu-Ray</option>
            </select>
          </label>

          <label>
            Actors
            <input
              className="forms__input"
              type="text"
              value={stars}
              onChange={event => setStars(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="forms__button"
            onClick={submitMovie}
          >
            Add
          </button>
        </div>
      </form>

      <form className="forms__form">
        <legend className="forms__title">Import Movies</legend>
        <div className="forms__inputs">
          <label className="forms__upload">
            Choose file
            <input
              className="forms__upload-field"
              type="file"
              onChange={getText}
            />
          </label>

          <button
            className="forms__button"
            type="submit"
            onClick={submitMovies}
          >
            Import
          </button>
        </div>
      </form>
    </div>
  );
};
