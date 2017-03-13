import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

function hashLinkScroll() {
  // Push onto callback queue so it runs after the DOM is updated
  setTimeout(() => {
    const { hash } = window.location;
    if (hash !== '') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, 0);
}

export function HashLink(props) {
  function handleClick(e) {
    if (props.onClick) props.onClick(e);
    hashLinkScroll();
  }
  return <Link {...props} onClick={handleClick}>{props.children}</Link>;
}

HashLink.PropTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
