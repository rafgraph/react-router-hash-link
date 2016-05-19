import React from 'react';
import { Link } from 'react-router';
import { Header, BuiltWith } from './ReusableComponents';

function Home() {
  return (
    <div id="home">
      <Header />
      <nav>
        <h3 className="list-heading">Go to example page:</h3>
        <ul>
          <li><Link to="/foo#section-one">Section One</Link></li>
          <li><Link to="/bar#section-two">Section Two</Link></li>
          <li><Link to="/baz#section-three">Section Three</Link></li>
        </ul>
      </nav>
      <BuiltWith />
    </div>
  );
}

export default Home;
