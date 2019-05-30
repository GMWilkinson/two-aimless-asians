'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _reactRouterDom = require('react-router-dom');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostBox = function (_React$Component) {
  _inherits(PostBox, _React$Component);

  function PostBox(props) {
    _classCallCheck(this, PostBox);

    var _this = _possibleConstructorReturn(this, (PostBox.__proto__ || Object.getPrototypeOf(PostBox)).call(this, props));

    _this.state = {};
    _this.title = _this.props.title;
    _this.author = _this.props.author;
    _this.text = _this.props.text;
    _this.image = _this.props.image;
    _this.postId = _this.props.postId;
    return _this;
  }
  //
  // componentDidMount() {
  //   axios.get('/api/posts')
  //     .then(result => this.setState({ post: result.data }))
  // }

  _createClass(PostBox, [{
    key: 'render',
    value: function render() {
      console.log('post is', this.title, this.text);
      return _react2.default.createElement(
        _reactstrap.Row,
        { className: '' },
        _react2.default.createElement(
          _reactstrap.Col,
          { sm: 12, md: 12, lg: 12, className: 'post-box' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' + this.postId, className: '' },
            _react2.default.createElement(
              'h2',
              null,
              this.title
            ),
            _react2.default.createElement('img', { src: this.image })
          )
        )
      );
    }
  }]);

  return PostBox;
}(_react2.default.Component);

exports.default = PostBox;