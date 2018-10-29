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
                  method: "GET",
                  headers: headers
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
                usdFunds = totalFunds * _config__WEBPACK_IMPORTED_MODULE_1__["default"].usdrate();
                totalFunds = parseFloat(totalFunds.toFixed(1));
                usdFunds = parseFloat(usdFunds.toFixed(1));
                return _context.abrupt("return", {
                  numberOfBets: numberOfBets,
                  totalFunds: totalFunds,
                  usdFunds: usdFunds
                });

              case 23:
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



/***/ }),

/***/ "./node_modules/assert/assert.js":
false,

/***/ "./node_modules/browserify-zlib/lib/binding.js":
false,

/***/ "./node_modules/browserify-zlib/lib/index.js":
false,

/***/ "./node_modules/encoding/lib sync recursive":
false,

/***/ "./node_modules/encoding/lib/encoding.js":
false,

/***/ "./node_modules/encoding/lib/iconv-loader.js":
false,

/***/ "./node_modules/iconv-lite/encodings/dbcs-codec.js":
false,

/***/ "./node_modules/iconv-lite/encodings/dbcs-data.js":
false,

/***/ "./node_modules/iconv-lite/encodings/index.js":
false,

/***/ "./node_modules/iconv-lite/encodings/internal.js":
false,

/***/ "./node_modules/iconv-lite/encodings/sbcs-codec.js":
false,

/***/ "./node_modules/iconv-lite/encodings/sbcs-data-generated.js":
false,

/***/ "./node_modules/iconv-lite/encodings/sbcs-data.js":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/big5-added.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/cp936.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/cp949.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/cp950.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/eucjp.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/gb18030-ranges.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/gbk-added.json":
false,

/***/ "./node_modules/iconv-lite/encodings/tables/shiftjis.json":
false,

/***/ "./node_modules/iconv-lite/encodings/utf16.js":
false,

/***/ "./node_modules/iconv-lite/encodings/utf7.js":
false,

/***/ "./node_modules/iconv-lite/lib/bom-handling.js":
false,

/***/ "./node_modules/iconv-lite/lib/index.js":
false,

/***/ "./node_modules/is-stream/index.js":
false,

/***/ "./node_modules/node-fetch/index.js":
false,

/***/ "./node_modules/node-fetch/lib/body.js":
false,

/***/ "./node_modules/node-fetch/lib/fetch-error.js":
false,

/***/ "./node_modules/node-fetch/lib/headers.js":
false,

/***/ "./node_modules/node-fetch/lib/request.js":
false,

/***/ "./node_modules/node-fetch/lib/response.js":
false,

/***/ "./node_modules/pako/lib/utils/common.js":
false,

/***/ "./node_modules/pako/lib/zlib/adler32.js":
false,

/***/ "./node_modules/pako/lib/zlib/constants.js":
false,

/***/ "./node_modules/pako/lib/zlib/crc32.js":
false,

/***/ "./node_modules/pako/lib/zlib/deflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/inffast.js":
false,

/***/ "./node_modules/pako/lib/zlib/inflate.js":
false,

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
false,

/***/ "./node_modules/pako/lib/zlib/messages.js":
false,

/***/ "./node_modules/pako/lib/zlib/trees.js":
false,

/***/ "./node_modules/pako/lib/zlib/zstream.js":
false,

/***/ "./node_modules/safer-buffer/safer.js":
false,

/***/ "./node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/util/util.js":
false,

/***/ 10:
false,

/***/ 9:
false

})
//# sourceMappingURL=index.js.f27dfdbe13d5c924fef4.hot-update.js.map