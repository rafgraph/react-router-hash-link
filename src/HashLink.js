import React from 'react';
import { Link } from 'react-router-dom';

export function HashLink(props) {
  function hashLinkScroll(event) {
    if (props.onClick) props.onClick(event);

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
  return <Link {...props} onClick={hashLinkScroll}>{props.children}</Link>;
}
