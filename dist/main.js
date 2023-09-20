/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  transition: transform 0.5s ease-in-out;
}

.window {
  border: 2px solid black;
  overflow: hidden;
  height: 30rem;
  display: flex;
  border-radius: 1rem;
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
  background-color: #cccccc;
  padding: 5px;
  border-radius: 50px;
  border: black 5px solid;
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
  margin-right: 20px;
}

/* On hover, add a black background color with a little bit see-through */
.left:hover,
.right:hover {
  background-color: rgba(0, 0, 0, 0.8);
}`, "",{"version":3,"sources":["webpack://./src/sass/scroll.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAMA;EACE,aCNO;EDOP,YCLS;ADAX;;AAQA;EACE,aAAA;EACA,sBAAA;EAEA,iBAAA;AANF;;AASA;EACE,aAAA;EACA,iBAAA;EACA,+BAAA;EACA,sCAAA;AANF;;AASA;EACE,uBAAA;EAEA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AAPF;;AAUA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAPF;;AAUA;EACE,yBAAA;AAPF;;AAUA;EACE,yBAAA;EACA,cAAA;EACA,kBAAA;AAPF;;AAUA;EACE,yBAAA;EACA,cAAA;AAPF;;AAUA;EACE,eAAA;EACA,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,iBAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;AAPF;;AAUA;EACE,QAAA;EACA,0BAAA;EACA,kBChGa;ADyFf;;AAWA,yEAAA;AACA;;EAEE,oCAAA;AARF","sourcesContent":["// body {\n//   --height: 30rem;\n//   --width: 100%;\n// }\n@import 'sizes';\n\n.content {\n  height: $height;\n  width: $img-width;\n}\n\n.image-slider{\n  display: flex;\n  flex-direction: column;\n  // align-items: center;\n  padding-top: 1rem;\n}\n\n#wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate3d(0, 0, 0);\n  transition: transform .5s ease-in-out;\n}\n\n.window {\n  border: 2px solid black;\n  // width: ($width);\n  overflow: hidden;\n  height: ($height);\n  display: flex;\n  border-radius: 1rem;\n}\n\n.navLinks {\n  text-align: center;\n  width: ($width);\n  align-self: center;\n}\n\n.navLinks ul {\n  margin: 0px;\n  padding: 0px;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.links {\n  float: left;\n  text-align: center;\n  margin: 10px;\n  list-style: none;\n  cursor: pointer;\n  background-color: #cccccc;\n  padding: 5px;\n  border-radius: 50px;\n  border: black 5px solid;\n}\n\n.links:hover {\n  background-color: #ffff00;\n}\n\n.links.active {\n  background-color: #333333;\n  color: #ffffff;\n  outline-width: 7px;\n}\n\n.links.active:hover {\n  background-color: #484848;\n  color: #ffffff;\n}\n\n.btn {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  font-size: 1.2rem;\n  width: auto;\n  margin-top: -110px;\n  padding: 3rem 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n}\n\n.right {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n  margin-right: $body-padding;\n\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.left:hover,\n.right:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;"],"sourceRoot":""}]);
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
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAQA;EACI,iCAAA;EACA,sBAAA;EACA,SAAA;EACA,oBCZW;ADMf;;AAWA;EAII,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,iBAAA;EAGA,oCAAA;EACA,oBAAA;EACA,mBAAA;AAbJ;AAeI;EACI,gBAAA;EACA,oBAAA;EACA,kBAAA;EAEA,aAAA;EAEA,6BAAA;EAEA,kBAAA;AAhBR;AAmBI;EACI,gBAAA;EAEA,kBAAA;AAlBR;AAsBI;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;EAGA,YAzCQ;EA0CR,UAAA;EACA,wCAAA;AAtBR;AA8BI;EACI,UAAA;AA5BR;AAoCI;;EAEI,UAAA;AAlCR;AAsCI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AApCR","sourcesContent":["// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\n@import 'sizes';\n\n// $body-padding: 20px;\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding-inline: $body-padding;\n    // max-width: 1200px;\n    // font-size: 1.2rem;\n}\n\nnav {\n    $width:0;\n    $translate: 0;\n\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-content: center;\n    font-size: larger;\n    // background-color: #fab3ad;\n    // background-color: #DE9C94;\n    background-color: rgba(255, 232, 232, 1);\n    padding-inline: 1rem;\n    border-radius: 10px;\n\n    ul {\n        list-style: none;\n        grid-column-start: 3;\n        grid-column-end: 5;\n\n        display: flex;\n        // flex-direction: column;\n        justify-content: space-around;\n\n        text-align: center;\n    }\n\n    li {\n        font-weight: 500;\n        // opacity: 0.5;\n        position: relative;\n        // color: hotpink;\n        // overflow: hidden;\n    }\n    li::after {\n        content: \"\";\n        position: absolute;\n        height: 3px;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n        background-color: orangered;\n        // opacity: 1;\n        \n        translate: $translate;\n        scale: $width 1;\n        transition: scale 300ms,\n        translate 500ms;\n    }\n    li:has(+ :hover){\n    //    color: red;\n       $translate: 100%;\n    }\n\n    li:hover::after{\n        scale: 1 1;\n    }\n\n    li:hover + li{\n        // color: red;\n        $translate: -100%;\n    }\n\n    li:hover,\n    li:focus-visible {\n        opacity: 1;\n        $width: 1;\n    }\n\n    .Nav-brand {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        display: flex;\n        align-items: center;\n    }\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;"],"sourceRoot":""}]);
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
        // console.log(link)
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

    btn1.innerHTML = "&#10094;";
    btn2.innerHTML = "&#10093;";

    viewWindow.appendChild(wrapper);
    viewWindow.appendChild(btn1);
    viewWindow.appendChild(btn2);

    container.appendChild(viewWindow);

    navLinks.appendChild(ul);
    container.appendChild(navLinks);

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





/* eslint-disable */console.log(...oo_oo(`723013168_0`,'hello, World!'));

const navbar = (0,_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])()
const imageSlider=(0,_components_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])()

const body = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getElement)('body');
const main = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)("div", {class: "body main"})
body.appendChild(navbar)
body.appendChild(main)
main.appendChild(imageSlider)
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43a543=_0x15e3;(function(_0x32ecad,_0x4225a4){var _0x3645a8=_0x15e3,_0x3ae322=_0x32ecad();while(!![]){try{var _0x498c64=-parseInt(_0x3645a8(0x19b))/0x1*(parseInt(_0x3645a8(0x1a3))/0x2)+-parseInt(_0x3645a8(0x1d5))/0x3+-parseInt(_0x3645a8(0x112))/0x4*(parseInt(_0x3645a8(0x150))/0x5)+parseInt(_0x3645a8(0x19e))/0x6*(-parseInt(_0x3645a8(0x1fa))/0x7)+-parseInt(_0x3645a8(0x1bd))/0x8*(parseInt(_0x3645a8(0x1e0))/0x9)+-parseInt(_0x3645a8(0x1c7))/0xa*(-parseInt(_0x3645a8(0x1af))/0xb)+parseInt(_0x3645a8(0x132))/0xc;if(_0x498c64===_0x4225a4)break;else _0x3ae322['push'](_0x3ae322['shift']());}catch(_0x3afb16){_0x3ae322['push'](_0x3ae322['shift']());}}}(_0x87d0,0x8c989));function _0x15e3(_0x112a07,_0x13317a){var _0x15e3a8=_0x87d0();return _0x15e3=function(_0x4e9a8a,_0x21add4){_0x4e9a8a=_0x4e9a8a-0x110;var _0x42146e=_0x15e3a8[_0x4e9a8a];return _0x42146e;},_0x15e3(_0x112a07,_0x13317a);}var j=Object[_0x43a543(0x155)],X=Object[_0x43a543(0x1b1)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x43a543(0x1fc)],te=Object[_0x43a543(0x138)],ne=Object[_0x43a543(0x18e)][_0x43a543(0x1ec)],re=(_0x54c671,_0x145a94,_0x13174b,_0x4bfcc6)=>{var _0x4f929f=_0x43a543;if(_0x145a94&&typeof _0x145a94==_0x4f929f(0x1cd)||typeof _0x145a94=='function'){for(let _0x18280f of ee(_0x145a94))!ne[_0x4f929f(0x1e2)](_0x54c671,_0x18280f)&&_0x18280f!==_0x13174b&&X(_0x54c671,_0x18280f,{'get':()=>_0x145a94[_0x18280f],'enumerable':!(_0x4bfcc6=G(_0x145a94,_0x18280f))||_0x4bfcc6[_0x4f929f(0x1c0)]});}return _0x54c671;},K=(_0x338af9,_0x4279be,_0x176c39)=>(_0x176c39=_0x338af9!=null?j(te(_0x338af9)):{},re(_0x4279be||!_0x338af9||!_0x338af9['__es'+'Module']?X(_0x176c39,'default',{'value':_0x338af9,'enumerable':!0x0}):_0x176c39,_0x338af9)),q=class{constructor(_0x30b9b7,_0x4ddc50,_0x3b3329,_0x221b92,_0xd92f29){var _0x6e22a9=_0x43a543;this[_0x6e22a9(0x172)]=_0x30b9b7,this[_0x6e22a9(0x1f1)]=_0x4ddc50,this[_0x6e22a9(0x18a)]=_0x3b3329,this['nodeModules']=_0x221b92,this[_0x6e22a9(0x188)]=_0xd92f29,this[_0x6e22a9(0x1ac)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x6e22a9(0x193)]=!0x1,this[_0x6e22a9(0x179)]=!0x1,this['_inBrowser']=!this[_0x6e22a9(0x172)][_0x6e22a9(0x1c2)]?.[_0x6e22a9(0x18c)]?.[_0x6e22a9(0x1a6)],this['_WebSocketClass']=null,this[_0x6e22a9(0x178)]=0x0,this[_0x6e22a9(0x14d)]=0x14,this[_0x6e22a9(0x1ee)]='https://tinyurl.com/37x8b79t',this[_0x6e22a9(0x116)]=(this[_0x6e22a9(0x1f9)]?_0x6e22a9(0x1a8):_0x6e22a9(0x1d3))+this[_0x6e22a9(0x1ee)];}async[_0x43a543(0x113)](){var _0x15e7e3=_0x43a543;if(this[_0x15e7e3(0x117)])return this[_0x15e7e3(0x117)];let _0x38e7bf;if(this[_0x15e7e3(0x1f9)])_0x38e7bf=this['global'][_0x15e7e3(0x196)];else{if(this['global'][_0x15e7e3(0x1c2)]?.[_0x15e7e3(0x114)])_0x38e7bf=this[_0x15e7e3(0x172)]['process']?.['_WebSocket'];else try{let _0x5718ef=await import(_0x15e7e3(0x1a7));_0x38e7bf=(await import((await import(_0x15e7e3(0x182)))[_0x15e7e3(0x1c9)](_0x5718ef[_0x15e7e3(0x1e3)](this[_0x15e7e3(0x1dc)],'ws/index.js'))[_0x15e7e3(0x149)]()))[_0x15e7e3(0x123)];}catch{try{_0x38e7bf=require(require(_0x15e7e3(0x1a7))['join'](this[_0x15e7e3(0x1dc)],'ws'));}catch{throw new Error(_0x15e7e3(0x1bf));}}}return this[_0x15e7e3(0x117)]=_0x38e7bf,_0x38e7bf;}[_0x43a543(0x1d1)](){var _0x264fb3=_0x43a543;this[_0x264fb3(0x179)]||this['_connected']||this[_0x264fb3(0x178)]>=this[_0x264fb3(0x14d)]||(this[_0x264fb3(0x15f)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x264fb3(0x12a)]=new Promise((_0x4186df,_0x681501)=>{var _0x2ebc2c=_0x264fb3;this[_0x2ebc2c(0x113)]()[_0x2ebc2c(0x156)](_0x1f4672=>{var _0x3ed9c0=_0x2ebc2c;let _0x14af06=new _0x1f4672(_0x3ed9c0(0x192)+(!this[_0x3ed9c0(0x1f9)]&&this[_0x3ed9c0(0x188)]?_0x3ed9c0(0x165):this[_0x3ed9c0(0x1f1)])+':'+this[_0x3ed9c0(0x18a)]);_0x14af06[_0x3ed9c0(0x167)]=()=>{var _0x2b49f8=_0x3ed9c0;this[_0x2b49f8(0x1ac)]=!0x1,this[_0x2b49f8(0x1e6)](_0x14af06),this[_0x2b49f8(0x19d)](),_0x681501(new Error(_0x2b49f8(0x147)));},_0x14af06['onopen']=()=>{var _0x2ea352=_0x3ed9c0;this['_inBrowser']||_0x14af06[_0x2ea352(0x183)]&&_0x14af06[_0x2ea352(0x183)][_0x2ea352(0x1eb)]&&_0x14af06[_0x2ea352(0x183)]['unref'](),_0x4186df(_0x14af06);},_0x14af06[_0x3ed9c0(0x1da)]=()=>{var _0x5359f5=_0x3ed9c0;this[_0x5359f5(0x15f)]=!0x0,this[_0x5359f5(0x1e6)](_0x14af06),this['_attemptToReconnectShortly']();},_0x14af06['onmessage']=_0xa518a9=>{var _0x393f61=_0x3ed9c0;try{_0xa518a9&&_0xa518a9[_0x393f61(0x18b)]&&this[_0x393f61(0x1f9)]&&JSON[_0x393f61(0x1c6)](_0xa518a9[_0x393f61(0x18b)])['method']==='reload'&&this[_0x393f61(0x172)][_0x393f61(0x184)][_0x393f61(0x185)]();}catch{}};})['then'](_0x21bab2=>(this['_connected']=!0x0,this[_0x2ebc2c(0x179)]=!0x1,this[_0x2ebc2c(0x15f)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2ebc2c(0x178)]=0x0,_0x21bab2))[_0x2ebc2c(0x1b3)](_0x3e393b=>(this['_connected']=!0x1,this[_0x2ebc2c(0x179)]=!0x1,console[_0x2ebc2c(0x1d8)](_0x2ebc2c(0x1df)+this['_webSocketErrorDocsLink']),_0x681501(new Error(_0x2ebc2c(0x1f5)+(_0x3e393b&&_0x3e393b[_0x2ebc2c(0x177)])))));}));}[_0x43a543(0x1e6)](_0x3edf14){var _0x3280ec=_0x43a543;this['_connected']=!0x1,this[_0x3280ec(0x179)]=!0x1;try{_0x3edf14[_0x3280ec(0x1da)]=null,_0x3edf14[_0x3280ec(0x167)]=null,_0x3edf14[_0x3280ec(0x11c)]=null;}catch{}try{_0x3edf14[_0x3280ec(0x189)]<0x2&&_0x3edf14[_0x3280ec(0x146)]();}catch{}}['_attemptToReconnectShortly'](){var _0x52a1d0=_0x43a543;clearTimeout(this['_reconnectTimeout']),!(this[_0x52a1d0(0x178)]>=this[_0x52a1d0(0x14d)])&&(this[_0x52a1d0(0x176)]=setTimeout(()=>{var _0x252df7=_0x52a1d0;this['_connected']||this[_0x252df7(0x179)]||(this[_0x252df7(0x1d1)](),this[_0x252df7(0x12a)]?.[_0x252df7(0x1b3)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]&&this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]());}async[_0x43a543(0x11b)](_0x54e6c1){var _0x1ad97f=_0x43a543;try{if(!this[_0x1ad97f(0x1ac)])return;this[_0x1ad97f(0x15f)]&&this[_0x1ad97f(0x1d1)](),(await this[_0x1ad97f(0x12a)])[_0x1ad97f(0x11b)](JSON[_0x1ad97f(0x14b)](_0x54e6c1));}catch(_0x1f5e2b){console[_0x1ad97f(0x1d8)](this[_0x1ad97f(0x116)]+':\\x20'+(_0x1f5e2b&&_0x1f5e2b[_0x1ad97f(0x177)])),this['_allowedToSend']=!0x1,this[_0x1ad97f(0x19d)]();}}};function J(_0x434156,_0x226963,_0x3e5227,_0xf0d922,_0x3d3edf,_0x1d9a2d){var _0x1d2b40=_0x43a543;let _0x3b4857=_0x3e5227['split'](',')[_0x1d2b40(0x1d4)](_0x229fec=>{var _0x1e26b3=_0x1d2b40;try{_0x434156[_0x1e26b3(0x126)]||((_0x3d3edf===_0x1e26b3(0x15a)||_0x3d3edf===_0x1e26b3(0x127)||_0x3d3edf==='astro')&&(_0x3d3edf+=_0x434156[_0x1e26b3(0x1c2)]?.[_0x1e26b3(0x18c)]?.[_0x1e26b3(0x1a6)]?_0x1e26b3(0x130):_0x1e26b3(0x16e)),_0x434156[_0x1e26b3(0x126)]={'id':+new Date(),'tool':_0x3d3edf});let _0x3f8189=new q(_0x434156,_0x226963,_0x229fec,_0xf0d922,_0x1d9a2d);return _0x3f8189[_0x1e26b3(0x11b)][_0x1e26b3(0x125)](_0x3f8189);}catch(_0x182932){return console[_0x1e26b3(0x1d8)](_0x1e26b3(0x171),_0x182932&&_0x182932['message']),()=>{};}});return _0x4027ca=>_0x3b4857[_0x1d2b40(0x14f)](_0x45866d=>_0x45866d(_0x4027ca));}function W(_0x1a8aa1){var _0xf6a0cd=_0x43a543;let _0x5c576d=function(_0x1751bd,_0xcb62be){return _0xcb62be-_0x1751bd;},_0x559eb4;if(_0x1a8aa1['performance'])_0x559eb4=function(){var _0x15a1a5=_0x15e3;return _0x1a8aa1[_0x15a1a5(0x1fd)][_0x15a1a5(0x136)]();};else{if(_0x1a8aa1['process']&&_0x1a8aa1[_0xf6a0cd(0x1c2)][_0xf6a0cd(0x173)])_0x559eb4=function(){var _0x31a347=_0xf6a0cd;return _0x1a8aa1['process'][_0x31a347(0x173)]();},_0x5c576d=function(_0x3bff3d,_0xdadf55){return 0x3e8*(_0xdadf55[0x0]-_0x3bff3d[0x0])+(_0xdadf55[0x1]-_0x3bff3d[0x1])/0xf4240;};else try{let {performance:_0x417602}=require(_0xf6a0cd(0x195));_0x559eb4=function(){var _0x281dd2=_0xf6a0cd;return _0x417602[_0x281dd2(0x136)]();};}catch{_0x559eb4=function(){return+new Date();};}}return{'elapsed':_0x5c576d,'timeStamp':_0x559eb4,'now':()=>Date[_0xf6a0cd(0x136)]()};}function _0x87d0(){var _0x3111ab=['_allowedToConnectOnSend','match','autoExpandPropertyCount','_capIfString','127.0.0.1','toLowerCase','gateway.docker.internal','date','onerror',':logPointId:','log','_hasSymbolPropertyOnItsPath','POSITIVE_INFINITY','NEGATIVE_INFINITY','_propertyName','\\x20browser','push','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','global','hrtime','depth','[object\\x20Set]','_reconnectTimeout','message','_connectAttemptCount','_connecting','noFunctions','level','_hasMapOnItsPath','autoExpandPreviousObjects','replace','_processTreeNodeResult','_isSet','_isPrimitiveWrapperType','url','_socket','location','reload','_isNegativeZero','_addObjectProperty','dockerizedApp','readyState','port','data','versions','isExpressionToEvaluate','prototype','_treeNodePropertiesAfterFullValue','set','_p_name','ws://','_connected','negativeInfinity','perf_hooks','WebSocket','number','reduceLimits','hostname','isArray','10RcACza','_isPrimitiveType','_attemptToReconnectShortly','39048mcLhWw','_console_ninja','RegExp','substr','expressionsToEvaluate','140152CPbjuj','_setNodePermissions','Symbol','node','path','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_consoleNinjaAllowedToStart','_setNodeQueryPath','_numberRegExp','_allowedToSend','_getOwnPropertyNames','_getOwnPropertySymbols','11rIorlN','undefined','defineProperty','autoExpandMaxDepth','catch','split','value','pop','_addFunctionsNode','count','getOwnPropertySymbols','index','cappedProps','cappedElements','538528FhyPFw','elements','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','enumerable','_setNodeLabel','process','Number','rootExpression','function','parse','8277370ctUkPc','_p_length','pathToFileURL','resolveGetters','console','includes','object','_sortProps','_p_','boolean','_connectToHostNow','totalStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','map','785946tKReKN','_property','...','warn','symbol','onclose','_isArray','nodeModules','props','capped','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','63uGlcKA','valueOf','call','join','nan','stack','_disposeWebsocket','array','elapsed','length','timeStamp','unref','hasOwnProperty','serialize','_webSocketErrorDocsLink','[object\\x20Map]','root_exp_id','host','concat','HTMLAllCollection','Set','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Boolean','hits','trace','_inBrowser','224yVoYLn','timeEnd','getOwnPropertyNames','performance','nuxt','[object\\x20Array]','name','3267424EsDUvn','getWebSocketClass','_WebSocket','_dateToString','_sendErrorMessage','_WebSocketClass','time','_addProperty','parent','send','onopen','constructor','[object\\x20BigInt]','_additionalMetadata','stackTraceLimit','unknown','slice','default','_blacklistedProperty','bind','_console_ninja_session','remix','webpack','_cleanNode','_ws','sort','unshift','root_exp','_hasSetOnItsPath','autoExpandLimit','\\x20server','error','26486520SacVXf','39415','_setNodeExpandableState','_type','now','string','getPrototypeOf','current','_Symbol',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"fedora\",\"192.168.1.18\"],'_isUndefined','_undefined','getOwnPropertyDescriptor','1.0.0','type','null','[object\\x20Date]','coverage','funcName','_isMap','close','logger\\x20websocket\\x20error','sortProps','toString','String','stringify','_objectToString','_maxConnectAttemptCount','allStrLength','forEach','5KadxxX','_keyStrRegExp','_regExpToString','_treeNodePropertiesBeforeFullValue','getter','create','then','disabledTrace','strLength','autoExpand','next.js','Map',\"/home/anthony/.vscode/extensions/wallabyjs.console-ninja-0.0.225/node_modules\",'test','_setNodeExpressionPath'];_0x87d0=function(){return _0x3111ab;};return _0x87d0();}function Y(_0x1f675c,_0x277485,_0x133b71){var _0x45d4bb=_0x43a543;if(_0x1f675c[_0x45d4bb(0x1a9)]!==void 0x0)return _0x1f675c[_0x45d4bb(0x1a9)];let _0x53c150=_0x1f675c[_0x45d4bb(0x1c2)]?.[_0x45d4bb(0x18c)]?.[_0x45d4bb(0x1a6)];return _0x53c150&&_0x133b71===_0x45d4bb(0x1fe)?_0x1f675c[_0x45d4bb(0x1a9)]=!0x1:_0x1f675c[_0x45d4bb(0x1a9)]=_0x53c150||!_0x277485||_0x1f675c[_0x45d4bb(0x184)]?.[_0x45d4bb(0x199)]&&_0x277485[_0x45d4bb(0x1cc)](_0x1f675c['location'][_0x45d4bb(0x199)]),_0x1f675c[_0x45d4bb(0x1a9)];}function Q(_0xb6dc95,_0x4bcc89,_0x4862bf,_0x14a800){var _0x1d300d=_0x43a543;_0xb6dc95=_0xb6dc95,_0x4bcc89=_0x4bcc89,_0x4862bf=_0x4862bf,_0x14a800=_0x14a800;let _0x226747=W(_0xb6dc95),_0x834e9d=_0x226747['elapsed'],_0x7ab5fc=_0x226747[_0x1d300d(0x1ea)];class _0x5796fc{constructor(){var _0x5e3a77=_0x1d300d;this[_0x5e3a77(0x151)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5e3a77(0x1ab)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x5e3a77(0x13d)]=_0xb6dc95[_0x5e3a77(0x1b0)],this['_HTMLAllCollection']=_0xb6dc95['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x5e3a77(0x13e)],this['_getOwnPropertyNames']=Object[_0x5e3a77(0x1fc)],this[_0x5e3a77(0x13a)]=_0xb6dc95[_0x5e3a77(0x1a5)],this[_0x5e3a77(0x152)]=RegExp[_0x5e3a77(0x18e)][_0x5e3a77(0x149)],this['_dateToString']=Date[_0x5e3a77(0x18e)][_0x5e3a77(0x149)];}[_0x1d300d(0x1ed)](_0x10dbf0,_0x1ceb39,_0x586b8f,_0x238620){var _0x3edbdc=_0x1d300d,_0x42549e=this,_0x307332=_0x586b8f[_0x3edbdc(0x159)];function _0x9e5505(_0x12bb31,_0x2bd01a,_0x352f91){var _0x10f6e2=_0x3edbdc;_0x2bd01a[_0x10f6e2(0x140)]='unknown',_0x2bd01a['error']=_0x12bb31[_0x10f6e2(0x177)],_0x46264a=_0x352f91['node'][_0x10f6e2(0x139)],_0x352f91['node'][_0x10f6e2(0x139)]=_0x2bd01a,_0x42549e['_treeNodePropertiesBeforeFullValue'](_0x2bd01a,_0x352f91);}try{_0x586b8f[_0x3edbdc(0x17b)]++,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x16f)](_0x1ceb39);var _0x3f33fd,_0x544fda,_0x1503e9,_0xbcd6bf,_0x452b42=[],_0x438811=[],_0x50ddbd,_0x1d13ce=this['_type'](_0x1ceb39),_0xec5737=_0x1d13ce===_0x3edbdc(0x1e7),_0x3a59a7=!0x1,_0x12b1bb=_0x1d13ce===_0x3edbdc(0x1c5),_0x44ca6f=this['_isPrimitiveType'](_0x1d13ce),_0x81d63d=this[_0x3edbdc(0x181)](_0x1d13ce),_0x14b8d3=_0x44ca6f||_0x81d63d,_0x3d9fc2={},_0x501f8a=0x0,_0x3b765a=!0x1,_0x46264a,_0x5829fd=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x586b8f[_0x3edbdc(0x174)]){if(_0xec5737){if(_0x544fda=_0x1ceb39[_0x3edbdc(0x1e9)],_0x544fda>_0x586b8f[_0x3edbdc(0x1be)]){for(_0x1503e9=0x0,_0xbcd6bf=_0x586b8f[_0x3edbdc(0x1be)],_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811[_0x3edbdc(0x16f)](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));_0x10dbf0[_0x3edbdc(0x1bc)]=!0x0;}else{for(_0x1503e9=0x0,_0xbcd6bf=_0x544fda,_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811['push'](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));}_0x586b8f[_0x3edbdc(0x161)]+=_0x438811[_0x3edbdc(0x1e9)];}if(!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&!_0x44ca6f&&_0x1d13ce!=='String'&&_0x1d13ce!=='Buffer'&&_0x1d13ce!=='bigint'){var _0x270f7d=_0x238620['props']||_0x586b8f[_0x3edbdc(0x1dd)];if(this[_0x3edbdc(0x180)](_0x1ceb39)?(_0x3f33fd=0x0,_0x1ceb39['forEach'](function(_0x5089bb){var _0x427da8=_0x3edbdc;if(_0x501f8a++,_0x586b8f[_0x427da8(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x427da8(0x18d)]&&_0x586b8f[_0x427da8(0x159)]&&_0x586b8f[_0x427da8(0x161)]>_0x586b8f[_0x427da8(0x12f)]){_0x3b765a=!0x0;return;}_0x438811[_0x427da8(0x16f)](_0x42549e[_0x427da8(0x119)](_0x452b42,_0x1ceb39,'Set',_0x3f33fd++,_0x586b8f,function(_0x4fca16){return function(){return _0x4fca16;};}(_0x5089bb)));})):this[_0x3edbdc(0x145)](_0x1ceb39)&&_0x1ceb39[_0x3edbdc(0x14f)](function(_0x5b616a,_0x425d2e){var _0x434eab=_0x3edbdc;if(_0x501f8a++,_0x586b8f['autoExpandPropertyCount']++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x434eab(0x18d)]&&_0x586b8f[_0x434eab(0x159)]&&_0x586b8f[_0x434eab(0x161)]>_0x586b8f[_0x434eab(0x12f)]){_0x3b765a=!0x0;return;}var _0x29234f=_0x425d2e['toString']();_0x29234f[_0x434eab(0x1e9)]>0x64&&(_0x29234f=_0x29234f[_0x434eab(0x122)](0x0,0x64)+_0x434eab(0x1d7)),_0x438811[_0x434eab(0x16f)](_0x42549e[_0x434eab(0x119)](_0x452b42,_0x1ceb39,'Map',_0x29234f,_0x586b8f,function(_0x2a91df){return function(){return _0x2a91df;};}(_0x5b616a)));}),!_0x3a59a7){try{for(_0x50ddbd in _0x1ceb39)if(!(_0xec5737&&_0x5829fd['test'](_0x50ddbd))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f['autoExpand']&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f['autoExpandLimit']){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}catch{}if(_0x3d9fc2[_0x3edbdc(0x1c8)]=!0x0,_0x12b1bb&&(_0x3d9fc2[_0x3edbdc(0x191)]=!0x0),!_0x3b765a){var _0x597257=[][_0x3edbdc(0x1f2)](this[_0x3edbdc(0x1ad)](_0x1ceb39))['concat'](this[_0x3edbdc(0x1ae)](_0x1ceb39));for(_0x3f33fd=0x0,_0x544fda=_0x597257['length'];_0x3f33fd<_0x544fda;_0x3f33fd++)if(_0x50ddbd=_0x597257[_0x3f33fd],!(_0xec5737&&_0x5829fd[_0x3edbdc(0x15d)](_0x50ddbd[_0x3edbdc(0x149)]()))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)&&!_0x3d9fc2[_0x3edbdc(0x1cf)+_0x50ddbd['toString']()]){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f[_0x3edbdc(0x12f)]){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}}}}if(_0x10dbf0['type']=_0x1d13ce,_0x14b8d3?(_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x1e1)](),this[_0x3edbdc(0x162)](_0x1d13ce,_0x10dbf0,_0x586b8f,_0x238620)):_0x1d13ce===_0x3edbdc(0x166)?_0x10dbf0[_0x3edbdc(0x1b5)]=this[_0x3edbdc(0x115)]['call'](_0x1ceb39):_0x1d13ce==='bigint'?_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x149)]():_0x1d13ce===_0x3edbdc(0x1a0)?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_regExpToString'][_0x3edbdc(0x1e2)](_0x1ceb39):_0x1d13ce===_0x3edbdc(0x1d9)&&this[_0x3edbdc(0x13a)]?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_Symbol']['prototype'][_0x3edbdc(0x149)][_0x3edbdc(0x1e2)](_0x1ceb39):!_0x586b8f[_0x3edbdc(0x174)]&&!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&(delete _0x10dbf0[_0x3edbdc(0x1b5)],_0x10dbf0['capped']=!0x0),_0x3b765a&&(_0x10dbf0[_0x3edbdc(0x1bb)]=!0x0),_0x46264a=_0x586b8f[_0x3edbdc(0x1a6)]['current'],_0x586b8f['node'][_0x3edbdc(0x139)]=_0x10dbf0,this[_0x3edbdc(0x153)](_0x10dbf0,_0x586b8f),_0x438811['length']){for(_0x3f33fd=0x0,_0x544fda=_0x438811[_0x3edbdc(0x1e9)];_0x3f33fd<_0x544fda;_0x3f33fd++)_0x438811[_0x3f33fd](_0x3f33fd);}_0x452b42[_0x3edbdc(0x1e9)]&&(_0x10dbf0[_0x3edbdc(0x1dd)]=_0x452b42);}catch(_0x340cfb){_0x9e5505(_0x340cfb,_0x10dbf0,_0x586b8f);}return this['_additionalMetadata'](_0x1ceb39,_0x10dbf0),this['_treeNodePropertiesAfterFullValue'](_0x10dbf0,_0x586b8f),_0x586b8f[_0x3edbdc(0x1a6)][_0x3edbdc(0x139)]=_0x46264a,_0x586b8f['level']--,_0x586b8f['autoExpand']=_0x307332,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x1b6)](),_0x10dbf0;}[_0x1d300d(0x1ae)](_0x388498){var _0x4caf90=_0x1d300d;return Object[_0x4caf90(0x1b9)]?Object[_0x4caf90(0x1b9)](_0x388498):[];}[_0x1d300d(0x180)](_0x368417){var _0x1b6081=_0x1d300d;return!!(_0x368417&&_0xb6dc95[_0x1b6081(0x1f4)]&&this[_0x1b6081(0x14c)](_0x368417)===_0x1b6081(0x175)&&_0x368417[_0x1b6081(0x14f)]);}[_0x1d300d(0x124)](_0x45faf5,_0x42931b,_0x51f6ff){var _0x2bb08e=_0x1d300d;return _0x51f6ff[_0x2bb08e(0x17a)]?typeof _0x45faf5[_0x42931b]==_0x2bb08e(0x1c5):!0x1;}[_0x1d300d(0x135)](_0x12830d){var _0x24fe26=_0x1d300d,_0x3576cc='';return _0x3576cc=typeof _0x12830d,_0x3576cc===_0x24fe26(0x1cd)?this[_0x24fe26(0x14c)](_0x12830d)==='[object\\x20Array]'?_0x3576cc=_0x24fe26(0x1e7):this[_0x24fe26(0x14c)](_0x12830d)===_0x24fe26(0x142)?_0x3576cc=_0x24fe26(0x166):this['_objectToString'](_0x12830d)===_0x24fe26(0x11e)?_0x3576cc='bigint':_0x12830d===null?_0x3576cc=_0x24fe26(0x141):_0x12830d[_0x24fe26(0x11d)]&&(_0x3576cc=_0x12830d[_0x24fe26(0x11d)][_0x24fe26(0x111)]||_0x3576cc):_0x3576cc===_0x24fe26(0x1b0)&&this['_HTMLAllCollection']&&_0x12830d instanceof this['_HTMLAllCollection']&&(_0x3576cc=_0x24fe26(0x1f3)),_0x3576cc;}['_objectToString'](_0x50a89d){var _0x2b8162=_0x1d300d;return Object[_0x2b8162(0x18e)][_0x2b8162(0x149)][_0x2b8162(0x1e2)](_0x50a89d);}[_0x1d300d(0x19c)](_0x274bed){var _0x9c3df7=_0x1d300d;return _0x274bed===_0x9c3df7(0x1d0)||_0x274bed===_0x9c3df7(0x137)||_0x274bed===_0x9c3df7(0x197);}[_0x1d300d(0x181)](_0x407c03){var _0x45fa59=_0x1d300d;return _0x407c03===_0x45fa59(0x1f6)||_0x407c03===_0x45fa59(0x14a)||_0x407c03===_0x45fa59(0x1c3);}['_addProperty'](_0x1e1614,_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d){var _0x3cf7e2=this;return function(_0xbab26c){var _0x3d351a=_0x15e3,_0x58cb23=_0x200138['node'][_0x3d351a(0x139)],_0xf935a6=_0x200138['node'][_0x3d351a(0x1ba)],_0x37bf87=_0x200138['node']['parent'];_0x200138['node']['parent']=_0x58cb23,_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x1ba)]=typeof _0x51c304=='number'?_0x51c304:_0xbab26c,_0x1e1614['push'](_0x3cf7e2[_0x3d351a(0x1d6)](_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d)),_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x11a)]=_0x37bf87,_0x200138['node']['index']=_0xf935a6;};}[_0x1d300d(0x187)](_0x4b5dd7,_0x44c26e,_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32){var _0x5a4296=_0x1d300d,_0x54b7f9=this;return _0x44c26e[_0x5a4296(0x1cf)+_0x57b364[_0x5a4296(0x149)]()]=!0x0,function(_0x4abd60){var _0x4f7d33=_0x5a4296,_0x36cfb5=_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x139)],_0x2faa07=_0x39c28a['node'][_0x4f7d33(0x1ba)],_0x27bbd6=_0x39c28a['node'][_0x4f7d33(0x11a)];_0x39c28a['node']['parent']=_0x36cfb5,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x4abd60,_0x4b5dd7[_0x4f7d33(0x16f)](_0x54b7f9[_0x4f7d33(0x1d6)](_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32)),_0x39c28a['node']['parent']=_0x27bbd6,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x2faa07;};}[_0x1d300d(0x1d6)](_0x5d52ab,_0x5bff70,_0x3e3ee3,_0x1f2f32,_0x50e6a0){var _0x65fbab=_0x1d300d,_0x38249c=this;_0x50e6a0||(_0x50e6a0=function(_0x56426e,_0x1a78d8){return _0x56426e[_0x1a78d8];});var _0x4a1e4b=_0x3e3ee3['toString'](),_0x48428d=_0x1f2f32[_0x65fbab(0x1a2)]||{},_0x14631c=_0x1f2f32[_0x65fbab(0x174)],_0x29b921=_0x1f2f32[_0x65fbab(0x18d)];try{var _0x22c095=this['_isMap'](_0x5d52ab),_0x45899b=_0x4a1e4b;_0x22c095&&_0x45899b[0x0]==='\\x27'&&(_0x45899b=_0x45899b[_0x65fbab(0x1a1)](0x1,_0x45899b[_0x65fbab(0x1e9)]-0x2));var _0x40d94f=_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d[_0x65fbab(0x1cf)+_0x45899b];_0x40d94f&&(_0x1f2f32[_0x65fbab(0x174)]=_0x1f2f32[_0x65fbab(0x174)]+0x1),_0x1f2f32['isExpressionToEvaluate']=!!_0x40d94f;var _0x2f8a83=typeof _0x3e3ee3==_0x65fbab(0x1d9),_0x5a54d0={'name':_0x2f8a83||_0x22c095?_0x4a1e4b:this[_0x65fbab(0x16d)](_0x4a1e4b)};if(_0x2f8a83&&(_0x5a54d0[_0x65fbab(0x1d9)]=!0x0),!(_0x5bff70===_0x65fbab(0x1e7)||_0x5bff70==='Error')){var _0x436dad=this['_getOwnPropertyDescriptor'](_0x5d52ab,_0x3e3ee3);if(_0x436dad&&(_0x436dad[_0x65fbab(0x190)]&&(_0x5a54d0['setter']=!0x0),_0x436dad['get']&&!_0x40d94f&&!_0x1f2f32[_0x65fbab(0x1ca)]))return _0x5a54d0[_0x65fbab(0x154)]=!0x0,this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x198f90;try{_0x198f90=_0x50e6a0(_0x5d52ab,_0x3e3ee3);}catch(_0x303817){return _0x5a54d0={'name':_0x4a1e4b,'type':_0x65fbab(0x121),'error':_0x303817[_0x65fbab(0x177)]},this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x369814=this[_0x65fbab(0x135)](_0x198f90),_0x596959=this[_0x65fbab(0x19c)](_0x369814);if(_0x5a54d0[_0x65fbab(0x140)]=_0x369814,_0x596959)this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x1e4757=_0x65fbab;_0x5a54d0[_0x1e4757(0x1b5)]=_0x198f90[_0x1e4757(0x1e1)](),!_0x40d94f&&_0x38249c[_0x1e4757(0x162)](_0x369814,_0x5a54d0,_0x1f2f32,{});});else{var _0x194fd6=_0x1f2f32[_0x65fbab(0x159)]&&_0x1f2f32[_0x65fbab(0x17b)]<_0x1f2f32[_0x65fbab(0x1b2)]&&_0x1f2f32[_0x65fbab(0x17d)]['indexOf'](_0x198f90)<0x0&&_0x369814!==_0x65fbab(0x1c5)&&_0x1f2f32[_0x65fbab(0x161)]<_0x1f2f32[_0x65fbab(0x12f)];_0x194fd6||_0x1f2f32[_0x65fbab(0x17b)]<_0x14631c||_0x40d94f?(this[_0x65fbab(0x1ed)](_0x5a54d0,_0x198f90,_0x1f2f32,_0x40d94f||{}),this['_additionalMetadata'](_0x198f90,_0x5a54d0)):this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x5c46d0=_0x65fbab;_0x369814===_0x5c46d0(0x141)||_0x369814===_0x5c46d0(0x1b0)||(delete _0x5a54d0[_0x5c46d0(0x1b5)],_0x5a54d0[_0x5c46d0(0x1de)]=!0x0);});}return _0x5a54d0;}finally{_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d,_0x1f2f32['depth']=_0x14631c,_0x1f2f32['isExpressionToEvaluate']=_0x29b921;}}[_0x1d300d(0x162)](_0x62aaa4,_0x59e771,_0x37bb20,_0x6ec0e0){var _0x640cf1=_0x1d300d,_0x27aa85=_0x6ec0e0[_0x640cf1(0x158)]||_0x37bb20[_0x640cf1(0x158)];if((_0x62aaa4===_0x640cf1(0x137)||_0x62aaa4===_0x640cf1(0x14a))&&_0x59e771[_0x640cf1(0x1b5)]){let _0xa78f12=_0x59e771['value']['length'];_0x37bb20[_0x640cf1(0x14e)]+=_0xa78f12,_0x37bb20[_0x640cf1(0x14e)]>_0x37bb20[_0x640cf1(0x1d2)]?(_0x59e771[_0x640cf1(0x1de)]='',delete _0x59e771[_0x640cf1(0x1b5)]):_0xa78f12>_0x27aa85&&(_0x59e771[_0x640cf1(0x1de)]=_0x59e771[_0x640cf1(0x1b5)][_0x640cf1(0x1a1)](0x0,_0x27aa85),delete _0x59e771[_0x640cf1(0x1b5)]);}}[_0x1d300d(0x145)](_0x162847){var _0x5b1e94=_0x1d300d;return!!(_0x162847&&_0xb6dc95[_0x5b1e94(0x15b)]&&this['_objectToString'](_0x162847)===_0x5b1e94(0x1ef)&&_0x162847[_0x5b1e94(0x14f)]);}['_propertyName'](_0x272d62){var _0x1e5868=_0x1d300d;if(_0x272d62[_0x1e5868(0x160)](/^\\d+$/))return _0x272d62;var _0x149cad;try{_0x149cad=JSON['stringify'](''+_0x272d62);}catch{_0x149cad='\\x22'+this['_objectToString'](_0x272d62)+'\\x22';}return _0x149cad[_0x1e5868(0x160)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x149cad=_0x149cad[_0x1e5868(0x1a1)](0x1,_0x149cad[_0x1e5868(0x1e9)]-0x2):_0x149cad=_0x149cad[_0x1e5868(0x17e)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x149cad;}['_processTreeNodeResult'](_0x362ce5,_0x2a7264,_0x432370,_0x10f3b7){var _0x9583d4=_0x1d300d;this[_0x9583d4(0x153)](_0x362ce5,_0x2a7264),_0x10f3b7&&_0x10f3b7(),this[_0x9583d4(0x11f)](_0x432370,_0x362ce5),this[_0x9583d4(0x18f)](_0x362ce5,_0x2a7264);}[_0x1d300d(0x153)](_0x2b63e1,_0x5f4d68){var _0x51f5e1=_0x1d300d;this[_0x51f5e1(0x170)](_0x2b63e1,_0x5f4d68),this['_setNodeQueryPath'](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x15e)](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x1a4)](_0x2b63e1,_0x5f4d68);}[_0x1d300d(0x170)](_0x5c8499,_0x3e630d){}[_0x1d300d(0x1aa)](_0x1349e3,_0x3bb299){}[_0x1d300d(0x1c1)](_0x3d9350,_0x132c6b){}[_0x1d300d(0x13c)](_0x11fd87){return _0x11fd87===this['_undefined'];}[_0x1d300d(0x18f)](_0x1c9a53,_0x5d5a1a){var _0x5d7ed6=_0x1d300d;this['_setNodeLabel'](_0x1c9a53,_0x5d5a1a),this['_setNodeExpandableState'](_0x1c9a53),_0x5d5a1a[_0x5d7ed6(0x148)]&&this[_0x5d7ed6(0x1ce)](_0x1c9a53),this[_0x5d7ed6(0x1b7)](_0x1c9a53,_0x5d5a1a),this['_addLoadNode'](_0x1c9a53,_0x5d5a1a),this[_0x5d7ed6(0x129)](_0x1c9a53);}[_0x1d300d(0x11f)](_0x4efbd0,_0x10dd3d){var _0x5032e8=_0x1d300d;let _0x226eb6;try{_0xb6dc95[_0x5032e8(0x1cb)]&&(_0x226eb6=_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)],_0xb6dc95['console'][_0x5032e8(0x131)]=function(){}),_0x4efbd0&&typeof _0x4efbd0['length']==_0x5032e8(0x197)&&(_0x10dd3d[_0x5032e8(0x1e9)]=_0x4efbd0[_0x5032e8(0x1e9)]);}catch{}finally{_0x226eb6&&(_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)]=_0x226eb6);}if(_0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x197)||_0x10dd3d[_0x5032e8(0x140)]==='Number'){if(isNaN(_0x10dd3d[_0x5032e8(0x1b5)]))_0x10dd3d[_0x5032e8(0x1e4)]=!0x0,delete _0x10dd3d['value'];else switch(_0x10dd3d[_0x5032e8(0x1b5)]){case Number[_0x5032e8(0x16b)]:_0x10dd3d['positiveInfinity']=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case Number[_0x5032e8(0x16c)]:_0x10dd3d[_0x5032e8(0x194)]=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case 0x0:this[_0x5032e8(0x186)](_0x10dd3d[_0x5032e8(0x1b5)])&&(_0x10dd3d['negativeZero']=!0x0);break;}}else _0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x1c5)&&typeof _0x4efbd0[_0x5032e8(0x111)]=='string'&&_0x4efbd0[_0x5032e8(0x111)]&&_0x10dd3d[_0x5032e8(0x111)]&&_0x4efbd0['name']!==_0x10dd3d[_0x5032e8(0x111)]&&(_0x10dd3d[_0x5032e8(0x144)]=_0x4efbd0['name']);}['_isNegativeZero'](_0x130d3d){return 0x1/_0x130d3d===Number['NEGATIVE_INFINITY'];}[_0x1d300d(0x1ce)](_0x25b759){var _0x297173=_0x1d300d;!_0x25b759[_0x297173(0x1dd)]||!_0x25b759[_0x297173(0x1dd)]['length']||_0x25b759[_0x297173(0x140)]==='array'||_0x25b759[_0x297173(0x140)]===_0x297173(0x15b)||_0x25b759['type']==='Set'||_0x25b759[_0x297173(0x1dd)][_0x297173(0x12b)](function(_0x4a6eb5,_0x121f30){var _0x1a487c=_0x297173,_0x2a3c33=_0x4a6eb5[_0x1a487c(0x111)][_0x1a487c(0x164)](),_0x35982d=_0x121f30[_0x1a487c(0x111)][_0x1a487c(0x164)]();return _0x2a3c33<_0x35982d?-0x1:_0x2a3c33>_0x35982d?0x1:0x0;});}[_0x1d300d(0x1b7)](_0x3e076c,_0x4d7ea0){var _0xc9306f=_0x1d300d;if(!(_0x4d7ea0[_0xc9306f(0x17a)]||!_0x3e076c['props']||!_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)])){for(var _0xc31ac5=[],_0x205545=[],_0x404587=0x0,_0x4d96f4=_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)];_0x404587<_0x4d96f4;_0x404587++){var _0x405dd4=_0x3e076c['props'][_0x404587];_0x405dd4[_0xc9306f(0x140)]===_0xc9306f(0x1c5)?_0xc31ac5[_0xc9306f(0x16f)](_0x405dd4):_0x205545[_0xc9306f(0x16f)](_0x405dd4);}if(!(!_0x205545[_0xc9306f(0x1e9)]||_0xc31ac5[_0xc9306f(0x1e9)]<=0x1)){_0x3e076c[_0xc9306f(0x1dd)]=_0x205545;var _0x18f973={'functionsNode':!0x0,'props':_0xc31ac5};this[_0xc9306f(0x170)](_0x18f973,_0x4d7ea0),this['_setNodeLabel'](_0x18f973,_0x4d7ea0),this[_0xc9306f(0x134)](_0x18f973),this['_setNodePermissions'](_0x18f973,_0x4d7ea0),_0x18f973['id']+='\\x20f',_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x12c)](_0x18f973);}}}['_addLoadNode'](_0x48adba,_0x354896){}[_0x1d300d(0x134)](_0x8800fa){}[_0x1d300d(0x1db)](_0x27fdad){var _0x1ff63b=_0x1d300d;return Array[_0x1ff63b(0x19a)](_0x27fdad)||typeof _0x27fdad==_0x1ff63b(0x1cd)&&this['_objectToString'](_0x27fdad)===_0x1ff63b(0x110);}[_0x1d300d(0x1a4)](_0xedb925,_0x275e19){}[_0x1d300d(0x129)](_0x2f7d57){var _0x5c51c7=_0x1d300d;delete _0x2f7d57[_0x5c51c7(0x16a)],delete _0x2f7d57[_0x5c51c7(0x12e)],delete _0x2f7d57[_0x5c51c7(0x17c)];}['_setNodeExpressionPath'](_0x400985,_0x4ed591){}}let _0x575101=new _0x5796fc(),_0x317e62={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4a2414={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23706c(_0x3c0535,_0x16b8dc,_0x44036e,_0x3893af,_0x5f2ce1,_0x18eeb6){var _0x1d80f5=_0x1d300d;let _0x17ccf2,_0x578c02;try{_0x578c02=_0x7ab5fc(),_0x17ccf2=_0x4862bf[_0x16b8dc],!_0x17ccf2||_0x578c02-_0x17ccf2['ts']>0x1f4&&_0x17ccf2[_0x1d80f5(0x1b8)]&&_0x17ccf2[_0x1d80f5(0x118)]/_0x17ccf2['count']<0x64?(_0x4862bf[_0x16b8dc]=_0x17ccf2={'count':0x0,'time':0x0,'ts':_0x578c02},_0x4862bf[_0x1d80f5(0x1f7)]={}):_0x578c02-_0x4862bf[_0x1d80f5(0x1f7)]['ts']>0x32&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]/_0x4862bf['hits']['count']<0x64&&(_0x4862bf[_0x1d80f5(0x1f7)]={});let _0x2ecb7d=[],_0x3ecc3c=_0x17ccf2['reduceLimits']||_0x4862bf['hits'][_0x1d80f5(0x198)]?_0x4a2414:_0x317e62,_0x49ddd6=_0x37b5c9=>{var _0x167b05=_0x1d80f5;let _0x45f67f={};return _0x45f67f[_0x167b05(0x1dd)]=_0x37b5c9[_0x167b05(0x1dd)],_0x45f67f[_0x167b05(0x1be)]=_0x37b5c9[_0x167b05(0x1be)],_0x45f67f[_0x167b05(0x158)]=_0x37b5c9[_0x167b05(0x158)],_0x45f67f[_0x167b05(0x1d2)]=_0x37b5c9['totalStrLength'],_0x45f67f[_0x167b05(0x12f)]=_0x37b5c9[_0x167b05(0x12f)],_0x45f67f[_0x167b05(0x1b2)]=_0x37b5c9[_0x167b05(0x1b2)],_0x45f67f[_0x167b05(0x148)]=!0x1,_0x45f67f['noFunctions']=!_0x4bcc89,_0x45f67f['depth']=0x1,_0x45f67f[_0x167b05(0x17b)]=0x0,_0x45f67f['expId']=_0x167b05(0x1f0),_0x45f67f[_0x167b05(0x1c4)]=_0x167b05(0x12d),_0x45f67f[_0x167b05(0x159)]=!0x0,_0x45f67f[_0x167b05(0x17d)]=[],_0x45f67f[_0x167b05(0x161)]=0x0,_0x45f67f[_0x167b05(0x1ca)]=!0x0,_0x45f67f['allStrLength']=0x0,_0x45f67f['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45f67f;};for(var _0x3e5ecd=0x0;_0x3e5ecd<_0x5f2ce1[_0x1d80f5(0x1e9)];_0x3e5ecd++)_0x2ecb7d[_0x1d80f5(0x16f)](_0x575101['serialize']({'timeNode':_0x3c0535===_0x1d80f5(0x118)||void 0x0},_0x5f2ce1[_0x3e5ecd],_0x49ddd6(_0x3ecc3c),{}));if(_0x3c0535==='trace'){let _0x2b2098=Error[_0x1d80f5(0x120)];try{Error[_0x1d80f5(0x120)]=0x1/0x0,_0x2ecb7d['push'](_0x575101[_0x1d80f5(0x1ed)]({'stackNode':!0x0},new Error()[_0x1d80f5(0x1e5)],_0x49ddd6(_0x3ecc3c),{'strLength':0x1/0x0}));}finally{Error[_0x1d80f5(0x120)]=_0x2b2098;}}return{'method':'log','version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':_0x2ecb7d,'id':_0x16b8dc,'context':_0x18eeb6}]};}catch(_0x4e99d0){return{'method':_0x1d80f5(0x169),'version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':[{'type':_0x1d80f5(0x121),'error':_0x4e99d0&&_0x4e99d0[_0x1d80f5(0x177)]}],'id':_0x16b8dc,'context':_0x18eeb6}]};}finally{try{if(_0x17ccf2&&_0x578c02){let _0x10b2cd=_0x7ab5fc();_0x17ccf2['count']++,_0x17ccf2[_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x17ccf2['ts']=_0x10b2cd,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]++,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x4862bf[_0x1d80f5(0x1f7)]['ts']=_0x10b2cd,(_0x17ccf2['count']>0x32||_0x17ccf2[_0x1d80f5(0x118)]>0x64)&&(_0x17ccf2[_0x1d80f5(0x198)]=!0x0),(_0x4862bf['hits'][_0x1d80f5(0x1b8)]>0x3e8||_0x4862bf['hits'][_0x1d80f5(0x118)]>0x12c)&&(_0x4862bf[_0x1d80f5(0x1f7)]['reduceLimits']=!0x0);}}catch{}}}return _0x23706c;}((_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x2d7518,_0x477f3f,_0x49f77c,_0x67f0fb,_0x51ce8f)=>{var _0x17b4c9=_0x43a543;if(_0x1806cc[_0x17b4c9(0x19f)])return _0x1806cc[_0x17b4c9(0x19f)];if(!Y(_0x1806cc,_0x49f77c,_0x439a11))return _0x1806cc['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1806cc[_0x17b4c9(0x19f)];let _0x4540ce=W(_0x1806cc),_0x44e230=_0x4540ce[_0x17b4c9(0x1e8)],_0x130677=_0x4540ce[_0x17b4c9(0x1ea)],_0x1444c2=_0x4540ce[_0x17b4c9(0x136)],_0x2ca3fb={'hits':{},'ts':{}},_0x5e109e=Q(_0x1806cc,_0x67f0fb,_0x2ca3fb,_0x2d7518),_0x3e58ab=_0x1de792=>{_0x2ca3fb['ts'][_0x1de792]=_0x130677();},_0x1678a8=(_0xa3635f,_0x13a102)=>{var _0x1a4b22=_0x17b4c9;let _0x3eb140=_0x2ca3fb['ts'][_0x13a102];if(delete _0x2ca3fb['ts'][_0x13a102],_0x3eb140){let _0x484d76=_0x44e230(_0x3eb140,_0x130677());_0x37c63d(_0x5e109e(_0x1a4b22(0x118),_0xa3635f,_0x1444c2(),_0x21fc4a,[_0x484d76],_0x13a102));}},_0x1940b0=_0x183f01=>_0x127212=>{var _0x466f11=_0x17b4c9;try{_0x3e58ab(_0x127212),_0x183f01(_0x127212);}finally{_0x1806cc['console'][_0x466f11(0x118)]=_0x183f01;}},_0x1b4025=_0x302b67=>_0x593b14=>{var _0x3f7217=_0x17b4c9;try{let [_0x2ce050,_0x439151]=_0x593b14[_0x3f7217(0x1b4)](_0x3f7217(0x168));_0x1678a8(_0x439151,_0x2ce050),_0x302b67(_0x2ce050);}finally{_0x1806cc[_0x3f7217(0x1cb)][_0x3f7217(0x1fb)]=_0x302b67;}};_0x1806cc[_0x17b4c9(0x19f)]={'consoleLog':(_0x363879,_0x5c8485)=>{var _0xd8d52e=_0x17b4c9;_0x1806cc['console']['log'][_0xd8d52e(0x111)]!=='disabledLog'&&_0x37c63d(_0x5e109e(_0xd8d52e(0x169),_0x363879,_0x1444c2(),_0x21fc4a,_0x5c8485));},'consoleTrace':(_0x496aa9,_0x3345e4)=>{var _0x2f53c6=_0x17b4c9;_0x1806cc[_0x2f53c6(0x1cb)][_0x2f53c6(0x169)][_0x2f53c6(0x111)]!==_0x2f53c6(0x157)&&_0x37c63d(_0x5e109e(_0x2f53c6(0x1f8),_0x496aa9,_0x1444c2(),_0x21fc4a,_0x3345e4));},'consoleTime':()=>{var _0x1aa7b3=_0x17b4c9;_0x1806cc[_0x1aa7b3(0x1cb)]['time']=_0x1940b0(_0x1806cc[_0x1aa7b3(0x1cb)][_0x1aa7b3(0x118)]);},'consoleTimeEnd':()=>{var _0x51a24e=_0x17b4c9;_0x1806cc['console'][_0x51a24e(0x1fb)]=_0x1b4025(_0x1806cc['console']['timeEnd']);},'autoLog':(_0x2f565b,_0x537581)=>{var _0x2960a1=_0x17b4c9;_0x37c63d(_0x5e109e(_0x2960a1(0x169),_0x537581,_0x1444c2(),_0x21fc4a,[_0x2f565b]));},'autoLogMany':(_0x40b240,_0x2f2e6d)=>{var _0x44228c=_0x17b4c9;_0x37c63d(_0x5e109e(_0x44228c(0x169),_0x40b240,_0x1444c2(),_0x21fc4a,_0x2f2e6d));},'autoTrace':(_0x22c659,_0x27110d)=>{var _0x4d8684=_0x17b4c9;_0x37c63d(_0x5e109e(_0x4d8684(0x1f8),_0x27110d,_0x1444c2(),_0x21fc4a,[_0x22c659]));},'autoTraceMany':(_0x123518,_0x2e4878)=>{_0x37c63d(_0x5e109e('trace',_0x123518,_0x1444c2(),_0x21fc4a,_0x2e4878));},'autoTime':(_0x927205,_0x43e547,_0xdea416)=>{_0x3e58ab(_0xdea416);},'autoTimeEnd':(_0x3f3ce8,_0x3442bd,_0x2df5cc)=>{_0x1678a8(_0x3442bd,_0x2df5cc);},'coverage':_0x507b40=>{var _0x30461e=_0x17b4c9;_0x37c63d({'method':_0x30461e(0x143),'version':_0x2d7518,'args':[{'id':_0x507b40}]});}};let _0x37c63d=J(_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x51ce8f),_0x21fc4a=_0x1806cc[_0x17b4c9(0x126)];return _0x1806cc['_console_ninja'];})(globalThis,_0x43a543(0x163),_0x43a543(0x133),_0x43a543(0x15c),_0x43a543(0x128),_0x43a543(0x13f),'1695198312421',_0x43a543(0x13b),'','');");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSx1QkFBdUIsWUFBWSxpQkFBaUIsSUFBSSwwQkFBMEIsWUFBWSx3TyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Fzcy9zY3JvbGwuc2Nzcz9mY2I3Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDMwcmVtO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5pbWFnZS1zbGlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuI3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi53aW5kb3cge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLm5hdkxpbmtzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5uYXZMaW5rcyB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubGlua3Mge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IGJsYWNrIDVweCBzb2xpZDtcbn1cblxuLmxpbmtzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYwMDtcbn1cblxuLmxpbmtzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvdXRsaW5lLXdpZHRoOiA3cHg7XG59XG5cbi5saW5rcy5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gIHBhZGRpbmc6IDNyZW0gMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5sZWZ0OmhvdmVyLFxuLnJpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc2Nyb2xsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19zaXplcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0UsYUNOTztFRE9QLFlDTFM7QURBWDs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0FBTkY7O0FBU0E7RUFDRSx1QkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFQRjs7QUFVQTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQ2hHYTtBRHlGZjs7QUFXQSx5RUFBQTtBQUNBOztFQUVFLG9DQUFBO0FBUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gYm9keSB7XFxuLy8gICAtLWhlaWdodDogMzByZW07XFxuLy8gICAtLXdpZHRoOiAxMDAlO1xcbi8vIH1cXG5AaW1wb3J0ICdzaXplcyc7XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgd2lkdGg6ICRpbWctd2lkdGg7XFxufVxcblxcbi5pbWFnZS1zbGlkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi53aW5kb3cge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAvLyB3aWR0aDogKCR3aWR0aCk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAoJGhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLm5hdkxpbmtzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAoJHdpZHRoKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5hdkxpbmtzIHVsIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IGJsYWNrIDVweCBzb2xpZDtcXG59XFxuXFxuLmxpbmtzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxufVxcblxcbi5saW5rcy5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3V0bGluZS13aWR0aDogN3B4O1xcbn1cXG5cXG4ubGlua3MuYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtMTEwcHg7XFxuICBwYWRkaW5nOiAzcmVtIDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6ICRib2R5LXBhZGRpbmc7XFxuXFxufVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLmxlZnQ6aG92ZXIsXFxuLnJpZ2h0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWlubGluZTogMjBweDtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjMyLCAyMzIpO1xuICBwYWRkaW5nLWlubGluZTogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbm5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5uYXYgbGkge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5uYXYgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICB0cmFuc2xhdGU6IDA7XG4gIHNjYWxlOiAwIDE7XG4gIHRyYW5zaXRpb246IHNjYWxlIDMwMG1zLCB0cmFuc2xhdGUgNTAwbXM7XG59XG5uYXYgbGk6aG92ZXI6OmFmdGVyIHtcbiAgc2NhbGU6IDEgMTtcbn1cbm5hdiBsaTpob3Zlcixcbm5hdiBsaTpmb2N1cy12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbm5hdiAuTmF2LWJyYW5kIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19zaXplcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0ksaUNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkNaVztBRE1mOztBQVdBO0VBSUksYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUdBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBRUEsNkJBQUE7RUFFQSxrQkFBQTtBQWhCUjtBQW1CSTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUFsQlI7QUFzQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFHQSxZQXpDUTtFQTBDUixVQUFBO0VBQ0Esd0NBQUE7QUF0QlI7QUE4Qkk7RUFDSSxVQUFBO0FBNUJSO0FBb0NJOztFQUVJLFVBQUE7QUFsQ1I7QUFzQ0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcENSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDEmZGlzcGxheT1zd2FwJyk7XFxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgJ3NpemVzJztcXG5cXG4vLyAkYm9keS1wYWRkaW5nOiAyMHB4O1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1pbmxpbmU6ICRib2R5LXBhZGRpbmc7XFxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgJHdpZHRoOjA7XFxuICAgICR0cmFuc2xhdGU6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmYWIzYWQ7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNERTlDOTQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzIsIDIzMiwgMSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICB1bCB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAvLyBjb2xvcjogaG90cGluaztcXG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG4gICAgbGk6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgICAgICAvLyBvcGFjaXR5OiAxO1xcbiAgICAgICAgXFxuICAgICAgICB0cmFuc2xhdGU6ICR0cmFuc2xhdGU7XFxuICAgICAgICBzY2FsZTogJHdpZHRoIDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAzMDBtcyxcXG4gICAgICAgIHRyYW5zbGF0ZSA1MDBtcztcXG4gICAgfVxcbiAgICBsaTpoYXMoKyA6aG92ZXIpe1xcbiAgICAvLyAgICBjb2xvcjogcmVkO1xcbiAgICAgICAkdHJhbnNsYXRlOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyOjphZnRlcntcXG4gICAgICAgIHNjYWxlOiAxIDE7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIgKyBsaXtcXG4gICAgICAgIC8vIGNvbG9yOiByZWQ7XFxuICAgICAgICAkdHJhbnNsYXRlOiAtMTAwJTtcXG4gICAgfVxcblxcbiAgICBsaTpob3ZlcixcXG4gICAgbGk6Zm9jdXMtdmlzaWJsZSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgJHdpZHRoOiAxO1xcbiAgICB9XFxuXFxuICAgIC5OYXYtYnJhbmQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbmF2QnJhbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01lbnUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGFjdHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVzZXJ2YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQnXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgZm9yIChjb25zdCBpIG9mIGxpc3RJdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBzZXRBdHRyaWJ1dGVzKGl0ZW0se2NsYXNzOiBcIm5hdi1pdGVtXCJ9KVxuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gaS50aXRsZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG4gICAgbmF2QnJhbmQuY2xhc3NMaXN0LmFkZCgnTmF2LWJyYW5kJylcbiAgICBuYXZCcmFuZC5pbm5lckhUTUw9XCJBbmltZSBGb29kXCJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnJhbmQpXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsKVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJylcbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhciIsImltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvMTIzMjczMi5qcGdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvc2Nyb2xsYmFyL2Fzc29ydGVkLmpwZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvYmFsbHMuZ2lmXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vaW1nL3Njcm9sbGJhci9ub29kbGUuZ2lmXCI7XG5pbXBvcnQgXCIuLi9zYXNzL3Njcm9sbC5zY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtpbWcxLCBpbWcyLCBpbWczLCBpbWc0XTtcblxuZnVuY3Rpb24gY3JlYXRlSW1hZ2VTbGlkZXIoKSB7XG4gICAgLypcbiAgICAgICAgQ3JlYXRlcyB0aGUgaW1hZ2Ugc2xpZGVcbiAgICAgICAgKi9cblxuICAgIGxldCBhY3RpdmVMaW5rID0gMDtcbiAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZVNldEVsZW1lbnQoXCJzZWN0aW9uXCIsIHtcbiAgICAgICAgY2xhc3M6IFwic2VjdGlvbnMgaW1hZ2Utc2xpZGVyXCIsXG4gICAgfSk7XG4gICAgY29uc3Qgdmlld1dpbmRvdyA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5kb3dcIiB9KTtcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7IGlkOiBcIndyYXBwZXJcIiB9KTtcblxuICAgIGNvbnN0IG5hdkxpbmtzID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm5hdkxpbmtzXCIgfSk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVTZXRFbGVtZW50KFwidWxcIiwgeyBjbGFzczogXCJ1bFwiIH0pO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVTZXRFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHNyYzogaW1hZ2UsXG4gICAgICAgICAgICBhbHQ6IGBpbWFnZS0ke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgaWQ6IGBpdGVtJHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJsaW5rc1wiLFxuICAgICAgICAgICAgXCJkYXRhLW51bWJlclwiOiBpbmRleCArIDEsXG4gICAgICAgIH0pO1xuICAgICAgICBsaS5pdGVtSUQgPSBpbmRleDtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlUG9zaXRpb24oZS50YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICAgIGxpbmtzLnB1c2gobGkpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgY29uc3QgYnRuMSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzczogXCJidG4gbGVmdFwiLFxuICAgICAgICBcImRhdGEtc2lkZVwiOiBcImxlZnRcIixcbiAgICB9KTtcbiAgICBjb25zdCBidG4yID0gY3JlYXRlU2V0RWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBcImJ0biByaWdodFwiLFxuICAgICAgICBcImRhdGEtc2lkZVwiOiBcInJpZ2h0XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5zID0gW2J0bjEsIGJ0bjJdO1xuXG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuc2lkZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFjdGl2ZUxpbmsgPD0gMCA/IGxpbmtzLmxlbmd0aCAtIDEgOiBhY3RpdmVMaW5rIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gbGlua3NbaWRdO1xuICAgICAgICAgICAgICAgIGNoYW5nZVBvc2l0aW9uKGxpbmspO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnNpZGUgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZlTGluayA+PSBsaW5rcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUxpbmsgKyAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpZF07XG4gICAgICAgICAgICAgICAgY2hhbmdlUG9zaXRpb24obGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb24obGluaykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhsaW5rKVxuICAgICAgICBsaW5rcy5mb3JFYWNoKChsaW5rSXRlbSkgPT4ge1xuICAgICAgICAgICAgbGlua0l0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aXZlTGluayA9IGxpbmsuaXRlbUlEXG5cbiAgICAgICAgY29uc3Qgbm8gPSBwYXJzZUludChsaW5rLmRhdGFzZXQubnVtYmVyKSAtIDFcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBubyAqIC0xMDBcblxuICAgICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IGB0cmFuc2xhdGUzZCgke3Bvc2l0aW9ufXZ3LCAwcHgsIDBweClgXG4gICAgICAgIHdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlVmFsdWVcblxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG5cbiAgICB9XG5cbiAgICBidG4xLmlubmVySFRNTCA9IFwiJiMxMDA5NDtcIjtcbiAgICBidG4yLmlubmVySFRNTCA9IFwiJiMxMDA5MztcIjtcblxuICAgIHZpZXdXaW5kb3cuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgdmlld1dpbmRvdy5hcHBlbmRDaGlsZChidG4xKTtcbiAgICB2aWV3V2luZG93LmFwcGVuZENoaWxkKGJ0bjIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdXaW5kb3cpO1xuXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbWFnZVNsaWRlcjtcbiIsImZ1bmN0aW9uIGdldEVsZW1lbnQoc2VsZWN0b3Ipe1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxufVxuXG4gZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpe1xuICAgIC8vIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKVxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKXtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZXRFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXM9e30pe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHR5cGUpXG4gICAgc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKVxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0RWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIHNldEF0dHJpYnV0ZXMsXG4gICAgY3JlYXRlU2V0RWxlbWVudCxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnXG5cbmltcG9ydCB7IGdldEVsZW1lbnQsIGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBjcmVhdGVJbWFnZVNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2Nyb2xsJ1xuLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNzIzMDEzMTY4XzBgLCdoZWxsbywgV29ybGQhJykpO1xuXG5jb25zdCBuYXZiYXIgPSBuYXZCYXIoKVxuY29uc3QgaW1hZ2VTbGlkZXI9Y3JlYXRlSW1hZ2VTbGlkZXIoKVxuXG5jb25zdCBib2R5ID0gZ2V0RWxlbWVudCgnYm9keScpO1xuY29uc3QgbWFpbiA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcImJvZHkgbWFpblwifSlcbmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKVxuYm9keS5hcHBlbmRDaGlsZChtYWluKVxubWFpbi5hcHBlbmRDaGlsZChpbWFnZVNsaWRlcilcbi8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4NDNhNTQzPV8weDE1ZTM7KGZ1bmN0aW9uKF8weDMyZWNhZCxfMHg0MjI1YTQpe3ZhciBfMHgzNjQ1YTg9XzB4MTVlMyxfMHgzYWUzMjI9XzB4MzJlY2FkKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0OThjNjQ9LXBhcnNlSW50KF8weDM2NDVhOCgweDE5YikpLzB4MSoocGFyc2VJbnQoXzB4MzY0NWE4KDB4MWEzKSkvMHgyKSstcGFyc2VJbnQoXzB4MzY0NWE4KDB4MWQ1KSkvMHgzKy1wYXJzZUludChfMHgzNjQ1YTgoMHgxMTIpKS8weDQqKHBhcnNlSW50KF8weDM2NDVhOCgweDE1MCkpLzB4NSkrcGFyc2VJbnQoXzB4MzY0NWE4KDB4MTllKSkvMHg2KigtcGFyc2VJbnQoXzB4MzY0NWE4KDB4MWZhKSkvMHg3KSstcGFyc2VJbnQoXzB4MzY0NWE4KDB4MWJkKSkvMHg4KihwYXJzZUludChfMHgzNjQ1YTgoMHgxZTApKS8weDkpKy1wYXJzZUludChfMHgzNjQ1YTgoMHgxYzcpKS8weGEqKC1wYXJzZUludChfMHgzNjQ1YTgoMHgxYWYpKS8weGIpK3BhcnNlSW50KF8weDM2NDVhOCgweDEzMikpLzB4YztpZihfMHg0OThjNjQ9PT1fMHg0MjI1YTQpYnJlYWs7ZWxzZSBfMHgzYWUzMjJbJ3B1c2gnXShfMHgzYWUzMjJbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDNhZmIxNil7XzB4M2FlMzIyWydwdXNoJ10oXzB4M2FlMzIyWydzaGlmdCddKCkpO319fShfMHg4N2QwLDB4OGM5ODkpKTtmdW5jdGlvbiBfMHgxNWUzKF8weDExMmEwNyxfMHgxMzMxN2Epe3ZhciBfMHgxNWUzYTg9XzB4ODdkMCgpO3JldHVybiBfMHgxNWUzPWZ1bmN0aW9uKF8weDRlOWE4YSxfMHgyMWFkZDQpe18weDRlOWE4YT1fMHg0ZTlhOGEtMHgxMTA7dmFyIF8weDQyMTQ2ZT1fMHgxNWUzYThbXzB4NGU5YThhXTtyZXR1cm4gXzB4NDIxNDZlO30sXzB4MTVlMyhfMHgxMTJhMDcsXzB4MTMzMTdhKTt9dmFyIGo9T2JqZWN0W18weDQzYTU0MygweDE1NSldLFg9T2JqZWN0W18weDQzYTU0MygweDFiMSldLEc9T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSxlZT1PYmplY3RbXzB4NDNhNTQzKDB4MWZjKV0sdGU9T2JqZWN0W18weDQzYTU0MygweDEzOCldLG5lPU9iamVjdFtfMHg0M2E1NDMoMHgxOGUpXVtfMHg0M2E1NDMoMHgxZWMpXSxyZT0oXzB4NTRjNjcxLF8weDE0NWE5NCxfMHgxMzE3NGIsXzB4NGJmY2M2KT0+e3ZhciBfMHg0ZjkyOWY9XzB4NDNhNTQzO2lmKF8weDE0NWE5NCYmdHlwZW9mIF8weDE0NWE5ND09XzB4NGY5MjlmKDB4MWNkKXx8dHlwZW9mIF8weDE0NWE5ND09J2Z1bmN0aW9uJyl7Zm9yKGxldCBfMHgxODI4MGYgb2YgZWUoXzB4MTQ1YTk0KSkhbmVbXzB4NGY5MjlmKDB4MWUyKV0oXzB4NTRjNjcxLF8weDE4MjgwZikmJl8weDE4MjgwZiE9PV8weDEzMTc0YiYmWChfMHg1NGM2NzEsXzB4MTgyODBmLHsnZ2V0JzooKT0+XzB4MTQ1YTk0W18weDE4MjgwZl0sJ2VudW1lcmFibGUnOiEoXzB4NGJmY2M2PUcoXzB4MTQ1YTk0LF8weDE4MjgwZikpfHxfMHg0YmZjYzZbXzB4NGY5MjlmKDB4MWMwKV19KTt9cmV0dXJuIF8weDU0YzY3MTt9LEs9KF8weDMzOGFmOSxfMHg0Mjc5YmUsXzB4MTc2YzM5KT0+KF8weDE3NmMzOT1fMHgzMzhhZjkhPW51bGw/aih0ZShfMHgzMzhhZjkpKTp7fSxyZShfMHg0Mjc5YmV8fCFfMHgzMzhhZjl8fCFfMHgzMzhhZjlbJ19fZXMnKydNb2R1bGUnXT9YKF8weDE3NmMzOSwnZGVmYXVsdCcseyd2YWx1ZSc6XzB4MzM4YWY5LCdlbnVtZXJhYmxlJzohMHgwfSk6XzB4MTc2YzM5LF8weDMzOGFmOSkpLHE9Y2xhc3N7Y29uc3RydWN0b3IoXzB4MzBiOWI3LF8weDRkZGM1MCxfMHgzYjMzMjksXzB4MjIxYjkyLF8weGQ5MmYyOSl7dmFyIF8weDZlMjJhOT1fMHg0M2E1NDM7dGhpc1tfMHg2ZTIyYTkoMHgxNzIpXT1fMHgzMGI5YjcsdGhpc1tfMHg2ZTIyYTkoMHgxZjEpXT1fMHg0ZGRjNTAsdGhpc1tfMHg2ZTIyYTkoMHgxOGEpXT1fMHgzYjMzMjksdGhpc1snbm9kZU1vZHVsZXMnXT1fMHgyMjFiOTIsdGhpc1tfMHg2ZTIyYTkoMHgxODgpXT1fMHhkOTJmMjksdGhpc1tfMHg2ZTIyYTkoMHgxYWMpXT0hMHgwLHRoaXNbJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJ109ITB4MCx0aGlzW18weDZlMjJhOSgweDE5MyldPSEweDEsdGhpc1tfMHg2ZTIyYTkoMHgxNzkpXT0hMHgxLHRoaXNbJ19pbkJyb3dzZXInXT0hdGhpc1tfMHg2ZTIyYTkoMHgxNzIpXVtfMHg2ZTIyYTkoMHgxYzIpXT8uW18weDZlMjJhOSgweDE4YyldPy5bXzB4NmUyMmE5KDB4MWE2KV0sdGhpc1snX1dlYlNvY2tldENsYXNzJ109bnVsbCx0aGlzW18weDZlMjJhOSgweDE3OCldPTB4MCx0aGlzW18weDZlMjJhOSgweDE0ZCldPTB4MTQsdGhpc1tfMHg2ZTIyYTkoMHgxZWUpXT0naHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsdGhpc1tfMHg2ZTIyYTkoMHgxMTYpXT0odGhpc1tfMHg2ZTIyYTkoMHgxZjkpXT9fMHg2ZTIyYTkoMHgxYTgpOl8weDZlMjJhOSgweDFkMykpK3RoaXNbXzB4NmUyMmE5KDB4MWVlKV07fWFzeW5jW18weDQzYTU0MygweDExMyldKCl7dmFyIF8weDE1ZTdlMz1fMHg0M2E1NDM7aWYodGhpc1tfMHgxNWU3ZTMoMHgxMTcpXSlyZXR1cm4gdGhpc1tfMHgxNWU3ZTMoMHgxMTcpXTtsZXQgXzB4MzhlN2JmO2lmKHRoaXNbXzB4MTVlN2UzKDB4MWY5KV0pXzB4MzhlN2JmPXRoaXNbJ2dsb2JhbCddW18weDE1ZTdlMygweDE5NildO2Vsc2V7aWYodGhpc1snZ2xvYmFsJ11bXzB4MTVlN2UzKDB4MWMyKV0/LltfMHgxNWU3ZTMoMHgxMTQpXSlfMHgzOGU3YmY9dGhpc1tfMHgxNWU3ZTMoMHgxNzIpXVsncHJvY2VzcyddPy5bJ19XZWJTb2NrZXQnXTtlbHNlIHRyeXtsZXQgXzB4NTcxOGVmPWF3YWl0IGltcG9ydChfMHgxNWU3ZTMoMHgxYTcpKTtfMHgzOGU3YmY9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDE1ZTdlMygweDE4MikpKVtfMHgxNWU3ZTMoMHgxYzkpXShfMHg1NzE4ZWZbXzB4MTVlN2UzKDB4MWUzKV0odGhpc1tfMHgxNWU3ZTMoMHgxZGMpXSwnd3MvaW5kZXguanMnKSlbXzB4MTVlN2UzKDB4MTQ5KV0oKSkpW18weDE1ZTdlMygweDEyMyldO31jYXRjaHt0cnl7XzB4MzhlN2JmPXJlcXVpcmUocmVxdWlyZShfMHgxNWU3ZTMoMHgxYTcpKVsnam9pbiddKHRoaXNbXzB4MTVlN2UzKDB4MWRjKV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MTVlN2UzKDB4MWJmKSk7fX19cmV0dXJuIHRoaXNbXzB4MTVlN2UzKDB4MTE3KV09XzB4MzhlN2JmLF8weDM4ZTdiZjt9W18weDQzYTU0MygweDFkMSldKCl7dmFyIF8weDI2NGZiMz1fMHg0M2E1NDM7dGhpc1tfMHgyNjRmYjMoMHgxNzkpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDI2NGZiMygweDE3OCldPj10aGlzW18weDI2NGZiMygweDE0ZCldfHwodGhpc1tfMHgyNjRmYjMoMHgxNWYpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddKyssdGhpc1tfMHgyNjRmYjMoMHgxMmEpXT1uZXcgUHJvbWlzZSgoXzB4NDE4NmRmLF8weDY4MTUwMSk9Pnt2YXIgXzB4MmViYzJjPV8weDI2NGZiMzt0aGlzW18weDJlYmMyYygweDExMyldKClbXzB4MmViYzJjKDB4MTU2KV0oXzB4MWY0NjcyPT57dmFyIF8weDNlZDljMD1fMHgyZWJjMmM7bGV0IF8weDE0YWYwNj1uZXcgXzB4MWY0NjcyKF8weDNlZDljMCgweDE5MikrKCF0aGlzW18weDNlZDljMCgweDFmOSldJiZ0aGlzW18weDNlZDljMCgweDE4OCldP18weDNlZDljMCgweDE2NSk6dGhpc1tfMHgzZWQ5YzAoMHgxZjEpXSkrJzonK3RoaXNbXzB4M2VkOWMwKDB4MThhKV0pO18weDE0YWYwNltfMHgzZWQ5YzAoMHgxNjcpXT0oKT0+e3ZhciBfMHgyYjQ5Zjg9XzB4M2VkOWMwO3RoaXNbXzB4MmI0OWY4KDB4MWFjKV09ITB4MSx0aGlzW18weDJiNDlmOCgweDFlNildKF8weDE0YWYwNiksdGhpc1tfMHgyYjQ5ZjgoMHgxOWQpXSgpLF8weDY4MTUwMShuZXcgRXJyb3IoXzB4MmI0OWY4KDB4MTQ3KSkpO30sXzB4MTRhZjA2Wydvbm9wZW4nXT0oKT0+e3ZhciBfMHgyZWEzNTI9XzB4M2VkOWMwO3RoaXNbJ19pbkJyb3dzZXInXXx8XzB4MTRhZjA2W18weDJlYTM1MigweDE4MyldJiZfMHgxNGFmMDZbXzB4MmVhMzUyKDB4MTgzKV1bXzB4MmVhMzUyKDB4MWViKV0mJl8weDE0YWYwNltfMHgyZWEzNTIoMHgxODMpXVsndW5yZWYnXSgpLF8weDQxODZkZihfMHgxNGFmMDYpO30sXzB4MTRhZjA2W18weDNlZDljMCgweDFkYSldPSgpPT57dmFyIF8weDUzNTlmNT1fMHgzZWQ5YzA7dGhpc1tfMHg1MzU5ZjUoMHgxNWYpXT0hMHgwLHRoaXNbXzB4NTM1OWY1KDB4MWU2KV0oXzB4MTRhZjA2KSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCk7fSxfMHgxNGFmMDZbJ29ubWVzc2FnZSddPV8weGE1MThhOT0+e3ZhciBfMHgzOTNmNjE9XzB4M2VkOWMwO3RyeXtfMHhhNTE4YTkmJl8weGE1MThhOVtfMHgzOTNmNjEoMHgxOGIpXSYmdGhpc1tfMHgzOTNmNjEoMHgxZjkpXSYmSlNPTltfMHgzOTNmNjEoMHgxYzYpXShfMHhhNTE4YTlbXzB4MzkzZjYxKDB4MThiKV0pWydtZXRob2QnXT09PSdyZWxvYWQnJiZ0aGlzW18weDM5M2Y2MSgweDE3MildW18weDM5M2Y2MSgweDE4NCldW18weDM5M2Y2MSgweDE4NSldKCk7fWNhdGNoe319O30pWyd0aGVuJ10oXzB4MjFiYWIyPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDAsdGhpc1tfMHgyZWJjMmMoMHgxNzkpXT0hMHgxLHRoaXNbXzB4MmViYzJjKDB4MTVmKV09ITB4MSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDAsdGhpc1tfMHgyZWJjMmMoMHgxNzgpXT0weDAsXzB4MjFiYWIyKSlbXzB4MmViYzJjKDB4MWIzKV0oXzB4M2UzOTNiPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgyZWJjMmMoMHgxNzkpXT0hMHgxLGNvbnNvbGVbXzB4MmViYzJjKDB4MWQ4KV0oXzB4MmViYzJjKDB4MWRmKSt0aGlzWydfd2ViU29ja2V0RXJyb3JEb2NzTGluayddKSxfMHg2ODE1MDEobmV3IEVycm9yKF8weDJlYmMyYygweDFmNSkrKF8weDNlMzkzYiYmXzB4M2UzOTNiW18weDJlYmMyYygweDE3NyldKSkpKSk7fSkpO31bXzB4NDNhNTQzKDB4MWU2KV0oXzB4M2VkZjE0KXt2YXIgXzB4MzI4MGVjPV8weDQzYTU0Mzt0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDMyODBlYygweDE3OSldPSEweDE7dHJ5e18weDNlZGYxNFtfMHgzMjgwZWMoMHgxZGEpXT1udWxsLF8weDNlZGYxNFtfMHgzMjgwZWMoMHgxNjcpXT1udWxsLF8weDNlZGYxNFtfMHgzMjgwZWMoMHgxMWMpXT1udWxsO31jYXRjaHt9dHJ5e18weDNlZGYxNFtfMHgzMjgwZWMoMHgxODkpXTwweDImJl8weDNlZGYxNFtfMHgzMjgwZWMoMHgxNDYpXSgpO31jYXRjaHt9fVsnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpe3ZhciBfMHg1MmExZDA9XzB4NDNhNTQzO2NsZWFyVGltZW91dCh0aGlzWydfcmVjb25uZWN0VGltZW91dCddKSwhKHRoaXNbXzB4NTJhMWQwKDB4MTc4KV0+PXRoaXNbXzB4NTJhMWQwKDB4MTRkKV0pJiYodGhpc1tfMHg1MmExZDAoMHgxNzYpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDI1MmRmNz1fMHg1MmExZDA7dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDI1MmRmNygweDE3OSldfHwodGhpc1tfMHgyNTJkZjcoMHgxZDEpXSgpLHRoaXNbXzB4MjUyZGY3KDB4MTJhKV0/LltfMHgyNTJkZjcoMHgxYjMpXSgoKT0+dGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpKSk7fSwweDFmNCksdGhpc1tfMHg1MmExZDAoMHgxNzYpXVtfMHg1MmExZDAoMHgxZWIpXSYmdGhpc1tfMHg1MmExZDAoMHgxNzYpXVtfMHg1MmExZDAoMHgxZWIpXSgpKTt9YXN5bmNbXzB4NDNhNTQzKDB4MTFiKV0oXzB4NTRlNmMxKXt2YXIgXzB4MWFkOTdmPV8weDQzYTU0Mzt0cnl7aWYoIXRoaXNbXzB4MWFkOTdmKDB4MWFjKV0pcmV0dXJuO3RoaXNbXzB4MWFkOTdmKDB4MTVmKV0mJnRoaXNbXzB4MWFkOTdmKDB4MWQxKV0oKSwoYXdhaXQgdGhpc1tfMHgxYWQ5N2YoMHgxMmEpXSlbXzB4MWFkOTdmKDB4MTFiKV0oSlNPTltfMHgxYWQ5N2YoMHgxNGIpXShfMHg1NGU2YzEpKTt9Y2F0Y2goXzB4MWY1ZTJiKXtjb25zb2xlW18weDFhZDk3ZigweDFkOCldKHRoaXNbXzB4MWFkOTdmKDB4MTE2KV0rJzpcXFxceDIwJysoXzB4MWY1ZTJiJiZfMHgxZjVlMmJbXzB4MWFkOTdmKDB4MTc3KV0pKSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDEsdGhpc1tfMHgxYWQ5N2YoMHgxOWQpXSgpO319fTtmdW5jdGlvbiBKKF8weDQzNDE1NixfMHgyMjY5NjMsXzB4M2U1MjI3LF8weGYwZDkyMixfMHgzZDNlZGYsXzB4MWQ5YTJkKXt2YXIgXzB4MWQyYjQwPV8weDQzYTU0MztsZXQgXzB4M2I0ODU3PV8weDNlNTIyN1snc3BsaXQnXSgnLCcpW18weDFkMmI0MCgweDFkNCldKF8weDIyOWZlYz0+e3ZhciBfMHgxZTI2YjM9XzB4MWQyYjQwO3RyeXtfMHg0MzQxNTZbXzB4MWUyNmIzKDB4MTI2KV18fCgoXzB4M2QzZWRmPT09XzB4MWUyNmIzKDB4MTVhKXx8XzB4M2QzZWRmPT09XzB4MWUyNmIzKDB4MTI3KXx8XzB4M2QzZWRmPT09J2FzdHJvJykmJihfMHgzZDNlZGYrPV8weDQzNDE1NltfMHgxZTI2YjMoMHgxYzIpXT8uW18weDFlMjZiMygweDE4YyldPy5bXzB4MWUyNmIzKDB4MWE2KV0/XzB4MWUyNmIzKDB4MTMwKTpfMHgxZTI2YjMoMHgxNmUpKSxfMHg0MzQxNTZbXzB4MWUyNmIzKDB4MTI2KV09eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDNkM2VkZn0pO2xldCBfMHgzZjgxODk9bmV3IHEoXzB4NDM0MTU2LF8weDIyNjk2MyxfMHgyMjlmZWMsXzB4ZjBkOTIyLF8weDFkOWEyZCk7cmV0dXJuIF8weDNmODE4OVtfMHgxZTI2YjMoMHgxMWIpXVtfMHgxZTI2YjMoMHgxMjUpXShfMHgzZjgxODkpO31jYXRjaChfMHgxODI5MzIpe3JldHVybiBjb25zb2xlW18weDFlMjZiMygweDFkOCldKF8weDFlMjZiMygweDE3MSksXzB4MTgyOTMyJiZfMHgxODI5MzJbJ21lc3NhZ2UnXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NDAyN2NhPT5fMHgzYjQ4NTdbXzB4MWQyYjQwKDB4MTRmKV0oXzB4NDU4NjZkPT5fMHg0NTg2NmQoXzB4NDAyN2NhKSk7fWZ1bmN0aW9uIFcoXzB4MWE4YWExKXt2YXIgXzB4ZjZhMGNkPV8weDQzYTU0MztsZXQgXzB4NWM1NzZkPWZ1bmN0aW9uKF8weDE3NTFiZCxfMHhjYjYyYmUpe3JldHVybiBfMHhjYjYyYmUtXzB4MTc1MWJkO30sXzB4NTU5ZWI0O2lmKF8weDFhOGFhMVsncGVyZm9ybWFuY2UnXSlfMHg1NTllYjQ9ZnVuY3Rpb24oKXt2YXIgXzB4MTVhMWE1PV8weDE1ZTM7cmV0dXJuIF8weDFhOGFhMVtfMHgxNWExYTUoMHgxZmQpXVtfMHgxNWExYTUoMHgxMzYpXSgpO307ZWxzZXtpZihfMHgxYThhYTFbJ3Byb2Nlc3MnXSYmXzB4MWE4YWExW18weGY2YTBjZCgweDFjMildW18weGY2YTBjZCgweDE3MyldKV8weDU1OWViND1mdW5jdGlvbigpe3ZhciBfMHgzMWEzNDc9XzB4ZjZhMGNkO3JldHVybiBfMHgxYThhYTFbJ3Byb2Nlc3MnXVtfMHgzMWEzNDcoMHgxNzMpXSgpO30sXzB4NWM1NzZkPWZ1bmN0aW9uKF8weDNiZmYzZCxfMHhkYWRmNTUpe3JldHVybiAweDNlOCooXzB4ZGFkZjU1WzB4MF0tXzB4M2JmZjNkWzB4MF0pKyhfMHhkYWRmNTVbMHgxXS1fMHgzYmZmM2RbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NDE3NjAyfT1yZXF1aXJlKF8weGY2YTBjZCgweDE5NSkpO18weDU1OWViND1mdW5jdGlvbigpe3ZhciBfMHgyODFkZDI9XzB4ZjZhMGNkO3JldHVybiBfMHg0MTc2MDJbXzB4MjgxZGQyKDB4MTM2KV0oKTt9O31jYXRjaHtfMHg1NTllYjQ9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHg1YzU3NmQsJ3RpbWVTdGFtcCc6XzB4NTU5ZWI0LCdub3cnOigpPT5EYXRlW18weGY2YTBjZCgweDEzNildKCl9O31mdW5jdGlvbiBfMHg4N2QwKCl7dmFyIF8weDMxMTFhYj1bJ19hbGxvd2VkVG9Db25uZWN0T25TZW5kJywnbWF0Y2gnLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ19jYXBJZlN0cmluZycsJzEyNy4wLjAuMScsJ3RvTG93ZXJDYXNlJywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdkYXRlJywnb25lcnJvcicsJzpsb2dQb2ludElkOicsJ2xvZycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ1BPU0lUSVZFX0lORklOSVRZJywnTkVHQVRJVkVfSU5GSU5JVFknLCdfcHJvcGVydHlOYW1lJywnXFxcXHgyMGJyb3dzZXInLCdwdXNoJywnX3NldE5vZGVJZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JywnZ2xvYmFsJywnaHJ0aW1lJywnZGVwdGgnLCdbb2JqZWN0XFxcXHgyMFNldF0nLCdfcmVjb25uZWN0VGltZW91dCcsJ21lc3NhZ2UnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19jb25uZWN0aW5nJywnbm9GdW5jdGlvbnMnLCdsZXZlbCcsJ19oYXNNYXBPbkl0c1BhdGgnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywncmVwbGFjZScsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdfaXNTZXQnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ3VybCcsJ19zb2NrZXQnLCdsb2NhdGlvbicsJ3JlbG9hZCcsJ19pc05lZ2F0aXZlWmVybycsJ19hZGRPYmplY3RQcm9wZXJ0eScsJ2RvY2tlcml6ZWRBcHAnLCdyZWFkeVN0YXRlJywncG9ydCcsJ2RhdGEnLCd2ZXJzaW9ucycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdwcm90b3R5cGUnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnLCdzZXQnLCdfcF9uYW1lJywnd3M6Ly8nLCdfY29ubmVjdGVkJywnbmVnYXRpdmVJbmZpbml0eScsJ3BlcmZfaG9va3MnLCdXZWJTb2NrZXQnLCdudW1iZXInLCdyZWR1Y2VMaW1pdHMnLCdob3N0bmFtZScsJ2lzQXJyYXknLCcxMFJjQUN6YScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJzM5MDQ4bWNMaFd3JywnX2NvbnNvbGVfbmluamEnLCdSZWdFeHAnLCdzdWJzdHInLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCcxNDAxNTJDUGJqdWonLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnU3ltYm9sJywnbm9kZScsJ3BhdGgnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ19zZXROb2RlUXVlcnlQYXRoJywnX251bWJlclJlZ0V4cCcsJ19hbGxvd2VkVG9TZW5kJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnMTFySW9ybE4nLCd1bmRlZmluZWQnLCdkZWZpbmVQcm9wZXJ0eScsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ2NhdGNoJywnc3BsaXQnLCd2YWx1ZScsJ3BvcCcsJ19hZGRGdW5jdGlvbnNOb2RlJywnY291bnQnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdpbmRleCcsJ2NhcHBlZFByb3BzJywnY2FwcGVkRWxlbWVudHMnLCc1Mzg1MjhGaHlQRncnLCdlbGVtZW50cycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2VudW1lcmFibGUnLCdfc2V0Tm9kZUxhYmVsJywncHJvY2VzcycsJ051bWJlcicsJ3Jvb3RFeHByZXNzaW9uJywnZnVuY3Rpb24nLCdwYXJzZScsJzgyNzczNzBjdFVrUGMnLCdfcF9sZW5ndGgnLCdwYXRoVG9GaWxlVVJMJywncmVzb2x2ZUdldHRlcnMnLCdjb25zb2xlJywnaW5jbHVkZXMnLCdvYmplY3QnLCdfc29ydFByb3BzJywnX3BfJywnYm9vbGVhbicsJ19jb25uZWN0VG9Ib3N0Tm93JywndG90YWxTdHJMZW5ndGgnLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJ21hcCcsJzc4NTk0NnRLUmVLTicsJ19wcm9wZXJ0eScsJy4uLicsJ3dhcm4nLCdzeW1ib2wnLCdvbmNsb3NlJywnX2lzQXJyYXknLCdub2RlTW9kdWxlcycsJ3Byb3BzJywnY2FwcGVkJywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCc2M3VHbGNLQScsJ3ZhbHVlT2YnLCdjYWxsJywnam9pbicsJ25hbicsJ3N0YWNrJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdhcnJheScsJ2VsYXBzZWQnLCdsZW5ndGgnLCd0aW1lU3RhbXAnLCd1bnJlZicsJ2hhc093blByb3BlcnR5Jywnc2VyaWFsaXplJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCdyb290X2V4cF9pZCcsJ2hvc3QnLCdjb25jYXQnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ1NldCcsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcsJ0Jvb2xlYW4nLCdoaXRzJywndHJhY2UnLCdfaW5Ccm93c2VyJywnMjI0eVZvWUxuJywndGltZUVuZCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCdwZXJmb3JtYW5jZScsJ251eHQnLCdbb2JqZWN0XFxcXHgyMEFycmF5XScsJ25hbWUnLCczMjY3NDI0RXNEVXZuJywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdfV2ViU29ja2V0JywnX2RhdGVUb1N0cmluZycsJ19zZW5kRXJyb3JNZXNzYWdlJywnX1dlYlNvY2tldENsYXNzJywndGltZScsJ19hZGRQcm9wZXJ0eScsJ3BhcmVudCcsJ3NlbmQnLCdvbm9wZW4nLCdjb25zdHJ1Y3RvcicsJ1tvYmplY3RcXFxceDIwQmlnSW50XScsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdzdGFja1RyYWNlTGltaXQnLCd1bmtub3duJywnc2xpY2UnLCdkZWZhdWx0JywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdiaW5kJywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ3JlbWl4Jywnd2VicGFjaycsJ19jbGVhbk5vZGUnLCdfd3MnLCdzb3J0JywndW5zaGlmdCcsJ3Jvb3RfZXhwJywnX2hhc1NldE9uSXRzUGF0aCcsJ2F1dG9FeHBhbmRMaW1pdCcsJ1xcXFx4MjBzZXJ2ZXInLCdlcnJvcicsJzI2NDg2NTIwU2FjVlhmJywnMzk0MTUnLCdfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZScsJ190eXBlJywnbm93Jywnc3RyaW5nJywnZ2V0UHJvdG90eXBlT2YnLCdjdXJyZW50JywnX1N5bWJvbCcsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJmZWRvcmFcXFwiLFxcXCIxOTIuMTY4LjEuMThcXFwiXSwnX2lzVW5kZWZpbmVkJywnX3VuZGVmaW5lZCcsJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJzEuMC4wJywndHlwZScsJ251bGwnLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnY292ZXJhZ2UnLCdmdW5jTmFtZScsJ19pc01hcCcsJ2Nsb3NlJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ3NvcnRQcm9wcycsJ3RvU3RyaW5nJywnU3RyaW5nJywnc3RyaW5naWZ5JywnX29iamVjdFRvU3RyaW5nJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdhbGxTdHJMZW5ndGgnLCdmb3JFYWNoJywnNUthZHh4WCcsJ19rZXlTdHJSZWdFeHAnLCdfcmVnRXhwVG9TdHJpbmcnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnZ2V0dGVyJywnY3JlYXRlJywndGhlbicsJ2Rpc2FibGVkVHJhY2UnLCdzdHJMZW5ndGgnLCdhdXRvRXhwYW5kJywnbmV4dC5qcycsJ01hcCcsXFxcIi9ob21lL2FudGhvbnkvLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTAuMC4yMjUvbm9kZV9tb2R1bGVzXFxcIiwndGVzdCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXTtfMHg4N2QwPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDMxMTFhYjt9O3JldHVybiBfMHg4N2QwKCk7fWZ1bmN0aW9uIFkoXzB4MWY2NzVjLF8weDI3NzQ4NSxfMHgxMzNiNzEpe3ZhciBfMHg0NWQ0YmI9XzB4NDNhNTQzO2lmKF8weDFmNjc1Y1tfMHg0NWQ0YmIoMHgxYTkpXSE9PXZvaWQgMHgwKXJldHVybiBfMHgxZjY3NWNbXzB4NDVkNGJiKDB4MWE5KV07bGV0IF8weDUzYzE1MD1fMHgxZjY3NWNbXzB4NDVkNGJiKDB4MWMyKV0/LltfMHg0NWQ0YmIoMHgxOGMpXT8uW18weDQ1ZDRiYigweDFhNildO3JldHVybiBfMHg1M2MxNTAmJl8weDEzM2I3MT09PV8weDQ1ZDRiYigweDFmZSk/XzB4MWY2NzVjW18weDQ1ZDRiYigweDFhOSldPSEweDE6XzB4MWY2NzVjW18weDQ1ZDRiYigweDFhOSldPV8weDUzYzE1MHx8IV8weDI3NzQ4NXx8XzB4MWY2NzVjW18weDQ1ZDRiYigweDE4NCldPy5bXzB4NDVkNGJiKDB4MTk5KV0mJl8weDI3NzQ4NVtfMHg0NWQ0YmIoMHgxY2MpXShfMHgxZjY3NWNbJ2xvY2F0aW9uJ11bXzB4NDVkNGJiKDB4MTk5KV0pLF8weDFmNjc1Y1tfMHg0NWQ0YmIoMHgxYTkpXTt9ZnVuY3Rpb24gUShfMHhiNmRjOTUsXzB4NGJjYzg5LF8weDQ4NjJiZixfMHgxNGE4MDApe3ZhciBfMHgxZDMwMGQ9XzB4NDNhNTQzO18weGI2ZGM5NT1fMHhiNmRjOTUsXzB4NGJjYzg5PV8weDRiY2M4OSxfMHg0ODYyYmY9XzB4NDg2MmJmLF8weDE0YTgwMD1fMHgxNGE4MDA7bGV0IF8weDIyNjc0Nz1XKF8weGI2ZGM5NSksXzB4ODM0ZTlkPV8weDIyNjc0N1snZWxhcHNlZCddLF8weDdhYjVmYz1fMHgyMjY3NDdbXzB4MWQzMDBkKDB4MWVhKV07Y2xhc3MgXzB4NTc5NmZje2NvbnN0cnVjdG9yKCl7dmFyIF8weDVlM2E3Nz1fMHgxZDMwMGQ7dGhpc1tfMHg1ZTNhNzcoMHgxNTEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NWUzYTc3KDB4MWFiKV09L14oMHxbMS05XVswLTldKikkLyx0aGlzWydfcXVvdGVkUmVnRXhwJ109LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHg1ZTNhNzcoMHgxM2QpXT1fMHhiNmRjOTVbXzB4NWUzYTc3KDB4MWIwKV0sdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ109XzB4YjZkYzk1WydIVE1MQWxsQ29sbGVjdGlvbiddLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXT1PYmplY3RbXzB4NWUzYTc3KDB4MTNlKV0sdGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXT1PYmplY3RbXzB4NWUzYTc3KDB4MWZjKV0sdGhpc1tfMHg1ZTNhNzcoMHgxM2EpXT1fMHhiNmRjOTVbXzB4NWUzYTc3KDB4MWE1KV0sdGhpc1tfMHg1ZTNhNzcoMHgxNTIpXT1SZWdFeHBbXzB4NWUzYTc3KDB4MThlKV1bXzB4NWUzYTc3KDB4MTQ5KV0sdGhpc1snX2RhdGVUb1N0cmluZyddPURhdGVbXzB4NWUzYTc3KDB4MThlKV1bXzB4NWUzYTc3KDB4MTQ5KV07fVtfMHgxZDMwMGQoMHgxZWQpXShfMHgxMGRiZjAsXzB4MWNlYjM5LF8weDU4NmI4ZixfMHgyMzg2MjApe3ZhciBfMHgzZWRiZGM9XzB4MWQzMDBkLF8weDQyNTQ5ZT10aGlzLF8weDMwNzMzMj1fMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTU5KV07ZnVuY3Rpb24gXzB4OWU1NTA1KF8weDEyYmIzMSxfMHgyYmQwMWEsXzB4MzUyZjkxKXt2YXIgXzB4MTBmNmUyPV8weDNlZGJkYztfMHgyYmQwMWFbXzB4MTBmNmUyKDB4MTQwKV09J3Vua25vd24nLF8weDJiZDAxYVsnZXJyb3InXT1fMHgxMmJiMzFbXzB4MTBmNmUyKDB4MTc3KV0sXzB4NDYyNjRhPV8weDM1MmY5MVsnbm9kZSddW18weDEwZjZlMigweDEzOSldLF8weDM1MmY5MVsnbm9kZSddW18weDEwZjZlMigweDEzOSldPV8weDJiZDAxYSxfMHg0MjU0OWVbJ190cmVlTm9kZVByb3BlcnRpZXNCZWZvcmVGdWxsVmFsdWUnXShfMHgyYmQwMWEsXzB4MzUyZjkxKTt9dHJ5e18weDU4NmI4ZltfMHgzZWRiZGMoMHgxN2IpXSsrLF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNTkpXSYmXzB4NTg2YjhmW18weDNlZGJkYygweDE3ZCldW18weDNlZGJkYygweDE2ZildKF8weDFjZWIzOSk7dmFyIF8weDNmMzNmZCxfMHg1NDRmZGEsXzB4MTUwM2U5LF8weGJjZDZiZixfMHg0NTJiNDI9W10sXzB4NDM4ODExPVtdLF8weDUwZGRiZCxfMHgxZDEzY2U9dGhpc1snX3R5cGUnXShfMHgxY2ViMzkpLF8weGVjNTczNz1fMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxZTcpLF8weDNhNTlhNz0hMHgxLF8weDEyYjFiYj1fMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxYzUpLF8weDQ0Y2E2Zj10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4MWQxM2NlKSxfMHg4MWQ2M2Q9dGhpc1tfMHgzZWRiZGMoMHgxODEpXShfMHgxZDEzY2UpLF8weDE0YjhkMz1fMHg0NGNhNmZ8fF8weDgxZDYzZCxfMHgzZDlmYzI9e30sXzB4NTAxZjhhPTB4MCxfMHgzYjc2NWE9ITB4MSxfMHg0NjI2NGEsXzB4NTgyOWZkPS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTc0KV0pe2lmKF8weGVjNTczNyl7aWYoXzB4NTQ0ZmRhPV8weDFjZWIzOVtfMHgzZWRiZGMoMHgxZTkpXSxfMHg1NDRmZGE+XzB4NTg2YjhmW18weDNlZGJkYygweDFiZSldKXtmb3IoXzB4MTUwM2U5PTB4MCxfMHhiY2Q2YmY9XzB4NTg2YjhmW18weDNlZGJkYygweDFiZSldLF8weDNmMzNmZD1fMHgxNTAzZTk7XzB4M2YzM2ZkPF8weGJjZDZiZjtfMHgzZjMzZmQrKylfMHg0Mzg4MTFbXzB4M2VkYmRjKDB4MTZmKV0oXzB4NDI1NDllWydfYWRkUHJvcGVydHknXShfMHg0NTJiNDIsXzB4MWNlYjM5LF8weDFkMTNjZSxfMHgzZjMzZmQsXzB4NTg2YjhmKSk7XzB4MTBkYmYwW18weDNlZGJkYygweDFiYyldPSEweDA7fWVsc2V7Zm9yKF8weDE1MDNlOT0weDAsXzB4YmNkNmJmPV8weDU0NGZkYSxfMHgzZjMzZmQ9XzB4MTUwM2U5O18weDNmMzNmZDxfMHhiY2Q2YmY7XzB4M2YzM2ZkKyspXzB4NDM4ODExWydwdXNoJ10oXzB4NDI1NDllWydfYWRkUHJvcGVydHknXShfMHg0NTJiNDIsXzB4MWNlYjM5LF8weDFkMTNjZSxfMHgzZjMzZmQsXzB4NTg2YjhmKSk7fV8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNjEpXSs9XzB4NDM4ODExW18weDNlZGJkYygweDFlOSldO31pZighKF8weDFkMTNjZT09PV8weDNlZGJkYygweDE0MSl8fF8weDFkMTNjZT09PV8weDNlZGJkYygweDFiMCkpJiYhXzB4NDRjYTZmJiZfMHgxZDEzY2UhPT0nU3RyaW5nJyYmXzB4MWQxM2NlIT09J0J1ZmZlcicmJl8weDFkMTNjZSE9PSdiaWdpbnQnKXt2YXIgXzB4MjcwZjdkPV8weDIzODYyMFsncHJvcHMnXXx8XzB4NTg2YjhmW18weDNlZGJkYygweDFkZCldO2lmKHRoaXNbXzB4M2VkYmRjKDB4MTgwKV0oXzB4MWNlYjM5KT8oXzB4M2YzM2ZkPTB4MCxfMHgxY2ViMzlbJ2ZvckVhY2gnXShmdW5jdGlvbihfMHg1MDg5YmIpe3ZhciBfMHg0MjdkYTg9XzB4M2VkYmRjO2lmKF8weDUwMWY4YSsrLF8weDU4NmI4ZltfMHg0MjdkYTgoMHgxNjEpXSsrLF8weDUwMWY4YT5fMHgyNzBmN2Qpe18weDNiNzY1YT0hMHgwO3JldHVybjt9aWYoIV8weDU4NmI4ZltfMHg0MjdkYTgoMHgxOGQpXSYmXzB4NTg2YjhmW18weDQyN2RhOCgweDE1OSldJiZfMHg1ODZiOGZbXzB4NDI3ZGE4KDB4MTYxKV0+XzB4NTg2YjhmW18weDQyN2RhOCgweDEyZildKXtfMHgzYjc2NWE9ITB4MDtyZXR1cm47fV8weDQzODgxMVtfMHg0MjdkYTgoMHgxNmYpXShfMHg0MjU0OWVbXzB4NDI3ZGE4KDB4MTE5KV0oXzB4NDUyYjQyLF8weDFjZWIzOSwnU2V0JyxfMHgzZjMzZmQrKyxfMHg1ODZiOGYsZnVuY3Rpb24oXzB4NGZjYTE2KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NGZjYTE2O307fShfMHg1MDg5YmIpKSk7fSkpOnRoaXNbXzB4M2VkYmRjKDB4MTQ1KV0oXzB4MWNlYjM5KSYmXzB4MWNlYjM5W18weDNlZGJkYygweDE0ZildKGZ1bmN0aW9uKF8weDViNjE2YSxfMHg0MjVkMmUpe3ZhciBfMHg0MzRlYWI9XzB4M2VkYmRjO2lmKF8weDUwMWY4YSsrLF8weDU4NmI4ZlsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSsrLF8weDUwMWY4YT5fMHgyNzBmN2Qpe18weDNiNzY1YT0hMHgwO3JldHVybjt9aWYoIV8weDU4NmI4ZltfMHg0MzRlYWIoMHgxOGQpXSYmXzB4NTg2YjhmW18weDQzNGVhYigweDE1OSldJiZfMHg1ODZiOGZbXzB4NDM0ZWFiKDB4MTYxKV0+XzB4NTg2YjhmW18weDQzNGVhYigweDEyZildKXtfMHgzYjc2NWE9ITB4MDtyZXR1cm47fXZhciBfMHgyOTIzNGY9XzB4NDI1ZDJlWyd0b1N0cmluZyddKCk7XzB4MjkyMzRmW18weDQzNGVhYigweDFlOSldPjB4NjQmJihfMHgyOTIzNGY9XzB4MjkyMzRmW18weDQzNGVhYigweDEyMildKDB4MCwweDY0KStfMHg0MzRlYWIoMHgxZDcpKSxfMHg0Mzg4MTFbXzB4NDM0ZWFiKDB4MTZmKV0oXzB4NDI1NDllW18weDQzNGVhYigweDExOSldKF8weDQ1MmI0MixfMHgxY2ViMzksJ01hcCcsXzB4MjkyMzRmLF8weDU4NmI4ZixmdW5jdGlvbihfMHgyYTkxZGYpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyYTkxZGY7fTt9KF8weDViNjE2YSkpKTt9KSwhXzB4M2E1OWE3KXt0cnl7Zm9yKF8weDUwZGRiZCBpbiBfMHgxY2ViMzkpaWYoIShfMHhlYzU3MzcmJl8weDU4MjlmZFsndGVzdCddKF8weDUwZGRiZCkpJiYhdGhpc1tfMHgzZWRiZGMoMHgxMjQpXShfMHgxY2ViMzksXzB4NTBkZGJkLF8weDU4NmI4Zikpe2lmKF8weDUwMWY4YSsrLF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNjEpXSsrLF8weDUwMWY4YT5fMHgyNzBmN2Qpe18weDNiNzY1YT0hMHgwO2JyZWFrO31pZighXzB4NTg2YjhmW18weDNlZGJkYygweDE4ZCldJiZfMHg1ODZiOGZbJ2F1dG9FeHBhbmQnXSYmXzB4NTg2YjhmW18weDNlZGJkYygweDE2MSldPl8weDU4NmI4ZlsnYXV0b0V4cGFuZExpbWl0J10pe18weDNiNzY1YT0hMHgwO2JyZWFrO31fMHg0Mzg4MTFbXzB4M2VkYmRjKDB4MTZmKV0oXzB4NDI1NDllW18weDNlZGJkYygweDE4NyldKF8weDQ1MmI0MixfMHgzZDlmYzIsXzB4MWNlYjM5LF8weDFkMTNjZSxfMHg1MGRkYmQsXzB4NTg2YjhmKSk7fX1jYXRjaHt9aWYoXzB4M2Q5ZmMyW18weDNlZGJkYygweDFjOCldPSEweDAsXzB4MTJiMWJiJiYoXzB4M2Q5ZmMyW18weDNlZGJkYygweDE5MSldPSEweDApLCFfMHgzYjc2NWEpe3ZhciBfMHg1OTcyNTc9W11bXzB4M2VkYmRjKDB4MWYyKV0odGhpc1tfMHgzZWRiZGMoMHgxYWQpXShfMHgxY2ViMzkpKVsnY29uY2F0J10odGhpc1tfMHgzZWRiZGMoMHgxYWUpXShfMHgxY2ViMzkpKTtmb3IoXzB4M2YzM2ZkPTB4MCxfMHg1NDRmZGE9XzB4NTk3MjU3WydsZW5ndGgnXTtfMHgzZjMzZmQ8XzB4NTQ0ZmRhO18weDNmMzNmZCsrKWlmKF8weDUwZGRiZD1fMHg1OTcyNTdbXzB4M2YzM2ZkXSwhKF8weGVjNTczNyYmXzB4NTgyOWZkW18weDNlZGJkYygweDE1ZCldKF8weDUwZGRiZFtfMHgzZWRiZGMoMHgxNDkpXSgpKSkmJiF0aGlzW18weDNlZGJkYygweDEyNCldKF8weDFjZWIzOSxfMHg1MGRkYmQsXzB4NTg2YjhmKSYmIV8weDNkOWZjMltfMHgzZWRiZGMoMHgxY2YpK18weDUwZGRiZFsndG9TdHJpbmcnXSgpXSl7aWYoXzB4NTAxZjhhKyssXzB4NTg2YjhmW18weDNlZGJkYygweDE2MSldKyssXzB4NTAxZjhhPl8weDI3MGY3ZCl7XzB4M2I3NjVhPSEweDA7YnJlYWs7fWlmKCFfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MThkKV0mJl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNTkpXSYmXzB4NTg2YjhmW18weDNlZGJkYygweDE2MSldPl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxMmYpXSl7XzB4M2I3NjVhPSEweDA7YnJlYWs7fV8weDQzODgxMVtfMHgzZWRiZGMoMHgxNmYpXShfMHg0MjU0OWVbXzB4M2VkYmRjKDB4MTg3KV0oXzB4NDUyYjQyLF8weDNkOWZjMixfMHgxY2ViMzksXzB4MWQxM2NlLF8weDUwZGRiZCxfMHg1ODZiOGYpKTt9fX19fWlmKF8weDEwZGJmMFsndHlwZSddPV8weDFkMTNjZSxfMHgxNGI4ZDM/KF8weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXT1fMHgxY2ViMzlbXzB4M2VkYmRjKDB4MWUxKV0oKSx0aGlzW18weDNlZGJkYygweDE2MildKF8weDFkMTNjZSxfMHgxMGRiZjAsXzB4NTg2YjhmLF8weDIzODYyMCkpOl8weDFkMTNjZT09PV8weDNlZGJkYygweDE2Nik/XzB4MTBkYmYwW18weDNlZGJkYygweDFiNSldPXRoaXNbXzB4M2VkYmRjKDB4MTE1KV1bJ2NhbGwnXShfMHgxY2ViMzkpOl8weDFkMTNjZT09PSdiaWdpbnQnP18weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXT1fMHgxY2ViMzlbXzB4M2VkYmRjKDB4MTQ5KV0oKTpfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxYTApP18weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXT10aGlzWydfcmVnRXhwVG9TdHJpbmcnXVtfMHgzZWRiZGMoMHgxZTIpXShfMHgxY2ViMzkpOl8weDFkMTNjZT09PV8weDNlZGJkYygweDFkOSkmJnRoaXNbXzB4M2VkYmRjKDB4MTNhKV0/XzB4MTBkYmYwW18weDNlZGJkYygweDFiNSldPXRoaXNbJ19TeW1ib2wnXVsncHJvdG90eXBlJ11bXzB4M2VkYmRjKDB4MTQ5KV1bXzB4M2VkYmRjKDB4MWUyKV0oXzB4MWNlYjM5KTohXzB4NTg2YjhmW18weDNlZGJkYygweDE3NCldJiYhKF8weDFkMTNjZT09PV8weDNlZGJkYygweDE0MSl8fF8weDFkMTNjZT09PV8weDNlZGJkYygweDFiMCkpJiYoZGVsZXRlIF8weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXSxfMHgxMGRiZjBbJ2NhcHBlZCddPSEweDApLF8weDNiNzY1YSYmKF8weDEwZGJmMFtfMHgzZWRiZGMoMHgxYmIpXT0hMHgwKSxfMHg0NjI2NGE9XzB4NTg2YjhmW18weDNlZGJkYygweDFhNildWydjdXJyZW50J10sXzB4NTg2YjhmWydub2RlJ11bXzB4M2VkYmRjKDB4MTM5KV09XzB4MTBkYmYwLHRoaXNbXzB4M2VkYmRjKDB4MTUzKV0oXzB4MTBkYmYwLF8weDU4NmI4ZiksXzB4NDM4ODExWydsZW5ndGgnXSl7Zm9yKF8weDNmMzNmZD0weDAsXzB4NTQ0ZmRhPV8weDQzODgxMVtfMHgzZWRiZGMoMHgxZTkpXTtfMHgzZjMzZmQ8XzB4NTQ0ZmRhO18weDNmMzNmZCsrKV8weDQzODgxMVtfMHgzZjMzZmRdKF8weDNmMzNmZCk7fV8weDQ1MmI0MltfMHgzZWRiZGMoMHgxZTkpXSYmKF8weDEwZGJmMFtfMHgzZWRiZGMoMHgxZGQpXT1fMHg0NTJiNDIpO31jYXRjaChfMHgzNDBjZmIpe18weDllNTUwNShfMHgzNDBjZmIsXzB4MTBkYmYwLF8weDU4NmI4Zik7fXJldHVybiB0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MWNlYjM5LF8weDEwZGJmMCksdGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJ10oXzB4MTBkYmYwLF8weDU4NmI4ZiksXzB4NTg2YjhmW18weDNlZGJkYygweDFhNildW18weDNlZGJkYygweDEzOSldPV8weDQ2MjY0YSxfMHg1ODZiOGZbJ2xldmVsJ10tLSxfMHg1ODZiOGZbJ2F1dG9FeHBhbmQnXT1fMHgzMDczMzIsXzB4NTg2YjhmW18weDNlZGJkYygweDE1OSldJiZfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTdkKV1bXzB4M2VkYmRjKDB4MWI2KV0oKSxfMHgxMGRiZjA7fVtfMHgxZDMwMGQoMHgxYWUpXShfMHgzODg0OTgpe3ZhciBfMHg0Y2FmOTA9XzB4MWQzMDBkO3JldHVybiBPYmplY3RbXzB4NGNhZjkwKDB4MWI5KV0/T2JqZWN0W18weDRjYWY5MCgweDFiOSldKF8weDM4ODQ5OCk6W107fVtfMHgxZDMwMGQoMHgxODApXShfMHgzNjg0MTcpe3ZhciBfMHgxYjYwODE9XzB4MWQzMDBkO3JldHVybiEhKF8weDM2ODQxNyYmXzB4YjZkYzk1W18weDFiNjA4MSgweDFmNCldJiZ0aGlzW18weDFiNjA4MSgweDE0YyldKF8weDM2ODQxNyk9PT1fMHgxYjYwODEoMHgxNzUpJiZfMHgzNjg0MTdbXzB4MWI2MDgxKDB4MTRmKV0pO31bXzB4MWQzMDBkKDB4MTI0KV0oXzB4NDVmYWY1LF8weDQyOTMxYixfMHg1MWY2ZmYpe3ZhciBfMHgyYmIwOGU9XzB4MWQzMDBkO3JldHVybiBfMHg1MWY2ZmZbXzB4MmJiMDhlKDB4MTdhKV0/dHlwZW9mIF8weDQ1ZmFmNVtfMHg0MjkzMWJdPT1fMHgyYmIwOGUoMHgxYzUpOiEweDE7fVtfMHgxZDMwMGQoMHgxMzUpXShfMHgxMjgzMGQpe3ZhciBfMHgyNGZlMjY9XzB4MWQzMDBkLF8weDM1NzZjYz0nJztyZXR1cm4gXzB4MzU3NmNjPXR5cGVvZiBfMHgxMjgzMGQsXzB4MzU3NmNjPT09XzB4MjRmZTI2KDB4MWNkKT90aGlzW18weDI0ZmUyNigweDE0YyldKF8weDEyODMwZCk9PT0nW29iamVjdFxcXFx4MjBBcnJheV0nP18weDM1NzZjYz1fMHgyNGZlMjYoMHgxZTcpOnRoaXNbXzB4MjRmZTI2KDB4MTRjKV0oXzB4MTI4MzBkKT09PV8weDI0ZmUyNigweDE0Mik/XzB4MzU3NmNjPV8weDI0ZmUyNigweDE2Nik6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MTI4MzBkKT09PV8weDI0ZmUyNigweDExZSk/XzB4MzU3NmNjPSdiaWdpbnQnOl8weDEyODMwZD09PW51bGw/XzB4MzU3NmNjPV8weDI0ZmUyNigweDE0MSk6XzB4MTI4MzBkW18weDI0ZmUyNigweDExZCldJiYoXzB4MzU3NmNjPV8weDEyODMwZFtfMHgyNGZlMjYoMHgxMWQpXVtfMHgyNGZlMjYoMHgxMTEpXXx8XzB4MzU3NmNjKTpfMHgzNTc2Y2M9PT1fMHgyNGZlMjYoMHgxYjApJiZ0aGlzWydfSFRNTEFsbENvbGxlY3Rpb24nXSYmXzB4MTI4MzBkIGluc3RhbmNlb2YgdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJihfMHgzNTc2Y2M9XzB4MjRmZTI2KDB4MWYzKSksXzB4MzU3NmNjO31bJ19vYmplY3RUb1N0cmluZyddKF8weDUwYTg5ZCl7dmFyIF8weDJiODE2Mj1fMHgxZDMwMGQ7cmV0dXJuIE9iamVjdFtfMHgyYjgxNjIoMHgxOGUpXVtfMHgyYjgxNjIoMHgxNDkpXVtfMHgyYjgxNjIoMHgxZTIpXShfMHg1MGE4OWQpO31bXzB4MWQzMDBkKDB4MTljKV0oXzB4Mjc0YmVkKXt2YXIgXzB4OWMzZGY3PV8weDFkMzAwZDtyZXR1cm4gXzB4Mjc0YmVkPT09XzB4OWMzZGY3KDB4MWQwKXx8XzB4Mjc0YmVkPT09XzB4OWMzZGY3KDB4MTM3KXx8XzB4Mjc0YmVkPT09XzB4OWMzZGY3KDB4MTk3KTt9W18weDFkMzAwZCgweDE4MSldKF8weDQwN2MwMyl7dmFyIF8weDQ1ZmE1OT1fMHgxZDMwMGQ7cmV0dXJuIF8weDQwN2MwMz09PV8weDQ1ZmE1OSgweDFmNil8fF8weDQwN2MwMz09PV8weDQ1ZmE1OSgweDE0YSl8fF8weDQwN2MwMz09PV8weDQ1ZmE1OSgweDFjMyk7fVsnX2FkZFByb3BlcnR5J10oXzB4MWUxNjE0LF8weDM2ZmRhMixfMHgzZDBhOWYsXzB4NTFjMzA0LF8weDIwMDEzOCxfMHgzOGM4OWQpe3ZhciBfMHgzY2Y3ZTI9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4YmFiMjZjKXt2YXIgXzB4M2QzNTFhPV8weDE1ZTMsXzB4NThjYjIzPV8weDIwMDEzOFsnbm9kZSddW18weDNkMzUxYSgweDEzOSldLF8weGY5MzVhNj1fMHgyMDAxMzhbJ25vZGUnXVtfMHgzZDM1MWEoMHgxYmEpXSxfMHgzN2JmODc9XzB4MjAwMTM4Wydub2RlJ11bJ3BhcmVudCddO18weDIwMDEzOFsnbm9kZSddWydwYXJlbnQnXT1fMHg1OGNiMjMsXzB4MjAwMTM4W18weDNkMzUxYSgweDFhNildW18weDNkMzUxYSgweDFiYSldPXR5cGVvZiBfMHg1MWMzMDQ9PSdudW1iZXInP18weDUxYzMwNDpfMHhiYWIyNmMsXzB4MWUxNjE0WydwdXNoJ10oXzB4M2NmN2UyW18weDNkMzUxYSgweDFkNildKF8weDM2ZmRhMixfMHgzZDBhOWYsXzB4NTFjMzA0LF8weDIwMDEzOCxfMHgzOGM4OWQpKSxfMHgyMDAxMzhbXzB4M2QzNTFhKDB4MWE2KV1bXzB4M2QzNTFhKDB4MTFhKV09XzB4MzdiZjg3LF8weDIwMDEzOFsnbm9kZSddWydpbmRleCddPV8weGY5MzVhNjt9O31bXzB4MWQzMDBkKDB4MTg3KV0oXzB4NGI1ZGQ3LF8weDQ0YzI2ZSxfMHgzYjI0NWMsXzB4NWQwZGZhLF8weDU3YjM2NCxfMHgzOWMyOGEsXzB4MWEwZTMyKXt2YXIgXzB4NWE0Mjk2PV8weDFkMzAwZCxfMHg1NGI3Zjk9dGhpcztyZXR1cm4gXzB4NDRjMjZlW18weDVhNDI5NigweDFjZikrXzB4NTdiMzY0W18weDVhNDI5NigweDE0OSldKCldPSEweDAsZnVuY3Rpb24oXzB4NGFiZDYwKXt2YXIgXzB4NGY3ZDMzPV8weDVhNDI5NixfMHgzNmNmYjU9XzB4MzljMjhhW18weDRmN2QzMygweDFhNildW18weDRmN2QzMygweDEzOSldLF8weDJmYWEwNz1fMHgzOWMyOGFbJ25vZGUnXVtfMHg0ZjdkMzMoMHgxYmEpXSxfMHgyN2JiZDY9XzB4MzljMjhhWydub2RlJ11bXzB4NGY3ZDMzKDB4MTFhKV07XzB4MzljMjhhWydub2RlJ11bJ3BhcmVudCddPV8weDM2Y2ZiNSxfMHgzOWMyOGFbXzB4NGY3ZDMzKDB4MWE2KV1bXzB4NGY3ZDMzKDB4MWJhKV09XzB4NGFiZDYwLF8weDRiNWRkN1tfMHg0ZjdkMzMoMHgxNmYpXShfMHg1NGI3ZjlbXzB4NGY3ZDMzKDB4MWQ2KV0oXzB4M2IyNDVjLF8weDVkMGRmYSxfMHg1N2IzNjQsXzB4MzljMjhhLF8weDFhMGUzMikpLF8weDM5YzI4YVsnbm9kZSddWydwYXJlbnQnXT1fMHgyN2JiZDYsXzB4MzljMjhhW18weDRmN2QzMygweDFhNildW18weDRmN2QzMygweDFiYSldPV8weDJmYWEwNzt9O31bXzB4MWQzMDBkKDB4MWQ2KV0oXzB4NWQ1MmFiLF8weDViZmY3MCxfMHgzZTNlZTMsXzB4MWYyZjMyLF8weDUwZTZhMCl7dmFyIF8weDY1ZmJhYj1fMHgxZDMwMGQsXzB4MzgyNDljPXRoaXM7XzB4NTBlNmEwfHwoXzB4NTBlNmEwPWZ1bmN0aW9uKF8weDU2NDI2ZSxfMHgxYTc4ZDgpe3JldHVybiBfMHg1NjQyNmVbXzB4MWE3OGQ4XTt9KTt2YXIgXzB4NGExZTRiPV8weDNlM2VlM1sndG9TdHJpbmcnXSgpLF8weDQ4NDI4ZD1fMHgxZjJmMzJbXzB4NjVmYmFiKDB4MWEyKV18fHt9LF8weDE0NjMxYz1fMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTc0KV0sXzB4MjliOTIxPV8weDFmMmYzMltfMHg2NWZiYWIoMHgxOGQpXTt0cnl7dmFyIF8weDIyYzA5NT10aGlzWydfaXNNYXAnXShfMHg1ZDUyYWIpLF8weDQ1ODk5Yj1fMHg0YTFlNGI7XzB4MjJjMDk1JiZfMHg0NTg5OWJbMHgwXT09PSdcXFxceDI3JyYmKF8weDQ1ODk5Yj1fMHg0NTg5OWJbXzB4NjVmYmFiKDB4MWExKV0oMHgxLF8weDQ1ODk5YltfMHg2NWZiYWIoMHgxZTkpXS0weDIpKTt2YXIgXzB4NDBkOTRmPV8weDFmMmYzMltfMHg2NWZiYWIoMHgxYTIpXT1fMHg0ODQyOGRbXzB4NjVmYmFiKDB4MWNmKStfMHg0NTg5OWJdO18weDQwZDk0ZiYmKF8weDFmMmYzMltfMHg2NWZiYWIoMHgxNzQpXT1fMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTc0KV0rMHgxKSxfMHgxZjJmMzJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT0hIV8weDQwZDk0Zjt2YXIgXzB4MmY4YTgzPXR5cGVvZiBfMHgzZTNlZTM9PV8weDY1ZmJhYigweDFkOSksXzB4NWE1NGQwPXsnbmFtZSc6XzB4MmY4YTgzfHxfMHgyMmMwOTU/XzB4NGExZTRiOnRoaXNbXzB4NjVmYmFiKDB4MTZkKV0oXzB4NGExZTRiKX07aWYoXzB4MmY4YTgzJiYoXzB4NWE1NGQwW18weDY1ZmJhYigweDFkOSldPSEweDApLCEoXzB4NWJmZjcwPT09XzB4NjVmYmFiKDB4MWU3KXx8XzB4NWJmZjcwPT09J0Vycm9yJykpe3ZhciBfMHg0MzZkYWQ9dGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddKF8weDVkNTJhYixfMHgzZTNlZTMpO2lmKF8weDQzNmRhZCYmKF8weDQzNmRhZFtfMHg2NWZiYWIoMHgxOTApXSYmKF8weDVhNTRkMFsnc2V0dGVyJ109ITB4MCksXzB4NDM2ZGFkWydnZXQnXSYmIV8weDQwZDk0ZiYmIV8weDFmMmYzMltfMHg2NWZiYWIoMHgxY2EpXSkpcmV0dXJuIF8weDVhNTRkMFtfMHg2NWZiYWIoMHgxNTQpXT0hMHgwLHRoaXNbXzB4NjVmYmFiKDB4MTdmKV0oXzB4NWE1NGQwLF8weDFmMmYzMiksXzB4NWE1NGQwO312YXIgXzB4MTk4ZjkwO3RyeXtfMHgxOThmOTA9XzB4NTBlNmEwKF8weDVkNTJhYixfMHgzZTNlZTMpO31jYXRjaChfMHgzMDM4MTcpe3JldHVybiBfMHg1YTU0ZDA9eyduYW1lJzpfMHg0YTFlNGIsJ3R5cGUnOl8weDY1ZmJhYigweDEyMSksJ2Vycm9yJzpfMHgzMDM4MTdbXzB4NjVmYmFiKDB4MTc3KV19LHRoaXNbXzB4NjVmYmFiKDB4MTdmKV0oXzB4NWE1NGQwLF8weDFmMmYzMiksXzB4NWE1NGQwO312YXIgXzB4MzY5ODE0PXRoaXNbXzB4NjVmYmFiKDB4MTM1KV0oXzB4MTk4ZjkwKSxfMHg1OTY5NTk9dGhpc1tfMHg2NWZiYWIoMHgxOWMpXShfMHgzNjk4MTQpO2lmKF8weDVhNTRkMFtfMHg2NWZiYWIoMHgxNDApXT1fMHgzNjk4MTQsXzB4NTk2OTU5KXRoaXNbXzB4NjVmYmFiKDB4MTdmKV0oXzB4NWE1NGQwLF8weDFmMmYzMixfMHgxOThmOTAsZnVuY3Rpb24oKXt2YXIgXzB4MWU0NzU3PV8weDY1ZmJhYjtfMHg1YTU0ZDBbXzB4MWU0NzU3KDB4MWI1KV09XzB4MTk4ZjkwW18weDFlNDc1NygweDFlMSldKCksIV8weDQwZDk0ZiYmXzB4MzgyNDljW18weDFlNDc1NygweDE2MildKF8weDM2OTgxNCxfMHg1YTU0ZDAsXzB4MWYyZjMyLHt9KTt9KTtlbHNle3ZhciBfMHgxOTRmZDY9XzB4MWYyZjMyW18weDY1ZmJhYigweDE1OSldJiZfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTdiKV08XzB4MWYyZjMyW18weDY1ZmJhYigweDFiMildJiZfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTdkKV1bJ2luZGV4T2YnXShfMHgxOThmOTApPDB4MCYmXzB4MzY5ODE0IT09XzB4NjVmYmFiKDB4MWM1KSYmXzB4MWYyZjMyW18weDY1ZmJhYigweDE2MSldPF8weDFmMmYzMltfMHg2NWZiYWIoMHgxMmYpXTtfMHgxOTRmZDZ8fF8weDFmMmYzMltfMHg2NWZiYWIoMHgxN2IpXTxfMHgxNDYzMWN8fF8weDQwZDk0Zj8odGhpc1tfMHg2NWZiYWIoMHgxZWQpXShfMHg1YTU0ZDAsXzB4MTk4ZjkwLF8weDFmMmYzMixfMHg0MGQ5NGZ8fHt9KSx0aGlzWydfYWRkaXRpb25hbE1ldGFkYXRhJ10oXzB4MTk4ZjkwLF8weDVhNTRkMCkpOnRoaXNbXzB4NjVmYmFiKDB4MTdmKV0oXzB4NWE1NGQwLF8weDFmMmYzMixfMHgxOThmOTAsZnVuY3Rpb24oKXt2YXIgXzB4NWM0NmQwPV8weDY1ZmJhYjtfMHgzNjk4MTQ9PT1fMHg1YzQ2ZDAoMHgxNDEpfHxfMHgzNjk4MTQ9PT1fMHg1YzQ2ZDAoMHgxYjApfHwoZGVsZXRlIF8weDVhNTRkMFtfMHg1YzQ2ZDAoMHgxYjUpXSxfMHg1YTU0ZDBbXzB4NWM0NmQwKDB4MWRlKV09ITB4MCk7fSk7fXJldHVybiBfMHg1YTU0ZDA7fWZpbmFsbHl7XzB4MWYyZjMyW18weDY1ZmJhYigweDFhMildPV8weDQ4NDI4ZCxfMHgxZjJmMzJbJ2RlcHRoJ109XzB4MTQ2MzFjLF8weDFmMmYzMlsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddPV8weDI5YjkyMTt9fVtfMHgxZDMwMGQoMHgxNjIpXShfMHg2MmFhYTQsXzB4NTllNzcxLF8weDM3YmIyMCxfMHg2ZWMwZTApe3ZhciBfMHg2NDBjZjE9XzB4MWQzMDBkLF8weDI3YWE4NT1fMHg2ZWMwZTBbXzB4NjQwY2YxKDB4MTU4KV18fF8weDM3YmIyMFtfMHg2NDBjZjEoMHgxNTgpXTtpZigoXzB4NjJhYWE0PT09XzB4NjQwY2YxKDB4MTM3KXx8XzB4NjJhYWE0PT09XzB4NjQwY2YxKDB4MTRhKSkmJl8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxYjUpXSl7bGV0IF8weGE3OGYxMj1fMHg1OWU3NzFbJ3ZhbHVlJ11bJ2xlbmd0aCddO18weDM3YmIyMFtfMHg2NDBjZjEoMHgxNGUpXSs9XzB4YTc4ZjEyLF8weDM3YmIyMFtfMHg2NDBjZjEoMHgxNGUpXT5fMHgzN2JiMjBbXzB4NjQwY2YxKDB4MWQyKV0/KF8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxZGUpXT0nJyxkZWxldGUgXzB4NTllNzcxW18weDY0MGNmMSgweDFiNSldKTpfMHhhNzhmMTI+XzB4MjdhYTg1JiYoXzB4NTllNzcxW18weDY0MGNmMSgweDFkZSldPV8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxYjUpXVtfMHg2NDBjZjEoMHgxYTEpXSgweDAsXzB4MjdhYTg1KSxkZWxldGUgXzB4NTllNzcxW18weDY0MGNmMSgweDFiNSldKTt9fVtfMHgxZDMwMGQoMHgxNDUpXShfMHgxNjI4NDcpe3ZhciBfMHg1YjFlOTQ9XzB4MWQzMDBkO3JldHVybiEhKF8weDE2Mjg0NyYmXzB4YjZkYzk1W18weDViMWU5NCgweDE1YildJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgxNjI4NDcpPT09XzB4NWIxZTk0KDB4MWVmKSYmXzB4MTYyODQ3W18weDViMWU5NCgweDE0ZildKTt9WydfcHJvcGVydHlOYW1lJ10oXzB4MjcyZDYyKXt2YXIgXzB4MWU1ODY4PV8weDFkMzAwZDtpZihfMHgyNzJkNjJbXzB4MWU1ODY4KDB4MTYwKV0oL15cXFxcZCskLykpcmV0dXJuIF8weDI3MmQ2Mjt2YXIgXzB4MTQ5Y2FkO3RyeXtfMHgxNDljYWQ9SlNPTlsnc3RyaW5naWZ5J10oJycrXzB4MjcyZDYyKTt9Y2F0Y2h7XzB4MTQ5Y2FkPSdcXFxceDIyJyt0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyNzJkNjIpKydcXFxceDIyJzt9cmV0dXJuIF8weDE0OWNhZFtfMHgxZTU4NjgoMHgxNjApXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDE0OWNhZD1fMHgxNDljYWRbXzB4MWU1ODY4KDB4MWExKV0oMHgxLF8weDE0OWNhZFtfMHgxZTU4NjgoMHgxZTkpXS0weDIpOl8weDE0OWNhZD1fMHgxNDljYWRbXzB4MWU1ODY4KDB4MTdlKV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVsncmVwbGFjZSddKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpWydyZXBsYWNlJ10oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDE0OWNhZDt9WydfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0J10oXzB4MzYyY2U1LF8weDJhNzI2NCxfMHg0MzIzNzAsXzB4MTBmM2I3KXt2YXIgXzB4OTU4M2Q0PV8weDFkMzAwZDt0aGlzW18weDk1ODNkNCgweDE1MyldKF8weDM2MmNlNSxfMHgyYTcyNjQpLF8weDEwZjNiNyYmXzB4MTBmM2I3KCksdGhpc1tfMHg5NTgzZDQoMHgxMWYpXShfMHg0MzIzNzAsXzB4MzYyY2U1KSx0aGlzW18weDk1ODNkNCgweDE4ZildKF8weDM2MmNlNSxfMHgyYTcyNjQpO31bXzB4MWQzMDBkKDB4MTUzKV0oXzB4MmI2M2UxLF8weDVmNGQ2OCl7dmFyIF8weDUxZjVlMT1fMHgxZDMwMGQ7dGhpc1tfMHg1MWY1ZTEoMHgxNzApXShfMHgyYjYzZTEsXzB4NWY0ZDY4KSx0aGlzWydfc2V0Tm9kZVF1ZXJ5UGF0aCddKF8weDJiNjNlMSxfMHg1ZjRkNjgpLHRoaXNbXzB4NTFmNWUxKDB4MTVlKV0oXzB4MmI2M2UxLF8weDVmNGQ2OCksdGhpc1tfMHg1MWY1ZTEoMHgxYTQpXShfMHgyYjYzZTEsXzB4NWY0ZDY4KTt9W18weDFkMzAwZCgweDE3MCldKF8weDVjODQ5OSxfMHgzZTYzMGQpe31bXzB4MWQzMDBkKDB4MWFhKV0oXzB4MTM0OWUzLF8weDNiYjI5OSl7fVtfMHgxZDMwMGQoMHgxYzEpXShfMHgzZDkzNTAsXzB4MTMyYzZiKXt9W18weDFkMzAwZCgweDEzYyldKF8weDExZmQ4Nyl7cmV0dXJuIF8weDExZmQ4Nz09PXRoaXNbJ191bmRlZmluZWQnXTt9W18weDFkMzAwZCgweDE4ZildKF8weDFjOWE1MyxfMHg1ZDVhMWEpe3ZhciBfMHg1ZDdlZDY9XzB4MWQzMDBkO3RoaXNbJ19zZXROb2RlTGFiZWwnXShfMHgxYzlhNTMsXzB4NWQ1YTFhKSx0aGlzWydfc2V0Tm9kZUV4cGFuZGFibGVTdGF0ZSddKF8weDFjOWE1MyksXzB4NWQ1YTFhW18weDVkN2VkNigweDE0OCldJiZ0aGlzW18weDVkN2VkNigweDFjZSldKF8weDFjOWE1MyksdGhpc1tfMHg1ZDdlZDYoMHgxYjcpXShfMHgxYzlhNTMsXzB4NWQ1YTFhKSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHgxYzlhNTMsXzB4NWQ1YTFhKSx0aGlzW18weDVkN2VkNigweDEyOSldKF8weDFjOWE1Myk7fVtfMHgxZDMwMGQoMHgxMWYpXShfMHg0ZWZiZDAsXzB4MTBkZDNkKXt2YXIgXzB4NTAzMmU4PV8weDFkMzAwZDtsZXQgXzB4MjI2ZWI2O3RyeXtfMHhiNmRjOTVbXzB4NTAzMmU4KDB4MWNiKV0mJihfMHgyMjZlYjY9XzB4YjZkYzk1W18weDUwMzJlOCgweDFjYildW18weDUwMzJlOCgweDEzMSldLF8weGI2ZGM5NVsnY29uc29sZSddW18weDUwMzJlOCgweDEzMSldPWZ1bmN0aW9uKCl7fSksXzB4NGVmYmQwJiZ0eXBlb2YgXzB4NGVmYmQwWydsZW5ndGgnXT09XzB4NTAzMmU4KDB4MTk3KSYmKF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxZTkpXT1fMHg0ZWZiZDBbXzB4NTAzMmU4KDB4MWU5KV0pO31jYXRjaHt9ZmluYWxseXtfMHgyMjZlYjYmJihfMHhiNmRjOTVbXzB4NTAzMmU4KDB4MWNiKV1bXzB4NTAzMmU4KDB4MTMxKV09XzB4MjI2ZWI2KTt9aWYoXzB4MTBkZDNkW18weDUwMzJlOCgweDE0MCldPT09XzB4NTAzMmU4KDB4MTk3KXx8XzB4MTBkZDNkW18weDUwMzJlOCgweDE0MCldPT09J051bWJlcicpe2lmKGlzTmFOKF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxYjUpXSkpXzB4MTBkZDNkW18weDUwMzJlOCgweDFlNCldPSEweDAsZGVsZXRlIF8weDEwZGQzZFsndmFsdWUnXTtlbHNlIHN3aXRjaChfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MWI1KV0pe2Nhc2UgTnVtYmVyW18weDUwMzJlOCgweDE2YildOl8weDEwZGQzZFsncG9zaXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxYjUpXTticmVhaztjYXNlIE51bWJlcltfMHg1MDMyZTgoMHgxNmMpXTpfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MTk0KV09ITB4MCxkZWxldGUgXzB4MTBkZDNkW18weDUwMzJlOCgweDFiNSldO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NTAzMmU4KDB4MTg2KV0oXzB4MTBkZDNkW18weDUwMzJlOCgweDFiNSldKSYmKF8weDEwZGQzZFsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxNDApXT09PV8weDUwMzJlOCgweDFjNSkmJnR5cGVvZiBfMHg0ZWZiZDBbXzB4NTAzMmU4KDB4MTExKV09PSdzdHJpbmcnJiZfMHg0ZWZiZDBbXzB4NTAzMmU4KDB4MTExKV0mJl8weDEwZGQzZFtfMHg1MDMyZTgoMHgxMTEpXSYmXzB4NGVmYmQwWyduYW1lJ10hPT1fMHgxMGRkM2RbXzB4NTAzMmU4KDB4MTExKV0mJihfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MTQ0KV09XzB4NGVmYmQwWyduYW1lJ10pO31bJ19pc05lZ2F0aXZlWmVybyddKF8weDEzMGQzZCl7cmV0dXJuIDB4MS9fMHgxMzBkM2Q9PT1OdW1iZXJbJ05FR0FUSVZFX0lORklOSVRZJ107fVtfMHgxZDMwMGQoMHgxY2UpXShfMHgyNWI3NTkpe3ZhciBfMHgyOTcxNzM9XzB4MWQzMDBkOyFfMHgyNWI3NTlbXzB4Mjk3MTczKDB4MWRkKV18fCFfMHgyNWI3NTlbXzB4Mjk3MTczKDB4MWRkKV1bJ2xlbmd0aCddfHxfMHgyNWI3NTlbXzB4Mjk3MTczKDB4MTQwKV09PT0nYXJyYXknfHxfMHgyNWI3NTlbXzB4Mjk3MTczKDB4MTQwKV09PT1fMHgyOTcxNzMoMHgxNWIpfHxfMHgyNWI3NTlbJ3R5cGUnXT09PSdTZXQnfHxfMHgyNWI3NTlbXzB4Mjk3MTczKDB4MWRkKV1bXzB4Mjk3MTczKDB4MTJiKV0oZnVuY3Rpb24oXzB4NGE2ZWI1LF8weDEyMWYzMCl7dmFyIF8weDFhNDg3Yz1fMHgyOTcxNzMsXzB4MmEzYzMzPV8weDRhNmViNVtfMHgxYTQ4N2MoMHgxMTEpXVtfMHgxYTQ4N2MoMHgxNjQpXSgpLF8weDM1OTgyZD1fMHgxMjFmMzBbXzB4MWE0ODdjKDB4MTExKV1bXzB4MWE0ODdjKDB4MTY0KV0oKTtyZXR1cm4gXzB4MmEzYzMzPF8weDM1OTgyZD8tMHgxOl8weDJhM2MzMz5fMHgzNTk4MmQ/MHgxOjB4MDt9KTt9W18weDFkMzAwZCgweDFiNyldKF8weDNlMDc2YyxfMHg0ZDdlYTApe3ZhciBfMHhjOTMwNmY9XzB4MWQzMDBkO2lmKCEoXzB4NGQ3ZWEwW18weGM5MzA2ZigweDE3YSldfHwhXzB4M2UwNzZjWydwcm9wcyddfHwhXzB4M2UwNzZjW18weGM5MzA2ZigweDFkZCldW18weGM5MzA2ZigweDFlOSldKSl7Zm9yKHZhciBfMHhjMzFhYzU9W10sXzB4MjA1NTQ1PVtdLF8weDQwNDU4Nz0weDAsXzB4NGQ5NmY0PV8weDNlMDc2Y1tfMHhjOTMwNmYoMHgxZGQpXVtfMHhjOTMwNmYoMHgxZTkpXTtfMHg0MDQ1ODc8XzB4NGQ5NmY0O18weDQwNDU4NysrKXt2YXIgXzB4NDA1ZGQ0PV8weDNlMDc2Y1sncHJvcHMnXVtfMHg0MDQ1ODddO18weDQwNWRkNFtfMHhjOTMwNmYoMHgxNDApXT09PV8weGM5MzA2ZigweDFjNSk/XzB4YzMxYWM1W18weGM5MzA2ZigweDE2ZildKF8weDQwNWRkNCk6XzB4MjA1NTQ1W18weGM5MzA2ZigweDE2ZildKF8weDQwNWRkNCk7fWlmKCEoIV8weDIwNTU0NVtfMHhjOTMwNmYoMHgxZTkpXXx8XzB4YzMxYWM1W18weGM5MzA2ZigweDFlOSldPD0weDEpKXtfMHgzZTA3NmNbXzB4YzkzMDZmKDB4MWRkKV09XzB4MjA1NTQ1O3ZhciBfMHgxOGY5NzM9eydmdW5jdGlvbnNOb2RlJzohMHgwLCdwcm9wcyc6XzB4YzMxYWM1fTt0aGlzW18weGM5MzA2ZigweDE3MCldKF8weDE4Zjk3MyxfMHg0ZDdlYTApLHRoaXNbJ19zZXROb2RlTGFiZWwnXShfMHgxOGY5NzMsXzB4NGQ3ZWEwKSx0aGlzW18weGM5MzA2ZigweDEzNCldKF8weDE4Zjk3MyksdGhpc1snX3NldE5vZGVQZXJtaXNzaW9ucyddKF8weDE4Zjk3MyxfMHg0ZDdlYTApLF8weDE4Zjk3M1snaWQnXSs9J1xcXFx4MjBmJyxfMHgzZTA3NmNbXzB4YzkzMDZmKDB4MWRkKV1bXzB4YzkzMDZmKDB4MTJjKV0oXzB4MThmOTczKTt9fX1bJ19hZGRMb2FkTm9kZSddKF8weDQ4YWRiYSxfMHgzNTQ4OTYpe31bXzB4MWQzMDBkKDB4MTM0KV0oXzB4ODgwMGZhKXt9W18weDFkMzAwZCgweDFkYildKF8weDI3ZmRhZCl7dmFyIF8weDFmZjYzYj1fMHgxZDMwMGQ7cmV0dXJuIEFycmF5W18weDFmZjYzYigweDE5YSldKF8weDI3ZmRhZCl8fHR5cGVvZiBfMHgyN2ZkYWQ9PV8weDFmZjYzYigweDFjZCkmJnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDI3ZmRhZCk9PT1fMHgxZmY2M2IoMHgxMTApO31bXzB4MWQzMDBkKDB4MWE0KV0oXzB4ZWRiOTI1LF8weDI3NWUxOSl7fVtfMHgxZDMwMGQoMHgxMjkpXShfMHgyZjdkNTcpe3ZhciBfMHg1YzUxYzc9XzB4MWQzMDBkO2RlbGV0ZSBfMHgyZjdkNTdbXzB4NWM1MWM3KDB4MTZhKV0sZGVsZXRlIF8weDJmN2Q1N1tfMHg1YzUxYzcoMHgxMmUpXSxkZWxldGUgXzB4MmY3ZDU3W18weDVjNTFjNygweDE3YyldO31bJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHg0MDA5ODUsXzB4NGVkNTkxKXt9fWxldCBfMHg1NzUxMDE9bmV3IF8weDU3OTZmYygpLF8weDMxN2U2Mj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg0YTI0MTQ9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgyMzcwNmMoXzB4M2MwNTM1LF8weDE2YjhkYyxfMHg0NDAzNmUsXzB4Mzg5M2FmLF8weDVmMmNlMSxfMHgxOGVlYjYpe3ZhciBfMHgxZDgwZjU9XzB4MWQzMDBkO2xldCBfMHgxN2NjZjIsXzB4NTc4YzAyO3RyeXtfMHg1NzhjMDI9XzB4N2FiNWZjKCksXzB4MTdjY2YyPV8weDQ4NjJiZltfMHgxNmI4ZGNdLCFfMHgxN2NjZjJ8fF8weDU3OGMwMi1fMHgxN2NjZjJbJ3RzJ10+MHgxZjQmJl8weDE3Y2NmMltfMHgxZDgwZjUoMHgxYjgpXSYmXzB4MTdjY2YyW18weDFkODBmNSgweDExOCldL18weDE3Y2NmMlsnY291bnQnXTwweDY0PyhfMHg0ODYyYmZbXzB4MTZiOGRjXT1fMHgxN2NjZjI9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHg1NzhjMDJ9LF8weDQ4NjJiZltfMHgxZDgwZjUoMHgxZjcpXT17fSk6XzB4NTc4YzAyLV8weDQ4NjJiZltfMHgxZDgwZjUoMHgxZjcpXVsndHMnXT4weDMyJiZfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bXzB4MWQ4MGY1KDB4MWI4KV0mJl8weDQ4NjJiZltfMHgxZDgwZjUoMHgxZjcpXVtfMHgxZDgwZjUoMHgxMTgpXS9fMHg0ODYyYmZbJ2hpdHMnXVsnY291bnQnXTwweDY0JiYoXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldPXt9KTtsZXQgXzB4MmVjYjdkPVtdLF8weDNlY2MzYz1fMHgxN2NjZjJbJ3JlZHVjZUxpbWl0cyddfHxfMHg0ODYyYmZbJ2hpdHMnXVtfMHgxZDgwZjUoMHgxOTgpXT9fMHg0YTI0MTQ6XzB4MzE3ZTYyLF8weDQ5ZGRkNj1fMHgzN2I1Yzk9Pnt2YXIgXzB4MTY3YjA1PV8weDFkODBmNTtsZXQgXzB4NDVmNjdmPXt9O3JldHVybiBfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MWRkKV09XzB4MzdiNWM5W18weDE2N2IwNSgweDFkZCldLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxYmUpXT1fMHgzN2I1YzlbXzB4MTY3YjA1KDB4MWJlKV0sXzB4NDVmNjdmW18weDE2N2IwNSgweDE1OCldPV8weDM3YjVjOVtfMHgxNjdiMDUoMHgxNTgpXSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MWQyKV09XzB4MzdiNWM5Wyd0b3RhbFN0ckxlbmd0aCddLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxMmYpXT1fMHgzN2I1YzlbXzB4MTY3YjA1KDB4MTJmKV0sXzB4NDVmNjdmW18weDE2N2IwNSgweDFiMildPV8weDM3YjVjOVtfMHgxNjdiMDUoMHgxYjIpXSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MTQ4KV09ITB4MSxfMHg0NWY2N2ZbJ25vRnVuY3Rpb25zJ109IV8weDRiY2M4OSxfMHg0NWY2N2ZbJ2RlcHRoJ109MHgxLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxN2IpXT0weDAsXzB4NDVmNjdmWydleHBJZCddPV8weDE2N2IwNSgweDFmMCksXzB4NDVmNjdmW18weDE2N2IwNSgweDFjNCldPV8weDE2N2IwNSgweDEyZCksXzB4NDVmNjdmW18weDE2N2IwNSgweDE1OSldPSEweDAsXzB4NDVmNjdmW18weDE2N2IwNSgweDE3ZCldPVtdLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxNjEpXT0weDAsXzB4NDVmNjdmW18weDE2N2IwNSgweDFjYSldPSEweDAsXzB4NDVmNjdmWydhbGxTdHJMZW5ndGgnXT0weDAsXzB4NDVmNjdmWydub2RlJ109eydjdXJyZW50Jzp2b2lkIDB4MCwncGFyZW50Jzp2b2lkIDB4MCwnaW5kZXgnOjB4MH0sXzB4NDVmNjdmO307Zm9yKHZhciBfMHgzZTVlY2Q9MHgwO18weDNlNWVjZDxfMHg1ZjJjZTFbXzB4MWQ4MGY1KDB4MWU5KV07XzB4M2U1ZWNkKyspXzB4MmVjYjdkW18weDFkODBmNSgweDE2ZildKF8weDU3NTEwMVsnc2VyaWFsaXplJ10oeyd0aW1lTm9kZSc6XzB4M2MwNTM1PT09XzB4MWQ4MGY1KDB4MTE4KXx8dm9pZCAweDB9LF8weDVmMmNlMVtfMHgzZTVlY2RdLF8weDQ5ZGRkNihfMHgzZWNjM2MpLHt9KSk7aWYoXzB4M2MwNTM1PT09J3RyYWNlJyl7bGV0IF8weDJiMjA5OD1FcnJvcltfMHgxZDgwZjUoMHgxMjApXTt0cnl7RXJyb3JbXzB4MWQ4MGY1KDB4MTIwKV09MHgxLzB4MCxfMHgyZWNiN2RbJ3B1c2gnXShfMHg1NzUxMDFbXzB4MWQ4MGY1KDB4MWVkKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weDFkODBmNSgweDFlNSldLF8weDQ5ZGRkNihfMHgzZWNjM2MpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weDFkODBmNSgweDEyMCldPV8weDJiMjA5ODt9fXJldHVybnsnbWV0aG9kJzonbG9nJywndmVyc2lvbic6XzB4MTRhODAwLCdhcmdzJzpbeyd0cyc6XzB4NDQwMzZlLCdzZXNzaW9uJzpfMHgzODkzYWYsJ2FyZ3MnOl8weDJlY2I3ZCwnaWQnOl8weDE2YjhkYywnY29udGV4dCc6XzB4MThlZWI2fV19O31jYXRjaChfMHg0ZTk5ZDApe3JldHVybnsnbWV0aG9kJzpfMHgxZDgwZjUoMHgxNjkpLCd2ZXJzaW9uJzpfMHgxNGE4MDAsJ2FyZ3MnOlt7J3RzJzpfMHg0NDAzNmUsJ3Nlc3Npb24nOl8weDM4OTNhZiwnYXJncyc6W3sndHlwZSc6XzB4MWQ4MGY1KDB4MTIxKSwnZXJyb3InOl8weDRlOTlkMCYmXzB4NGU5OWQwW18weDFkODBmNSgweDE3NyldfV0sJ2lkJzpfMHgxNmI4ZGMsJ2NvbnRleHQnOl8weDE4ZWViNn1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MTdjY2YyJiZfMHg1NzhjMDIpe2xldCBfMHgxMGIyY2Q9XzB4N2FiNWZjKCk7XzB4MTdjY2YyWydjb3VudCddKyssXzB4MTdjY2YyW18weDFkODBmNSgweDExOCldKz1fMHg4MzRlOWQoXzB4NTc4YzAyLF8weDEwYjJjZCksXzB4MTdjY2YyWyd0cyddPV8weDEwYjJjZCxfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bXzB4MWQ4MGY1KDB4MWI4KV0rKyxfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bXzB4MWQ4MGY1KDB4MTE4KV0rPV8weDgzNGU5ZChfMHg1NzhjMDIsXzB4MTBiMmNkKSxfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bJ3RzJ109XzB4MTBiMmNkLChfMHgxN2NjZjJbJ2NvdW50J10+MHgzMnx8XzB4MTdjY2YyW18weDFkODBmNSgweDExOCldPjB4NjQpJiYoXzB4MTdjY2YyW18weDFkODBmNSgweDE5OCldPSEweDApLChfMHg0ODYyYmZbJ2hpdHMnXVtfMHgxZDgwZjUoMHgxYjgpXT4weDNlOHx8XzB4NDg2MmJmWydoaXRzJ11bXzB4MWQ4MGY1KDB4MTE4KV0+MHgxMmMpJiYoXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldWydyZWR1Y2VMaW1pdHMnXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgyMzcwNmM7fSgoXzB4MTgwNmNjLF8weDFiNjc5NyxfMHg0MmE0YWIsXzB4MWM1NzYxLF8weDQzOWExMSxfMHgyZDc1MTgsXzB4NDc3ZjNmLF8weDQ5Zjc3YyxfMHg2N2YwZmIsXzB4NTFjZThmKT0+e3ZhciBfMHgxN2I0Yzk9XzB4NDNhNTQzO2lmKF8weDE4MDZjY1tfMHgxN2I0YzkoMHgxOWYpXSlyZXR1cm4gXzB4MTgwNmNjW18weDE3YjRjOSgweDE5ZildO2lmKCFZKF8weDE4MDZjYyxfMHg0OWY3N2MsXzB4NDM5YTExKSlyZXR1cm4gXzB4MTgwNmNjWydfY29uc29sZV9uaW5qYSddPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgxODA2Y2NbXzB4MTdiNGM5KDB4MTlmKV07bGV0IF8weDQ1NDBjZT1XKF8weDE4MDZjYyksXzB4NDRlMjMwPV8weDQ1NDBjZVtfMHgxN2I0YzkoMHgxZTgpXSxfMHgxMzA2Nzc9XzB4NDU0MGNlW18weDE3YjRjOSgweDFlYSldLF8weDE0NDRjMj1fMHg0NTQwY2VbXzB4MTdiNGM5KDB4MTM2KV0sXzB4MmNhM2ZiPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4NWUxMDllPVEoXzB4MTgwNmNjLF8weDY3ZjBmYixfMHgyY2EzZmIsXzB4MmQ3NTE4KSxfMHgzZTU4YWI9XzB4MWRlNzkyPT57XzB4MmNhM2ZiWyd0cyddW18weDFkZTc5Ml09XzB4MTMwNjc3KCk7fSxfMHgxNjc4YTg9KF8weGEzNjM1ZixfMHgxM2ExMDIpPT57dmFyIF8weDFhNGIyMj1fMHgxN2I0Yzk7bGV0IF8weDNlYjE0MD1fMHgyY2EzZmJbJ3RzJ11bXzB4MTNhMTAyXTtpZihkZWxldGUgXzB4MmNhM2ZiWyd0cyddW18weDEzYTEwMl0sXzB4M2ViMTQwKXtsZXQgXzB4NDg0ZDc2PV8weDQ0ZTIzMChfMHgzZWIxNDAsXzB4MTMwNjc3KCkpO18weDM3YzYzZChfMHg1ZTEwOWUoXzB4MWE0YjIyKDB4MTE4KSxfMHhhMzYzNWYsXzB4MTQ0NGMyKCksXzB4MjFmYzRhLFtfMHg0ODRkNzZdLF8weDEzYTEwMikpO319LF8weDE5NDBiMD1fMHgxODNmMDE9Pl8weDEyNzIxMj0+e3ZhciBfMHg0NjZmMTE9XzB4MTdiNGM5O3RyeXtfMHgzZTU4YWIoXzB4MTI3MjEyKSxfMHgxODNmMDEoXzB4MTI3MjEyKTt9ZmluYWxseXtfMHgxODA2Y2NbJ2NvbnNvbGUnXVtfMHg0NjZmMTEoMHgxMTgpXT1fMHgxODNmMDE7fX0sXzB4MWI0MDI1PV8weDMwMmI2Nz0+XzB4NTkzYjE0PT57dmFyIF8weDNmNzIxNz1fMHgxN2I0Yzk7dHJ5e2xldCBbXzB4MmNlMDUwLF8weDQzOTE1MV09XzB4NTkzYjE0W18weDNmNzIxNygweDFiNCldKF8weDNmNzIxNygweDE2OCkpO18weDE2NzhhOChfMHg0MzkxNTEsXzB4MmNlMDUwKSxfMHgzMDJiNjcoXzB4MmNlMDUwKTt9ZmluYWxseXtfMHgxODA2Y2NbXzB4M2Y3MjE3KDB4MWNiKV1bXzB4M2Y3MjE3KDB4MWZiKV09XzB4MzAyYjY3O319O18weDE4MDZjY1tfMHgxN2I0YzkoMHgxOWYpXT17J2NvbnNvbGVMb2cnOihfMHgzNjM4NzksXzB4NWM4NDg1KT0+e3ZhciBfMHhkOGQ1MmU9XzB4MTdiNGM5O18weDE4MDZjY1snY29uc29sZSddWydsb2cnXVtfMHhkOGQ1MmUoMHgxMTEpXSE9PSdkaXNhYmxlZExvZycmJl8weDM3YzYzZChfMHg1ZTEwOWUoXzB4ZDhkNTJlKDB4MTY5KSxfMHgzNjM4NzksXzB4MTQ0NGMyKCksXzB4MjFmYzRhLF8weDVjODQ4NSkpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDQ5NmFhOSxfMHgzMzQ1ZTQpPT57dmFyIF8weDJmNTNjNj1fMHgxN2I0Yzk7XzB4MTgwNmNjW18weDJmNTNjNigweDFjYildW18weDJmNTNjNigweDE2OSldW18weDJmNTNjNigweDExMSldIT09XzB4MmY1M2M2KDB4MTU3KSYmXzB4MzdjNjNkKF8weDVlMTA5ZShfMHgyZjUzYzYoMHgxZjgpLF8weDQ5NmFhOSxfMHgxNDQ0YzIoKSxfMHgyMWZjNGEsXzB4MzM0NWU0KSk7fSwnY29uc29sZVRpbWUnOigpPT57dmFyIF8weDFhYTdiMz1fMHgxN2I0Yzk7XzB4MTgwNmNjW18weDFhYTdiMygweDFjYildWyd0aW1lJ109XzB4MTk0MGIwKF8weDE4MDZjY1tfMHgxYWE3YjMoMHgxY2IpXVtfMHgxYWE3YjMoMHgxMTgpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDUxYTI0ZT1fMHgxN2I0Yzk7XzB4MTgwNmNjWydjb25zb2xlJ11bXzB4NTFhMjRlKDB4MWZiKV09XzB4MWI0MDI1KF8weDE4MDZjY1snY29uc29sZSddWyd0aW1lRW5kJ10pO30sJ2F1dG9Mb2cnOihfMHgyZjU2NWIsXzB4NTM3NTgxKT0+e3ZhciBfMHgyOTYwYTE9XzB4MTdiNGM5O18weDM3YzYzZChfMHg1ZTEwOWUoXzB4Mjk2MGExKDB4MTY5KSxfMHg1Mzc1ODEsXzB4MTQ0NGMyKCksXzB4MjFmYzRhLFtfMHgyZjU2NWJdKSk7fSwnYXV0b0xvZ01hbnknOihfMHg0MGIyNDAsXzB4MmYyZTZkKT0+e3ZhciBfMHg0NDIyOGM9XzB4MTdiNGM5O18weDM3YzYzZChfMHg1ZTEwOWUoXzB4NDQyMjhjKDB4MTY5KSxfMHg0MGIyNDAsXzB4MTQ0NGMyKCksXzB4MjFmYzRhLF8weDJmMmU2ZCkpO30sJ2F1dG9UcmFjZSc6KF8weDIyYzY1OSxfMHgyNzExMGQpPT57dmFyIF8weDRkODY4ND1fMHgxN2I0Yzk7XzB4MzdjNjNkKF8weDVlMTA5ZShfMHg0ZDg2ODQoMHgxZjgpLF8weDI3MTEwZCxfMHgxNDQ0YzIoKSxfMHgyMWZjNGEsW18weDIyYzY1OV0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MTIzNTE4LF8weDJlNDg3OCk9PntfMHgzN2M2M2QoXzB4NWUxMDllKCd0cmFjZScsXzB4MTIzNTE4LF8weDE0NDRjMigpLF8weDIxZmM0YSxfMHgyZTQ4NzgpKTt9LCdhdXRvVGltZSc6KF8weDkyNzIwNSxfMHg0M2U1NDcsXzB4ZGVhNDE2KT0+e18weDNlNThhYihfMHhkZWE0MTYpO30sJ2F1dG9UaW1lRW5kJzooXzB4M2YzY2U4LF8weDM0NDJiZCxfMHgyZGY1Y2MpPT57XzB4MTY3OGE4KF8weDM0NDJiZCxfMHgyZGY1Y2MpO30sJ2NvdmVyYWdlJzpfMHg1MDdiNDA9Pnt2YXIgXzB4MzA0NjFlPV8weDE3YjRjOTtfMHgzN2M2M2QoeydtZXRob2QnOl8weDMwNDYxZSgweDE0MyksJ3ZlcnNpb24nOl8weDJkNzUxOCwnYXJncyc6W3snaWQnOl8weDUwN2I0MH1dfSk7fX07bGV0IF8weDM3YzYzZD1KKF8weDE4MDZjYyxfMHgxYjY3OTcsXzB4NDJhNGFiLF8weDFjNTc2MSxfMHg0MzlhMTEsXzB4NTFjZThmKSxfMHgyMWZjNGE9XzB4MTgwNmNjW18weDE3YjRjOSgweDEyNildO3JldHVybiBfMHgxODA2Y2NbJ19jb25zb2xlX25pbmphJ107fSkoZ2xvYmFsVGhpcyxfMHg0M2E1NDMoMHgxNjMpLF8weDQzYTU0MygweDEzMyksXzB4NDNhNTQzKDB4MTVjKSxfMHg0M2E1NDMoMHgxMjgpLF8weDQzYTU0MygweDEzZiksJzE2OTUxOTgzMTI0MjEnLF8weDQzYTU0MygweDEzYiksJycsJycpO1wiKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cihpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVUcmFjZShpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IGVzbGludC1jb21tZW50cy9kaXNhYmxlLWVuYWJsZS1wYWlyOixlc2xpbnQtY29tbWVudHMvbm8tdW5saW1pdGVkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby1hZ2dyZWdhdGluZy1lbmFibGU6LGVzbGludC1jb21tZW50cy9uby1kdXBsaWNhdGUtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWVuYWJsZTosKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=