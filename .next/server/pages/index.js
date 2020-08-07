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

/***/ "./components/body-info.js":
/*!*********************************!*\
  !*** ./components/body-info.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PlayCircleFilled */ "@material-ui/icons/PlayCircleFilled");
/* harmony import */ var _material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MoreHoriz */ "@material-ui/icons/MoreHoriz");
/* harmony import */ var _material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\body-info.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //ICONS





const BodyInfo = ({
  user,
  weekly
}) => {
  var _user$images$;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "body__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "body__avatar",
    src: (user === null || user === void 0 ? void 0 : (_user$images$ = user.images[0]) === null || _user$images$ === void 0 ? void 0 : _user$images$.url) || "/face.jpg",
    style: {
      width: 230,
      height: 230
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "body__infoText",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "PLAYLIST"), __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Discover Weekly"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, weekly === null || weekly === void 0 ? void 0 : weekly.description))), __jsx("div", {
    className: "body__songs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "body__icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "body__playButton",
    style: {
      fontSize: 70
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx(_material_ui_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BodyInfo);

/***/ }),

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
/* harmony import */ var _context_context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context-provider */ "./context/context-provider.js");
/* harmony import */ var _song_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-row */ "./components/song-row.js");
/* harmony import */ var _body_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body-info */ "./components/body-info.js");
var _jsxFileName = "E:\\Linux\\reactApp21\\spotify-clone\\components\\body.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Body = ({
  spotify
}) => {
  var _weekly$tracks, _weekly$tracks$items;

  const player = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: {
      user,
      weekly,
      song,
      playing
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_context_provider__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const songRows = weekly === null || weekly === void 0 ? void 0 : (_weekly$tracks = weekly.tracks) === null || _weekly$tracks === void 0 ? void 0 : (_weekly$tracks$items = _weekly$tracks.items) === null || _weekly$tracks$items === void 0 ? void 0 : _weekly$tracks$items.map(each => __jsx(_song_row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: each.id,
    track: each.track,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }));

  if (playing && song) {
    var _player$current;

    if (((_player$current = player.current) === null || _player$current === void 0 ? void 0 : _player$current.src) === song.preview_url) {
      player.current.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false
      });
    } else {
      player.current.pause();
      player.current.src = song.preview_url;
      player.current.play();
    }
  }

  return __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_body_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user,
    weekly: weekly,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "body__songsList",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("audio", {
    ref: player,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }), songRows));
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

  let Icon = __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  });

  if ((song === null || song === void 0 ? void 0 : song.id) === track.id && playing) {
    Icon = __jsx(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 16
      }
    });
  }

  const playSong = async () => {
    dispatch({
      type: 'SET_SONG',
      song: track
    });
    dispatch({
      type: 'SET_PLAYING',
      playing: true
    });
  };

  return __jsx("div", {
    className: "songRow",
    onClick: () => playSong(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "songRow__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, track.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, track.artists.map(artist => artist.name).join(","), " -", " ", track.album.name)), __jsx("div", {
    className: "songRow__play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29uZy1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG90aWZ5LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkJvZHlJbmZvIiwidXNlciIsIndlZWtseSIsImltYWdlcyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJmb250U2l6ZSIsIkJvZHkiLCJzcG90aWZ5IiwicGxheWVyIiwidXNlUmVmIiwic29uZyIsInBsYXlpbmciLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNvbmdSb3dzIiwidHJhY2tzIiwiaXRlbXMiLCJtYXAiLCJlYWNoIiwiaWQiLCJ0cmFjayIsImN1cnJlbnQiLCJzcmMiLCJwcmV2aWV3X3VybCIsInBhdXNlIiwidHlwZSIsInBsYXkiLCJGb290ZXIiLCJpdGVtIiwiYWxidW0iLCJuYW1lIiwiSGVhZGVyIiwiZGlzcGxheV9uYW1lIiwiTG9naW4iLCJjb25zb2xlIiwibG9nIiwibG9naW5VcmwiLCJQbGF5ZXIiLCJ0b2tlbiIsIlNpZGVCYXJPcHRpb24iLCJJY29uIiwidGl0bGUiLCJTaWRlQmFyIiwicGxheWxpc3QiLCJIb21lT3V0bGluZWRJY29uIiwiU2VhcmNoT3V0bGluZWRJY29uIiwiTGlicmFyeU11c2ljT3V0bGluZWRJY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJDb250aW51b3VzU2xpZGVyIiwiY2xhc3NlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIlNvbmdSb3ciLCJwbGF5U29uZyIsImFydGlzdHMiLCJhcnRpc3QiLCJqb2luIiwiYXV0aEVuZHBvaW50IiwicmVkaXJlY3RVcmkiLCJjbGllbnRJZCIsInNjb3BlcyIsImdldFRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YUNvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJTcG90aWZ5V2ViQXBpIiwiTGFuZGluZ1BhZ2UiLCJ1c2VFZmZlY3QiLCJfdG9rZW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwiZ2V0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OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuLy9JQ09OU1xyXG5pbXBvcnQgUGxheUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVGaWxsZWQnO1xyXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbmltcG9ydCBNb3JlSG9yaXpJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXonO1xyXG5cclxuY29uc3QgQm9keUluZm8gPSAoeyB1c2VyLCB3ZWVrbHkgfSkgPT4ge1xyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9faW5mb1wiPlxyXG4gICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib2R5X19hdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyPy5pbWFnZXNbMF0/LnVybCB8fCBcIi9mYWNlLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDIzMCwgaGVpZ2h0OiAyMzAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pbmZvVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QTEFZTElTVDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPGgyPkRpc2NvdmVyIFdlZWtseTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD57d2Vla2x5Py5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9fc29uZ3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVGaWxsZWRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9keV9fcGxheUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDcwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8TW9yZUhvcml6SWNvbiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlJbmZvOyIsImltcG9ydCAnLi4vc3R5bGVzL2JvZHkuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5pbXBvcnQgU29uZ1JvdyBmcm9tICcuL3Nvbmctcm93JztcclxuaW1wb3J0IEJvZHlJbmZvIGZyb20gJy4vYm9keS1pbmZvJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoeyBzcG90aWZ5IH0pID0+IHtcclxuICAgIGNvbnN0IHBsYXllciA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW3sgdXNlciwgd2Vla2x5LCBzb25nLCBwbGF5aW5nIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc29uZ1Jvd3MgPSB3ZWVrbHk/LnRyYWNrcz8uaXRlbXM/Lm1hcChcclxuICAgICAgICBlYWNoID0+IDxTb25nUm93XHJcbiAgICAgICAgICAgIGtleT17ZWFjaC5pZH1cclxuICAgICAgICAgICAgdHJhY2s9e2VhY2gudHJhY2t9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxuXHJcbiAgICBpZiAocGxheWluZyAmJiBzb25nKSB7XHJcbiAgICAgICAgaWYgKHBsYXllci5jdXJyZW50Py5zcmMgPT09IHNvbmcucHJldmlld191cmwpIHtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9QTEFZSU5HJyxcclxuICAgICAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQuc3JjID0gc29uZy5wcmV2aWV3X3VybDtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHNwb3RpZnk9e3Nwb3RpZnl9IC8+XHJcbiAgICAgICAgICAgIDxCb2R5SW5mbyB1c2VyPXt1c2VyfSB3ZWVrbHk9e3dlZWtseX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5X19zb25nc0xpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxhdWRpbyByZWY9e3BsYXllcn0gLz5cclxuICAgICAgICAgICAgICAgIHtzb25nUm93c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQm9keTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9mb290ZXIuY3NzJztcclxuaW1wb3J0IENvbnRpbnVvdXNTbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcbi8vIElDT05TXHJcbmltcG9ydCBQbGF5Q2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lJztcclxuaW1wb3J0IFNraXBOZXh0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHQnO1xyXG5pbXBvcnQgU2tpcFByZXZpb3VzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzJztcclxuaW1wb3J0IFNodWZmbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaHVmZmxlJztcclxuaW1wb3J0IFJlcGVhdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcGVhdCc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbeyBpdGVtIH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXJfX2FsYnVtTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtPy5hbGJ1bS5pbWFnZXNbMF0udXJsIHx8IFwiL2FydC5qcGdcIn1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvbmdJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lIHx8IFwiU29uZyBuYW1lXCJ9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPntpdGVtLmFydGlzdHMubWFwKChhcnRpc3QpID0+IGFydGlzdC5uYW1lKS5qb2luKFwiLCBcIil9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19zb25nSW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vIHNvbmcgaXMgcGxheWluZzwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4uLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8U2h1ZmZsZUljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpcFByZXZpb3VzSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlT3V0bGluZUljb24gY2xhc3NOYW1lPVwiZm9vdGVyX19wbGF5QnV0dG9uXCIgc3R5bGU9e3sgZm9udFNpemU6IDQwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8U2tpcE5leHRJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJlcGVhdEljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxDb250aW51b3VzU2xpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaCc7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3sgdXNlciB9XSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBTb25ncywgQXJ0aXN0cyBvciBQb2RjYXN0cy4uLlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPXt1c2VyPy5pbWFnZXNbMF0/LnVybCB8fCBcIi9mYWNlLmpwZ1wifSBhbHQ9XCJLYXJhblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3VzZXI/LmRpc3BsYXlfbmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9sb2dpbi5jc3MnO1xyXG5pbXBvcnQgeyBsb2dpblVybCB9IGZyb20gJy4vc3BvdGlmeSc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2luVXJsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9Mb2dvLnBuZ1wiIGFsdD1cIkxvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj17bG9naW5Vcmx9PkxPR0lOIFdJVEggU1BPVElGWTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyIsImltcG9ydCAnLi4vc3R5bGVzL3BsYXllci5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xyXG5pbXBvcnQgQm9keSBmcm9tICcuL2JvZHknO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuY29uc3QgUGxheWVyID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcbiAgICBjb25zdCBbeyB0b2tlbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm9keSBzcG90aWZ5PXtzcG90aWZ5fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IFNpZGVCYXJPcHRpb24gPSAoeyBJY29uLCB0aXRsZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhck9wdGlvblwiPlxyXG4gICAgICAgICAgICB7SWNvbiAmJiA8SWNvbiBjbGFzc05hbWU9XCJzaWRlYmFyT3B0aW9uX19pY29uXCIgLz59XHJcbiAgICAgICAgICAgIHtJY29uID8gPGg1Pnt0aXRsZX08L2g1PiA6IDxwPnt0aXRsZX08L3A+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJPcHRpb247IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci5jc3MnO1xyXG5pbXBvcnQgU2lkZUJhck9wdGlvbiBmcm9tICcuL3NpZGViYXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbi8vIElDT05TXHJcbmltcG9ydCBIb21lT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lT3V0bGluZWQnO1xyXG5pbXBvcnQgU2VhcmNoT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hPdXRsaW5lZCc7XHJcbmltcG9ydCBMaWJyYXJ5TXVzaWNPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkJztcclxuXHJcbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbeyBwbGF5bGlzdCB9XSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzaWRlYmFyX19sb2dvXCJcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmNsaXBhcnQuZW1haWwvMmVhM2Q4MmRmZjkzNDdiMmE1MjY5MDcyZjA0MDE2OWNfc3BvdGlmeS1sb2dvLWFuZC1icmFuZC1hc3NldHNfMjM2Mi03MDgucG5nXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cInNwb3RpZnktbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck9wdGlvbiBJY29uPXtIb21lT3V0bGluZWRJY29ufSB0aXRsZT1cIkhvbWVcIiAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck9wdGlvbiBJY29uPXtTZWFyY2hPdXRsaW5lZEljb259IHRpdGxlPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJPcHRpb24gSWNvbj17TGlicmFyeU11c2ljT3V0bGluZWRJY29ufSB0aXRsZT1cIllvdXIgTGlicmFyeVwiIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInNpZGViYXJfX3RpdGxlXCI+UExBWUxJU1RTPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICB7cGxheWxpc3Q/Lml0ZW1zPy5tYXAoZWFjaCA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhck9wdGlvbiBrZXk9e2VhY2guaWR9IHRpdGxlPXtlYWNoLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVyJztcclxuaW1wb3J0IFZvbHVtZURvd24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd24nO1xyXG5pbXBvcnQgVm9sdW1lVXAgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZVVwJztcclxuaW1wb3J0IFBsYXlsaXN0UGxheUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250aW51b3VzU2xpZGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgzMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8UGxheWxpc3RQbGF5SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Vm9sdW1lRG93biAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGludW91cy1zbGlkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9zb25nLXJvdy5jc3NcIlxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyXCI7XHJcblxyXG4vL0lDT05TXHJcbmltcG9ydCBQbGF5Q2lyY2xlRmlsbGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZCc7XHJcbmltcG9ydCBQYXVzZUNpcmNsZUZpbGxlZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BhdXNlQ2lyY2xlRmlsbGVkJztcclxuXHJcbmNvbnN0IFNvbmdSb3cgPSAoeyB0cmFjayB9KSA9PiB7XHJcbiAgICBjb25zdCBbeyBzb25nLCBwbGF5aW5nIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgbGV0IEljb24gPSA8UGxheUNpcmNsZUZpbGxlZEljb24gLz5cclxuICAgIGlmICgoc29uZz8uaWQgPT09IHRyYWNrLmlkICYmIHBsYXlpbmcpKSB7XHJcbiAgICAgICAgSWNvbiA9IDxQYXVzZUNpcmNsZUZpbGxlZEljb24gLz5cclxuICAgIH1cclxuICAgIGNvbnN0IHBsYXlTb25nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ1NFVF9TT05HJyxcclxuICAgICAgICAgICAgc29uZzogdHJhY2tcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfUExBWUlORycsXHJcbiAgICAgICAgICAgIHBsYXlpbmc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ1Jvd1wiIG9uQ2xpY2s9eygpID0+IHBsYXlTb25nKCl9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNvbmdSb3dfX2FsYnVtXCJcclxuICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uaW1hZ2VzWzBdPy51cmx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhbGJ1bS1hcnRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dHJhY2submFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFydGlzdHMubWFwKGFydGlzdCA9PiBhcnRpc3QubmFtZSkuam9pbihcIixcIil9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYWNrLmFsYnVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdSb3dfX3BsYXlcIj5cclxuICAgICAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU29uZ1JvdzsiLCJleHBvcnQgY29uc3QgYXV0aEVuZHBvaW50ID0gXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2VuL2F1dGhvcml6ZVwiO1xyXG5jb25zdCByZWRpcmVjdFVyaSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xyXG5jb25zdCBjbGllbnRJZCA9IFwiMzc5YTE4Nzk0ZWVkNDEyYTgzOTQ2ZDExYTE2ZmI0NjNcIjtcclxuY29uc3Qgc2NvcGVzID0gW1xyXG4gICAgXCJ1c2VyLXJlYWQtY3VycmVudGx5LXBsYXlpbmdcIixcclxuICAgIFwidXNlci1yZWFkLXJlY2VudGx5LXBsYXllZFwiLFxyXG4gICAgXCJ1c2VyLXJlYWQtcGxheWJhY2stc3RhdGVcIixcclxuICAgIFwidXNlci10b3AtcmVhZFwiLFxyXG4gICAgXCJ1c2VyLW1vZGlmeS1wbGF5YmFjay1zdGF0ZVwiLFxyXG4gICAgLy8gZm9yIHBsYXliYWNrIFxyXG4gICAgXCJzdHJlYW1pbmdcIiwgXCJ1c2VyLXJlYWQtZW1haWxcIiwgXCJ1c2VyLXJlYWQtcHJpdmF0ZVwiXHJcbl07XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHtcclxuICAgIC8vIGdvZXMgdG8gdGhlIGhhc2ggaW4gdGhlIGN1cnJlbnQgdXJsIFxyXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCcmJylbMF0uc3BsaXQoXCI9XCIpWzFdO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dpblVybCA9IGAke2F1dGhFbmRwb2ludH0/Y2xpZW50X2lkPSR7Y2xpZW50SWR9JnJlZGlyZWN0X3VyaT0ke3JlZGlyZWN0VXJpfSZzY29wZT0ke3Njb3Blcy5qb2luKFwiJTIwXCIpfSZyZXNwb25zZV90eXBlPXRva2VuJnNob3dfZGlhbG9nPXRydWVgOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBEYXRhQ29udGV4dFByb3ZpZGVyID0gKHsgaW5pdGlhbFN0YXRlLCByZWR1Y2VyLCBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFDb250ZXh0UHJvdmlkZXI7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zcG90aWZ5JztcclxuaW1wb3J0IFNwb3RpZnlXZWJBcGkgZnJvbSAnc3BvdGlmeS13ZWItYXBpLWpzJztcclxuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL3BsYXllcic7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuXHJcbmNvbnN0IHNwb3RpZnkgPSBuZXcgU3BvdGlmeVdlYkFwaSgpO1xyXG5cclxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3sgdXNlciwgdG9rZW4gfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfdG9rZW4gPSBnZXRUb2tlbigpO1xyXG4gICAgICAgIGlmIChfdG9rZW4pIHtcclxuICAgICAgICAgICAgLy8gc2V0IHRva2VuIGluIHN0YXRlXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVE9LRU4nLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IF90b2tlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIHRva2VuIGZyb20gdGhlIHVybFxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XHJcbiAgICAgICAgICAgIC8vIGF1dGhlbnRpY2F0ZSB1c2luZyB0aGlzIHRva2VuIFxyXG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcG90aWZ5LnNldEFjY2Vzc1Rva2VuKF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgc3BvdGlmeS5nZXRNZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VTRVInLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BhdGNoIGFuIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5bGlzdCA9IGF3YWl0IHNwb3RpZnkuZ2V0VXNlclBsYXlsaXN0cygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BMQVlMSVNUJywgcGxheWxpc3QpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9QTEFZTElTVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWxpc3RcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWVrbHkgPSBhd2FpdCBzcG90aWZ5LmdldFBsYXlsaXN0KCc0NGhqVmdUZVExUm5NbXNsWXVwbWxRJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0VFS0xZJywgd2Vla2x5KVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfV0VFS0xZJyxcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrbHlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyLCB0b2tlbl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Rva2VuID9cclxuICAgICAgICAgICAgICAgIDxQbGF5ZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5TXVzaWNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZUZpbGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaHVmZmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ta2lwTmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVEb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Wb2x1bWVVcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcG90aWZ5LXdlYi1hcGktanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==