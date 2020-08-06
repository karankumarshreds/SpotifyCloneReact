module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_body_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/body.css */ "./styles/body.css");
/* harmony import */ var _styles_body_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_body_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
/* harmony import */ var _song_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song-row */ "./components/song-row.js");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "@material-ui/icons/PlayCircleFilled");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ "@material-ui/icons/MoreHoriz");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //ICONS





const Body = ({
  spotify
}) => {
  var _weekly$tracks, _weekly$tracks$items, _user$images$;

  const {
    0: {
      user,
      weekly
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_4__["DataContext"]);
  const songRows = weekly === null || weekly === void 0 ? void 0 : (_weekly$tracks = weekly.tracks) === null || _weekly$tracks === void 0 ? void 0 : (_weekly$tracks$items = _weekly$tracks.items) === null || _weekly$tracks$items === void 0 ? void 0 : _weekly$tracks$items.map(each => __jsx(_song_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: each.added_at,
    track: each.track,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 57
    }
  }));
  return __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "body__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    className: "body__avatar",
    src: (user === null || user === void 0 ? void 0 : (_user$images$ = user.images[0]) === null || _user$images$ === void 0 ? void 0 : _user$images$.url) || "/face.jpg",
    style: {
      width: 230,
      height: 230
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "body__infoText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "PLAYLIST"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "Discover Weekly"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, weekly === null || weekly === void 0 ? void 0 : weekly.description))), __jsx("div", {
    className: "body__songs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "body__icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "body__playButton",
    style: {
      fontSize: 70
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "body__songsList",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, songRows));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/footer.css */ "./styles/footer.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./components/slider.js");
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PlayCircleOutline */ "@material-ui/icons/PlayCircleOutline");
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Shuffle */ "@material-ui/icons/Shuffle");
/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Repeat */ "@material-ui/icons/Repeat");
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // ICONS







