import React from 'react';
import { Link } from 'react-router';

function HashLinkPage({ location }) {
  return (
    <div>
      <section id="section-one" style={{height: '100vh', width: '100vw'}}>
        <h2>Section One</h2>
        <h3 className="list-heading">Goto:</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-two`}>Section Two</Link></li>
          <li><Link to={`${location.pathname}#section-three`}>Section Three</Link></li>
        </ul>
      </section>
      <section id="section-two" style={{height: '100vh', width: '100vw'}}>
        <h2>Section Two</h2>
        <h3 className="list-heading">Goto:</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-one`}>Section One</Link></li>
          <li><Link to={`${location.pathname}#section-three`}>Section Three</Link></li>
        </ul>
      </section>
      <section id="section-three" style={{height: '100vh', width: '100vw'}}>
        <h2>Section Three</h2>
        <h3 className="list-heading">Goto:</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-one`}>Section One</Link></li>
          <li><Link to={`${location.pathname}#section-two`}>Section Two</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default HashLinkPage;
