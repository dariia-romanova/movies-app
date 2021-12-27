import React from 'react';
import { useState } from 'react';

import './AddMovieForm.scss';

export const AddMovieForm = () => {
  const [ title, setTitle ] = useState('');
  const [ release, setRelease ] = useState(2021);
  const [ format, setFormat ] = useState('VHS');
  const [ actors, setActors ] = useState('');

  return (
    <div className="forms">
      <form className="forms__form">
        <legend className="forms__title">Add Movie</legend>

        <div className="forms__inputs">
          <label className>
            Title
            <input
              className="forms__input"
              type="text"
              value={title}
              onChange={() => setTitle()}
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
              onChange={() => setRelease()}
            />
          </label>

          <label>
            Format
            <select
              className="forms__input"
              onChange={() => setFormat()}
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
              onChange={() => setActors()}
            />
          </label>
          <button
            type="submit"
            className="forms__button"
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
              />
            </label>

            <button
              className="forms__button"
              type="submit"
            >
              Import
            </button>
          </div>
      </form>
    </div>
  )
}
