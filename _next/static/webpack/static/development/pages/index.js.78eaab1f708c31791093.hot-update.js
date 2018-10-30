webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/config */ "./components/config.js");
// Implementing using tutorial from https://malloc.fi/using-google-analytics-with-next-js


var initGA = function initGA() {
  console.log("GA init");
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize(_components_config__WEBPACK_IMPORTED_MODULE_1__["default"].googleAnalyticsCode());
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category: category,
      action: action
    });
  }
};
var logError = function logError() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description: description,
      fatal: fatal
    });
  }
};

/***/ })

})
//# sourceMappingURL=index.js.78eaab1f708c31791093.hot-update.js.map