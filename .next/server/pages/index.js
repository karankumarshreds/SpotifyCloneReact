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
    var _player$current, _player$current2;

    if (((_player$current = player.current) === null || _player$current === void 0 ? void 0 : _player$current.src) === song.preview_url && playing === true) {
      player.current.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false
      });
      console.log('PAUSING SAME SONG', playing);
    } else if (((_player$current2 = player.current) === null || _player$current2 === void 0 ? void 0 : _player$current2.src) === song.preview_url && playing === false) {
      player.current.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true
      });
      console.log('PLAYING SAME SONG', playing);
    } else {
      player.current.pause();
      player.current.src = song.preview_url;
      player.current.play();
      console.log('PLAYING NEW SONG', playing);
    }
  }

  return __jsx("div", {
    className: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    spotify: spotify,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx(_body_info__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user,
    weekly: weekly,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "body__songsList",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("audio", {
    ref: player,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
  let Icon = (song === null || song === void 0 ? void 0 : song.id) === track.id && playing ? __jsx(_material_ui_icons_PauseCircleFilled__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }) : __jsx(_material_ui_icons_PlayCircleFilled__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  });

  const playSong = async () => {
    dispatch({
      type: 'SET_SONG',
      song: track
    });

    if (playing === false) {
      dispatch({
        type: 'SET_PLAYING',
        playing: true
      });
    }
  };

  return __jsx("div", {
    className: "songRow",
    onClick: () => playSong(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "songRow__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, track.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, track.artists.map(artist => artist.name).join(","), " -", " ", track.album.name)), __jsx("div", {
    className: "songRow__play",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib2R5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc29uZy1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcG90aWZ5LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvY29udGV4dC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVIb3JpelwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QYXVzZUNpcmNsZUZpbGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlDaXJjbGVPdXRsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0UGxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcE5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2tpcFByZXZpb3VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkJvZHlJbmZvIiwidXNlciIsIndlZWtseSIsImltYWdlcyIsInVybCIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzY3JpcHRpb24iLCJmb250U2l6ZSIsIkJvZHkiLCJzcG90aWZ5IiwicGxheWVyIiwidXNlUmVmIiwic29uZyIsInBsYXlpbmciLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInNvbmdSb3dzIiwidHJhY2tzIiwiaXRlbXMiLCJtYXAiLCJlYWNoIiwiaWQiLCJ0cmFjayIsImN1cnJlbnQiLCJzcmMiLCJwcmV2aWV3X3VybCIsInBhdXNlIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwbGF5IiwiRm9vdGVyIiwiaXRlbSIsImFsYnVtIiwibmFtZSIsIkhlYWRlciIsImRpc3BsYXlfbmFtZSIsIkxvZ2luIiwibG9naW5VcmwiLCJQbGF5ZXIiLCJ0b2tlbiIsIlNpZGVCYXJPcHRpb24iLCJJY29uIiwidGl0bGUiLCJTaWRlQmFyIiwicGxheWxpc3QiLCJIb21lT3V0bGluZWRJY29uIiwiU2VhcmNoT3V0bGluZWRJY29uIiwiTGlicmFyeU11c2ljT3V0bGluZWRJY29uIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJDb250aW51b3VzU2xpZGVyIiwiY2xhc3NlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsIlNvbmdSb3ciLCJwbGF5U29uZyIsImFydGlzdHMiLCJhcnRpc3QiLCJqb2luIiwiYXV0aEVuZHBvaW50IiwicmVkaXJlY3RVcmkiLCJjbGllbnRJZCIsInNjb3BlcyIsImdldFRva2VuIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3BsaXQiLCJjcmVhdGVDb250ZXh0IiwiRGF0YUNvbnRleHRQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJTcG90aWZ5V2ViQXBpIiwiTGFuZGluZ1BhZ2UiLCJ1c2VFZmZlY3QiLCJfdG9rZW4iLCJhdXRoZW50aWNhdGUiLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwiZ2V0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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbi8vSUNPTlNcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgTW9yZUhvcml6SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZUhvcml6JztcclxuXHJcbmNvbnN0IEJvZHlJbmZvID0gKHsgdXNlciwgd2Vla2x5IH0pID0+IHtcclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX2luZm9cIj5cclxuICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9keV9fYXZhdGFyXCJcclxuICAgICAgICAgICAgICAgIHNyYz17dXNlcj8uaW1hZ2VzWzBdPy51cmwgfHwgXCIvZmFjZS5qcGdcIn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyMzAsIGhlaWdodDogMjMwIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9faW5mb1RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+UExBWUxJU1Q8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxoMj5EaXNjb3ZlciBXZWVrbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e3dlZWtseT8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX3NvbmdzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keV9faWNvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxQbGF5Q2lyY2xlRmlsbGVkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvZHlfX3BsYXlCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiA3MCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPE1vcmVIb3Jpekljb24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz4pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5SW5mbzsiLCJpbXBvcnQgJy4uL3N0eWxlcy9ib2R5LmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuaW1wb3J0IFNvbmdSb3cgZnJvbSAnLi9zb25nLXJvdyc7XHJcbmltcG9ydCBCb2R5SW5mbyBmcm9tICcuL2JvZHktaW5mbyc7XHJcblxyXG5jb25zdCBCb2R5ID0gKHsgc3BvdGlmeSB9KSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFt7IHVzZXIsIHdlZWtseSwgc29uZywgcGxheWluZyB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHNvbmdSb3dzID0gd2Vla2x5Py50cmFja3M/Lml0ZW1zPy5tYXAoXHJcbiAgICAgICAgZWFjaCA9PiA8U29uZ1Jvd1xyXG4gICAgICAgICAgICBrZXk9e2VhY2guaWR9XHJcbiAgICAgICAgICAgIHRyYWNrPXtlYWNoLnRyYWNrfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcblxyXG4gICAgaWYgKHBsYXlpbmcgJiYgc29uZykge1xyXG4gICAgICAgIGlmIChwbGF5ZXIuY3VycmVudD8uc3JjID09PSBzb25nLnByZXZpZXdfdXJsICYmIHBsYXlpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9QTEFZSU5HJyxcclxuICAgICAgICAgICAgICAgIHBsYXlpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQQVVTSU5HIFNBTUUgU09ORycsIHBsYXlpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllci5jdXJyZW50Py5zcmMgPT09IHNvbmcucHJldmlld191cmwgJiYgcGxheWluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1BMQVlJTkcnLFxyXG4gICAgICAgICAgICAgICAgcGxheWluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUExBWUlORyBTQU1FIFNPTkcnLCBwbGF5aW5nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQuc3JjID0gc29uZy5wcmV2aWV3X3VybDtcclxuICAgICAgICAgICAgcGxheWVyLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUExBWUlORyBORVcgU09ORycsIHBsYXlpbmcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgc3BvdGlmeT17c3BvdGlmeX0gLz5cclxuICAgICAgICAgICAgPEJvZHlJbmZvIHVzZXI9e3VzZXJ9IHdlZWtseT17d2Vla2x5fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlfX3NvbmdzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGF1ZGlvIHJlZj17cGxheWVyfSAvPlxyXG4gICAgICAgICAgICAgICAge3NvbmdSb3dzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBCb2R5OyIsImltcG9ydCAnLi4vc3R5bGVzL2Zvb3Rlci5jc3MnO1xyXG5pbXBvcnQgQ29udGludW91c1NsaWRlciBmcm9tICcuL3NsaWRlcic7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0LXByb3ZpZGVyJztcclxuLy8gSUNPTlNcclxuaW1wb3J0IFBsYXlDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheUNpcmNsZU91dGxpbmUnO1xyXG5pbXBvcnQgU2tpcE5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ta2lwTmV4dCc7XHJcbmltcG9ydCBTa2lwUHJldmlvdXNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ta2lwUHJldmlvdXMnO1xyXG5pbXBvcnQgU2h1ZmZsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGUnO1xyXG5pbXBvcnQgUmVwZWF0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwZWF0JztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7IGl0ZW0gfV0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlcl9fYWxidW1Mb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0/LmFsYnVtLmltYWdlc1swXS51cmwgfHwgXCIvYXJ0LmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbT8ubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7aXRlbSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fc29uZ0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLm5hbWUgfHwgXCJTb25nIG5hbWVcIn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+e2l0ZW0uYXJ0aXN0cy5tYXAoKGFydGlzdCkgPT4gYXJ0aXN0Lm5hbWUpLmpvaW4oXCIsIFwiKX08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3NvbmdJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Tm8gc29uZyBpcyBwbGF5aW5nPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTaHVmZmxlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lwUHJldmlvdXNJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPFBsYXlDaXJjbGVPdXRsaW5lSWNvbiBjbGFzc05hbWU9XCJmb290ZXJfX3BsYXlCdXR0b25cIiBzdHlsZT17eyBmb250U2l6ZTogNDAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxTa2lwTmV4dEljb24gc3R5bGU9e3sgZm9udFNpemU6IDIwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8UmVwZWF0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjAgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRpbnVvdXNTbGlkZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCAnLi4vc3R5bGVzL2hlYWRlci5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBzcG90aWZ5IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbeyB1c2VyIH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIFNvbmdzLCBBcnRpc3RzIG9yIFBvZGNhc3RzLi4uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9e3VzZXI/LmltYWdlc1swXT8udXJsIHx8IFwiL2ZhY2UuanBnXCJ9IGFsdD1cIkthcmFuXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoND57dXNlcj8uZGlzcGxheV9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcyc7XHJcbmltcG9ydCB7IGxvZ2luVXJsIH0gZnJvbSAnLi9zcG90aWZ5JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9naW5VcmwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL0xvZ28ucG5nXCIgYWx0PVwiTG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtsb2dpblVybH0+TE9HSU4gV0lUSCBTUE9USUZZPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiaW1wb3J0ICcuLi9zdHlsZXMvcGxheWVyLmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XHJcbmltcG9ydCBCb2R5IGZyb20gJy4vYm9keSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dC1wcm92aWRlcic7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoeyBzcG90aWZ5IH0pID0+IHtcclxuICAgIGNvbnN0IFt7IHRva2VuIH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllcl9fYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgIDxCb2R5IHNwb3RpZnk9e3Nwb3RpZnl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2lkZUJhck9wdGlvbiA9ICh7IEljb24sIHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyT3B0aW9uXCI+XHJcbiAgICAgICAgICAgIHtJY29uICYmIDxJY29uIGNsYXNzTmFtZT1cInNpZGViYXJPcHRpb25fX2ljb25cIiAvPn1cclxuICAgICAgICAgICAge0ljb24gPyA8aDU+e3RpdGxlfTwvaDU+IDogPHA+e3RpdGxlfTwvcD59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhck9wdGlvbjsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLmNzcyc7XHJcbmltcG9ydCBTaWRlQmFyT3B0aW9uIGZyb20gJy4vc2lkZWJhci1vcHRpb25zJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuLy8gSUNPTlNcclxuaW1wb3J0IEhvbWVPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVPdXRsaW5lZCc7XHJcbmltcG9ydCBTZWFyY2hPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaE91dGxpbmVkJztcclxuaW1wb3J0IExpYnJhcnlNdXNpY091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeU11c2ljT3V0bGluZWQnO1xyXG5cclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7IHBsYXlsaXN0IH1dID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXJfX2xvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uY2xpcGFydC5lbWFpbC8yZWEzZDgyZGZmOTM0N2IyYTUyNjkwNzJmMDQwMTY5Y19zcG90aWZ5LWxvZ28tYW5kLWJyYW5kLWFzc2V0c18yMzYyLTcwOC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwic3BvdGlmeS1sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e0hvbWVPdXRsaW5lZEljb259IHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIEljb249e1NlYXJjaE91dGxpbmVkSWNvbn0gdGl0bGU9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICA8U2lkZUJhck9wdGlvbiBJY29uPXtMaWJyYXJ5TXVzaWNPdXRsaW5lZEljb259IHRpdGxlPVwiWW91ciBMaWJyYXJ5XCIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwic2lkZWJhcl9fdGl0bGVcIj5QTEFZTElTVFM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIHtwbGF5bGlzdD8uaXRlbXM/Lm1hcChlYWNoID0+IChcclxuICAgICAgICAgICAgICAgIDxTaWRlQmFyT3B0aW9uIGtleT17ZWFjaC5pZH0gdGl0bGU9e2VhY2gubmFtZX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZXInO1xyXG5pbXBvcnQgVm9sdW1lRG93biBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lRG93bic7XHJcbmltcG9ydCBWb2x1bWVVcCBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVm9sdW1lVXAnO1xyXG5pbXBvcnQgUGxheWxpc3RQbGF5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheWxpc3RQbGF5JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRpbnVvdXNTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDMwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQbGF5bGlzdFBsYXlJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWb2x1bWVEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb250aW51b3VzLXNsaWRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL3Nvbmctcm93LmNzc1wiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXJcIjtcclxuXHJcbi8vSUNPTlNcclxuaW1wb3J0IFBsYXlDaXJjbGVGaWxsZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkJztcclxuaW1wb3J0IFBhdXNlQ2lyY2xlRmlsbGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGF1c2VDaXJjbGVGaWxsZWQnO1xyXG5cclxuY29uc3QgU29uZ1JvdyA9ICh7IHRyYWNrIH0pID0+IHtcclxuICAgIGNvbnN0IFt7IHNvbmcsIHBsYXlpbmcgfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gICAgbGV0IEljb24gPSBzb25nPy5pZCA9PT0gdHJhY2suaWQgJiYgcGxheWluZ1xyXG4gICAgICAgID8gPFBhdXNlQ2lyY2xlRmlsbGVkSWNvbiAvPlxyXG4gICAgICAgIDogPFBsYXlDaXJjbGVGaWxsZWRJY29uIC8+XHJcblxyXG4gICAgY29uc3QgcGxheVNvbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnU0VUX1NPTkcnLFxyXG4gICAgICAgICAgICBzb25nOiB0cmFja1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwbGF5aW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1BMQVlJTkcnLFxyXG4gICAgICAgICAgICAgICAgcGxheWluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb25nUm93XCIgb25DbGljaz17KCkgPT4gcGxheVNvbmcoKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic29uZ1Jvd19fYWxidW1cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt0cmFjay5hbGJ1bS5pbWFnZXNbMF0/LnVybH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImFsYnVtLWFydFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ1Jvd19faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPnt0cmFjay5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhY2suYXJ0aXN0cy5tYXAoYXJ0aXN0ID0+IGFydGlzdC5uYW1lKS5qb2luKFwiLFwiKX0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7dHJhY2suYWxidW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ1Jvd19fcGxheVwiPlxyXG4gICAgICAgICAgICAgICAge0ljb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTb25nUm93OyIsImV4cG9ydCBjb25zdCBhdXRoRW5kcG9pbnQgPSBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vZW4vYXV0aG9yaXplXCI7XHJcbmNvbnN0IHJlZGlyZWN0VXJpID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCI7XHJcbmNvbnN0IGNsaWVudElkID0gXCIzNzlhMTg3OTRlZWQ0MTJhODM5NDZkMTFhMTZmYjQ2M1wiO1xyXG5jb25zdCBzY29wZXMgPSBbXHJcbiAgICBcInVzZXItcmVhZC1jdXJyZW50bHktcGxheWluZ1wiLFxyXG4gICAgXCJ1c2VyLXJlYWQtcmVjZW50bHktcGxheWVkXCIsXHJcbiAgICBcInVzZXItcmVhZC1wbGF5YmFjay1zdGF0ZVwiLFxyXG4gICAgXCJ1c2VyLXRvcC1yZWFkXCIsXHJcbiAgICBcInVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlXCIsXHJcbiAgICAvLyBmb3IgcGxheWJhY2sgXHJcbiAgICBcInN0cmVhbWluZ1wiLCBcInVzZXItcmVhZC1lbWFpbFwiLCBcInVzZXItcmVhZC1wcml2YXRlXCJcclxuXTtcclxuZXhwb3J0IGNvbnN0IGdldFRva2VuID0gKCkgPT4ge1xyXG4gICAgLy8gZ29lcyB0byB0aGUgaGFzaCBpbiB0aGUgY3VycmVudCB1cmwgXHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJyYnKVswXS5zcGxpdChcIj1cIilbMV07XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXJsID0gYCR7YXV0aEVuZHBvaW50fT9jbGllbnRfaWQ9JHtjbGllbnRJZH0mcmVkaXJlY3RfdXJpPSR7cmVkaXJlY3RVcml9JnNjb3BlPSR7c2NvcGVzLmpvaW4oXCIlMjBcIil9JnJlc3BvbnNlX3R5cGU9dG9rZW4mc2hvd19kaWFsb2c9dHJ1ZWA7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IERhdGFDb250ZXh0UHJvdmlkZXIgPSAoeyBpbml0aWFsU3RhdGUsIHJlZHVjZXIsIGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUNvbnRleHRQcm92aWRlcjtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0VG9rZW4gfSBmcm9tICcuLi9jb21wb25lbnRzL3Nwb3RpZnknO1xyXG5pbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tICdzcG90aWZ5LXdlYi1hcGktanMnO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGxheWVyJztcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L2NvbnRleHQtcHJvdmlkZXInO1xyXG5cclxuY29uc3Qgc3BvdGlmeSA9IG5ldyBTcG90aWZ5V2ViQXBpKCk7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbeyB1c2VyLCB0b2tlbiB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF90b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgICAgaWYgKF90b2tlbikge1xyXG4gICAgICAgICAgICAvLyBzZXQgdG9rZW4gaW4gc3RhdGVcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9UT0tFTicsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogX3Rva2VuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjbGVhciB0aGUgdG9rZW4gZnJvbSB0aGUgdXJsXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gYXV0aGVudGljYXRlIHVzaW5nIHRoaXMgdG9rZW4gXHJcbiAgICAgICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNwb3RpZnkuc2V0QWNjZXNzVG9rZW4oX3Rva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBzcG90aWZ5LmdldE1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUicsIHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGF0Y2ggYW4gYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9VU0VSJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlsaXN0ID0gYXdhaXQgc3BvdGlmeS5nZXRVc2VyUGxheWxpc3RzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUExBWUxJU1QnLCBwbGF5bGlzdClcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1BMQVlMSVNUJyxcclxuICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdlZWtseSA9IGF3YWl0IHNwb3RpZnkuZ2V0UGxheWxpc3QoJzQ0aGpWZ1RlUTFSbk1tc2xZdXBtbFEnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXRUVLTFknLCB3ZWVrbHkpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9XRUVLTFknLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlZWtseVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYXV0aGVudGljYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXIsIHRva2VuXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7dG9rZW4gP1xyXG4gICAgICAgICAgICAgICAgPFBsYXllciBzcG90aWZ5PXtzcG90aWZ5fSAvPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW4gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlNdXNpY091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlSG9yaXpcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1BhdXNlQ2lyY2xlRmlsbGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlRmlsbGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5Q2lyY2xlT3V0bGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheWxpc3RQbGF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZXBlYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NodWZmbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NraXBOZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ta2lwUHJldmlvdXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZURvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZvbHVtZVVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNwb3RpZnktd2ViLWFwaS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9