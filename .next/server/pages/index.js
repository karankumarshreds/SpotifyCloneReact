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
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\player.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Player = ({
  spotify
}) => {
  return __jsx("div", {
    className: "player",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "player__body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx(_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\song-row.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SongRow = ({
  track
}) => {
  var _track$album$images$;

  return __jsx("div", {
    className: "songRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "songRow__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, track.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, track.artists.map(artist => artist.name).join(","), " -", " ", track.album.name)));
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
const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29uZy1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG90aWZ5LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkJvZHkiLCJzcG90aWZ5IiwidXNlciIsIndlZWtseSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNvbmdSb3dzIiwidHJhY2tzIiwiaXRlbXMiLCJtYXAiLCJlYWNoIiwiYWRkZWRfYXQiLCJ0cmFjayIsImltYWdlcyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJmb250U2l6ZSIsIkZvb3RlciIsIml0ZW0iLCJhbGJ1bSIsIm5hbWUiLCJIZWFkZXIiLCJkaXNwbGF5X25hbWUiLCJMb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dpblVybCIsIlBsYXllciIsIlNpZGVCYXJPcHRpb24iLCJJY29uIiwidGl0bGUiLCJTaWRlQmFyIiwicGxheWxpc3QiLCJIb21lT3V0bGluZWRJY29uIiwiU2VhcmNoT3V0bGluZWRJY29uIiwiTGlicmFyeU11c2ljT3V0bGluZWRJY29uIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIkNvbnRpbnVvdXNTbGlkZXIiLCJjbGFzc2VzIiwidmFsdWUiLCJzZXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiU29uZ1JvdyIsImFydGlzdHMiLCJhcnRpc3QiLCJqb2luIiwiYXV0aEVuZHBvaW50IiwicmVkaXJlY3RVcmkiLCJjbGllbnRJZCIsInNjb3BlcyIsImdldFRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YUNvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJTcG90aWZ5V2ViQXBpIiwiTGFuZGluZ1BhZ2UiLCJ0b2tlbiIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiX3Rva2VuIiwidHlwZSIsImF1dGhlbnRpY2F0ZSIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJnZXRVc2VyUGxheWxpc3RzIiwiZ2V0UGxheWxpc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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Q0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi4vc3R5bGVzL2JvZHkuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5pbXBvcnQgU29uZ1JvdyBmcm9tICcuL3Nvbmctcm93JztcclxuXHJcbi8vSUNPTlNcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcclxuXHJcbmNvbnN0IEJvZHkgPSAoeyBzcG90aWZ5IH0pID0+IHtcclxuICAgIGNvbnN0IFt7IHVzZXIsIHdlZWtseSB9XSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc29uZ1Jvd3MgPSB3ZWVrbHk/LnRyYWNrcz8uaXRlbXM/Lm1hcChlYWNoID0+IDxTb25nUm93IGtleT17ZWFjaC5hZGRlZF9hdH0gdHJhY2s9e2VhY2gudHJhY2t9IC8+KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgPEhlYWRlciBzcG90aWZ5PXtzcG90aWZ5fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib2R5X19hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8uaW1hZ2VzWzBdPy51cmwgfHwgXCIvZmFjZS5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjMwLCBoZWlnaHQ6IDIzMCB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9faW5mb1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlBMQVlMSVNUPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpc2NvdmVyIFdlZWtseTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3dlZWtseT8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX3NvbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX2ljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvZHlfX3BsYXlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogNzAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vcmVIb3Jpekljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19zb25nc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtzb25nUm93c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9mb290ZXIuY3NzJztcclxuaW1wb3J0IENvbnRpbnVvdXNTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcbi8vIElDT05TXHJcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lJztcclxuaW1wb3J0IFNraXBOZXh0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHQnO1xyXG5pbXBvcnQgU2tpcFByZXZpb3VzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzJztcclxuaW1wb3J0IFNodWZmbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaHVmZmxlJztcclxuaW1wb3J0IFJlcGVhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdCc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbeyBpdGVtIH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2FsYnVtTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtPy5hbGJ1bS5pbWFnZXNbMF0udXJsIHx8IFwiL2FydC5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvbmdJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lIHx8IFwiU29uZyBuYW1lXCJ9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntpdGVtLmFydGlzdHMubWFwKChhcnRpc3QpID0+IGFydGlzdC5uYW1lKS5qb2luKFwiLCBcIil9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19zb25nSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vIHNvbmcgaXMgcGxheWluZzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2h1ZmZsZUljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpcFByZXZpb3VzSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlT3V0bGluZUljb24gY2xhc3NOYW1lPVwiZm9vdGVyX19wbGF5QnV0dG9uXCIgc3R5bGU9e3sgZm9udFNpemU6IDQwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpcE5leHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJlcGVhdEljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxDb250aW51b3VzU2xpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3sgdXNlciB9XSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBTb25ncywgQXJ0aXN0cyBvciBQb2RjYXN0cy4uLlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXt1c2VyPy5pbWFnZXNbMF0/LnVybCB8fCBcIi9mYWNlLmpwZ1wifSBhbHQ9XCJLYXJhblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3VzZXI/LmRpc3BsYXlfbmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9sb2dpbi5jc3MnO1xyXG5pbXBvcnQgeyBsb2dpblVybCB9IGZyb20gJy4vc3BvdGlmeSc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2luVXJsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9Mb2dvLnBuZ1wiIGFsdD1cIkxvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9naW5Vcmx9PkxPR0lOIFdJVEggU1BPVElGWTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImltcG9ydCAnLi4vc3R5bGVzL3BsYXllci5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuXHJcbmNvbnN0IFBsYXllciA9ICh7IHNwb3RpZnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcl9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb2R5IHNwb3RpZnk9e3Nwb3RpZnl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2lkZUJhck9wdGlvbiA9ICh7IEljb24sIHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyT3B0aW9uXCI+XHJcbiAgICAgICAgICAgIHtJY29uICYmIDxJY29uIGNsYXNzTmFtZT1cInNpZGViYXJPcHRpb25fX2ljb25cIiAvPn1cclxuICAgICAgICAgICAge0ljb24gPyA8aDU+e3RpdGxlfTwvaDU+IDogPHA+e3RpdGxlfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhck9wdGlvbjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLmNzcyc7XHJcbmltcG9ydCBTaWRlQmFyT3B0aW9uIGZyb20gJy4vc2lkZWJhci1vcHRpb25zJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuLy8gSUNPTlNcclxuaW1wb3J0IEhvbWVPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVPdXRsaW5lZCc7XHJcbmltcG9ydCBTZWFyY2hPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkJztcclxuaW1wb3J0IExpYnJhcnlNdXNpY091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeU11c2ljT3V0bGluZWQnO1xyXG5cclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7IHBsYXlsaXN0IH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXJfX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uY2xpcGFydC5lbWFpbC8yZWEzZDgyZGZmOTM0N2IyYTUyNjkwNzJmMDQwMTY5Y19zcG90aWZ5LWxvZ28tYW5kLWJyYW5kLWFzc2V0c18yMzYyLTcwOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwic3BvdGlmeS1sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e0hvbWVPdXRsaW5lZEljb259IHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e1NlYXJjaE91dGxpbmVkSWNvbn0gdGl0bGU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck9wdGlvbiBJY29uPXtMaWJyYXJ5TXVzaWNPdXRsaW5lZEljb259IHRpdGxlPVwiWW91ciBMaWJyYXJ5XCIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwic2lkZWJhcl9fdGl0bGVcIj5QTEFZTElTVFM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIHtwbGF5bGlzdD8uaXRlbXM/Lm1hcChlYWNoID0+IChcclxuICAgICAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIGtleT17ZWFjaC5pZH0gdGl0bGU9e2VhY2gubmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xyXG5pbXBvcnQgVm9sdW1lRG93biBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lRG93bic7XHJcbmltcG9ydCBWb2x1bWVVcCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXAnO1xyXG5pbXBvcnQgUGxheWxpc3RQbGF5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheWxpc3RQbGF5JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRpbnVvdXNTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDMwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5bGlzdFBsYXlJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWb2x1bWVEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250aW51b3VzLXNsaWRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Nvbmctcm93LmNzc1wiXHJcblxyXG5jb25zdCBTb25nUm93ID0gKHsgdHJhY2sgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dcIiA+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29uZ1Jvd19fYWxidW1cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt0cmFjay5hbGJ1bS5pbWFnZXNbMF0/LnVybH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFsYnVtLWFydFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ1Jvd19faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0cmFjay5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhY2suYXJ0aXN0cy5tYXAoYXJ0aXN0ID0+IGFydGlzdC5uYW1lKS5qb2luKFwiLFwiKX0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7dHJhY2suYWxidW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNvbmdSb3c7IiwiZXhwb3J0IGNvbnN0IGF1dGhFbmRwb2ludCA9IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9lbi9hdXRob3JpemVcIjtcclxuY29uc3QgcmVkaXJlY3RVcmkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcclxuY29uc3QgY2xpZW50SWQgPSBcIjM3OWExODc5NGVlZDQxMmE4Mzk0NmQxMWExNmZiNDYzXCI7XHJcbmNvbnN0IHNjb3BlcyA9IFtcclxuICAgIFwidXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXHJcbiAgICBcInVzZXItcmVhZC1yZWNlbnRseS1wbGF5ZWRcIixcclxuICAgIFwidXNlci1yZWFkLXBsYXliYWNrLXN0YXRlXCIsXHJcbiAgICBcInVzZXItdG9wLXJlYWRcIixcclxuICAgIFwidXNlci1tb2RpZnktcGxheWJhY2stc3RhdGVcIixcclxuXTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgLy8gZ29lcyB0byB0aGUgaGFzaCBpbiB0aGUgY3VycmVudCB1cmwgXHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyYnKVswXS5zcGxpdChcIj1cIilbMV07XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXJsID0gYCR7YXV0aEVuZHBvaW50fT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPSR7cmVkaXJlY3RVcml9JnNjb3BlPSR7c2NvcGVzLmpvaW4oXCIlMjBcIil9JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2hvd19kaWFsb2c9dHJ1ZWA7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0UHJvdmlkZXIgPSAoeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIsIGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRQcm92aWRlcjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9jb21wb25lbnRzL3Nwb3RpZnknO1xyXG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGxheWVyJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuY29uc3Qgc3BvdGlmeSA9IG5ldyBTcG90aWZ5V2ViQXBpKCk7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbeyB1c2VyLCB0b2tlbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKF90b2tlbikge1xyXG4gICAgICAgICAgICAvLyBzZXQgdG9rZW4gaW4gc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9UT0tFTicsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogX3Rva2VuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjbGVhciB0aGUgdG9rZW4gZnJvbSB0aGUgdXJsXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzaW5nIHRoaXMgdG9rZW4gXHJcbiAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNwb3RpZnkuc2V0QWNjZXNzVG9rZW4oX3Rva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzcG90aWZ5LmdldE1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUicsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggYW4gYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlsaXN0ID0gYXdhaXQgc3BvdGlmeS5nZXRVc2VyUGxheWxpc3RzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUExBWUxJU1QnLCBwbGF5bGlzdClcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1BMQVlMSVNUJyxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlZWtseSA9IGF3YWl0IHNwb3RpZnkuZ2V0UGxheWxpc3QoJzQ0aGpWZ1RlUTFSbk1tc2xZdXBtbFEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXRUVLTFknLCB3ZWVrbHkpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9XRUVLTFknLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlZWtseVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYXV0aGVudGljYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXIsIHRva2VuXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dG9rZW4gP1xyXG4gICAgICAgICAgICAgICAgPFBsYXllciBzcG90aWZ5PXtzcG90aWZ5fSAvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXpcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdFBsYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2h1ZmZsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NraXBQcmV2aW91c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lRG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3BvdGlmeS13ZWItYXBpLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=