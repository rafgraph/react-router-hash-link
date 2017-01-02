import React from 'react';

function Header() {
  return (
    <div>
      <h1>React Router Hash Link Scroll</h1>
      <div id="repo-link"><a
        href="https://github.com/rafrex/react-router-hash-link-scroll"
      >
        https://github.com/rafrex/react-router-hash-link-scroll
      </a></div>
    </div>
  );
}

function BuiltWith() {
  return (
    <div id="built-with">
      <div>
        Site built with {' '}
        <a href="https://github.com/rafrex/spa-github-pages">
          Single Page Apps for GitHub Pages
        </a>
      </div>
      <div style={{ margin: '5px 0' }}>
        Code and concept by {' '}
        <a href="http://www.rafaelpedicini.com">
          Rafael Pedicini
        </a>
      </div>
    </div>
  );
}

export { Header, BuiltWith };
