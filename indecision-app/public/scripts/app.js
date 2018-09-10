'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'header'
    ),
    props.children,
    _react2.default.createElement(
      'p',
      null,
      'footer'
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(
  Layout,
  null,
  _react2.default.createElement(
    'p',
    null,
    'This is inline'
  )
), document.getElementById("app"));
