# React Router Hash Link

***Note that this is for React Router v4/5, for v2/3 see [this solution](https://github.com/rafgraph/react-router-hash-link/tree/react-router-v2/3).***

![npm](https://img.shields.io/npm/dm/react-router-hash-link?label=npm)

[Demo website](https://react-router-hash-link.rafgraph.dev/) (code on the [`gh-pages` branch](https://github.com/rafgraph/react-router-hash-link/tree/gh-pages))

---

This is a solution to [React Router's issue of not scrolling to `#hash-fragments`](https://github.com/reactjs/react-router/issues/394#issuecomment-220221604) when using the `<Link>` component to navigate.

When you click on a link created with `react-router-hash-link` it will scroll to the element on the page with the `id` that matches the `#hash-fragment` in the link. This will also work for elements that are created after an asynchronous data load. Note that you must use React Router's `BrowserRouter` for this to work.

```shell
$ yarn add react-router-hash-link
# OR
$ npm install --save react-router-hash-link
```

### `<HashLink>`
```javascript
// In YourComponent.js
...
import { HashLink } from 'react-router-hash-link';
...
// Use it just like a RRv4/5 <Link> (to can be a string or an object, see RRv4/5 api for details)
<HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink>
```


### `<NavHashLink>`
```javascript
// In YourComponent.js
...
import { NavHashLink } from 'react-router-hash-link';
...
// Use it just like a RRv4/5 <NavLink> (see RRv4/5 api for details)
// It will be active only if both the path and hash fragment match 
<NavHashLink
  to="/some/path#with-hash-fragment"
  activeClassName="selected"
  activeStyle={{ color: 'red' }}
  // etc...
>Link to Hash Fragment</NavHashLink>
```

## Scrolling API
### `smooth: boolean`
- Smooth scroll to the element
- React Router Hash Link uses the native Element method `element.scrollIntoView()` for scrolling, and when the `smooth` prop is present it will call it with the smooth option, `element.scrollIntoView({ behavior: 'smooth' })`
- Note that not all browsers have implemented options for `scrollIntoView` - see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) and [Can I Use](https://caniuse.com/#feat=scrollintoview) - there is also a browser [polyfill for smooth scrolling](https://github.com/iamdustan/smoothscroll) which you can install separately so `smooth` will work in all browsers
```js
import { HashLink } from 'react-router-hash-link';
<HashLink smooth to="/path#hash">Link to Hash Fragment</HashLink>
```

### `scroll: function`
- Custom scroll function called with the element to scroll to, e.g. `const myScrollFn = element => {...}`
- This allows you to do things like scroll with offset, use a specific smooth scrolling library, or pass in your own options to `scrollIntoView`
```js
import { HashLink } from 'react-router-hash-link';
<HashLink
    to="/path#hash"
    scroll={el => el.scrollIntoView({ behavior: 'instant', block: 'end' })}
>Link to Hash Fragment</HashLink>
```

### Scroll to top of page
- To scroll to the top of the page set the hash fragment to `#` (empty) or `#top`
- This is inline with the [HTML spec](https://html.spec.whatwg.org/multipage/browsing-the-web.html#target-element), also see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page)
```js
import { HashLink } from 'react-router-hash-link';
<HashLink to="/path#top">Link to Top of Page</HashLink>
// or
<HashLink to="#top">Link to Top of Page</HashLink>
```

### Scroll with offset
- To scroll with offset use a custom scroll function, one way of doing this can be found [here](https://github.com/rafgraph/react-router-hash-link/issues/25#issuecomment-536688104)

### `elementId: string`
- Scroll to the element with matching id
- Used instead of providing a hash fragment as part of the `to` prop, if both are present then the `elementId` will override the `to` prop's hash fragment
- Note that it is generally recommended to use the `to` prop's hash fragment instead of the `elementId`


## Custom `Link`

The exported components are wrapped versions of the `Link` and `NavLink` exports of react-router-dom. In some cases you may need to provide a custom `Link` implementation.

For example, the gatsby static site generator requires you to use its implementation of `Link`. You can wrap it with the `genericHashLink` function of this package.

```jsx
import { genericHashLink } from 'react-router-hash-link';
import GatsbyLink from 'gatsby-link';

const MyHashLink = genericHashLink(GatsbyLink);

const MyComponent = () => (
  <div>
    The default wont work for you?
    <MyHashLink to="/faq#how-to-use-custom-link">No problem!</MyHashLink>
  </div>
);
```
