import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import HashLinkPage from './components/HashLinkPage';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":dynamicRouteBecasueWhyNot" component={HashLinkPage} />
    <Route path="*" component={PageNotFound} />
  </Route>
);


function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

render(
  <Router
    history={browserHistory}
    routes={routes}
    onUpdate={hashLinkScroll}
  />,
  document.getElementById('root')
);
