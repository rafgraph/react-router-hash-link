# React Router Hash Link

***Note that this is for React Router v4, for v2/3 see [this solution](https://github.com/rafrex/react-router-hash-link/tree/react-router-v2/3).***

[Live Example](http://react-router-hash-link.rafrex.com/)

This is a solution to React Router's issue of not scrolling to `#hash-fragments` when using the `<Link>` component to navigate.

When you click on a link created with `react-router-hash-link` is will scroll to the element on the page with with the `id` that matches the `#hash-fragment` in the link. Note that you must use React Router's `BrowserRouter` for this to work.

```shell
$ npm install --save react-router-hash-link
```

```javascript
// In YourComponent.js
...
import { HashLink as Link } from 'react-router-hash-link';
...
// Use it just like a RRv4 link:
<Link to="/some/path#with-hash-fragment">Link to Hash Fragment<Link>
```
