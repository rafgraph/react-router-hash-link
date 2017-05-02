import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import HashLinkPage from './HashLinkPage';

function App() {
  return (
    <div
      style={{
        fontFamily: 'helvetica, sans-serif',
        fontWeight: '300',
        fontSize: '16px',
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

export default App;
