webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/w3.js":
/*!**************************!*\
  !*** ./components/w3.js ***!
  \**************************/
/*! exports provided: factoryContract, gameContract, getAccount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factoryContract", function() { return factoryContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameContract", function() { return gameContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccount", function() { return getAccount; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts/YopoInvest.json */ "./components/contracts/YopoInvest.json");
var _contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/YopoInvest.json */ "./components/contracts/YopoInvest.json", 1);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./components/config.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var getWeb3 = function getWeb3() {
  try {
    var _window = window,
        web3 = _window.web3;
    var alreadyInjected = typeof web3 !== "undefined"; // i.e. Mist/Metamask

    if (alreadyInjected) {
      web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3.currentProvider);

      try {
        web3.eth.net.getNetworkType().then(function (networkId) {
          _config__WEBPACK_IMPORTED_MODULE_2__["default"].setNetwork(networkId == "3" || networkId == "ropsten" ? "test" : "main");
        });
      } catch (ex) {
        console.log("----------------error:getNetworkType-----------------");
        console.log(ex);
      } //console.log(`Injected web3 detected.`);

    } else {
      var network = _config__WEBPACK_IMPORTED_MODULE_2__["default"].network() == "test" ? "ropsten" : "mainnet";
      var headers = new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
      });
      var provider = new web3__WEBPACK_IMPORTED_MODULE_3___default.a.providers.HttpProvider("https://".concat(network, ".infura.io/v3/0f85ce37bcb04ac582ba1475077d1019"), {
        headers: headers
      });
      web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(provider);
      console.log("No web3 instance injected, using Local web3.");
    } //console.log(web3);


    var gameFactoryAddress = _config__WEBPACK_IMPORTED_MODULE_2__["default"].address(); //console.log(gameFactoryAddress);

    var contract = new web3.eth.Contract(_contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1__.abi || _contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1__, gameFactoryAddress); //console.log(contract);

    return {
      web3: web3,
      contract: contract
    };
  } catch (error) {
    console.log("----------------error-----------------");
    console.log(error);
  }
};

var getFactoryContract = function getFactoryContract(address) {
  return getWeb3();
};

var factoryContract = function factoryContract() {
  return getFactoryContract();
};
var gameContract = function gameContract(address) {
  var _getWeb = getWeb3(),
      web3 = _getWeb.web3;

  var contract = new web3.eth.Contract(_contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1__.abi || _contracts_YopoInvest_json__WEBPACK_IMPORTED_MODULE_1__, address);
  contract.web3 = web3;
  return contract;
};
var getAccount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _getWeb2, web3, accounts;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _getWeb2 = getWeb3(), web3 = _getWeb2.web3;
            _context.next = 3;
            return web3.eth.getAccounts();

          case 3:
            accounts = _context.sent;
            return _context.abrupt("return", accounts[0]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAccount() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ __webpack_exports__["default"] = (getWeb3);

/***/ })

})
//# sourceMappingURL=index.js.203897204ef9507a765a.hot-update.js.map