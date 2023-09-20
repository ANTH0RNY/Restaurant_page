/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/mainBody.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/mainBody.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-body {
  margin-top: 3rem;
}`, "",{"version":3,"sources":["webpack://./src/sass/mainBody.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":[".main-body{\n    margin-top: 3rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
  height: 30rem;
  width: 100vw;
  filter: brightness(90%);
}

.image-slider {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

#wrapper {
  display: flex;
  flex-wrap: nowrap;
  transform: translate3d(0, 0, 0);
  transition: transform 0.9s cubic-bezier(0.57, 0.21, 0.69, 1.25);
}

.window {
  align-self: center;
  width: 80vw;
  overflow: hidden;
  height: 30rem;
  display: flex;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.navLinks {
  text-align: center;
  width: 80%;
  align-self: center;
}

.navLinks ul {
  margin: 0px;
  padding: 0px;
  display: inline-block;
  margin-top: 6px;
}

.links {
  float: left;
  text-align: center;
  margin: 10px;
  list-style: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50px;
  border: black 1px solid;
}

.links:hover {
  background-color: #ffff00;
}

.links.active {
  background-color: #333333;
  color: #ffffff;
  outline-width: 7px;
}

.links.active:hover {
  background-color: #484848;
  color: #ffffff;
}

.btn {
  cursor: pointer;
  position: absolute;
  top: 50%;
  font-size: 1.2rem;
  width: auto;
  margin-top: -110px;
  padding: 3rem 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
}

.right {
  right: 0;
  border-radius: 3px 0 0 3px;
  margin-right: calc(10vw - 7px);
}

/* On hover, add a black background color with a little bit see-through */
.left:hover,
.right:hover {
  background-color: rgba(0, 0, 0, 0.8);
}`, "",{"version":3,"sources":["webpack://./src/sass/scroll.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACE,aCFO;EDGP,YCDS;EDET,uBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,iBAAA;EACA,+BAAA;EACC,+DAAA;AADH;;AAKA;EAEE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EAEA,+EAAA;AAJF;;AAOA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;AAJF;;AAOA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AAJF;;AAOA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAJF;;AAOA;EACE,yBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,cAAA;EACA,kBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,cAAA;AAJF;;AAOA;EACE,eAAA;EACA,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,iBAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;AAJF;;AAOA;EACE,QAAA;EACA,0BAAA;EACA,8BAAA;AAJF;;AAQA,yEAAA;AACA;;EAEE,oCAAA;AALF","sourcesContent":["@import 'sizes';\n\n.content {\n  height: $height;\n  width: $img-width;\n  filter: brightness(90%);\n}\n\n.image-slider{\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n}\n\n#wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate3d(0, 0, 0);\n   transition: transform .9s cubic-bezier(.57,.21,.69,1.25);\n  \n}\n\n.window {\n\n  align-self: center;\n  width: 80vw;\n  overflow: hidden;\n  height: ($height);\n  display: flex;\n  border-radius: 1rem;\n\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.navLinks {\n  text-align: center;\n  width: ($width);\n  align-self: center;\n}\n\n.navLinks ul {\n  margin: 0px;\n  padding: 0px;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.links {\n  float: left;\n  text-align: center;\n  margin: 10px;\n  list-style: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50px;\n  border: black 1px solid;\n}\n\n.links:hover {\n  background-color: #ffff00;\n}\n\n.links.active {\n  background-color: #333333;\n  color: #ffffff;\n  outline-width: 7px;\n}\n\n.links.active:hover {\n  background-color: #484848;\n  color: #ffffff;\n}\n\n.btn {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  font-size: 1.2rem;\n  width: auto;\n  margin-top: -110px;\n  padding: 3rem 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n}\n\n.right {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n  margin-right: calc(10vw - 7px);\n\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.left:hover,\n.right:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding-inline: 20px;
}

nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-content: center;
  font-size: larger;
  background-color: rgb(255, 232, 232);
  padding-inline: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
nav ul {
  list-style: none;
  grid-column-start: 3;
  grid-column-end: 5;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
nav li {
  font-weight: 500;
  position: relative;
}
nav li::after {
  content: "";
  position: absolute;
  height: 3px;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: orangered;
  translate: 0;
  scale: 0 1;
  transition: scale 300ms, translate 500ms;
}
nav li:hover::after {
  scale: 1 1;
}
nav li:hover,
nav li:focus-visible {
  opacity: 1;
}
nav .Nav-brand {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAQA;EACI,iCAAA;EACA,sBAAA;EACA,SAAA;EACA,oBCZW;ADMf;;AASA;EAII,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,iBAAA;EACA,oCAAA;EACA,oBAAA;EACA,mBAAA;EAEA,qDAAA;AAVJ;AAWI;EACI,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;AATR;AAYI;EACI,gBAAA;EACA,kBAAA;AAVR;AAYI;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;EACA,YAhCQ;EAiCR,UAAA;EACA,wCAAA;AAVR;AAkBI;EACI,UAAA;AAhBR;AAuBI;;EAEI,UAAA;AArBR;AAyBI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AAvBR","sourcesContent":["// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\n@import 'sizes';\n\n// $body-padding: 20px;\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding-inline: $body-padding;\n}\n\nnav {\n    $width:0;\n    $translate: 0;\n\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-content: center;\n    font-size: larger;\n    background-color: rgba(255, 232, 232, 1);\n    padding-inline: 1rem;\n    border-radius: 10px;\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    ul {\n        list-style: none;\n        grid-column-start: 3;\n        grid-column-end: 5;\n        display: flex;\n        justify-content: space-around;\n        text-align: center;\n    }\n\n    li {\n        font-weight: 500;\n        position: relative;\n    }\n    li::after {\n        content: \"\";\n        position: absolute;\n        height: 3px;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n        background-color: orangered;        \n        translate: $translate;\n        scale: $width 1;\n        transition: scale 300ms,\n        translate 500ms;\n    }\n    li:has(+ :hover){\n    //    color: red;\n       $translate: 100%;\n    }\n\n    li:hover::after{\n        scale: 1 1;\n    }\n\n    li:hover + li{\n        $translate: -100%;\n    }\n\n    li:hover,\n    li:focus-visible {\n        opacity: 1;\n        $width: 1;\n    }\n\n    .Nav-brand {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        display: flex;\n        align-items: center;\n    }\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/formats.js":
/*!************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/formats.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FORMAT_PLAIN = exports.FORMAT_HTML = exports.FORMATS = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGT1JNQVRfSFRNTCIsIkZPUk1BVF9QTEFJTiIsIkZPUk1BVFMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc3RhbnRzL2Zvcm1hdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZPUk1BVF9IVE1MID0gXCJodG1sXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRfUExBSU4gPSBcInBsYWluXCI7XHJcbmV4cG9ydCBjb25zdCBGT1JNQVRTID0gW0ZPUk1BVF9IVE1MLCBGT1JNQVRfUExBSU5dO1xyXG5leHBvcnQgdHlwZSBMb3JlbUZvcm1hdCA9IFwicGxhaW5cIiB8IFwiaHRtbFwiO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxNQUFwQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsT0FBckI7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQUNGLFdBQUQsRUFBY0MsWUFBZCxDQUFoQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js":
/*!****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/lineEndings.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMSU5FX0VORElOR1MiLCJQT1NJWCIsIldJTjMyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9saW5lRW5kaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTElORV9FTkRJTkdTID0ge1xyXG4gIFBPU0lYOiBcIlxcblwiLFxyXG4gIFdJTjMyOiBcIlxcclxcblwiLFxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsS0FBSyxFQUFFLElBRG1CO0VBRTFCQyxLQUFLLEVBQUU7QUFGbUIsQ0FBckIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/platforms.js":
/*!**************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/platforms.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTVVBQT1JURURfUExBVEZPUk1TIiwiREFSV0lOIiwiTElOVVgiLCJXSU4zMiJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvcGxhdGZvcm1zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVVBQT1JURURfUExBVEZPUk1TID0ge1xyXG4gIERBUldJTjogXCJkYXJ3aW5cIixcclxuICBMSU5VWDogXCJsaW51eFwiLFxyXG4gIFdJTjMyOiBcIndpbjMyXCIsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsbUJBQW1CLEdBQUc7RUFDakNDLE1BQU0sRUFBRSxRQUR5QjtFQUVqQ0MsS0FBSyxFQUFFLE9BRjBCO0VBR2pDQyxLQUFLLEVBQUU7QUFIMEIsQ0FBNUIifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/units.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/units.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UNIT_WORDS = exports.UNIT_WORD = exports.UNIT_SENTENCES = exports.UNIT_SENTENCE = exports.UNIT_PARAGRAPHS = exports.UNIT_PARAGRAPH = exports.UNITS = void 0;
var UNIT_WORDS = "words";
exports.UNIT_WORDS = UNIT_WORDS;
var UNIT_WORD = "word";
exports.UNIT_WORD = UNIT_WORD;
var UNIT_SENTENCES = "sentences";
exports.UNIT_SENTENCES = UNIT_SENTENCES;
var UNIT_SENTENCE = "sentence";
exports.UNIT_SENTENCE = UNIT_SENTENCE;
var UNIT_PARAGRAPHS = "paragraphs";
exports.UNIT_PARAGRAPHS = UNIT_PARAGRAPHS;
var UNIT_PARAGRAPH = "paragraph";
exports.UNIT_PARAGRAPH = UNIT_PARAGRAPH;
var UNITS = [UNIT_WORDS, UNIT_WORD, UNIT_SENTENCES, UNIT_SENTENCE, UNIT_PARAGRAPHS, UNIT_PARAGRAPH];
exports.UNITS = UNITS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVTklUX1dPUkRTIiwiVU5JVF9XT1JEIiwiVU5JVF9TRU5URU5DRVMiLCJVTklUX1NFTlRFTkNFIiwiVU5JVF9QQVJBR1JBUEhTIiwiVU5JVF9QQVJBR1JBUEgiLCJVTklUUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvdW5pdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVOSVRfV09SRFMgPSBcIndvcmRzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnQgY29uc3QgVU5JVF9TRU5URU5DRVMgPSBcInNlbnRlbmNlc1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfU0VOVEVOQ0UgPSBcInNlbnRlbmNlXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnQgY29uc3QgVU5JVF9QQVJBR1JBUEggPSBcInBhcmFncmFwaFwiO1xuZXhwb3J0IGNvbnN0IFVOSVRTID0gW1xuICBVTklUX1dPUkRTLFxuICBVTklUX1dPUkQsXG4gIFVOSVRfU0VOVEVOQ0VTLFxuICBVTklUX1NFTlRFTkNFLFxuICBVTklUX1BBUkFHUkFQSFMsXG4gIFVOSVRfUEFSQUdSQVBILFxuXTtcbmV4cG9ydCB0eXBlIExvcmVtVW5pdCA9IFwid29yZHNcIiB8IFwid29yZFwiIHwgXCJzZW50ZW5jZXNcIiB8IFwic2VudGVuY2VcIiB8IFwicGFyYWdyYXBoc1wiIHwgXCJwYXJhZ3JhcGhcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLE9BQW5COztBQUNBLElBQU1DLFNBQVMsR0FBRyxNQUFsQjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFVBQXRCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxZQUF4Qjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsV0FBdkI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQ25CTixVQURtQixFQUVuQkMsU0FGbUIsRUFHbkJDLGNBSG1CLEVBSW5CQyxhQUptQixFQUtuQkMsZUFMbUIsRUFNbkJDLGNBTm1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/constants/words.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/constants/words.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJXT1JEUyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvd29yZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFdPUkRTID0gW1xyXG4gIFwiYWRcIixcclxuICBcImFkaXBpc2ljaW5nXCIsXHJcbiAgXCJhbGlxdWFcIixcclxuICBcImFsaXF1aXBcIixcclxuICBcImFtZXRcIixcclxuICBcImFuaW1cIixcclxuICBcImF1dGVcIixcclxuICBcImNpbGx1bVwiLFxyXG4gIFwiY29tbW9kb1wiLFxyXG4gIFwiY29uc2VjdGV0dXJcIixcclxuICBcImNvbnNlcXVhdFwiLFxyXG4gIFwiY3VscGFcIixcclxuICBcImN1cGlkYXRhdFwiLFxyXG4gIFwiZGVzZXJ1bnRcIixcclxuICBcImRvXCIsXHJcbiAgXCJkb2xvclwiLFxyXG4gIFwiZG9sb3JlXCIsXHJcbiAgXCJkdWlzXCIsXHJcbiAgXCJlYVwiLFxyXG4gIFwiZWl1c21vZFwiLFxyXG4gIFwiZWxpdFwiLFxyXG4gIFwiZW5pbVwiLFxyXG4gIFwiZXNzZVwiLFxyXG4gIFwiZXN0XCIsXHJcbiAgXCJldFwiLFxyXG4gIFwiZXVcIixcclxuICBcImV4XCIsXHJcbiAgXCJleGNlcHRldXJcIixcclxuICBcImV4ZXJjaXRhdGlvblwiLFxyXG4gIFwiZnVnaWF0XCIsXHJcbiAgXCJpZFwiLFxyXG4gIFwiaW5cIixcclxuICBcImluY2lkaWR1bnRcIixcclxuICBcImlwc3VtXCIsXHJcbiAgXCJpcnVyZVwiLFxyXG4gIFwibGFib3JlXCIsXHJcbiAgXCJsYWJvcmlzXCIsXHJcbiAgXCJsYWJvcnVtXCIsXHJcbiAgXCJMb3JlbVwiLFxyXG4gIFwibWFnbmFcIixcclxuICBcIm1pbmltXCIsXHJcbiAgXCJtb2xsaXRcIixcclxuICBcIm5pc2lcIixcclxuICBcIm5vblwiLFxyXG4gIFwibm9zdHJ1ZFwiLFxyXG4gIFwibnVsbGFcIixcclxuICBcIm9jY2FlY2F0XCIsXHJcbiAgXCJvZmZpY2lhXCIsXHJcbiAgXCJwYXJpYXR1clwiLFxyXG4gIFwicHJvaWRlbnRcIixcclxuICBcInF1aVwiLFxyXG4gIFwicXVpc1wiLFxyXG4gIFwicmVwcmVoZW5kZXJpdFwiLFxyXG4gIFwic2ludFwiLFxyXG4gIFwic2l0XCIsXHJcbiAgXCJzdW50XCIsXHJcbiAgXCJ0ZW1wb3JcIixcclxuICBcInVsbGFtY29cIixcclxuICBcInV0XCIsXHJcbiAgXCJ2ZWxpdFwiLFxyXG4gIFwidmVuaWFtXCIsXHJcbiAgXCJ2b2x1cHRhdGVcIixcclxuXTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUcsQ0FDbkIsSUFEbUIsRUFFbkIsYUFGbUIsRUFHbkIsUUFIbUIsRUFJbkIsU0FKbUIsRUFLbkIsTUFMbUIsRUFNbkIsTUFObUIsRUFPbkIsTUFQbUIsRUFRbkIsUUFSbUIsRUFTbkIsU0FUbUIsRUFVbkIsYUFWbUIsRUFXbkIsV0FYbUIsRUFZbkIsT0FabUIsRUFhbkIsV0FibUIsRUFjbkIsVUFkbUIsRUFlbkIsSUFmbUIsRUFnQm5CLE9BaEJtQixFQWlCbkIsUUFqQm1CLEVBa0JuQixNQWxCbUIsRUFtQm5CLElBbkJtQixFQW9CbkIsU0FwQm1CLEVBcUJuQixNQXJCbUIsRUFzQm5CLE1BdEJtQixFQXVCbkIsTUF2Qm1CLEVBd0JuQixLQXhCbUIsRUF5Qm5CLElBekJtQixFQTBCbkIsSUExQm1CLEVBMkJuQixJQTNCbUIsRUE0Qm5CLFdBNUJtQixFQTZCbkIsY0E3Qm1CLEVBOEJuQixRQTlCbUIsRUErQm5CLElBL0JtQixFQWdDbkIsSUFoQ21CLEVBaUNuQixZQWpDbUIsRUFrQ25CLE9BbENtQixFQW1DbkIsT0FuQ21CLEVBb0NuQixRQXBDbUIsRUFxQ25CLFNBckNtQixFQXNDbkIsU0F0Q21CLEVBdUNuQixPQXZDbUIsRUF3Q25CLE9BeENtQixFQXlDbkIsT0F6Q21CLEVBMENuQixRQTFDbUIsRUEyQ25CLE1BM0NtQixFQTRDbkIsS0E1Q21CLEVBNkNuQixTQTdDbUIsRUE4Q25CLE9BOUNtQixFQStDbkIsVUEvQ21CLEVBZ0RuQixTQWhEbUIsRUFpRG5CLFVBakRtQixFQWtEbkIsVUFsRG1CLEVBbURuQixLQW5EbUIsRUFvRG5CLE1BcERtQixFQXFEbkIsZUFyRG1CLEVBc0RuQixNQXREbUIsRUF1RG5CLEtBdkRtQixFQXdEbkIsTUF4RG1CLEVBeURuQixRQXpEbUIsRUEwRG5CLFNBMURtQixFQTJEbkIsSUEzRG1CLEVBNERuQixPQTVEbUIsRUE2RG5CLFFBN0RtQixFQThEbkIsV0E5RG1CLENBQWQifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "LoremIpsum", ({
  enumerable: true,
  get: function get() {
    return _LoremIpsum["default"];
  }
}));
exports.loremIpsum = void 0;

var _formats = __webpack_require__(/*! ./constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _units = __webpack_require__(/*! ./constants/units */ "./node_modules/lorem-ipsum/dist/constants/units.js");

var _words = __webpack_require__(/*! ./constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _LoremIpsum = _interopRequireDefault(__webpack_require__(/*! ./lib/LoremIpsum */ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? _formats.FORMAT_PLAIN : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? _units.UNIT_SENTENCES : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum["default"](options, format, suffix);

  switch (units) {
    case _units.UNIT_PARAGRAPHS:
    case _units.UNIT_PARAGRAPH:
      return lorem.generateParagraphs(count);

    case _units.UNIT_SENTENCES:
    case _units.UNIT_SENTENCE:
      return lorem.generateSentences(count);

    case _units.UNIT_WORDS:
    case _units.UNIT_WORD:
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb3JlbUlwc3VtIiwiY291bnQiLCJmb3JtYXQiLCJGT1JNQVRfUExBSU4iLCJwYXJhZ3JhcGhMb3dlckJvdW5kIiwicGFyYWdyYXBoVXBwZXJCb3VuZCIsInJhbmRvbSIsInNlbnRlbmNlTG93ZXJCb3VuZCIsInNlbnRlbmNlVXBwZXJCb3VuZCIsInVuaXRzIiwiVU5JVF9TRU5URU5DRVMiLCJ3b3JkcyIsIldPUkRTIiwic3VmZml4Iiwib3B0aW9ucyIsInNlbnRlbmNlc1BlclBhcmFncmFwaCIsIm1heCIsIm1pbiIsIndvcmRzUGVyU2VudGVuY2UiLCJsb3JlbSIsIkxvcmVtSXBzdW0iLCJVTklUX1BBUkFHUkFQSFMiLCJVTklUX1BBUkFHUkFQSCIsImdlbmVyYXRlUGFyYWdyYXBocyIsIlVOSVRfU0VOVEVOQ0UiLCJnZW5lcmF0ZVNlbnRlbmNlcyIsIlVOSVRfV09SRFMiLCJVTklUX1dPUkQiLCJnZW5lcmF0ZVdvcmRzIl0sInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvcmVtRm9ybWF0LCBGT1JNQVRfUExBSU4gfSBmcm9tIFwiLi9jb25zdGFudHMvZm9ybWF0c1wiO1xyXG5pbXBvcnQge1xyXG4gIExvcmVtVW5pdCxcclxuICBVTklUX1BBUkFHUkFQSCxcclxuICBVTklUX1BBUkFHUkFQSFMsXHJcbiAgVU5JVF9TRU5URU5DRVMsXHJcbiAgVU5JVF9TRU5URU5DRSxcclxuICBVTklUX1dPUkRTLFxyXG4gIFVOSVRfV09SRCxcclxufSBmcm9tIFwiLi9jb25zdGFudHMvdW5pdHNcIjtcclxuaW1wb3J0IHsgV09SRFMgfSBmcm9tIFwiLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgSVBybmcgfSBmcm9tIFwiLi9saWIvZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCBMb3JlbUlwc3VtIGZyb20gXCIuL2xpYi9Mb3JlbUlwc3VtXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb3JlbUlwc3VtUGFyYW1zIHtcclxuICBjb3VudD86IG51bWJlcjtcclxuICBmb3JtYXQ/OiBMb3JlbUZvcm1hdDtcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHBhcmFncmFwaFVwcGVyQm91bmQ/OiBudW1iZXI7XHJcbiAgcmFuZG9tPzogSVBybmc7XHJcbiAgc2VudGVuY2VMb3dlckJvdW5kPzogbnVtYmVyO1xyXG4gIHNlbnRlbmNlVXBwZXJCb3VuZD86IG51bWJlcjtcclxuICB1bml0cz86IExvcmVtVW5pdDtcclxuICB3b3Jkcz86IHN0cmluZ1tdO1xyXG4gIHN1ZmZpeD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgbG9yZW1JcHN1bSA9ICh7XHJcbiAgY291bnQgPSAxLFxyXG4gIGZvcm1hdCA9IEZPUk1BVF9QTEFJTixcclxuICBwYXJhZ3JhcGhMb3dlckJvdW5kID0gMyxcclxuICBwYXJhZ3JhcGhVcHBlckJvdW5kID0gNyxcclxuICByYW5kb20sXHJcbiAgc2VudGVuY2VMb3dlckJvdW5kID0gNSxcclxuICBzZW50ZW5jZVVwcGVyQm91bmQgPSAxNSxcclxuICB1bml0cyA9IFVOSVRfU0VOVEVOQ0VTLFxyXG4gIHdvcmRzID0gV09SRFMsXHJcbiAgc3VmZml4ID0gXCJcIixcclxufTogSUxvcmVtSXBzdW1QYXJhbXMgPSB7fSk6IHN0cmluZyA9PiB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJhbmRvbSxcclxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xyXG4gICAgICBtYXg6IHBhcmFncmFwaFVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogcGFyYWdyYXBoTG93ZXJCb3VuZCxcclxuICAgIH0sXHJcbiAgICB3b3JkcyxcclxuICAgIHdvcmRzUGVyU2VudGVuY2U6IHtcclxuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXHJcbiAgICAgIG1pbjogc2VudGVuY2VMb3dlckJvdW5kLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsb3JlbTogTG9yZW1JcHN1bSA9IG5ldyBMb3JlbUlwc3VtKG9wdGlvbnMsIGZvcm1hdCwgc3VmZml4KTtcclxuXHJcbiAgc3dpdGNoICh1bml0cykge1xyXG4gICAgY2FzZSBVTklUX1BBUkFHUkFQSFM6XHJcbiAgICBjYXNlIFVOSVRfUEFSQUdSQVBIOlxyXG4gICAgICByZXR1cm4gbG9yZW0uZ2VuZXJhdGVQYXJhZ3JhcGhzKGNvdW50KTtcclxuICAgIGNhc2UgVU5JVF9TRU5URU5DRVM6XHJcbiAgICBjYXNlIFVOSVRfU0VOVEVOQ0U6XHJcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XHJcbiAgICBjYXNlIFVOSVRfV09SRFM6XHJcbiAgICBjYXNlIFVOSVRfV09SRDpcclxuICAgICAgcmV0dXJuIGxvcmVtLmdlbmVyYXRlV29yZHMoY291bnQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgbG9yZW1JcHN1bSwgTG9yZW1JcHN1bSB9O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFTQTs7QUFFQTs7OztBQWVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBV21CO0VBQUEsK0VBQWYsRUFBZTtFQUFBLHNCQVZwQ0MsS0FVb0M7RUFBQSxJQVZwQ0EsS0FVb0MsMkJBVjVCLENBVTRCO0VBQUEsdUJBVHBDQyxNQVNvQztFQUFBLElBVHBDQSxNQVNvQyw0QkFUM0JDLHFCQVMyQjtFQUFBLGlDQVJwQ0MsbUJBUW9DO0VBQUEsSUFScENBLG1CQVFvQyxzQ0FSZCxDQVFjO0VBQUEsaUNBUHBDQyxtQkFPb0M7RUFBQSxJQVBwQ0EsbUJBT29DLHNDQVBkLENBT2M7RUFBQSxJQU5wQ0MsTUFNb0MsUUFOcENBLE1BTW9DO0VBQUEsaUNBTHBDQyxrQkFLb0M7RUFBQSxJQUxwQ0Esa0JBS29DLHNDQUxmLENBS2U7RUFBQSxpQ0FKcENDLGtCQUlvQztFQUFBLElBSnBDQSxrQkFJb0Msc0NBSmYsRUFJZTtFQUFBLHNCQUhwQ0MsS0FHb0M7RUFBQSxJQUhwQ0EsS0FHb0MsMkJBSDVCQyxxQkFHNEI7RUFBQSxzQkFGcENDLEtBRW9DO0VBQUEsSUFGcENBLEtBRW9DLDJCQUY1QkMsWUFFNEI7RUFBQSx1QkFEcENDLE1BQ29DO0VBQUEsSUFEcENBLE1BQ29DLDRCQUQzQixFQUMyQjs7RUFDcEMsSUFBTUMsT0FBTyxHQUFHO0lBQ2RSLE1BQU0sRUFBTkEsTUFEYztJQUVkUyxxQkFBcUIsRUFBRTtNQUNyQkMsR0FBRyxFQUFFWCxtQkFEZ0I7TUFFckJZLEdBQUcsRUFBRWI7SUFGZ0IsQ0FGVDtJQU1kTyxLQUFLLEVBQUxBLEtBTmM7SUFPZE8sZ0JBQWdCLEVBQUU7TUFDaEJGLEdBQUcsRUFBRVIsa0JBRFc7TUFFaEJTLEdBQUcsRUFBRVY7SUFGVztFQVBKLENBQWhCO0VBYUEsSUFBTVksS0FBaUIsR0FBRyxJQUFJQyxzQkFBSixDQUFlTixPQUFmLEVBQXdCWixNQUF4QixFQUFnQ1csTUFBaEMsQ0FBMUI7O0VBRUEsUUFBUUosS0FBUjtJQUNFLEtBQUtZLHNCQUFMO0lBQ0EsS0FBS0MscUJBQUw7TUFDRSxPQUFPSCxLQUFLLENBQUNJLGtCQUFOLENBQXlCdEIsS0FBekIsQ0FBUDs7SUFDRixLQUFLUyxxQkFBTDtJQUNBLEtBQUtjLG9CQUFMO01BQ0UsT0FBT0wsS0FBSyxDQUFDTSxpQkFBTixDQUF3QnhCLEtBQXhCLENBQVA7O0lBQ0YsS0FBS3lCLGlCQUFMO0lBQ0EsS0FBS0MsZ0JBQUw7TUFDRSxPQUFPUixLQUFLLENBQUNTLGFBQU4sQ0FBb0IzQixLQUFwQixDQUFQOztJQUNGO01BQ0UsT0FBTyxFQUFQO0VBWEo7QUFhRCxDQXhDRCJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _formats = __webpack_require__(/*! ../constants/formats */ "./node_modules/lorem-ipsum/dist/constants/formats.js");

var _lineEndings = __webpack_require__(/*! ../constants/lineEndings */ "./node_modules/lorem-ipsum/dist/constants/lineEndings.js");

var _generator = _interopRequireDefault(__webpack_require__(/*! ../lib/generator */ "./node_modules/lorem-ipsum/dist/lib/generator.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum = /*#__PURE__*/function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    this.format = format;
    this.suffix = suffix;

    _defineProperty(this, "generator", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.generator = new _generator["default"](options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwib3B0aW9ucyIsImZvcm1hdCIsIkZPUk1BVF9QTEFJTiIsInN1ZmZpeCIsIkZPUk1BVFMiLCJpbmRleE9mIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpvaW4iLCJnZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJpc1JlYWN0TmF0aXZlIiwiaXNOb2RlIiwiaXNXaW5kb3dzIiwiTElORV9FTkRJTkdTIiwiV0lOMzIiLCJQT1NJWCIsInN0ciIsIkZPUk1BVF9IVE1MIiwic3RyaW5ncyIsIm1hcCIsImZvcm1hdFN0cmluZyIsIm51bSIsImdlbmVyYXRlUmFuZG9tV29yZHMiLCJnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaCIsIm1ha2VTdHJpbmciLCJiaW5kIiwiZm9ybWF0U3RyaW5ncyIsIm1ha2VBcnJheU9mU3RyaW5ncyIsImdldExpbmVFbmRpbmciXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL0xvcmVtSXBzdW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTiwgRk9STUFUUywgTG9yZW1Gb3JtYXQgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2Zvcm1hdHNcIjtcclxuaW1wb3J0IHsgTElORV9FTkRJTkdTIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9saW5lRW5kaW5nc1wiO1xyXG5pbXBvcnQgR2VuZXJhdG9yLCB7IElHZW5lcmF0b3JPcHRpb25zIH0gZnJvbSBcIi4uL2xpYi9nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgaXNOb2RlLCBpc1JlYWN0TmF0aXZlLCBpc1dpbmRvd3MsIG1ha2VBcnJheU9mU3RyaW5ncyB9IGZyb20gXCIuLi91dGlsXCI7XHJcblxyXG5jbGFzcyBMb3JlbUlwc3VtIHtcclxuICBwdWJsaWMgZ2VuZXJhdG9yOiBHZW5lcmF0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgb3B0aW9uczogSUdlbmVyYXRvck9wdGlvbnMgPSB7fSxcclxuICAgIHB1YmxpYyBmb3JtYXQ6IExvcmVtRm9ybWF0ID0gRk9STUFUX1BMQUlOLFxyXG4gICAgcHVibGljIHN1ZmZpeD86IHN0cmluZyxcclxuICApIHtcclxuICAgIGlmIChGT1JNQVRTLmluZGV4T2YoZm9ybWF0LnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYCR7Zm9ybWF0fSBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSAke0ZPUk1BVFMuam9pbihcIiBvciBcIil9LmAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdlbmVyYXRvciA9IG5ldyBHZW5lcmF0b3Iob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGluZUVuZGluZygpIHtcclxuICAgIGlmICh0aGlzLnN1ZmZpeCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWZmaXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc1JlYWN0TmF0aXZlKCkgJiYgaXNOb2RlKCkgJiYgaXNXaW5kb3dzKCkpIHtcclxuICAgICAgcmV0dXJuIExJTkVfRU5ESU5HUy5XSU4zMjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTElORV9FTkRJTkdTLlBPU0lYO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZyhzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IEZPUk1BVF9IVE1MKSB7XHJcbiAgICAgIHJldHVybiBgPHA+JHtzdHJ9PC9wPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvcm1hdFN0cmluZ3Moc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gc3RyaW5ncy5tYXAoKHN0cikgPT4gdGhpcy5mb3JtYXRTdHJpbmcoc3RyKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVXb3JkcyhudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2VuZXJhdGVTZW50ZW5jZXMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyh0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVBhcmFncmFwaHMobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWFrZVN0cmluZyA9IHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoLmJpbmQoXHJcbiAgICAgIHRoaXMuZ2VuZXJhdG9yLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MobWFrZUFycmF5T2ZTdHJpbmdzKG51bSwgbWFrZVN0cmluZykpLmpvaW4oXHJcbiAgICAgIHRoaXMuZ2V0TGluZUVuZGluZygpLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvcmVtSXBzdW07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTtFQUdKLHNCQUlFO0lBQUEsSUFIQUMsT0FHQSx1RUFINkIsRUFHN0I7SUFBQSxJQUZPQyxNQUVQLHVFQUY2QkMscUJBRTdCO0lBQUEsSUFET0MsTUFDUDs7SUFBQTs7SUFBQSxLQUZPRixNQUVQLEdBRk9BLE1BRVA7SUFBQSxLQURPRSxNQUNQLEdBRE9BLE1BQ1A7O0lBQUE7O0lBQ0EsSUFBSUMsZ0JBQUEsQ0FBUUMsT0FBUixDQUFnQkosTUFBTSxDQUFDSyxXQUFQLEVBQWhCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7TUFDaEQsTUFBTSxJQUFJQyxLQUFKLFdBQ0ROLE1BREMsK0NBQzBDRyxnQkFBQSxDQUFRSSxJQUFSLENBQWEsTUFBYixDQUQxQyxPQUFOO0lBR0Q7O0lBQ0QsS0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjVixPQUFkLENBQWpCO0VBQ0Q7Ozs7V0FFRCx5QkFBdUI7TUFDckIsSUFBSSxLQUFLRyxNQUFULEVBQWlCO1FBQ2YsT0FBTyxLQUFLQSxNQUFaO01BQ0Q7O01BRUQsSUFBSSxDQUFDLElBQUFRLG1CQUFBLEdBQUQsSUFBb0IsSUFBQUMsWUFBQSxHQUFwQixJQUFnQyxJQUFBQyxlQUFBLEdBQXBDLEVBQWlEO1FBQy9DLE9BQU9DLHlCQUFBLENBQWFDLEtBQXBCO01BQ0Q7O01BRUQsT0FBT0QseUJBQUEsQ0FBYUUsS0FBcEI7SUFDRDs7O1dBRUQsc0JBQW9CQyxHQUFwQixFQUF5QztNQUN2QyxJQUFJLEtBQUtoQixNQUFMLEtBQWdCaUIsb0JBQXBCLEVBQWlDO1FBQy9CLG9CQUFhRCxHQUFiO01BQ0Q7O01BQ0QsT0FBT0EsR0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJFLE9BQXJCLEVBQWtEO01BQUE7O01BQ2hELE9BQU9BLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNILEdBQUQ7UUFBQSxPQUFTLEtBQUksQ0FBQ0ksWUFBTCxDQUFrQkosR0FBbEIsQ0FBVDtNQUFBLENBQVosQ0FBUDtJQUNEOzs7V0FFRCx1QkFBcUJLLEdBQXJCLEVBQTJDO01BQ3pDLE9BQU8sS0FBS0QsWUFBTCxDQUFrQixLQUFLWixTQUFMLENBQWVjLG1CQUFmLENBQW1DRCxHQUFuQyxDQUFsQixDQUFQO0lBQ0Q7OztXQUVELDJCQUF5QkEsR0FBekIsRUFBK0M7TUFDN0MsT0FBTyxLQUFLRCxZQUFMLENBQWtCLEtBQUtaLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNGLEdBQXZDLENBQWxCLENBQVA7SUFDRDs7O1dBRUQsNEJBQTBCQSxHQUExQixFQUErQztNQUM3QyxJQUFNRyxVQUFVLEdBQUcsS0FBS2hCLFNBQUwsQ0FBZWUsdUJBQWYsQ0FBdUNFLElBQXZDLENBQ2pCLEtBQUtqQixTQURZLENBQW5CO01BR0EsT0FBTyxLQUFLa0IsYUFBTCxDQUFtQixJQUFBQyx3QkFBQSxFQUFtQk4sR0FBbkIsRUFBd0JHLFVBQXhCLENBQW5CLEVBQXdEakIsSUFBeEQsQ0FDTCxLQUFLcUIsYUFBTCxFQURLLENBQVA7SUFHRDs7Ozs7O2VBR1k5QixVIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/lib/generator.js":
/*!********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/lib/generator.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _words = __webpack_require__(/*! ../constants/words */ "./node_modules/lorem-ipsum/dist/constants/words.js");

var _util = __webpack_require__(/*! ../util */ "./node_modules/lorem-ipsum/dist/util/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator = /*#__PURE__*/function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJHZW5lcmF0b3IiLCJzZW50ZW5jZXNQZXJQYXJhZ3JhcGgiLCJtYXgiLCJtaW4iLCJ3b3Jkc1BlclNlbnRlbmNlIiwicmFuZG9tIiwic2VlZCIsIndvcmRzIiwiV09SRFMiLCJFcnJvciIsIk1hdGgiLCJmbG9vciIsIm51bSIsImxlbmd0aCIsImdlbmVyYXRlUmFuZG9tSW50ZWdlciIsIm1ha2VBcnJheU9mTGVuZ3RoIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpbmRleCIsInBsdWNrUmFuZG9tV29yZCIsInRyaW0iLCJjYXBpdGFsaXplIiwiZ2VuZXJhdGVSYW5kb21Xb3JkcyIsImdlbmVyYXRlUmFuZG9tU2VudGVuY2UiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2dlbmVyYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXT1JEUyB9IGZyb20gXCIuLi9jb25zdGFudHMvd29yZHNcIjtcclxuaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbWFrZUFycmF5T2ZMZW5ndGggfSBmcm9tIFwiLi4vdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQm91bmRzIHtcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSVBybmcgPSAoKSA9PiBudW1iZXI7XHJcblxyXG5leHBvcnQgdHlwZSBJU2VlZFJhbmRvbSA9IG5ldyAoc2VlZD86IHN0cmluZykgPT4gSVBybmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXRoIHtcclxuICBzZWVkcmFuZG9tOiBJU2VlZFJhbmRvbTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJhdG9yT3B0aW9ucyB7XHJcbiAgc2VudGVuY2VzUGVyUGFyYWdyYXBoPzogSUJvdW5kcztcclxuICB3b3Jkc1BlclNlbnRlbmNlPzogSUJvdW5kcztcclxuICByYW5kb20/OiBJUHJuZztcclxuICBzZWVkPzogc3RyaW5nO1xyXG4gIHdvcmRzPzogc3RyaW5nW107XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYXRvciB7XHJcbiAgcHVibGljIHNlbnRlbmNlc1BlclBhcmFncmFwaDogSUJvdW5kcztcclxuICBwdWJsaWMgd29yZHNQZXJTZW50ZW5jZTogSUJvdW5kcztcclxuICBwdWJsaWMgcmFuZG9tOiBJUHJuZztcclxuICBwdWJsaWMgd29yZHM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGggPSB7IG1heDogNywgbWluOiAzIH0sXHJcbiAgICB3b3Jkc1BlclNlbnRlbmNlID0geyBtYXg6IDE1LCBtaW46IDUgfSxcclxuICAgIHJhbmRvbSxcclxuICAgIHNlZWQsXHJcbiAgICB3b3JkcyA9IFdPUkRTLFxyXG4gIH06IElHZW5lcmF0b3JPcHRpb25zID0ge30pIHtcclxuICAgIGlmIChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWluID4gc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoICgke1xyXG4gICAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pblxyXG4gICAgICAgIH0pIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoJHtzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYE1pbmltdW0gbnVtYmVyIG9mIHdvcmRzIHBlciBzZW50ZW5jZSAoJHtcclxuICAgICAgICAgIHdvcmRzUGVyU2VudGVuY2UubWluXHJcbiAgICAgICAgfSkgY2Fubm90IGV4Y2VlZCBtYXhpbXVtICgke3dvcmRzUGVyU2VudGVuY2UubWF4fSkuYCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCA9IHNlbnRlbmNlc1BlclBhcmFncmFwaDtcclxuICAgIHRoaXMud29yZHMgPSB3b3JkcztcclxuICAgIHRoaXMud29yZHNQZXJTZW50ZW5jZSA9IHdvcmRzUGVyU2VudGVuY2U7XHJcbiAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbSB8fCBNYXRoLnJhbmRvbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbUludGVnZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tV29yZHMobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHRoaXMud29yZHNQZXJTZW50ZW5jZTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gbWFrZUFycmF5T2ZMZW5ndGgobGVuZ3RoKVxyXG4gICAgICAucmVkdWNlKChhY2N1bXVsYXRvcjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5wbHVja1JhbmRvbVdvcmQoKX0gJHthY2N1bXVsYXRvcn1gO1xyXG4gICAgICB9LCBcIlwiKVxyXG4gICAgICAudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlUmFuZG9tU2VudGVuY2UobnVtPzogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtjYXBpdGFsaXplKHRoaXMuZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pKX0uYDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZVJhbmRvbVBhcmFncmFwaChudW0/OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5zZW50ZW5jZXNQZXJQYXJhZ3JhcGg7XHJcbiAgICBjb25zdCBsZW5ndGggPSBudW0gfHwgdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xyXG4gICAgcmV0dXJuIG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aClcclxuICAgICAgLnJlZHVjZSgoYWNjdW11bGF0b3I6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZ2VuZXJhdGVSYW5kb21TZW50ZW5jZSgpfSAke2FjY3VtdWxhdG9yfWA7XHJcbiAgICAgIH0sIFwiXCIpXHJcbiAgICAgIC50cmltKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGx1Y2tSYW5kb21Xb3JkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgY29uc3QgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gdGhpcy53b3Jkc1tpbmRleF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHZW5lcmF0b3I7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7O0lBdUJNQSxTO0VBTUoscUJBTTJCO0lBQUEsK0VBQUosRUFBSTtJQUFBLGlDQUx6QkMscUJBS3lCO0lBQUEsSUFMekJBLHFCQUt5QixzQ0FMRDtNQUFFQyxHQUFHLEVBQUUsQ0FBUDtNQUFVQyxHQUFHLEVBQUU7SUFBZixDQUtDO0lBQUEsaUNBSnpCQyxnQkFJeUI7SUFBQSxJQUp6QkEsZ0JBSXlCLHNDQUpOO01BQUVGLEdBQUcsRUFBRSxFQUFQO01BQVdDLEdBQUcsRUFBRTtJQUFo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

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/capitalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/capitalize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjYXBpdGFsaXplIiwic3RyIiwidHJpbW1lZCIsInRyaW0iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvY2FwaXRhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIHN0ciAgQSBzdHJpbmcgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBjYXBpdGFsaXplZC5cclxuICogQHJldHVybnMgICAgQSBjYXBpdGFsaXplZCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBjYXBpdGFsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCB0cmltbWVkID0gc3RyLnRyaW0oKTtcclxuICByZXR1cm4gdHJpbW1lZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRyaW1tZWQuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXBpdGFsaXplO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBeUI7RUFDMUMsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLElBQUosRUFBaEI7RUFDQSxPQUFPRCxPQUFPLENBQUNFLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxXQUFsQixLQUFrQ0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxDQUF6QztBQUNELENBSEQ7O2VBS2VOLFUifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "capitalize", ({
  enumerable: true,
  get: function get() {
    return _capitalize["default"];
  }
}));
Object.defineProperty(exports, "isNode", ({
  enumerable: true,
  get: function get() {
    return _isNode["default"];
  }
}));
Object.defineProperty(exports, "isReactNative", ({
  enumerable: true,
  get: function get() {
    return _isReactNative["default"];
  }
}));
Object.defineProperty(exports, "isWindows", ({
  enumerable: true,
  get: function get() {
    return _isWindows["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfLength", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength["default"];
  }
}));
Object.defineProperty(exports, "makeArrayOfStrings", ({
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings["default"];
  }
}));

var _capitalize = _interopRequireDefault(__webpack_require__(/*! ./capitalize */ "./node_modules/lorem-ipsum/dist/util/capitalize.js"));

var _isNode = _interopRequireDefault(__webpack_require__(/*! ./isNode */ "./node_modules/lorem-ipsum/dist/util/isNode.js"));

var _isReactNative = _interopRequireDefault(__webpack_require__(/*! ./isReactNative */ "./node_modules/lorem-ipsum/dist/util/isReactNative.js"));

var _isWindows = _interopRequireDefault(__webpack_require__(/*! ./isWindows */ "./node_modules/lorem-ipsum/dist/util/isWindows.js"));

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

var _makeArrayOfStrings = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfStrings */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcGl0YWxpemUgZnJvbSBcIi4vY2FwaXRhbGl6ZVwiO1xyXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xyXG5pbXBvcnQgaXNSZWFjdE5hdGl2ZSBmcm9tIFwiLi9pc1JlYWN0TmF0aXZlXCI7XHJcbmltcG9ydCBpc1dpbmRvd3MgZnJvbSBcIi4vaXNXaW5kb3dzXCI7XHJcbmltcG9ydCBtYWtlQXJyYXlPZkxlbmd0aCBmcm9tIFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiO1xyXG5pbXBvcnQgbWFrZUFycmF5T2ZTdHJpbmdzIGZyb20gXCIuL21ha2VBcnJheU9mU3RyaW5nc1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBjYXBpdGFsaXplLFxyXG4gIGlzTm9kZSxcclxuICBpc1JlYWN0TmF0aXZlLFxyXG4gIGlzV2luZG93cyxcclxuICBtYWtlQXJyYXlPZkxlbmd0aCxcclxuICBtYWtlQXJyYXlPZlN0cmluZ3MsXHJcbn07XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isNode.js":
/*!******************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isNode.js ***!
  \******************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return  true && !!module.exports;
};

var _default = isNode;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc05vZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNOb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAcmV0dXJucyAgVHJ1ZSBpZiB0aGUgcnVudGltZSBpcyBOb2RlSlMuXHJcbiAqL1xyXG5jb25zdCBpc05vZGUgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgISFtb2R1bGUuZXhwb3J0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBZTtFQUM1QixPQUFPLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsQ0FBQyxDQUFDQSxNQUFNLENBQUNDLE9BQWpEO0FBQ0QsQ0FGRDs7ZUFJZUYsTSJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isReactNative.js":
/*!*************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isReactNative.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * Check if runtime is ReactNative.
 * Solution based on https://github.com/knicklabs/lorem-ipsum.js/pull/52/files
 *
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  var isReactNativeResult = false;

  try {
    isReactNativeResult = navigator.product === "ReactNative";
  } catch (e) {
    isReactNativeResult = false;
  }

  return isReactNativeResult;
};

var _default = isReactNative;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1JlYWN0TmF0aXZlIiwiaXNSZWFjdE5hdGl2ZVJlc3VsdCIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNSZWFjdE5hdGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ2hlY2sgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICogU29sdXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2tuaWNrbGFicy9sb3JlbS1pcHN1bS5qcy9wdWxsLzUyL2ZpbGVzXHJcbiAqXHJcbiAqIEByZXR1cm5zICBUcnVlIGlmIHJ1bnRpbWUgaXMgUmVhY3ROYXRpdmUuXHJcbiAqL1xyXG5jb25zdCBpc1JlYWN0TmF0aXZlID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1JlYWN0TmF0aXZlUmVzdWx0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNSZWFjdE5hdGl2ZVJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUmVhY3ROYXRpdmU7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBZTtFQUNuQyxJQUFJQyxtQkFBNEIsR0FBRyxLQUFuQzs7RUFFQSxJQUFJO0lBQ0ZBLG1CQUFtQixHQUFHQyxTQUFTLENBQUNDLE9BQVYsS0FBc0IsYUFBNUM7RUFDRCxDQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0lBQ1ZILG1CQUFtQixHQUFHLEtBQXRCO0VBQ0Q7O0VBRUQsT0FBT0EsbUJBQVA7QUFDRCxDQVZEOztlQVllRCxhIn0=

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/isWindows.js":
/*!*********************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/isWindows.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _platforms = __webpack_require__(/*! ../constants/platforms */ "./node_modules/lorem-ipsum/dist/constants/platforms.js");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  var isWindowsResult = false;

  try {
    isWindowsResult = process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
  } catch (e) {
    isWindowsResult = false;
  }

  return isWindowsResult;
};

var _default = isWindows;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc1dpbmRvd3MiLCJpc1dpbmRvd3NSZXN1bHQiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJTVVBQT1JURURfUExBVEZPUk1TIiwiV0lOMzIiLCJlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWwvaXNXaW5kb3dzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNVUFBPUlRFRF9QTEFURk9STVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3BsYXRmb3Jtc1wiO1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgcHJvY2VzcyBpcyB3aW5kb3dzLlxyXG4gKi9cclxuY29uc3QgaXNXaW5kb3dzID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gIGxldCBpc1dpbmRvd3NSZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0cnkge1xyXG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gU1VQUE9SVEVEX1BMQVRGT1JNUy5XSU4zMjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpc1dpbmRvd3NSZXN1bHQgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIGlzV2luZG93c1Jlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzV2luZG93cztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBZTtFQUMvQixJQUFJQyxlQUF3QixHQUFHLEtBQS9COztFQUNBLElBQUk7SUFDRkEsZUFBZSxHQUFHQyxPQUFPLENBQUNDLFFBQVIsS0FBcUJDLDhCQUFBLENBQW9CQyxLQUEzRDtFQUNELENBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7SUFDVkwsZUFBZSxHQUFHLEtBQWxCO0VBQ0Q7O0VBQ0QsT0FBT0EsZUFBUDtBQUNELENBUkQ7O2VBVWVELFMifQ==

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZkxlbmd0aCIsImxlbmd0aCIsIkFycmF5IiwiYXBwbHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZkxlbmd0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xyXG5jb25zdCBtYWtlQXJyYXlPZkxlbmd0aCA9IChsZW5ndGg6IG51bWJlciA9IDApOiBudW1iZXJbXSA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcChcclxuICAgIChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4gaW5kZXgsXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mTGVuZ3RoO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBa0M7RUFBQSxJQUFqQ0MsTUFBaUMsdUVBQWhCLENBQWdCO0VBQzFELE9BQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0JELEtBQUssQ0FBQ0QsTUFBRCxDQUF2QixFQUFpQ0csR0FBakMsQ0FDTCxVQUFDQyxJQUFELEVBQVlDLEtBQVo7SUFBQSxPQUFzQ0EsS0FBdEM7RUFBQSxDQURLLENBQVA7QUFHRCxDQUpEOztlQU1lTixpQiJ9

/***/ }),

/***/ "./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js":
/*!******************************************************************!*\
  !*** ./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _makeArrayOfLength = _interopRequireDefault(__webpack_require__(/*! ./makeArrayOfLength */ "./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _makeArrayOfLength["default"])(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQXJyYXlPZlN0cmluZ3MiLCJsZW5ndGgiLCJtYWtlU3RyaW5nIiwiYXJyIiwibWFrZUFycmF5T2ZMZW5ndGgiLCJtYXAiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9tYWtlQXJyYXlPZlN0cmluZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ha2VBcnJheU9mTGVuZ3RoIGZyb20gXCIuL21ha2VBcnJheU9mTGVuZ3RoXCI7XHJcbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cclxuY29uc3QgbWFrZUFycmF5T2ZTdHJpbmdzID0gKFxyXG4gIGxlbmd0aDogbnVtYmVyLFxyXG4gIG1ha2VTdHJpbmc6ICgpID0+IHN0cmluZyxcclxuKTogc3RyaW5nW10gPT4ge1xyXG4gIGNvbnN0IGFyciA9IG1ha2VBcnJheU9mTGVuZ3RoKGxlbmd0aCk7XHJcbiAgcmV0dXJuIGFyci5tYXAoKCkgPT4gbWFrZVN0cmluZygpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBcnJheU9mU3RyaW5ncztcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FDekJDLE1BRHlCLEVBRXpCQyxVQUZ5QixFQUdaO0VBQ2IsSUFBTUMsR0FBRyxHQUFHLElBQUFDLDZCQUFBLEVBQWtCSCxNQUFsQixDQUFaO0VBQ0EsT0FBT0UsR0FBRyxDQUFDRSxHQUFKLENBQVE7SUFBQSxPQUFNSCxVQUFVLEVBQWhCO0VBQUEsQ0FBUixDQUFQO0FBQ0QsQ0FORDs7ZUFRZUYsa0IifQ==

/***/ }),

/***/ "./src/sass/mainBody.scss":
/*!********************************!*\
  !*** ./src/sass/mainBody.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mainBody.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/mainBody.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/scroll.scss":
/*!******************************!*\
  !*** ./src/sass/scroll.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./scroll.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/body.js":
/*!********************************!*\
  !*** ./src/components/body.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lorem-ipsum */ "./node_modules/lorem-ipsum/dist/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _img_home_main_image1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/home_main/image1.jpg */ "./src/img/home_main/image1.jpg");
/* harmony import */ var _img_home_main_image2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/home_main/image2.jpg */ "./src/img/home_main/image2.jpg");
/* harmony import */ var _img_home_main_image3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/home_main/image3.jpg */ "./src/img/home_main/image3.jpg");
/* harmony import */ var _img_home_main_image4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/home_main/image4.jpg */ "./src/img/home_main/image4.jpg");
/* harmony import */ var _sass_mainBody_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/mainBody.scss */ "./src/sass/mainBody.scss");










