webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/etherscan.js":
/*!*********************************!*\
  !*** ./components/etherscan.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return etherscan; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./components/config.js");
/* harmony import */ var _utils_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/convert */ "./utils/convert.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import fetch from "node-fetch";



var etherscan =
/*#__PURE__*/
function () {
  function etherscan() {
    _classCallCheck(this, etherscan);
  }

  _createClass(etherscan, null, [{
    key: "getTxs",
    value: function () {
      var _getTxs = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var headers, url, txs, numberOfBets, totalFunds, j, v, usdFunds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = new Headers({
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
                });
                url = "https://api.etherscan.io/api?module=account&action=txlist&address=".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].address(), "&startblock=6604918&endblock=99999999&sort=asc&apikey=").concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].apikey());
                _context.next = 4;
                return fetch(url, {
                  method: "GET"
                });

              case 4:
                _context.next = 6;
                return _context.sent.json();

              case 6:
                txs = _context.sent.result;
                numberOfBets = 0;
                totalFunds = 0;
                j = 0;

              case 10:
                if (!(j < txs.length)) {
                  _context.next = 19;
                  break;
                }

                if (!(txs[j].isError == "1")) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("continue", 16);

              case 13:
                v = parseFloat(_utils_convert__WEBPACK_IMPORTED_MODULE_2__["default"].eth(txs[j].value));

                if (v > 0) {
                  numberOfBets++;
                }

                totalFunds += v;

              case 16:
                j++;
                _context.next = 10;
                break;

              case 19:
                _context.t0 = totalFunds;
                _context.next = 22;
                return _config__WEBPACK_IMPORTED_MODULE_1__["default"].usdrate();

              case 22:
                _context.t1 = _context.sent;
                usdFunds = _context.t0 * _context.t1;
                totalFunds = parseFloat(totalFunds.toFixed(1));
                usdFunds = parseFloat(usdFunds.toFixed(1));
                return _context.abrupt("return", {
                  numberOfBets: numberOfBets,
                  totalFunds: totalFunds,
                  usdFunds: usdFunds
                });

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTxs() {
        return _getTxs.apply(this, arguments);
      };
    }()
  }, {
    key: "getBets",
    value: function () {
      var _getBets = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url, txs, allBets, j, d;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "https://api.etherscan.io/api?module=logs&action=getLogs&fromBlock=6604918&toBlock=latest&address=".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].address(), "&topic0=0x4ae4bd7655e0d350876a23cd90c4227b13db560e34435c6a488150a9c844bf5f&apikey=").concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].apikey());
                _context2.next = 3;
                return fetch(url, {
                  method: "GET"
                });

              case 3:
                _context2.next = 5;
                return _context2.sent.json();

              case 5:
                txs = _context2.sent.result;
                allBets = [];

                for (j = 0; j < txs.length; j++) {
                  d = web3.eth.abi.decodeLog([{
                    type: "address",
                    name: "addr"
                  }, {
                    type: "uint256",
                    name: "eth"
                  }, {
                    type: "uint256",
                    name: "rate"
                  }], txs[j].data);
                  allBets.push(d);
                }

                console.log("allBets", allBets);
                return _context2.abrupt("return", {
                  allBets: allBets
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getBets() {
        return _getBets.apply(this, arguments);
      };
    }()
  }]);

  return etherscan;
}();



/***/ })

})
//# sourceMappingURL=index.js.461e845c775f4c073a5f.hot-update.js.map