webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/_/investment.js":
/*!*******************************!*\
  !*** ./pages/_/investment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Investment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_youi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/youi */ "./components/youi.js");
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/config */ "./components/config.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasts */ "./pages/_/toasts.js");
/* harmony import */ var _components_w3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/w3 */ "./components/w3.js");
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convert */ "./utils/convert.js");
/* harmony import */ var _components_etherscan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/etherscan */ "./components/etherscan.js");

var _jsxFileName = "/Users/bruce/projects/eth/a21/yopoinvest/pages/_/investment.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Investment =
/*#__PURE__*/
function (_Component) {
  _inherits(Investment, _Component);

  function Investment(props) {
    var _this;

    _classCallCheck(this, Investment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Investment).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInvest",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.onTx(_this.state.price);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onWithdraw",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.onTx(0);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadWeb3",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(loading) {
        var web3Instance, contractInstance, account, _w, web3, contract;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.prev = 1;
                _w = Object(_components_w3__WEBPACK_IMPORTED_MODULE_6__["default"])(), web3 = _w.web3, contract = _w.contract;
                web3Instance = web3;
                contractInstance = contract;
                _context3.next = 7;
                return Object(_components_w3__WEBPACK_IMPORTED_MODULE_6__["getAccount"])();

              case 7:
                account = _context3.sent;
                _context3.next = 14;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);
                return _context3.abrupt("return", !loading && Object(_toasts__WEBPACK_IMPORTED_MODULE_5__["toastMessage"])({
                  event: "error",
                  message: "Fails to connect ethereum blockchain!"
                }));

              case 14:
                if (!account) {
                  !loading && Object(_toasts__WEBPACK_IMPORTED_MODULE_5__["toastMessage"])({
                    event: "error",
                    message: "Fails to load ETH account."
                  }); //console.log("web3 3:", web3Instance);
                  //return { web3: web3Instance, contract: contractInstance};
                }

                console.log(account);
                _context3.next = 22;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t1 = _context3["catch"](0);
                console.log(_context3.t1);

                _this.setState({
                  loading: false
                });

              case 22:
                return _context3.abrupt("return", {
                  web3: web3Instance,
                  contract: contractInstance,
                  account: account
                });

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 18], [1, 10]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reload",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var _ref5, web3, contract, account, rate, investWei, investETH, withdrawWei, withdrawETH, invested;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({
                loading: true
              });

              _context4.prev = 1;
              _context4.next = 4;
              return _this.loadWeb3(true);

            case 4:
              _ref5 = _context4.sent;
              web3 = _ref5.web3;
              contract = _ref5.contract;
              account = _ref5.account;

              if (!account) {
                _context4.next = 22;
                break;
              }

              _context4.next = 11;
              return contract.methods.rates(account).call();

            case 11:
              rate = _context4.sent;
              _context4.next = 14;
              return contract.methods.balance(account).call();

            case 14:
              investWei = _context4.sent;
              investETH = _utils_convert__WEBPACK_IMPORTED_MODULE_7__["default"].eth(web3, investWei, 3);
              _context4.next = 18;
              return contract.methods.payoutAmount().call({
                from: account
              });

            case 18:
              withdrawWei = _context4.sent;
              withdrawETH = _utils_convert__WEBPACK_IMPORTED_MODULE_7__["default"].eth(web3, withdrawWei, 3);
              console.log("invested: ".concat(investETH));

              _this.setState({
                rate: rate,
                investETH: investETH,
                withdrawETH: withdrawETH
              }); //console.log(`invested: ${investETH}`);


            case 22:
              _context4.next = 24;
              return _components_etherscan__WEBPACK_IMPORTED_MODULE_8__["default"].getBets(web3);

            case 24:
              invested = _context4.sent;

              // if (contract) {
              // 	const allBets = await contract.methods.getBets(20).call();
              // 	console.log("---------all bets---------");
              // 	for (let i = 0; i < allBets[0].length; i++) {
              // 		const eth = convert.eth(web3, allBets[1][i]);
              // 		const addr = convert.shortAddress(allBets[0][i]);
              // 		invested.push({
              // 			addr,
              // 			eth,
              // 			rate: allBets[2][i],
              // 			date: allBets[3][i]
              // 		});
              // 	}
              // 	console.log(invested);
              // } else {
              // 	invested = await etherscan.getBets(web3);
              // }
              _this.setState({
                invested: invested,
                loading: false
              });

              _context4.next = 32;
              break;

            case 28:
              _context4.prev = 28;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);

              _this.setState({
                loading: false
              });

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 28]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTx",
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(val) {
        var _ref7, web3, account;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this.loadWeb3();

              case 3:
                _ref7 = _context5.sent;
                web3 = _ref7.web3;
                account = _ref7.account;
                web3.eth.sendTransaction({
                  to: _components_config__WEBPACK_IMPORTED_MODULE_4__["default"].address(),
                  from: account,
                  value: _utils_convert__WEBPACK_IMPORTED_MODULE_7__["default"].wei(web3, val)
                }, function (err, transactionHash) {
                  if (err) {
                    console.log(err); // if (err.code == "-32603") {
                    // 	return toastMessage({
                    // 		event: "error",
                    // 		message: "You've just rejected your transaction. COME ON, Don't lose this chance."
                    // 	});
                    // }
                    // return toastMessage({
                    // 	event: "error",
                    // 	message: "There was a problem!: " + err.message
                    // });

                    return;
                  }

                  Object(_toasts__WEBPACK_IMPORTED_MODULE_5__["toastMessage"])("Transaction sent. Waining for confirmation...");
                });

                _this.setState({
                  status: "submit",
                  loading: false
                });

                _context5.next = 14;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

                _this.setState({
                  loading: false
                });

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e, _ref8) {
      var _this$setState;

      var name = _ref8.name,
          value = _ref8.value;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, name, value), _defineProperty(_this$setState, "error", ""), _this$setState));
    });

    _this.state = {
      price: 5,
      loading: false,
      invested: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onInvest = _this.onInvest.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onWithdraw = _this.onWithdraw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Investment, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.reload();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        id: "invest",
        style: {
          padding: "0em 0em",
          margin: "1em 0em"
        },
        vertical: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        verticalAlign: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Investment"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
        stackable: true,
        verticalAlign: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, "When you havd installed the Metamask, you can directly use the below functions of 'INVEST' & 'WITHDRAW'.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        label: "ETH",
        inline: "true",
        placeholder: "ETH INVESTED",
        name: "price",
        value: this.state.price,
        onChange: this.handleChange,
        style: {
          padding: "0.5em",
          fontSize: "0.8em"
        } // error={
        // 	this.state.valid[
        // 		"price"
        // 	]
        // }
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "huge",
        color: "blue",
        onClick: this.onInvest,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "INVEST"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        size: "huge",
        color: "pink",
        onClick: this.onWithdraw,
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "WITHDRAW"), this.state.error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        color: "red",
        header: "",
        content: this.state.error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Your interest rate:\xA0", this.state.rate > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "yo-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, this.state.rate, " %"), (this.state.rate || 0) == 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "(will show after invested)"), "\xA0", this.state.investETH > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Total invested:\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "yo-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, this.state.investETH, "\xA0"), "Available profit:\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "yo-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, this.state.withdrawETH, ") \xA0"), "(refresh hourly)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
        celled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Investor"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Rate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "ETH"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, this.state.invested.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
          key: x.addr + x.eth,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          ribbon: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: this
        }, " ", x.addr)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, x.rate, "\xA0%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, x.eth));
      })))))))))));
    }
  }]);

  return Investment;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_/investment")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4cebeb36c2fd9e4620f5.hot-update.js.map