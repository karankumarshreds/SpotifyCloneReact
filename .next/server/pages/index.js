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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+O/E":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryMusicOutlined");

/***/ }),

/***/ "+lgS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleFilled");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6S4L":
/***/ (function(module, exports) {



/***/ }),

/***/ "7xmo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Shuffle");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9u85":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "GLU/":
/***/ (function(module, exports) {



/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ka5Z":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayCircleOutline");

/***/ }),

/***/ "MXwy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VolumeUp");

/***/ }),

/***/ "Mpav":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DataContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const DataContextProvider = ({
  initialState,
  reducer,
  children
}) => {
  return __jsx(DataContext.Provider, {
    value: Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState)
  }, children);
};

/* harmony default export */ __webpack_exports__["b"] = (DataContextProvider);

/***/ }),

/***/ "OAhD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeOutlined");

/***/ }),

/***/ "Ou+t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPrevious");

/***/ }),

/***/ "RBO0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseCircleFilled");

/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__("RDVA");

// EXTERNAL MODULE: ./styles/login.css
var login = __webpack_require__("6S4L");

// CONCATENATED MODULE: ./components/spotify.js
const authEndpoint = "https://accounts.spotify.com/en/authorize";
const redirectUri = "https://spotify-clone-d9af8.web.app/";
const clientId = "379a18794eed412a83946d11a16fb463";
const scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state", // for playback 
"streaming", "user-read-email", "user-read-private"];
const getToken = () => {
  // goes to the hash in the current url 
  return window.location.hash.split('&')[0].split("=")[1];
};
const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// CONCATENATED MODULE: ./components/login.js

var __jsx = external_react_default.a.createElement;



const Login = () => {
  console.log(loginUrl);
  return __jsx("div", {
    className: "login"
  }, __jsx("img", {
    src: "/Logo.png",
    alt: "Logo.png"
  }), __jsx("a", {
    href: loginUrl
  }, "LOGIN WITH SPOTIFY"));
};

/* harmony default export */ var components_login = (Login);
// EXTERNAL MODULE: external "spotify-web-api-js"
var external_spotify_web_api_js_ = __webpack_require__("lLJK");
var external_spotify_web_api_js_default = /*#__PURE__*/__webpack_require__.n(external_spotify_web_api_js_);

// EXTERNAL MODULE: ./styles/player.css
var styles_player = __webpack_require__("r97z");

// EXTERNAL MODULE: ./styles/sidebar.css
var sidebar = __webpack_require__("9u85");

// CONCATENATED MODULE: ./components/sidebar-options.js

var sidebar_options_jsx = external_react_default.a.createElement;

const SideBarOption = ({
  Icon,
  title
}) => {
  return sidebar_options_jsx("div", {
    className: "sidebarOption"
  }, Icon && sidebar_options_jsx(Icon, {
    className: "sidebarOption__icon"
  }), Icon ? sidebar_options_jsx("h5", null, title) : sidebar_options_jsx("p", null, title));
};

/* harmony default export */ var sidebar_options = (SideBarOption);
// EXTERNAL MODULE: ./context/context-provider.js
var context_provider = __webpack_require__("Mpav");

// EXTERNAL MODULE: external "@material-ui/icons/HomeOutlined"
var HomeOutlined_ = __webpack_require__("OAhD");
var HomeOutlined_default = /*#__PURE__*/__webpack_require__.n(HomeOutlined_);

// EXTERNAL MODULE: external "@material-ui/icons/SearchOutlined"
var SearchOutlined_ = __webpack_require__("fA4j");
var SearchOutlined_default = /*#__PURE__*/__webpack_require__.n(SearchOutlined_);

// EXTERNAL MODULE: external "@material-ui/icons/LibraryMusicOutlined"
var LibraryMusicOutlined_ = __webpack_require__("+O/E");
var LibraryMusicOutlined_default = /*#__PURE__*/__webpack_require__.n(LibraryMusicOutlined_);

// CONCATENATED MODULE: ./components/sidebar.js

var sidebar_jsx = external_react_default.a.createElement;



 // ICONS





