import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div id="home">
      <h1>React Router Hash Link Scroll</h1>
      <a href="https://github.com/rafrex/react-router-hash-link-scroll">
        https://github.com/rafrex/react-router-hash-link-scroll
      </a>
      <div>Example built
        with <a href="https://github.com/rafrex/react-github-pages">
        React for GitHub Pages</a>
      </div>
    <nav>
      <h3 className="list-heading">Goto example page:</h3>
      <ul>
        <li><Link to="/foo#section-one">Section One</Link></li>
        <li><Link to="/bar#section-two">Section Two</Link></li>
        <li><Link to="/baz#section-three">Section Three</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Home;
