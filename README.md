# React Router Hash Link Scroll

***Note that is for React Router v2/3, for v4 see the [master branch](https://github.com/rafrex/react-router-hash-link).***

This is a solution to [React Router v2/3's issue of not scrolling to `#hash-links`][reactRouterIssue] when using the `<Link>` component to navigate. It uses a Router `onUpdate` hook and calls `element.scrollIntoView()` if a `#hash` is present in the url.  

Since it's defined on the `Router` component, the scroll functionality will work with every route, and it works when linking to a `#hash` on the current route, or when linking to a `#hash` while navigating to a different route.

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
  // your routes
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
```


[reactRouterIssue]: https://github.com/reactjs/react-router/issues/394#issuecomment-220221604
