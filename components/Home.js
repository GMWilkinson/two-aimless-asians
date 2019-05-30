'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _PostBox = require('./posts/PostBox');

var _PostBox2 = _interopRequireDefault(_PostBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/posts').then(function (result) {
        return _this2.setState({ post: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        { className: '' },
        _react2.default.createElement(
          'section',
          { className: '' },
          _react2.default.createElement(
            'article',
            { className: '' },
            _react2.default.createElement(
              'p',
              null,
              'Home page text'
            ),
            this.state.post && this.state.post.map(function (post) {
              return _react2.default.createElement(
                'div',
                { key: post._id },
                _react2.default.createElement(_PostBox2.default, { key: post._id,
                  title: post.title,
                  text: post.paragraph,
                  author: post.author,
                  postId: post._id,
                  image: post.image
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;