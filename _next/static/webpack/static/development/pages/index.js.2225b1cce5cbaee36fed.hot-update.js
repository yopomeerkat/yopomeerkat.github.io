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
        var headers, rate, url, txs, numberOfBets, totalFunds, j, v, usdFunds;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = new Headers({
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
                });
                rate = fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/").then(function (response) {
                  return response.json();
                });
                console.log('rate:' + +ratejson[0].price_usd);
                url = "https://api.etherscan.io/api?module=account&action=txlist&address=".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].address(), "&startblock=6604918&endblock=99999999&sort=asc&apikey=").concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].apikey());
                _context.next = 6;
                return fetch(url, {
                  method: "GET"
                });

              case 6:
                _context.next = 8;
                return _context.sent.json();

              case 8:
                txs = _context.sent.result;
                numberOfBets = 0;
                totalFunds = 0;
                j = 0;

              case 12:
                if (!(j < txs.length)) {
                  _context.next = 21;
                  break;
                }

                if (!(txs[j].isError == "1")) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("continue", 18);

              case 15:
                v = parseFloat(_utils_convert__WEBPACK_IMPORTED_MODULE_2__["default"].eth(txs[j].value));

                if (v > 0) {
                  numberOfBets++;
                }

                totalFunds += v;

              case 18:
                j++;
                _context.next = 12;
                break;

              case 21:
                usdFunds = totalFunds * _config__WEBPACK_IMPORTED_MODULE_1__["default"].usdrate();
                totalFunds = parseFloat(totalFunds.toFixed(1));
                usdFunds = parseFloat(usdFunds.toFixed(1));
                return _context.abrupt("return", {
                  numberOfBets: numberOfBets,
                  totalFunds: totalFunds,
                  usdFunds: usdFunds
                });

              case 25:
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
  }]);

  return etherscan;
}();



/***/ })

})
//# sourceMappingURL=index.js.2225b1cce5cbaee36fed.hot-update.js.map