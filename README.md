# React Router Hash Link Scroll

[Live example][liveExample]

***For React Router v4 support see [this issue](https://github.com/rafrex/react-router-hash-link-scroll/issues/1).***

This is a solution to [React Router v2/3's issue of not scrolling to `#hash-links`][reactRouterIssue] when using the `<Link>` component to navigate. It uses a Router `onUpdate` hook and calls `element.scrollIntoView()` if a `#hash` is present in the url.  

Since it's defined on the `Router` component, the scroll functionality will work with every route, and it works when linking to a `#hash` on the current route, or when linking to a `#hash` while navigating to a different route.

Check out the [example site][liveExample] to see it in action (*the example site is built with [Single Page Apps for GitHub Pages][spaGHP] to allow for using `browserHistory` with GitHub Pages*).


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
[liveExample]: http://react-router-hash-link-scroll.rafrex.com/
[spaGHP]: https://github.com/rafrex/spa-github-pages
