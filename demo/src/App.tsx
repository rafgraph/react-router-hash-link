import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/Home';
import { HashLinkPage } from './components/HashLinkPage';

export const App: React.VFC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page" component={HashLinkPage} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};
