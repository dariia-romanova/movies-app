/* eslint-disable max-len */
const API_URL = 'http://localhost:8000/api/v1';

export const addMovieToServer = (movie) => {
  const url = `${API_URL}/movies`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU',
    },
    body: JSON.stringify(movie),
  })
    .then(response => response.json());
};

export const deleteMovieFromServer = (id) => {
  const url = `${API_URL}/movies/${id}`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI0OTcyMjYwfQ.X31cryg_A126WLYT96PD-SLLFWSxb2SeoQZ4cvx3VhU',
    },
  })
    .then(response => response.json());
};