const lorem = new lorem_ipsum__WEBPACK_IMPORTED_MODULE_0__.LoremIpsum({
    sentencesPerParagraph:{
        max: 8,
        min: 4
    },
    wordsPerSentence:{
        max: 12,
        min: 4
    }
})

const images = [
    {
     img: _img_home_main_image1_jpg__WEBPACK_IMPORTED_MODULE_2__,
     text: lorem.generateSentences(5)
    }
    , {
        img: _img_home_main_image2_jpg__WEBPACK_IMPORTED_MODULE_3__,
        text:lorem.generateSentences(5)
    }
    , 
    {
        img:_img_home_main_image3_jpg__WEBPACK_IMPORTED_MODULE_4__,
        text:lorem.generateSentences(5)
    }
    ,
    {
        img:_img_home_main_image4_jpg__WEBPACK_IMPORTED_MODULE_5__,
        text: lorem.generateSentences(5)
    }
]

function createMainBody() {
    const body = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)('div', {
        class: 'main-body'
    })

    images.forEach((image, index)=>{
        const img=(0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)('img', {
            class: 'img',
            alt:`image-${index + 1}`,
            src: image.img
        })

        const p=(0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)('p', {
            class: 'p'
        })
        p.innerText=image.text

        body.appendChild(img)
        body.appendChild(p)
    })
    return body
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainBody);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");


