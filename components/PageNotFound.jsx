import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Header, BuiltWith } from './ReusableComponents';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <div id="page-not-found">
      <Header />
      <p>
        Page not found - the path, <code>{location.pathname}</code>, did not
        match any React Router routes.
        <div>Would you like to go <Link to="/">Home</Link>?</div>
      </p>
      <BuiltWith />
    </div>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
