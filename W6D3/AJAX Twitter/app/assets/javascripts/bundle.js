/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__ (1);
const UsersSearch = __webpack_require__ (2);

$(function () {
  $('button.follow-toggle').each( (idx, btn) => new FollowToggle(btn));
  $('.users-search').each( (idx, user) => new UsersSearch(user));
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
  }

  render () {
    if (this.followState === "unfollowed") {
      this.$el.html('Follow!');
    } else {
      this.$el.html('Unfollow!');
    }
  }

  handleClick (event) {
    const followToggle = this;


  event.preventDefault();

  if (this.followState === "unfollowed"){
    this.followState = 'following';
    this.render();

    $.ajax({
    url: `/users/${followToggle.userId}/follow`,
    dataType: 'json',
    method: 'POST'
    }).then(() => {
        followToggle.followState = 'followed';
        followToggle.render();
      });
  }

  else {
      this.followState = 'unfollowing';
      this.render();

    $.ajax({
    url: `/users/${followToggle.userid}/follow`,
    dataType: 'json',
    method: 'DELETE'
    }).then(() => {
        followToggle.followState = 'unfollowed';
        followToggle.render();
      });
    }
  }
}


module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (53:0)\nYou may need an appropriate loader to handle this file type.\n|  }\n| \n| }\n| ");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map