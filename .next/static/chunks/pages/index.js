_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/login.css */ "./styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify */ "./components/spotify.js");
var _this = undefined,
    _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Login = function Login() {
  console.log(_spotify__WEBPACK_IMPORTED_MODULE_2__["loginUrl"]);
  return __jsx("div", {
    className: "login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Logo.png",
    alt: "Logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: _spotify__WEBPACK_IMPORTED_MODULE_2__["loginUrl"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "LOGIN WITH SPOTIFY"));
};

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/player.js":
/*!******************************!*\
  !*** ./components/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\player.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Player = function Player() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "Player");
};

_c = Player;
/* harmony default export */ __webpack_exports__["default"] = (Player);

var _c;

$RefreshReg$(_c, "Player");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/spotify.js":
/*!*******************************!*\
  !*** ./components/spotify.js ***!
  \*******************************/
/*! exports provided: authEndpoint, getToken, loginUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authEndpoint", function() { return authEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
var authEndpoint = "https://accounts.spotify.com/en/authorize";
var redirectUri = "http://localhost:3000/";
var clientId = "379a18794eed412a83946d11a16fb463";
var scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];
var getToken = function getToken() {
  // goes to the hash in the current url 
  return window.location.hash.split('&')[0].split("=")[1];
};
var loginUrl = "".concat(authEndpoint, "?client_id=").concat(clientId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scopes.join("%20"), "&response_type=token&show_dialog=true");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./context/context-provider.js":
/*!*************************************!*\
  !*** ./context/context-provider.js ***!
  \*************************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\context\\context-provider.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var DataContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var DataContextProvider = function DataContextProvider(_ref) {
  _s();

  var initialState = _ref.initialState,
      reducer = _ref.reducer,
      children = _ref.children;
  return __jsx(DataContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
};

_s(DataContextProvider, "skVOqNGrFQuDFh+lpttAJ2AZFeA=");

_c = DataContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (DataContextProvider);

var _c;

$RefreshReg$(_c, "DataContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CLinux%5CreactApp21%5Cspotify-clone%5Cpages%5Cindex.js!./":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CLinux%5CreactApp21%5Cspotify-clone%5Cpages%5Cindex.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/spotify-web-api-js/src/spotify-web-api.js":
/*!****************************************************************!*\
  !*** ./node_modules/spotify-web-api-js/src/spotify-web-api.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* global module */


/**
 * Class representing the API
 */
var SpotifyWebApi = (function () {
  var _baseUri = 'https://api.spotify.com/v1';
  var _accessToken = null;
  var _promiseImplementation = null;

  var WrapPromiseWithAbort = function (promise, onAbort) {
    promise.abort = onAbort;
    return promise;
  };

  var _promiseProvider = function (promiseFunction, onAbort) {
    var returnedPromise;
    if (_promiseImplementation !== null) {
      var deferred = _promiseImplementation.defer();
      promiseFunction(
        function (resolvedResult) {
          deferred.resolve(resolvedResult);
        },
        function (rejectedResult) {
          deferred.reject(rejectedResult);
        }
      );
      returnedPromise = deferred.promise;
    } else {
      if (window.Promise) {
        returnedPromise = new window.Promise(promiseFunction);
      }
    }

    if (returnedPromise) {
      return new WrapPromiseWithAbort(returnedPromise, onAbort);
    } else {
      return null;
    }
  };

  var _extend = function () {
    var args = Array.prototype.slice.call(arguments);
    var target = args[0];
    var objects = args.slice(1);
    target = target || {};
    objects.forEach(function (object) {
      for (var j in object) {
        if (object.hasOwnProperty(j)) {
          target[j] = object[j];
        }
      }
    });
    return target;
  };

  var _buildUrl = function (url, parameters) {
    var qs = '';
    for (var key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        var value = parameters[key];
        qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
      }
    }
    if (qs.length > 0) {
      // chop off last '&'
      qs = qs.substring(0, qs.length - 1);
      url = url + '?' + qs;
    }
    return url;
  };

  var _performRequest = function (requestData, callback) {
    var req = new XMLHttpRequest();

    var promiseFunction = function (resolve, reject) {
      function success(data) {
        if (resolve) {
          resolve(data);
        }
        if (callback) {
          callback(null, data);
        }
      }

      function failure() {
        if (reject) {
          reject(req);
        }
        if (callback) {
          callback(req, null);
        }
      }

      var type = requestData.type || 'GET';
      req.open(type, _buildUrl(requestData.url, requestData.params));
      if (_accessToken) {
        req.setRequestHeader('Authorization', 'Bearer ' + _accessToken);
      }
      if (requestData.contentType) {
        req.setRequestHeader('Content-Type', requestData.contentType);
      }

      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          var data = null;
          try {
            data = req.responseText ? JSON.parse(req.responseText) : '';
          } catch (e) {
            console.error(e);
          }

          if (req.status >= 200 && req.status < 300) {
            success(data);
          } else {
            failure();
          }
        }
      };

      if (type === 'GET') {
        req.send(null);
      } else {
        var postData = null;
        if (requestData.postData) {
          postData =
            requestData.contentType === 'image/jpeg'
              ? requestData.postData
              : JSON.stringify(requestData.postData);
        }
        req.send(postData);
      }
    };

    if (callback) {
      promiseFunction();
      return null;
    } else {
      return _promiseProvider(promiseFunction, function () {
        req.abort();
      });
    }
  };

  var _checkParamsAndPerformRequest = function (
    requestData,
    options,
    callback,
    optionsAlwaysExtendParams
  ) {
    var opt = {};
    var cb = null;

    if (typeof options === 'object') {
      opt = options;
      cb = callback;
    } else if (typeof options === 'function') {
      cb = options;
    }

    // options extend postData, if any. Otherwise they extend parameters sent in the url
    var type = requestData.type || 'GET';
    if (type !== 'GET' && requestData.postData && !optionsAlwaysExtendParams) {
      requestData.postData = _extend(requestData.postData, opt);
    } else {
      requestData.params = _extend(requestData.params, opt);
    }
    return _performRequest(requestData, cb);
  };

  /**
   * Creates an instance of the wrapper
   * @constructor
   */
  var Constr = function () {};

  Constr.prototype = {
    constructor: SpotifyWebApi
  };

  /**
   * Fetches a resource through a generic GET request.
   *
   * @param {string} url The URL to be fetched
   * @param {function(Object,Object)} callback An optional callback
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getGeneric = function (url, callback) {
    var requestData = {
      url: url
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Fetches information about the current user.
   * See [Get Current User's Profile](https://developer.spotify.com/web-api/get-current-users-profile/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMe = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches current user's saved tracks.
   * See [Get Current User's Saved Tracks](https://developer.spotify.com/web-api/get-users-saved-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds a list of tracks to the current user's saved tracks.
   * See [Save Tracks for Current User](https://developer.spotify.com/web-api/save-tracks-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedTracks = function (trackIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/tracks',
      type: 'PUT',
      postData: trackIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove a list of tracks from the current user's saved tracks.
   * See [Remove Tracks for Current User](https://developer.spotify.com/web-api/remove-tracks-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedTracks = function (
    trackIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/tracks',
      type: 'DELETE',
      postData: trackIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Checks if the current user's saved tracks contains a certain list of tracks.
   * See [Check Current User's Saved Tracks](https://developer.spotify.com/web-api/check-users-saved-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedTracks = function (
    trackIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/tracks/contains',
      params: { ids: trackIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of the albums saved in the current Spotify user's "Your Music" library.
   * See [Get Current User's Saved Albums](https://developer.spotify.com/web-api/get-users-saved-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedAlbums = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/albums'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Save one or more albums to the current user's "Your Music" library.
   * See [Save Albums for Current User](https://developer.spotify.com/web-api/save-albums-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedAlbums = function (albumIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/albums',
      type: 'PUT',
      postData: albumIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove one or more albums from the current user's "Your Music" library.
   * See [Remove Albums for Current User](https://developer.spotify.com/web-api/remove-albums-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedAlbums = function (
    albumIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/albums',
      type: 'DELETE',
      postData: albumIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Check if one or more albums is already saved in the current Spotify user's "Your Music" library.
   * See [Check User's Saved Albums](https://developer.spotify.com/web-api/check-users-saved-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI, it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedAlbums = function (
    albumIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/albums/contains',
      params: { ids: albumIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the current user’s top artists based on calculated affinity.
   * See [Get a User’s Top Artists](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyTopArtists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/top/artists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the current user’s top tracks based on calculated affinity.
   * See [Get a User’s Top Tracks](https://developer.spotify.com/web-api/get-users-top-artists-and-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyTopTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/top/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get tracks from the current user’s recently played tracks.
   * See [Get Current User’s Recently Played Tracks](https://developer.spotify.com/web-api/web-api-personalization-endpoints/get-recently-played/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyRecentlyPlayedTracks = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player/recently-played'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds the current user as a follower of one or more other Spotify users.
   * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'PUT',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Adds the current user as a follower of one or more artists.
   * See [Follow Artists or Users](https://developer.spotify.com/web-api/follow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'PUT',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Add the current user as a follower of one playlist.
   * See [Follow a Playlist](https://developer.spotify.com/web-api/follow-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed. For instance,
   * whether you want the playlist to be followed privately ({public: false})
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.followPlaylist = function (playlistId, options, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers',
      type: 'PUT',
      postData: {}
    };

    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Removes the current user as a follower of one or more other Spotify users.
   * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'DELETE',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Removes the current user as a follower of one or more artists.
   * See [Unfollow Artists or Users](https://developer.spotify.com/web-api/unfollow-artists-users/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/',
      type: 'DELETE',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Remove the current user as a follower of one playlist.
   * See [Unfollow a Playlist](https://developer.spotify.com/web-api/unfollow-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an empty value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.unfollowPlaylist = function (playlistId, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers',
      type: 'DELETE'
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Checks to see if the current user is following one or more other Spotify users.
   * See [Check if Current User Follows Users or Artists](https://developer.spotify.com/web-api/check-current-user-follows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the user is following the users sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.isFollowingUsers = function (userIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/contains',
      type: 'GET',
      params: {
        ids: userIds.join(','),
        type: 'user'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Checks to see if the current user is following one or more artists.
   * See [Check if Current User Follows](https://developer.spotify.com/web-api/check-current-user-follows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the user is following the artists sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.isFollowingArtists = function (artistIds, callback) {
    var requestData = {
      url: _baseUri + '/me/following/contains',
      type: 'GET',
      params: {
        ids: artistIds.join(','),
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Check to see if one or more Spotify users are following a specified playlist.
   * See [Check if Users Follow a Playlist](https://developer.spotify.com/web-api/check-user-following-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} userIds The ids of the users. If you know their Spotify URI it is easy
   * to find their user id (e.g. spotify:user:<here_is_the_user_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an array of boolean values that indicate
   * whether the users are following the playlist sent in the request.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.areFollowingPlaylist = function (
    playlistId,
    userIds,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/followers/contains',
      type: 'GET',
      params: {
        ids: userIds.join(',')
      }
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Get the current user's followed artists.
   * See [Get User's Followed Artists](https://developer.spotify.com/web-api/get-followed-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} [options] Options, being after and limit.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is an object with a paged object containing
   * artists.
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing a paging object which contains
   * artists objects. Not returned if a callback is given.
   */
  Constr.prototype.getFollowedArtists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/following',
      type: 'GET',
      params: {
        type: 'artist'
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches information about a specific user.
   * See [Get a User's Profile](https://developer.spotify.com/web-api/get-users-profile/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId The id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getUser = function (userId, options, callback) {
    var requestData = {
      url: _baseUri + '/users/' + encodeURIComponent(userId)
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of the current user's playlists.
   * See [Get a List of a User's Playlists](https://developer.spotify.com/web-api/get-list-users-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId An optional id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>). If not provided, the id of the user that granted
   * the permissions will be used.
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getUserPlaylists = function (userId, options, callback) {
    var requestData;
    if (typeof userId === 'string') {
      requestData = {
        url: _baseUri + '/users/' + encodeURIComponent(userId) + '/playlists'
      };
    } else {
      requestData = {
        url: _baseUri + '/me/playlists'
      };
      callback = options;
      options = userId;
    }
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a specific playlist.
   * See [Get a Playlist](https://developer.spotify.com/web-api/get-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylist = function (playlistId, options, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the tracks from a specific playlist.
   * See [Get a Playlist's Tracks](https://developer.spotify.com/web-api/get-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylistTracks = function (
    playlistId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Gets the current image associated with a specific playlist.
   * See [Get a Playlist Cover Image](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist-cover/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:playlist:<here_is_the_playlist_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getPlaylistCoverImage = function (playlistId, callback) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/images'
    };
    return _checkParamsAndPerformRequest(requestData, callback);
  };

  /**
   * Creates a playlist and stores it in the current user's library.
   * See [Create a Playlist](https://developer.spotify.com/web-api/create-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} userId The id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.createPlaylist = function (userId, options, callback) {
    var requestData = {
      url: _baseUri + '/users/' + encodeURIComponent(userId) + '/playlists',
      type: 'POST',
      postData: options
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Change a playlist's name and public/private state
   * See [Change a Playlist's Details](https://developer.spotify.com/web-api/change-playlist-details/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Object} data A JSON object with the data to update. E.g. {name: 'A new name', public: true}
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.changePlaylistDetails = function (
    playlistId,
    data,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId,
      type: 'PUT',
      postData: data
    };
    return _checkParamsAndPerformRequest(requestData, data, callback);
  };

  /**
   * Add tracks to a playlist.
   * See [Add Tracks to a Playlist](https://developer.spotify.com/web-api/add-tracks-to-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} uris An array of Spotify URIs for the tracks
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addTracksToPlaylist = function (
    playlistId,
    uris,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'POST',
      postData: {
        uris: uris
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback, true);
  };

  /**
   * Replace the tracks of a playlist
   * See [Replace a Playlist's Tracks](https://developer.spotify.com/web-api/replace-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<string>} uris An array of Spotify URIs for the tracks
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.replaceTracksInPlaylist = function (
    playlistId,
    uris,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'PUT',
      postData: { uris: uris }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Reorder tracks in a playlist
   * See [Reorder a Playlist’s Tracks](https://developer.spotify.com/web-api/reorder-playlists-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {number} rangeStart The position of the first track to be reordered.
   * @param {number} insertBefore The position where the tracks should be inserted. To reorder the tracks to
   * the end of the playlist, simply set insert_before to the position after the last track.
   * @param {Object} options An object with optional parameters (range_length, snapshot_id)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.reorderTracksInPlaylist = function (
    playlistId,
    rangeStart,
    insertBefore,
    options,
    callback
  ) {
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'PUT',
      postData: {
        range_start: rangeStart,
        insert_before: insertBefore
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove tracks from a playlist
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<Object>} uris An array of tracks to be removed. Each element of the array can be either a
   * string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a
   * string) and `positions` (which is an array of integers).
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylist = function (
    playlistId,
    uris,
    callback
  ) {
    var dataToBeSent = uris.map(function (uri) {
      if (typeof uri === 'string') {
        return { uri: uri };
      } else {
        return uri;
      }
    });

    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: { tracks: dataToBeSent }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Remove tracks from a playlist, specifying a snapshot id.
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<Object>} uris An array of tracks to be removed. Each element of the array can be either a
   * string, in which case it is treated as a URI, or an object containing the properties `uri` (which is a
   * string) and `positions` (which is an array of integers).
   * @param {string} snapshotId The playlist's snapshot ID against which you want to make the changes
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylistWithSnapshotId = function (
    playlistId,
    uris,
    snapshotId,
    callback
  ) {
    var dataToBeSent = uris.map(function (uri) {
      if (typeof uri === 'string') {
        return { uri: uri };
      } else {
        return uri;
      }
    });
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: {
        tracks: dataToBeSent,
        snapshot_id: snapshotId
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Remove tracks from a playlist, specifying the positions of the tracks to be removed.
   * See [Remove Tracks from a Playlist](https://developer.spotify.com/web-api/remove-tracks-playlist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {Array<number>} positions array of integers containing the positions of the tracks to remove
   * from the playlist.
   * @param {string} snapshotId The playlist's snapshot ID against which you want to make the changes
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeTracksFromPlaylistInPositions = function (
    playlistId,
    positions,
    snapshotId,
    callback
  ) {
    /* eslint-disable camelcase */
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/tracks',
      type: 'DELETE',
      postData: {
        positions: positions,
        snapshot_id: snapshotId
      }
    };
    /* eslint-enable camelcase */
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Upload a custom playlist cover image.
   * See [Upload A Custom Playlist Cover Image](https://developer.spotify.com/web-api/upload-a-custom-playlist-cover-image/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} playlistId The id of the playlist. If you know the Spotify URI it is easy
   * to find the playlist id (e.g. spotify:user:xxxx:playlist:<here_is_the_playlist_id>)
   * @param {string} imageData Base64 encoded JPEG image data, maximum payload size is 256 KB.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.uploadCustomPlaylistCoverImage = function (
    playlistId,
    imageData,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/playlists/' + playlistId + '/images',
      type: 'PUT',
      postData: imageData.replace(/^data:image\/jpeg;base64,/, ''),
      contentType: 'image/jpeg'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Fetches an album from the Spotify catalog.
   * See [Get an Album](https://developer.spotify.com/web-api/get-album/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} albumId The id of the album. If you know the Spotify URI it is easy
   * to find the album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbum = function (albumId, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/' + albumId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the tracks of an album from the Spotify catalog.
   * See [Get an Album's Tracks](https://developer.spotify.com/web-api/get-albums-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} albumId The id of the album. If you know the Spotify URI it is easy
   * to find the album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbumTracks = function (albumId, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/' + albumId + '/tracks'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple albums from the Spotify catalog.
   * See [Get Several Albums](https://developer.spotify.com/web-api/get-several-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} albumIds The ids of the albums. If you know their Spotify URI it is easy
   * to find their album id (e.g. spotify:album:<here_is_the_album_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAlbums = function (albumIds, options, callback) {
    var requestData = {
      url: _baseUri + '/albums/',
      params: { ids: albumIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a track from the Spotify catalog.
   * See [Get a Track](https://developer.spotify.com/web-api/get-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getTrack = function (trackId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/tracks/' + trackId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple tracks from the Spotify catalog.
   * See [Get Several Tracks](https://developer.spotify.com/web-api/get-several-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getTracks = function (trackIds, options, callback) {
    var requestData = {
      url: _baseUri + '/tracks/',
      params: { ids: trackIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches an artist from the Spotify catalog.
   * See [Get an Artist](https://developer.spotify.com/web-api/get-artist/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtist = function (artistId, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple artists from the Spotify catalog.
   * See [Get Several Artists](https://developer.spotify.com/web-api/get-several-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} artistIds The ids of the artists. If you know their Spotify URI it is easy
   * to find their artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtists = function (artistIds, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/',
      params: { ids: artistIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the albums of an artist from the Spotify catalog.
   * See [Get an Artist's Albums](https://developer.spotify.com/web-api/get-artists-albums/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistAlbums = function (artistId, options, callback) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/albums'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of top tracks of an artist from the Spotify catalog, for a specific country.
   * See [Get an Artist's Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {string} countryId The id of the country (e.g. ES for Spain or US for United States)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistTopTracks = function (
    artistId,
    countryId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/top-tracks',
      params: { country: countryId }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of artists related with a given one from the Spotify catalog.
   * See [Get an Artist's Related Artists](https://developer.spotify.com/web-api/get-related-artists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} artistId The id of the artist. If you know the Spotify URI it is easy
   * to find the artist id (e.g. spotify:artist:<here_is_the_artist_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getArtistRelatedArtists = function (
    artistId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/artists/' + artistId + '/related-artists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of Spotify featured playlists (shown, for example, on a Spotify player's "Browse" tab).
   * See [Get a List of Featured Playlists](https://developer.spotify.com/web-api/get-list-featured-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getFeaturedPlaylists = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/featured-playlists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a list of new album releases featured in Spotify (shown, for example, on a Spotify player's "Browse" tab).
   * See [Get a List of New Releases](https://developer.spotify.com/web-api/get-list-new-releases/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getNewReleases = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/new-releases'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   * See [Get a List of Categories](https://developer.spotify.com/web-api/get-list-categories/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategories = function (options, callback) {
    var requestData = {
      url: _baseUri + '/browse/categories'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a single category used to tag items in Spotify (on, for example, the Spotify player's "Browse" tab).
   * See [Get a Category](https://developer.spotify.com/web-api/get-category/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} categoryId The id of the category. These can be found with the getCategories function
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategory = function (categoryId, options, callback) {
    var requestData = {
      url: _baseUri + '/browse/categories/' + categoryId
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get a list of Spotify playlists tagged with a particular category.
   * See [Get a Category's Playlists](https://developer.spotify.com/web-api/get-categorys-playlists/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} categoryId The id of the category. These can be found with the getCategories function
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getCategoryPlaylists = function (
    categoryId,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/browse/categories/' + categoryId + '/playlists'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Array<string>} types An array of item types to search across.
   * Valid types are: 'album', 'artist', 'playlist', and 'track'.
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.search = function (query, types, options, callback) {
    var requestData = {
      url: _baseUri + '/search/',
      params: {
        q: query,
        type: types.join(',')
      }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches albums from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchAlbums = function (query, options, callback) {
    return this.search(query, ['album'], options, callback);
  };

  /**
   * Fetches artists from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchArtists = function (query, options, callback) {
    return this.search(query, ['artist'], options, callback);
  };

  /**
   * Fetches tracks from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchTracks = function (query, options, callback) {
    return this.search(query, ['track'], options, callback);
  };

  /**
   * Fetches playlists from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchPlaylists = function (query, options, callback) {
    return this.search(query, ['playlist'], options, callback);
  };

  /**
   * Fetches shows from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchShows = function (query, options, callback) {
    return this.search(query, ['show'], options, callback);
  };

  /**
   * Fetches episodes from the Spotify catalog according to a query.
   * See [Search for an Item](https://developer.spotify.com/web-api/search-item/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} query The search query
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.searchEpisodes = function (query, options, callback) {
    return this.search(query, ['episode'], options, callback);
  };

  /**
   * Get audio features for a single track identified by its unique Spotify ID.
   * See [Get Audio Features for a Track](https://developer.spotify.com/web-api/get-audio-features/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioFeaturesForTrack = function (trackId, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/audio-features/' + trackId;
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get audio features for multiple tracks based on their Spotify IDs.
   * See [Get Audio Features for Several Tracks](https://developer.spotify.com/web-api/get-several-audio-features/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} trackIds The ids of the tracks. If you know their Spotify URI it is easy
   * to find their track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioFeaturesForTracks = function (trackIds, callback) {
    var requestData = {
      url: _baseUri + '/audio-features',
      params: { ids: trackIds }
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get audio analysis for a single track identified by its unique Spotify ID.
   * See [Get Audio Analysis for a Track](https://developer.spotify.com/web-api/get-audio-analysis/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} trackId The id of the track. If you know the Spotify URI it is easy
   * to find the track id (e.g. spotify:track:<here_is_the_track_id>)
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAudioAnalysisForTrack = function (trackId, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/audio-analysis/' + trackId;
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Create a playlist-style listening experience based on seed artists, tracks and genres.
   * See [Get Recommendations Based on Seeds](https://developer.spotify.com/web-api/get-recommendations/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getRecommendations = function (options, callback) {
    var requestData = {
      url: _baseUri + '/recommendations'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Retrieve a list of available genres seed parameter values for recommendations.
   * See [Available Genre Seeds](https://developer.spotify.com/web-api/get-recommendations/#available-genre-seeds) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getAvailableGenreSeeds = function (callback) {
    var requestData = {
      url: _baseUri + '/recommendations/available-genre-seeds'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get information about a user’s available devices.
   * See [Get a User’s Available Devices](https://developer.spotify.com/web-api/get-a-users-available-devices/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyDevices = function (callback) {
    var requestData = {
      url: _baseUri + '/me/player/devices'
    };
    return _checkParamsAndPerformRequest(requestData, {}, callback);
  };

  /**
   * Get information about the user’s current playback state, including track, track progress, and active device.
   * See [Get Information About The User’s Current Playback](https://developer.spotify.com/web-api/get-information-about-the-users-current-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyCurrentPlaybackState = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Get the object currently being played on the user’s Spotify account.
   * See [Get the User’s Currently Playing Track](https://developer.spotify.com/web-api/get-the-users-currently-playing-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMyCurrentPlayingTrack = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/player/currently-playing'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Transfer playback to a new device and determine if it should start playing.
   * See [Transfer a User’s Playback](https://developer.spotify.com/web-api/transfer-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} deviceIds A JSON array containing the ID of the device on which playback should be started/transferred.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.transferMyPlayback = function (
    deviceIds,
    options,
    callback
  ) {
    var postData = options || {};
    postData.device_ids = deviceIds;
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player',
      postData: postData
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Play a track on the user's active device
   * See [Start/Resume a User's Playback](https://developer.spotify.com/documentation/web-api/reference/player/start-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.play = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var postData = {};
    ['context_uri', 'uris', 'offset', 'position_ms'].forEach(function (field) {
      if (field in options) {
        postData[field] = options[field];
      }
    });
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/play',
      params: params,
      postData: postData
    };

    // need to clear options so it doesn't add all of them to the query params
    var newOptions = typeof options === 'function' ? options : {};
    return _checkParamsAndPerformRequest(requestData, newOptions, callback);
  };

  /**
   * Add an item to the end of the user’s current playback queue.
   * See [Add an Item to the User's Playback Queue](https://developer.spotify.com/documentation/web-api/reference/player/add-to-queue/) on
   * the Spotify Developer site for more information about the endpoint.
   * @param {string} uri The uri of the item to add to the queue. Must be a track or an episode uri.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.queue = function (uri, options, callback) {
    options = options || {};
    var params =
      'device_id' in options
        ? { uri: uri, device_id: options.device_id }
        : { uri: uri };
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/queue',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Pause playback on the user’s account.
   * See [Pause a User’s Playback](https://developer.spotify.com/web-api/pause-a-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.pause = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/pause',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Skips to next track in the user’s queue.
   * See [Skip User’s Playback To Next Track](https://developer.spotify.com/web-api/skip-users-playback-to-next-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.skipToNext = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/next',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Skips to previous track in the user’s queue.
   * Note that this will ALWAYS skip to the previous track, regardless of the current track’s progress.
   * Returning to the start of the current track should be performed using `.seek()`
   * See [Skip User’s Playback To Previous Track](https://developer.spotify.com/web-api/skip-users-playback-to-next-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.skipToPrevious = function (options, callback) {
    options = options || {};
    var params =
      'device_id' in options ? { device_id: options.device_id } : null;
    var requestData = {
      type: 'POST',
      url: _baseUri + '/me/player/previous',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Seeks to the given position in the user’s currently playing track.
   * See [Seek To Position In Currently Playing Track](https://developer.spotify.com/web-api/seek-to-position-in-currently-playing-track/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {number} position_ms The position in milliseconds to seek to. Must be a positive number.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.seek = function (position_ms, options, callback) {
    options = options || {};
    var params = {
      position_ms: position_ms
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/seek',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Set the repeat mode for the user’s playback. Options are repeat-track, repeat-context, and off.
   * See [Set Repeat Mode On User’s Playback](https://developer.spotify.com/web-api/set-repeat-mode-on-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {String} state A string set to 'track', 'context' or 'off'.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setRepeat = function (state, options, callback) {
    options = options || {};
    var params = {
      state: state
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/repeat',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Set the volume for the user’s current playback device.
   * See [Set Volume For User’s Playback](https://developer.spotify.com/web-api/set-volume-for-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {number} volume_percent The volume to set. Must be a value from 0 to 100 inclusive.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setVolume = function (volume_percent, options, callback) {
    options = options || {};
    var params = {
      volume_percent: volume_percent
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/volume',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Toggle shuffle on or off for user’s playback.
   * See [Toggle Shuffle For User’s Playback](https://developer.spotify.com/web-api/toggle-shuffle-for-users-playback/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {bool} state Whether or not to shuffle user's playback.
   * @param {Object} options A JSON object with options that can be passed.
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.setShuffle = function (state, options, callback) {
    options = options || {};
    var params = {
      state: state
    };
    if ('device_id' in options) {
      params.device_id = options.device_id;
    }
    var requestData = {
      type: 'PUT',
      url: _baseUri + '/me/player/shuffle',
      params: params
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches a show from the Spotify catalog.
   * See [Get a Show](https://developer.spotify.com/documentation/web-api/reference/shows/get-a-show/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} showId The id of the show. If you know the Spotify URI it is easy
   * to find the show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShow = function (showId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/shows/' + showId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple shows from the Spotify catalog.
   * See [Get Several Shows](https://developer.spotify.com/documentation/web-api/reference/shows/get-several-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShows = function (showIds, options, callback) {
    var requestData = {
      url: _baseUri + '/shows/',
      params: { ids: showIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches current user's saved shows.
   * See [Get Current User's Saved Shows](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getMySavedShows = function (options, callback) {
    var requestData = {
      url: _baseUri + '/me/shows'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Adds a list of shows to the current user's saved shows.
   * See [Save Shows for Current User](https://developer.spotify.com/documentation/web-api/reference/library/save-shows-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.addToMySavedShows = function (showIds, options, callback) {
    var requestData = {
      url: _baseUri + '/me/shows',
      type: 'PUT',
      postData: showIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Remove a list of shows from the current user's saved shows.
   * See [Remove Shows for Current User](https://developer.spotify.com/documentation/web-api/reference/library/remove-shows-user/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.removeFromMySavedShows = function (
    showIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/shows',
      type: 'DELETE',
      postData: showIds
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Checks if the current user's saved shows contains a certain list of shows.
   * See [Check Current User's Saved Shows](https://developer.spotify.com/documentation/web-api/reference/library/check-users-saved-shows/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} showIds The ids of the shows. If you know their Spotify URI it is easy
   * to find their show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.containsMySavedShows = function (
    showIds,
    options,
    callback
  ) {
    var requestData = {
      url: _baseUri + '/me/shows/contains',
      params: { ids: showIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches the episodes of a show from the Spotify catalog.
   * See [Get a Show's Episodes](https://developer.spotify.com/documentation/web-api/reference/shows/get-shows-episodes/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} showId The id of the show. If you know the Spotify URI it is easy
   * to find the show id (e.g. spotify:show:<here_is_the_show_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getShowEpisodes = function (showId, options, callback) {
    var requestData = {
      url: _baseUri + '/shows/' + showId + '/episodes'
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches an episode from the Spotify catalog.
   * See [Get an Episode](https://developer.spotify.com/documentation/web-api/reference/episodes/get-an-episode/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {string} episodeId The id of the episode. If you know the Spotify URI it is easy
   * to find the episode id (e.g. spotify:episode:<here_is_the_episode_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getEpisode = function (episodeId, options, callback) {
    var requestData = {};
    requestData.url = _baseUri + '/episodes/' + episodeId;
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Fetches multiple episodes from the Spotify catalog.
   * See [Get Several Episodes](https://developer.spotify.com/documentation/web-api/reference/episodes/get-several-episodes/) on
   * the Spotify Developer site for more information about the endpoint.
   *
   * @param {Array<string>} episodeIds The ids of the episodes. If you know their Spotify URI it is easy
   * to find their episode id (e.g. spotify:episode:<here_is_the_episode_id>)
   * @param {Object} options A JSON object with options that can be passed
   * @param {function(Object,Object)} callback An optional callback that receives 2 parameters. The first
   * one is the error object (null if no error), and the second is the value if the request succeeded.
   * @return {Object} Null if a callback is provided, a `Promise` object otherwise
   */
  Constr.prototype.getEpisodes = function (episodeIds, options, callback) {
    var requestData = {
      url: _baseUri + '/episodes/',
      params: { ids: episodeIds.join(',') }
    };
    return _checkParamsAndPerformRequest(requestData, options, callback);
  };

  /**
   * Gets the access token in use.
   *
   * @return {string} accessToken The access token
   */
  Constr.prototype.getAccessToken = function () {
    return _accessToken;
  };

  /**
   * Sets the access token to be used.
   * See [the Authorization Guide](https://developer.spotify.com/web-api/authorization-guide/) on
   * the Spotify Developer site for more information about obtaining an access token.
   *
   * @param {string} accessToken The access token
   * @return {void}
   */
  Constr.prototype.setAccessToken = function (accessToken) {
    _accessToken = accessToken;
  };

  /**
   * Sets an implementation of Promises/A+ to be used. E.g. Q, when.
   * See [Conformant Implementations](https://github.com/promises-aplus/promises-spec/blob/master/implementations.md)
   * for a list of some available options
   *
   * @param {Object} PromiseImplementation A Promises/A+ valid implementation
   * @throws {Error} If the implementation being set doesn't conform with Promises/A+
   * @return {void}
   */
  Constr.prototype.setPromiseImplementation = function (PromiseImplementation) {
    var valid = false;
    try {
      var p = new PromiseImplementation(function (resolve) {
        resolve();
      });
      if (typeof p.then === 'function' && typeof p.catch === 'function') {
        valid = true;
      }
    } catch (e) {
      console.error(e);
    }
    if (valid) {
      _promiseImplementation = PromiseImplementation;
    } else {
      throw new Error('Unsupported implementation of Promises/A+');
    }
  };

  return Constr;
})();

if ( true && typeof module.exports === 'object') {
  module.exports = SpotifyWebApi;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_spotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/spotify */ "./components/spotify.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/player */ "./components/player.js");
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");



var _this = undefined,
    _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var spotify = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6___default.a();

var LandingPage = function LandingPage() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_8__["DataContext"]),
      _useContext$ = _useContext[0],
      user = _useContext$.user,
      token = _useContext$.token,
      dispatch = _useContext[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _token = Object(_components_spotify__WEBPACK_IMPORTED_MODULE_5__["getToken"])();

    if (_token) {
      // set token in state
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      }); // clear the token from the url

      window.location.hash = ""; // authenticate using this token 

      var authenticate = /*#__PURE__*/function () {
        var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var user;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  spotify.setAccessToken(_token);
                  _context.next = 3;
                  return spotify.getMe();

                case 3:
                  user = _context.sent;
                  // dispatch an action
                  dispatch({
                    type: 'SET_USER',
                    user: user
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function authenticate() {
          return _ref.apply(this, arguments);
        };
      }();

      authenticate();
    }
  }, [user, token]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, token ? __jsx(_components_player__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_components_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })));
};

_s(LandingPage, "TbhkHnxhqJwXfGrB7tUnLfVd8+U=");

_c = LandingPage;
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=E%3A%5CLinux%5CreactApp21%5Cspotify-clone%5Cpages%5Cindex.js!./","webpack","styles"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3BvdGlmeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Nwb3RpZnktd2ViLWFwaS1qcy9zcmMvc3BvdGlmeS13ZWItYXBpLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uc29sZSIsImxvZyIsImxvZ2luVXJsIiwiUGxheWVyIiwiYXV0aEVuZHBvaW50IiwicmVkaXJlY3RVcmkiLCJjbGllbnRJZCIsInNjb3BlcyIsImdldFRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJqb2luIiwiRGF0YUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YUNvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJzcG90aWZ5IiwiU3BvdGlmeVdlYkFwaSIsIkxhbmRpbmdQYWdlIiwidXNlQ29udGV4dCIsInVzZXIiLCJ0b2tlbiIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiX3Rva2VuIiwidHlwZSIsImF1dGhlbnRpY2F0ZSIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDaEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxpREFBWjtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsV0FBVDtBQUFxQixPQUFHLEVBQUMsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBRyxRQUFJLEVBQUVBLGlEQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosQ0FESjtBQU1ILENBUkQ7O0tBQU1ILEs7QUFVU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOE1BQThNOztBQUU5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDs7QUFFbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEseUNBQXlDOztBQUV6QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBEO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDdjNEYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxpRkFBNEI7QUFDdkQ7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzN1QkE7QUFDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHdCQUF3QjtBQUNyQyxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGFBQWEsT0FBTztBQUNwQiw4REFBOEQsY0FBYztBQUM1RSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNB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QSx3QkFBWk0sWUFBWTtBQUFBO0FBQUE7QUFBQSxTQUFsQjs7QUFTQUEsa0JBQVk7QUFDZjtBQUNKLEdBdEJRLEVBc0JOLENBQUNOLElBQUQsRUFBT0MsS0FBUCxDQXRCTSxDQUFUO0FBd0JBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLEdBQ0YsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREUsR0FHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKUixDQURKO0FBV0gsQ0F2Q0Q7O0dBQU1ILFc7O0tBQUFBLFc7QUF5Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9sb2dpbi5jc3MnO1xyXG5pbXBvcnQgeyBsb2dpblVybCB9IGZyb20gJy4vc3BvdGlmeSc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2luVXJsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9Mb2dvLnBuZ1wiIGFsdD1cIkxvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9naW5Vcmx9PkxPR0lOIFdJVEggU1BPVElGWTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUGxheWVyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiZXhwb3J0IGNvbnN0IGF1dGhFbmRwb2ludCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9lbi9hdXRob3JpemVcIjtcclxuY29uc3QgcmVkaXJlY3RVcmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcclxuY29uc3QgY2xpZW50SWQgPSBcIjM3OWExODc5NGVlZDQxMmE4Mzk0NmQxMWExNmZiNDYzXCI7XHJcbmNvbnN0IHNjb3BlcyA9IFtcclxuICAgIFwidXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXHJcbiAgICBcInVzZXItcmVhZC1yZWNlbnRseS1wbGF5ZWRcIixcclxuICAgIFwidXNlci1yZWFkLXBsYXliYWNrLXN0YXRlXCIsXHJcbiAgICBcInVzZXItdG9wLXJlYWRcIixcclxuICAgIFwidXNlci1tb2RpZnktcGxheWJhY2stc3RhdGVcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgLy8gZ29lcyB0byB0aGUgaGFzaCBpbiB0aGUgY3VycmVudCB1cmwgXHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyYnKVswXS5zcGxpdChcIj1cIilbMV07XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXJsID0gYCR7YXV0aEVuZHBvaW50fT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPSR7cmVkaXJlY3RVcml9JnNjb3BlPSR7c2NvcGVzLmpvaW4oXCIlMjBcIil9JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2hvd19kaWFsb2c9dHJ1ZWA7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0UHJvdmlkZXIgPSAoeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIsIGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRQcm92aWRlcjtcclxuXHJcblxyXG5cclxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRTpcXFxcTGludXhcXFxccmVhY3RBcHAyMVxcXFxzcG90aWZ5LWNsb25lXFxcXHBhZ2VzXFxcXGluZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjEzLjEnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyogZ2xvYmFsIG1vZHVsZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgQVBJXG4gKi9cbnZhciBTcG90aWZ5V2ViQXBpID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9iYXNlVXJpID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxJztcbiAgdmFyIF9hY2Nlc3NUb2tlbiA9IG51bGw7XG4gIHZhciBfcHJvbWlzZUltcGxlbWVudGF0aW9uID0gbnVsbDtcblxuICB2YXIgV3JhcFByb21pc2VXaXRoQWJvcnQgPSBmdW5jdGlvbiAocHJvbWlzZSwgb25BYm9ydCkge1xuICAgIHByb21pc2UuYWJvcnQgPSBvbkFib3J0O1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIHZhciBfcHJvbWlzZVByb3ZpZGVyID0gZnVuY3Rpb24gKHByb21pc2VGdW5jdGlvbiwgb25BYm9ydCkge1xuICAgIHZhciByZXR1cm5lZFByb21pc2U7XG4gICAgaWYgKF9wcm9taXNlSW1wbGVtZW50YXRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhciBkZWZlcnJlZCA9IF9wcm9taXNlSW1wbGVtZW50YXRpb24uZGVmZXIoKTtcbiAgICAgIHByb21pc2VGdW5jdGlvbihcbiAgICAgICAgZnVuY3Rpb24gKHJlc29sdmVkUmVzdWx0KSB7XG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNvbHZlZFJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChyZWplY3RlZFJlc3VsdCkge1xuICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZWplY3RlZFJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm5lZFByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod2luZG93LlByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuZWRQcm9taXNlID0gbmV3IHdpbmRvdy5Qcm9taXNlKHByb21pc2VGdW5jdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJldHVybmVkUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIG5ldyBXcmFwUHJvbWlzZVdpdGhBYm9ydChyZXR1cm5lZFByb21pc2UsIG9uQWJvcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIF9leHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciB0YXJnZXQgPSBhcmdzWzBdO1xuICAgIHZhciBvYmplY3RzID0gYXJncy5zbGljZSgxKTtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG4gICAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGZvciAodmFyIGogaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICB0YXJnZXRbal0gPSBvYmplY3Rbal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHZhciBfYnVpbGRVcmwgPSBmdW5jdGlvbiAodXJsLCBwYXJhbWV0ZXJzKSB7XG4gICAgdmFyIHFzID0gJyc7XG4gICAgZm9yICh2YXIga2V5IGluIHBhcmFtZXRlcnMpIHtcbiAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1ldGVyc1trZXldO1xuICAgICAgICBxcyArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgKyAnJic7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChxcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBjaG9wIG9mZiBsYXN0ICcmJ1xuICAgICAgcXMgPSBxcy5zdWJzdHJpbmcoMCwgcXMubGVuZ3RoIC0gMSk7XG4gICAgICB1cmwgPSB1cmwgKyAnPycgKyBxcztcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfTtcblxuICB2YXIgX3BlcmZvcm1SZXF1ZXN0ID0gZnVuY3Rpb24gKHJlcXVlc3REYXRhLCBjYWxsYmFjaykge1xuICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHZhciBwcm9taXNlRnVuY3Rpb24gPSBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGZhaWx1cmUoKSB7XG4gICAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgICByZWplY3QocmVxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXEsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlID0gcmVxdWVzdERhdGEudHlwZSB8fCAnR0VUJztcbiAgICAgIHJlcS5vcGVuKHR5cGUsIF9idWlsZFVybChyZXF1ZXN0RGF0YS51cmwsIHJlcXVlc3REYXRhLnBhcmFtcykpO1xuICAgICAgaWYgKF9hY2Nlc3NUb2tlbikge1xuICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIF9hY2Nlc3NUb2tlbik7XG4gICAgICB9XG4gICAgICBpZiAocmVxdWVzdERhdGEuY29udGVudFR5cGUpIHtcbiAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIHJlcXVlc3REYXRhLmNvbnRlbnRUeXBlKTtcbiAgICAgIH1cblxuICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSBudWxsO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gcmVxLnJlc3BvbnNlVGV4dCA/IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkgOiAnJztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXEuc3RhdHVzID49IDIwMCAmJiByZXEuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWlsdXJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ0dFVCcpIHtcbiAgICAgICAgcmVxLnNlbmQobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcG9zdERhdGEgPSBudWxsO1xuICAgICAgICBpZiAocmVxdWVzdERhdGEucG9zdERhdGEpIHtcbiAgICAgICAgICBwb3N0RGF0YSA9XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5jb250ZW50VHlwZSA9PT0gJ2ltYWdlL2pwZWcnXG4gICAgICAgICAgICAgID8gcmVxdWVzdERhdGEucG9zdERhdGFcbiAgICAgICAgICAgICAgOiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0RGF0YS5wb3N0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxLnNlbmQocG9zdERhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHByb21pc2VGdW5jdGlvbigpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcHJvbWlzZVByb3ZpZGVyKHByb21pc2VGdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXEuYWJvcnQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbiAoXG4gICAgcmVxdWVzdERhdGEsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFjayxcbiAgICBvcHRpb25zQWx3YXlzRXh0ZW5kUGFyYW1zXG4gICkge1xuICAgIHZhciBvcHQgPSB7fTtcbiAgICB2YXIgY2IgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0ID0gb3B0aW9ucztcbiAgICAgIGNiID0gY2FsbGJhY2s7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIC8vIG9wdGlvbnMgZXh0ZW5kIHBvc3REYXRhLCBpZiBhbnkuIE90aGVyd2lzZSB0aGV5IGV4dGVuZCBwYXJhbWV0ZXJzIHNlbnQgaW4gdGhlIHVybFxuICAgIHZhciB0eXBlID0gcmVxdWVzdERhdGEudHlwZSB8fCAnR0VUJztcbiAgICBpZiAodHlwZSAhPT0gJ0dFVCcgJiYgcmVxdWVzdERhdGEucG9zdERhdGEgJiYgIW9wdGlvbnNBbHdheXNFeHRlbmRQYXJhbXMpIHtcbiAgICAgIHJlcXVlc3REYXRhLnBvc3REYXRhID0gX2V4dGVuZChyZXF1ZXN0RGF0YS5wb3N0RGF0YSwgb3B0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVxdWVzdERhdGEucGFyYW1zID0gX2V4dGVuZChyZXF1ZXN0RGF0YS5wYXJhbXMsIG9wdCk7XG4gICAgfVxuICAgIHJldHVybiBfcGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNiKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgd3JhcHBlclxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHZhciBDb25zdHIgPSBmdW5jdGlvbiAoKSB7fTtcblxuICBDb25zdHIucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBTcG90aWZ5V2ViQXBpXG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSByZXNvdXJjZSB0aHJvdWdoIGEgZ2VuZXJpYyBHRVQgcmVxdWVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIGZldGNoZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2tcbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0R2VuZXJpYyA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiB1cmxcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHVzZXIuXG4gICAqIFNlZSBbR2V0IEN1cnJlbnQgVXNlcidzIFByb2ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWN1cnJlbnQtdXNlcnMtcHJvZmlsZS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRNZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgY3VycmVudCB1c2VyJ3Mgc2F2ZWQgdHJhY2tzLlxuICAgKiBTZWUgW0dldCBDdXJyZW50IFVzZXIncyBTYXZlZCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXVzZXJzLXNhdmVkLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRNeVNhdmVkVHJhY2tzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvdHJhY2tzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0IG9mIHRyYWNrcyB0byB0aGUgY3VycmVudCB1c2VyJ3Mgc2F2ZWQgdHJhY2tzLlxuICAgKiBTZWUgW1NhdmUgVHJhY2tzIGZvciBDdXJyZW50IFVzZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2F2ZS10cmFja3MtdXNlci8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB0cmFja0lkcyBUaGUgaWRzIG9mIHRoZSB0cmFja3MuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB0cmFjayBpZCAoZS5nLiBzcG90aWZ5OnRyYWNrOjxoZXJlX2lzX3RoZV90cmFja19pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuYWRkVG9NeVNhdmVkVHJhY2tzID0gZnVuY3Rpb24gKHRyYWNrSWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3RyYWNrcycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBvc3REYXRhOiB0cmFja0lkc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGxpc3Qgb2YgdHJhY2tzIGZyb20gdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHRyYWNrcy5cbiAgICogU2VlIFtSZW1vdmUgVHJhY2tzIGZvciBDdXJyZW50IFVzZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVtb3ZlLXRyYWNrcy11c2VyLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHRyYWNrSWRzIFRoZSBpZHMgb2YgdGhlIHRyYWNrcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5yZW1vdmVGcm9tTXlTYXZlZFRyYWNrcyA9IGZ1bmN0aW9uIChcbiAgICB0cmFja0lkcyxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3RyYWNrcycsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHBvc3REYXRhOiB0cmFja0lkc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB1c2VyJ3Mgc2F2ZWQgdHJhY2tzIGNvbnRhaW5zIGEgY2VydGFpbiBsaXN0IG9mIHRyYWNrcy5cbiAgICogU2VlIFtDaGVjayBDdXJyZW50IFVzZXIncyBTYXZlZCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvY2hlY2stdXNlcnMtc2F2ZWQtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHRyYWNrSWRzIFRoZSBpZHMgb2YgdGhlIHRyYWNrcy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5jb250YWluc015U2F2ZWRUcmFja3MgPSBmdW5jdGlvbiAoXG4gICAgdHJhY2tJZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS90cmFja3MvY29udGFpbnMnLFxuICAgICAgcGFyYW1zOiB7IGlkczogdHJhY2tJZHMuam9pbignLCcpIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIHRoZSBhbGJ1bXMgc2F2ZWQgaW4gdGhlIGN1cnJlbnQgU3BvdGlmeSB1c2VyJ3MgXCJZb3VyIE11c2ljXCIgbGlicmFyeS5cbiAgICogU2VlIFtHZXQgQ3VycmVudCBVc2VyJ3MgU2F2ZWQgQWxidW1zXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC11c2Vycy1zYXZlZC1hbGJ1bXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlTYXZlZEFsYnVtcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2FsYnVtcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTYXZlIG9uZSBvciBtb3JlIGFsYnVtcyB0byB0aGUgY3VycmVudCB1c2VyJ3MgXCJZb3VyIE11c2ljXCIgbGlicmFyeS5cbiAgICogU2VlIFtTYXZlIEFsYnVtcyBmb3IgQ3VycmVudCBVc2VyXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NhdmUtYWxidW1zLXVzZXIvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYWxidW1JZHMgVGhlIGlkcyBvZiB0aGUgYWxidW1zLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSwgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFsYnVtIGlkIChlLmcuIHNwb3RpZnk6YWxidW06PGhlcmVfaXNfdGhlX2FsYnVtX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5hZGRUb015U2F2ZWRBbGJ1bXMgPSBmdW5jdGlvbiAoYWxidW1JZHMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvYWxidW1zJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IGFsYnVtSWRzXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIG9uZSBvciBtb3JlIGFsYnVtcyBmcm9tIHRoZSBjdXJyZW50IHVzZXIncyBcIllvdXIgTXVzaWNcIiBsaWJyYXJ5LlxuICAgKiBTZWUgW1JlbW92ZSBBbGJ1bXMgZm9yIEN1cnJlbnQgVXNlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9yZW1vdmUtYWxidW1zLXVzZXIvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYWxidW1JZHMgVGhlIGlkcyBvZiB0aGUgYWxidW1zLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSwgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFsYnVtIGlkIChlLmcuIHNwb3RpZnk6YWxidW06PGhlcmVfaXNfdGhlX2FsYnVtX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5yZW1vdmVGcm9tTXlTYXZlZEFsYnVtcyA9IGZ1bmN0aW9uIChcbiAgICBhbGJ1bUlkcyxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2FsYnVtcycsXG4gICAgICB0eXBlOiAnREVMRVRFJyxcbiAgICAgIHBvc3REYXRhOiBhbGJ1bUlkc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIG9uZSBvciBtb3JlIGFsYnVtcyBpcyBhbHJlYWR5IHNhdmVkIGluIHRoZSBjdXJyZW50IFNwb3RpZnkgdXNlcidzIFwiWW91ciBNdXNpY1wiIGxpYnJhcnkuXG4gICAqIFNlZSBbQ2hlY2sgVXNlcidzIFNhdmVkIEFsYnVtc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9jaGVjay11c2Vycy1zYXZlZC1hbGJ1bXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYWxidW1JZHMgVGhlIGlkcyBvZiB0aGUgYWxidW1zLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSwgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFsYnVtIGlkIChlLmcuIHNwb3RpZnk6YWxidW06PGhlcmVfaXNfdGhlX2FsYnVtX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5jb250YWluc015U2F2ZWRBbGJ1bXMgPSBmdW5jdGlvbiAoXG4gICAgYWxidW1JZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9hbGJ1bXMvY29udGFpbnMnLFxuICAgICAgcGFyYW1zOiB7IGlkczogYWxidW1JZHMuam9pbignLCcpIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdXNlcuKAmXMgdG9wIGFydGlzdHMgYmFzZWQgb24gY2FsY3VsYXRlZCBhZmZpbml0eS5cbiAgICogU2VlIFtHZXQgYSBVc2Vy4oCZcyBUb3AgQXJ0aXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtdXNlcnMtdG9wLWFydGlzdHMtYW5kLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRNeVRvcEFydGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS90b3AvYXJ0aXN0cydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdXNlcuKAmXMgdG9wIHRyYWNrcyBiYXNlZCBvbiBjYWxjdWxhdGVkIGFmZmluaXR5LlxuICAgKiBTZWUgW0dldCBhIFVzZXLigJlzIFRvcCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXVzZXJzLXRvcC1hcnRpc3RzLWFuZC10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlUb3BUcmFja3MgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS90b3AvdHJhY2tzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0cmFja3MgZnJvbSB0aGUgY3VycmVudCB1c2Vy4oCZcyByZWNlbnRseSBwbGF5ZWQgdHJhY2tzLlxuICAgKiBTZWUgW0dldCBDdXJyZW50IFVzZXLigJlzIFJlY2VudGx5IFBsYXllZCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvd2ViLWFwaS1wZXJzb25hbGl6YXRpb24tZW5kcG9pbnRzL2dldC1yZWNlbnRseS1wbGF5ZWQvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlSZWNlbnRseVBsYXllZFRyYWNrcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9yZWNlbnRseS1wbGF5ZWQnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIG9yIG1vcmUgb3RoZXIgU3BvdGlmeSB1c2Vycy5cbiAgICogU2VlIFtGb2xsb3cgQXJ0aXN0cyBvciBVc2Vyc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9mb2xsb3ctYXJ0aXN0cy11c2Vycy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1c2VySWRzIFRoZSBpZHMgb2YgdGhlIHVzZXJzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdXNlciBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6PGhlcmVfaXNfdGhlX3VzZXJfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gZW1wdHkgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5mb2xsb3dVc2VycyA9IGZ1bmN0aW9uICh1c2VySWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2ZvbGxvd2luZy8nLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWRzOiB1c2VySWRzLmpvaW4oJywnKSxcbiAgICAgICAgdHlwZTogJ3VzZXInXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIG9yIG1vcmUgYXJ0aXN0cy5cbiAgICogU2VlIFtGb2xsb3cgQXJ0aXN0cyBvciBVc2Vyc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9mb2xsb3ctYXJ0aXN0cy11c2Vycy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBhcnRpc3RJZHMgVGhlIGlkcyBvZiB0aGUgYXJ0aXN0cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIGVtcHR5IHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZm9sbG93QXJ0aXN0cyA9IGZ1bmN0aW9uIChhcnRpc3RJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvZm9sbG93aW5nLycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZHM6IGFydGlzdElkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICdhcnRpc3QnXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIHRoZSBjdXJyZW50IHVzZXIgYXMgYSBmb2xsb3dlciBvZiBvbmUgcGxheWxpc3QuXG4gICAqIFNlZSBbRm9sbG93IGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZm9sbG93LXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuIEZvciBpbnN0YW5jZSxcbiAgICogd2hldGhlciB5b3Ugd2FudCB0aGUgcGxheWxpc3QgdG8gYmUgZm9sbG93ZWQgcHJpdmF0ZWx5ICh7cHVibGljOiBmYWxzZX0pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBlbXB0eSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmZvbGxvd1BsYXlsaXN0ID0gZnVuY3Rpb24gKHBsYXlsaXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy9mb2xsb3dlcnMnLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwb3N0RGF0YToge31cbiAgICB9O1xuXG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGN1cnJlbnQgdXNlciBhcyBhIGZvbGxvd2VyIG9mIG9uZSBvciBtb3JlIG90aGVyIFNwb3RpZnkgdXNlcnMuXG4gICAqIFNlZSBbVW5mb2xsb3cgQXJ0aXN0cyBvciBVc2Vyc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS91bmZvbGxvdy1hcnRpc3RzLXVzZXJzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVzZXJJZHMgVGhlIGlkcyBvZiB0aGUgdXNlcnMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB1c2VyIGlkIChlLmcuIHNwb3RpZnk6dXNlcjo8aGVyZV9pc190aGVfdXNlcl9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBlbXB0eSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnVuZm9sbG93VXNlcnMgPSBmdW5jdGlvbiAodXNlcklkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9mb2xsb3dpbmcvJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICd1c2VyJ1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGN1cnJlbnQgdXNlciBhcyBhIGZvbGxvd2VyIG9mIG9uZSBvciBtb3JlIGFydGlzdHMuXG4gICAqIFNlZSBbVW5mb2xsb3cgQXJ0aXN0cyBvciBVc2Vyc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS91bmZvbGxvdy1hcnRpc3RzLXVzZXJzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGFydGlzdElkcyBUaGUgaWRzIG9mIHRoZSBhcnRpc3RzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgYXJ0aXN0IGlkIChlLmcuIHNwb3RpZnk6YXJ0aXN0OjxoZXJlX2lzX3RoZV9hcnRpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgYW4gZW1wdHkgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS51bmZvbGxvd0FydGlzdHMgPSBmdW5jdGlvbiAoYXJ0aXN0SWRzLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL2ZvbGxvd2luZy8nLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWRzOiBhcnRpc3RJZHMuam9pbignLCcpLFxuICAgICAgICB0eXBlOiAnYXJ0aXN0J1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY3VycmVudCB1c2VyIGFzIGEgZm9sbG93ZXIgb2Ygb25lIHBsYXlsaXN0LlxuICAgKiBTZWUgW1VuZm9sbG93IGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvdW5mb2xsb3ctcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBlbXB0eSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnVuZm9sbG93UGxheWxpc3QgPSBmdW5jdGlvbiAocGxheWxpc3RJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ZvbGxvd2VycycsXG4gICAgICB0eXBlOiAnREVMRVRFJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBmb2xsb3dpbmcgb25lIG9yIG1vcmUgb3RoZXIgU3BvdGlmeSB1c2Vycy5cbiAgICogU2VlIFtDaGVjayBpZiBDdXJyZW50IFVzZXIgRm9sbG93cyBVc2VycyBvciBBcnRpc3RzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2NoZWNrLWN1cnJlbnQtdXNlci1mb2xsb3dzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHVzZXJJZHMgVGhlIGlkcyBvZiB0aGUgdXNlcnMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciB1c2VyIGlkIChlLmcuIHNwb3RpZnk6dXNlcjo8aGVyZV9pc190aGVfdXNlcl9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyBhbiBhcnJheSBvZiBib29sZWFuIHZhbHVlcyB0aGF0IGluZGljYXRlXG4gICAqIHdoZXRoZXIgdGhlIHVzZXIgaXMgZm9sbG93aW5nIHRoZSB1c2VycyBzZW50IGluIHRoZSByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5pc0ZvbGxvd2luZ1VzZXJzID0gZnVuY3Rpb24gKHVzZXJJZHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvZm9sbG93aW5nL2NvbnRhaW5zJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJyksXG4gICAgICAgIHR5cGU6ICd1c2VyJ1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBmb2xsb3dpbmcgb25lIG9yIG1vcmUgYXJ0aXN0cy5cbiAgICogU2VlIFtDaGVjayBpZiBDdXJyZW50IFVzZXIgRm9sbG93c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9jaGVjay1jdXJyZW50LXVzZXItZm9sbG93cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBhcnRpc3RJZHMgVGhlIGlkcyBvZiB0aGUgYXJ0aXN0cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIGFycmF5IG9mIGJvb2xlYW4gdmFsdWVzIHRoYXQgaW5kaWNhdGVcbiAgICogd2hldGhlciB0aGUgdXNlciBpcyBmb2xsb3dpbmcgdGhlIGFydGlzdHMgc2VudCBpbiB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuaXNGb2xsb3dpbmdBcnRpc3RzID0gZnVuY3Rpb24gKGFydGlzdElkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9mb2xsb3dpbmcvY29udGFpbnMnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWRzOiBhcnRpc3RJZHMuam9pbignLCcpLFxuICAgICAgICB0eXBlOiAnYXJ0aXN0J1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIHRvIHNlZSBpZiBvbmUgb3IgbW9yZSBTcG90aWZ5IHVzZXJzIGFyZSBmb2xsb3dpbmcgYSBzcGVjaWZpZWQgcGxheWxpc3QuXG4gICAqIFNlZSBbQ2hlY2sgaWYgVXNlcnMgRm9sbG93IGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvY2hlY2stdXNlci1mb2xsb3dpbmctcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXNlcklkcyBUaGUgaWRzIG9mIHRoZSB1c2Vycy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHVzZXIgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOjxoZXJlX2lzX3RoZV91c2VyX2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIGFycmF5IG9mIGJvb2xlYW4gdmFsdWVzIHRoYXQgaW5kaWNhdGVcbiAgICogd2hldGhlciB0aGUgdXNlcnMgYXJlIGZvbGxvd2luZyB0aGUgcGxheWxpc3Qgc2VudCBpbiB0aGUgcmVxdWVzdC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuYXJlRm9sbG93aW5nUGxheWxpc3QgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICB1c2VySWRzLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvZm9sbG93ZXJzL2NvbnRhaW5zJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkczogdXNlcklkcy5qb2luKCcsJylcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdXNlcidzIGZvbGxvd2VkIGFydGlzdHMuXG4gICAqIFNlZSBbR2V0IFVzZXIncyBGb2xsb3dlZCBBcnRpc3RzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1mb2xsb3dlZC1hcnRpc3RzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMsIGJlaW5nIGFmdGVyIGFuZCBsaW1pdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIGFuIG9iamVjdCB3aXRoIGEgcGFnZWQgb2JqZWN0IGNvbnRhaW5pbmdcbiAgICogYXJ0aXN0cy5cbiAgICogQHJldHVybnMge1Byb21pc2V8dW5kZWZpbmVkfSBBIHByb21pc2UgdGhhdCBpZiBzdWNjZXNzZnVsLCByZXNvbHZlcyB0byBhbiBvYmplY3QgY29udGFpbmluZyBhIHBhZ2luZyBvYmplY3Qgd2hpY2ggY29udGFpbnNcbiAgICogYXJ0aXN0cyBvYmplY3RzLiBOb3QgcmV0dXJuZWQgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0Rm9sbG93ZWRBcnRpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvZm9sbG93aW5nJyxcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHR5cGU6ICdhcnRpc3QnXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBpbmZvcm1hdGlvbiBhYm91dCBhIHNwZWNpZmljIHVzZXIuXG4gICAqIFNlZSBbR2V0IGEgVXNlcidzIFByb2ZpbGVdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXVzZXJzLXByb2ZpbGUvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIGlkIG9mIHRoZSB1c2VyLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6PGhlcmVfaXNfdGhlX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRVc2VyID0gZnVuY3Rpb24gKHVzZXJJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy91c2Vycy8nICsgZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJJZClcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgbGlzdCBvZiB0aGUgY3VycmVudCB1c2VyJ3MgcGxheWxpc3RzLlxuICAgKiBTZWUgW0dldCBhIExpc3Qgb2YgYSBVc2VyJ3MgUGxheWxpc3RzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1saXN0LXVzZXJzLXBsYXlsaXN0cy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCBBbiBvcHRpb25hbCBpZCBvZiB0aGUgdXNlci4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOjxoZXJlX2lzX3RoZV9pZD4pLiBJZiBub3QgcHJvdmlkZWQsIHRoZSBpZCBvZiB0aGUgdXNlciB0aGF0IGdyYW50ZWRcbiAgICogdGhlIHBlcm1pc3Npb25zIHdpbGwgYmUgdXNlZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRVc2VyUGxheWxpc3RzID0gZnVuY3Rpb24gKHVzZXJJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGE7XG4gICAgaWYgKHR5cGVvZiB1c2VySWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IHtcbiAgICAgICAgdXJsOiBfYmFzZVVyaSArICcvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IHtcbiAgICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWxpc3RzJ1xuICAgICAgfTtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB1c2VySWQ7XG4gICAgfVxuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgc3BlY2lmaWMgcGxheWxpc3QuXG4gICAqIFNlZSBbR2V0IGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldFBsYXlsaXN0ID0gZnVuY3Rpb24gKHBsYXlsaXN0SWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgdHJhY2tzIGZyb20gYSBzcGVjaWZpYyBwbGF5bGlzdC5cbiAgICogU2VlIFtHZXQgYSBQbGF5bGlzdCdzIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtcGxheWxpc3RzLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRQbGF5bGlzdFRyYWNrcyA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBpbWFnZSBhc3NvY2lhdGVkIHdpdGggYSBzcGVjaWZpYyBwbGF5bGlzdC5cbiAgICogU2VlIFtHZXQgYSBQbGF5bGlzdCBDb3ZlciBJbWFnZV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9wbGF5bGlzdHMvZ2V0LXBsYXlsaXN0LWNvdmVyLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRQbGF5bGlzdENvdmVySW1hZ2UgPSBmdW5jdGlvbiAocGxheWxpc3RJZCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ltYWdlcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgcGxheWxpc3QgYW5kIHN0b3JlcyBpdCBpbiB0aGUgY3VycmVudCB1c2VyJ3MgbGlicmFyeS5cbiAgICogU2VlIFtDcmVhdGUgYSBQbGF5bGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9jcmVhdGUtcGxheWxpc3QvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgVGhlIGlkIG9mIHRoZSB1c2VyLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6PGhlcmVfaXNfdGhlX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5jcmVhdGVQbGF5bGlzdCA9IGZ1bmN0aW9uICh1c2VySWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvdXNlcnMvJyArIGVuY29kZVVSSUNvbXBvbmVudCh1c2VySWQpICsgJy9wbGF5bGlzdHMnLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgcG9zdERhdGE6IG9wdGlvbnNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYSBwbGF5bGlzdCdzIG5hbWUgYW5kIHB1YmxpYy9wcml2YXRlIHN0YXRlXG4gICAqIFNlZSBbQ2hhbmdlIGEgUGxheWxpc3QncyBEZXRhaWxzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2NoYW5nZS1wbGF5bGlzdC1kZXRhaWxzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBBIEpTT04gb2JqZWN0IHdpdGggdGhlIGRhdGEgdG8gdXBkYXRlLiBFLmcuIHtuYW1lOiAnQSBuZXcgbmFtZScsIHB1YmxpYzogdHJ1ZX1cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmNoYW5nZVBsYXlsaXN0RGV0YWlscyA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIGRhdGEsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwb3N0RGF0YTogZGF0YVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBkYXRhLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0cmFja3MgdG8gYSBwbGF5bGlzdC5cbiAgICogU2VlIFtBZGQgVHJhY2tzIHRvIGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvYWRkLXRyYWNrcy10by1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmlzIEFuIGFycmF5IG9mIFNwb3RpZnkgVVJJcyBmb3IgdGhlIHRyYWNrc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmFkZFRyYWNrc1RvUGxheWxpc3QgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICB1cmlzLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnLFxuICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgdXJpczogdXJpc1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjaywgdHJ1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIHRyYWNrcyBvZiBhIHBsYXlsaXN0XG4gICAqIFNlZSBbUmVwbGFjZSBhIFBsYXlsaXN0J3MgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3JlcGxhY2UtcGxheWxpc3RzLXRyYWNrcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmlzIEFuIGFycmF5IG9mIFNwb3RpZnkgVVJJcyBmb3IgdGhlIHRyYWNrc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVwbGFjZVRyYWNrc0luUGxheWxpc3QgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICB1cmlzLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IHsgdXJpczogdXJpcyB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlb3JkZXIgdHJhY2tzIGluIGEgcGxheWxpc3RcbiAgICogU2VlIFtSZW9yZGVyIGEgUGxheWxpc3TigJlzIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9yZW9yZGVyLXBsYXlsaXN0cy10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwbGF5bGlzdElkIFRoZSBpZCBvZiB0aGUgcGxheWxpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHBsYXlsaXN0IGlkIChlLmcuIHNwb3RpZnk6dXNlcjp4eHh4OnBsYXlsaXN0OjxoZXJlX2lzX3RoZV9wbGF5bGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYW5nZVN0YXJ0IFRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgdHJhY2sgdG8gYmUgcmVvcmRlcmVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5zZXJ0QmVmb3JlIFRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgdHJhY2tzIHNob3VsZCBiZSBpbnNlcnRlZC4gVG8gcmVvcmRlciB0aGUgdHJhY2tzIHRvXG4gICAqIHRoZSBlbmQgb2YgdGhlIHBsYXlsaXN0LCBzaW1wbHkgc2V0IGluc2VydF9iZWZvcmUgdG8gdGhlIHBvc2l0aW9uIGFmdGVyIHRoZSBsYXN0IHRyYWNrLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBwYXJhbWV0ZXJzIChyYW5nZV9sZW5ndGgsIHNuYXBzaG90X2lkKVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVvcmRlclRyYWNrc0luUGxheWxpc3QgPSBmdW5jdGlvbiAoXG4gICAgcGxheWxpc3RJZCxcbiAgICByYW5nZVN0YXJ0LFxuICAgIGluc2VydEJlZm9yZSxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgcmFuZ2Vfc3RhcnQ6IHJhbmdlU3RhcnQsXG4gICAgICAgIGluc2VydF9iZWZvcmU6IGluc2VydEJlZm9yZVxuICAgICAgfVxuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYWNrcyBmcm9tIGEgcGxheWxpc3RcbiAgICogU2VlIFtSZW1vdmUgVHJhY2tzIGZyb20gYSBQbGF5bGlzdF0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9yZW1vdmUtdHJhY2tzLXBsYXlsaXN0Lykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGxheWxpc3RJZCBUaGUgaWQgb2YgdGhlIHBsYXlsaXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBwbGF5bGlzdCBpZCAoZS5nLiBzcG90aWZ5OnVzZXI6eHh4eDpwbGF5bGlzdDo8aGVyZV9pc190aGVfcGxheWxpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHVyaXMgQW4gYXJyYXkgb2YgdHJhY2tzIHRvIGJlIHJlbW92ZWQuIEVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgY2FuIGJlIGVpdGhlciBhXG4gICAqIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBpcyB0cmVhdGVkIGFzIGEgVVJJLCBvciBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBgdXJpYCAod2hpY2ggaXMgYVxuICAgKiBzdHJpbmcpIGFuZCBgcG9zaXRpb25zYCAod2hpY2ggaXMgYW4gYXJyYXkgb2YgaW50ZWdlcnMpLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucmVtb3ZlVHJhY2tzRnJvbVBsYXlsaXN0ID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgdXJpcyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgZGF0YVRvQmVTZW50ID0gdXJpcy5tYXAoZnVuY3Rpb24gKHVyaSkge1xuICAgICAgaWYgKHR5cGVvZiB1cmkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBwb3N0RGF0YTogeyB0cmFja3M6IGRhdGFUb0JlU2VudCB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0cmFja3MgZnJvbSBhIHBsYXlsaXN0LCBzcGVjaWZ5aW5nIGEgc25hcHNob3QgaWQuXG4gICAqIFNlZSBbUmVtb3ZlIFRyYWNrcyBmcm9tIGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVtb3ZlLXRyYWNrcy1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSB1cmlzIEFuIGFycmF5IG9mIHRyYWNrcyB0byBiZSByZW1vdmVkLiBFYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGNhbiBiZSBlaXRoZXIgYVxuICAgKiBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgaXMgdHJlYXRlZCBhcyBhIFVSSSwgb3IgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgYHVyaWAgKHdoaWNoIGlzIGFcbiAgICogc3RyaW5nKSBhbmQgYHBvc2l0aW9uc2AgKHdoaWNoIGlzIGFuIGFycmF5IG9mIGludGVnZXJzKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNuYXBzaG90SWQgVGhlIHBsYXlsaXN0J3Mgc25hcHNob3QgSUQgYWdhaW5zdCB3aGljaCB5b3Ugd2FudCB0byBtYWtlIHRoZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5yZW1vdmVUcmFja3NGcm9tUGxheWxpc3RXaXRoU25hcHNob3RJZCA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIHVyaXMsXG4gICAgc25hcHNob3RJZCxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgZGF0YVRvQmVTZW50ID0gdXJpcy5tYXAoZnVuY3Rpb24gKHVyaSkge1xuICAgICAgaWYgKHR5cGVvZiB1cmkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3BsYXlsaXN0cy8nICsgcGxheWxpc3RJZCArICcvdHJhY2tzJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcG9zdERhdGE6IHtcbiAgICAgICAgdHJhY2tzOiBkYXRhVG9CZVNlbnQsXG4gICAgICAgIHNuYXBzaG90X2lkOiBzbmFwc2hvdElkXG4gICAgICB9XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwge30sIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRyYWNrcyBmcm9tIGEgcGxheWxpc3QsIHNwZWNpZnlpbmcgdGhlIHBvc2l0aW9ucyBvZiB0aGUgdHJhY2tzIHRvIGJlIHJlbW92ZWQuXG4gICAqIFNlZSBbUmVtb3ZlIFRyYWNrcyBmcm9tIGEgUGxheWxpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvcmVtb3ZlLXRyYWNrcy1wbGF5bGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBwb3NpdGlvbnMgYXJyYXkgb2YgaW50ZWdlcnMgY29udGFpbmluZyB0aGUgcG9zaXRpb25zIG9mIHRoZSB0cmFja3MgdG8gcmVtb3ZlXG4gICAqIGZyb20gdGhlIHBsYXlsaXN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc25hcHNob3RJZCBUaGUgcGxheWxpc3QncyBzbmFwc2hvdCBJRCBhZ2FpbnN0IHdoaWNoIHlvdSB3YW50IHRvIG1ha2UgdGhlIGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnJlbW92ZVRyYWNrc0Zyb21QbGF5bGlzdEluUG9zaXRpb25zID0gZnVuY3Rpb24gKFxuICAgIHBsYXlsaXN0SWQsXG4gICAgcG9zaXRpb25zLFxuICAgIHNuYXBzaG90SWQsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcGxheWxpc3RzLycgKyBwbGF5bGlzdElkICsgJy90cmFja3MnLFxuICAgICAgdHlwZTogJ0RFTEVURScsXG4gICAgICBwb3N0RGF0YToge1xuICAgICAgICBwb3NpdGlvbnM6IHBvc2l0aW9ucyxcbiAgICAgICAgc25hcHNob3RfaWQ6IHNuYXBzaG90SWRcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGxvYWQgYSBjdXN0b20gcGxheWxpc3QgY292ZXIgaW1hZ2UuXG4gICAqIFNlZSBbVXBsb2FkIEEgQ3VzdG9tIFBsYXlsaXN0IENvdmVyIEltYWdlXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3VwbG9hZC1hLWN1c3RvbS1wbGF5bGlzdC1jb3Zlci1pbWFnZS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYXlsaXN0SWQgVGhlIGlkIG9mIHRoZSBwbGF5bGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgcGxheWxpc3QgaWQgKGUuZy4gc3BvdGlmeTp1c2VyOnh4eHg6cGxheWxpc3Q6PGhlcmVfaXNfdGhlX3BsYXlsaXN0X2lkPilcbiAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlRGF0YSBCYXNlNjQgZW5jb2RlZCBKUEVHIGltYWdlIGRhdGEsIG1heGltdW0gcGF5bG9hZCBzaXplIGlzIDI1NiBLQi5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnVwbG9hZEN1c3RvbVBsYXlsaXN0Q292ZXJJbWFnZSA9IGZ1bmN0aW9uIChcbiAgICBwbGF5bGlzdElkLFxuICAgIGltYWdlRGF0YSxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9wbGF5bGlzdHMvJyArIHBsYXlsaXN0SWQgKyAnL2ltYWdlcycsXG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHBvc3REYXRhOiBpbWFnZURhdGEucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9qcGVnO2Jhc2U2NCwvLCAnJyksXG4gICAgICBjb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYW4gYWxidW0gZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBBbGJ1bV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYWxidW0vKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGJ1bUlkIFRoZSBpZCBvZiB0aGUgYWxidW0uIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGFsYnVtIGlkIChlLmcuIHNwb3RpZnk6YWxidW06PGhlcmVfaXNfdGhlX2FsYnVtX2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBbGJ1bSA9IGZ1bmN0aW9uIChhbGJ1bUlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2FsYnVtcy8nICsgYWxidW1JZFxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIHRyYWNrcyBvZiBhbiBhbGJ1bSBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IGFuIEFsYnVtJ3MgVHJhY2tzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1hbGJ1bXMtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxidW1JZCBUaGUgaWQgb2YgdGhlIGFsYnVtLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QWxidW1UcmFja3MgPSBmdW5jdGlvbiAoYWxidW1JZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hbGJ1bXMvJyArIGFsYnVtSWQgKyAnL3RyYWNrcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIG11bHRpcGxlIGFsYnVtcyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IFNldmVyYWwgQWxidW1zXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1zZXZlcmFsLWFsYnVtcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBhbGJ1bUlkcyBUaGUgaWRzIG9mIHRoZSBhbGJ1bXMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhbGJ1bSBpZCAoZS5nLiBzcG90aWZ5OmFsYnVtOjxoZXJlX2lzX3RoZV9hbGJ1bV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QWxidW1zID0gZnVuY3Rpb24gKGFsYnVtSWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2FsYnVtcy8nLFxuICAgICAgcGFyYW1zOiB7IGlkczogYWxidW1JZHMuam9pbignLCcpIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgdHJhY2sgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhIFRyYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC10cmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgVGhlIGlkIG9mIHRoZSB0cmFjay4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgdHJhY2sgaWQgKGUuZy4gc3BvdGlmeTp0cmFjazo8aGVyZV9pc190aGVfdHJhY2tfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldFRyYWNrID0gZnVuY3Rpb24gKHRyYWNrSWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge307XG4gICAgcmVxdWVzdERhdGEudXJsID0gX2Jhc2VVcmkgKyAnL3RyYWNrcy8nICsgdHJhY2tJZDtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBtdWx0aXBsZSB0cmFja3MgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBTZXZlcmFsIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtc2V2ZXJhbC10cmFja3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdHJhY2tJZHMgVGhlIGlkcyBvZiB0aGUgdHJhY2tzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdHJhY2sgaWQgKGUuZy4gc3BvdGlmeTp0cmFjazo8aGVyZV9pc190aGVfdHJhY2tfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldFRyYWNrcyA9IGZ1bmN0aW9uICh0cmFja0lkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy90cmFja3MvJyxcbiAgICAgIHBhcmFtczogeyBpZHM6IHRyYWNrSWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhbiBhcnRpc3QgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhbiBBcnRpc3RdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWFydGlzdC8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFydGlzdElkIFRoZSBpZCBvZiB0aGUgYXJ0aXN0LiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QXJ0aXN0ID0gZnVuY3Rpb24gKGFydGlzdElkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2FydGlzdHMvJyArIGFydGlzdElkXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBtdWx0aXBsZSBhcnRpc3RzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZy5cbiAgICogU2VlIFtHZXQgU2V2ZXJhbCBBcnRpc3RzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1zZXZlcmFsLWFydGlzdHMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYXJ0aXN0SWRzIFRoZSBpZHMgb2YgdGhlIGFydGlzdHMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBhcnRpc3QgaWQgKGUuZy4gc3BvdGlmeTphcnRpc3Q6PGhlcmVfaXNfdGhlX2FydGlzdF9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QXJ0aXN0cyA9IGZ1bmN0aW9uIChhcnRpc3RJZHMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYXJ0aXN0cy8nLFxuICAgICAgcGFyYW1zOiB7IGlkczogYXJ0aXN0SWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgYWxidW1zIG9mIGFuIGFydGlzdCBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IGFuIEFydGlzdCdzIEFsYnVtc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYXJ0aXN0cy1hbGJ1bXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpc3RJZCBUaGUgaWQgb2YgdGhlIGFydGlzdC4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgYXJ0aXN0IGlkIChlLmcuIHNwb3RpZnk6YXJ0aXN0OjxoZXJlX2lzX3RoZV9hcnRpc3RfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFydGlzdEFsYnVtcyA9IGZ1bmN0aW9uIChhcnRpc3RJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hcnRpc3RzLycgKyBhcnRpc3RJZCArICcvYWxidW1zJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBsaXN0IG9mIHRvcCB0cmFja3Mgb2YgYW4gYXJ0aXN0IGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZywgZm9yIGEgc3BlY2lmaWMgY291bnRyeS5cbiAgICogU2VlIFtHZXQgYW4gQXJ0aXN0J3MgVG9wIFRyYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYXJ0aXN0cy10b3AtdHJhY2tzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aXN0SWQgVGhlIGlkIG9mIHRoZSBhcnRpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlJZCBUaGUgaWQgb2YgdGhlIGNvdW50cnkgKGUuZy4gRVMgZm9yIFNwYWluIG9yIFVTIGZvciBVbml0ZWQgU3RhdGVzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEFydGlzdFRvcFRyYWNrcyA9IGZ1bmN0aW9uIChcbiAgICBhcnRpc3RJZCxcbiAgICBjb3VudHJ5SWQsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hcnRpc3RzLycgKyBhcnRpc3RJZCArICcvdG9wLXRyYWNrcycsXG4gICAgICBwYXJhbXM6IHsgY291bnRyeTogY291bnRyeUlkIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGEgbGlzdCBvZiBhcnRpc3RzIHJlbGF0ZWQgd2l0aCBhIGdpdmVuIG9uZSBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IGFuIEFydGlzdCdzIFJlbGF0ZWQgQXJ0aXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtcmVsYXRlZC1hcnRpc3RzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aXN0SWQgVGhlIGlkIG9mIHRoZSBhcnRpc3QuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIGFydGlzdCBpZCAoZS5nLiBzcG90aWZ5OmFydGlzdDo8aGVyZV9pc190aGVfYXJ0aXN0X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBcnRpc3RSZWxhdGVkQXJ0aXN0cyA9IGZ1bmN0aW9uIChcbiAgICBhcnRpc3RJZCxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2FydGlzdHMvJyArIGFydGlzdElkICsgJy9yZWxhdGVkLWFydGlzdHMnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGxpc3Qgb2YgU3BvdGlmeSBmZWF0dXJlZCBwbGF5bGlzdHMgKHNob3duLCBmb3IgZXhhbXBsZSwgb24gYSBTcG90aWZ5IHBsYXllcidzIFwiQnJvd3NlXCIgdGFiKS5cbiAgICogU2VlIFtHZXQgYSBMaXN0IG9mIEZlYXR1cmVkIFBsYXlsaXN0c10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtbGlzdC1mZWF0dXJlZC1wbGF5bGlzdHMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0RmVhdHVyZWRQbGF5bGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9icm93c2UvZmVhdHVyZWQtcGxheWxpc3RzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBsaXN0IG9mIG5ldyBhbGJ1bSByZWxlYXNlcyBmZWF0dXJlZCBpbiBTcG90aWZ5IChzaG93biwgZm9yIGV4YW1wbGUsIG9uIGEgU3BvdGlmeSBwbGF5ZXIncyBcIkJyb3dzZVwiIHRhYikuXG4gICAqIFNlZSBbR2V0IGEgTGlzdCBvZiBOZXcgUmVsZWFzZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LWxpc3QtbmV3LXJlbGVhc2VzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE5ld1JlbGVhc2VzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvYnJvd3NlL25ldy1yZWxlYXNlcydcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBsaXN0IG9mIGNhdGVnb3JpZXMgdXNlZCB0byB0YWcgaXRlbXMgaW4gU3BvdGlmeSAob24sIGZvciBleGFtcGxlLCB0aGUgU3BvdGlmeSBwbGF5ZXIncyBcIkJyb3dzZVwiIHRhYikuXG4gICAqIFNlZSBbR2V0IGEgTGlzdCBvZiBDYXRlZ29yaWVzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1saXN0LWNhdGVnb3JpZXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL2Jyb3dzZS9jYXRlZ29yaWVzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZSBjYXRlZ29yeSB1c2VkIHRvIHRhZyBpdGVtcyBpbiBTcG90aWZ5IChvbiwgZm9yIGV4YW1wbGUsIHRoZSBTcG90aWZ5IHBsYXllcidzIFwiQnJvd3NlXCIgdGFiKS5cbiAgICogU2VlIFtHZXQgYSBDYXRlZ29yeV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtY2F0ZWdvcnkvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXRlZ29yeUlkIFRoZSBpZCBvZiB0aGUgY2F0ZWdvcnkuIFRoZXNlIGNhbiBiZSBmb3VuZCB3aXRoIHRoZSBnZXRDYXRlZ29yaWVzIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnlJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9icm93c2UvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnlJZFxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIGxpc3Qgb2YgU3BvdGlmeSBwbGF5bGlzdHMgdGFnZ2VkIHdpdGggYSBwYXJ0aWN1bGFyIGNhdGVnb3J5LlxuICAgKiBTZWUgW0dldCBhIENhdGVnb3J5J3MgUGxheWxpc3RzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1jYXRlZ29yeXMtcGxheWxpc3RzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlJZCBUaGUgaWQgb2YgdGhlIGNhdGVnb3J5LiBUaGVzZSBjYW4gYmUgZm91bmQgd2l0aCB0aGUgZ2V0Q2F0ZWdvcmllcyBmdW5jdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldENhdGVnb3J5UGxheWxpc3RzID0gZnVuY3Rpb24gKFxuICAgIGNhdGVnb3J5SWQsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9icm93c2UvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnlJZCArICcvcGxheWxpc3RzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBTcG90aWZ5IGNhdGFsb2cgaW5mb3JtYXRpb24gYWJvdXQgYXJ0aXN0cywgYWxidW1zLCB0cmFja3Mgb3IgcGxheWxpc3RzIHRoYXQgbWF0Y2ggYSBrZXl3b3JkIHN0cmluZy5cbiAgICogU2VlIFtTZWFyY2ggZm9yIGFuIEl0ZW1dKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2VhcmNoLWl0ZW0vKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgc2VhcmNoIHF1ZXJ5XG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdHlwZXMgQW4gYXJyYXkgb2YgaXRlbSB0eXBlcyB0byBzZWFyY2ggYWNyb3NzLlxuICAgKiBWYWxpZCB0eXBlcyBhcmU6ICdhbGJ1bScsICdhcnRpc3QnLCAncGxheWxpc3QnLCBhbmQgJ3RyYWNrJy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWFyY2ggPSBmdW5jdGlvbiAocXVlcnksIHR5cGVzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3NlYXJjaC8nLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHE6IHF1ZXJ5LFxuICAgICAgICB0eXBlOiB0eXBlcy5qb2luKCcsJylcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFsYnVtcyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cgYWNjb3JkaW5nIHRvIGEgcXVlcnkuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNlYXJjaEFsYnVtcyA9IGZ1bmN0aW9uIChxdWVyeSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2gocXVlcnksIFsnYWxidW0nXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFydGlzdHMgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nIGFjY29yZGluZyB0byBhIHF1ZXJ5LlxuICAgKiBTZWUgW1NlYXJjaCBmb3IgYW4gSXRlbV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZWFyY2gtaXRlbS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBzZWFyY2ggcXVlcnlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWFyY2hBcnRpc3RzID0gZnVuY3Rpb24gKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLnNlYXJjaChxdWVyeSwgWydhcnRpc3QnXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRyYWNrcyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cgYWNjb3JkaW5nIHRvIGEgcXVlcnkuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNlYXJjaFRyYWNrcyA9IGZ1bmN0aW9uIChxdWVyeSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2gocXVlcnksIFsndHJhY2snXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHBsYXlsaXN0cyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cgYWNjb3JkaW5nIHRvIGEgcXVlcnkuXG4gICAqIFNlZSBbU2VhcmNoIGZvciBhbiBJdGVtXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NlYXJjaC1pdGVtLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHNlYXJjaCBxdWVyeVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNlYXJjaFBsYXlsaXN0cyA9IGZ1bmN0aW9uIChxdWVyeSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2gocXVlcnksIFsncGxheWxpc3QnXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHNob3dzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZyBhY2NvcmRpbmcgdG8gYSBxdWVyeS5cbiAgICogU2VlIFtTZWFyY2ggZm9yIGFuIEl0ZW1dKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2VhcmNoLWl0ZW0vKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgc2VhcmNoIHF1ZXJ5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2VhcmNoU2hvd3MgPSBmdW5jdGlvbiAocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ3Nob3cnXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGVwaXNvZGVzIGZyb20gdGhlIFNwb3RpZnkgY2F0YWxvZyBhY2NvcmRpbmcgdG8gYSBxdWVyeS5cbiAgICogU2VlIFtTZWFyY2ggZm9yIGFuIEl0ZW1dKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvc2VhcmNoLWl0ZW0vKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgc2VhcmNoIHF1ZXJ5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2VhcmNoRXBpc29kZXMgPSBmdW5jdGlvbiAocXVlcnksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKHF1ZXJ5LCBbJ2VwaXNvZGUnXSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYXVkaW8gZmVhdHVyZXMgZm9yIGEgc2luZ2xlIHRyYWNrIGlkZW50aWZpZWQgYnkgaXRzIHVuaXF1ZSBTcG90aWZ5IElELlxuICAgKiBTZWUgW0dldCBBdWRpbyBGZWF0dXJlcyBmb3IgYSBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYXVkaW8tZmVhdHVyZXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFja0lkIFRoZSBpZCBvZiB0aGUgdHJhY2suIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHRyYWNrIGlkIChlLmcuIHNwb3RpZnk6dHJhY2s6PGhlcmVfaXNfdGhlX3RyYWNrX2lkPilcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEF1ZGlvRmVhdHVyZXNGb3JUcmFjayA9IGZ1bmN0aW9uICh0cmFja0lkLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHt9O1xuICAgIHJlcXVlc3REYXRhLnVybCA9IF9iYXNlVXJpICsgJy9hdWRpby1mZWF0dXJlcy8nICsgdHJhY2tJZDtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhdWRpbyBmZWF0dXJlcyBmb3IgbXVsdGlwbGUgdHJhY2tzIGJhc2VkIG9uIHRoZWlyIFNwb3RpZnkgSURzLlxuICAgKiBTZWUgW0dldCBBdWRpbyBGZWF0dXJlcyBmb3IgU2V2ZXJhbCBUcmFja3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXNldmVyYWwtYXVkaW8tZmVhdHVyZXMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdHJhY2tJZHMgVGhlIGlkcyBvZiB0aGUgdHJhY2tzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgdHJhY2sgaWQgKGUuZy4gc3BvdGlmeTp0cmFjazo8aGVyZV9pc190aGVfdHJhY2tfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QXVkaW9GZWF0dXJlc0ZvclRyYWNrcyA9IGZ1bmN0aW9uICh0cmFja0lkcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9hdWRpby1mZWF0dXJlcycsXG4gICAgICBwYXJhbXM6IHsgaWRzOiB0cmFja0lkcyB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIHt9LCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhdWRpbyBhbmFseXNpcyBmb3IgYSBzaW5nbGUgdHJhY2sgaWRlbnRpZmllZCBieSBpdHMgdW5pcXVlIFNwb3RpZnkgSUQuXG4gICAqIFNlZSBbR2V0IEF1ZGlvIEFuYWx5c2lzIGZvciBhIFRyYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1hdWRpby1hbmFseXNpcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWNrSWQgVGhlIGlkIG9mIHRoZSB0cmFjay4gSWYgeW91IGtub3cgdGhlIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGUgdHJhY2sgaWQgKGUuZy4gc3BvdGlmeTp0cmFjazo8aGVyZV9pc190aGVfdHJhY2tfaWQ+KVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0QXVkaW9BbmFseXNpc0ZvclRyYWNrID0gZnVuY3Rpb24gKHRyYWNrSWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge307XG4gICAgcmVxdWVzdERhdGEudXJsID0gX2Jhc2VVcmkgKyAnL2F1ZGlvLWFuYWx5c2lzLycgKyB0cmFja0lkO1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwge30sIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgcGxheWxpc3Qtc3R5bGUgbGlzdGVuaW5nIGV4cGVyaWVuY2UgYmFzZWQgb24gc2VlZCBhcnRpc3RzLCB0cmFja3MgYW5kIGdlbnJlcy5cbiAgICogU2VlIFtHZXQgUmVjb21tZW5kYXRpb25zIEJhc2VkIG9uIFNlZWRzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL2dldC1yZWNvbW1lbmRhdGlvbnMvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0UmVjb21tZW5kYXRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvcmVjb21tZW5kYXRpb25zJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgbGlzdCBvZiBhdmFpbGFibGUgZ2VucmVzIHNlZWQgcGFyYW1ldGVyIHZhbHVlcyBmb3IgcmVjb21tZW5kYXRpb25zLlxuICAgKiBTZWUgW0F2YWlsYWJsZSBHZW5yZSBTZWVkc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtcmVjb21tZW5kYXRpb25zLyNhdmFpbGFibGUtZ2VucmUtc2VlZHMpIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldEF2YWlsYWJsZUdlbnJlU2VlZHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9yZWNvbW1lbmRhdGlvbnMvYXZhaWxhYmxlLWdlbnJlLXNlZWRzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2Vy4oCZcyBhdmFpbGFibGUgZGV2aWNlcy5cbiAgICogU2VlIFtHZXQgYSBVc2Vy4oCZcyBBdmFpbGFibGUgRGV2aWNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtYS11c2Vycy1hdmFpbGFibGUtZGV2aWNlcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15RGV2aWNlcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9kZXZpY2VzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCB7fSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXLigJlzIGN1cnJlbnQgcGxheWJhY2sgc3RhdGUsIGluY2x1ZGluZyB0cmFjaywgdHJhY2sgcHJvZ3Jlc3MsIGFuZCBhY3RpdmUgZGV2aWNlLlxuICAgKiBTZWUgW0dldCBJbmZvcm1hdGlvbiBBYm91dCBUaGUgVXNlcuKAmXMgQ3VycmVudCBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9nZXQtaW5mb3JtYXRpb24tYWJvdXQtdGhlLXVzZXJzLWN1cnJlbnQtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXInXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSBvYmplY3QgY3VycmVudGx5IGJlaW5nIHBsYXllZCBvbiB0aGUgdXNlcuKAmXMgU3BvdGlmeSBhY2NvdW50LlxuICAgKiBTZWUgW0dldCB0aGUgVXNlcuKAmXMgQ3VycmVudGx5IFBsYXlpbmcgVHJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvZ2V0LXRoZS11c2Vycy1jdXJyZW50bHktcGxheWluZy10cmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL2N1cnJlbnRseS1wbGF5aW5nJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVyIHBsYXliYWNrIHRvIGEgbmV3IGRldmljZSBhbmQgZGV0ZXJtaW5lIGlmIGl0IHNob3VsZCBzdGFydCBwbGF5aW5nLlxuICAgKiBTZWUgW1RyYW5zZmVyIGEgVXNlcuKAmXMgUGxheWJhY2tdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL3dlYi1hcGkvdHJhbnNmZXItYS11c2Vycy1wbGF5YmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZXZpY2VJZHMgQSBKU09OIGFycmF5IGNvbnRhaW5pbmcgdGhlIElEIG9mIHRoZSBkZXZpY2Ugb24gd2hpY2ggcGxheWJhY2sgc2hvdWxkIGJlIHN0YXJ0ZWQvdHJhbnNmZXJyZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnRyYW5zZmVyTXlQbGF5YmFjayA9IGZ1bmN0aW9uIChcbiAgICBkZXZpY2VJZHMsXG4gICAgb3B0aW9ucyxcbiAgICBjYWxsYmFja1xuICApIHtcbiAgICB2YXIgcG9zdERhdGEgPSBvcHRpb25zIHx8IHt9O1xuICAgIHBvc3REYXRhLmRldmljZV9pZHMgPSBkZXZpY2VJZHM7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXInLFxuICAgICAgcG9zdERhdGE6IHBvc3REYXRhXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogUGxheSBhIHRyYWNrIG9uIHRoZSB1c2VyJ3MgYWN0aXZlIGRldmljZVxuICAgKiBTZWUgW1N0YXJ0L1Jlc3VtZSBhIFVzZXIncyBQbGF5YmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9wbGF5ZXIvc3RhcnQtYS11c2Vycy1wbGF5YmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPVxuICAgICAgJ2RldmljZV9pZCcgaW4gb3B0aW9ucyA/IHsgZGV2aWNlX2lkOiBvcHRpb25zLmRldmljZV9pZCB9IDogbnVsbDtcbiAgICB2YXIgcG9zdERhdGEgPSB7fTtcbiAgICBbJ2NvbnRleHRfdXJpJywgJ3VyaXMnLCAnb2Zmc2V0JywgJ3Bvc2l0aW9uX21zJ10uZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgIGlmIChmaWVsZCBpbiBvcHRpb25zKSB7XG4gICAgICAgIHBvc3REYXRhW2ZpZWxkXSA9IG9wdGlvbnNbZmllbGRdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL3BsYXknLFxuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICBwb3N0RGF0YTogcG9zdERhdGFcbiAgICB9O1xuXG4gICAgLy8gbmVlZCB0byBjbGVhciBvcHRpb25zIHNvIGl0IGRvZXNuJ3QgYWRkIGFsbCBvZiB0aGVtIHRvIHRoZSBxdWVyeSBwYXJhbXNcbiAgICB2YXIgbmV3T3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucyA6IHt9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgbmV3T3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYW4gaXRlbSB0byB0aGUgZW5kIG9mIHRoZSB1c2Vy4oCZcyBjdXJyZW50IHBsYXliYWNrIHF1ZXVlLlxuICAgKiBTZWUgW0FkZCBhbiBJdGVtIHRvIHRoZSBVc2VyJ3MgUGxheWJhY2sgUXVldWVdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvcGxheWVyL2FkZC10by1xdWV1ZS8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVyaSBUaGUgdXJpIG9mIHRoZSBpdGVtIHRvIGFkZCB0byB0aGUgcXVldWUuIE11c3QgYmUgYSB0cmFjayBvciBhbiBlcGlzb2RlIHVyaS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUucXVldWUgPSBmdW5jdGlvbiAodXJpLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPVxuICAgICAgJ2RldmljZV9pZCcgaW4gb3B0aW9uc1xuICAgICAgICA/IHsgdXJpOiB1cmksIGRldmljZV9pZDogb3B0aW9ucy5kZXZpY2VfaWQgfVxuICAgICAgICA6IHsgdXJpOiB1cmkgfTtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvcXVldWUnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXVzZSBwbGF5YmFjayBvbiB0aGUgdXNlcuKAmXMgYWNjb3VudC5cbiAgICogU2VlIFtQYXVzZSBhIFVzZXLigJlzIFBsYXliYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3BhdXNlLWEtdXNlcnMtcGxheWJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHBhcmFtcyA9XG4gICAgICAnZGV2aWNlX2lkJyBpbiBvcHRpb25zID8geyBkZXZpY2VfaWQ6IG9wdGlvbnMuZGV2aWNlX2lkIH0gOiBudWxsO1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL3BhdXNlJyxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgdG8gbmV4dCB0cmFjayBpbiB0aGUgdXNlcuKAmXMgcXVldWUuXG4gICAqIFNlZSBbU2tpcCBVc2Vy4oCZcyBQbGF5YmFjayBUbyBOZXh0IFRyYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NraXAtdXNlcnMtcGxheWJhY2stdG8tbmV4dC10cmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2tpcFRvTmV4dCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPVxuICAgICAgJ2RldmljZV9pZCcgaW4gb3B0aW9ucyA/IHsgZGV2aWNlX2lkOiBvcHRpb25zLmRldmljZV9pZCB9IDogbnVsbDtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9tZS9wbGF5ZXIvbmV4dCcsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNraXBzIHRvIHByZXZpb3VzIHRyYWNrIGluIHRoZSB1c2Vy4oCZcyBxdWV1ZS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCBBTFdBWVMgc2tpcCB0byB0aGUgcHJldmlvdXMgdHJhY2ssIHJlZ2FyZGxlc3Mgb2YgdGhlIGN1cnJlbnQgdHJhY2vigJlzIHByb2dyZXNzLlxuICAgKiBSZXR1cm5pbmcgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjdXJyZW50IHRyYWNrIHNob3VsZCBiZSBwZXJmb3JtZWQgdXNpbmcgYC5zZWVrKClgXG4gICAqIFNlZSBbU2tpcCBVc2Vy4oCZcyBQbGF5YmFjayBUbyBQcmV2aW91cyBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9za2lwLXVzZXJzLXBsYXliYWNrLXRvLW5leHQtdHJhY2svKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNraXBUb1ByZXZpb3VzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHBhcmFtcyA9XG4gICAgICAnZGV2aWNlX2lkJyBpbiBvcHRpb25zID8geyBkZXZpY2VfaWQ6IG9wdGlvbnMuZGV2aWNlX2lkIH0gOiBudWxsO1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9wcmV2aW91cycsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlZWtzIHRvIHRoZSBnaXZlbiBwb3NpdGlvbiBpbiB0aGUgdXNlcuKAmXMgY3VycmVudGx5IHBsYXlpbmcgdHJhY2suXG4gICAqIFNlZSBbU2VlayBUbyBQb3NpdGlvbiBJbiBDdXJyZW50bHkgUGxheWluZyBUcmFja10oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9zZWVrLXRvLXBvc2l0aW9uLWluLWN1cnJlbnRseS1wbGF5aW5nLXRyYWNrLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25fbXMgVGhlIHBvc2l0aW9uIGluIG1pbGxpc2Vjb25kcyB0byBzZWVrIHRvLiBNdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gKHBvc2l0aW9uX21zLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICBwb3NpdGlvbl9tczogcG9zaXRpb25fbXNcbiAgICB9O1xuICAgIGlmICgnZGV2aWNlX2lkJyBpbiBvcHRpb25zKSB7XG4gICAgICBwYXJhbXMuZGV2aWNlX2lkID0gb3B0aW9ucy5kZXZpY2VfaWQ7XG4gICAgfVxuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL3NlZWsnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlcGVhdCBtb2RlIGZvciB0aGUgdXNlcuKAmXMgcGxheWJhY2suIE9wdGlvbnMgYXJlIHJlcGVhdC10cmFjaywgcmVwZWF0LWNvbnRleHQsIGFuZCBvZmYuXG4gICAqIFNlZSBbU2V0IFJlcGVhdCBNb2RlIE9uIFVzZXLigJlzIFBsYXliYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NldC1yZXBlYXQtbW9kZS1vbi11c2Vycy1wbGF5YmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIEEgc3RyaW5nIHNldCB0byAndHJhY2snLCAnY29udGV4dCcgb3IgJ29mZicuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnNldFJlcGVhdCA9IGZ1bmN0aW9uIChzdGF0ZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfTtcbiAgICBpZiAoJ2RldmljZV9pZCcgaW4gb3B0aW9ucykge1xuICAgICAgcGFyYW1zLmRldmljZV9pZCA9IG9wdGlvbnMuZGV2aWNlX2lkO1xuICAgIH1cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9yZXBlYXQnLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgdGhlIHVzZXLigJlzIGN1cnJlbnQgcGxheWJhY2sgZGV2aWNlLlxuICAgKiBTZWUgW1NldCBWb2x1bWUgRm9yIFVzZXLigJlzIFBsYXliYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3NldC12b2x1bWUtZm9yLXVzZXJzLXBsYXliYWNrLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lX3BlcmNlbnQgVGhlIHZvbHVtZSB0byBzZXQuIE11c3QgYmUgYSB2YWx1ZSBmcm9tIDAgdG8gMTAwIGluY2x1c2l2ZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2V0Vm9sdW1lID0gZnVuY3Rpb24gKHZvbHVtZV9wZXJjZW50LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICB2b2x1bWVfcGVyY2VudDogdm9sdW1lX3BlcmNlbnRcbiAgICB9O1xuICAgIGlmICgnZGV2aWNlX2lkJyBpbiBvcHRpb25zKSB7XG4gICAgICBwYXJhbXMuZGV2aWNlX2lkID0gb3B0aW9ucy5kZXZpY2VfaWQ7XG4gICAgfVxuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHR5cGU6ICdQVVQnLFxuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvcGxheWVyL3ZvbHVtZScsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBzaHVmZmxlIG9uIG9yIG9mZiBmb3IgdXNlcuKAmXMgcGxheWJhY2suXG4gICAqIFNlZSBbVG9nZ2xlIFNodWZmbGUgRm9yIFVzZXLigJlzIFBsYXliYWNrXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS93ZWItYXBpL3RvZ2dsZS1zaHVmZmxlLWZvci11c2Vycy1wbGF5YmFjay8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sfSBzdGF0ZSBXaGV0aGVyIG9yIG5vdCB0byBzaHVmZmxlIHVzZXIncyBwbGF5YmFjay5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2V0U2h1ZmZsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfTtcbiAgICBpZiAoJ2RldmljZV9pZCcgaW4gb3B0aW9ucykge1xuICAgICAgcGFyYW1zLmRldmljZV9pZCA9IG9wdGlvbnMuZGV2aWNlX2lkO1xuICAgIH1cbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB0eXBlOiAnUFVUJyxcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3BsYXllci9zaHVmZmxlJyxcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBhIHNob3cgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBhIFNob3ddKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2Uvc2hvd3MvZ2V0LWEtc2hvdy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNob3dJZCBUaGUgaWQgb2YgdGhlIHNob3cuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRTaG93ID0gZnVuY3Rpb24gKHNob3dJZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7fTtcbiAgICByZXF1ZXN0RGF0YS51cmwgPSBfYmFzZVVyaSArICcvc2hvd3MvJyArIHNob3dJZDtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBtdWx0aXBsZSBzaG93cyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IFNldmVyYWwgU2hvd3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2Uvc2hvd3MvZ2V0LXNldmVyYWwtc2hvd3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2hvd0lkcyBUaGUgaWRzIG9mIHRoZSBzaG93cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRTaG93cyA9IGZ1bmN0aW9uIChzaG93SWRzLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3Nob3dzLycsXG4gICAgICBwYXJhbXM6IHsgaWRzOiBzaG93SWRzLmpvaW4oJywnKSB9XG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2hlcyBjdXJyZW50IHVzZXIncyBzYXZlZCBzaG93cy5cbiAgICogU2VlIFtHZXQgQ3VycmVudCBVc2VyJ3MgU2F2ZWQgU2hvd3NdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvbGlicmFyeS9nZXQtdXNlcnMtc2F2ZWQtc2hvd3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0TXlTYXZlZFNob3dzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvc2hvd3MnXG4gICAgfTtcbiAgICByZXR1cm4gX2NoZWNrUGFyYW1zQW5kUGVyZm9ybVJlcXVlc3QocmVxdWVzdERhdGEsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3Qgb2Ygc2hvd3MgdG8gdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHNob3dzLlxuICAgKiBTZWUgW1NhdmUgU2hvd3MgZm9yIEN1cnJlbnQgVXNlcl0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vZG9jdW1lbnRhdGlvbi93ZWItYXBpL3JlZmVyZW5jZS9saWJyYXJ5L3NhdmUtc2hvd3MtdXNlci8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzaG93SWRzIFRoZSBpZHMgb2YgdGhlIHNob3dzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgc2hvdyBpZCAoZS5nLiBzcG90aWZ5OnNob3c6PGhlcmVfaXNfdGhlX3Nob3dfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLmFkZFRvTXlTYXZlZFNob3dzID0gZnVuY3Rpb24gKHNob3dJZHMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvc2hvd3MnLFxuICAgICAgdHlwZTogJ1BVVCcsXG4gICAgICBwb3N0RGF0YTogc2hvd0lkc1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGxpc3Qgb2Ygc2hvd3MgZnJvbSB0aGUgY3VycmVudCB1c2VyJ3Mgc2F2ZWQgc2hvd3MuXG4gICAqIFNlZSBbUmVtb3ZlIFNob3dzIGZvciBDdXJyZW50IFVzZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvbGlicmFyeS9yZW1vdmUtc2hvd3MtdXNlci8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzaG93SWRzIFRoZSBpZHMgb2YgdGhlIHNob3dzLiBJZiB5b3Uga25vdyB0aGVpciBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlaXIgc2hvdyBpZCAoZS5nLiBzcG90aWZ5OnNob3c6PGhlcmVfaXNfdGhlX3Nob3dfaWQ+KVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBIEpTT04gb2JqZWN0IHdpdGggb3B0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbihPYmplY3QsT2JqZWN0KX0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyAyIHBhcmFtZXRlcnMuIFRoZSBmaXJzdFxuICAgKiBvbmUgaXMgdGhlIGVycm9yIG9iamVjdCAobnVsbCBpZiBubyBlcnJvciksIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWQuXG4gICAqIEByZXR1cm4ge09iamVjdH0gTnVsbCBpZiBhIGNhbGxiYWNrIGlzIHByb3ZpZGVkLCBhIGBQcm9taXNlYCBvYmplY3Qgb3RoZXJ3aXNlXG4gICAqL1xuICBDb25zdHIucHJvdG90eXBlLnJlbW92ZUZyb21NeVNhdmVkU2hvd3MgPSBmdW5jdGlvbiAoXG4gICAgc2hvd0lkcyxcbiAgICBvcHRpb25zLFxuICAgIGNhbGxiYWNrXG4gICkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL21lL3Nob3dzJyxcbiAgICAgIHR5cGU6ICdERUxFVEUnLFxuICAgICAgcG9zdERhdGE6IHNob3dJZHNcbiAgICB9O1xuICAgIHJldHVybiBfY2hlY2tQYXJhbXNBbmRQZXJmb3JtUmVxdWVzdChyZXF1ZXN0RGF0YSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgdXNlcidzIHNhdmVkIHNob3dzIGNvbnRhaW5zIGEgY2VydGFpbiBsaXN0IG9mIHNob3dzLlxuICAgKiBTZWUgW0NoZWNrIEN1cnJlbnQgVXNlcidzIFNhdmVkIFNob3dzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL2xpYnJhcnkvY2hlY2stdXNlcnMtc2F2ZWQtc2hvd3MvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2hvd0lkcyBUaGUgaWRzIG9mIHRoZSBzaG93cy4gSWYgeW91IGtub3cgdGhlaXIgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZWlyIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5jb250YWluc015U2F2ZWRTaG93cyA9IGZ1bmN0aW9uIChcbiAgICBzaG93SWRzLFxuICAgIG9wdGlvbnMsXG4gICAgY2FsbGJhY2tcbiAgKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge1xuICAgICAgdXJsOiBfYmFzZVVyaSArICcvbWUvc2hvd3MvY29udGFpbnMnLFxuICAgICAgcGFyYW1zOiB7IGlkczogc2hvd0lkcy5qb2luKCcsJykgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGVwaXNvZGVzIG9mIGEgc2hvdyBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IGEgU2hvdydzIEVwaXNvZGVzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL3Nob3dzL2dldC1zaG93cy1lcGlzb2Rlcy8pIG9uXG4gICAqIHRoZSBTcG90aWZ5IERldmVsb3BlciBzaXRlIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlbmRwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNob3dJZCBUaGUgaWQgb2YgdGhlIHNob3cuIElmIHlvdSBrbm93IHRoZSBTcG90aWZ5IFVSSSBpdCBpcyBlYXN5XG4gICAqIHRvIGZpbmQgdGhlIHNob3cgaWQgKGUuZy4gc3BvdGlmeTpzaG93OjxoZXJlX2lzX3RoZV9zaG93X2lkPilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQSBKU09OIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oT2JqZWN0LE9iamVjdCl9IGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgMiBwYXJhbWV0ZXJzLiBUaGUgZmlyc3RcbiAgICogb25lIGlzIHRoZSBlcnJvciBvYmplY3QgKG51bGwgaWYgbm8gZXJyb3IpLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE51bGwgaWYgYSBjYWxsYmFjayBpcyBwcm92aWRlZCwgYSBgUHJvbWlzZWAgb2JqZWN0IG90aGVyd2lzZVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRTaG93RXBpc29kZXMgPSBmdW5jdGlvbiAoc2hvd0lkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IHtcbiAgICAgIHVybDogX2Jhc2VVcmkgKyAnL3Nob3dzLycgKyBzaG93SWQgKyAnL2VwaXNvZGVzJ1xuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYW4gZXBpc29kZSBmcm9tIHRoZSBTcG90aWZ5IGNhdGFsb2cuXG4gICAqIFNlZSBbR2V0IGFuIEVwaXNvZGVdKGh0dHBzOi8vZGV2ZWxvcGVyLnNwb3RpZnkuY29tL2RvY3VtZW50YXRpb24vd2ViLWFwaS9yZWZlcmVuY2UvZXBpc29kZXMvZ2V0LWFuLWVwaXNvZGUvKSBvblxuICAgKiB0aGUgU3BvdGlmeSBEZXZlbG9wZXIgc2l0ZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZW5kcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlcGlzb2RlSWQgVGhlIGlkIG9mIHRoZSBlcGlzb2RlLiBJZiB5b3Uga25vdyB0aGUgU3BvdGlmeSBVUkkgaXQgaXMgZWFzeVxuICAgKiB0byBmaW5kIHRoZSBlcGlzb2RlIGlkIChlLmcuIHNwb3RpZnk6ZXBpc29kZTo8aGVyZV9pc190aGVfZXBpc29kZV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0RXBpc29kZSA9IGZ1bmN0aW9uIChlcGlzb2RlSWQsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0ge307XG4gICAgcmVxdWVzdERhdGEudXJsID0gX2Jhc2VVcmkgKyAnL2VwaXNvZGVzLycgKyBlcGlzb2RlSWQ7XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgbXVsdGlwbGUgZXBpc29kZXMgZnJvbSB0aGUgU3BvdGlmeSBjYXRhbG9nLlxuICAgKiBTZWUgW0dldCBTZXZlcmFsIEVwaXNvZGVzXShodHRwczovL2RldmVsb3Blci5zcG90aWZ5LmNvbS9kb2N1bWVudGF0aW9uL3dlYi1hcGkvcmVmZXJlbmNlL2VwaXNvZGVzL2dldC1zZXZlcmFsLWVwaXNvZGVzLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVuZHBvaW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGVwaXNvZGVJZHMgVGhlIGlkcyBvZiB0aGUgZXBpc29kZXMuIElmIHlvdSBrbm93IHRoZWlyIFNwb3RpZnkgVVJJIGl0IGlzIGVhc3lcbiAgICogdG8gZmluZCB0aGVpciBlcGlzb2RlIGlkIChlLmcuIHNwb3RpZnk6ZXBpc29kZTo8aGVyZV9pc190aGVfZXBpc29kZV9pZD4pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEEgSlNPTiBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgY2FuIGJlIHBhc3NlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKE9iamVjdCxPYmplY3QpfSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0aGF0IHJlY2VpdmVzIDIgcGFyYW1ldGVycy4gVGhlIGZpcnN0XG4gICAqIG9uZSBpcyB0aGUgZXJyb3Igb2JqZWN0IChudWxsIGlmIG5vIGVycm9yKSwgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAgICogQHJldHVybiB7T2JqZWN0fSBOdWxsIGlmIGEgY2FsbGJhY2sgaXMgcHJvdmlkZWQsIGEgYFByb21pc2VgIG9iamVjdCBvdGhlcndpc2VcbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuZ2V0RXBpc29kZXMgPSBmdW5jdGlvbiAoZXBpc29kZUlkcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSB7XG4gICAgICB1cmw6IF9iYXNlVXJpICsgJy9lcGlzb2Rlcy8nLFxuICAgICAgcGFyYW1zOiB7IGlkczogZXBpc29kZUlkcy5qb2luKCcsJykgfVxuICAgIH07XG4gICAgcmV0dXJuIF9jaGVja1BhcmFtc0FuZFBlcmZvcm1SZXF1ZXN0KHJlcXVlc3REYXRhLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFjY2VzcyB0b2tlbiBpbiB1c2UuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gYWNjZXNzVG9rZW4gVGhlIGFjY2VzcyB0b2tlblxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5nZXRBY2Nlc3NUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2FjY2Vzc1Rva2VuO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY2Nlc3MgdG9rZW4gdG8gYmUgdXNlZC5cbiAgICogU2VlIFt0aGUgQXV0aG9yaXphdGlvbiBHdWlkZV0oaHR0cHM6Ly9kZXZlbG9wZXIuc3BvdGlmeS5jb20vd2ViLWFwaS9hdXRob3JpemF0aW9uLWd1aWRlLykgb25cbiAgICogdGhlIFNwb3RpZnkgRGV2ZWxvcGVyIHNpdGUgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgb2J0YWluaW5nIGFuIGFjY2VzcyB0b2tlbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjY2Vzc1Rva2VuIFRoZSBhY2Nlc3MgdG9rZW5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIENvbnN0ci5wcm90b3R5cGUuc2V0QWNjZXNzVG9rZW4gPSBmdW5jdGlvbiAoYWNjZXNzVG9rZW4pIHtcbiAgICBfYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKyB0byBiZSB1c2VkLiBFLmcuIFEsIHdoZW4uXG4gICAqIFNlZSBbQ29uZm9ybWFudCBJbXBsZW1lbnRhdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9taXNlcy1hcGx1cy9wcm9taXNlcy1zcGVjL2Jsb2IvbWFzdGVyL2ltcGxlbWVudGF0aW9ucy5tZClcbiAgICogZm9yIGEgbGlzdCBvZiBzb21lIGF2YWlsYWJsZSBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBQcm9taXNlSW1wbGVtZW50YXRpb24gQSBQcm9taXNlcy9BKyB2YWxpZCBpbXBsZW1lbnRhdGlvblxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIGltcGxlbWVudGF0aW9uIGJlaW5nIHNldCBkb2Vzbid0IGNvbmZvcm0gd2l0aCBQcm9taXNlcy9BK1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgQ29uc3RyLnByb3RvdHlwZS5zZXRQcm9taXNlSW1wbGVtZW50YXRpb24gPSBmdW5jdGlvbiAoUHJvbWlzZUltcGxlbWVudGF0aW9uKSB7XG4gICAgdmFyIHZhbGlkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBwID0gbmV3IFByb21pc2VJbXBsZW1lbnRhdGlvbihmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgcC50aGVuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwLmNhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIF9wcm9taXNlSW1wbGVtZW50YXRpb24gPSBQcm9taXNlSW1wbGVtZW50YXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENvbnN0cjtcbn0pKCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gU3BvdGlmeVdlYkFwaTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3BvdGlmeSc7XHJcbmltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gJ3Nwb3RpZnktd2ViLWFwaS1qcyc7XHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG5jb25zdCBzcG90aWZ5ID0gbmV3IFNwb3RpZnlXZWJBcGkoKTtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt7IHVzZXIsIHRva2VuIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX3Rva2VuID0gZ2V0VG9rZW4oKTtcclxuICAgICAgICBpZiAoX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIC8vIHNldCB0b2tlbiBpbiBzdGF0ZVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1RPS0VOJyxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBfdG9rZW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSB0b2tlbiBmcm9tIHRoZSB1cmxcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICAgICAgICAvLyBhdXRoZW50aWNhdGUgdXNpbmcgdGhpcyB0b2tlbiBcclxuICAgICAgICAgICAgY29uc3QgYXV0aGVudGljYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3BvdGlmeS5zZXRBY2Nlc3NUb2tlbihfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHNwb3RpZnkuZ2V0TWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFuIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlciwgdG9rZW5dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0b2tlbiA/XHJcbiAgICAgICAgICAgICAgICA8UGxheWVyIC8+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=