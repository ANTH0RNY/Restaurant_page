/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about.scss ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about-wrapper {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
}

.about-title {
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: lighter;
  text-align: center;
  color: orangered;
  text-transform: capitalize;
}

.about-wrapper p {
  font-family: "hangyaku", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  padding-inline: 3rem;
}

.history h3 {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-style: italic;
}

.about-chef {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.about-chef h2 {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-style: italic;
  align-self: center;
}
.about-chef h3 {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: light;
  text-align: center;
}
.about-chef .chef-image {
  width: 100px;
  border-radius: 50%;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.location {
  display: flex;
  align-items: center;
}
.location .location-icon {
  height: 5rem;
  flex: 0 0 auto;
}
.location > * {
  padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/sass/about.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;EAEA,uBAAA;EACA,mBAAA;EACA,oBAAA;AAFJ;;AAIA;EACI,4DCLQ;EDMR,eAAA;EACA,oBAAA;EAEA,kBAAA;EACA,gBAAA;EACA,0BAAA;AAFJ;;AAKA;EACI,+DCbW;EDcX,iBAAA;EACA,oBAAA;AAFJ;;AAMI;EACI,4DCrBI;EDsBJ,eAAA;EAEA,kBAAA;AAJR;;AAQA;EACI,aAAA;EACA,sBAAA;EACA,gBAAA;AALJ;AAOI;EACI,4DClCI;EDmCJ,eAAA;EAEA,kBAAA;EACA,kBAAA;AANR;AASI;EACI,4DC1CI;ED2CJ,iBAAA;EACA,kBAAA;EAGA,kBAAA;AATR;AAWI;EACI,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,2CAAA;AATR;;AAYA;EACI,aAAA;EACA,mBAAA;AATJ;AAUI;EACI,YAAA;EACA,cAAA;AARR;AAWI;EACI,UAAA;AATR","sourcesContent":["@import 'sizes';\n\n.about-wrapper{\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    // place-content: center;\n    justify-content: center;\n    align-items: center;\n    padding-inline: 1rem;\n}\n.about-title{\n    font-family: $bento-font;\n    font-size: 3rem;\n    font-weight: lighter;\n    \n    text-align: center;\n    color: orangered;\n    text-transform: capitalize;\n}\n\n.about-wrapper p{\n    font-family: $hangyaku-font;\n    font-size: 1.5rem;\n    padding-inline: 3rem;\n}\n\n.history{\n    h3{\n        font-family: $trial-font;\n        font-size: 2rem;\n        // font-weight: lighter;\n        font-style: italic;\n    }\n}\n\n.about-chef{\n    display: flex;\n    flex-direction: column;\n    margin-top: 2rem;\n\n    h2{\n        font-family: $trial-font;\n        font-size: 2rem;\n        // font-weight: lighter;\n        font-style: italic;\n        align-self: center;\n    }\n    \n    h3{\n        font-family: $trial-font;\n        font-size: 1.5rem;\n        font-weight: light;\n        // font-style: italic;\n\n        text-align: center;\n    }\n    .chef-image{\n        width: 100px;\n        border-radius: 50%;\n        align-self: center;\n        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    }\n}\n.location{\n    display: flex;\n    align-items: center;\n    .location-icon{\n        height: 5rem;\n        flex: 0 0 auto;\n        // padding-right: 0;\n    }\n    &>*{\n        padding: 0;\n    }\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contacts.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contacts.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.contacts {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.contacts .body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
}
.contacts .body > * {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
}`, "",{"version":3,"sources":["webpack://./src/sass/contacts.scss"],"names":[],"mappings":"AAEA;EACI,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;AADJ;AAII;EACI,aAAA;EAEA,mBAAA;EACA,6BAAA;EACA,SAAA;AAHR;AAMQ;EACI,aAAA;EACA,8BAAA;EACA,SAAA;EACA,qBAAA;AAJZ","sourcesContent":["@import 'sizes';\n\n.contacts{\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n    // margin-inline: -100rem;\n\n    .body{\n        display: flex;\n        // flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n        gap: 2rem;\n\n\n        &>*{\n            display: flex;\n            justify-content: space-between;\n            gap: 1rem;\n            align-items: baseline;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
  margin: 3rem;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  align-self: center;
  padding-inline: 0rem;
  width: 80%;
  gap: 5rem;
}

.p {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: lighter;
}

@media (max-width: 768px) {
  .main-body {
    display: flex;
    flex-direction: column;
  }
}
.img {
  border-radius: 2.5rem;
}`, "",{"version":3,"sources":["webpack://./src/sass/mainBody.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACI,YAAA;EACA,aAAA;EACA,kCAAA;EACA,qCAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,UCLO;EDMP,SAAA;AADJ;;AAGA;EACI,4DCNQ;EDOR,iBAAA;EACA,oBAAA;AAAJ;;AAGA;EACI;IACI,aAAA;IACA,sBAAA;EAAN;AACF;AAGA;EACI,qBAAA;AADJ","sourcesContent":["@import 'sizes';\n\n.main-body{\n    margin: 3rem;\n    display: grid;\n    grid-template-rows: repeat(4, 1fr);\n    grid-template-columns: repeat(2, 1fr);\n    align-items: center;\n    align-self: center;\n    padding-inline: 0rem;\n    width: $body-size;\n    gap: 5rem;\n}\n.p{\n    font-family: $trial-font;\n    font-size: 1.5rem;\n    font-weight: lighter;\n\n}\n@media (max-width: $breakpoint) {\n    .main-body{\n        display: flex;\n        flex-direction: column;\n    }\n    \n}\n.img{\n    border-radius: 2.5rem;\n    // align-self: right;\n    // justify-self: right;\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/menu.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/menu.scss ***!
  \*********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.menuBody {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-self: center;
  gap: 1vw;
  padding: 1rem;
}

.menu-part {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.menu-item {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  transition: all 1s;
  padding: 0.5rem;
}

.menu-item:hover {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.menu-p {
  font-size: smaller;
  font-weight: lighter;
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
}

.menu-price {
  justify-self: left;
}

.menu-title {
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin: 0;
  color: orangered;
  text-shadow: 0 13.36px 8.896px #c4b59d, 0 -2px 1px #fff;
}

.menu-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu-second {
  align-self: end;
  width: 100%;
}

.menu-second {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  border-bottom: 3px dotted orangered;
}

.menu-name {
  font-family: "hangyaku", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin: 0;
  flex: 0 0 auto;
  padding-right: 5px;
}`, "",{"version":3,"sources":["webpack://./src/sass/menu.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,kBAAA;EACA,QAAA;EACA,aAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AADF;;AAIA;EACE,YAAA;EACA,+EAAA;AADF;;AAMA;EACE,kBAAA;EACA,oBAAA;EACA,4DC3BU;ADwBZ;;AAKA;EACE,kBAAA;AAFF;;AAKA;EACE,4DCnCU;EDoCV,eAAA;EACA,SAAA;EACA,gBAAA;EACA,uDAAA;AAFF;;AAKA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;AAFF;;AAIA;EACE,eAAA;EACA,WAAA;AADF;;AAGA;EACE,WAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,mCAAA;AAAF;;AAGA;EACE,+DC1Da;ED2Db,iBAAA;EACA,SAAA;EACA,cAAA;EACA,kBAAA;AAAF","sourcesContent":["@import \"sizes\";\n\n.menuBody {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-content: center;\n  align-self: center;\n  gap: 1vw;\n  padding: 1rem;\n}\n\n.menu-part {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2rem;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5rem 0;\n  transition: all 1s;\n  padding: 0.5rem;\n\n}\n.menu-item:hover {\n  border: none;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,\n    rgba(0, 0, 0, 0.22) 0px 15px 12px;\n  // scale: 1.05;\n}\n\n.menu-p {\n  font-size: smaller;\n  font-weight: lighter;\n  font-family: $trial-font;\n}\n.menu-price {\n  justify-self: left;\n}\n\n.menu-title {\n  font-family: $bento-font;\n  font-size: 2rem;\n  margin: 0;\n  color: orangered;\n  text-shadow: 0 13.36px 8.896px #c4b59d,0 -2px 1px #fff;\n}\n\n.menu-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.menu-second {\n  align-self: end;\n  width: 100%;\n}\n.menu-second {\n  content: \"\";\n  display: block;\n  height: 3px;\n  width: 100%;\n  border-bottom: 3px dotted orangered;\n}\n\n.menu-name {\n  font-family: $hangyaku-font;\n  font-size: 1.5rem;\n  margin: 0;\n  flex: 0 0 auto;\n  padding-right:  5px;\n}\n","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navBar.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navBar.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `nav {
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  align-self: center;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-content: center;
  font-size: larger;
  background-color: rgba(255, 69, 0, 0.5);
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
  cursor: pointer;
}
nav .Nav-brand {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: bolder;
}
nav .Nav-brand:hover {
  cursor: pointer;
}

.nav-item {
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .nav-item {
    font-size: initial;
  }
}`, "",{"version":3,"sources":["webpack://./src/sass/navBar.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EAGI,4DCEQ;EDDR,kBAAA;EACA,UCFO;EDGP,aAAA;EACA,qCAAA;EACA,qBAAA;EACA,iBAAA;EAEA,uCAAA;EACA,oBAAA;EACA,mBAAA;EAEA,qDAAA;AALJ;AAOI;EACI,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;AALR;AAQI;EACI,gBAAA;EACA,kBAAA;AANR;AASI;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,OAAA;EACA,SAAA;EACA,2BAAA;EACA,YArCQ;EAsCR,UAAA;EACA,wCAAA;AAPR;AAeI;EACI,UAAA;AAbR;AAoBI;;EAEI,UAAA;EAEA,eAAA;AAnBR;AAsBI;EACI,oBAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;AApBR;AAsBI;EACI,eAAA;AApBR;;AAwBA;EACI,4DCzEQ;ED0ER,iBAAA;EACA,iBAAA;AArBJ;;AAwBA;EACI;IACI,kBAAA;EArBN;AACF","sourcesContent":["@import \"_sizes\";\n\nnav {\n    $width: 0;\n    $translate: 0;\n    font-family: $bento-font;\n    align-self: center;\n    width: $body-size;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    place-content: center;\n    font-size: larger;\n    // background-color: rgba(255, 232, 232, 1);\n    background-color: rgba(255,69,0, .5);\n    padding-inline: 1rem;\n    border-radius: 10px;\n\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n\n    ul {\n        list-style: none;\n        grid-column-start: 3;\n        grid-column-end: 5;\n        display: flex;\n        justify-content: space-around;\n        text-align: center;\n    }\n\n    li {\n        font-weight: 500;\n        position: relative;\n    }\n\n    li::after {\n        content: \"\";\n        position: absolute;\n        height: 3px;\n        width: 100%;\n        left: 0;\n        bottom: 0;\n        background-color: orangered;\n        translate: $translate;\n        scale: $width 1;\n        transition: scale 300ms, translate 500ms;\n    }\n\n    li:has(+ :hover) {\n        //    color: red;\n        $translate: 100%;\n    }\n\n    li:hover::after {\n        scale: 1 1;\n    }\n\n    li:hover+li {\n        $translate: -100%;\n    }\n\n    li:hover,\n    li:focus-visible {\n        opacity: 1;\n        $width: 1;\n        cursor: pointer;\n    }\n\n    .Nav-brand {\n        grid-column-start: 1;\n        grid-column-end: 3;\n        display: flex;\n        align-items: center;\n        font-size: 3rem;\n        font-weight: bolder;\n    }\n    .Nav-brand:hover{\n        cursor: pointer;\n    }\n}\n\n.nav-item {\n    font-family: $bento-font;\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n@media (max-width: $breakpoint) {\n    .nav-item{\n        font-size: initial;\n    }\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/reservation.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/reservation.scss ***!
  \****************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.res {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.res .reservation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 50%;
  aspect-ratio: 1/1.2;
  border: none;
  border-radius: 2rem;
  padding-inline: 3rem;
  padding-bottom: 2rem;
  box-shadow: orangered 0px 3px 8px;
}
.res .form-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.res .form-body > * {
  margin: 1rem 0;
  border-radius: 0.5rem;
  height: 2rem;
  font-size: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: none;
  outline: none;
  padding-left: 1rem;
}
.res .legend {
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 3rem;
  color: orangered;
  font-weight: lighter;
}
.res .request {
  height: 150px;
  padding-top: 1rem;
}
.res .button {
  width: max-content;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-family: "bento", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  align-self: center;
  margin-top: 2rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  color: orangered;
  background-color: rgb(255, 232, 232);
  transition: all 1s;
}
.res .button:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
.res ::placeholder {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
.res .selector {
  font-family: "hangyaku", "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  padding-inline: 1rem;
}
.res .options {
  font-family: "trial", "Roboto", Arial, Helvetica, sans-serif;
}`, "",{"version":3,"sources":["webpack://./src/sass/reservation.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACI,aAAA;EAEA,aAAA;EACA,sBAAA;AAFJ;AAGI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EAEA,kBAAA;EACA,UAAA;EACA,mBAAA;EAEA,YAAA;EACA,mBAAA;EACA,oBAAA;EAEA,oBAAA;EACA,iCAAA;AAJR;AAMI;EACI,aAAA;EACA,sBAAA;EACA,6BAAA;AAJR;AAMQ;EACI,cAAA;EAEA,qBAAA;EACA,YAAA;EACA,eAAA;EACA,iDAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AALZ;AASI;EACI,4DCnCI;EDoCJ,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AAPR;AASI;EACI,aAAA;EACA,iBAAA;AAPR;AASI;EACI,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,4DCjDI;EDkDJ,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,4EAAA;EACA,gBAAA;EACA,oCAAA;EAEA,kBAAA;AARR;AAUI;EACI,eAAA;EACA,gFAAA;AARR;AAUI;EACI,4DChEI;EDiEJ,iBAAA;AARR;AAUI;EACI,+DCnEO;EDoEP,iBAAA;EACA,oBAAA;AARR;AAUI;EACI,4DCzEI;ADiEZ","sourcesContent":["@import 'sizes';\n\n.res{\n    padding: 1rem;\n    // height: 90vh;\n    display: flex;\n    flex-direction: column;\n    .reservation{\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        // align-items: center;\n        align-self: center;\n        width: 50%;\n        aspect-ratio: 1/1.2;\n        // border-color: silver;\n        border: none;\n        border-radius: 2rem;\n        padding-inline: 3rem;\n        // max-width: 25rem;\n        padding-bottom: 2rem;\n        box-shadow: orangered 0px 3px 8px;\n    }\n    .form-body{\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        // align-items: center;\n        &>*{\n            margin: 1rem 0;\n            // max-width: 20rem;\n            border-radius: .5rem;\n            height: 2rem;\n            font-size: 1rem;\n            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n            border: none;\n            outline: none;\n            padding-left: 1rem;\n        }\n    }\n\n    .legend{\n        font-family: $bento-font;\n        text-align: center;\n        font-size: 3rem;\n        color: orangered;\n        font-weight: lighter;\n    }\n    .request{\n        height: 150px;\n        padding-top: 1rem;\n    }\n    .button{\n        width: max-content;\n        padding: .5rem 2rem;\n        border-radius: 1rem;\n        font-family: $bento-font;\n        font-size: 1.3rem;\n        align-self: center;\n        margin-top: 2rem;\n        border: none;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n        color: orangered;\n        background-color: rgba(255, 232, 232, 1);\n\n        transition: all 1s;\n    }\n    .button:hover{\n        cursor: pointer;\n        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    }\n    ::placeholder{\n        font-family: $trial-font;\n        font-size: 1.2rem;\n    }\n    .selector{\n        font-family: $hangyaku-font;\n        font-size: 1.5rem;\n        padding-inline: 1rem;\n    }\n    .options{\n        font-family: $trial-font;\n    }\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
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
  width: 100%;
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
  margin-right: calc(11vw - 0px);
}

@media (max-width: 768px) {
  .right {
    margin-right: calc(13vw - 9px);
  }
}
/* On hover, add a black background color with a little bit see-through */
.left:hover,
.right:hover {
  background-color: rgba(0, 0, 0, 0.8);
}`, "",{"version":3,"sources":["webpack://./src/sass/scroll.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAEA;EACE,aCFO;EDGP,YCDS;EDET,uBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,iBAAA;EACA,+BAAA;EACC,+DAAA;AADH;;AAKA;EAEE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EAEA,+EAAA;AAJF;;AAOA;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;AAJF;;AAOA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,eAAA;AAJF;;AAOA;EACE,WAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAJF;;AAOA;EACE,yBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,cAAA;EACA,kBAAA;AAJF;;AAOA;EACE,yBAAA;EACA,cAAA;AAJF;;AAOA;EACE,eAAA;EACA,kBAAA;EACA,QAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,0BAAA;EACA,iBAAA;EACA,kCAAA;EACA,YAAA;EACA,aAAA;AAJF;;AAOA;EACE,QAAA;EACA,0BAAA;EACA,8BAAA;AAJF;;AAOA;EACE;IACE,8BAAA;EAJF;AACF;AAOA,yEAAA;AACA;;EAEE,oCAAA;AALF","sourcesContent":["@import 'sizes';\n\n.content {\n  height: $height;\n  width: $img-width;\n  filter: brightness(90%);\n}\n\n.image-slider{\n  display: flex;\n  flex-direction: column;\n  padding-top: 1rem;\n}\n\n#wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate3d(0, 0, 0);\n   transition: transform .9s cubic-bezier(.57,.21,.69,1.25);\n  \n}\n\n.window {\n\n  align-self: center;\n  width: 100%;\n  overflow: hidden;\n  height: ($height);\n  display: flex;\n  border-radius: 1rem;\n\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\n}\n\n.navLinks {\n  text-align: center;\n  width: ($width);\n  align-self: center;\n}\n\n.navLinks ul {\n  margin: 0px;\n  padding: 0px;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.links {\n  float: left;\n  text-align: center;\n  margin: 10px;\n  list-style: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50px;\n  border: black 1px solid;\n}\n\n.links:hover {\n  background-color: #ffff00;\n}\n\n.links.active {\n  background-color: #333333;\n  color: #ffffff;\n  outline-width: 7px;\n}\n\n.links.active:hover {\n  background-color: #484848;\n  color: #ffffff;\n}\n\n.btn {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  font-size: 1.2rem;\n  width: auto;\n  margin-top: -110px;\n  padding: 3rem 16px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  outline: none;\n}\n\n.right {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n  margin-right: calc(11vw - 0px);\n\n}\n@media (max-width: $breakpoint){\n  .right{\n    margin-right: calc(13vw - 9px);\n  }\n}\n\n/* On hover, add a black background color with a little bit see-through */\n.left:hover,\n.right:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/hangyaku-font/Hangyaku-ywzMm.ttf */ "./src/fonts/hangyaku-font/Hangyaku-ywzMm.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/japan-bento-version-font/JapanBentoDemoVersionRegular-nRWAJ.otf */ "./src/fonts/japan-bento-version-font/JapanBentoDemoVersionRegular-nRWAJ.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/qasengi-trial-font/QasengiTrialRegular-GO91O.ttf */ "./src/fonts/qasengi-trial-font/QasengiTrialRegular-GO91O.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "hangyaku";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "bento";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "trial";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
  font-weight: 400;
  font-style: normal;
}
body {
  box-sizing: border-box;
  margin: 0;
  padding-inline: 20px;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  padding-bottom: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.not-visible {
  opacity: 0;
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss","webpack://./src/sass/_sizes.scss"],"names":[],"mappings":"AAMA;EACI,uBAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AAJJ;AAOA;EACI,oBAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AALJ;AAQA;EACI,oBAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AANJ;AASA;EACI,sBAAA;EACA,SAAA;EACA,oBC9BW;ED+BX,aAAA;EACA,sBAAA;EACA,iCAAA;AAPJ;;AAUA;EACI,aAAA;EACA,sBAAA;EACA,UClCO;EDmCP,kBAAA;EACA,gBAAA;EAGA,iDAAA;EACA,oBAAA;EACA,mBAAA;EACA,mBAAA;AATJ;;AAYA;EACI,UAAA;EACA,aAAA;AATJ","sourcesContent":["// @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\");\n@import 'sizes';\n\n@font-face {\n    font-family: 'hangyaku';\n    src: url('../fonts/hangyaku-font/Hangyaku-ywzMm.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'bento';\n    src: url('../fonts/japan-bento-version-font/JapanBentoDemoVersionRegular-nRWAJ.otf') format('opentype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'trial';\n    src: url('../fonts/qasengi-trial-font/QasengiTrialRegular-GO91O.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    box-sizing: border-box;\n    margin: 0;\n    padding-inline: $body-padding;\n    display: flex;\n    flex-direction: column;\n    font-family: \"Roboto\", sans-serif;\n}\n\n.main{\n    display: flex;\n    flex-direction: column;\n    width: $body-size;\n    align-self: center;\n    margin-top: 1rem;\n    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    // box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;\n    padding-bottom: 2rem;\n    border-radius: 1rem;\n    margin-bottom: 2rem;\n\n}\n.not-visible{\n    opacity: 0;\n    display: none;\n}\n","$body-padding: 20px;\n$height: 30rem;\n$width: 80%;\n$img-width:100vw;\n$breakpoint: 768px;\n$body-size:80%;\n\n$bento-font:'bento', 'Roboto', Arial, Helvetica, sans-serif ;\n$trial-font:'trial', 'Roboto', Arial, Helvetica, sans-serif;\n$hangyaku-font:'hangyaku', 'Roboto', Arial, Helvetica, sans-serif;"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/sass/about.scss":
/*!*****************************!*\
  !*** ./src/sass/about.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./about.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/contacts.scss":
/*!********************************!*\
  !*** ./src/sass/contacts.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contacts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contacts.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contacts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/sass/menu.scss":
/*!****************************!*\
  !*** ./src/sass/menu.scss ***!
  \****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/navBar.scss":
/*!******************************!*\
  !*** ./src/sass/navBar.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./navBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navBar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navBar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/reservation.scss":
/*!***********************************!*\
  !*** ./src/sass/reservation.scss ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reservation_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reservation.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/reservation.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reservation_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reservation_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reservation_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reservation_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts */ "./src/components/contacts.js");
/* harmony import */ var _img_icons_location_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/location.gif */ "./src/img/icons/location.gif");
/* harmony import */ var _img_chef_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/chef.jpg */ "./src/img/chef.jpg");
/* harmony import */ var _sass_about_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/about.scss */ "./src/sass/about.scss");






function AboutUs() {
    const body=(0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('section',{
        class:"wrapper-section"
    })
    const wrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class: "about-wrapper",
    });
    body.appendChild(wrapper)
    /*
      1. Location
      2. History
      3. sourcing produce
      4. About Chef and manager
      */
    const title = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('h1', {
        class: 'about-title'
    })
    title.innerText = 'About Us'
    wrapper.appendChild(title)


    const history = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class: "history",
    });

    const Map = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class: "map",
    });

    Map.innerHTML = `<iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869157777!2d36.68224195072277!3d-1.302860269689594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1695901309780!5m2!1sen!2ske" 
                      width="600"
                      height="450"
                      style="border:0;"
                      allowfullscreen=""
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    const HistoryText = `<h3>Anime Food: A Journey Through Anime-Inspired Dining</h3>

  <p>In the bustling streets of Nairobi, Kenya, in the early 2010s, a unique dining experience emerged - the Manga Café. This restaurant, steeped in the colorful and imaginative world of anime, became a cultural phenomenon.</p>
  
  <p>The concept was born from the passion of a group of anime enthusiasts who wanted to create a space where fans could immerse themselves in their favorite shows and share their excitement with fellow otaku. The first Manga Café opened its doors in Akihabara, Tokyo's Electric Town, known as the epicenter of anime and manga culture.</p>
  
  <p>The restaurant's interior was a vibrant blend of iconic anime posters, life-sized figurines, and themed decor, transporting diners into the worlds of their beloved series. Each dining area represented a different anime, creating a diverse experience for patrons.</p>
  
  <p>The menu was a fusion of Japanese and international cuisine inspired by popular anime dishes. Signature dishes included "Naruto Ramen," "One Piece Bento," and "Dorehidero Gyoza"</p>`

    const location = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('div', {
        class: 'location'
    })
    const icon = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('img', {
        class: 'location-icon',
        src: _img_icons_location_gif__WEBPACK_IMPORTED_MODULE_2__,
        alt: 'location icon'
    })
    const localInfo = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('p', {
        class: "location-p",
    })
    localInfo.innerHTML = `<h3>Location</h3>
    Waiyaki Way, Church Rd, P.O. Box: 67631 - 00200<br> Nairobi Nairobi Kenya`


    // <h2>About Chef</h2>
    const aboutChefText = `
    <h3>Hiroshi Tanaka</h3>
    
    
    <p>Hiroshi Tanaka, born in Tokyo in 1975, grew up immersed in the world of anime and manga. From a young age, he was captivated by the imaginative stories and vibrant characters that these mediums offered. His parents owned a small Japanese restaurant, where Hiroshi often helped out in the kitchen.</p>
    
    <p>After completing his education in culinary arts at a prestigious Tokyo culinary school, Hiroshi honed his skills in various renowned restaurants throughout Japan. He became a skilled chef with a flair for fusion cuisine, drawing inspiration from both traditional Japanese dishes and global culinary trends.</p>
    
    <p>In his early 30s, Hiroshi decided to combine his two passions: anime and food. The idea for the Manga Café was born out of his desire to create a space where anime fans could gather, dine on delicious food, and celebrate their shared love for the art form. His extensive culinary expertise allowed him to craft a menu that featured dishes inspired by the most iconic anime series.</p>
    
    <p>Hiroshi was not just a chef but also a visionary entrepreneur. He invested his savings and secured financial support from investors who believed in his unique concept. He meticulously designed the restaurant's interior, ensuring that every detail would immerse customers in the world of anime.</p>
    
    <p>Hiroshi actively engaged with the anime community, attending conventions, hosting fan gatherings, and collaborating with local artists to showcase their work within his restaurant. He believed in the power of building a strong, inclusive community around his establishment.</p>
    
    <p>Under Hiroshi's leadership, the Manga Café became an iconic destination in Tokyo and beyond, drawing visitors from around the world. His dedication to both the culinary arts and anime culture helped shape the restaurant into a thriving hub for fans and food enthusiasts alike.</p>
    
    <p>As of my last knowledge update in September 2021, Hiroshi Tanaka continues to manage and expand his anime-themed restaurant empire, ensuring that the spirit of anime and delicious cuisine remains a vibrant part of Japan's cultural landscape.<p>`


    const AboutChef = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('div', {
        class: 'about-chef'
    })
    const aboutP = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('p', {
        class: 'aboutChef-p'
    })
    const imgChef = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('img', {
        class: "chef-image",
        src: _img_chef_jpg__WEBPACK_IMPORTED_MODULE_3__,
        alt: 'chef pic'
    })
    const titlechef = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('h2')
    titlechef.innerText = 'About Chef'

    aboutP.innerHTML = aboutChefText

    AboutChef.appendChild(titlechef)
    AboutChef.appendChild(imgChef)
    AboutChef.appendChild(aboutP)

    location.appendChild(icon)
    location.appendChild(localInfo)
    history.innerHTML = HistoryText;
    wrapper.appendChild(history)
    wrapper.appendChild(AboutChef)

    wrapper.appendChild(location)
    wrapper.appendChild(Map);
    wrapper.appendChild((0,_contacts__WEBPACK_IMPORTED_MODULE_1__["default"])())

    return body;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);


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

/***/ "./src/components/contacts.js":
/*!************************************!*\
  !*** ./src/components/contacts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sass_contacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/contacts.scss */ "./src/sass/contacts.scss");
/* harmony import */ var _img_icons_phone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/icons/phone.png */ "./src/img/icons/phone.png");
/* harmony import */ var _img_icons_address_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/icons/address.png */ "./src/img/icons/address.png");
/* harmony import */ var _img_icons_email_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/icons/email.png */ "./src/img/icons/email.png");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./src/util.js");







function createContact(){
const wrapper = (0,_util__WEBPACK_IMPORTED_MODULE_4__.createSetElement)("div",{
    class:"contacts"
})
const contactInfo=(0,_util__WEBPACK_IMPORTED_MODULE_4__.createSetElement)("div",{
    class:"body"
})
const phone=(0,_util__WEBPACK_IMPORTED_MODULE_4__.createFullElement)('p',{
    class:"phone info"
}, `<span><img src=${_img_icons_phone_png__WEBPACK_IMPORTED_MODULE_1__} alt="phone number"/></span> +2547123456789`)
const address=(0,_util__WEBPACK_IMPORTED_MODULE_4__.createFullElement)('p',{
    class:"address"
},`
    <span><img src=${_img_icons_address_png__WEBPACK_IMPORTED_MODULE_2__} alt=""address/></span> Waiyaki Way, Church Rd, P.O. Box: 67631 - 00200<br> Nairobi Nairobi Kenya
`)
const email=(0,_util__WEBPACK_IMPORTED_MODULE_4__.createFullElement)('p',{
    class: "email"
},`<span><img src=${_img_icons_email_png__WEBPACK_IMPORTED_MODULE_3__} alt="email"/></span>animefood@gmail.com`)

contactInfo.appendChild(phone)
contactInfo.appendChild(email)
contactInfo.appendChild(address)
wrapper.appendChild(contactInfo)
return wrapper
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems */ "./src/components/menuItems.js");
/* harmony import */ var _sass_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/menu.scss */ "./src/sass/menu.scss");




function createMenu() {
  const wrapper=(0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('section', {class: "wrapper-section"})
  const body = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "menuBody" });
  wrapper.appendChild(body)

  _menuItems__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((value, index) => {
    const menuPart = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
      class: "menu-part",
    });

    const title = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("h3", {
      class: "menu-title",
      id: `menu-title-${index}`,
    });

    title.innerText = value.title;
    menuPart.appendChild(title);

    value.items.forEach((item, itemIndex) => {
      const itemWrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class: "menu-item",
        id: `menu-item-${itemIndex}`,
      });
      const top = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "menu-top" });
      const mid = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "menu-second" });
      const bottom = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", { class: "menu-bottom" });

      const menuName = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("h5", { class: "menu-name" });
      const price = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("small", { class: "menu-price" });
      const description = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("p", { class: "menu-p" });

      menuName.innerText = item.name;
      price.innerText = '$40'; // item.price
      description.innerText = item.description;

      top.appendChild(menuName);
      bottom.appendChild(description);
      top.appendChild(mid)
      top.appendChild(price);
      itemWrapper.appendChild(top);
      // itemWrapper.appendChild(second);
      itemWrapper.appendChild(bottom);

      menuPart.appendChild(itemWrapper);
    });
    body.appendChild(menuPart);
  });

  return wrapper;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/components/menuItems.js":
/*!*************************************!*\
  !*** ./src/components/menuItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuItem = [
    {
        title: "Main Course",
        items: [
            {
                name: "Yaki Udon",
                price: "",
                description: "Stir-fry dish with udon noodles and lots of vegetables in a soy-based sauce. Served with meat or tofu.",

            },
            {
                name: "Chicken Curry",
                price: "",
                description: "Tender pieces of chicken, carrots, and potatoes cooked in a rich savory curry sauce",

            },
            {
                name: "Steak Garlic Rice",
                price: "",
                description: "Tender cubes of seared beef are tossed in a smoky steak sauce and nestled on a bed of buttery garlic rice that‘s crisped until golden in the pan",

            },
            {
                name: "Teriyaki Salmon",
                price: "",
                description: "Salmon fillets are pan-grilled to tender perfection in the traditional method and finished with an authentic homemade teriyaki sauce.",

            },
            {
                name: "Spicy Shoyu Ramen",
                price: "",
                description: "Ramen toothsome noodles in a savory soy sauce broth. Topped with seasoned soft-boiled egg and melt-in-your mouth chashu pork belly,",

            },
            {
                name: "Tomato curry",
                price: "",
                description: "Simmering tender pieces of beef and pork along with tomatoes, carrots, and caramelized onions in a rich, savory sauce.",
                
            },
            
        ]
    },
    {
        title: "Soups & Salads",
        items: [
            {
                name: "Miso Soup",
                price: "",
                description: "simple, tasty base of miso paste, dashi, and veggies.",

            },
            {
                name: "Sukiyaki",
                price: "",
                description: "Beef, mushrooms, tofu, cabbage, and other veggies.",

            },
            {
                name: "Shio Ramen",
                price: "",
                description: "Ramen noodles, miso egg, fish cake, braised pork, bamboo shoots, and scallions.",

            },
            {
                name: "Mushroom Salad",
                price: "",
                description: "soaked mushrooms in a tangy blend of rice vinegar, mirin, tamari, and sugar.",

            },
            {
                name: "Kani Salad",
                price: "",
                description: "shredded crab and cucumber, tossed in a creamy, spicy mayo, and topped with toasted breadcrumbs.",

            },

        ]
    },
    {
        title: "Desserts",
        items: [
            {
                name: "Red Bean Cake",
                price: "",
                description: "Honey pancakes are filled with sweet red bean paste.",

            },
            {
                name: "Warabi Mochi",
                price: "",
                description: "Chilled, deliciously chewy, jelly-like mochi covered with sweet and nutty soybean powder and drizzled with kuromitsu syrup.",

            },
            {
                name: "Purin",
                price: "",
                description: "A custard dessert with a layer of soft caramel on top, the pudding is silky, creamy, and rich.",

            },
        ]
    },
    {
        title: "Drinks",
        items: [
            {
                name: "Tapioca",
                price: "",
                description: "Sweetened tea with tapioca balls on the bottom of the drink and a dash of milk. Topped with whipped cream, caramel, chocolate, or cream cheese.",

            },
            {
                name: "Bubble Tea",
                price: "",
                description: "Milk tea with black, oolong, or jasmine tea leaves, with added tapioca balls sweetened with sugar.",
            },
            {
                name: "Mugicha",
                price: "",
                description: "Roasted barley tea",
            },

        ]
    },
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItem);

/***/ }),

/***/ "./src/components/navItems.js":
/*!************************************!*\
  !*** ./src/components/navItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_HomeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView */ "./src/views/HomeView.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _views_ContactView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/ContactView */ "./src/views/ContactView.js");
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation */ "./src/components/reservation.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ "./src/components/About.js");


// import createContact from "./contacts"




const listItems = [
    {
        title: "Anime Food",
        el: (0,_views_HomeView__WEBPACK_IMPORTED_MODULE_0__["default"])()
    },
    {
        title: 'Menu',
        el: (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
    },
    {
        title: 'Reservation',
        el: (0,_reservation__WEBPACK_IMPORTED_MODULE_3__["default"])()
    },
    {
        title: 'About',
        el: (0,_About__WEBPACK_IMPORTED_MODULE_4__["default"])()
    },
    {
        title: 'Contacts',
        el: (0,_views_ContactView__WEBPACK_IMPORTED_MODULE_2__["default"])()
    },
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItems);

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
/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navItems */ "./src/components/navItems.js");
/* harmony import */ var _sass_navBar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/navBar.scss */ "./src/sass/navBar.scss");




function navBar() {
    const navBar = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('nav');
    const ul = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul')
    const navBrand = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createElement)('div')


    _navItems__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((value, index) => {
        if (index === 0) {
            navBrand.classList.add('Nav-brand')
            navBrand.addEventListener('click', () => {
                addClass()
                value.el.classList.remove('not-visible')
            })
            navBrand.innerHTML = "Anime Food"
        }
        else {
            const item = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createFullElement)('li', { class: "nav-item" }, value.title)
            item.addEventListener('click', () => {
                /* eslint-disable */console.log(...oo_oo(`2828021226_0`,`hello, World ${index}`));
                addClass()
                value.el.classList.remove('not-visible')
            })
            ul.appendChild(item)
        }
    })
    navBar.appendChild(navBrand)
    navBar.appendChild(ul)
    navBar.classList.add('nav-bar')
    return navBar
}

function addClass() {
    _navItems__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((value) => {
        value.el.classList.add('not-visible')
    })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4d24(_0x1eeef1,_0xf15947){var _0x3fefdd=_0x3fef();return _0x4d24=function(_0x4d24c9,_0x546d5e){_0x4d24c9=_0x4d24c9-0x1b4;var _0x2aca2d=_0x3fefdd[_0x4d24c9];return _0x2aca2d;},_0x4d24(_0x1eeef1,_0xf15947);}var _0x438282=_0x4d24;(function(_0x2b5b27,_0x5684ed){var _0x19a2cf=_0x4d24,_0x423c08=_0x2b5b27();while(!![]){try{var _0x8e13=parseInt(_0x19a2cf(0x1fc))/0x1+parseInt(_0x19a2cf(0x261))/0x2*(-parseInt(_0x19a2cf(0x21c))/0x3)+parseInt(_0x19a2cf(0x211))/0x4*(-parseInt(_0x19a2cf(0x290))/0x5)+-parseInt(_0x19a2cf(0x1d3))/0x6*(-parseInt(_0x19a2cf(0x269))/0x7)+-parseInt(_0x19a2cf(0x263))/0x8+-parseInt(_0x19a2cf(0x26e))/0x9*(parseInt(_0x19a2cf(0x24e))/0xa)+-parseInt(_0x19a2cf(0x24f))/0xb*(-parseInt(_0x19a2cf(0x234))/0xc);if(_0x8e13===_0x5684ed)break;else _0x423c08['push'](_0x423c08['shift']());}catch(_0x4b083b){_0x423c08['push'](_0x423c08['shift']());}}}(_0x3fef,0xea743));var j=Object[_0x438282(0x219)],X=Object[_0x438282(0x1cb)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x438282(0x1ce)],te=Object[_0x438282(0x276)],ne=Object['prototype'][_0x438282(0x1fe)],re=(_0x23e827,_0x52ec00,_0xb165d2,_0x16b002)=>{var _0xe0898e=_0x438282;if(_0x52ec00&&typeof _0x52ec00==_0xe0898e(0x213)||typeof _0x52ec00==_0xe0898e(0x253)){for(let _0x22bec2 of ee(_0x52ec00))!ne['call'](_0x23e827,_0x22bec2)&&_0x22bec2!==_0xb165d2&&X(_0x23e827,_0x22bec2,{'get':()=>_0x52ec00[_0x22bec2],'enumerable':!(_0x16b002=G(_0x52ec00,_0x22bec2))||_0x16b002[_0xe0898e(0x203)]});}return _0x23e827;},K=(_0x2797ee,_0x57ae12,_0x322b74)=>(_0x322b74=_0x2797ee!=null?j(te(_0x2797ee)):{},re(_0x57ae12||!_0x2797ee||!_0x2797ee[_0x438282(0x278)]?X(_0x322b74,'default',{'value':_0x2797ee,'enumerable':!0x0}):_0x322b74,_0x2797ee)),q=class{constructor(_0x3109a7,_0x34b71a,_0x50a674,_0x52c9e6,_0x54e2c9){var _0x37d0ed=_0x438282;this['global']=_0x3109a7,this[_0x37d0ed(0x1e3)]=_0x34b71a,this[_0x37d0ed(0x226)]=_0x50a674,this['nodeModules']=_0x52c9e6,this['dockerizedApp']=_0x54e2c9,this[_0x37d0ed(0x1c9)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x37d0ed(0x20a)]=!0x1,this[_0x37d0ed(0x217)]=!0x1,this[_0x37d0ed(0x1e2)]=!this[_0x37d0ed(0x1d5)][_0x37d0ed(0x26d)]?.['versions']?.[_0x37d0ed(0x1e8)],this[_0x37d0ed(0x274)]=null,this[_0x37d0ed(0x1dd)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x37d0ed(0x1e4)]='https://tinyurl.com/37x8b79t',this[_0x37d0ed(0x1c6)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x37d0ed(0x1d6))+this[_0x37d0ed(0x1e4)];}async['getWebSocketClass'](){var _0x1b39e7=_0x438282;if(this[_0x1b39e7(0x274)])return this['_WebSocketClass'];let _0x253aee;if(this['_inBrowser'])_0x253aee=this['global'][_0x1b39e7(0x1ec)];else{if(this[_0x1b39e7(0x1d5)]['process']?.[_0x1b39e7(0x262)])_0x253aee=this[_0x1b39e7(0x1d5)][_0x1b39e7(0x26d)]?.[_0x1b39e7(0x262)];else try{let _0x20c494=await import(_0x1b39e7(0x200));_0x253aee=(await import((await import(_0x1b39e7(0x282)))['pathToFileURL'](_0x20c494[_0x1b39e7(0x22e)](this[_0x1b39e7(0x1f6)],'ws/index.js'))[_0x1b39e7(0x1ee)]()))[_0x1b39e7(0x254)];}catch{try{_0x253aee=require(require(_0x1b39e7(0x200))['join'](this[_0x1b39e7(0x1f6)],'ws'));}catch{throw new Error(_0x1b39e7(0x1c0));}}}return this[_0x1b39e7(0x274)]=_0x253aee,_0x253aee;}[_0x438282(0x236)](){var _0x1a3cd5=_0x438282;this[_0x1a3cd5(0x217)]||this['_connected']||this[_0x1a3cd5(0x1dd)]>=this['_maxConnectAttemptCount']||(this[_0x1a3cd5(0x25d)]=!0x1,this[_0x1a3cd5(0x217)]=!0x0,this[_0x1a3cd5(0x1dd)]++,this[_0x1a3cd5(0x1c5)]=new Promise((_0x330344,_0x325b83)=>{var _0x16ec33=_0x1a3cd5;this[_0x16ec33(0x255)]()[_0x16ec33(0x1b8)](_0x41728c=>{var _0x460362=_0x16ec33;let _0x5dff9f=new _0x41728c(_0x460362(0x25c)+(!this[_0x460362(0x1e2)]&&this['dockerizedApp']?_0x460362(0x24a):this[_0x460362(0x1e3)])+':'+this['port']);_0x5dff9f['onerror']=()=>{var _0x2e215b=_0x460362;this[_0x2e215b(0x1c9)]=!0x1,this['_disposeWebsocket'](_0x5dff9f),this['_attemptToReconnectShortly'](),_0x325b83(new Error(_0x2e215b(0x28d)));},_0x5dff9f[_0x460362(0x291)]=()=>{var _0x1fc15f=_0x460362;this['_inBrowser']||_0x5dff9f[_0x1fc15f(0x292)]&&_0x5dff9f['_socket'][_0x1fc15f(0x1f4)]&&_0x5dff9f[_0x1fc15f(0x292)][_0x1fc15f(0x1f4)](),_0x330344(_0x5dff9f);},_0x5dff9f[_0x460362(0x231)]=()=>{var _0x23998c=_0x460362;this[_0x23998c(0x25d)]=!0x0,this[_0x23998c(0x1f5)](_0x5dff9f),this[_0x23998c(0x1fa)]();},_0x5dff9f[_0x460362(0x294)]=_0x772e48=>{var _0x183ce5=_0x460362;try{_0x772e48&&_0x772e48[_0x183ce5(0x214)]&&this[_0x183ce5(0x1e2)]&&JSON[_0x183ce5(0x283)](_0x772e48[_0x183ce5(0x214)])[_0x183ce5(0x1cc)]===_0x183ce5(0x257)&&this[_0x183ce5(0x1d5)][_0x183ce5(0x287)]['reload']();}catch{}};})[_0x16ec33(0x1b8)](_0x3dcc0a=>(this[_0x16ec33(0x20a)]=!0x0,this['_connecting']=!0x1,this[_0x16ec33(0x25d)]=!0x1,this[_0x16ec33(0x1c9)]=!0x0,this[_0x16ec33(0x1dd)]=0x0,_0x3dcc0a))[_0x16ec33(0x243)](_0x4af10c=>(this['_connected']=!0x1,this[_0x16ec33(0x217)]=!0x1,console[_0x16ec33(0x205)](_0x16ec33(0x246)+this[_0x16ec33(0x1e4)]),_0x325b83(new Error(_0x16ec33(0x28c)+(_0x4af10c&&_0x4af10c[_0x16ec33(0x1d0)])))));}));}[_0x438282(0x1f5)](_0x2ab108){var _0x55920e=_0x438282;this[_0x55920e(0x20a)]=!0x1,this[_0x55920e(0x217)]=!0x1;try{_0x2ab108[_0x55920e(0x231)]=null,_0x2ab108['onerror']=null,_0x2ab108['onopen']=null;}catch{}try{_0x2ab108[_0x55920e(0x28a)]<0x2&&_0x2ab108['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x2ec468=_0x438282;clearTimeout(this[_0x2ec468(0x1f1)]),!(this[_0x2ec468(0x1dd)]>=this[_0x2ec468(0x1d2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x123209=_0x2ec468;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x123209(0x1c5)]?.[_0x123209(0x243)](()=>this[_0x123209(0x1fa)]()));},0x1f4),this[_0x2ec468(0x1f1)][_0x2ec468(0x1f4)]&&this['_reconnectTimeout'][_0x2ec468(0x1f4)]());}async[_0x438282(0x272)](_0x25a3f8){var _0x4002f6=_0x438282;try{if(!this[_0x4002f6(0x1c9)])return;this['_allowedToConnectOnSend']&&this[_0x4002f6(0x236)](),(await this['_ws'])[_0x4002f6(0x272)](JSON[_0x4002f6(0x27b)](_0x25a3f8));}catch(_0x246bd9){console[_0x4002f6(0x205)](this[_0x4002f6(0x1c6)]+':\\x20'+(_0x246bd9&&_0x246bd9[_0x4002f6(0x1d0)])),this['_allowedToSend']=!0x1,this[_0x4002f6(0x1fa)]();}}};function J(_0x228194,_0x12b182,_0x5ce5fb,_0x2a75ff,_0x1a7bb2,_0x55ce8a){var _0x1d2a68=_0x438282;let _0x5573db=_0x5ce5fb[_0x1d2a68(0x232)](',')[_0x1d2a68(0x25b)](_0x276f12=>{var _0x25b36b=_0x1d2a68;try{_0x228194[_0x25b36b(0x247)]||((_0x1a7bb2===_0x25b36b(0x1b9)||_0x1a7bb2===_0x25b36b(0x1da)||_0x1a7bb2===_0x25b36b(0x1c1))&&(_0x1a7bb2+=_0x228194['process']?.[_0x25b36b(0x259)]?.[_0x25b36b(0x1e8)]?'\\x20server':'\\x20browser'),_0x228194['_console_ninja_session']={'id':+new Date(),'tool':_0x1a7bb2});let _0x1122dc=new q(_0x228194,_0x12b182,_0x276f12,_0x2a75ff,_0x55ce8a);return _0x1122dc['send'][_0x25b36b(0x288)](_0x1122dc);}catch(_0x233595){return console[_0x25b36b(0x205)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x233595&&_0x233595[_0x25b36b(0x1d0)]),()=>{};}});return _0x5ca097=>_0x5573db['forEach'](_0x32d1bc=>_0x32d1bc(_0x5ca097));}function W(_0x400c65){var _0x7cee1a=_0x438282;let _0x381510=function(_0x49f5f5,_0x4919cb){return _0x4919cb-_0x49f5f5;},_0x30ff51;if(_0x400c65['performance'])_0x30ff51=function(){var _0x5b6463=_0x4d24;return _0x400c65[_0x5b6463(0x289)][_0x5b6463(0x275)]();};else{if(_0x400c65[_0x7cee1a(0x26d)]&&_0x400c65['process'][_0x7cee1a(0x1bf)])_0x30ff51=function(){var _0x36e550=_0x7cee1a;return _0x400c65[_0x36e550(0x26d)][_0x36e550(0x1bf)]();},_0x381510=function(_0x2b8cac,_0x1dd5cd){return 0x3e8*(_0x1dd5cd[0x0]-_0x2b8cac[0x0])+(_0x1dd5cd[0x1]-_0x2b8cac[0x1])/0xf4240;};else try{let {performance:_0x5598aa}=require('perf_hooks');_0x30ff51=function(){var _0x679e47=_0x7cee1a;return _0x5598aa[_0x679e47(0x275)]();};}catch{_0x30ff51=function(){return+new Date();};}}return{'elapsed':_0x381510,'timeStamp':_0x30ff51,'now':()=>Date['now']()};}function Y(_0x451847,_0x4b953b,_0x452e74){var _0x3459f9=_0x438282;if(_0x451847[_0x3459f9(0x27c)]!==void 0x0)return _0x451847[_0x3459f9(0x27c)];let _0x14dc60=_0x451847['process']?.['versions']?.[_0x3459f9(0x1e8)];return _0x14dc60&&_0x452e74==='nuxt'?_0x451847[_0x3459f9(0x27c)]=!0x1:_0x451847[_0x3459f9(0x27c)]=_0x14dc60||!_0x4b953b||_0x451847[_0x3459f9(0x287)]?.['hostname']&&_0x4b953b[_0x3459f9(0x224)](_0x451847['location'][_0x3459f9(0x28f)]),_0x451847['_consoleNinjaAllowedToStart'];}function Q(_0x47d960,_0x3c7f88,_0x5601af,_0x4415ac){var _0x51aae4=_0x438282;_0x47d960=_0x47d960,_0x3c7f88=_0x3c7f88,_0x5601af=_0x5601af,_0x4415ac=_0x4415ac;let _0x48b950=W(_0x47d960),_0x5454c5=_0x48b950['elapsed'],_0x1c80ec=_0x48b950[_0x51aae4(0x210)];class _0xc692a3{constructor(){var _0x479153=_0x51aae4;this[_0x479153(0x251)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x479153(0x265)]=/^(0|[1-9][0-9]*)$/,this[_0x479153(0x242)]=/'([^\\\\']|\\\\')*'/,this[_0x479153(0x215)]=_0x47d960[_0x479153(0x1b5)],this[_0x479153(0x250)]=_0x47d960[_0x479153(0x1e6)],this[_0x479153(0x23e)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x479153(0x1ce)],this[_0x479153(0x20b)]=_0x47d960[_0x479153(0x1fb)],this['_regExpToString']=RegExp[_0x479153(0x1d9)][_0x479153(0x1ee)],this[_0x479153(0x1fd)]=Date[_0x479153(0x1d9)][_0x479153(0x1ee)];}[_0x51aae4(0x239)](_0x57471b,_0x4a9396,_0x2990f0,_0x34d09c){var _0x3995af=_0x51aae4,_0x507257=this,_0x3b58e6=_0x2990f0[_0x3995af(0x279)];function _0xa46520(_0x34ed3c,_0x5326c6,_0xbf1724){var _0x38b851=_0x3995af;_0x5326c6['type']=_0x38b851(0x25f),_0x5326c6[_0x38b851(0x22f)]=_0x34ed3c[_0x38b851(0x1d0)],_0x5f189c=_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)],_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)]=_0x5326c6,_0x507257[_0x38b851(0x229)](_0x5326c6,_0xbf1724);}try{_0x2990f0[_0x3995af(0x1d4)]++,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects']['push'](_0x4a9396);var _0x13de0c,_0x453b9a,_0x3e3e31,_0x3d9257,_0x322156=[],_0x3393c4=[],_0x439173,_0x348688=this[_0x3995af(0x1ed)](_0x4a9396),_0x16bdae=_0x348688==='array',_0x48bd6f=!0x1,_0x2bcc00=_0x348688===_0x3995af(0x253),_0x40ef76=this[_0x3995af(0x225)](_0x348688),_0x535a2a=this['_isPrimitiveWrapperType'](_0x348688),_0x30973f=_0x40ef76||_0x535a2a,_0x23e67b={},_0xfd53ae=0x0,_0x1043d2=!0x1,_0x5f189c,_0xf05db6=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2990f0[_0x3995af(0x222)]){if(_0x16bdae){if(_0x453b9a=_0x4a9396[_0x3995af(0x23f)],_0x453b9a>_0x2990f0[_0x3995af(0x1bb)]){for(_0x3e3e31=0x0,_0x3d9257=_0x2990f0[_0x3995af(0x1bb)],_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257['_addProperty'](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));_0x57471b[_0x3995af(0x1ba)]=!0x0;}else{for(_0x3e3e31=0x0,_0x3d9257=_0x453b9a,_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1de)](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));}_0x2990f0[_0x3995af(0x23c)]+=_0x3393c4['length'];}if(!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&!_0x40ef76&&_0x348688!==_0x3995af(0x21b)&&_0x348688!==_0x3995af(0x20d)&&_0x348688!=='bigint'){var _0x2c8229=_0x34d09c[_0x3995af(0x235)]||_0x2990f0['props'];if(this['_isSet'](_0x4a9396)?(_0x13de0c=0x0,_0x4a9396[_0x3995af(0x27d)](function(_0x24dfd0){var _0x3a0529=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x3a0529(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0[_0x3a0529(0x27a)]&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3a0529(0x23c)]>_0x2990f0[_0x3a0529(0x286)]){_0x1043d2=!0x0;return;}_0x3393c4['push'](_0x507257[_0x3a0529(0x1de)](_0x322156,_0x4a9396,_0x3a0529(0x1ca),_0x13de0c++,_0x2990f0,function(_0xd668d7){return function(){return _0xd668d7;};}(_0x24dfd0)));})):this['_isMap'](_0x4a9396)&&_0x4a9396[_0x3995af(0x27d)](function(_0x9c4313,_0x1eeee2){var _0x51fe0d=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x51fe0d(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0[_0x51fe0d(0x279)]&&_0x2990f0['autoExpandPropertyCount']>_0x2990f0[_0x51fe0d(0x286)]){_0x1043d2=!0x0;return;}var _0x113e97=_0x1eeee2[_0x51fe0d(0x1ee)]();_0x113e97[_0x51fe0d(0x23f)]>0x64&&(_0x113e97=_0x113e97[_0x51fe0d(0x21e)](0x0,0x64)+_0x51fe0d(0x284)),_0x3393c4[_0x51fe0d(0x212)](_0x507257[_0x51fe0d(0x1de)](_0x322156,_0x4a9396,_0x51fe0d(0x1b7),_0x113e97,_0x2990f0,function(_0x20178b){return function(){return _0x20178b;};}(_0x9c4313)));}),!_0x48bd6f){try{for(_0x439173 in _0x4a9396)if(!(_0x16bdae&&_0xf05db6[_0x3995af(0x26b)](_0x439173))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0[_0x3995af(0x27a)]&&_0x2990f0[_0x3995af(0x279)]&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1f7)](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}catch{}if(_0x23e67b['_p_length']=!0x0,_0x2bcc00&&(_0x23e67b['_p_name']=!0x0),!_0x1043d2){var _0x2c7457=[][_0x3995af(0x266)](this['_getOwnPropertyNames'](_0x4a9396))[_0x3995af(0x266)](this[_0x3995af(0x28b)](_0x4a9396));for(_0x13de0c=0x0,_0x453b9a=_0x2c7457['length'];_0x13de0c<_0x453b9a;_0x13de0c++)if(_0x439173=_0x2c7457[_0x13de0c],!(_0x16bdae&&_0xf05db6['test'](_0x439173['toString']()))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)&&!_0x23e67b[_0x3995af(0x1be)+_0x439173[_0x3995af(0x1ee)]()]){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257['_addObjectProperty'](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}}}}if(_0x57471b['type']=_0x348688,_0x30973f?(_0x57471b[_0x3995af(0x270)]=_0x4a9396[_0x3995af(0x1b4)](),this['_capIfString'](_0x348688,_0x57471b,_0x2990f0,_0x34d09c)):_0x348688===_0x3995af(0x208)?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x1fd)][_0x3995af(0x281)](_0x4a9396):_0x348688===_0x3995af(0x1f3)?_0x57471b['value']=_0x4a9396['toString']():_0x348688===_0x3995af(0x237)?_0x57471b['value']=this[_0x3995af(0x22b)][_0x3995af(0x281)](_0x4a9396):_0x348688==='symbol'&&this[_0x3995af(0x20b)]?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x20b)][_0x3995af(0x1d9)][_0x3995af(0x1ee)][_0x3995af(0x281)](_0x4a9396):!_0x2990f0[_0x3995af(0x222)]&&!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&(delete _0x57471b[_0x3995af(0x270)],_0x57471b[_0x3995af(0x1b6)]=!0x0),_0x1043d2&&(_0x57471b[_0x3995af(0x1bc)]=!0x0),_0x5f189c=_0x2990f0['node']['current'],_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x57471b,this['_treeNodePropertiesBeforeFullValue'](_0x57471b,_0x2990f0),_0x3393c4[_0x3995af(0x23f)]){for(_0x13de0c=0x0,_0x453b9a=_0x3393c4[_0x3995af(0x23f)];_0x13de0c<_0x453b9a;_0x13de0c++)_0x3393c4[_0x13de0c](_0x13de0c);}_0x322156[_0x3995af(0x23f)]&&(_0x57471b['props']=_0x322156);}catch(_0x4d3528){_0xa46520(_0x4d3528,_0x57471b,_0x2990f0);}return this[_0x3995af(0x209)](_0x4a9396,_0x57471b),this[_0x3995af(0x227)](_0x57471b,_0x2990f0),_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x5f189c,_0x2990f0['level']--,_0x2990f0[_0x3995af(0x279)]=_0x3b58e6,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects'][_0x3995af(0x297)](),_0x57471b;}[_0x51aae4(0x28b)](_0x6adba){var _0x2393e6=_0x51aae4;return Object[_0x2393e6(0x22c)]?Object[_0x2393e6(0x22c)](_0x6adba):[];}[_0x51aae4(0x1ef)](_0xb13f3d){var _0x409162=_0x51aae4;return!!(_0xb13f3d&&_0x47d960[_0x409162(0x1ca)]&&this[_0x409162(0x223)](_0xb13f3d)===_0x409162(0x21f)&&_0xb13f3d[_0x409162(0x27d)]);}['_blacklistedProperty'](_0x1a1779,_0x501292,_0x29e2a5){var _0x175cef=_0x51aae4;return _0x29e2a5[_0x175cef(0x21d)]?typeof _0x1a1779[_0x501292]==_0x175cef(0x253):!0x1;}[_0x51aae4(0x1ed)](_0x4cdb60){var _0x388439=_0x51aae4,_0x566a0c='';return _0x566a0c=typeof _0x4cdb60,_0x566a0c===_0x388439(0x213)?this['_objectToString'](_0x4cdb60)===_0x388439(0x1dc)?_0x566a0c='array':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x202)?_0x566a0c='date':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x24d)?_0x566a0c=_0x388439(0x1f3):_0x4cdb60===null?_0x566a0c='null':_0x4cdb60[_0x388439(0x20f)]&&(_0x566a0c=_0x4cdb60[_0x388439(0x20f)][_0x388439(0x25a)]||_0x566a0c):_0x566a0c===_0x388439(0x1b5)&&this[_0x388439(0x250)]&&_0x4cdb60 instanceof this[_0x388439(0x250)]&&(_0x566a0c=_0x388439(0x1e6)),_0x566a0c;}['_objectToString'](_0x12a36e){var _0x280626=_0x51aae4;return Object[_0x280626(0x1d9)][_0x280626(0x1ee)][_0x280626(0x281)](_0x12a36e);}['_isPrimitiveType'](_0x4dd78e){var _0x30f507=_0x51aae4;return _0x4dd78e===_0x30f507(0x1f8)||_0x4dd78e===_0x30f507(0x241)||_0x4dd78e===_0x30f507(0x1e5);}[_0x51aae4(0x264)](_0x3f7bc8){var _0x4fadad=_0x51aae4;return _0x3f7bc8==='Boolean'||_0x3f7bc8===_0x4fadad(0x21b)||_0x3f7bc8===_0x4fadad(0x23a);}[_0x51aae4(0x1de)](_0x1408ed,_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e){var _0x3881c6=this;return function(_0x22f694){var _0x1281ee=_0x4d24,_0x796d02=_0x5a8e0b['node'][_0x1281ee(0x285)],_0x1581db=_0x5a8e0b[_0x1281ee(0x1e8)]['index'],_0x472ccc=_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)];_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)]=_0x796d02,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=typeof _0x43725c==_0x1281ee(0x1e5)?_0x43725c:_0x22f694,_0x1408ed[_0x1281ee(0x212)](_0x3881c6['_property'](_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e)),_0x5a8e0b[_0x1281ee(0x1e8)]['parent']=_0x472ccc,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=_0x1581db;};}['_addObjectProperty'](_0x4d1d59,_0x4e3ee3,_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa){var _0x43c57a=_0x51aae4,_0x516743=this;return _0x4e3ee3[_0x43c57a(0x1be)+_0x23e3b7[_0x43c57a(0x1ee)]()]=!0x0,function(_0x51c0b8){var _0x22cf08=_0x43c57a,_0x42eec5=_0x366bab[_0x22cf08(0x1e8)]['current'],_0x237acd=_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)],_0xf2c09=_0x366bab['node']['parent'];_0x366bab['node']['parent']=_0x42eec5,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x51c0b8,_0x4d1d59[_0x22cf08(0x212)](_0x516743['_property'](_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa)),_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x296)]=_0xf2c09,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x237acd;};}[_0x51aae4(0x26c)](_0x37a575,_0x49085f,_0x5d231c,_0x187a39,_0x152229){var _0x553b52=_0x51aae4,_0x2e6cd7=this;_0x152229||(_0x152229=function(_0x395faa,_0x34adff){return _0x395faa[_0x34adff];});var _0x4b41a6=_0x5d231c['toString'](),_0x5bdf24=_0x187a39[_0x553b52(0x271)]||{},_0x1d7982=_0x187a39[_0x553b52(0x222)],_0x25f62c=_0x187a39[_0x553b52(0x27a)];try{var _0x207856=this['_isMap'](_0x37a575),_0x16cab6=_0x4b41a6;_0x207856&&_0x16cab6[0x0]==='\\x27'&&(_0x16cab6=_0x16cab6[_0x553b52(0x1cd)](0x1,_0x16cab6[_0x553b52(0x23f)]-0x2));var _0x2b595b=_0x187a39['expressionsToEvaluate']=_0x5bdf24['_p_'+_0x16cab6];_0x2b595b&&(_0x187a39['depth']=_0x187a39[_0x553b52(0x222)]+0x1),_0x187a39[_0x553b52(0x27a)]=!!_0x2b595b;var _0x2a23d3=typeof _0x5d231c=='symbol',_0x30a31b={'name':_0x2a23d3||_0x207856?_0x4b41a6:this['_propertyName'](_0x4b41a6)};if(_0x2a23d3&&(_0x30a31b['symbol']=!0x0),!(_0x49085f===_0x553b52(0x244)||_0x49085f===_0x553b52(0x295))){var _0x2fc78c=this[_0x553b52(0x23e)](_0x37a575,_0x5d231c);if(_0x2fc78c&&(_0x2fc78c[_0x553b52(0x22d)]&&(_0x30a31b[_0x553b52(0x298)]=!0x0),_0x2fc78c[_0x553b52(0x1e1)]&&!_0x2b595b&&!_0x187a39[_0x553b52(0x1bd)]))return _0x30a31b[_0x553b52(0x1e7)]=!0x0,this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x18a672;try{_0x18a672=_0x152229(_0x37a575,_0x5d231c);}catch(_0x551470){return _0x30a31b={'name':_0x4b41a6,'type':_0x553b52(0x25f),'error':_0x551470[_0x553b52(0x1d0)]},this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x375afe=this[_0x553b52(0x1ed)](_0x18a672),_0x65dc08=this[_0x553b52(0x225)](_0x375afe);if(_0x30a31b[_0x553b52(0x248)]=_0x375afe,_0x65dc08)this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x4c3409=_0x553b52;_0x30a31b[_0x4c3409(0x270)]=_0x18a672[_0x4c3409(0x1b4)](),!_0x2b595b&&_0x2e6cd7['_capIfString'](_0x375afe,_0x30a31b,_0x187a39,{});});else{var _0xfc3fca=_0x187a39[_0x553b52(0x279)]&&_0x187a39['level']<_0x187a39[_0x553b52(0x29b)]&&_0x187a39[_0x553b52(0x24c)][_0x553b52(0x216)](_0x18a672)<0x0&&_0x375afe!==_0x553b52(0x253)&&_0x187a39[_0x553b52(0x23c)]<_0x187a39['autoExpandLimit'];_0xfc3fca||_0x187a39['level']<_0x1d7982||_0x2b595b?(this[_0x553b52(0x239)](_0x30a31b,_0x18a672,_0x187a39,_0x2b595b||{}),this[_0x553b52(0x209)](_0x18a672,_0x30a31b)):this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x2ab07a=_0x553b52;_0x375afe===_0x2ab07a(0x206)||_0x375afe===_0x2ab07a(0x1b5)||(delete _0x30a31b[_0x2ab07a(0x270)],_0x30a31b[_0x2ab07a(0x1b6)]=!0x0);});}return _0x30a31b;}finally{_0x187a39[_0x553b52(0x271)]=_0x5bdf24,_0x187a39[_0x553b52(0x222)]=_0x1d7982,_0x187a39[_0x553b52(0x27a)]=_0x25f62c;}}['_capIfString'](_0x53dd7c,_0x1b3ea4,_0x491216,_0x4c2903){var _0x44104a=_0x51aae4,_0x480eee=_0x4c2903['strLength']||_0x491216['strLength'];if((_0x53dd7c==='string'||_0x53dd7c===_0x44104a(0x21b))&&_0x1b3ea4[_0x44104a(0x270)]){let _0x246eaa=_0x1b3ea4['value'][_0x44104a(0x23f)];_0x491216[_0x44104a(0x29a)]+=_0x246eaa,_0x491216[_0x44104a(0x29a)]>_0x491216[_0x44104a(0x25e)]?(_0x1b3ea4['capped']='',delete _0x1b3ea4[_0x44104a(0x270)]):_0x246eaa>_0x480eee&&(_0x1b3ea4[_0x44104a(0x1b6)]=_0x1b3ea4['value'][_0x44104a(0x1cd)](0x0,_0x480eee),delete _0x1b3ea4[_0x44104a(0x270)]);}}['_isMap'](_0x1271b3){var _0x121e09=_0x51aae4;return!!(_0x1271b3&&_0x47d960[_0x121e09(0x1b7)]&&this[_0x121e09(0x223)](_0x1271b3)===_0x121e09(0x249)&&_0x1271b3[_0x121e09(0x27d)]);}['_propertyName'](_0x463ce7){var _0x33b700=_0x51aae4;if(_0x463ce7[_0x33b700(0x26f)](/^\\d+$/))return _0x463ce7;var _0x40e686;try{_0x40e686=JSON['stringify'](''+_0x463ce7);}catch{_0x40e686='\\x22'+this[_0x33b700(0x223)](_0x463ce7)+'\\x22';}return _0x40e686['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x40e686=_0x40e686['substr'](0x1,_0x40e686['length']-0x2):_0x40e686=_0x40e686['replace'](/'/g,'\\x5c\\x27')[_0x33b700(0x238)](/\\\\\"/g,'\\x22')[_0x33b700(0x238)](/(^\"|\"$)/g,'\\x27'),_0x40e686;}[_0x51aae4(0x207)](_0x466e70,_0x5f1501,_0x4fc60a,_0x4fad2c){var _0x3871f9=_0x51aae4;this['_treeNodePropertiesBeforeFullValue'](_0x466e70,_0x5f1501),_0x4fad2c&&_0x4fad2c(),this[_0x3871f9(0x209)](_0x4fc60a,_0x466e70),this[_0x3871f9(0x227)](_0x466e70,_0x5f1501);}[_0x51aae4(0x229)](_0xa14bc4,_0x244522){var _0x24f631=_0x51aae4;this[_0x24f631(0x27f)](_0xa14bc4,_0x244522),this[_0x24f631(0x1f9)](_0xa14bc4,_0x244522),this[_0x24f631(0x218)](_0xa14bc4,_0x244522),this[_0x24f631(0x267)](_0xa14bc4,_0x244522);}[_0x51aae4(0x27f)](_0x574fea,_0x561fe9){}[_0x51aae4(0x1f9)](_0x8f8f59,_0x1dcac6){}[_0x51aae4(0x20c)](_0x13def9,_0x511419){}['_isUndefined'](_0xa4d6b5){var _0x48aba8=_0x51aae4;return _0xa4d6b5===this[_0x48aba8(0x215)];}[_0x51aae4(0x227)](_0x459431,_0x1c4011){var _0x3e5623=_0x51aae4;this[_0x3e5623(0x20c)](_0x459431,_0x1c4011),this[_0x3e5623(0x1e9)](_0x459431),_0x1c4011[_0x3e5623(0x1c8)]&&this[_0x3e5623(0x1c3)](_0x459431),this[_0x3e5623(0x1db)](_0x459431,_0x1c4011),this[_0x3e5623(0x27e)](_0x459431,_0x1c4011),this[_0x3e5623(0x22a)](_0x459431);}[_0x51aae4(0x209)](_0x37adca,_0x3b272d){var _0x49c3ad=_0x51aae4;let _0x2f3b69;try{_0x47d960['console']&&(_0x2f3b69=_0x47d960['console']['error'],_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=function(){}),_0x37adca&&typeof _0x37adca['length']==_0x49c3ad(0x1e5)&&(_0x3b272d['length']=_0x37adca[_0x49c3ad(0x23f)]);}catch{}finally{_0x2f3b69&&(_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=_0x2f3b69);}if(_0x3b272d[_0x49c3ad(0x248)]==='number'||_0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x23a)){if(isNaN(_0x3b272d[_0x49c3ad(0x270)]))_0x3b272d[_0x49c3ad(0x204)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];else switch(_0x3b272d[_0x49c3ad(0x270)]){case Number[_0x49c3ad(0x1e0)]:_0x3b272d[_0x49c3ad(0x24b)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];break;case Number['NEGATIVE_INFINITY']:_0x3b272d[_0x49c3ad(0x201)]=!0x0,delete _0x3b272d['value'];break;case 0x0:this[_0x49c3ad(0x26a)](_0x3b272d[_0x49c3ad(0x270)])&&(_0x3b272d['negativeZero']=!0x0);break;}}else _0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x253)&&typeof _0x37adca['name']==_0x49c3ad(0x241)&&_0x37adca[_0x49c3ad(0x25a)]&&_0x3b272d[_0x49c3ad(0x25a)]&&_0x37adca['name']!==_0x3b272d['name']&&(_0x3b272d[_0x49c3ad(0x280)]=_0x37adca['name']);}[_0x51aae4(0x26a)](_0x5823dc){return 0x1/_0x5823dc===Number['NEGATIVE_INFINITY'];}[_0x51aae4(0x1c3)](_0x4f14fc){var _0x34b346=_0x51aae4;!_0x4f14fc[_0x34b346(0x235)]||!_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x23f)]||_0x4f14fc[_0x34b346(0x248)]==='array'||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1b7)||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1ca)||_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x1f0)](function(_0x21d513,_0x1aca99){var _0x10bcf7=_0x34b346,_0x3eb18c=_0x21d513[_0x10bcf7(0x25a)][_0x10bcf7(0x1f2)](),_0x3b64f5=_0x1aca99[_0x10bcf7(0x25a)]['toLowerCase']();return _0x3eb18c<_0x3b64f5?-0x1:_0x3eb18c>_0x3b64f5?0x1:0x0;});}[_0x51aae4(0x1db)](_0x472fd6,_0x507653){var _0x4d3e82=_0x51aae4;if(!(_0x507653[_0x4d3e82(0x21d)]||!_0x472fd6[_0x4d3e82(0x235)]||!_0x472fd6[_0x4d3e82(0x235)][_0x4d3e82(0x23f)])){for(var _0x4ec0fa=[],_0xcfdc29=[],_0x15b014=0x0,_0x16cbad=_0x472fd6[_0x4d3e82(0x235)]['length'];_0x15b014<_0x16cbad;_0x15b014++){var _0xdf635e=_0x472fd6[_0x4d3e82(0x235)][_0x15b014];_0xdf635e['type']===_0x4d3e82(0x253)?_0x4ec0fa[_0x4d3e82(0x212)](_0xdf635e):_0xcfdc29[_0x4d3e82(0x212)](_0xdf635e);}if(!(!_0xcfdc29[_0x4d3e82(0x23f)]||_0x4ec0fa[_0x4d3e82(0x23f)]<=0x1)){_0x472fd6[_0x4d3e82(0x235)]=_0xcfdc29;var _0x442527={'functionsNode':!0x0,'props':_0x4ec0fa};this['_setNodeId'](_0x442527,_0x507653),this[_0x4d3e82(0x20c)](_0x442527,_0x507653),this['_setNodeExpandableState'](_0x442527),this[_0x4d3e82(0x267)](_0x442527,_0x507653),_0x442527['id']+='\\x20f',_0x472fd6['props']['unshift'](_0x442527);}}}[_0x51aae4(0x27e)](_0x587c2f,_0xb2ffee){}[_0x51aae4(0x1e9)](_0x5888ac){}[_0x51aae4(0x1eb)](_0x38cb6d){var _0x4a2e5f=_0x51aae4;return Array[_0x4a2e5f(0x21a)](_0x38cb6d)||typeof _0x38cb6d==_0x4a2e5f(0x213)&&this[_0x4a2e5f(0x223)](_0x38cb6d)===_0x4a2e5f(0x1dc);}[_0x51aae4(0x267)](_0x454780,_0x19f736){}[_0x51aae4(0x22a)](_0x2f5140){var _0x1a543b=_0x51aae4;delete _0x2f5140[_0x1a543b(0x221)],delete _0x2f5140[_0x1a543b(0x23d)],delete _0x2f5140[_0x1a543b(0x1c7)];}[_0x51aae4(0x218)](_0x494d42,_0x33ed0c){}}let _0x126961=new _0xc692a3(),_0x5586bf={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x533936={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x185555(_0x4dd1b9,_0x3906a7,_0x402dde,_0x691525,_0x3b2d7e,_0x4d4e9f){var _0x5c3e49=_0x51aae4;let _0xc691c0,_0x1e8e96;try{_0x1e8e96=_0x1c80ec(),_0xc691c0=_0x5601af[_0x3906a7],!_0xc691c0||_0x1e8e96-_0xc691c0['ts']>0x1f4&&_0xc691c0[_0x5c3e49(0x245)]&&_0xc691c0[_0x5c3e49(0x1d8)]/_0xc691c0[_0x5c3e49(0x245)]<0x64?(_0x5601af[_0x3906a7]=_0xc691c0={'count':0x0,'time':0x0,'ts':_0x1e8e96},_0x5601af[_0x5c3e49(0x230)]={}):_0x1e8e96-_0x5601af[_0x5c3e49(0x230)]['ts']>0x32&&_0x5601af['hits'][_0x5c3e49(0x245)]&&_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]/_0x5601af['hits'][_0x5c3e49(0x245)]<0x64&&(_0x5601af[_0x5c3e49(0x230)]={});let _0x70b3cb=[],_0x219da2=_0xc691c0[_0x5c3e49(0x220)]||_0x5601af['hits'][_0x5c3e49(0x220)]?_0x533936:_0x5586bf,_0x1c54ac=_0x1c899a=>{var _0x30bfe0=_0x5c3e49;let _0x28f6e0={};return _0x28f6e0[_0x30bfe0(0x235)]=_0x1c899a[_0x30bfe0(0x235)],_0x28f6e0[_0x30bfe0(0x1bb)]=_0x1c899a[_0x30bfe0(0x1bb)],_0x28f6e0[_0x30bfe0(0x1c2)]=_0x1c899a[_0x30bfe0(0x1c2)],_0x28f6e0['totalStrLength']=_0x1c899a['totalStrLength'],_0x28f6e0[_0x30bfe0(0x286)]=_0x1c899a[_0x30bfe0(0x286)],_0x28f6e0[_0x30bfe0(0x29b)]=_0x1c899a['autoExpandMaxDepth'],_0x28f6e0[_0x30bfe0(0x1c8)]=!0x1,_0x28f6e0['noFunctions']=!_0x3c7f88,_0x28f6e0['depth']=0x1,_0x28f6e0[_0x30bfe0(0x1d4)]=0x0,_0x28f6e0['expId']=_0x30bfe0(0x293),_0x28f6e0[_0x30bfe0(0x1d1)]='root_exp',_0x28f6e0[_0x30bfe0(0x279)]=!0x0,_0x28f6e0['autoExpandPreviousObjects']=[],_0x28f6e0[_0x30bfe0(0x23c)]=0x0,_0x28f6e0[_0x30bfe0(0x1bd)]=!0x0,_0x28f6e0[_0x30bfe0(0x29a)]=0x0,_0x28f6e0[_0x30bfe0(0x1e8)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x28f6e0;};for(var _0x47ef3f=0x0;_0x47ef3f<_0x3b2d7e[_0x5c3e49(0x23f)];_0x47ef3f++)_0x70b3cb[_0x5c3e49(0x212)](_0x126961[_0x5c3e49(0x239)]({'timeNode':_0x4dd1b9===_0x5c3e49(0x1d8)||void 0x0},_0x3b2d7e[_0x47ef3f],_0x1c54ac(_0x219da2),{}));if(_0x4dd1b9===_0x5c3e49(0x252)){let _0x5d9196=Error[_0x5c3e49(0x20e)];try{Error[_0x5c3e49(0x20e)]=0x1/0x0,_0x70b3cb['push'](_0x126961['serialize']({'stackNode':!0x0},new Error()[_0x5c3e49(0x23b)],_0x1c54ac(_0x219da2),{'strLength':0x1/0x0}));}finally{Error[_0x5c3e49(0x20e)]=_0x5d9196;}}return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':_0x70b3cb,'id':_0x3906a7,'context':_0x4d4e9f}]};}catch(_0x2799c0){return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':[{'type':_0x5c3e49(0x25f),'error':_0x2799c0&&_0x2799c0['message']}],'id':_0x3906a7,'context':_0x4d4e9f}]};}finally{try{if(_0xc691c0&&_0x1e8e96){let _0x4e0fa0=_0x1c80ec();_0xc691c0['count']++,_0xc691c0[_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0xc691c0['ts']=_0x4e0fa0,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]++,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0x5601af['hits']['ts']=_0x4e0fa0,(_0xc691c0['count']>0x32||_0xc691c0['time']>0x64)&&(_0xc691c0[_0x5c3e49(0x220)]=!0x0),(_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]>0x3e8||_0x5601af[_0x5c3e49(0x230)]['time']>0x12c)&&(_0x5601af[_0x5c3e49(0x230)]['reduceLimits']=!0x0);}}catch{}}}return _0x185555;}((_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x93064b,_0x3f89fb,_0x26d56d,_0x2f8c9b,_0x1bea64)=>{var _0x3d998c=_0x438282;if(_0x575b60[_0x3d998c(0x260)])return _0x575b60['_console_ninja'];if(!Y(_0x575b60,_0x26d56d,_0x38d7c7))return _0x575b60[_0x3d998c(0x260)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x575b60[_0x3d998c(0x260)];let _0x5daf87=W(_0x575b60),_0x5ae4d3=_0x5daf87['elapsed'],_0x428f23=_0x5daf87[_0x3d998c(0x210)],_0x4420a1=_0x5daf87[_0x3d998c(0x275)],_0x5bfdb9={'hits':{},'ts':{}},_0x10ee1e=Q(_0x575b60,_0x2f8c9b,_0x5bfdb9,_0x93064b),_0x526587=_0x498c2e=>{_0x5bfdb9['ts'][_0x498c2e]=_0x428f23();},_0x842581=(_0x18dc32,_0x2f73a5)=>{var _0x465ad2=_0x3d998c;let _0x31c9c7=_0x5bfdb9['ts'][_0x2f73a5];if(delete _0x5bfdb9['ts'][_0x2f73a5],_0x31c9c7){let _0x27518d=_0x5ae4d3(_0x31c9c7,_0x428f23());_0x582191(_0x10ee1e(_0x465ad2(0x1d8),_0x18dc32,_0x4420a1(),_0x4eb954,[_0x27518d],_0x2f73a5));}},_0x4e5ab6=_0x37b253=>_0x14dd8e=>{var _0x2bb83b=_0x3d998c;try{_0x526587(_0x14dd8e),_0x37b253(_0x14dd8e);}finally{_0x575b60[_0x2bb83b(0x1c4)][_0x2bb83b(0x1d8)]=_0x37b253;}},_0x51e0f4=_0x4db519=>_0x2400ae=>{var _0x2d96cf=_0x3d998c;try{let [_0x2b9e82,_0x2fe789]=_0x2400ae['split'](_0x2d96cf(0x273));_0x842581(_0x2fe789,_0x2b9e82),_0x4db519(_0x2b9e82);}finally{_0x575b60['console'][_0x2d96cf(0x1ea)]=_0x4db519;}};_0x575b60[_0x3d998c(0x260)]={'consoleLog':(_0x454cc5,_0x191a93)=>{var _0x46a209=_0x3d998c;_0x575b60[_0x46a209(0x1c4)][_0x46a209(0x256)][_0x46a209(0x25a)]!=='disabledLog'&&_0x582191(_0x10ee1e(_0x46a209(0x256),_0x454cc5,_0x4420a1(),_0x4eb954,_0x191a93));},'consoleTrace':(_0x64feee,_0x5b1099)=>{var _0x963014=_0x3d998c;_0x575b60[_0x963014(0x1c4)][_0x963014(0x256)]['name']!==_0x963014(0x299)&&_0x582191(_0x10ee1e(_0x963014(0x252),_0x64feee,_0x4420a1(),_0x4eb954,_0x5b1099));},'consoleTime':()=>{var _0x14ba63=_0x3d998c;_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]=_0x4e5ab6(_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]);},'consoleTimeEnd':()=>{var _0x4f2ede=_0x3d998c;_0x575b60[_0x4f2ede(0x1c4)]['timeEnd']=_0x51e0f4(_0x575b60[_0x4f2ede(0x1c4)][_0x4f2ede(0x1ea)]);},'autoLog':(_0x3dd72f,_0x47b02b)=>{var _0x48e51d=_0x3d998c;_0x582191(_0x10ee1e(_0x48e51d(0x256),_0x47b02b,_0x4420a1(),_0x4eb954,[_0x3dd72f]));},'autoLogMany':(_0x348836,_0x511d66)=>{var _0x26c38a=_0x3d998c;_0x582191(_0x10ee1e(_0x26c38a(0x256),_0x348836,_0x4420a1(),_0x4eb954,_0x511d66));},'autoTrace':(_0x4e5b2e,_0x99ff03)=>{var _0x257c66=_0x3d998c;_0x582191(_0x10ee1e(_0x257c66(0x252),_0x99ff03,_0x4420a1(),_0x4eb954,[_0x4e5b2e]));},'autoTraceMany':(_0x4b519e,_0x357444)=>{var _0x27e275=_0x3d998c;_0x582191(_0x10ee1e(_0x27e275(0x252),_0x4b519e,_0x4420a1(),_0x4eb954,_0x357444));},'autoTime':(_0x18001c,_0x14ae9e,_0x192755)=>{_0x526587(_0x192755);},'autoTimeEnd':(_0x229242,_0x1b6d26,_0x4f0695)=>{_0x842581(_0x1b6d26,_0x4f0695);},'coverage':_0x4dec71=>{var _0x332507=_0x3d998c;_0x582191({'method':_0x332507(0x1df),'version':_0x93064b,'args':[{'id':_0x4dec71}]});}};let _0x582191=J(_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x1bea64),_0x4eb954=_0x575b60[_0x3d998c(0x247)];return _0x575b60[_0x3d998c(0x260)];})(globalThis,_0x438282(0x240),_0x438282(0x258),_0x438282(0x233),_0x438282(0x228),'1.0.0',_0x438282(0x1d7),_0x438282(0x268),_0x438282(0x1cf),_0x438282(0x28e));function _0x3fef(){var _0x5da782=['logger\\x20websocket\\x20error','','hostname','5MwdXRE','onopen','_socket','root_exp_id','onmessage','Error','parent','pop','setter','disabledTrace','allStrLength','autoExpandMaxDepth','valueOf','undefined','capped','Map','then','next.js','cappedElements','elements','cappedProps','resolveGetters','_p_','hrtime','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','astro','strLength','_sortProps','console','_ws','_sendErrorMessage','_hasMapOnItsPath','sortProps','_allowedToSend','Set','defineProperty','method','substr','getOwnPropertyNames','','message','rootExpression','_maxConnectAttemptCount','75966dMQqWN','level','global','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','1696339250985','time','prototype','remix','_addFunctionsNode','[object\\x20Array]','_connectAttemptCount','_addProperty','coverage','POSITIVE_INFINITY','get','_inBrowser','host','_webSocketErrorDocsLink','number','HTMLAllCollection','getter','node','_setNodeExpandableState','timeEnd','_isArray','WebSocket','_type','toString','_isSet','sort','_reconnectTimeout','toLowerCase','bigint','unref','_disposeWebsocket','nodeModules','_addObjectProperty','boolean','_setNodeQueryPath','_attemptToReconnectShortly','Symbol','1262461SWpekW','_dateToString','hasOwnProperty','index','path','negativeInfinity','[object\\x20Date]','enumerable','nan','warn','null','_processTreeNodeResult','date','_additionalMetadata','_connected','_Symbol','_setNodeLabel','Buffer','stackTraceLimit','constructor','timeStamp','6606508aUvyXA','push','object','data','_undefined','indexOf','_connecting','_setNodeExpressionPath','create','isArray','String','384GYByLE','noFunctions','slice','[object\\x20Set]','reduceLimits','_hasSymbolPropertyOnItsPath','depth','_objectToString','includes','_isPrimitiveType','port','_treeNodePropertiesAfterFullValue','webpack','_treeNodePropertiesBeforeFullValue','_cleanNode','_regExpToString','getOwnPropertySymbols','set','join','error','hits','onclose','split',\"/home/anthony/.vscode/extensions/wallabyjs.console-ninja-0.0.228/node_modules\",'45844116NUkrJy','props','_connectToHostNow','RegExp','replace','serialize','Number','stack','autoExpandPropertyCount','_hasSetOnItsPath','_getOwnPropertyDescriptor','length','127.0.0.1','string','_quotedRegExp','catch','array','count','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_console_ninja_session','type','[object\\x20Map]','gateway.docker.internal','positiveInfinity','autoExpandPreviousObjects','[object\\x20BigInt]','70FEqbsq','11EvqbgY','_HTMLAllCollection','_keyStrRegExp','trace','function','default','getWebSocketClass','log','reload','39415','versions','name','map','ws://','_allowedToConnectOnSend','totalStrLength','unknown','_console_ninja','15594mUeKWH','_WebSocket','11196264ZecJpY','_isPrimitiveWrapperType','_numberRegExp','concat','_setNodePermissions',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"fedora\",\"192.168.0.111\"],'959QMymZX','_isNegativeZero','test','_property','process','2324394fQIAwR','match','value','expressionsToEvaluate','send',':logPointId:','_WebSocketClass','now','getPrototypeOf','_blacklistedProperty','__es'+'Module','autoExpand','isExpressionToEvaluate','stringify','_consoleNinjaAllowedToStart','forEach','_addLoadNode','_setNodeId','funcName','call','url','parse','...','current','autoExpandLimit','location','bind','performance','readyState','_getOwnPropertySymbols','failed\\x20to\\x20connect\\x20to\\x20host:\\x20'];_0x3fef=function(){return _0x5da782;};return _0x3fef();}");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/components/reservation.js":
/*!***************************************!*\
  !*** ./src/components/reservation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _sass_reservation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/reservation.scss */ "./src/sass/reservation.scss");



function createReservation() {
    const body = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('section', {
        class:"wrapper-section"
    })
    const wrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class: "res",
    })
    body.appendChild(wrapper)
    const form = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('fieldset', {
        class: 'reservation'
    })
    
    const title = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("legend", {
        class: "legend"
    })
    title.innerText = "Make a Reservation"
    
    form.appendChild(title)
    const formBody=(0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)("div", {
        class:"form-body"
    })
    form.appendChild(formBody)

    const name = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('input', {
        type: 'text',
        class: "name",
        required: "",
        placeholder: "Name"
    })
    formBody.appendChild(name)

    const email = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('input', {
        class: "email",
        type: 'email',
        placeholder: "Email"
    })
    formBody.appendChild(email)

    const phoneNumber = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('input', {
        class: "number",
        type: "number",
        placeholder: "Phone Number"
    })
    formBody.appendChild(phoneNumber)

    const address = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('input', {
        class: "address",
        type: "text",
        placeholder: "Address"
    })
    formBody.appendChild(address)

    const selector = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('select', {
        class: 'selector'
    })

    const option0 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('option', {
        class: "label",
        value: ""
    })
    const option1 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('option', {
        class: "options",
        value: "vip"
    })
    const option2 = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('option', {
        class: "options",
        value: "regular"
    })
    option0.innerText = "--Type of Reservation--"
    option1.innerText = 'VIP'
    option2.innerText = 'regular'
    selector.appendChild(option0)
    selector.appendChild(option1)
    selector.appendChild(option2)
    formBody.appendChild(selector)


    const noSeats = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('input', {
        class: "seats",
        type: "number",
        placeholder: "Number of seats"
    })
    formBody.appendChild(noSeats)

    const textArea = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createSetElement)('textarea', {
        class: "request",
        placeholder: "Any Special request"
    })
    formBody.appendChild(textArea)
    const btn=(0,_util__WEBPACK_IMPORTED_MODULE_0__.createFullElement)('button',{
        class:"button"
    }, 'Sumbit')

    form.appendChild(btn)
    wrapper.appendChild(form)

    return body
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReservation);

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
/* harmony import */ var _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/scrollbar/balls.gif */ "./src/img/scrollbar/balls.gif");
/* harmony import */ var _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/scrollbar/noodle.gif */ "./src/img/scrollbar/noodle.gif");
/* harmony import */ var _img_scrollbar_sushi_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/scrollbar/sushi.gif */ "./src/img/scrollbar/sushi.gif");
/* harmony import */ var _img_scrollbar_pancake_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/scrollbar/pancake.gif */ "./src/img/scrollbar/pancake.gif");
/* harmony import */ var _sass_scroll_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/scroll.scss */ "./src/sass/scroll.scss");







const images = [
  _img_scrollbar_balls_gif__WEBPACK_IMPORTED_MODULE_1__,
  _img_scrollbar_noodle_gif__WEBPACK_IMPORTED_MODULE_2__,
  _img_scrollbar_pancake_gif__WEBPACK_IMPORTED_MODULE_4__,
  _img_scrollbar_sushi_gif__WEBPACK_IMPORTED_MODULE_3__,
];

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
    li.addEventListener("click", (e) => {
      changePosition(e.target);
    });
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

    activeLink = link.itemID;

    const no = parseInt(link.dataset.number) - 1;
    const position = no * -100;

    const translateValue = `translate3d(${position}vw, 0px, 0px)`;
    wrapper.style.transform = translateValue;

    link.classList.add("active");
  }

  function setTime() {
    const current = activeLink >= links.length - 1 ? 0 : activeLink + 1;
    const link = links[current];
    changePosition(link);
  }

  btn1.innerHTML = "&#10094;";
  btn2.innerHTML = "&#10093;";

  viewWindow.appendChild(wrapper);
  viewWindow.appendChild(btn1);
  viewWindow.appendChild(btn2);

  container.appendChild(viewWindow);

  navLinks.appendChild(ul);
  container.appendChild(navLinks);

  setInterval(setTime, 4000);
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
/* harmony export */   createFullElement: () => (/* binding */ createFullElement),
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

function createFullElement(type, attributes={}, content=''){
    const element=createSetElement(type, attributes)
    element.innerHTML=content
    return element
}



/***/ }),

/***/ "./src/views/ContactView.js":
/*!**********************************!*\
  !*** ./src/views/ContactView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/contacts */ "./src/components/contacts.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/util.js");




function ContactView(){
    const body=(0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)('section',{
        class: "wrapper-section"
    })
    body.appendChild((0,_components_contacts__WEBPACK_IMPORTED_MODULE_0__["default"])())
    return body
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactView);

/***/ }),

/***/ "./src/views/HomeView.js":
/*!*******************************!*\
  !*** ./src/views/HomeView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/scroll */ "./src/components/scroll.js");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/body */ "./src/components/body.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util.js");




function HomeView() {
    const imageSlider = (0,_components_scroll__WEBPACK_IMPORTED_MODULE_0__["default"])()

    const main = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createSetElement)("section", { class: "wrapper-section" })
    const mainBody=(0,_components_body__WEBPACK_IMPORTED_MODULE_1__["default"])()
    main.appendChild(imageSlider)
    main.appendChild(mainBody)
    
    return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);

/***/ }),

/***/ "./src/fonts/hangyaku-font/Hangyaku-ywzMm.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/hangyaku-font/Hangyaku-ywzMm.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c1505f34f0318a624d1.ttf";

/***/ }),

/***/ "./src/fonts/japan-bento-version-font/JapanBentoDemoVersionRegular-nRWAJ.otf":
/*!***********************************************************************************!*\
  !*** ./src/fonts/japan-bento-version-font/JapanBentoDemoVersionRegular-nRWAJ.otf ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a0d7c49457e3862d4df.otf";

/***/ }),

/***/ "./src/fonts/qasengi-trial-font/QasengiTrialRegular-GO91O.ttf":
/*!********************************************************************!*\
  !*** ./src/fonts/qasengi-trial-font/QasengiTrialRegular-GO91O.ttf ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43dd152acb4adb9a087f.ttf";

/***/ }),

/***/ "./src/img/chef.jpg":
/*!**************************!*\
  !*** ./src/img/chef.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7eb98776d16eac93109e.jpg";

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

/***/ "./src/img/icons/address.png":
/*!***********************************!*\
  !*** ./src/img/icons/address.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "966b8eb260679c51748a.png";

/***/ }),

/***/ "./src/img/icons/email.png":
/*!*********************************!*\
  !*** ./src/img/icons/email.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ee273f2d8483d5d878.png";

/***/ }),

/***/ "./src/img/icons/location.gif":
/*!************************************!*\
  !*** ./src/img/icons/location.gif ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbb52a500a64243b228a.gif";

/***/ }),

/***/ "./src/img/icons/phone.png":
/*!*********************************!*\
  !*** ./src/img/icons/phone.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edac8728db6df1f6d703.png";

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

/***/ }),

/***/ "./src/img/scrollbar/pancake.gif":
/*!***************************************!*\
  !*** ./src/img/scrollbar/pancake.gif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "721a4905d7cff5b47b92.gif";

/***/ }),

/***/ "./src/img/scrollbar/sushi.gif":
/*!*************************************!*\
  !*** ./src/img/scrollbar/sushi.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c9be78aa09dea616df.gif";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _components_navItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navItems */ "./src/components/navItems.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");





/* eslint-disable */console.log(...oo_oo(`3998429018_0`,"hello, World!"));

const navbar = (0,_components_navbar__WEBPACK_IMPORTED_MODULE_3__["default"])();
const body = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getElement)("body");
const main = (0,_util__WEBPACK_IMPORTED_MODULE_1__.createSetElement)("div", { class: "body main" });

_components_navItems__WEBPACK_IMPORTED_MODULE_2__["default"].forEach((value, index)=>{
    value.el.classList.add('not-visible')
    main.appendChild(value.el)
})


body.appendChild(navbar);
body.appendChild(main);

navbar.firstElementChild.click()
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4d24(_0x1eeef1,_0xf15947){var _0x3fefdd=_0x3fef();return _0x4d24=function(_0x4d24c9,_0x546d5e){_0x4d24c9=_0x4d24c9-0x1b4;var _0x2aca2d=_0x3fefdd[_0x4d24c9];return _0x2aca2d;},_0x4d24(_0x1eeef1,_0xf15947);}var _0x438282=_0x4d24;(function(_0x2b5b27,_0x5684ed){var _0x19a2cf=_0x4d24,_0x423c08=_0x2b5b27();while(!![]){try{var _0x8e13=parseInt(_0x19a2cf(0x1fc))/0x1+parseInt(_0x19a2cf(0x261))/0x2*(-parseInt(_0x19a2cf(0x21c))/0x3)+parseInt(_0x19a2cf(0x211))/0x4*(-parseInt(_0x19a2cf(0x290))/0x5)+-parseInt(_0x19a2cf(0x1d3))/0x6*(-parseInt(_0x19a2cf(0x269))/0x7)+-parseInt(_0x19a2cf(0x263))/0x8+-parseInt(_0x19a2cf(0x26e))/0x9*(parseInt(_0x19a2cf(0x24e))/0xa)+-parseInt(_0x19a2cf(0x24f))/0xb*(-parseInt(_0x19a2cf(0x234))/0xc);if(_0x8e13===_0x5684ed)break;else _0x423c08['push'](_0x423c08['shift']());}catch(_0x4b083b){_0x423c08['push'](_0x423c08['shift']());}}}(_0x3fef,0xea743));var j=Object[_0x438282(0x219)],X=Object[_0x438282(0x1cb)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x438282(0x1ce)],te=Object[_0x438282(0x276)],ne=Object['prototype'][_0x438282(0x1fe)],re=(_0x23e827,_0x52ec00,_0xb165d2,_0x16b002)=>{var _0xe0898e=_0x438282;if(_0x52ec00&&typeof _0x52ec00==_0xe0898e(0x213)||typeof _0x52ec00==_0xe0898e(0x253)){for(let _0x22bec2 of ee(_0x52ec00))!ne['call'](_0x23e827,_0x22bec2)&&_0x22bec2!==_0xb165d2&&X(_0x23e827,_0x22bec2,{'get':()=>_0x52ec00[_0x22bec2],'enumerable':!(_0x16b002=G(_0x52ec00,_0x22bec2))||_0x16b002[_0xe0898e(0x203)]});}return _0x23e827;},K=(_0x2797ee,_0x57ae12,_0x322b74)=>(_0x322b74=_0x2797ee!=null?j(te(_0x2797ee)):{},re(_0x57ae12||!_0x2797ee||!_0x2797ee[_0x438282(0x278)]?X(_0x322b74,'default',{'value':_0x2797ee,'enumerable':!0x0}):_0x322b74,_0x2797ee)),q=class{constructor(_0x3109a7,_0x34b71a,_0x50a674,_0x52c9e6,_0x54e2c9){var _0x37d0ed=_0x438282;this['global']=_0x3109a7,this[_0x37d0ed(0x1e3)]=_0x34b71a,this[_0x37d0ed(0x226)]=_0x50a674,this['nodeModules']=_0x52c9e6,this['dockerizedApp']=_0x54e2c9,this[_0x37d0ed(0x1c9)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x37d0ed(0x20a)]=!0x1,this[_0x37d0ed(0x217)]=!0x1,this[_0x37d0ed(0x1e2)]=!this[_0x37d0ed(0x1d5)][_0x37d0ed(0x26d)]?.['versions']?.[_0x37d0ed(0x1e8)],this[_0x37d0ed(0x274)]=null,this[_0x37d0ed(0x1dd)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x37d0ed(0x1e4)]='https://tinyurl.com/37x8b79t',this[_0x37d0ed(0x1c6)]=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x37d0ed(0x1d6))+this[_0x37d0ed(0x1e4)];}async['getWebSocketClass'](){var _0x1b39e7=_0x438282;if(this[_0x1b39e7(0x274)])return this['_WebSocketClass'];let _0x253aee;if(this['_inBrowser'])_0x253aee=this['global'][_0x1b39e7(0x1ec)];else{if(this[_0x1b39e7(0x1d5)]['process']?.[_0x1b39e7(0x262)])_0x253aee=this[_0x1b39e7(0x1d5)][_0x1b39e7(0x26d)]?.[_0x1b39e7(0x262)];else try{let _0x20c494=await import(_0x1b39e7(0x200));_0x253aee=(await import((await import(_0x1b39e7(0x282)))['pathToFileURL'](_0x20c494[_0x1b39e7(0x22e)](this[_0x1b39e7(0x1f6)],'ws/index.js'))[_0x1b39e7(0x1ee)]()))[_0x1b39e7(0x254)];}catch{try{_0x253aee=require(require(_0x1b39e7(0x200))['join'](this[_0x1b39e7(0x1f6)],'ws'));}catch{throw new Error(_0x1b39e7(0x1c0));}}}return this[_0x1b39e7(0x274)]=_0x253aee,_0x253aee;}[_0x438282(0x236)](){var _0x1a3cd5=_0x438282;this[_0x1a3cd5(0x217)]||this['_connected']||this[_0x1a3cd5(0x1dd)]>=this['_maxConnectAttemptCount']||(this[_0x1a3cd5(0x25d)]=!0x1,this[_0x1a3cd5(0x217)]=!0x0,this[_0x1a3cd5(0x1dd)]++,this[_0x1a3cd5(0x1c5)]=new Promise((_0x330344,_0x325b83)=>{var _0x16ec33=_0x1a3cd5;this[_0x16ec33(0x255)]()[_0x16ec33(0x1b8)](_0x41728c=>{var _0x460362=_0x16ec33;let _0x5dff9f=new _0x41728c(_0x460362(0x25c)+(!this[_0x460362(0x1e2)]&&this['dockerizedApp']?_0x460362(0x24a):this[_0x460362(0x1e3)])+':'+this['port']);_0x5dff9f['onerror']=()=>{var _0x2e215b=_0x460362;this[_0x2e215b(0x1c9)]=!0x1,this['_disposeWebsocket'](_0x5dff9f),this['_attemptToReconnectShortly'](),_0x325b83(new Error(_0x2e215b(0x28d)));},_0x5dff9f[_0x460362(0x291)]=()=>{var _0x1fc15f=_0x460362;this['_inBrowser']||_0x5dff9f[_0x1fc15f(0x292)]&&_0x5dff9f['_socket'][_0x1fc15f(0x1f4)]&&_0x5dff9f[_0x1fc15f(0x292)][_0x1fc15f(0x1f4)](),_0x330344(_0x5dff9f);},_0x5dff9f[_0x460362(0x231)]=()=>{var _0x23998c=_0x460362;this[_0x23998c(0x25d)]=!0x0,this[_0x23998c(0x1f5)](_0x5dff9f),this[_0x23998c(0x1fa)]();},_0x5dff9f[_0x460362(0x294)]=_0x772e48=>{var _0x183ce5=_0x460362;try{_0x772e48&&_0x772e48[_0x183ce5(0x214)]&&this[_0x183ce5(0x1e2)]&&JSON[_0x183ce5(0x283)](_0x772e48[_0x183ce5(0x214)])[_0x183ce5(0x1cc)]===_0x183ce5(0x257)&&this[_0x183ce5(0x1d5)][_0x183ce5(0x287)]['reload']();}catch{}};})[_0x16ec33(0x1b8)](_0x3dcc0a=>(this[_0x16ec33(0x20a)]=!0x0,this['_connecting']=!0x1,this[_0x16ec33(0x25d)]=!0x1,this[_0x16ec33(0x1c9)]=!0x0,this[_0x16ec33(0x1dd)]=0x0,_0x3dcc0a))[_0x16ec33(0x243)](_0x4af10c=>(this['_connected']=!0x1,this[_0x16ec33(0x217)]=!0x1,console[_0x16ec33(0x205)](_0x16ec33(0x246)+this[_0x16ec33(0x1e4)]),_0x325b83(new Error(_0x16ec33(0x28c)+(_0x4af10c&&_0x4af10c[_0x16ec33(0x1d0)])))));}));}[_0x438282(0x1f5)](_0x2ab108){var _0x55920e=_0x438282;this[_0x55920e(0x20a)]=!0x1,this[_0x55920e(0x217)]=!0x1;try{_0x2ab108[_0x55920e(0x231)]=null,_0x2ab108['onerror']=null,_0x2ab108['onopen']=null;}catch{}try{_0x2ab108[_0x55920e(0x28a)]<0x2&&_0x2ab108['close']();}catch{}}['_attemptToReconnectShortly'](){var _0x2ec468=_0x438282;clearTimeout(this[_0x2ec468(0x1f1)]),!(this[_0x2ec468(0x1dd)]>=this[_0x2ec468(0x1d2)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x123209=_0x2ec468;this['_connected']||this['_connecting']||(this['_connectToHostNow'](),this[_0x123209(0x1c5)]?.[_0x123209(0x243)](()=>this[_0x123209(0x1fa)]()));},0x1f4),this[_0x2ec468(0x1f1)][_0x2ec468(0x1f4)]&&this['_reconnectTimeout'][_0x2ec468(0x1f4)]());}async[_0x438282(0x272)](_0x25a3f8){var _0x4002f6=_0x438282;try{if(!this[_0x4002f6(0x1c9)])return;this['_allowedToConnectOnSend']&&this[_0x4002f6(0x236)](),(await this['_ws'])[_0x4002f6(0x272)](JSON[_0x4002f6(0x27b)](_0x25a3f8));}catch(_0x246bd9){console[_0x4002f6(0x205)](this[_0x4002f6(0x1c6)]+':\\x20'+(_0x246bd9&&_0x246bd9[_0x4002f6(0x1d0)])),this['_allowedToSend']=!0x1,this[_0x4002f6(0x1fa)]();}}};function J(_0x228194,_0x12b182,_0x5ce5fb,_0x2a75ff,_0x1a7bb2,_0x55ce8a){var _0x1d2a68=_0x438282;let _0x5573db=_0x5ce5fb[_0x1d2a68(0x232)](',')[_0x1d2a68(0x25b)](_0x276f12=>{var _0x25b36b=_0x1d2a68;try{_0x228194[_0x25b36b(0x247)]||((_0x1a7bb2===_0x25b36b(0x1b9)||_0x1a7bb2===_0x25b36b(0x1da)||_0x1a7bb2===_0x25b36b(0x1c1))&&(_0x1a7bb2+=_0x228194['process']?.[_0x25b36b(0x259)]?.[_0x25b36b(0x1e8)]?'\\x20server':'\\x20browser'),_0x228194['_console_ninja_session']={'id':+new Date(),'tool':_0x1a7bb2});let _0x1122dc=new q(_0x228194,_0x12b182,_0x276f12,_0x2a75ff,_0x55ce8a);return _0x1122dc['send'][_0x25b36b(0x288)](_0x1122dc);}catch(_0x233595){return console[_0x25b36b(0x205)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x233595&&_0x233595[_0x25b36b(0x1d0)]),()=>{};}});return _0x5ca097=>_0x5573db['forEach'](_0x32d1bc=>_0x32d1bc(_0x5ca097));}function W(_0x400c65){var _0x7cee1a=_0x438282;let _0x381510=function(_0x49f5f5,_0x4919cb){return _0x4919cb-_0x49f5f5;},_0x30ff51;if(_0x400c65['performance'])_0x30ff51=function(){var _0x5b6463=_0x4d24;return _0x400c65[_0x5b6463(0x289)][_0x5b6463(0x275)]();};else{if(_0x400c65[_0x7cee1a(0x26d)]&&_0x400c65['process'][_0x7cee1a(0x1bf)])_0x30ff51=function(){var _0x36e550=_0x7cee1a;return _0x400c65[_0x36e550(0x26d)][_0x36e550(0x1bf)]();},_0x381510=function(_0x2b8cac,_0x1dd5cd){return 0x3e8*(_0x1dd5cd[0x0]-_0x2b8cac[0x0])+(_0x1dd5cd[0x1]-_0x2b8cac[0x1])/0xf4240;};else try{let {performance:_0x5598aa}=require('perf_hooks');_0x30ff51=function(){var _0x679e47=_0x7cee1a;return _0x5598aa[_0x679e47(0x275)]();};}catch{_0x30ff51=function(){return+new Date();};}}return{'elapsed':_0x381510,'timeStamp':_0x30ff51,'now':()=>Date['now']()};}function Y(_0x451847,_0x4b953b,_0x452e74){var _0x3459f9=_0x438282;if(_0x451847[_0x3459f9(0x27c)]!==void 0x0)return _0x451847[_0x3459f9(0x27c)];let _0x14dc60=_0x451847['process']?.['versions']?.[_0x3459f9(0x1e8)];return _0x14dc60&&_0x452e74==='nuxt'?_0x451847[_0x3459f9(0x27c)]=!0x1:_0x451847[_0x3459f9(0x27c)]=_0x14dc60||!_0x4b953b||_0x451847[_0x3459f9(0x287)]?.['hostname']&&_0x4b953b[_0x3459f9(0x224)](_0x451847['location'][_0x3459f9(0x28f)]),_0x451847['_consoleNinjaAllowedToStart'];}function Q(_0x47d960,_0x3c7f88,_0x5601af,_0x4415ac){var _0x51aae4=_0x438282;_0x47d960=_0x47d960,_0x3c7f88=_0x3c7f88,_0x5601af=_0x5601af,_0x4415ac=_0x4415ac;let _0x48b950=W(_0x47d960),_0x5454c5=_0x48b950['elapsed'],_0x1c80ec=_0x48b950[_0x51aae4(0x210)];class _0xc692a3{constructor(){var _0x479153=_0x51aae4;this[_0x479153(0x251)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x479153(0x265)]=/^(0|[1-9][0-9]*)$/,this[_0x479153(0x242)]=/'([^\\\\']|\\\\')*'/,this[_0x479153(0x215)]=_0x47d960[_0x479153(0x1b5)],this[_0x479153(0x250)]=_0x47d960[_0x479153(0x1e6)],this[_0x479153(0x23e)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0x479153(0x1ce)],this[_0x479153(0x20b)]=_0x47d960[_0x479153(0x1fb)],this['_regExpToString']=RegExp[_0x479153(0x1d9)][_0x479153(0x1ee)],this[_0x479153(0x1fd)]=Date[_0x479153(0x1d9)][_0x479153(0x1ee)];}[_0x51aae4(0x239)](_0x57471b,_0x4a9396,_0x2990f0,_0x34d09c){var _0x3995af=_0x51aae4,_0x507257=this,_0x3b58e6=_0x2990f0[_0x3995af(0x279)];function _0xa46520(_0x34ed3c,_0x5326c6,_0xbf1724){var _0x38b851=_0x3995af;_0x5326c6['type']=_0x38b851(0x25f),_0x5326c6[_0x38b851(0x22f)]=_0x34ed3c[_0x38b851(0x1d0)],_0x5f189c=_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)],_0xbf1724[_0x38b851(0x1e8)][_0x38b851(0x285)]=_0x5326c6,_0x507257[_0x38b851(0x229)](_0x5326c6,_0xbf1724);}try{_0x2990f0[_0x3995af(0x1d4)]++,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects']['push'](_0x4a9396);var _0x13de0c,_0x453b9a,_0x3e3e31,_0x3d9257,_0x322156=[],_0x3393c4=[],_0x439173,_0x348688=this[_0x3995af(0x1ed)](_0x4a9396),_0x16bdae=_0x348688==='array',_0x48bd6f=!0x1,_0x2bcc00=_0x348688===_0x3995af(0x253),_0x40ef76=this[_0x3995af(0x225)](_0x348688),_0x535a2a=this['_isPrimitiveWrapperType'](_0x348688),_0x30973f=_0x40ef76||_0x535a2a,_0x23e67b={},_0xfd53ae=0x0,_0x1043d2=!0x1,_0x5f189c,_0xf05db6=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2990f0[_0x3995af(0x222)]){if(_0x16bdae){if(_0x453b9a=_0x4a9396[_0x3995af(0x23f)],_0x453b9a>_0x2990f0[_0x3995af(0x1bb)]){for(_0x3e3e31=0x0,_0x3d9257=_0x2990f0[_0x3995af(0x1bb)],_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257['_addProperty'](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));_0x57471b[_0x3995af(0x1ba)]=!0x0;}else{for(_0x3e3e31=0x0,_0x3d9257=_0x453b9a,_0x13de0c=_0x3e3e31;_0x13de0c<_0x3d9257;_0x13de0c++)_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1de)](_0x322156,_0x4a9396,_0x348688,_0x13de0c,_0x2990f0));}_0x2990f0[_0x3995af(0x23c)]+=_0x3393c4['length'];}if(!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&!_0x40ef76&&_0x348688!==_0x3995af(0x21b)&&_0x348688!==_0x3995af(0x20d)&&_0x348688!=='bigint'){var _0x2c8229=_0x34d09c[_0x3995af(0x235)]||_0x2990f0['props'];if(this['_isSet'](_0x4a9396)?(_0x13de0c=0x0,_0x4a9396[_0x3995af(0x27d)](function(_0x24dfd0){var _0x3a0529=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x3a0529(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0[_0x3a0529(0x27a)]&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3a0529(0x23c)]>_0x2990f0[_0x3a0529(0x286)]){_0x1043d2=!0x0;return;}_0x3393c4['push'](_0x507257[_0x3a0529(0x1de)](_0x322156,_0x4a9396,_0x3a0529(0x1ca),_0x13de0c++,_0x2990f0,function(_0xd668d7){return function(){return _0xd668d7;};}(_0x24dfd0)));})):this['_isMap'](_0x4a9396)&&_0x4a9396[_0x3995af(0x27d)](function(_0x9c4313,_0x1eeee2){var _0x51fe0d=_0x3995af;if(_0xfd53ae++,_0x2990f0[_0x51fe0d(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;return;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0[_0x51fe0d(0x279)]&&_0x2990f0['autoExpandPropertyCount']>_0x2990f0[_0x51fe0d(0x286)]){_0x1043d2=!0x0;return;}var _0x113e97=_0x1eeee2[_0x51fe0d(0x1ee)]();_0x113e97[_0x51fe0d(0x23f)]>0x64&&(_0x113e97=_0x113e97[_0x51fe0d(0x21e)](0x0,0x64)+_0x51fe0d(0x284)),_0x3393c4[_0x51fe0d(0x212)](_0x507257[_0x51fe0d(0x1de)](_0x322156,_0x4a9396,_0x51fe0d(0x1b7),_0x113e97,_0x2990f0,function(_0x20178b){return function(){return _0x20178b;};}(_0x9c4313)));}),!_0x48bd6f){try{for(_0x439173 in _0x4a9396)if(!(_0x16bdae&&_0xf05db6[_0x3995af(0x26b)](_0x439173))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0[_0x3995af(0x27a)]&&_0x2990f0[_0x3995af(0x279)]&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257[_0x3995af(0x1f7)](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}catch{}if(_0x23e67b['_p_length']=!0x0,_0x2bcc00&&(_0x23e67b['_p_name']=!0x0),!_0x1043d2){var _0x2c7457=[][_0x3995af(0x266)](this['_getOwnPropertyNames'](_0x4a9396))[_0x3995af(0x266)](this[_0x3995af(0x28b)](_0x4a9396));for(_0x13de0c=0x0,_0x453b9a=_0x2c7457['length'];_0x13de0c<_0x453b9a;_0x13de0c++)if(_0x439173=_0x2c7457[_0x13de0c],!(_0x16bdae&&_0xf05db6['test'](_0x439173['toString']()))&&!this[_0x3995af(0x277)](_0x4a9396,_0x439173,_0x2990f0)&&!_0x23e67b[_0x3995af(0x1be)+_0x439173[_0x3995af(0x1ee)]()]){if(_0xfd53ae++,_0x2990f0[_0x3995af(0x23c)]++,_0xfd53ae>_0x2c8229){_0x1043d2=!0x0;break;}if(!_0x2990f0['isExpressionToEvaluate']&&_0x2990f0['autoExpand']&&_0x2990f0[_0x3995af(0x23c)]>_0x2990f0[_0x3995af(0x286)]){_0x1043d2=!0x0;break;}_0x3393c4[_0x3995af(0x212)](_0x507257['_addObjectProperty'](_0x322156,_0x23e67b,_0x4a9396,_0x348688,_0x439173,_0x2990f0));}}}}}if(_0x57471b['type']=_0x348688,_0x30973f?(_0x57471b[_0x3995af(0x270)]=_0x4a9396[_0x3995af(0x1b4)](),this['_capIfString'](_0x348688,_0x57471b,_0x2990f0,_0x34d09c)):_0x348688===_0x3995af(0x208)?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x1fd)][_0x3995af(0x281)](_0x4a9396):_0x348688===_0x3995af(0x1f3)?_0x57471b['value']=_0x4a9396['toString']():_0x348688===_0x3995af(0x237)?_0x57471b['value']=this[_0x3995af(0x22b)][_0x3995af(0x281)](_0x4a9396):_0x348688==='symbol'&&this[_0x3995af(0x20b)]?_0x57471b[_0x3995af(0x270)]=this[_0x3995af(0x20b)][_0x3995af(0x1d9)][_0x3995af(0x1ee)][_0x3995af(0x281)](_0x4a9396):!_0x2990f0[_0x3995af(0x222)]&&!(_0x348688===_0x3995af(0x206)||_0x348688===_0x3995af(0x1b5))&&(delete _0x57471b[_0x3995af(0x270)],_0x57471b[_0x3995af(0x1b6)]=!0x0),_0x1043d2&&(_0x57471b[_0x3995af(0x1bc)]=!0x0),_0x5f189c=_0x2990f0['node']['current'],_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x57471b,this['_treeNodePropertiesBeforeFullValue'](_0x57471b,_0x2990f0),_0x3393c4[_0x3995af(0x23f)]){for(_0x13de0c=0x0,_0x453b9a=_0x3393c4[_0x3995af(0x23f)];_0x13de0c<_0x453b9a;_0x13de0c++)_0x3393c4[_0x13de0c](_0x13de0c);}_0x322156[_0x3995af(0x23f)]&&(_0x57471b['props']=_0x322156);}catch(_0x4d3528){_0xa46520(_0x4d3528,_0x57471b,_0x2990f0);}return this[_0x3995af(0x209)](_0x4a9396,_0x57471b),this[_0x3995af(0x227)](_0x57471b,_0x2990f0),_0x2990f0[_0x3995af(0x1e8)][_0x3995af(0x285)]=_0x5f189c,_0x2990f0['level']--,_0x2990f0[_0x3995af(0x279)]=_0x3b58e6,_0x2990f0[_0x3995af(0x279)]&&_0x2990f0['autoExpandPreviousObjects'][_0x3995af(0x297)](),_0x57471b;}[_0x51aae4(0x28b)](_0x6adba){var _0x2393e6=_0x51aae4;return Object[_0x2393e6(0x22c)]?Object[_0x2393e6(0x22c)](_0x6adba):[];}[_0x51aae4(0x1ef)](_0xb13f3d){var _0x409162=_0x51aae4;return!!(_0xb13f3d&&_0x47d960[_0x409162(0x1ca)]&&this[_0x409162(0x223)](_0xb13f3d)===_0x409162(0x21f)&&_0xb13f3d[_0x409162(0x27d)]);}['_blacklistedProperty'](_0x1a1779,_0x501292,_0x29e2a5){var _0x175cef=_0x51aae4;return _0x29e2a5[_0x175cef(0x21d)]?typeof _0x1a1779[_0x501292]==_0x175cef(0x253):!0x1;}[_0x51aae4(0x1ed)](_0x4cdb60){var _0x388439=_0x51aae4,_0x566a0c='';return _0x566a0c=typeof _0x4cdb60,_0x566a0c===_0x388439(0x213)?this['_objectToString'](_0x4cdb60)===_0x388439(0x1dc)?_0x566a0c='array':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x202)?_0x566a0c='date':this[_0x388439(0x223)](_0x4cdb60)===_0x388439(0x24d)?_0x566a0c=_0x388439(0x1f3):_0x4cdb60===null?_0x566a0c='null':_0x4cdb60[_0x388439(0x20f)]&&(_0x566a0c=_0x4cdb60[_0x388439(0x20f)][_0x388439(0x25a)]||_0x566a0c):_0x566a0c===_0x388439(0x1b5)&&this[_0x388439(0x250)]&&_0x4cdb60 instanceof this[_0x388439(0x250)]&&(_0x566a0c=_0x388439(0x1e6)),_0x566a0c;}['_objectToString'](_0x12a36e){var _0x280626=_0x51aae4;return Object[_0x280626(0x1d9)][_0x280626(0x1ee)][_0x280626(0x281)](_0x12a36e);}['_isPrimitiveType'](_0x4dd78e){var _0x30f507=_0x51aae4;return _0x4dd78e===_0x30f507(0x1f8)||_0x4dd78e===_0x30f507(0x241)||_0x4dd78e===_0x30f507(0x1e5);}[_0x51aae4(0x264)](_0x3f7bc8){var _0x4fadad=_0x51aae4;return _0x3f7bc8==='Boolean'||_0x3f7bc8===_0x4fadad(0x21b)||_0x3f7bc8===_0x4fadad(0x23a);}[_0x51aae4(0x1de)](_0x1408ed,_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e){var _0x3881c6=this;return function(_0x22f694){var _0x1281ee=_0x4d24,_0x796d02=_0x5a8e0b['node'][_0x1281ee(0x285)],_0x1581db=_0x5a8e0b[_0x1281ee(0x1e8)]['index'],_0x472ccc=_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)];_0x5a8e0b[_0x1281ee(0x1e8)][_0x1281ee(0x296)]=_0x796d02,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=typeof _0x43725c==_0x1281ee(0x1e5)?_0x43725c:_0x22f694,_0x1408ed[_0x1281ee(0x212)](_0x3881c6['_property'](_0x8e8dd9,_0x5882e6,_0x43725c,_0x5a8e0b,_0x3c655e)),_0x5a8e0b[_0x1281ee(0x1e8)]['parent']=_0x472ccc,_0x5a8e0b['node'][_0x1281ee(0x1ff)]=_0x1581db;};}['_addObjectProperty'](_0x4d1d59,_0x4e3ee3,_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa){var _0x43c57a=_0x51aae4,_0x516743=this;return _0x4e3ee3[_0x43c57a(0x1be)+_0x23e3b7[_0x43c57a(0x1ee)]()]=!0x0,function(_0x51c0b8){var _0x22cf08=_0x43c57a,_0x42eec5=_0x366bab[_0x22cf08(0x1e8)]['current'],_0x237acd=_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)],_0xf2c09=_0x366bab['node']['parent'];_0x366bab['node']['parent']=_0x42eec5,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x51c0b8,_0x4d1d59[_0x22cf08(0x212)](_0x516743['_property'](_0xc1926d,_0x583497,_0x23e3b7,_0x366bab,_0x578dfa)),_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x296)]=_0xf2c09,_0x366bab[_0x22cf08(0x1e8)][_0x22cf08(0x1ff)]=_0x237acd;};}[_0x51aae4(0x26c)](_0x37a575,_0x49085f,_0x5d231c,_0x187a39,_0x152229){var _0x553b52=_0x51aae4,_0x2e6cd7=this;_0x152229||(_0x152229=function(_0x395faa,_0x34adff){return _0x395faa[_0x34adff];});var _0x4b41a6=_0x5d231c['toString'](),_0x5bdf24=_0x187a39[_0x553b52(0x271)]||{},_0x1d7982=_0x187a39[_0x553b52(0x222)],_0x25f62c=_0x187a39[_0x553b52(0x27a)];try{var _0x207856=this['_isMap'](_0x37a575),_0x16cab6=_0x4b41a6;_0x207856&&_0x16cab6[0x0]==='\\x27'&&(_0x16cab6=_0x16cab6[_0x553b52(0x1cd)](0x1,_0x16cab6[_0x553b52(0x23f)]-0x2));var _0x2b595b=_0x187a39['expressionsToEvaluate']=_0x5bdf24['_p_'+_0x16cab6];_0x2b595b&&(_0x187a39['depth']=_0x187a39[_0x553b52(0x222)]+0x1),_0x187a39[_0x553b52(0x27a)]=!!_0x2b595b;var _0x2a23d3=typeof _0x5d231c=='symbol',_0x30a31b={'name':_0x2a23d3||_0x207856?_0x4b41a6:this['_propertyName'](_0x4b41a6)};if(_0x2a23d3&&(_0x30a31b['symbol']=!0x0),!(_0x49085f===_0x553b52(0x244)||_0x49085f===_0x553b52(0x295))){var _0x2fc78c=this[_0x553b52(0x23e)](_0x37a575,_0x5d231c);if(_0x2fc78c&&(_0x2fc78c[_0x553b52(0x22d)]&&(_0x30a31b[_0x553b52(0x298)]=!0x0),_0x2fc78c[_0x553b52(0x1e1)]&&!_0x2b595b&&!_0x187a39[_0x553b52(0x1bd)]))return _0x30a31b[_0x553b52(0x1e7)]=!0x0,this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x18a672;try{_0x18a672=_0x152229(_0x37a575,_0x5d231c);}catch(_0x551470){return _0x30a31b={'name':_0x4b41a6,'type':_0x553b52(0x25f),'error':_0x551470[_0x553b52(0x1d0)]},this[_0x553b52(0x207)](_0x30a31b,_0x187a39),_0x30a31b;}var _0x375afe=this[_0x553b52(0x1ed)](_0x18a672),_0x65dc08=this[_0x553b52(0x225)](_0x375afe);if(_0x30a31b[_0x553b52(0x248)]=_0x375afe,_0x65dc08)this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x4c3409=_0x553b52;_0x30a31b[_0x4c3409(0x270)]=_0x18a672[_0x4c3409(0x1b4)](),!_0x2b595b&&_0x2e6cd7['_capIfString'](_0x375afe,_0x30a31b,_0x187a39,{});});else{var _0xfc3fca=_0x187a39[_0x553b52(0x279)]&&_0x187a39['level']<_0x187a39[_0x553b52(0x29b)]&&_0x187a39[_0x553b52(0x24c)][_0x553b52(0x216)](_0x18a672)<0x0&&_0x375afe!==_0x553b52(0x253)&&_0x187a39[_0x553b52(0x23c)]<_0x187a39['autoExpandLimit'];_0xfc3fca||_0x187a39['level']<_0x1d7982||_0x2b595b?(this[_0x553b52(0x239)](_0x30a31b,_0x18a672,_0x187a39,_0x2b595b||{}),this[_0x553b52(0x209)](_0x18a672,_0x30a31b)):this[_0x553b52(0x207)](_0x30a31b,_0x187a39,_0x18a672,function(){var _0x2ab07a=_0x553b52;_0x375afe===_0x2ab07a(0x206)||_0x375afe===_0x2ab07a(0x1b5)||(delete _0x30a31b[_0x2ab07a(0x270)],_0x30a31b[_0x2ab07a(0x1b6)]=!0x0);});}return _0x30a31b;}finally{_0x187a39[_0x553b52(0x271)]=_0x5bdf24,_0x187a39[_0x553b52(0x222)]=_0x1d7982,_0x187a39[_0x553b52(0x27a)]=_0x25f62c;}}['_capIfString'](_0x53dd7c,_0x1b3ea4,_0x491216,_0x4c2903){var _0x44104a=_0x51aae4,_0x480eee=_0x4c2903['strLength']||_0x491216['strLength'];if((_0x53dd7c==='string'||_0x53dd7c===_0x44104a(0x21b))&&_0x1b3ea4[_0x44104a(0x270)]){let _0x246eaa=_0x1b3ea4['value'][_0x44104a(0x23f)];_0x491216[_0x44104a(0x29a)]+=_0x246eaa,_0x491216[_0x44104a(0x29a)]>_0x491216[_0x44104a(0x25e)]?(_0x1b3ea4['capped']='',delete _0x1b3ea4[_0x44104a(0x270)]):_0x246eaa>_0x480eee&&(_0x1b3ea4[_0x44104a(0x1b6)]=_0x1b3ea4['value'][_0x44104a(0x1cd)](0x0,_0x480eee),delete _0x1b3ea4[_0x44104a(0x270)]);}}['_isMap'](_0x1271b3){var _0x121e09=_0x51aae4;return!!(_0x1271b3&&_0x47d960[_0x121e09(0x1b7)]&&this[_0x121e09(0x223)](_0x1271b3)===_0x121e09(0x249)&&_0x1271b3[_0x121e09(0x27d)]);}['_propertyName'](_0x463ce7){var _0x33b700=_0x51aae4;if(_0x463ce7[_0x33b700(0x26f)](/^\\d+$/))return _0x463ce7;var _0x40e686;try{_0x40e686=JSON['stringify'](''+_0x463ce7);}catch{_0x40e686='\\x22'+this[_0x33b700(0x223)](_0x463ce7)+'\\x22';}return _0x40e686['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x40e686=_0x40e686['substr'](0x1,_0x40e686['length']-0x2):_0x40e686=_0x40e686['replace'](/'/g,'\\x5c\\x27')[_0x33b700(0x238)](/\\\\\"/g,'\\x22')[_0x33b700(0x238)](/(^\"|\"$)/g,'\\x27'),_0x40e686;}[_0x51aae4(0x207)](_0x466e70,_0x5f1501,_0x4fc60a,_0x4fad2c){var _0x3871f9=_0x51aae4;this['_treeNodePropertiesBeforeFullValue'](_0x466e70,_0x5f1501),_0x4fad2c&&_0x4fad2c(),this[_0x3871f9(0x209)](_0x4fc60a,_0x466e70),this[_0x3871f9(0x227)](_0x466e70,_0x5f1501);}[_0x51aae4(0x229)](_0xa14bc4,_0x244522){var _0x24f631=_0x51aae4;this[_0x24f631(0x27f)](_0xa14bc4,_0x244522),this[_0x24f631(0x1f9)](_0xa14bc4,_0x244522),this[_0x24f631(0x218)](_0xa14bc4,_0x244522),this[_0x24f631(0x267)](_0xa14bc4,_0x244522);}[_0x51aae4(0x27f)](_0x574fea,_0x561fe9){}[_0x51aae4(0x1f9)](_0x8f8f59,_0x1dcac6){}[_0x51aae4(0x20c)](_0x13def9,_0x511419){}['_isUndefined'](_0xa4d6b5){var _0x48aba8=_0x51aae4;return _0xa4d6b5===this[_0x48aba8(0x215)];}[_0x51aae4(0x227)](_0x459431,_0x1c4011){var _0x3e5623=_0x51aae4;this[_0x3e5623(0x20c)](_0x459431,_0x1c4011),this[_0x3e5623(0x1e9)](_0x459431),_0x1c4011[_0x3e5623(0x1c8)]&&this[_0x3e5623(0x1c3)](_0x459431),this[_0x3e5623(0x1db)](_0x459431,_0x1c4011),this[_0x3e5623(0x27e)](_0x459431,_0x1c4011),this[_0x3e5623(0x22a)](_0x459431);}[_0x51aae4(0x209)](_0x37adca,_0x3b272d){var _0x49c3ad=_0x51aae4;let _0x2f3b69;try{_0x47d960['console']&&(_0x2f3b69=_0x47d960['console']['error'],_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=function(){}),_0x37adca&&typeof _0x37adca['length']==_0x49c3ad(0x1e5)&&(_0x3b272d['length']=_0x37adca[_0x49c3ad(0x23f)]);}catch{}finally{_0x2f3b69&&(_0x47d960[_0x49c3ad(0x1c4)][_0x49c3ad(0x22f)]=_0x2f3b69);}if(_0x3b272d[_0x49c3ad(0x248)]==='number'||_0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x23a)){if(isNaN(_0x3b272d[_0x49c3ad(0x270)]))_0x3b272d[_0x49c3ad(0x204)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];else switch(_0x3b272d[_0x49c3ad(0x270)]){case Number[_0x49c3ad(0x1e0)]:_0x3b272d[_0x49c3ad(0x24b)]=!0x0,delete _0x3b272d[_0x49c3ad(0x270)];break;case Number['NEGATIVE_INFINITY']:_0x3b272d[_0x49c3ad(0x201)]=!0x0,delete _0x3b272d['value'];break;case 0x0:this[_0x49c3ad(0x26a)](_0x3b272d[_0x49c3ad(0x270)])&&(_0x3b272d['negativeZero']=!0x0);break;}}else _0x3b272d[_0x49c3ad(0x248)]===_0x49c3ad(0x253)&&typeof _0x37adca['name']==_0x49c3ad(0x241)&&_0x37adca[_0x49c3ad(0x25a)]&&_0x3b272d[_0x49c3ad(0x25a)]&&_0x37adca['name']!==_0x3b272d['name']&&(_0x3b272d[_0x49c3ad(0x280)]=_0x37adca['name']);}[_0x51aae4(0x26a)](_0x5823dc){return 0x1/_0x5823dc===Number['NEGATIVE_INFINITY'];}[_0x51aae4(0x1c3)](_0x4f14fc){var _0x34b346=_0x51aae4;!_0x4f14fc[_0x34b346(0x235)]||!_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x23f)]||_0x4f14fc[_0x34b346(0x248)]==='array'||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1b7)||_0x4f14fc[_0x34b346(0x248)]===_0x34b346(0x1ca)||_0x4f14fc[_0x34b346(0x235)][_0x34b346(0x1f0)](function(_0x21d513,_0x1aca99){var _0x10bcf7=_0x34b346,_0x3eb18c=_0x21d513[_0x10bcf7(0x25a)][_0x10bcf7(0x1f2)](),_0x3b64f5=_0x1aca99[_0x10bcf7(0x25a)]['toLowerCase']();return _0x3eb18c<_0x3b64f5?-0x1:_0x3eb18c>_0x3b64f5?0x1:0x0;});}[_0x51aae4(0x1db)](_0x472fd6,_0x507653){var _0x4d3e82=_0x51aae4;if(!(_0x507653[_0x4d3e82(0x21d)]||!_0x472fd6[_0x4d3e82(0x235)]||!_0x472fd6[_0x4d3e82(0x235)][_0x4d3e82(0x23f)])){for(var _0x4ec0fa=[],_0xcfdc29=[],_0x15b014=0x0,_0x16cbad=_0x472fd6[_0x4d3e82(0x235)]['length'];_0x15b014<_0x16cbad;_0x15b014++){var _0xdf635e=_0x472fd6[_0x4d3e82(0x235)][_0x15b014];_0xdf635e['type']===_0x4d3e82(0x253)?_0x4ec0fa[_0x4d3e82(0x212)](_0xdf635e):_0xcfdc29[_0x4d3e82(0x212)](_0xdf635e);}if(!(!_0xcfdc29[_0x4d3e82(0x23f)]||_0x4ec0fa[_0x4d3e82(0x23f)]<=0x1)){_0x472fd6[_0x4d3e82(0x235)]=_0xcfdc29;var _0x442527={'functionsNode':!0x0,'props':_0x4ec0fa};this['_setNodeId'](_0x442527,_0x507653),this[_0x4d3e82(0x20c)](_0x442527,_0x507653),this['_setNodeExpandableState'](_0x442527),this[_0x4d3e82(0x267)](_0x442527,_0x507653),_0x442527['id']+='\\x20f',_0x472fd6['props']['unshift'](_0x442527);}}}[_0x51aae4(0x27e)](_0x587c2f,_0xb2ffee){}[_0x51aae4(0x1e9)](_0x5888ac){}[_0x51aae4(0x1eb)](_0x38cb6d){var _0x4a2e5f=_0x51aae4;return Array[_0x4a2e5f(0x21a)](_0x38cb6d)||typeof _0x38cb6d==_0x4a2e5f(0x213)&&this[_0x4a2e5f(0x223)](_0x38cb6d)===_0x4a2e5f(0x1dc);}[_0x51aae4(0x267)](_0x454780,_0x19f736){}[_0x51aae4(0x22a)](_0x2f5140){var _0x1a543b=_0x51aae4;delete _0x2f5140[_0x1a543b(0x221)],delete _0x2f5140[_0x1a543b(0x23d)],delete _0x2f5140[_0x1a543b(0x1c7)];}[_0x51aae4(0x218)](_0x494d42,_0x33ed0c){}}let _0x126961=new _0xc692a3(),_0x5586bf={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x533936={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x185555(_0x4dd1b9,_0x3906a7,_0x402dde,_0x691525,_0x3b2d7e,_0x4d4e9f){var _0x5c3e49=_0x51aae4;let _0xc691c0,_0x1e8e96;try{_0x1e8e96=_0x1c80ec(),_0xc691c0=_0x5601af[_0x3906a7],!_0xc691c0||_0x1e8e96-_0xc691c0['ts']>0x1f4&&_0xc691c0[_0x5c3e49(0x245)]&&_0xc691c0[_0x5c3e49(0x1d8)]/_0xc691c0[_0x5c3e49(0x245)]<0x64?(_0x5601af[_0x3906a7]=_0xc691c0={'count':0x0,'time':0x0,'ts':_0x1e8e96},_0x5601af[_0x5c3e49(0x230)]={}):_0x1e8e96-_0x5601af[_0x5c3e49(0x230)]['ts']>0x32&&_0x5601af['hits'][_0x5c3e49(0x245)]&&_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]/_0x5601af['hits'][_0x5c3e49(0x245)]<0x64&&(_0x5601af[_0x5c3e49(0x230)]={});let _0x70b3cb=[],_0x219da2=_0xc691c0[_0x5c3e49(0x220)]||_0x5601af['hits'][_0x5c3e49(0x220)]?_0x533936:_0x5586bf,_0x1c54ac=_0x1c899a=>{var _0x30bfe0=_0x5c3e49;let _0x28f6e0={};return _0x28f6e0[_0x30bfe0(0x235)]=_0x1c899a[_0x30bfe0(0x235)],_0x28f6e0[_0x30bfe0(0x1bb)]=_0x1c899a[_0x30bfe0(0x1bb)],_0x28f6e0[_0x30bfe0(0x1c2)]=_0x1c899a[_0x30bfe0(0x1c2)],_0x28f6e0['totalStrLength']=_0x1c899a['totalStrLength'],_0x28f6e0[_0x30bfe0(0x286)]=_0x1c899a[_0x30bfe0(0x286)],_0x28f6e0[_0x30bfe0(0x29b)]=_0x1c899a['autoExpandMaxDepth'],_0x28f6e0[_0x30bfe0(0x1c8)]=!0x1,_0x28f6e0['noFunctions']=!_0x3c7f88,_0x28f6e0['depth']=0x1,_0x28f6e0[_0x30bfe0(0x1d4)]=0x0,_0x28f6e0['expId']=_0x30bfe0(0x293),_0x28f6e0[_0x30bfe0(0x1d1)]='root_exp',_0x28f6e0[_0x30bfe0(0x279)]=!0x0,_0x28f6e0['autoExpandPreviousObjects']=[],_0x28f6e0[_0x30bfe0(0x23c)]=0x0,_0x28f6e0[_0x30bfe0(0x1bd)]=!0x0,_0x28f6e0[_0x30bfe0(0x29a)]=0x0,_0x28f6e0[_0x30bfe0(0x1e8)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x28f6e0;};for(var _0x47ef3f=0x0;_0x47ef3f<_0x3b2d7e[_0x5c3e49(0x23f)];_0x47ef3f++)_0x70b3cb[_0x5c3e49(0x212)](_0x126961[_0x5c3e49(0x239)]({'timeNode':_0x4dd1b9===_0x5c3e49(0x1d8)||void 0x0},_0x3b2d7e[_0x47ef3f],_0x1c54ac(_0x219da2),{}));if(_0x4dd1b9===_0x5c3e49(0x252)){let _0x5d9196=Error[_0x5c3e49(0x20e)];try{Error[_0x5c3e49(0x20e)]=0x1/0x0,_0x70b3cb['push'](_0x126961['serialize']({'stackNode':!0x0},new Error()[_0x5c3e49(0x23b)],_0x1c54ac(_0x219da2),{'strLength':0x1/0x0}));}finally{Error[_0x5c3e49(0x20e)]=_0x5d9196;}}return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':_0x70b3cb,'id':_0x3906a7,'context':_0x4d4e9f}]};}catch(_0x2799c0){return{'method':_0x5c3e49(0x256),'version':_0x4415ac,'args':[{'ts':_0x402dde,'session':_0x691525,'args':[{'type':_0x5c3e49(0x25f),'error':_0x2799c0&&_0x2799c0['message']}],'id':_0x3906a7,'context':_0x4d4e9f}]};}finally{try{if(_0xc691c0&&_0x1e8e96){let _0x4e0fa0=_0x1c80ec();_0xc691c0['count']++,_0xc691c0[_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0xc691c0['ts']=_0x4e0fa0,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]++,_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x1d8)]+=_0x5454c5(_0x1e8e96,_0x4e0fa0),_0x5601af['hits']['ts']=_0x4e0fa0,(_0xc691c0['count']>0x32||_0xc691c0['time']>0x64)&&(_0xc691c0[_0x5c3e49(0x220)]=!0x0),(_0x5601af[_0x5c3e49(0x230)][_0x5c3e49(0x245)]>0x3e8||_0x5601af[_0x5c3e49(0x230)]['time']>0x12c)&&(_0x5601af[_0x5c3e49(0x230)]['reduceLimits']=!0x0);}}catch{}}}return _0x185555;}((_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x93064b,_0x3f89fb,_0x26d56d,_0x2f8c9b,_0x1bea64)=>{var _0x3d998c=_0x438282;if(_0x575b60[_0x3d998c(0x260)])return _0x575b60['_console_ninja'];if(!Y(_0x575b60,_0x26d56d,_0x38d7c7))return _0x575b60[_0x3d998c(0x260)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x575b60[_0x3d998c(0x260)];let _0x5daf87=W(_0x575b60),_0x5ae4d3=_0x5daf87['elapsed'],_0x428f23=_0x5daf87[_0x3d998c(0x210)],_0x4420a1=_0x5daf87[_0x3d998c(0x275)],_0x5bfdb9={'hits':{},'ts':{}},_0x10ee1e=Q(_0x575b60,_0x2f8c9b,_0x5bfdb9,_0x93064b),_0x526587=_0x498c2e=>{_0x5bfdb9['ts'][_0x498c2e]=_0x428f23();},_0x842581=(_0x18dc32,_0x2f73a5)=>{var _0x465ad2=_0x3d998c;let _0x31c9c7=_0x5bfdb9['ts'][_0x2f73a5];if(delete _0x5bfdb9['ts'][_0x2f73a5],_0x31c9c7){let _0x27518d=_0x5ae4d3(_0x31c9c7,_0x428f23());_0x582191(_0x10ee1e(_0x465ad2(0x1d8),_0x18dc32,_0x4420a1(),_0x4eb954,[_0x27518d],_0x2f73a5));}},_0x4e5ab6=_0x37b253=>_0x14dd8e=>{var _0x2bb83b=_0x3d998c;try{_0x526587(_0x14dd8e),_0x37b253(_0x14dd8e);}finally{_0x575b60[_0x2bb83b(0x1c4)][_0x2bb83b(0x1d8)]=_0x37b253;}},_0x51e0f4=_0x4db519=>_0x2400ae=>{var _0x2d96cf=_0x3d998c;try{let [_0x2b9e82,_0x2fe789]=_0x2400ae['split'](_0x2d96cf(0x273));_0x842581(_0x2fe789,_0x2b9e82),_0x4db519(_0x2b9e82);}finally{_0x575b60['console'][_0x2d96cf(0x1ea)]=_0x4db519;}};_0x575b60[_0x3d998c(0x260)]={'consoleLog':(_0x454cc5,_0x191a93)=>{var _0x46a209=_0x3d998c;_0x575b60[_0x46a209(0x1c4)][_0x46a209(0x256)][_0x46a209(0x25a)]!=='disabledLog'&&_0x582191(_0x10ee1e(_0x46a209(0x256),_0x454cc5,_0x4420a1(),_0x4eb954,_0x191a93));},'consoleTrace':(_0x64feee,_0x5b1099)=>{var _0x963014=_0x3d998c;_0x575b60[_0x963014(0x1c4)][_0x963014(0x256)]['name']!==_0x963014(0x299)&&_0x582191(_0x10ee1e(_0x963014(0x252),_0x64feee,_0x4420a1(),_0x4eb954,_0x5b1099));},'consoleTime':()=>{var _0x14ba63=_0x3d998c;_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]=_0x4e5ab6(_0x575b60[_0x14ba63(0x1c4)][_0x14ba63(0x1d8)]);},'consoleTimeEnd':()=>{var _0x4f2ede=_0x3d998c;_0x575b60[_0x4f2ede(0x1c4)]['timeEnd']=_0x51e0f4(_0x575b60[_0x4f2ede(0x1c4)][_0x4f2ede(0x1ea)]);},'autoLog':(_0x3dd72f,_0x47b02b)=>{var _0x48e51d=_0x3d998c;_0x582191(_0x10ee1e(_0x48e51d(0x256),_0x47b02b,_0x4420a1(),_0x4eb954,[_0x3dd72f]));},'autoLogMany':(_0x348836,_0x511d66)=>{var _0x26c38a=_0x3d998c;_0x582191(_0x10ee1e(_0x26c38a(0x256),_0x348836,_0x4420a1(),_0x4eb954,_0x511d66));},'autoTrace':(_0x4e5b2e,_0x99ff03)=>{var _0x257c66=_0x3d998c;_0x582191(_0x10ee1e(_0x257c66(0x252),_0x99ff03,_0x4420a1(),_0x4eb954,[_0x4e5b2e]));},'autoTraceMany':(_0x4b519e,_0x357444)=>{var _0x27e275=_0x3d998c;_0x582191(_0x10ee1e(_0x27e275(0x252),_0x4b519e,_0x4420a1(),_0x4eb954,_0x357444));},'autoTime':(_0x18001c,_0x14ae9e,_0x192755)=>{_0x526587(_0x192755);},'autoTimeEnd':(_0x229242,_0x1b6d26,_0x4f0695)=>{_0x842581(_0x1b6d26,_0x4f0695);},'coverage':_0x4dec71=>{var _0x332507=_0x3d998c;_0x582191({'method':_0x332507(0x1df),'version':_0x93064b,'args':[{'id':_0x4dec71}]});}};let _0x582191=J(_0x575b60,_0x127395,_0x1af3aa,_0x3c797c,_0x38d7c7,_0x1bea64),_0x4eb954=_0x575b60[_0x3d998c(0x247)];return _0x575b60[_0x3d998c(0x260)];})(globalThis,_0x438282(0x240),_0x438282(0x258),_0x438282(0x233),_0x438282(0x228),'1.0.0',_0x438282(0x1d7),_0x438282(0x268),_0x438282(0x1cf),_0x438282(0x28e));function _0x3fef(){var _0x5da782=['logger\\x20websocket\\x20error','','hostname','5MwdXRE','onopen','_socket','root_exp_id','onmessage','Error','parent','pop','setter','disabledTrace','allStrLength','autoExpandMaxDepth','valueOf','undefined','capped','Map','then','next.js','cappedElements','elements','cappedProps','resolveGetters','_p_','hrtime','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','astro','strLength','_sortProps','console','_ws','_sendErrorMessage','_hasMapOnItsPath','sortProps','_allowedToSend','Set','defineProperty','method','substr','getOwnPropertyNames','','message','rootExpression','_maxConnectAttemptCount','75966dMQqWN','level','global','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','1696339250985','time','prototype','remix','_addFunctionsNode','[object\\x20Array]','_connectAttemptCount','_addProperty','coverage','POSITIVE_INFINITY','get','_inBrowser','host','_webSocketErrorDocsLink','number','HTMLAllCollection','getter','node','_setNodeExpandableState','timeEnd','_isArray','WebSocket','_type','toString','_isSet','sort','_reconnectTimeout','toLowerCase','bigint','unref','_disposeWebsocket','nodeModules','_addObjectProperty','boolean','_setNodeQueryPath','_attemptToReconnectShortly','Symbol','1262461SWpekW','_dateToString','hasOwnProperty','index','path','negativeInfinity','[object\\x20Date]','enumerable','nan','warn','null','_processTreeNodeResult','date','_additionalMetadata','_connected','_Symbol','_setNodeLabel','Buffer','stackTraceLimit','constructor','timeStamp','6606508aUvyXA','push','object','data','_undefined','indexOf','_connecting','_setNodeExpressionPath','create','isArray','String','384GYByLE','noFunctions','slice','[object\\x20Set]','reduceLimits','_hasSymbolPropertyOnItsPath','depth','_objectToString','includes','_isPrimitiveType','port','_treeNodePropertiesAfterFullValue','webpack','_treeNodePropertiesBeforeFullValue','_cleanNode','_regExpToString','getOwnPropertySymbols','set','join','error','hits','onclose','split',\"/home/anthony/.vscode/extensions/wallabyjs.console-ninja-0.0.228/node_modules\",'45844116NUkrJy','props','_connectToHostNow','RegExp','replace','serialize','Number','stack','autoExpandPropertyCount','_hasSetOnItsPath','_getOwnPropertyDescriptor','length','127.0.0.1','string','_quotedRegExp','catch','array','count','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','_console_ninja_session','type','[object\\x20Map]','gateway.docker.internal','positiveInfinity','autoExpandPreviousObjects','[object\\x20BigInt]','70FEqbsq','11EvqbgY','_HTMLAllCollection','_keyStrRegExp','trace','function','default','getWebSocketClass','log','reload','39415','versions','name','map','ws://','_allowedToConnectOnSend','totalStrLength','unknown','_console_ninja','15594mUeKWH','_WebSocket','11196264ZecJpY','_isPrimitiveWrapperType','_numberRegExp','concat','_setNodePermissions',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"fedora\",\"192.168.0.111\"],'959QMymZX','_isNegativeZero','test','_property','process','2324394fQIAwR','match','value','expressionsToEvaluate','send',':logPointId:','_WebSocketClass','now','getPrototypeOf','_blacklistedProperty','__es'+'Module','autoExpand','isExpressionToEvaluate','stringify','_consoleNinjaAllowedToStart','forEach','_addLoadNode','_setNodeId','funcName','call','url','parse','...','current','autoExpandLimit','location','bind','performance','readyState','_getOwnPropertySymbols','failed\\x20to\\x20connect\\x20to\\x20host:\\x20'];_0x3fef=function(){return _0x5da782;};return _0x3fef();}");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUQsUUFBUSxvREFBb0QsNkJBQTZCLHFDQUFxQyx3QkFBd0IsbUtBQW1LLHdDQUF3Qyx3QkFBd0IsNEpBQTRKLG9CQUFvQix3QkFBd0Isd0dBQXdHLHVCQUF1Qix3QkFBd0IsaUdBQWlHLG1DQUFtQyx3QkFBd0Isb0ZBQW9GLHVDQUF1Qyx3QkFBd0Isa0ZBQWtGLHFDQUFxQyx3QkFBd0Isb0ZBQW9GLHlDQUF5Qyx3QkFBd0Isa0ZBQWtGLDhDQUE4QyxzQkFBc0IsaURBQWlELGdDQUFnQyx3QkFBd0Isd0JBQXdCLFdBQVcsdURBQXVELGVBQWUsRUFBRSxLQUFLLG1IQUFtSCxvQ0FBb0MsOEpBQThKLG1CQUFtQix3dkJBQXd2QixpdUZBQWl1RixtQkFBbUIsbUJBQW1CLGtCQUFrQixJQUFJLFlBQVksdUJBQXVCLElBQUksMEJBQTBCLFdBQVcsVUFBVSx1QkFBdUIsSUFBSSw0QkFBNEIsV0FBVyxVQUFVLGlCQUFpQixJQUFJLHVCQUF1QixZQUFZLGlCQUFpQixJQUFJLDBCQUEwQixZQUFZLDJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3MvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Fzcy9jb250YWN0cy5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL21haW5Cb2R5LnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3MvbWVudS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL25hdkJhci5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Jlc2VydmF0aW9uLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3Mvc2Nyb2xsLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL2xpbmVFbmRpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy9wbGF0Zm9ybXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2xvcmVtLWlwc3VtL2Rpc3QvY29uc3RhbnRzL3VuaXRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L2NvbnN0YW50cy93b3Jkcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvTG9yZW1JcHN1bS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC9saWIvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvY2FwaXRhbGl6ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNOb2RlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvaXNSZWFjdE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL2lzV2luZG93cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvbG9yZW0taXBzdW0vZGlzdC91dGlsL21ha2VBcnJheU9mTGVuZ3RoLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9sb3JlbS1pcHN1bS9kaXN0L3V0aWwvbWFrZUFycmF5T2ZTdHJpbmdzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL2Fib3V0LnNjc3M/NjVjOCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc2Fzcy9jb250YWN0cy5zY3NzP2JjNjkiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3MvbWFpbkJvZHkuc2Nzcz84NTdjIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL21lbnUuc2Nzcz8yMTUyIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL25hdkJhci5zY3NzPzRhOTEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3MvcmVzZXJ2YXRpb24uc2Nzcz8yNmU3Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzP2ZjYjciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvYm9keS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvcmVzZXJ2YXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy92aWV3cy9Db250YWN0Vmlldy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvdmlld3MvSG9tZVZpZXcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hYm91dC13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XG59XG5cbi5hYm91dC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJlbnRvXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hYm91dC13cmFwcGVyIHAge1xuICBmb250LWZhbWlseTogXCJoYW5neWFrdVwiLCBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZy1pbmxpbmU6IDNyZW07XG59XG5cbi5oaXN0b3J5IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwidHJpYWxcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hYm91dC1jaGVmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5hYm91dC1jaGVmIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwidHJpYWxcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5hYm91dC1jaGVmIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwidHJpYWxcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LWNoZWYgLmNoZWYtaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4O1xufVxuXG4ubG9jYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvY2F0aW9uIC5sb2NhdGlvbi1pY29uIHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5sb2NhdGlvbiA+ICoge1xuICBwYWRkaW5nOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUlBO0VBQ0ksNERDTFE7RURNUixlQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQTtFQUNJLCtEQ2JXO0VEY1gsaUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQU1JO0VBQ0ksNERDckJJO0VEc0JKLGVBQUE7RUFFQSxrQkFBQTtBQUpSOztBQVFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQU9JO0VBQ0ksNERDbENJO0VEbUNKLGVBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FBTlI7QUFTSTtFQUNJLDREQzFDSTtFRDJDSixpQkFBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7QUFUUjtBQVdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQVRSOztBQVlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBVEo7QUFVSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBUlI7QUFXSTtFQUNJLFVBQUE7QUFUUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdzaXplcyc7XFxuXFxuLmFib3V0LXdyYXBwZXJ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLy8gcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxufVxcbi5hYm91dC10aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6ICRiZW50by1mb250O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmFib3V0LXdyYXBwZXIgcHtcXG4gICAgZm9udC1mYW1pbHk6ICRoYW5neWFrdS1mb250O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1pbmxpbmU6IDNyZW07XFxufVxcblxcbi5oaXN0b3J5e1xcbiAgICBoM3tcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdHJpYWwtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxufVxcblxcbi5hYm91dC1jaGVme1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICBoMntcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdHJpYWwtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIFxcbiAgICBoM3tcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdHJpYWwtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xcbiAgICAgICAgLy8gZm9udC1zdHlsZTogaXRhbGljO1xcblxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5jaGVmLWltYWdle1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDhweDtcXG4gICAgfVxcbn1cXG4ubG9jYXRpb257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC5sb2NhdGlvbi1pY29ue1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICB9XFxuICAgICY+KntcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgIH1cXG59XCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XFxuJGJyZWFrcG9pbnQ6IDc2OHB4O1xcbiRib2R5LXNpemU6ODAlO1xcblxcbiRiZW50by1mb250OidiZW50bycsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIDtcXG4kdHJpYWwtZm9udDondHJpYWwnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kaGFuZ3lha3UtZm9udDonaGFuZ3lha3UnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250YWN0cyB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29udGFjdHMgLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZ2FwOiAycmVtO1xufVxuLmNvbnRhY3RzIC5ib2R5ID4gKiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb250YWN0cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBREo7QUFJSTtFQUNJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQUhSO0FBTVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFKWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdzaXplcyc7XFxuXFxuLmNvbnRhY3Rze1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAvLyBtYXJnaW4taW5saW5lOiAtMTAwcmVtO1xcblxcbiAgICAuYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcblxcblxcbiAgICAgICAgJj4qe1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWFpbi1ib2R5IHtcbiAgbWFyZ2luOiAzcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctaW5saW5lOiAwcmVtO1xuICB3aWR0aDogODAlO1xuICBnYXA6IDVyZW07XG59XG5cbi5wIHtcbiAgZm9udC1mYW1pbHk6IFwidHJpYWxcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbkJvZHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQ0xPO0VETVAsU0FBQTtBQURKOztBQUdBO0VBQ0ksNERDTlE7RURPUixpQkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLHFCQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnc2l6ZXMnO1xcblxcbi5tYWluLWJvZHl7XFxuICAgIG1hcmdpbjogM3JlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWlubGluZTogMHJlbTtcXG4gICAgd2lkdGg6ICRib2R5LXNpemU7XFxuICAgIGdhcDogNXJlbTtcXG59XFxuLnB7XFxuICAgIGZvbnQtZmFtaWx5OiAkdHJpYWwtZm9udDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcblxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQpIHtcXG4gICAgLm1haW4tYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIFxcbn1cXG4uaW1ne1xcbiAgICBib3JkZXItcmFkaXVzOiAyLjVyZW07XFxuICAgIC8vIGFsaWduLXNlbGY6IHJpZ2h0O1xcbiAgICAvLyBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcXG4kYnJlYWtwb2ludDogNzY4cHg7XFxuJGJvZHktc2l6ZTo4MCU7XFxuXFxuJGJlbnRvLWZvbnQ6J2JlbnRvJywgJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgO1xcbiR0cmlhbC1mb250Oid0cmlhbCcsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiRoYW5neWFrdS1mb250OidoYW5neWFrdScsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1lbnVCb2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBnYXA6IDF2dztcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1lbnUtcGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOXB4IDM4cHgsIHJnYmEoMCwgMCwgMCwgMC4yMikgMHB4IDE1cHggMTJweDtcbn1cblxuLm1lbnUtcCB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtZmFtaWx5OiBcInRyaWFsXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5tZW51LXByaWNlIHtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4ubWVudS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcImJlbnRvXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogb3JhbmdlcmVkO1xuICB0ZXh0LXNoYWRvdzogMCAxMy4zNnB4IDguODk2cHggI2M0YjU5ZCwgMCAtMnB4IDFweCAjZmZmO1xufVxuXG4ubWVudS10b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tZW51LXNlY29uZCB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LXNlY29uZCB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgb3JhbmdlcmVkO1xufVxuXG4ubWVudS1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiaGFuZ3lha3VcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbjogMDtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvX3NpemVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLCtFQUFBO0FBREY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNERDM0JVO0FEd0JaOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLDREQ25DVTtFRG9DVixlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQURGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FBQUY7O0FBR0E7RUFDRSwrREMxRGE7RUQyRGIsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwic2l6ZXNcXFwiO1xcblxcbi5tZW51Qm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51LXBhcnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG59XFxuLm1lbnUtaXRlbTpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xcbiAgLy8gc2NhbGU6IDEuMDU7XFxufVxcblxcbi5tZW51LXAge1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LWZhbWlseTogJHRyaWFsLWZvbnQ7XFxufVxcbi5tZW51LXByaWNlIHtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICRiZW50by1mb250O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IG9yYW5nZXJlZDtcXG4gIHRleHQtc2hhZG93OiAwIDEzLjM2cHggOC44OTZweCAjYzRiNTlkLDAgLTJweCAxcHggI2ZmZjtcXG59XFxuXFxuLm1lbnUtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWVudS1zZWNvbmQge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZW51LXNlY29uZCB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBkb3R0ZWQgb3JhbmdlcmVkO1xcbn1cXG5cXG4ubWVudS1uYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiAkaGFuZ3lha3UtZm9udDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nLXJpZ2h0OiAgNXB4O1xcbn1cXG5cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcXG4kYnJlYWtwb2ludDogNzY4cHg7XFxuJGJvZHktc2l6ZTo4MCU7XFxuXFxuJGJlbnRvLWZvbnQ6J2JlbnRvJywgJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgO1xcbiR0cmlhbC1mb250Oid0cmlhbCcsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiRoYW5neWFrdS1mb250OidoYW5neWFrdScsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcbiAgZm9udC1mYW1pbHk6IFwiYmVudG9cIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjksIDAsIDAuNSk7XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbn1cbm5hdiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5uYXYgbGkge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5uYXYgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xuICB0cmFuc2xhdGU6IDA7XG4gIHNjYWxlOiAwIDE7XG4gIHRyYW5zaXRpb246IHNjYWxlIDMwMG1zLCB0cmFuc2xhdGUgNTAwbXM7XG59XG5uYXYgbGk6aG92ZXI6OmFmdGVyIHtcbiAgc2NhbGU6IDEgMTtcbn1cbm5hdiBsaTpob3Zlcixcbm5hdiBsaTpmb2N1cy12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IC5OYXYtYnJhbmQge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5uYXYgLk5hdi1icmFuZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFwiYmVudG9cIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1pdGVtIHtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL25hdkJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9fc2l6ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUdJLDREQ0VRO0VERFIsa0JBQUE7RUFDQSxVQ0ZPO0VER1AsYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUVBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUVBLHFEQUFBO0FBTEo7QUFPSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBTFI7QUFRSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFOUjtBQVNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFyQ1E7RUFzQ1IsVUFBQTtFQUNBLHdDQUFBO0FBUFI7QUFlSTtFQUNJLFVBQUE7QUFiUjtBQW9CSTs7RUFFSSxVQUFBO0VBRUEsZUFBQTtBQW5CUjtBQXNCSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFwQlI7QUFzQkk7RUFDSSxlQUFBO0FBcEJSOztBQXdCQTtFQUNJLDREQ3pFUTtFRDBFUixpQkFBQTtFQUNBLGlCQUFBO0FBckJKOztBQXdCQTtFQUNJO0lBQ0ksa0JBQUE7RUFyQk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCJfc2l6ZXNcXFwiO1xcblxcbm5hdiB7XFxuICAgICR3aWR0aDogMDtcXG4gICAgJHRyYW5zbGF0ZTogMDtcXG4gICAgZm9udC1mYW1pbHk6ICRiZW50by1mb250O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAkYm9keS1zaXplO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMyLCAyMzIsIDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSw2OSwwLCAuNSk7XFxuICAgIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXG5cXG4gICAgdWwge1xcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgbGk6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaGVpZ2h0OiAzcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgICAgICB0cmFuc2xhdGU6ICR0cmFuc2xhdGU7XFxuICAgICAgICBzY2FsZTogJHdpZHRoIDE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAzMDBtcywgdHJhbnNsYXRlIDUwMG1zO1xcbiAgICB9XFxuXFxuICAgIGxpOmhhcygrIDpob3Zlcikge1xcbiAgICAgICAgLy8gICAgY29sb3I6IHJlZDtcXG4gICAgICAgICR0cmFuc2xhdGU6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgIHNjYWxlOiAxIDE7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIrbGkge1xcbiAgICAgICAgJHRyYW5zbGF0ZTogLTEwMCU7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIsXFxuICAgIGxpOmZvY3VzLXZpc2libGUge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICR3aWR0aDogMTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuTmF2LWJyYW5kIHtcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB9XFxuICAgIC5OYXYtYnJhbmQ6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgZm9udC1mYW1pbHk6ICRiZW50by1mb250O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCkge1xcbiAgICAubmF2LWl0ZW17XFxuICAgICAgICBmb250LXNpemU6IGluaXRpYWw7XFxuICAgIH1cXG59XCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XFxuJGJyZWFrcG9pbnQ6IDc2OHB4O1xcbiRib2R5LXNpemU6ODAlO1xcblxcbiRiZW50by1mb250OidiZW50bycsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIDtcXG4kdHJpYWwtZm9udDondHJpYWwnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kaGFuZ3lha3UtZm9udDonaGFuZ3lha3UnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yZXMge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJlcyAucmVzZXJ2YXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBhc3BlY3QtcmF0aW86IDEvMS4yO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBhZGRpbmctaW5saW5lOiAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm94LXNoYWRvdzogb3JhbmdlcmVkIDBweCAzcHggOHB4O1xufVxuLnJlcyAuZm9ybS1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ucmVzIC5mb3JtLWJvZHkgPiAqIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLnJlcyAubGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiYmVudG9cIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLnJlcyAucmVxdWVzdCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuLnJlcyAuYnV0dG9uIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiYmVudG9cIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xuICBjb2xvcjogb3JhbmdlcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzIsIDIzMik7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbi5yZXMgLmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XG59XG4ucmVzIDo6cGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogXCJ0cmlhbFwiLCBcIlJvYm90b1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5yZXMgLnNlbGVjdG9yIHtcbiAgZm9udC1mYW1pbHk6IFwiaGFuZ3lha3VcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xufVxuLnJlcyAub3B0aW9ucyB7XG4gIGZvbnQtZmFtaWx5OiBcInRyaWFsXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9yZXNlcnZhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9fc2l6ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGFBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsb0JBQUE7RUFDQSxpQ0FBQTtBQUpSO0FBTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUpSO0FBTVE7RUFDSSxjQUFBO0VBRUEscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxaO0FBU0k7RUFDSSw0RENuQ0k7RURvQ0osa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQVBSO0FBU0k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNERDakRJO0VEa0RKLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0RUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFFQSxrQkFBQTtBQVJSO0FBVUk7RUFDSSxlQUFBO0VBQ0EsZ0ZBQUE7QUFSUjtBQVVJO0VBQ0ksNERDaEVJO0VEaUVKLGlCQUFBO0FBUlI7QUFVSTtFQUNJLCtEQ25FTztFRG9FUCxpQkFBQTtFQUNBLG9CQUFBO0FBUlI7QUFVSTtFQUNJLDREQ3pFSTtBRGlFWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdzaXplcyc7XFxuXFxuLnJlc3tcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgLy8gaGVpZ2h0OiA5MHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAucmVzZXJ2YXRpb257XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDEvMS4yO1xcbiAgICAgICAgLy8gYm9yZGVyLWNvbG9yOiBzaWx2ZXI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDNyZW07XFxuICAgICAgICAvLyBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgICAgICBib3gtc2hhZG93OiBvcmFuZ2VyZWQgMHB4IDNweCA4cHg7XFxuICAgIH1cXG4gICAgLmZvcm0tYm9keXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgJj4qe1xcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogMjByZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubGVnZW5ke1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICRiZW50by1mb250O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICB9XFxuICAgIC5yZXF1ZXN0e1xcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICB9XFxuICAgIC5idXR0b257XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkYmVudG8tZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxuICAgICAgICBjb2xvcjogb3JhbmdlcmVkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzMiwgMjMyLCAxKTtcXG5cXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcXG4gICAgfVxcbiAgICAuYnV0dG9uOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggMTRweCAyOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxMHB4IDEwcHg7XFxuICAgIH1cXG4gICAgOjpwbGFjZWhvbGRlcntcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkdHJpYWwtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuICAgIC5zZWxlY3RvcntcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkaGFuZ3lha3UtZm9udDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxuICAgIH1cXG4gICAgLm9wdGlvbnN7XFxuICAgICAgICBmb250LWZhbWlseTogJHRyaWFsLWZvbnQ7XFxuICAgIH1cXG59XCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XFxuJGJyZWFrcG9pbnQ6IDc2OHB4O1xcbiRib2R5LXNpemU6ODAlO1xcblxcbiRiZW50by1mb250OidiZW50bycsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIDtcXG4kdHJpYWwtZm9udDondHJpYWwnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kaGFuZ3lha3UtZm9udDonaGFuZ3lha3UnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb250ZW50IHtcbiAgaGVpZ2h0OiAzMHJlbTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcbn1cblxuLmltYWdlLXNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC45cyBjdWJpYy1iZXppZXIoMC41NywgMC4yMSwgMC42OSwgMS4yNSk7XG59XG5cbi53aW5kb3cge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDMwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDE5cHggMzhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTVweCAxMnB4O1xufVxuXG4ubmF2TGlua3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5hdkxpbmtzIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5saW5rcyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xufVxuXG4ubGlua3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjAwO1xufVxuXG4ubGlua3MuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmUtd2lkdGg6IDdweDtcbn1cblxuLmxpbmtzLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgcGFkZGluZzogM3JlbSAxNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDExdncgLSAwcHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTN2dyAtIDlweCk7XG4gIH1cbn1cbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXG4ubGVmdDpob3Zlcixcbi5yaWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3Njcm9sbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9fc2l6ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFDRk87RURHUCxZQ0RTO0VERVQsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNDLCtEQUFBO0FBREg7O0FBS0E7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSwrRUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSw4QkFBQTtFQUpGO0FBQ0Y7QUFPQSx5RUFBQTtBQUNBOztFQUVFLG9DQUFBO0FBTEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnc2l6ZXMnO1xcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogJGhlaWdodDtcXG4gIHdpZHRoOiAkaW1nLXdpZHRoO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5pbWFnZS1zbGlkZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOXMgY3ViaWMtYmV6aWVyKC41NywuMjEsLjY5LDEuMjUpO1xcbiAgXFxufVxcblxcbi53aW5kb3cge1xcblxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgaGVpZ2h0OiAoJGhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG5cXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMTlweCAzOHB4LCByZ2JhKDAsIDAsIDAsIDAuMjIpIDBweCAxNXB4IDEycHg7XFxufVxcblxcbi5uYXZMaW5rcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogKCR3aWR0aCk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uYXZMaW5rcyB1bCB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBib3JkZXI6IGJsYWNrIDFweCBzb2xpZDtcXG59XFxuXFxuLmxpbmtzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxufVxcblxcbi5saW5rcy5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgb3V0bGluZS13aWR0aDogN3B4O1xcbn1cXG5cXG4ubGlua3MuYWN0aXZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAtMTEwcHg7XFxuICBwYWRkaW5nOiAzcmVtIDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTF2dyAtIDBweCk7XFxuXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAkYnJlYWtwb2ludCl7XFxuICAucmlnaHR7XFxuICAgIG1hcmdpbi1yaWdodDogY2FsYygxM3Z3IC0gOXB4KTtcXG4gIH1cXG59XFxuXFxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cXG4ubGVmdDpob3ZlcixcXG4ucmlnaHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbn1cIixcIiRib2R5LXBhZGRpbmc6IDIwcHg7XFxuJGhlaWdodDogMzByZW07XFxuJHdpZHRoOiA4MCU7XFxuJGltZy13aWR0aDoxMDB2dztcXG4kYnJlYWtwb2ludDogNzY4cHg7XFxuJGJvZHktc2l6ZTo4MCU7XFxuXFxuJGJlbnRvLWZvbnQ6J2JlbnRvJywgJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgO1xcbiR0cmlhbC1mb250Oid0cmlhbCcsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiRoYW5neWFrdS1mb250OidoYW5neWFrdScsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvaGFuZ3lha3UtZm9udC9IYW5neWFrdS15d3pNbS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9qYXBhbi1iZW50by12ZXJzaW9uLWZvbnQvSmFwYW5CZW50b0RlbW9WZXJzaW9uUmVndWxhci1uUldBSi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9xYXNlbmdpLXRyaWFsLWZvbnQvUWFzZW5naVRyaWFsUmVndWxhci1HTzkxTy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiaGFuZ3lha3VcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJiZW50b1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRyaWFsXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWlubGluZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDYwcHggNDBweCAtN3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm5vdC12aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL19zaXplcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0ksdUJBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9BO0VBQ0ksb0JBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQVFBO0VBQ0ksb0JBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVNBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JDOUJXO0VEK0JYLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQ2xDTztFRG1DUCxrQkFBQTtFQUNBLGdCQUFBO0VBR0EsaURBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FBVEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWxAMSZkaXNwbGF5PXN3YXAnKTtcXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCAnc2l6ZXMnO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2hhbmd5YWt1JztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2hhbmd5YWt1LWZvbnQvSGFuZ3lha3UteXd6TW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2JlbnRvJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL2phcGFuLWJlbnRvLXZlcnNpb24tZm9udC9KYXBhbkJlbnRvRGVtb1ZlcnNpb25SZWd1bGFyLW5SV0FKLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0cmlhbCc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9xYXNlbmdpLXRyaWFsLWZvbnQvUWFzZW5naVRyaWFsUmVndWxhci1HTzkxTy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1pbmxpbmU6ICRib2R5LXBhZGRpbmc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAkYm9keS1zaXplO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHg7XFxuICAgIC8vIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40NSkgMHB4IDI1cHggMjBweCAtMjBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA2MHB4IDQwcHggLTdweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxufVxcbi5ub3QtdmlzaWJsZXtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsXCIkYm9keS1wYWRkaW5nOiAyMHB4O1xcbiRoZWlnaHQ6IDMwcmVtO1xcbiR3aWR0aDogODAlO1xcbiRpbWctd2lkdGg6MTAwdnc7XFxuJGJyZWFrcG9pbnQ6IDc2OHB4O1xcbiRib2R5LXNpemU6ODAlO1xcblxcbiRiZW50by1mb250OidiZW50bycsICdSb2JvdG8nLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIDtcXG4kdHJpYWwtZm9udDondHJpYWwnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4kaGFuZ3lha3UtZm9udDonaGFuZ3lha3UnLCAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gZXhwb3J0cy5GT1JNQVRfSFRNTCA9IGV4cG9ydHMuRk9STUFUUyA9IHZvaWQgMDtcbnZhciBGT1JNQVRfSFRNTCA9IFwiaHRtbFwiO1xuZXhwb3J0cy5GT1JNQVRfSFRNTCA9IEZPUk1BVF9IVE1MO1xudmFyIEZPUk1BVF9QTEFJTiA9IFwicGxhaW5cIjtcbmV4cG9ydHMuRk9STUFUX1BMQUlOID0gRk9STUFUX1BMQUlOO1xudmFyIEZPUk1BVFMgPSBbRk9STUFUX0hUTUwsIEZPUk1BVF9QTEFJTl07XG5leHBvcnRzLkZPUk1BVFMgPSBGT1JNQVRTO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpHVDFKTlFWUmZTRlJOVENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSWtaUFVrMUJWRk1pWFN3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZZMjl1YzNSaGJuUnpMMlp2Y20xaGRITXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdOdmJuTjBJRVpQVWsxQlZGOUlWRTFNSUQwZ1hDSm9kRzFzWENJN1hISmNibVY0Y0c5eWRDQmpiMjV6ZENCR1QxSk5RVlJmVUV4QlNVNGdQU0JjSW5Cc1lXbHVYQ0k3WEhKY2JtVjRjRzl5ZENCamIyNXpkQ0JHVDFKTlFWUlRJRDBnVzBaUFVrMUJWRjlJVkUxTUxDQkdUMUpOUVZSZlVFeEJTVTVkTzF4eVhHNWxlSEJ2Y25RZ2RIbHdaU0JNYjNKbGJVWnZjbTFoZENBOUlGd2ljR3hoYVc1Y0lpQjhJRndpYUhSdGJGd2lPMXh5WEc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZQTEVsQlFVMUJMRmRCUVZjc1IwRkJSeXhOUVVGd1FqczdRVUZEUVN4SlFVRk5ReXhaUVVGWkxFZEJRVWNzVDBGQmNrSTdPMEZCUTBFc1NVRkJUVU1zVDBGQlR5eEhRVUZITEVOQlFVTkdMRmRCUVVRc1JVRkJZME1zV1VGQlpDeERRVUZvUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5MSU5FX0VORElOR1MgPSB2b2lkIDA7XG52YXIgTElORV9FTkRJTkdTID0ge1xuICBQT1NJWDogXCJcXG5cIixcbiAgV0lOMzI6IFwiXFxyXFxuXCJcbn07XG5leHBvcnRzLkxJTkVfRU5ESU5HUyA9IExJTkVfRU5ESU5HUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKTVNVNUZYMFZPUkVsT1IxTWlMQ0pRVDFOSldDSXNJbGRKVGpNeUlsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJOdmJuTjBZVzUwY3k5c2FXNWxSVzVrYVc1bmN5NTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdURWxPUlY5RlRrUkpUa2RUSUQwZ2UxeHlYRzRnSUZCUFUwbFlPaUJjSWx4Y2Jsd2lMRnh5WEc0Z0lGZEpUak15T2lCY0lseGNjbHhjYmx3aUxGeHlYRzU5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGUExFbEJRVTFCTEZsQlFWa3NSMEZCUnp0RlFVTXhRa01zUzBGQlN5eEZRVUZGTEVsQlJHMUNPMFZCUlRGQ1F5eExRVUZMTEVWQlFVVTdRVUZHYlVJc1EwRkJja0lpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TVVBQT1JURURfUExBVEZPUk1TID0gdm9pZCAwO1xudmFyIFNVUFBPUlRFRF9QTEFURk9STVMgPSB7XG4gIERBUldJTjogXCJkYXJ3aW5cIixcbiAgTElOVVg6IFwibGludXhcIixcbiAgV0lOMzI6IFwid2luMzJcIlxufTtcbmV4cG9ydHMuU1VQUE9SVEVEX1BMQVRGT1JNUyA9IFNVUFBPUlRFRF9QTEFURk9STVM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJaXdpUkVGU1YwbE9JaXdpVEVsT1ZWZ2lMQ0pYU1U0ek1pSmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmNHeGhkR1p2Y20xekxuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQlRWVkJRVDFKVVJVUmZVRXhCVkVaUFVrMVRJRDBnZTF4eVhHNGdJRVJCVWxkSlRqb2dYQ0prWVhKM2FXNWNJaXhjY2x4dUlDQk1TVTVWV0RvZ1hDSnNhVzUxZUZ3aUxGeHlYRzRnSUZkSlRqTXlPaUJjSW5kcGJqTXlYQ0lzWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVThzU1VGQlRVRXNiVUpCUVcxQ0xFZEJRVWM3UlVGRGFrTkRMRTFCUVUwc1JVRkJSU3hSUVVSNVFqdEZRVVZxUTBNc1MwRkJTeXhGUVVGRkxFOUJSakJDTzBWQlIycERReXhMUVVGTExFVkJRVVU3UVVGSU1FSXNRMEZCTlVJaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IGV4cG9ydHMuVU5JVF9XT1JEID0gZXhwb3J0cy5VTklUX1NFTlRFTkNFUyA9IGV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IGV4cG9ydHMuVU5JVF9QQVJBR1JBUEhTID0gZXhwb3J0cy5VTklUX1BBUkFHUkFQSCA9IGV4cG9ydHMuVU5JVFMgPSB2b2lkIDA7XG52YXIgVU5JVF9XT1JEUyA9IFwid29yZHNcIjtcbmV4cG9ydHMuVU5JVF9XT1JEUyA9IFVOSVRfV09SRFM7XG52YXIgVU5JVF9XT1JEID0gXCJ3b3JkXCI7XG5leHBvcnRzLlVOSVRfV09SRCA9IFVOSVRfV09SRDtcbnZhciBVTklUX1NFTlRFTkNFUyA9IFwic2VudGVuY2VzXCI7XG5leHBvcnRzLlVOSVRfU0VOVEVOQ0VTID0gVU5JVF9TRU5URU5DRVM7XG52YXIgVU5JVF9TRU5URU5DRSA9IFwic2VudGVuY2VcIjtcbmV4cG9ydHMuVU5JVF9TRU5URU5DRSA9IFVOSVRfU0VOVEVOQ0U7XG52YXIgVU5JVF9QQVJBR1JBUEhTID0gXCJwYXJhZ3JhcGhzXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIUyA9IFVOSVRfUEFSQUdSQVBIUztcbnZhciBVTklUX1BBUkFHUkFQSCA9IFwicGFyYWdyYXBoXCI7XG5leHBvcnRzLlVOSVRfUEFSQUdSQVBIID0gVU5JVF9QQVJBR1JBUEg7XG52YXIgVU5JVFMgPSBbVU5JVF9XT1JEUywgVU5JVF9XT1JELCBVTklUX1NFTlRFTkNFUywgVU5JVF9TRU5URU5DRSwgVU5JVF9QQVJBR1JBUEhTLCBVTklUX1BBUkFHUkFQSF07XG5leHBvcnRzLlVOSVRTID0gVU5JVFM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SlZUa2xVWDFkUFVrUlRJaXdpVlU1SlZGOVhUMUpFSWl3aVZVNUpWRjlUUlU1VVJVNURSVk1pTENKVlRrbFVYMU5GVGxSRlRrTkZJaXdpVlU1SlZGOVFRVkpCUjFKQlVFaFRJaXdpVlU1SlZGOVFRVkpCUjFKQlVFZ2lMQ0pWVGtsVVV5SmRMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNXpkR0Z1ZEhNdmRXNXBkSE11ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHTnZibk4wSUZWT1NWUmZWMDlTUkZNZ1BTQmNJbmR2Y21SelhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlYVDFKRUlEMGdYQ0ozYjNKa1hDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlUUlU1VVJVNURSVk1nUFNCY0luTmxiblJsYm1ObGMxd2lPMXh1Wlhod2IzSjBJR052Ym5OMElGVk9TVlJmVTBWT1ZFVk9RMFVnUFNCY0luTmxiblJsYm1ObFhDSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ZVNUpWRjlRUVZKQlIxSkJVRWhUSUQwZ1hDSndZWEpoWjNKaGNHaHpYQ0k3WEc1bGVIQnZjblFnWTI5dWMzUWdWVTVKVkY5UVFWSkJSMUpCVUVnZ1BTQmNJbkJoY21GbmNtRndhRndpTzF4dVpYaHdiM0owSUdOdmJuTjBJRlZPU1ZSVElEMGdXMXh1SUNCVlRrbFVYMWRQVWtSVExGeHVJQ0JWVGtsVVgxZFBVa1FzWEc0Z0lGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4dUlDQlZUa2xVWDFORlRsUkZUa05GTEZ4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hHNGdJRlZPU1ZSZlVFRlNRVWRTUVZCSUxGeHVYVHRjYm1WNGNHOXlkQ0IwZVhCbElFeHZjbVZ0Vlc1cGRDQTlJRndpZDI5eVpITmNJaUI4SUZ3aWQyOXlaRndpSUh3Z1hDSnpaVzUwWlc1alpYTmNJaUI4SUZ3aWMyVnVkR1Z1WTJWY0lpQjhJRndpY0dGeVlXZHlZWEJvYzF3aUlId2dYQ0p3WVhKaFozSmhjR2hjSWp0Y2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVU4c1NVRkJUVUVzVlVGQlZTeEhRVUZITEU5QlFXNUNPenRCUVVOQkxFbEJRVTFETEZOQlFWTXNSMEZCUnl4TlFVRnNRanM3UVVGRFFTeEpRVUZOUXl4alFVRmpMRWRCUVVjc1YwRkJka0k3TzBGQlEwRXNTVUZCVFVNc1lVRkJZU3hIUVVGSExGVkJRWFJDT3p0QlFVTkJMRWxCUVUxRExHVkJRV1VzUjBGQlJ5eFpRVUY0UWpzN1FVRkRRU3hKUVVGTlF5eGpRVUZqTEVkQlFVY3NWMEZCZGtJN08wRkJRMEVzU1VGQlRVTXNTMEZCU3l4SFFVRkhMRU5CUTI1Q1RpeFZRVVJ0UWl4RlFVVnVRa01zVTBGR2JVSXNSVUZIYmtKRExHTkJTRzFDTEVWQlNXNUNReXhoUVVwdFFpeEZRVXR1UWtNc1pVRk1iVUlzUlVGTmJrSkRMR05CVG0xQ0xFTkJRV1FpZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XT1JEUyA9IHZvaWQgMDtcbnZhciBXT1JEUyA9IFtcImFkXCIsIFwiYWRpcGlzaWNpbmdcIiwgXCJhbGlxdWFcIiwgXCJhbGlxdWlwXCIsIFwiYW1ldFwiLCBcImFuaW1cIiwgXCJhdXRlXCIsIFwiY2lsbHVtXCIsIFwiY29tbW9kb1wiLCBcImNvbnNlY3RldHVyXCIsIFwiY29uc2VxdWF0XCIsIFwiY3VscGFcIiwgXCJjdXBpZGF0YXRcIiwgXCJkZXNlcnVudFwiLCBcImRvXCIsIFwiZG9sb3JcIiwgXCJkb2xvcmVcIiwgXCJkdWlzXCIsIFwiZWFcIiwgXCJlaXVzbW9kXCIsIFwiZWxpdFwiLCBcImVuaW1cIiwgXCJlc3NlXCIsIFwiZXN0XCIsIFwiZXRcIiwgXCJldVwiLCBcImV4XCIsIFwiZXhjZXB0ZXVyXCIsIFwiZXhlcmNpdGF0aW9uXCIsIFwiZnVnaWF0XCIsIFwiaWRcIiwgXCJpblwiLCBcImluY2lkaWR1bnRcIiwgXCJpcHN1bVwiLCBcImlydXJlXCIsIFwibGFib3JlXCIsIFwibGFib3Jpc1wiLCBcImxhYm9ydW1cIiwgXCJMb3JlbVwiLCBcIm1hZ25hXCIsIFwibWluaW1cIiwgXCJtb2xsaXRcIiwgXCJuaXNpXCIsIFwibm9uXCIsIFwibm9zdHJ1ZFwiLCBcIm51bGxhXCIsIFwib2NjYWVjYXRcIiwgXCJvZmZpY2lhXCIsIFwicGFyaWF0dXJcIiwgXCJwcm9pZGVudFwiLCBcInF1aVwiLCBcInF1aXNcIiwgXCJyZXByZWhlbmRlcml0XCIsIFwic2ludFwiLCBcInNpdFwiLCBcInN1bnRcIiwgXCJ0ZW1wb3JcIiwgXCJ1bGxhbWNvXCIsIFwidXRcIiwgXCJ2ZWxpdFwiLCBcInZlbmlhbVwiLCBcInZvbHVwdGF0ZVwiXTtcbmV4cG9ydHMuV09SRFMgPSBXT1JEUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKWFQxSkVVeUpkTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWpiMjV6ZEdGdWRITXZkMjl5WkhNdWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElGZFBVa1JUSUQwZ1cxeHlYRzRnSUZ3aVlXUmNJaXhjY2x4dUlDQmNJbUZrYVhCcGMybGphVzVuWENJc1hISmNiaUFnWENKaGJHbHhkV0ZjSWl4Y2NseHVJQ0JjSW1Gc2FYRjFhWEJjSWl4Y2NseHVJQ0JjSW1GdFpYUmNJaXhjY2x4dUlDQmNJbUZ1YVcxY0lpeGNjbHh1SUNCY0ltRjFkR1ZjSWl4Y2NseHVJQ0JjSW1OcGJHeDFiVndpTEZ4eVhHNGdJRndpWTI5dGJXOWtiMXdpTEZ4eVhHNGdJRndpWTI5dWMyVmpkR1YwZFhKY0lpeGNjbHh1SUNCY0ltTnZibk5sY1hWaGRGd2lMRnh5WEc0Z0lGd2lZM1ZzY0dGY0lpeGNjbHh1SUNCY0ltTjFjR2xrWVhSaGRGd2lMRnh5WEc0Z0lGd2laR1Z6WlhKMWJuUmNJaXhjY2x4dUlDQmNJbVJ2WENJc1hISmNiaUFnWENKa2IyeHZjbHdpTEZ4eVhHNGdJRndpWkc5c2IzSmxYQ0lzWEhKY2JpQWdYQ0prZFdselhDSXNYSEpjYmlBZ1hDSmxZVndpTEZ4eVhHNGdJRndpWldsMWMyMXZaRndpTEZ4eVhHNGdJRndpWld4cGRGd2lMRnh5WEc0Z0lGd2laVzVwYlZ3aUxGeHlYRzRnSUZ3aVpYTnpaVndpTEZ4eVhHNGdJRndpWlhOMFhDSXNYSEpjYmlBZ1hDSmxkRndpTEZ4eVhHNGdJRndpWlhWY0lpeGNjbHh1SUNCY0ltVjRYQ0lzWEhKY2JpQWdYQ0psZUdObGNIUmxkWEpjSWl4Y2NseHVJQ0JjSW1WNFpYSmphWFJoZEdsdmJsd2lMRnh5WEc0Z0lGd2lablZuYVdGMFhDSXNYSEpjYmlBZ1hDSnBaRndpTEZ4eVhHNGdJRndpYVc1Y0lpeGNjbHh1SUNCY0ltbHVZMmxrYVdSMWJuUmNJaXhjY2x4dUlDQmNJbWx3YzNWdFhDSXNYSEpjYmlBZ1hDSnBjblZ5WlZ3aUxGeHlYRzRnSUZ3aWJHRmliM0psWENJc1hISmNiaUFnWENKc1lXSnZjbWx6WENJc1hISmNiaUFnWENKc1lXSnZjblZ0WENJc1hISmNiaUFnWENKTWIzSmxiVndpTEZ4eVhHNGdJRndpYldGbmJtRmNJaXhjY2x4dUlDQmNJbTFwYm1sdFhDSXNYSEpjYmlBZ1hDSnRiMnhzYVhSY0lpeGNjbHh1SUNCY0ltNXBjMmxjSWl4Y2NseHVJQ0JjSW01dmJsd2lMRnh5WEc0Z0lGd2libTl6ZEhKMVpGd2lMRnh5WEc0Z0lGd2liblZzYkdGY0lpeGNjbHh1SUNCY0ltOWpZMkZsWTJGMFhDSXNYSEpjYmlBZ1hDSnZabVpwWTJsaFhDSXNYSEpjYmlBZ1hDSndZWEpwWVhSMWNsd2lMRnh5WEc0Z0lGd2ljSEp2YVdSbGJuUmNJaXhjY2x4dUlDQmNJbkYxYVZ3aUxGeHlYRzRnSUZ3aWNYVnBjMXdpTEZ4eVhHNGdJRndpY21Wd2NtVm9aVzVrWlhKcGRGd2lMRnh5WEc0Z0lGd2ljMmx1ZEZ3aUxGeHlYRzRnSUZ3aWMybDBYQ0lzWEhKY2JpQWdYQ0p6ZFc1MFhDSXNYSEpjYmlBZ1hDSjBaVzF3YjNKY0lpeGNjbHh1SUNCY0luVnNiR0Z0WTI5Y0lpeGNjbHh1SUNCY0luVjBYQ0lzWEhKY2JpQWdYQ0oyWld4cGRGd2lMRnh5WEc0Z0lGd2lkbVZ1YVdGdFhDSXNYSEpjYmlBZ1hDSjJiMngxY0hSaGRHVmNJaXhjY2x4dVhUdGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJUeXhKUVVGTlFTeExRVUZMTEVkQlFVY3NRMEZEYmtJc1NVRkViVUlzUlVGRmJrSXNZVUZHYlVJc1JVRkhia0lzVVVGSWJVSXNSVUZKYmtJc1UwRktiVUlzUlVGTGJrSXNUVUZNYlVJc1JVRk5ia0lzVFVGT2JVSXNSVUZQYmtJc1RVRlFiVUlzUlVGUmJrSXNVVUZTYlVJc1JVRlRia0lzVTBGVWJVSXNSVUZWYmtJc1lVRldiVUlzUlVGWGJrSXNWMEZZYlVJc1JVRlpia0lzVDBGYWJVSXNSVUZoYmtJc1YwRmliVUlzUlVGamJrSXNWVUZrYlVJc1JVRmxia0lzU1VGbWJVSXNSVUZuUW01Q0xFOUJhRUp0UWl4RlFXbENia0lzVVVGcVFtMUNMRVZCYTBKdVFpeE5RV3hDYlVJc1JVRnRRbTVDTEVsQmJrSnRRaXhGUVc5Q2JrSXNVMEZ3UW0xQ0xFVkJjVUp1UWl4TlFYSkNiVUlzUlVGelFtNUNMRTFCZEVKdFFpeEZRWFZDYmtJc1RVRjJRbTFDTEVWQmQwSnVRaXhMUVhoQ2JVSXNSVUY1UW01Q0xFbEJla0p0UWl4RlFUQkNia0lzU1VFeFFtMUNMRVZCTWtKdVFpeEpRVE5DYlVJc1JVRTBRbTVDTEZkQk5VSnRRaXhGUVRaQ2JrSXNZMEUzUW0xQ0xFVkJPRUp1UWl4UlFUbENiVUlzUlVFclFtNUNMRWxCTDBKdFFpeEZRV2REYmtJc1NVRm9RMjFDTEVWQmFVTnVRaXhaUVdwRGJVSXNSVUZyUTI1Q0xFOUJiRU50UWl4RlFXMURia0lzVDBGdVEyMUNMRVZCYjBOdVFpeFJRWEJEYlVJc1JVRnhRMjVDTEZOQmNrTnRRaXhGUVhORGJrSXNVMEYwUTIxQ0xFVkJkVU51UWl4UFFYWkRiVUlzUlVGM1EyNUNMRTlCZUVOdFFpeEZRWGxEYmtJc1QwRjZRMjFDTEVWQk1FTnVRaXhSUVRGRGJVSXNSVUV5UTI1Q0xFMUJNME50UWl4RlFUUkRia0lzUzBFMVEyMUNMRVZCTmtOdVFpeFRRVGREYlVJc1JVRTRRMjVDTEU5Qk9VTnRRaXhGUVN0RGJrSXNWVUV2UTIxQ0xFVkJaMFJ1UWl4VFFXaEViVUlzUlVGcFJHNUNMRlZCYWtSdFFpeEZRV3RFYmtJc1ZVRnNSRzFDTEVWQmJVUnVRaXhMUVc1RWJVSXNSVUZ2Ukc1Q0xFMUJjRVJ0UWl4RlFYRkVia0lzWlVGeVJHMUNMRVZCYzBSdVFpeE5RWFJFYlVJc1JVRjFSRzVDTEV0QmRrUnRRaXhGUVhkRWJrSXNUVUY0UkcxQ0xFVkJlVVJ1UWl4UlFYcEViVUlzUlVFd1JHNUNMRk5CTVVSdFFpeEZRVEpFYmtJc1NVRXpSRzFDTEVWQk5FUnVRaXhQUVRWRWJVSXNSVUUyUkc1Q0xGRkJOMFJ0UWl4RlFUaEVia0lzVjBFNVJHMUNMRU5CUVdRaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkxvcmVtSXBzdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvcmVtSXBzdW1bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHMubG9yZW1JcHN1bSA9IHZvaWQgMDtcblxudmFyIF9mb3JtYXRzID0gcmVxdWlyZShcIi4vY29uc3RhbnRzL2Zvcm1hdHNcIik7XG5cbnZhciBfdW5pdHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvdW5pdHNcIik7XG5cbnZhciBfd29yZHMgPSByZXF1aXJlKFwiLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfTG9yZW1JcHN1bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL0xvcmVtSXBzdW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIGxvcmVtSXBzdW0gPSBmdW5jdGlvbiBsb3JlbUlwc3VtKCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGNvdW50ID0gX3JlZi5jb3VudCxcbiAgICAgIGNvdW50ID0gX3JlZiRjb3VudCA9PT0gdm9pZCAwID8gMSA6IF9yZWYkY291bnQsXG4gICAgICBfcmVmJGZvcm1hdCA9IF9yZWYuZm9ybWF0LFxuICAgICAgZm9ybWF0ID0gX3JlZiRmb3JtYXQgPT09IHZvaWQgMCA/IF9mb3JtYXRzLkZPUk1BVF9QTEFJTiA6IF9yZWYkZm9ybWF0LFxuICAgICAgX3JlZiRwYXJhZ3JhcGhMb3dlckJvID0gX3JlZi5wYXJhZ3JhcGhMb3dlckJvdW5kLFxuICAgICAgcGFyYWdyYXBoTG93ZXJCb3VuZCA9IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyA9PT0gdm9pZCAwID8gMyA6IF9yZWYkcGFyYWdyYXBoTG93ZXJCbyxcbiAgICAgIF9yZWYkcGFyYWdyYXBoVXBwZXJCbyA9IF9yZWYucGFyYWdyYXBoVXBwZXJCb3VuZCxcbiAgICAgIHBhcmFncmFwaFVwcGVyQm91bmQgPSBfcmVmJHBhcmFncmFwaFVwcGVyQm8gPT09IHZvaWQgMCA/IDcgOiBfcmVmJHBhcmFncmFwaFVwcGVyQm8sXG4gICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgIF9yZWYkc2VudGVuY2VMb3dlckJvdSA9IF9yZWYuc2VudGVuY2VMb3dlckJvdW5kLFxuICAgICAgc2VudGVuY2VMb3dlckJvdW5kID0gX3JlZiRzZW50ZW5jZUxvd2VyQm91ID09PSB2b2lkIDAgPyA1IDogX3JlZiRzZW50ZW5jZUxvd2VyQm91LFxuICAgICAgX3JlZiRzZW50ZW5jZVVwcGVyQm91ID0gX3JlZi5zZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBzZW50ZW5jZVVwcGVyQm91bmQgPSBfcmVmJHNlbnRlbmNlVXBwZXJCb3UgPT09IHZvaWQgMCA/IDE1IDogX3JlZiRzZW50ZW5jZVVwcGVyQm91LFxuICAgICAgX3JlZiR1bml0cyA9IF9yZWYudW5pdHMsXG4gICAgICB1bml0cyA9IF9yZWYkdW5pdHMgPT09IHZvaWQgMCA/IF91bml0cy5VTklUX1NFTlRFTkNFUyA6IF9yZWYkdW5pdHMsXG4gICAgICBfcmVmJHdvcmRzID0gX3JlZi53b3JkcyxcbiAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcyxcbiAgICAgIF9yZWYkc3VmZml4ID0gX3JlZi5zdWZmaXgsXG4gICAgICBzdWZmaXggPSBfcmVmJHN1ZmZpeCA9PT0gdm9pZCAwID8gXCJcIiA6IF9yZWYkc3VmZml4O1xuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNlbnRlbmNlc1BlclBhcmFncmFwaDoge1xuICAgICAgbWF4OiBwYXJhZ3JhcGhVcHBlckJvdW5kLFxuICAgICAgbWluOiBwYXJhZ3JhcGhMb3dlckJvdW5kXG4gICAgfSxcbiAgICB3b3Jkczogd29yZHMsXG4gICAgd29yZHNQZXJTZW50ZW5jZToge1xuICAgICAgbWF4OiBzZW50ZW5jZVVwcGVyQm91bmQsXG4gICAgICBtaW46IHNlbnRlbmNlTG93ZXJCb3VuZFxuICAgIH1cbiAgfTtcbiAgdmFyIGxvcmVtID0gbmV3IF9Mb3JlbUlwc3VtW1wiZGVmYXVsdFwiXShvcHRpb25zLCBmb3JtYXQsIHN1ZmZpeCk7XG5cbiAgc3dpdGNoICh1bml0cykge1xuICAgIGNhc2UgX3VuaXRzLlVOSVRfUEFSQUdSQVBIUzpcbiAgICBjYXNlIF91bml0cy5VTklUX1BBUkFHUkFQSDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVBhcmFncmFwaHMoY291bnQpO1xuXG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRVM6XG4gICAgY2FzZSBfdW5pdHMuVU5JVF9TRU5URU5DRTpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyhjb3VudCk7XG5cbiAgICBjYXNlIF91bml0cy5VTklUX1dPUkRTOlxuICAgIGNhc2UgX3VuaXRzLlVOSVRfV09SRDpcbiAgICAgIHJldHVybiBsb3JlbS5nZW5lcmF0ZVdvcmRzKGNvdW50KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJcIjtcbiAgfVxufTtcblxuZXhwb3J0cy5sb3JlbUlwc3VtID0gbG9yZW1JcHN1bTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKc2IzSmxiVWx3YzNWdElpd2lZMjkxYm5RaUxDSm1iM0p0WVhRaUxDSkdUMUpOUVZSZlVFeEJTVTRpTENKd1lYSmhaM0poY0doTWIzZGxja0p2ZFc1a0lpd2ljR0Z5WVdkeVlYQm9WWEJ3WlhKQ2IzVnVaQ0lzSW5KaGJtUnZiU0lzSW5ObGJuUmxibU5sVEc5M1pYSkNiM1Z1WkNJc0luTmxiblJsYm1ObFZYQndaWEpDYjNWdVpDSXNJblZ1YVhSeklpd2lWVTVKVkY5VFJVNVVSVTVEUlZNaUxDSjNiM0prY3lJc0lsZFBVa1JUSWl3aWMzVm1abWw0SWl3aWIzQjBhVzl1Y3lJc0luTmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhQ0lzSW0xaGVDSXNJbTFwYmlJc0luZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVaUxDSnNiM0psYlNJc0lreHZjbVZ0U1hCemRXMGlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNGTWlMQ0pWVGtsVVgxQkJVa0ZIVWtGUVNDSXNJbWRsYm1WeVlYUmxVR0Z5WVdkeVlYQm9jeUlzSWxWT1NWUmZVMFZPVkVWT1EwVWlMQ0puWlc1bGNtRjBaVk5sYm5SbGJtTmxjeUlzSWxWT1NWUmZWMDlTUkZNaUxDSlZUa2xVWDFkUFVrUWlMQ0puWlc1bGNtRjBaVmR2Y21SeklsMHNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMmx1WkdWNExuUnpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUV4dmNtVnRSbTl5YldGMExDQkdUMUpOUVZSZlVFeEJTVTRnZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdlptOXliV0YwYzF3aU8xeHlYRzVwYlhCdmNuUWdlMXh5WEc0Z0lFeHZjbVZ0Vlc1cGRDeGNjbHh1SUNCVlRrbFVYMUJCVWtGSFVrRlFTQ3hjY2x4dUlDQlZUa2xVWDFCQlVrRkhVa0ZRU0ZNc1hISmNiaUFnVlU1SlZGOVRSVTVVUlU1RFJWTXNYSEpjYmlBZ1ZVNUpWRjlUUlU1VVJVNURSU3hjY2x4dUlDQlZUa2xVWDFkUFVrUlRMRnh5WEc0Z0lGVk9TVlJmVjA5U1JDeGNjbHh1ZlNCbWNtOXRJRndpTGk5amIyNXpkR0Z1ZEhNdmRXNXBkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dWMDlTUkZNZ2ZTQm1jbTl0SUZ3aUxpOWpiMjV6ZEdGdWRITXZkMjl5WkhOY0lqdGNjbHh1YVcxd2IzSjBJSHNnU1ZCeWJtY2dmU0JtY205dElGd2lMaTlzYVdJdloyVnVaWEpoZEc5eVhDSTdYSEpjYm1sdGNHOXlkQ0JNYjNKbGJVbHdjM1Z0SUdaeWIyMGdYQ0l1TDJ4cFlpOU1iM0psYlVsd2MzVnRYQ0k3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxNYjNKbGJVbHdjM1Z0VUdGeVlXMXpJSHRjY2x4dUlDQmpiM1Z1ZEQ4NklHNTFiV0psY2p0Y2NseHVJQ0JtYjNKdFlYUS9PaUJNYjNKbGJVWnZjbTFoZER0Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVEvT2lCdWRXMWlaWEk3WEhKY2JpQWdjbUZ1Wkc5dFB6b2dTVkJ5Ym1jN1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrUHpvZ2JuVnRZbVZ5TzF4eVhHNGdJSE5sYm5SbGJtTmxWWEJ3WlhKQ2IzVnVaRDg2SUc1MWJXSmxjanRjY2x4dUlDQjFibWwwY3o4NklFeHZjbVZ0Vlc1cGREdGNjbHh1SUNCM2IzSmtjejg2SUhOMGNtbHVaMXRkTzF4eVhHNGdJSE4xWm1acGVEODZJSE4wY21sdVp6dGNjbHh1ZlZ4eVhHNWNjbHh1WTI5dWMzUWdiRzl5WlcxSmNITjFiU0E5SUNoN1hISmNiaUFnWTI5MWJuUWdQU0F4TEZ4eVhHNGdJR1p2Y20xaGRDQTlJRVpQVWsxQlZGOVFURUZKVGl4Y2NseHVJQ0J3WVhKaFozSmhjR2hNYjNkbGNrSnZkVzVrSUQwZ015eGNjbHh1SUNCd1lYSmhaM0poY0doVmNIQmxja0p2ZFc1a0lEMGdOeXhjY2x4dUlDQnlZVzVrYjIwc1hISmNiaUFnYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrSUQwZ05TeGNjbHh1SUNCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1RZ1BTQXhOU3hjY2x4dUlDQjFibWwwY3lBOUlGVk9TVlJmVTBWT1ZFVk9RMFZUTEZ4eVhHNGdJSGR2Y21SeklEMGdWMDlTUkZNc1hISmNiaUFnYzNWbVptbDRJRDBnWENKY0lpeGNjbHh1ZlRvZ1NVeHZjbVZ0U1hCemRXMVFZWEpoYlhNZ1BTQjdmU2s2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnWTI5dWMzUWdiM0IwYVc5dWN5QTlJSHRjY2x4dUlDQWdJSEpoYm1SdmJTeGNjbHh1SUNBZ0lITmxiblJsYm1ObGMxQmxjbEJoY21GbmNtRndhRG9nZTF4eVhHNGdJQ0FnSUNCdFlYZzZJSEJoY21GbmNtRndhRlZ3Y0dWeVFtOTFibVFzWEhKY2JpQWdJQ0FnSUcxcGJqb2djR0Z5WVdkeVlYQm9URzkzWlhKQ2IzVnVaQ3hjY2x4dUlDQWdJSDBzWEhKY2JpQWdJQ0IzYjNKa2N5eGNjbHh1SUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVNklIdGNjbHh1SUNBZ0lDQWdiV0Y0T2lCelpXNTBaVzVqWlZWd2NHVnlRbTkxYm1Rc1hISmNiaUFnSUNBZ0lHMXBiam9nYzJWdWRHVnVZMlZNYjNkbGNrSnZkVzVrTEZ4eVhHNGdJQ0FnZlN4Y2NseHVJQ0I5TzF4eVhHNWNjbHh1SUNCamIyNXpkQ0JzYjNKbGJUb2dURzl5WlcxSmNITjFiU0E5SUc1bGR5Qk1iM0psYlVsd2MzVnRLRzl3ZEdsdmJuTXNJR1p2Y20xaGRDd2djM1ZtWm1sNEtUdGNjbHh1WEhKY2JpQWdjM2RwZEdOb0lDaDFibWwwY3lrZ2UxeHlYRzRnSUNBZ1kyRnpaU0JWVGtsVVgxQkJVa0ZIVWtGUVNGTTZYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZVRUZTUVVkU1FWQklPbHh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiRzl5WlcwdVoyVnVaWEpoZEdWUVlYSmhaM0poY0doektHTnZkVzUwS1R0Y2NseHVJQ0FnSUdOaGMyVWdWVTVKVkY5VFJVNVVSVTVEUlZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlUwVk9WRVZPUTBVNlhISmNiaUFnSUNBZ0lISmxkSFZ5YmlCc2IzSmxiUzVuWlc1bGNtRjBaVk5sYm5SbGJtTmxjeWhqYjNWdWRDazdYSEpjYmlBZ0lDQmpZWE5sSUZWT1NWUmZWMDlTUkZNNlhISmNiaUFnSUNCallYTmxJRlZPU1ZSZlYwOVNSRHBjY2x4dUlDQWdJQ0FnY21WMGRYSnVJR3h2Y21WdExtZGxibVZ5WVhSbFYyOXlaSE1vWTI5MWJuUXBPMXh5WEc0Z0lDQWdaR1ZtWVhWc2REcGNjbHh1SUNBZ0lDQWdjbVYwZFhKdUlGd2lYQ0k3WEhKY2JpQWdmVnh5WEc1OU8xeHlYRzVjY2x4dVpYaHdiM0owSUhzZ2JHOXlaVzFKY0hOMWJTd2dURzl5WlcxSmNITjFiU0I5TzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGVFFUczdRVUZGUVRzN096dEJRV1ZCTEVsQlFVMUJMRlZCUVZVc1IwRkJSeXhUUVVGaVFTeFZRVUZoTEVkQlYyMUNPMFZCUVVFc0swVkJRV1lzUlVGQlpUdEZRVUZCTEhOQ1FWWndRME1zUzBGVmIwTTdSVUZCUVN4SlFWWndRMEVzUzBGVmIwTXNNa0pCVmpWQ0xFTkJWVFJDTzBWQlFVRXNkVUpCVkhCRFF5eE5RVk52UXp0RlFVRkJMRWxCVkhCRFFTeE5RVk52UXl3MFFrRlVNMEpETEhGQ1FWTXlRanRGUVVGQkxHbERRVkp3UTBNc2JVSkJVVzlETzBWQlFVRXNTVUZTY0VOQkxHMUNRVkZ2UXl4elEwRlNaQ3hEUVZGak8wVkJRVUVzYVVOQlVIQkRReXh0UWtGUGIwTTdSVUZCUVN4SlFWQndRMEVzYlVKQlQyOURMSE5EUVZCa0xFTkJUMk03UlVGQlFTeEpRVTV3UTBNc1RVRk5iME1zVVVGT2NFTkJMRTFCVFc5RE8wVkJRVUVzYVVOQlRIQkRReXhyUWtGTGIwTTdSVUZCUVN4SlFVeHdRMEVzYTBKQlMyOURMSE5EUVV4bUxFTkJTMlU3UlVGQlFTeHBRMEZLY0VORExHdENRVWx2UXp0RlFVRkJMRWxCU25CRFFTeHJRa0ZKYjBNc2MwTkJTbVlzUlVGSlpUdEZRVUZCTEhOQ1FVaHdRME1zUzBGSGIwTTdSVUZCUVN4SlFVaHdRMEVzUzBGSGIwTXNNa0pCU0RWQ1F5eHhRa0ZITkVJN1JVRkJRU3h6UWtGR2NFTkRMRXRCUlc5RE8wVkJRVUVzU1VGR2NFTkJMRXRCUlc5RExESkNRVVkxUWtNc1dVRkZORUk3UlVGQlFTeDFRa0ZFY0VORExFMUJRMjlETzBWQlFVRXNTVUZFY0VOQkxFMUJRMjlETERSQ1FVUXpRaXhGUVVNeVFqczdSVUZEY0VNc1NVRkJUVU1zVDBGQlR5eEhRVUZITzBsQlEyUlNMRTFCUVUwc1JVRkJUa0VzVFVGRVl6dEpRVVZrVXl4eFFrRkJjVUlzUlVGQlJUdE5RVU55UWtNc1IwRkJSeXhGUVVGRldDeHRRa0ZFWjBJN1RVRkZja0paTEVkQlFVY3NSVUZCUldJN1NVRkdaMElzUTBGR1ZEdEpRVTFrVHl4TFFVRkxMRVZCUVV4QkxFdEJUbU03U1VGUFpFOHNaMEpCUVdkQ0xFVkJRVVU3VFVGRGFFSkdMRWRCUVVjc1JVRkJSVklzYTBKQlJGYzdUVUZGYUVKVExFZEJRVWNzUlVGQlJWWTdTVUZHVnp0RlFWQktMRU5CUVdoQ08wVkJZVUVzU1VGQlRWa3NTMEZCYVVJc1IwRkJSeXhKUVVGSlF5eHpRa0ZCU2l4RFFVRmxUaXhQUVVGbUxFVkJRWGRDV2l4TlFVRjRRaXhGUVVGblExY3NUVUZCYUVNc1EwRkJNVUk3TzBWQlJVRXNVVUZCVVVvc1MwRkJVanRKUVVORkxFdEJRVXRaTEhOQ1FVRk1PMGxCUTBFc1MwRkJTME1zY1VKQlFVdzdUVUZEUlN4UFFVRlBTQ3hMUVVGTExFTkJRVU5KTEd0Q1FVRk9MRU5CUVhsQ2RFSXNTMEZCZWtJc1EwRkJVRHM3U1VGRFJpeExRVUZMVXl4eFFrRkJURHRKUVVOQkxFdEJRVXRqTEc5Q1FVRk1PMDFCUTBVc1QwRkJUMHdzUzBGQlN5eERRVUZEVFN4cFFrRkJUaXhEUVVGM1FuaENMRXRCUVhoQ0xFTkJRVkE3TzBsQlEwWXNTMEZCUzNsQ0xHbENRVUZNTzBsQlEwRXNTMEZCUzBNc1owSkJRVXc3VFVGRFJTeFBRVUZQVWl4TFFVRkxMRU5CUVVOVExHRkJRVTRzUTBGQmIwSXpRaXhMUVVGd1FpeERRVUZRT3p0SlFVTkdPMDFCUTBVc1QwRkJUeXhGUVVGUU8wVkJXRW83UVVGaFJDeERRWGhEUkNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZm9ybWF0cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZm9ybWF0c1wiKTtcblxudmFyIF9saW5lRW5kaW5ncyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbGluZUVuZGluZ3NcIik7XG5cbnZhciBfZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL2dlbmVyYXRvclwiKSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTG9yZW1JcHN1bSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvcmVtSXBzdW0oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF9mb3JtYXRzLkZPUk1BVF9QTEFJTjtcbiAgICB2YXIgc3VmZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9yZW1JcHN1bSk7XG5cbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdlbmVyYXRvclwiLCB2b2lkIDApO1xuXG4gICAgaWYgKF9mb3JtYXRzLkZPUk1BVFMuaW5kZXhPZihmb3JtYXQudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQoZm9ybWF0LCBcIiBpcyBhbiBpbnZhbGlkIGZvcm1hdC4gUGxlYXNlIHVzZSBcIikuY29uY2F0KF9mb3JtYXRzLkZPUk1BVFMuam9pbihcIiBvciBcIiksIFwiLlwiKSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0b3IgPSBuZXcgX2dlbmVyYXRvcltcImRlZmF1bHRcIl0ob3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTG9yZW1JcHN1bSwgW3tcbiAgICBrZXk6IFwiZ2V0TGluZUVuZGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMaW5lRW5kaW5nKCkge1xuICAgICAgaWYgKHRoaXMuc3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1ZmZpeDtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX3V0aWwuaXNSZWFjdE5hdGl2ZSkoKSAmJiAoMCwgX3V0aWwuaXNOb2RlKSgpICYmICgwLCBfdXRpbC5pc1dpbmRvd3MpKCkpIHtcbiAgICAgICAgcmV0dXJuIF9saW5lRW5kaW5ncy5MSU5FX0VORElOR1MuV0lOMzI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbGluZUVuZGluZ3MuTElORV9FTkRJTkdTLlBPU0lYO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRTdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5nKHN0cikge1xuICAgICAgaWYgKHRoaXMuZm9ybWF0ID09PSBfZm9ybWF0cy5GT1JNQVRfSFRNTCkge1xuICAgICAgICByZXR1cm4gXCI8cD5cIi5jb25jYXQoc3RyLCBcIjwvcD5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFN0cmluZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0U3RyaW5ncyhzdHJpbmdzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0U3RyaW5nKHN0cik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVXb3Jkc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tV29yZHMobnVtKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlU2VudGVuY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlU2VudGVuY2VzKG51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKHRoaXMuZ2VuZXJhdG9yLmdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZVBhcmFncmFwaHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVQYXJhZ3JhcGhzKG51bSkge1xuICAgICAgdmFyIG1ha2VTdHJpbmcgPSB0aGlzLmdlbmVyYXRvci5nZW5lcmF0ZVJhbmRvbVBhcmFncmFwaC5iaW5kKHRoaXMuZ2VuZXJhdG9yKTtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZ3MoKDAsIF91dGlsLm1ha2VBcnJheU9mU3RyaW5ncykobnVtLCBtYWtlU3RyaW5nKSkuam9pbih0aGlzLmdldExpbmVFbmRpbmcoKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvcmVtSXBzdW07XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IExvcmVtSXBzdW07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpNYjNKbGJVbHdjM1Z0SWl3aWIzQjBhVzl1Y3lJc0ltWnZjbTFoZENJc0lrWlBVazFCVkY5UVRFRkpUaUlzSW5OMVptWnBlQ0lzSWtaUFVrMUJWRk1pTENKcGJtUmxlRTltSWl3aWRHOU1iM2RsY2tOaGMyVWlMQ0pGY25KdmNpSXNJbXB2YVc0aUxDSm5aVzVsY21GMGIzSWlMQ0pIWlc1bGNtRjBiM0lpTENKcGMxSmxZV04wVG1GMGFYWmxJaXdpYVhOT2IyUmxJaXdpYVhOWGFXNWtiM2R6SWl3aVRFbE9SVjlGVGtSSlRrZFRJaXdpVjBsT016SWlMQ0pRVDFOSldDSXNJbk4wY2lJc0lrWlBVazFCVkY5SVZFMU1JaXdpYzNSeWFXNW5jeUlzSW0xaGNDSXNJbVp2Y20xaGRGTjBjbWx1WnlJc0ltNTFiU0lzSW1kbGJtVnlZWFJsVW1GdVpHOXRWMjl5WkhNaUxDSm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNJc0ltMWhhMlZUZEhKcGJtY2lMQ0ppYVc1a0lpd2labTl5YldGMFUzUnlhVzVuY3lJc0ltMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN5SXNJbWRsZEV4cGJtVkZibVJwYm1jaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwweHZjbVZ0U1hCemRXMHVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1JrOVNUVUZVWDBoVVRVd3NJRVpQVWsxQlZGOVFURUZKVGl3Z1JrOVNUVUZVVXl3Z1RHOXlaVzFHYjNKdFlYUWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDJadmNtMWhkSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dURWxPUlY5RlRrUkpUa2RUSUgwZ1puSnZiU0JjSWk0dUwyTnZibk4wWVc1MGN5OXNhVzVsUlc1a2FXNW5jMXdpTzF4eVhHNXBiWEJ2Y25RZ1IyVnVaWEpoZEc5eUxDQjdJRWxIWlc1bGNtRjBiM0pQY0hScGIyNXpJSDBnWm5KdmJTQmNJaTR1TDJ4cFlpOW5aVzVsY21GMGIzSmNJanRjY2x4dWFXMXdiM0owSUhzZ2FYTk9iMlJsTENCcGMxSmxZV04wVG1GMGFYWmxMQ0JwYzFkcGJtUnZkM01zSUcxaGEyVkJjbkpoZVU5bVUzUnlhVzVuY3lCOUlHWnliMjBnWENJdUxpOTFkR2xzWENJN1hISmNibHh5WEc1amJHRnpjeUJNYjNKbGJVbHdjM1Z0SUh0Y2NseHVJQ0J3ZFdKc2FXTWdaMlZ1WlhKaGRHOXlPaUJIWlc1bGNtRjBiM0k3WEhKY2JseHlYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHlYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1NVZGxibVZ5WVhSdmNrOXdkR2x2Ym5NZ1BTQjdmU3hjY2x4dUlDQWdJSEIxWW14cFl5Qm1iM0p0WVhRNklFeHZjbVZ0Um05eWJXRjBJRDBnUms5U1RVRlVYMUJNUVVsT0xGeHlYRzRnSUNBZ2NIVmliR2xqSUhOMVptWnBlRDg2SUhOMGNtbHVaeXhjY2x4dUlDQXBJSHRjY2x4dUlDQWdJR2xtSUNoR1QxSk5RVlJUTG1sdVpHVjRUMllvWm05eWJXRjBMblJ2VEc5M1pYSkRZWE5sS0NrcElEMDlQU0F0TVNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZQ1I3Wm05eWJXRjBmU0JwY3lCaGJpQnBiblpoYkdsa0lHWnZjbTFoZEM0Z1VHeGxZWE5sSUhWelpTQWtlMFpQVWsxQlZGTXVhbTlwYmloY0lpQnZjaUJjSWlsOUxtQXNYSEpjYmlBZ0lDQWdJQ2s3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0IwYUdsekxtZGxibVZ5WVhSdmNpQTlJRzVsZHlCSFpXNWxjbUYwYjNJb2IzQjBhVzl1Y3lrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWMFRHbHVaVVZ1WkdsdVp5Z3BJSHRjY2x4dUlDQWdJR2xtSUNoMGFHbHpMbk4xWm1acGVDa2dlMXh5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRXWm1hWGc3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2FXWWdLQ0ZwYzFKbFlXTjBUbUYwYVhabEtDa2dKaVlnYVhOT2IyUmxLQ2tnSmlZZ2FYTlhhVzVrYjNkektDa3BJSHRjY2x4dUlDQWdJQ0FnY21WMGRYSnVJRXhKVGtWZlJVNUVTVTVIVXk1WFNVNHpNanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCeVpYUjFjbTRnVEVsT1JWOUZUa1JKVGtkVExsQlBVMGxZTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WnloemRISTZJSE4wY21sdVp5azZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQnBaaUFvZEdocGN5NW1iM0p0WVhRZ1BUMDlJRVpQVWsxQlZGOUlWRTFNS1NCN1hISmNiaUFnSUNBZ0lISmxkSFZ5YmlCZ1BIQStKSHR6ZEhKOVBDOXdQbUE3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J5WlhSMWNtNGdjM1J5TzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR1p2Y20xaGRGTjBjbWx1WjNNb2MzUnlhVzVuY3pvZ2MzUnlhVzVuVzEwcE9pQnpkSEpwYm1kYlhTQjdYSEpjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuY3k1dFlYQW9LSE4wY2lrZ1BUNGdkR2hwY3k1bWIzSnRZWFJUZEhKcGJtY29jM1J5S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZYYjNKa2N5aHVkVzAvT2lCdWRXMWlaWElwT2lCemRISnBibWNnZTF4eVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVptOXliV0YwVTNSeWFXNW5LSFJvYVhNdVoyVnVaWEpoZEc5eUxtZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0S1NrN1hISmNiaUFnZlZ4eVhHNWNjbHh1SUNCd2RXSnNhV01nWjJWdVpYSmhkR1ZUWlc1MFpXNWpaWE1vYm5WdFB6b2diblZ0WW1WeUtUb2djM1J5YVc1bklIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVp2Y20xaGRGTjBjbWx1WnloMGFHbHpMbWRsYm1WeVlYUnZjaTVuWlc1bGNtRjBaVkpoYm1SdmJWQmhjbUZuY21Gd2FDaHVkVzBwS1R0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUhCMVlteHBZeUJuWlc1bGNtRjBaVkJoY21GbmNtRndhSE1vYm5WdE9pQnVkVzFpWlhJcE9pQnpkSEpwYm1jZ2UxeHlYRzRnSUNBZ1kyOXVjM1FnYldGclpWTjBjbWx1WnlBOUlIUm9hWE11WjJWdVpYSmhkRzl5TG1kbGJtVnlZWFJsVW1GdVpHOXRVR0Z5WVdkeVlYQm9MbUpwYm1Rb1hISmNiaUFnSUNBZ0lIUm9hWE11WjJWdVpYSmhkRzl5TEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtWnZjbTFoZEZOMGNtbHVaM01vYldGclpVRnljbUY1VDJaVGRISnBibWR6S0c1MWJTd2diV0ZyWlZOMGNtbHVaeWtwTG1wdmFXNG9YSEpjYmlBZ0lDQWdJSFJvYVhNdVoyVjBUR2x1WlVWdVpHbHVaeWdwTEZ4eVhHNGdJQ0FnS1R0Y2NseHVJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dmNtVnRTWEJ6ZFcwN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRVRXNWVHRGUVVkS0xITkNRVWxGTzBsQlFVRXNTVUZJUVVNc1QwRkhRU3gxUlVGSU5rSXNSVUZITjBJN1NVRkJRU3hKUVVaUFF5eE5RVVZRTEhWRlFVWTJRa01zY1VKQlJUZENPMGxCUVVFc1NVRkVUME1zVFVGRFVEczdTVUZCUVRzN1NVRkJRU3hMUVVaUFJpeE5RVVZRTEVkQlJrOUJMRTFCUlZBN1NVRkJRU3hMUVVSUFJTeE5RVU5RTEVkQlJFOUJMRTFCUTFBN08wbEJRVUU3TzBsQlEwRXNTVUZCU1VNc1owSkJRVUVzUTBGQlVVTXNUMEZCVWl4RFFVRm5Ra29zVFVGQlRTeERRVUZEU3l4WFFVRlFMRVZCUVdoQ0xFMUJRVEJETEVOQlFVTXNRMEZCTDBNc1JVRkJhMFE3VFVGRGFFUXNUVUZCVFN4SlFVRkpReXhMUVVGS0xGZEJRMFJPTEUxQlJFTXNLME5CUXpCRFJ5eG5Ra0ZCUVN4RFFVRlJTU3hKUVVGU0xFTkJRV0VzVFVGQllpeERRVVF4UXl4UFFVRk9PMGxCUjBRN08wbEJRMFFzUzBGQlMwTXNVMEZCVEN4SFFVRnBRaXhKUVVGSlF5eHhRa0ZCU2l4RFFVRmpWaXhQUVVGa0xFTkJRV3BDTzBWQlEwUTdPenM3VjBGRlJDeDVRa0ZCZFVJN1RVRkRja0lzU1VGQlNTeExRVUZMUnl4TlFVRlVMRVZCUVdsQ08xRkJRMllzVDBGQlR5eExRVUZMUVN4TlFVRmFPMDFCUTBRN08wMUJSVVFzU1VGQlNTeERRVUZETEVsQlFVRlJMRzFDUVVGQkxFZEJRVVFzU1VGQmIwSXNTVUZCUVVNc1dVRkJRU3hIUVVGd1FpeEpRVUZuUXl4SlFVRkJReXhsUVVGQkxFZEJRWEJETEVWQlFXbEVPMUZCUXk5RExFOUJRVTlETEhsQ1FVRkJMRU5CUVdGRExFdEJRWEJDTzAxQlEwUTdPMDFCUlVRc1QwRkJUMFFzZVVKQlFVRXNRMEZCWVVVc1MwRkJjRUk3U1VGRFJEczdPMWRCUlVRc2MwSkJRVzlDUXl4SFFVRndRaXhGUVVGNVF6dE5RVU4yUXl4SlFVRkpMRXRCUVV0b1FpeE5RVUZNTEV0QlFXZENhVUlzYjBKQlFYQkNMRVZCUVdsRE8xRkJReTlDTEc5Q1FVRmhSQ3hIUVVGaU8wMUJRMFE3TzAxQlEwUXNUMEZCVDBFc1IwRkJVRHRKUVVORU96czdWMEZGUkN4MVFrRkJjVUpGTEU5QlFYSkNMRVZCUVd0RU8wMUJRVUU3TzAxQlEyaEVMRTlCUVU5QkxFOUJRVThzUTBGQlEwTXNSMEZCVWl4RFFVRlpMRlZCUVVOSUxFZEJRVVE3VVVGQlFTeFBRVUZUTEV0QlFVa3NRMEZCUTBrc1dVRkJUQ3hEUVVGclFrb3NSMEZCYkVJc1EwRkJWRHROUVVGQkxFTkJRVm9zUTBGQlVEdEpRVU5FT3pzN1YwRkZSQ3gxUWtGQmNVSkxMRWRCUVhKQ0xFVkJRVEpETzAxQlEzcERMRTlCUVU4c1MwRkJTMFFzV1VGQlRDeERRVUZyUWl4TFFVRkxXaXhUUVVGTUxFTkJRV1ZqTEcxQ1FVRm1MRU5CUVcxRFJDeEhRVUZ1UXl4RFFVRnNRaXhEUVVGUU8wbEJRMFE3T3p0WFFVVkVMREpDUVVGNVFrRXNSMEZCZWtJc1JVRkJLME03VFVGRE4wTXNUMEZCVHl4TFFVRkxSQ3haUVVGTUxFTkJRV3RDTEV0QlFVdGFMRk5CUVV3c1EwRkJaV1VzZFVKQlFXWXNRMEZCZFVOR0xFZEJRWFpETEVOQlFXeENMRU5CUVZBN1NVRkRSRHM3TzFkQlJVUXNORUpCUVRCQ1FTeEhRVUV4UWl4RlFVRXJRenROUVVNM1F5eEpRVUZOUnl4VlFVRlZMRWRCUVVjc1MwRkJTMmhDTEZOQlFVd3NRMEZCWldVc2RVSkJRV1lzUTBGQmRVTkZMRWxCUVhaRExFTkJRMnBDTEV0QlFVdHFRaXhUUVVSWkxFTkJRVzVDTzAxQlIwRXNUMEZCVHl4TFFVRkxhMElzWVVGQlRDeERRVUZ0UWl4SlFVRkJReXgzUWtGQlFTeEZRVUZ0UWs0c1IwRkJia0lzUlVGQmQwSkhMRlZCUVhoQ0xFTkJRVzVDTEVWQlFYZEVha0lzU1VGQmVFUXNRMEZEVEN4TFFVRkxjVUlzWVVGQlRDeEZRVVJMTEVOQlFWQTdTVUZIUkRzN096czdPMlZCUjFrNVFpeFZJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF93b3JkcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvd29yZHNcIik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBHZW5lcmF0b3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmJHNlbnRlbmNlc1BlclBhcmEgPSBfcmVmLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gX3JlZiRzZW50ZW5jZXNQZXJQYXJhID09PSB2b2lkIDAgPyB7XG4gICAgICBtYXg6IDcsXG4gICAgICBtaW46IDNcbiAgICB9IDogX3JlZiRzZW50ZW5jZXNQZXJQYXJhLFxuICAgICAgICBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgIHdvcmRzUGVyU2VudGVuY2UgPSBfcmVmJHdvcmRzUGVyU2VudGVuY2UgPT09IHZvaWQgMCA/IHtcbiAgICAgIG1heDogMTUsXG4gICAgICBtaW46IDVcbiAgICB9IDogX3JlZiR3b3Jkc1BlclNlbnRlbmNlLFxuICAgICAgICByYW5kb20gPSBfcmVmLnJhbmRvbSxcbiAgICAgICAgc2VlZCA9IF9yZWYuc2VlZCxcbiAgICAgICAgX3JlZiR3b3JkcyA9IF9yZWYud29yZHMsXG4gICAgICAgIHdvcmRzID0gX3JlZiR3b3JkcyA9PT0gdm9pZCAwID8gX3dvcmRzLldPUkRTIDogX3JlZiR3b3JkcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHZW5lcmF0b3IpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2VudGVuY2VzUGVyUGFyYWdyYXBoXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3b3Jkc1BlclNlbnRlbmNlXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJyYW5kb21cIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndvcmRzXCIsIHZvaWQgMCk7XG5cbiAgICBpZiAoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiA+IHNlbnRlbmNlc1BlclBhcmFncmFwaC5tYXgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pbmltdW0gbnVtYmVyIG9mIHNlbnRlbmNlcyBwZXIgcGFyYWdyYXBoIChcIi5jb25jYXQoc2VudGVuY2VzUGVyUGFyYWdyYXBoLm1pbiwgXCIpIGNhbm5vdCBleGNlZWQgbWF4aW11bSAoXCIpLmNvbmNhdChzZW50ZW5jZXNQZXJQYXJhZ3JhcGgubWF4LCBcIikuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAod29yZHNQZXJTZW50ZW5jZS5taW4gPiB3b3Jkc1BlclNlbnRlbmNlLm1heCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaW11bSBudW1iZXIgb2Ygd29yZHMgcGVyIHNlbnRlbmNlIChcIi5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5taW4sIFwiKSBjYW5ub3QgZXhjZWVkIG1heGltdW0gKFwiKS5jb25jYXQod29yZHNQZXJTZW50ZW5jZS5tYXgsIFwiKS5cIikpO1xuICAgIH1cblxuICAgIHRoaXMuc2VudGVuY2VzUGVyUGFyYWdyYXBoID0gc2VudGVuY2VzUGVyUGFyYWdyYXBoO1xuICAgIHRoaXMud29yZHMgPSB3b3JkcztcbiAgICB0aGlzLndvcmRzUGVyU2VudGVuY2UgPSB3b3Jkc1BlclNlbnRlbmNlO1xuICAgIHRoaXMucmFuZG9tID0gcmFuZG9tIHx8IE1hdGgucmFuZG9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdlbmVyYXRvciwgW3tcbiAgICBrZXk6IFwiZ2VuZXJhdGVSYW5kb21JbnRlZ2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tV29yZHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Xb3JkcyhudW0pIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyR3b3Jkc1BlclNlbnRlbmMgPSB0aGlzLndvcmRzUGVyU2VudGVuY2UsXG4gICAgICAgICAgbWluID0gX3RoaXMkd29yZHNQZXJTZW50ZW5jLm1pbixcbiAgICAgICAgICBtYXggPSBfdGhpcyR3b3Jkc1BlclNlbnRlbmMubWF4O1xuICAgICAgdmFyIGxlbmd0aCA9IG51bSB8fCB0aGlzLmdlbmVyYXRlUmFuZG9tSW50ZWdlcihtaW4sIG1heCk7XG4gICAgICByZXR1cm4gKDAsIF91dGlsLm1ha2VBcnJheU9mTGVuZ3RoKShsZW5ndGgpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5wbHVja1JhbmRvbVdvcmQoKSwgXCIgXCIpLmNvbmNhdChhY2N1bXVsYXRvcik7XG4gICAgICB9LCBcIlwiKS50cmltKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tU2VudGVuY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TZW50ZW5jZShudW0pIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCgoMCwgX3V0aWwuY2FwaXRhbGl6ZSkodGhpcy5nZW5lcmF0ZVJhbmRvbVdvcmRzKG51bSkpLCBcIi5cIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUGFyYWdyYXBoKG51bSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzZW50ZW5jZXNQZXJQYXIgPSB0aGlzLnNlbnRlbmNlc1BlclBhcmFncmFwaCxcbiAgICAgICAgICBtaW4gPSBfdGhpcyRzZW50ZW5jZXNQZXJQYXIubWluLFxuICAgICAgICAgIG1heCA9IF90aGlzJHNlbnRlbmNlc1BlclBhci5tYXg7XG4gICAgICB2YXIgbGVuZ3RoID0gbnVtIHx8IHRoaXMuZ2VuZXJhdGVSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbiAgICAgIHJldHVybiAoMCwgX3V0aWwubWFrZUFycmF5T2ZMZW5ndGgpKGxlbmd0aCkucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzMi5nZW5lcmF0ZVJhbmRvbVNlbnRlbmNlKCksIFwiIFwiKS5jb25jYXQoYWNjdW11bGF0b3IpO1xuICAgICAgfSwgXCJcIikudHJpbSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbHVja1JhbmRvbVdvcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGx1Y2tSYW5kb21Xb3JkKCkge1xuICAgICAgdmFyIG1pbiA9IDA7XG4gICAgICB2YXIgbWF4ID0gdGhpcy53b3Jkcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZW5lcmF0ZVJhbmRvbUludGVnZXIobWluLCBtYXgpO1xuICAgICAgcmV0dXJuIHRoaXMud29yZHNbaW5kZXhdO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHZW5lcmF0b3I7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IEdlbmVyYXRvcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SkhaVzVsY21GMGIzSWlMQ0p6Wlc1MFpXNWpaWE5RWlhKUVlYSmhaM0poY0dnaUxDSnRZWGdpTENKdGFXNGlMQ0ozYjNKa2MxQmxjbE5sYm5SbGJtTmxJaXdpY21GdVpHOXRJaXdpYzJWbFpDSXNJbmR2Y21Seklpd2lWMDlTUkZNaUxDSkZjbkp2Y2lJc0lrMWhkR2dpTENKbWJHOXZjaUlzSW01MWJTSXNJbXhsYm1kMGFDSXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lJc0ltMWhhMlZCY25KaGVVOW1UR1Z1WjNSb0lpd2ljbVZrZFdObElpd2lZV05qZFcxMWJHRjBiM0lpTENKcGJtUmxlQ0lzSW5Cc2RXTnJVbUZ1Wkc5dFYyOXlaQ0lzSW5SeWFXMGlMQ0pqWVhCcGRHRnNhWHBsSWl3aVoyVnVaWEpoZEdWU1lXNWtiMjFYYjNKa2N5SXNJbWRsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12YkdsaUwyZGxibVZ5WVhSdmNpNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCWFQxSkVVeUI5SUdaeWIyMGdYQ0l1TGk5amIyNXpkR0Z1ZEhNdmQyOXlaSE5jSWp0Y2NseHVhVzF3YjNKMElIc2dZMkZ3YVhSaGJHbDZaU3dnYldGclpVRnljbUY1VDJaTVpXNW5kR2dnZlNCbWNtOXRJRndpTGk0dmRYUnBiRndpTzF4eVhHNWNjbHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JKUW05MWJtUnpJSHRjY2x4dUlDQnRhVzQ2SUc1MWJXSmxjanRjY2x4dUlDQnRZWGc2SUc1MWJXSmxjanRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUhSNWNHVWdTVkJ5Ym1jZ1BTQW9LU0E5UGlCdWRXMWlaWEk3WEhKY2JseHlYRzVsZUhCdmNuUWdkSGx3WlNCSlUyVmxaRkpoYm1SdmJTQTlJRzVsZHlBb2MyVmxaRDg2SUhOMGNtbHVaeWtnUFQ0Z1NWQnlibWM3WEhKY2JseHlYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRWxOWVhSb0lIdGNjbHh1SUNCelpXVmtjbUZ1Wkc5dE9pQkpVMlZsWkZKaGJtUnZiVHRjY2x4dWZWeHlYRzVjY2x4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSlIyVnVaWEpoZEc5eVQzQjBhVzl1Y3lCN1hISmNiaUFnYzJWdWRHVnVZMlZ6VUdWeVVHRnlZV2R5WVhCb1B6b2dTVUp2ZFc1a2N6dGNjbHh1SUNCM2IzSmtjMUJsY2xObGJuUmxibU5sUHpvZ1NVSnZkVzVrY3p0Y2NseHVJQ0J5WVc1a2IyMC9PaUJKVUhKdVp6dGNjbHh1SUNCelpXVmtQem9nYzNSeWFXNW5PMXh5WEc0Z0lIZHZjbVJ6UHpvZ2MzUnlhVzVuVzEwN1hISmNibjFjY2x4dVhISmNibU5zWVhOeklFZGxibVZ5WVhSdmNpQjdYSEpjYmlBZ2NIVmliR2xqSUhObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FEb2dTVUp2ZFc1a2N6dGNjbHh1SUNCd2RXSnNhV01nZDI5eVpITlFaWEpUWlc1MFpXNWpaVG9nU1VKdmRXNWtjenRjY2x4dUlDQndkV0pzYVdNZ2NtRnVaRzl0T2lCSlVISnVaenRjY2x4dUlDQndkV0pzYVdNZ2QyOXlaSE02SUhOMGNtbHVaMXRkTzF4eVhHNWNjbHh1SUNCamIyNXpkSEoxWTNSdmNpaDdYSEpjYmlBZ0lDQnpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2dnUFNCN0lHMWhlRG9nTnl3Z2JXbHVPaUF6SUgwc1hISmNiaUFnSUNCM2IzSmtjMUJsY2xObGJuUmxibU5sSUQwZ2V5QnRZWGc2SURFMUxDQnRhVzQ2SURVZ2ZTeGNjbHh1SUNBZ0lISmhibVJ2YlN4Y2NseHVJQ0FnSUhObFpXUXNYSEpjYmlBZ0lDQjNiM0prY3lBOUlGZFBVa1JUTEZ4eVhHNGdJSDA2SUVsSFpXNWxjbUYwYjNKUGNIUnBiMjV6SUQwZ2UzMHBJSHRjY2x4dUlDQWdJR2xtSUNoelpXNTBaVzVqWlhOUVpYSlFZWEpoWjNKaGNHZ3ViV2x1SUQ0Z2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFoZUNrZ2UxeHlYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hISmNiaUFnSUNBZ0lDQWdZRTFwYm1sdGRXMGdiblZ0WW1WeUlHOW1JSE5sYm5SbGJtTmxjeUJ3WlhJZ2NHRnlZV2R5WVhCb0lDZ2tlMXh5WEc0Z0lDQWdJQ0FnSUNBZ2MyVnVkR1Z1WTJWelVHVnlVR0Z5WVdkeVlYQm9MbTFwYmx4eVhHNGdJQ0FnSUNBZ0lIMHBJR05oYm01dmRDQmxlR05sWldRZ2JXRjRhVzExYlNBb0pIdHpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2d1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQnBaaUFvZDI5eVpITlFaWEpUWlc1MFpXNWpaUzV0YVc0Z1BpQjNiM0prYzFCbGNsTmxiblJsYm1ObExtMWhlQ2tnZTF4eVhHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEhKY2JpQWdJQ0FnSUNBZ1lFMXBibWx0ZFcwZ2JuVnRZbVZ5SUc5bUlIZHZjbVJ6SUhCbGNpQnpaVzUwWlc1alpTQW9KSHRjY2x4dUlDQWdJQ0FnSUNBZ0lIZHZjbVJ6VUdWeVUyVnVkR1Z1WTJVdWJXbHVYSEpjYmlBZ0lDQWdJQ0FnZlNrZ1kyRnVibTkwSUdWNFkyVmxaQ0J0WVhocGJYVnRJQ2drZTNkdmNtUnpVR1Z5VTJWdWRHVnVZMlV1YldGNGZTa3VZQ3hjY2x4dUlDQWdJQ0FnS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQjBhR2x6TG5ObGJuUmxibU5sYzFCbGNsQmhjbUZuY21Gd2FDQTlJSE5sYm5SbGJtTmxjMUJsY2xCaGNtRm5jbUZ3YUR0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhNZ1BTQjNiM0prY3p0Y2NseHVJQ0FnSUhSb2FYTXVkMjl5WkhOUVpYSlRaVzUwWlc1alpTQTlJSGR2Y21SelVHVnlVMlZ1ZEdWdVkyVTdYSEpjYmlBZ0lDQjBhR2x6TG5KaGJtUnZiU0E5SUhKaGJtUnZiU0I4ZkNCTllYUm9MbkpoYm1SdmJUdGNjbHh1SUNCOVhISmNibHh5WEc0Z0lIQjFZbXhwWXlCblpXNWxjbUYwWlZKaGJtUnZiVWx1ZEdWblpYSW9iV2x1T2lCdWRXMWlaWElzSUcxaGVEb2diblZ0WW1WeUtUb2diblZ0WW1WeUlIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIUm9hWE11Y21GdVpHOXRLQ2tnS2lBb2JXRjRJQzBnYldsdUlDc2dNU2tnS3lCdGFXNHBPMXh5WEc0Z0lIMWNjbHh1WEhKY2JpQWdjSFZpYkdsaklHZGxibVZ5WVhSbFVtRnVaRzl0VjI5eVpITW9iblZ0UHpvZ2JuVnRZbVZ5S1RvZ2MzUnlhVzVuSUh0Y2NseHVJQ0FnSUdOdmJuTjBJSHNnYldsdUxDQnRZWGdnZlNBOUlIUm9hWE11ZDI5eVpITlFaWEpUWlc1MFpXNWpaVHRjY2x4dUlDQWdJR052Ym5OMElHeGxibWQwYUNBOUlHNTFiU0I4ZkNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnYldGclpVRnljbUY1VDJaTVpXNW5kR2dvYkdWdVozUm9LVnh5WEc0Z0lDQWdJQ0F1Y21Wa2RXTmxLQ2hoWTJOMWJYVnNZWFJ2Y2pvZ2MzUnlhVzVuTENCcGJtUmxlRG9nYm5WdFltVnlLVG9nYzNSeWFXNW5JRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1d2JIVmphMUpoYm1SdmJWZHZjbVFvS1gwZ0pIdGhZMk4xYlhWc1lYUnZjbjFnTzF4eVhHNGdJQ0FnSUNCOUxDQmNJbHdpS1Z4eVhHNGdJQ0FnSUNBdWRISnBiU2dwTzF4eVhHNGdJSDFjY2x4dVhISmNiaUFnY0hWaWJHbGpJR2RsYm1WeVlYUmxVbUZ1Wkc5dFUyVnVkR1Z1WTJVb2JuVnRQem9nYm5WdFltVnlLVG9nYzNSeWFXNW5JSHRjY2x4dUlDQWdJSEpsZEhWeWJpQmdKSHRqWVhCcGRHRnNhWHBsS0hSb2FYTXVaMlZ1WlhKaGRHVlNZVzVrYjIxWGIzSmtjeWh1ZFcwcEtYMHVZRHRjY2x4dUlDQjlYSEpjYmx4eVhHNGdJSEIxWW14cFl5Qm5aVzVsY21GMFpWSmhibVJ2YlZCaGNtRm5jbUZ3YUNodWRXMC9PaUJ1ZFcxaVpYSXBPaUJ6ZEhKcGJtY2dlMXh5WEc0Z0lDQWdZMjl1YzNRZ2V5QnRhVzRzSUcxaGVDQjlJRDBnZEdocGN5NXpaVzUwWlc1alpYTlFaWEpRWVhKaFozSmhjR2c3WEhKY2JpQWdJQ0JqYjI1emRDQnNaVzVuZEdnZ1BTQnVkVzBnZkh3Z2RHaHBjeTVuWlc1bGNtRjBaVkpoYm1SdmJVbHVkR1ZuWlhJb2JXbHVMQ0J0WVhncE8xeHlYRzRnSUNBZ2NtVjBkWEp1SUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvS0d4bGJtZDBhQ2xjY2x4dUlDQWdJQ0FnTG5KbFpIVmpaU2dvWVdOamRXMTFiR0YwYjNJNklITjBjbWx1Wnl3Z2FXNWtaWGc2SUc1MWJXSmxjaWs2SUhOMGNtbHVaeUE5UGlCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdVoyVnVaWEpoZEdWU1lXNWtiMjFUWlc1MFpXNWpaU2dwZlNBa2UyRmpZM1Z0ZFd4aGRHOXlmV0E3WEhKY2JpQWdJQ0FnSUgwc0lGd2lYQ0lwWEhKY2JpQWdJQ0FnSUM1MGNtbHRLQ2s3WEhKY2JpQWdmVnh5WEc1Y2NseHVJQ0J3ZFdKc2FXTWdjR3gxWTJ0U1lXNWtiMjFYYjNKa0tDazZJSE4wY21sdVp5QjdYSEpjYmlBZ0lDQmpiMjV6ZENCdGFXNGdQU0F3TzF4eVhHNGdJQ0FnWTI5dWMzUWdiV0Y0SUQwZ2RHaHBjeTUzYjNKa2N5NXNaVzVuZEdnZ0xTQXhPMXh5WEc0Z0lDQWdZMjl1YzNRZ2FXNWtaWGdnUFNCMGFHbHpMbWRsYm1WeVlYUmxVbUZ1Wkc5dFNXNTBaV2RsY2lodGFXNHNJRzFoZUNrN1hISmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTNiM0prYzF0cGJtUmxlRjA3WEhKY2JpQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JIWlc1bGNtRjBiM0k3WEhKY2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3pzN096czdPenM3TzBsQmRVSk5RU3hUTzBWQlRVb3NjVUpCVFRKQ08wbEJRVUVzSzBWQlFVb3NSVUZCU1R0SlFVRkJMR2xEUVV4NlFrTXNjVUpCUzNsQ08wbEJRVUVzU1VGTWVrSkJMSEZDUVV0NVFpeHpRMEZNUkR0TlFVRkZReXhIUVVGSExFVkJRVVVzUTBGQlVEdE5RVUZWUXl4SFFVRkhMRVZCUVVVN1NVRkJaaXhEUVV0RE8wbEJRVUVzYVVOQlNucENReXhuUWtGSmVVSTdTVUZCUVN4SlFVcDZRa0VzWjBKQlNYbENMSE5EUVVwT08wMUJRVVZHTEVkQlFVY3NSVUZCUlN4RlFVRlFPMDFCUVZkRExFZEJRVWNzUlVGQlJUdEpRVUZvUWl4RFFVbE5PMGxCUVVFc1NVRklla0pGTEUxQlIzbENMRkZCU0hwQ1FTeE5RVWQ1UWp0SlFVRkJMRWxCUm5wQ1F5eEpRVVY1UWl4UlFVWjZRa0VzU1VGRmVVSTdTVUZCUVN4elFrRkVla0pETEV0QlEzbENPMGxCUVVFc1NVRkVla0pCTEV0QlEzbENMREpDUVVScVFrTXNXVUZEYVVJN08wbEJRVUU3TzBsQlFVRTdPMGxCUVVFN08wbEJRVUU3TzBsQlFVRTdPMGxCUTNwQ0xFbEJRVWxRTEhGQ1FVRnhRaXhEUVVGRFJTeEhRVUYwUWl4SFFVRTBRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJRWFJFTEVWQlFUSkVPMDFCUTNwRUxFMUJRVTBzU1VGQlNVOHNTMEZCU2l4elJFRkZSbElzY1VKQlFYRkNMRU5CUVVORkxFZEJSbkJDTEhORFFVZDNRa1lzY1VKQlFYRkNMRU5CUVVORExFZEJTRGxETEZGQlFVNDdTVUZMUkRzN1NVRkZSQ3hKUVVGSlJTeG5Ra0ZCWjBJc1EwRkJRMFFzUjBGQmFrSXNSMEZCZFVKRExHZENRVUZuUWl4RFFVRkRSaXhIUVVFMVF5eEZRVUZwUkR0TlFVTXZReXhOUVVGTkxFbEJRVWxQTEV0QlFVb3NhVVJCUlVaTUxHZENRVUZuUWl4RFFVRkRSQ3hIUVVabUxITkRRVWQzUWtNc1owSkJRV2RDTEVOQlFVTkdMRWRCU0hwRExGRkJRVTQ3U1VGTFJEczdTVUZGUkN4TFFVRkxSQ3h4UWtGQlRDeEhRVUUyUWtFc2NVSkJRVGRDTzBsQlEwRXNTMEZCUzAwc1MwRkJUQ3hIUVVGaFFTeExRVUZpTzBsQlEwRXNTMEZCUzBnc1owSkJRVXdzUjBGQmQwSkJMR2RDUVVGNFFqdEpRVU5CTEV0QlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlRTeEpRVUZKU3l4SlFVRkpMRU5CUVVOTUxFMUJRVGRDTzBWQlEwUTdPenM3VjBGRlJDd3JRa0ZCTmtKR0xFZEJRVGRDTEVWQlFUQkRSQ3hIUVVFeFF5eEZRVUVyUkR0TlFVTTNSQ3hQUVVGUFVTeEpRVUZKTEVOQlFVTkRMRXRCUVV3c1EwRkJWeXhMUVVGTFRpeE5RVUZNTEUxQlFXbENTQ3hIUVVGSExFZEJRVWRETEVkQlFVNHNSMEZCV1N4RFFVRTNRaXhKUVVGclEwRXNSMEZCTjBNc1EwRkJVRHRKUVVORU96czdWMEZGUkN3MlFrRkJNa0pUTEVkQlFUTkNMRVZCUVdsRU8wMUJRVUU3TzAxQlF5OURMRFJDUVVGeFFpeExRVUZMVWl4blFrRkJNVUk3VFVGQlFTeEpRVUZSUkN4SFFVRlNMSGxDUVVGUlFTeEhRVUZTTzAxQlFVRXNTVUZCWVVRc1IwRkJZaXg1UWtGQllVRXNSMEZCWWp0TlFVTkJMRWxCUVUxWExFMUJRVTBzUjBGQlIwUXNSMEZCUnl4SlFVRkpMRXRCUVV0RkxIRkNRVUZNTEVOQlFUSkNXQ3hIUVVFelFpeEZRVUZuUTBRc1IwRkJhRU1zUTBGQmRFSTdUVUZEUVN4UFFVRlBMRWxCUVVGaExIVkNRVUZCTEVWQlFXdENSaXhOUVVGc1FpeEZRVU5LUnl4TlFVUkpMRU5CUTBjc1ZVRkJRME1zVjBGQlJDeEZRVUZ6UWtNc1MwRkJkRUlzUlVGQlowUTdVVUZEZEVRc2FVSkJRVlVzUzBGQlNTeERRVUZEUXl4bFFVRk1MRVZCUVZZc1kwRkJiME5HTEZkQlFYQkRPMDFCUTBRc1EwRklTU3hGUVVkR0xFVkJTRVVzUlVGSlNrY3NTVUZLU1N4RlFVRlFPMGxCUzBRN096dFhRVVZFTEdkRFFVRTRRbElzUjBGQk9VSXNSVUZCYjBRN1RVRkRiRVFzYVVKQlFWVXNTVUZCUVZNc1owSkJRVUVzUlVGQlZ5eExRVUZMUXl4dFFrRkJUQ3hEUVVGNVFsWXNSMEZCZWtJc1EwRkJXQ3hEUVVGV08wbEJRMFE3T3p0WFFVVkVMR2xEUVVFclFrRXNSMEZCTDBJc1JVRkJjVVE3VFVGQlFUczdUVUZEYmtRc05FSkJRWEZDTEV0QlFVdFlMSEZDUVVFeFFqdE5RVUZCTEVsQlFWRkZMRWRCUVZJc2VVSkJRVkZCTEVkQlFWSTdUVUZCUVN4SlFVRmhSQ3hIUVVGaUxIbENRVUZoUVN4SFFVRmlPMDFCUTBFc1NVRkJUVmNzVFVGQlRTeEhRVUZIUkN4SFFVRkhMRWxCUVVrc1MwRkJTMFVzY1VKQlFVd3NRMEZCTWtKWUxFZEJRVE5DTEVWQlFXZERSQ3hIUVVGb1F5eERRVUYwUWp0TlFVTkJMRTlCUVU4c1NVRkJRV0VzZFVKQlFVRXNSVUZCYTBKR0xFMUJRV3hDTEVWQlEwcEhMRTFCUkVrc1EwRkRSeXhWUVVGRFF5eFhRVUZFTEVWQlFYTkNReXhMUVVGMFFpeEZRVUZuUkR0UlFVTjBSQ3hwUWtGQlZTeE5RVUZKTEVOQlFVTkxMSE5DUVVGTUxFVkJRVllzWTBGQk1rTk9MRmRCUVRORE8wMUJRMFFzUTBGSVNTeEZRVWRHTEVWQlNFVXNSVUZKU2tjc1NVRktTU3hGUVVGUU8wbEJTMFE3T3p0WFFVVkVMREpDUVVGcFF6dE5RVU12UWl4SlFVRk5ha0lzUjBGQlJ5eEhRVUZITEVOQlFWbzdUVUZEUVN4SlFVRk5SQ3hIUVVGSExFZEJRVWNzUzBGQlMwc3NTMEZCVEN4RFFVRlhUU3hOUVVGWUxFZEJRVzlDTEVOQlFXaERPMDFCUTBFc1NVRkJUVXNzUzBGQlN5eEhRVUZITEV0QlFVdEtMSEZDUVVGTUxFTkJRVEpDV0N4SFFVRXpRaXhGUVVGblEwUXNSMEZCYUVNc1EwRkJaRHROUVVOQkxFOUJRVThzUzBGQlMwc3NTMEZCVEN4RFFVRlhWeXhMUVVGWUxFTkJRVkE3U1VGRFJEczdPenM3TzJWQlIxbHNRaXhUSW4wPSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBAcGFyYW0gc3RyICBBIHN0cmluZyB0aGF0IG1heSBvciBtYXkgbm90IGJlIGNhcGl0YWxpemVkLlxyXG4gKiBAcmV0dXJucyAgICBBIGNhcGl0YWxpemVkIHN0cmluZy5cclxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gIHZhciB0cmltbWVkID0gc3RyLnRyaW0oKTtcbiAgcmV0dXJuIHRyaW1tZWQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0cmltbWVkLnNsaWNlKDEpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SmpZWEJwZEdGc2FYcGxJaXdpYzNSeUlpd2lkSEpwYlcxbFpDSXNJblJ5YVcwaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2WTJGd2FYUmhiR2w2WlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUUhCaGNtRnRJSE4wY2lBZ1FTQnpkSEpwYm1jZ2RHaGhkQ0J0WVhrZ2IzSWdiV0Y1SUc1dmRDQmlaU0JqWVhCcGRHRnNhWHBsWkM1Y2NseHVJQ29nUUhKbGRIVnlibk1nSUNBZ1FTQmpZWEJwZEdGc2FYcGxaQ0J6ZEhKcGJtY3VYSEpjYmlBcUwxeHlYRzVqYjI1emRDQmpZWEJwZEdGc2FYcGxJRDBnS0hOMGNqb2djM1J5YVc1bktUb2djM1J5YVc1bklEMCtJSHRjY2x4dUlDQmpiMjV6ZENCMGNtbHRiV1ZrSUQwZ2MzUnlMblJ5YVcwb0tUdGNjbHh1SUNCeVpYUjFjbTRnZEhKcGJXMWxaQzVqYUdGeVFYUW9NQ2t1ZEc5VmNIQmxja05oYzJVb0tTQXJJSFJ5YVcxdFpXUXVjMnhwWTJVb01TazdYSEpjYm4wN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqWVhCcGRHRnNhWHBsTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxGVkJRVlVzUjBGQlJ5eFRRVUZpUVN4VlFVRmhMRU5CUVVORExFZEJRVVFzUlVGQmVVSTdSVUZETVVNc1NVRkJUVU1zVDBGQlR5eEhRVUZIUkN4SFFVRkhMRU5CUVVORkxFbEJRVW9zUlVGQmFFSTdSVUZEUVN4UFFVRlBSQ3hQUVVGUExFTkJRVU5GTEUxQlFWSXNRMEZCWlN4RFFVRm1MRVZCUVd0Q1F5eFhRVUZzUWl4TFFVRnJRMGdzVDBGQlR5eERRVUZEU1N4TFFVRlNMRU5CUVdNc1EwRkJaQ3hEUVVGNlF6dEJRVU5FTEVOQlNFUTdPMlZCUzJWT0xGVWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjYXBpdGFsaXplXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jYXBpdGFsaXplW1wiZGVmYXVsdFwiXTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc05vZGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lzTm9kZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNSZWFjdE5hdGl2ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXNSZWFjdE5hdGl2ZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNXaW5kb3dzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pc1dpbmRvd3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1ha2VBcnJheU9mTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZkxlbmd0aFtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZUFycmF5T2ZTdHJpbmdzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWtlQXJyYXlPZlN0cmluZ3NbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcblxudmFyIF9jYXBpdGFsaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jYXBpdGFsaXplXCIpKTtcblxudmFyIF9pc05vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lzTm9kZVwiKSk7XG5cbnZhciBfaXNSZWFjdE5hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXNSZWFjdE5hdGl2ZVwiKSk7XG5cbnZhciBfaXNXaW5kb3dzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pc1dpbmRvd3NcIikpO1xuXG52YXIgX21ha2VBcnJheU9mTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZkxlbmd0aFwiKSk7XG5cbnZhciBfbWFrZUFycmF5T2ZTdHJpbmdzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWtlQXJyYXlPZlN0cmluZ3NcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2VzEwc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM1YwYVd3dmFXNWtaWGd1ZEhNaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTmhjR2wwWVd4cGVtVWdabkp2YlNCY0lpNHZZMkZ3YVhSaGJHbDZaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTk9iMlJsSUdaeWIyMGdYQ0l1TDJselRtOWtaVndpTzF4eVhHNXBiWEJ2Y25RZ2FYTlNaV0ZqZEU1aGRHbDJaU0JtY205dElGd2lMaTlwYzFKbFlXTjBUbUYwYVhabFhDSTdYSEpjYm1sdGNHOXlkQ0JwYzFkcGJtUnZkM01nWm5KdmJTQmNJaTR2YVhOWGFXNWtiM2R6WENJN1hISmNibWx0Y0c5eWRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQm1jbTl0SUZ3aUxpOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFGd2lPMXh5WEc1cGJYQnZjblFnYldGclpVRnljbUY1VDJaVGRISnBibWR6SUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVUzUnlhVzVuYzF3aU8xeHlYRzVjY2x4dVpYaHdiM0owSUh0Y2NseHVJQ0JqWVhCcGRHRnNhWHBsTEZ4eVhHNGdJR2x6VG05a1pTeGNjbHh1SUNCcGMxSmxZV04wVG1GMGFYWmxMRnh5WEc0Z0lHbHpWMmx1Wkc5M2N5eGNjbHh1SUNCdFlXdGxRWEp5WVhsUFpreGxibWQwYUN4Y2NseHVJQ0J0WVd0bFFYSnlZWGxQWmxOMGNtbHVaM01zWEhKY2JuMDdYSEpjYmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHJldHVybnMgIFRydWUgaWYgdGhlIHJ1bnRpbWUgaXMgTm9kZUpTLlxyXG4gKi9cbnZhciBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUoKSB7XG4gIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmICEhbW9kdWxlLmV4cG9ydHM7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc05vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXeUpwYzA1dlpHVWlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2YzNKakwzVjBhV3d2YVhOT2IyUmxMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh5WEc0Z0tpQkFjbVYwZFhKdWN5QWdWSEoxWlNCcFppQjBhR1VnY25WdWRHbHRaU0JwY3lCT2IyUmxTbE11WEhKY2JpQXFMMXh5WEc1amIyNXpkQ0JwYzA1dlpHVWdQU0FvS1RvZ1ltOXZiR1ZoYmlBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJ0YjJSMWJHVWdJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdKaVlnSVNGdGIyUjFiR1V1Wlhod2IzSjBjenRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdselRtOWtaVHRjY2x4dUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlRVRXNUVUZCVFN4SFFVRkhMRk5CUVZSQkxFMUJRVk1zUjBGQlpUdEZRVU0xUWl4UFFVRlBMRTlCUVU5RExFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zUTBGQlF5eERRVUZEUVN4TlFVRk5MRU5CUVVORExFOUJRV3BFTzBGQlEwUXNRMEZHUkRzN1pVRkpaVVlzVFNKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8qKlxyXG4gKiBDaGVjayBpZiBydW50aW1lIGlzIFJlYWN0TmF0aXZlLlxyXG4gKiBTb2x1dGlvbiBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20va25pY2tsYWJzL2xvcmVtLWlwc3VtLmpzL3B1bGwvNTIvZmlsZXNcclxuICpcclxuICogQHJldHVybnMgIFRydWUgaWYgcnVudGltZSBpcyBSZWFjdE5hdGl2ZS5cclxuICovXG52YXIgaXNSZWFjdE5hdGl2ZSA9IGZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XG4gIHZhciBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBpc1JlYWN0TmF0aXZlUmVzdWx0ID0gbmF2aWdhdG9yLnByb2R1Y3QgPT09IFwiUmVhY3ROYXRpdmVcIjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlzUmVhY3ROYXRpdmVSZXN1bHQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc1JlYWN0TmF0aXZlUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNSZWFjdE5hdGl2ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNld5SnBjMUpsWVdOMFRtRjBhWFpsSWl3aWFYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2RDSXNJbTVoZG1sbllYUnZjaUlzSW5CeWIyUjFZM1FpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5TWldGamRFNWhkR2wyWlM1MGN5SmRMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2NseHVJQ29nUTJobFkyc2dhV1lnY25WdWRHbHRaU0JwY3lCU1pXRmpkRTVoZEdsMlpTNWNjbHh1SUNvZ1UyOXNkWFJwYjI0Z1ltRnpaV1FnYjI0Z2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwydHVhV05yYkdGaWN5OXNiM0psYlMxcGNITjFiUzVxY3k5d2RXeHNMelV5TDJacGJHVnpYSEpjYmlBcVhISmNiaUFxSUVCeVpYUjFjbTV6SUNCVWNuVmxJR2xtSUhKMWJuUnBiV1VnYVhNZ1VtVmhZM1JPWVhScGRtVXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnBjMUpsWVdOMFRtRjBhWFpsSUQwZ0tDazZJR0p2YjJ4bFlXNGdQVDRnZTF4eVhHNGdJR3hsZENCcGMxSmxZV04wVG1GMGFYWmxVbVZ6ZFd4ME9pQmliMjlzWldGdUlEMGdabUZzYzJVN1hISmNibHh5WEc0Z0lIUnllU0I3WEhKY2JpQWdJQ0JwYzFKbFlXTjBUbUYwYVhabFVtVnpkV3gwSUQwZ2JtRjJhV2RoZEc5eUxuQnliMlIxWTNRZ1BUMDlJRndpVW1WaFkzUk9ZWFJwZG1WY0lqdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMUpsWVdOMFRtRjBhWFpsVW1WemRXeDBJRDBnWm1Gc2MyVTdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQnlaWFIxY200Z2FYTlNaV0ZqZEU1aGRHbDJaVkpsYzNWc2REdGNjbHh1ZlR0Y2NseHVYSEpjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR2x6VW1WaFkzUk9ZWFJwZG1VN1hISmNiaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR0ZCUVdFc1IwRkJSeXhUUVVGb1FrRXNZVUZCWjBJc1IwRkJaVHRGUVVOdVF5eEpRVUZKUXl4dFFrRkJORUlzUjBGQlJ5eExRVUZ1UXpzN1JVRkZRU3hKUVVGSk8wbEJRMFpCTEcxQ1FVRnRRaXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTlCUVZZc1MwRkJjMElzWVVGQk5VTTdSVUZEUkN4RFFVWkVMRU5CUlVVc1QwRkJUME1zUTBGQlVDeEZRVUZWTzBsQlExWklMRzFDUVVGdFFpeEhRVUZITEV0QlFYUkNPMFZCUTBRN08wVkJSVVFzVDBGQlQwRXNiVUpCUVZBN1FVRkRSQ3hEUVZaRU96dGxRVmxsUkN4aEluMD0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3BsYXRmb3JtcyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGxhdGZvcm1zXCIpO1xuXG4vKipcclxuICogQHJldHVybnMgVHJ1ZSBpZiBwcm9jZXNzIGlzIHdpbmRvd3MuXHJcbiAqL1xudmFyIGlzV2luZG93cyA9IGZ1bmN0aW9uIGlzV2luZG93cygpIHtcbiAgdmFyIGlzV2luZG93c1Jlc3VsdCA9IGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gX3BsYXRmb3Jtcy5TVVBQT1JURURfUExBVEZPUk1TLldJTjMyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaXNXaW5kb3dzUmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNXaW5kb3dzUmVzdWx0O1xufTtcblxudmFyIF9kZWZhdWx0ID0gaXNXaW5kb3dzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKcGMxZHBibVJ2ZDNNaUxDSnBjMWRwYm1SdmQzTlNaWE4xYkhRaUxDSndjbTlqWlhOeklpd2ljR3hoZEdadmNtMGlMQ0pUVlZCUVQxSlVSVVJmVUV4QlZFWlBVazFUSWl3aVYwbE9NeklpTENKbElsMHNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNWMGFXd3ZhWE5YYVc1a2IzZHpMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lGTlZVRkJQVWxSRlJGOVFURUZVUms5U1RWTWdmU0JtY205dElGd2lMaTR2WTI5dWMzUmhiblJ6TDNCc1lYUm1iM0p0YzF3aU8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFQnlaWFIxY201eklGUnlkV1VnYVdZZ2NISnZZMlZ6Y3lCcGN5QjNhVzVrYjNkekxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2FYTlhhVzVrYjNkeklEMGdLQ2s2SUdKdmIyeGxZVzRnUFQ0Z2UxeHlYRzRnSUd4bGRDQnBjMWRwYm1SdmQzTlNaWE4xYkhRNklHSnZiMnhsWVc0Z1BTQm1ZV3h6WlR0Y2NseHVJQ0IwY25rZ2UxeHlYRzRnSUNBZ2FYTlhhVzVrYjNkelVtVnpkV3gwSUQwZ2NISnZZMlZ6Y3k1d2JHRjBabTl5YlNBOVBUMGdVMVZRVUU5U1ZFVkVYMUJNUVZSR1QxSk5VeTVYU1U0ek1qdGNjbHh1SUNCOUlHTmhkR05vSUNobEtTQjdYSEpjYmlBZ0lDQnBjMWRwYm1SdmQzTlNaWE4xYkhRZ1BTQm1ZV3h6WlR0Y2NseHVJQ0I5WEhKY2JpQWdjbVYwZFhKdUlHbHpWMmx1Wkc5M2MxSmxjM1ZzZER0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHbHpWMmx1Wkc5M2N6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJUVUVzVTBGQlV5eEhRVUZITEZOQlFWcEJMRk5CUVZrc1IwRkJaVHRGUVVNdlFpeEpRVUZKUXl4bFFVRjNRaXhIUVVGSExFdEJRUzlDT3p0RlFVTkJMRWxCUVVrN1NVRkRSa0VzWlVGQlpTeEhRVUZIUXl4UFFVRlBMRU5CUVVORExGRkJRVklzUzBGQmNVSkRMRGhDUVVGQkxFTkJRVzlDUXl4TFFVRXpSRHRGUVVORUxFTkJSa1FzUTBGRlJTeFBRVUZQUXl4RFFVRlFMRVZCUVZVN1NVRkRWa3dzWlVGQlpTeEhRVUZITEV0QlFXeENPMFZCUTBRN08wVkJRMFFzVDBGQlQwRXNaVUZCVUR0QlFVTkVMRU5CVWtRN08yVkJWV1ZFTEZNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG4vKipcclxuICogQHBhcmFtIGxlbmd0aCBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgQW4gYXJyYXkgb2YgaW5kZXhlcyBvZiBsZW5ndGggXCJ4XCIuXHJcbiAqL1xudmFyIG1ha2VBcnJheU9mTGVuZ3RoID0gZnVuY3Rpb24gbWFrZUFycmF5T2ZMZW5ndGgoKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IG1ha2VBcnJheU9mTGVuZ3RoO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpreGxibWQwYUNJc0lteGxibWQwYUNJc0lrRnljbUY1SWl3aVlYQndiSGtpTENKdFlYQWlMQ0pwZEdWdElpd2lhVzVrWlhnaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDNTBjeUpkTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNjbHh1SUNvZ1FIQmhjbUZ0SUd4bGJtZDBhQ0JNWlc1bmRHZ2dYQ0o0WENJdVhISmNiaUFxSUVCeVpYUjFjbTV6SUNBZ0lDQWdRVzRnWVhKeVlYa2diMllnYVc1a1pYaGxjeUJ2WmlCc1pXNW5kR2dnWENKNFhDSXVYSEpjYmlBcUwxeHlYRzVqYjI1emRDQnRZV3RsUVhKeVlYbFBaa3hsYm1kMGFDQTlJQ2hzWlc1bmRHZzZJRzUxYldKbGNpQTlJREFwT2lCdWRXMWlaWEpiWFNBOVBpQjdYSEpjYmlBZ2NtVjBkWEp1SUVGeWNtRjVMbUZ3Y0d4NUtHNTFiR3dzSUVGeWNtRjVLR3hsYm1kMGFDa3BMbTFoY0NoY2NseHVJQ0FnSUNocGRHVnRPaUJoYm5rc0lHbHVaR1Y0T2lCdWRXMWlaWElwT2lCdWRXMWlaWElnUFQ0Z2FXNWtaWGdzWEhKY2JpQWdLVHRjY2x4dWZUdGNjbHh1WEhKY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvTzF4eVhHNGlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxQkxHbENRVUZwUWl4SFFVRkhMRk5CUVhCQ1FTeHBRa0ZCYjBJc1IwRkJhME03UlVGQlFTeEpRVUZxUTBNc1RVRkJhVU1zZFVWQlFXaENMRU5CUVdkQ08wVkJRekZFTEU5QlFVOURMRXRCUVVzc1EwRkJRME1zUzBGQlRpeERRVUZaTEVsQlFWb3NSVUZCYTBKRUxFdEJRVXNzUTBGQlEwUXNUVUZCUkN4RFFVRjJRaXhGUVVGcFEwY3NSMEZCYWtNc1EwRkRUQ3hWUVVGRFF5eEpRVUZFTEVWQlFWbERMRXRCUVZvN1NVRkJRU3hQUVVGelEwRXNTMEZCZEVNN1JVRkJRU3hEUVVSTExFTkJRVkE3UVVGSFJDeERRVXBFT3p0bFFVMWxUaXhwUWlKOSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfbWFrZUFycmF5T2ZMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21ha2VBcnJheU9mTGVuZ3RoXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBAcGFyYW0gbGVuZ3RoICBMZW5ndGggXCJ4XCIuXHJcbiAqIEByZXR1cm5zICAgICAgIEFuIGFycmF5IG9mIHN0cmluZ3Mgb2YgbGVuZ3RoIFwieFwiLlxyXG4gKi9cbnZhciBtYWtlQXJyYXlPZlN0cmluZ3MgPSBmdW5jdGlvbiBtYWtlQXJyYXlPZlN0cmluZ3MobGVuZ3RoLCBtYWtlU3RyaW5nKSB7XG4gIHZhciBhcnIgPSAoMCwgX21ha2VBcnJheU9mTGVuZ3RoW1wiZGVmYXVsdFwiXSkobGVuZ3RoKTtcbiAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYWtlU3RyaW5nKCk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gbWFrZUFycmF5T2ZTdHJpbmdzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2V3lKdFlXdGxRWEp5WVhsUFpsTjBjbWx1WjNNaUxDSnNaVzVuZEdnaUxDSnRZV3RsVTNSeWFXNW5JaXdpWVhKeUlpd2liV0ZyWlVGeWNtRjVUMlpNWlc1bmRHZ2lMQ0p0WVhBaVhTd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12ZFhScGJDOXRZV3RsUVhKeVlYbFBabE4wY21sdVozTXVkSE1pWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUcxaGEyVkJjbkpoZVU5bVRHVnVaM1JvSUdaeWIyMGdYQ0l1TDIxaGEyVkJjbkpoZVU5bVRHVnVaM1JvWENJN1hISmNiaThxS2x4eVhHNGdLaUJBY0dGeVlXMGdiR1Z1WjNSb0lDQk1aVzVuZEdnZ1hDSjRYQ0l1WEhKY2JpQXFJRUJ5WlhSMWNtNXpJQ0FnSUNBZ0lFRnVJR0Z5Y21GNUlHOW1JSE4wY21sdVozTWdiMllnYkdWdVozUm9JRndpZUZ3aUxseHlYRzRnS2k5Y2NseHVZMjl1YzNRZ2JXRnJaVUZ5Y21GNVQyWlRkSEpwYm1keklEMGdLRnh5WEc0Z0lHeGxibWQwYURvZ2JuVnRZbVZ5TEZ4eVhHNGdJRzFoYTJWVGRISnBibWM2SUNncElEMCtJSE4wY21sdVp5eGNjbHh1S1RvZ2MzUnlhVzVuVzEwZ1BUNGdlMXh5WEc0Z0lHTnZibk4wSUdGeWNpQTlJRzFoYTJWQmNuSmhlVTltVEdWdVozUm9LR3hsYm1kMGFDazdYSEpjYmlBZ2NtVjBkWEp1SUdGeWNpNXRZWEFvS0NrZ1BUNGdiV0ZyWlZOMGNtbHVaeWdwS1R0Y2NseHVmVHRjY2x4dVhISmNibVY0Y0c5eWRDQmtaV1poZFd4MElHMWhhMlZCY25KaGVVOW1VM1J5YVc1bmN6dGNjbHh1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVMUJMR3RDUVVGclFpeEhRVUZITEZOQlFYSkNRU3hyUWtGQmNVSXNRMEZEZWtKRExFMUJSSGxDTEVWQlJYcENReXhWUVVaNVFpeEZRVWRhTzBWQlEySXNTVUZCVFVNc1IwRkJSeXhIUVVGSExFbEJRVUZETERaQ1FVRkJMRVZCUVd0Q1NDeE5RVUZzUWl4RFFVRmFPMFZCUTBFc1QwRkJUMFVzUjBGQlJ5eERRVUZEUlN4SFFVRktMRU5CUVZFN1NVRkJRU3hQUVVGTlNDeFZRVUZWTEVWQlFXaENPMFZCUVVFc1EwRkJVaXhEUVVGUU8wRkJRMFFzUTBGT1JEczdaVUZSWlVZc2EwSWlmUT09IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hYm91dC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdHMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3RzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5Cb2R5LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluQm9keS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmF0aW9uLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGwuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlU2V0RWxlbWVudCB9IGZyb20gXCIuLi91dGlsXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0c1wiO1xuaW1wb3J0IGltZzEgZnJvbSAnLi4vaW1nL2ljb25zL2xvY2F0aW9uLmdpZidcbmltcG9ydCBpbWcyIGZyb20gJy4uL2ltZy9jaGVmLmpwZydcbmltcG9ydCAnLi4vc2Fzcy9hYm91dC5zY3NzJ1xuXG5mdW5jdGlvbiBBYm91dFVzKCkge1xuICAgIGNvbnN0IGJvZHk9Y3JlYXRlU2V0RWxlbWVudCgnc2VjdGlvbicse1xuICAgICAgICBjbGFzczpcIndyYXBwZXItc2VjdGlvblwiXG4gICAgfSlcbiAgICBjb25zdCB3cmFwcGVyID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImFib3V0LXdyYXBwZXJcIixcbiAgICB9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXG4gICAgLypcbiAgICAgIDEuIExvY2F0aW9uXG4gICAgICAyLiBIaXN0b3J5XG4gICAgICAzLiBzb3VyY2luZyBwcm9kdWNlXG4gICAgICA0LiBBYm91dCBDaGVmIGFuZCBtYW5hZ2VyXG4gICAgICAqL1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlU2V0RWxlbWVudCgnaDEnLCB7XG4gICAgICAgIGNsYXNzOiAnYWJvdXQtdGl0bGUnXG4gICAgfSlcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQWJvdXQgVXMnXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuXG4gICAgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJoaXN0b3J5XCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBNYXAgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwibWFwXCIsXG4gICAgfSk7XG5cbiAgICBNYXAuaW5uZXJIVE1MID0gYDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyNTUyODIuMzU4NjkxNTc3NzchMmQzNi42ODIyNDE5NTA3MjI3NyEzZC0xLjMwMjg2MDI2OTY4OTU5NCEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTgyZjExNzJkODRkNDlhNyUzQTB4ZjdjZjAyNTRiMjk3OTI0YyEyc05haXJvYmkhNWUwITNtMiExc2VuITJza2UhNHYxNjk1OTAxMzA5NzgwITVtMiExc2VuITJza2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjowO1wiXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIFxuICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xuXG4gICAgY29uc3QgSGlzdG9yeVRleHQgPSBgPGgzPkFuaW1lIEZvb2Q6IEEgSm91cm5leSBUaHJvdWdoIEFuaW1lLUluc3BpcmVkIERpbmluZzwvaDM+XG5cbiAgPHA+SW4gdGhlIGJ1c3RsaW5nIHN0cmVldHMgb2YgTmFpcm9iaSwgS2VueWEsIGluIHRoZSBlYXJseSAyMDEwcywgYSB1bmlxdWUgZGluaW5nIGV4cGVyaWVuY2UgZW1lcmdlZCAtIHRoZSBNYW5nYSBDYWbDqS4gVGhpcyByZXN0YXVyYW50LCBzdGVlcGVkIGluIHRoZSBjb2xvcmZ1bCBhbmQgaW1hZ2luYXRpdmUgd29ybGQgb2YgYW5pbWUsIGJlY2FtZSBhIGN1bHR1cmFsIHBoZW5vbWVub24uPC9wPlxuICBcbiAgPHA+VGhlIGNvbmNlcHQgd2FzIGJvcm4gZnJvbSB0aGUgcGFzc2lvbiBvZiBhIGdyb3VwIG9mIGFuaW1lIGVudGh1c2lhc3RzIHdobyB3YW50ZWQgdG8gY3JlYXRlIGEgc3BhY2Ugd2hlcmUgZmFucyBjb3VsZCBpbW1lcnNlIHRoZW1zZWx2ZXMgaW4gdGhlaXIgZmF2b3JpdGUgc2hvd3MgYW5kIHNoYXJlIHRoZWlyIGV4Y2l0ZW1lbnQgd2l0aCBmZWxsb3cgb3Rha3UuIFRoZSBmaXJzdCBNYW5nYSBDYWbDqSBvcGVuZWQgaXRzIGRvb3JzIGluIEFraWhhYmFyYSwgVG9reW8ncyBFbGVjdHJpYyBUb3duLCBrbm93biBhcyB0aGUgZXBpY2VudGVyIG9mIGFuaW1lIGFuZCBtYW5nYSBjdWx0dXJlLjwvcD5cbiAgXG4gIDxwPlRoZSByZXN0YXVyYW50J3MgaW50ZXJpb3Igd2FzIGEgdmlicmFudCBibGVuZCBvZiBpY29uaWMgYW5pbWUgcG9zdGVycywgbGlmZS1zaXplZCBmaWd1cmluZXMsIGFuZCB0aGVtZWQgZGVjb3IsIHRyYW5zcG9ydGluZyBkaW5lcnMgaW50byB0aGUgd29ybGRzIG9mIHRoZWlyIGJlbG92ZWQgc2VyaWVzLiBFYWNoIGRpbmluZyBhcmVhIHJlcHJlc2VudGVkIGEgZGlmZmVyZW50IGFuaW1lLCBjcmVhdGluZyBhIGRpdmVyc2UgZXhwZXJpZW5jZSBmb3IgcGF0cm9ucy48L3A+XG4gIFxuICA8cD5UaGUgbWVudSB3YXMgYSBmdXNpb24gb2YgSmFwYW5lc2UgYW5kIGludGVybmF0aW9uYWwgY3Vpc2luZSBpbnNwaXJlZCBieSBwb3B1bGFyIGFuaW1lIGRpc2hlcy4gU2lnbmF0dXJlIGRpc2hlcyBpbmNsdWRlZCBcIk5hcnV0byBSYW1lbixcIiBcIk9uZSBQaWVjZSBCZW50byxcIiBhbmQgXCJEb3JlaGlkZXJvIEd5b3phXCI8L3A+YFxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVTZXRFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAnbG9jYXRpb24nXG4gICAgfSlcbiAgICBjb25zdCBpY29uID0gY3JlYXRlU2V0RWxlbWVudCgnaW1nJywge1xuICAgICAgICBjbGFzczogJ2xvY2F0aW9uLWljb24nLFxuICAgICAgICBzcmM6IGltZzEsXG4gICAgICAgIGFsdDogJ2xvY2F0aW9uIGljb24nXG4gICAgfSlcbiAgICBjb25zdCBsb2NhbEluZm8gPSBjcmVhdGVTZXRFbGVtZW50KCdwJywge1xuICAgICAgICBjbGFzczogXCJsb2NhdGlvbi1wXCIsXG4gICAgfSlcbiAgICBsb2NhbEluZm8uaW5uZXJIVE1MID0gYDxoMz5Mb2NhdGlvbjwvaDM+XG4gICAgV2FpeWFraSBXYXksIENodXJjaCBSZCwgUC5PLiBCb3g6IDY3NjMxIC0gMDAyMDA8YnI+IE5haXJvYmkgTmFpcm9iaSBLZW55YWBcblxuXG4gICAgLy8gPGgyPkFib3V0IENoZWY8L2gyPlxuICAgIGNvbnN0IGFib3V0Q2hlZlRleHQgPSBgXG4gICAgPGgzPkhpcm9zaGkgVGFuYWthPC9oMz5cbiAgICBcbiAgICBcbiAgICA8cD5IaXJvc2hpIFRhbmFrYSwgYm9ybiBpbiBUb2t5byBpbiAxOTc1LCBncmV3IHVwIGltbWVyc2VkIGluIHRoZSB3b3JsZCBvZiBhbmltZSBhbmQgbWFuZ2EuIEZyb20gYSB5b3VuZyBhZ2UsIGhlIHdhcyBjYXB0aXZhdGVkIGJ5IHRoZSBpbWFnaW5hdGl2ZSBzdG9yaWVzIGFuZCB2aWJyYW50IGNoYXJhY3RlcnMgdGhhdCB0aGVzZSBtZWRpdW1zIG9mZmVyZWQuIEhpcyBwYXJlbnRzIG93bmVkIGEgc21hbGwgSmFwYW5lc2UgcmVzdGF1cmFudCwgd2hlcmUgSGlyb3NoaSBvZnRlbiBoZWxwZWQgb3V0IGluIHRoZSBraXRjaGVuLjwvcD5cbiAgICBcbiAgICA8cD5BZnRlciBjb21wbGV0aW5nIGhpcyBlZHVjYXRpb24gaW4gY3VsaW5hcnkgYXJ0cyBhdCBhIHByZXN0aWdpb3VzIFRva3lvIGN1bGluYXJ5IHNjaG9vbCwgSGlyb3NoaSBob25lZCBoaXMgc2tpbGxzIGluIHZhcmlvdXMgcmVub3duZWQgcmVzdGF1cmFudHMgdGhyb3VnaG91dCBKYXBhbi4gSGUgYmVjYW1lIGEgc2tpbGxlZCBjaGVmIHdpdGggYSBmbGFpciBmb3IgZnVzaW9uIGN1aXNpbmUsIGRyYXdpbmcgaW5zcGlyYXRpb24gZnJvbSBib3RoIHRyYWRpdGlvbmFsIEphcGFuZXNlIGRpc2hlcyBhbmQgZ2xvYmFsIGN1bGluYXJ5IHRyZW5kcy48L3A+XG4gICAgXG4gICAgPHA+SW4gaGlzIGVhcmx5IDMwcywgSGlyb3NoaSBkZWNpZGVkIHRvIGNvbWJpbmUgaGlzIHR3byBwYXNzaW9uczogYW5pbWUgYW5kIGZvb2QuIFRoZSBpZGVhIGZvciB0aGUgTWFuZ2EgQ2Fmw6kgd2FzIGJvcm4gb3V0IG9mIGhpcyBkZXNpcmUgdG8gY3JlYXRlIGEgc3BhY2Ugd2hlcmUgYW5pbWUgZmFucyBjb3VsZCBnYXRoZXIsIGRpbmUgb24gZGVsaWNpb3VzIGZvb2QsIGFuZCBjZWxlYnJhdGUgdGhlaXIgc2hhcmVkIGxvdmUgZm9yIHRoZSBhcnQgZm9ybS4gSGlzIGV4dGVuc2l2ZSBjdWxpbmFyeSBleHBlcnRpc2UgYWxsb3dlZCBoaW0gdG8gY3JhZnQgYSBtZW51IHRoYXQgZmVhdHVyZWQgZGlzaGVzIGluc3BpcmVkIGJ5IHRoZSBtb3N0IGljb25pYyBhbmltZSBzZXJpZXMuPC9wPlxuICAgIFxuICAgIDxwPkhpcm9zaGkgd2FzIG5vdCBqdXN0IGEgY2hlZiBidXQgYWxzbyBhIHZpc2lvbmFyeSBlbnRyZXByZW5ldXIuIEhlIGludmVzdGVkIGhpcyBzYXZpbmdzIGFuZCBzZWN1cmVkIGZpbmFuY2lhbCBzdXBwb3J0IGZyb20gaW52ZXN0b3JzIHdobyBiZWxpZXZlZCBpbiBoaXMgdW5pcXVlIGNvbmNlcHQuIEhlIG1ldGljdWxvdXNseSBkZXNpZ25lZCB0aGUgcmVzdGF1cmFudCdzIGludGVyaW9yLCBlbnN1cmluZyB0aGF0IGV2ZXJ5IGRldGFpbCB3b3VsZCBpbW1lcnNlIGN1c3RvbWVycyBpbiB0aGUgd29ybGQgb2YgYW5pbWUuPC9wPlxuICAgIFxuICAgIDxwPkhpcm9zaGkgYWN0aXZlbHkgZW5nYWdlZCB3aXRoIHRoZSBhbmltZSBjb21tdW5pdHksIGF0dGVuZGluZyBjb252ZW50aW9ucywgaG9zdGluZyBmYW4gZ2F0aGVyaW5ncywgYW5kIGNvbGxhYm9yYXRpbmcgd2l0aCBsb2NhbCBhcnRpc3RzIHRvIHNob3djYXNlIHRoZWlyIHdvcmsgd2l0aGluIGhpcyByZXN0YXVyYW50LiBIZSBiZWxpZXZlZCBpbiB0aGUgcG93ZXIgb2YgYnVpbGRpbmcgYSBzdHJvbmcsIGluY2x1c2l2ZSBjb21tdW5pdHkgYXJvdW5kIGhpcyBlc3RhYmxpc2htZW50LjwvcD5cbiAgICBcbiAgICA8cD5VbmRlciBIaXJvc2hpJ3MgbGVhZGVyc2hpcCwgdGhlIE1hbmdhIENhZsOpIGJlY2FtZSBhbiBpY29uaWMgZGVzdGluYXRpb24gaW4gVG9reW8gYW5kIGJleW9uZCwgZHJhd2luZyB2aXNpdG9ycyBmcm9tIGFyb3VuZCB0aGUgd29ybGQuIEhpcyBkZWRpY2F0aW9uIHRvIGJvdGggdGhlIGN1bGluYXJ5IGFydHMgYW5kIGFuaW1lIGN1bHR1cmUgaGVscGVkIHNoYXBlIHRoZSByZXN0YXVyYW50IGludG8gYSB0aHJpdmluZyBodWIgZm9yIGZhbnMgYW5kIGZvb2QgZW50aHVzaWFzdHMgYWxpa2UuPC9wPlxuICAgIFxuICAgIDxwPkFzIG9mIG15IGxhc3Qga25vd2xlZGdlIHVwZGF0ZSBpbiBTZXB0ZW1iZXIgMjAyMSwgSGlyb3NoaSBUYW5ha2EgY29udGludWVzIHRvIG1hbmFnZSBhbmQgZXhwYW5kIGhpcyBhbmltZS10aGVtZWQgcmVzdGF1cmFudCBlbXBpcmUsIGVuc3VyaW5nIHRoYXQgdGhlIHNwaXJpdCBvZiBhbmltZSBhbmQgZGVsaWNpb3VzIGN1aXNpbmUgcmVtYWlucyBhIHZpYnJhbnQgcGFydCBvZiBKYXBhbidzIGN1bHR1cmFsIGxhbmRzY2FwZS48cD5gXG5cblxuICAgIGNvbnN0IEFib3V0Q2hlZiA9IGNyZWF0ZVNldEVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdhYm91dC1jaGVmJ1xuICAgIH0pXG4gICAgY29uc3QgYWJvdXRQID0gY3JlYXRlU2V0RWxlbWVudCgncCcsIHtcbiAgICAgICAgY2xhc3M6ICdhYm91dENoZWYtcCdcbiAgICB9KVxuICAgIGNvbnN0IGltZ0NoZWYgPSBjcmVhdGVTZXRFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgIGNsYXNzOiBcImNoZWYtaW1hZ2VcIixcbiAgICAgICAgc3JjOiBpbWcyLFxuICAgICAgICBhbHQ6ICdjaGVmIHBpYydcbiAgICB9KVxuICAgIGNvbnN0IHRpdGxlY2hlZiA9IGNyZWF0ZVNldEVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZWNoZWYuaW5uZXJUZXh0ID0gJ0Fib3V0IENoZWYnXG5cbiAgICBhYm91dFAuaW5uZXJIVE1MID0gYWJvdXRDaGVmVGV4dFxuXG4gICAgQWJvdXRDaGVmLmFwcGVuZENoaWxkKHRpdGxlY2hlZilcbiAgICBBYm91dENoZWYuYXBwZW5kQ2hpbGQoaW1nQ2hlZilcbiAgICBBYm91dENoZWYuYXBwZW5kQ2hpbGQoYWJvdXRQKVxuXG4gICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoaWNvbilcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhbEluZm8pXG4gICAgaGlzdG9yeS5pbm5lckhUTUwgPSBIaXN0b3J5VGV4dDtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhpc3RvcnkpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChBYm91dENoZWYpXG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoTWFwKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSlcblxuICAgIHJldHVybiBib2R5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xuIiwiaW1wb3J0IHsgTG9yZW1JcHN1bSB9IGZyb20gXCJsb3JlbS1pcHN1bVwiXG5cbmltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiXG5pbXBvcnQgaW1nMSBmcm9tICcuLi9pbWcvaG9tZV9tYWluL2ltYWdlMS5qcGcnXG5pbXBvcnQgaW1nMiBmcm9tICcuLi9pbWcvaG9tZV9tYWluL2ltYWdlMi5qcGcnXG5pbXBvcnQgaW1nMyBmcm9tICcuLi9pbWcvaG9tZV9tYWluL2ltYWdlMy5qcGcnXG5pbXBvcnQgaW1nNCBmcm9tICcuLi9pbWcvaG9tZV9tYWluL2ltYWdlNC5qcGcnXG5cbmltcG9ydCAnLi4vc2Fzcy9tYWluQm9keS5zY3NzJ1xuXG5jb25zdCBsb3JlbSA9IG5ldyBMb3JlbUlwc3VtKHtcbiAgICBzZW50ZW5jZXNQZXJQYXJhZ3JhcGg6e1xuICAgICAgICBtYXg6IDgsXG4gICAgICAgIG1pbjogNFxuICAgIH0sXG4gICAgd29yZHNQZXJTZW50ZW5jZTp7XG4gICAgICAgIG1heDogMTIsXG4gICAgICAgIG1pbjogNFxuICAgIH1cbn0pXG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgICB7XG4gICAgIGltZzogaW1nMSxcbiAgICAgdGV4dDogbG9yZW0uZ2VuZXJhdGVTZW50ZW5jZXMoNSlcbiAgICB9XG4gICAgLCB7XG4gICAgICAgIGltZzogaW1nMixcbiAgICAgICAgdGV4dDpsb3JlbS5nZW5lcmF0ZVNlbnRlbmNlcyg1KVxuICAgIH1cbiAgICAsIFxuICAgIHtcbiAgICAgICAgaW1nOmltZzMsXG4gICAgICAgIHRleHQ6bG9yZW0uZ2VuZXJhdGVTZW50ZW5jZXMoNSlcbiAgICB9XG4gICAgLFxuICAgIHtcbiAgICAgICAgaW1nOmltZzQsXG4gICAgICAgIHRleHQ6IGxvcmVtLmdlbmVyYXRlU2VudGVuY2VzKDUpXG4gICAgfVxuXVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQm9keSgpIHtcbiAgICBjb25zdCBib2R5ID0gY3JlYXRlU2V0RWxlbWVudCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ21haW4tYm9keSdcbiAgICB9KVxuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgaW1nPWNyZWF0ZVNldEVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnaW1nJyxcbiAgICAgICAgICAgIGFsdDpgaW1hZ2UtJHtpbmRleCArIDF9YCxcbiAgICAgICAgICAgIHNyYzogaW1hZ2UuaW1nXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcD1jcmVhdGVTZXRFbGVtZW50KCdwJywge1xuICAgICAgICAgICAgY2xhc3M6ICdwJ1xuICAgICAgICB9KVxuICAgICAgICBwLmlubmVyVGV4dD1pbWFnZS50ZXh0XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocClcbiAgICB9KVxuICAgIHJldHVybiBib2R5XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5Cb2R5IiwiaW1wb3J0ICcuLi9zYXNzL2NvbnRhY3RzLnNjc3MnXG5pbXBvcnQgaW1nMSBmcm9tIFwiLi4vaW1nL2ljb25zL3Bob25lLnBuZ1wiXG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2ljb25zL2FkZHJlc3MucG5nXCJcbmltcG9ydCBpbWczIGZyb20gXCIuLi9pbWcvaWNvbnMvZW1haWwucG5nXCJcbmltcG9ydCB7Y3JlYXRlU2V0RWxlbWVudCwgY3JlYXRlRnVsbEVsZW1lbnR9IGZyb20gJy4uL3V0aWwnXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIix7XG4gICAgY2xhc3M6XCJjb250YWN0c1wiXG59KVxuY29uc3QgY29udGFjdEluZm89Y3JlYXRlU2V0RWxlbWVudChcImRpdlwiLHtcbiAgICBjbGFzczpcImJvZHlcIlxufSlcbmNvbnN0IHBob25lPWNyZWF0ZUZ1bGxFbGVtZW50KCdwJyx7XG4gICAgY2xhc3M6XCJwaG9uZSBpbmZvXCJcbn0sIGA8c3Bhbj48aW1nIHNyYz0ke2ltZzF9IGFsdD1cInBob25lIG51bWJlclwiLz48L3NwYW4+ICsyNTQ3MTIzNDU2Nzg5YClcbmNvbnN0IGFkZHJlc3M9Y3JlYXRlRnVsbEVsZW1lbnQoJ3AnLHtcbiAgICBjbGFzczpcImFkZHJlc3NcIlxufSxgXG4gICAgPHNwYW4+PGltZyBzcmM9JHtpbWcyfSBhbHQ9XCJcImFkZHJlc3MvPjwvc3Bhbj4gV2FpeWFraSBXYXksIENodXJjaCBSZCwgUC5PLiBCb3g6IDY3NjMxIC0gMDAyMDA8YnI+IE5haXJvYmkgTmFpcm9iaSBLZW55YVxuYClcbmNvbnN0IGVtYWlsPWNyZWF0ZUZ1bGxFbGVtZW50KCdwJyx7XG4gICAgY2xhc3M6IFwiZW1haWxcIlxufSxgPHNwYW4+PGltZyBzcmM9JHtpbWczfSBhbHQ9XCJlbWFpbFwiLz48L3NwYW4+YW5pbWVmb29kQGdtYWlsLmNvbWApXG5cbmNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKHBob25lKVxuY29udGFjdEluZm8uYXBwZW5kQ2hpbGQoZW1haWwpXG5jb250YWN0SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKVxud3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0SW5mbylcbnJldHVybiB3cmFwcGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3QiLCJpbXBvcnQgeyBjcmVhdGVTZXRFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxcIjtcbmltcG9ydCBtZW51SXRlbSBmcm9tIFwiLi9tZW51SXRlbXNcIjtcbmltcG9ydCAnLi4vc2Fzcy9tZW51LnNjc3MnXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IHdyYXBwZXI9Y3JlYXRlU2V0RWxlbWVudCgnc2VjdGlvbicsIHtjbGFzczogXCJ3cmFwcGVyLXNlY3Rpb25cIn0pXG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudUJvZHlcIiB9KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChib2R5KVxuXG4gIG1lbnVJdGVtLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG1lbnVQYXJ0ID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJtZW51LXBhcnRcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlU2V0RWxlbWVudChcImgzXCIsIHtcbiAgICAgIGNsYXNzOiBcIm1lbnUtdGl0bGVcIixcbiAgICAgIGlkOiBgbWVudS10aXRsZS0ke2luZGV4fWAsXG4gICAgfSk7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSB2YWx1ZS50aXRsZTtcbiAgICBtZW51UGFydC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICB2YWx1ZS5pdGVtcy5mb3JFYWNoKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcIm1lbnUtaXRlbVwiLFxuICAgICAgICBpZDogYG1lbnUtaXRlbS0ke2l0ZW1JbmRleH1gLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB0b3AgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudS10b3BcIiB9KTtcbiAgICAgIGNvbnN0IG1pZCA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51LXNlY29uZFwiIH0pO1xuICAgICAgY29uc3QgYm90dG9tID0gY3JlYXRlU2V0RWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnUtYm90dG9tXCIgfSk7XG5cbiAgICAgIGNvbnN0IG1lbnVOYW1lID0gY3JlYXRlU2V0RWxlbWVudChcImg1XCIsIHsgY2xhc3M6IFwibWVudS1uYW1lXCIgfSk7XG4gICAgICBjb25zdCBwcmljZSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJzbWFsbFwiLCB7IGNsYXNzOiBcIm1lbnUtcHJpY2VcIiB9KTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlU2V0RWxlbWVudChcInBcIiwgeyBjbGFzczogXCJtZW51LXBcIiB9KTtcblxuICAgICAgbWVudU5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gJyQ0MCc7IC8vIGl0ZW0ucHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgIHRvcC5hcHBlbmRDaGlsZChtZW51TmFtZSk7XG4gICAgICBib3R0b20uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgdG9wLmFwcGVuZENoaWxkKG1pZClcbiAgICAgIHRvcC5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZCh0b3ApO1xuICAgICAgLy8gaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2Vjb25kKTtcbiAgICAgIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGJvdHRvbSk7XG5cbiAgICAgIG1lbnVQYXJ0LmFwcGVuZENoaWxkKGl0ZW1XcmFwcGVyKTtcbiAgICB9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVQYXJ0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiLCJjb25zdCBtZW51SXRlbSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk1haW4gQ291cnNlXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJZYWtpIFVkb25cIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGlyLWZyeSBkaXNoIHdpdGggdWRvbiBub29kbGVzIGFuZCBsb3RzIG9mIHZlZ2V0YWJsZXMgaW4gYSBzb3ktYmFzZWQgc2F1Y2UuIFNlcnZlZCB3aXRoIG1lYXQgb3IgdG9mdS5cIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNoaWNrZW4gQ3VycnlcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgcGllY2VzIG9mIGNoaWNrZW4sIGNhcnJvdHMsIGFuZCBwb3RhdG9lcyBjb29rZWQgaW4gYSByaWNoIHNhdm9yeSBjdXJyeSBzYXVjZVwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RlYWsgR2FybGljIFJpY2VcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgY3ViZXMgb2Ygc2VhcmVkIGJlZWYgYXJlIHRvc3NlZCBpbiBhIHNtb2t5IHN0ZWFrIHNhdWNlIGFuZCBuZXN0bGVkIG9uIGEgYmVkIG9mIGJ1dHRlcnkgZ2FybGljIHJpY2UgdGhhdOKAmHMgY3Jpc3BlZCB1bnRpbCBnb2xkZW4gaW4gdGhlIHBhblwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGVyaXlha2kgU2FsbW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2FsbW9uIGZpbGxldHMgYXJlIHBhbi1ncmlsbGVkIHRvIHRlbmRlciBwZXJmZWN0aW9uIGluIHRoZSB0cmFkaXRpb25hbCBtZXRob2QgYW5kIGZpbmlzaGVkIHdpdGggYW4gYXV0aGVudGljIGhvbWVtYWRlIHRlcml5YWtpIHNhdWNlLlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3BpY3kgU2hveXUgUmFtZW5cIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYW1lbiB0b290aHNvbWUgbm9vZGxlcyBpbiBhIHNhdm9yeSBzb3kgc2F1Y2UgYnJvdGguIFRvcHBlZCB3aXRoIHNlYXNvbmVkIHNvZnQtYm9pbGVkIGVnZyBhbmQgbWVsdC1pbi15b3VyIG1vdXRoIGNoYXNodSBwb3JrIGJlbGx5LFwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVG9tYXRvIGN1cnJ5XCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2ltbWVyaW5nIHRlbmRlciBwaWVjZXMgb2YgYmVlZiBhbmQgcG9yayBhbG9uZyB3aXRoIHRvbWF0b2VzLCBjYXJyb3RzLCBhbmQgY2FyYW1lbGl6ZWQgb25pb25zIGluIGEgcmljaCwgc2F2b3J5IHNhdWNlLlwiLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlNvdXBzICYgU2FsYWRzXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJNaXNvIFNvdXBcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzaW1wbGUsIHRhc3R5IGJhc2Ugb2YgbWlzbyBwYXN0ZSwgZGFzaGksIGFuZCB2ZWdnaWVzLlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3VraXlha2lcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCZWVmLCBtdXNocm9vbXMsIHRvZnUsIGNhYmJhZ2UsIGFuZCBvdGhlciB2ZWdnaWVzLlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2hpbyBSYW1lblwiLFxuICAgICAgICAgICAgICAgIHByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhbWVuIG5vb2RsZXMsIG1pc28gZWdnLCBmaXNoIGNha2UsIGJyYWlzZWQgcG9yaywgYmFtYm9vIHNob290cywgYW5kIHNjYWxsaW9ucy5cIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk11c2hyb29tIFNhbGFkXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwic29ha2VkIG11c2hyb29tcyBpbiBhIHRhbmd5IGJsZW5kIG9mIHJpY2UgdmluZWdhciwgbWlyaW4sIHRhbWFyaSwgYW5kIHN1Z2FyLlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiS2FuaSBTYWxhZFwiLFxuICAgICAgICAgICAgICAgIHByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInNocmVkZGVkIGNyYWIgYW5kIGN1Y3VtYmVyLCB0b3NzZWQgaW4gYSBjcmVhbXksIHNwaWN5IG1heW8sIGFuZCB0b3BwZWQgd2l0aCB0b2FzdGVkIGJyZWFkY3J1bWJzLlwiLFxuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRGVzc2VydHNcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlZCBCZWFuIENha2VcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJIb25leSBwYW5jYWtlcyBhcmUgZmlsbGVkIHdpdGggc3dlZXQgcmVkIGJlYW4gcGFzdGUuXCIsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJXYXJhYmkgTW9jaGlcIixcbiAgICAgICAgICAgICAgICBwcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGlsbGVkLCBkZWxpY2lvdXNseSBjaGV3eSwgamVsbHktbGlrZSBtb2NoaSBjb3ZlcmVkIHdpdGggc3dlZXQgYW5kIG51dHR5IHNveWJlYW4gcG93ZGVyIGFuZCBkcml6emxlZCB3aXRoIGt1cm9taXRzdSBzeXJ1cC5cIixcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlB1cmluXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBjdXN0YXJkIGRlc3NlcnQgd2l0aCBhIGxheWVyIG9mIHNvZnQgY2FyYW1lbCBvbiB0b3AsIHRoZSBwdWRkaW5nIGlzIHNpbGt5LCBjcmVhbXksIGFuZCByaWNoLlwiLFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkRyaW5rc1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiVGFwaW9jYVwiLFxuICAgICAgICAgICAgICAgIHByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN3ZWV0ZW5lZCB0ZWEgd2l0aCB0YXBpb2NhIGJhbGxzIG9uIHRoZSBib3R0b20gb2YgdGhlIGRyaW5rIGFuZCBhIGRhc2ggb2YgbWlsay4gVG9wcGVkIHdpdGggd2hpcHBlZCBjcmVhbSwgY2FyYW1lbCwgY2hvY29sYXRlLCBvciBjcmVhbSBjaGVlc2UuXCIsXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCdWJibGUgVGVhXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWlsayB0ZWEgd2l0aCBibGFjaywgb29sb25nLCBvciBqYXNtaW5lIHRlYSBsZWF2ZXMsIHdpdGggYWRkZWQgdGFwaW9jYSBiYWxscyBzd2VldGVuZWQgd2l0aCBzdWdhci5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJNdWdpY2hhXCIsXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUm9hc3RlZCBiYXJsZXkgdGVhXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIF1cbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbSIsImltcG9ydCBIb21lVmlldyBmcm9tIFwiLi4vdmlld3MvSG9tZVZpZXdcIlxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiXG4vLyBpbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0c1wiXG5pbXBvcnQgQ29udGFjdFZpZXcgZnJvbSBcIi4uL3ZpZXdzL0NvbnRhY3RWaWV3XCJcbmltcG9ydCBjcmVhdGVSZXNlcnZhdGlvbiBmcm9tIFwiLi9yZXNlcnZhdGlvblwiXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi9BYm91dFwiXG5cbmNvbnN0IGxpc3RJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFuaW1lIEZvb2RcIixcbiAgICAgICAgZWw6IEhvbWVWaWV3KClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdNZW51JyxcbiAgICAgICAgZWw6IGNyZWF0ZU1lbnUoKVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Jlc2VydmF0aW9uJyxcbiAgICAgICAgZWw6IGNyZWF0ZVJlc2VydmF0aW9uKClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICAgIGVsOiBBYm91dFVzKClcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb250YWN0cycsXG4gICAgICAgIGVsOiBDb250YWN0VmlldygpXG4gICAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdEl0ZW1zIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgc2V0QXR0cmlidXRlcywgY3JlYXRlRnVsbEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IGxpc3RJdGVtcyBmcm9tIFwiLi9uYXZJdGVtc1wiO1xuaW1wb3J0ICcuLi9zYXNzL25hdkJhci5zY3NzJ1xuXG5mdW5jdGlvbiBuYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2QmFyID0gY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBjcmVhdGVFbGVtZW50KCd1bCcpXG4gICAgY29uc3QgbmF2QnJhbmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgbmF2QnJhbmQuY2xhc3NMaXN0LmFkZCgnTmF2LWJyYW5kJylcbiAgICAgICAgICAgIG5hdkJyYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzKClcbiAgICAgICAgICAgICAgICB2YWx1ZS5lbC5jbGFzc0xpc3QucmVtb3ZlKCdub3QtdmlzaWJsZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2QnJhbmQuaW5uZXJIVE1MID0gXCJBbmltZSBGb29kXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjcmVhdGVGdWxsRWxlbWVudCgnbGknLCB7IGNsYXNzOiBcIm5hdi1pdGVtXCIgfSwgdmFsdWUudGl0bGUpXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDI4MjgwMjEyMjZfMGAsYGhlbGxvLCBXb3JsZCAke2luZGV4fWApKTtcbiAgICAgICAgICAgICAgICBhZGRDbGFzcygpXG4gICAgICAgICAgICAgICAgdmFsdWUuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZpc2libGUnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZCcmFuZClcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodWwpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi1iYXInKVxuICAgIHJldHVybiBuYXZCYXJcbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgIHZhbHVlLmVsLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJylcbiAgICB9KVxufVxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyXG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4NGQyNChfMHgxZWVlZjEsXzB4ZjE1OTQ3KXt2YXIgXzB4M2ZlZmRkPV8weDNmZWYoKTtyZXR1cm4gXzB4NGQyND1mdW5jdGlvbihfMHg0ZDI0YzksXzB4NTQ2ZDVlKXtfMHg0ZDI0Yzk9XzB4NGQyNGM5LTB4MWI0O3ZhciBfMHgyYWNhMmQ9XzB4M2ZlZmRkW18weDRkMjRjOV07cmV0dXJuIF8weDJhY2EyZDt9LF8weDRkMjQoXzB4MWVlZWYxLF8weGYxNTk0Nyk7fXZhciBfMHg0MzgyODI9XzB4NGQyNDsoZnVuY3Rpb24oXzB4MmI1YjI3LF8weDU2ODRlZCl7dmFyIF8weDE5YTJjZj1fMHg0ZDI0LF8weDQyM2MwOD1fMHgyYjViMjcoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDhlMTM9cGFyc2VJbnQoXzB4MTlhMmNmKDB4MWZjKSkvMHgxK3BhcnNlSW50KF8weDE5YTJjZigweDI2MSkpLzB4MiooLXBhcnNlSW50KF8weDE5YTJjZigweDIxYykpLzB4MykrcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjExKSkvMHg0KigtcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjkwKSkvMHg1KSstcGFyc2VJbnQoXzB4MTlhMmNmKDB4MWQzKSkvMHg2KigtcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjY5KSkvMHg3KSstcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjYzKSkvMHg4Ky1wYXJzZUludChfMHgxOWEyY2YoMHgyNmUpKS8weDkqKHBhcnNlSW50KF8weDE5YTJjZigweDI0ZSkpLzB4YSkrLXBhcnNlSW50KF8weDE5YTJjZigweDI0ZikpLzB4YiooLXBhcnNlSW50KF8weDE5YTJjZigweDIzNCkpLzB4Yyk7aWYoXzB4OGUxMz09PV8weDU2ODRlZClicmVhaztlbHNlIF8weDQyM2MwOFsncHVzaCddKF8weDQyM2MwOFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NGIwODNiKXtfMHg0MjNjMDhbJ3B1c2gnXShfMHg0MjNjMDhbJ3NoaWZ0J10oKSk7fX19KF8weDNmZWYsMHhlYTc0MykpO3ZhciBqPU9iamVjdFtfMHg0MzgyODIoMHgyMTkpXSxYPU9iamVjdFtfMHg0MzgyODIoMHgxY2IpXSxHPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sZWU9T2JqZWN0W18weDQzODI4MigweDFjZSldLHRlPU9iamVjdFtfMHg0MzgyODIoMHgyNzYpXSxuZT1PYmplY3RbJ3Byb3RvdHlwZSddW18weDQzODI4MigweDFmZSldLHJlPShfMHgyM2U4MjcsXzB4NTJlYzAwLF8weGIxNjVkMixfMHgxNmIwMDIpPT57dmFyIF8weGUwODk4ZT1fMHg0MzgyODI7aWYoXzB4NTJlYzAwJiZ0eXBlb2YgXzB4NTJlYzAwPT1fMHhlMDg5OGUoMHgyMTMpfHx0eXBlb2YgXzB4NTJlYzAwPT1fMHhlMDg5OGUoMHgyNTMpKXtmb3IobGV0IF8weDIyYmVjMiBvZiBlZShfMHg1MmVjMDApKSFuZVsnY2FsbCddKF8weDIzZTgyNyxfMHgyMmJlYzIpJiZfMHgyMmJlYzIhPT1fMHhiMTY1ZDImJlgoXzB4MjNlODI3LF8weDIyYmVjMix7J2dldCc6KCk9Pl8weDUyZWMwMFtfMHgyMmJlYzJdLCdlbnVtZXJhYmxlJzohKF8weDE2YjAwMj1HKF8weDUyZWMwMCxfMHgyMmJlYzIpKXx8XzB4MTZiMDAyW18weGUwODk4ZSgweDIwMyldfSk7fXJldHVybiBfMHgyM2U4Mjc7fSxLPShfMHgyNzk3ZWUsXzB4NTdhZTEyLF8weDMyMmI3NCk9PihfMHgzMjJiNzQ9XzB4Mjc5N2VlIT1udWxsP2oodGUoXzB4Mjc5N2VlKSk6e30scmUoXzB4NTdhZTEyfHwhXzB4Mjc5N2VlfHwhXzB4Mjc5N2VlW18weDQzODI4MigweDI3OCldP1goXzB4MzIyYjc0LCdkZWZhdWx0Jyx7J3ZhbHVlJzpfMHgyNzk3ZWUsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzMjJiNzQsXzB4Mjc5N2VlKSkscT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgzMTA5YTcsXzB4MzRiNzFhLF8weDUwYTY3NCxfMHg1MmM5ZTYsXzB4NTRlMmM5KXt2YXIgXzB4MzdkMGVkPV8weDQzODI4Mjt0aGlzWydnbG9iYWwnXT1fMHgzMTA5YTcsdGhpc1tfMHgzN2QwZWQoMHgxZTMpXT1fMHgzNGI3MWEsdGhpc1tfMHgzN2QwZWQoMHgyMjYpXT1fMHg1MGE2NzQsdGhpc1snbm9kZU1vZHVsZXMnXT1fMHg1MmM5ZTYsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDU0ZTJjOSx0aGlzW18weDM3ZDBlZCgweDFjOSldPSEweDAsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4MzdkMGVkKDB4MjBhKV09ITB4MSx0aGlzW18weDM3ZDBlZCgweDIxNyldPSEweDEsdGhpc1tfMHgzN2QwZWQoMHgxZTIpXT0hdGhpc1tfMHgzN2QwZWQoMHgxZDUpXVtfMHgzN2QwZWQoMHgyNmQpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MzdkMGVkKDB4MWU4KV0sdGhpc1tfMHgzN2QwZWQoMHgyNzQpXT1udWxsLHRoaXNbXzB4MzdkMGVkKDB4MWRkKV09MHgwLHRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J109MHgxNCx0aGlzW18weDM3ZDBlZCgweDFlNCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDM3ZDBlZCgweDFjNildPSh0aGlzWydfaW5Ccm93c2VyJ10/J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJzpfMHgzN2QwZWQoMHgxZDYpKSt0aGlzW18weDM3ZDBlZCgweDFlNCldO31hc3luY1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpe3ZhciBfMHgxYjM5ZTc9XzB4NDM4MjgyO2lmKHRoaXNbXzB4MWIzOWU3KDB4Mjc0KV0pcmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddO2xldCBfMHgyNTNhZWU7aWYodGhpc1snX2luQnJvd3NlciddKV8weDI1M2FlZT10aGlzWydnbG9iYWwnXVtfMHgxYjM5ZTcoMHgxZWMpXTtlbHNle2lmKHRoaXNbXzB4MWIzOWU3KDB4MWQ1KV1bJ3Byb2Nlc3MnXT8uW18weDFiMzllNygweDI2MildKV8weDI1M2FlZT10aGlzW18weDFiMzllNygweDFkNSldW18weDFiMzllNygweDI2ZCldPy5bXzB4MWIzOWU3KDB4MjYyKV07ZWxzZSB0cnl7bGV0IF8weDIwYzQ5ND1hd2FpdCBpbXBvcnQoXzB4MWIzOWU3KDB4MjAwKSk7XzB4MjUzYWVlPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgxYjM5ZTcoMHgyODIpKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHgyMGM0OTRbXzB4MWIzOWU3KDB4MjJlKV0odGhpc1tfMHgxYjM5ZTcoMHgxZjYpXSwnd3MvaW5kZXguanMnKSlbXzB4MWIzOWU3KDB4MWVlKV0oKSkpW18weDFiMzllNygweDI1NCldO31jYXRjaHt0cnl7XzB4MjUzYWVlPXJlcXVpcmUocmVxdWlyZShfMHgxYjM5ZTcoMHgyMDApKVsnam9pbiddKHRoaXNbXzB4MWIzOWU3KDB4MWY2KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MWIzOWU3KDB4MWMwKSk7fX19cmV0dXJuIHRoaXNbXzB4MWIzOWU3KDB4Mjc0KV09XzB4MjUzYWVlLF8weDI1M2FlZTt9W18weDQzODI4MigweDIzNildKCl7dmFyIF8weDFhM2NkNT1fMHg0MzgyODI7dGhpc1tfMHgxYTNjZDUoMHgyMTcpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDFhM2NkNSgweDFkZCldPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddfHwodGhpc1tfMHgxYTNjZDUoMHgyNWQpXT0hMHgxLHRoaXNbXzB4MWEzY2Q1KDB4MjE3KV09ITB4MCx0aGlzW18weDFhM2NkNSgweDFkZCldKyssdGhpc1tfMHgxYTNjZDUoMHgxYzUpXT1uZXcgUHJvbWlzZSgoXzB4MzMwMzQ0LF8weDMyNWI4Myk9Pnt2YXIgXzB4MTZlYzMzPV8weDFhM2NkNTt0aGlzW18weDE2ZWMzMygweDI1NSldKClbXzB4MTZlYzMzKDB4MWI4KV0oXzB4NDE3MjhjPT57dmFyIF8weDQ2MDM2Mj1fMHgxNmVjMzM7bGV0IF8weDVkZmY5Zj1uZXcgXzB4NDE3MjhjKF8weDQ2MDM2MigweDI1YykrKCF0aGlzW18weDQ2MDM2MigweDFlMildJiZ0aGlzWydkb2NrZXJpemVkQXBwJ10/XzB4NDYwMzYyKDB4MjRhKTp0aGlzW18weDQ2MDM2MigweDFlMyldKSsnOicrdGhpc1sncG9ydCddKTtfMHg1ZGZmOWZbJ29uZXJyb3InXT0oKT0+e3ZhciBfMHgyZTIxNWI9XzB4NDYwMzYyO3RoaXNbXzB4MmUyMTViKDB4MWM5KV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDVkZmY5ZiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpLF8weDMyNWI4MyhuZXcgRXJyb3IoXzB4MmUyMTViKDB4MjhkKSkpO30sXzB4NWRmZjlmW18weDQ2MDM2MigweDI5MSldPSgpPT57dmFyIF8weDFmYzE1Zj1fMHg0NjAzNjI7dGhpc1snX2luQnJvd3NlciddfHxfMHg1ZGZmOWZbXzB4MWZjMTVmKDB4MjkyKV0mJl8weDVkZmY5ZlsnX3NvY2tldCddW18weDFmYzE1ZigweDFmNCldJiZfMHg1ZGZmOWZbXzB4MWZjMTVmKDB4MjkyKV1bXzB4MWZjMTVmKDB4MWY0KV0oKSxfMHgzMzAzNDQoXzB4NWRmZjlmKTt9LF8weDVkZmY5ZltfMHg0NjAzNjIoMHgyMzEpXT0oKT0+e3ZhciBfMHgyMzk5OGM9XzB4NDYwMzYyO3RoaXNbXzB4MjM5OThjKDB4MjVkKV09ITB4MCx0aGlzW18weDIzOTk4YygweDFmNSldKF8weDVkZmY5ZiksdGhpc1tfMHgyMzk5OGMoMHgxZmEpXSgpO30sXzB4NWRmZjlmW18weDQ2MDM2MigweDI5NCldPV8weDc3MmU0OD0+e3ZhciBfMHgxODNjZTU9XzB4NDYwMzYyO3RyeXtfMHg3NzJlNDgmJl8weDc3MmU0OFtfMHgxODNjZTUoMHgyMTQpXSYmdGhpc1tfMHgxODNjZTUoMHgxZTIpXSYmSlNPTltfMHgxODNjZTUoMHgyODMpXShfMHg3NzJlNDhbXzB4MTgzY2U1KDB4MjE0KV0pW18weDE4M2NlNSgweDFjYyldPT09XzB4MTgzY2U1KDB4MjU3KSYmdGhpc1tfMHgxODNjZTUoMHgxZDUpXVtfMHgxODNjZTUoMHgyODcpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4MTZlYzMzKDB4MWI4KV0oXzB4M2RjYzBhPT4odGhpc1tfMHgxNmVjMzMoMHgyMGEpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDE2ZWMzMygweDI1ZCldPSEweDEsdGhpc1tfMHgxNmVjMzMoMHgxYzkpXT0hMHgwLHRoaXNbXzB4MTZlYzMzKDB4MWRkKV09MHgwLF8weDNkY2MwYSkpW18weDE2ZWMzMygweDI0MyldKF8weDRhZjEwYz0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4MTZlYzMzKDB4MjE3KV09ITB4MSxjb25zb2xlW18weDE2ZWMzMygweDIwNSldKF8weDE2ZWMzMygweDI0NikrdGhpc1tfMHgxNmVjMzMoMHgxZTQpXSksXzB4MzI1YjgzKG5ldyBFcnJvcihfMHgxNmVjMzMoMHgyOGMpKyhfMHg0YWYxMGMmJl8weDRhZjEwY1tfMHgxNmVjMzMoMHgxZDApXSkpKSkpO30pKTt9W18weDQzODI4MigweDFmNSldKF8weDJhYjEwOCl7dmFyIF8weDU1OTIwZT1fMHg0MzgyODI7dGhpc1tfMHg1NTkyMGUoMHgyMGEpXT0hMHgxLHRoaXNbXzB4NTU5MjBlKDB4MjE3KV09ITB4MTt0cnl7XzB4MmFiMTA4W18weDU1OTIwZSgweDIzMSldPW51bGwsXzB4MmFiMTA4WydvbmVycm9yJ109bnVsbCxfMHgyYWIxMDhbJ29ub3BlbiddPW51bGw7fWNhdGNoe310cnl7XzB4MmFiMTA4W18weDU1OTIwZSgweDI4YSldPDB4MiYmXzB4MmFiMTA4WydjbG9zZSddKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weDJlYzQ2OD1fMHg0MzgyODI7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmVjNDY4KDB4MWYxKV0pLCEodGhpc1tfMHgyZWM0NjgoMHgxZGQpXT49dGhpc1tfMHgyZWM0NjgoMHgxZDIpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MTIzMjA5PV8weDJlYzQ2ODt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0aW5nJ118fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHgxMjMyMDkoMHgxYzUpXT8uW18weDEyMzIwOSgweDI0MyldKCgpPT50aGlzW18weDEyMzIwOSgweDFmYSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJlYzQ2OCgweDFmMSldW18weDJlYzQ2OCgweDFmNCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDJlYzQ2OCgweDFmNCldKCkpO31hc3luY1tfMHg0MzgyODIoMHgyNzIpXShfMHgyNWEzZjgpe3ZhciBfMHg0MDAyZjY9XzB4NDM4MjgyO3RyeXtpZighdGhpc1tfMHg0MDAyZjYoMHgxYzkpXSlyZXR1cm47dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXSYmdGhpc1tfMHg0MDAyZjYoMHgyMzYpXSgpLChhd2FpdCB0aGlzWydfd3MnXSlbXzB4NDAwMmY2KDB4MjcyKV0oSlNPTltfMHg0MDAyZjYoMHgyN2IpXShfMHgyNWEzZjgpKTt9Y2F0Y2goXzB4MjQ2YmQ5KXtjb25zb2xlW18weDQwMDJmNigweDIwNSldKHRoaXNbXzB4NDAwMmY2KDB4MWM2KV0rJzpcXFxceDIwJysoXzB4MjQ2YmQ5JiZfMHgyNDZiZDlbXzB4NDAwMmY2KDB4MWQwKV0pKSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDEsdGhpc1tfMHg0MDAyZjYoMHgxZmEpXSgpO319fTtmdW5jdGlvbiBKKF8weDIyODE5NCxfMHgxMmIxODIsXzB4NWNlNWZiLF8weDJhNzVmZixfMHgxYTdiYjIsXzB4NTVjZThhKXt2YXIgXzB4MWQyYTY4PV8weDQzODI4MjtsZXQgXzB4NTU3M2RiPV8weDVjZTVmYltfMHgxZDJhNjgoMHgyMzIpXSgnLCcpW18weDFkMmE2OCgweDI1YildKF8weDI3NmYxMj0+e3ZhciBfMHgyNWIzNmI9XzB4MWQyYTY4O3RyeXtfMHgyMjgxOTRbXzB4MjViMzZiKDB4MjQ3KV18fCgoXzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWI5KXx8XzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWRhKXx8XzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWMxKSkmJihfMHgxYTdiYjIrPV8weDIyODE5NFsncHJvY2VzcyddPy5bXzB4MjViMzZiKDB4MjU5KV0/LltfMHgyNWIzNmIoMHgxZTgpXT8nXFxcXHgyMHNlcnZlcic6J1xcXFx4MjBicm93c2VyJyksXzB4MjI4MTk0WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDFhN2JiMn0pO2xldCBfMHgxMTIyZGM9bmV3IHEoXzB4MjI4MTk0LF8weDEyYjE4MixfMHgyNzZmMTIsXzB4MmE3NWZmLF8weDU1Y2U4YSk7cmV0dXJuIF8weDExMjJkY1snc2VuZCddW18weDI1YjM2YigweDI4OCldKF8weDExMjJkYyk7fWNhdGNoKF8weDIzMzU5NSl7cmV0dXJuIGNvbnNvbGVbXzB4MjViMzZiKDB4MjA1KV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgyMzM1OTUmJl8weDIzMzU5NVtfMHgyNWIzNmIoMHgxZDApXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NWNhMDk3PT5fMHg1NTczZGJbJ2ZvckVhY2gnXShfMHgzMmQxYmM9Pl8weDMyZDFiYyhfMHg1Y2EwOTcpKTt9ZnVuY3Rpb24gVyhfMHg0MDBjNjUpe3ZhciBfMHg3Y2VlMWE9XzB4NDM4MjgyO2xldCBfMHgzODE1MTA9ZnVuY3Rpb24oXzB4NDlmNWY1LF8weDQ5MTljYil7cmV0dXJuIF8weDQ5MTljYi1fMHg0OWY1ZjU7fSxfMHgzMGZmNTE7aWYoXzB4NDAwYzY1WydwZXJmb3JtYW5jZSddKV8weDMwZmY1MT1mdW5jdGlvbigpe3ZhciBfMHg1YjY0NjM9XzB4NGQyNDtyZXR1cm4gXzB4NDAwYzY1W18weDViNjQ2MygweDI4OSldW18weDViNjQ2MygweDI3NSldKCk7fTtlbHNle2lmKF8weDQwMGM2NVtfMHg3Y2VlMWEoMHgyNmQpXSYmXzB4NDAwYzY1Wydwcm9jZXNzJ11bXzB4N2NlZTFhKDB4MWJmKV0pXzB4MzBmZjUxPWZ1bmN0aW9uKCl7dmFyIF8weDM2ZTU1MD1fMHg3Y2VlMWE7cmV0dXJuIF8weDQwMGM2NVtfMHgzNmU1NTAoMHgyNmQpXVtfMHgzNmU1NTAoMHgxYmYpXSgpO30sXzB4MzgxNTEwPWZ1bmN0aW9uKF8weDJiOGNhYyxfMHgxZGQ1Y2Qpe3JldHVybiAweDNlOCooXzB4MWRkNWNkWzB4MF0tXzB4MmI4Y2FjWzB4MF0pKyhfMHgxZGQ1Y2RbMHgxXS1fMHgyYjhjYWNbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NTU5OGFhfT1yZXF1aXJlKCdwZXJmX2hvb2tzJyk7XzB4MzBmZjUxPWZ1bmN0aW9uKCl7dmFyIF8weDY3OWU0Nz1fMHg3Y2VlMWE7cmV0dXJuIF8weDU1OThhYVtfMHg2NzllNDcoMHgyNzUpXSgpO307fWNhdGNoe18weDMwZmY1MT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDM4MTUxMCwndGltZVN0YW1wJzpfMHgzMGZmNTEsJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBZKF8weDQ1MTg0NyxfMHg0Yjk1M2IsXzB4NDUyZTc0KXt2YXIgXzB4MzQ1OWY5PV8weDQzODI4MjtpZihfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDUxODQ3W18weDM0NTlmOSgweDI3YyldO2xldCBfMHgxNGRjNjA9XzB4NDUxODQ3Wydwcm9jZXNzJ10/LlsndmVyc2lvbnMnXT8uW18weDM0NTlmOSgweDFlOCldO3JldHVybiBfMHgxNGRjNjAmJl8weDQ1MmU3ND09PSdudXh0Jz9fMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV09ITB4MTpfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV09XzB4MTRkYzYwfHwhXzB4NGI5NTNifHxfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4Mjg3KV0/LlsnaG9zdG5hbWUnXSYmXzB4NGI5NTNiW18weDM0NTlmOSgweDIyNCldKF8weDQ1MTg0N1snbG9jYXRpb24nXVtfMHgzNDU5ZjkoMHgyOGYpXSksXzB4NDUxODQ3WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTt9ZnVuY3Rpb24gUShfMHg0N2Q5NjAsXzB4M2M3Zjg4LF8weDU2MDFhZixfMHg0NDE1YWMpe3ZhciBfMHg1MWFhZTQ9XzB4NDM4MjgyO18weDQ3ZDk2MD1fMHg0N2Q5NjAsXzB4M2M3Zjg4PV8weDNjN2Y4OCxfMHg1NjAxYWY9XzB4NTYwMWFmLF8weDQ0MTVhYz1fMHg0NDE1YWM7bGV0IF8weDQ4Yjk1MD1XKF8weDQ3ZDk2MCksXzB4NTQ1NGM1PV8weDQ4Yjk1MFsnZWxhcHNlZCddLF8weDFjODBlYz1fMHg0OGI5NTBbXzB4NTFhYWU0KDB4MjEwKV07Y2xhc3MgXzB4YzY5MmEze2NvbnN0cnVjdG9yKCl7dmFyIF8weDQ3OTE1Mz1fMHg1MWFhZTQ7dGhpc1tfMHg0NzkxNTMoMHgyNTEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NDc5MTUzKDB4MjY1KV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDQ3OTE1MygweDI0MildPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NDc5MTUzKDB4MjE1KV09XzB4NDdkOTYwW18weDQ3OTE1MygweDFiNSldLHRoaXNbXzB4NDc5MTUzKDB4MjUwKV09XzB4NDdkOTYwW18weDQ3OTE1MygweDFlNildLHRoaXNbXzB4NDc5MTUzKDB4MjNlKV09T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddPU9iamVjdFtfMHg0NzkxNTMoMHgxY2UpXSx0aGlzW18weDQ3OTE1MygweDIwYildPV8weDQ3ZDk2MFtfMHg0NzkxNTMoMHgxZmIpXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4NDc5MTUzKDB4MWQ5KV1bXzB4NDc5MTUzKDB4MWVlKV0sdGhpc1tfMHg0NzkxNTMoMHgxZmQpXT1EYXRlW18weDQ3OTE1MygweDFkOSldW18weDQ3OTE1MygweDFlZSldO31bXzB4NTFhYWU0KDB4MjM5KV0oXzB4NTc0NzFiLF8weDRhOTM5NixfMHgyOTkwZjAsXzB4MzRkMDljKXt2YXIgXzB4Mzk5NWFmPV8weDUxYWFlNCxfMHg1MDcyNTc9dGhpcyxfMHgzYjU4ZTY9XzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldO2Z1bmN0aW9uIF8weGE0NjUyMChfMHgzNGVkM2MsXzB4NTMyNmM2LF8weGJmMTcyNCl7dmFyIF8weDM4Yjg1MT1fMHgzOTk1YWY7XzB4NTMyNmM2Wyd0eXBlJ109XzB4MzhiODUxKDB4MjVmKSxfMHg1MzI2YzZbXzB4MzhiODUxKDB4MjJmKV09XzB4MzRlZDNjW18weDM4Yjg1MSgweDFkMCldLF8weDVmMTg5Yz1fMHhiZjE3MjRbXzB4MzhiODUxKDB4MWU4KV1bXzB4MzhiODUxKDB4Mjg1KV0sXzB4YmYxNzI0W18weDM4Yjg1MSgweDFlOCldW18weDM4Yjg1MSgweDI4NSldPV8weDUzMjZjNixfMHg1MDcyNTdbXzB4MzhiODUxKDB4MjI5KV0oXzB4NTMyNmM2LF8weGJmMTcyNCk7fXRyeXtfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MWQ0KV0rKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4Mjc5KV0mJl8weDI5OTBmMFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddWydwdXNoJ10oXzB4NGE5Mzk2KTt2YXIgXzB4MTNkZTBjLF8weDQ1M2I5YSxfMHgzZTNlMzEsXzB4M2Q5MjU3LF8weDMyMjE1Nj1bXSxfMHgzMzkzYzQ9W10sXzB4NDM5MTczLF8weDM0ODY4OD10aGlzW18weDM5OTVhZigweDFlZCldKF8weDRhOTM5NiksXzB4MTZiZGFlPV8weDM0ODY4OD09PSdhcnJheScsXzB4NDhiZDZmPSEweDEsXzB4MmJjYzAwPV8weDM0ODY4OD09PV8weDM5OTVhZigweDI1MyksXzB4NDBlZjc2PXRoaXNbXzB4Mzk5NWFmKDB4MjI1KV0oXzB4MzQ4Njg4KSxfMHg1MzVhMmE9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgzNDg2ODgpLF8weDMwOTczZj1fMHg0MGVmNzZ8fF8weDUzNWEyYSxfMHgyM2U2N2I9e30sXzB4ZmQ1M2FlPTB4MCxfMHgxMDQzZDI9ITB4MSxfMHg1ZjE4OWMsXzB4ZjA1ZGI2PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjIyKV0pe2lmKF8weDE2YmRhZSl7aWYoXzB4NDUzYjlhPV8weDRhOTM5NltfMHgzOTk1YWYoMHgyM2YpXSxfMHg0NTNiOWE+XzB4Mjk5MGYwW18weDM5OTVhZigweDFiYildKXtmb3IoXzB4M2UzZTMxPTB4MCxfMHgzZDkyNTc9XzB4Mjk5MGYwW18weDM5OTVhZigweDFiYildLF8weDEzZGUwYz1fMHgzZTNlMzE7XzB4MTNkZTBjPF8weDNkOTI1NztfMHgxM2RlMGMrKylfMHgzMzkzYzRbXzB4Mzk5NWFmKDB4MjEyKV0oXzB4NTA3MjU3WydfYWRkUHJvcGVydHknXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHgxM2RlMGMsXzB4Mjk5MGYwKSk7XzB4NTc0NzFiW18weDM5OTVhZigweDFiYSldPSEweDA7fWVsc2V7Zm9yKF8weDNlM2UzMT0weDAsXzB4M2Q5MjU3PV8weDQ1M2I5YSxfMHgxM2RlMGM9XzB4M2UzZTMxO18weDEzZGUwYzxfMHgzZDkyNTc7XzB4MTNkZTBjKyspXzB4MzM5M2M0W18weDM5OTVhZigweDIxMildKF8weDUwNzI1N1tfMHgzOTk1YWYoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHgxM2RlMGMsXzB4Mjk5MGYwKSk7fV8weDI5OTBmMFtfMHgzOTk1YWYoMHgyM2MpXSs9XzB4MzM5M2M0WydsZW5ndGgnXTt9aWYoIShfMHgzNDg2ODg9PT1fMHgzOTk1YWYoMHgyMDYpfHxfMHgzNDg2ODg9PT1fMHgzOTk1YWYoMHgxYjUpKSYmIV8weDQwZWY3NiYmXzB4MzQ4Njg4IT09XzB4Mzk5NWFmKDB4MjFiKSYmXzB4MzQ4Njg4IT09XzB4Mzk5NWFmKDB4MjBkKSYmXzB4MzQ4Njg4IT09J2JpZ2ludCcpe3ZhciBfMHgyYzgyMjk9XzB4MzRkMDljW18weDM5OTVhZigweDIzNSldfHxfMHgyOTkwZjBbJ3Byb3BzJ107aWYodGhpc1snX2lzU2V0J10oXzB4NGE5Mzk2KT8oXzB4MTNkZTBjPTB4MCxfMHg0YTkzOTZbXzB4Mzk5NWFmKDB4MjdkKV0oZnVuY3Rpb24oXzB4MjRkZmQwKXt2YXIgXzB4M2EwNTI5PV8weDM5OTVhZjtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDtyZXR1cm47fWlmKCFfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjdhKV0mJl8weDI5OTBmMFsnYXV0b0V4cGFuZCddJiZfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjNjKV0+XzB4Mjk5MGYwW18weDNhMDUyOSgweDI4NildKXtfMHgxMDQzZDI9ITB4MDtyZXR1cm47fV8weDMzOTNjNFsncHVzaCddKF8weDUwNzI1N1tfMHgzYTA1MjkoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDNhMDUyOSgweDFjYSksXzB4MTNkZTBjKyssXzB4Mjk5MGYwLGZ1bmN0aW9uKF8weGQ2NjhkNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weGQ2NjhkNzt9O30oXzB4MjRkZmQwKSkpO30pKTp0aGlzWydfaXNNYXAnXShfMHg0YTkzOTYpJiZfMHg0YTkzOTZbXzB4Mzk5NWFmKDB4MjdkKV0oZnVuY3Rpb24oXzB4OWM0MzEzLF8weDFlZWVlMil7dmFyIF8weDUxZmUwZD1fMHgzOTk1YWY7aWYoXzB4ZmQ1M2FlKyssXzB4Mjk5MGYwW18weDUxZmUwZCgweDIzYyldKyssXzB4ZmQ1M2FlPl8weDJjODIyOSl7XzB4MTA0M2QyPSEweDA7cmV0dXJuO31pZighXzB4Mjk5MGYwWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDI5OTBmMFtfMHg1MWZlMGQoMHgyNzkpXSYmXzB4Mjk5MGYwWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI5OTBmMFtfMHg1MWZlMGQoMHgyODYpXSl7XzB4MTA0M2QyPSEweDA7cmV0dXJuO312YXIgXzB4MTEzZTk3PV8weDFlZWVlMltfMHg1MWZlMGQoMHgxZWUpXSgpO18weDExM2U5N1tfMHg1MWZlMGQoMHgyM2YpXT4weDY0JiYoXzB4MTEzZTk3PV8weDExM2U5N1tfMHg1MWZlMGQoMHgyMWUpXSgweDAsMHg2NCkrXzB4NTFmZTBkKDB4Mjg0KSksXzB4MzM5M2M0W18weDUxZmUwZCgweDIxMildKF8weDUwNzI1N1tfMHg1MWZlMGQoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDUxZmUwZCgweDFiNyksXzB4MTEzZTk3LF8weDI5OTBmMCxmdW5jdGlvbihfMHgyMDE3OGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMDE3OGI7fTt9KF8weDljNDMxMykpKTt9KSwhXzB4NDhiZDZmKXt0cnl7Zm9yKF8weDQzOTE3MyBpbiBfMHg0YTkzOTYpaWYoIShfMHgxNmJkYWUmJl8weGYwNWRiNltfMHgzOTk1YWYoMHgyNmIpXShfMHg0MzkxNzMpKSYmIXRoaXNbXzB4Mzk5NWFmKDB4Mjc3KV0oXzB4NGE5Mzk2LF8weDQzOTE3MyxfMHgyOTkwZjApKXtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDticmVhazt9aWYoIV8weDI5OTBmMFtfMHgzOTk1YWYoMHgyN2EpXSYmXzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldJiZfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0+XzB4Mjk5MGYwW18weDM5OTVhZigweDI4NildKXtfMHgxMDQzZDI9ITB4MDticmVhazt9XzB4MzM5M2M0W18weDM5OTVhZigweDIxMildKF8weDUwNzI1N1tfMHgzOTk1YWYoMHgxZjcpXShfMHgzMjIxNTYsXzB4MjNlNjdiLF8weDRhOTM5NixfMHgzNDg2ODgsXzB4NDM5MTczLF8weDI5OTBmMCkpO319Y2F0Y2h7fWlmKF8weDIzZTY3YlsnX3BfbGVuZ3RoJ109ITB4MCxfMHgyYmNjMDAmJihfMHgyM2U2N2JbJ19wX25hbWUnXT0hMHgwKSwhXzB4MTA0M2QyKXt2YXIgXzB4MmM3NDU3PVtdW18weDM5OTVhZigweDI2NildKHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ10oXzB4NGE5Mzk2KSlbXzB4Mzk5NWFmKDB4MjY2KV0odGhpc1tfMHgzOTk1YWYoMHgyOGIpXShfMHg0YTkzOTYpKTtmb3IoXzB4MTNkZTBjPTB4MCxfMHg0NTNiOWE9XzB4MmM3NDU3WydsZW5ndGgnXTtfMHgxM2RlMGM8XzB4NDUzYjlhO18weDEzZGUwYysrKWlmKF8weDQzOTE3Mz1fMHgyYzc0NTdbXzB4MTNkZTBjXSwhKF8weDE2YmRhZSYmXzB4ZjA1ZGI2Wyd0ZXN0J10oXzB4NDM5MTczWyd0b1N0cmluZyddKCkpKSYmIXRoaXNbXzB4Mzk5NWFmKDB4Mjc3KV0oXzB4NGE5Mzk2LF8weDQzOTE3MyxfMHgyOTkwZjApJiYhXzB4MjNlNjdiW18weDM5OTVhZigweDFiZSkrXzB4NDM5MTczW18weDM5OTVhZigweDFlZSldKCldKXtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDticmVhazt9aWYoIV8weDI5OTBmMFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgyOTkwZjBbJ2F1dG9FeHBhbmQnXSYmXzB4Mjk5MGYwW18weDM5OTVhZigweDIzYyldPl8weDI5OTBmMFtfMHgzOTk1YWYoMHgyODYpXSl7XzB4MTA0M2QyPSEweDA7YnJlYWs7fV8weDMzOTNjNFtfMHgzOTk1YWYoMHgyMTIpXShfMHg1MDcyNTdbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDMyMjE1NixfMHgyM2U2N2IsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHg0MzkxNzMsXzB4Mjk5MGYwKSk7fX19fX1pZihfMHg1NzQ3MWJbJ3R5cGUnXT1fMHgzNDg2ODgsXzB4MzA5NzNmPyhfMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09XzB4NGE5Mzk2W18weDM5OTVhZigweDFiNCldKCksdGhpc1snX2NhcElmU3RyaW5nJ10oXzB4MzQ4Njg4LF8weDU3NDcxYixfMHgyOTkwZjAsXzB4MzRkMDljKSk6XzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MjA4KT9fMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09dGhpc1tfMHgzOTk1YWYoMHgxZmQpXVtfMHgzOTk1YWYoMHgyODEpXShfMHg0YTkzOTYpOl8weDM0ODY4OD09PV8weDM5OTVhZigweDFmMyk/XzB4NTc0NzFiWyd2YWx1ZSddPV8weDRhOTM5NlsndG9TdHJpbmcnXSgpOl8weDM0ODY4OD09PV8weDM5OTVhZigweDIzNyk/XzB4NTc0NzFiWyd2YWx1ZSddPXRoaXNbXzB4Mzk5NWFmKDB4MjJiKV1bXzB4Mzk5NWFmKDB4MjgxKV0oXzB4NGE5Mzk2KTpfMHgzNDg2ODg9PT0nc3ltYm9sJyYmdGhpc1tfMHgzOTk1YWYoMHgyMGIpXT9fMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09dGhpc1tfMHgzOTk1YWYoMHgyMGIpXVtfMHgzOTk1YWYoMHgxZDkpXVtfMHgzOTk1YWYoMHgxZWUpXVtfMHgzOTk1YWYoMHgyODEpXShfMHg0YTkzOTYpOiFfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjIyKV0mJiEoXzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MjA2KXx8XzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MWI1KSkmJihkZWxldGUgXzB4NTc0NzFiW18weDM5OTVhZigweDI3MCldLF8weDU3NDcxYltfMHgzOTk1YWYoMHgxYjYpXT0hMHgwKSxfMHgxMDQzZDImJihfMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MWJjKV09ITB4MCksXzB4NWYxODljPV8weDI5OTBmMFsnbm9kZSddWydjdXJyZW50J10sXzB4Mjk5MGYwW18weDM5OTVhZigweDFlOCldW18weDM5OTVhZigweDI4NSldPV8weDU3NDcxYix0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4NTc0NzFiLF8weDI5OTBmMCksXzB4MzM5M2M0W18weDM5OTVhZigweDIzZildKXtmb3IoXzB4MTNkZTBjPTB4MCxfMHg0NTNiOWE9XzB4MzM5M2M0W18weDM5OTVhZigweDIzZildO18weDEzZGUwYzxfMHg0NTNiOWE7XzB4MTNkZTBjKyspXzB4MzM5M2M0W18weDEzZGUwY10oXzB4MTNkZTBjKTt9XzB4MzIyMTU2W18weDM5OTVhZigweDIzZildJiYoXzB4NTc0NzFiWydwcm9wcyddPV8weDMyMjE1Nik7fWNhdGNoKF8weDRkMzUyOCl7XzB4YTQ2NTIwKF8weDRkMzUyOCxfMHg1NzQ3MWIsXzB4Mjk5MGYwKTt9cmV0dXJuIHRoaXNbXzB4Mzk5NWFmKDB4MjA5KV0oXzB4NGE5Mzk2LF8weDU3NDcxYiksdGhpc1tfMHgzOTk1YWYoMHgyMjcpXShfMHg1NzQ3MWIsXzB4Mjk5MGYwKSxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MWU4KV1bXzB4Mzk5NWFmKDB4Mjg1KV09XzB4NWYxODljLF8weDI5OTBmMFsnbGV2ZWwnXS0tLF8weDI5OTBmMFtfMHgzOTk1YWYoMHgyNzkpXT1fMHgzYjU4ZTYsXzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldJiZfMHgyOTkwZjBbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHgzOTk1YWYoMHgyOTcpXSgpLF8weDU3NDcxYjt9W18weDUxYWFlNCgweDI4YildKF8weDZhZGJhKXt2YXIgXzB4MjM5M2U2PV8weDUxYWFlNDtyZXR1cm4gT2JqZWN0W18weDIzOTNlNigweDIyYyldP09iamVjdFtfMHgyMzkzZTYoMHgyMmMpXShfMHg2YWRiYSk6W107fVtfMHg1MWFhZTQoMHgxZWYpXShfMHhiMTNmM2Qpe3ZhciBfMHg0MDkxNjI9XzB4NTFhYWU0O3JldHVybiEhKF8weGIxM2YzZCYmXzB4NDdkOTYwW18weDQwOTE2MigweDFjYSldJiZ0aGlzW18weDQwOTE2MigweDIyMyldKF8weGIxM2YzZCk9PT1fMHg0MDkxNjIoMHgyMWYpJiZfMHhiMTNmM2RbXzB4NDA5MTYyKDB4MjdkKV0pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MWExNzc5LF8weDUwMTI5MixfMHgyOWUyYTUpe3ZhciBfMHgxNzVjZWY9XzB4NTFhYWU0O3JldHVybiBfMHgyOWUyYTVbXzB4MTc1Y2VmKDB4MjFkKV0/dHlwZW9mIF8weDFhMTc3OVtfMHg1MDEyOTJdPT1fMHgxNzVjZWYoMHgyNTMpOiEweDE7fVtfMHg1MWFhZTQoMHgxZWQpXShfMHg0Y2RiNjApe3ZhciBfMHgzODg0Mzk9XzB4NTFhYWU0LF8weDU2NmEwYz0nJztyZXR1cm4gXzB4NTY2YTBjPXR5cGVvZiBfMHg0Y2RiNjAsXzB4NTY2YTBjPT09XzB4Mzg4NDM5KDB4MjEzKT90aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0Y2RiNjApPT09XzB4Mzg4NDM5KDB4MWRjKT9fMHg1NjZhMGM9J2FycmF5Jzp0aGlzW18weDM4ODQzOSgweDIyMyldKF8weDRjZGI2MCk9PT1fMHgzODg0MzkoMHgyMDIpP18weDU2NmEwYz0nZGF0ZSc6dGhpc1tfMHgzODg0MzkoMHgyMjMpXShfMHg0Y2RiNjApPT09XzB4Mzg4NDM5KDB4MjRkKT9fMHg1NjZhMGM9XzB4Mzg4NDM5KDB4MWYzKTpfMHg0Y2RiNjA9PT1udWxsP18weDU2NmEwYz0nbnVsbCc6XzB4NGNkYjYwW18weDM4ODQzOSgweDIwZildJiYoXzB4NTY2YTBjPV8weDRjZGI2MFtfMHgzODg0MzkoMHgyMGYpXVtfMHgzODg0MzkoMHgyNWEpXXx8XzB4NTY2YTBjKTpfMHg1NjZhMGM9PT1fMHgzODg0MzkoMHgxYjUpJiZ0aGlzW18weDM4ODQzOSgweDI1MCldJiZfMHg0Y2RiNjAgaW5zdGFuY2VvZiB0aGlzW18weDM4ODQzOSgweDI1MCldJiYoXzB4NTY2YTBjPV8weDM4ODQzOSgweDFlNikpLF8weDU2NmEwYzt9Wydfb2JqZWN0VG9TdHJpbmcnXShfMHgxMmEzNmUpe3ZhciBfMHgyODA2MjY9XzB4NTFhYWU0O3JldHVybiBPYmplY3RbXzB4MjgwNjI2KDB4MWQ5KV1bXzB4MjgwNjI2KDB4MWVlKV1bXzB4MjgwNjI2KDB4MjgxKV0oXzB4MTJhMzZlKTt9WydfaXNQcmltaXRpdmVUeXBlJ10oXzB4NGRkNzhlKXt2YXIgXzB4MzBmNTA3PV8weDUxYWFlNDtyZXR1cm4gXzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MWY4KXx8XzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MjQxKXx8XzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MWU1KTt9W18weDUxYWFlNCgweDI2NCldKF8weDNmN2JjOCl7dmFyIF8weDRmYWRhZD1fMHg1MWFhZTQ7cmV0dXJuIF8weDNmN2JjOD09PSdCb29sZWFuJ3x8XzB4M2Y3YmM4PT09XzB4NGZhZGFkKDB4MjFiKXx8XzB4M2Y3YmM4PT09XzB4NGZhZGFkKDB4MjNhKTt9W18weDUxYWFlNCgweDFkZSldKF8weDE0MDhlZCxfMHg4ZThkZDksXzB4NTg4MmU2LF8weDQzNzI1YyxfMHg1YThlMGIsXzB4M2M2NTVlKXt2YXIgXzB4Mzg4MWM2PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDIyZjY5NCl7dmFyIF8weDEyODFlZT1fMHg0ZDI0LF8weDc5NmQwMj1fMHg1YThlMGJbJ25vZGUnXVtfMHgxMjgxZWUoMHgyODUpXSxfMHgxNTgxZGI9XzB4NWE4ZTBiW18weDEyODFlZSgweDFlOCldWydpbmRleCddLF8weDQ3MmNjYz1fMHg1YThlMGJbXzB4MTI4MWVlKDB4MWU4KV1bXzB4MTI4MWVlKDB4Mjk2KV07XzB4NWE4ZTBiW18weDEyODFlZSgweDFlOCldW18weDEyODFlZSgweDI5NildPV8weDc5NmQwMixfMHg1YThlMGJbJ25vZGUnXVtfMHgxMjgxZWUoMHgxZmYpXT10eXBlb2YgXzB4NDM3MjVjPT1fMHgxMjgxZWUoMHgxZTUpP18weDQzNzI1YzpfMHgyMmY2OTQsXzB4MTQwOGVkW18weDEyODFlZSgweDIxMildKF8weDM4ODFjNlsnX3Byb3BlcnR5J10oXzB4OGU4ZGQ5LF8weDU4ODJlNixfMHg0MzcyNWMsXzB4NWE4ZTBiLF8weDNjNjU1ZSkpLF8weDVhOGUwYltfMHgxMjgxZWUoMHgxZTgpXVsncGFyZW50J109XzB4NDcyY2NjLF8weDVhOGUwYlsnbm9kZSddW18weDEyODFlZSgweDFmZildPV8weDE1ODFkYjt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDRkMWQ1OSxfMHg0ZTNlZTMsXzB4YzE5MjZkLF8weDU4MzQ5NyxfMHgyM2UzYjcsXzB4MzY2YmFiLF8weDU3OGRmYSl7dmFyIF8weDQzYzU3YT1fMHg1MWFhZTQsXzB4NTE2NzQzPXRoaXM7cmV0dXJuIF8weDRlM2VlM1tfMHg0M2M1N2EoMHgxYmUpK18weDIzZTNiN1tfMHg0M2M1N2EoMHgxZWUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDUxYzBiOCl7dmFyIF8weDIyY2YwOD1fMHg0M2M1N2EsXzB4NDJlZWM1PV8weDM2NmJhYltfMHgyMmNmMDgoMHgxZTgpXVsnY3VycmVudCddLF8weDIzN2FjZD1fMHgzNjZiYWJbXzB4MjJjZjA4KDB4MWU4KV1bXzB4MjJjZjA4KDB4MWZmKV0sXzB4ZjJjMDk9XzB4MzY2YmFiWydub2RlJ11bJ3BhcmVudCddO18weDM2NmJhYlsnbm9kZSddWydwYXJlbnQnXT1fMHg0MmVlYzUsXzB4MzY2YmFiW18weDIyY2YwOCgweDFlOCldW18weDIyY2YwOCgweDFmZildPV8weDUxYzBiOCxfMHg0ZDFkNTlbXzB4MjJjZjA4KDB4MjEyKV0oXzB4NTE2NzQzWydfcHJvcGVydHknXShfMHhjMTkyNmQsXzB4NTgzNDk3LF8weDIzZTNiNyxfMHgzNjZiYWIsXzB4NTc4ZGZhKSksXzB4MzY2YmFiW18weDIyY2YwOCgweDFlOCldW18weDIyY2YwOCgweDI5NildPV8weGYyYzA5LF8weDM2NmJhYltfMHgyMmNmMDgoMHgxZTgpXVtfMHgyMmNmMDgoMHgxZmYpXT1fMHgyMzdhY2Q7fTt9W18weDUxYWFlNCgweDI2YyldKF8weDM3YTU3NSxfMHg0OTA4NWYsXzB4NWQyMzFjLF8weDE4N2EzOSxfMHgxNTIyMjkpe3ZhciBfMHg1NTNiNTI9XzB4NTFhYWU0LF8weDJlNmNkNz10aGlzO18weDE1MjIyOXx8KF8weDE1MjIyOT1mdW5jdGlvbihfMHgzOTVmYWEsXzB4MzRhZGZmKXtyZXR1cm4gXzB4Mzk1ZmFhW18weDM0YWRmZl07fSk7dmFyIF8weDRiNDFhNj1fMHg1ZDIzMWNbJ3RvU3RyaW5nJ10oKSxfMHg1YmRmMjQ9XzB4MTg3YTM5W18weDU1M2I1MigweDI3MSldfHx7fSxfMHgxZDc5ODI9XzB4MTg3YTM5W18weDU1M2I1MigweDIyMildLF8weDI1ZjYyYz1fMHgxODdhMzlbXzB4NTUzYjUyKDB4MjdhKV07dHJ5e3ZhciBfMHgyMDc4NTY9dGhpc1snX2lzTWFwJ10oXzB4MzdhNTc1KSxfMHgxNmNhYjY9XzB4NGI0MWE2O18weDIwNzg1NiYmXzB4MTZjYWI2WzB4MF09PT0nXFxcXHgyNycmJihfMHgxNmNhYjY9XzB4MTZjYWI2W18weDU1M2I1MigweDFjZCldKDB4MSxfMHgxNmNhYjZbXzB4NTUzYjUyKDB4MjNmKV0tMHgyKSk7dmFyIF8weDJiNTk1Yj1fMHgxODdhMzlbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViZGYyNFsnX3BfJytfMHgxNmNhYjZdO18weDJiNTk1YiYmKF8weDE4N2EzOVsnZGVwdGgnXT1fMHgxODdhMzlbXzB4NTUzYjUyKDB4MjIyKV0rMHgxKSxfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjdhKV09ISFfMHgyYjU5NWI7dmFyIF8weDJhMjNkMz10eXBlb2YgXzB4NWQyMzFjPT0nc3ltYm9sJyxfMHgzMGEzMWI9eyduYW1lJzpfMHgyYTIzZDN8fF8weDIwNzg1Nj9fMHg0YjQxYTY6dGhpc1snX3Byb3BlcnR5TmFtZSddKF8weDRiNDFhNil9O2lmKF8weDJhMjNkMyYmKF8weDMwYTMxYlsnc3ltYm9sJ109ITB4MCksIShfMHg0OTA4NWY9PT1fMHg1NTNiNTIoMHgyNDQpfHxfMHg0OTA4NWY9PT1fMHg1NTNiNTIoMHgyOTUpKSl7dmFyIF8weDJmYzc4Yz10aGlzW18weDU1M2I1MigweDIzZSldKF8weDM3YTU3NSxfMHg1ZDIzMWMpO2lmKF8weDJmYzc4YyYmKF8weDJmYzc4Y1tfMHg1NTNiNTIoMHgyMmQpXSYmKF8weDMwYTMxYltfMHg1NTNiNTIoMHgyOTgpXT0hMHgwKSxfMHgyZmM3OGNbXzB4NTUzYjUyKDB4MWUxKV0mJiFfMHgyYjU5NWImJiFfMHgxODdhMzlbXzB4NTUzYjUyKDB4MWJkKV0pKXJldHVybiBfMHgzMGEzMWJbXzB4NTUzYjUyKDB4MWU3KV09ITB4MCx0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzkpLF8weDMwYTMxYjt9dmFyIF8weDE4YTY3Mjt0cnl7XzB4MThhNjcyPV8weDE1MjIyOShfMHgzN2E1NzUsXzB4NWQyMzFjKTt9Y2F0Y2goXzB4NTUxNDcwKXtyZXR1cm4gXzB4MzBhMzFiPXsnbmFtZSc6XzB4NGI0MWE2LCd0eXBlJzpfMHg1NTNiNTIoMHgyNWYpLCdlcnJvcic6XzB4NTUxNDcwW18weDU1M2I1MigweDFkMCldfSx0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzkpLF8weDMwYTMxYjt9dmFyIF8weDM3NWFmZT10aGlzW18weDU1M2I1MigweDFlZCldKF8weDE4YTY3MiksXzB4NjVkYzA4PXRoaXNbXzB4NTUzYjUyKDB4MjI1KV0oXzB4Mzc1YWZlKTtpZihfMHgzMGEzMWJbXzB4NTUzYjUyKDB4MjQ4KV09XzB4Mzc1YWZlLF8weDY1ZGMwOCl0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzksXzB4MThhNjcyLGZ1bmN0aW9uKCl7dmFyIF8weDRjMzQwOT1fMHg1NTNiNTI7XzB4MzBhMzFiW18weDRjMzQwOSgweDI3MCldPV8weDE4YTY3MltfMHg0YzM0MDkoMHgxYjQpXSgpLCFfMHgyYjU5NWImJl8weDJlNmNkN1snX2NhcElmU3RyaW5nJ10oXzB4Mzc1YWZlLF8weDMwYTMxYixfMHgxODdhMzkse30pO30pO2Vsc2V7dmFyIF8weGZjM2ZjYT1fMHgxODdhMzlbXzB4NTUzYjUyKDB4Mjc5KV0mJl8weDE4N2EzOVsnbGV2ZWwnXTxfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjliKV0mJl8weDE4N2EzOVtfMHg1NTNiNTIoMHgyNGMpXVtfMHg1NTNiNTIoMHgyMTYpXShfMHgxOGE2NzIpPDB4MCYmXzB4Mzc1YWZlIT09XzB4NTUzYjUyKDB4MjUzKSYmXzB4MTg3YTM5W18weDU1M2I1MigweDIzYyldPF8weDE4N2EzOVsnYXV0b0V4cGFuZExpbWl0J107XzB4ZmMzZmNhfHxfMHgxODdhMzlbJ2xldmVsJ108XzB4MWQ3OTgyfHxfMHgyYjU5NWI/KHRoaXNbXzB4NTUzYjUyKDB4MjM5KV0oXzB4MzBhMzFiLF8weDE4YTY3MixfMHgxODdhMzksXzB4MmI1OTVifHx7fSksdGhpc1tfMHg1NTNiNTIoMHgyMDkpXShfMHgxOGE2NzIsXzB4MzBhMzFiKSk6dGhpc1tfMHg1NTNiNTIoMHgyMDcpXShfMHgzMGEzMWIsXzB4MTg3YTM5LF8weDE4YTY3MixmdW5jdGlvbigpe3ZhciBfMHgyYWIwN2E9XzB4NTUzYjUyO18weDM3NWFmZT09PV8weDJhYjA3YSgweDIwNil8fF8weDM3NWFmZT09PV8weDJhYjA3YSgweDFiNSl8fChkZWxldGUgXzB4MzBhMzFiW18weDJhYjA3YSgweDI3MCldLF8weDMwYTMxYltfMHgyYWIwN2EoMHgxYjYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMwYTMxYjt9ZmluYWxseXtfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjcxKV09XzB4NWJkZjI0LF8weDE4N2EzOVtfMHg1NTNiNTIoMHgyMjIpXT1fMHgxZDc5ODIsXzB4MTg3YTM5W18weDU1M2I1MigweDI3YSldPV8weDI1ZjYyYzt9fVsnX2NhcElmU3RyaW5nJ10oXzB4NTNkZDdjLF8weDFiM2VhNCxfMHg0OTEyMTYsXzB4NGMyOTAzKXt2YXIgXzB4NDQxMDRhPV8weDUxYWFlNCxfMHg0ODBlZWU9XzB4NGMyOTAzWydzdHJMZW5ndGgnXXx8XzB4NDkxMjE2WydzdHJMZW5ndGgnXTtpZigoXzB4NTNkZDdjPT09J3N0cmluZyd8fF8weDUzZGQ3Yz09PV8weDQ0MTA0YSgweDIxYikpJiZfMHgxYjNlYTRbXzB4NDQxMDRhKDB4MjcwKV0pe2xldCBfMHgyNDZlYWE9XzB4MWIzZWE0Wyd2YWx1ZSddW18weDQ0MTA0YSgweDIzZildO18weDQ5MTIxNltfMHg0NDEwNGEoMHgyOWEpXSs9XzB4MjQ2ZWFhLF8weDQ5MTIxNltfMHg0NDEwNGEoMHgyOWEpXT5fMHg0OTEyMTZbXzB4NDQxMDRhKDB4MjVlKV0/KF8weDFiM2VhNFsnY2FwcGVkJ109JycsZGVsZXRlIF8weDFiM2VhNFtfMHg0NDEwNGEoMHgyNzApXSk6XzB4MjQ2ZWFhPl8weDQ4MGVlZSYmKF8weDFiM2VhNFtfMHg0NDEwNGEoMHgxYjYpXT1fMHgxYjNlYTRbJ3ZhbHVlJ11bXzB4NDQxMDRhKDB4MWNkKV0oMHgwLF8weDQ4MGVlZSksZGVsZXRlIF8weDFiM2VhNFtfMHg0NDEwNGEoMHgyNzApXSk7fX1bJ19pc01hcCddKF8weDEyNzFiMyl7dmFyIF8weDEyMWUwOT1fMHg1MWFhZTQ7cmV0dXJuISEoXzB4MTI3MWIzJiZfMHg0N2Q5NjBbXzB4MTIxZTA5KDB4MWI3KV0mJnRoaXNbXzB4MTIxZTA5KDB4MjIzKV0oXzB4MTI3MWIzKT09PV8weDEyMWUwOSgweDI0OSkmJl8weDEyNzFiM1tfMHgxMjFlMDkoMHgyN2QpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDQ2M2NlNyl7dmFyIF8weDMzYjcwMD1fMHg1MWFhZTQ7aWYoXzB4NDYzY2U3W18weDMzYjcwMCgweDI2ZildKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0NjNjZTc7dmFyIF8weDQwZTY4Njt0cnl7XzB4NDBlNjg2PUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDQ2M2NlNyk7fWNhdGNoe18weDQwZTY4Nj0nXFxcXHgyMicrdGhpc1tfMHgzM2I3MDAoMHgyMjMpXShfMHg0NjNjZTcpKydcXFxceDIyJzt9cmV0dXJuIF8weDQwZTY4NlsnbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDQwZTY4Nj1fMHg0MGU2ODZbJ3N1YnN0ciddKDB4MSxfMHg0MGU2ODZbJ2xlbmd0aCddLTB4Mik6XzB4NDBlNjg2PV8weDQwZTY4NlsncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MzNiNzAwKDB4MjM4KV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MzNiNzAwKDB4MjM4KV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDQwZTY4Njt9W18weDUxYWFlNCgweDIwNyldKF8weDQ2NmU3MCxfMHg1ZjE1MDEsXzB4NGZjNjBhLF8weDRmYWQyYyl7dmFyIF8weDM4NzFmOT1fMHg1MWFhZTQ7dGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDQ2NmU3MCxfMHg1ZjE1MDEpLF8weDRmYWQyYyYmXzB4NGZhZDJjKCksdGhpc1tfMHgzODcxZjkoMHgyMDkpXShfMHg0ZmM2MGEsXzB4NDY2ZTcwKSx0aGlzW18weDM4NzFmOSgweDIyNyldKF8weDQ2NmU3MCxfMHg1ZjE1MDEpO31bXzB4NTFhYWU0KDB4MjI5KV0oXzB4YTE0YmM0LF8weDI0NDUyMil7dmFyIF8weDI0ZjYzMT1fMHg1MWFhZTQ7dGhpc1tfMHgyNGY2MzEoMHgyN2YpXShfMHhhMTRiYzQsXzB4MjQ0NTIyKSx0aGlzW18weDI0ZjYzMSgweDFmOSldKF8weGExNGJjNCxfMHgyNDQ1MjIpLHRoaXNbXzB4MjRmNjMxKDB4MjE4KV0oXzB4YTE0YmM0LF8weDI0NDUyMiksdGhpc1tfMHgyNGY2MzEoMHgyNjcpXShfMHhhMTRiYzQsXzB4MjQ0NTIyKTt9W18weDUxYWFlNCgweDI3ZildKF8weDU3NGZlYSxfMHg1NjFmZTkpe31bXzB4NTFhYWU0KDB4MWY5KV0oXzB4OGY4ZjU5LF8weDFkY2FjNil7fVtfMHg1MWFhZTQoMHgyMGMpXShfMHgxM2RlZjksXzB4NTExNDE5KXt9WydfaXNVbmRlZmluZWQnXShfMHhhNGQ2YjUpe3ZhciBfMHg0OGFiYTg9XzB4NTFhYWU0O3JldHVybiBfMHhhNGQ2YjU9PT10aGlzW18weDQ4YWJhOCgweDIxNSldO31bXzB4NTFhYWU0KDB4MjI3KV0oXzB4NDU5NDMxLF8weDFjNDAxMSl7dmFyIF8weDNlNTYyMz1fMHg1MWFhZTQ7dGhpc1tfMHgzZTU2MjMoMHgyMGMpXShfMHg0NTk0MzEsXzB4MWM0MDExKSx0aGlzW18weDNlNTYyMygweDFlOSldKF8weDQ1OTQzMSksXzB4MWM0MDExW18weDNlNTYyMygweDFjOCldJiZ0aGlzW18weDNlNTYyMygweDFjMyldKF8weDQ1OTQzMSksdGhpc1tfMHgzZTU2MjMoMHgxZGIpXShfMHg0NTk0MzEsXzB4MWM0MDExKSx0aGlzW18weDNlNTYyMygweDI3ZSldKF8weDQ1OTQzMSxfMHgxYzQwMTEpLHRoaXNbXzB4M2U1NjIzKDB4MjJhKV0oXzB4NDU5NDMxKTt9W18weDUxYWFlNCgweDIwOSldKF8weDM3YWRjYSxfMHgzYjI3MmQpe3ZhciBfMHg0OWMzYWQ9XzB4NTFhYWU0O2xldCBfMHgyZjNiNjk7dHJ5e18weDQ3ZDk2MFsnY29uc29sZSddJiYoXzB4MmYzYjY5PV8weDQ3ZDk2MFsnY29uc29sZSddWydlcnJvciddLF8weDQ3ZDk2MFtfMHg0OWMzYWQoMHgxYzQpXVtfMHg0OWMzYWQoMHgyMmYpXT1mdW5jdGlvbigpe30pLF8weDM3YWRjYSYmdHlwZW9mIF8weDM3YWRjYVsnbGVuZ3RoJ109PV8weDQ5YzNhZCgweDFlNSkmJihfMHgzYjI3MmRbJ2xlbmd0aCddPV8weDM3YWRjYVtfMHg0OWMzYWQoMHgyM2YpXSk7fWNhdGNoe31maW5hbGx5e18weDJmM2I2OSYmKF8weDQ3ZDk2MFtfMHg0OWMzYWQoMHgxYzQpXVtfMHg0OWMzYWQoMHgyMmYpXT1fMHgyZjNiNjkpO31pZihfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjQ4KV09PT0nbnVtYmVyJ3x8XzB4M2IyNzJkW18weDQ5YzNhZCgweDI0OCldPT09XzB4NDljM2FkKDB4MjNhKSl7aWYoaXNOYU4oXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldKSlfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjA0KV09ITB4MCxkZWxldGUgXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldO2Vsc2Ugc3dpdGNoKF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNzApXSl7Y2FzZSBOdW1iZXJbXzB4NDljM2FkKDB4MWUwKV06XzB4M2IyNzJkW18weDQ5YzNhZCgweDI0YildPSEweDAsZGVsZXRlIF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNzApXTticmVhaztjYXNlIE51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTpfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjAxKV09ITB4MCxkZWxldGUgXzB4M2IyNzJkWyd2YWx1ZSddO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NDljM2FkKDB4MjZhKV0oXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldKSYmKF8weDNiMjcyZFsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNDgpXT09PV8weDQ5YzNhZCgweDI1MykmJnR5cGVvZiBfMHgzN2FkY2FbJ25hbWUnXT09XzB4NDljM2FkKDB4MjQxKSYmXzB4MzdhZGNhW18weDQ5YzNhZCgweDI1YSldJiZfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjVhKV0mJl8weDM3YWRjYVsnbmFtZSddIT09XzB4M2IyNzJkWyduYW1lJ10mJihfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjgwKV09XzB4MzdhZGNhWyduYW1lJ10pO31bXzB4NTFhYWU0KDB4MjZhKV0oXzB4NTgyM2RjKXtyZXR1cm4gMHgxL18weDU4MjNkYz09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9W18weDUxYWFlNCgweDFjMyldKF8weDRmMTRmYyl7dmFyIF8weDM0YjM0Nj1fMHg1MWFhZTQ7IV8weDRmMTRmY1tfMHgzNGIzNDYoMHgyMzUpXXx8IV8weDRmMTRmY1tfMHgzNGIzNDYoMHgyMzUpXVtfMHgzNGIzNDYoMHgyM2YpXXx8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09J2FycmF5J3x8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09XzB4MzRiMzQ2KDB4MWI3KXx8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09XzB4MzRiMzQ2KDB4MWNhKXx8XzB4NGYxNGZjW18weDM0YjM0NigweDIzNSldW18weDM0YjM0NigweDFmMCldKGZ1bmN0aW9uKF8weDIxZDUxMyxfMHgxYWNhOTkpe3ZhciBfMHgxMGJjZjc9XzB4MzRiMzQ2LF8weDNlYjE4Yz1fMHgyMWQ1MTNbXzB4MTBiY2Y3KDB4MjVhKV1bXzB4MTBiY2Y3KDB4MWYyKV0oKSxfMHgzYjY0ZjU9XzB4MWFjYTk5W18weDEwYmNmNygweDI1YSldWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDNlYjE4YzxfMHgzYjY0ZjU/LTB4MTpfMHgzZWIxOGM+XzB4M2I2NGY1PzB4MToweDA7fSk7fVtfMHg1MWFhZTQoMHgxZGIpXShfMHg0NzJmZDYsXzB4NTA3NjUzKXt2YXIgXzB4NGQzZTgyPV8weDUxYWFlNDtpZighKF8weDUwNzY1M1tfMHg0ZDNlODIoMHgyMWQpXXx8IV8weDQ3MmZkNltfMHg0ZDNlODIoMHgyMzUpXXx8IV8weDQ3MmZkNltfMHg0ZDNlODIoMHgyMzUpXVtfMHg0ZDNlODIoMHgyM2YpXSkpe2Zvcih2YXIgXzB4NGVjMGZhPVtdLF8weGNmZGMyOT1bXSxfMHgxNWIwMTQ9MHgwLF8weDE2Y2JhZD1fMHg0NzJmZDZbXzB4NGQzZTgyKDB4MjM1KV1bJ2xlbmd0aCddO18weDE1YjAxNDxfMHgxNmNiYWQ7XzB4MTViMDE0Kyspe3ZhciBfMHhkZjYzNWU9XzB4NDcyZmQ2W18weDRkM2U4MigweDIzNSldW18weDE1YjAxNF07XzB4ZGY2MzVlWyd0eXBlJ109PT1fMHg0ZDNlODIoMHgyNTMpP18weDRlYzBmYVtfMHg0ZDNlODIoMHgyMTIpXShfMHhkZjYzNWUpOl8weGNmZGMyOVtfMHg0ZDNlODIoMHgyMTIpXShfMHhkZjYzNWUpO31pZighKCFfMHhjZmRjMjlbXzB4NGQzZTgyKDB4MjNmKV18fF8weDRlYzBmYVtfMHg0ZDNlODIoMHgyM2YpXTw9MHgxKSl7XzB4NDcyZmQ2W18weDRkM2U4MigweDIzNSldPV8weGNmZGMyOTt2YXIgXzB4NDQyNTI3PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDRlYzBmYX07dGhpc1snX3NldE5vZGVJZCddKF8weDQ0MjUyNyxfMHg1MDc2NTMpLHRoaXNbXzB4NGQzZTgyKDB4MjBjKV0oXzB4NDQyNTI3LF8weDUwNzY1MyksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHg0NDI1MjcpLHRoaXNbXzB4NGQzZTgyKDB4MjY3KV0oXzB4NDQyNTI3LF8weDUwNzY1MyksXzB4NDQyNTI3WydpZCddKz0nXFxcXHgyMGYnLF8weDQ3MmZkNlsncHJvcHMnXVsndW5zaGlmdCddKF8weDQ0MjUyNyk7fX19W18weDUxYWFlNCgweDI3ZSldKF8weDU4N2MyZixfMHhiMmZmZWUpe31bXzB4NTFhYWU0KDB4MWU5KV0oXzB4NTg4OGFjKXt9W18weDUxYWFlNCgweDFlYildKF8weDM4Y2I2ZCl7dmFyIF8weDRhMmU1Zj1fMHg1MWFhZTQ7cmV0dXJuIEFycmF5W18weDRhMmU1ZigweDIxYSldKF8weDM4Y2I2ZCl8fHR5cGVvZiBfMHgzOGNiNmQ9PV8weDRhMmU1ZigweDIxMykmJnRoaXNbXzB4NGEyZTVmKDB4MjIzKV0oXzB4MzhjYjZkKT09PV8weDRhMmU1ZigweDFkYyk7fVtfMHg1MWFhZTQoMHgyNjcpXShfMHg0NTQ3ODAsXzB4MTlmNzM2KXt9W18weDUxYWFlNCgweDIyYSldKF8weDJmNTE0MCl7dmFyIF8weDFhNTQzYj1fMHg1MWFhZTQ7ZGVsZXRlIF8weDJmNTE0MFtfMHgxYTU0M2IoMHgyMjEpXSxkZWxldGUgXzB4MmY1MTQwW18weDFhNTQzYigweDIzZCldLGRlbGV0ZSBfMHgyZjUxNDBbXzB4MWE1NDNiKDB4MWM3KV07fVtfMHg1MWFhZTQoMHgyMTgpXShfMHg0OTRkNDIsXzB4MzNlZDBjKXt9fWxldCBfMHgxMjY5NjE9bmV3IF8weGM2OTJhMygpLF8weDU1ODZiZj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg1MzM5MzY9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgxODU1NTUoXzB4NGRkMWI5LF8weDM5MDZhNyxfMHg0MDJkZGUsXzB4NjkxNTI1LF8weDNiMmQ3ZSxfMHg0ZDRlOWYpe3ZhciBfMHg1YzNlNDk9XzB4NTFhYWU0O2xldCBfMHhjNjkxYzAsXzB4MWU4ZTk2O3RyeXtfMHgxZThlOTY9XzB4MWM4MGVjKCksXzB4YzY5MWMwPV8weDU2MDFhZltfMHgzOTA2YTddLCFfMHhjNjkxYzB8fF8weDFlOGU5Ni1fMHhjNjkxYzBbJ3RzJ10+MHgxZjQmJl8weGM2OTFjMFtfMHg1YzNlNDkoMHgyNDUpXSYmXzB4YzY5MWMwW18weDVjM2U0OSgweDFkOCldL18weGM2OTFjMFtfMHg1YzNlNDkoMHgyNDUpXTwweDY0PyhfMHg1NjAxYWZbXzB4MzkwNmE3XT1fMHhjNjkxYzA9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgxZThlOTZ9LF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXT17fSk6XzB4MWU4ZTk2LV8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsndHMnXT4weDMyJiZfMHg1NjAxYWZbJ2hpdHMnXVtfMHg1YzNlNDkoMHgyNDUpXSYmXzB4NTYwMWFmW18weDVjM2U0OSgweDIzMCldW18weDVjM2U0OSgweDFkOCldL18weDU2MDFhZlsnaGl0cyddW18weDVjM2U0OSgweDI0NSldPDB4NjQmJihfMHg1NjAxYWZbXzB4NWMzZTQ5KDB4MjMwKV09e30pO2xldCBfMHg3MGIzY2I9W10sXzB4MjE5ZGEyPV8weGM2OTFjMFtfMHg1YzNlNDkoMHgyMjApXXx8XzB4NTYwMWFmWydoaXRzJ11bXzB4NWMzZTQ5KDB4MjIwKV0/XzB4NTMzOTM2Ol8weDU1ODZiZixfMHgxYzU0YWM9XzB4MWM4OTlhPT57dmFyIF8weDMwYmZlMD1fMHg1YzNlNDk7bGV0IF8weDI4ZjZlMD17fTtyZXR1cm4gXzB4MjhmNmUwW18weDMwYmZlMCgweDIzNSldPV8weDFjODk5YVtfMHgzMGJmZTAoMHgyMzUpXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MWJiKV09XzB4MWM4OTlhW18weDMwYmZlMCgweDFiYildLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYzIpXT1fMHgxYzg5OWFbXzB4MzBiZmUwKDB4MWMyKV0sXzB4MjhmNmUwWyd0b3RhbFN0ckxlbmd0aCddPV8weDFjODk5YVsndG90YWxTdHJMZW5ndGgnXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4Mjg2KV09XzB4MWM4OTlhW18weDMwYmZlMCgweDI4NildLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgyOWIpXT1fMHgxYzg5OWFbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYzgpXT0hMHgxLF8weDI4ZjZlMFsnbm9GdW5jdGlvbnMnXT0hXzB4M2M3Zjg4LF8weDI4ZjZlMFsnZGVwdGgnXT0weDEsXzB4MjhmNmUwW18weDMwYmZlMCgweDFkNCldPTB4MCxfMHgyOGY2ZTBbJ2V4cElkJ109XzB4MzBiZmUwKDB4MjkzKSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MWQxKV09J3Jvb3RfZXhwJyxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4Mjc5KV09ITB4MCxfMHgyOGY2ZTBbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXT1bXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MjNjKV09MHgwLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYmQpXT0hMHgwLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgyOWEpXT0weDAsXzB4MjhmNmUwW18weDMwYmZlMCgweDFlOCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDI4ZjZlMDt9O2Zvcih2YXIgXzB4NDdlZjNmPTB4MDtfMHg0N2VmM2Y8XzB4M2IyZDdlW18weDVjM2U0OSgweDIzZildO18weDQ3ZWYzZisrKV8weDcwYjNjYltfMHg1YzNlNDkoMHgyMTIpXShfMHgxMjY5NjFbXzB4NWMzZTQ5KDB4MjM5KV0oeyd0aW1lTm9kZSc6XzB4NGRkMWI5PT09XzB4NWMzZTQ5KDB4MWQ4KXx8dm9pZCAweDB9LF8weDNiMmQ3ZVtfMHg0N2VmM2ZdLF8weDFjNTRhYyhfMHgyMTlkYTIpLHt9KSk7aWYoXzB4NGRkMWI5PT09XzB4NWMzZTQ5KDB4MjUyKSl7bGV0IF8weDVkOTE5Nj1FcnJvcltfMHg1YzNlNDkoMHgyMGUpXTt0cnl7RXJyb3JbXzB4NWMzZTQ5KDB4MjBlKV09MHgxLzB4MCxfMHg3MGIzY2JbJ3B1c2gnXShfMHgxMjY5NjFbJ3NlcmlhbGl6ZSddKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg1YzNlNDkoMHgyM2IpXSxfMHgxYzU0YWMoXzB4MjE5ZGEyKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHg1YzNlNDkoMHgyMGUpXT1fMHg1ZDkxOTY7fX1yZXR1cm57J21ldGhvZCc6XzB4NWMzZTQ5KDB4MjU2KSwndmVyc2lvbic6XzB4NDQxNWFjLCdhcmdzJzpbeyd0cyc6XzB4NDAyZGRlLCdzZXNzaW9uJzpfMHg2OTE1MjUsJ2FyZ3MnOl8weDcwYjNjYiwnaWQnOl8weDM5MDZhNywnY29udGV4dCc6XzB4NGQ0ZTlmfV19O31jYXRjaChfMHgyNzk5YzApe3JldHVybnsnbWV0aG9kJzpfMHg1YzNlNDkoMHgyNTYpLCd2ZXJzaW9uJzpfMHg0NDE1YWMsJ2FyZ3MnOlt7J3RzJzpfMHg0MDJkZGUsJ3Nlc3Npb24nOl8weDY5MTUyNSwnYXJncyc6W3sndHlwZSc6XzB4NWMzZTQ5KDB4MjVmKSwnZXJyb3InOl8weDI3OTljMCYmXzB4Mjc5OWMwWydtZXNzYWdlJ119XSwnaWQnOl8weDM5MDZhNywnY29udGV4dCc6XzB4NGQ0ZTlmfV19O31maW5hbGx5e3RyeXtpZihfMHhjNjkxYzAmJl8weDFlOGU5Nil7bGV0IF8weDRlMGZhMD1fMHgxYzgwZWMoKTtfMHhjNjkxYzBbJ2NvdW50J10rKyxfMHhjNjkxYzBbXzB4NWMzZTQ5KDB4MWQ4KV0rPV8weDU0NTRjNShfMHgxZThlOTYsXzB4NGUwZmEwKSxfMHhjNjkxYzBbJ3RzJ109XzB4NGUwZmEwLF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVtfMHg1YzNlNDkoMHgyNDUpXSsrLF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVtfMHg1YzNlNDkoMHgxZDgpXSs9XzB4NTQ1NGM1KF8weDFlOGU5NixfMHg0ZTBmYTApLF8weDU2MDFhZlsnaGl0cyddWyd0cyddPV8weDRlMGZhMCwoXzB4YzY5MWMwWydjb3VudCddPjB4MzJ8fF8weGM2OTFjMFsndGltZSddPjB4NjQpJiYoXzB4YzY5MWMwW18weDVjM2U0OSgweDIyMCldPSEweDApLChfMHg1NjAxYWZbXzB4NWMzZTQ5KDB4MjMwKV1bXzB4NWMzZTQ5KDB4MjQ1KV0+MHgzZTh8fF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsndGltZSddPjB4MTJjKSYmKF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsncmVkdWNlTGltaXRzJ109ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MTg1NTU1O30oKF8weDU3NWI2MCxfMHgxMjczOTUsXzB4MWFmM2FhLF8weDNjNzk3YyxfMHgzOGQ3YzcsXzB4OTMwNjRiLF8weDNmODlmYixfMHgyNmQ1NmQsXzB4MmY4YzliLF8weDFiZWE2NCk9Pnt2YXIgXzB4M2Q5OThjPV8weDQzODI4MjtpZihfMHg1NzViNjBbXzB4M2Q5OThjKDB4MjYwKV0pcmV0dXJuIF8weDU3NWI2MFsnX2NvbnNvbGVfbmluamEnXTtpZighWShfMHg1NzViNjAsXzB4MjZkNTZkLF8weDM4ZDdjNykpcmV0dXJuIF8weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NTc1YjYwW18weDNkOTk4YygweDI2MCldO2xldCBfMHg1ZGFmODc9VyhfMHg1NzViNjApLF8weDVhZTRkMz1fMHg1ZGFmODdbJ2VsYXBzZWQnXSxfMHg0MjhmMjM9XzB4NWRhZjg3W18weDNkOTk4YygweDIxMCldLF8weDQ0MjBhMT1fMHg1ZGFmODdbXzB4M2Q5OThjKDB4Mjc1KV0sXzB4NWJmZGI5PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MTBlZTFlPVEoXzB4NTc1YjYwLF8weDJmOGM5YixfMHg1YmZkYjksXzB4OTMwNjRiKSxfMHg1MjY1ODc9XzB4NDk4YzJlPT57XzB4NWJmZGI5Wyd0cyddW18weDQ5OGMyZV09XzB4NDI4ZjIzKCk7fSxfMHg4NDI1ODE9KF8weDE4ZGMzMixfMHgyZjczYTUpPT57dmFyIF8weDQ2NWFkMj1fMHgzZDk5OGM7bGV0IF8weDMxYzljNz1fMHg1YmZkYjlbJ3RzJ11bXzB4MmY3M2E1XTtpZihkZWxldGUgXzB4NWJmZGI5Wyd0cyddW18weDJmNzNhNV0sXzB4MzFjOWM3KXtsZXQgXzB4Mjc1MThkPV8weDVhZTRkMyhfMHgzMWM5YzcsXzB4NDI4ZjIzKCkpO18weDU4MjE5MShfMHgxMGVlMWUoXzB4NDY1YWQyKDB4MWQ4KSxfMHgxOGRjMzIsXzB4NDQyMGExKCksXzB4NGViOTU0LFtfMHgyNzUxOGRdLF8weDJmNzNhNSkpO319LF8weDRlNWFiNj1fMHgzN2IyNTM9Pl8weDE0ZGQ4ZT0+e3ZhciBfMHgyYmI4M2I9XzB4M2Q5OThjO3RyeXtfMHg1MjY1ODcoXzB4MTRkZDhlKSxfMHgzN2IyNTMoXzB4MTRkZDhlKTt9ZmluYWxseXtfMHg1NzViNjBbXzB4MmJiODNiKDB4MWM0KV1bXzB4MmJiODNiKDB4MWQ4KV09XzB4MzdiMjUzO319LF8weDUxZTBmND1fMHg0ZGI1MTk9Pl8weDI0MDBhZT0+e3ZhciBfMHgyZDk2Y2Y9XzB4M2Q5OThjO3RyeXtsZXQgW18weDJiOWU4MixfMHgyZmU3ODldPV8weDI0MDBhZVsnc3BsaXQnXShfMHgyZDk2Y2YoMHgyNzMpKTtfMHg4NDI1ODEoXzB4MmZlNzg5LF8weDJiOWU4MiksXzB4NGRiNTE5KF8weDJiOWU4Mik7fWZpbmFsbHl7XzB4NTc1YjYwWydjb25zb2xlJ11bXzB4MmQ5NmNmKDB4MWVhKV09XzB4NGRiNTE5O319O18weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXT17J2NvbnNvbGVMb2cnOihfMHg0NTRjYzUsXzB4MTkxYTkzKT0+e3ZhciBfMHg0NmEyMDk9XzB4M2Q5OThjO18weDU3NWI2MFtfMHg0NmEyMDkoMHgxYzQpXVtfMHg0NmEyMDkoMHgyNTYpXVtfMHg0NmEyMDkoMHgyNWEpXSE9PSdkaXNhYmxlZExvZycmJl8weDU4MjE5MShfMHgxMGVlMWUoXzB4NDZhMjA5KDB4MjU2KSxfMHg0NTRjYzUsXzB4NDQyMGExKCksXzB4NGViOTU0LF8weDE5MWE5MykpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDY0ZmVlZSxfMHg1YjEwOTkpPT57dmFyIF8weDk2MzAxND1fMHgzZDk5OGM7XzB4NTc1YjYwW18weDk2MzAxNCgweDFjNCldW18weDk2MzAxNCgweDI1NildWyduYW1lJ10hPT1fMHg5NjMwMTQoMHgyOTkpJiZfMHg1ODIxOTEoXzB4MTBlZTFlKF8weDk2MzAxNCgweDI1MiksXzB4NjRmZWVlLF8weDQ0MjBhMSgpLF8weDRlYjk1NCxfMHg1YjEwOTkpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTRiYTYzPV8weDNkOTk4YztfMHg1NzViNjBbXzB4MTRiYTYzKDB4MWM0KV1bXzB4MTRiYTYzKDB4MWQ4KV09XzB4NGU1YWI2KF8weDU3NWI2MFtfMHgxNGJhNjMoMHgxYzQpXVtfMHgxNGJhNjMoMHgxZDgpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDRmMmVkZT1fMHgzZDk5OGM7XzB4NTc1YjYwW18weDRmMmVkZSgweDFjNCldWyd0aW1lRW5kJ109XzB4NTFlMGY0KF8weDU3NWI2MFtfMHg0ZjJlZGUoMHgxYzQpXVtfMHg0ZjJlZGUoMHgxZWEpXSk7fSwnYXV0b0xvZyc6KF8weDNkZDcyZixfMHg0N2IwMmIpPT57dmFyIF8weDQ4ZTUxZD1fMHgzZDk5OGM7XzB4NTgyMTkxKF8weDEwZWUxZShfMHg0OGU1MWQoMHgyNTYpLF8weDQ3YjAyYixfMHg0NDIwYTEoKSxfMHg0ZWI5NTQsW18weDNkZDcyZl0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDM0ODgzNixfMHg1MTFkNjYpPT57dmFyIF8weDI2YzM4YT1fMHgzZDk5OGM7XzB4NTgyMTkxKF8weDEwZWUxZShfMHgyNmMzOGEoMHgyNTYpLF8weDM0ODgzNixfMHg0NDIwYTEoKSxfMHg0ZWI5NTQsXzB4NTExZDY2KSk7fSwnYXV0b1RyYWNlJzooXzB4NGU1YjJlLF8weDk5ZmYwMyk9Pnt2YXIgXzB4MjU3YzY2PV8weDNkOTk4YztfMHg1ODIxOTEoXzB4MTBlZTFlKF8weDI1N2M2NigweDI1MiksXzB4OTlmZjAzLF8weDQ0MjBhMSgpLF8weDRlYjk1NCxbXzB4NGU1YjJlXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg0YjUxOWUsXzB4MzU3NDQ0KT0+e3ZhciBfMHgyN2UyNzU9XzB4M2Q5OThjO18weDU4MjE5MShfMHgxMGVlMWUoXzB4MjdlMjc1KDB4MjUyKSxfMHg0YjUxOWUsXzB4NDQyMGExKCksXzB4NGViOTU0LF8weDM1NzQ0NCkpO30sJ2F1dG9UaW1lJzooXzB4MTgwMDFjLF8weDE0YWU5ZSxfMHgxOTI3NTUpPT57XzB4NTI2NTg3KF8weDE5Mjc1NSk7fSwnYXV0b1RpbWVFbmQnOihfMHgyMjkyNDIsXzB4MWI2ZDI2LF8weDRmMDY5NSk9PntfMHg4NDI1ODEoXzB4MWI2ZDI2LF8weDRmMDY5NSk7fSwnY292ZXJhZ2UnOl8weDRkZWM3MT0+e3ZhciBfMHgzMzI1MDc9XzB4M2Q5OThjO18weDU4MjE5MSh7J21ldGhvZCc6XzB4MzMyNTA3KDB4MWRmKSwndmVyc2lvbic6XzB4OTMwNjRiLCdhcmdzJzpbeydpZCc6XzB4NGRlYzcxfV19KTt9fTtsZXQgXzB4NTgyMTkxPUooXzB4NTc1YjYwLF8weDEyNzM5NSxfMHgxYWYzYWEsXzB4M2M3OTdjLF8weDM4ZDdjNyxfMHgxYmVhNjQpLF8weDRlYjk1ND1fMHg1NzViNjBbXzB4M2Q5OThjKDB4MjQ3KV07cmV0dXJuIF8weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXTt9KShnbG9iYWxUaGlzLF8weDQzODI4MigweDI0MCksXzB4NDM4MjgyKDB4MjU4KSxfMHg0MzgyODIoMHgyMzMpLF8weDQzODI4MigweDIyOCksJzEuMC4wJyxfMHg0MzgyODIoMHgxZDcpLF8weDQzODI4MigweDI2OCksXzB4NDM4MjgyKDB4MWNmKSxfMHg0MzgyODIoMHgyOGUpKTtmdW5jdGlvbiBfMHgzZmVmKCl7dmFyIF8weDVkYTc4Mj1bJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCcnLCdob3N0bmFtZScsJzVNd2RYUkUnLCdvbm9wZW4nLCdfc29ja2V0Jywncm9vdF9leHBfaWQnLCdvbm1lc3NhZ2UnLCdFcnJvcicsJ3BhcmVudCcsJ3BvcCcsJ3NldHRlcicsJ2Rpc2FibGVkVHJhY2UnLCdhbGxTdHJMZW5ndGgnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCd2YWx1ZU9mJywndW5kZWZpbmVkJywnY2FwcGVkJywnTWFwJywndGhlbicsJ25leHQuanMnLCdjYXBwZWRFbGVtZW50cycsJ2VsZW1lbnRzJywnY2FwcGVkUHJvcHMnLCdyZXNvbHZlR2V0dGVycycsJ19wXycsJ2hydGltZScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2FzdHJvJywnc3RyTGVuZ3RoJywnX3NvcnRQcm9wcycsJ2NvbnNvbGUnLCdfd3MnLCdfc2VuZEVycm9yTWVzc2FnZScsJ19oYXNNYXBPbkl0c1BhdGgnLCdzb3J0UHJvcHMnLCdfYWxsb3dlZFRvU2VuZCcsJ1NldCcsJ2RlZmluZVByb3BlcnR5JywnbWV0aG9kJywnc3Vic3RyJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJycsJ21lc3NhZ2UnLCdyb290RXhwcmVzc2lvbicsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnNzU5NjZkTVFxV04nLCdsZXZlbCcsJ2dsb2JhbCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnMTY5NjMzOTI1MDk4NScsJ3RpbWUnLCdwcm90b3R5cGUnLCdyZW1peCcsJ19hZGRGdW5jdGlvbnNOb2RlJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRQcm9wZXJ0eScsJ2NvdmVyYWdlJywnUE9TSVRJVkVfSU5GSU5JVFknLCdnZXQnLCdfaW5Ccm93c2VyJywnaG9zdCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnbnVtYmVyJywnSFRNTEFsbENvbGxlY3Rpb24nLCdnZXR0ZXInLCdub2RlJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCd0aW1lRW5kJywnX2lzQXJyYXknLCdXZWJTb2NrZXQnLCdfdHlwZScsJ3RvU3RyaW5nJywnX2lzU2V0Jywnc29ydCcsJ19yZWNvbm5lY3RUaW1lb3V0JywndG9Mb3dlckNhc2UnLCdiaWdpbnQnLCd1bnJlZicsJ19kaXNwb3NlV2Vic29ja2V0Jywnbm9kZU1vZHVsZXMnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdib29sZWFuJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ1N5bWJvbCcsJzEyNjI0NjFTV3Bla1cnLCdfZGF0ZVRvU3RyaW5nJywnaGFzT3duUHJvcGVydHknLCdpbmRleCcsJ3BhdGgnLCduZWdhdGl2ZUluZmluaXR5JywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2VudW1lcmFibGUnLCduYW4nLCd3YXJuJywnbnVsbCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdkYXRlJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ19jb25uZWN0ZWQnLCdfU3ltYm9sJywnX3NldE5vZGVMYWJlbCcsJ0J1ZmZlcicsJ3N0YWNrVHJhY2VMaW1pdCcsJ2NvbnN0cnVjdG9yJywndGltZVN0YW1wJywnNjYwNjUwOGFVdnlYQScsJ3B1c2gnLCdvYmplY3QnLCdkYXRhJywnX3VuZGVmaW5lZCcsJ2luZGV4T2YnLCdfY29ubmVjdGluZycsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdjcmVhdGUnLCdpc0FycmF5JywnU3RyaW5nJywnMzg0R1lCeUxFJywnbm9GdW5jdGlvbnMnLCdzbGljZScsJ1tvYmplY3RcXFxceDIwU2V0XScsJ3JlZHVjZUxpbWl0cycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2RlcHRoJywnX29iamVjdFRvU3RyaW5nJywnaW5jbHVkZXMnLCdfaXNQcmltaXRpdmVUeXBlJywncG9ydCcsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ3dlYnBhY2snLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2NsZWFuTm9kZScsJ19yZWdFeHBUb1N0cmluZycsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ3NldCcsJ2pvaW4nLCdlcnJvcicsJ2hpdHMnLCdvbmNsb3NlJywnc3BsaXQnLFxcXCIvaG9tZS9hbnRob255Ly52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMjI4L25vZGVfbW9kdWxlc1xcXCIsJzQ1ODQ0MTE2TlVrckp5JywncHJvcHMnLCdfY29ubmVjdFRvSG9zdE5vdycsJ1JlZ0V4cCcsJ3JlcGxhY2UnLCdzZXJpYWxpemUnLCdOdW1iZXInLCdzdGFjaycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX2hhc1NldE9uSXRzUGF0aCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdsZW5ndGgnLCcxMjcuMC4wLjEnLCdzdHJpbmcnLCdfcXVvdGVkUmVnRXhwJywnY2F0Y2gnLCdhcnJheScsJ2NvdW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywndHlwZScsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywncG9zaXRpdmVJbmZpbml0eScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCc3MEZFcWJzcScsJzExRXZxYmdZJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX2tleVN0clJlZ0V4cCcsJ3RyYWNlJywnZnVuY3Rpb24nLCdkZWZhdWx0JywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdsb2cnLCdyZWxvYWQnLCczOTQxNScsJ3ZlcnNpb25zJywnbmFtZScsJ21hcCcsJ3dzOi8vJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCd0b3RhbFN0ckxlbmd0aCcsJ3Vua25vd24nLCdfY29uc29sZV9uaW5qYScsJzE1NTk0bVVlS1dIJywnX1dlYlNvY2tldCcsJzExMTk2MjY0WmVjSnBZJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfbnVtYmVyUmVnRXhwJywnY29uY2F0JywnX3NldE5vZGVQZXJtaXNzaW9ucycsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJmZWRvcmFcXFwiLFxcXCIxOTIuMTY4LjAuMTExXFxcIl0sJzk1OVFNeW1aWCcsJ19pc05lZ2F0aXZlWmVybycsJ3Rlc3QnLCdfcHJvcGVydHknLCdwcm9jZXNzJywnMjMyNDM5NGZRSUF3UicsJ21hdGNoJywndmFsdWUnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdzZW5kJywnOmxvZ1BvaW50SWQ6JywnX1dlYlNvY2tldENsYXNzJywnbm93JywnZ2V0UHJvdG90eXBlT2YnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19fZXMnKydNb2R1bGUnLCdhdXRvRXhwYW5kJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ3N0cmluZ2lmeScsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2ZvckVhY2gnLCdfYWRkTG9hZE5vZGUnLCdfc2V0Tm9kZUlkJywnZnVuY05hbWUnLCdjYWxsJywndXJsJywncGFyc2UnLCcuLi4nLCdjdXJyZW50JywnYXV0b0V4cGFuZExpbWl0JywnbG9jYXRpb24nLCdiaW5kJywncGVyZm9ybWFuY2UnLCdyZWFkeVN0YXRlJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCddO18weDNmZWY9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWRhNzgyO307cmV0dXJuIF8weDNmZWYoKTt9XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIiwiaW1wb3J0IHsgY3JlYXRlU2V0RWxlbWVudCwgY3JlYXRlRnVsbEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IFwiLi4vc2Fzcy9yZXNlcnZhdGlvbi5zY3NzXCJcblxuZnVuY3Rpb24gY3JlYXRlUmVzZXJ2YXRpb24oKSB7XG4gICAgY29uc3QgYm9keSA9IGNyZWF0ZVNldEVsZW1lbnQoJ3NlY3Rpb24nLCB7XG4gICAgICAgIGNsYXNzOlwid3JhcHBlci1zZWN0aW9uXCJcbiAgICB9KVxuICAgIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwicmVzXCIsXG4gICAgfSlcbiAgICBib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZVNldEVsZW1lbnQoJ2ZpZWxkc2V0Jywge1xuICAgICAgICBjbGFzczogJ3Jlc2VydmF0aW9uJ1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVTZXRFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICAgICAgY2xhc3M6IFwibGVnZW5kXCJcbiAgICB9KVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiTWFrZSBhIFJlc2VydmF0aW9uXCJcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGNvbnN0IGZvcm1Cb2R5PWNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczpcImZvcm0tYm9keVwiXG4gICAgfSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Cb2R5KVxuXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZVNldEVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNsYXNzOiBcIm5hbWVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIk5hbWVcIlxuICAgIH0pXG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQobmFtZSlcblxuICAgIGNvbnN0IGVtYWlsID0gY3JlYXRlU2V0RWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgIGNsYXNzOiBcImVtYWlsXCIsXG4gICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCJcbiAgICB9KVxuICAgIGZvcm1Cb2R5LmFwcGVuZENoaWxkKGVtYWlsKVxuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBjcmVhdGVTZXRFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgY2xhc3M6IFwibnVtYmVyXCIsXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlBob25lIE51bWJlclwiXG4gICAgfSlcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcilcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVTZXRFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgY2xhc3M6IFwiYWRkcmVzc1wiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWRkcmVzc1wiXG4gICAgfSlcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBjcmVhdGVTZXRFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICAgIGNsYXNzOiAnc2VsZWN0b3InXG4gICAgfSlcblxuICAgIGNvbnN0IG9wdGlvbjAgPSBjcmVhdGVTZXRFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgIGNsYXNzOiBcImxhYmVsXCIsXG4gICAgICAgIHZhbHVlOiBcIlwiXG4gICAgfSlcbiAgICBjb25zdCBvcHRpb24xID0gY3JlYXRlU2V0RWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICBjbGFzczogXCJvcHRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBcInZpcFwiXG4gICAgfSlcbiAgICBjb25zdCBvcHRpb24yID0gY3JlYXRlU2V0RWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICBjbGFzczogXCJvcHRpb25zXCIsXG4gICAgICAgIHZhbHVlOiBcInJlZ3VsYXJcIlxuICAgIH0pXG4gICAgb3B0aW9uMC5pbm5lclRleHQgPSBcIi0tVHlwZSBvZiBSZXNlcnZhdGlvbi0tXCJcbiAgICBvcHRpb24xLmlubmVyVGV4dCA9ICdWSVAnXG4gICAgb3B0aW9uMi5pbm5lclRleHQgPSAncmVndWxhcidcbiAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24wKVxuICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbjEpXG4gICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uMilcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZChzZWxlY3RvcilcblxuXG4gICAgY29uc3Qgbm9TZWF0cyA9IGNyZWF0ZVNldEVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICBjbGFzczogXCJzZWF0c1wiLFxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJOdW1iZXIgb2Ygc2VhdHNcIlxuICAgIH0pXG4gICAgZm9ybUJvZHkuYXBwZW5kQ2hpbGQobm9TZWF0cylcblxuICAgIGNvbnN0IHRleHRBcmVhID0gY3JlYXRlU2V0RWxlbWVudCgndGV4dGFyZWEnLCB7XG4gICAgICAgIGNsYXNzOiBcInJlcXVlc3RcIixcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQW55IFNwZWNpYWwgcmVxdWVzdFwiXG4gICAgfSlcbiAgICBmb3JtQm9keS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSlcbiAgICBjb25zdCBidG49Y3JlYXRlRnVsbEVsZW1lbnQoJ2J1dHRvbicse1xuICAgICAgICBjbGFzczpcImJ1dHRvblwiXG4gICAgfSwgJ1N1bWJpdCcpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bilcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICByZXR1cm4gYm9keVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZXNlcnZhdGlvbiIsImltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9zY3JvbGxiYXIvYmFsbHMuZ2lmXCI7XG5pbXBvcnQgaW1nNCBmcm9tIFwiLi4vaW1nL3Njcm9sbGJhci9ub29kbGUuZ2lmXCI7XG5pbXBvcnQgaW1nNiBmcm9tIFwiLi4vaW1nL3Njcm9sbGJhci9zdXNoaS5naWZcIjtcbmltcG9ydCBpbWc3IGZyb20gJy4uL2ltZy9zY3JvbGxiYXIvcGFuY2FrZS5naWYnXG5pbXBvcnQgXCIuLi9zYXNzL3Njcm9sbC5zY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFtcbiAgaW1nMyxcbiAgaW1nNCxcbiAgaW1nNyxcbiAgaW1nNixcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlU2xpZGVyKCkge1xuICAvKlxuICAgICAgICBDcmVhdGVzIHRoZSBpbWFnZSBzbGlkZVxuICAgICAgICAqL1xuXG4gIGxldCBhY3RpdmVMaW5rID0gMDtcbiAgbGV0IGxpbmtzID0gW107XG5cbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlU2V0RWxlbWVudChcInNlY3Rpb25cIiwge1xuICAgIGNsYXNzOiBcInNlY3Rpb25zIGltYWdlLXNsaWRlclwiLFxuICB9KTtcbiAgY29uc3Qgdmlld1dpbmRvdyA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5kb3dcIiB9KTtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVNldEVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJ3cmFwcGVyXCIgfSk7XG5cbiAgY29uc3QgbmF2TGlua3MgPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibmF2TGlua3NcIiB9KTtcbiAgY29uc3QgdWwgPSBjcmVhdGVTZXRFbGVtZW50KFwidWxcIiwgeyBjbGFzczogXCJ1bFwiIH0pO1xuXG4gIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpbWcgPSBjcmVhdGVTZXRFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgIHNyYzogaW1hZ2UsXG4gICAgICBhbHQ6IGBpbWFnZS0ke2luZGV4ICsgMX1gLFxuICAgICAgaWQ6IGBpdGVtJHtpbmRleCArIDF9YCxcbiAgICAgIGNsYXNzOiBcImNvbnRlbnRcIixcbiAgICB9KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCBsaSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICBjbGFzczogXCJsaW5rc1wiLFxuICAgICAgXCJkYXRhLW51bWJlclwiOiBpbmRleCArIDEsXG4gICAgfSk7XG4gICAgbGkuaXRlbUlEID0gaW5kZXg7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjaGFuZ2VQb3NpdGlvbihlLnRhcmdldCk7XG4gICAgfSk7XG4gICAgbGlua3MucHVzaChsaSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgY29uc3QgYnRuMSA9IGNyZWF0ZVNldEVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIGNsYXNzOiBcImJ0biBsZWZ0XCIsXG4gICAgXCJkYXRhLXNpZGVcIjogXCJsZWZ0XCIsXG4gIH0pO1xuICBjb25zdCBidG4yID0gY3JlYXRlU2V0RWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IFwiYnRuIHJpZ2h0XCIsXG4gICAgXCJkYXRhLXNpZGVcIjogXCJyaWdodFwiLFxuICB9KTtcblxuICBjb25zdCBidG5zID0gW2J0bjEsIGJ0bjJdO1xuXG4gIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQuc2lkZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgY29uc3QgaWQgPSBhY3RpdmVMaW5rIDw9IDAgPyBsaW5rcy5sZW5ndGggLSAxIDogYWN0aXZlTGluayAtIDE7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpZF07XG4gICAgICAgIGNoYW5nZVBvc2l0aW9uKGxpbmspO1xuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnNpZGUgPT09IFwicmlnaHRcIikge1xuICAgICAgICBjb25zdCBpZCA9IGFjdGl2ZUxpbmsgPj0gbGlua3MubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVMaW5rICsgMTtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtzW2lkXTtcbiAgICAgICAgY2hhbmdlUG9zaXRpb24obGluayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoYW5nZVBvc2l0aW9uKGxpbmspIHtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rSXRlbSkgPT4ge1xuICAgICAgbGlua0l0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGFjdGl2ZUxpbmsgPSBsaW5rLml0ZW1JRDtcblxuICAgIGNvbnN0IG5vID0gcGFyc2VJbnQobGluay5kYXRhc2V0Lm51bWJlcikgLSAxO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbm8gKiAtMTAwO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBgdHJhbnNsYXRlM2QoJHtwb3NpdGlvbn12dywgMHB4LCAwcHgpYDtcbiAgICB3cmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZVZhbHVlO1xuXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0VGltZSgpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gYWN0aXZlTGluayA+PSBsaW5rcy5sZW5ndGggLSAxID8gMCA6IGFjdGl2ZUxpbmsgKyAxO1xuICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tjdXJyZW50XTtcbiAgICBjaGFuZ2VQb3NpdGlvbihsaW5rKTtcbiAgfVxuXG4gIGJ0bjEuaW5uZXJIVE1MID0gXCImIzEwMDk0O1wiO1xuICBidG4yLmlubmVySFRNTCA9IFwiJiMxMDA5MztcIjtcblxuICB2aWV3V2luZG93LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB2aWV3V2luZG93LmFwcGVuZENoaWxkKGJ0bjEpO1xuICB2aWV3V2luZG93LmFwcGVuZENoaWxkKGJ0bjIpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3V2luZG93KTtcblxuICBuYXZMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cbiAgc2V0SW50ZXJ2YWwoc2V0VGltZSwgNDAwMCk7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUltYWdlU2xpZGVyO1xuIiwiZnVuY3Rpb24gZ2V0RWxlbWVudChzZWxlY3Rvcil7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG59XG5cbiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUpe1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcyl7XG4gICAgLy8gT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgpXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpe1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNldEVsZW1lbnQodHlwZSwgYXR0cmlidXRlcz17fSl7XG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgICBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpXG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbEVsZW1lbnQodHlwZSwgYXR0cmlidXRlcz17fSwgY29udGVudD0nJyl7XG4gICAgY29uc3QgZWxlbWVudD1jcmVhdGVTZXRFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMpXG4gICAgZWxlbWVudC5pbm5lckhUTUw9Y29udGVudFxuICAgIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0RWxlbWVudCxcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIHNldEF0dHJpYnV0ZXMsXG4gICAgY3JlYXRlU2V0RWxlbWVudCxcbiAgICBjcmVhdGVGdWxsRWxlbWVudFxufSIsImltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXRFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxcIjtcblxuXG5mdW5jdGlvbiBDb250YWN0Vmlldygpe1xuICAgIGNvbnN0IGJvZHk9Y3JlYXRlU2V0RWxlbWVudCgnc2VjdGlvbicse1xuICAgICAgICBjbGFzczogXCJ3cmFwcGVyLXNlY3Rpb25cIlxuICAgIH0pXG4gICAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG4gICAgcmV0dXJuIGJvZHlcbn1cblxuZXhwb3J0IGRlZmF1bHQgIENvbnRhY3RWaWV3IiwiaW1wb3J0IGNyZWF0ZUltYWdlU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3Njcm9sbFwiO1xuaW1wb3J0IGNyZWF0ZU1haW5Cb2R5IGZyb20gXCIuLi9jb21wb25lbnRzL2JvZHlcIjtcbmltcG9ydCB7IGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG5mdW5jdGlvbiBIb21lVmlldygpIHtcbiAgICBjb25zdCBpbWFnZVNsaWRlciA9IGNyZWF0ZUltYWdlU2xpZGVyKClcblxuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVTZXRFbGVtZW50KFwic2VjdGlvblwiLCB7IGNsYXNzOiBcIndyYXBwZXItc2VjdGlvblwiIH0pXG4gICAgY29uc3QgbWFpbkJvZHk9Y3JlYXRlTWFpbkJvZHkoKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW1hZ2VTbGlkZXIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm9keSlcbiAgICBcbiAgICByZXR1cm4gbWFpblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lVmlldyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGdldEVsZW1lbnQsIGNyZWF0ZVNldEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgbGlzdEl0ZW1zIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2SXRlbXNcIjtcbmltcG9ydCBuYXZCYXIgZnJvbSBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcblxuLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMzk5ODQyOTAxOF8wYCxcImhlbGxvLCBXb3JsZCFcIikpO1xuXG5jb25zdCBuYXZiYXIgPSBuYXZCYXIoKTtcbmNvbnN0IGJvZHkgPSBnZXRFbGVtZW50KFwiYm9keVwiKTtcbmNvbnN0IG1haW4gPSBjcmVhdGVTZXRFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9keSBtYWluXCIgfSk7XG5cbmxpc3RJdGVtcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpPT57XG4gICAgdmFsdWUuZWwuY2xhc3NMaXN0LmFkZCgnbm90LXZpc2libGUnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodmFsdWUuZWwpXG59KVxuXG5cbmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbm5hdmJhci5maXJzdEVsZW1lbnRDaGlsZC5jbGljaygpXG4vKiBlc2xpbnQtZGlzYWJsZSAqLztmdW5jdGlvbiBvb19jbSgpe3RyeXtyZXR1cm4gKDAsZXZhbCkoXCJnbG9iYWxUaGlzLl9jb25zb2xlX25pbmphXCIpIHx8ICgwLGV2YWwpKFwiLyogaHR0cHM6Ly9naXRodWIuY29tL3dhbGxhYnlqcy9jb25zb2xlLW5pbmphI2hvdy1kb2VzLWl0LXdvcmsgKi8ndXNlIHN0cmljdCc7ZnVuY3Rpb24gXzB4NGQyNChfMHgxZWVlZjEsXzB4ZjE1OTQ3KXt2YXIgXzB4M2ZlZmRkPV8weDNmZWYoKTtyZXR1cm4gXzB4NGQyND1mdW5jdGlvbihfMHg0ZDI0YzksXzB4NTQ2ZDVlKXtfMHg0ZDI0Yzk9XzB4NGQyNGM5LTB4MWI0O3ZhciBfMHgyYWNhMmQ9XzB4M2ZlZmRkW18weDRkMjRjOV07cmV0dXJuIF8weDJhY2EyZDt9LF8weDRkMjQoXzB4MWVlZWYxLF8weGYxNTk0Nyk7fXZhciBfMHg0MzgyODI9XzB4NGQyNDsoZnVuY3Rpb24oXzB4MmI1YjI3LF8weDU2ODRlZCl7dmFyIF8weDE5YTJjZj1fMHg0ZDI0LF8weDQyM2MwOD1fMHgyYjViMjcoKTt3aGlsZSghIVtdKXt0cnl7dmFyIF8weDhlMTM9cGFyc2VJbnQoXzB4MTlhMmNmKDB4MWZjKSkvMHgxK3BhcnNlSW50KF8weDE5YTJjZigweDI2MSkpLzB4MiooLXBhcnNlSW50KF8weDE5YTJjZigweDIxYykpLzB4MykrcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjExKSkvMHg0KigtcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjkwKSkvMHg1KSstcGFyc2VJbnQoXzB4MTlhMmNmKDB4MWQzKSkvMHg2KigtcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjY5KSkvMHg3KSstcGFyc2VJbnQoXzB4MTlhMmNmKDB4MjYzKSkvMHg4Ky1wYXJzZUludChfMHgxOWEyY2YoMHgyNmUpKS8weDkqKHBhcnNlSW50KF8weDE5YTJjZigweDI0ZSkpLzB4YSkrLXBhcnNlSW50KF8weDE5YTJjZigweDI0ZikpLzB4YiooLXBhcnNlSW50KF8weDE5YTJjZigweDIzNCkpLzB4Yyk7aWYoXzB4OGUxMz09PV8weDU2ODRlZClicmVhaztlbHNlIF8weDQyM2MwOFsncHVzaCddKF8weDQyM2MwOFsnc2hpZnQnXSgpKTt9Y2F0Y2goXzB4NGIwODNiKXtfMHg0MjNjMDhbJ3B1c2gnXShfMHg0MjNjMDhbJ3NoaWZ0J10oKSk7fX19KF8weDNmZWYsMHhlYTc0MykpO3ZhciBqPU9iamVjdFtfMHg0MzgyODIoMHgyMTkpXSxYPU9iamVjdFtfMHg0MzgyODIoMHgxY2IpXSxHPU9iamVjdFsnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ10sZWU9T2JqZWN0W18weDQzODI4MigweDFjZSldLHRlPU9iamVjdFtfMHg0MzgyODIoMHgyNzYpXSxuZT1PYmplY3RbJ3Byb3RvdHlwZSddW18weDQzODI4MigweDFmZSldLHJlPShfMHgyM2U4MjcsXzB4NTJlYzAwLF8weGIxNjVkMixfMHgxNmIwMDIpPT57dmFyIF8weGUwODk4ZT1fMHg0MzgyODI7aWYoXzB4NTJlYzAwJiZ0eXBlb2YgXzB4NTJlYzAwPT1fMHhlMDg5OGUoMHgyMTMpfHx0eXBlb2YgXzB4NTJlYzAwPT1fMHhlMDg5OGUoMHgyNTMpKXtmb3IobGV0IF8weDIyYmVjMiBvZiBlZShfMHg1MmVjMDApKSFuZVsnY2FsbCddKF8weDIzZTgyNyxfMHgyMmJlYzIpJiZfMHgyMmJlYzIhPT1fMHhiMTY1ZDImJlgoXzB4MjNlODI3LF8weDIyYmVjMix7J2dldCc6KCk9Pl8weDUyZWMwMFtfMHgyMmJlYzJdLCdlbnVtZXJhYmxlJzohKF8weDE2YjAwMj1HKF8weDUyZWMwMCxfMHgyMmJlYzIpKXx8XzB4MTZiMDAyW18weGUwODk4ZSgweDIwMyldfSk7fXJldHVybiBfMHgyM2U4Mjc7fSxLPShfMHgyNzk3ZWUsXzB4NTdhZTEyLF8weDMyMmI3NCk9PihfMHgzMjJiNzQ9XzB4Mjc5N2VlIT1udWxsP2oodGUoXzB4Mjc5N2VlKSk6e30scmUoXzB4NTdhZTEyfHwhXzB4Mjc5N2VlfHwhXzB4Mjc5N2VlW18weDQzODI4MigweDI3OCldP1goXzB4MzIyYjc0LCdkZWZhdWx0Jyx7J3ZhbHVlJzpfMHgyNzk3ZWUsJ2VudW1lcmFibGUnOiEweDB9KTpfMHgzMjJiNzQsXzB4Mjc5N2VlKSkscT1jbGFzc3tjb25zdHJ1Y3RvcihfMHgzMTA5YTcsXzB4MzRiNzFhLF8weDUwYTY3NCxfMHg1MmM5ZTYsXzB4NTRlMmM5KXt2YXIgXzB4MzdkMGVkPV8weDQzODI4Mjt0aGlzWydnbG9iYWwnXT1fMHgzMTA5YTcsdGhpc1tfMHgzN2QwZWQoMHgxZTMpXT1fMHgzNGI3MWEsdGhpc1tfMHgzN2QwZWQoMHgyMjYpXT1fMHg1MGE2NzQsdGhpc1snbm9kZU1vZHVsZXMnXT1fMHg1MmM5ZTYsdGhpc1snZG9ja2VyaXplZEFwcCddPV8weDU0ZTJjOSx0aGlzW18weDM3ZDBlZCgweDFjOSldPSEweDAsdGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXT0hMHgwLHRoaXNbXzB4MzdkMGVkKDB4MjBhKV09ITB4MSx0aGlzW18weDM3ZDBlZCgweDIxNyldPSEweDEsdGhpc1tfMHgzN2QwZWQoMHgxZTIpXT0hdGhpc1tfMHgzN2QwZWQoMHgxZDUpXVtfMHgzN2QwZWQoMHgyNmQpXT8uWyd2ZXJzaW9ucyddPy5bXzB4MzdkMGVkKDB4MWU4KV0sdGhpc1tfMHgzN2QwZWQoMHgyNzQpXT1udWxsLHRoaXNbXzB4MzdkMGVkKDB4MWRkKV09MHgwLHRoaXNbJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50J109MHgxNCx0aGlzW18weDM3ZDBlZCgweDFlNCldPSdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0Jyx0aGlzW18weDM3ZDBlZCgweDFjNildPSh0aGlzWydfaW5Ccm93c2VyJ10/J0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVmcmVzaGluZ1xcXFx4MjB0aGVcXFxceDIwcGFnZVxcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJzpfMHgzN2QwZWQoMHgxZDYpKSt0aGlzW18weDM3ZDBlZCgweDFlNCldO31hc3luY1snZ2V0V2ViU29ja2V0Q2xhc3MnXSgpe3ZhciBfMHgxYjM5ZTc9XzB4NDM4MjgyO2lmKHRoaXNbXzB4MWIzOWU3KDB4Mjc0KV0pcmV0dXJuIHRoaXNbJ19XZWJTb2NrZXRDbGFzcyddO2xldCBfMHgyNTNhZWU7aWYodGhpc1snX2luQnJvd3NlciddKV8weDI1M2FlZT10aGlzWydnbG9iYWwnXVtfMHgxYjM5ZTcoMHgxZWMpXTtlbHNle2lmKHRoaXNbXzB4MWIzOWU3KDB4MWQ1KV1bJ3Byb2Nlc3MnXT8uW18weDFiMzllNygweDI2MildKV8weDI1M2FlZT10aGlzW18weDFiMzllNygweDFkNSldW18weDFiMzllNygweDI2ZCldPy5bXzB4MWIzOWU3KDB4MjYyKV07ZWxzZSB0cnl7bGV0IF8weDIwYzQ5ND1hd2FpdCBpbXBvcnQoXzB4MWIzOWU3KDB4MjAwKSk7XzB4MjUzYWVlPShhd2FpdCBpbXBvcnQoKGF3YWl0IGltcG9ydChfMHgxYjM5ZTcoMHgyODIpKSlbJ3BhdGhUb0ZpbGVVUkwnXShfMHgyMGM0OTRbXzB4MWIzOWU3KDB4MjJlKV0odGhpc1tfMHgxYjM5ZTcoMHgxZjYpXSwnd3MvaW5kZXguanMnKSlbXzB4MWIzOWU3KDB4MWVlKV0oKSkpW18weDFiMzllNygweDI1NCldO31jYXRjaHt0cnl7XzB4MjUzYWVlPXJlcXVpcmUocmVxdWlyZShfMHgxYjM5ZTcoMHgyMDApKVsnam9pbiddKHRoaXNbXzB4MWIzOWU3KDB4MWY2KV0sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoXzB4MWIzOWU3KDB4MWMwKSk7fX19cmV0dXJuIHRoaXNbXzB4MWIzOWU3KDB4Mjc0KV09XzB4MjUzYWVlLF8weDI1M2FlZTt9W18weDQzODI4MigweDIzNildKCl7dmFyIF8weDFhM2NkNT1fMHg0MzgyODI7dGhpc1tfMHgxYTNjZDUoMHgyMTcpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDFhM2NkNSgweDFkZCldPj10aGlzWydfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCddfHwodGhpc1tfMHgxYTNjZDUoMHgyNWQpXT0hMHgxLHRoaXNbXzB4MWEzY2Q1KDB4MjE3KV09ITB4MCx0aGlzW18weDFhM2NkNSgweDFkZCldKyssdGhpc1tfMHgxYTNjZDUoMHgxYzUpXT1uZXcgUHJvbWlzZSgoXzB4MzMwMzQ0LF8weDMyNWI4Myk9Pnt2YXIgXzB4MTZlYzMzPV8weDFhM2NkNTt0aGlzW18weDE2ZWMzMygweDI1NSldKClbXzB4MTZlYzMzKDB4MWI4KV0oXzB4NDE3MjhjPT57dmFyIF8weDQ2MDM2Mj1fMHgxNmVjMzM7bGV0IF8weDVkZmY5Zj1uZXcgXzB4NDE3MjhjKF8weDQ2MDM2MigweDI1YykrKCF0aGlzW18weDQ2MDM2MigweDFlMildJiZ0aGlzWydkb2NrZXJpemVkQXBwJ10/XzB4NDYwMzYyKDB4MjRhKTp0aGlzW18weDQ2MDM2MigweDFlMyldKSsnOicrdGhpc1sncG9ydCddKTtfMHg1ZGZmOWZbJ29uZXJyb3InXT0oKT0+e3ZhciBfMHgyZTIxNWI9XzB4NDYwMzYyO3RoaXNbXzB4MmUyMTViKDB4MWM5KV09ITB4MSx0aGlzWydfZGlzcG9zZVdlYnNvY2tldCddKF8weDVkZmY5ZiksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpLF8weDMyNWI4MyhuZXcgRXJyb3IoXzB4MmUyMTViKDB4MjhkKSkpO30sXzB4NWRmZjlmW18weDQ2MDM2MigweDI5MSldPSgpPT57dmFyIF8weDFmYzE1Zj1fMHg0NjAzNjI7dGhpc1snX2luQnJvd3NlciddfHxfMHg1ZGZmOWZbXzB4MWZjMTVmKDB4MjkyKV0mJl8weDVkZmY5ZlsnX3NvY2tldCddW18weDFmYzE1ZigweDFmNCldJiZfMHg1ZGZmOWZbXzB4MWZjMTVmKDB4MjkyKV1bXzB4MWZjMTVmKDB4MWY0KV0oKSxfMHgzMzAzNDQoXzB4NWRmZjlmKTt9LF8weDVkZmY5ZltfMHg0NjAzNjIoMHgyMzEpXT0oKT0+e3ZhciBfMHgyMzk5OGM9XzB4NDYwMzYyO3RoaXNbXzB4MjM5OThjKDB4MjVkKV09ITB4MCx0aGlzW18weDIzOTk4YygweDFmNSldKF8weDVkZmY5ZiksdGhpc1tfMHgyMzk5OGMoMHgxZmEpXSgpO30sXzB4NWRmZjlmW18weDQ2MDM2MigweDI5NCldPV8weDc3MmU0OD0+e3ZhciBfMHgxODNjZTU9XzB4NDYwMzYyO3RyeXtfMHg3NzJlNDgmJl8weDc3MmU0OFtfMHgxODNjZTUoMHgyMTQpXSYmdGhpc1tfMHgxODNjZTUoMHgxZTIpXSYmSlNPTltfMHgxODNjZTUoMHgyODMpXShfMHg3NzJlNDhbXzB4MTgzY2U1KDB4MjE0KV0pW18weDE4M2NlNSgweDFjYyldPT09XzB4MTgzY2U1KDB4MjU3KSYmdGhpc1tfMHgxODNjZTUoMHgxZDUpXVtfMHgxODNjZTUoMHgyODcpXVsncmVsb2FkJ10oKTt9Y2F0Y2h7fX07fSlbXzB4MTZlYzMzKDB4MWI4KV0oXzB4M2RjYzBhPT4odGhpc1tfMHgxNmVjMzMoMHgyMGEpXT0hMHgwLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MSx0aGlzW18weDE2ZWMzMygweDI1ZCldPSEweDEsdGhpc1tfMHgxNmVjMzMoMHgxYzkpXT0hMHgwLHRoaXNbXzB4MTZlYzMzKDB4MWRkKV09MHgwLF8weDNkY2MwYSkpW18weDE2ZWMzMygweDI0MyldKF8weDRhZjEwYz0+KHRoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4MTZlYzMzKDB4MjE3KV09ITB4MSxjb25zb2xlW18weDE2ZWMzMygweDIwNSldKF8weDE2ZWMzMygweDI0NikrdGhpc1tfMHgxNmVjMzMoMHgxZTQpXSksXzB4MzI1YjgzKG5ldyBFcnJvcihfMHgxNmVjMzMoMHgyOGMpKyhfMHg0YWYxMGMmJl8weDRhZjEwY1tfMHgxNmVjMzMoMHgxZDApXSkpKSkpO30pKTt9W18weDQzODI4MigweDFmNSldKF8weDJhYjEwOCl7dmFyIF8weDU1OTIwZT1fMHg0MzgyODI7dGhpc1tfMHg1NTkyMGUoMHgyMGEpXT0hMHgxLHRoaXNbXzB4NTU5MjBlKDB4MjE3KV09ITB4MTt0cnl7XzB4MmFiMTA4W18weDU1OTIwZSgweDIzMSldPW51bGwsXzB4MmFiMTA4WydvbmVycm9yJ109bnVsbCxfMHgyYWIxMDhbJ29ub3BlbiddPW51bGw7fWNhdGNoe310cnl7XzB4MmFiMTA4W18weDU1OTIwZSgweDI4YSldPDB4MiYmXzB4MmFiMTA4WydjbG9zZSddKCk7fWNhdGNoe319WydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCl7dmFyIF8weDJlYzQ2OD1fMHg0MzgyODI7Y2xlYXJUaW1lb3V0KHRoaXNbXzB4MmVjNDY4KDB4MWYxKV0pLCEodGhpc1tfMHgyZWM0NjgoMHgxZGQpXT49dGhpc1tfMHgyZWM0NjgoMHgxZDIpXSkmJih0aGlzWydfcmVjb25uZWN0VGltZW91dCddPXNldFRpbWVvdXQoKCk9Pnt2YXIgXzB4MTIzMjA5PV8weDJlYzQ2ODt0aGlzWydfY29ubmVjdGVkJ118fHRoaXNbJ19jb25uZWN0aW5nJ118fCh0aGlzWydfY29ubmVjdFRvSG9zdE5vdyddKCksdGhpc1tfMHgxMjMyMDkoMHgxYzUpXT8uW18weDEyMzIwOSgweDI0MyldKCgpPT50aGlzW18weDEyMzIwOSgweDFmYSldKCkpKTt9LDB4MWY0KSx0aGlzW18weDJlYzQ2OCgweDFmMSldW18weDJlYzQ2OCgweDFmNCldJiZ0aGlzWydfcmVjb25uZWN0VGltZW91dCddW18weDJlYzQ2OCgweDFmNCldKCkpO31hc3luY1tfMHg0MzgyODIoMHgyNzIpXShfMHgyNWEzZjgpe3ZhciBfMHg0MDAyZjY9XzB4NDM4MjgyO3RyeXtpZighdGhpc1tfMHg0MDAyZjYoMHgxYzkpXSlyZXR1cm47dGhpc1snX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnXSYmdGhpc1tfMHg0MDAyZjYoMHgyMzYpXSgpLChhd2FpdCB0aGlzWydfd3MnXSlbXzB4NDAwMmY2KDB4MjcyKV0oSlNPTltfMHg0MDAyZjYoMHgyN2IpXShfMHgyNWEzZjgpKTt9Y2F0Y2goXzB4MjQ2YmQ5KXtjb25zb2xlW18weDQwMDJmNigweDIwNSldKHRoaXNbXzB4NDAwMmY2KDB4MWM2KV0rJzpcXFxceDIwJysoXzB4MjQ2YmQ5JiZfMHgyNDZiZDlbXzB4NDAwMmY2KDB4MWQwKV0pKSx0aGlzWydfYWxsb3dlZFRvU2VuZCddPSEweDEsdGhpc1tfMHg0MDAyZjYoMHgxZmEpXSgpO319fTtmdW5jdGlvbiBKKF8weDIyODE5NCxfMHgxMmIxODIsXzB4NWNlNWZiLF8weDJhNzVmZixfMHgxYTdiYjIsXzB4NTVjZThhKXt2YXIgXzB4MWQyYTY4PV8weDQzODI4MjtsZXQgXzB4NTU3M2RiPV8weDVjZTVmYltfMHgxZDJhNjgoMHgyMzIpXSgnLCcpW18weDFkMmE2OCgweDI1YildKF8weDI3NmYxMj0+e3ZhciBfMHgyNWIzNmI9XzB4MWQyYTY4O3RyeXtfMHgyMjgxOTRbXzB4MjViMzZiKDB4MjQ3KV18fCgoXzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWI5KXx8XzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWRhKXx8XzB4MWE3YmIyPT09XzB4MjViMzZiKDB4MWMxKSkmJihfMHgxYTdiYjIrPV8weDIyODE5NFsncHJvY2VzcyddPy5bXzB4MjViMzZiKDB4MjU5KV0/LltfMHgyNWIzNmIoMHgxZTgpXT8nXFxcXHgyMHNlcnZlcic6J1xcXFx4MjBicm93c2VyJyksXzB4MjI4MTk0WydfY29uc29sZV9uaW5qYV9zZXNzaW9uJ109eydpZCc6K25ldyBEYXRlKCksJ3Rvb2wnOl8weDFhN2JiMn0pO2xldCBfMHgxMTIyZGM9bmV3IHEoXzB4MjI4MTk0LF8weDEyYjE4MixfMHgyNzZmMTIsXzB4MmE3NWZmLF8weDU1Y2U4YSk7cmV0dXJuIF8weDExMjJkY1snc2VuZCddW18weDI1YjM2YigweDI4OCldKF8weDExMjJkYyk7fWNhdGNoKF8weDIzMzU5NSl7cmV0dXJuIGNvbnNvbGVbXzB4MjViMzZiKDB4MjA1KV0oJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0JyxfMHgyMzM1OTUmJl8weDIzMzU5NVtfMHgyNWIzNmIoMHgxZDApXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NWNhMDk3PT5fMHg1NTczZGJbJ2ZvckVhY2gnXShfMHgzMmQxYmM9Pl8weDMyZDFiYyhfMHg1Y2EwOTcpKTt9ZnVuY3Rpb24gVyhfMHg0MDBjNjUpe3ZhciBfMHg3Y2VlMWE9XzB4NDM4MjgyO2xldCBfMHgzODE1MTA9ZnVuY3Rpb24oXzB4NDlmNWY1LF8weDQ5MTljYil7cmV0dXJuIF8weDQ5MTljYi1fMHg0OWY1ZjU7fSxfMHgzMGZmNTE7aWYoXzB4NDAwYzY1WydwZXJmb3JtYW5jZSddKV8weDMwZmY1MT1mdW5jdGlvbigpe3ZhciBfMHg1YjY0NjM9XzB4NGQyNDtyZXR1cm4gXzB4NDAwYzY1W18weDViNjQ2MygweDI4OSldW18weDViNjQ2MygweDI3NSldKCk7fTtlbHNle2lmKF8weDQwMGM2NVtfMHg3Y2VlMWEoMHgyNmQpXSYmXzB4NDAwYzY1Wydwcm9jZXNzJ11bXzB4N2NlZTFhKDB4MWJmKV0pXzB4MzBmZjUxPWZ1bmN0aW9uKCl7dmFyIF8weDM2ZTU1MD1fMHg3Y2VlMWE7cmV0dXJuIF8weDQwMGM2NVtfMHgzNmU1NTAoMHgyNmQpXVtfMHgzNmU1NTAoMHgxYmYpXSgpO30sXzB4MzgxNTEwPWZ1bmN0aW9uKF8weDJiOGNhYyxfMHgxZGQ1Y2Qpe3JldHVybiAweDNlOCooXzB4MWRkNWNkWzB4MF0tXzB4MmI4Y2FjWzB4MF0pKyhfMHgxZGQ1Y2RbMHgxXS1fMHgyYjhjYWNbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NTU5OGFhfT1yZXF1aXJlKCdwZXJmX2hvb2tzJyk7XzB4MzBmZjUxPWZ1bmN0aW9uKCl7dmFyIF8weDY3OWU0Nz1fMHg3Y2VlMWE7cmV0dXJuIF8weDU1OThhYVtfMHg2NzllNDcoMHgyNzUpXSgpO307fWNhdGNoe18weDMwZmY1MT1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDM4MTUxMCwndGltZVN0YW1wJzpfMHgzMGZmNTEsJ25vdyc6KCk9PkRhdGVbJ25vdyddKCl9O31mdW5jdGlvbiBZKF8weDQ1MTg0NyxfMHg0Yjk1M2IsXzB4NDUyZTc0KXt2YXIgXzB4MzQ1OWY5PV8weDQzODI4MjtpZihfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDUxODQ3W18weDM0NTlmOSgweDI3YyldO2xldCBfMHgxNGRjNjA9XzB4NDUxODQ3Wydwcm9jZXNzJ10/LlsndmVyc2lvbnMnXT8uW18weDM0NTlmOSgweDFlOCldO3JldHVybiBfMHgxNGRjNjAmJl8weDQ1MmU3ND09PSdudXh0Jz9fMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV09ITB4MTpfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4MjdjKV09XzB4MTRkYzYwfHwhXzB4NGI5NTNifHxfMHg0NTE4NDdbXzB4MzQ1OWY5KDB4Mjg3KV0/LlsnaG9zdG5hbWUnXSYmXzB4NGI5NTNiW18weDM0NTlmOSgweDIyNCldKF8weDQ1MTg0N1snbG9jYXRpb24nXVtfMHgzNDU5ZjkoMHgyOGYpXSksXzB4NDUxODQ3WydfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnXTt9ZnVuY3Rpb24gUShfMHg0N2Q5NjAsXzB4M2M3Zjg4LF8weDU2MDFhZixfMHg0NDE1YWMpe3ZhciBfMHg1MWFhZTQ9XzB4NDM4MjgyO18weDQ3ZDk2MD1fMHg0N2Q5NjAsXzB4M2M3Zjg4PV8weDNjN2Y4OCxfMHg1NjAxYWY9XzB4NTYwMWFmLF8weDQ0MTVhYz1fMHg0NDE1YWM7bGV0IF8weDQ4Yjk1MD1XKF8weDQ3ZDk2MCksXzB4NTQ1NGM1PV8weDQ4Yjk1MFsnZWxhcHNlZCddLF8weDFjODBlYz1fMHg0OGI5NTBbXzB4NTFhYWU0KDB4MjEwKV07Y2xhc3MgXzB4YzY5MmEze2NvbnN0cnVjdG9yKCl7dmFyIF8weDQ3OTE1Mz1fMHg1MWFhZTQ7dGhpc1tfMHg0NzkxNTMoMHgyNTEpXT0vXig/ISg/OmRvfGlmfGlufGZvcnxsZXR8bmV3fHRyeXx2YXJ8Y2FzZXxlbHNlfGVudW18ZXZhbHxmYWxzZXxudWxsfHRoaXN8dHJ1ZXx2b2lkfHdpdGh8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGV4cG9ydHxpbXBvcnR8cHVibGljfHJldHVybnxzdGF0aWN8c3dpdGNofHR5cGVvZnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258YXJndW1lbnRzfGludGVyZmFjZXxwcm90ZWN0ZWR8aW1wbGVtZW50c3xpbnN0YW5jZW9mKSQpW18kYS16QS1aXFxcXHhBMC1cXFxcdUZGRkZdW18kYS16QS1aMC05XFxcXHhBMC1cXFxcdUZGRkZdKiQvLHRoaXNbXzB4NDc5MTUzKDB4MjY1KV09L14oMHxbMS05XVswLTldKikkLyx0aGlzW18weDQ3OTE1MygweDI0MildPS8nKFteXFxcXFxcXFwnXXxcXFxcXFxcXCcpKicvLHRoaXNbXzB4NDc5MTUzKDB4MjE1KV09XzB4NDdkOTYwW18weDQ3OTE1MygweDFiNSldLHRoaXNbXzB4NDc5MTUzKDB4MjUwKV09XzB4NDdkOTYwW18weDQ3OTE1MygweDFlNildLHRoaXNbXzB4NDc5MTUzKDB4MjNlKV09T2JqZWN0WydnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InXSx0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddPU9iamVjdFtfMHg0NzkxNTMoMHgxY2UpXSx0aGlzW18weDQ3OTE1MygweDIwYildPV8weDQ3ZDk2MFtfMHg0NzkxNTMoMHgxZmIpXSx0aGlzWydfcmVnRXhwVG9TdHJpbmcnXT1SZWdFeHBbXzB4NDc5MTUzKDB4MWQ5KV1bXzB4NDc5MTUzKDB4MWVlKV0sdGhpc1tfMHg0NzkxNTMoMHgxZmQpXT1EYXRlW18weDQ3OTE1MygweDFkOSldW18weDQ3OTE1MygweDFlZSldO31bXzB4NTFhYWU0KDB4MjM5KV0oXzB4NTc0NzFiLF8weDRhOTM5NixfMHgyOTkwZjAsXzB4MzRkMDljKXt2YXIgXzB4Mzk5NWFmPV8weDUxYWFlNCxfMHg1MDcyNTc9dGhpcyxfMHgzYjU4ZTY9XzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldO2Z1bmN0aW9uIF8weGE0NjUyMChfMHgzNGVkM2MsXzB4NTMyNmM2LF8weGJmMTcyNCl7dmFyIF8weDM4Yjg1MT1fMHgzOTk1YWY7XzB4NTMyNmM2Wyd0eXBlJ109XzB4MzhiODUxKDB4MjVmKSxfMHg1MzI2YzZbXzB4MzhiODUxKDB4MjJmKV09XzB4MzRlZDNjW18weDM4Yjg1MSgweDFkMCldLF8weDVmMTg5Yz1fMHhiZjE3MjRbXzB4MzhiODUxKDB4MWU4KV1bXzB4MzhiODUxKDB4Mjg1KV0sXzB4YmYxNzI0W18weDM4Yjg1MSgweDFlOCldW18weDM4Yjg1MSgweDI4NSldPV8weDUzMjZjNixfMHg1MDcyNTdbXzB4MzhiODUxKDB4MjI5KV0oXzB4NTMyNmM2LF8weGJmMTcyNCk7fXRyeXtfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MWQ0KV0rKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4Mjc5KV0mJl8weDI5OTBmMFsnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cyddWydwdXNoJ10oXzB4NGE5Mzk2KTt2YXIgXzB4MTNkZTBjLF8weDQ1M2I5YSxfMHgzZTNlMzEsXzB4M2Q5MjU3LF8weDMyMjE1Nj1bXSxfMHgzMzkzYzQ9W10sXzB4NDM5MTczLF8weDM0ODY4OD10aGlzW18weDM5OTVhZigweDFlZCldKF8weDRhOTM5NiksXzB4MTZiZGFlPV8weDM0ODY4OD09PSdhcnJheScsXzB4NDhiZDZmPSEweDEsXzB4MmJjYzAwPV8weDM0ODY4OD09PV8weDM5OTVhZigweDI1MyksXzB4NDBlZjc2PXRoaXNbXzB4Mzk5NWFmKDB4MjI1KV0oXzB4MzQ4Njg4KSxfMHg1MzVhMmE9dGhpc1snX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnXShfMHgzNDg2ODgpLF8weDMwOTczZj1fMHg0MGVmNzZ8fF8weDUzNWEyYSxfMHgyM2U2N2I9e30sXzB4ZmQ1M2FlPTB4MCxfMHgxMDQzZDI9ITB4MSxfMHg1ZjE4OWMsXzB4ZjA1ZGI2PS9eKChbMS05XXsxfVswLTldKil8MCkkLztpZihfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjIyKV0pe2lmKF8weDE2YmRhZSl7aWYoXzB4NDUzYjlhPV8weDRhOTM5NltfMHgzOTk1YWYoMHgyM2YpXSxfMHg0NTNiOWE+XzB4Mjk5MGYwW18weDM5OTVhZigweDFiYildKXtmb3IoXzB4M2UzZTMxPTB4MCxfMHgzZDkyNTc9XzB4Mjk5MGYwW18weDM5OTVhZigweDFiYildLF8weDEzZGUwYz1fMHgzZTNlMzE7XzB4MTNkZTBjPF8weDNkOTI1NztfMHgxM2RlMGMrKylfMHgzMzkzYzRbXzB4Mzk5NWFmKDB4MjEyKV0oXzB4NTA3MjU3WydfYWRkUHJvcGVydHknXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHgxM2RlMGMsXzB4Mjk5MGYwKSk7XzB4NTc0NzFiW18weDM5OTVhZigweDFiYSldPSEweDA7fWVsc2V7Zm9yKF8weDNlM2UzMT0weDAsXzB4M2Q5MjU3PV8weDQ1M2I5YSxfMHgxM2RlMGM9XzB4M2UzZTMxO18weDEzZGUwYzxfMHgzZDkyNTc7XzB4MTNkZTBjKyspXzB4MzM5M2M0W18weDM5OTVhZigweDIxMildKF8weDUwNzI1N1tfMHgzOTk1YWYoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHgxM2RlMGMsXzB4Mjk5MGYwKSk7fV8weDI5OTBmMFtfMHgzOTk1YWYoMHgyM2MpXSs9XzB4MzM5M2M0WydsZW5ndGgnXTt9aWYoIShfMHgzNDg2ODg9PT1fMHgzOTk1YWYoMHgyMDYpfHxfMHgzNDg2ODg9PT1fMHgzOTk1YWYoMHgxYjUpKSYmIV8weDQwZWY3NiYmXzB4MzQ4Njg4IT09XzB4Mzk5NWFmKDB4MjFiKSYmXzB4MzQ4Njg4IT09XzB4Mzk5NWFmKDB4MjBkKSYmXzB4MzQ4Njg4IT09J2JpZ2ludCcpe3ZhciBfMHgyYzgyMjk9XzB4MzRkMDljW18weDM5OTVhZigweDIzNSldfHxfMHgyOTkwZjBbJ3Byb3BzJ107aWYodGhpc1snX2lzU2V0J10oXzB4NGE5Mzk2KT8oXzB4MTNkZTBjPTB4MCxfMHg0YTkzOTZbXzB4Mzk5NWFmKDB4MjdkKV0oZnVuY3Rpb24oXzB4MjRkZmQwKXt2YXIgXzB4M2EwNTI5PV8weDM5OTVhZjtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDtyZXR1cm47fWlmKCFfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjdhKV0mJl8weDI5OTBmMFsnYXV0b0V4cGFuZCddJiZfMHgyOTkwZjBbXzB4M2EwNTI5KDB4MjNjKV0+XzB4Mjk5MGYwW18weDNhMDUyOSgweDI4NildKXtfMHgxMDQzZDI9ITB4MDtyZXR1cm47fV8weDMzOTNjNFsncHVzaCddKF8weDUwNzI1N1tfMHgzYTA1MjkoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDNhMDUyOSgweDFjYSksXzB4MTNkZTBjKyssXzB4Mjk5MGYwLGZ1bmN0aW9uKF8weGQ2NjhkNyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weGQ2NjhkNzt9O30oXzB4MjRkZmQwKSkpO30pKTp0aGlzWydfaXNNYXAnXShfMHg0YTkzOTYpJiZfMHg0YTkzOTZbXzB4Mzk5NWFmKDB4MjdkKV0oZnVuY3Rpb24oXzB4OWM0MzEzLF8weDFlZWVlMil7dmFyIF8weDUxZmUwZD1fMHgzOTk1YWY7aWYoXzB4ZmQ1M2FlKyssXzB4Mjk5MGYwW18weDUxZmUwZCgweDIzYyldKyssXzB4ZmQ1M2FlPl8weDJjODIyOSl7XzB4MTA0M2QyPSEweDA7cmV0dXJuO31pZighXzB4Mjk5MGYwWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weDI5OTBmMFtfMHg1MWZlMGQoMHgyNzkpXSYmXzB4Mjk5MGYwWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddPl8weDI5OTBmMFtfMHg1MWZlMGQoMHgyODYpXSl7XzB4MTA0M2QyPSEweDA7cmV0dXJuO312YXIgXzB4MTEzZTk3PV8weDFlZWVlMltfMHg1MWZlMGQoMHgxZWUpXSgpO18weDExM2U5N1tfMHg1MWZlMGQoMHgyM2YpXT4weDY0JiYoXzB4MTEzZTk3PV8weDExM2U5N1tfMHg1MWZlMGQoMHgyMWUpXSgweDAsMHg2NCkrXzB4NTFmZTBkKDB4Mjg0KSksXzB4MzM5M2M0W18weDUxZmUwZCgweDIxMildKF8weDUwNzI1N1tfMHg1MWZlMGQoMHgxZGUpXShfMHgzMjIxNTYsXzB4NGE5Mzk2LF8weDUxZmUwZCgweDFiNyksXzB4MTEzZTk3LF8weDI5OTBmMCxmdW5jdGlvbihfMHgyMDE3OGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHgyMDE3OGI7fTt9KF8weDljNDMxMykpKTt9KSwhXzB4NDhiZDZmKXt0cnl7Zm9yKF8weDQzOTE3MyBpbiBfMHg0YTkzOTYpaWYoIShfMHgxNmJkYWUmJl8weGYwNWRiNltfMHgzOTk1YWYoMHgyNmIpXShfMHg0MzkxNzMpKSYmIXRoaXNbXzB4Mzk5NWFmKDB4Mjc3KV0oXzB4NGE5Mzk2LF8weDQzOTE3MyxfMHgyOTkwZjApKXtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDticmVhazt9aWYoIV8weDI5OTBmMFtfMHgzOTk1YWYoMHgyN2EpXSYmXzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldJiZfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0+XzB4Mjk5MGYwW18weDM5OTVhZigweDI4NildKXtfMHgxMDQzZDI9ITB4MDticmVhazt9XzB4MzM5M2M0W18weDM5OTVhZigweDIxMildKF8weDUwNzI1N1tfMHgzOTk1YWYoMHgxZjcpXShfMHgzMjIxNTYsXzB4MjNlNjdiLF8weDRhOTM5NixfMHgzNDg2ODgsXzB4NDM5MTczLF8weDI5OTBmMCkpO319Y2F0Y2h7fWlmKF8weDIzZTY3YlsnX3BfbGVuZ3RoJ109ITB4MCxfMHgyYmNjMDAmJihfMHgyM2U2N2JbJ19wX25hbWUnXT0hMHgwKSwhXzB4MTA0M2QyKXt2YXIgXzB4MmM3NDU3PVtdW18weDM5OTVhZigweDI2NildKHRoaXNbJ19nZXRPd25Qcm9wZXJ0eU5hbWVzJ10oXzB4NGE5Mzk2KSlbXzB4Mzk5NWFmKDB4MjY2KV0odGhpc1tfMHgzOTk1YWYoMHgyOGIpXShfMHg0YTkzOTYpKTtmb3IoXzB4MTNkZTBjPTB4MCxfMHg0NTNiOWE9XzB4MmM3NDU3WydsZW5ndGgnXTtfMHgxM2RlMGM8XzB4NDUzYjlhO18weDEzZGUwYysrKWlmKF8weDQzOTE3Mz1fMHgyYzc0NTdbXzB4MTNkZTBjXSwhKF8weDE2YmRhZSYmXzB4ZjA1ZGI2Wyd0ZXN0J10oXzB4NDM5MTczWyd0b1N0cmluZyddKCkpKSYmIXRoaXNbXzB4Mzk5NWFmKDB4Mjc3KV0oXzB4NGE5Mzk2LF8weDQzOTE3MyxfMHgyOTkwZjApJiYhXzB4MjNlNjdiW18weDM5OTVhZigweDFiZSkrXzB4NDM5MTczW18weDM5OTVhZigweDFlZSldKCldKXtpZihfMHhmZDUzYWUrKyxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjNjKV0rKyxfMHhmZDUzYWU+XzB4MmM4MjI5KXtfMHgxMDQzZDI9ITB4MDticmVhazt9aWYoIV8weDI5OTBmMFsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHgyOTkwZjBbJ2F1dG9FeHBhbmQnXSYmXzB4Mjk5MGYwW18weDM5OTVhZigweDIzYyldPl8weDI5OTBmMFtfMHgzOTk1YWYoMHgyODYpXSl7XzB4MTA0M2QyPSEweDA7YnJlYWs7fV8weDMzOTNjNFtfMHgzOTk1YWYoMHgyMTIpXShfMHg1MDcyNTdbJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDMyMjE1NixfMHgyM2U2N2IsXzB4NGE5Mzk2LF8weDM0ODY4OCxfMHg0MzkxNzMsXzB4Mjk5MGYwKSk7fX19fX1pZihfMHg1NzQ3MWJbJ3R5cGUnXT1fMHgzNDg2ODgsXzB4MzA5NzNmPyhfMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09XzB4NGE5Mzk2W18weDM5OTVhZigweDFiNCldKCksdGhpc1snX2NhcElmU3RyaW5nJ10oXzB4MzQ4Njg4LF8weDU3NDcxYixfMHgyOTkwZjAsXzB4MzRkMDljKSk6XzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MjA4KT9fMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09dGhpc1tfMHgzOTk1YWYoMHgxZmQpXVtfMHgzOTk1YWYoMHgyODEpXShfMHg0YTkzOTYpOl8weDM0ODY4OD09PV8weDM5OTVhZigweDFmMyk/XzB4NTc0NzFiWyd2YWx1ZSddPV8weDRhOTM5NlsndG9TdHJpbmcnXSgpOl8weDM0ODY4OD09PV8weDM5OTVhZigweDIzNyk/XzB4NTc0NzFiWyd2YWx1ZSddPXRoaXNbXzB4Mzk5NWFmKDB4MjJiKV1bXzB4Mzk5NWFmKDB4MjgxKV0oXzB4NGE5Mzk2KTpfMHgzNDg2ODg9PT0nc3ltYm9sJyYmdGhpc1tfMHgzOTk1YWYoMHgyMGIpXT9fMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MjcwKV09dGhpc1tfMHgzOTk1YWYoMHgyMGIpXVtfMHgzOTk1YWYoMHgxZDkpXVtfMHgzOTk1YWYoMHgxZWUpXVtfMHgzOTk1YWYoMHgyODEpXShfMHg0YTkzOTYpOiFfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MjIyKV0mJiEoXzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MjA2KXx8XzB4MzQ4Njg4PT09XzB4Mzk5NWFmKDB4MWI1KSkmJihkZWxldGUgXzB4NTc0NzFiW18weDM5OTVhZigweDI3MCldLF8weDU3NDcxYltfMHgzOTk1YWYoMHgxYjYpXT0hMHgwKSxfMHgxMDQzZDImJihfMHg1NzQ3MWJbXzB4Mzk5NWFmKDB4MWJjKV09ITB4MCksXzB4NWYxODljPV8weDI5OTBmMFsnbm9kZSddWydjdXJyZW50J10sXzB4Mjk5MGYwW18weDM5OTVhZigweDFlOCldW18weDM5OTVhZigweDI4NSldPV8weDU3NDcxYix0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJ10oXzB4NTc0NzFiLF8weDI5OTBmMCksXzB4MzM5M2M0W18weDM5OTVhZigweDIzZildKXtmb3IoXzB4MTNkZTBjPTB4MCxfMHg0NTNiOWE9XzB4MzM5M2M0W18weDM5OTVhZigweDIzZildO18weDEzZGUwYzxfMHg0NTNiOWE7XzB4MTNkZTBjKyspXzB4MzM5M2M0W18weDEzZGUwY10oXzB4MTNkZTBjKTt9XzB4MzIyMTU2W18weDM5OTVhZigweDIzZildJiYoXzB4NTc0NzFiWydwcm9wcyddPV8weDMyMjE1Nik7fWNhdGNoKF8weDRkMzUyOCl7XzB4YTQ2NTIwKF8weDRkMzUyOCxfMHg1NzQ3MWIsXzB4Mjk5MGYwKTt9cmV0dXJuIHRoaXNbXzB4Mzk5NWFmKDB4MjA5KV0oXzB4NGE5Mzk2LF8weDU3NDcxYiksdGhpc1tfMHgzOTk1YWYoMHgyMjcpXShfMHg1NzQ3MWIsXzB4Mjk5MGYwKSxfMHgyOTkwZjBbXzB4Mzk5NWFmKDB4MWU4KV1bXzB4Mzk5NWFmKDB4Mjg1KV09XzB4NWYxODljLF8weDI5OTBmMFsnbGV2ZWwnXS0tLF8weDI5OTBmMFtfMHgzOTk1YWYoMHgyNzkpXT1fMHgzYjU4ZTYsXzB4Mjk5MGYwW18weDM5OTVhZigweDI3OSldJiZfMHgyOTkwZjBbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXVtfMHgzOTk1YWYoMHgyOTcpXSgpLF8weDU3NDcxYjt9W18weDUxYWFlNCgweDI4YildKF8weDZhZGJhKXt2YXIgXzB4MjM5M2U2PV8weDUxYWFlNDtyZXR1cm4gT2JqZWN0W18weDIzOTNlNigweDIyYyldP09iamVjdFtfMHgyMzkzZTYoMHgyMmMpXShfMHg2YWRiYSk6W107fVtfMHg1MWFhZTQoMHgxZWYpXShfMHhiMTNmM2Qpe3ZhciBfMHg0MDkxNjI9XzB4NTFhYWU0O3JldHVybiEhKF8weGIxM2YzZCYmXzB4NDdkOTYwW18weDQwOTE2MigweDFjYSldJiZ0aGlzW18weDQwOTE2MigweDIyMyldKF8weGIxM2YzZCk9PT1fMHg0MDkxNjIoMHgyMWYpJiZfMHhiMTNmM2RbXzB4NDA5MTYyKDB4MjdkKV0pO31bJ19ibGFja2xpc3RlZFByb3BlcnR5J10oXzB4MWExNzc5LF8weDUwMTI5MixfMHgyOWUyYTUpe3ZhciBfMHgxNzVjZWY9XzB4NTFhYWU0O3JldHVybiBfMHgyOWUyYTVbXzB4MTc1Y2VmKDB4MjFkKV0/dHlwZW9mIF8weDFhMTc3OVtfMHg1MDEyOTJdPT1fMHgxNzVjZWYoMHgyNTMpOiEweDE7fVtfMHg1MWFhZTQoMHgxZWQpXShfMHg0Y2RiNjApe3ZhciBfMHgzODg0Mzk9XzB4NTFhYWU0LF8weDU2NmEwYz0nJztyZXR1cm4gXzB4NTY2YTBjPXR5cGVvZiBfMHg0Y2RiNjAsXzB4NTY2YTBjPT09XzB4Mzg4NDM5KDB4MjEzKT90aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0Y2RiNjApPT09XzB4Mzg4NDM5KDB4MWRjKT9fMHg1NjZhMGM9J2FycmF5Jzp0aGlzW18weDM4ODQzOSgweDIyMyldKF8weDRjZGI2MCk9PT1fMHgzODg0MzkoMHgyMDIpP18weDU2NmEwYz0nZGF0ZSc6dGhpc1tfMHgzODg0MzkoMHgyMjMpXShfMHg0Y2RiNjApPT09XzB4Mzg4NDM5KDB4MjRkKT9fMHg1NjZhMGM9XzB4Mzg4NDM5KDB4MWYzKTpfMHg0Y2RiNjA9PT1udWxsP18weDU2NmEwYz0nbnVsbCc6XzB4NGNkYjYwW18weDM4ODQzOSgweDIwZildJiYoXzB4NTY2YTBjPV8weDRjZGI2MFtfMHgzODg0MzkoMHgyMGYpXVtfMHgzODg0MzkoMHgyNWEpXXx8XzB4NTY2YTBjKTpfMHg1NjZhMGM9PT1fMHgzODg0MzkoMHgxYjUpJiZ0aGlzW18weDM4ODQzOSgweDI1MCldJiZfMHg0Y2RiNjAgaW5zdGFuY2VvZiB0aGlzW18weDM4ODQzOSgweDI1MCldJiYoXzB4NTY2YTBjPV8weDM4ODQzOSgweDFlNikpLF8weDU2NmEwYzt9Wydfb2JqZWN0VG9TdHJpbmcnXShfMHgxMmEzNmUpe3ZhciBfMHgyODA2MjY9XzB4NTFhYWU0O3JldHVybiBPYmplY3RbXzB4MjgwNjI2KDB4MWQ5KV1bXzB4MjgwNjI2KDB4MWVlKV1bXzB4MjgwNjI2KDB4MjgxKV0oXzB4MTJhMzZlKTt9WydfaXNQcmltaXRpdmVUeXBlJ10oXzB4NGRkNzhlKXt2YXIgXzB4MzBmNTA3PV8weDUxYWFlNDtyZXR1cm4gXzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MWY4KXx8XzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MjQxKXx8XzB4NGRkNzhlPT09XzB4MzBmNTA3KDB4MWU1KTt9W18weDUxYWFlNCgweDI2NCldKF8weDNmN2JjOCl7dmFyIF8weDRmYWRhZD1fMHg1MWFhZTQ7cmV0dXJuIF8weDNmN2JjOD09PSdCb29sZWFuJ3x8XzB4M2Y3YmM4PT09XzB4NGZhZGFkKDB4MjFiKXx8XzB4M2Y3YmM4PT09XzB4NGZhZGFkKDB4MjNhKTt9W18weDUxYWFlNCgweDFkZSldKF8weDE0MDhlZCxfMHg4ZThkZDksXzB4NTg4MmU2LF8weDQzNzI1YyxfMHg1YThlMGIsXzB4M2M2NTVlKXt2YXIgXzB4Mzg4MWM2PXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDIyZjY5NCl7dmFyIF8weDEyODFlZT1fMHg0ZDI0LF8weDc5NmQwMj1fMHg1YThlMGJbJ25vZGUnXVtfMHgxMjgxZWUoMHgyODUpXSxfMHgxNTgxZGI9XzB4NWE4ZTBiW18weDEyODFlZSgweDFlOCldWydpbmRleCddLF8weDQ3MmNjYz1fMHg1YThlMGJbXzB4MTI4MWVlKDB4MWU4KV1bXzB4MTI4MWVlKDB4Mjk2KV07XzB4NWE4ZTBiW18weDEyODFlZSgweDFlOCldW18weDEyODFlZSgweDI5NildPV8weDc5NmQwMixfMHg1YThlMGJbJ25vZGUnXVtfMHgxMjgxZWUoMHgxZmYpXT10eXBlb2YgXzB4NDM3MjVjPT1fMHgxMjgxZWUoMHgxZTUpP18weDQzNzI1YzpfMHgyMmY2OTQsXzB4MTQwOGVkW18weDEyODFlZSgweDIxMildKF8weDM4ODFjNlsnX3Byb3BlcnR5J10oXzB4OGU4ZGQ5LF8weDU4ODJlNixfMHg0MzcyNWMsXzB4NWE4ZTBiLF8weDNjNjU1ZSkpLF8weDVhOGUwYltfMHgxMjgxZWUoMHgxZTgpXVsncGFyZW50J109XzB4NDcyY2NjLF8weDVhOGUwYlsnbm9kZSddW18weDEyODFlZSgweDFmZildPV8weDE1ODFkYjt9O31bJ19hZGRPYmplY3RQcm9wZXJ0eSddKF8weDRkMWQ1OSxfMHg0ZTNlZTMsXzB4YzE5MjZkLF8weDU4MzQ5NyxfMHgyM2UzYjcsXzB4MzY2YmFiLF8weDU3OGRmYSl7dmFyIF8weDQzYzU3YT1fMHg1MWFhZTQsXzB4NTE2NzQzPXRoaXM7cmV0dXJuIF8weDRlM2VlM1tfMHg0M2M1N2EoMHgxYmUpK18weDIzZTNiN1tfMHg0M2M1N2EoMHgxZWUpXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDUxYzBiOCl7dmFyIF8weDIyY2YwOD1fMHg0M2M1N2EsXzB4NDJlZWM1PV8weDM2NmJhYltfMHgyMmNmMDgoMHgxZTgpXVsnY3VycmVudCddLF8weDIzN2FjZD1fMHgzNjZiYWJbXzB4MjJjZjA4KDB4MWU4KV1bXzB4MjJjZjA4KDB4MWZmKV0sXzB4ZjJjMDk9XzB4MzY2YmFiWydub2RlJ11bJ3BhcmVudCddO18weDM2NmJhYlsnbm9kZSddWydwYXJlbnQnXT1fMHg0MmVlYzUsXzB4MzY2YmFiW18weDIyY2YwOCgweDFlOCldW18weDIyY2YwOCgweDFmZildPV8weDUxYzBiOCxfMHg0ZDFkNTlbXzB4MjJjZjA4KDB4MjEyKV0oXzB4NTE2NzQzWydfcHJvcGVydHknXShfMHhjMTkyNmQsXzB4NTgzNDk3LF8weDIzZTNiNyxfMHgzNjZiYWIsXzB4NTc4ZGZhKSksXzB4MzY2YmFiW18weDIyY2YwOCgweDFlOCldW18weDIyY2YwOCgweDI5NildPV8weGYyYzA5LF8weDM2NmJhYltfMHgyMmNmMDgoMHgxZTgpXVtfMHgyMmNmMDgoMHgxZmYpXT1fMHgyMzdhY2Q7fTt9W18weDUxYWFlNCgweDI2YyldKF8weDM3YTU3NSxfMHg0OTA4NWYsXzB4NWQyMzFjLF8weDE4N2EzOSxfMHgxNTIyMjkpe3ZhciBfMHg1NTNiNTI9XzB4NTFhYWU0LF8weDJlNmNkNz10aGlzO18weDE1MjIyOXx8KF8weDE1MjIyOT1mdW5jdGlvbihfMHgzOTVmYWEsXzB4MzRhZGZmKXtyZXR1cm4gXzB4Mzk1ZmFhW18weDM0YWRmZl07fSk7dmFyIF8weDRiNDFhNj1fMHg1ZDIzMWNbJ3RvU3RyaW5nJ10oKSxfMHg1YmRmMjQ9XzB4MTg3YTM5W18weDU1M2I1MigweDI3MSldfHx7fSxfMHgxZDc5ODI9XzB4MTg3YTM5W18weDU1M2I1MigweDIyMildLF8weDI1ZjYyYz1fMHgxODdhMzlbXzB4NTUzYjUyKDB4MjdhKV07dHJ5e3ZhciBfMHgyMDc4NTY9dGhpc1snX2lzTWFwJ10oXzB4MzdhNTc1KSxfMHgxNmNhYjY9XzB4NGI0MWE2O18weDIwNzg1NiYmXzB4MTZjYWI2WzB4MF09PT0nXFxcXHgyNycmJihfMHgxNmNhYjY9XzB4MTZjYWI2W18weDU1M2I1MigweDFjZCldKDB4MSxfMHgxNmNhYjZbXzB4NTUzYjUyKDB4MjNmKV0tMHgyKSk7dmFyIF8weDJiNTk1Yj1fMHgxODdhMzlbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddPV8weDViZGYyNFsnX3BfJytfMHgxNmNhYjZdO18weDJiNTk1YiYmKF8weDE4N2EzOVsnZGVwdGgnXT1fMHgxODdhMzlbXzB4NTUzYjUyKDB4MjIyKV0rMHgxKSxfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjdhKV09ISFfMHgyYjU5NWI7dmFyIF8weDJhMjNkMz10eXBlb2YgXzB4NWQyMzFjPT0nc3ltYm9sJyxfMHgzMGEzMWI9eyduYW1lJzpfMHgyYTIzZDN8fF8weDIwNzg1Nj9fMHg0YjQxYTY6dGhpc1snX3Byb3BlcnR5TmFtZSddKF8weDRiNDFhNil9O2lmKF8weDJhMjNkMyYmKF8weDMwYTMxYlsnc3ltYm9sJ109ITB4MCksIShfMHg0OTA4NWY9PT1fMHg1NTNiNTIoMHgyNDQpfHxfMHg0OTA4NWY9PT1fMHg1NTNiNTIoMHgyOTUpKSl7dmFyIF8weDJmYzc4Yz10aGlzW18weDU1M2I1MigweDIzZSldKF8weDM3YTU3NSxfMHg1ZDIzMWMpO2lmKF8weDJmYzc4YyYmKF8weDJmYzc4Y1tfMHg1NTNiNTIoMHgyMmQpXSYmKF8weDMwYTMxYltfMHg1NTNiNTIoMHgyOTgpXT0hMHgwKSxfMHgyZmM3OGNbXzB4NTUzYjUyKDB4MWUxKV0mJiFfMHgyYjU5NWImJiFfMHgxODdhMzlbXzB4NTUzYjUyKDB4MWJkKV0pKXJldHVybiBfMHgzMGEzMWJbXzB4NTUzYjUyKDB4MWU3KV09ITB4MCx0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzkpLF8weDMwYTMxYjt9dmFyIF8weDE4YTY3Mjt0cnl7XzB4MThhNjcyPV8weDE1MjIyOShfMHgzN2E1NzUsXzB4NWQyMzFjKTt9Y2F0Y2goXzB4NTUxNDcwKXtyZXR1cm4gXzB4MzBhMzFiPXsnbmFtZSc6XzB4NGI0MWE2LCd0eXBlJzpfMHg1NTNiNTIoMHgyNWYpLCdlcnJvcic6XzB4NTUxNDcwW18weDU1M2I1MigweDFkMCldfSx0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzkpLF8weDMwYTMxYjt9dmFyIF8weDM3NWFmZT10aGlzW18weDU1M2I1MigweDFlZCldKF8weDE4YTY3MiksXzB4NjVkYzA4PXRoaXNbXzB4NTUzYjUyKDB4MjI1KV0oXzB4Mzc1YWZlKTtpZihfMHgzMGEzMWJbXzB4NTUzYjUyKDB4MjQ4KV09XzB4Mzc1YWZlLF8weDY1ZGMwOCl0aGlzW18weDU1M2I1MigweDIwNyldKF8weDMwYTMxYixfMHgxODdhMzksXzB4MThhNjcyLGZ1bmN0aW9uKCl7dmFyIF8weDRjMzQwOT1fMHg1NTNiNTI7XzB4MzBhMzFiW18weDRjMzQwOSgweDI3MCldPV8weDE4YTY3MltfMHg0YzM0MDkoMHgxYjQpXSgpLCFfMHgyYjU5NWImJl8weDJlNmNkN1snX2NhcElmU3RyaW5nJ10oXzB4Mzc1YWZlLF8weDMwYTMxYixfMHgxODdhMzkse30pO30pO2Vsc2V7dmFyIF8weGZjM2ZjYT1fMHgxODdhMzlbXzB4NTUzYjUyKDB4Mjc5KV0mJl8weDE4N2EzOVsnbGV2ZWwnXTxfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjliKV0mJl8weDE4N2EzOVtfMHg1NTNiNTIoMHgyNGMpXVtfMHg1NTNiNTIoMHgyMTYpXShfMHgxOGE2NzIpPDB4MCYmXzB4Mzc1YWZlIT09XzB4NTUzYjUyKDB4MjUzKSYmXzB4MTg3YTM5W18weDU1M2I1MigweDIzYyldPF8weDE4N2EzOVsnYXV0b0V4cGFuZExpbWl0J107XzB4ZmMzZmNhfHxfMHgxODdhMzlbJ2xldmVsJ108XzB4MWQ3OTgyfHxfMHgyYjU5NWI/KHRoaXNbXzB4NTUzYjUyKDB4MjM5KV0oXzB4MzBhMzFiLF8weDE4YTY3MixfMHgxODdhMzksXzB4MmI1OTVifHx7fSksdGhpc1tfMHg1NTNiNTIoMHgyMDkpXShfMHgxOGE2NzIsXzB4MzBhMzFiKSk6dGhpc1tfMHg1NTNiNTIoMHgyMDcpXShfMHgzMGEzMWIsXzB4MTg3YTM5LF8weDE4YTY3MixmdW5jdGlvbigpe3ZhciBfMHgyYWIwN2E9XzB4NTUzYjUyO18weDM3NWFmZT09PV8weDJhYjA3YSgweDIwNil8fF8weDM3NWFmZT09PV8weDJhYjA3YSgweDFiNSl8fChkZWxldGUgXzB4MzBhMzFiW18weDJhYjA3YSgweDI3MCldLF8weDMwYTMxYltfMHgyYWIwN2EoMHgxYjYpXT0hMHgwKTt9KTt9cmV0dXJuIF8weDMwYTMxYjt9ZmluYWxseXtfMHgxODdhMzlbXzB4NTUzYjUyKDB4MjcxKV09XzB4NWJkZjI0LF8weDE4N2EzOVtfMHg1NTNiNTIoMHgyMjIpXT1fMHgxZDc5ODIsXzB4MTg3YTM5W18weDU1M2I1MigweDI3YSldPV8weDI1ZjYyYzt9fVsnX2NhcElmU3RyaW5nJ10oXzB4NTNkZDdjLF8weDFiM2VhNCxfMHg0OTEyMTYsXzB4NGMyOTAzKXt2YXIgXzB4NDQxMDRhPV8weDUxYWFlNCxfMHg0ODBlZWU9XzB4NGMyOTAzWydzdHJMZW5ndGgnXXx8XzB4NDkxMjE2WydzdHJMZW5ndGgnXTtpZigoXzB4NTNkZDdjPT09J3N0cmluZyd8fF8weDUzZGQ3Yz09PV8weDQ0MTA0YSgweDIxYikpJiZfMHgxYjNlYTRbXzB4NDQxMDRhKDB4MjcwKV0pe2xldCBfMHgyNDZlYWE9XzB4MWIzZWE0Wyd2YWx1ZSddW18weDQ0MTA0YSgweDIzZildO18weDQ5MTIxNltfMHg0NDEwNGEoMHgyOWEpXSs9XzB4MjQ2ZWFhLF8weDQ5MTIxNltfMHg0NDEwNGEoMHgyOWEpXT5fMHg0OTEyMTZbXzB4NDQxMDRhKDB4MjVlKV0/KF8weDFiM2VhNFsnY2FwcGVkJ109JycsZGVsZXRlIF8weDFiM2VhNFtfMHg0NDEwNGEoMHgyNzApXSk6XzB4MjQ2ZWFhPl8weDQ4MGVlZSYmKF8weDFiM2VhNFtfMHg0NDEwNGEoMHgxYjYpXT1fMHgxYjNlYTRbJ3ZhbHVlJ11bXzB4NDQxMDRhKDB4MWNkKV0oMHgwLF8weDQ4MGVlZSksZGVsZXRlIF8weDFiM2VhNFtfMHg0NDEwNGEoMHgyNzApXSk7fX1bJ19pc01hcCddKF8weDEyNzFiMyl7dmFyIF8weDEyMWUwOT1fMHg1MWFhZTQ7cmV0dXJuISEoXzB4MTI3MWIzJiZfMHg0N2Q5NjBbXzB4MTIxZTA5KDB4MWI3KV0mJnRoaXNbXzB4MTIxZTA5KDB4MjIzKV0oXzB4MTI3MWIzKT09PV8weDEyMWUwOSgweDI0OSkmJl8weDEyNzFiM1tfMHgxMjFlMDkoMHgyN2QpXSk7fVsnX3Byb3BlcnR5TmFtZSddKF8weDQ2M2NlNyl7dmFyIF8weDMzYjcwMD1fMHg1MWFhZTQ7aWYoXzB4NDYzY2U3W18weDMzYjcwMCgweDI2ZildKC9eXFxcXGQrJC8pKXJldHVybiBfMHg0NjNjZTc7dmFyIF8weDQwZTY4Njt0cnl7XzB4NDBlNjg2PUpTT05bJ3N0cmluZ2lmeSddKCcnK18weDQ2M2NlNyk7fWNhdGNoe18weDQwZTY4Nj0nXFxcXHgyMicrdGhpc1tfMHgzM2I3MDAoMHgyMjMpXShfMHg0NjNjZTcpKydcXFxceDIyJzt9cmV0dXJuIF8weDQwZTY4NlsnbWF0Y2gnXSgvXlxcXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcXFwiJC8pP18weDQwZTY4Nj1fMHg0MGU2ODZbJ3N1YnN0ciddKDB4MSxfMHg0MGU2ODZbJ2xlbmd0aCddLTB4Mik6XzB4NDBlNjg2PV8weDQwZTY4NlsncmVwbGFjZSddKC8nL2csJ1xcXFx4NWNcXFxceDI3JylbXzB4MzNiNzAwKDB4MjM4KV0oL1xcXFxcXFxcXFxcIi9nLCdcXFxceDIyJylbXzB4MzNiNzAwKDB4MjM4KV0oLyheXFxcInxcXFwiJCkvZywnXFxcXHgyNycpLF8weDQwZTY4Njt9W18weDUxYWFlNCgweDIwNyldKF8weDQ2NmU3MCxfMHg1ZjE1MDEsXzB4NGZjNjBhLF8weDRmYWQyYyl7dmFyIF8weDM4NzFmOT1fMHg1MWFhZTQ7dGhpc1snX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZSddKF8weDQ2NmU3MCxfMHg1ZjE1MDEpLF8weDRmYWQyYyYmXzB4NGZhZDJjKCksdGhpc1tfMHgzODcxZjkoMHgyMDkpXShfMHg0ZmM2MGEsXzB4NDY2ZTcwKSx0aGlzW18weDM4NzFmOSgweDIyNyldKF8weDQ2NmU3MCxfMHg1ZjE1MDEpO31bXzB4NTFhYWU0KDB4MjI5KV0oXzB4YTE0YmM0LF8weDI0NDUyMil7dmFyIF8weDI0ZjYzMT1fMHg1MWFhZTQ7dGhpc1tfMHgyNGY2MzEoMHgyN2YpXShfMHhhMTRiYzQsXzB4MjQ0NTIyKSx0aGlzW18weDI0ZjYzMSgweDFmOSldKF8weGExNGJjNCxfMHgyNDQ1MjIpLHRoaXNbXzB4MjRmNjMxKDB4MjE4KV0oXzB4YTE0YmM0LF8weDI0NDUyMiksdGhpc1tfMHgyNGY2MzEoMHgyNjcpXShfMHhhMTRiYzQsXzB4MjQ0NTIyKTt9W18weDUxYWFlNCgweDI3ZildKF8weDU3NGZlYSxfMHg1NjFmZTkpe31bXzB4NTFhYWU0KDB4MWY5KV0oXzB4OGY4ZjU5LF8weDFkY2FjNil7fVtfMHg1MWFhZTQoMHgyMGMpXShfMHgxM2RlZjksXzB4NTExNDE5KXt9WydfaXNVbmRlZmluZWQnXShfMHhhNGQ2YjUpe3ZhciBfMHg0OGFiYTg9XzB4NTFhYWU0O3JldHVybiBfMHhhNGQ2YjU9PT10aGlzW18weDQ4YWJhOCgweDIxNSldO31bXzB4NTFhYWU0KDB4MjI3KV0oXzB4NDU5NDMxLF8weDFjNDAxMSl7dmFyIF8weDNlNTYyMz1fMHg1MWFhZTQ7dGhpc1tfMHgzZTU2MjMoMHgyMGMpXShfMHg0NTk0MzEsXzB4MWM0MDExKSx0aGlzW18weDNlNTYyMygweDFlOSldKF8weDQ1OTQzMSksXzB4MWM0MDExW18weDNlNTYyMygweDFjOCldJiZ0aGlzW18weDNlNTYyMygweDFjMyldKF8weDQ1OTQzMSksdGhpc1tfMHgzZTU2MjMoMHgxZGIpXShfMHg0NTk0MzEsXzB4MWM0MDExKSx0aGlzW18weDNlNTYyMygweDI3ZSldKF8weDQ1OTQzMSxfMHgxYzQwMTEpLHRoaXNbXzB4M2U1NjIzKDB4MjJhKV0oXzB4NDU5NDMxKTt9W18weDUxYWFlNCgweDIwOSldKF8weDM3YWRjYSxfMHgzYjI3MmQpe3ZhciBfMHg0OWMzYWQ9XzB4NTFhYWU0O2xldCBfMHgyZjNiNjk7dHJ5e18weDQ3ZDk2MFsnY29uc29sZSddJiYoXzB4MmYzYjY5PV8weDQ3ZDk2MFsnY29uc29sZSddWydlcnJvciddLF8weDQ3ZDk2MFtfMHg0OWMzYWQoMHgxYzQpXVtfMHg0OWMzYWQoMHgyMmYpXT1mdW5jdGlvbigpe30pLF8weDM3YWRjYSYmdHlwZW9mIF8weDM3YWRjYVsnbGVuZ3RoJ109PV8weDQ5YzNhZCgweDFlNSkmJihfMHgzYjI3MmRbJ2xlbmd0aCddPV8weDM3YWRjYVtfMHg0OWMzYWQoMHgyM2YpXSk7fWNhdGNoe31maW5hbGx5e18weDJmM2I2OSYmKF8weDQ3ZDk2MFtfMHg0OWMzYWQoMHgxYzQpXVtfMHg0OWMzYWQoMHgyMmYpXT1fMHgyZjNiNjkpO31pZihfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjQ4KV09PT0nbnVtYmVyJ3x8XzB4M2IyNzJkW18weDQ5YzNhZCgweDI0OCldPT09XzB4NDljM2FkKDB4MjNhKSl7aWYoaXNOYU4oXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldKSlfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjA0KV09ITB4MCxkZWxldGUgXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldO2Vsc2Ugc3dpdGNoKF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNzApXSl7Y2FzZSBOdW1iZXJbXzB4NDljM2FkKDB4MWUwKV06XzB4M2IyNzJkW18weDQ5YzNhZCgweDI0YildPSEweDAsZGVsZXRlIF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNzApXTticmVhaztjYXNlIE51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTpfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjAxKV09ITB4MCxkZWxldGUgXzB4M2IyNzJkWyd2YWx1ZSddO2JyZWFrO2Nhc2UgMHgwOnRoaXNbXzB4NDljM2FkKDB4MjZhKV0oXzB4M2IyNzJkW18weDQ5YzNhZCgweDI3MCldKSYmKF8weDNiMjcyZFsnbmVnYXRpdmVaZXJvJ109ITB4MCk7YnJlYWs7fX1lbHNlIF8weDNiMjcyZFtfMHg0OWMzYWQoMHgyNDgpXT09PV8weDQ5YzNhZCgweDI1MykmJnR5cGVvZiBfMHgzN2FkY2FbJ25hbWUnXT09XzB4NDljM2FkKDB4MjQxKSYmXzB4MzdhZGNhW18weDQ5YzNhZCgweDI1YSldJiZfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjVhKV0mJl8weDM3YWRjYVsnbmFtZSddIT09XzB4M2IyNzJkWyduYW1lJ10mJihfMHgzYjI3MmRbXzB4NDljM2FkKDB4MjgwKV09XzB4MzdhZGNhWyduYW1lJ10pO31bXzB4NTFhYWU0KDB4MjZhKV0oXzB4NTgyM2RjKXtyZXR1cm4gMHgxL18weDU4MjNkYz09PU51bWJlclsnTkVHQVRJVkVfSU5GSU5JVFknXTt9W18weDUxYWFlNCgweDFjMyldKF8weDRmMTRmYyl7dmFyIF8weDM0YjM0Nj1fMHg1MWFhZTQ7IV8weDRmMTRmY1tfMHgzNGIzNDYoMHgyMzUpXXx8IV8weDRmMTRmY1tfMHgzNGIzNDYoMHgyMzUpXVtfMHgzNGIzNDYoMHgyM2YpXXx8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09J2FycmF5J3x8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09XzB4MzRiMzQ2KDB4MWI3KXx8XzB4NGYxNGZjW18weDM0YjM0NigweDI0OCldPT09XzB4MzRiMzQ2KDB4MWNhKXx8XzB4NGYxNGZjW18weDM0YjM0NigweDIzNSldW18weDM0YjM0NigweDFmMCldKGZ1bmN0aW9uKF8weDIxZDUxMyxfMHgxYWNhOTkpe3ZhciBfMHgxMGJjZjc9XzB4MzRiMzQ2LF8weDNlYjE4Yz1fMHgyMWQ1MTNbXzB4MTBiY2Y3KDB4MjVhKV1bXzB4MTBiY2Y3KDB4MWYyKV0oKSxfMHgzYjY0ZjU9XzB4MWFjYTk5W18weDEwYmNmNygweDI1YSldWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDNlYjE4YzxfMHgzYjY0ZjU/LTB4MTpfMHgzZWIxOGM+XzB4M2I2NGY1PzB4MToweDA7fSk7fVtfMHg1MWFhZTQoMHgxZGIpXShfMHg0NzJmZDYsXzB4NTA3NjUzKXt2YXIgXzB4NGQzZTgyPV8weDUxYWFlNDtpZighKF8weDUwNzY1M1tfMHg0ZDNlODIoMHgyMWQpXXx8IV8weDQ3MmZkNltfMHg0ZDNlODIoMHgyMzUpXXx8IV8weDQ3MmZkNltfMHg0ZDNlODIoMHgyMzUpXVtfMHg0ZDNlODIoMHgyM2YpXSkpe2Zvcih2YXIgXzB4NGVjMGZhPVtdLF8weGNmZGMyOT1bXSxfMHgxNWIwMTQ9MHgwLF8weDE2Y2JhZD1fMHg0NzJmZDZbXzB4NGQzZTgyKDB4MjM1KV1bJ2xlbmd0aCddO18weDE1YjAxNDxfMHgxNmNiYWQ7XzB4MTViMDE0Kyspe3ZhciBfMHhkZjYzNWU9XzB4NDcyZmQ2W18weDRkM2U4MigweDIzNSldW18weDE1YjAxNF07XzB4ZGY2MzVlWyd0eXBlJ109PT1fMHg0ZDNlODIoMHgyNTMpP18weDRlYzBmYVtfMHg0ZDNlODIoMHgyMTIpXShfMHhkZjYzNWUpOl8weGNmZGMyOVtfMHg0ZDNlODIoMHgyMTIpXShfMHhkZjYzNWUpO31pZighKCFfMHhjZmRjMjlbXzB4NGQzZTgyKDB4MjNmKV18fF8weDRlYzBmYVtfMHg0ZDNlODIoMHgyM2YpXTw9MHgxKSl7XzB4NDcyZmQ2W18weDRkM2U4MigweDIzNSldPV8weGNmZGMyOTt2YXIgXzB4NDQyNTI3PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDRlYzBmYX07dGhpc1snX3NldE5vZGVJZCddKF8weDQ0MjUyNyxfMHg1MDc2NTMpLHRoaXNbXzB4NGQzZTgyKDB4MjBjKV0oXzB4NDQyNTI3LF8weDUwNzY1MyksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHg0NDI1MjcpLHRoaXNbXzB4NGQzZTgyKDB4MjY3KV0oXzB4NDQyNTI3LF8weDUwNzY1MyksXzB4NDQyNTI3WydpZCddKz0nXFxcXHgyMGYnLF8weDQ3MmZkNlsncHJvcHMnXVsndW5zaGlmdCddKF8weDQ0MjUyNyk7fX19W18weDUxYWFlNCgweDI3ZSldKF8weDU4N2MyZixfMHhiMmZmZWUpe31bXzB4NTFhYWU0KDB4MWU5KV0oXzB4NTg4OGFjKXt9W18weDUxYWFlNCgweDFlYildKF8weDM4Y2I2ZCl7dmFyIF8weDRhMmU1Zj1fMHg1MWFhZTQ7cmV0dXJuIEFycmF5W18weDRhMmU1ZigweDIxYSldKF8weDM4Y2I2ZCl8fHR5cGVvZiBfMHgzOGNiNmQ9PV8weDRhMmU1ZigweDIxMykmJnRoaXNbXzB4NGEyZTVmKDB4MjIzKV0oXzB4MzhjYjZkKT09PV8weDRhMmU1ZigweDFkYyk7fVtfMHg1MWFhZTQoMHgyNjcpXShfMHg0NTQ3ODAsXzB4MTlmNzM2KXt9W18weDUxYWFlNCgweDIyYSldKF8weDJmNTE0MCl7dmFyIF8weDFhNTQzYj1fMHg1MWFhZTQ7ZGVsZXRlIF8weDJmNTE0MFtfMHgxYTU0M2IoMHgyMjEpXSxkZWxldGUgXzB4MmY1MTQwW18weDFhNTQzYigweDIzZCldLGRlbGV0ZSBfMHgyZjUxNDBbXzB4MWE1NDNiKDB4MWM3KV07fVtfMHg1MWFhZTQoMHgyMTgpXShfMHg0OTRkNDIsXzB4MzNlZDBjKXt9fWxldCBfMHgxMjY5NjE9bmV3IF8weGM2OTJhMygpLF8weDU1ODZiZj17J3Byb3BzJzoweDY0LCdlbGVtZW50cyc6MHg2NCwnc3RyTGVuZ3RoJzoweDQwMCoweDMyLCd0b3RhbFN0ckxlbmd0aCc6MHg0MDAqMHgzMiwnYXV0b0V4cGFuZExpbWl0JzoweDEzODgsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHhhfSxfMHg1MzM5MzY9eydwcm9wcyc6MHg1LCdlbGVtZW50cyc6MHg1LCdzdHJMZW5ndGgnOjB4MTAwLCd0b3RhbFN0ckxlbmd0aCc6MHgxMDAqMHgzLCdhdXRvRXhwYW5kTGltaXQnOjB4MWUsJ2F1dG9FeHBhbmRNYXhEZXB0aCc6MHgyfTtmdW5jdGlvbiBfMHgxODU1NTUoXzB4NGRkMWI5LF8weDM5MDZhNyxfMHg0MDJkZGUsXzB4NjkxNTI1LF8weDNiMmQ3ZSxfMHg0ZDRlOWYpe3ZhciBfMHg1YzNlNDk9XzB4NTFhYWU0O2xldCBfMHhjNjkxYzAsXzB4MWU4ZTk2O3RyeXtfMHgxZThlOTY9XzB4MWM4MGVjKCksXzB4YzY5MWMwPV8weDU2MDFhZltfMHgzOTA2YTddLCFfMHhjNjkxYzB8fF8weDFlOGU5Ni1fMHhjNjkxYzBbJ3RzJ10+MHgxZjQmJl8weGM2OTFjMFtfMHg1YzNlNDkoMHgyNDUpXSYmXzB4YzY5MWMwW18weDVjM2U0OSgweDFkOCldL18weGM2OTFjMFtfMHg1YzNlNDkoMHgyNDUpXTwweDY0PyhfMHg1NjAxYWZbXzB4MzkwNmE3XT1fMHhjNjkxYzA9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgxZThlOTZ9LF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXT17fSk6XzB4MWU4ZTk2LV8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsndHMnXT4weDMyJiZfMHg1NjAxYWZbJ2hpdHMnXVtfMHg1YzNlNDkoMHgyNDUpXSYmXzB4NTYwMWFmW18weDVjM2U0OSgweDIzMCldW18weDVjM2U0OSgweDFkOCldL18weDU2MDFhZlsnaGl0cyddW18weDVjM2U0OSgweDI0NSldPDB4NjQmJihfMHg1NjAxYWZbXzB4NWMzZTQ5KDB4MjMwKV09e30pO2xldCBfMHg3MGIzY2I9W10sXzB4MjE5ZGEyPV8weGM2OTFjMFtfMHg1YzNlNDkoMHgyMjApXXx8XzB4NTYwMWFmWydoaXRzJ11bXzB4NWMzZTQ5KDB4MjIwKV0/XzB4NTMzOTM2Ol8weDU1ODZiZixfMHgxYzU0YWM9XzB4MWM4OTlhPT57dmFyIF8weDMwYmZlMD1fMHg1YzNlNDk7bGV0IF8weDI4ZjZlMD17fTtyZXR1cm4gXzB4MjhmNmUwW18weDMwYmZlMCgweDIzNSldPV8weDFjODk5YVtfMHgzMGJmZTAoMHgyMzUpXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MWJiKV09XzB4MWM4OTlhW18weDMwYmZlMCgweDFiYildLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYzIpXT1fMHgxYzg5OWFbXzB4MzBiZmUwKDB4MWMyKV0sXzB4MjhmNmUwWyd0b3RhbFN0ckxlbmd0aCddPV8weDFjODk5YVsndG90YWxTdHJMZW5ndGgnXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4Mjg2KV09XzB4MWM4OTlhW18weDMwYmZlMCgweDI4NildLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgyOWIpXT1fMHgxYzg5OWFbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYzgpXT0hMHgxLF8weDI4ZjZlMFsnbm9GdW5jdGlvbnMnXT0hXzB4M2M3Zjg4LF8weDI4ZjZlMFsnZGVwdGgnXT0weDEsXzB4MjhmNmUwW18weDMwYmZlMCgweDFkNCldPTB4MCxfMHgyOGY2ZTBbJ2V4cElkJ109XzB4MzBiZmUwKDB4MjkzKSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MWQxKV09J3Jvb3RfZXhwJyxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4Mjc5KV09ITB4MCxfMHgyOGY2ZTBbJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnXT1bXSxfMHgyOGY2ZTBbXzB4MzBiZmUwKDB4MjNjKV09MHgwLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgxYmQpXT0hMHgwLF8weDI4ZjZlMFtfMHgzMGJmZTAoMHgyOWEpXT0weDAsXzB4MjhmNmUwW18weDMwYmZlMCgweDFlOCldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDI4ZjZlMDt9O2Zvcih2YXIgXzB4NDdlZjNmPTB4MDtfMHg0N2VmM2Y8XzB4M2IyZDdlW18weDVjM2U0OSgweDIzZildO18weDQ3ZWYzZisrKV8weDcwYjNjYltfMHg1YzNlNDkoMHgyMTIpXShfMHgxMjY5NjFbXzB4NWMzZTQ5KDB4MjM5KV0oeyd0aW1lTm9kZSc6XzB4NGRkMWI5PT09XzB4NWMzZTQ5KDB4MWQ4KXx8dm9pZCAweDB9LF8weDNiMmQ3ZVtfMHg0N2VmM2ZdLF8weDFjNTRhYyhfMHgyMTlkYTIpLHt9KSk7aWYoXzB4NGRkMWI5PT09XzB4NWMzZTQ5KDB4MjUyKSl7bGV0IF8weDVkOTE5Nj1FcnJvcltfMHg1YzNlNDkoMHgyMGUpXTt0cnl7RXJyb3JbXzB4NWMzZTQ5KDB4MjBlKV09MHgxLzB4MCxfMHg3MGIzY2JbJ3B1c2gnXShfMHgxMjY5NjFbJ3NlcmlhbGl6ZSddKHsnc3RhY2tOb2RlJzohMHgwfSxuZXcgRXJyb3IoKVtfMHg1YzNlNDkoMHgyM2IpXSxfMHgxYzU0YWMoXzB4MjE5ZGEyKSx7J3N0ckxlbmd0aCc6MHgxLzB4MH0pKTt9ZmluYWxseXtFcnJvcltfMHg1YzNlNDkoMHgyMGUpXT1fMHg1ZDkxOTY7fX1yZXR1cm57J21ldGhvZCc6XzB4NWMzZTQ5KDB4MjU2KSwndmVyc2lvbic6XzB4NDQxNWFjLCdhcmdzJzpbeyd0cyc6XzB4NDAyZGRlLCdzZXNzaW9uJzpfMHg2OTE1MjUsJ2FyZ3MnOl8weDcwYjNjYiwnaWQnOl8weDM5MDZhNywnY29udGV4dCc6XzB4NGQ0ZTlmfV19O31jYXRjaChfMHgyNzk5YzApe3JldHVybnsnbWV0aG9kJzpfMHg1YzNlNDkoMHgyNTYpLCd2ZXJzaW9uJzpfMHg0NDE1YWMsJ2FyZ3MnOlt7J3RzJzpfMHg0MDJkZGUsJ3Nlc3Npb24nOl8weDY5MTUyNSwnYXJncyc6W3sndHlwZSc6XzB4NWMzZTQ5KDB4MjVmKSwnZXJyb3InOl8weDI3OTljMCYmXzB4Mjc5OWMwWydtZXNzYWdlJ119XSwnaWQnOl8weDM5MDZhNywnY29udGV4dCc6XzB4NGQ0ZTlmfV19O31maW5hbGx5e3RyeXtpZihfMHhjNjkxYzAmJl8weDFlOGU5Nil7bGV0IF8weDRlMGZhMD1fMHgxYzgwZWMoKTtfMHhjNjkxYzBbJ2NvdW50J10rKyxfMHhjNjkxYzBbXzB4NWMzZTQ5KDB4MWQ4KV0rPV8weDU0NTRjNShfMHgxZThlOTYsXzB4NGUwZmEwKSxfMHhjNjkxYzBbJ3RzJ109XzB4NGUwZmEwLF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVtfMHg1YzNlNDkoMHgyNDUpXSsrLF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVtfMHg1YzNlNDkoMHgxZDgpXSs9XzB4NTQ1NGM1KF8weDFlOGU5NixfMHg0ZTBmYTApLF8weDU2MDFhZlsnaGl0cyddWyd0cyddPV8weDRlMGZhMCwoXzB4YzY5MWMwWydjb3VudCddPjB4MzJ8fF8weGM2OTFjMFsndGltZSddPjB4NjQpJiYoXzB4YzY5MWMwW18weDVjM2U0OSgweDIyMCldPSEweDApLChfMHg1NjAxYWZbXzB4NWMzZTQ5KDB4MjMwKV1bXzB4NWMzZTQ5KDB4MjQ1KV0+MHgzZTh8fF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsndGltZSddPjB4MTJjKSYmKF8weDU2MDFhZltfMHg1YzNlNDkoMHgyMzApXVsncmVkdWNlTGltaXRzJ109ITB4MCk7fX1jYXRjaHt9fX1yZXR1cm4gXzB4MTg1NTU1O30oKF8weDU3NWI2MCxfMHgxMjczOTUsXzB4MWFmM2FhLF8weDNjNzk3YyxfMHgzOGQ3YzcsXzB4OTMwNjRiLF8weDNmODlmYixfMHgyNmQ1NmQsXzB4MmY4YzliLF8weDFiZWE2NCk9Pnt2YXIgXzB4M2Q5OThjPV8weDQzODI4MjtpZihfMHg1NzViNjBbXzB4M2Q5OThjKDB4MjYwKV0pcmV0dXJuIF8weDU3NWI2MFsnX2NvbnNvbGVfbmluamEnXTtpZighWShfMHg1NzViNjAsXzB4MjZkNTZkLF8weDM4ZDdjNykpcmV0dXJuIF8weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXT17J2NvbnNvbGVMb2cnOigpPT57fSwnY29uc29sZVRyYWNlJzooKT0+e30sJ2NvbnNvbGVUaW1lJzooKT0+e30sJ2NvbnNvbGVUaW1lRW5kJzooKT0+e30sJ2F1dG9Mb2cnOigpPT57fSwnYXV0b0xvZ01hbnknOigpPT57fSwnYXV0b1RyYWNlTWFueSc6KCk9Pnt9LCdjb3ZlcmFnZSc6KCk9Pnt9LCdhdXRvVHJhY2UnOigpPT57fSwnYXV0b1RpbWUnOigpPT57fSwnYXV0b1RpbWVFbmQnOigpPT57fX0sXzB4NTc1YjYwW18weDNkOTk4YygweDI2MCldO2xldCBfMHg1ZGFmODc9VyhfMHg1NzViNjApLF8weDVhZTRkMz1fMHg1ZGFmODdbJ2VsYXBzZWQnXSxfMHg0MjhmMjM9XzB4NWRhZjg3W18weDNkOTk4YygweDIxMCldLF8weDQ0MjBhMT1fMHg1ZGFmODdbXzB4M2Q5OThjKDB4Mjc1KV0sXzB4NWJmZGI5PXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4MTBlZTFlPVEoXzB4NTc1YjYwLF8weDJmOGM5YixfMHg1YmZkYjksXzB4OTMwNjRiKSxfMHg1MjY1ODc9XzB4NDk4YzJlPT57XzB4NWJmZGI5Wyd0cyddW18weDQ5OGMyZV09XzB4NDI4ZjIzKCk7fSxfMHg4NDI1ODE9KF8weDE4ZGMzMixfMHgyZjczYTUpPT57dmFyIF8weDQ2NWFkMj1fMHgzZDk5OGM7bGV0IF8weDMxYzljNz1fMHg1YmZkYjlbJ3RzJ11bXzB4MmY3M2E1XTtpZihkZWxldGUgXzB4NWJmZGI5Wyd0cyddW18weDJmNzNhNV0sXzB4MzFjOWM3KXtsZXQgXzB4Mjc1MThkPV8weDVhZTRkMyhfMHgzMWM5YzcsXzB4NDI4ZjIzKCkpO18weDU4MjE5MShfMHgxMGVlMWUoXzB4NDY1YWQyKDB4MWQ4KSxfMHgxOGRjMzIsXzB4NDQyMGExKCksXzB4NGViOTU0LFtfMHgyNzUxOGRdLF8weDJmNzNhNSkpO319LF8weDRlNWFiNj1fMHgzN2IyNTM9Pl8weDE0ZGQ4ZT0+e3ZhciBfMHgyYmI4M2I9XzB4M2Q5OThjO3RyeXtfMHg1MjY1ODcoXzB4MTRkZDhlKSxfMHgzN2IyNTMoXzB4MTRkZDhlKTt9ZmluYWxseXtfMHg1NzViNjBbXzB4MmJiODNiKDB4MWM0KV1bXzB4MmJiODNiKDB4MWQ4KV09XzB4MzdiMjUzO319LF8weDUxZTBmND1fMHg0ZGI1MTk9Pl8weDI0MDBhZT0+e3ZhciBfMHgyZDk2Y2Y9XzB4M2Q5OThjO3RyeXtsZXQgW18weDJiOWU4MixfMHgyZmU3ODldPV8weDI0MDBhZVsnc3BsaXQnXShfMHgyZDk2Y2YoMHgyNzMpKTtfMHg4NDI1ODEoXzB4MmZlNzg5LF8weDJiOWU4MiksXzB4NGRiNTE5KF8weDJiOWU4Mik7fWZpbmFsbHl7XzB4NTc1YjYwWydjb25zb2xlJ11bXzB4MmQ5NmNmKDB4MWVhKV09XzB4NGRiNTE5O319O18weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXT17J2NvbnNvbGVMb2cnOihfMHg0NTRjYzUsXzB4MTkxYTkzKT0+e3ZhciBfMHg0NmEyMDk9XzB4M2Q5OThjO18weDU3NWI2MFtfMHg0NmEyMDkoMHgxYzQpXVtfMHg0NmEyMDkoMHgyNTYpXVtfMHg0NmEyMDkoMHgyNWEpXSE9PSdkaXNhYmxlZExvZycmJl8weDU4MjE5MShfMHgxMGVlMWUoXzB4NDZhMjA5KDB4MjU2KSxfMHg0NTRjYzUsXzB4NDQyMGExKCksXzB4NGViOTU0LF8weDE5MWE5MykpO30sJ2NvbnNvbGVUcmFjZSc6KF8weDY0ZmVlZSxfMHg1YjEwOTkpPT57dmFyIF8weDk2MzAxND1fMHgzZDk5OGM7XzB4NTc1YjYwW18weDk2MzAxNCgweDFjNCldW18weDk2MzAxNCgweDI1NildWyduYW1lJ10hPT1fMHg5NjMwMTQoMHgyOTkpJiZfMHg1ODIxOTEoXzB4MTBlZTFlKF8weDk2MzAxNCgweDI1MiksXzB4NjRmZWVlLF8weDQ0MjBhMSgpLF8weDRlYjk1NCxfMHg1YjEwOTkpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MTRiYTYzPV8weDNkOTk4YztfMHg1NzViNjBbXzB4MTRiYTYzKDB4MWM0KV1bXzB4MTRiYTYzKDB4MWQ4KV09XzB4NGU1YWI2KF8weDU3NWI2MFtfMHgxNGJhNjMoMHgxYzQpXVtfMHgxNGJhNjMoMHgxZDgpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDRmMmVkZT1fMHgzZDk5OGM7XzB4NTc1YjYwW18weDRmMmVkZSgweDFjNCldWyd0aW1lRW5kJ109XzB4NTFlMGY0KF8weDU3NWI2MFtfMHg0ZjJlZGUoMHgxYzQpXVtfMHg0ZjJlZGUoMHgxZWEpXSk7fSwnYXV0b0xvZyc6KF8weDNkZDcyZixfMHg0N2IwMmIpPT57dmFyIF8weDQ4ZTUxZD1fMHgzZDk5OGM7XzB4NTgyMTkxKF8weDEwZWUxZShfMHg0OGU1MWQoMHgyNTYpLF8weDQ3YjAyYixfMHg0NDIwYTEoKSxfMHg0ZWI5NTQsW18weDNkZDcyZl0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDM0ODgzNixfMHg1MTFkNjYpPT57dmFyIF8weDI2YzM4YT1fMHgzZDk5OGM7XzB4NTgyMTkxKF8weDEwZWUxZShfMHgyNmMzOGEoMHgyNTYpLF8weDM0ODgzNixfMHg0NDIwYTEoKSxfMHg0ZWI5NTQsXzB4NTExZDY2KSk7fSwnYXV0b1RyYWNlJzooXzB4NGU1YjJlLF8weDk5ZmYwMyk9Pnt2YXIgXzB4MjU3YzY2PV8weDNkOTk4YztfMHg1ODIxOTEoXzB4MTBlZTFlKF8weDI1N2M2NigweDI1MiksXzB4OTlmZjAzLF8weDQ0MjBhMSgpLF8weDRlYjk1NCxbXzB4NGU1YjJlXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHg0YjUxOWUsXzB4MzU3NDQ0KT0+e3ZhciBfMHgyN2UyNzU9XzB4M2Q5OThjO18weDU4MjE5MShfMHgxMGVlMWUoXzB4MjdlMjc1KDB4MjUyKSxfMHg0YjUxOWUsXzB4NDQyMGExKCksXzB4NGViOTU0LF8weDM1NzQ0NCkpO30sJ2F1dG9UaW1lJzooXzB4MTgwMDFjLF8weDE0YWU5ZSxfMHgxOTI3NTUpPT57XzB4NTI2NTg3KF8weDE5Mjc1NSk7fSwnYXV0b1RpbWVFbmQnOihfMHgyMjkyNDIsXzB4MWI2ZDI2LF8weDRmMDY5NSk9PntfMHg4NDI1ODEoXzB4MWI2ZDI2LF8weDRmMDY5NSk7fSwnY292ZXJhZ2UnOl8weDRkZWM3MT0+e3ZhciBfMHgzMzI1MDc9XzB4M2Q5OThjO18weDU4MjE5MSh7J21ldGhvZCc6XzB4MzMyNTA3KDB4MWRmKSwndmVyc2lvbic6XzB4OTMwNjRiLCdhcmdzJzpbeydpZCc6XzB4NGRlYzcxfV19KTt9fTtsZXQgXzB4NTgyMTkxPUooXzB4NTc1YjYwLF8weDEyNzM5NSxfMHgxYWYzYWEsXzB4M2M3OTdjLF8weDM4ZDdjNyxfMHgxYmVhNjQpLF8weDRlYjk1ND1fMHg1NzViNjBbXzB4M2Q5OThjKDB4MjQ3KV07cmV0dXJuIF8weDU3NWI2MFtfMHgzZDk5OGMoMHgyNjApXTt9KShnbG9iYWxUaGlzLF8weDQzODI4MigweDI0MCksXzB4NDM4MjgyKDB4MjU4KSxfMHg0MzgyODIoMHgyMzMpLF8weDQzODI4MigweDIyOCksJzEuMC4wJyxfMHg0MzgyODIoMHgxZDcpLF8weDQzODI4MigweDI2OCksXzB4NDM4MjgyKDB4MWNmKSxfMHg0MzgyODIoMHgyOGUpKTtmdW5jdGlvbiBfMHgzZmVmKCl7dmFyIF8weDVkYTc4Mj1bJ2xvZ2dlclxcXFx4MjB3ZWJzb2NrZXRcXFxceDIwZXJyb3InLCcnLCdob3N0bmFtZScsJzVNd2RYUkUnLCdvbm9wZW4nLCdfc29ja2V0Jywncm9vdF9leHBfaWQnLCdvbm1lc3NhZ2UnLCdFcnJvcicsJ3BhcmVudCcsJ3BvcCcsJ3NldHRlcicsJ2Rpc2FibGVkVHJhY2UnLCdhbGxTdHJMZW5ndGgnLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCd2YWx1ZU9mJywndW5kZWZpbmVkJywnY2FwcGVkJywnTWFwJywndGhlbicsJ25leHQuanMnLCdjYXBwZWRFbGVtZW50cycsJ2VsZW1lbnRzJywnY2FwcGVkUHJvcHMnLCdyZXNvbHZlR2V0dGVycycsJ19wXycsJ2hydGltZScsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcsJ2FzdHJvJywnc3RyTGVuZ3RoJywnX3NvcnRQcm9wcycsJ2NvbnNvbGUnLCdfd3MnLCdfc2VuZEVycm9yTWVzc2FnZScsJ19oYXNNYXBPbkl0c1BhdGgnLCdzb3J0UHJvcHMnLCdfYWxsb3dlZFRvU2VuZCcsJ1NldCcsJ2RlZmluZVByb3BlcnR5JywnbWV0aG9kJywnc3Vic3RyJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJycsJ21lc3NhZ2UnLCdyb290RXhwcmVzc2lvbicsJ19tYXhDb25uZWN0QXR0ZW1wdENvdW50JywnNzU5NjZkTVFxV04nLCdsZXZlbCcsJ2dsb2JhbCcsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnMTY5NjMzOTI1MDk4NScsJ3RpbWUnLCdwcm90b3R5cGUnLCdyZW1peCcsJ19hZGRGdW5jdGlvbnNOb2RlJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ19hZGRQcm9wZXJ0eScsJ2NvdmVyYWdlJywnUE9TSVRJVkVfSU5GSU5JVFknLCdnZXQnLCdfaW5Ccm93c2VyJywnaG9zdCcsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnbnVtYmVyJywnSFRNTEFsbENvbGxlY3Rpb24nLCdnZXR0ZXInLCdub2RlJywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCd0aW1lRW5kJywnX2lzQXJyYXknLCdXZWJTb2NrZXQnLCdfdHlwZScsJ3RvU3RyaW5nJywnX2lzU2V0Jywnc29ydCcsJ19yZWNvbm5lY3RUaW1lb3V0JywndG9Mb3dlckNhc2UnLCdiaWdpbnQnLCd1bnJlZicsJ19kaXNwb3NlV2Vic29ja2V0Jywnbm9kZU1vZHVsZXMnLCdfYWRkT2JqZWN0UHJvcGVydHknLCdib29sZWFuJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ1N5bWJvbCcsJzEyNjI0NjFTV3Bla1cnLCdfZGF0ZVRvU3RyaW5nJywnaGFzT3duUHJvcGVydHknLCdpbmRleCcsJ3BhdGgnLCduZWdhdGl2ZUluZmluaXR5JywnW29iamVjdFxcXFx4MjBEYXRlXScsJ2VudW1lcmFibGUnLCduYW4nLCd3YXJuJywnbnVsbCcsJ19wcm9jZXNzVHJlZU5vZGVSZXN1bHQnLCdkYXRlJywnX2FkZGl0aW9uYWxNZXRhZGF0YScsJ19jb25uZWN0ZWQnLCdfU3ltYm9sJywnX3NldE5vZGVMYWJlbCcsJ0J1ZmZlcicsJ3N0YWNrVHJhY2VMaW1pdCcsJ2NvbnN0cnVjdG9yJywndGltZVN0YW1wJywnNjYwNjUwOGFVdnlYQScsJ3B1c2gnLCdvYmplY3QnLCdkYXRhJywnX3VuZGVmaW5lZCcsJ2luZGV4T2YnLCdfY29ubmVjdGluZycsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdjcmVhdGUnLCdpc0FycmF5JywnU3RyaW5nJywnMzg0R1lCeUxFJywnbm9GdW5jdGlvbnMnLCdzbGljZScsJ1tvYmplY3RcXFxceDIwU2V0XScsJ3JlZHVjZUxpbWl0cycsJ19oYXNTeW1ib2xQcm9wZXJ0eU9uSXRzUGF0aCcsJ2RlcHRoJywnX29iamVjdFRvU3RyaW5nJywnaW5jbHVkZXMnLCdfaXNQcmltaXRpdmVUeXBlJywncG9ydCcsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ3dlYnBhY2snLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2NsZWFuTm9kZScsJ19yZWdFeHBUb1N0cmluZycsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ3NldCcsJ2pvaW4nLCdlcnJvcicsJ2hpdHMnLCdvbmNsb3NlJywnc3BsaXQnLFxcXCIvaG9tZS9hbnRob255Ly52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0wLjAuMjI4L25vZGVfbW9kdWxlc1xcXCIsJzQ1ODQ0MTE2TlVrckp5JywncHJvcHMnLCdfY29ubmVjdFRvSG9zdE5vdycsJ1JlZ0V4cCcsJ3JlcGxhY2UnLCdzZXJpYWxpemUnLCdOdW1iZXInLCdzdGFjaycsJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50JywnX2hhc1NldE9uSXRzUGF0aCcsJ19nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdsZW5ndGgnLCcxMjcuMC4wLjEnLCdzdHJpbmcnLCdfcXVvdGVkUmVnRXhwJywnY2F0Y2gnLCdhcnJheScsJ2NvdW50JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdfY29uc29sZV9uaW5qYV9zZXNzaW9uJywndHlwZScsJ1tvYmplY3RcXFxceDIwTWFwXScsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywncG9zaXRpdmVJbmZpbml0eScsJ2F1dG9FeHBhbmRQcmV2aW91c09iamVjdHMnLCdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nLCc3MEZFcWJzcScsJzExRXZxYmdZJywnX0hUTUxBbGxDb2xsZWN0aW9uJywnX2tleVN0clJlZ0V4cCcsJ3RyYWNlJywnZnVuY3Rpb24nLCdkZWZhdWx0JywnZ2V0V2ViU29ja2V0Q2xhc3MnLCdsb2cnLCdyZWxvYWQnLCczOTQxNScsJ3ZlcnNpb25zJywnbmFtZScsJ21hcCcsJ3dzOi8vJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCd0b3RhbFN0ckxlbmd0aCcsJ3Vua25vd24nLCdfY29uc29sZV9uaW5qYScsJzE1NTk0bVVlS1dIJywnX1dlYlNvY2tldCcsJzExMTk2MjY0WmVjSnBZJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdfbnVtYmVyUmVnRXhwJywnY29uY2F0JywnX3NldE5vZGVQZXJtaXNzaW9ucycsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJmZWRvcmFcXFwiLFxcXCIxOTIuMTY4LjAuMTExXFxcIl0sJzk1OVFNeW1aWCcsJ19pc05lZ2F0aXZlWmVybycsJ3Rlc3QnLCdfcHJvcGVydHknLCdwcm9jZXNzJywnMjMyNDM5NGZRSUF3UicsJ21hdGNoJywndmFsdWUnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdzZW5kJywnOmxvZ1BvaW50SWQ6JywnX1dlYlNvY2tldENsYXNzJywnbm93JywnZ2V0UHJvdG90eXBlT2YnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19fZXMnKydNb2R1bGUnLCdhdXRvRXhwYW5kJywnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZScsJ3N0cmluZ2lmeScsJ19jb25zb2xlTmluamFBbGxvd2VkVG9TdGFydCcsJ2ZvckVhY2gnLCdfYWRkTG9hZE5vZGUnLCdfc2V0Tm9kZUlkJywnZnVuY05hbWUnLCdjYWxsJywndXJsJywncGFyc2UnLCcuLi4nLCdjdXJyZW50JywnYXV0b0V4cGFuZExpbWl0JywnbG9jYXRpb24nLCdiaW5kJywncGVyZm9ybWFuY2UnLCdyZWFkeVN0YXRlJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCddO18weDNmZWY9ZnVuY3Rpb24oKXtyZXR1cm4gXzB4NWRhNzgyO307cmV0dXJuIF8weDNmZWYoKTt9XCIpO31jYXRjaChlKXt9fTtmdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9O2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTtmdW5jdGlvbiBvb190cygpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lKCk7fWNhdGNoKGUpe319O2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9