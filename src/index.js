import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

let hashFragment = '';
let observer = null;
let asyncTimerId = null;
let scrollFunction = null;

function reset() {
  hashFragment = '';
  if (observer !== null) observer.disconnect();
  if (asyncTimerId !== null) {
    window.clearTimeout(asyncTimerId);
    asyncTimerId = null;
  }
}

function getElAndScroll() {
  const element = document.getElementById(hashFragment);
  if (element !== null) {
    scrollFunction(element);
    reset();
    return true;
  }
  return false;
}

function hashLinkScroll() {
  // Push onto callback queue so it runs after the DOM is updated
  window.setTimeout(() => {
    if (getElAndScroll() === false) {
      if (observer === null) {
        observer = new MutationObserver(getElAndScroll);
      }
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
      });
      // if the element doesn't show up in 10 seconds, stop checking
      asyncTimerId = window.setTimeout(() => {
        reset();
      }, 10000);
    }
  }, 0);
}

export function genericHashLink(props, As) {
  function handleClick(e) {
    reset();
    if (props.onClick) props.onClick(e);
    if (typeof props.to === 'string') {
      hashFragment = props.to
        .split('#')
        .slice(1)
        .join('#');
    } else if (
      typeof props.to === 'object' &&
      typeof props.to.hash === 'string'
    ) {
      hashFragment = props.to.hash.replace('#', '');
    }
    if (hashFragment !== '') {
      scrollFunction =
        props.scroll ||
        (el =>
          el.scrollIntoView(props.smooth ? { behavior: 'smooth' } : undefined));
      hashLinkScroll();
    }
  }
  const { scroll, smooth, ...filteredProps } = props;
  return (
    <As {...filteredProps} onClick={handleClick}>
      {props.children}
    </As>
  );
}

export function HashLink(props) {
  return genericHashLink(props, Link);
}

export function NavHashLink(props) {
  return genericHashLink(props, NavLink);
}

const propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  scroll: PropTypes.func,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

HashLink.propTypes = propTypes;
NavHashLink.propTypes = propTypes;
