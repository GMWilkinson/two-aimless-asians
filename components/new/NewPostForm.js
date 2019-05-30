'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormButton = require('./FormButton');

var _FormButton2 = _interopRequireDefault(_FormButton);

var _FormTextarea = require('./FormTextarea');

var _FormTextarea2 = _interopRequireDefault(_FormTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewPostForm(_ref) {
  var handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;

  return _react2.default.createElement(
    'form',
    { className: '', onSubmit: handleSubmit },
    _react2.default.createElement(_FormInput2.default, { name: 'title', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormInput2.default, { name: 'author', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormTextarea2.default, { name: 'text', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormInput2.default, { className: 'blurb-input', name: 'blurb', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormInput2.default, { name: 'image', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormButton2.default, { text: 'Create Post' })
  );
}
// import { isAuthenticated, decodeToken } from '../../lib/auth'
exports.default = NewPostForm;