const Footer = () => {
  const {
    0: {
      item
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  return __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer__left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "footer__albumLogo",
    src: (item === null || item === void 0 ? void 0 : item.album.images[0].url) || "/art.jpg",
    alt: item === null || item === void 0 ? void 0 : item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), item ? __jsx("div", {
    className: "footer__songInfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, item.name || "Song name")) : __jsx("div", {
    className: "footer__songInfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "No song is playing"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "..."))), __jsx("div", {
    className: "footer__center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: "footer__playButton",
    style: {
      fontSize: 40
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "footer__right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/header.css */ "./styles/header.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = ({
  spotify
}) => {
  var _user$images$;

  const {
    0: {
      user
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_4__["DataContext"]);
  return __jsx("div", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header__left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("input", {
    placeholder: "Search for Songs, Artists or Podcasts...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "header__right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    src: (user === null || user === void 0 ? void 0 : (_user$images$ = user.images[0]) === null || _user$images$ === void 0 ? void 0 : _user$images$.url) || "/face.jpg",
    alt: "Karan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, user === null || user === void 0 ? void 0 : user.display_name)));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/login.css */ "./styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spotify */ "./components/spotify.js");
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Login = () => {
  console.log(_spotify__WEBPACK_IMPORTED_MODULE_2__["loginUrl"]);
  return __jsx("div", {
    className: "login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Logo.png",
    alt: "Logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: _spotify__WEBPACK_IMPORTED_MODULE_2__["loginUrl"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "LOGIN WITH SPOTIFY"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/player.js":
/*!******************************!*\
  !*** ./components/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/player.css */ "./styles/player.css");
/* harmony import */ var _styles_player_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_player_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body */ "./components/body.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\player.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Player = ({
  spotify
}) => {
  const {
    0: {
      token
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_5__["DataContext"]);
  return __jsx("div", {
    className: "player",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "player__body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./components/sidebar-options.js":
/*!***************************************!*\
  !*** ./components/sidebar-options.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\sidebar-options.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SideBarOption = ({
  Icon,
  title
}) => {
  return __jsx("div", {
    className: "sidebarOption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, Icon && __jsx(Icon, {
    className: "sidebarOption__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 22
    }
  }), Icon ? __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 21
    }
  }, title) : __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 40
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBarOption);

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/sidebar.css */ "./styles/sidebar.css");
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebar_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-options */ "./components/sidebar-options.js");
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "@material-ui/icons/HomeOutlined");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/SearchOutlined */ "@material-ui/icons/SearchOutlined");
/* harmony import */ var _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LibraryMusicOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LibraryMusicOutlined */ "@material-ui/icons/LibraryMusicOutlined");
/* harmony import */ var _material_ui_icons_LibraryMusicOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryMusicOutlined__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // ICONS





const SideBar = () => {
  var _playlist$items;

  const {
    0: {
      playlist
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  return __jsx("div", {
    className: "sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "sidebar__logo",
    src: "https://cdn.clipart.email/2ea3d82dff9347b2a5269072f040169c_spotify-logo-and-brand-assets_2362-708.png",
    alt: "spotify-logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), __jsx(_sidebar_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Icon: _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_4___default.a,
    title: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(_sidebar_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Icon: _material_ui_icons_SearchOutlined__WEBPACK_IMPORTED_MODULE_5___default.a,
    title: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_sidebar_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    Icon: _material_ui_icons_LibraryMusicOutlined__WEBPACK_IMPORTED_MODULE_6___default.a,
    title: "Your Library",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx("strong", {
    className: "sidebar__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "PLAYLISTS"), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), playlist === null || playlist === void 0 ? void 0 : (_playlist$items = playlist.items) === null || _playlist$items === void 0 ? void 0 : _playlist$items.map(each => __jsx(_sidebar_options__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: each.id,
    title: each.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./components/slider.js":
/*!******************************!*\
  !*** ./components/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContinuousSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "@material-ui/core/Slider");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VolumeDown */ "@material-ui/icons/VolumeDown");
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "@material-ui/icons/VolumeUp");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_PlaylistPlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PlaylistPlay */ "@material-ui/icons/PlaylistPlay");
/* harmony import */ var _material_ui_icons_PlaylistPlay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlaylistPlay__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\slider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: 200
  }
});
function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_PlaylistPlay__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "slider",
    value: value,
    onChange: handleChange,
    "aria-labelledby": "continuous-slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }))));
}

/***/ }),

/***/ "./components/song-row.js":
/*!********************************!*\
  !*** ./components/song-row.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_song_row_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/song-row.css */ "./styles/song-row.css");
/* harmony import */ var _styles_song_row_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_song_row_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "@material-ui/icons/PlayCircleFilled");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PauseCircleFilled */ "@material-ui/icons/PauseCircleFilled");
/* harmony import */ var _material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\song-row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //ICONS




const SongRow = ({
  track
}) => {
  var _track$album$images$;

  const {
    0: {
      song,
      playing
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_2__["DataContext"]);
  const [state, setState] = useState("paused");
  let Icon = (song === null || song === void 0 ? void 0 : song.preview_url) === (track === null || track === void 0 ? void 0 : track.preview_url) ? __jsx(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }) : __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  });
  const player = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const playSong = async () => {
    player.current.src = track.preview_url;
    player.current.play();
    dispatch({
      type: 'SET_SONG',
      song: track
    });
    dispatch({
      type: 'SET_PLAYING',
      playing: !playing
    });
  };

  return __jsx("div", {
    className: "songRow",
    onClick: () => playSong(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("audio", {
    ref: player,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "songRow__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, track.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, track.artists.map(artist => artist.name).join(","), " -", " ", track.album.name)), __jsx("div", {
    className: "songRow__play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, Icon));
};

/* harmony default export */ __webpack_exports__["default"] = (SongRow);

/***/ }),

/***/ "./components/spotify.js":
/*!*******************************!*\
  !*** ./components/spotify.js ***!
  \*******************************/
/*! exports provided: authEndpoint, getToken, loginUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authEndpoint", function() { return authEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUrl", function() { return loginUrl; });
const authEndpoint = "https://accounts.spotify.com/en/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "379a18794eed412a83946d11a16fb463";
const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state", // for playback 
"streaming", "user-read-email", "user-read-private"];
const getToken = () => {
  // goes to the hash in the current url 
  return window.location.hash.split('&')[0].split("=")[1];
};
const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

/***/ }),

/***/ "./context/context-provider.js":
/*!*************************************!*\
  !*** ./context/context-provider.js ***!
  \*************************************/
/*! exports provided: DataContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\context\\context-provider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DataContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const DataContextProvider = ({
  initialState,
  reducer,
  children
}) => {
  return __jsx(DataContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (DataContextProvider);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login */ "./components/login.js");
/* harmony import */ var _components_spotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/spotify */ "./components/spotify.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spotify-web-api-js */ "spotify-web-api-js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/player */ "./components/player.js");
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const spotify = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default.a();

const LandingPage = () => {
  const {
    0: {
      user,
      token
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_6__["DataContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const _token = Object(_components_spotify__WEBPACK_IMPORTED_MODULE_3__["getToken"])();

    if (_token) {
      // set token in state
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      }); // clear the token from the url

      window.location.hash = ""; // authenticate using this token 

      const authenticate = async () => {
        spotify.setAccessToken(_token);
        const user = await spotify.getMe();
        console.log('USER', user); // dispatch an action

        dispatch({
          type: 'SET_USER',
          user
        });
        const playlist = await spotify.getUserPlaylists();
        console.log('PLAYLIST', playlist);
        dispatch({
          type: 'SET_PLAYLIST',
          playlist
        });
        const weekly = await spotify.getPlaylist('44hjVgTeQ1RnMmslYupmlQ');
        console.log('WEEKLY', weekly);
        dispatch({
          type: 'SET_WEEKLY',
          weekly
        });
      };

      authenticate();
    }
  }, [user, token]);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, token ? __jsx(_components_player__WEBPACK_IMPORTED_MODULE_5__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }) : __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(_components_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./styles/body.css":
/*!*************************!*\
  !*** ./styles/body.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/footer.css":
/*!***************************!*\
  !*** ./styles/footer.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/login.css":
/*!**************************!*\
  !*** ./styles/login.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/player.css":
/*!***************************!*\
  !*** ./styles/player.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/sidebar.css":
/*!****************************!*\
  !*** ./styles/sidebar.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/song-row.css":
/*!*****************************!*\
  !*** ./styles/song-row.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/HomeOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/HomeOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeOutlined");

/***/ }),

