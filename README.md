# React Router Hash Link

***Note that this is for React Router v4, for v2/3 see [this solution](https://github.com/rafrex/react-router-hash-link/tree/react-router-v2/3).***

[Live Example](http://react-router-hash-link.rafrex.com/)

This is a solution to [React Router's issue of not scrolling to `#hash-fragments`](https://github.com/reactjs/react-router/issues/394#issuecomment-220221604) when using the `<Link>` component to navigate.

When you click on a link created with `react-router-hash-link` it will scroll to the element on the page with the `id` that matches the `#hash-fragment` in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's `BrowserRouter` for this to work.

```shell
$ npm install --save react-router-hash-link
```

```javascript
// In YourComponent.js
...
import { HashLink as Link } from 'react-router-hash-link';
...
// Use it just like a RRv4 link (to can be a string or an object, see RRv4 api for details):
<Link to="/some/path#with-hash-fragment">Link to Hash Fragment</Link>
```
