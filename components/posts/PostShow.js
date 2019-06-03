'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../../lib/auth');

var _cocktailFlower = require('../../images/cocktail-flower.jpg');

var _cocktailFlower2 = _interopRequireDefault(_cocktailFlower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostShow = function (_React$Component) {
  _inherits(PostShow, _React$Component);

  function PostShow(props) {
    _classCallCheck(this, PostShow);

    var _this = _possibleConstructorReturn(this, (PostShow.__proto__ || Object.getPrototypeOf(PostShow)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(PostShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/posts/' + this.props.match.params.id).then(function (res) {
        _this2.setState({ post: res.data });
      });
    }
  }, {
    key: 'seperatePara',
    value: function seperatePara(text) {
      var y = text.toString();
      var next = y.split('(newpara)');
      console.log('seperatePara text', text, next);
      return next.map(function (para) {
        return _react2.default.createElement(
          'p',
          { key: para },
          para
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var post = this.state.post;
      return _react2.default.createElement(
        'section',
        { className: '' },
        post ? _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement(
            'div',
            { className: 'post-show' },
            _react2.default.createElement('img', { src: _cocktailFlower2.default }),
            _react2.default.createElement(
              'h2',
              { className: '' },
              post.title
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'post-text' },
              this.seperatePara(post.text)
            )
          ),
          _react2.default.createElement(
            'h4',
            { className: 'written-by' },
            post.author
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'Please wait...'
        )
      );
    }
  }]);

  return PostShow;
}(_react2.default.Component);

exports.default = PostShow;