const SideBar = () => {
  var _playlist$items;

  const {
    0: {
      playlist
    }
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  return sidebar_jsx("div", {
    className: "sidebar"
  }, sidebar_jsx("img", {
    className: "sidebar__logo",
    src: "https://cdn.clipart.email/2ea3d82dff9347b2a5269072f040169c_spotify-logo-and-brand-assets_2362-708.png",
    alt: "spotify-logo.png"
  }), sidebar_jsx(sidebar_options, {
    Icon: HomeOutlined_default.a,
    title: "Home"
  }), sidebar_jsx(sidebar_options, {
    Icon: SearchOutlined_default.a,
    title: "Search"
  }), sidebar_jsx(sidebar_options, {
    Icon: LibraryMusicOutlined_default.a,
    title: "Your Library"
  }), sidebar_jsx("br", null), sidebar_jsx("strong", {
    className: "sidebar__title"
  }, "PLAYLISTS"), sidebar_jsx("hr", null), playlist === null || playlist === void 0 ? void 0 : (_playlist$items = playlist.items) === null || _playlist$items === void 0 ? void 0 : _playlist$items.map(each => sidebar_jsx(sidebar_options, {
    key: each.id,
    title: each.name
  })));
};

/* harmony default export */ var components_sidebar = (SideBar);
// EXTERNAL MODULE: ./styles/body.css
var body = __webpack_require__("GLU/");

// EXTERNAL MODULE: ./styles/header.css
var header = __webpack_require__("gWZt");

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/header.js

var header_jsx = external_react_default.a.createElement;






const Header = ({
  spotify
}) => {
  var _user$images$;

  const {
    0: {
      user
    }
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  return header_jsx("div", {
    className: "header"
  }, header_jsx("div", {
    className: "header__left"
  }, header_jsx(Search_default.a, null), header_jsx("input", {
    placeholder: "Search for Songs, Artists or Podcasts..."
  })), header_jsx("div", {
    className: "header__right"
  }, header_jsx(core_["Avatar"], {
    src: (user === null || user === void 0 ? void 0 : (_user$images$ = user.images[0]) === null || _user$images$ === void 0 ? void 0 : _user$images$.url) || "/face.png",
    alt: "Karan"
  }), header_jsx("h4", null, user === null || user === void 0 ? void 0 : user.display_name)));
};

/* harmony default export */ var components_header = (Header);
// EXTERNAL MODULE: ./styles/song-row.css
var song_row = __webpack_require__("gPaE");

// EXTERNAL MODULE: external "@material-ui/icons/PlayCircleFilled"
var PlayCircleFilled_ = __webpack_require__("+lgS");
var PlayCircleFilled_default = /*#__PURE__*/__webpack_require__.n(PlayCircleFilled_);

// EXTERNAL MODULE: external "@material-ui/icons/PauseCircleFilled"
var PauseCircleFilled_ = __webpack_require__("RBO0");
var PauseCircleFilled_default = /*#__PURE__*/__webpack_require__.n(PauseCircleFilled_);

// CONCATENATED MODULE: ./components/song-row.js

var song_row_jsx = external_react_default.a.createElement;


 //ICONS




const SongRow = ({
  track,
  changeSongState,
  song,
  playing
}) => {
  var _track$album$images$;

  let Icon = (song === null || song === void 0 ? void 0 : song.id) === track.id && playing ? song_row_jsx(PauseCircleFilled_default.a, {
    className: "songRow__active"
  }) : song_row_jsx(PlayCircleFilled_default.a, null);

  const playSong = async () => {
    changeSongState(track);
  };

  return song_row_jsx("div", {
    className: "songRow",
    onClick: () => playSong()
  }, song_row_jsx("div", {
    className: "songRow__inner"
  }, song_row_jsx("div", {
    className: "songRow__left"
  }, song_row_jsx("img", {
    className: "songRow__album",
    src: (_track$album$images$ = track.album.images[0]) === null || _track$album$images$ === void 0 ? void 0 : _track$album$images$.url,
    alt: "album-art"
  }), song_row_jsx("div", {
    className: "songRow__info"
  }, song_row_jsx("h1", null, track.name), song_row_jsx("p", null, track.artists.map(artist => artist.name).join(","), " -", " ", track.album.name))), song_row_jsx("div", {
    className: "songRow__right"
  }, song_row_jsx("div", {
    className: "songRow__play"
  }, Icon))));
};

/* harmony default export */ var components_song_row = (SongRow);
// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_ = __webpack_require__("rYcJ");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);

// CONCATENATED MODULE: ./components/body-info.js

var body_info_jsx = external_react_default.a.createElement;
 //ICONS





const BodyInfo = ({
  user,
  weekly
}) => {
  var _user$images$;

  return body_info_jsx(external_react_default.a.Fragment, null, body_info_jsx("div", {
    className: "body__info"
  }, body_info_jsx(core_["Avatar"], {
    className: "body__avatar",
    src: (user === null || user === void 0 ? void 0 : (_user$images$ = user.images[0]) === null || _user$images$ === void 0 ? void 0 : _user$images$.url) || "/face.png",
    style: {
      width: 230,
      height: 230
    }
  }), body_info_jsx("div", {
    className: "body__infoText"
  }, body_info_jsx("strong", null, "PLAYLIST"), body_info_jsx("h2", null, "Discover Weekly"), body_info_jsx("p", null, weekly === null || weekly === void 0 ? void 0 : weekly.description))), body_info_jsx("div", {
    className: "body__songs"
  }, body_info_jsx("div", {
    className: "body__icons"
  }, body_info_jsx(PlayCircleFilled_default.a, {
    className: "body__playButton",
    style: {
      fontSize: 70
    }
  }), body_info_jsx(Favorite_default.a, null), body_info_jsx(MoreHoriz_default.a, null))));
};

/* harmony default export */ var body_info = (BodyInfo);
// CONCATENATED MODULE: ./components/body.js

var body_jsx = external_react_default.a.createElement;







const Body = ({
  spotify
}) => {
  var _weekly$tracks, _weekly$tracks$items;

  const player = Object(external_react_["useRef"])();
  const {
    0: {
      user,
      weekly,
      song,
      playing
    },
    1: dispatch
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  Object(external_react_["useEffect"])(() => {
    if (playing === true && song) {
      player.current.src = song.preview_url;
      console.log('PLAYING SONG ', song.name);
      player.current.play();
    }

    if (playing === false) player.current.pause();
  }, [playing, song]);

  const changeSongState = async track => {
    console.log(track.name);

    if ((song === null || song === void 0 ? void 0 : song.id) === track.id && playing === true) {
      await dispatch({
        type: 'SET_SONG',
        song: null
      });
      await dispatch({
        type: 'SET_PLAYING',
        playing: false
      });
    } else {
      await dispatch({
        type: 'SET_SONG',
        song: track
      });
      await dispatch({
        type: 'SET_PLAYING',
        playing: true
      });
    }
  };

  const songRows = weekly === null || weekly === void 0 ? void 0 : (_weekly$tracks = weekly.tracks) === null || _weekly$tracks === void 0 ? void 0 : (_weekly$tracks$items = _weekly$tracks.items) === null || _weekly$tracks$items === void 0 ? void 0 : _weekly$tracks$items.map(each => body_jsx(components_song_row, {
    key: each.id,
    track: each.track,
    changeSongState: changeSongState,
    song: song,
    playing: playing
  }));
  return body_jsx("div", {
    className: "body"
  }, body_jsx(components_header, {
    spotify: spotify
  }), body_jsx(body_info, {
    user: user,
    weekly: weekly
  }), body_jsx("div", {
    className: "body__songsList"
  }, body_jsx("audio", {
    ref: player
  }), songRows));
};

/* harmony default export */ var components_body = (Body);
// EXTERNAL MODULE: ./styles/footer.css
var footer = __webpack_require__("t25L");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__("bfSA");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/icons/VolumeDown"
var VolumeDown_ = __webpack_require__("vVXO");
var VolumeDown_default = /*#__PURE__*/__webpack_require__.n(VolumeDown_);

// EXTERNAL MODULE: external "@material-ui/icons/VolumeUp"
var VolumeUp_ = __webpack_require__("MXwy");

// EXTERNAL MODULE: external "@material-ui/icons/PlaylistPlay"
var PlaylistPlay_ = __webpack_require__("VMAl");
var PlaylistPlay_default = /*#__PURE__*/__webpack_require__.n(PlaylistPlay_);

// CONCATENATED MODULE: ./components/slider.js
var slider_jsx = external_react_default.a.createElement;







const useStyles = Object(styles_["makeStyles"])({
  root: {
    width: 200
  }
});
function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = external_react_default.a.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return slider_jsx("div", {
    className: classes.root
  }, slider_jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, slider_jsx(Grid_default.a, {
    item: true
  }, slider_jsx(PlaylistPlay_default.a, null)), slider_jsx(Grid_default.a, {
    item: true
  }, slider_jsx(VolumeDown_default.a, null)), slider_jsx(Grid_default.a, {
    item: true,
    xs: true
  }, slider_jsx(Slider_default.a, {
    className: "slider",
    value: value,
    onChange: handleChange,
    "aria-labelledby": "continuous-slider"
  }))));
}
// EXTERNAL MODULE: external "@material-ui/icons/PlayCircleOutline"
var PlayCircleOutline_ = __webpack_require__("Ka5Z");
var PlayCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PlayCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/PauseCircleOutline"
var PauseCircleOutline_ = __webpack_require__("TAvk");
var PauseCircleOutline_default = /*#__PURE__*/__webpack_require__.n(PauseCircleOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/SkipNext"
var SkipNext_ = __webpack_require__("cXR6");
var SkipNext_default = /*#__PURE__*/__webpack_require__.n(SkipNext_);

// EXTERNAL MODULE: external "@material-ui/icons/SkipPrevious"
var SkipPrevious_ = __webpack_require__("Ou+t");
var SkipPrevious_default = /*#__PURE__*/__webpack_require__.n(SkipPrevious_);

// EXTERNAL MODULE: external "@material-ui/icons/Shuffle"
var Shuffle_ = __webpack_require__("7xmo");
var Shuffle_default = /*#__PURE__*/__webpack_require__.n(Shuffle_);

// EXTERNAL MODULE: external "@material-ui/icons/Repeat"
var Repeat_ = __webpack_require__("g6aM");
var Repeat_default = /*#__PURE__*/__webpack_require__.n(Repeat_);

// CONCATENATED MODULE: ./components/footer.js

var footer_jsx = external_react_default.a.createElement;



 // ICONS








const Footer = () => {
  const {
    0: {
      song,
      playing
    }
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  return footer_jsx("div", {
    className: "footer"
  }, footer_jsx("div", {
    className: "footer__left"
  }, footer_jsx("img", {
    className: "footer__albumLogo",
    src: (song === null || song === void 0 ? void 0 : song.album.images[0].url) || "/art.jpg",
    alt: song === null || song === void 0 ? void 0 : song.name
  }), song ? footer_jsx("div", {
    className: "footer__songInfo"
  }, footer_jsx("h4", null, song.name || "Song name"), footer_jsx("p", null, song.artists.map(artist => artist.name).join(", "))) : footer_jsx("div", {
    className: "footer__songInfo"
  }, footer_jsx("h4", null, "No song is playing"), footer_jsx("p", null, "..."))), footer_jsx("div", {
    className: "footer__center"
  }, footer_jsx(Shuffle_default.a, {
    style: {
      fontSize: 20
    }
  }), footer_jsx(SkipPrevious_default.a, {
    style: {
      fontSize: 20
    }
  }), playing === true ? footer_jsx(PauseCircleOutline_default.a, {
    className: "songRow__active footer__playButton",
    style: {
      fontSize: 40
    }
  }) : footer_jsx(PlayCircleOutline_default.a, {
    className: "footer__playButton",
    style: {
      fontSize: 40
    }
  }), footer_jsx(SkipNext_default.a, {
    style: {
      fontSize: 20
    }
  }), footer_jsx(Repeat_default.a, {
    style: {
      fontSize: 20
    }
  })), footer_jsx("div", {
    className: "footer__right"
  }, footer_jsx(ContinuousSlider, null)));
};

/* harmony default export */ var components_footer = (Footer);
// CONCATENATED MODULE: ./components/player.js

var player_jsx = external_react_default.a.createElement;







const Player = ({
  spotify
}) => {
  const {
    0: {
      token
    },
    1: dispatch
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  return player_jsx("div", {
    className: "player"
  }, player_jsx("div", {
    className: "player__body"
  }, player_jsx(components_sidebar, null), player_jsx(components_body, {
    spotify: spotify
  })), player_jsx(components_footer, null));
};

/* harmony default export */ var components_player = (Player);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;







const pages_spotify = new external_spotify_web_api_js_default.a();

const LandingPage = () => {
  const {
    0: {
      user,
      token
    },
    1: dispatch
  } = Object(external_react_["useContext"])(context_provider["a" /* DataContext */]);
  Object(external_react_["useEffect"])(() => {
    const _token = getToken();

    if (_token) {
      // set token in state
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      }); // clear the token from the url

      window.location.hash = ""; // authenticate using this token 

      const authenticate = async () => {
        pages_spotify.setAccessToken(_token);
        const user = await pages_spotify.getMe();
        console.log('USER', user); // dispatch an action

        dispatch({
          type: 'SET_USER',
          user
        });
        const playlist = await pages_spotify.getUserPlaylists();
        console.log('PLAYLIST', playlist);
        dispatch({
          type: 'SET_PLAYLIST',
          playlist
        });
        const weekly = await pages_spotify.getPlaylist('44hjVgTeQ1RnMmslYupmlQ');
        console.log('WEEKLY', weekly);
        dispatch({
          type: 'SET_WEEKLY',
          weekly
        });
      };

      authenticate();
    }
  }, [user, token]);
  return pages_jsx("div", null, token ? pages_jsx(components_player, {
    spotify: pages_spotify
  }) : pages_jsx("div", null, pages_jsx(components_login, null)));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "TAvk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PauseCircleOutline");

/***/ }),

/***/ "VMAl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlaylistPlay");

/***/ }),

/***/ "bfSA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cXR6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNext");

/***/ }),

/***/ "fA4j":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchOutlined");

/***/ }),

/***/ "g6aM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Repeat");

/***/ }),

/***/ "gPaE":
/***/ (function(module, exports) {



/***/ }),

/***/ "gWZt":
/***/ (function(module, exports) {



/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "lLJK":
/***/ (function(module, exports) {

module.exports = require("spotify-web-api-js");

/***/ }),

/***/ "r97z":
/***/ (function(module, exports) {



/***/ }),

/***/ "rYcJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "t25L":
/***/ (function(module, exports) {



/***/ }),

/***/ "vVXO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VolumeDown");

/***/ })

/******/ });