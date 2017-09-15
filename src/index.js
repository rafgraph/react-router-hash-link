import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import jump from 'jump.js';

export default class HashLink extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        hash: PropTypes.string
      })
    ]).isRequired,
    offset: PropTypes.number,
    duration: PropTypes.number
  };

  static defaultProps = {
    offset: 0,
    duration: 400
  };

  static defaultState = {
    observer: undefined,
    asyncTimerId: undefined
  };

  state = { ...HashLink.defaultState };

  reset = () => {
    const { observer, asyncTimerId } = this.state;
    if (asyncTimerId) {
      window.clearTimeout(asyncTimerId);
    }
    if (observer) {
      observer.disconnect();
    }
    this.setState({ ...HashLink.defaultState });
  }

  scrollToElementByHash(hash, offset, duration) {
    const element = document.getElementById(hash);
    if (element !== null) {
      jump(element, { offset, duration });
      this.reset();
      return true;
    }
    return false;
  }

  scrollTo = hash => {
    if (hash) {
      const { offset, duration } = this.props;
      // Push onto callback queue so it runs after the DOM is updated
      window.setTimeout(() => {
        const scrollFn = () => this.scrollToElementByHash(hash, offset, duration);
        if (!scrollFn()) {
          const observer = new MutationObserver(scrollFn);
          observer.observe(document, { attributes: true, childList: true, subtree: true });
          // if the element doesn't show up in 10 seconds, stop checking
          const asyncTimerId = window.setTimeout(() => {
            observer.disconnect();
          }, 10000);
          this.setState({ observer, asyncTimerId });
        }
      }, 0);
    }
  }

  handleClick = e => {
    this.reset();

    const { onClick, to } = this.props;
    if (onClick) {
      onClick(e);
    }
    let hash = undefined;
    if (typeof to === 'string') {
      hash = to.split('#').slice(1).join('#');
    } else if (typeof to === 'object' && typeof to.hash === 'string') {
      hash = to.hash.replace('#', '');
    }
    this.scrollTo(hash);
  }

  render() {
    const { offset, duration, children, onClick, ...childProps } = this.props;
    return <Link {...childProps} onClick={this.handleClick}>{children}</Link>;
  }
}
