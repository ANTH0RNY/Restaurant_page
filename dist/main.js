/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss":
      /*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss ***!
  \***********************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `.content {
  height: 30rem;
  width: 100vw;
}

#wrapper {
  display: flex;
  flex-wrap: nowrap;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;
}

.window {
  border: 2px solid black;
  width: 80%;
  overflow: hidden;
  height: 30rem;
  display: flex;
}

.navLinks {
  text-align: center;
  width: 80%;
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
  margin-top: -22px;
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
}

/* On hover, add a black background color with a little bit see-through */
.left:hover,
.right:hover {
  background-color: rgba(0, 0, 0, 0.8);
}`,
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/sass/scroll.scss",
              "webpack://./src/sass/_sizes.scss",
            ],
            names: [],
            mappings:
              "AAMA;EACE,aCNO;EDOP,YCLS;ADAX;;AAQA;EACE,aAAA;EACA,iBAAA;EACA,+BAAA;EACA,sCAAA;AALF;;AAQA;EACE,uBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;AALF;;AASA;EACE,kBAAA;EACA,UAAA;AANF;;AASA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AANF;;AASA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AANF;;AASA;EACE,yBAAA;AANF;;AASA;EACE,yBAAA;EACA,cAAA;EACA,kBAAA;AANF;;AASA;EACE,yBAAA;EACA,cAAA;AANF;;AASA;EACE,eAAA;EACA,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,iBAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;AANF;;AASA;EACE,QAAA;EACA,0BAAA;AANF;;AAUA,yEAAA;AACA;;EAEE,oCAAA;AAPF",
            sourcesContent: [
              "// body {\n//   --height: 30rem;\n//   --width: 100%;\n// }\n@import 'sizes';\n\n.content {\n  height: $height;\n  width: $img-width;\n}\n\n#wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate3d(0, 0, 0);\n  transition: transform .5s ease-in-out;\n}\n\n.window {\n  border: 2px solid black;\n  width: ($width);\n  overflow: hidden;\n  height: ($height);\n  display: flex;\n\n}\n\n.navLinks {\n  text-align: center;\n  width: ($width);\n}\n\n.navLinks ul {\n  margin: 0px;\n  padding: 0px;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.links {\n  float: left;\n  text-align: center;\n  margin: 10px;\n  list-style: none;\n  cursor: pointer;\n  background-color: #cccccc;\n  padding: 5px;\n  border-radius: 50px;\n  border: black 5px solid;\n}\n\n.links:hover {\n  background-color: #ffff00;\n}\n\n.links.active {\n  background-color: #333333;\n  color: #ffffff;\n  outline-width: 7px;\n}\n\n.links.active:hover {\n  background-color: #484848;\n  color: #ffffff;\n}\n\n.btn {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  font-size: 1.2rem;\n  width: auto;\n  margin-top: -22px;\n  padding: 3rem 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n}\n\n.right {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.left:hover,\n.right:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}",
              "$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
      /*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);",
        ]);
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding-inline: 20px;
}

nav {
  display: grid;
  grid-auto-flow: column;
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
}`,
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/sass/style.scss",
              "webpack://./src/sass/_sizes.scss",
            ],
            names: [],
            mappings:
              "AAQA;EACI,iCAAA;EACA,sBAAA;EACA,SAAA;EACA,oBCZW;ADMf;;AAWA;EAII,aAAA;EACA,sBAAA;EAEA,qBAAA;EACA,iBAAA;EAGA,oCAAA;EACA,oBAAA;EACA,mBAAA;AAdJ;AAgBI;EACI,gBAAA;EACA,oBAAA;EACA,kBAAA;EAEA,aAAA;EAEA,6BAAA;EAEA,kBAAA;AAjBR;AAoBI;EACI,gBAAA;EAEA,kBAAA;AAnBR;AAuBI;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;EAGA,YA1CQ;EA2CR,UAAA;EACA,wCAAA;AAvBR;AA+BI;EACI,UAAA;AA7BR;AAqCI;;EAEI,UAAA;AAnCR;AAuCI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AArCR",
            sourcesContent: [
              "// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\n@import 'sizes';\n\n// $body-padding: 20px;\n\nbody {\n    font-family: \"Roboto\", sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding-inline: $body-padding;\n    // max-width: 1200px;\n    // font-size: 1.2rem;\n}\n\nnav {\n    $width:0;\n    $translate: 0;\n\n    display: grid;\n    grid-auto-flow: column;\n    // grid-template-columns: repeat(4, 1fr);\n    place-content: center;\n    font-size: larger;\n    // background-color: #fab3ad;\n    // background-color: #DE9C94;\n    background-color: rgba(255, 232, 232, 1);\n    padding-inline: 1rem;\n    border-radius: 10px;\n\n    ul {\n        list-style: none;\n        grid-column-start: 3;\n        grid-column-end: 5;\n\n        display: flex;\n        // flex-direction: column;\n        justify-content: space-around;\n\n        text-align: center;\n    }\n\n    li {\n        font-weight: 500;\n        // opacity: 0.5;\n        position: relative;\n        // color: hotpink;\n        // overflow: hidden;\n    }\n    li::after {\n        content: \"\";\n        position: absolute;\n        height: 3px;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n        background-color: orangered;\n        // opacity: 1;\n        \n        translate: $translate;\n        scale: $width 1;\n        transition: scale 300ms,\n        translate 500ms;\n    }\n    li:has(+ :hover){\n    //    color: red;\n       $translate: 100%;\n    }\n\n    li:hover::after{\n        scale: 1 1;\n    }\n\n    li:hover + li{\n        // color: red;\n        $translate: -100%;\n    }\n\n    li:hover,\n    li:focus-visible {\n        opacity: 1;\n        $width: 1;\n    }\n\n    .Nav-brand {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        display: flex;\n        align-items: center;\n    }\n}",
              "$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/sass/scroll.scss":
      /*!******************************!*\
  !*** ./src/sass/scroll.scss ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./scroll.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/scroll.scss"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_scroll_scss__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./src/sass/style.scss":
      /*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/components/navbar.js":
      /*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../util */ "./src/util.js");

        function navBar() {
          const navBar = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "nav"
          );
          const ul = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "ul"
          );
          const navBrand = (0,
          _util__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");

          const listItems = [
            {
              title: "Menu",
            },
            {
              title: "Contacts",
            },
            {
              title: "Reservation",
            },
            {
              title: "About",
            },
          ];

          for (const i of listItems) {
            const item = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "li"
            );
            (0, _util__WEBPACK_IMPORTED_MODULE_0__.setAttributes)(item, {
              class: "nav-item",
            });
            item.textContent = i.title;
            ul.appendChild(item);
          }
          navBrand.classList.add("Nav-brand");
          navBrand.innerHTML = "Anime Food";
          navBar.appendChild(navBrand);
          navBar.appendChild(ul);
          navBar.classList.add("nav-bar");
          return navBar;
        }

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = navBar;

        /***/
      },

    /***/ "./src/components/scroll.js":
      /*!**********************************!*\
  !*** ./src/components/scroll.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../util */ "./src/util.js");
        /* harmony import */ var _img_scrollbar_1232732_jpg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../img/scrollbar/1232732.jpg */ "./src/img/scrollbar/1232732.jpg"
          );
        /* harmony import */ var _img_scrollbar_assorted_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../img/scrollbar/assorted.jpg */ "./src/img/scrollbar/assorted.jpg"
          );
        /* harmony import */ var _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../img/scrollbar/balls.gif */ "./src/img/scrollbar/balls.gif"
          );
        /* harmony import */ var _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../img/scrollbar/noodle.gif */ "./src/img/scrollbar/noodle.gif"
          );
        /* harmony import */ var _sass_scroll_scss__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../sass/scroll.scss */ "./src/sass/scroll.scss"
          );

        const images = [
          _img_scrollbar_1232732_jpg__WEBPACK_IMPORTED_MODULE_1__,

          _img_scrollbar_assorted_jpg__WEBPACK_IMPORTED_MODULE_2__,
          _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_3__,
          _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_4__,
        ];

        function createImageSlider() {
          /*
            Creates the image slide
            */
          const container = (0,
          _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("section", {
            class: "sections image-slider",
          });
          const viewWindow = (0,
          _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
            class: "window",
          });
          const wrapper = (0,
          _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
            id: "wrapper",
          });

          const navLinks = (0,
          _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
            class: "navLinks",
          });
          const ul = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)(
            "ul"
          );

          images.forEach((image, index) => {
            const img = (0,
            _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("img", {
              src: image,
              alt: `image-${index + 1}`,
              id: `item${index + 1}`,
              class: "content",
            });
            wrapper.appendChild(img);

            const li = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)(
              "li",
              {
                class: "links",
                "data-number": index + 1,
              }
            );
            ul.appendChild(li);
          });
          const btn1 = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)(
            "button",
            {
              class: "btn left",
              "data-side": "left",
            }
          );
          const btn2 = (0, _util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)(
            "button",
            {
              class: "btn right",
              "data-side": "right",
            }
          );
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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          createImageSlider;

        /***/
      },

    /***/ "./src/util.js":
      /*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createElement: () => /* binding */ createElement,
          /* harmony export */ createSetElement: () =>
            /* binding */ createSetElement,
          /* harmony export */ getElement: () => /* binding */ getElement,
          /* harmony export */ setAttributes: () => /* binding */ setAttributes,
          /* harmony export */
        });
        function getElement(selector) {
          return document.querySelector(selector);
        }

        function createElement(type) {
          return document.createElement(type);
        }

        function setAttributes(element, attributes) {
          // Object.entries(attributes).forEach()
          for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
          }
        }

        function createSetElement(type, attributes = {}) {
          const element = createElement(type);
          setAttributes(element, attributes);
          return element;
        }

        /***/
      },

    /***/ "./src/img/scrollbar/1232732.jpg":
      /*!***************************************!*\
  !*** ./src/img/scrollbar/1232732.jpg ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3d15cb844fbcd1f5717e.jpg";

        /***/
      },

    /***/ "./src/img/scrollbar/assorted.jpg":
      /*!****************************************!*\
  !*** ./src/img/scrollbar/assorted.jpg ***!
  \****************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "e4a5091e82e90d3a1caa.jpg";

        /***/
      },

    /***/ "./src/img/scrollbar/balls.gif":
      /*!*************************************!*\
  !*** ./src/img/scrollbar/balls.gif ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "38bcb3bb63d6265a327e.gif";

        /***/
      },

    /***/ "./src/img/scrollbar/noodle.gif":
      /*!**************************************!*\
  !*** ./src/img/scrollbar/noodle.gif ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "e2c45431868598a0ba94.gif";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
    /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./util */ "./src/util.js");
    /* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ./components/navbar */ "./src/components/navbar.js"
      );
    /* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ./components/scroll */ "./src/components/scroll.js"
      );

    /* eslint-disable */ console.log(...oo_oo(`723013168_0`, "hello, World!"));

    const navbar = (0,
    _components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const imageSlider = (0,
    _components_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])();

    const body = (0, _util__WEBPACK_IMPORTED_MODULE_1__.getElement)("body");
    const main = (0, _util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)(
      "div",
      { class: "body main" }
    );
    body.appendChild(navbar);
    body.appendChild(main);
    main.appendChild(imageSlider);
    /* eslint-disable */
    function oo_cm() {
      try {
        return (
          (0, eval)("globalThis._console_ninja") ||
          (0, eval)(
            "/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x43a543=_0x15e3;(function(_0x32ecad,_0x4225a4){var _0x3645a8=_0x15e3,_0x3ae322=_0x32ecad();while(!![]){try{var _0x498c64=-parseInt(_0x3645a8(0x19b))/0x1*(parseInt(_0x3645a8(0x1a3))/0x2)+-parseInt(_0x3645a8(0x1d5))/0x3+-parseInt(_0x3645a8(0x112))/0x4*(parseInt(_0x3645a8(0x150))/0x5)+parseInt(_0x3645a8(0x19e))/0x6*(-parseInt(_0x3645a8(0x1fa))/0x7)+-parseInt(_0x3645a8(0x1bd))/0x8*(parseInt(_0x3645a8(0x1e0))/0x9)+-parseInt(_0x3645a8(0x1c7))/0xa*(-parseInt(_0x3645a8(0x1af))/0xb)+parseInt(_0x3645a8(0x132))/0xc;if(_0x498c64===_0x4225a4)break;else _0x3ae322['push'](_0x3ae322['shift']());}catch(_0x3afb16){_0x3ae322['push'](_0x3ae322['shift']());}}}(_0x87d0,0x8c989));function _0x15e3(_0x112a07,_0x13317a){var _0x15e3a8=_0x87d0();return _0x15e3=function(_0x4e9a8a,_0x21add4){_0x4e9a8a=_0x4e9a8a-0x110;var _0x42146e=_0x15e3a8[_0x4e9a8a];return _0x42146e;},_0x15e3(_0x112a07,_0x13317a);}var j=Object[_0x43a543(0x155)],X=Object[_0x43a543(0x1b1)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x43a543(0x1fc)],te=Object[_0x43a543(0x138)],ne=Object[_0x43a543(0x18e)][_0x43a543(0x1ec)],re=(_0x54c671,_0x145a94,_0x13174b,_0x4bfcc6)=>{var _0x4f929f=_0x43a543;if(_0x145a94&&typeof _0x145a94==_0x4f929f(0x1cd)||typeof _0x145a94=='function'){for(let _0x18280f of ee(_0x145a94))!ne[_0x4f929f(0x1e2)](_0x54c671,_0x18280f)&&_0x18280f!==_0x13174b&&X(_0x54c671,_0x18280f,{'get':()=>_0x145a94[_0x18280f],'enumerable':!(_0x4bfcc6=G(_0x145a94,_0x18280f))||_0x4bfcc6[_0x4f929f(0x1c0)]});}return _0x54c671;},K=(_0x338af9,_0x4279be,_0x176c39)=>(_0x176c39=_0x338af9!=null?j(te(_0x338af9)):{},re(_0x4279be||!_0x338af9||!_0x338af9['__es'+'Module']?X(_0x176c39,'default',{'value':_0x338af9,'enumerable':!0x0}):_0x176c39,_0x338af9)),q=class{constructor(_0x30b9b7,_0x4ddc50,_0x3b3329,_0x221b92,_0xd92f29){var _0x6e22a9=_0x43a543;this[_0x6e22a9(0x172)]=_0x30b9b7,this[_0x6e22a9(0x1f1)]=_0x4ddc50,this[_0x6e22a9(0x18a)]=_0x3b3329,this['nodeModules']=_0x221b92,this[_0x6e22a9(0x188)]=_0xd92f29,this[_0x6e22a9(0x1ac)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x6e22a9(0x193)]=!0x1,this[_0x6e22a9(0x179)]=!0x1,this['_inBrowser']=!this[_0x6e22a9(0x172)][_0x6e22a9(0x1c2)]?.[_0x6e22a9(0x18c)]?.[_0x6e22a9(0x1a6)],this['_WebSocketClass']=null,this[_0x6e22a9(0x178)]=0x0,this[_0x6e22a9(0x14d)]=0x14,this[_0x6e22a9(0x1ee)]='https://tinyurl.com/37x8b79t',this[_0x6e22a9(0x116)]=(this[_0x6e22a9(0x1f9)]?_0x6e22a9(0x1a8):_0x6e22a9(0x1d3))+this[_0x6e22a9(0x1ee)];}async[_0x43a543(0x113)](){var _0x15e7e3=_0x43a543;if(this[_0x15e7e3(0x117)])return this[_0x15e7e3(0x117)];let _0x38e7bf;if(this[_0x15e7e3(0x1f9)])_0x38e7bf=this['global'][_0x15e7e3(0x196)];else{if(this['global'][_0x15e7e3(0x1c2)]?.[_0x15e7e3(0x114)])_0x38e7bf=this[_0x15e7e3(0x172)]['process']?.['_WebSocket'];else try{let _0x5718ef=await import(_0x15e7e3(0x1a7));_0x38e7bf=(await import((await import(_0x15e7e3(0x182)))[_0x15e7e3(0x1c9)](_0x5718ef[_0x15e7e3(0x1e3)](this[_0x15e7e3(0x1dc)],'ws/index.js'))[_0x15e7e3(0x149)]()))[_0x15e7e3(0x123)];}catch{try{_0x38e7bf=require(require(_0x15e7e3(0x1a7))['join'](this[_0x15e7e3(0x1dc)],'ws'));}catch{throw new Error(_0x15e7e3(0x1bf));}}}return this[_0x15e7e3(0x117)]=_0x38e7bf,_0x38e7bf;}[_0x43a543(0x1d1)](){var _0x264fb3=_0x43a543;this[_0x264fb3(0x179)]||this['_connected']||this[_0x264fb3(0x178)]>=this[_0x264fb3(0x14d)]||(this[_0x264fb3(0x15f)]=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x264fb3(0x12a)]=new Promise((_0x4186df,_0x681501)=>{var _0x2ebc2c=_0x264fb3;this[_0x2ebc2c(0x113)]()[_0x2ebc2c(0x156)](_0x1f4672=>{var _0x3ed9c0=_0x2ebc2c;let _0x14af06=new _0x1f4672(_0x3ed9c0(0x192)+(!this[_0x3ed9c0(0x1f9)]&&this[_0x3ed9c0(0x188)]?_0x3ed9c0(0x165):this[_0x3ed9c0(0x1f1)])+':'+this[_0x3ed9c0(0x18a)]);_0x14af06[_0x3ed9c0(0x167)]=()=>{var _0x2b49f8=_0x3ed9c0;this[_0x2b49f8(0x1ac)]=!0x1,this[_0x2b49f8(0x1e6)](_0x14af06),this[_0x2b49f8(0x19d)](),_0x681501(new Error(_0x2b49f8(0x147)));},_0x14af06['onopen']=()=>{var _0x2ea352=_0x3ed9c0;this['_inBrowser']||_0x14af06[_0x2ea352(0x183)]&&_0x14af06[_0x2ea352(0x183)][_0x2ea352(0x1eb)]&&_0x14af06[_0x2ea352(0x183)]['unref'](),_0x4186df(_0x14af06);},_0x14af06[_0x3ed9c0(0x1da)]=()=>{var _0x5359f5=_0x3ed9c0;this[_0x5359f5(0x15f)]=!0x0,this[_0x5359f5(0x1e6)](_0x14af06),this['_attemptToReconnectShortly']();},_0x14af06['onmessage']=_0xa518a9=>{var _0x393f61=_0x3ed9c0;try{_0xa518a9&&_0xa518a9[_0x393f61(0x18b)]&&this[_0x393f61(0x1f9)]&&JSON[_0x393f61(0x1c6)](_0xa518a9[_0x393f61(0x18b)])['method']==='reload'&&this[_0x393f61(0x172)][_0x393f61(0x184)][_0x393f61(0x185)]();}catch{}};})['then'](_0x21bab2=>(this['_connected']=!0x0,this[_0x2ebc2c(0x179)]=!0x1,this[_0x2ebc2c(0x15f)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2ebc2c(0x178)]=0x0,_0x21bab2))[_0x2ebc2c(0x1b3)](_0x3e393b=>(this['_connected']=!0x1,this[_0x2ebc2c(0x179)]=!0x1,console[_0x2ebc2c(0x1d8)](_0x2ebc2c(0x1df)+this['_webSocketErrorDocsLink']),_0x681501(new Error(_0x2ebc2c(0x1f5)+(_0x3e393b&&_0x3e393b[_0x2ebc2c(0x177)])))));}));}[_0x43a543(0x1e6)](_0x3edf14){var _0x3280ec=_0x43a543;this['_connected']=!0x1,this[_0x3280ec(0x179)]=!0x1;try{_0x3edf14[_0x3280ec(0x1da)]=null,_0x3edf14[_0x3280ec(0x167)]=null,_0x3edf14[_0x3280ec(0x11c)]=null;}catch{}try{_0x3edf14[_0x3280ec(0x189)]<0x2&&_0x3edf14[_0x3280ec(0x146)]();}catch{}}['_attemptToReconnectShortly'](){var _0x52a1d0=_0x43a543;clearTimeout(this['_reconnectTimeout']),!(this[_0x52a1d0(0x178)]>=this[_0x52a1d0(0x14d)])&&(this[_0x52a1d0(0x176)]=setTimeout(()=>{var _0x252df7=_0x52a1d0;this['_connected']||this[_0x252df7(0x179)]||(this[_0x252df7(0x1d1)](),this[_0x252df7(0x12a)]?.[_0x252df7(0x1b3)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]&&this[_0x52a1d0(0x176)][_0x52a1d0(0x1eb)]());}async[_0x43a543(0x11b)](_0x54e6c1){var _0x1ad97f=_0x43a543;try{if(!this[_0x1ad97f(0x1ac)])return;this[_0x1ad97f(0x15f)]&&this[_0x1ad97f(0x1d1)](),(await this[_0x1ad97f(0x12a)])[_0x1ad97f(0x11b)](JSON[_0x1ad97f(0x14b)](_0x54e6c1));}catch(_0x1f5e2b){console[_0x1ad97f(0x1d8)](this[_0x1ad97f(0x116)]+':\\x20'+(_0x1f5e2b&&_0x1f5e2b[_0x1ad97f(0x177)])),this['_allowedToSend']=!0x1,this[_0x1ad97f(0x19d)]();}}};function J(_0x434156,_0x226963,_0x3e5227,_0xf0d922,_0x3d3edf,_0x1d9a2d){var _0x1d2b40=_0x43a543;let _0x3b4857=_0x3e5227['split'](',')[_0x1d2b40(0x1d4)](_0x229fec=>{var _0x1e26b3=_0x1d2b40;try{_0x434156[_0x1e26b3(0x126)]||((_0x3d3edf===_0x1e26b3(0x15a)||_0x3d3edf===_0x1e26b3(0x127)||_0x3d3edf==='astro')&&(_0x3d3edf+=_0x434156[_0x1e26b3(0x1c2)]?.[_0x1e26b3(0x18c)]?.[_0x1e26b3(0x1a6)]?_0x1e26b3(0x130):_0x1e26b3(0x16e)),_0x434156[_0x1e26b3(0x126)]={'id':+new Date(),'tool':_0x3d3edf});let _0x3f8189=new q(_0x434156,_0x226963,_0x229fec,_0xf0d922,_0x1d9a2d);return _0x3f8189[_0x1e26b3(0x11b)][_0x1e26b3(0x125)](_0x3f8189);}catch(_0x182932){return console[_0x1e26b3(0x1d8)](_0x1e26b3(0x171),_0x182932&&_0x182932['message']),()=>{};}});return _0x4027ca=>_0x3b4857[_0x1d2b40(0x14f)](_0x45866d=>_0x45866d(_0x4027ca));}function W(_0x1a8aa1){var _0xf6a0cd=_0x43a543;let _0x5c576d=function(_0x1751bd,_0xcb62be){return _0xcb62be-_0x1751bd;},_0x559eb4;if(_0x1a8aa1['performance'])_0x559eb4=function(){var _0x15a1a5=_0x15e3;return _0x1a8aa1[_0x15a1a5(0x1fd)][_0x15a1a5(0x136)]();};else{if(_0x1a8aa1['process']&&_0x1a8aa1[_0xf6a0cd(0x1c2)][_0xf6a0cd(0x173)])_0x559eb4=function(){var _0x31a347=_0xf6a0cd;return _0x1a8aa1['process'][_0x31a347(0x173)]();},_0x5c576d=function(_0x3bff3d,_0xdadf55){return 0x3e8*(_0xdadf55[0x0]-_0x3bff3d[0x0])+(_0xdadf55[0x1]-_0x3bff3d[0x1])/0xf4240;};else try{let {performance:_0x417602}=require(_0xf6a0cd(0x195));_0x559eb4=function(){var _0x281dd2=_0xf6a0cd;return _0x417602[_0x281dd2(0x136)]();};}catch{_0x559eb4=function(){return+new Date();};}}return{'elapsed':_0x5c576d,'timeStamp':_0x559eb4,'now':()=>Date[_0xf6a0cd(0x136)]()};}function _0x87d0(){var _0x3111ab=['_allowedToConnectOnSend','match','autoExpandPropertyCount','_capIfString','127.0.0.1','toLowerCase','gateway.docker.internal','date','onerror',':logPointId:','log','_hasSymbolPropertyOnItsPath','POSITIVE_INFINITY','NEGATIVE_INFINITY','_propertyName','\\x20browser','push','_setNodeId','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','global','hrtime','depth','[object\\x20Set]','_reconnectTimeout','message','_connectAttemptCount','_connecting','noFunctions','level','_hasMapOnItsPath','autoExpandPreviousObjects','replace','_processTreeNodeResult','_isSet','_isPrimitiveWrapperType','url','_socket','location','reload','_isNegativeZero','_addObjectProperty','dockerizedApp','readyState','port','data','versions','isExpressionToEvaluate','prototype','_treeNodePropertiesAfterFullValue','set','_p_name','ws://','_connected','negativeInfinity','perf_hooks','WebSocket','number','reduceLimits','hostname','isArray','10RcACza','_isPrimitiveType','_attemptToReconnectShortly','39048mcLhWw','_console_ninja','RegExp','substr','expressionsToEvaluate','140152CPbjuj','_setNodePermissions','Symbol','node','path','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_consoleNinjaAllowedToStart','_setNodeQueryPath','_numberRegExp','_allowedToSend','_getOwnPropertyNames','_getOwnPropertySymbols','11rIorlN','undefined','defineProperty','autoExpandMaxDepth','catch','split','value','pop','_addFunctionsNode','count','getOwnPropertySymbols','index','cappedProps','cappedElements','538528FhyPFw','elements','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','enumerable','_setNodeLabel','process','Number','rootExpression','function','parse','8277370ctUkPc','_p_length','pathToFileURL','resolveGetters','console','includes','object','_sortProps','_p_','boolean','_connectToHostNow','totalStrLength','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','map','785946tKReKN','_property','...','warn','symbol','onclose','_isArray','nodeModules','props','capped','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','63uGlcKA','valueOf','call','join','nan','stack','_disposeWebsocket','array','elapsed','length','timeStamp','unref','hasOwnProperty','serialize','_webSocketErrorDocsLink','[object\\x20Map]','root_exp_id','host','concat','HTMLAllCollection','Set','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Boolean','hits','trace','_inBrowser','224yVoYLn','timeEnd','getOwnPropertyNames','performance','nuxt','[object\\x20Array]','name','3267424EsDUvn','getWebSocketClass','_WebSocket','_dateToString','_sendErrorMessage','_WebSocketClass','time','_addProperty','parent','send','onopen','constructor','[object\\x20BigInt]','_additionalMetadata','stackTraceLimit','unknown','slice','default','_blacklistedProperty','bind','_console_ninja_session','remix','webpack','_cleanNode','_ws','sort','unshift','root_exp','_hasSetOnItsPath','autoExpandLimit','\\x20server','error','26486520SacVXf','39415','_setNodeExpandableState','_type','now','string','getPrototypeOf','current','_Symbol',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"fedora\",\"192.168.1.18\"],'_isUndefined','_undefined','getOwnPropertyDescriptor','1.0.0','type','null','[object\\x20Date]','coverage','funcName','_isMap','close','logger\\x20websocket\\x20error','sortProps','toString','String','stringify','_objectToString','_maxConnectAttemptCount','allStrLength','forEach','5KadxxX','_keyStrRegExp','_regExpToString','_treeNodePropertiesBeforeFullValue','getter','create','then','disabledTrace','strLength','autoExpand','next.js','Map',\"/home/anthony/.vscode/extensions/wallabyjs.console-ninja-0.0.225/node_modules\",'test','_setNodeExpressionPath'];_0x87d0=function(){return _0x3111ab;};return _0x87d0();}function Y(_0x1f675c,_0x277485,_0x133b71){var _0x45d4bb=_0x43a543;if(_0x1f675c[_0x45d4bb(0x1a9)]!==void 0x0)return _0x1f675c[_0x45d4bb(0x1a9)];let _0x53c150=_0x1f675c[_0x45d4bb(0x1c2)]?.[_0x45d4bb(0x18c)]?.[_0x45d4bb(0x1a6)];return _0x53c150&&_0x133b71===_0x45d4bb(0x1fe)?_0x1f675c[_0x45d4bb(0x1a9)]=!0x1:_0x1f675c[_0x45d4bb(0x1a9)]=_0x53c150||!_0x277485||_0x1f675c[_0x45d4bb(0x184)]?.[_0x45d4bb(0x199)]&&_0x277485[_0x45d4bb(0x1cc)](_0x1f675c['location'][_0x45d4bb(0x199)]),_0x1f675c[_0x45d4bb(0x1a9)];}function Q(_0xb6dc95,_0x4bcc89,_0x4862bf,_0x14a800){var _0x1d300d=_0x43a543;_0xb6dc95=_0xb6dc95,_0x4bcc89=_0x4bcc89,_0x4862bf=_0x4862bf,_0x14a800=_0x14a800;let _0x226747=W(_0xb6dc95),_0x834e9d=_0x226747['elapsed'],_0x7ab5fc=_0x226747[_0x1d300d(0x1ea)];class _0x5796fc{constructor(){var _0x5e3a77=_0x1d300d;this[_0x5e3a77(0x151)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5e3a77(0x1ab)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x5e3a77(0x13d)]=_0xb6dc95[_0x5e3a77(0x1b0)],this['_HTMLAllCollection']=_0xb6dc95['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x5e3a77(0x13e)],this['_getOwnPropertyNames']=Object[_0x5e3a77(0x1fc)],this[_0x5e3a77(0x13a)]=_0xb6dc95[_0x5e3a77(0x1a5)],this[_0x5e3a77(0x152)]=RegExp[_0x5e3a77(0x18e)][_0x5e3a77(0x149)],this['_dateToString']=Date[_0x5e3a77(0x18e)][_0x5e3a77(0x149)];}[_0x1d300d(0x1ed)](_0x10dbf0,_0x1ceb39,_0x586b8f,_0x238620){var _0x3edbdc=_0x1d300d,_0x42549e=this,_0x307332=_0x586b8f[_0x3edbdc(0x159)];function _0x9e5505(_0x12bb31,_0x2bd01a,_0x352f91){var _0x10f6e2=_0x3edbdc;_0x2bd01a[_0x10f6e2(0x140)]='unknown',_0x2bd01a['error']=_0x12bb31[_0x10f6e2(0x177)],_0x46264a=_0x352f91['node'][_0x10f6e2(0x139)],_0x352f91['node'][_0x10f6e2(0x139)]=_0x2bd01a,_0x42549e['_treeNodePropertiesBeforeFullValue'](_0x2bd01a,_0x352f91);}try{_0x586b8f[_0x3edbdc(0x17b)]++,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x16f)](_0x1ceb39);var _0x3f33fd,_0x544fda,_0x1503e9,_0xbcd6bf,_0x452b42=[],_0x438811=[],_0x50ddbd,_0x1d13ce=this['_type'](_0x1ceb39),_0xec5737=_0x1d13ce===_0x3edbdc(0x1e7),_0x3a59a7=!0x1,_0x12b1bb=_0x1d13ce===_0x3edbdc(0x1c5),_0x44ca6f=this['_isPrimitiveType'](_0x1d13ce),_0x81d63d=this[_0x3edbdc(0x181)](_0x1d13ce),_0x14b8d3=_0x44ca6f||_0x81d63d,_0x3d9fc2={},_0x501f8a=0x0,_0x3b765a=!0x1,_0x46264a,_0x5829fd=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x586b8f[_0x3edbdc(0x174)]){if(_0xec5737){if(_0x544fda=_0x1ceb39[_0x3edbdc(0x1e9)],_0x544fda>_0x586b8f[_0x3edbdc(0x1be)]){for(_0x1503e9=0x0,_0xbcd6bf=_0x586b8f[_0x3edbdc(0x1be)],_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811[_0x3edbdc(0x16f)](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));_0x10dbf0[_0x3edbdc(0x1bc)]=!0x0;}else{for(_0x1503e9=0x0,_0xbcd6bf=_0x544fda,_0x3f33fd=_0x1503e9;_0x3f33fd<_0xbcd6bf;_0x3f33fd++)_0x438811['push'](_0x42549e['_addProperty'](_0x452b42,_0x1ceb39,_0x1d13ce,_0x3f33fd,_0x586b8f));}_0x586b8f[_0x3edbdc(0x161)]+=_0x438811[_0x3edbdc(0x1e9)];}if(!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&!_0x44ca6f&&_0x1d13ce!=='String'&&_0x1d13ce!=='Buffer'&&_0x1d13ce!=='bigint'){var _0x270f7d=_0x238620['props']||_0x586b8f[_0x3edbdc(0x1dd)];if(this[_0x3edbdc(0x180)](_0x1ceb39)?(_0x3f33fd=0x0,_0x1ceb39['forEach'](function(_0x5089bb){var _0x427da8=_0x3edbdc;if(_0x501f8a++,_0x586b8f[_0x427da8(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x427da8(0x18d)]&&_0x586b8f[_0x427da8(0x159)]&&_0x586b8f[_0x427da8(0x161)]>_0x586b8f[_0x427da8(0x12f)]){_0x3b765a=!0x0;return;}_0x438811[_0x427da8(0x16f)](_0x42549e[_0x427da8(0x119)](_0x452b42,_0x1ceb39,'Set',_0x3f33fd++,_0x586b8f,function(_0x4fca16){return function(){return _0x4fca16;};}(_0x5089bb)));})):this[_0x3edbdc(0x145)](_0x1ceb39)&&_0x1ceb39[_0x3edbdc(0x14f)](function(_0x5b616a,_0x425d2e){var _0x434eab=_0x3edbdc;if(_0x501f8a++,_0x586b8f['autoExpandPropertyCount']++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;return;}if(!_0x586b8f[_0x434eab(0x18d)]&&_0x586b8f[_0x434eab(0x159)]&&_0x586b8f[_0x434eab(0x161)]>_0x586b8f[_0x434eab(0x12f)]){_0x3b765a=!0x0;return;}var _0x29234f=_0x425d2e['toString']();_0x29234f[_0x434eab(0x1e9)]>0x64&&(_0x29234f=_0x29234f[_0x434eab(0x122)](0x0,0x64)+_0x434eab(0x1d7)),_0x438811[_0x434eab(0x16f)](_0x42549e[_0x434eab(0x119)](_0x452b42,_0x1ceb39,'Map',_0x29234f,_0x586b8f,function(_0x2a91df){return function(){return _0x2a91df;};}(_0x5b616a)));}),!_0x3a59a7){try{for(_0x50ddbd in _0x1ceb39)if(!(_0xec5737&&_0x5829fd['test'](_0x50ddbd))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f['autoExpand']&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f['autoExpandLimit']){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}catch{}if(_0x3d9fc2[_0x3edbdc(0x1c8)]=!0x0,_0x12b1bb&&(_0x3d9fc2[_0x3edbdc(0x191)]=!0x0),!_0x3b765a){var _0x597257=[][_0x3edbdc(0x1f2)](this[_0x3edbdc(0x1ad)](_0x1ceb39))['concat'](this[_0x3edbdc(0x1ae)](_0x1ceb39));for(_0x3f33fd=0x0,_0x544fda=_0x597257['length'];_0x3f33fd<_0x544fda;_0x3f33fd++)if(_0x50ddbd=_0x597257[_0x3f33fd],!(_0xec5737&&_0x5829fd[_0x3edbdc(0x15d)](_0x50ddbd[_0x3edbdc(0x149)]()))&&!this[_0x3edbdc(0x124)](_0x1ceb39,_0x50ddbd,_0x586b8f)&&!_0x3d9fc2[_0x3edbdc(0x1cf)+_0x50ddbd['toString']()]){if(_0x501f8a++,_0x586b8f[_0x3edbdc(0x161)]++,_0x501f8a>_0x270f7d){_0x3b765a=!0x0;break;}if(!_0x586b8f[_0x3edbdc(0x18d)]&&_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x161)]>_0x586b8f[_0x3edbdc(0x12f)]){_0x3b765a=!0x0;break;}_0x438811[_0x3edbdc(0x16f)](_0x42549e[_0x3edbdc(0x187)](_0x452b42,_0x3d9fc2,_0x1ceb39,_0x1d13ce,_0x50ddbd,_0x586b8f));}}}}}if(_0x10dbf0['type']=_0x1d13ce,_0x14b8d3?(_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x1e1)](),this[_0x3edbdc(0x162)](_0x1d13ce,_0x10dbf0,_0x586b8f,_0x238620)):_0x1d13ce===_0x3edbdc(0x166)?_0x10dbf0[_0x3edbdc(0x1b5)]=this[_0x3edbdc(0x115)]['call'](_0x1ceb39):_0x1d13ce==='bigint'?_0x10dbf0[_0x3edbdc(0x1b5)]=_0x1ceb39[_0x3edbdc(0x149)]():_0x1d13ce===_0x3edbdc(0x1a0)?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_regExpToString'][_0x3edbdc(0x1e2)](_0x1ceb39):_0x1d13ce===_0x3edbdc(0x1d9)&&this[_0x3edbdc(0x13a)]?_0x10dbf0[_0x3edbdc(0x1b5)]=this['_Symbol']['prototype'][_0x3edbdc(0x149)][_0x3edbdc(0x1e2)](_0x1ceb39):!_0x586b8f[_0x3edbdc(0x174)]&&!(_0x1d13ce===_0x3edbdc(0x141)||_0x1d13ce===_0x3edbdc(0x1b0))&&(delete _0x10dbf0[_0x3edbdc(0x1b5)],_0x10dbf0['capped']=!0x0),_0x3b765a&&(_0x10dbf0[_0x3edbdc(0x1bb)]=!0x0),_0x46264a=_0x586b8f[_0x3edbdc(0x1a6)]['current'],_0x586b8f['node'][_0x3edbdc(0x139)]=_0x10dbf0,this[_0x3edbdc(0x153)](_0x10dbf0,_0x586b8f),_0x438811['length']){for(_0x3f33fd=0x0,_0x544fda=_0x438811[_0x3edbdc(0x1e9)];_0x3f33fd<_0x544fda;_0x3f33fd++)_0x438811[_0x3f33fd](_0x3f33fd);}_0x452b42[_0x3edbdc(0x1e9)]&&(_0x10dbf0[_0x3edbdc(0x1dd)]=_0x452b42);}catch(_0x340cfb){_0x9e5505(_0x340cfb,_0x10dbf0,_0x586b8f);}return this['_additionalMetadata'](_0x1ceb39,_0x10dbf0),this['_treeNodePropertiesAfterFullValue'](_0x10dbf0,_0x586b8f),_0x586b8f[_0x3edbdc(0x1a6)][_0x3edbdc(0x139)]=_0x46264a,_0x586b8f['level']--,_0x586b8f['autoExpand']=_0x307332,_0x586b8f[_0x3edbdc(0x159)]&&_0x586b8f[_0x3edbdc(0x17d)][_0x3edbdc(0x1b6)](),_0x10dbf0;}[_0x1d300d(0x1ae)](_0x388498){var _0x4caf90=_0x1d300d;return Object[_0x4caf90(0x1b9)]?Object[_0x4caf90(0x1b9)](_0x388498):[];}[_0x1d300d(0x180)](_0x368417){var _0x1b6081=_0x1d300d;return!!(_0x368417&&_0xb6dc95[_0x1b6081(0x1f4)]&&this[_0x1b6081(0x14c)](_0x368417)===_0x1b6081(0x175)&&_0x368417[_0x1b6081(0x14f)]);}[_0x1d300d(0x124)](_0x45faf5,_0x42931b,_0x51f6ff){var _0x2bb08e=_0x1d300d;return _0x51f6ff[_0x2bb08e(0x17a)]?typeof _0x45faf5[_0x42931b]==_0x2bb08e(0x1c5):!0x1;}[_0x1d300d(0x135)](_0x12830d){var _0x24fe26=_0x1d300d,_0x3576cc='';return _0x3576cc=typeof _0x12830d,_0x3576cc===_0x24fe26(0x1cd)?this[_0x24fe26(0x14c)](_0x12830d)==='[object\\x20Array]'?_0x3576cc=_0x24fe26(0x1e7):this[_0x24fe26(0x14c)](_0x12830d)===_0x24fe26(0x142)?_0x3576cc=_0x24fe26(0x166):this['_objectToString'](_0x12830d)===_0x24fe26(0x11e)?_0x3576cc='bigint':_0x12830d===null?_0x3576cc=_0x24fe26(0x141):_0x12830d[_0x24fe26(0x11d)]&&(_0x3576cc=_0x12830d[_0x24fe26(0x11d)][_0x24fe26(0x111)]||_0x3576cc):_0x3576cc===_0x24fe26(0x1b0)&&this['_HTMLAllCollection']&&_0x12830d instanceof this['_HTMLAllCollection']&&(_0x3576cc=_0x24fe26(0x1f3)),_0x3576cc;}['_objectToString'](_0x50a89d){var _0x2b8162=_0x1d300d;return Object[_0x2b8162(0x18e)][_0x2b8162(0x149)][_0x2b8162(0x1e2)](_0x50a89d);}[_0x1d300d(0x19c)](_0x274bed){var _0x9c3df7=_0x1d300d;return _0x274bed===_0x9c3df7(0x1d0)||_0x274bed===_0x9c3df7(0x137)||_0x274bed===_0x9c3df7(0x197);}[_0x1d300d(0x181)](_0x407c03){var _0x45fa59=_0x1d300d;return _0x407c03===_0x45fa59(0x1f6)||_0x407c03===_0x45fa59(0x14a)||_0x407c03===_0x45fa59(0x1c3);}['_addProperty'](_0x1e1614,_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d){var _0x3cf7e2=this;return function(_0xbab26c){var _0x3d351a=_0x15e3,_0x58cb23=_0x200138['node'][_0x3d351a(0x139)],_0xf935a6=_0x200138['node'][_0x3d351a(0x1ba)],_0x37bf87=_0x200138['node']['parent'];_0x200138['node']['parent']=_0x58cb23,_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x1ba)]=typeof _0x51c304=='number'?_0x51c304:_0xbab26c,_0x1e1614['push'](_0x3cf7e2[_0x3d351a(0x1d6)](_0x36fda2,_0x3d0a9f,_0x51c304,_0x200138,_0x38c89d)),_0x200138[_0x3d351a(0x1a6)][_0x3d351a(0x11a)]=_0x37bf87,_0x200138['node']['index']=_0xf935a6;};}[_0x1d300d(0x187)](_0x4b5dd7,_0x44c26e,_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32){var _0x5a4296=_0x1d300d,_0x54b7f9=this;return _0x44c26e[_0x5a4296(0x1cf)+_0x57b364[_0x5a4296(0x149)]()]=!0x0,function(_0x4abd60){var _0x4f7d33=_0x5a4296,_0x36cfb5=_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x139)],_0x2faa07=_0x39c28a['node'][_0x4f7d33(0x1ba)],_0x27bbd6=_0x39c28a['node'][_0x4f7d33(0x11a)];_0x39c28a['node']['parent']=_0x36cfb5,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x4abd60,_0x4b5dd7[_0x4f7d33(0x16f)](_0x54b7f9[_0x4f7d33(0x1d6)](_0x3b245c,_0x5d0dfa,_0x57b364,_0x39c28a,_0x1a0e32)),_0x39c28a['node']['parent']=_0x27bbd6,_0x39c28a[_0x4f7d33(0x1a6)][_0x4f7d33(0x1ba)]=_0x2faa07;};}[_0x1d300d(0x1d6)](_0x5d52ab,_0x5bff70,_0x3e3ee3,_0x1f2f32,_0x50e6a0){var _0x65fbab=_0x1d300d,_0x38249c=this;_0x50e6a0||(_0x50e6a0=function(_0x56426e,_0x1a78d8){return _0x56426e[_0x1a78d8];});var _0x4a1e4b=_0x3e3ee3['toString'](),_0x48428d=_0x1f2f32[_0x65fbab(0x1a2)]||{},_0x14631c=_0x1f2f32[_0x65fbab(0x174)],_0x29b921=_0x1f2f32[_0x65fbab(0x18d)];try{var _0x22c095=this['_isMap'](_0x5d52ab),_0x45899b=_0x4a1e4b;_0x22c095&&_0x45899b[0x0]==='\\x27'&&(_0x45899b=_0x45899b[_0x65fbab(0x1a1)](0x1,_0x45899b[_0x65fbab(0x1e9)]-0x2));var _0x40d94f=_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d[_0x65fbab(0x1cf)+_0x45899b];_0x40d94f&&(_0x1f2f32[_0x65fbab(0x174)]=_0x1f2f32[_0x65fbab(0x174)]+0x1),_0x1f2f32['isExpressionToEvaluate']=!!_0x40d94f;var _0x2f8a83=typeof _0x3e3ee3==_0x65fbab(0x1d9),_0x5a54d0={'name':_0x2f8a83||_0x22c095?_0x4a1e4b:this[_0x65fbab(0x16d)](_0x4a1e4b)};if(_0x2f8a83&&(_0x5a54d0[_0x65fbab(0x1d9)]=!0x0),!(_0x5bff70===_0x65fbab(0x1e7)||_0x5bff70==='Error')){var _0x436dad=this['_getOwnPropertyDescriptor'](_0x5d52ab,_0x3e3ee3);if(_0x436dad&&(_0x436dad[_0x65fbab(0x190)]&&(_0x5a54d0['setter']=!0x0),_0x436dad['get']&&!_0x40d94f&&!_0x1f2f32[_0x65fbab(0x1ca)]))return _0x5a54d0[_0x65fbab(0x154)]=!0x0,this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x198f90;try{_0x198f90=_0x50e6a0(_0x5d52ab,_0x3e3ee3);}catch(_0x303817){return _0x5a54d0={'name':_0x4a1e4b,'type':_0x65fbab(0x121),'error':_0x303817[_0x65fbab(0x177)]},this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32),_0x5a54d0;}var _0x369814=this[_0x65fbab(0x135)](_0x198f90),_0x596959=this[_0x65fbab(0x19c)](_0x369814);if(_0x5a54d0[_0x65fbab(0x140)]=_0x369814,_0x596959)this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x1e4757=_0x65fbab;_0x5a54d0[_0x1e4757(0x1b5)]=_0x198f90[_0x1e4757(0x1e1)](),!_0x40d94f&&_0x38249c[_0x1e4757(0x162)](_0x369814,_0x5a54d0,_0x1f2f32,{});});else{var _0x194fd6=_0x1f2f32[_0x65fbab(0x159)]&&_0x1f2f32[_0x65fbab(0x17b)]<_0x1f2f32[_0x65fbab(0x1b2)]&&_0x1f2f32[_0x65fbab(0x17d)]['indexOf'](_0x198f90)<0x0&&_0x369814!==_0x65fbab(0x1c5)&&_0x1f2f32[_0x65fbab(0x161)]<_0x1f2f32[_0x65fbab(0x12f)];_0x194fd6||_0x1f2f32[_0x65fbab(0x17b)]<_0x14631c||_0x40d94f?(this[_0x65fbab(0x1ed)](_0x5a54d0,_0x198f90,_0x1f2f32,_0x40d94f||{}),this['_additionalMetadata'](_0x198f90,_0x5a54d0)):this[_0x65fbab(0x17f)](_0x5a54d0,_0x1f2f32,_0x198f90,function(){var _0x5c46d0=_0x65fbab;_0x369814===_0x5c46d0(0x141)||_0x369814===_0x5c46d0(0x1b0)||(delete _0x5a54d0[_0x5c46d0(0x1b5)],_0x5a54d0[_0x5c46d0(0x1de)]=!0x0);});}return _0x5a54d0;}finally{_0x1f2f32[_0x65fbab(0x1a2)]=_0x48428d,_0x1f2f32['depth']=_0x14631c,_0x1f2f32['isExpressionToEvaluate']=_0x29b921;}}[_0x1d300d(0x162)](_0x62aaa4,_0x59e771,_0x37bb20,_0x6ec0e0){var _0x640cf1=_0x1d300d,_0x27aa85=_0x6ec0e0[_0x640cf1(0x158)]||_0x37bb20[_0x640cf1(0x158)];if((_0x62aaa4===_0x640cf1(0x137)||_0x62aaa4===_0x640cf1(0x14a))&&_0x59e771[_0x640cf1(0x1b5)]){let _0xa78f12=_0x59e771['value']['length'];_0x37bb20[_0x640cf1(0x14e)]+=_0xa78f12,_0x37bb20[_0x640cf1(0x14e)]>_0x37bb20[_0x640cf1(0x1d2)]?(_0x59e771[_0x640cf1(0x1de)]='',delete _0x59e771[_0x640cf1(0x1b5)]):_0xa78f12>_0x27aa85&&(_0x59e771[_0x640cf1(0x1de)]=_0x59e771[_0x640cf1(0x1b5)][_0x640cf1(0x1a1)](0x0,_0x27aa85),delete _0x59e771[_0x640cf1(0x1b5)]);}}[_0x1d300d(0x145)](_0x162847){var _0x5b1e94=_0x1d300d;return!!(_0x162847&&_0xb6dc95[_0x5b1e94(0x15b)]&&this['_objectToString'](_0x162847)===_0x5b1e94(0x1ef)&&_0x162847[_0x5b1e94(0x14f)]);}['_propertyName'](_0x272d62){var _0x1e5868=_0x1d300d;if(_0x272d62[_0x1e5868(0x160)](/^\\d+$/))return _0x272d62;var _0x149cad;try{_0x149cad=JSON['stringify'](''+_0x272d62);}catch{_0x149cad='\\x22'+this['_objectToString'](_0x272d62)+'\\x22';}return _0x149cad[_0x1e5868(0x160)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x149cad=_0x149cad[_0x1e5868(0x1a1)](0x1,_0x149cad[_0x1e5868(0x1e9)]-0x2):_0x149cad=_0x149cad[_0x1e5868(0x17e)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x149cad;}['_processTreeNodeResult'](_0x362ce5,_0x2a7264,_0x432370,_0x10f3b7){var _0x9583d4=_0x1d300d;this[_0x9583d4(0x153)](_0x362ce5,_0x2a7264),_0x10f3b7&&_0x10f3b7(),this[_0x9583d4(0x11f)](_0x432370,_0x362ce5),this[_0x9583d4(0x18f)](_0x362ce5,_0x2a7264);}[_0x1d300d(0x153)](_0x2b63e1,_0x5f4d68){var _0x51f5e1=_0x1d300d;this[_0x51f5e1(0x170)](_0x2b63e1,_0x5f4d68),this['_setNodeQueryPath'](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x15e)](_0x2b63e1,_0x5f4d68),this[_0x51f5e1(0x1a4)](_0x2b63e1,_0x5f4d68);}[_0x1d300d(0x170)](_0x5c8499,_0x3e630d){}[_0x1d300d(0x1aa)](_0x1349e3,_0x3bb299){}[_0x1d300d(0x1c1)](_0x3d9350,_0x132c6b){}[_0x1d300d(0x13c)](_0x11fd87){return _0x11fd87===this['_undefined'];}[_0x1d300d(0x18f)](_0x1c9a53,_0x5d5a1a){var _0x5d7ed6=_0x1d300d;this['_setNodeLabel'](_0x1c9a53,_0x5d5a1a),this['_setNodeExpandableState'](_0x1c9a53),_0x5d5a1a[_0x5d7ed6(0x148)]&&this[_0x5d7ed6(0x1ce)](_0x1c9a53),this[_0x5d7ed6(0x1b7)](_0x1c9a53,_0x5d5a1a),this['_addLoadNode'](_0x1c9a53,_0x5d5a1a),this[_0x5d7ed6(0x129)](_0x1c9a53);}[_0x1d300d(0x11f)](_0x4efbd0,_0x10dd3d){var _0x5032e8=_0x1d300d;let _0x226eb6;try{_0xb6dc95[_0x5032e8(0x1cb)]&&(_0x226eb6=_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)],_0xb6dc95['console'][_0x5032e8(0x131)]=function(){}),_0x4efbd0&&typeof _0x4efbd0['length']==_0x5032e8(0x197)&&(_0x10dd3d[_0x5032e8(0x1e9)]=_0x4efbd0[_0x5032e8(0x1e9)]);}catch{}finally{_0x226eb6&&(_0xb6dc95[_0x5032e8(0x1cb)][_0x5032e8(0x131)]=_0x226eb6);}if(_0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x197)||_0x10dd3d[_0x5032e8(0x140)]==='Number'){if(isNaN(_0x10dd3d[_0x5032e8(0x1b5)]))_0x10dd3d[_0x5032e8(0x1e4)]=!0x0,delete _0x10dd3d['value'];else switch(_0x10dd3d[_0x5032e8(0x1b5)]){case Number[_0x5032e8(0x16b)]:_0x10dd3d['positiveInfinity']=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case Number[_0x5032e8(0x16c)]:_0x10dd3d[_0x5032e8(0x194)]=!0x0,delete _0x10dd3d[_0x5032e8(0x1b5)];break;case 0x0:this[_0x5032e8(0x186)](_0x10dd3d[_0x5032e8(0x1b5)])&&(_0x10dd3d['negativeZero']=!0x0);break;}}else _0x10dd3d[_0x5032e8(0x140)]===_0x5032e8(0x1c5)&&typeof _0x4efbd0[_0x5032e8(0x111)]=='string'&&_0x4efbd0[_0x5032e8(0x111)]&&_0x10dd3d[_0x5032e8(0x111)]&&_0x4efbd0['name']!==_0x10dd3d[_0x5032e8(0x111)]&&(_0x10dd3d[_0x5032e8(0x144)]=_0x4efbd0['name']);}['_isNegativeZero'](_0x130d3d){return 0x1/_0x130d3d===Number['NEGATIVE_INFINITY'];}[_0x1d300d(0x1ce)](_0x25b759){var _0x297173=_0x1d300d;!_0x25b759[_0x297173(0x1dd)]||!_0x25b759[_0x297173(0x1dd)]['length']||_0x25b759[_0x297173(0x140)]==='array'||_0x25b759[_0x297173(0x140)]===_0x297173(0x15b)||_0x25b759['type']==='Set'||_0x25b759[_0x297173(0x1dd)][_0x297173(0x12b)](function(_0x4a6eb5,_0x121f30){var _0x1a487c=_0x297173,_0x2a3c33=_0x4a6eb5[_0x1a487c(0x111)][_0x1a487c(0x164)](),_0x35982d=_0x121f30[_0x1a487c(0x111)][_0x1a487c(0x164)]();return _0x2a3c33<_0x35982d?-0x1:_0x2a3c33>_0x35982d?0x1:0x0;});}[_0x1d300d(0x1b7)](_0x3e076c,_0x4d7ea0){var _0xc9306f=_0x1d300d;if(!(_0x4d7ea0[_0xc9306f(0x17a)]||!_0x3e076c['props']||!_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)])){for(var _0xc31ac5=[],_0x205545=[],_0x404587=0x0,_0x4d96f4=_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x1e9)];_0x404587<_0x4d96f4;_0x404587++){var _0x405dd4=_0x3e076c['props'][_0x404587];_0x405dd4[_0xc9306f(0x140)]===_0xc9306f(0x1c5)?_0xc31ac5[_0xc9306f(0x16f)](_0x405dd4):_0x205545[_0xc9306f(0x16f)](_0x405dd4);}if(!(!_0x205545[_0xc9306f(0x1e9)]||_0xc31ac5[_0xc9306f(0x1e9)]<=0x1)){_0x3e076c[_0xc9306f(0x1dd)]=_0x205545;var _0x18f973={'functionsNode':!0x0,'props':_0xc31ac5};this[_0xc9306f(0x170)](_0x18f973,_0x4d7ea0),this['_setNodeLabel'](_0x18f973,_0x4d7ea0),this[_0xc9306f(0x134)](_0x18f973),this['_setNodePermissions'](_0x18f973,_0x4d7ea0),_0x18f973['id']+='\\x20f',_0x3e076c[_0xc9306f(0x1dd)][_0xc9306f(0x12c)](_0x18f973);}}}['_addLoadNode'](_0x48adba,_0x354896){}[_0x1d300d(0x134)](_0x8800fa){}[_0x1d300d(0x1db)](_0x27fdad){var _0x1ff63b=_0x1d300d;return Array[_0x1ff63b(0x19a)](_0x27fdad)||typeof _0x27fdad==_0x1ff63b(0x1cd)&&this['_objectToString'](_0x27fdad)===_0x1ff63b(0x110);}[_0x1d300d(0x1a4)](_0xedb925,_0x275e19){}[_0x1d300d(0x129)](_0x2f7d57){var _0x5c51c7=_0x1d300d;delete _0x2f7d57[_0x5c51c7(0x16a)],delete _0x2f7d57[_0x5c51c7(0x12e)],delete _0x2f7d57[_0x5c51c7(0x17c)];}['_setNodeExpressionPath'](_0x400985,_0x4ed591){}}let _0x575101=new _0x5796fc(),_0x317e62={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4a2414={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x23706c(_0x3c0535,_0x16b8dc,_0x44036e,_0x3893af,_0x5f2ce1,_0x18eeb6){var _0x1d80f5=_0x1d300d;let _0x17ccf2,_0x578c02;try{_0x578c02=_0x7ab5fc(),_0x17ccf2=_0x4862bf[_0x16b8dc],!_0x17ccf2||_0x578c02-_0x17ccf2['ts']>0x1f4&&_0x17ccf2[_0x1d80f5(0x1b8)]&&_0x17ccf2[_0x1d80f5(0x118)]/_0x17ccf2['count']<0x64?(_0x4862bf[_0x16b8dc]=_0x17ccf2={'count':0x0,'time':0x0,'ts':_0x578c02},_0x4862bf[_0x1d80f5(0x1f7)]={}):_0x578c02-_0x4862bf[_0x1d80f5(0x1f7)]['ts']>0x32&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]&&_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]/_0x4862bf['hits']['count']<0x64&&(_0x4862bf[_0x1d80f5(0x1f7)]={});let _0x2ecb7d=[],_0x3ecc3c=_0x17ccf2['reduceLimits']||_0x4862bf['hits'][_0x1d80f5(0x198)]?_0x4a2414:_0x317e62,_0x49ddd6=_0x37b5c9=>{var _0x167b05=_0x1d80f5;let _0x45f67f={};return _0x45f67f[_0x167b05(0x1dd)]=_0x37b5c9[_0x167b05(0x1dd)],_0x45f67f[_0x167b05(0x1be)]=_0x37b5c9[_0x167b05(0x1be)],_0x45f67f[_0x167b05(0x158)]=_0x37b5c9[_0x167b05(0x158)],_0x45f67f[_0x167b05(0x1d2)]=_0x37b5c9['totalStrLength'],_0x45f67f[_0x167b05(0x12f)]=_0x37b5c9[_0x167b05(0x12f)],_0x45f67f[_0x167b05(0x1b2)]=_0x37b5c9[_0x167b05(0x1b2)],_0x45f67f[_0x167b05(0x148)]=!0x1,_0x45f67f['noFunctions']=!_0x4bcc89,_0x45f67f['depth']=0x1,_0x45f67f[_0x167b05(0x17b)]=0x0,_0x45f67f['expId']=_0x167b05(0x1f0),_0x45f67f[_0x167b05(0x1c4)]=_0x167b05(0x12d),_0x45f67f[_0x167b05(0x159)]=!0x0,_0x45f67f[_0x167b05(0x17d)]=[],_0x45f67f[_0x167b05(0x161)]=0x0,_0x45f67f[_0x167b05(0x1ca)]=!0x0,_0x45f67f['allStrLength']=0x0,_0x45f67f['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x45f67f;};for(var _0x3e5ecd=0x0;_0x3e5ecd<_0x5f2ce1[_0x1d80f5(0x1e9)];_0x3e5ecd++)_0x2ecb7d[_0x1d80f5(0x16f)](_0x575101['serialize']({'timeNode':_0x3c0535===_0x1d80f5(0x118)||void 0x0},_0x5f2ce1[_0x3e5ecd],_0x49ddd6(_0x3ecc3c),{}));if(_0x3c0535==='trace'){let _0x2b2098=Error[_0x1d80f5(0x120)];try{Error[_0x1d80f5(0x120)]=0x1/0x0,_0x2ecb7d['push'](_0x575101[_0x1d80f5(0x1ed)]({'stackNode':!0x0},new Error()[_0x1d80f5(0x1e5)],_0x49ddd6(_0x3ecc3c),{'strLength':0x1/0x0}));}finally{Error[_0x1d80f5(0x120)]=_0x2b2098;}}return{'method':'log','version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':_0x2ecb7d,'id':_0x16b8dc,'context':_0x18eeb6}]};}catch(_0x4e99d0){return{'method':_0x1d80f5(0x169),'version':_0x14a800,'args':[{'ts':_0x44036e,'session':_0x3893af,'args':[{'type':_0x1d80f5(0x121),'error':_0x4e99d0&&_0x4e99d0[_0x1d80f5(0x177)]}],'id':_0x16b8dc,'context':_0x18eeb6}]};}finally{try{if(_0x17ccf2&&_0x578c02){let _0x10b2cd=_0x7ab5fc();_0x17ccf2['count']++,_0x17ccf2[_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x17ccf2['ts']=_0x10b2cd,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x1b8)]++,_0x4862bf[_0x1d80f5(0x1f7)][_0x1d80f5(0x118)]+=_0x834e9d(_0x578c02,_0x10b2cd),_0x4862bf[_0x1d80f5(0x1f7)]['ts']=_0x10b2cd,(_0x17ccf2['count']>0x32||_0x17ccf2[_0x1d80f5(0x118)]>0x64)&&(_0x17ccf2[_0x1d80f5(0x198)]=!0x0),(_0x4862bf['hits'][_0x1d80f5(0x1b8)]>0x3e8||_0x4862bf['hits'][_0x1d80f5(0x118)]>0x12c)&&(_0x4862bf[_0x1d80f5(0x1f7)]['reduceLimits']=!0x0);}}catch{}}}return _0x23706c;}((_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x2d7518,_0x477f3f,_0x49f77c,_0x67f0fb,_0x51ce8f)=>{var _0x17b4c9=_0x43a543;if(_0x1806cc[_0x17b4c9(0x19f)])return _0x1806cc[_0x17b4c9(0x19f)];if(!Y(_0x1806cc,_0x49f77c,_0x439a11))return _0x1806cc['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1806cc[_0x17b4c9(0x19f)];let _0x4540ce=W(_0x1806cc),_0x44e230=_0x4540ce[_0x17b4c9(0x1e8)],_0x130677=_0x4540ce[_0x17b4c9(0x1ea)],_0x1444c2=_0x4540ce[_0x17b4c9(0x136)],_0x2ca3fb={'hits':{},'ts':{}},_0x5e109e=Q(_0x1806cc,_0x67f0fb,_0x2ca3fb,_0x2d7518),_0x3e58ab=_0x1de792=>{_0x2ca3fb['ts'][_0x1de792]=_0x130677();},_0x1678a8=(_0xa3635f,_0x13a102)=>{var _0x1a4b22=_0x17b4c9;let _0x3eb140=_0x2ca3fb['ts'][_0x13a102];if(delete _0x2ca3fb['ts'][_0x13a102],_0x3eb140){let _0x484d76=_0x44e230(_0x3eb140,_0x130677());_0x37c63d(_0x5e109e(_0x1a4b22(0x118),_0xa3635f,_0x1444c2(),_0x21fc4a,[_0x484d76],_0x13a102));}},_0x1940b0=_0x183f01=>_0x127212=>{var _0x466f11=_0x17b4c9;try{_0x3e58ab(_0x127212),_0x183f01(_0x127212);}finally{_0x1806cc['console'][_0x466f11(0x118)]=_0x183f01;}},_0x1b4025=_0x302b67=>_0x593b14=>{var _0x3f7217=_0x17b4c9;try{let [_0x2ce050,_0x439151]=_0x593b14[_0x3f7217(0x1b4)](_0x3f7217(0x168));_0x1678a8(_0x439151,_0x2ce050),_0x302b67(_0x2ce050);}finally{_0x1806cc[_0x3f7217(0x1cb)][_0x3f7217(0x1fb)]=_0x302b67;}};_0x1806cc[_0x17b4c9(0x19f)]={'consoleLog':(_0x363879,_0x5c8485)=>{var _0xd8d52e=_0x17b4c9;_0x1806cc['console']['log'][_0xd8d52e(0x111)]!=='disabledLog'&&_0x37c63d(_0x5e109e(_0xd8d52e(0x169),_0x363879,_0x1444c2(),_0x21fc4a,_0x5c8485));},'consoleTrace':(_0x496aa9,_0x3345e4)=>{var _0x2f53c6=_0x17b4c9;_0x1806cc[_0x2f53c6(0x1cb)][_0x2f53c6(0x169)][_0x2f53c6(0x111)]!==_0x2f53c6(0x157)&&_0x37c63d(_0x5e109e(_0x2f53c6(0x1f8),_0x496aa9,_0x1444c2(),_0x21fc4a,_0x3345e4));},'consoleTime':()=>{var _0x1aa7b3=_0x17b4c9;_0x1806cc[_0x1aa7b3(0x1cb)]['time']=_0x1940b0(_0x1806cc[_0x1aa7b3(0x1cb)][_0x1aa7b3(0x118)]);},'consoleTimeEnd':()=>{var _0x51a24e=_0x17b4c9;_0x1806cc['console'][_0x51a24e(0x1fb)]=_0x1b4025(_0x1806cc['console']['timeEnd']);},'autoLog':(_0x2f565b,_0x537581)=>{var _0x2960a1=_0x17b4c9;_0x37c63d(_0x5e109e(_0x2960a1(0x169),_0x537581,_0x1444c2(),_0x21fc4a,[_0x2f565b]));},'autoLogMany':(_0x40b240,_0x2f2e6d)=>{var _0x44228c=_0x17b4c9;_0x37c63d(_0x5e109e(_0x44228c(0x169),_0x40b240,_0x1444c2(),_0x21fc4a,_0x2f2e6d));},'autoTrace':(_0x22c659,_0x27110d)=>{var _0x4d8684=_0x17b4c9;_0x37c63d(_0x5e109e(_0x4d8684(0x1f8),_0x27110d,_0x1444c2(),_0x21fc4a,[_0x22c659]));},'autoTraceMany':(_0x123518,_0x2e4878)=>{_0x37c63d(_0x5e109e('trace',_0x123518,_0x1444c2(),_0x21fc4a,_0x2e4878));},'autoTime':(_0x927205,_0x43e547,_0xdea416)=>{_0x3e58ab(_0xdea416);},'autoTimeEnd':(_0x3f3ce8,_0x3442bd,_0x2df5cc)=>{_0x1678a8(_0x3442bd,_0x2df5cc);},'coverage':_0x507b40=>{var _0x30461e=_0x17b4c9;_0x37c63d({'method':_0x30461e(0x143),'version':_0x2d7518,'args':[{'id':_0x507b40}]});}};let _0x37c63d=J(_0x1806cc,_0x1b6797,_0x42a4ab,_0x1c5761,_0x439a11,_0x51ce8f),_0x21fc4a=_0x1806cc[_0x17b4c9(0x126)];return _0x1806cc['_console_ninja'];})(globalThis,_0x43a543(0x163),_0x43a543(0x133),_0x43a543(0x15c),_0x43a543(0x128),_0x43a543(0x13f),'1695140399166',_0x43a543(0x13b),'','');"
          )
        );
      } catch (e) {}
    }
    function oo_oo(i, ...v) {
      try {
        oo_cm().consoleLog(i, v);
      } catch (e) {}
      return v;
    }
    function oo_tr(i, ...v) {
      try {
        oo_cm().consoleTrace(i, v);
      } catch (e) {}
      return v;
    }
    function oo_ts() {
      try {
        oo_cm().consoleTime();
      } catch (e) {}
    }
    function oo_te() {
      try {
        oo_cm().consoleTimeEnd();
      } catch (e) {}
    } /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsd0pBQXdKLFNBQVMsU0FBUyw0RUFBNEUsd0NBQXdDLG1DQUFtQyx3QkFBd0IseUNBQXlDLGdEQUFnRCwrQ0FBK0MsK0ZBQStGLGtDQUFrQyx3QkFBd0IsSUFBSSwyQ0FBMkMsUUFBUSxtREFBbUQsa0NBQWtDLHdCQUF3QixJQUFJLHdFQUF3RSxxREFBcUQsUUFBUSwyREFBMkQsNkJBQTZCLHFDQUFxQyx3QkFBd0IsaUpBQWlKLHdDQUF3Qyx3QkFBd0Isc0tBQXNLLG9CQUFvQix3QkFBd0IsOEZBQThGLHVCQUF1Qix3QkFBd0IsbUZBQW1GLG1DQUFtQyx3QkFBd0Isb0ZBQW9GLHVDQUF1Qyx3QkFBd0Isa0ZBQWtGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx5RUFBeUUsOENBQThDLHNCQUFzQixpREFBaUQsZ0NBQWdDLHdCQUF3Qix3QkFBd0IsV0FBVyx1REFBdUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQywwSUFBMEksSUFBSSxZQUFZLHVCQUF1QixJQUFJLDBCQUEwQixXQUFXLFVBQVUsdUJBQXVCLElBQUksNEJBQTRCLFdBQVcsVUFBVSxpQkFBaUIsSUFBSSx1QkFBdUIsWUFBWSxpQkFBaUIsSUFBSSwwQkFBMEIsWUFBWSx3TyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Fzcy9zY3JvbGwuc2Nzcz9mY2I3Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDMwcmVtO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbiN3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ud2luZG93IHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXZMaW5rcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm5hdkxpbmtzIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5saW5rcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogYmxhY2sgNXB4IHNvbGlkO1xufVxuXG4ubGlua3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xufVxuXG4ubGlua3MuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmUtd2lkdGg6IDdweDtcbn1cblxuLmxpbmtzLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBwYWRkaW5nOiAzcmVtIDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufVxuXG4vKiBPbiBob3ZlciwgYWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB3aXRoIGEgbGl0dGxlIGJpdCBzZWUtdGhyb3VnaCAqL1xuLmxlZnQ6aG92ZXIsXG4ucmlnaHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zY3JvbGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFDRSxhQ05PO0VET1AsWUNMUztBREFYOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtBQUxGOztBQVFBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUxGOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7QUFORjs7QUFVQSx5RUFBQTtBQUNBOztFQUVFLG9DQUFBO0FBUEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gYm9keSB7XFxuLy8gICAtLWhlaWdodDogMzByZW07XFxuLy8gICAtLXdpZHRoOiAxMDAlO1xcbi8vIH1cXG5AaW1wb3J0ICdzaXplcyc7XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xcbiAgd2lkdGg6ICRpbWctd2lkdGg7XFxufVxcblxcbiN3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ud2luZG93IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6ICgkd2lkdGgpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGhlaWdodDogKCRoZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLm5hdkxpbmtzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAoJHdpZHRoKTtcXG59XFxuXFxuLm5hdkxpbmtzIHVsIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IGJsYWNrIDVweCBzb2xpZDtcXG59XFxuXFxuLmxpbmtzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxufVxcblxcbi5saW5rcy5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3V0bGluZS13aWR0aDogN3B4O1xcbn1cXG5cXG4ubGlua3MuYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtMjJweDtcXG4gIHBhZGRpbmc6IDNyZW0gMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG5cXG59XFxuXFxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cXG4ubGVmdDpob3ZlcixcXG4ucmlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzIsIDIzMik7XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxubmF2IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm5hdiBsaSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiBsaTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gIHRyYW5zbGF0ZTogMDtcbiAgc2NhbGU6IDAgMTtcbiAgdHJhbnNpdGlvbjogc2NhbGUgMzAwbXMsIHRyYW5zbGF0ZSA1MDBtcztcbn1cbm5hdiBsaTpob3Zlcjo6YWZ0ZXIge1xuICBzY2FsZTogMSAxO1xufVxubmF2IGxpOmhvdmVyLFxubmF2IGxpOmZvY3VzLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxubmF2IC5OYXYtYnJhbmQge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDSSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQ1pXO0FETWY7O0FBV0E7RUFJSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtFQUNBLGlCQUFBO0VBR0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBRUEsNkJBQUE7RUFFQSxrQkFBQTtBQWpCUjtBQW9CSTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUFuQlI7QUF1Qkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFHQSxZQTFDUTtFQTJDUixVQUFBO0VBQ0Esd0NBQUE7QUF2QlI7QUErQkk7RUFDSSxVQUFBO0FBN0JSO0FBcUNJOztFQUVJLFVBQUE7QUFuQ1I7QUF1Q0k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBckNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDEmZGlzcGxheT1zd2FwJyk7XFxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcbi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgJ3NpemVzJztcXG5cXG4vLyAkYm9keS1wYWRkaW5nOiAyMHB4O1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1pbmxpbmU6ICRib2R5LXBhZGRpbmc7XFxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xcbiAgICAvLyBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxubmF2IHtcXG4gICAgJHdpZHRoOjA7XFxuICAgICR0cmFuc2xhdGU6IDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmYWIzYWQ7XFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNERTlDOTQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzIsIDIzMiwgMSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICB1bCB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAvLyBjb2xvcjogaG90cGluaztcXG4gICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIH1cXG4gICAgbGk6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgICAgICAvLyBvcGFjaXR5OiAxO1xcbiAgICAgICAgXFxuICAgICAgICB0cmFuc2xhdGU6ICR0cmFuc2xhdGU7XFxuICAgICAgICBzY2FsZTogJHdpZHRoIDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAzMDBtcyxcXG4gICAgICAgIHRyYW5zbGF0ZSA1MDBtcztcXG4gICAgfVxcbiAgICBsaTpoYXMoKyA6aG92ZXIpe1xcbiAgICAvLyAgICBjb2xvcjogcmVkO1xcbiAgICAgICAkdHJhbnNsYXRlOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyOjphZnRlcntcXG4gICAgICAgIHNjYWxlOiAxIDE7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIgKyBsaXtcXG4gICAgICAgIC8vIGNvbG9yOiByZWQ7XFxuICAgICAgICAkdHJhbnNsYXRlOiAtMTAwJTtcXG4gICAgfVxcblxcbiAgICBsaTpob3ZlcixcXG4gICAgbGk6Zm9jdXMtdmlzaWJsZSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgJHdpZHRoOiAxO1xcbiAgICB9XFxuXFxuICAgIC5OYXYtYnJhbmQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2Nyb2xsLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGwuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHNldEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbmF2QnJhbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ01lbnUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29udGFjdHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVzZXJ2YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQnXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgZm9yIChjb25zdCBpIG9mIGxpc3RJdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBzZXRBdHRyaWJ1dGVzKGl0ZW0se2NsYXNzOiBcIm5hdi1pdGVtXCJ9KVxuICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gaS50aXRsZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgICB9XG4gICAgbmF2QnJhbmQuY2xhc3NMaXN0LmFkZCgnTmF2LWJyYW5kJylcbiAgICBuYXZCcmFuZC5pbm5lckhUTUw9XCJBbmltZSBGb29kXCJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QnJhbmQpXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsKVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtYmFyJylcbiAgICByZXR1cm4gbmF2QmFyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhciIsImltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvMTIzMjczMi5qcGdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvc2Nyb2xsYmFyL2Fzc29ydGVkLmpwZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvYmFsbHMuZ2lmXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vaW1nL3Njcm9sbGJhci9ub29kbGUuZ2lmXCI7XG5pbXBvcnQgXCIuLi9zYXNzL3Njcm9sbC5zY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtpbWcxLFxuXG4gICAgaW1nMiwgaW1nMywgaW1nNF07XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU2xpZGVyKCkge1xuICAgIC8qXG4gICAgICBDcmVhdGVzIHRoZSBpbWFnZSBzbGlkZVxuICAgICAgKi9cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVTZXRFbGVtZW50KFwic2VjdGlvblwiLCB7XG4gICAgICAgIGNsYXNzOiBcInNlY3Rpb25zIGltYWdlLXNsaWRlclwiLFxuICAgIH0pO1xuICAgIGNvbnN0IHZpZXdXaW5kb3cgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2luZG93XCIgfSk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJ3cmFwcGVyXCIgfSk7XG5cbiAgICBjb25zdCBuYXZMaW5rcyA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJuYXZMaW5rc1wiIH0pO1xuICAgIGNvbnN0IHVsID0gY3JlYXRlU2V0RWxlbWVudChcInVsXCIpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBjcmVhdGVTZXRFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHNyYzogaW1hZ2UsXG4gICAgICAgICAgICBhbHQ6IGBpbWFnZS0ke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgaWQ6IGBpdGVtJHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcImNvbnRlbnRcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgICBjbGFzczogXCJsaW5rc1wiLFxuICAgICAgICAgICAgXCJkYXRhLW51bWJlclwiOiBpbmRleCArIDEsXG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgY29uc3QgYnRuMSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzczogXCJidG4gbGVmdFwiLFxuICAgICAgICBcImRhdGEtc2lkZVwiOiBcImxlZnRcIixcbiAgICB9KTtcbiAgICBjb25zdCBidG4yID0gY3JlYXRlU2V0RWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBcImJ0biByaWdodFwiLFxuICAgICAgICBcImRhdGEtc2lkZVwiOiBcInJpZ2h0XCIsXG4gICAgfSk7XG4gICAgYnRuMS5pbm5lckhUTUwgPSBcIiYjMTAwOTQ7XCI7XG4gICAgYnRuMi5pbm5lckhUTUwgPSBcIiYjMTAwOTM7XCI7XG5cbiAgICB2aWV3V2luZG93LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIHZpZXdXaW5kb3cuYXBwZW5kQ2hpbGQoYnRuMSk7XG4gICAgdmlld1dpbmRvdy5hcHBlbmRDaGlsZChidG4yKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3V2luZG93KTtcblxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW1hZ2VTbGlkZXI7XG4iLCJmdW5jdGlvbiBnZXRFbGVtZW50KHNlbGVjdG9yKXtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcilcbn1cblxuIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKXtcbiAgICAvLyBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKClcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSl7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2V0RWxlbWVudCh0eXBlLCBhdHRyaWJ1dGVzPXt9KXtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh0eXBlKVxuICAgIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcylcbiAgICByZXR1cm4gZWxlbWVudFxufVxuXG5leHBvcnQge1xuICAgIGdldEVsZW1lbnQsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBzZXRBdHRyaWJ1dGVzLFxuICAgIGNyZWF0ZVNldEVsZW1lbnQsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJ1xuXG5pbXBvcnQgeyBnZXRFbGVtZW50LCBjcmVhdGVTZXRFbGVtZW50IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBuYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgY3JlYXRlSW1hZ2VTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3Njcm9sbCdcbi8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDcyMzAxMzE2OF8wYCwnaGVsbG8sIFdvcmxkIScpKTtcblxuY29uc3QgbmF2YmFyID0gbmF2QmFyKClcbmNvbnN0IGltYWdlU2xpZGVyPWNyZWF0ZUltYWdlU2xpZGVyKClcblxuY29uc3QgYm9keSA9IGdldEVsZW1lbnQoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHtjbGFzczogXCJib2R5IG1haW5cIn0pXG5ib2R5LmFwcGVuZENoaWxkKG5hdmJhcilcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbilcbm1haW4uYXBwZW5kQ2hpbGQoaW1hZ2VTbGlkZXIpXG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7dmFyIF8weDQzYTU0Mz1fMHgxNWUzOyhmdW5jdGlvbihfMHgzMmVjYWQsXzB4NDIyNWE0KXt2YXIgXzB4MzY0NWE4PV8weDE1ZTMsXzB4M2FlMzIyPV8weDMyZWNhZCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NDk4YzY0PS1wYXJzZUludChfMHgzNjQ1YTgoMHgxOWIpKS8weDEqKHBhcnNlSW50KF8weDM2NDVhOCgweDFhMykpLzB4MikrLXBhcnNlSW50KF8weDM2NDVhOCgweDFkNSkpLzB4MystcGFyc2VJbnQoXzB4MzY0NWE4KDB4MTEyKSkvMHg0KihwYXJzZUludChfMHgzNjQ1YTgoMHgxNTApKS8weDUpK3BhcnNlSW50KF8weDM2NDVhOCgweDE5ZSkpLzB4NiooLXBhcnNlSW50KF8weDM2NDVhOCgweDFmYSkpLzB4NykrLXBhcnNlSW50KF8weDM2NDVhOCgweDFiZCkpLzB4OCoocGFyc2VJbnQoXzB4MzY0NWE4KDB4MWUwKSkvMHg5KSstcGFyc2VJbnQoXzB4MzY0NWE4KDB4MWM3KSkvMHhhKigtcGFyc2VJbnQoXzB4MzY0NWE4KDB4MWFmKSkvMHhiKStwYXJzZUludChfMHgzNjQ1YTgoMHgxMzIpKS8weGM7aWYoXzB4NDk4YzY0PT09XzB4NDIyNWE0KWJyZWFrO2Vsc2UgXzB4M2FlMzIyWydwdXNoJ10oXzB4M2FlMzIyWydzaGlmdCddKCkpO31jYXRjaChfMHgzYWZiMTYpe18weDNhZTMyMlsncHVzaCddKF8weDNhZTMyMlsnc2hpZnQnXSgpKTt9fX0oXzB4ODdkMCwweDhjOTg5KSk7ZnVuY3Rpb24gXzB4MTVlMyhfMHgxMTJhMDcsXzB4MTMzMTdhKXt2YXIgXzB4MTVlM2E4PV8weDg3ZDAoKTtyZXR1cm4gXzB4MTVlMz1mdW5jdGlvbihfMHg0ZTlhOGEsXzB4MjFhZGQ0KXtfMHg0ZTlhOGE9XzB4NGU5YThhLTB4MTEwO3ZhciBfMHg0MjE0NmU9XzB4MTVlM2E4W18weDRlOWE4YV07cmV0dXJuIF8weDQyMTQ2ZTt9LF8weDE1ZTMoXzB4MTEyYTA3LF8weDEzMzE3YSk7fXZhciBqPU9iamVjdFtfMHg0M2E1NDMoMHgxNTUpXSxYPU9iamVjdFtfMHg0M2E1NDMoMHgxYjEpXSxHPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sZWU9T2JqZWN0W18weDQzYTU0MygweDFmYyldLHRlPU9iamVjdFtfMHg0M2E1NDMoMHgxMzgpXSxuZT1PYmplY3RbXzB4NDNhNTQzKDB4MThlKV1bXzB4NDNhNTQzKDB4MWVjKV0scmU9KF8weDU0YzY3MSxfMHgxNDVhOTQsXzB4MTMxNzRiLF8weDRiZmNjNik9Pnt2YXIgXzB4NGY5MjlmPV8weDQzYTU0MztpZihfMHgxNDVhOTQmJnR5cGVvZiBfMHgxNDVhOTQ9PV8weDRmOTI5ZigweDFjZCl8fHR5cGVvZiBfMHgxNDVhOTQ9PSdmdW5jdGlvbicpe2ZvcihsZXQgXzB4MTgyODBmIG9mIGVlKF8weDE0NWE5NCkpIW5lW18weDRmOTI5ZigweDFlMildKF8weDU0YzY3MSxfMHgxODI4MGYpJiZfMHgxODI4MGYhPT1fMHgxMzE3NGImJlgoXzB4NTRjNjcxLF8weDE4MjgwZix7J2dldCc6KCk9Pl8weDE0NWE5NFtfMHgxODI4MGZdLCdlbnVtZXJhYmxlJzohKF8weDRiZmNjNj1HKF8weDE0NWE5NCxfMHgxODI4MGYpKXx8XzB4NGJmY2M2W18weDRmOTI5ZigweDFjMCldfSk7fXJldHVybiBfMHg1NGM2NzE7fSxLPShfMHgzMzhhZjksXzB4NDI3OWJlLF8weDE3NmMzOSk9PihfMHgxNzZjMzk9XzB4MzM4YWY5IT1udWxsP2oodGUoXzB4MzM4YWY5KSk6e30scmUoXzB4NDI3OWJlfHwhXzB4MzM4YWY5fHwhXzB4MzM4YWY5WydfX2VzJysnTW9kdWxlJ10/WChfMHgxNzZjMzksJ2RlZmF1bHQnLHsndmFsdWUnOl8weDMzOGFmOSwnZW51bWVyYWJsZSc6ITB4MH0pOl8weDE3NmMzOSxfMHgzMzhhZjkpKSxxPWNsYXNze2NvbnN0cnVjdG9yKF8weDMwYjliNyxfMHg0ZGRjNTAsXzB4M2IzMzI5LF8weDIyMWI5MixfMHhkOTJmMjkpe3ZhciBfMHg2ZTIyYTk9XzB4NDNhNTQzO3RoaXNbXzB4NmUyMmE5KDB4MTcyKV09XzB4MzBiOWI3LHRoaXNbXzB4NmUyMmE5KDB4MWYxKV09XzB4NGRkYzUwLHRoaXNbXzB4NmUyMmE5KDB4MThhKV09XzB4M2IzMzI5LHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4MjIxYjkyLHRoaXNbXzB4NmUyMmE5KDB4MTg4KV09XzB4ZDkyZjI5LHRoaXNbXzB4NmUyMmE5KDB4MWFjKV09ITB4MCx0aGlzWydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCddPSEweDAsdGhpc1tfMHg2ZTIyYTkoMHgxOTMpXT0hMHgxLHRoaXNbXzB4NmUyMmE5KDB4MTc5KV09ITB4MSx0aGlzWydfaW5Ccm93c2VyJ109IXRoaXNbXzB4NmUyMmE5KDB4MTcyKV1bXzB4NmUyMmE5KDB4MWMyKV0/LltfMHg2ZTIyYTkoMHgxOGMpXT8uW18weDZlMjJhOSgweDFhNildLHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddPW51bGwsdGhpc1tfMHg2ZTIyYTkoMHgxNzgpXT0weDAsdGhpc1tfMHg2ZTIyYTkoMHgxNGQpXT0weDE0LHRoaXNbXzB4NmUyMmE5KDB4MWVlKV09J2h0dHBzOi8vdGlueXVybC5jb20vMzd4OGI3OXQnLHRoaXNbXzB4NmUyMmE5KDB4MTE2KV09KHRoaXNbXzB4NmUyMmE5KDB4MWY5KV0/XzB4NmUyMmE5KDB4MWE4KTpfMHg2ZTIyYTkoMHgxZDMpKSt0aGlzW18weDZlMjJhOSgweDFlZSldO31hc3luY1tfMHg0M2E1NDMoMHgxMTMpXSgpe3ZhciBfMHgxNWU3ZTM9XzB4NDNhNTQzO2lmKHRoaXNbXzB4MTVlN2UzKDB4MTE3KV0pcmV0dXJuIHRoaXNbXzB4MTVlN2UzKDB4MTE3KV07bGV0IF8weDM4ZTdiZjtpZih0aGlzW18weDE1ZTdlMygweDFmOSldKV8weDM4ZTdiZj10aGlzWydnbG9iYWwnXVtfMHgxNWU3ZTMoMHgxOTYpXTtlbHNle2lmKHRoaXNbJ2dsb2JhbCddW18weDE1ZTdlMygweDFjMildPy5bXzB4MTVlN2UzKDB4MTE0KV0pXzB4MzhlN2JmPXRoaXNbXzB4MTVlN2UzKDB4MTcyKV1bJ3Byb2Nlc3MnXT8uWydfV2ViU29ja2V0J107ZWxzZSB0cnl7bGV0IF8weDU3MThlZj1hd2FpdCBpbXBvcnQoXzB4MTVlN2UzKDB4MWE3KSk7XzB4MzhlN2JmPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgxNWU3ZTMoMHgxODIpKSlbXzB4MTVlN2UzKDB4MWM5KV0oXzB4NTcxOGVmW18weDE1ZTdlMygweDFlMyldKHRoaXNbXzB4MTVlN2UzKDB4MWRjKV0sJ3dzL2luZGV4LmpzJykpW18weDE1ZTdlMygweDE0OSldKCkpKVtfMHgxNWU3ZTMoMHgxMjMpXTt9Y2F0Y2h7dHJ5e18weDM4ZTdiZj1yZXF1aXJlKHJlcXVpcmUoXzB4MTVlN2UzKDB4MWE3KSlbJ2pvaW4nXSh0aGlzW18weDE1ZTdlMygweDFkYyldLCd3cycpKTt9Y2F0Y2h7dGhyb3cgbmV3IEVycm9yKF8weDE1ZTdlMygweDFiZikpO319fXJldHVybiB0aGlzW18weDE1ZTdlMygweDExNyldPV8weDM4ZTdiZixfMHgzOGU3YmY7fVtfMHg0M2E1NDMoMHgxZDEpXSgpe3ZhciBfMHgyNjRmYjM9XzB4NDNhNTQzO3RoaXNbXzB4MjY0ZmIzKDB4MTc5KV18fHRoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgyNjRmYjMoMHgxNzgpXT49dGhpc1tfMHgyNjRmYjMoMHgxNGQpXXx8KHRoaXNbXzB4MjY0ZmIzKDB4MTVmKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXSsrLHRoaXNbXzB4MjY0ZmIzKDB4MTJhKV09bmV3IFByb21pc2UoKF8weDQxODZkZixfMHg2ODE1MDEpPT57dmFyIF8weDJlYmMyYz1fMHgyNjRmYjM7dGhpc1tfMHgyZWJjMmMoMHgxMTMpXSgpW18weDJlYmMyYygweDE1NildKF8weDFmNDY3Mj0+e3ZhciBfMHgzZWQ5YzA9XzB4MmViYzJjO2xldCBfMHgxNGFmMDY9bmV3IF8weDFmNDY3MihfMHgzZWQ5YzAoMHgxOTIpKyghdGhpc1tfMHgzZWQ5YzAoMHgxZjkpXSYmdGhpc1tfMHgzZWQ5YzAoMHgxODgpXT9fMHgzZWQ5YzAoMHgxNjUpOnRoaXNbXzB4M2VkOWMwKDB4MWYxKV0pKyc6Jyt0aGlzW18weDNlZDljMCgweDE4YSldKTtfMHgxNGFmMDZbXzB4M2VkOWMwKDB4MTY3KV09KCk9Pnt2YXIgXzB4MmI0OWY4PV8weDNlZDljMDt0aGlzW18weDJiNDlmOCgweDFhYyldPSEweDEsdGhpc1tfMHgyYjQ5ZjgoMHgxZTYpXShfMHgxNGFmMDYpLHRoaXNbXzB4MmI0OWY4KDB4MTlkKV0oKSxfMHg2ODE1MDEobmV3IEVycm9yKF8weDJiNDlmOCgweDE0NykpKTt9LF8weDE0YWYwNlsnb25vcGVuJ109KCk9Pnt2YXIgXzB4MmVhMzUyPV8weDNlZDljMDt0aGlzWydfaW5Ccm93c2VyJ118fF8weDE0YWYwNltfMHgyZWEzNTIoMHgxODMpXSYmXzB4MTRhZjA2W18weDJlYTM1MigweDE4MyldW18weDJlYTM1MigweDFlYildJiZfMHgxNGFmMDZbXzB4MmVhMzUyKDB4MTgzKV1bJ3VucmVmJ10oKSxfMHg0MTg2ZGYoXzB4MTRhZjA2KTt9LF8weDE0YWYwNltfMHgzZWQ5YzAoMHgxZGEpXT0oKT0+e3ZhciBfMHg1MzU5ZjU9XzB4M2VkOWMwO3RoaXNbXzB4NTM1OWY1KDB4MTVmKV09ITB4MCx0aGlzW18weDUzNTlmNSgweDFlNildKF8weDE0YWYwNiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpO30sXzB4MTRhZjA2Wydvbm1lc3NhZ2UnXT1fMHhhNTE4YTk9Pnt2YXIgXzB4MzkzZjYxPV8weDNlZDljMDt0cnl7XzB4YTUxOGE5JiZfMHhhNTE4YTlbXzB4MzkzZjYxKDB4MThiKV0mJnRoaXNbXzB4MzkzZjYxKDB4MWY5KV0mJkpTT05bXzB4MzkzZjYxKDB4MWM2KV0oXzB4YTUxOGE5W18weDM5M2Y2MSgweDE4YildKVsnbWV0aG9kJ109PT0ncmVsb2FkJyYmdGhpc1tfMHgzOTNmNjEoMHgxNzIpXVtfMHgzOTNmNjEoMHgxODQpXVtfMHgzOTNmNjEoMHgxODUpXSgpO31jYXRjaHt9fTt9KVsndGhlbiddKF8weDIxYmFiMj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgwLHRoaXNbXzB4MmViYzJjKDB4MTc5KV09ITB4MSx0aGlzW18weDJlYmMyYygweDE1ZildPSEweDEsdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgwLHRoaXNbXzB4MmViYzJjKDB4MTc4KV09MHgwLF8weDIxYmFiMikpW18weDJlYmMyYygweDFiMyldKF8weDNlMzkzYj0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4MmViYzJjKDB4MTc5KV09ITB4MSxjb25zb2xlW18weDJlYmMyYygweDFkOCldKF8weDJlYmMyYygweDFkZikrdGhpc1snX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnXSksXzB4NjgxNTAxKG5ldyBFcnJvcihfMHgyZWJjMmMoMHgxZjUpKyhfMHgzZTM5M2ImJl8weDNlMzkzYltfMHgyZWJjMmMoMHgxNzcpXSkpKSkpO30pKTt9W18weDQzYTU0MygweDFlNildKF8weDNlZGYxNCl7dmFyIF8weDMyODBlYz1fMHg0M2E1NDM7dGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1tfMHgzMjgwZWMoMHgxNzkpXT0hMHgxO3RyeXtfMHgzZWRmMTRbXzB4MzI4MGVjKDB4MWRhKV09bnVsbCxfMHgzZWRmMTRbXzB4MzI4MGVjKDB4MTY3KV09bnVsbCxfMHgzZWRmMTRbXzB4MzI4MGVjKDB4MTFjKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHgzZWRmMTRbXzB4MzI4MGVjKDB4MTg5KV08MHgyJiZfMHgzZWRmMTRbXzB4MzI4MGVjKDB4MTQ2KV0oKTt9Y2F0Y2h7fX1bJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKXt2YXIgXzB4NTJhMWQwPV8weDQzYTU0MztjbGVhclRpbWVvdXQodGhpc1snX3JlY29ubmVjdFRpbWVvdXQnXSksISh0aGlzW18weDUyYTFkMCgweDE3OCldPj10aGlzW18weDUyYTFkMCgweDE0ZCldKSYmKHRoaXNbXzB4NTJhMWQwKDB4MTc2KV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHgyNTJkZjc9XzB4NTJhMWQwO3RoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgyNTJkZjcoMHgxNzkpXXx8KHRoaXNbXzB4MjUyZGY3KDB4MWQxKV0oKSx0aGlzW18weDI1MmRmNygweDEyYSldPy5bXzB4MjUyZGY3KDB4MWIzKV0oKCk9PnRoaXNbJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5J10oKSkpO30sMHgxZjQpLHRoaXNbXzB4NTJhMWQwKDB4MTc2KV1bXzB4NTJhMWQwKDB4MWViKV0mJnRoaXNbXzB4NTJhMWQwKDB4MTc2KV1bXzB4NTJhMWQwKDB4MWViKV0oKSk7fWFzeW5jW18weDQzYTU0MygweDExYildKF8weDU0ZTZjMSl7dmFyIF8weDFhZDk3Zj1fMHg0M2E1NDM7dHJ5e2lmKCF0aGlzW18weDFhZDk3ZigweDFhYyldKXJldHVybjt0aGlzW18weDFhZDk3ZigweDE1ZildJiZ0aGlzW18weDFhZDk3ZigweDFkMSldKCksKGF3YWl0IHRoaXNbXzB4MWFkOTdmKDB4MTJhKV0pW18weDFhZDk3ZigweDExYildKEpTT05bXzB4MWFkOTdmKDB4MTRiKV0oXzB4NTRlNmMxKSk7fWNhdGNoKF8weDFmNWUyYil7Y29uc29sZVtfMHgxYWQ5N2YoMHgxZDgpXSh0aGlzW18weDFhZDk3ZigweDExNildKyc6XFxcXHgyMCcrKF8weDFmNWUyYiYmXzB4MWY1ZTJiW18weDFhZDk3ZigweDE3NyldKSksdGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgxLHRoaXNbXzB4MWFkOTdmKDB4MTlkKV0oKTt9fX07ZnVuY3Rpb24gSihfMHg0MzQxNTYsXzB4MjI2OTYzLF8weDNlNTIyNyxfMHhmMGQ5MjIsXzB4M2QzZWRmLF8weDFkOWEyZCl7dmFyIF8weDFkMmI0MD1fMHg0M2E1NDM7bGV0IF8weDNiNDg1Nz1fMHgzZTUyMjdbJ3NwbGl0J10oJywnKVtfMHgxZDJiNDAoMHgxZDQpXShfMHgyMjlmZWM9Pnt2YXIgXzB4MWUyNmIzPV8weDFkMmI0MDt0cnl7XzB4NDM0MTU2W18weDFlMjZiMygweDEyNildfHwoKF8weDNkM2VkZj09PV8weDFlMjZiMygweDE1YSl8fF8weDNkM2VkZj09PV8weDFlMjZiMygweDEyNyl8fF8weDNkM2VkZj09PSdhc3RybycpJiYoXzB4M2QzZWRmKz1fMHg0MzQxNTZbXzB4MWUyNmIzKDB4MWMyKV0/LltfMHgxZTI2YjMoMHgxOGMpXT8uW18weDFlMjZiMygweDFhNildP18weDFlMjZiMygweDEzMCk6XzB4MWUyNmIzKDB4MTZlKSksXzB4NDM0MTU2W18weDFlMjZiMygweDEyNildPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHgzZDNlZGZ9KTtsZXQgXzB4M2Y4MTg5PW5ldyBxKF8weDQzNDE1NixfMHgyMjY5NjMsXzB4MjI5ZmVjLF8weGYwZDkyMixfMHgxZDlhMmQpO3JldHVybiBfMHgzZjgxODlbXzB4MWUyNmIzKDB4MTFiKV1bXzB4MWUyNmIzKDB4MTI1KV0oXzB4M2Y4MTg5KTt9Y2F0Y2goXzB4MTgyOTMyKXtyZXR1cm4gY29uc29sZVtfMHgxZTI2YjMoMHgxZDgpXShfMHgxZTI2YjMoMHgxNzEpLF8weDE4MjkzMiYmXzB4MTgyOTMyWydtZXNzYWdlJ10pLCgpPT57fTt9fSk7cmV0dXJuIF8weDQwMjdjYT0+XzB4M2I0ODU3W18weDFkMmI0MCgweDE0ZildKF8weDQ1ODY2ZD0+XzB4NDU4NjZkKF8weDQwMjdjYSkpO31mdW5jdGlvbiBXKF8weDFhOGFhMSl7dmFyIF8weGY2YTBjZD1fMHg0M2E1NDM7bGV0IF8weDVjNTc2ZD1mdW5jdGlvbihfMHgxNzUxYmQsXzB4Y2I2MmJlKXtyZXR1cm4gXzB4Y2I2MmJlLV8weDE3NTFiZDt9LF8weDU1OWViNDtpZihfMHgxYThhYTFbJ3BlcmZvcm1hbmNlJ10pXzB4NTU5ZWI0PWZ1bmN0aW9uKCl7dmFyIF8weDE1YTFhNT1fMHgxNWUzO3JldHVybiBfMHgxYThhYTFbXzB4MTVhMWE1KDB4MWZkKV1bXzB4MTVhMWE1KDB4MTM2KV0oKTt9O2Vsc2V7aWYoXzB4MWE4YWExWydwcm9jZXNzJ10mJl8weDFhOGFhMVtfMHhmNmEwY2QoMHgxYzIpXVtfMHhmNmEwY2QoMHgxNzMpXSlfMHg1NTllYjQ9ZnVuY3Rpb24oKXt2YXIgXzB4MzFhMzQ3PV8weGY2YTBjZDtyZXR1cm4gXzB4MWE4YWExWydwcm9jZXNzJ11bXzB4MzFhMzQ3KDB4MTczKV0oKTt9LF8weDVjNTc2ZD1mdW5jdGlvbihfMHgzYmZmM2QsXzB4ZGFkZjU1KXtyZXR1cm4gMHgzZTgqKF8weGRhZGY1NVsweDBdLV8weDNiZmYzZFsweDBdKSsoXzB4ZGFkZjU1WzB4MV0tXzB4M2JmZjNkWzB4MV0pLzB4ZjQyNDA7fTtlbHNlIHRyeXtsZXQge3BlcmZvcm1hbmNlOl8weDQxNzYwMn09cmVxdWlyZShfMHhmNmEwY2QoMHgxOTUpKTtfMHg1NTllYjQ9ZnVuY3Rpb24oKXt2YXIgXzB4MjgxZGQyPV8weGY2YTBjZDtyZXR1cm4gXzB4NDE3NjAyW18weDI4MWRkMigweDEzNildKCk7fTt9Y2F0Y2h7XzB4NTU5ZWI0PWZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlKCk7fTt9fXJldHVybnsnZWxhcHNlZCc6XzB4NWM1NzZkLCd0aW1lU3RhbXAnOl8weDU1OWViNCwnbm93JzooKT0+RGF0ZVtfMHhmNmEwY2QoMHgxMzYpXSgpfTt9ZnVuY3Rpb24gXzB4ODdkMCgpe3ZhciBfMHgzMTExYWI9WydfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ21hdGNoJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdfY2FwSWZTdHJpbmcnLCcxMjcuMC4wLjEnLCd0b0xvd2VyQ2FzZScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnZGF0ZScsJ29uZXJyb3InLCc6bG9nUG9pbnRJZDonLCdsb2cnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdQT1NJVElWRV9JTkZJTklUWScsJ05FR0FUSVZFX0lORklOSVRZJywnX3Byb3BlcnR5TmFtZScsJ1xcXFx4MjBicm93c2VyJywncHVzaCcsJ19zZXROb2RlSWQnLCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsJ2dsb2JhbCcsJ2hydGltZScsJ2RlcHRoJywnW29iamVjdFxcXFx4MjBTZXRdJywnX3JlY29ubmVjdFRpbWVvdXQnLCdtZXNzYWdlJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdfY29ubmVjdGluZycsJ25vRnVuY3Rpb25zJywnbGV2ZWwnLCdfaGFzTWFwT25JdHNQYXRoJywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ3JlcGxhY2UnLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnX2lzU2V0JywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCd1cmwnLCdfc29ja2V0JywnbG9jYXRpb24nLCdyZWxvYWQnLCdfaXNOZWdhdGl2ZVplcm8nLCdfYWRkT2JqZWN0UHJvcGVydHknLCdkb2NrZXJpemVkQXBwJywncmVhZHlTdGF0ZScsJ3BvcnQnLCdkYXRhJywndmVyc2lvbnMnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywncHJvdG90eXBlJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnc2V0JywnX3BfbmFtZScsJ3dzOi8vJywnX2Nvbm5lY3RlZCcsJ25lZ2F0aXZlSW5maW5pdHknLCdwZXJmX2hvb2tzJywnV2ViU29ja2V0JywnbnVtYmVyJywncmVkdWNlTGltaXRzJywnaG9zdG5hbWUnLCdpc0FycmF5JywnMTBSY0FDemEnLCdfaXNQcmltaXRpdmVUeXBlJywnX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknLCczOTA0OG1jTGhXdycsJ19jb25zb2xlX25pbmphJywnUmVnRXhwJywnc3Vic3RyJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnMTQwMTUyQ1BianVqJywnX3NldE5vZGVQZXJtaXNzaW9ucycsJ1N5bWJvbCcsJ25vZGUnLCdwYXRoJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19udW1iZXJSZWdFeHAnLCdfYWxsb3dlZFRvU2VuZCcsJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJzExcklvcmxOJywndW5kZWZpbmVkJywnZGVmaW5lUHJvcGVydHknLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdjYXRjaCcsJ3NwbGl0JywndmFsdWUnLCdwb3AnLCdfYWRkRnVuY3Rpb25zTm9kZScsJ2NvdW50JywnZ2V0T3duUHJvcGVydHlTeW1ib2xzJywnaW5kZXgnLCdjYXBwZWRQcm9wcycsJ2NhcHBlZEVsZW1lbnRzJywnNTM4NTI4Rmh5UEZ3JywnZWxlbWVudHMnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwZmluZFxcXFx4MjBhbmRcXFxceDIwbG9hZFxcXFx4MjBXZWJTb2NrZXQnLCdlbnVtZXJhYmxlJywnX3NldE5vZGVMYWJlbCcsJ3Byb2Nlc3MnLCdOdW1iZXInLCdyb290RXhwcmVzc2lvbicsJ2Z1bmN0aW9uJywncGFyc2UnLCc4Mjc3MzcwY3RVa1BjJywnX3BfbGVuZ3RoJywncGF0aFRvRmlsZVVSTCcsJ3Jlc29sdmVHZXR0ZXJzJywnY29uc29sZScsJ2luY2x1ZGVzJywnb2JqZWN0JywnX3NvcnRQcm9wcycsJ19wXycsJ2Jvb2xlYW4nLCdfY29ubmVjdFRvSG9zdE5vdycsJ3RvdGFsU3RyTGVuZ3RoJywnQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZXN0YXJ0aW5nXFxcXHgyMHRoZVxcXFx4MjBwcm9jZXNzXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnLCdtYXAnLCc3ODU5NDZ0S1JlS04nLCdfcHJvcGVydHknLCcuLi4nLCd3YXJuJywnc3ltYm9sJywnb25jbG9zZScsJ19pc0FycmF5Jywnbm9kZU1vZHVsZXMnLCdwcm9wcycsJ2NhcHBlZCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnNjN1R2xjS0EnLCd2YWx1ZU9mJywnY2FsbCcsJ2pvaW4nLCduYW4nLCdzdGFjaycsJ19kaXNwb3NlV2Vic29ja2V0JywnYXJyYXknLCdlbGFwc2VkJywnbGVuZ3RoJywndGltZVN0YW1wJywndW5yZWYnLCdoYXNPd25Qcm9wZXJ0eScsJ3NlcmlhbGl6ZScsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnW29iamVjdFxcXFx4MjBNYXBdJywncm9vdF9leHBfaWQnLCdob3N0JywnY29uY2F0JywnSFRNTEFsbENvbGxlY3Rpb24nLCdTZXQnLCdmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0OlxcXFx4MjAnLCdCb29sZWFuJywnaGl0cycsJ3RyYWNlJywnX2luQnJvd3NlcicsJzIyNHlWb1lMbicsJ3RpbWVFbmQnLCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywncGVyZm9ybWFuY2UnLCdudXh0JywnW29iamVjdFxcXFx4MjBBcnJheV0nLCduYW1lJywnMzI2NzQyNEVzRFV2bicsJ2dldFdlYlNvY2tldENsYXNzJywnX1dlYlNvY2tldCcsJ19kYXRlVG9TdHJpbmcnLCdfc2VuZEVycm9yTWVzc2FnZScsJ19XZWJTb2NrZXRDbGFzcycsJ3RpbWUnLCdfYWRkUHJvcGVydHknLCdwYXJlbnQnLCdzZW5kJywnb25vcGVuJywnY29uc3RydWN0b3InLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnc3RhY2tUcmFjZUxpbWl0JywndW5rbm93bicsJ3NsaWNlJywnZGVmYXVsdCcsJ19ibGFja2xpc3RlZFByb3BlcnR5JywnYmluZCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdyZW1peCcsJ3dlYnBhY2snLCdfY2xlYW5Ob2RlJywnX3dzJywnc29ydCcsJ3Vuc2hpZnQnLCdyb290X2V4cCcsJ19oYXNTZXRPbkl0c1BhdGgnLCdhdXRvRXhwYW5kTGltaXQnLCdcXFxceDIwc2VydmVyJywnZXJyb3InLCcyNjQ4NjUyMFNhY1ZYZicsJzM5NDE1JywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdfdHlwZScsJ25vdycsJ3N0cmluZycsJ2dldFByb3RvdHlwZU9mJywnY3VycmVudCcsJ19TeW1ib2wnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiZmVkb3JhXFxcIixcXFwiMTkyLjE2OC4xLjE4XFxcIl0sJ19pc1VuZGVmaW5lZCcsJ191bmRlZmluZWQnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCcxLjAuMCcsJ3R5cGUnLCdudWxsJywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2NvdmVyYWdlJywnZnVuY05hbWUnLCdfaXNNYXAnLCdjbG9zZScsJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCdzb3J0UHJvcHMnLCd0b1N0cmluZycsJ1N0cmluZycsJ3N0cmluZ2lmeScsJ19vYmplY3RUb1N0cmluZycsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnYWxsU3RyTGVuZ3RoJywnZm9yRWFjaCcsJzVLYWR4eFgnLCdfa2V5U3RyUmVnRXhwJywnX3JlZ0V4cFRvU3RyaW5nJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ2dldHRlcicsJ2NyZWF0ZScsJ3RoZW4nLCdkaXNhYmxlZFRyYWNlJywnc3RyTGVuZ3RoJywnYXV0b0V4cGFuZCcsJ25leHQuanMnLCdNYXAnLFxcXCIvaG9tZS9hbnRob255Ly52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMjI1L25vZGVfbW9kdWxlc1xcXCIsJ3Rlc3QnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ107XzB4ODdkMD1mdW5jdGlvbigpe3JldHVybiBfMHgzMTExYWI7fTtyZXR1cm4gXzB4ODdkMCgpO31mdW5jdGlvbiBZKF8weDFmNjc1YyxfMHgyNzc0ODUsXzB4MTMzYjcxKXt2YXIgXzB4NDVkNGJiPV8weDQzYTU0MztpZihfMHgxZjY3NWNbXzB4NDVkNGJiKDB4MWE5KV0hPT12b2lkIDB4MClyZXR1cm4gXzB4MWY2NzVjW18weDQ1ZDRiYigweDFhOSldO2xldCBfMHg1M2MxNTA9XzB4MWY2NzVjW18weDQ1ZDRiYigweDFjMildPy5bXzB4NDVkNGJiKDB4MThjKV0/LltfMHg0NWQ0YmIoMHgxYTYpXTtyZXR1cm4gXzB4NTNjMTUwJiZfMHgxMzNiNzE9PT1fMHg0NWQ0YmIoMHgxZmUpP18weDFmNjc1Y1tfMHg0NWQ0YmIoMHgxYTkpXT0hMHgxOl8weDFmNjc1Y1tfMHg0NWQ0YmIoMHgxYTkpXT1fMHg1M2MxNTB8fCFfMHgyNzc0ODV8fF8weDFmNjc1Y1tfMHg0NWQ0YmIoMHgxODQpXT8uW18weDQ1ZDRiYigweDE5OSldJiZfMHgyNzc0ODVbXzB4NDVkNGJiKDB4MWNjKV0oXzB4MWY2NzVjWydsb2NhdGlvbiddW18weDQ1ZDRiYigweDE5OSldKSxfMHgxZjY3NWNbXzB4NDVkNGJiKDB4MWE5KV07fWZ1bmN0aW9uIFEoXzB4YjZkYzk1LF8weDRiY2M4OSxfMHg0ODYyYmYsXzB4MTRhODAwKXt2YXIgXzB4MWQzMDBkPV8weDQzYTU0MztfMHhiNmRjOTU9XzB4YjZkYzk1LF8weDRiY2M4OT1fMHg0YmNjODksXzB4NDg2MmJmPV8weDQ4NjJiZixfMHgxNGE4MDA9XzB4MTRhODAwO2xldCBfMHgyMjY3NDc9VyhfMHhiNmRjOTUpLF8weDgzNGU5ZD1fMHgyMjY3NDdbJ2VsYXBzZWQnXSxfMHg3YWI1ZmM9XzB4MjI2NzQ3W18weDFkMzAwZCgweDFlYSldO2NsYXNzIF8weDU3OTZmY3tjb25zdHJ1Y3Rvcigpe3ZhciBfMHg1ZTNhNzc9XzB4MWQzMDBkO3RoaXNbXzB4NWUzYTc3KDB4MTUxKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDVlM2E3NygweDFhYildPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1snX3F1b3RlZFJlZ0V4cCddPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NWUzYTc3KDB4MTNkKV09XzB4YjZkYzk1W18weDVlM2E3NygweDFiMCldLHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddPV8weGI2ZGM5NVsnSFRNTEFsbENvbGxlY3Rpb24nXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDVlM2E3NygweDEzZSldLHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ109T2JqZWN0W18weDVlM2E3NygweDFmYyldLHRoaXNbXzB4NWUzYTc3KDB4MTNhKV09XzB4YjZkYzk1W18weDVlM2E3NygweDFhNSldLHRoaXNbXzB4NWUzYTc3KDB4MTUyKV09UmVnRXhwW18weDVlM2E3NygweDE4ZSldW18weDVlM2E3NygweDE0OSldLHRoaXNbJ19kYXRlVG9TdHJpbmcnXT1EYXRlW18weDVlM2E3NygweDE4ZSldW18weDVlM2E3NygweDE0OSldO31bXzB4MWQzMDBkKDB4MWVkKV0oXzB4MTBkYmYwLF8weDFjZWIzOSxfMHg1ODZiOGYsXzB4MjM4NjIwKXt2YXIgXzB4M2VkYmRjPV8weDFkMzAwZCxfMHg0MjU0OWU9dGhpcyxfMHgzMDczMzI9XzB4NTg2YjhmW18weDNlZGJkYygweDE1OSldO2Z1bmN0aW9uIF8weDllNTUwNShfMHgxMmJiMzEsXzB4MmJkMDFhLF8weDM1MmY5MSl7dmFyIF8weDEwZjZlMj1fMHgzZWRiZGM7XzB4MmJkMDFhW18weDEwZjZlMigweDE0MCldPSd1bmtub3duJyxfMHgyYmQwMWFbJ2Vycm9yJ109XzB4MTJiYjMxW18weDEwZjZlMigweDE3NyldLF8weDQ2MjY0YT1fMHgzNTJmOTFbJ25vZGUnXVtfMHgxMGY2ZTIoMHgxMzkpXSxfMHgzNTJmOTFbJ25vZGUnXVtfMHgxMGY2ZTIoMHgxMzkpXT1fMHgyYmQwMWEsXzB4NDI1NDllWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4MmJkMDFhLF8weDM1MmY5MSk7fXRyeXtfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTdiKV0rKyxfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTU5KV0mJl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxN2QpXVtfMHgzZWRiZGMoMHgxNmYpXShfMHgxY2ViMzkpO3ZhciBfMHgzZjMzZmQsXzB4NTQ0ZmRhLF8weDE1MDNlOSxfMHhiY2Q2YmYsXzB4NDUyYjQyPVtdLF8weDQzODgxMT1bXSxfMHg1MGRkYmQsXzB4MWQxM2NlPXRoaXNbJ190eXBlJ10oXzB4MWNlYjM5KSxfMHhlYzU3Mzc9XzB4MWQxM2NlPT09XzB4M2VkYmRjKDB4MWU3KSxfMHgzYTU5YTc9ITB4MSxfMHgxMmIxYmI9XzB4MWQxM2NlPT09XzB4M2VkYmRjKDB4MWM1KSxfMHg0NGNhNmY9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDFkMTNjZSksXzB4ODFkNjNkPXRoaXNbXzB4M2VkYmRjKDB4MTgxKV0oXzB4MWQxM2NlKSxfMHgxNGI4ZDM9XzB4NDRjYTZmfHxfMHg4MWQ2M2QsXzB4M2Q5ZmMyPXt9LF8weDUwMWY4YT0weDAsXzB4M2I3NjVhPSEweDEsXzB4NDYyNjRhLF8weDU4MjlmZD0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4NTg2YjhmW18weDNlZGJkYygweDE3NCldKXtpZihfMHhlYzU3Mzcpe2lmKF8weDU0NGZkYT1fMHgxY2ViMzlbXzB4M2VkYmRjKDB4MWU5KV0sXzB4NTQ0ZmRhPl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxYmUpXSl7Zm9yKF8weDE1MDNlOT0weDAsXzB4YmNkNmJmPV8weDU4NmI4ZltfMHgzZWRiZGMoMHgxYmUpXSxfMHgzZjMzZmQ9XzB4MTUwM2U5O18weDNmMzNmZDxfMHhiY2Q2YmY7XzB4M2YzM2ZkKyspXzB4NDM4ODExW18weDNlZGJkYygweDE2ZildKF8weDQyNTQ5ZVsnX2FkZFByb3BlcnR5J10oXzB4NDUyYjQyLF8weDFjZWIzOSxfMHgxZDEzY2UsXzB4M2YzM2ZkLF8weDU4NmI4ZikpO18weDEwZGJmMFtfMHgzZWRiZGMoMHgxYmMpXT0hMHgwO31lbHNle2ZvcihfMHgxNTAzZTk9MHgwLF8weGJjZDZiZj1fMHg1NDRmZGEsXzB4M2YzM2ZkPV8weDE1MDNlOTtfMHgzZjMzZmQ8XzB4YmNkNmJmO18weDNmMzNmZCsrKV8weDQzODgxMVsncHVzaCddKF8weDQyNTQ5ZVsnX2FkZFByb3BlcnR5J10oXzB4NDUyYjQyLF8weDFjZWIzOSxfMHgxZDEzY2UsXzB4M2YzM2ZkLF8weDU4NmI4ZikpO31fMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTYxKV0rPV8weDQzODgxMVtfMHgzZWRiZGMoMHgxZTkpXTt9aWYoIShfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxNDEpfHxfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxYjApKSYmIV8weDQ0Y2E2ZiYmXzB4MWQxM2NlIT09J1N0cmluZycmJl8weDFkMTNjZSE9PSdCdWZmZXInJiZfMHgxZDEzY2UhPT0nYmlnaW50Jyl7dmFyIF8weDI3MGY3ZD1fMHgyMzg2MjBbJ3Byb3BzJ118fF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxZGQpXTtpZih0aGlzW18weDNlZGJkYygweDE4MCldKF8weDFjZWIzOSk/KF8weDNmMzNmZD0weDAsXzB4MWNlYjM5Wydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4NTA4OWJiKXt2YXIgXzB4NDI3ZGE4PV8weDNlZGJkYztpZihfMHg1MDFmOGErKyxfMHg1ODZiOGZbXzB4NDI3ZGE4KDB4MTYxKV0rKyxfMHg1MDFmOGE+XzB4MjcwZjdkKXtfMHgzYjc2NWE9ITB4MDtyZXR1cm47fWlmKCFfMHg1ODZiOGZbXzB4NDI3ZGE4KDB4MThkKV0mJl8weDU4NmI4ZltfMHg0MjdkYTgoMHgxNTkpXSYmXzB4NTg2YjhmW18weDQyN2RhOCgweDE2MSldPl8weDU4NmI4ZltfMHg0MjdkYTgoMHgxMmYpXSl7XzB4M2I3NjVhPSEweDA7cmV0dXJuO31fMHg0Mzg4MTFbXzB4NDI3ZGE4KDB4MTZmKV0oXzB4NDI1NDllW18weDQyN2RhOCgweDExOSldKF8weDQ1MmI0MixfMHgxY2ViMzksJ1NldCcsXzB4M2YzM2ZkKyssXzB4NTg2YjhmLGZ1bmN0aW9uKF8weDRmY2ExNil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDRmY2ExNjt9O30oXzB4NTA4OWJiKSkpO30pKTp0aGlzW18weDNlZGJkYygweDE0NSldKF8weDFjZWIzOSkmJl8weDFjZWIzOVtfMHgzZWRiZGMoMHgxNGYpXShmdW5jdGlvbihfMHg1YjYxNmEsXzB4NDI1ZDJlKXt2YXIgXzB4NDM0ZWFiPV8weDNlZGJkYztpZihfMHg1MDFmOGErKyxfMHg1ODZiOGZbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1MDFmOGE+XzB4MjcwZjdkKXtfMHgzYjc2NWE9ITB4MDtyZXR1cm47fWlmKCFfMHg1ODZiOGZbXzB4NDM0ZWFiKDB4MThkKV0mJl8weDU4NmI4ZltfMHg0MzRlYWIoMHgxNTkpXSYmXzB4NTg2YjhmW18weDQzNGVhYigweDE2MSldPl8weDU4NmI4ZltfMHg0MzRlYWIoMHgxMmYpXSl7XzB4M2I3NjVhPSEweDA7cmV0dXJuO312YXIgXzB4MjkyMzRmPV8weDQyNWQyZVsndG9TdHJpbmcnXSgpO18weDI5MjM0ZltfMHg0MzRlYWIoMHgxZTkpXT4weDY0JiYoXzB4MjkyMzRmPV8weDI5MjM0ZltfMHg0MzRlYWIoMHgxMjIpXSgweDAsMHg2NCkrXzB4NDM0ZWFiKDB4MWQ3KSksXzB4NDM4ODExW18weDQzNGVhYigweDE2ZildKF8weDQyNTQ5ZVtfMHg0MzRlYWIoMHgxMTkpXShfMHg0NTJiNDIsXzB4MWNlYjM5LCdNYXAnLF8weDI5MjM0ZixfMHg1ODZiOGYsZnVuY3Rpb24oXzB4MmE5MWRmKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4MmE5MWRmO307fShfMHg1YjYxNmEpKSk7fSksIV8weDNhNTlhNyl7dHJ5e2ZvcihfMHg1MGRkYmQgaW4gXzB4MWNlYjM5KWlmKCEoXzB4ZWM1NzM3JiZfMHg1ODI5ZmRbJ3Rlc3QnXShfMHg1MGRkYmQpKSYmIXRoaXNbXzB4M2VkYmRjKDB4MTI0KV0oXzB4MWNlYjM5LF8weDUwZGRiZCxfMHg1ODZiOGYpKXtpZihfMHg1MDFmOGErKyxfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTYxKV0rKyxfMHg1MDFmOGE+XzB4MjcwZjdkKXtfMHgzYjc2NWE9ITB4MDticmVhazt9aWYoIV8weDU4NmI4ZltfMHgzZWRiZGMoMHgxOGQpXSYmXzB4NTg2YjhmWydhdXRvRXhwYW5kJ10mJl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNjEpXT5fMHg1ODZiOGZbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHgzYjc2NWE9ITB4MDticmVhazt9XzB4NDM4ODExW18weDNlZGJkYygweDE2ZildKF8weDQyNTQ5ZVtfMHgzZWRiZGMoMHgxODcpXShfMHg0NTJiNDIsXzB4M2Q5ZmMyLF8weDFjZWIzOSxfMHgxZDEzY2UsXzB4NTBkZGJkLF8weDU4NmI4ZikpO319Y2F0Y2h7fWlmKF8weDNkOWZjMltfMHgzZWRiZGMoMHgxYzgpXT0hMHgwLF8weDEyYjFiYiYmKF8weDNkOWZjMltfMHgzZWRiZGMoMHgxOTEpXT0hMHgwKSwhXzB4M2I3NjVhKXt2YXIgXzB4NTk3MjU3PVtdW18weDNlZGJkYygweDFmMildKHRoaXNbXzB4M2VkYmRjKDB4MWFkKV0oXzB4MWNlYjM5KSlbJ2NvbmNhdCddKHRoaXNbXzB4M2VkYmRjKDB4MWFlKV0oXzB4MWNlYjM5KSk7Zm9yKF8weDNmMzNmZD0weDAsXzB4NTQ0ZmRhPV8weDU5NzI1N1snbGVuZ3RoJ107XzB4M2YzM2ZkPF8weDU0NGZkYTtfMHgzZjMzZmQrKylpZihfMHg1MGRkYmQ9XzB4NTk3MjU3W18weDNmMzNmZF0sIShfMHhlYzU3MzcmJl8weDU4MjlmZFtfMHgzZWRiZGMoMHgxNWQpXShfMHg1MGRkYmRbXzB4M2VkYmRjKDB4MTQ5KV0oKSkpJiYhdGhpc1tfMHgzZWRiZGMoMHgxMjQpXShfMHgxY2ViMzksXzB4NTBkZGJkLF8weDU4NmI4ZikmJiFfMHgzZDlmYzJbXzB4M2VkYmRjKDB4MWNmKStfMHg1MGRkYmRbJ3RvU3RyaW5nJ10oKV0pe2lmKF8weDUwMWY4YSsrLF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNjEpXSsrLF8weDUwMWY4YT5fMHgyNzBmN2Qpe18weDNiNzY1YT0hMHgwO2JyZWFrO31pZighXzB4NTg2YjhmW18weDNlZGJkYygweDE4ZCldJiZfMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTU5KV0mJl8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNjEpXT5fMHg1ODZiOGZbXzB4M2VkYmRjKDB4MTJmKV0pe18weDNiNzY1YT0hMHgwO2JyZWFrO31fMHg0Mzg4MTFbXzB4M2VkYmRjKDB4MTZmKV0oXzB4NDI1NDllW18weDNlZGJkYygweDE4NyldKF8weDQ1MmI0MixfMHgzZDlmYzIsXzB4MWNlYjM5LF8weDFkMTNjZSxfMHg1MGRkYmQsXzB4NTg2YjhmKSk7fX19fX1pZihfMHgxMGRiZjBbJ3R5cGUnXT1fMHgxZDEzY2UsXzB4MTRiOGQzPyhfMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWI1KV09XzB4MWNlYjM5W18weDNlZGJkYygweDFlMSldKCksdGhpc1tfMHgzZWRiZGMoMHgxNjIpXShfMHgxZDEzY2UsXzB4MTBkYmYwLF8weDU4NmI4ZixfMHgyMzg2MjApKTpfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxNjYpP18weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXT10aGlzW18weDNlZGJkYygweDExNSldWydjYWxsJ10oXzB4MWNlYjM5KTpfMHgxZDEzY2U9PT0nYmlnaW50Jz9fMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWI1KV09XzB4MWNlYjM5W18weDNlZGJkYygweDE0OSldKCk6XzB4MWQxM2NlPT09XzB4M2VkYmRjKDB4MWEwKT9fMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWI1KV09dGhpc1snX3JlZ0V4cFRvU3RyaW5nJ11bXzB4M2VkYmRjKDB4MWUyKV0oXzB4MWNlYjM5KTpfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxZDkpJiZ0aGlzW18weDNlZGJkYygweDEzYSldP18weDEwZGJmMFtfMHgzZWRiZGMoMHgxYjUpXT10aGlzWydfU3ltYm9sJ11bJ3Byb3RvdHlwZSddW18weDNlZGJkYygweDE0OSldW18weDNlZGJkYygweDFlMildKF8weDFjZWIzOSk6IV8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNzQpXSYmIShfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxNDEpfHxfMHgxZDEzY2U9PT1fMHgzZWRiZGMoMHgxYjApKSYmKGRlbGV0ZSBfMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWI1KV0sXzB4MTBkYmYwWydjYXBwZWQnXT0hMHgwKSxfMHgzYjc2NWEmJihfMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWJiKV09ITB4MCksXzB4NDYyNjRhPV8weDU4NmI4ZltfMHgzZWRiZGMoMHgxYTYpXVsnY3VycmVudCddLF8weDU4NmI4Zlsnbm9kZSddW18weDNlZGJkYygweDEzOSldPV8weDEwZGJmMCx0aGlzW18weDNlZGJkYygweDE1MyldKF8weDEwZGJmMCxfMHg1ODZiOGYpLF8weDQzODgxMVsnbGVuZ3RoJ10pe2ZvcihfMHgzZjMzZmQ9MHgwLF8weDU0NGZkYT1fMHg0Mzg4MTFbXzB4M2VkYmRjKDB4MWU5KV07XzB4M2YzM2ZkPF8weDU0NGZkYTtfMHgzZjMzZmQrKylfMHg0Mzg4MTFbXzB4M2YzM2ZkXShfMHgzZjMzZmQpO31fMHg0NTJiNDJbXzB4M2VkYmRjKDB4MWU5KV0mJihfMHgxMGRiZjBbXzB4M2VkYmRjKDB4MWRkKV09XzB4NDUyYjQyKTt9Y2F0Y2goXzB4MzQwY2ZiKXtfMHg5ZTU1MDUoXzB4MzQwY2ZiLF8weDEwZGJmMCxfMHg1ODZiOGYpO31yZXR1cm4gdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDFjZWIzOSxfMHgxMGRiZjApLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDEwZGJmMCxfMHg1ODZiOGYpLF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxYTYpXVtfMHgzZWRiZGMoMHgxMzkpXT1fMHg0NjI2NGEsXzB4NTg2YjhmWydsZXZlbCddLS0sXzB4NTg2YjhmWydhdXRvRXhwYW5kJ109XzB4MzA3MzMyLF8weDU4NmI4ZltfMHgzZWRiZGMoMHgxNTkpXSYmXzB4NTg2YjhmW18weDNlZGJkYygweDE3ZCldW18weDNlZGJkYygweDFiNildKCksXzB4MTBkYmYwO31bXzB4MWQzMDBkKDB4MWFlKV0oXzB4Mzg4NDk4KXt2YXIgXzB4NGNhZjkwPV8weDFkMzAwZDtyZXR1cm4gT2JqZWN0W18weDRjYWY5MCgweDFiOSldP09iamVjdFtfMHg0Y2FmOTAoMHgxYjkpXShfMHgzODg0OTgpOltdO31bXzB4MWQzMDBkKDB4MTgwKV0oXzB4MzY4NDE3KXt2YXIgXzB4MWI2MDgxPV8weDFkMzAwZDtyZXR1cm4hIShfMHgzNjg0MTcmJl8weGI2ZGM5NVtfMHgxYjYwODEoMHgxZjQpXSYmdGhpc1tfMHgxYjYwODEoMHgxNGMpXShfMHgzNjg0MTcpPT09XzB4MWI2MDgxKDB4MTc1KSYmXzB4MzY4NDE3W18weDFiNjA4MSgweDE0ZildKTt9W18weDFkMzAwZCgweDEyNCldKF8weDQ1ZmFmNSxfMHg0MjkzMWIsXzB4NTFmNmZmKXt2YXIgXzB4MmJiMDhlPV8weDFkMzAwZDtyZXR1cm4gXzB4NTFmNmZmW18weDJiYjA4ZSgweDE3YSldP3R5cGVvZiBfMHg0NWZhZjVbXzB4NDI5MzFiXT09XzB4MmJiMDhlKDB4MWM1KTohMHgxO31bXzB4MWQzMDBkKDB4MTM1KV0oXzB4MTI4MzBkKXt2YXIgXzB4MjRmZTI2PV8weDFkMzAwZCxfMHgzNTc2Y2M9Jyc7cmV0dXJuIF8weDM1NzZjYz10eXBlb2YgXzB4MTI4MzBkLF8weDM1NzZjYz09PV8weDI0ZmUyNigweDFjZCk/dGhpc1tfMHgyNGZlMjYoMHgxNGMpXShfMHgxMjgzMGQpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJz9fMHgzNTc2Y2M9XzB4MjRmZTI2KDB4MWU3KTp0aGlzW18weDI0ZmUyNigweDE0YyldKF8weDEyODMwZCk9PT1fMHgyNGZlMjYoMHgxNDIpP18weDM1NzZjYz1fMHgyNGZlMjYoMHgxNjYpOnRoaXNbJ19vYmplY3RUb1N0cmluZyddKF8weDEyODMwZCk9PT1fMHgyNGZlMjYoMHgxMWUpP18weDM1NzZjYz0nYmlnaW50JzpfMHgxMjgzMGQ9PT1udWxsP18weDM1NzZjYz1fMHgyNGZlMjYoMHgxNDEpOl8weDEyODMwZFtfMHgyNGZlMjYoMHgxMWQpXSYmKF8weDM1NzZjYz1fMHgxMjgzMGRbXzB4MjRmZTI2KDB4MTFkKV1bXzB4MjRmZTI2KDB4MTExKV18fF8weDM1NzZjYyk6XzB4MzU3NmNjPT09XzB4MjRmZTI2KDB4MWIwKSYmdGhpc1snX0hUTUxBbGxDb2xsZWN0aW9uJ10mJl8weDEyODMwZCBpbnN0YW5jZW9mIHRoaXNbJ19IVE1MQWxsQ29sbGVjdGlvbiddJiYoXzB4MzU3NmNjPV8weDI0ZmUyNigweDFmMykpLF8weDM1NzZjYzt9Wydfb2JqZWN0VG9TdHJpbmcnXShfMHg1MGE4OWQpe3ZhciBfMHgyYjgxNjI9XzB4MWQzMDBkO3JldHVybiBPYmplY3RbXzB4MmI4MTYyKDB4MThlKV1bXzB4MmI4MTYyKDB4MTQ5KV1bXzB4MmI4MTYyKDB4MWUyKV0oXzB4NTBhODlkKTt9W18weDFkMzAwZCgweDE5YyldKF8weDI3NGJlZCl7dmFyIF8weDljM2RmNz1fMHgxZDMwMGQ7cmV0dXJuIF8weDI3NGJlZD09PV8weDljM2RmNygweDFkMCl8fF8weDI3NGJlZD09PV8weDljM2RmNygweDEzNyl8fF8weDI3NGJlZD09PV8weDljM2RmNygweDE5Nyk7fVtfMHgxZDMwMGQoMHgxODEpXShfMHg0MDdjMDMpe3ZhciBfMHg0NWZhNTk9XzB4MWQzMDBkO3JldHVybiBfMHg0MDdjMDM9PT1fMHg0NWZhNTkoMHgxZjYpfHxfMHg0MDdjMDM9PT1fMHg0NWZhNTkoMHgxNGEpfHxfMHg0MDdjMDM9PT1fMHg0NWZhNTkoMHgxYzMpO31bJ19hZGRQcm9wZXJ0eSddKF8weDFlMTYxNCxfMHgzNmZkYTIsXzB4M2QwYTlmLF8weDUxYzMwNCxfMHgyMDAxMzgsXzB4MzhjODlkKXt2YXIgXzB4M2NmN2UyPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weGJhYjI2Yyl7dmFyIF8weDNkMzUxYT1fMHgxNWUzLF8weDU4Y2IyMz1fMHgyMDAxMzhbJ25vZGUnXVtfMHgzZDM1MWEoMHgxMzkpXSxfMHhmOTM1YTY9XzB4MjAwMTM4Wydub2RlJ11bXzB4M2QzNTFhKDB4MWJhKV0sXzB4MzdiZjg3PV8weDIwMDEzOFsnbm9kZSddWydwYXJlbnQnXTtfMHgyMDAxMzhbJ25vZGUnXVsncGFyZW50J109XzB4NThjYjIzLF8weDIwMDEzOFtfMHgzZDM1MWEoMHgxYTYpXVtfMHgzZDM1MWEoMHgxYmEpXT10eXBlb2YgXzB4NTFjMzA0PT0nbnVtYmVyJz9fMHg1MWMzMDQ6XzB4YmFiMjZjLF8weDFlMTYxNFsncHVzaCddKF8weDNjZjdlMltfMHgzZDM1MWEoMHgxZDYpXShfMHgzNmZkYTIsXzB4M2QwYTlmLF8weDUxYzMwNCxfMHgyMDAxMzgsXzB4MzhjODlkKSksXzB4MjAwMTM4W18weDNkMzUxYSgweDFhNildW18weDNkMzUxYSgweDExYSldPV8weDM3YmY4NyxfMHgyMDAxMzhbJ25vZGUnXVsnaW5kZXgnXT1fMHhmOTM1YTY7fTt9W18weDFkMzAwZCgweDE4NyldKF8weDRiNWRkNyxfMHg0NGMyNmUsXzB4M2IyNDVjLF8weDVkMGRmYSxfMHg1N2IzNjQsXzB4MzljMjhhLF8weDFhMGUzMil7dmFyIF8weDVhNDI5Nj1fMHgxZDMwMGQsXzB4NTRiN2Y5PXRoaXM7cmV0dXJuIF8weDQ0YzI2ZVtfMHg1YTQyOTYoMHgxY2YpK18weDU3YjM2NFtfMHg1YTQyOTYoMHgxNDkpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDRhYmQ2MCl7dmFyIF8weDRmN2QzMz1fMHg1YTQyOTYsXzB4MzZjZmI1PV8weDM5YzI4YVtfMHg0ZjdkMzMoMHgxYTYpXVtfMHg0ZjdkMzMoMHgxMzkpXSxfMHgyZmFhMDc9XzB4MzljMjhhWydub2RlJ11bXzB4NGY3ZDMzKDB4MWJhKV0sXzB4MjdiYmQ2PV8weDM5YzI4YVsnbm9kZSddW18weDRmN2QzMygweDExYSldO18weDM5YzI4YVsnbm9kZSddWydwYXJlbnQnXT1fMHgzNmNmYjUsXzB4MzljMjhhW18weDRmN2QzMygweDFhNildW18weDRmN2QzMygweDFiYSldPV8weDRhYmQ2MCxfMHg0YjVkZDdbXzB4NGY3ZDMzKDB4MTZmKV0oXzB4NTRiN2Y5W18weDRmN2QzMygweDFkNildKF8weDNiMjQ1YyxfMHg1ZDBkZmEsXzB4NTdiMzY0LF8weDM5YzI4YSxfMHgxYTBlMzIpKSxfMHgzOWMyOGFbJ25vZGUnXVsncGFyZW50J109XzB4MjdiYmQ2LF8weDM5YzI4YVtfMHg0ZjdkMzMoMHgxYTYpXVtfMHg0ZjdkMzMoMHgxYmEpXT1fMHgyZmFhMDc7fTt9W18weDFkMzAwZCgweDFkNildKF8weDVkNTJhYixfMHg1YmZmNzAsXzB4M2UzZWUzLF8weDFmMmYzMixfMHg1MGU2YTApe3ZhciBfMHg2NWZiYWI9XzB4MWQzMDBkLF8weDM4MjQ5Yz10aGlzO18weDUwZTZhMHx8KF8weDUwZTZhMD1mdW5jdGlvbihfMHg1NjQyNmUsXzB4MWE3OGQ4KXtyZXR1cm4gXzB4NTY0MjZlW18weDFhNzhkOF07fSk7dmFyIF8weDRhMWU0Yj1fMHgzZTNlZTNbJ3RvU3RyaW5nJ10oKSxfMHg0ODQyOGQ9XzB4MWYyZjMyW18weDY1ZmJhYigweDFhMildfHx7fSxfMHgxNDYzMWM9XzB4MWYyZjMyW18weDY1ZmJhYigweDE3NCldLF8weDI5YjkyMT1fMHgxZjJmMzJbXzB4NjVmYmFiKDB4MThkKV07dHJ5e3ZhciBfMHgyMmMwOTU9dGhpc1snX2lzTWFwJ10oXzB4NWQ1MmFiKSxfMHg0NTg5OWI9XzB4NGExZTRiO18weDIyYzA5NSYmXzB4NDU4OTliWzB4MF09PT0nXFxcXHgyNycmJihfMHg0NTg5OWI9XzB4NDU4OTliW18weDY1ZmJhYigweDFhMSldKDB4MSxfMHg0NTg5OWJbXzB4NjVmYmFiKDB4MWU5KV0tMHgyKSk7dmFyIF8weDQwZDk0Zj1fMHgxZjJmMzJbXzB4NjVmYmFiKDB4MWEyKV09XzB4NDg0MjhkW18weDY1ZmJhYigweDFjZikrXzB4NDU4OTliXTtfMHg0MGQ5NGYmJihfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTc0KV09XzB4MWYyZjMyW18weDY1ZmJhYigweDE3NCldKzB4MSksXzB4MWYyZjMyWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109ISFfMHg0MGQ5NGY7dmFyIF8weDJmOGE4Mz10eXBlb2YgXzB4M2UzZWUzPT1fMHg2NWZiYWIoMHgxZDkpLF8weDVhNTRkMD17J25hbWUnOl8weDJmOGE4M3x8XzB4MjJjMDk1P18weDRhMWU0Yjp0aGlzW18weDY1ZmJhYigweDE2ZCldKF8weDRhMWU0Yil9O2lmKF8weDJmOGE4MyYmKF8weDVhNTRkMFtfMHg2NWZiYWIoMHgxZDkpXT0hMHgwKSwhKF8weDViZmY3MD09PV8weDY1ZmJhYigweDFlNyl8fF8weDViZmY3MD09PSdFcnJvcicpKXt2YXIgXzB4NDM2ZGFkPXRoaXNbJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXShfMHg1ZDUyYWIsXzB4M2UzZWUzKTtpZihfMHg0MzZkYWQmJihfMHg0MzZkYWRbXzB4NjVmYmFiKDB4MTkwKV0mJihfMHg1YTU0ZDBbJ3NldHRlciddPSEweDApLF8weDQzNmRhZFsnZ2V0J10mJiFfMHg0MGQ5NGYmJiFfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MWNhKV0pKXJldHVybiBfMHg1YTU0ZDBbXzB4NjVmYmFiKDB4MTU0KV09ITB4MCx0aGlzW18weDY1ZmJhYigweDE3ZildKF8weDVhNTRkMCxfMHgxZjJmMzIpLF8weDVhNTRkMDt9dmFyIF8weDE5OGY5MDt0cnl7XzB4MTk4ZjkwPV8weDUwZTZhMChfMHg1ZDUyYWIsXzB4M2UzZWUzKTt9Y2F0Y2goXzB4MzAzODE3KXtyZXR1cm4gXzB4NWE1NGQwPXsnbmFtZSc6XzB4NGExZTRiLCd0eXBlJzpfMHg2NWZiYWIoMHgxMjEpLCdlcnJvcic6XzB4MzAzODE3W18weDY1ZmJhYigweDE3NyldfSx0aGlzW18weDY1ZmJhYigweDE3ZildKF8weDVhNTRkMCxfMHgxZjJmMzIpLF8weDVhNTRkMDt9dmFyIF8weDM2OTgxND10aGlzW18weDY1ZmJhYigweDEzNSldKF8weDE5OGY5MCksXzB4NTk2OTU5PXRoaXNbXzB4NjVmYmFiKDB4MTljKV0oXzB4MzY5ODE0KTtpZihfMHg1YTU0ZDBbXzB4NjVmYmFiKDB4MTQwKV09XzB4MzY5ODE0LF8weDU5Njk1OSl0aGlzW18weDY1ZmJhYigweDE3ZildKF8weDVhNTRkMCxfMHgxZjJmMzIsXzB4MTk4ZjkwLGZ1bmN0aW9uKCl7dmFyIF8weDFlNDc1Nz1fMHg2NWZiYWI7XzB4NWE1NGQwW18weDFlNDc1NygweDFiNSldPV8weDE5OGY5MFtfMHgxZTQ3NTcoMHgxZTEpXSgpLCFfMHg0MGQ5NGYmJl8weDM4MjQ5Y1tfMHgxZTQ3NTcoMHgxNjIpXShfMHgzNjk4MTQsXzB4NWE1NGQwLF8weDFmMmYzMix7fSk7fSk7ZWxzZXt2YXIgXzB4MTk0ZmQ2PV8weDFmMmYzMltfMHg2NWZiYWIoMHgxNTkpXSYmXzB4MWYyZjMyW18weDY1ZmJhYigweDE3YildPF8weDFmMmYzMltfMHg2NWZiYWIoMHgxYjIpXSYmXzB4MWYyZjMyW18weDY1ZmJhYigweDE3ZCldWydpbmRleE9mJ10oXzB4MTk4ZjkwKTwweDAmJl8weDM2OTgxNCE9PV8weDY1ZmJhYigweDFjNSkmJl8weDFmMmYzMltfMHg2NWZiYWIoMHgxNjEpXTxfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTJmKV07XzB4MTk0ZmQ2fHxfMHgxZjJmMzJbXzB4NjVmYmFiKDB4MTdiKV08XzB4MTQ2MzFjfHxfMHg0MGQ5NGY/KHRoaXNbXzB4NjVmYmFiKDB4MWVkKV0oXzB4NWE1NGQwLF8weDE5OGY5MCxfMHgxZjJmMzIsXzB4NDBkOTRmfHx7fSksdGhpc1snX2FkZGl0aW9uYWxNZXRhZGF0YSddKF8weDE5OGY5MCxfMHg1YTU0ZDApKTp0aGlzW18weDY1ZmJhYigweDE3ZildKF8weDVhNTRkMCxfMHgxZjJmMzIsXzB4MTk4ZjkwLGZ1bmN0aW9uKCl7dmFyIF8weDVjNDZkMD1fMHg2NWZiYWI7XzB4MzY5ODE0PT09XzB4NWM0NmQwKDB4MTQxKXx8XzB4MzY5ODE0PT09XzB4NWM0NmQwKDB4MWIwKXx8KGRlbGV0ZSBfMHg1YTU0ZDBbXzB4NWM0NmQwKDB4MWI1KV0sXzB4NWE1NGQwW18weDVjNDZkMCgweDFkZSldPSEweDApO30pO31yZXR1cm4gXzB4NWE1NGQwO31maW5hbGx5e18weDFmMmYzMltfMHg2NWZiYWIoMHgxYTIpXT1fMHg0ODQyOGQsXzB4MWYyZjMyWydkZXB0aCddPV8weDE0NjMxYyxfMHgxZjJmMzJbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHgyOWI5MjE7fX1bXzB4MWQzMDBkKDB4MTYyKV0oXzB4NjJhYWE0LF8weDU5ZTc3MSxfMHgzN2JiMjAsXzB4NmVjMGUwKXt2YXIgXzB4NjQwY2YxPV8weDFkMzAwZCxfMHgyN2FhODU9XzB4NmVjMGUwW18weDY0MGNmMSgweDE1OCldfHxfMHgzN2JiMjBbXzB4NjQwY2YxKDB4MTU4KV07aWYoKF8weDYyYWFhND09PV8weDY0MGNmMSgweDEzNyl8fF8weDYyYWFhND09PV8weDY0MGNmMSgweDE0YSkpJiZfMHg1OWU3NzFbXzB4NjQwY2YxKDB4MWI1KV0pe2xldCBfMHhhNzhmMTI9XzB4NTllNzcxWyd2YWx1ZSddWydsZW5ndGgnXTtfMHgzN2JiMjBbXzB4NjQwY2YxKDB4MTRlKV0rPV8weGE3OGYxMixfMHgzN2JiMjBbXzB4NjQwY2YxKDB4MTRlKV0+XzB4MzdiYjIwW18weDY0MGNmMSgweDFkMildPyhfMHg1OWU3NzFbXzB4NjQwY2YxKDB4MWRlKV09JycsZGVsZXRlIF8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxYjUpXSk6XzB4YTc4ZjEyPl8weDI3YWE4NSYmKF8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxZGUpXT1fMHg1OWU3NzFbXzB4NjQwY2YxKDB4MWI1KV1bXzB4NjQwY2YxKDB4MWExKV0oMHgwLF8weDI3YWE4NSksZGVsZXRlIF8weDU5ZTc3MVtfMHg2NDBjZjEoMHgxYjUpXSk7fX1bXzB4MWQzMDBkKDB4MTQ1KV0oXzB4MTYyODQ3KXt2YXIgXzB4NWIxZTk0PV8weDFkMzAwZDtyZXR1cm4hIShfMHgxNjI4NDcmJl8weGI2ZGM5NVtfMHg1YjFlOTQoMHgxNWIpXSYmdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MTYyODQ3KT09PV8weDViMWU5NCgweDFlZikmJl8weDE2Mjg0N1tfMHg1YjFlOTQoMHgxNGYpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDI3MmQ2Mil7dmFyIF8weDFlNTg2OD1fMHgxZDMwMGQ7aWYoXzB4MjcyZDYyW18weDFlNTg2OCgweDE2MCldKC9eXFxcXGQrJC8pKXJldHVybiBfMHgyNzJkNjI7dmFyIF8weDE0OWNhZDt0cnl7XzB4MTQ5Y2FkPUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDI3MmQ2Mik7fWNhdGNoe18weDE0OWNhZD0nXFxcXHgyMicrdGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4MjcyZDYyKSsnXFxcXHgyMic7fXJldHVybiBfMHgxNDljYWRbXzB4MWU1ODY4KDB4MTYwKV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgxNDljYWQ9XzB4MTQ5Y2FkW18weDFlNTg2OCgweDFhMSldKDB4MSxfMHgxNDljYWRbXzB4MWU1ODY4KDB4MWU5KV0tMHgyKTpfMHgxNDljYWQ9XzB4MTQ5Y2FkW18weDFlNTg2OCgweDE3ZSldKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbJ3JlcGxhY2UnXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVsncmVwbGFjZSddKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxNDljYWQ7fVsnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCddKF8weDM2MmNlNSxfMHgyYTcyNjQsXzB4NDMyMzcwLF8weDEwZjNiNyl7dmFyIF8weDk1ODNkND1fMHgxZDMwMGQ7dGhpc1tfMHg5NTgzZDQoMHgxNTMpXShfMHgzNjJjZTUsXzB4MmE3MjY0KSxfMHgxMGYzYjcmJl8weDEwZjNiNygpLHRoaXNbXzB4OTU4M2Q0KDB4MTFmKV0oXzB4NDMyMzcwLF8weDM2MmNlNSksdGhpc1tfMHg5NTgzZDQoMHgxOGYpXShfMHgzNjJjZTUsXzB4MmE3MjY0KTt9W18weDFkMzAwZCgweDE1MyldKF8weDJiNjNlMSxfMHg1ZjRkNjgpe3ZhciBfMHg1MWY1ZTE9XzB4MWQzMDBkO3RoaXNbXzB4NTFmNWUxKDB4MTcwKV0oXzB4MmI2M2UxLF8weDVmNGQ2OCksdGhpc1snX3NldE5vZGVRdWVyeVBhdGgnXShfMHgyYjYzZTEsXzB4NWY0ZDY4KSx0aGlzW18weDUxZjVlMSgweDE1ZSldKF8weDJiNjNlMSxfMHg1ZjRkNjgpLHRoaXNbXzB4NTFmNWUxKDB4MWE0KV0oXzB4MmI2M2UxLF8weDVmNGQ2OCk7fVtfMHgxZDMwMGQoMHgxNzApXShfMHg1Yzg0OTksXzB4M2U2MzBkKXt9W18weDFkMzAwZCgweDFhYSldKF8weDEzNDllMyxfMHgzYmIyOTkpe31bXzB4MWQzMDBkKDB4MWMxKV0oXzB4M2Q5MzUwLF8weDEzMmM2Yil7fVtfMHgxZDMwMGQoMHgxM2MpXShfMHgxMWZkODcpe3JldHVybiBfMHgxMWZkODc9PT10aGlzWydfdW5kZWZpbmVkJ107fVtfMHgxZDMwMGQoMHgxOGYpXShfMHgxYzlhNTMsXzB4NWQ1YTFhKXt2YXIgXzB4NWQ3ZWQ2PV8weDFkMzAwZDt0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4MWM5YTUzLF8weDVkNWExYSksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHgxYzlhNTMpLF8weDVkNWExYVtfMHg1ZDdlZDYoMHgxNDgpXSYmdGhpc1tfMHg1ZDdlZDYoMHgxY2UpXShfMHgxYzlhNTMpLHRoaXNbXzB4NWQ3ZWQ2KDB4MWI3KV0oXzB4MWM5YTUzLF8weDVkNWExYSksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4MWM5YTUzLF8weDVkNWExYSksdGhpc1tfMHg1ZDdlZDYoMHgxMjkpXShfMHgxYzlhNTMpO31bXzB4MWQzMDBkKDB4MTFmKV0oXzB4NGVmYmQwLF8weDEwZGQzZCl7dmFyIF8weDUwMzJlOD1fMHgxZDMwMGQ7bGV0IF8weDIyNmViNjt0cnl7XzB4YjZkYzk1W18weDUwMzJlOCgweDFjYildJiYoXzB4MjI2ZWI2PV8weGI2ZGM5NVtfMHg1MDMyZTgoMHgxY2IpXVtfMHg1MDMyZTgoMHgxMzEpXSxfMHhiNmRjOTVbJ2NvbnNvbGUnXVtfMHg1MDMyZTgoMHgxMzEpXT1mdW5jdGlvbigpe30pLF8weDRlZmJkMCYmdHlwZW9mIF8weDRlZmJkMFsnbGVuZ3RoJ109PV8weDUwMzJlOCgweDE5NykmJihfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MWU5KV09XzB4NGVmYmQwW18weDUwMzJlOCgweDFlOSldKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MjI2ZWI2JiYoXzB4YjZkYzk1W18weDUwMzJlOCgweDFjYildW18weDUwMzJlOCgweDEzMSldPV8weDIyNmViNik7fWlmKF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxNDApXT09PV8weDUwMzJlOCgweDE5Nyl8fF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxNDApXT09PSdOdW1iZXInKXtpZihpc05hTihfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MWI1KV0pKV8weDEwZGQzZFtfMHg1MDMyZTgoMHgxZTQpXT0hMHgwLGRlbGV0ZSBfMHgxMGRkM2RbJ3ZhbHVlJ107ZWxzZSBzd2l0Y2goXzB4MTBkZDNkW18weDUwMzJlOCgweDFiNSldKXtjYXNlIE51bWJlcltfMHg1MDMyZTgoMHgxNmIpXTpfMHgxMGRkM2RbJ3Bvc2l0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MWI1KV07YnJlYWs7Y2FzZSBOdW1iZXJbXzB4NTAzMmU4KDB4MTZjKV06XzB4MTBkZDNkW18weDUwMzJlOCgweDE5NCldPSEweDAsZGVsZXRlIF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxYjUpXTticmVhaztjYXNlIDB4MDp0aGlzW18weDUwMzJlOCgweDE4NildKF8weDEwZGQzZFtfMHg1MDMyZTgoMHgxYjUpXSkmJihfMHgxMGRkM2RbJ25lZ2F0aXZlWmVybyddPSEweDApO2JyZWFrO319ZWxzZSBfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MTQwKV09PT1fMHg1MDMyZTgoMHgxYzUpJiZ0eXBlb2YgXzB4NGVmYmQwW18weDUwMzJlOCgweDExMSldPT0nc3RyaW5nJyYmXzB4NGVmYmQwW18weDUwMzJlOCgweDExMSldJiZfMHgxMGRkM2RbXzB4NTAzMmU4KDB4MTExKV0mJl8weDRlZmJkMFsnbmFtZSddIT09XzB4MTBkZDNkW18weDUwMzJlOCgweDExMSldJiYoXzB4MTBkZDNkW18weDUwMzJlOCgweDE0NCldPV8weDRlZmJkMFsnbmFtZSddKTt9WydfaXNOZWdhdGl2ZVplcm8nXShfMHgxMzBkM2Qpe3JldHVybiAweDEvXzB4MTMwZDNkPT09TnVtYmVyWydORUdBVElWRV9JTkZJTklUWSddO31bXzB4MWQzMDBkKDB4MWNlKV0oXzB4MjViNzU5KXt2YXIgXzB4Mjk3MTczPV8weDFkMzAwZDshXzB4MjViNzU5W18weDI5NzE3MygweDFkZCldfHwhXzB4MjViNzU5W18weDI5NzE3MygweDFkZCldWydsZW5ndGgnXXx8XzB4MjViNzU5W18weDI5NzE3MygweDE0MCldPT09J2FycmF5J3x8XzB4MjViNzU5W18weDI5NzE3MygweDE0MCldPT09XzB4Mjk3MTczKDB4MTViKXx8XzB4MjViNzU5Wyd0eXBlJ109PT0nU2V0J3x8XzB4MjViNzU5W18weDI5NzE3MygweDFkZCldW18weDI5NzE3MygweDEyYildKGZ1bmN0aW9uKF8weDRhNmViNSxfMHgxMjFmMzApe3ZhciBfMHgxYTQ4N2M9XzB4Mjk3MTczLF8weDJhM2MzMz1fMHg0YTZlYjVbXzB4MWE0ODdjKDB4MTExKV1bXzB4MWE0ODdjKDB4MTY0KV0oKSxfMHgzNTk4MmQ9XzB4MTIxZjMwW18weDFhNDg3YygweDExMSldW18weDFhNDg3YygweDE2NCldKCk7cmV0dXJuIF8weDJhM2MzMzxfMHgzNTk4MmQ/LTB4MTpfMHgyYTNjMzM+XzB4MzU5ODJkPzB4MToweDA7fSk7fVtfMHgxZDMwMGQoMHgxYjcpXShfMHgzZTA3NmMsXzB4NGQ3ZWEwKXt2YXIgXzB4YzkzMDZmPV8weDFkMzAwZDtpZighKF8weDRkN2VhMFtfMHhjOTMwNmYoMHgxN2EpXXx8IV8weDNlMDc2Y1sncHJvcHMnXXx8IV8weDNlMDc2Y1tfMHhjOTMwNmYoMHgxZGQpXVtfMHhjOTMwNmYoMHgxZTkpXSkpe2Zvcih2YXIgXzB4YzMxYWM1PVtdLF8weDIwNTU0NT1bXSxfMHg0MDQ1ODc9MHgwLF8weDRkOTZmND1fMHgzZTA3NmNbXzB4YzkzMDZmKDB4MWRkKV1bXzB4YzkzMDZmKDB4MWU5KV07XzB4NDA0NTg3PF8weDRkOTZmNDtfMHg0MDQ1ODcrKyl7dmFyIF8weDQwNWRkND1fMHgzZTA3NmNbJ3Byb3BzJ11bXzB4NDA0NTg3XTtfMHg0MDVkZDRbXzB4YzkzMDZmKDB4MTQwKV09PT1fMHhjOTMwNmYoMHgxYzUpP18weGMzMWFjNVtfMHhjOTMwNmYoMHgxNmYpXShfMHg0MDVkZDQpOl8weDIwNTU0NVtfMHhjOTMwNmYoMHgxNmYpXShfMHg0MDVkZDQpO31pZighKCFfMHgyMDU1NDVbXzB4YzkzMDZmKDB4MWU5KV18fF8weGMzMWFjNVtfMHhjOTMwNmYoMHgxZTkpXTw9MHgxKSl7XzB4M2UwNzZjW18weGM5MzA2ZigweDFkZCldPV8weDIwNTU0NTt2YXIgXzB4MThmOTczPXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weGMzMWFjNX07dGhpc1tfMHhjOTMwNmYoMHgxNzApXShfMHgxOGY5NzMsXzB4NGQ3ZWEwKSx0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4MThmOTczLF8weDRkN2VhMCksdGhpc1tfMHhjOTMwNmYoMHgxMzQpXShfMHgxOGY5NzMpLHRoaXNbJ19zZXROb2RlUGVybWlzc2lvbnMnXShfMHgxOGY5NzMsXzB4NGQ3ZWEwKSxfMHgxOGY5NzNbJ2lkJ10rPSdcXFxceDIwZicsXzB4M2UwNzZjW18weGM5MzA2ZigweDFkZCldW18weGM5MzA2ZigweDEyYyldKF8weDE4Zjk3Myk7fX19WydfYWRkTG9hZE5vZGUnXShfMHg0OGFkYmEsXzB4MzU0ODk2KXt9W18weDFkMzAwZCgweDEzNCldKF8weDg4MDBmYSl7fVtfMHgxZDMwMGQoMHgxZGIpXShfMHgyN2ZkYWQpe3ZhciBfMHgxZmY2M2I9XzB4MWQzMDBkO3JldHVybiBBcnJheVtfMHgxZmY2M2IoMHgxOWEpXShfMHgyN2ZkYWQpfHx0eXBlb2YgXzB4MjdmZGFkPT1fMHgxZmY2M2IoMHgxY2QpJiZ0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHgyN2ZkYWQpPT09XzB4MWZmNjNiKDB4MTEwKTt9W18weDFkMzAwZCgweDFhNCldKF8weGVkYjkyNSxfMHgyNzVlMTkpe31bXzB4MWQzMDBkKDB4MTI5KV0oXzB4MmY3ZDU3KXt2YXIgXzB4NWM1MWM3PV8weDFkMzAwZDtkZWxldGUgXzB4MmY3ZDU3W18weDVjNTFjNygweDE2YSldLGRlbGV0ZSBfMHgyZjdkNTdbXzB4NWM1MWM3KDB4MTJlKV0sZGVsZXRlIF8weDJmN2Q1N1tfMHg1YzUxYzcoMHgxN2MpXTt9Wydfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJ10oXzB4NDAwOTg1LF8weDRlZDU5MSl7fX1sZXQgXzB4NTc1MTAxPW5ldyBfMHg1Nzk2ZmMoKSxfMHgzMTdlNjI9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NGEyNDE0PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4MjM3MDZjKF8weDNjMDUzNSxfMHgxNmI4ZGMsXzB4NDQwMzZlLF8weDM4OTNhZixfMHg1ZjJjZTEsXzB4MThlZWI2KXt2YXIgXzB4MWQ4MGY1PV8weDFkMzAwZDtsZXQgXzB4MTdjY2YyLF8weDU3OGMwMjt0cnl7XzB4NTc4YzAyPV8weDdhYjVmYygpLF8weDE3Y2NmMj1fMHg0ODYyYmZbXzB4MTZiOGRjXSwhXzB4MTdjY2YyfHxfMHg1NzhjMDItXzB4MTdjY2YyWyd0cyddPjB4MWY0JiZfMHgxN2NjZjJbXzB4MWQ4MGY1KDB4MWI4KV0mJl8weDE3Y2NmMltfMHgxZDgwZjUoMHgxMTgpXS9fMHgxN2NjZjJbJ2NvdW50J108MHg2ND8oXzB4NDg2MmJmW18weDE2YjhkY109XzB4MTdjY2YyPXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4NTc4YzAyfSxfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV09e30pOl8weDU3OGMwMi1fMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bJ3RzJ10+MHgzMiYmXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldW18weDFkODBmNSgweDFiOCldJiZfMHg0ODYyYmZbXzB4MWQ4MGY1KDB4MWY3KV1bXzB4MWQ4MGY1KDB4MTE4KV0vXzB4NDg2MmJmWydoaXRzJ11bJ2NvdW50J108MHg2NCYmKF8weDQ4NjJiZltfMHgxZDgwZjUoMHgxZjcpXT17fSk7bGV0IF8weDJlY2I3ZD1bXSxfMHgzZWNjM2M9XzB4MTdjY2YyWydyZWR1Y2VMaW1pdHMnXXx8XzB4NDg2MmJmWydoaXRzJ11bXzB4MWQ4MGY1KDB4MTk4KV0/XzB4NGEyNDE0Ol8weDMxN2U2MixfMHg0OWRkZDY9XzB4MzdiNWM5PT57dmFyIF8weDE2N2IwNT1fMHgxZDgwZjU7bGV0IF8weDQ1ZjY3Zj17fTtyZXR1cm4gXzB4NDVmNjdmW18weDE2N2IwNSgweDFkZCldPV8weDM3YjVjOVtfMHgxNjdiMDUoMHgxZGQpXSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MWJlKV09XzB4MzdiNWM5W18weDE2N2IwNSgweDFiZSldLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxNTgpXT1fMHgzN2I1YzlbXzB4MTY3YjA1KDB4MTU4KV0sXzB4NDVmNjdmW18weDE2N2IwNSgweDFkMildPV8weDM3YjVjOVsndG90YWxTdHJMZW5ndGgnXSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MTJmKV09XzB4MzdiNWM5W18weDE2N2IwNSgweDEyZildLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxYjIpXT1fMHgzN2I1YzlbXzB4MTY3YjA1KDB4MWIyKV0sXzB4NDVmNjdmW18weDE2N2IwNSgweDE0OCldPSEweDEsXzB4NDVmNjdmWydub0Z1bmN0aW9ucyddPSFfMHg0YmNjODksXzB4NDVmNjdmWydkZXB0aCddPTB4MSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MTdiKV09MHgwLF8weDQ1ZjY3ZlsnZXhwSWQnXT1fMHgxNjdiMDUoMHgxZjApLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxYzQpXT1fMHgxNjdiMDUoMHgxMmQpLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxNTkpXT0hMHgwLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxN2QpXT1bXSxfMHg0NWY2N2ZbXzB4MTY3YjA1KDB4MTYxKV09MHgwLF8weDQ1ZjY3ZltfMHgxNjdiMDUoMHgxY2EpXT0hMHgwLF8weDQ1ZjY3ZlsnYWxsU3RyTGVuZ3RoJ109MHgwLF8weDQ1ZjY3Zlsnbm9kZSddPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDQ1ZjY3Zjt9O2Zvcih2YXIgXzB4M2U1ZWNkPTB4MDtfMHgzZTVlY2Q8XzB4NWYyY2UxW18weDFkODBmNSgweDFlOSldO18weDNlNWVjZCsrKV8weDJlY2I3ZFtfMHgxZDgwZjUoMHgxNmYpXShfMHg1NzUxMDFbJ3NlcmlhbGl6ZSddKHsndGltZU5vZGUnOl8weDNjMDUzNT09PV8weDFkODBmNSgweDExOCl8fHZvaWQgMHgwfSxfMHg1ZjJjZTFbXzB4M2U1ZWNkXSxfMHg0OWRkZDYoXzB4M2VjYzNjKSx7fSkpO2lmKF8weDNjMDUzNT09PSd0cmFjZScpe2xldCBfMHgyYjIwOTg9RXJyb3JbXzB4MWQ4MGY1KDB4MTIwKV07dHJ5e0Vycm9yW18weDFkODBmNSgweDEyMCldPTB4MS8weDAsXzB4MmVjYjdkWydwdXNoJ10oXzB4NTc1MTAxW18weDFkODBmNSgweDFlZCldKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHgxZDgwZjUoMHgxZTUpXSxfMHg0OWRkZDYoXzB4M2VjYzNjKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHgxZDgwZjUoMHgxMjApXT1fMHgyYjIwOTg7fX1yZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDE0YTgwMCwnYXJncyc6W3sndHMnOl8weDQ0MDM2ZSwnc2Vzc2lvbic6XzB4Mzg5M2FmLCdhcmdzJzpfMHgyZWNiN2QsJ2lkJzpfMHgxNmI4ZGMsJ2NvbnRleHQnOl8weDE4ZWViNn1dfTt9Y2F0Y2goXzB4NGU5OWQwKXtyZXR1cm57J21ldGhvZCc6XzB4MWQ4MGY1KDB4MTY5KSwndmVyc2lvbic6XzB4MTRhODAwLCdhcmdzJzpbeyd0cyc6XzB4NDQwMzZlLCdzZXNzaW9uJzpfMHgzODkzYWYsJ2FyZ3MnOlt7J3R5cGUnOl8weDFkODBmNSgweDEyMSksJ2Vycm9yJzpfMHg0ZTk5ZDAmJl8weDRlOTlkMFtfMHgxZDgwZjUoMHgxNzcpXX1dLCdpZCc6XzB4MTZiOGRjLCdjb250ZXh0JzpfMHgxOGVlYjZ9XX07fWZpbmFsbHl7dHJ5e2lmKF8weDE3Y2NmMiYmXzB4NTc4YzAyKXtsZXQgXzB4MTBiMmNkPV8weDdhYjVmYygpO18weDE3Y2NmMlsnY291bnQnXSsrLF8weDE3Y2NmMltfMHgxZDgwZjUoMHgxMTgpXSs9XzB4ODM0ZTlkKF8weDU3OGMwMixfMHgxMGIyY2QpLF8weDE3Y2NmMlsndHMnXT1fMHgxMGIyY2QsXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldW18weDFkODBmNSgweDFiOCldKyssXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldW18weDFkODBmNSgweDExOCldKz1fMHg4MzRlOWQoXzB4NTc4YzAyLF8weDEwYjJjZCksXzB4NDg2MmJmW18weDFkODBmNSgweDFmNyldWyd0cyddPV8weDEwYjJjZCwoXzB4MTdjY2YyWydjb3VudCddPjB4MzJ8fF8weDE3Y2NmMltfMHgxZDgwZjUoMHgxMTgpXT4weDY0KSYmKF8weDE3Y2NmMltfMHgxZDgwZjUoMHgxOTgpXT0hMHgwKSwoXzB4NDg2MmJmWydoaXRzJ11bXzB4MWQ4MGY1KDB4MWI4KV0+MHgzZTh8fF8weDQ4NjJiZlsnaGl0cyddW18weDFkODBmNSgweDExOCldPjB4MTJjKSYmKF8weDQ4NjJiZltfMHgxZDgwZjUoMHgxZjcpXVsncmVkdWNlTGltaXRzJ109ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MjM3MDZjO30oKF8weDE4MDZjYyxfMHgxYjY3OTcsXzB4NDJhNGFiLF8weDFjNTc2MSxfMHg0MzlhMTEsXzB4MmQ3NTE4LF8weDQ3N2YzZixfMHg0OWY3N2MsXzB4NjdmMGZiLF8weDUxY2U4Zik9Pnt2YXIgXzB4MTdiNGM5PV8weDQzYTU0MztpZihfMHgxODA2Y2NbXzB4MTdiNGM5KDB4MTlmKV0pcmV0dXJuIF8weDE4MDZjY1tfMHgxN2I0YzkoMHgxOWYpXTtpZighWShfMHgxODA2Y2MsXzB4NDlmNzdjLF8weDQzOWExMSkpcmV0dXJuIF8weDE4MDZjY1snX2NvbnNvbGVfbmluamEnXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4MTgwNmNjW18weDE3YjRjOSgweDE5ZildO2xldCBfMHg0NTQwY2U9VyhfMHgxODA2Y2MpLF8weDQ0ZTIzMD1fMHg0NTQwY2VbXzB4MTdiNGM5KDB4MWU4KV0sXzB4MTMwNjc3PV8weDQ1NDBjZVtfMHgxN2I0YzkoMHgxZWEpXSxfMHgxNDQ0YzI9XzB4NDU0MGNlW18weDE3YjRjOSgweDEzNildLF8weDJjYTNmYj17J2hpdHMnOnt9LCd0cyc6e319LF8weDVlMTA5ZT1RKF8weDE4MDZjYyxfMHg2N2YwZmIsXzB4MmNhM2ZiLF8weDJkNzUxOCksXzB4M2U1OGFiPV8weDFkZTc5Mj0+e18weDJjYTNmYlsndHMnXVtfMHgxZGU3OTJdPV8weDEzMDY3NygpO30sXzB4MTY3OGE4PShfMHhhMzYzNWYsXzB4MTNhMTAyKT0+e3ZhciBfMHgxYTRiMjI9XzB4MTdiNGM5O2xldCBfMHgzZWIxNDA9XzB4MmNhM2ZiWyd0cyddW18weDEzYTEwMl07aWYoZGVsZXRlIF8weDJjYTNmYlsndHMnXVtfMHgxM2ExMDJdLF8weDNlYjE0MCl7bGV0IF8weDQ4NGQ3Nj1fMHg0NGUyMzAoXzB4M2ViMTQwLF8weDEzMDY3NygpKTtfMHgzN2M2M2QoXzB4NWUxMDllKF8weDFhNGIyMigweDExOCksXzB4YTM2MzVmLF8weDE0NDRjMigpLF8weDIxZmM0YSxbXzB4NDg0ZDc2XSxfMHgxM2ExMDIpKTt9fSxfMHgxOTQwYjA9XzB4MTgzZjAxPT5fMHgxMjcyMTI9Pnt2YXIgXzB4NDY2ZjExPV8weDE3YjRjOTt0cnl7XzB4M2U1OGFiKF8weDEyNzIxMiksXzB4MTgzZjAxKF8weDEyNzIxMik7fWZpbmFsbHl7XzB4MTgwNmNjWydjb25zb2xlJ11bXzB4NDY2ZjExKDB4MTE4KV09XzB4MTgzZjAxO319LF8weDFiNDAyNT1fMHgzMDJiNjc9Pl8weDU5M2IxND0+e3ZhciBfMHgzZjcyMTc9XzB4MTdiNGM5O3RyeXtsZXQgW18weDJjZTA1MCxfMHg0MzkxNTFdPV8weDU5M2IxNFtfMHgzZjcyMTcoMHgxYjQpXShfMHgzZjcyMTcoMHgxNjgpKTtfMHgxNjc4YTgoXzB4NDM5MTUxLF8weDJjZTA1MCksXzB4MzAyYjY3KF8weDJjZTA1MCk7fWZpbmFsbHl7XzB4MTgwNmNjW18weDNmNzIxNygweDFjYildW18weDNmNzIxNygweDFmYildPV8weDMwMmI2Nzt9fTtfMHgxODA2Y2NbXzB4MTdiNGM5KDB4MTlmKV09eydjb25zb2xlTG9nJzooXzB4MzYzODc5LF8weDVjODQ4NSk9Pnt2YXIgXzB4ZDhkNTJlPV8weDE3YjRjOTtfMHgxODA2Y2NbJ2NvbnNvbGUnXVsnbG9nJ11bXzB4ZDhkNTJlKDB4MTExKV0hPT0nZGlzYWJsZWRMb2cnJiZfMHgzN2M2M2QoXzB4NWUxMDllKF8weGQ4ZDUyZSgweDE2OSksXzB4MzYzODc5LF8weDE0NDRjMigpLF8weDIxZmM0YSxfMHg1Yzg0ODUpKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0OTZhYTksXzB4MzM0NWU0KT0+e3ZhciBfMHgyZjUzYzY9XzB4MTdiNGM5O18weDE4MDZjY1tfMHgyZjUzYzYoMHgxY2IpXVtfMHgyZjUzYzYoMHgxNjkpXVtfMHgyZjUzYzYoMHgxMTEpXSE9PV8weDJmNTNjNigweDE1NykmJl8weDM3YzYzZChfMHg1ZTEwOWUoXzB4MmY1M2M2KDB4MWY4KSxfMHg0OTZhYTksXzB4MTQ0NGMyKCksXzB4MjFmYzRhLF8weDMzNDVlNCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgxYWE3YjM9XzB4MTdiNGM5O18weDE4MDZjY1tfMHgxYWE3YjMoMHgxY2IpXVsndGltZSddPV8weDE5NDBiMChfMHgxODA2Y2NbXzB4MWFhN2IzKDB4MWNiKV1bXzB4MWFhN2IzKDB4MTE4KV0pO30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e3ZhciBfMHg1MWEyNGU9XzB4MTdiNGM5O18weDE4MDZjY1snY29uc29sZSddW18weDUxYTI0ZSgweDFmYildPV8weDFiNDAyNShfMHgxODA2Y2NbJ2NvbnNvbGUnXVsndGltZUVuZCddKTt9LCdhdXRvTG9nJzooXzB4MmY1NjViLF8weDUzNzU4MSk9Pnt2YXIgXzB4Mjk2MGExPV8weDE3YjRjOTtfMHgzN2M2M2QoXzB4NWUxMDllKF8weDI5NjBhMSgweDE2OSksXzB4NTM3NTgxLF8weDE0NDRjMigpLF8weDIxZmM0YSxbXzB4MmY1NjViXSkpO30sJ2F1dG9Mb2dNYW55JzooXzB4NDBiMjQwLF8weDJmMmU2ZCk9Pnt2YXIgXzB4NDQyMjhjPV8weDE3YjRjOTtfMHgzN2M2M2QoXzB4NWUxMDllKF8weDQ0MjI4YygweDE2OSksXzB4NDBiMjQwLF8weDE0NDRjMigpLF8weDIxZmM0YSxfMHgyZjJlNmQpKTt9LCdhdXRvVHJhY2UnOihfMHgyMmM2NTksXzB4MjcxMTBkKT0+e3ZhciBfMHg0ZDg2ODQ9XzB4MTdiNGM5O18weDM3YzYzZChfMHg1ZTEwOWUoXzB4NGQ4Njg0KDB4MWY4KSxfMHgyNzExMGQsXzB4MTQ0NGMyKCksXzB4MjFmYzRhLFtfMHgyMmM2NTldKSk7fSwnYXV0b1RyYWNlTWFueSc6KF8weDEyMzUxOCxfMHgyZTQ4NzgpPT57XzB4MzdjNjNkKF8weDVlMTA5ZSgndHJhY2UnLF8weDEyMzUxOCxfMHgxNDQ0YzIoKSxfMHgyMWZjNGEsXzB4MmU0ODc4KSk7fSwnYXV0b1RpbWUnOihfMHg5MjcyMDUsXzB4NDNlNTQ3LF8weGRlYTQxNik9PntfMHgzZTU4YWIoXzB4ZGVhNDE2KTt9LCdhdXRvVGltZUVuZCc6KF8weDNmM2NlOCxfMHgzNDQyYmQsXzB4MmRmNWNjKT0+e18weDE2NzhhOChfMHgzNDQyYmQsXzB4MmRmNWNjKTt9LCdjb3ZlcmFnZSc6XzB4NTA3YjQwPT57dmFyIF8weDMwNDYxZT1fMHgxN2I0Yzk7XzB4MzdjNjNkKHsnbWV0aG9kJzpfMHgzMDQ2MWUoMHgxNDMpLCd2ZXJzaW9uJzpfMHgyZDc1MTgsJ2FyZ3MnOlt7J2lkJzpfMHg1MDdiNDB9XX0pO319O2xldCBfMHgzN2M2M2Q9SihfMHgxODA2Y2MsXzB4MWI2Nzk3LF8weDQyYTRhYixfMHgxYzU3NjEsXzB4NDM5YTExLF8weDUxY2U4ZiksXzB4MjFmYzRhPV8weDE4MDZjY1tfMHgxN2I0YzkoMHgxMjYpXTtyZXR1cm4gXzB4MTgwNmNjWydfY29uc29sZV9uaW5qYSddO30pKGdsb2JhbFRoaXMsXzB4NDNhNTQzKDB4MTYzKSxfMHg0M2E1NDMoMHgxMzMpLF8weDQzYTU0MygweDE1YyksXzB4NDNhNTQzKDB4MTI4KSxfMHg0M2E1NDMoMHgxM2YpLCcxNjk1MTQwMzk5MTY2JyxfMHg0M2E1NDMoMHgxM2IpLCcnLCcnKTtcIik7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX29vKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZUxvZyhpLCB2KTt9Y2F0Y2goZSl7fSByZXR1cm4gdn07ZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07ZnVuY3Rpb24gb29fdGUoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZUVuZCgpO31jYXRjaChlKXt9fTsvKmVzbGludCBlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
