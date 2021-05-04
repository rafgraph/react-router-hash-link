import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { App } from './App';
import './index.css';

smoothScrollPolyfill.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
