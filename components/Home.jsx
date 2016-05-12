import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <h2>React Router Hash Link Scroll</h2>
      <a href="https://github.com/rafrex/react-router-hash-link-scroll">
        https://github.com/rafrex/react-router-hash-link-scroll
      </a>
      <div>Example built
        with <a href="https://github.com/rafrex/react-github-pages">
        React for GitHub Pages</a>
      </div>
    <div>
      <div>Goto example page:</div>
      <ul>
        <li><Link to="/foo#section-one">Section One</Link></li>
        <li><Link to="/bar#section-two">Section Two</Link></li>
        <li><Link to="/baz#section-three">Section Three</Link></li>
      </ul>
    </div>
    </div>
  );
}

export default Home;
