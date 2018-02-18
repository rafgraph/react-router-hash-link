import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import smoothScrollPolyfill from 'smoothscroll-polyfill';

import App from './App';

smoothScrollPolyfill.polyfill();

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
