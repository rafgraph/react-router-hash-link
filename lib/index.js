'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.HashLink = HashLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashLinkScroll() {
  // Push onto callback queue so it runs after the DOM is updated
  setTimeout(function () {
    var hash = window.location.hash;

    if (hash !== '') {
      var id = hash.replace('#', '');
      var element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, 0);
}

function HashLink(props) {
  function handleClick(e) {
    if (props.onClick) props.onClick(e);
    hashLinkScroll();
  }
  return _react2.default.createElement(
    _reactRouterDom.Link,
    _extends({}, props, { onClick: handleClick }),
    props.children
  );
}

HashLink.PropTypes = {
  onClick: _react.PropTypes.func,
  children: _react.PropTypes.node
};