/***/ "@material-ui/icons/LibraryMusicOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/LibraryMusicOutlined" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryMusicOutlined");

/***/ }),

/***/ "@material-ui/icons/MoreHoriz":
/*!***********************************************!*\
  !*** external "@material-ui/icons/MoreHoriz" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "@material-ui/icons/PauseCircleFilled":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/PauseCircleFilled" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseCircleFilled");

/***/ }),

/***/ "@material-ui/icons/PlayCircleFilled":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PlayCircleFilled" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleFilled");

/***/ }),

/***/ "@material-ui/icons/PlayCircleOutline":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/PlayCircleOutline" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleOutline");

/***/ }),

/***/ "@material-ui/icons/PlaylistPlay":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PlaylistPlay" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlaylistPlay");

/***/ }),

/***/ "@material-ui/icons/Repeat":
/*!********************************************!*\
  !*** external "@material-ui/icons/Repeat" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Repeat");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/SearchOutlined":
/*!****************************************************!*\
  !*** external "@material-ui/icons/SearchOutlined" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchOutlined");

/***/ }),

/***/ "@material-ui/icons/Shuffle":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Shuffle" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Shuffle");

/***/ }),

/***/ "@material-ui/icons/SkipNext":
/*!**********************************************!*\
  !*** external "@material-ui/icons/SkipNext" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNext");

/***/ }),

/***/ "@material-ui/icons/SkipPrevious":
/*!**************************************************!*\
  !*** external "@material-ui/icons/SkipPrevious" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPrevious");

/***/ }),

/***/ "@material-ui/icons/VolumeDown":
/*!************************************************!*\
  !*** external "@material-ui/icons/VolumeDown" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VolumeDown");

/***/ }),

