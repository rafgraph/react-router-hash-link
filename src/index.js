import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

function hashLinkScroll(hashFragment) {
  // Push onto callback queue so it runs after the DOM is updated
  setTimeout(() => {
    const element = document.getElementById(hashFragment);
    if (element) element.scrollIntoView();
  }, 0);
}

export function HashLink(props) {
  function handleClick(e) {
    if (props.onClick) props.onClick(e);
    let hashFragment = '';
    if (typeof props.to === 'string') {
      hashFragment = props.to.split('#').slice(1).join('#');
    } else if (typeof props.to === 'object' && props.to.hash) {
      hashFragment = props.to.hash.replace('#', '');
    }
    if (hashFragment) hashLinkScroll(hashFragment);
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
