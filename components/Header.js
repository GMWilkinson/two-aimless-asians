'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../lib/auth');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {
      isOpen: false,
      collapsed: true
    };
    _this.handleLogout = _this.handleLogout.bind(_this);
    _this.toggleNavbar = _this.toggleNavbar.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'toggleNavbar',
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Header was mounted');
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout() {
      (0, _auth.deleteToken)();
      this.props.history.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: '' },
        _react2.default.createElement(
          _reactstrap.Navbar,
          { color: 'dark', dark: true, expand: 'lg' },
          _react2.default.createElement(
            _reactstrap.NavbarBrand,
            { id: 'header', href: '/' },
            'Two Aimless Asians'
          ),
          _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggleNavbar }),
          _react2.default.createElement(
            _reactstrap.Collapse,
            { isOpen: !this.state.collapsed, navbar: true },
            _react2.default.createElement(
              _reactstrap.Nav,
              { className: 'ml-auto', navbar: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  { to: '/new', className: 'nav-links' },
                  'Coco'
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  { to: '/new', className: 'nav-links' },
                  'Rice'
                )
              ),
              (0, _auth.isAuthenticated)() && _react2.default.createElement(
                _reactstrap.UncontrolledDropdown,
                { nav: true, inNavbar: true },
                _react2.default.createElement(
                  _reactstrap.DropdownToggle,
                  { nav: true, caret: true },
                  'Editor'
                ),
                _react2.default.createElement(
                  _reactstrap.DropdownMenu,
                  { right: true },
                  _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/new' },
                      'New Post'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.DropdownItem,
                    null,
                    _react2.default.createElement(
                      'div',
                      { onClick: this.handleLogout, className: '' },
                      'Logout'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);