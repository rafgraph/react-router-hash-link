import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

export const Home: React.VFC = () => {
  return (
    <div style={{ padding: '2.5vw 3.5vw 12vh 3.5vw' }}>
      <h1>React Router Hash Link Demo</h1>
      <div style={{ marginTop: '2px', fontSize: '14px' }}>
        <a href="https://github.com/rafgraph/react-router-hash-link">
          https://github.com/rafgraph/react-router-hash-link
        </a>
      </div>

      <nav>
        <h3>Go to example page:</h3>
        <ul>
          <li>
            <HashLink to="/page#section-one">Section One</HashLink>
          </li>
          <li>
            <HashLink to="/page#section-two">Section Two</HashLink>
          </li>
          <li>
            <HashLink to="/page#section-three">Section Three</HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
