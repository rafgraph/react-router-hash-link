import React from 'react';
import { Link } from 'react-router';

function HashLinkPage({ location }) {
  return (
    <div>
      <div id="section-one" style={{height: '100vh', width: '100vw'}}>
        <h2>Section One</h2>
        <div>Goto:</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-two`}>Section Two</Link></li>
          <li><Link to={`${location.pathname}#section-three`}>Section Three</Link></li>
        </ul>
      </div>
      <div id="section-two" style={{height: '100vh', width: '100vw'}}>
        <h2>Section Two</h2>
        <div>Goto:</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-one`}>Section One</Link></li>
          <li><Link to={`${location.pathname}#section-three`}>Section Three</Link></li>
        </ul>
      </div>
      <div id="section-three" style={{height: '100vh', width: '100vw'}}>
        <h2>Section Three</h2>
        <div>Goto:</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`${location.pathname}#section-one`}>Section One</Link></li>
          <li><Link to={`${location.pathname}#section-two`}>Section Two</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default HashLinkPage;
