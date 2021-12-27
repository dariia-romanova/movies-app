import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { App } from './App';
import { createStore } from 'redux';

const store = createStore(() => ({
  movies: [
    {
      id: 1,
      title: 'Blazing Saddles',
      release: 1974,
      format: 'VHS',
      stars: 'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn',
    }
  ]
}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
