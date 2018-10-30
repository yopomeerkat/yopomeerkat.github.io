webpackHotUpdate("static/development/pages/promo.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./components/base.js");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ "./components/banner.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./components/config.js");
var _jsxFileName = "/Users/bruce/projects/eth/a21/yopoinvest/components/layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var NavBarMobile = function NavBarMobile(_ref) {
  var children = _ref.children,
      leftItems = _ref.leftItems,
      onPusherClick = _ref.onPusherClick,
      onToggle = _ref.onToggle,
      rightItems = _ref.rightItems,
      visible = _ref.visible,
      banner = _ref.banner;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pushable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
    as: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"],
    animation: "overlay",
    icon: "labeled",
    inverted: true,
    items: rightItems,
    vertical: true,
    visible: visible,
    style: {
      minWidth: "50vw"
    },
    onClick: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Sidebar"].Pusher, {
    dimmed: visible,
    onClick: onPusherClick,
    style: {
      minHeight: "100vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: banner ? "450px" : 0,
      padding: banner ? "1em 0em" : 0
    },
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    inverted: true,
    secondary: true,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    onClick: onToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    header: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    size: "mini",
    src: "/static/img/icon.png",
    style: {
      marginRight: "0.5em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, leftItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, _extends({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }));
  })))), banner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mobile: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    vertical: true,
    style: {
      padding: "2em 0em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, children)));
};

var NavBarDesktop = function NavBarDesktop(_ref2) {
  var children = _ref2.children,
      leftItems = _ref2.leftItems,
      rightItems = _ref2.rightItems,
      banner = _ref2.banner;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      minHeight: "100vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: banner ? "700px" : 0,
      padding: banner ? "0em 0em" : 0
    },
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    inverted: true,
    secondary: true,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    header: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    size: "mini",
    src: "/static/img/icon.png",
    style: {
      marginRight: "0.5em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "yo-light-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "YOPO")), leftItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, _extends({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, rightItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, _extends({}, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }));
  })))), banner ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }) : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    vertical: true,
    style: {
      padding: "1em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, children));
};

var NavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      visible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePusher", function () {
      var visible = _this.state.visible;
      if (visible) _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      return _this.setState({
        visible: !_this.state.visible
      });
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          leftItems = _this$props.leftItems,
          rightItems = _this$props.rightItems,
          banner = _this$props.banner;
      var visible = this.state.visible;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Responsive"], _extends({
        name: "mobile"
      }, semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Responsive"].onlyMobile, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarMobile, {
        leftItems: leftItems,
        onPusherClick: this.handlePusher,
        onToggle: this.handleToggle,
        rightItems: rightItems,
        visible: visible,
        banner: banner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Responsive"], {
        name: "desktop",
        minWidth: semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Responsive"].onlyTablet.minWidth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarDesktop, {
        leftItems: leftItems,
        rightItems: rightItems,
        banner: banner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, children)));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var leftItems = [{
  as: "a",
  content: "Home",
  key: "home",
  href: "/"
}, {
  as: "a",
  content: "Investment",
  key: "invest",
  href: "/#invest"
}];
var rightItems = [{
  as: "a",
  content: "Instrution",
  key: "instrution",
  href: "/#instrution"
}, {
  as: "a",
  content: "Tech",
  key: "tech",
  href: "/#tech"
}, {
  as: "a",
  content: "FAQ",
  key: "faq",
  href: "/#faq"
}, {
  as: "a",
  content: "Smart Contract",
  key: "smartcontract",
  href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["default"].codeUrl()),
  target: "_blank"
}, {
  as: "a",
  content: "Promo",
  key: "promo",
  href: "/promo"
}];

var Layout =
/*#__PURE__*/
function (_Component2) {
  _inherits(Layout, _Component2);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, {
        leftItems: leftItems,
        rightItems: rightItems,
        banner: this.props.banner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=promo.js.6976e7afc6a03856ff1b.hot-update.js.map