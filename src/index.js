import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

let hashFragment = '';
let observer = null;
let asyncTimer = null;

function reset() {
  hashFragment = '';
  if (observer !== null) observer.disconnect();
  if (asyncTimer !== null) {
    window.clearTimeout(asyncTimer);
    asyncTimer = null;
  }
}

function getElAndScroll() {
  const element = document.getElementById(hashFragment);
  if (element !== null) {
    element.scrollIntoView();
    reset();
    return true;
  }
  return false;
}

function setupMutationObserver() {
  observer = new MutationObserver(getElAndScroll);
}

function hashLinkScroll() {
  // Push onto callback queue so it runs after the DOM is updated
  setTimeout(() => {
    if (getElAndScroll() === false) {
      if (observer === null) setupMutationObserver();
      observer.observe(document, { attributes: true, childList: true, subtree: true });
      if (asyncTimer !== null) window.clearTimeout(asyncTimer);
      // if the element doesn't show up in 10 seconds, stop checking
      asyncTimer = window.setTimeout(() => {
        reset();
      }, 10000);
    }
  }, 0);
}

export function HashLink(props) {
  function handleClick(e) {
    if (props.onClick) props.onClick(e);
    let hash = '';
    if (typeof props.to === 'string') {
      hash = props.to.split('#').slice(1).join('#');
    } else if (typeof props.to === 'object' && typeof props.to.hash === 'string') {
      hash = props.to.hash.replace('#', '');
    }
    if (hash !== '') {
      hashFragment = hash;
      hashLinkScroll();
    }
  }
  return <Link {...props} onClick={handleClick}>{props.children}</Link>;
}

HashLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};
