import React from 'react';

function Header() {
  return (
    <div>
      <h1>React Router Hash Link Scroll</h1>
      <a
        id="repo-link"
        href="https://github.com/rafrex/react-router-hash-link-scroll"
      >
        https://github.com/rafrex/react-router-hash-link-scroll
      </a>
    </div>
  );
}

function BuiltWith() {
  return (
    <div id="built-with">Site built with {' '}
      <a href="https://github.com/rafrex/spa-github-pages">
        Single Page Apps for GitHub Pages
      </a>
    </div>
  );
}

export { Header, BuiltWith };
