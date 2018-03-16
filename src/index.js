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
        (el => {
          if (!smooth) {
            el.scrollIntoView();
          } else {
            if(props.onStartSmooth){
              props.onStartSmooth();
            }
            jump(el.getBoundingClientRect().top - (props.offset || 0), {
              callback: props.onEndSmooth,
              easing: props.easing,
              duration: props.duration
            });
          }
        });
      hashLinkScroll();
    }
  }
  const { scroll, smooth, onStartSmooth, onEndSmooth, ...filteredProps } = props;
  return (
    <As {...filteredProps} onClick={handleClick}>
      {props.children}
    </As>
  );
}

function jump(distance, options) {
  var start = window.pageYOffset,
    opt = {
      duration: options.duration || 400,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    },
    duration = typeof opt.duration === 'function' ? opt.duration(distance) : opt.duration,
    timeStart,
    timeElapsed;

  window.requestAnimationFrame(function (time) {
    timeStart = time; loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

    if (timeElapsed < duration) window.requestAnimationFrame(loop); else end();
  }

  function end() {
    window.scrollTo(0, start + distance);

    if (typeof opt.callback === 'function') opt.callback();
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
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
