import React, { useEffect, useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { AddMovieForm } from './components/AddMovieForm';
import { createSession } from './api/api';

export function App() {
  const [userCreated, setUserCreated] = useState(false);

  const getToken = async() => {
    await createSession();
  };

  useEffect(() => {
    getToken();

    setUserCreated(true);
  }, []);

  return (
    <div className="app">
      {userCreated && (
        <>
          <h1 className="app__title">Movies</h1>
          <AddMovieForm />
          <MoviesList />
        </>
      )}

    </div>
  );
}
