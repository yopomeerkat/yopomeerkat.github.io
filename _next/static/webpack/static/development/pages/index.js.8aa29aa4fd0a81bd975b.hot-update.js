webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/config.js":
/*!******************************!*\
  !*** ./components/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return config; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts/config.json */ "./components/contracts/config.json");
var _contracts_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/config.json */ "./components/contracts/config.json", 1);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var config =
/*#__PURE__*/
function () {
  function config() {
    _classCallCheck(this, config);
  }

  _createClass(config, null, [{
    key: "version",
    value: function version() {
      return _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.version;
    }
  }, {
    key: "network",
    value: function network() {
      return config._network || _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.network;
    }
  }, {
    key: "setNetwork",
    value: function setNetwork(_network) {
      return config._network = _network;
    }
  }, {
    key: "address",
    value: function address() {
      return _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.contract[config.network()];
    }
  }, {
    key: "codeUrl",
    value: function codeUrl() {
      var contractUrl = _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.network !== "test" ? "https://etherscan.io/address/".concat(config.address(), "#code") : "https://ropsten.etherscan.io/address/".concat(config.address(), "#code");
      return contractUrl;
    }
  }, {
    key: "getGameAddress",
    value: function getGameAddress(name, address) {
      name = (name + "").trim();
      var games = _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.games;

      for (var i = 0; i < games.length; i++) {
        // console.log("games[i]" );
        // console.log(games[i]);
        // console.log("games[i].name:" + games[i].name);
        var gname = games[i].name.trim();

        if (gname == name || gname + "/" == name || "/" + gname + "/" == name || games[i].address == address) {
          //console.log("games[i].address:" + games[i].address);
          return games[i].address;
        }
      }

      return undefined;
    }
  }, {
    key: "gameUrl",
    value: function gameUrl(name, address) {
      var addr = config.getGameAddress(name, address); //console.log(addr);

      if (addr) {
        return "/" + name + "/";
      }

      return "/game?n=" + name; //Config.network !== "test" ? "/" + name : "/game?n=" + name;
    }
  }, {
    key: "gameNames",
    value: function gameNames() {
      var games = _contracts_config_json__WEBPACK_IMPORTED_MODULE_1__.games;
      var names = [];
      var filters = ["index", "game", "games", "about", "howtoplay", "account"];

      for (var i = 0; i < games.length; i++) {
        if (filters.indexOf(games[i].name) < 0) {
          names.push(games[i].name);
        }
      }

      return names;
    }
  }, {
    key: "apikey",
    value: function apikey() {
      return "XRPRF88GE7HWHHQ68CSC8R6WB9IQUS8UEQ";
    }
  }, {
    key: "usdrate",
    value: function () {
      var _usdrate = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var rateRequest, ratejson, rate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                rateRequest = fetch("https://api.coinmarketcap.com/v1/ticker/ethereum/").then(function (response) {
                  return response.json();
                });
                _context.next = 4;
                return rateRequest;

              case 4:
                ratejson = _context.sent;
                rate = ratejson[0].price_usd;
                console.log("rate:" + rate);
                return _context.abrupt("return", rate);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
                return _context.abrupt("return", 202.53);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function usdrate() {
        return _usdrate.apply(this, arguments);
      };
    }()
  }]);

  return config;
}();

_defineProperty(config, "_network", undefined);



/***/ })

})
//# sourceMappingURL=index.js.8aa29aa4fd0a81bd975b.hot-update.js.map