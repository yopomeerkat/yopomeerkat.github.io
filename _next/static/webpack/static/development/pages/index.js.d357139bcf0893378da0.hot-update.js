webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/_/instrution.js":
/*!*******************************!*\
  !*** ./pages/_/instrution.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instruction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_youi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/youi */ "./components/youi.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/config */ "./components/config.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toasts */ "./pages/_/toasts.js");
var _jsxFileName = "/Users/bruce/projects/eth/a21/yopoinvest/pages/_/instrution.js";

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









var Instruction =
/*#__PURE__*/
function (_Component) {
  _inherits(Instruction, _Component);

  function Instruction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Instruction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Instruction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCopy", function () {
      Object(_toasts__WEBPACK_IMPORTED_MODULE_6__["toastMessage"])("Copied Contract Address.");
    });

    return _this;
  }

  _createClass(Instruction, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var Step1 = function Step1() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
          as: "h3",
          style: {
            fontSize: "1.5em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "1. WALLET"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "Make sure you have an ETH account.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
          bulleted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Desktop Wallet "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "For Desktop we recommend using\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://metamask.io/",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Metamask"), "\xA0.", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "How to Install and Use Metamask?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "MetaMask is a bridge that allows you to visit the distributed web of tomorrow in your browser today. It allows you to run Ethereum dApps right in your browser without running a full Ethereum node.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, " Mobile Wallet "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "For mobile devices we recommend using\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.cipherbrowser.com",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Cipher Browser"), "\xA0or\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://trustwalletapp.com",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Trust Wallet"), "\xA0.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, " Purchase Ethereum "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "You can purchase Ethereum cryptocurrency for USD and other currency at\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.coinbase.com/buy-ethereum",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "coinbase"), "\xA0or\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://www.bestchange.com/?p=831118",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "bestchange"), "\xA0 .")))));
      };

      var Step2 = function Step2() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
          as: "h3",
          style: {
            fontSize: "1.5em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "2. INVEST ETH"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }, "SEND ANY ETH TO THE SMART CONTRACT ADDRESS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          className: "yo-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, _components_config__WEBPACK_IMPORTED_MODULE_5__["default"].address()), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__["CopyToClipboard"], {
          text: _components_config__WEBPACK_IMPORTED_MODULE_5__["default"].address(),
          onCopy: function onCopy() {
            return _this2.onCopy();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-copy",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }), "\xA0COPY CONTRACT ADDRESS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, "Recommended gas limit: 150000, actual value of gas price you can check on\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://ethgasstation.info",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, "ethgasstation.info")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, "Check the success of you transaction in your wallet application history or at the site\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "https://etherscan.io/",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, "etherscan.io"), "\xA0, just enter your wallet address there."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Do not transfer cryptocurrency from exchanges, only from your personal ETH wallet, from which you have private keys!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
          as: "h3",
          style: {
            fontSize: "1.5em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "3. WITHDRAW"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: {
            fontSize: "1.2em"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, "SEND 0 ETH TO THE SMART CONTRACT ADDRESS"));
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        id: "instrution",
        style: {
          padding: "0em 0em",
          margin: "1em 0em"
        },
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        verticalAlign: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Instruction"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        stackable: true,
        verticalAlign: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step1, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        floated: "right",
        width: 8,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Step2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })))))))));
    }
  }]);

  return Instruction;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_/instrution")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.d357139bcf0893378da0.hot-update.js.map