function navBar() {
    const navBar = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav');
    const ul = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul')
    const navBrand = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('div')

    const listItems = [
        {
            title: 'Menu'
        },
        {
            title: 'Contacts'
        },
        {
            title: 'Reservation'
        },
        {
            title: 'About'
        },
    ]

    for (const i of listItems) {
        const item = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('li')
        ;(0,_util__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(item,{class: "nav-item"})
        item.textContent = i.title;
        ul.appendChild(item)
    }
    navBrand.classList.add('Nav-brand')
    navBrand.innerHTML="Anime Food"
    navBar.appendChild(navBrand)
    navBar.appendChild(ul)
    navBar.classList.add('nav-bar')
    return navBar
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);

/***/ }),

/***/ "./src/components/scroll.js":
/*!**********************************!*\
  !*** ./src/components/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _img_scrollbar_1232732_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/scrollbar/1232732.jpg */ "./src/img/scrollbar/1232732.jpg");
/* harmony import */ var _img_scrollbar_assorted_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/scrollbar/assorted.jpg */ "./src/img/scrollbar/assorted.jpg");
/* harmony import */ var _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/scrollbar/balls.gif */ "./src/img/scrollbar/balls.gif");
/* harmony import */ var _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/scrollbar/noodle.gif */ "./src/img/scrollbar/noodle.gif");
/* harmony import */ var _sass_scroll_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/scroll.scss */ "./src/sass/scroll.scss");








const images = [_img_scrollbar_1232732_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_scrollbar_assorted_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_3__, _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_4__];

function createImageSlider() {
    /*
        Creates the image slide
        */

    let activeLink = 0;
    let links = [];

    const container = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("section", {
        class: "sections image-slider",
    });
    const viewWindow = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "window" });
    const wrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { id: "wrapper" });

    const navLinks = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "navLinks" });
    const ul = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("ul", { class: "ul" });

    images.forEach((image, index) => {
        const img = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("img", {
            src: image,
            alt: `image-${index + 1}`,
            id: `item${index + 1}`,
            class: "content",
        });
        wrapper.appendChild(img);

        const li = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("li", {
            class: "links",
            "data-number": index + 1,
        });
        li.itemID = index;
        li.addEventListener('click', (e) => {
            changePosition(e.target)
        })
        links.push(li);
        ul.appendChild(li);
    });
    const btn1 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("button", {
        class: "btn left",
        "data-side": "left",
    });
    const btn2 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("button", {
        class: "btn right",
        "data-side": "right",
    });

    const btns = [btn1, btn2];

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.dataset.side === "left") {
                const id = activeLink <= 0 ? links.length - 1 : activeLink - 1;
                const link = links[id];
                changePosition(link);
            } else if (e.target.dataset.side === "right") {
                const id = activeLink >= links.length - 1 ? 0 : activeLink + 1;
                const link = links[id];
                changePosition(link);
            }
        });
    });

    function changePosition(link) {
        links.forEach((linkItem) => {
            linkItem.classList.remove("active");
        });

        activeLink = link.itemID

        const no = parseInt(link.dataset.number) - 1
        const position = no * -100

        const translateValue = `translate3d(${position}vw, 0px, 0px)`
        wrapper.style.transform = translateValue

        link.classList.add('active')

    }

    function setTime() {
        const current = activeLink >= links.length - 1 ? 0 : activeLink + 1
        const link = links[current]
        changePosition(link)
    }

    btn1.innerHTML = "&#10094;";
    btn2.innerHTML = "&#10093;";

    viewWindow.appendChild(wrapper);
    viewWindow.appendChild(btn1);
    viewWindow.appendChild(btn2);

    container.appendChild(viewWindow);

    navLinks.appendChild(ul);
    container.appendChild(navLinks);

    setInterval(setTime, 4000)
    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createImageSlider);


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createSetElement: () => (/* binding */ createSetElement),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   setAttributes: () => (/* binding */ setAttributes)
/* harmony export */ });
function getElement(selector){
    return document.querySelector(selector)
}

 function createElement(type){
    return document.createElement(type)
}

function setAttributes(element, attributes){
    // Object.entries(attributes).forEach()
    for (const [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }
}

function createSetElement(type, attributes={}){
    const element = createElement(type)
    setAttributes(element, attributes)
    return element
}



/***/ }),

/***/ "./src/img/home_main/image1.jpg":
/*!**************************************!*\
  !*** ./src/img/home_main/image1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a92e99bc1eaf191ab4cf.jpg";

/***/ }),

/***/ "./src/img/home_main/image2.jpg":
/*!**************************************!*\
  !*** ./src/img/home_main/image2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a4404e1a004fec7365f.jpg";

/***/ }),

/***/ "./src/img/home_main/image3.jpg":
/*!**************************************!*\
  !*** ./src/img/home_main/image3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a650cc53e6af821daae.jpg";

/***/ }),

/***/ "./src/img/home_main/image4.jpg":
/*!**************************************!*\
  !*** ./src/img/home_main/image4.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "722f535635ee74715551.jpg";

/***/ }),

/***/ "./src/img/scrollbar/1232732.jpg":
/*!***************************************!*\
  !*** ./src/img/scrollbar/1232732.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d15cb844fbcd1f5717e.jpg";

/***/ }),

/***/ "./src/img/scrollbar/assorted.jpg":
/*!****************************************!*\
  !*** ./src/img/scrollbar/assorted.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4a5091e82e90d3a1caa.jpg";

/***/ }),

/***/ "./src/img/scrollbar/balls.gif":
/*!*************************************!*\
  !*** ./src/img/scrollbar/balls.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38bcb3bb63d6265a327e.gif";

/***/ }),

/***/ "./src/img/scrollbar/noodle.gif":
/*!**************************************!*\
  !*** ./src/img/scrollbar/noodle.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2c45431868598a0ba94.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scroll */ "./src/components/scroll.js");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/body */ "./src/components/body.js");







console.log('hello, World!');

const navbar = (0,_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])()
const imageSlider=(0,_components_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])()

const body = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getElement)('body');
const main = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)("div", {class: "body main"})
const mainBody = (0,_components_body__WEBPACK_IMPORTED_MODULE_4__["default"])()

