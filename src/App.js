import React, { PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import HashLinkPage from './HashLinkPage';

const propTypes = {
  // children: PropTypes.element.isRequired,
};

function App() {
  return (
    <div
      style={{
        fontFamily: 'helvetica neue, helvetica, sans-serif',
        fontWeight: '300',
        fontSize: '16px',
        letterSpacing: '0.025em',
        WebkitTextSizeAdjust: 'none',
        MozTextSizeAdjust: 'none',
        msTextSizeAdjust: 'none',
        textSizeAdjust: 'none',
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={HashLinkPage} />
      </Switch>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
