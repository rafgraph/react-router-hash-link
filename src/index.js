import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    scrollFn: PropTypes.func
  };

  static defaultProps = {
    scrollFn: element => element.scrollIntoView()
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

  scrollToElementByHash = hash => {
    const element = document.getElementById(hash);
    if (element !== null) {
      this.props.scrollFn(element);
      this.reset();
      return true;
    }
    return false;
  }

  scrollTo = hash => {
    if (hash) {
      // Push onto callback queue so it runs after the DOM is updated
      window.setTimeout(() => {
        const scrollFn = () => this.scrollToElementByHash(hash);
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
    const { scrollFn, children, onClick, ...childProps } = this.props;
    return <Link {...childProps} onClick={this.handleClick}>{children}</Link>;
  }
}
