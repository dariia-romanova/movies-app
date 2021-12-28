import React from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { AddMovieForm } from './components/AddMovieForm';

export function App() {
  return (
    <div className="app">
      <h1 className="app__title">Movies</h1>
      <AddMovieForm />
      <MoviesList />
    </div>
  );
}
