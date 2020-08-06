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
  console.log('WEEKLY FROM BODY', weekly);
  return __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "body__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "body__infoText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, "PLAYLIST"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, "Discover Weekly"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, weekly === null || weekly === void 0 ? void 0 : weekly.description))), __jsx("div", {
    className: "body__songs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "body__icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "body__songsList",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PlayCircleOutline */ "@material-ui/icons/PlayCircleOutline");
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Shuffle */ "@material-ui/icons/Shuffle");
/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Repeat */ "@material-ui/icons/Repeat");
/* harmony import */ var _material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // ICONS







const Footer = () => {
  return __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footer__left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Song details here")), __jsx("div", {
    className: "footer__center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "footer__playButton",
    style: {
      fontSize: 40
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_Repeat__WEBPACK_IMPORTED_MODULE_7___default.a, {
    style: {
      fontSize: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "footer__right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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

  console.log('EACH TRACK', track);
  return __jsx("div", {
    className: "songRow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "songRow__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, track.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29uZy1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG90aWZ5LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkJvZHkiLCJzcG90aWZ5IiwidXNlciIsIndlZWtseSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNvbmdSb3dzIiwidHJhY2tzIiwiaXRlbXMiLCJtYXAiLCJlYWNoIiwiYWRkZWRfYXQiLCJ0cmFjayIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZXMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImRlc2NyaXB0aW9uIiwiZm9udFNpemUiLCJGb290ZXIiLCJIZWFkZXIiLCJkaXNwbGF5X25hbWUiLCJMb2dpbiIsImxvZ2luVXJsIiwiUGxheWVyIiwiU2lkZUJhck9wdGlvbiIsIkljb24iLCJ0aXRsZSIsIlNpZGVCYXIiLCJwbGF5bGlzdCIsIkhvbWVPdXRsaW5lZEljb24iLCJTZWFyY2hPdXRsaW5lZEljb24iLCJMaWJyYXJ5TXVzaWNPdXRsaW5lZEljb24iLCJpZCIsIm5hbWUiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIkNvbnRpbnVvdXNTbGlkZXIiLCJjbGFzc2VzIiwidmFsdWUiLCJzZXRWYWx1ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwiU29uZ1JvdyIsImFsYnVtIiwiYXJ0aXN0cyIsImFydGlzdCIsImpvaW4iLCJhdXRoRW5kcG9pbnQiLCJyZWRpcmVjdFVyaSIsImNsaWVudElkIiwic2NvcGVzIiwiZ2V0VG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJzcGxpdCIsImNyZWF0ZUNvbnRleHQiLCJEYXRhQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIlNwb3RpZnlXZWJBcGkiLCJMYW5kaW5nUGFnZSIsInRva2VuIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJfdG9rZW4iLCJ0eXBlIiwiYXV0aGVudGljYXRlIiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsImdldFVzZXJQbGF5bGlzdHMiLCJnZXRQbGF5bGlzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNB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LENBREo7QUFXSCxDQXBERDs7QUFzRGVxRSwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvYm9keS5jc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcbmltcG9ydCBTb25nUm93IGZyb20gJy4vc29uZy1yb3cnO1xyXG5cclxuLy9JQ09OU1xyXG5pbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXonO1xyXG5cclxuY29uc3QgQm9keSA9ICh7IHNwb3RpZnkgfSkgPT4ge1xyXG4gICAgY29uc3QgW3sgdXNlciwgd2Vla2x5IH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCBzb25nUm93cyA9IHdlZWtseT8udHJhY2tzPy5pdGVtcz8ubWFwKGVhY2ggPT4gPFNvbmdSb3cga2V5PXtlYWNoLmFkZGVkX2F0fSB0cmFjaz17ZWFjaC50cmFja30gLz4pXHJcbiAgICBjb25zb2xlLmxvZygnV0VFS0xZIEZST00gQk9EWScsIHdlZWtseSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9keV9fYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXI/LmltYWdlc1swXT8udXJsIHx8IFwiL2ZhY2UuanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIzMCwgaGVpZ2h0OiAyMzAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX2luZm9UZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QTEFZTElTVDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5EaXNjb3ZlciBXZWVrbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt3ZWVrbHk/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19zb25nc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib2R5X19wbGF5QnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDcwIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSG9yaXpJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9fc29uZ3NMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7c29uZ1Jvd3N9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJvZHk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvZm9vdGVyLmNzcyc7XHJcbmltcG9ydCBDb250aW51b3VzU2xpZGVyIGZyb20gJy4vc2xpZGVyJztcclxuLy8gSUNPTlNcclxuaW1wb3J0IFBsYXlDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmUnO1xyXG5pbXBvcnQgU2tpcE5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ta2lwTmV4dCc7XHJcbmltcG9ydCBTa2lwUHJldmlvdXNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ta2lwUHJldmlvdXMnO1xyXG5pbXBvcnQgU2h1ZmZsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGUnO1xyXG5pbXBvcnQgUmVwZWF0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0JztcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Tb25nIGRldGFpbHMgaGVyZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTaHVmZmxlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lwUHJldmlvdXNJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVPdXRsaW5lSWNvbiBjbGFzc05hbWU9XCJmb290ZXJfX3BsYXlCdXR0b25cIiBzdHlsZT17eyBmb250U2l6ZTogNDAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lwTmV4dEljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8UmVwZWF0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRpbnVvdXNTbGlkZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCAnLi4vc3R5bGVzL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzcG90aWZ5IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbeyB1c2VyIH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIFNvbmdzLCBBcnRpc3RzIG9yIFBvZGNhc3RzLi4uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3VzZXI/LmltYWdlc1swXT8udXJsIHx8IFwiL2ZhY2UuanBnXCJ9IGFsdD1cIkthcmFuXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoND57dXNlcj8uZGlzcGxheV9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcyc7XHJcbmltcG9ydCB7IGxvZ2luVXJsIH0gZnJvbSAnLi9zcG90aWZ5JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9naW5VcmwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL0xvZ28ucG5nXCIgYWx0PVwiTG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtsb2dpblVybH0+TE9HSU4gV0lUSCBTUE9USUZZPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0ICcuLi9zdHlsZXMvcGxheWVyLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5cclxuY29uc3QgUGxheWVyID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyX19ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgICAgPEJvZHkgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaWRlQmFyT3B0aW9uID0gKHsgSWNvbiwgdGl0bGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJPcHRpb25cIj5cclxuICAgICAgICAgICAge0ljb24gJiYgPEljb24gY2xhc3NOYW1lPVwic2lkZWJhck9wdGlvbl9faWNvblwiIC8+fVxyXG4gICAgICAgICAgICB7SWNvbiA/IDxoNT57dGl0bGV9PC9oNT4gOiA8cD57dGl0bGV9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyT3B0aW9uOyIsImltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXIuY3NzJztcclxuaW1wb3J0IFNpZGVCYXJPcHRpb24gZnJvbSAnLi9zaWRlYmFyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG4vLyBJQ09OU1xyXG5pbXBvcnQgSG9tZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkJztcclxuaW1wb3J0IFNlYXJjaE91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoT3V0bGluZWQnO1xyXG5pbXBvcnQgTGlicmFyeU11c2ljT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5TXVzaWNPdXRsaW5lZCc7XHJcblxyXG5jb25zdCBTaWRlQmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3sgcGxheWxpc3QgfV0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhcl9fbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5jbGlwYXJ0LmVtYWlsLzJlYTNkODJkZmY5MzQ3YjJhNTI2OTA3MmYwNDAxNjljX3Nwb3RpZnktbG9nby1hbmQtYnJhbmQtYXNzZXRzXzIzNjItNzA4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJzcG90aWZ5LWxvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24gSWNvbj17SG9tZU91dGxpbmVkSWNvbn0gdGl0bGU9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24gSWNvbj17U2VhcmNoT3V0bGluZWRJY29ufSB0aXRsZT1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e0xpYnJhcnlNdXNpY091dGxpbmVkSWNvbn0gdGl0bGU9XCJZb3VyIExpYnJhcnlcIiAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJzaWRlYmFyX190aXRsZVwiPlBMQVlMSVNUUzwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAge3BsYXlsaXN0Py5pdGVtcz8ubWFwKGVhY2ggPT4gKFxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24ga2V5PXtlYWNoLmlkfSB0aXRsZT17ZWFjaC5uYW1lfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlcic7XHJcbmltcG9ydCBWb2x1bWVEb3duIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVEb3duJztcclxuaW1wb3J0IFZvbHVtZVVwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcCc7XHJcbmltcG9ydCBQbGF5bGlzdFBsYXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdFBsYXknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGludW91c1NsaWRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMzApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsYXlsaXN0UGxheUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZvbHVtZURvd24gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRpbnVvdXMtc2xpZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvc29uZy1yb3cuY3NzXCJcclxuXHJcbmNvbnN0IFNvbmdSb3cgPSAoeyB0cmFjayB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnRUFDSCBUUkFDSycsIHRyYWNrKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nUm93XCIgPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvbmdSb3dfX2FsYnVtXCJcclxuICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhbGJ1bS1hcnRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dHJhY2submFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFydGlzdHMubWFwKGFydGlzdCA9PiBhcnRpc3QubmFtZSkuam9pbihcIixcIil9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFsYnVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTb25nUm93OyIsImV4cG9ydCBjb25zdCBhdXRoRW5kcG9pbnQgPSBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vZW4vYXV0aG9yaXplXCI7XHJcbmNvbnN0IHJlZGlyZWN0VXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCI7XHJcbmNvbnN0IGNsaWVudElkID0gXCIzNzlhMTg3OTRlZWQ0MTJhODM5NDZkMTFhMTZmYjQ2M1wiO1xyXG5jb25zdCBzY29wZXMgPSBbXHJcbiAgICBcInVzZXItcmVhZC1jdXJyZW50bHktcGxheWluZ1wiLFxyXG4gICAgXCJ1c2VyLXJlYWQtcmVjZW50bHktcGxheWVkXCIsXHJcbiAgICBcInVzZXItcmVhZC1wbGF5YmFjay1zdGF0ZVwiLFxyXG4gICAgXCJ1c2VyLXRvcC1yZWFkXCIsXHJcbiAgICBcInVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlXCIsXHJcbl07XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIC8vIGdvZXMgdG8gdGhlIGhhc2ggaW4gdGhlIGN1cnJlbnQgdXJsIFxyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcmJylbMF0uc3BsaXQoXCI9XCIpWzFdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblVybCA9IGAke2F1dGhFbmRwb2ludH0/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0VXJpfSZzY29wZT0ke3Njb3Blcy5qb2luKFwiJTIwXCIpfSZyZXNwb25zZV90eXBlPXRva2VuJnNob3dfZGlhbG9nPXRydWVgOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dFByb3ZpZGVyID0gKHsgaW5pdGlhbFN0YXRlLCByZWR1Y2VyLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcG90aWZ5JztcclxuaW1wb3J0IFNwb3RpZnlXZWJBcGkgZnJvbSAnc3BvdGlmeS13ZWItYXBpLWpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbmNvbnN0IHNwb3RpZnkgPSBuZXcgU3BvdGlmeVdlYkFwaSgpO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3sgdXNlciwgdG9rZW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmIChfdG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gc2V0IHRva2VuIGluIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IF90b2tlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIHRva2VuIGZyb20gdGhlIHVybFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2luZyB0aGlzIHRva2VuIFxyXG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcG90aWZ5LnNldEFjY2Vzc1Rva2VuKF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgc3BvdGlmeS5nZXRNZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVInLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFuIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5bGlzdCA9IGF3YWl0IHNwb3RpZnkuZ2V0VXNlclBsYXlsaXN0cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BMQVlMSVNUJywgcGxheWxpc3QpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9QTEFZTElTVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrbHkgPSBhd2FpdCBzcG90aWZ5LmdldFBsYXlsaXN0KCc0NGhqVmdUZVExUm5NbXNsWXVwbWxRJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0VFS0xZJywgd2Vla2x5KVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfV0VFS0xZJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrbHlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyLCB0b2tlbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Rva2VuID9cclxuICAgICAgICAgICAgICAgIDxQbGF5ZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5TXVzaWNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheWxpc3RQbGF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NraXBOZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ta2lwUHJldmlvdXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZVVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNwb3RpZnktd2ViLWFwaS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9