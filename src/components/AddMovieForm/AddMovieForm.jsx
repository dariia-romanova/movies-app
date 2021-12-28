import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { addMovie } from '../../store/movies';

import './AddMovieForm.scss';

export const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(2021);
  const [format, setFormat] = useState('VHS');
  const [actors, setActors] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [importedMovies, setImportedMovies] = useState('');

  const dispatch = useDispatch();

  const getText = async(event) => {
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
          year: moviesParts[1],
          format: moviesParts[2],
          actors: moviesParts[3].split(', '),
        };
      });

      setImportedMovies(movies);
    };

    reader.readAsText(event.target.files[0]);
  };

  const validateForm = () => {
    if (title && year && format && actors) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleActorsField = (event) => {
    setIsFormValid(true);
    setActors(event.target.value);
  };

  const handleTitleField = (event) => {
    setIsFormValid(true);
    setTitle(event.target.value);
  };

  const postMovie = async() => {
    const actorsData = actors.split(', ');

    await dispatch(addMovie({
      title,
      year,
      format,
      actors: actorsData,
    }));

    setTitle('');
    setYear(2021);
    setFormat('VHS');
    setActors([]);
  };

  const submitMovie = (event) => {
    event.preventDefault();
    validateForm();

    if (title.trim() && year && format && actors) {
      setIsFormValid(true);
      postMovie();
    } else {
      setIsFormValid(false);
    }
  };

  const postMovies = async() => {
    await importedMovies.forEach((movie) => {
      dispatch(addMovie({
        ...movie,
      }));
    });

    setImportedMovies('');
  };

  const submitMovies = async(event) => {
    event.preventDefault();
    postMovies('');

    return 'post()';
  };

  return (
    <div className="forms">
      <form
        className="forms__form"
        onSubmit={submitMovie}
      >
        <legend className="forms__title">Add Movie</legend>

        <div className="forms__inputs">
          <label>
            Title
            <input
              className="forms__input"
              type="text"
              value={title}
              onChange={handleTitleField}
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
              onChange={(event) => {
                setYear(Number(event.target.value));
              }}
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
              value={actors}
              onChange={handleActorsField}
            />
          </label>
          <button
            type="submit"
            className="forms__button"
          >
            Add
          </button>
        </div>
        {!isFormValid && (
          <p className="forms__warning">Please, fill all fields</p>
        )}
      </form>

      <form
        className="forms__form"
        onSubmit={submitMovies}
      >
        <legend className="forms__title">Import Movies</legend>
        <div className="forms__inputs">
          <label
            className={
              classNames(
                'forms__upload',
                { 'forms__upload--uploaded': importedMovies },
              )}
          >
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
            disabled={!importedMovies}
          >
            Import
          </button>
        </div>
      </form>
    </div>
  );
};