/***/ "@material-ui/icons/VolumeUp":
/*!**********************************************!*\
  !*** external "@material-ui/icons/VolumeUp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VolumeUp");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "spotify-web-api-js":
/*!*************************************!*\
  !*** external "spotify-web-api-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("spotify-web-api-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29uZy1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG90aWZ5LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkJvZHkiLCJzcG90aWZ5IiwidXNlciIsIndlZWtseSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNvbmdSb3dzIiwidHJhY2tzIiwiaXRlbXMiLCJtYXAiLCJlYWNoIiwiYWRkZWRfYXQiLCJ0cmFjayIsImltYWdlcyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJmb250U2l6ZSIsIkZvb3RlciIsIml0ZW0iLCJhbGJ1bSIsIm5hbWUiLCJIZWFkZXIiLCJkaXNwbGF5X25hbWUiLCJMb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblVybCIsIlBsYXllciIsInRva2VuIiwiZGlzcGF0Y2giLCJTaWRlQmFyT3B0aW9uIiwiSWNvbiIsInRpdGxlIiwiU2lkZUJhciIsInBsYXlsaXN0IiwiSG9tZU91dGxpbmVkSWNvbiIsIlNlYXJjaE91dGxpbmVkSWNvbiIsIkxpYnJhcnlNdXNpY091dGxpbmVkSWNvbiIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJDb250aW51b3VzU2xpZGVyIiwiY2xhc3NlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIlNvbmdSb3ciLCJzb25nIiwicGxheWluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJwcmV2aWV3X3VybCIsInBsYXllciIsInVzZVJlZiIsInBsYXlTb25nIiwiY3VycmVudCIsInNyYyIsInBsYXkiLCJ0eXBlIiwiYXJ0aXN0cyIsImFydGlzdCIsImpvaW4iLCJhdXRoRW5kcG9pbnQiLCJyZWRpcmVjdFVyaSIsImNsaWVudElkIiwic2NvcGVzIiwiZ2V0VG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIlNwb3RpZnlXZWJBcGkiLCJMYW5kaW5nUGFnZSIsInVzZUVmZmVjdCIsIl90b2tlbiIsImF1dGhlbnRpY2F0ZSIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJnZXRVc2VyUGxheWxpc3RzIiwiZ2V0UGxheWxpc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlCO0FBQUE7O0FBQzFCLFFBQU07QUFBQSxPQUFDO0FBQUVDLFVBQUY7QUFBUUM7QUFBUjtBQUFELE1BQXFCQyx3REFBVSxDQUFDQyxxRUFBRCxDQUFyQztBQUNBLFFBQU1DLFFBQVEsR0FBR0gsTUFBSCxhQUFHQSxNQUFILHlDQUFHQSxNQUFNLENBQUVJLE1BQVgsMkVBQUcsZUFBZ0JDLEtBQW5CLHlEQUFHLHFCQUF1QkMsR0FBdkIsQ0FBMkJDLElBQUksSUFBSSxNQUFDLGlEQUFEO0FBQVMsT0FBRyxFQUFFQSxJQUFJLENBQUNDLFFBQW5CO0FBQTZCLFNBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DLENBQWpCO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFFWCxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksYUFBUyxFQUFDLGNBRGQ7QUFFSSxPQUFHLEVBQUUsQ0FBQUMsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw2QkFBQUEsSUFBSSxDQUFFVyxNQUFOLENBQWEsQ0FBYixpRUFBaUJDLEdBQWpCLEtBQXdCLFdBRmpDO0FBR0ksU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLFlBQU0sRUFBRTtBQUF0QixLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU1JO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWIsTUFBSixhQUFJQSxNQUFKLHVCQUFJQSxNQUFNLENBQUVjLFdBQVosQ0FISixDQU5KLENBRkosRUFjSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBFQUFEO0FBQ0ksYUFBUyxFQUFDLGtCQURkO0FBRUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBSUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQURKLENBZEosRUF1Qkk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWixRQURMLENBdkJKLENBREo7QUE2QkgsQ0FoQ0Q7O0FBaUNlTixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1tQixNQUFNLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQztBQUFFQztBQUFGO0FBQUQsTUFBYWhCLHdEQUFVLENBQUNDLHFFQUFELENBQTdCO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyxtQkFEZDtBQUVJLE9BQUcsRUFBRSxDQUFBZSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUMsS0FBTixDQUFZUixNQUFaLENBQW1CLENBQW5CLEVBQXNCQyxHQUF0QixLQUE2QixVQUZ0QztBQUdJLE9BQUcsRUFBRU0sSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVFLElBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBTUtGLElBQUksR0FDRDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQSxJQUFJLENBQUNFLElBQUwsSUFBYSxXQUFsQixDQURKLENBREMsR0FNRztBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSixDQVpaLENBREosRUFtQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUosY0FBUSxFQUFFO0FBQVosS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxzRUFBRDtBQUFrQixTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywyRUFBRDtBQUF1QixhQUFTLEVBQUMsb0JBQWpDO0FBQXNELFNBQUssRUFBRTtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLGtFQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsZ0VBQUQ7QUFBWSxTQUFLLEVBQUU7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBbkJKLEVBMEJJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBMUJKLENBREo7QUFnQ0gsQ0FsQ0Q7O0FBbUNlQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRXRCO0FBQUYsQ0FBRCxLQUFpQjtBQUFBOztBQUU1QixRQUFNO0FBQUEsT0FBQztBQUFFQztBQUFGO0FBQUQsTUFBYUUsd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBN0I7QUFFQSxTQUVJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTyxlQUFXLEVBQUMsMENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLE9BQUcsRUFBRSxDQUFBSCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDZCQUFBQSxJQUFJLENBQUVXLE1BQU4sQ0FBYSxDQUFiLGlFQUFpQkMsR0FBakIsS0FBd0IsV0FBckM7QUFBa0QsT0FBRyxFQUFDLE9BQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1osSUFBTCxhQUFLQSxJQUFMLHVCQUFLQSxJQUFJLENBQUVzQixZQUFYLENBRkosQ0FMSixDQUZKO0FBYUgsQ0FqQkQ7O0FBbUJlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQSxNQUFNRSxLQUFLLEdBQUcsTUFBTTtBQUNoQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLGlEQUFaO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxVQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFHLFFBQUksRUFBRUEsaURBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixDQURKO0FBTUgsQ0FSRDs7QUFVZUgsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLE1BQU0sR0FBRyxDQUFDO0FBQUU1QjtBQUFGLENBQUQsS0FBaUI7QUFDNUIsUUFBTTtBQUFBLE9BQUM7QUFBRTZCO0FBQUYsS0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBd0IzQix3REFBVSxDQUFDQyxxRUFBRCxDQUF4QztBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDZDQUFEO0FBQU0sV0FBTyxFQUFFSixPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBS0ksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosQ0FESjtBQVNILENBWEQ7O0FBYWU0QixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQU1HLGFBQWEsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQXFCO0FBQ3ZDLFNBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tELElBQUksSUFBSSxNQUFDLElBQUQ7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEYixFQUVLQSxJQUFJLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLQyxLQUFMLENBQUgsR0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxLQUFKLENBRi9CLENBREo7QUFNSCxDQVBEOztBQVFlRiw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU07QUFBQSxPQUFDO0FBQUVDO0FBQUY7QUFBRCxNQUFpQmhDLHdEQUFVLENBQUNDLHFFQUFELENBQWpDO0FBQ0EsU0FDSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQ0ksT0FBRyxFQUFDLHVHQURSO0FBRUksT0FBRyxFQUFDLGtCQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUlJLE1BQUMsd0RBQUQ7QUFBZSxRQUFJLEVBQUVnQyxzRUFBckI7QUFBdUMsU0FBSyxFQUFDLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsd0RBQUQ7QUFBZSxRQUFJLEVBQUVDLHdFQUFyQjtBQUF5QyxTQUFLLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUksTUFBQyx3REFBRDtBQUFlLFFBQUksRUFBRUMsOEVBQXJCO0FBQStDLFNBQUssRUFBQyxjQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSTtBQUFRLGFBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixFQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVLSCxRQVZMLGFBVUtBLFFBVkwsMENBVUtBLFFBQVEsQ0FBRTVCLEtBVmYsb0RBVUssZ0JBQWlCQyxHQUFqQixDQUFxQkMsSUFBSSxJQUN0QixNQUFDLHdEQUFEO0FBQWUsT0FBRyxFQUFFQSxJQUFJLENBQUM4QixFQUF6QjtBQUE2QixTQUFLLEVBQUU5QixJQUFJLENBQUNZLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxDQVZMLENBREo7QUFnQkgsQ0FsQkQ7O0FBbUJlYSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGNUIsU0FBSyxFQUFFO0FBREw7QUFEbUIsQ0FBRCxDQUE1QjtBQU1lLFNBQVM2QixnQkFBVCxHQUE0QjtBQUN2QyxRQUFNQyxPQUFPLEdBQUdKLFNBQVMsRUFBekI7QUFDQSxRQUFNLENBQUNLLEtBQUQsRUFBUUMsUUFBUixJQUFvQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBMUI7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsUUFBUixLQUFxQjtBQUN0Q0wsWUFBUSxDQUFDSyxRQUFELENBQVI7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUVQLE9BQU8sQ0FBQ0YsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLENBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyw2REFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixFQU9JLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFDSSxhQUFTLEVBQUMsUUFEZDtBQUVJLFNBQUssRUFBRUcsS0FGWDtBQUdJLFlBQVEsRUFBRUksWUFIZDtBQUlJLHVCQUFnQixtQkFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixDQURKO0FBbUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsT0FBTyxHQUFHLENBQUM7QUFBRXpDO0FBQUYsQ0FBRCxLQUFlO0FBQUE7O0FBQzNCLFFBQU07QUFBQSxPQUFDO0FBQUUwQyxVQUFGO0FBQVFDO0FBQVIsS0FBRDtBQUFBLE9BQW9CeEI7QUFBcEIsTUFBZ0MzQix3REFBVSxDQUFDQyxxRUFBRCxDQUFoRDtBQUVBLFFBQU0sQ0FBQ21ELEtBQUQsRUFBUUMsUUFBUixJQUFvQlIsUUFBUSxDQUFDLFFBQUQsQ0FBbEM7QUFFQSxNQUFJaEIsSUFBSSxHQUFHLENBQUFxQixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUksV0FBTixPQUFzQjlDLEtBQXRCLGFBQXNCQSxLQUF0Qix1QkFBc0JBLEtBQUssQ0FBRThDLFdBQTdCLElBQ0wsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssR0FFTCxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGTjtBQUlBLFFBQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFlBQVk7QUFDekJGLFVBQU0sQ0FBQ0csT0FBUCxDQUFlQyxHQUFmLEdBQXFCbkQsS0FBSyxDQUFDOEMsV0FBM0I7QUFDQUMsVUFBTSxDQUFDRyxPQUFQLENBQWVFLElBQWY7QUFDQWpDLFlBQVEsQ0FBQztBQUNMa0MsVUFBSSxFQUFFLFVBREQ7QUFFTFgsVUFBSSxFQUFFMUM7QUFGRCxLQUFELENBQVI7QUFJQW1CLFlBQVEsQ0FBQztBQUNMa0MsVUFBSSxFQUFFLGFBREQ7QUFFTFYsYUFBTyxFQUFFLENBQUNBO0FBRkwsS0FBRCxDQUFSO0FBSUgsR0FYRDs7QUFZQSxTQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFFLE1BQU1NLFFBQVEsRUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFFRixNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQ0ksT0FBRywwQkFBRS9DLEtBQUssQ0FBQ1MsS0FBTixDQUFZUixNQUFaLENBQW1CLENBQW5CLENBQUYseURBQUUscUJBQXVCQyxHQURoQztBQUVJLE9BQUcsRUFBQyxXQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUtJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsS0FBSyxDQUFDVSxJQUFYLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tWLEtBQUssQ0FBQ3NELE9BQU4sQ0FBY3pELEdBQWQsQ0FBa0IwRCxNQUFNLElBQUlBLE1BQU0sQ0FBQzdDLElBQW5DLEVBQXlDOEMsSUFBekMsQ0FBOEMsR0FBOUMsQ0FETCxRQUMyRCxHQUQzRCxFQUVLeEQsS0FBSyxDQUFDUyxLQUFOLENBQVlDLElBRmpCLENBRkosQ0FMSixFQVlJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVyxJQURMLENBWkosQ0FESjtBQWtCSCxDQXhDRDs7QUF5Q2VvQixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNZ0IsWUFBWSxHQUFHLDJDQUFyQjtBQUNQLE1BQU1DLFdBQVcsR0FBRyx3QkFBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsa0NBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQ1gsNkJBRFcsRUFFWCwyQkFGVyxFQUdYLDBCQUhXLEVBSVgsZUFKVyxFQUtYLDRCQUxXLEVBTVg7QUFDQSxXQVBXLEVBT0UsaUJBUEYsRUFPcUIsbUJBUHJCLENBQWY7QUFTTyxNQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUMxQjtBQUNBLFNBQU9DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEVBQW1DQSxLQUFuQyxDQUF5QyxHQUF6QyxFQUE4QyxDQUE5QyxDQUFQO0FBQ0gsQ0FITTtBQUlBLE1BQU1qRCxRQUFRLEdBQUksR0FBRXlDLFlBQWEsY0FBYUUsUUFBUyxpQkFBZ0JELFdBQVksVUFBU0UsTUFBTSxDQUFDSixJQUFQLENBQVksS0FBWixDQUFtQix1Q0FBL0csQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUDtBQUVPLE1BQU0vRCxXQUFXLEdBQUd5RSwyREFBYSxFQUFqQzs7QUFFUCxNQUFNQyxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLGNBQUY7QUFBZ0JDLFNBQWhCO0FBQXlCQztBQUF6QixDQUFELEtBQXlDO0FBRWpFLFNBQ0ksTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVDLHdEQUFVLENBQUNGLE9BQUQsRUFBVUQsWUFBVixDQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tFLFFBREwsQ0FESjtBQU1ILENBUkQ7O0FBVWVILGtGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNOUUsT0FBTyxHQUFHLElBQUltRix5REFBSixFQUFoQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUV0QixRQUFNO0FBQUEsT0FBQztBQUFFbkYsVUFBRjtBQUFRNEI7QUFBUixLQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQThCM0Isd0RBQVUsQ0FBQ0MscUVBQUQsQ0FBOUM7QUFFQWlGLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1DLE1BQU0sR0FBR2Qsb0VBQVEsRUFBdkI7O0FBQ0EsUUFBSWMsTUFBSixFQUFZO0FBQ1I7QUFDQXhELGNBQVEsQ0FBQztBQUNMa0MsWUFBSSxFQUFFLFdBREQ7QUFFTG5DLGFBQUssRUFBRXlEO0FBRkYsT0FBRCxDQUFSLENBRlEsQ0FNUjs7QUFDQWIsWUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixFQUF2QixDQVBRLENBUVI7O0FBQ0EsWUFBTVksWUFBWSxHQUFHLFlBQVk7QUFDN0J2RixlQUFPLENBQUN3RixjQUFSLENBQXVCRixNQUF2QjtBQUNBLGNBQU1yRixJQUFJLEdBQUcsTUFBTUQsT0FBTyxDQUFDeUYsS0FBUixFQUFuQjtBQUNBaEUsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQnpCLElBQXBCLEVBSDZCLENBSTdCOztBQUNBNkIsZ0JBQVEsQ0FBQztBQUNMa0MsY0FBSSxFQUFFLFVBREQ7QUFFTC9EO0FBRkssU0FBRCxDQUFSO0FBSUEsY0FBTWtDLFFBQVEsR0FBRyxNQUFNbkMsT0FBTyxDQUFDMEYsZ0JBQVIsRUFBdkI7QUFDQWpFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JTLFFBQXhCO0FBQ0FMLGdCQUFRLENBQUM7QUFDTGtDLGNBQUksRUFBRSxjQUREO0FBRUw3QjtBQUZLLFNBQUQsQ0FBUjtBQUlBLGNBQU1qQyxNQUFNLEdBQUcsTUFBTUYsT0FBTyxDQUFDMkYsV0FBUixDQUFvQix3QkFBcEIsQ0FBckI7QUFDQWxFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0J4QixNQUF0QjtBQUNBNEIsZ0JBQVEsQ0FBQztBQUNMa0MsY0FBSSxFQUFFLFlBREQ7QUFFTDlEO0FBRkssU0FBRCxDQUFSO0FBSUgsT0FyQkQ7O0FBc0JBcUYsa0JBQVk7QUFDZjtBQUNKLEdBbkNRLEVBbUNOLENBQUN0RixJQUFELEVBQU80QixLQUFQLENBbkNNLENBQVQ7QUFxQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssR0FDRixNQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFFN0IsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLEdBR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSlIsQ0FESjtBQVdILENBcEREOztBQXNEZW9GLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9ib2R5LmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuaW1wb3J0IFNvbmdSb3cgZnJvbSAnLi9zb25nLXJvdyc7XHJcblxyXG4vL0lDT05TXHJcbmltcG9ydCBQbGF5Q2lyY2xlRmlsbGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZCc7XHJcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuaW1wb3J0IE1vcmVIb3Jpekljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3Jpeic7XHJcblxyXG5jb25zdCBCb2R5ID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcbiAgICBjb25zdCBbeyB1c2VyLCB3ZWVrbHkgfV0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHNvbmdSb3dzID0gd2Vla2x5Py50cmFja3M/Lml0ZW1zPy5tYXAoZWFjaCA9PiA8U29uZ1JvdyBrZXk9e2VhY2guYWRkZWRfYXR9IHRyYWNrPXtlYWNoLnRyYWNrfSAvPilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9keV9fYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LmltYWdlc1swXT8udXJsIHx8IFwiL2ZhY2UuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIzMCwgaGVpZ2h0OiAyMzAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX2luZm9UZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QTEFZTElTVDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5EaXNjb3ZlciBXZWVrbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt3ZWVrbHk/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19zb25nc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib2R5X19wbGF5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDcwIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSG9yaXpJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9fc29uZ3NMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7c29uZ1Jvd3N9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9vdGVyLmNzcyc7XHJcbmltcG9ydCBDb250aW51b3VzU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG4vLyBJQ09OU1xyXG5pbXBvcnQgUGxheUNpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlT3V0bGluZSc7XHJcbmltcG9ydCBTa2lwTmV4dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NraXBOZXh0JztcclxuaW1wb3J0IFNraXBQcmV2aW91c0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NraXBQcmV2aW91cyc7XHJcbmltcG9ydCBTaHVmZmxlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2h1ZmZsZSc7XHJcbmltcG9ydCBSZXBlYXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZXBlYXQnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3sgaXRlbSB9XSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyX19hbGJ1bUxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbT8uYWxidW0uaW1hZ2VzWzBdLnVybCB8fCBcIi9hcnQuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtpdGVtID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19zb25nSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2l0ZW0ubmFtZSB8fCBcIlNvbmcgbmFtZVwifTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD57aXRlbS5hcnRpc3RzLm1hcCgoYXJ0aXN0KSA9PiBhcnRpc3QubmFtZSkuam9pbihcIiwgXCIpfTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29uZ0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5ObyBzb25nIGlzIHBsYXlpbmc8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2NlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFNodWZmbGVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFNraXBQcmV2aW91c0ljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8UGxheUNpcmNsZU91dGxpbmVJY29uIGNsYXNzTmFtZT1cImZvb3Rlcl9fcGxheUJ1dHRvblwiIHN0eWxlPXt7IGZvbnRTaXplOiA0MCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFNraXBOZXh0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxSZXBlYXRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGludW91c1NsaWRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0ICcuLi9zdHlsZXMvaGVhZGVyLmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHNwb3RpZnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt7IHVzZXIgfV0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgU29uZ3MsIEFydGlzdHMgb3IgUG9kY2FzdHMuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17dXNlcj8uaW1hZ2VzWzBdPy51cmwgfHwgXCIvZmFjZS5qcGdcIn0gYWx0PVwiS2FyYW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg0Pnt1c2VyPy5kaXNwbGF5X25hbWV9PC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0ICcuLi9zdHlsZXMvbG9naW4uY3NzJztcclxuaW1wb3J0IHsgbG9naW5VcmwgfSBmcm9tICcuL3Nwb3RpZnknO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2dpblVybCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvTG9nby5wbmdcIiBhbHQ9XCJMb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2xvZ2luVXJsfT5MT0dJTiBXSVRIIFNQT1RJRlk8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9wbGF5ZXIuY3NzJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJztcclxuaW1wb3J0IEJvZHkgZnJvbSAnLi9ib2R5JztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbmNvbnN0IFBsYXllciA9ICh7IHNwb3RpZnkgfSkgPT4ge1xyXG4gICAgY29uc3QgW3sgdG9rZW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgPEJvZHkgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaWRlQmFyT3B0aW9uID0gKHsgSWNvbiwgdGl0bGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJPcHRpb25cIj5cclxuICAgICAgICAgICAge0ljb24gJiYgPEljb24gY2xhc3NOYW1lPVwic2lkZWJhck9wdGlvbl9faWNvblwiIC8+fVxyXG4gICAgICAgICAgICB7SWNvbiA/IDxoNT57dGl0bGV9PC9oNT4gOiA8cD57dGl0bGV9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyT3B0aW9uOyIsImltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXIuY3NzJztcclxuaW1wb3J0IFNpZGVCYXJPcHRpb24gZnJvbSAnLi9zaWRlYmFyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG4vLyBJQ09OU1xyXG5pbXBvcnQgSG9tZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkJztcclxuaW1wb3J0IFNlYXJjaE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoT3V0bGluZWQnO1xyXG5pbXBvcnQgTGlicmFyeU11c2ljT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5TXVzaWNPdXRsaW5lZCc7XHJcblxyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3sgcGxheWxpc3QgfV0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhcl9fbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5jbGlwYXJ0LmVtYWlsLzJlYTNkODJkZmY5MzQ3YjJhNTI2OTA3MmYwNDAxNjljX3Nwb3RpZnktbG9nby1hbmQtYnJhbmQtYXNzZXRzXzIzNjItNzA4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJzcG90aWZ5LWxvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24gSWNvbj17SG9tZU91dGxpbmVkSWNvbn0gdGl0bGU9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24gSWNvbj17U2VhcmNoT3V0bGluZWRJY29ufSB0aXRsZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e0xpYnJhcnlNdXNpY091dGxpbmVkSWNvbn0gdGl0bGU9XCJZb3VyIExpYnJhcnlcIiAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJzaWRlYmFyX190aXRsZVwiPlBMQVlMSVNUUzwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAge3BsYXlsaXN0Py5pdGVtcz8ubWFwKGVhY2ggPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24ga2V5PXtlYWNoLmlkfSB0aXRsZT17ZWFjaC5uYW1lfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XHJcbmltcG9ydCBWb2x1bWVEb3duIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVEb3duJztcclxuaW1wb3J0IFZvbHVtZVVwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcCc7XHJcbmltcG9ydCBQbGF5bGlzdFBsYXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdFBsYXknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGludW91c1NsaWRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMzApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXlsaXN0UGxheUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZvbHVtZURvd24gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRpbnVvdXMtc2xpZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvc29uZy1yb3cuY3NzXCJcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlclwiO1xyXG5cclxuLy9JQ09OU1xyXG5pbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgUGF1c2VDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZCc7XHJcblxyXG5jb25zdCBTb25nUm93ID0gKHsgdHJhY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgW3sgc29uZywgcGxheWluZyB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFwicGF1c2VkXCIpO1xyXG5cclxuICAgIGxldCBJY29uID0gc29uZz8ucHJldmlld191cmwgPT09IHRyYWNrPy5wcmV2aWV3X3VybFxyXG4gICAgICAgID8gPFBhdXNlQ2lyY2xlRmlsbGVkSWNvbiAvPlxyXG4gICAgICAgIDogPFBsYXlDaXJjbGVGaWxsZWRJY29uIC8+XHJcblxyXG4gICAgY29uc3QgcGxheWVyID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBwbGF5U29uZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBwbGF5ZXIuY3VycmVudC5zcmMgPSB0cmFjay5wcmV2aWV3X3VybDtcclxuICAgICAgICBwbGF5ZXIuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1NPTkcnLFxyXG4gICAgICAgICAgICBzb25nOiB0cmFja1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1BMQVlJTkcnLFxyXG4gICAgICAgICAgICBwbGF5aW5nOiAhcGxheWluZ1xyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dcIiBvbkNsaWNrPXsoKSA9PiBwbGF5U29uZygpfT5cclxuICAgICAgICAgICAgPGF1ZGlvIHJlZj17cGxheWVyfSAvPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvbmdSb3dfX2FsYnVtXCJcclxuICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhbGJ1bS1hcnRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dHJhY2submFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFydGlzdHMubWFwKGFydGlzdCA9PiBhcnRpc3QubmFtZSkuam9pbihcIixcIil9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFsYnVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dfX3BsYXlcIj5cclxuICAgICAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU29uZ1JvdzsiLCJleHBvcnQgY29uc3QgYXV0aEVuZHBvaW50ID0gXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2VuL2F1dGhvcml6ZVwiO1xyXG5jb25zdCByZWRpcmVjdFVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xyXG5jb25zdCBjbGllbnRJZCA9IFwiMzc5YTE4Nzk0ZWVkNDEyYTgzOTQ2ZDExYTE2ZmI0NjNcIjtcclxuY29uc3Qgc2NvcGVzID0gW1xyXG4gICAgXCJ1c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmdcIixcclxuICAgIFwidXNlci1yZWFkLXJlY2VudGx5LXBsYXllZFwiLFxyXG4gICAgXCJ1c2VyLXJlYWQtcGxheWJhY2stc3RhdGVcIixcclxuICAgIFwidXNlci10b3AtcmVhZFwiLFxyXG4gICAgXCJ1c2VyLW1vZGlmeS1wbGF5YmFjay1zdGF0ZVwiLFxyXG4gICAgLy8gZm9yIHBsYXliYWNrIFxyXG4gICAgXCJzdHJlYW1pbmdcIiwgXCJ1c2VyLXJlYWQtZW1haWxcIiwgXCJ1c2VyLXJlYWQtcHJpdmF0ZVwiXHJcbl07XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIC8vIGdvZXMgdG8gdGhlIGhhc2ggaW4gdGhlIGN1cnJlbnQgdXJsIFxyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcmJylbMF0uc3BsaXQoXCI9XCIpWzFdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblVybCA9IGAke2F1dGhFbmRwb2ludH0/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0VXJpfSZzY29wZT0ke3Njb3Blcy5qb2luKFwiJTIwXCIpfSZyZXNwb25zZV90eXBlPXRva2VuJnNob3dfZGlhbG9nPXRydWVgOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dFByb3ZpZGVyID0gKHsgaW5pdGlhbFN0YXRlLCByZWR1Y2VyLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcG90aWZ5JztcclxuaW1wb3J0IFNwb3RpZnlXZWJBcGkgZnJvbSAnc3BvdGlmeS13ZWItYXBpLWpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbmNvbnN0IHNwb3RpZnkgPSBuZXcgU3BvdGlmeVdlYkFwaSgpO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3sgdXNlciwgdG9rZW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmIChfdG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gc2V0IHRva2VuIGluIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IF90b2tlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIHRva2VuIGZyb20gdGhlIHVybFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2luZyB0aGlzIHRva2VuIFxyXG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcG90aWZ5LnNldEFjY2Vzc1Rva2VuKF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgc3BvdGlmeS5nZXRNZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVInLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFuIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5bGlzdCA9IGF3YWl0IHNwb3RpZnkuZ2V0VXNlclBsYXlsaXN0cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BMQVlMSVNUJywgcGxheWxpc3QpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9QTEFZTElTVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrbHkgPSBhd2FpdCBzcG90aWZ5LmdldFBsYXlsaXN0KCc0NGhqVmdUZVExUm5NbXNsWXVwbWxRJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0VFS0xZJywgd2Vla2x5KVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfV0VFS0xZJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrbHlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyLCB0b2tlbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Rva2VuID9cclxuICAgICAgICAgICAgICAgIDxQbGF5ZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5TXVzaWNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaHVmZmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ta2lwTmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVEb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcG90aWZ5LXdlYi1hcGktanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==