body.appendChild(navbar)
body.appendChild(main)
main.appendChild(imageSlider)
main.appendChild(mainBody)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSw4REFBTTtBQUNyQixrQkFBa0IsOERBQWlCOztBQUVuQyxhQUFhLGlEQUFVO0FBQ3ZCLGFBQWEsdURBQWdCLFNBQVMsbUJBQW1CO0FBQ3pELGlCQUFpQiw0REFBYzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Fzcy9tYWluQm9keS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9jb25zdGFudHMvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9jb25zdGFudHMvbGluZUVuZGluZ3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3BsYXRmb3Jtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9jb25zdGFudHMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3dvcmRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2xpYi9Mb3JlbUlwc3VtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2xpYi9nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9jYXBpdGFsaXplLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9pc1JlYWN0TmF0aXZlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNXaW5kb3dzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZMZW5ndGguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvdXRpbC9tYWtlQXJyYXlPZlN0cmluZ3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3MvbWFpbkJvZHkuc2Nzcz84NTdjIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzP2ZjYjciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvYm9keS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluLWJvZHkge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbkJvZHkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGdCQUFBO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tYm9keXtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY29udGVudCB7XG4gIGhlaWdodDogMzByZW07XG4gIHdpZHRoOiAxMDB2dztcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XG59XG5cbi5pbWFnZS1zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOXMgY3ViaWMtYmV6aWVyKDAuNTcsIDAuMjEsIDAuNjksIDEuMjUpO1xufVxuXG4ud2luZG93IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOXB4IDM4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDE1cHggMTJweDtcbn1cblxuLm5hdkxpbmtzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5uYXZMaW5rcyB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubGlua3Mge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcbn1cblxuLmxpbmtzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmxpbmtzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lLXdpZHRoOiA3cHg7XG59XG5cbi5saW5rcy5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gIHBhZGRpbmc6IDNyZW0gMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gIG1hcmdpbi1yaWdodDogY2FsYygxMHZ3IC0gN3B4KTtcbn1cblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5sZWZ0OmhvdmVyLFxuLnJpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc2Nyb2xsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19zaXplcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUNGTztFREdQLFlDRFM7RURFVCx1QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0MsK0RBQUE7QUFESDs7QUFLQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLCtFQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFKRjs7QUFPQTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FBSkY7O0FBUUEseUVBQUE7QUFDQTs7RUFFRSxvQ0FBQTtBQUxGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3NpemVzJztcXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICB3aWR0aDogJGltZy13aWR0aDtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbn1cXG5cXG4uaW1hZ2Utc2xpZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjlzIGN1YmljLWJlemllciguNTcsLjIxLC42OSwxLjI1KTtcXG4gIFxcbn1cXG5cXG4ud2luZG93IHtcXG5cXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogKCRoZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xcbn1cXG5cXG4ubmF2TGlua3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6ICgkd2lkdGgpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmF2TGlua3MgdWwge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcblxcbi5saW5rcyB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XFxufVxcblxcbi5saW5rczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xcbn1cXG5cXG4ubGlua3MuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIG91dGxpbmUtd2lkdGg6IDdweDtcXG59XFxuXFxuLmxpbmtzLmFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogLTExMHB4O1xcbiAgcGFkZGluZzogM3JlbSAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5yaWdodCB7XFxuICByaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDEwdncgLSA3cHgpO1xcblxcbn1cXG5cXG4vKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xcbi5sZWZ0OmhvdmVyLFxcbi5yaWdodDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVwiLFwiJGJvZHktcGFkZGluZzogMjBweDtcXG4kaGVpZ2h0OiAzMHJlbTtcXG4kd2lkdGg6IDgwJTtcXG4kaW1nLXdpZHRoOjEwMHZ3O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIzMiwgMjMyKTtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xufVxubmF2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm5hdiBsaSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIHRyYW5zbGF0ZTogMDtcbiAgc2NhbGU6IDAgMTtcbiAgdHJhbnNpdGlvbjogc2NhbGUgMzAwbXMsIHRyYW5zbGF0ZSA1MDBtcztcbn1cbm5hdiBsaTpob3Zlcjo6YWZ0ZXIge1xuICBzY2FsZTogMSAxO1xufVxubmF2IGxpOmhvdmVyLFxubmF2IGxpOmZvY3VzLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxubmF2IC5OYXYtYnJhbmQge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDSSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQ1pXO0FETWY7O0FBU0E7RUFJSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEscURBQUE7QUFWSjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVZSO0FBWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQWhDUTtFQWlDUixVQUFBO0VBQ0Esd0NBQUE7QUFWUjtBQWtCSTtFQUNJLFVBQUE7QUFoQlI7QUF1Qkk7O0VBRUksVUFBQTtBQXJCUjtBQXlCSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF2QlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWxAMSZkaXNwbGF5PXN3YXAnKTtcXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCAnc2l6ZXMnO1xcblxcbi8vICRib2R5LXBhZGRpbmc6IDIwcHg7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLWlubGluZTogJGJvZHktcGFkZGluZztcXG59XFxuXFxubmF2IHtcXG4gICAgJHdpZHRoOjA7XFxuICAgICR0cmFuc2xhdGU6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzIsIDIzMiwgMSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG4gICAgdWwge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG4gICAgbGk6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7ICAgICAgICBcXG4gICAgICAgIHRyYW5zbGF0ZTogJHRyYW5zbGF0ZTtcXG4gICAgICAgIHNjYWxlOiAkd2lkdGggMTtcXG4gICAgICAgIHRyYW5zaXRpb246IHNjYWxlIDMwMG1zLFxcbiAgICAgICAgdHJhbnNsYXRlIDUwMG1zO1xcbiAgICB9XFxuICAgIGxpOmhhcygrIDpob3Zlcil7XFxuICAgIC8vICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICR0cmFuc2xhdGU6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXI6OmFmdGVye1xcbiAgICAgICAgc2NhbGU6IDEgMTtcXG4gICAgfVxcblxcbiAgICBsaTpob3ZlciArIGxpe1xcbiAgICAgICAgJHRyYW5zbGF0ZTogLTEwMCU7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIsXFxuICAgIGxpOmZvY3VzLXZpc2libGUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICR3aWR0aDogMTtcXG4gICAgfVxcblxcbiAgICAuTmF2LWJyYW5kIHtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gZXhwb3J0cy5GT1JNQVRfSFRNTCA9IGV4cG9ydHMuRk9STUFUUyA9IHZvaWQgMDtcbnZhciBGT1JNQVRfSFRNTCA9IFwiaHRtbFwiO1xuZXhwb3J0cy5GT1JNQVRfSFRNTCA9IEZPUk1BVF9IVE1MO1xudmFyIEZPUk1BVF9QTEFJTiA9IFwicGxhaW5cIjtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gRk9STUFUX1BMQUlOO1xudmFyIEZPUk1BVFMgPSBbRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTl07XG5leHBvcnRzLkZPUk1BVFMgPSBGT1JNQVRTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpHVDFKTlFWUmZTRlJOVENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSWtaUFVrMUJWRk1pWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZMjl1YzNSaGJuUnpMMlp2Y20xaGRITXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdOdmJuTjBJRVpQVWsxQlZGOUlWRTFNSUQwZ1hDSm9kRzFzWENJN1hISmNibVY0Y0c5eWRDQmpiMjV6ZENCR1QxSk5RVlJmVUV4QlNVNGdQU0JjSW5Cc1lXbHVYQ0k3WEhKY2JtVjRjRzl5ZENCamIyNXpkQ0JHVDFKTlFWUlRJRDBnVzBaUFVrMUJWRjlJVkUxTUxDQkdUMUpOUVZSZlVFeEJTVTVkTzF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JNYjNKbGJVWnZjbTFoZENBOUlGd2ljR3hoYVc1Y0lpQjhJRndpYUhSdGJGd2lPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZQTEVsQlFVMUJMRmRCUVZjc1IwRkJSeXhOUVVGd1FqczdRVUZEUVN4SlFVRk5ReXhaUVVGWkxFZEJRVWNzVDBGQmNrSTdPMEZCUTBFc1NVRkJUVU1zVDBGQlR5eEhRVUZITEVOQlFVTkdMRmRCUVVRc1JVRkJZME1zV1VGQlpDeERRVUZvUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MSU5FX0VORElOR1MgPSB2b2lkIDA7XG52YXIgTElORV9FTkRJTkdTID0ge1xuICBQT1NJWDogXCJcXG5cIixcbiAgV0lOMzI6IFwiXFxyXFxuXCJcbn07XG5leHBvcnRzLkxJTkVfRU5ESU5HUyA9IExJTkVfRU5ESU5HUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKTVNVNUZYMFZPUkVsT1IxTWlMQ0pRVDFOSldDSXNJbGRKVGpNeUlsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJOdmJuTjBZVzUwY3k5c2FXNWxSVzVrYVc1bmN5NTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdURWxPUlY5RlRrUkpUa2RUSUQwZ2UxeHlYRzRnSUZCUFUwbFlPaUJjSWx4Y2Jsd2lMRnh5WEc0Z0lGZEpUak15T2lCY0lseGNjbHhjYmx3aUxGeHlYRzU5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGUExFbEJRVTFCTEZsQlFWa3NSMEZCUnp0RlFVTXhRa01zUzBGQlN5eEZRVUZGTEVsQlJHMUNPMFZCUlRGQ1F5eExRVUZMTEVWQlFVVTdRVUZHYlVJc1EwRkJja0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TVVBQT1JURURfUExBVEZPUk1TID0gdm9pZCAwO1xudmFyIFNVUFBPUlRFRF9QTEFURk9STVMgPSB7XG4gIERBUldJTjogXCJkYXJ3aW5cIixcbiAgTElOVVg6IFwibGludXhcIixcbiAgV0lOMzI6IFwid2luMzJcIlxufTtcbmV4cG9ydHMuU1VQUE9SVEVEX1BMQVRGT1JNUyA9IFNVUFBPUlRFRF9QTEFURk9STVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJaXdpUkVGU1YwbE9JaXdpVEVsT1ZWZ2lMQ0pYU1U0ek1pSmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmNHeGhkR1p2Y20xekxuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJRDBnZTF4eVhHNGdJRVJCVWxkSlRqb2dYQ0prWVhKM2FXNWNJaXhjY2x4dUlDQk1TVTVWV0RvZ1hDSnNhVzUxZUZ3aUxGeHlYRzRnSUZkSlRqTXlPaUJjSW5kcGJqTXlYQ0lzWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVThzU1VGQlRVRXNiVUpCUVcxQ0xFZEJRVWM3UlVGRGFrTkRMRTFCUVUwc1JVRkJSU3hSUVVSNVFqdEZRVVZxUTBNc1MwRkJTeXhGUVVGRkxFOUJSakJDTzBWQlIycERReXhMUVVGTExFVkJRVVU3UVVGSU1FSXNRMEZCTlVJaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IGV4cG9ydHMuVU5JVF9XT1JEID0gZXhwb3J0cy5VTklUX1NFTlRFTkNFUyA9IGV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IGV4cG9ydHMuVU5JVF9QQVJBR1JBUEhTID0gZXhwb3J0cy5VTklUX1BBUkFHUkFQSCA9IGV4cG9ydHMuVU5JVFMgPSB2b2lkIDA7XG52YXIgVU5JVF9XT1JEUyA9IFwid29yZHNcIjtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IFVOSVRfV09SRFM7XG52YXIgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnRzLlVOSVRfV09SRCA9IFVOSVRfV09SRDtcbnZhciBVTklUX1NFTlRFTkNFUyA9IFwic2VudGVuY2VzXCI7XG5leHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gVU5JVF9TRU5URU5DRVM7XG52YXIgVU5JVF9TRU5URU5DRSA9IFwic2VudGVuY2VcIjtcbmV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IFVOSVRfU0VOVEVOQ0U7XG52YXIgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIUyA9IFVOSVRfUEFSQUdSQVBIUztcbnZhciBVTklUX1BBUkFHUkFQSCA9IFwicGFyYWdyYXBoXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gVU5JVF9QQVJBR1JBUEg7XG52YXIgVU5JVFMgPSBbVU5JVF9XT1JEUywgVU5JVF9XT1JELCBVTklUX1NFTlRFTkNFUywgVU5JVF9TRU5URU5DRSwgVU5JVF9QQVJBR1JBUEhTLCBVTklUX1BBUkFHUkFQSF07XG5leHBvcnRzLlVOSVRTID0gVU5JVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlZUa2xVWDFkUFVrUlRJaXdpVlU1SlZGOVhUMUpFSWl3aVZVNUpWRjlUUlU1VVJVNURSVk1pTENKVlRrbFVYMU5GVGxSRlRrTkZJaXdpVlU1SlZGOVFRVkpCUjFKQlVFaFRJaXdpVlU1SlZGOVFRVkpCUjFKQlVFZ2lMQ0pWVGtsVVV5SmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmRXNXBkSE11ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHTnZibk4wSUZWT1NWUmZWMDlTUkZNZ1BTQmNJbmR2Y21SelhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlYVDFKRUlEMGdYQ0ozYjNKa1hDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlUUlU1VVJVNURSVk1nUFNCY0luTmxiblJsYm1ObGMxd2lPMXh1Wlhod2IzSjBJR052Ym5OMElGVk9TVlJmVTBWT1ZFVk9RMFVnUFNCY0luTmxiblJsYm1ObFhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlRUVZKQlIxSkJVRWhUSUQwZ1hDSndZWEpoWjNKaGNHaHpYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5UVFWSkJSMUpCVUVnZ1BTQmNJbkJoY21GbmNtRndhRndpTzF4dVpYaHdiM0owSUdOdmJuTjBJRlZPU1ZSVElEMGdXMXh1SUNCVlRrbFVYMWRQVWtSVExGeHVJQ0JWVGtsVVgxZFBVa1FzWEc0Z0lGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4dUlDQlZUa2xVWDFORlRsUkZUa05GTEZ4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hHNGdJRlZPU1ZSZlVFRlNRVWRTUVZCSUxGeHVYVHRjYm1WNGNHOXlkQ0IwZVhCbElFeHZjbVZ0Vlc1cGRDQTlJRndpZDI5eVpITmNJaUI4SUZ3aWQyOXlaRndpSUh3Z1hDSnpaVzUwWlc1alpYTmNJaUI4SUZ3aWMyVnVkR1Z1WTJWY0lpQjhJRndpY0dGeVlXZHlZWEJvYzF3aUlId2dYQ0p3WVhKaFozSmhjR2hjSWp0Y2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVU4c1NVRkJUVUVzVlVGQlZTeEhRVUZITEU5QlFXNUNPenRCUVVOQkxFbEJRVTFETEZOQlFWTXNSMEZCUnl4TlFVRnNRanM3UVVGRFFTeEpRVUZOUXl4alFVRmpMRWRCUVVjc1YwRkJka0k3TzBGQlEwRXNTVUZCVFVNc1lVRkJZU3hIUVVGSExGVkJRWFJDT3p0QlFVTkJMRWxCUVUxRExHVkJRV1VzUjBGQlJ5eFpRVUY0UWpzN1FVRkRRU3hKUVVGTlF5eGpRVUZqTEVkQlFVY3NWMEZCZGtJN08wRkJRMEVzU1VGQlRVTXNTMEZCU3l4SFFVRkhMRU5CUTI1Q1RpeFZRVVJ0UWl4RlFVVnVRa01zVTBGR2JVSXNSVUZIYmtKRExHTkJTRzFDTEVWQlNXNUNReXhoUVVwdFFpeEZRVXR1UWtNc1pVRk1iVUlzUlVGTmJrSkRMR05CVG0xQ0xFTkJRV1FpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XT1JEUyA9IHZvaWQgMDtcbnZhciBXT1JEUyA9IFtcImFkXCIsIFwiYWRpcGlzaWNpbmdcIiwgXCJhbGlxdWFcIiwgXCJhbGlxdWlwXCIsIFwiYW1ldFwiLCBcImFuaW1cIiwgXCJhdXRlXCIsIFwiY2lsbHVtXCIsIFwiY29tbW9kb1wiLCBcImNvbnNlY3RldHVyXCIsIFwiY29uc2VxdWF0XCIsIFwiY3VscGFcIiwgXCJjdXBpZGF0YXRcIiwgXCJkZXNlcnVudFwiLCBcImRvXCIsIFwiZG9sb3JcIiwgXCJkb2xvcmVcIiwgXCJkdWlzXCIsIFwiZWFcIiwgXCJlaXVzbW9kXCIsIFwiZWxpdFwiLCBcImVuaW1cIiwgXCJlc3NlXCIsIFwiZXN0XCIsIFwiZXRcIiwgXCJldVwiLCBcImV4XCIsIFwiZXhjZXB0ZXVyXCIsIFwiZXhlcmNpdGF0aW9uXCIsIFwiZnVnaWF0XCIsIFwiaWRcIiwgXCJpblwiLCBcImluY2lkaWR1bnRcIiwgXCJpcHN1bVwiLCBcImlydXJlXCIsIFwibGFib3JlXCIsIFwibGFib3Jpc1wiLCBcImxhYm9ydW1cIiwgXCJMb3JlbVwiLCBcIm1hZ25hXCIsIFwibWluaW1cIiwgXCJtb2xsaXRcIiwgXCJuaXNpXCIsIFwibm9uXCIsIFwibm9zdHJ1ZFwiLCBcIm51bGxhXCIsIFwib2NjYWVjYXRcIiwgXCJvZmZpY2lhXCIsIFwicGFyaWF0dXJcIiwgXCJwcm9pZGVudFwiLCBcInF1aVwiLCBcInF1aXNcIiwgXCJyZXByZWhlbmRlcml0XCIsIFwic2ludFwiLCBcInNpdFwiLCBcInN1bnRcIiwgXCJ0ZW1wb3JcIiwgXCJ1bGxhbWNvXCIsIFwidXRcIiwgXCJ2ZWxpdFwiLCBcInZlbmlhbVwiLCBcInZvbHVwdGF0ZVwiXTtcbmV4cG9ydHMuV09SRFMgPSBXT1JEUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKWFQxSkVVeUpkTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjV6ZEdGdWRITXZkMjl5WkhNdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElGZFBVa1JUSUQwZ1cxeHlYRzRnSUZ3aVlXUmNJaXhjY2x4dUlDQmNJbUZrYVhCcGMybGphVzVuWENJc1hISmNiaUFnWENKaGJHbHhkV0ZjSWl4Y2NseHVJQ0JjSW1Gc2FYRjFhWEJjSWl4Y2NseHVJQ0JjSW1GdFpYUmNJaXhjY2x4dUlDQmNJbUZ1YVcxY0lpeGNjbHh1SUNCY0ltRjFkR1ZjSWl4Y2NseHVJQ0JjSW1OcGJHeDFiVndpTEZ4eVhHNGdJRndpWTI5dGJXOWtiMXdpTEZ4eVhHNGdJRndpWTI5dWMyVmpkR1YwZFhKY0lpeGNjbHh1SUNCY0ltTnZibk5sY1hWaGRGd2lMRnh5WEc0Z0lGd2lZM1ZzY0dGY0lpeGNjbHh1SUNCY0ltTjFjR2xrWVhSaGRGd2lMRnh5WEc0Z0lGd2laR1Z6WlhKMWJuUmNJaXhjY2x4dUlDQmNJbVJ2WENJc1hISmNiaUFnWENKa2IyeHZjbHdpTEZ4eVhHNGdJRndpWkc5c2IzSmxYQ0lzWEhKY2JpQWdYQ0prZFdselhDSXNYSEpjYmlBZ1hDSmxZVndpTEZ4eVhHNGdJRndpWldsMWMyMXZaRndpTEZ4eVhHNGdJRndpWld4cGRGd2lMRnh5WEc0Z0lGd2laVzVwYlZ3aUxGeHlYRzRnSUZ3aVpYTnpaVndpTEZ4eVhHNGdJRndpWlhOMFhDSXNYSEpjYmlBZ1hDSmxkRndpTEZ4eVhHNGdJRndpWlhWY0lpeGNjbHh1SUNCY0ltVjRYQ0lzWEhKY2JpQWdYQ0psZUdObGNIUmxkWEpjSWl4Y2NseHVJQ0JjSW1WNFpYSmphWFJoZEdsdmJsd2lMRnh5WEc0Z0lGd2lablZuYVdGMFhDSXNYSEpjYmlBZ1hDSnBaRndpTEZ4eVhHNGdJRndpYVc1Y0lpeGNjbHh1SUNCY0ltbHVZMmxrYVdSMWJuUmNJaXhjY2x4dUlDQmNJbWx3YzNWdFhDSXNYSEpjYmlBZ1hDSnBjblZ5WlZ3aUxGeHlYRzRnSUZ3aWJHRmliM0psWENJc1hISmNiaUFnWENKc1lXSnZjbWx6WENJc1hISmNiaUFnWENKc1lXSnZjblZ0WENJc1hISmNiaUFnWENKTWIzSmxiVndpTEZ4eVhHNGdJRndpYldGbmJtRmNJaXhjY2x4dUlDQmNJbTFwYm1sdFhDSXNYSEpjYmlBZ1hDSnRiMnhzYVhSY0lpeGNjbHh1SUNCY0ltNXBjMmxjSWl4Y2NseHVJQ0JjSW01dmJsd2lMRnh5WEc0Z0lGd2libTl6ZEhKMVpGd2lMRnh5WEc0Z0lGd2liblZzYkdGY0lpeGNjbHh1SUNCY0ltOWpZMkZsWTJGMFhDSXNYSEpjYmlBZ1hDSnZabVpwWTJsaFhDSXNYSEpjYmlBZ1hDSndZWEpwWVhSMWNsd2lMRnh5WEc0Z0lGd2ljSEp2YVdSbGJuUmNJaXhjY2x4dUlDQmNJbkYxYVZ3aUxGeHlYRzRnSUZ3aWNYVnBjMXdpTEZ4eVhHNGdJRndpY21Wd2NtVm9aVzVrWlhKcGRGd2lMRnh5WEc0Z0lGd2ljMmx1ZEZ3aUxGeHlYRzRnSUZ3aWMybDBYQ0lzWEhKY2JpQWdYQ0p6ZFc1MFhDSXNYSEpjYmlBZ1hDSjBaVzF3YjNKY0lpeGNjbHh1SUNCY0luVnNiR0Z0WTI5Y0lpeGNjbHh1SUNCY0luVjBYQ0lzWEhKY2JpQWdYQ0oyWld4cGRGd2lMRnh5WEc0Z0lGd2lkbVZ1YVdGdFhDSXNYSEpjYmlBZ1hDSjJiMngxY0hSaGRHVmNJaXhjY2x4dVhUdGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJUeXhKUVVGTlFTeExRVUZMTEVkQlFVY3NRMEZEYmtJc1NVRkViVUlzUlVGRmJrSXNZVUZHYlVJc1JVRkhia0lzVVVGSWJVSXNSVUZKYmtJc1UwRktiVUlzUlVGTGJrSXNUVUZNYlVJc1JVRk5ia0lzVFVGT2JVSXNSVUZQYmtJc1RVRlFiVUlzUlVGUmJrSXNVVUZTYlVJc1JVRlRia0lzVTBGVWJVSXNSVUZWYmtJc1lVRldiVUlzUlVGWGJrSXNWMEZZYlVJc1JVRlpia0lzVDBGYWJVSXNSVUZoYmtJc1YwRmliVUlzUlVGamJrSXNWVUZrYlVJc1JVRmxia0lzU1VGbWJVSXNSVUZuUW01Q0xFOUJhRUp0UWl4RlFXbENia0lzVVVGcVFtMUNMRVZCYTBKdVFpeE5RV3hDYlVJc1JVRnRRbTVDTEVsQmJrSnRRaXhGUVc5Q2JrSXNVMEZ3UW0xQ0xFVkJjVUp1UWl4TlFYSkNiVUlzUlVGelFtNUNMRTFCZEVKdFFpeEZRWFZDYmtJc1RVRjJRbTFDTEVWQmQwSnVRaXhMUVhoQ2JVSXNSVUY1UW01Q0xFbEJla0p0UWl4RlFUQkNia0lzU1VFeFFtMUNMRVZCTWtKdVFpeEpRVE5DYlVJc1JVRTBRbTVDTEZkQk5VSnRRaXhGUVRaQ2JrSXNZMEUzUW0xQ0xFVkJPRUp1UWl4UlFUbENiVUlzUlVFclFtNUNMRWxCTDBKdFFpeEZRV2REYmtJc1NVRm9RMjFDTEVWQmFVTnVRaXhaUVdwRGJVSXNSVUZyUTI1Q0xFOUJiRU50UWl4RlFXMURia0lzVDBGdVEyMUNMRVZCYjBOdVFpeFJRWEJEYlVJc1JVRnhRMjVDTEZOQmNrTnRRaXhGUVhORGJrSXNVMEYwUTIxQ0xFVkJkVU51UWl4UFFYWkRiVUlzUlVGM1EyNUNMRTlCZUVOdFFpeEZRWGxEYmtJc1QwRjZRMjFDTEVWQk1FTnVRaXhSUVRGRGJVSXNSVUV5UTI1Q0xFMUJNME50UWl4RlFUUkRia0lzUzBFMVEyMUNMRVZCTmtOdVFpeFRRVGREYlVJc1JVRTRRMjVDTEU5Qk9VTnRRaXhGUVN0RGJrSXNWVUV2UTIxQ0xFVkJaMFJ1UWl4VFFXaEViVUlzUlVGcFJHNUNMRlZCYWtSdFFpeEZRV3RFYmtJc1ZVRnNSRzFDTEVWQmJVUnVRaXhMUVc1RWJVSXNSVUZ2Ukc1Q0xFMUJjRVJ0UWl4RlFYRkVia0lzWlVGeVJHMUNMRVZCYzBSdVFpeE5RWFJFYlVJc1JVRjFSRzVDTEV0QmRrUnRRaXhGUVhkRWJrSXNUVUY0UkcxQ0xFVkJlVVJ1UWl4UlFYcEViVUlzUlVFd1JHNUNMRk5CTVVSdFFpeEZRVEpFYmtJc1NVRXpSRzFDTEVWQk5FUnVRaXhQUVRWRWJVSXNSVUUyUkc1Q0xGRkJOMFJ0UWl4RlFUaEVia0lzVjBFNVJHMUNMRU5CUVdRaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvcmVtSXBzdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvcmVtSXBzdW1bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHMubG9yZW1JcHN1bSA9IHZvaWQgMDtcblxudmFyIF9mb3JtYXRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2Zvcm1hdHNcIik7XG5cbnZhciBfdW5pdHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvdW5pdHNcIik7XG5cbnZhciBfd29yZHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfTG9yZW1JcHN1bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL0xvcmVtSXBzdW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGxvcmVtSXBzdW0gPSBmdW5jdGlvbiBsb3JlbUlwc3VtKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9yZWYkY291bnQsXG4gICAgICBfcmVmJGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZiRmb3JtYXQgPT09IHZvaWQgMCA/IF9mb3JtYXRzLkZPUk1BVF9QTEFJTiA6IF9yZWYkZm9ybWF0LFxuICAgICAgX3JlZiRwYXJhZ3JhcGhMb3dlckJvID0gX3JlZi5wYXJhZ3JhcGhMb3dlckJvdW5kLFxuICAgICAgcGFyYWdyYXBoTG93ZXJCb3VuZCA9IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyA9PT0gdm9pZCAwID8gMyA6IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyxcbiAgICAgIF9yZWYkcGFyYWdyYXBoVXBwZXJCbyA9IF9yZWYucGFyYWdyYXBoVXBwZXJCb3VuZCxcbiAgICAgIHBhcmFncmFwaFVwcGVyQm91bmQgPSBfcmVmJHBhcmFncmFwaFVwcGVyQm8gPT09IHZvaWQgMCA/IDcgOiBfcmVmJHBhcmFncmFwaFVwcGVyQm8sXG4gICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgIF9yZWYkc2VudGVuY2VMb3dlckJvdSA9IF9yZWYuc2VudGVuY2VMb3dlckJvdW5kLFxuICAgICAgc2VudGVuY2VMb3dlckJvdW5kID0gX3JlZiRzZW50ZW5jZUxvd2VyQm91ID09PSB2b2lkIDAgPyA1IDogX3JlZiRzZW50ZW5jZUxvd2VyQm91LFxuICAgICAgX3JlZiRzZW50ZW5jZVVwcGVyQm91ID0gX3JlZi5zZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBzZW50ZW5jZVVwcGVyQm91bmQgPSBfcmVmJHNlbnRlbmNlVXBwZXJCb3UgPT09IHZvaWQgMCA/IDE1IDogX3JlZiRzZW50ZW5jZVVwcGVyQm91LFxuICAgICAgX3JlZiR1bml0cyA9IF9yZWYudW5pdHMsXG4gICAgICB1bml0cyA9IF9yZWYkdW5pdHMgPT09IHZvaWQgMCA/IF91bml0cy5VTklUX1NFTlRFTkNFUyA6IF9yZWYkdW5pdHMsXG4gICAgICBfcmVmJHdvcmRzID0gX3JlZi53b3JkcyxcbiAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcyxcbiAgICAgIF9yZWYkc3VmZml4ID0gX3JlZi5zdWZmaXgsXG4gICAgICBzdWZmaXggPSBfcmVmJHN1ZmZpeCA9PT0gdm9pZCAwID8gXCJcIiA6IF9yZWYkc3VmZml4O1xuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xuICAgICAgbWF4OiBwYXJhZ3JhcGhVcHBlckJvdW5kLFxuICAgICAgbWluOiBwYXJhZ3JhcGhMb3dlckJvdW5kXG4gICAgfSxcbiAgICB3b3Jkczogd29yZHMsXG4gICAgd29yZHNQZXJTZW50ZW5jZToge1xuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBtaW46IHNlbnRlbmNlTG93ZXJCb3VuZFxuICAgIH1cbiAgfTtcbiAgdmFyIGxvcmVtID0gbmV3IF9Mb3JlbUlwc3VtW1wiZGVmYXVsdFwiXShvcHRpb25zLCBmb3JtYXQsIHN1ZmZpeCk7XG5cbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgX3VuaXRzLlVOSVRfUEFSQUdSQVBIUzpcbiAgICBjYXNlIF91bml0cy5VTklUX1BBUkFHUkFQSDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVBhcmFncmFwaHMoY291bnQpO1xuXG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRVM6XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRTpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XG5cbiAgICBjYXNlIF91bml0cy5VTklUX1dPUkRTOlxuICAgIGNhc2UgX3VuaXRzLlVOSVRfV09SRDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVdvcmRzKGNvdW50KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufTtcblxuZXhwb3J0cy5sb3JlbUlwc3VtID0gbG9yZW1JcHN1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKc2IzSmxiVWx3YzNWdElpd2lZMjkxYm5RaUxDSm1iM0p0WVhRaUxDSkdUMUpOUVZSZlVFeEJTVTRpTENKd1lYSmhaM0poY0doTWIzZGxja0p2ZFc1a0lpd2ljR0Z5WVdkeVlYQm9WWEJ3WlhKQ2IzVnVaQ0lzSW5KaGJtUnZiU0lzSW5ObGJuUmxibU5sVEc5M1pYSkNiM1Z1WkNJc0luTmxiblJsYm1ObFZYQndaWEpDYjNWdVpDSXNJblZ1YVhSeklpd2lWVTVKVkY5VFJVNVVSVTVEUlZNaUxDSjNiM0prY3lJc0lsZFBVa1JUSWl3aWMzVm1abWw0SWl3aWIzQjBhVzl1Y3lJc0luTmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhQ0lzSW0xaGVDSXNJbTFwYmlJc0luZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVaUxDSnNiM0psYlNJc0lreHZjbVZ0U1hCemRXMGlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNGTWlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNDSXNJbWRsYm1WeVlYUmxVR0Z5WVdkeVlYQm9jeUlzSWxWT1NWUmZVMFZPVkVWT1EwVWlMQ0puWlc1bGNtRjBaVk5sYm5SbGJtTmxjeUlzSWxWT1NWUmZWMDlTUkZNaUxDSlZUa2xVWDFkUFVrUWlMQ0puWlc1bGNtRjBaVmR2Y21SeklsMHNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMmx1WkdWNExuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUV4dmNtVnRSbTl5YldGMExDQkdUMUpOUVZSZlVFeEJTVTRnZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdlptOXliV0YwYzF3aU8xeHlYRzVwYlhCdmNuUWdlMXh5WEc0Z0lFeHZjbVZ0Vlc1cGRDeGNjbHh1SUNCVlRrbFVYMUJCVWtGSFVrRlFTQ3hjY2x4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hISmNiaUFnVlU1SlZGOVRSVTVVUlU1RFJWTXNYSEpjYmlBZ1ZVNUpWRjlUUlU1VVJVNURSU3hjY2x4dUlDQlZUa2xVWDFkUFVrUlRMRnh5WEc0Z0lGVk9TVlJmVjA5U1JDeGNjbHh1ZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdmRXNXBkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dWMDlTUkZNZ2ZTQm1jbTl0SUZ3aUxpOWpiMjV6ZEdGdWRITXZkMjl5WkhOY0lqdGNjbHh1YVcxd2IzSjBJSHNnU1ZCeWJtY2dmU0JtY205dElGd2lMaTlzYVdJdloyVnVaWEpoZEc5eVhDSTdYSEpjYm1sdGNHOXlkQ0JNYjNKbGJVbHdjM1Z0SUdaeWIyMGdYQ0l1TDJ4cFlpOU1iM0psYlVsd2MzVnRYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxNYjNKbGJVbHdjM1Z0VUdGeVlXMXpJSHRjY2x4dUlDQmpiM1Z1ZEQ4NklHNTFiV0psY2p0Y2NseHVJQ0JtYjNKdFlYUS9PaUJNYjNKbGJVWnZjbTFoZER0Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVEvT2lCdWRXMWlaWEk3WEhKY2JpQWdjbUZ1Wkc5dFB6b2dTVkJ5Ym1jN1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSE5sYm5SbGJtTmxWWEJ3WlhKQ2IzVnVaRDg2SUc1MWJXSmxjanRjY2x4dUlDQjFibWwwY3o4NklFeHZjbVZ0Vlc1cGREdGNjbHh1SUNCM2IzSmtjejg2SUhOMGNtbHVaMXRkTzF4eVhHNGdJSE4xWm1acGVEODZJSE4wY21sdVp6dGNjbHh1ZlZ4eVhHNWNjbHh1WTI5dWMzUWdiRzl5WlcxSmNITjFiU0E5SUNoN1hISmNiaUFnWTI5MWJuUWdQU0F4TEZ4eVhHNGdJR1p2Y20xaGRDQTlJRVpQVWsxQlZGOVFURUZKVGl4Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrSUQwZ015eGNjbHh1SUNCd1lYSmhaM0poY0doVmNIQmxja0p2ZFc1a0lEMGdOeXhjY2x4dUlDQnlZVzVrYjIwc1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrSUQwZ05TeGNjbHh1SUNCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1RZ1BTQXhOU3hjY2x4dUlDQjFibWwwY3lBOUlGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4eVhHNGdJSGR2Y21SeklEMGdWMDlTUkZNc1hISmNiaUFnYzNWbVptbDRJRDBnWENKY0lpeGNjbHh1ZlRvZ1NVeHZjbVZ0U1hCemRXMVFZWEpoYlhNZ1BTQjdmU2s2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnWTI5dWMzUWdiM0IwYVc5dWN5QTlJSHRjY2x4dUlDQWdJSEpoYm1SdmJTeGNjbHh1SUNBZ0lITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhRG9nZTF4eVhHNGdJQ0FnSUNCdFlYZzZJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVFzWEhKY2JpQWdJQ0FnSUcxcGJqb2djR0Z5WVdkeVlYQm9URzkzWlhKQ2IzVnVaQ3hjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0IzYjNKa2N5eGNjbHh1SUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVNklIdGNjbHh1SUNBZ0lDQWdiV0Y0T2lCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1Rc1hISmNiaUFnSUNBZ0lHMXBiam9nYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrTEZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0I5TzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JzYjNKbGJUb2dURzl5WlcxSmNITjFiU0E5SUc1bGR5Qk1iM0psYlVsd2MzVnRLRzl3ZEdsdmJuTXNJR1p2Y20xaGRDd2djM1ZtWm1sNEtUdGNjbHh1WEhKY2JpQWdjM2RwZEdOb0lDaDFibWwwY3lrZ2UxeHlYRzRnSUNBZ1kyRnpaU0JWVGtsVVgxQkJVa0ZIVWtGUVNGTTZYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZVRUZTUVVkU1FWQklPbHh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiRzl5WlcwdVoyVnVaWEpoZEdWUVlYSmhaM0poY0doektHTnZkVzUwS1R0Y2NseHVJQ0FnSUdOaGMyVWdWVTVKVkY5VFJVNVVSVTVEUlZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlUwVk9WRVZPUTBVNlhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCc2IzSmxiUzVuWlc1bGNtRjBaVk5sYm5SbGJtTmxjeWhqYjNWdWRDazdYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZWMDlTUkZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlYwOVNSRHBjY2x4dUlDQWdJQ0FnY21WMGRYSnVJR3h2Y21WdExtZGxibVZ5WVhSbFYyOXlaSE1vWTI5MWJuUXBPMXh5WEc0Z0lDQWdaR1ZtWVhWc2REcGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlGd2lYQ0k3WEhKY2JpQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owSUhzZ2JHOXlaVzFKY0hOMWJTd2dURzl5WlcxSmNITjFiU0I5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGVFFUczdRVUZGUVRzN096dEJRV1ZCTEVsQlFVMUJMRlZCUVZVc1IwRkJSeXhUUVVGaVFTeFZRVUZoTEVkQlYyMUNPMFZCUVVFc0swVkJRV1lzUlVGQlpUdEZRVUZCTEhOQ1FWWndRME1zUzBGVmIwTTdSVUZCUVN4SlFWWndRMEVzUzBGVmIwTXNNa0pCVmpWQ0xFTkJWVFJDTzBWQlFVRXNkVUpCVkhCRFF5eE5RVk52UXp0RlFVRkJMRWxCVkhCRFFTeE5RVk52UXl3MFFrRlVNMEpETEhGQ1FWTXlRanRGUVVGQkxHbERRVkp3UTBNc2JVSkJVVzlETzBWQlFVRXNTVUZTY0VOQkxHMUNRVkZ2UXl4elEwRlNaQ3hEUVZGak8wVkJRVUVzYVVOQlVIQkRReXh0UWtGUGIwTTdSVUZCUVN4SlFWQndRMEVzYlVKQlQyOURMSE5EUVZCa0xFTkJUMk03UlVGQlFTeEpRVTV3UTBNc1RVRk5iME1zVVVGT2NFTkJMRTFCVFc5RE8wVkJRVUVzYVVOQlRIQkRReXhyUWtGTGIwTTdSVUZCUVN4SlFVeHdRMEVzYTBKQlMyOURMSE5EUVV4bUxFTkJTMlU3UlVGQlFTeHBRMEZLY0VORExHdENRVWx2UXp0RlFVRkJMRWxCU25CRFFTeHJRa0ZKYjBNc2MwTkJTbVlzUlVGSlpUdEZRVUZCTEhOQ1FVaHdRME1zUzBGSGIwTTdSVUZCUVN4SlFVaHdRMEVzUzBGSGIwTXNNa0pCU0RWQ1F5eHhRa0ZITkVJN1JVRkJRU3h6UWtGR2NFTkRMRXRCUlc5RE8wVkJRVUVzU1VGR2NFTkJMRXRCUlc5RExESkNRVVkxUWtNc1dVRkZORUk3UlVGQlFTeDFRa0ZFY0VORExFMUJRMjlETzBWQlFVRXNTVUZFY0VOQkxFMUJRMjlETERSQ1FVUXpRaXhGUVVNeVFqczdSVUZEY0VNc1NVRkJUVU1zVDBGQlR5eEhRVUZITzBsQlEyUlNMRTFCUVUwc1JVRkJUa0VzVFVGRVl6dEpRVVZrVXl4eFFrRkJjVUlzUlVGQlJUdE5RVU55UWtNc1IwRkJSeXhGUVVGRldDeHRRa0ZFWjBJN1RVRkZja0paTEVkQlFVY3NSVUZCUldJN1NVRkdaMElzUTBGR1ZEdEpRVTFrVHl4TFFVRkxMRVZCUVV4QkxFdEJUbU03U1VGUFpFOHNaMEpCUVdkQ0xFVkJRVVU3VFVGRGFFSkdMRWRCUVVjc1JVRkJSVklzYTBKQlJGYzdUVUZGYUVKVExFZEJRVWNzUlVGQlJWWTdTVUZHVnp0RlFWQktMRU5CUVdoQ08wVkJZVUVzU1VGQlRWa3NTMEZCYVVJc1IwRkJSeXhKUVVGSlF5eHpRa0ZCU2l4RFFVRmxUaXhQUVVGbUxFVkJRWGRDV2l4TlFVRjRRaXhGUVVGblExY3NUVUZCYUVNc1EwRkJNVUk3TzBWQlJVRXNVVUZCVVVvc1MwRkJVanRKUVVORkxFdEJRVXRaTEhOQ1FVRk1PMGxCUTBFc1MwRkJTME1zY1VKQlFVdzdUVUZEUlN4UFFVRlBTQ3hMUVVGTExFTkJRVU5KTEd0Q1FVRk9MRU5CUVhsQ2RFSXNTMEZCZWtJc1EwRkJVRHM3U1VGRFJpeExRVUZMVXl4eFFrRkJURHRKUVVOQkxFdEJRVXRqTEc5Q1FVRk1PMDFCUTBVc1QwRkJUMHdzUzBGQlN5eERRVUZEVFN4cFFrRkJUaXhEUVVGM1FuaENMRXRCUVhoQ0xFTkJRVkE3TzBsQlEwWXNTMEZCUzNsQ0xHbENRVUZNTzBsQlEwRXNTMEZCUzBNc1owSkJRVXc3VFVGRFJTeFBRVUZQVWl4TFFVRkxMRU5CUVVOVExHRkJRVTRzUTBGQmIwSXpRaXhMUVVGd1FpeERRVUZRT3p0SlFVTkdPMDFCUTBVc1QwRkJUeXhGUVVGUU8wVkJXRW83UVVGaFJDeERRWGhEUkNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZm9ybWF0cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZm9ybWF0c1wiKTtcblxudmFyIF9saW5lRW5kaW5ncyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbGluZUVuZGluZ3NcIik7XG5cbnZhciBfZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL2dlbmVyYXRvclwiKSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTG9yZW1JcHN1bSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvcmVtSXBzdW0oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF9mb3JtYXRzLkZPUk1BVF9QTEFJTjtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9yZW1JcHN1bSk7XG5cbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdlbmVyYXRvclwiLCB2b2lkIDApO1xuXG4gICAgaWYgKF9mb3JtYXRzLkZPUk1BVFMuaW5kZXhPZihmb3JtYXQudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoZm9ybWF0LCBcIiBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSBcIikuY29uY2F0KF9mb3JtYXRzLkZPUk1BVFMuam9pbihcIiBvciBcIiksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBuZXcgX2dlbmVyYXRvcltcImRlZmF1bHRcIl0ob3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9yZW1JcHN1bSwgW3tcbiAgICBrZXk6IFwiZ2V0TGluZUVuZGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaW5lRW5kaW5nKCkge1xuICAgICAgaWYgKHRoaXMuc3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX3V0aWwuaXNSZWFjdE5hdGl2ZSkoKSAmJiAoMCwgX3V0aWwuaXNOb2RlKSgpICYmICgwLCBfdXRpbC5pc1dpbmRvd3MpKCkpIHtcbiAgICAgICAgcmV0dXJuIF9saW5lRW5kaW5ncy5MSU5FX0VORElOR1MuV0lOMzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbGluZUVuZGluZ3MuTElORV9FTkRJTkdTLlBPU0lYO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRTdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5nKHN0cikge1xuICAgICAgaWYgKHRoaXMuZm9ybWF0ID09PSBfZm9ybWF0cy5GT1JNQVRfSFRNTCkge1xuICAgICAgICByZXR1cm4gXCI8cD5cIi5jb25jYXQoc3RyLCBcIjwvcD5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFN0cmluZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5ncyhzdHJpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0U3RyaW5nKHN0cik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVXb3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlU2VudGVuY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlU2VudGVuY2VzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVBhcmFncmFwaHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVQYXJhZ3JhcGhzKG51bSkge1xuICAgICAgdmFyIG1ha2VTdHJpbmcgPSB0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaC5iaW5kKHRoaXMuZ2VuZXJhdG9yKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MoKDAsIF91dGlsLm1ha2VBcnJheU9mU3RyaW5ncykobnVtLCBtYWtlU3RyaW5nKSkuam9pbih0aGlzLmdldExpbmVFbmRpbmcoKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvcmVtSXBzdW07XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IExvcmVtSXBzdW07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpNYjNKbGJVbHdjM1Z0SWl3aWIzQjBhVzl1Y3lJc0ltWnZjbTFoZENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSW5OMVptWnBlQ0lzSWtaUFVrMUJWRk1pTENKcGJtUmxlRTltSWl3aWRHOU1iM2RsY2tOaGMyVWlMQ0pGY25KdmNpSXNJbXB2YVc0aUxDSm5aVzVsY21GMGIzSWlMQ0pIWlc1bGNtRjBiM0lpTENKcGMxSmxZV04wVG1GMGFYWmxJaXdpYVhOT2IyUmxJaXdpYVhOWGFXNWtiM2R6SWl3aVRFbE9SVjlGVGtSSlRrZFRJaXdpVjBsT016SWlMQ0pRVDFOSldDSXNJbk4wY2lJc0lrWlBVazFCVkY5SVZFMU1JaXdpYzNSeWFXNW5jeUlzSW0xaGNDSXNJbVp2Y20xaGRGTjBjbWx1WnlJc0ltNTFiU0lzSW1kbGJtVnlZWFJsVW1GdVpHOXRWMjl5WkhNaUxDSm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNJc0ltMWhhMlZUZEhKcGJtY2lMQ0ppYVc1a0lpd2labTl5YldGMFUzUnlhVzVuY3lJc0ltMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN5SXNJbWRsZEV4cGJtVkZibVJwYm1jaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwweHZjbVZ0U1hCemRXMHVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1JrOVNUVUZVWDBoVVRVd3NJRVpQVWsxQlZGOVFURUZKVGl3Z1JrOVNUVUZVVXl3Z1RHOXlaVzFHYjNKdFlYUWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDJadmNtMWhkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dURWxPUlY5RlRrUkpUa2RUSUgwZ1puSnZiU0JjSWk0dUwyTnZibk4wWVc1MGN5OXNhVzVsUlc1a2FXNW5jMXdpTzF4eVhHNXBiWEJ2Y25RZ1IyVnVaWEpoZEc5eUxDQjdJRWxIWlc1bGNtRjBiM0pQY0hScGIyNXpJSDBnWm5KdmJTQmNJaTR1TDJ4cFlpOW5aVzVsY21GMGIzSmNJanRjY2x4dWFXMXdiM0owSUhzZ2FYTk9iMlJsTENCcGMxSmxZV04wVG1GMGFYWmxMQ0JwYzFkcGJtUnZkM01zSUcxaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3lCOUlHWnliMjBnWENJdUxpOTFkR2xzWENJN1hISmNibHh5WEc1amJHRnpjeUJNYjNKbGJVbHdjM1Z0SUh0Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHOXlPaUJIWlc1bGNtRjBiM0k3WEhKY2JseHlYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHlYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1NVZGxibVZ5WVhSdmNrOXdkR2x2Ym5NZ1BTQjdmU3hjY2x4dUlDQWdJSEIxWW14cFl5Qm1iM0p0WVhRNklFeHZjbVZ0Um05eWJXRjBJRDBnUms5U1RVRlVYMUJNUVVsT0xGeHlYRzRnSUNBZ2NIVmliR2xqSUhOMVptWnBlRDg2SUhOMGNtbHVaeXhjY2x4dUlDQXBJSHRjY2x4dUlDQWdJR2xtSUNoR1QxSk5RVlJUTG1sdVpHVjRUMllvWm05eWJXRjBMblJ2VEc5M1pYSkRZWE5sS0NrcElEMDlQU0F0TVNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZQ1I3Wm05eWJXRjBmU0JwY3lCaGJpQnBiblpoYkdsa0lHWnZjbTFoZEM0Z1VHeGxZWE5sSUhWelpTQWtlMFpQVWsxQlZGTXVhbTlwYmloY0lpQnZjaUJjSWlsOUxtQXNYSEpjYmlBZ0lDQWdJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0IwYUdsekxtZGxibVZ5WVhSdmNpQTlJRzVsZHlCSFpXNWxjbUYwYjNJb2IzQjBhVzl1Y3lrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWMFRHbHVaVVZ1WkdsdVp5Z3BJSHRjY2x4dUlDQWdJR2xtSUNoMGFHbHpMbk4xWm1acGVDa2dlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRXWm1hWGc3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0ZwYzFKbFlXTjBUbUYwYVhabEtDa2dKaVlnYVhOT2IyUmxLQ2tnSmlZZ2FYTlhhVzVrYjNkektDa3BJSHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVJRXhKVGtWZlJVNUVTVTVIVXk1WFNVNHpNanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnVEVsT1JWOUZUa1JKVGtkVExsQlBVMGxZTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WnloemRISTZJSE4wY21sdVp5azZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQnBaaUFvZEdocGN5NW1iM0p0WVhRZ1BUMDlJRVpQVWsxQlZGOUlWRTFNS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCZ1BIQStKSHR6ZEhKOVBDOXdQbUE3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J5WlhSMWNtNGdjM1J5TzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WjNNb2MzUnlhVzVuY3pvZ2MzUnlhVzVuVzEwcE9pQnpkSEpwYm1kYlhTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuY3k1dFlYQW9LSE4wY2lrZ1BUNGdkR2hwY3k1bWIzSnRZWFJUZEhKcGJtY29jM1J5S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZYYjNKa2N5aHVkVzAvT2lCdWRXMWlaWElwT2lCemRISnBibWNnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVptOXliV0YwVTNSeWFXNW5LSFJvYVhNdVoyVnVaWEpoZEc5eUxtZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZUWlc1MFpXNWpaWE1vYm5WdFB6b2diblZ0WW1WeUtUb2djM1J5YVc1bklIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVp2Y20xaGRGTjBjbWx1WnloMGFHbHpMbWRsYm1WeVlYUnZjaTVuWlc1bGNtRjBaVkpoYm1SdmJWQmhjbUZuY21Gd2FDaHVkVzBwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJuWlc1bGNtRjBaVkJoY21GbmNtRndhSE1vYm5WdE9pQnVkVzFpWlhJcE9pQnpkSEpwYm1jZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnYldGclpWTjBjbWx1WnlBOUlIUm9hWE11WjJWdVpYSmhkRzl5TG1kbGJtVnlZWFJsVW1GdVpHOXRVR0Z5WVdkeVlYQm9MbUpwYm1Rb1hISmNiaUFnSUNBZ0lIUm9hWE11WjJWdVpYSmhkRzl5TEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnZjbTFoZEZOMGNtbHVaM01vYldGclpVRnljbUY1VDJaVGRISnBibWR6S0c1MWJTd2diV0ZyWlZOMGNtbHVaeWtwTG1wdmFXNG9YSEpjYmlBZ0lDQWdJSFJvYVhNdVoyVjBUR2x1WlVWdVpHbHVaeWdwTEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dmNtVnRTWEJ6ZFcwN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRVRXNWVHRGUVVkS0xITkNRVWxGTzBsQlFVRXNTVUZJUVVNc1QwRkhRU3gxUlVGSU5rSXNSVUZITjBJN1NVRkJRU3hKUVVaUFF5eE5RVVZRTEhWRlFVWTJRa01zY1VKQlJUZENPMGxCUVVFc1NVRkVUME1zVFVGRFVEczdTVUZCUVRzN1NVRkJRU3hMUVVaUFJpeE5RVVZRTEVkQlJrOUJMRTFCUlZBN1NVRkJRU3hMUVVSUFJTeE5RVU5RTEVkQlJFOUJMRTFCUTFBN08wbEJRVUU3TzBsQlEwRXNTVUZCU1VNc1owSkJRVUVzUTBGQlVVTXNUMEZCVWl4RFFVRm5Ra29zVFVGQlRTeERRVUZEU3l4WFFVRlFMRVZCUVdoQ0xFMUJRVEJETEVOQlFVTXNRMEZCTDBNc1JVRkJhMFE3VFVGRGFFUXNUVUZCVFN4SlFVRkpReXhMUVVGS0xGZEJRMFJPTEUxQlJFTXNLME5CUXpCRFJ5eG5Ra0ZCUVN4RFFVRlJTU3hKUVVGU0xFTkJRV0VzVFVGQllpeERRVVF4UXl4UFFVRk9PMGxCUjBRN08wbEJRMFFzUzBGQlMwTXNVMEZCVEN4SFFVRnBRaXhKUVVGSlF5eHhRa0ZCU2l4RFFVRmpWaXhQUVVGa0xFTkJRV3BDTzBWQlEwUTdPenM3VjBGRlJDeDVRa0ZCZFVJN1RVRkRja0lzU1VGQlNTeExRVUZMUnl4TlFVRlVMRVZCUVdsQ08xRkJRMllzVDBGQlR5eExRVUZMUVN4TlFVRmFPMDFCUTBRN08wMUJSVVFzU1VGQlNTeERRVUZETEVsQlFVRlJMRzFDUVVGQkxFZEJRVVFzU1VGQmIwSXNTVUZCUVVNc1dVRkJRU3hIUVVGd1FpeEpRVUZuUXl4SlFVRkJReXhsUVVGQkxFZEJRWEJETEVWQlFXbEVPMUZCUXk5RExFOUJRVTlETEhsQ1FVRkJMRU5CUVdGRExFdEJRWEJDTzAxQlEwUTdPMDFCUlVRc1QwRkJUMFFzZVVKQlFVRXNRMEZCWVVVc1MwRkJjRUk3U1VGRFJEczdPMWRCUlVRc2MwSkJRVzlDUXl4SFFVRndRaXhGUVVGNVF6dE5RVU4yUXl4SlFVRkpMRXRCUVV0b1FpeE5RVUZNTEV0QlFXZENhVUlzYjBKQlFYQkNMRVZCUVdsRE8xRkJReTlDTEc5Q1FVRmhSQ3hIUVVGaU8wMUJRMFE3TzAxQlEwUXNUMEZCVDBFc1IwRkJVRHRKUVVORU96czdWMEZGUkN4MVFrRkJjVUpGTEU5QlFYSkNMRVZCUVd0RU8wMUJRVUU3TzAxQlEyaEVMRTlCUVU5QkxFOUJRVThzUTBGQlEwTXNSMEZCVWl4RFFVRlpMRlZCUVVOSUxFZEJRVVE3VVVGQlFTeFBRVUZUTEV0QlFVa3NRMEZCUTBrc1dVRkJUQ3hEUVVGclFrb3NSMEZCYkVJc1EwRkJWRHROUVVGQkxFTkJRVm9zUTBGQlVEdEpRVU5FT3pzN1YwRkZSQ3gxUWtGQmNVSkxMRWRCUVhKQ0xFVkJRVEpETzAxQlEzcERMRTlCUVU4c1MwRkJTMFFzV1VGQlRDeERRVUZyUWl4TFFVRkxXaXhUUVVGTUxFTkJRV1ZqTEcxQ1FVRm1MRU5CUVcxRFJDeEhRVUZ1UXl4RFFVRnNRaXhEUVVGUU8wbEJRMFE3T3p0WFFVVkVMREpDUVVGNVFrRXNSMEZCZWtJc1JVRkJLME03VFVGRE4wTXNUMEZCVHl4TFFVRkxSQ3haUVVGTUxFTkJRV3RDTEV0QlFVdGFMRk5CUVV3c1EwRkJaV1VzZFVKQlFXWXNRMEZCZFVOR0xFZEJRWFpETEVOQlFXeENMRU5CUVZBN1NVRkRSRHM3TzFkQlJVUXNORUpCUVRCQ1FTeEhRVUV4UWl4RlFVRXJRenROUVVNM1F5eEpRVUZOUnl4VlFVRlZMRWRCUVVjc1MwRkJTMmhDTEZOQlFVd3NRMEZCWldVc2RVSkJRV1lzUTBGQmRVTkZMRWxCUVhaRExFTkJRMnBDTEV0QlFVdHFRaXhUUVVSWkxFTkJRVzVDTzAxQlIwRXNUMEZCVHl4TFFVRkxhMElzWVVGQlRDeERRVUZ0UWl4SlFVRkJReXgzUWtGQlFTeEZRVUZ0UWs0c1IwRkJia0lzUlVGQmQwSkhMRlZCUVhoQ0xFTkJRVzVDTEVWQlFYZEVha0lzU1VGQmVFUXNRMEZEVEN4TFFVRkxjVUlzWVVGQlRDeEZRVVJMTEVOQlFWQTdTVUZIUkRzN096czdPMlZCUjFrNVFpeFZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF93b3JkcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJHNlbnRlbmNlc1BlclBhcmEgPSBfcmVmLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gX3JlZiRzZW50ZW5jZXNQZXJQYXJhID09PSB2b2lkIDAgPyB7XG4gICAgICBtYXg6IDcsXG4gICAgICBtaW46IDNcbiAgICB9IDogX3JlZiRzZW50ZW5jZXNQZXJQYXJhLFxuICAgICAgICBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgIHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPT09IHZvaWQgMCA/IHtcbiAgICAgIG1heDogMTUsXG4gICAgICBtaW46IDVcbiAgICB9IDogX3JlZiR3b3Jkc1BlclNlbnRlbmNlLFxuICAgICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgICAgc2VlZCA9IF9yZWYuc2VlZCxcbiAgICAgICAgX3JlZiR3b3JkcyA9IF9yZWYud29yZHMsXG4gICAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW5lcmF0b3IpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VudGVuY2VzUGVyUGFyYWdyYXBoXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3b3Jkc1BlclNlbnRlbmNlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyYW5kb21cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndvcmRzXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiA+IHNlbnRlbmNlc1BlclBhcmFncmFwaC5tYXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoIChcIi5jb25jYXQoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiwgXCIpIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoXCIpLmNvbmNhdChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4LCBcIikuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaW11bSBudW1iZXIgb2Ygd29yZHMgcGVyIHNlbnRlbmNlIChcIi5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5taW4sIFwiKSBjYW5ub3QgZXhjZWVkIG1heGltdW0gKFwiKS5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5tYXgsIFwiKS5cIikpO1xuICAgIH1cblxuICAgIHRoaXMuc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gc2VudGVuY2VzUGVyUGFyYWdyYXBoO1xuICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICB0aGlzLndvcmRzUGVyU2VudGVuY2UgPSB3b3Jkc1BlclNlbnRlbmNlO1xuICAgIHRoaXMucmFuZG9tID0gcmFuZG9tIHx8IE1hdGgucmFuZG9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdlbmVyYXRvciwgW3tcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21JbnRlZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tV29yZHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyR3b3Jkc1BlclNlbnRlbmMgPSB0aGlzLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgICAgbWluID0gX3RoaXMkd29yZHNQZXJTZW50ZW5jLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyR3b3Jkc1BlclNlbnRlbmMubWF4O1xuICAgICAgdmFyIGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgICByZXR1cm4gKDAsIF91dGlsLm1ha2VBcnJheU9mTGVuZ3RoKShsZW5ndGgpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wbHVja1JhbmRvbVdvcmQoKSwgXCIgXCIpLmNvbmNhdChhY2N1bXVsYXRvcik7XG4gICAgICB9LCBcIlwiKS50cmltKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tU2VudGVuY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TZW50ZW5jZShudW0pIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCgoMCwgX3V0aWwuY2FwaXRhbGl6ZSkodGhpcy5nZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkpLCBcIi5cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzZW50ZW5jZXNQZXJQYXIgPSB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRzZW50ZW5jZXNQZXJQYXIubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHNlbnRlbmNlc1BlclBhci5tYXg7XG4gICAgICB2YXIgbGVuZ3RoID0gbnVtIHx8IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICAgIHJldHVybiAoMCwgX3V0aWwubWFrZUFycmF5T2ZMZW5ndGgpKGxlbmd0aCkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzMi5nZW5lcmF0ZVJhbmRvbVNlbnRlbmNlKCksIFwiIFwiKS5jb25jYXQoYWNjdW11bGF0b3IpO1xuICAgICAgfSwgXCJcIikudHJpbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbHVja1JhbmRvbVdvcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGx1Y2tSYW5kb21Xb3JkKCkge1xuICAgICAgdmFyIG1pbiA9IDA7XG4gICAgICB2YXIgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgICAgcmV0dXJuIHRoaXMud29yZHNbaW5kZXhdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHZW5lcmF0b3I7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IEdlbmVyYXRvcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SkhaVzVsY21GMGIzSWlMQ0p6Wlc1MFpXNWpaWE5RWlhKUVlYSmhaM0poY0dnaUxDSnRZWGdpTENKdGFXNGlMQ0ozYjNKa2MxQmxjbE5sYm5SbGJtTmxJaXdpY21GdVpHOXRJaXdpYzJWbFpDSXNJbmR2Y21Seklpd2lWMDlTUkZNaUxDSkZjbkp2Y2lJc0lrMWhkR2dpTENKbWJHOXZjaUlzSW01MWJTSXNJbXhsYm1kMGFDSXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lJc0ltMWhhMlZCY25KaGVVOW1UR1Z1WjNSb0lpd2ljbVZrZFdObElpd2lZV05qZFcxMWJHRjBiM0lpTENKcGJtUmxlQ0lzSW5Cc2RXTnJVbUZ1Wkc5dFYyOXlaQ0lzSW5SeWFXMGlMQ0pqWVhCcGRHRnNhWHBsSWl3aVoyVnVaWEpoZEdWU1lXNWtiMjFYYjNKa2N5SXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwyZGxibVZ5WVhSdmNpNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCWFQxSkVVeUI5SUdaeWIyMGdYQ0l1TGk5amIyNXpkR0Z1ZEhNdmQyOXlaSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dZMkZ3YVhSaGJHbDZaU3dnYldGclpVRnljbUY1VDJaTVpXNW5kR2dnZlNCbWNtOXRJRndpTGk0dmRYUnBiRndpTzF4eVhHNWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKUW05MWJtUnpJSHRjY2x4dUlDQnRhVzQ2SUc1MWJXSmxjanRjY2x4dUlDQnRZWGc2SUc1MWJXSmxjanRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUhSNWNHVWdTVkJ5Ym1jZ1BTQW9LU0E5UGlCdWRXMWlaWEk3WEhKY2JseHlYRzVsZUhCdmNuUWdkSGx3WlNCSlUyVmxaRkpoYm1SdmJTQTlJRzVsZHlBb2MyVmxaRDg2SUhOMGNtbHVaeWtnUFQ0Z1NWQnlibWM3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxOWVhSb0lIdGNjbHh1SUNCelpXVmtjbUZ1Wkc5dE9pQkpVMlZsWkZKaGJtUnZiVHRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSlIyVnVaWEpoZEc5eVQzQjBhVzl1Y3lCN1hISmNiaUFnYzJWdWRHVnVZMlZ6VUdWeVVHRnlZV2R5WVhCb1B6b2dTVUp2ZFc1a2N6dGNjbHh1SUNCM2IzSmtjMUJsY2xObGJuUmxibU5sUHpvZ1NVSnZkVzVrY3p0Y2NseHVJQ0J5WVc1a2IyMC9PaUJKVUhKdVp6dGNjbHh1SUNCelpXVmtQem9nYzNSeWFXNW5PMXh5WEc0Z0lIZHZjbVJ6UHpvZ2MzUnlhVzVuVzEwN1hISmNibjFjY2x4dVhISmNibU5zWVhOeklFZGxibVZ5WVhSdmNpQjdYSEpjYmlBZ2NIVmliR2xqSUhObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FEb2dTVUp2ZFc1a2N6dGNjbHh1SUNCd2RXSnNhV01nZDI5eVpITlFaWEpUWlc1MFpXNWpaVG9nU1VKdmRXNWtjenRjY2x4dUlDQndkV0pzYVdNZ2NtRnVaRzl0T2lCSlVISnVaenRjY2x4dUlDQndkV0pzYVdNZ2QyOXlaSE02SUhOMGNtbHVaMXRkTzF4eVhHNWNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaDdYSEpjYmlBZ0lDQnpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2dnUFNCN0lHMWhlRG9nTnl3Z2JXbHVPaUF6SUgwc1hISmNiaUFnSUNCM2IzSmtjMUJsY2xObGJuUmxibU5sSUQwZ2V5QnRZWGc2SURFMUxDQnRhVzQ2SURVZ2ZTeGNjbHh1SUNBZ0lISmhibVJ2YlN4Y2NseHVJQ0FnSUhObFpXUXNYSEpjYmlBZ0lDQjNiM0prY3lBOUlGZFBVa1JUTEZ4eVhHNGdJSDA2SUVsSFpXNWxjbUYwYjNKUGNIUnBiMjV6SUQwZ2UzMHBJSHRjY2x4dUlDQWdJR2xtSUNoelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ3ViV2x1SUQ0Z2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFoZUNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZRTFwYm1sdGRXMGdiblZ0WW1WeUlHOW1JSE5sYm5SbGJtTmxjeUJ3WlhJZ2NHRnlZV2R5WVhCb0lDZ2tlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFwYmx4eVhHNGdJQ0FnSUNBZ0lIMHBJR05oYm01dmRDQmxlR05sWldRZ2JXRjRhVzExYlNBb0pIdHpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2d1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvZDI5eVpITlFaWEpUWlc1MFpXNWpaUzV0YVc0Z1BpQjNiM0prYzFCbGNsTmxiblJsYm1ObExtMWhlQ2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1lFMXBibWx0ZFcwZ2JuVnRZbVZ5SUc5bUlIZHZjbVJ6SUhCbGNpQnpaVzUwWlc1alpTQW9KSHRjY2x4dUlDQWdJQ0FnSUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVdWJXbHVYSEpjYmlBZ0lDQWdJQ0FnZlNrZ1kyRnVibTkwSUdWNFkyVmxaQ0J0WVhocGJYVnRJQ2drZTNkdmNtUnpVR1Z5VTJWdWRHVnVZMlV1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FDQTlJSE5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUR0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhNZ1BTQjNiM0prY3p0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhOUVpYSlRaVzUwWlc1alpTQTlJSGR2Y21SelVHVnlVMlZ1ZEdWdVkyVTdYSEpjYmlBZ0lDQjBhR2x6TG5KaGJtUnZiU0E5SUhKaGJtUnZiU0I4ZkNCTllYUm9MbkpoYm1SdmJUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIQjFZbXhwWXlCblpXNWxjbUYwWlZKaGJtUnZiVWx1ZEdWblpYSW9iV2x1T2lCdWRXMWlaWElzSUcxaGVEb2diblZ0WW1WeUtUb2diblZ0WW1WeUlIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIUm9hWE11Y21GdVpHOXRLQ2tnS2lBb2JXRjRJQzBnYldsdUlDc2dNU2tnS3lCdGFXNHBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0UHpvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUh0Y2NseHVJQ0FnSUdOdmJuTjBJSHNnYldsdUxDQnRZWGdnZlNBOUlIUm9hWE11ZDI5eVpITlFaWEpUWlc1MFpXNWpaVHRjY2x4dUlDQWdJR052Ym5OMElHeGxibWQwYUNBOUlHNTFiU0I4ZkNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnYldGclpVRnljbUY1VDJaTVpXNW5kR2dvYkdWdVozUm9LVnh5WEc0Z0lDQWdJQ0F1Y21Wa2RXTmxLQ2hoWTJOMWJYVnNZWFJ2Y2pvZ2MzUnlhVzVuTENCcGJtUmxlRG9nYm5WdFltVnlLVG9nYzNSeWFXNW5JRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1d2JIVmphMUpoYm1SdmJWZHZjbVFvS1gwZ0pIdGhZMk4xYlhWc1lYUnZjbjFnTzF4eVhHNGdJQ0FnSUNCOUxDQmNJbHdpS1Z4eVhHNGdJQ0FnSUNBdWRISnBiU2dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR2RsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVb2JuVnRQem9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmdKSHRqWVhCcGRHRnNhWHBsS0hSb2FYTXVaMlZ1WlhKaGRHVlNZVzVrYjIxWGIzSmtjeWh1ZFcwcEtYMHVZRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5Qm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNodWRXMC9PaUJ1ZFcxaVpYSXBPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2V5QnRhVzRzSUcxaGVDQjlJRDBnZEdocGN5NXpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2c3WEhKY2JpQWdJQ0JqYjI1emRDQnNaVzVuZEdnZ1BTQnVkVzBnZkh3Z2RHaHBjeTVuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVMQ0J0WVhncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvS0d4bGJtZDBhQ2xjY2x4dUlDQWdJQ0FnTG5KbFpIVmpaU2dvWVdOamRXMTFiR0YwYjNJNklITjBjbWx1Wnl3Z2FXNWtaWGc2SUc1MWJXSmxjaWs2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdVoyVnVaWEpoZEdWU1lXNWtiMjFUWlc1MFpXNWpaU2dwZlNBa2UyRmpZM1Z0ZFd4aGRHOXlmV0E3WEhKY2JpQWdJQ0FnSUgwc0lGd2lYQ0lwWEhKY2JpQWdJQ0FnSUM1MGNtbHRLQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdjR3gxWTJ0U1lXNWtiMjFYYjNKa0tDazZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQmpiMjV6ZENCdGFXNGdQU0F3TzF4eVhHNGdJQ0FnWTI5dWMzUWdiV0Y0SUQwZ2RHaHBjeTUzYjNKa2N5NXNaVzVuZEdnZ0xTQXhPMXh5WEc0Z0lDQWdZMjl1YzNRZ2FXNWtaWGdnUFNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTNiM0prYzF0cGJtUmxlRjA3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JIWlc1bGNtRjBiM0k3WEhKY2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3pzN096czdPenM3TzBsQmRVSk5RU3hUTzBWQlRVb3NjVUpCVFRKQ08wbEJRVUVzSzBWQlFVb3NSVUZCU1R0SlFVRkJMR2xEUVV4NlFrTXNjVUpCUzNsQ08wbEJRVUVzU1VGTWVrSkJMSEZDUVV0NVFpeHpRMEZNUkR0TlFVRkZReXhIUVVGSExFVkJRVVVzUTBGQlVEdE5RVUZWUXl4SFFVRkhMRVZCUVVVN1NVRkJaaXhEUVV0RE8wbEJRVUVzYVVOQlNucENReXhuUWtGSmVVSTdTVUZCUVN4SlFVcDZRa0VzWjBKQlNYbENMSE5EUVVwT08wMUJRVVZHTEVkQlFVY3NSVUZCUlN4RlFVRlFPMDFCUVZkRExFZEJRVWNzUlVGQlJUdEpRVUZvUWl4RFFVbE5PMGxCUVVFc1NVRklla0pGTEUxQlIzbENMRkZCU0hwQ1FTeE5RVWQ1UWp0SlFVRkJMRWxCUm5wQ1F5eEpRVVY1UWl4UlFVWjZRa0VzU1VGRmVVSTdTVUZCUVN4elFrRkVla0pETEV0QlEzbENPMGxCUVVFc1NVRkVla0pCTEV0QlEzbENMREpDUVVScVFrTXNXVUZEYVVJN08wbEJRVUU3TzBsQlFVRTdPMGxCUVVFN08wbEJRVUU3TzBsQlFVRTdPMGxCUTNwQ0xFbEJRVWxRTEhGQ1FVRnhRaXhEUVVGRFJTeEhRVUYwUWl4SFFVRTBRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJRWFJFTEVWQlFUSkVPMDFCUTNwRUxFMUJRVTBzU1VGQlNVOHNTMEZCU2l4elJFRkZSbElzY1VKQlFYRkNMRU5CUVVORkxFZEJSbkJDTEhORFFVZDNRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJTRGxETEZGQlFVNDdTVUZMUkRzN1NVRkZSQ3hKUVVGSlJTeG5Ra0ZCWjBJc1EwRkJRMFFzUjBGQmFrSXNSMEZCZFVKRExHZENRVUZuUWl4RFFVRkRSaXhIUVVFMVF5eEZRVUZwUkR0TlFVTXZReXhOUVVGTkxFbEJRVWxQTEV0QlFVb3NhVVJCUlVaTUxHZENRVUZuUWl4RFFVRkRSQ3hIUVVabUxITkRRVWQzUWtNc1owSkJRV2RDTEVOQlFVTkdMRWRCU0hwRExGRkJRVTQ3U1VGTFJEczdTVUZGUkN4TFFVRkxSQ3h4UWtGQlRDeEhRVUUyUWtFc2NVSkJRVGRDTzBsQlEwRXNTMEZCUzAwc1MwRkJUQ3hIUVVGaFFTeExRVUZpTzBsQlEwRXNTMEZCUzBnc1owSkJRVXdzUjBGQmQwSkJMR2RDUVVGNFFqdEpRVU5CTEV0QlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlRTeEpRVUZKU3l4SlFVRkpMRU5CUVVOTUxFMUJRVGRDTzBWQlEwUTdPenM3VjBGRlJDd3JRa0ZCTmtKR0xFZEJRVGRDTEVWQlFUQkRSQ3hIUVVFeFF5eEZRVUVyUkR0TlFVTTNSQ3hQUVVGUFVTeEpRVUZKTEVOQlFVTkRMRXRCUVV3c1EwRkJWeXhMUVVGTFRpeE5RVUZNTEUxQlFXbENTQ3hIUVVGSExFZEJRVWRETEVkQlFVNHNSMEZCV1N4RFFVRTNRaXhKUVVGclEwRXNSMEZCTjBNc1EwRkJVRHRKUVVORU96czdWMEZGUkN3MlFrRkJNa0pUTEVkQlFUTkNMRVZCUVdsRU8wMUJRVUU3TzAxQlF5OURMRFJDUVVGeFFpeExRVUZMVWl4blFrRkJNVUk3VFVGQlFTeEpRVUZSUkN4SFFVRlNMSGxDUVVGUlFTeEhRVUZTTzAxQlFVRXNTVUZCWVVRc1IwRkJZaXg1UWtGQllVRXNSMEZCWWp0TlFVTkJMRWxCUVUxWExFMUJRVTBzUjBGQlIwUXNSMEZCUnl4SlFVRkpMRXRCUVV0RkxIRkNRVUZNTEVOQlFUSkNXQ3hIUVVFelFpeEZRVUZuUTBRc1IwRkJhRU1zUTBGQmRFSTdUVUZEUVN4UFFVRlBMRWxCUVVGaExIVkNRVUZCTEVWQlFXdENSaXhOUVVGc1FpeEZRVU5LUnl4TlFVUkpMRU5CUTBjc1ZVRkJRME1zVjBGQlJDeEZRVUZ6UWtNc1MwRkJkRUlzUlVGQlowUTdVVUZEZEVRc2FVSkJRVlVzUzBGQlNTeERRVUZEUXl4bFFVRk1MRVZCUVZZc1kwRkJiME5HTEZkQlFYQkRPMDFCUTBRc1EwRklTU3hGUVVkR0xFVkJTRVVzUlVGSlNrY3NTVUZLU1N4RlFVRlFPMGxCUzBRN096dFhRVVZFTEdkRFFVRTRRbElzUjBGQk9VSXNSVUZCYjBRN1RVRkRiRVFzYVVKQlFWVXNTVUZCUVZNc1owSkJRVUVzUlVGQlZ5eExRVUZMUXl4dFFrRkJUQ3hEUVVGNVFsWXNSMEZCZWtJc1EwRkJXQ3hEUVVGV08wbEJRMFE3T3p0WFFVVkVMR2xEUVVFclFrRXNSMEZCTDBJc1JVRkJjVVE3VFVGQlFUczdUVUZEYmtRc05FSkJRWEZDTEV0QlFVdFlMSEZDUVVFeFFqdE5RVUZCTEVsQlFWRkZMRWRCUVZJc2VVSkJRVkZCTEVkQlFWSTdUVUZCUVN4SlFVRmhSQ3hIUVVGaUxIbENRVUZoUVN4SFFVRmlPMDFCUTBFc1NVRkJUVmNzVFVGQlRTeEhRVUZIUkN4SFFVRkhMRWxCUVVrc1MwRkJTMFVzY1VKQlFVd3NRMEZCTWtKWUxFZEJRVE5DTEVWQlFXZERSQ3hIUVVGb1F5eERRVUYwUWp0TlFVTkJMRTlCUVU4c1NVRkJRV0VzZFVKQlFVRXNSVUZCYTBKR0xFMUJRV3hDTEVWQlEwcEhMRTFCUkVrc1EwRkRSeXhWUVVGRFF5eFhRVUZFTEVWQlFYTkNReXhMUVVGMFFpeEZRVUZuUkR0UlFVTjBSQ3hwUWtGQlZTeE5RVUZKTEVOQlFVTkxMSE5DUVVGTUxFVkJRVllzWTBGQk1rTk9MRmRCUVRORE8wMUJRMFFzUTBGSVNTeEZRVWRHTEVWQlNFVXNSVUZKU2tjc1NVRktTU3hGUVVGUU8wbEJTMFE3T3p0WFFVVkVMREpDUVVGcFF6dE5RVU12UWl4SlFVRk5ha0lzUjBGQlJ5eEhRVUZITEVOQlFWbzdUVUZEUVN4SlFVRk5SQ3hIUVVGSExFZEJRVWNzUzBGQlMwc3NTMEZCVEN4RFFVRlhUU3hOUVVGWUxFZEJRVzlDTEVOQlFXaERPMDFCUTBFc1NVRkJUVXNzUzBGQlN5eEhRVUZITEV0QlFVdEtMSEZDUVVGTUxFTkJRVEpDV0N4SFFVRXpRaXhGUVVGblEwUXNSMEZCYUVNc1EwRkJaRHROUVVOQkxFOUJRVThzUzBGQlMwc3NTMEZCVEN4RFFVRlhWeXhMUVVGWUxFTkJRVkE3U1VGRFJEczdPenM3TzJWQlIxbHNRaXhUSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcGFyYW0gc3RyICBBIHN0cmluZyB0aGF0IG1heSBvciBtYXkgbm90IGJlIGNhcGl0YWxpemVkLlxyXG4gKiBAcmV0dXJucyAgICBBIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHZhciB0cmltbWVkID0gc3RyLnRyaW0oKTtcbiAgcmV0dXJuIHRyaW1tZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0cmltbWVkLnNsaWNlKDEpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SmpZWEJwZEdGc2FYcGxJaXdpYzNSeUlpd2lkSEpwYlcxbFpDSXNJblJ5YVcwaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2WTJGd2FYUmhiR2w2WlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUUhCaGNtRnRJSE4wY2lBZ1FTQnpkSEpwYm1jZ2RHaGhkQ0J0WVhrZ2IzSWdiV0Y1SUc1dmRDQmlaU0JqWVhCcGRHRnNhWHBsWkM1Y2NseHVJQ29nUUhKbGRIVnlibk1nSUNBZ1FTQmpZWEJwZEdGc2FYcGxaQ0J6ZEhKcGJtY3VYSEpjYmlBcUwxeHlYRzVqYjI1emRDQmpZWEJwZEdGc2FYcGxJRDBnS0hOMGNqb2djM1J5YVc1bktUb2djM1J5YVc1bklEMCtJSHRjY2x4dUlDQmpiMjV6ZENCMGNtbHRiV1ZrSUQwZ2MzUnlMblJ5YVcwb0tUdGNjbHh1SUNCeVpYUjFjbTRnZEhKcGJXMWxaQzVqYUdGeVFYUW9NQ2t1ZEc5VmNIQmxja05oYzJVb0tTQXJJSFJ5YVcxdFpXUXVjMnhwWTJVb01TazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqWVhCcGRHRnNhWHBsTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxGVkJRVlVzUjBGQlJ5eFRRVUZpUVN4VlFVRmhMRU5CUVVORExFZEJRVVFzUlVGQmVVSTdSVUZETVVNc1NVRkJUVU1zVDBGQlR5eEhRVUZIUkN4SFFVRkhMRU5CUVVORkxFbEJRVW9zUlVGQmFFSTdSVUZEUVN4UFFVRlBSQ3hQUVVGUExFTkJRVU5GTEUxQlFWSXNRMEZCWlN4RFFVRm1MRVZCUVd0Q1F5eFhRVUZzUWl4TFFVRnJRMGdzVDBGQlR5eERRVUZEU1N4TFFVRlNMRU5CUVdNc1EwRkJaQ3hEUVVGNlF6dEJRVU5FTEVOQlNFUTdPMlZCUzJWT0xGVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjYXBpdGFsaXplXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jYXBpdGFsaXplW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc05vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lzTm9kZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNSZWFjdE5hdGl2ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXNSZWFjdE5hdGl2ZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNXaW5kb3dzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pc1dpbmRvd3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1ha2VBcnJheU9mTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZkxlbmd0aFtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZUFycmF5T2ZTdHJpbmdzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZlN0cmluZ3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcblxudmFyIF9jYXBpdGFsaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jYXBpdGFsaXplXCIpKTtcblxudmFyIF9pc05vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzTm9kZVwiKSk7XG5cbnZhciBfaXNSZWFjdE5hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNSZWFjdE5hdGl2ZVwiKSk7XG5cbnZhciBfaXNXaW5kb3dzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc1dpbmRvd3NcIikpO1xuXG52YXIgX21ha2VBcnJheU9mTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiKSk7XG5cbnZhciBfbWFrZUFycmF5T2ZTdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZlN0cmluZ3NcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2VzEwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1YwYVd3dmFXNWtaWGd1ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTmhjR2wwWVd4cGVtVWdabkp2YlNCY0lpNHZZMkZ3YVhSaGJHbDZaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTk9iMlJsSUdaeWIyMGdYQ0l1TDJselRtOWtaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTlNaV0ZqZEU1aGRHbDJaU0JtY205dElGd2lMaTlwYzFKbFlXTjBUbUYwYVhabFhDSTdYSEpjYm1sdGNHOXlkQ0JwYzFkcGJtUnZkM01nWm5KdmJTQmNJaTR2YVhOWGFXNWtiM2R6WENJN1hISmNibWx0Y0c5eWRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQm1jbTl0SUZ3aUxpOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFGd2lPMXh5WEc1cGJYQnZjblFnYldGclpVRnljbUY1VDJaVGRISnBibWR6SUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVUzUnlhVzVuYzF3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0JqWVhCcGRHRnNhWHBsTEZ4eVhHNGdJR2x6VG05a1pTeGNjbHh1SUNCcGMxSmxZV04wVG1GMGFYWmxMRnh5WEc0Z0lHbHpWMmx1Wkc5M2N5eGNjbHh1SUNCdFlXdGxRWEp5WVhsUFpreGxibWQwYUN4Y2NseHVJQ0J0WVd0bFFYSnlZWGxQWmxOMGNtbHVaM01zWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHJldHVybnMgIFRydWUgaWYgdGhlIHJ1bnRpbWUgaXMgTm9kZUpTLlxyXG4gKi9cbnZhciBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUoKSB7XG4gIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmICEhbW9kdWxlLmV4cG9ydHM7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc05vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpwYzA1dlpHVWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2YVhOT2IyUmxMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QWdWSEoxWlNCcFppQjBhR1VnY25WdWRHbHRaU0JwY3lCT2IyUmxTbE11WEhKY2JpQXFMMXh5WEc1amIyNXpkQ0JwYzA1dlpHVWdQU0FvS1RvZ1ltOXZiR1ZoYmlBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ0YjJSMWJHVWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdKaVlnSVNGdGIyUjFiR1V1Wlhod2IzSjBjenRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdselRtOWtaVHRjY2x4dUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlRVRXNUVUZCVFN4SFFVRkhMRk5CUVZSQkxFMUJRVk1zUjBGQlpUdEZRVU0xUWl4UFFVRlBMRTlCUVU5RExFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zUTBGQlF5eERRVUZEUVN4TlFVRk5MRU5CUVVORExFOUJRV3BFTzBGQlEwUXNRMEZHUkRzN1pVRkpaVVlzVFNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBDaGVjayBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKiBTb2x1dGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va25pY2tsYWJzL2xvcmVtLWlwc3VtLmpzL3B1bGwvNTIvZmlsZXNcclxuICpcclxuICogQHJldHVybnMgIFRydWUgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICovXG52YXIgaXNSZWFjdE5hdGl2ZSA9IGZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XG4gIHZhciBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1JlYWN0TmF0aXZlUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNSZWFjdE5hdGl2ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SnBjMUpsWVdOMFRtRjBhWFpsSWl3aWFYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2RDSXNJbTVoZG1sbllYUnZjaUlzSW5CeWIyUjFZM1FpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5TWldGamRFNWhkR2wyWlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUTJobFkyc2dhV1lnY25WdWRHbHRaU0JwY3lCU1pXRmpkRTVoZEdsMlpTNWNjbHh1SUNvZ1UyOXNkWFJwYjI0Z1ltRnpaV1FnYjI0Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwydHVhV05yYkdGaWN5OXNiM0psYlMxcGNITjFiUzVxY3k5d2RXeHNMelV5TDJacGJHVnpYSEpjYmlBcVhISmNiaUFxSUVCeVpYUjFjbTV6SUNCVWNuVmxJR2xtSUhKMWJuUnBiV1VnYVhNZ1VtVmhZM1JPWVhScGRtVXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnBjMUpsWVdOMFRtRjBhWFpsSUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4eVhHNGdJR3hsZENCcGMxSmxZV04wVG1GMGFYWmxVbVZ6ZFd4ME9pQmliMjlzWldGdUlEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lIUnllU0I3WEhKY2JpQWdJQ0JwYzFKbFlXTjBUbUYwYVhabFVtVnpkV3gwSUQwZ2JtRjJhV2RoZEc5eUxuQnliMlIxWTNRZ1BUMDlJRndpVW1WaFkzUk9ZWFJwZG1WY0lqdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMUpsWVdOMFRtRjBhWFpsVW1WemRXeDBJRDBnWm1Gc2MyVTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2FYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2REdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x6VW1WaFkzUk9ZWFJwZG1VN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR0ZCUVdFc1IwRkJSeXhUUVVGb1FrRXNZVUZCWjBJc1IwRkJaVHRGUVVOdVF5eEpRVUZKUXl4dFFrRkJORUlzUjBGQlJ5eExRVUZ1UXpzN1JVRkZRU3hKUVVGSk8wbEJRMFpCTEcxQ1FVRnRRaXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTlCUVZZc1MwRkJjMElzWVVGQk5VTTdSVUZEUkN4RFFVWkVMRU5CUlVVc1QwRkJUME1zUTBGQlVDeEZRVUZWTzBsQlExWklMRzFDUVVGdFFpeEhRVUZITEV0QlFYUkNPMFZCUTBRN08wVkJSVVFzVDBGQlQwRXNiVUpCUVZBN1FVRkRSQ3hEUVZaRU96dGxRVmxsUkN4aEluMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3BsYXRmb3JtcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCIpO1xuXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xudmFyIGlzV2luZG93cyA9IGZ1bmN0aW9uIGlzV2luZG93cygpIHtcbiAgdmFyIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gX3BsYXRmb3Jtcy5TVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNXaW5kb3dzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKcGMxZHBibVJ2ZDNNaUxDSnBjMWRwYm1SdmQzTlNaWE4xYkhRaUxDSndjbTlqWlhOeklpd2ljR3hoZEdadmNtMGlMQ0pUVlZCUVQxSlVSVVJmVUV4QlZFWlBVazFUSWl3aVYwbE9NeklpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5YYVc1a2IzZHpMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lGTlZVRkJQVWxSRlJGOVFURUZVUms5U1RWTWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDNCc1lYUm1iM0p0YzF3aU8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFQnlaWFIxY201eklGUnlkV1VnYVdZZ2NISnZZMlZ6Y3lCcGN5QjNhVzVrYjNkekxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2FYTlhhVzVrYjNkeklEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHlYRzRnSUd4bGRDQnBjMWRwYm1SdmQzTlNaWE4xYkhRNklHSnZiMnhsWVc0Z1BTQm1ZV3h6WlR0Y2NseHVJQ0IwY25rZ2UxeHlYRzRnSUNBZ2FYTlhhVzVrYjNkelVtVnpkV3gwSUQwZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlNBOVBUMGdVMVZRVUU5U1ZFVkVYMUJNUVZSR1QxSk5VeTVYU1U0ek1qdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMWRwYm1SdmQzTlNaWE4xYkhRZ1BTQm1ZV3h6WlR0Y2NseHVJQ0I5WEhKY2JpQWdjbVYwZFhKdUlHbHpWMmx1Wkc5M2MxSmxjM1ZzZER0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHpWMmx1Wkc5M2N6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVTBGQlV5eEhRVUZITEZOQlFWcEJMRk5CUVZrc1IwRkJaVHRGUVVNdlFpeEpRVUZKUXl4bFFVRjNRaXhIUVVGSExFdEJRUzlDT3p0RlFVTkJMRWxCUVVrN1NVRkRSa0VzWlVGQlpTeEhRVUZIUXl4UFFVRlBMRU5CUVVORExGRkJRVklzUzBGQmNVSkRMRGhDUVVGQkxFTkJRVzlDUXl4TFFVRXpSRHRGUVVORUxFTkJSa1FzUTBGRlJTeFBRVUZQUXl4RFFVRlFMRVZCUVZVN1NVRkRWa3dzWlVGQlpTeEhRVUZITEV0QlFXeENPMFZCUTBRN08wVkJRMFFzVDBGQlQwRXNaVUZCVUR0QlFVTkVMRU5CVWtRN08yVkJWV1ZFTEZNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xudmFyIG1ha2VBcnJheU9mTGVuZ3RoID0gZnVuY3Rpb24gbWFrZUFycmF5T2ZMZW5ndGgoKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IG1ha2VBcnJheU9mTGVuZ3RoO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpreGxibWQwYUNJc0lteGxibWQwYUNJc0lrRnljbUY1SWl3aVlYQndiSGtpTENKdFlYQWlMQ0pwZEdWdElpd2lhVzVrWlhnaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNjbHh1SUNvZ1FIQmhjbUZ0SUd4bGJtZDBhQ0JNWlc1bmRHZ2dYQ0o0WENJdVhISmNiaUFxSUVCeVpYUjFjbTV6SUNBZ0lDQWdRVzRnWVhKeVlYa2diMllnYVc1a1pYaGxjeUJ2WmlCc1pXNW5kR2dnWENKNFhDSXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQTlJQ2hzWlc1bmRHZzZJRzUxYldKbGNpQTlJREFwT2lCdWRXMWlaWEpiWFNBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUVGeWNtRjVMbUZ3Y0d4NUtHNTFiR3dzSUVGeWNtRjVLR3hsYm1kMGFDa3BMbTFoY0NoY2NseHVJQ0FnSUNocGRHVnRPaUJoYm5rc0lHbHVaR1Y0T2lCdWRXMWlaWElwT2lCdWRXMWlaWElnUFQ0Z2FXNWtaWGdzWEhKY2JpQWdLVHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxHbENRVUZwUWl4SFFVRkhMRk5CUVhCQ1FTeHBRa0ZCYjBJc1IwRkJhME03UlVGQlFTeEpRVUZxUTBNc1RVRkJhVU1zZFVWQlFXaENMRU5CUVdkQ08wVkJRekZFTEU5QlFVOURMRXRCUVVzc1EwRkJRME1zUzBGQlRpeERRVUZaTEVsQlFWb3NSVUZCYTBKRUxFdEJRVXNzUTBGQlEwUXNUVUZCUkN4RFFVRjJRaXhGUVVGcFEwY3NSMEZCYWtNc1EwRkRUQ3hWUVVGRFF5eEpRVUZFTEVWQlFWbERMRXRCUVZvN1NVRkJRU3hQUVVGelEwRXNTMEZCZEVNN1JVRkJRU3hEUVVSTExFTkJRVkE3UVVGSFJDeERRVXBFT3p0bFFVMWxUaXhwUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfbWFrZUFycmF5T2ZMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mTGVuZ3RoXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cbnZhciBtYWtlQXJyYXlPZlN0cmluZ3MgPSBmdW5jdGlvbiBtYWtlQXJyYXlPZlN0cmluZ3MobGVuZ3RoLCBtYWtlU3RyaW5nKSB7XG4gIHZhciBhcnIgPSAoMCwgX21ha2VBcnJheU9mTGVuZ3RoW1wiZGVmYXVsdFwiXSkobGVuZ3RoKTtcbiAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlU3RyaW5nKCk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gbWFrZUFycmF5T2ZTdHJpbmdzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNaUxDSnNaVzVuZEdnaUxDSnRZV3RsVTNSeWFXNW5JaXdpWVhKeUlpd2liV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ2lMQ0p0WVhBaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBabE4wY21sdVozTXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvSUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVRHVnVaM1JvWENJN1hISmNiaThxS2x4eVhHNGdLaUJBY0dGeVlXMGdiR1Z1WjNSb0lDQk1aVzVuZEdnZ1hDSjRYQ0l1WEhKY2JpQXFJRUJ5WlhSMWNtNXpJQ0FnSUNBZ0lFRnVJR0Z5Y21GNUlHOW1JSE4wY21sdVozTWdiMllnYkdWdVozUm9JRndpZUZ3aUxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2JXRnJaVUZ5Y21GNVQyWlRkSEpwYm1keklEMGdLRnh5WEc0Z0lHeGxibWQwYURvZ2JuVnRZbVZ5TEZ4eVhHNGdJRzFoYTJWVGRISnBibWM2SUNncElEMCtJSE4wY21sdVp5eGNjbHh1S1RvZ2MzUnlhVzVuVzEwZ1BUNGdlMXh5WEc0Z0lHTnZibk4wSUdGeWNpQTlJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9LR3hsYm1kMGFDazdYSEpjYmlBZ2NtVjBkWEp1SUdGeWNpNXRZWEFvS0NrZ1BUNGdiV0ZyWlZOMGNtbHVaeWdwS1R0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR3RDUVVGclFpeEhRVUZITEZOQlFYSkNRU3hyUWtGQmNVSXNRMEZEZWtKRExFMUJSSGxDTEVWQlJYcENReXhWUVVaNVFpeEZRVWRhTzBWQlEySXNTVUZCVFVNc1IwRkJSeXhIUVVGSExFbEJRVUZETERaQ1FVRkJMRVZCUVd0Q1NDeE5RVUZzUWl4RFFVRmFPMFZCUTBFc1QwRkJUMFVzUjBGQlJ5eERRVUZEUlN4SFFVRktMRU5CUVZFN1NVRkJRU3hQUVVGTlNDeFZRVUZWTEVWQlFXaENPMFZCUVVFc1EwRkJVaXhEUVVGUU8wRkJRMFFzUTBGT1JEczdaVUZSWlVZc2EwSWlmUT09IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluQm9keS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbkJvZHkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IExvcmVtSXBzdW0gfSBmcm9tIFwibG9yZW0taXBzdW1cIlxuXG5pbXBvcnQgeyBjcmVhdGVTZXRFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxcIlxuaW1wb3J0IGltZzEgZnJvbSAnLi4vaW1nL2hvbWVfbWFpbi9pbWFnZTEuanBnJ1xuaW1wb3J0IGltZzIgZnJvbSAnLi4vaW1nL2hvbWVfbWFpbi9pbWFnZTIuanBnJ1xuaW1wb3J0IGltZzMgZnJvbSAnLi4vaW1nL2hvbWVfbWFpbi9pbWFnZTMuanBnJ1xuaW1wb3J0IGltZzQgZnJvbSAnLi4vaW1nL2hvbWVfbWFpbi9pbWFnZTQuanBnJ1xuXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbkJvZHkuc2NzcydcblxuY29uc3QgbG9yZW0gPSBuZXcgTG9yZW1JcHN1bSh7XG4gICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoOntcbiAgICAgICAgbWF4OiA4LFxuICAgICAgICBtaW46IDRcbiAgICB9LFxuICAgIHdvcmRzUGVyU2VudGVuY2U6e1xuICAgICAgICBtYXg6IDEyLFxuICAgICAgICBtaW46IDRcbiAgICB9XG59KVxuXG5jb25zdCBpbWFnZXMgPSBbXG4gICAge1xuICAgICBpbWc6IGltZzEsXG4gICAgIHRleHQ6IGxvcmVtLmdlbmVyYXRlU2VudGVuY2VzKDUpXG4gICAgfVxuICAgICwge1xuICAgICAgICBpbWc6IGltZzIsXG4gICAgICAgIHRleHQ6bG9yZW0uZ2VuZXJhdGVTZW50ZW5jZXMoNSlcbiAgICB9XG4gICAgLCBcbiAgICB7XG4gICAgICAgIGltZzppbWczLFxuICAgICAgICB0ZXh0OmxvcmVtLmdlbmVyYXRlU2VudGVuY2VzKDUpXG4gICAgfVxuICAgICxcbiAgICB7XG4gICAgICAgIGltZzppbWc0LFxuICAgICAgICB0ZXh0OiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyg1KVxuICAgIH1cbl1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkJvZHkoKSB7XG4gICAgY29uc3QgYm9keSA9IGNyZWF0ZVNldEVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdtYWluLWJvZHknXG4gICAgfSlcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpPT57XG4gICAgICAgIGNvbnN0IGltZz1jcmVhdGVTZXRFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2ltZycsXG4gICAgICAgICAgICBhbHQ6YGltYWdlLSR7aW5kZXggKyAxfWAsXG4gICAgICAgICAgICBzcmM6IGltYWdlLmltZ1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHA9Y3JlYXRlU2V0RWxlbWVudCgncCcsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncCdcbiAgICAgICAgfSlcbiAgICAgICAgcC5pbm5lclRleHQ9aW1hZ2UudGV4dFxuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHApXG4gICAgfSlcbiAgICByZXR1cm4gYm9keVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluQm9keSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbmF2QnJhbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01lbnUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGFjdHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVzZXJ2YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQnXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgZm9yIChjb25zdCBpIG9mIGxpc3RJdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBzZXRBdHRyaWJ1dGVzKGl0ZW0se2NsYXNzOiBcIm5hdi1pdGVtXCJ9KVxuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gaS50aXRsZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG4gICAgbmF2QnJhbmQuY2xhc3NMaXN0LmFkZCgnTmF2LWJyYW5kJylcbiAgICBuYXZCcmFuZC5pbm5lckhUTUw9XCJBbmltZSBGb29kXCJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnJhbmQpXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsKVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJylcbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhciIsImltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvMTIzMjczMi5qcGdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvc2Nyb2xsYmFyL2Fzc29ydGVkLmpwZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvYmFsbHMuZ2lmXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vaW1nL3Njcm9sbGJhci9ub29kbGUuZ2lmXCI7XG5pbXBvcnQgXCIuLi9zYXNzL3Njcm9sbC5zY3NzXCI7XG5cblxuY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuXG5mdW5jdGlvbiBjcmVhdGVJbWFnZVNsaWRlcigpIHtcbiAgICAvKlxuICAgICAgICBDcmVhdGVzIHRoZSBpbWFnZSBzbGlkZVxuICAgICAgICAqL1xuXG4gICAgbGV0IGFjdGl2ZUxpbmsgPSAwO1xuICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlU2V0RWxlbWVudChcInNlY3Rpb25cIiwge1xuICAgICAgICBjbGFzczogXCJzZWN0aW9ucyBpbWFnZS1zbGlkZXJcIixcbiAgICB9KTtcbiAgICBjb25zdCB2aWV3V2luZG93ID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndpbmRvd1wiIH0pO1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwid3JhcHBlclwiIH0pO1xuXG4gICAgY29uc3QgbmF2TGlua3MgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmF2TGlua3NcIiB9KTtcbiAgICBjb25zdCB1bCA9IGNyZWF0ZVNldEVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzOiBcInVsXCIgfSk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZVNldEVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3JjOiBpbWFnZSxcbiAgICAgICAgICAgIGFsdDogYGltYWdlLSR7aW5kZXggKyAxfWAsXG4gICAgICAgICAgICBpZDogYGl0ZW0ke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgY2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IGxpID0gY3JlYXRlU2V0RWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImxpbmtzXCIsXG4gICAgICAgICAgICBcImRhdGEtbnVtYmVyXCI6IGluZGV4ICsgMSxcbiAgICAgICAgfSk7XG4gICAgICAgIGxpLml0ZW1JRCA9IGluZGV4O1xuICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VQb3NpdGlvbihlLnRhcmdldClcbiAgICAgICAgfSlcbiAgICAgICAgbGlua3MucHVzaChsaSk7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KTtcbiAgICBjb25zdCBidG4xID0gY3JlYXRlU2V0RWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBcImJ0biBsZWZ0XCIsXG4gICAgICAgIFwiZGF0YS1zaWRlXCI6IFwibGVmdFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGJ0bjIgPSBjcmVhdGVTZXRFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xhc3M6IFwiYnRuIHJpZ2h0XCIsXG4gICAgICAgIFwiZGF0YS1zaWRlXCI6IFwicmlnaHRcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ0bnMgPSBbYnRuMSwgYnRuMl07XG5cbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5zaWRlID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZlTGluayA8PSAwID8gbGlua3MubGVuZ3RoIC0gMSA6IGFjdGl2ZUxpbmsgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpZF07XG4gICAgICAgICAgICAgICAgY2hhbmdlUG9zaXRpb24obGluayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQuc2lkZSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhY3RpdmVMaW5rID49IGxpbmtzLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlTGluayArIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2lkXTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VQb3NpdGlvbihsaW5rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VQb3NpdGlvbihsaW5rKSB7XG4gICAgICAgIGxpbmtzLmZvckVhY2goKGxpbmtJdGVtKSA9PiB7XG4gICAgICAgICAgICBsaW5rSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhY3RpdmVMaW5rID0gbGluay5pdGVtSURcblxuICAgICAgICBjb25zdCBubyA9IHBhcnNlSW50KGxpbmsuZGF0YXNldC5udW1iZXIpIC0gMVxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5vICogLTEwMFxuXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbHVlID0gYHRyYW5zbGF0ZTNkKCR7cG9zaXRpb259dncsIDBweCwgMHB4KWBcbiAgICAgICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGVWYWx1ZVxuXG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFRpbWUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhY3RpdmVMaW5rID49IGxpbmtzLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlTGluayArIDFcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2N1cnJlbnRdXG4gICAgICAgIGNoYW5nZVBvc2l0aW9uKGxpbmspXG4gICAgfVxuXG4gICAgYnRuMS5pbm5lckhUTUwgPSBcIiYjMTAwOTQ7XCI7XG4gICAgYnRuMi5pbm5lckhUTUwgPSBcIiYjMTAwOTM7XCI7XG5cbiAgICB2aWV3V2luZG93LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIHZpZXdXaW5kb3cuYXBwZW5kQ2hpbGQoYnRuMSk7XG4gICAgdmlld1dpbmRvdy5hcHBlbmRDaGlsZChidG4yKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3V2luZG93KTtcblxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgc2V0SW50ZXJ2YWwoc2V0VGltZSwgNDAwMClcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbWFnZVNsaWRlcjtcbiIsImZ1bmN0aW9uIGdldEVsZW1lbnQoc2VsZWN0b3Ipe1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxufVxuXG4gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpe1xuICAgIC8vIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKXtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZXRFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXM9e30pe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0RWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIHNldEF0dHJpYnV0ZXMsXG4gICAgY3JlYXRlU2V0RWxlbWVudCxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnXG5cbmltcG9ydCB7IGdldEVsZW1lbnQsIGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBjcmVhdGVJbWFnZVNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2Nyb2xsJ1xuaW1wb3J0IGNyZWF0ZU1haW5Cb2R5IGZyb20gJy4vY29tcG9uZW50cy9ib2R5JztcblxuY29uc29sZS5sb2coJ2hlbGxvLCBXb3JsZCEnKTtcblxuY29uc3QgbmF2YmFyID0gbmF2QmFyKClcbmNvbnN0IGltYWdlU2xpZGVyPWNyZWF0ZUltYWdlU2xpZGVyKClcblxuY29uc3QgYm9keSA9IGdldEVsZW1lbnQoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHtjbGFzczogXCJib2R5IG1haW5cIn0pXG5jb25zdCBtYWluQm9keSA9IGNyZWF0ZU1haW5Cb2R5KClcblxuYm9keS5hcHBlbmRDaGlsZChuYXZiYXIpXG5ib2R5LmFwcGVuZENoaWxkKG1haW4pXG5tYWluLmFwcGVuZENoaWxkKGltYWdlU2xpZGVyKVxubWFpbi5hcHBlbmRDaGlsZChtYWluQm9keSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==