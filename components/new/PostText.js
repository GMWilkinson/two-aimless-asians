'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _common = require('../../lib/common');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostText = function (_React$Component) {
  _inherits(PostText, _React$Component);

  function PostText(props) {
    _classCallCheck(this, PostText);

    var _this = _possibleConstructorReturn(this, (PostText.__proto__ || Object.getPrototypeOf(PostText)).call(this, props));

    _this.state = {};
    _this.handleChange = _common.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(PostText, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      console.log(this.state, e);
      e.preventDefault();
      _axios2.default.post('/api/posts', this.state).then(function () {
        return _this2.props.history.push('/');
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/posts').then(function (result) {
        return _this3.setState({ post: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('text', this.state);
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h2',
          { className: '' },
          'Add some text'
        )
      );
    }
  }]);

  return PostText;
}(_react2.default.Component);

exports.default = PostText;