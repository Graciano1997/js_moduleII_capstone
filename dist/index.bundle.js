"use strict";
(self["webpackChunkjs_moduleii_capstone"] = self["webpackChunkjs_moduleii_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --light: #e0dcdc;
  --grey: #888;
  --dark: #0e0e22;
  --danger: #ff5b57;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  font-family: 'montserrat', sans-serif;
  text-decoration: none;
  list-style-type: none;
}

/* .main-container{
  position: relative;
} */

.container {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  width: 100%;
  background: var(--light);
}

.main-container {
  display: flex;
  flex-direction: column;
}

.logo {
  display: flex;
  border: 1px solid var(--dark);
  border-radius: 50%;
  margin-left: 2rem;
}

.logo h2 {
  font-size: 1.5rem;
  padding: 0.5rem;
}

.logo h2 span {
  color: rgb(99, 23, 23);
}

.nav-items {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-list {
  display: flex;
}

.nav-list ul {
  display: flex;
  gap: 2rem;
}

.nav-list ul li a {
  color: var(--dark);
  font-weight: 500;
}

.footer-container {
  display: flex;
  border: 2px solid var(--dark);
}

footer {
  margin-top: 5%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
  border: 2px solid var(--dark);
}

.section-main {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
}

.moovie-list-container {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  justify-items: center;
  row-gap: 3%;
}

.moovie-item {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr;
  width: 75%;
  height: 70vh;
}

.moovie-item-likes,
.moovie-item-options {
  display: flex;
  flex-direction: column;
}

.moovie-item-image-container {
  display: grid;
  grid-template: 300px / 1fr;
}

.moovie-item-image-description {
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  padding-top: 1%;
  padding-bottom: 2%;
}

.moovie-item-image {
  width: 100%;
  height: 100%;
}

.moovie-item-options {
  margin-top: 2%;
  padding-bottom: 2%;
  align-items: center;
  gap: 10px;
}

.moovie-item-options button {
  padding: 2%;
  width: 90%;
}

#btn-reserve {
  width: 95%;
}

.heart {
  text-align: center;
  color: black;
  font-size: 30px;
  cursor: pointer;
}

.likes-number {
  margin-top: 20%;
}

.hide {
  display: none;
}

.red {
  color: red;
}

.popup-container {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #d8696788;
  z-index: 10;
  overflow-y: scroll;
}

/* //modal design */
.pop-modal {
  display: flex;
 
  flex-direction: row;
  justify-content: center;
  height: 100%;
  /* position: absolute; */
  /* top: 0; */
  /* height: 100%;
  width: 100%; */
  /* padding: 1rem;
  margin: auto 2rem; */
  
}

.pop-comenters-items {
  background: rgb(233, 225, 225);
  border: 2px solid black;
  padding: 2rem 3rem;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.img-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  
}

.image-popup {
  display: flex;
  width: 60%;
  max-height: 15rem;
  
}

.close-popup {
  background: none;
  border: none;
  outline: none;
  width: max-content;
  height: max-content;
  font-size: 3rem;
  font-weight:700;
}

.movie-details {
  display: flex;
  flex-direction: column;
}

.movie-title {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
}

.more-info {
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  justify-content: space-between;
}

.tag  {
  font-weight: 700;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

 #name {
  display: flex;
  width: max-content;
  padding: 0.3rem 1rem;
  border: 2px solid rgb(18, 17, 17);
}

#comment {
  display: flex;
  width: max-content;
  padding: 0.3rem 1rem;
  border: 2px solid rgb(18, 17, 17);
}

.submit-btn {
  display: flex;
  width: max-content;
  padding: 0.3rem 2rem;
}`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n:root {\r\n  --light: #e0dcdc;\r\n  --grey: #888;\r\n  --dark: #0e0e22;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n/* .main-container{\r\n  position: relative;\r\n} */\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  background: var(--light);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.logo h2 {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.logo h2 span {\r\n  color: rgb(99, 23, 23);\r\n}\r\n\r\n.nav-items {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  padding-right: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n}\r\n\r\n.nav-list ul {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.nav-list ul li a {\r\n  color: var(--dark);\r\n  font-weight: 500;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\nfooter {\r\n  margin-top: 5%;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-block: 2rem;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\n.section-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2%;\r\n}\r\n\r\n.moovie-list-container {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  justify-items: center;\r\n  row-gap: 3%;\r\n}\r\n\r\n.moovie-item {\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr / 1fr;\r\n  width: 75%;\r\n  height: 70vh;\r\n}\r\n\r\n.moovie-item-likes,\r\n.moovie-item-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.moovie-item-image-container {\r\n  display: grid;\r\n  grid-template: 300px / 1fr;\r\n}\r\n\r\n.moovie-item-image-description {\r\n  margin-top: 4%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.moovie-item-image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moovie-item-options {\r\n  margin-top: 2%;\r\n  padding-bottom: 2%;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.moovie-item-options button {\r\n  padding: 2%;\r\n  width: 90%;\r\n}\r\n\r\n#btn-reserve {\r\n  width: 95%;\r\n}\r\n\r\n.heart {\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes-number {\r\n  margin-top: 20%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #d8696788;\r\n  z-index: 10;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* //modal design */\r\n.pop-modal {\r\n  display: flex;\r\n \r\n  flex-direction: row;\r\n  justify-content: center;\r\n  height: 100%;\r\n  /* position: absolute; */\r\n  /* top: 0; */\r\n  /* height: 100%;\r\n  width: 100%; */\r\n  /* padding: 1rem;\r\n  margin: auto 2rem; */\r\n  \r\n}\r\n\r\n.pop-comenters-items {\r\n  background: rgb(233, 225, 225);\r\n  border: 2px solid black;\r\n  padding: 2rem 3rem;\r\n  display: flex;\r\n  height: 100%;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.img-section {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n  \r\n}\r\n\r\n.image-popup {\r\n  display: flex;\r\n  width: 60%;\r\n  max-height: 15rem;\r\n  \r\n}\r\n\r\n.close-popup {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: max-content;\r\n  height: max-content;\r\n  font-size: 3rem;\r\n  font-weight:700;\r\n}\r\n\r\n.movie-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-title {\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.more-info {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 1rem 2rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.tag  {\r\n  font-weight: 700;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  /* gap: 1rem; */\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n #name {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n  border: 2px solid rgb(18, 17, 17);\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n  border: 2px solid rgb(18, 17, 17);\r\n}\r\n\r\n.submit-btn {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 2rem;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiController.js */ "./src/modules/apiController.js");
/* harmony import */ var _modules_likeController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/likeController.js */ "./src/modules/likeController.js");
/* harmony import */ var _modules_popupModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popupModal.js */ "./src/modules/popupModal.js");





(0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_1__.initiatizeAllMoovies)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_2__.initializeLikes)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_2__.likesReader)();
(0,_modules_popupModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
// commentsAlgo();

/***/ }),

/***/ "./src/modules/apiController.js":
/*!**************************************!*\
  !*** ./src/modules/apiController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fullMoovArray: () => (/* binding */ fullMoovArray),
/* harmony export */   initiatizeAllMoovies: () => (/* binding */ initiatizeAllMoovies)
/* harmony export */ });
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");


const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.moovItemImage[id - 1].src = json.image.original;
      _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.moovItemName[id - 1].textContent = json.name;
      _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.moovId[id - 1].value = json.id;
    });
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index < 10; index += 1) {
      displayMoov(index);
    }
  });
};




/***/ }),

/***/ "./src/modules/globalVar.js":
/*!**********************************!*\
  !*** ./src/modules/globalVar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   btnLike: () => (/* binding */ btnLike),
/* harmony export */   involvementApiUrl: () => (/* binding */ involvementApiUrl),
/* harmony export */   moovId: () => (/* binding */ moovId),
/* harmony export */   moovItem: () => (/* binding */ moovItem),
/* harmony export */   moovItemImage: () => (/* binding */ moovItemImage),
/* harmony export */   moovItemName: () => (/* binding */ moovItemName),
/* harmony export */   tvmazeApiUrl: () => (/* binding */ tvmazeApiUrl)
/* harmony export */ });
const tvmazeApiUrl = 'https://api.tvmaze.com/shows/';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/likes';
const moovItemImage = document.querySelectorAll('.moovie-item-image');
const moovItemName = document.querySelectorAll('.item-name');
const moovId = document.querySelectorAll('.moovieId');
const moovItem = document.querySelectorAll('.moovie-item');
const btnLike = document.querySelectorAll('.like');



/***/ }),

/***/ "./src/modules/likeController.js":
/*!***************************************!*\
  !*** ./src/modules/likeController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeLikes: () => (/* binding */ initializeLikes),
/* harmony export */   likesReader: () => (/* binding */ likesReader)
/* harmony export */ });
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");


const likeMoov = async (id) => {
  await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const likesReader = async () => {
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl}/`)
    .then((response) => response.json())
    .then((json) => {
      document.querySelectorAll('.likes-number').forEach((itemLike, index) => {
        itemLike.textContent = (json[index].likes > 1) ? (`${json[index].likes} Likes`) : (`${json[index].likes} Like`);
      });
    });
};

const initializeLikes = () => {
  document.querySelectorAll('.heart').forEach((moovitem, index) => {
    moovitem.addEventListener('click', () => {
      likeMoov(moovitem.nextElementSibling.value);
      document.querySelectorAll('#likeIcon')[index].classList.add('red');
      likesReader();
    });
  });
};




/***/ }),

/***/ "./src/modules/popupModal.js":
/*!***********************************!*\
  !*** ./src/modules/popupModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");

// import { postComment } from './apiComment.js';
// import showComments from './displayComments.js';
// import countComments from './commentsCounter.js';

const popup = () => {
  const popupContainer = document.querySelector('.popup-container');
  const sectionCommenter = document.createElement('section');
  sectionCommenter.className = 'pop-modal';
  sectionCommenter.innerHTML = `
    <article class="pop-comenters-items">
        
        <div class="img-section">

            <img src="" alt="" class="image-popup" />
            <button class="close-popup">X</button>
        </div>
        <div class="movie-details">
            <div class="movie-title">MOVIE NAME</div>
            <P class="movie-summary"> <span class="tag">About: </span>""</P>
        </div>
        <ul class="more-info">
            <li>
                <div class="premiered-date"> <span class="tag">Premiered: </span>2013-03-04</div>
                <div class="end-date"> <span class="tag">Ended: </span>2016-03-04</div>
                <div class="language"> <span class="tag">Language: </span>English</div>
            </li>
            <li>
                <div class="genre"> <span class="tag">Genre: </span>"Drama","Science-Fiction","Thriller"</div>
                <div class="rating"> <span class="tag">Rating: </span>4.56</div>
            </li>
        </ul>
        <div class="comments-holder">
            <h3>Comments (<span class="comments-counter">0</span>)</h3>
            <div class="user-comments" id="comments-sec"></div>
        </div>
        <p class="summary"></p>
        <form action="" class="form" id="form-field">
            <h4>Add a Comment</h4>
            <div class="form-inputs">
            <input
              type="hidden"
              name="formId"
              value=""
              class="moovieId"
            />
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
            />
            <textarea
                cols="30"
                rows="10"
                type="text"
                id="comment"
                placeholder="Your insights..."
                required
            ></textarea>
            <input type="submit" class="submit-btn" value="Submit" />
            </div>
        </form>
    </article>
`;
  popupContainer.appendChild(sectionCommenter);
  const closeIcon = document.querySelector('.close-popup');
  closeIcon.addEventListener('click', () => {
    sectionCommenter.innerHTML = '';
    sectionCommenter.style.display = 'none';
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.classList.add('hide');
  });
};
const getMoov = () => {
  document.querySelectorAll('.comment-btn').forEach((btnMoovComment, index) => {
    btnMoovComment.addEventListener('click', async () => {
      const moovId = document.querySelectorAll('.moovieId')[index].value;
      await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.tvmazeApiUrl + moovId)
        .then((response) => response.json())
        .then((json) => {
          const popupContainer = document.querySelector('.popup-container');
          popupContainer.classList.remove('hide');
          popup();
          document.querySelector('.movie-title').innerHTML = json.name;
          document.querySelector('.image-popup').src = json.image.original;
          document.querySelector('.movie-summary').innerHTML = json.summary;
          document.querySelector('.premiered-date').innerHTML = json.premiered;
          document.querySelector('.end-date').innerHTML = json.ended;
          document.querySelector('.language').innerHTML = json.language;
          document.querySelector('.genre').innerHTML = json.genres;
          document.querySelector('.rating').innerHTML = json.rating.average;
        });
    });
  });
};

// const commentsAlgo = () => {
//   const formField = document.querySelectorAll('.form');

//   formField.forEach((form, index) => {
//     form.addEventListener('submit', async (e) => {
//       const moovId = e.target.getAttribute('.moovieId')[index].value;
//       e.preventDefault();
//       const user = document.getElementById('name');
//       const message = document.getElementById('comment');

//       const latestComment = {
//         item_id: moovId,
//         username: user.value,
//         comment: message.value,
//       };
//       await postComment(latestComment);
//       user.value = '';
//       message.value = '';
//       showComments(moovId);
//     });
//   });
// };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMoov);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssUUFBUSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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QSw2REFBNkQsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ2pILE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFd0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0c7QUFDM0MsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjs7QUFFQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nbG9iYWxWYXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcHVwTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbGlnaHQ6ICNlMGRjZGM7XHJcbiAgLS1ncmV5OiAjODg4O1xyXG4gIC0tZGFyazogIzBlMGUyMjtcclxuICAtLWRhbmdlcjogI2ZmNWI1NztcclxuICAtLXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4vKiAubWFpbi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59ICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbn1cclxuXHJcbi5sb2dvIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoOTksIDIzLCAyMyk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5hdi1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxufVxyXG5cclxuLnNlY3Rpb24tbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4ubW9vdmllLWxpc3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHJvdy1nYXA6IDMlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnI7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1saWtlcyxcclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAzMDBweCAvIDFmcjtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jYnRuLXJlc2VydmUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlrZXMtbnVtYmVyIHtcclxuICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ucG9wdXAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZDg2OTY3ODg7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4vKiAvL21vZGFsIGRlc2lnbiAqL1xyXG4ucG9wLW1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gIC8qIHRvcDogMDsgKi9cclxuICAvKiBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7ICovXHJcbiAgLyogcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW46IGF1dG8gMnJlbTsgKi9cclxuICBcclxufVxyXG5cclxuLnBvcC1jb21lbnRlcnMtaXRlbXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMzMsIDIyNSwgMjI1KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAycmVtIDNyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gIFxyXG59XHJcblxyXG4uaW1hZ2UtcG9wdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXgtaGVpZ2h0OiAxNXJlbTtcclxuICBcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tb3ZpZS10aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubW9yZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YWcgIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyogZ2FwOiAxcmVtOyAqL1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiAjbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4LCAxNywgMTcpO1xyXG59XHJcblxyXG4jY29tbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4LCAxNywgMTcpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDJyZW07XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNDQUFzQztFQUN0QywwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaO2dCQUNjO0VBQ2Q7c0JBQ29COztBQUV0Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0NBRUM7RUFDQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbGlnaHQ6ICNlMGRjZGM7XFxyXFxuICAtLWdyZXk6ICM4ODg7XFxyXFxuICAtLWRhcms6ICMwZTBlMjI7XFxyXFxuICAtLWRhbmdlcjogI2ZmNWI1NztcXHJcXG4gIC0tc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgLS1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC5tYWluLWNvbnRhaW5lcntcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgyIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYig5OSwgMjMsIDIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHVsIGxpIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmcjtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1saWtlcyxcXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMzAwcHggLyAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA0JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXJlc2VydmUge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLW51bWJlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5yZWQge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNkODY5Njc4ODtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvL21vZGFsIGRlc2lnbiAqL1xcclxcbi5wb3AtbW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAvKiB0b3A6IDA7ICovXFxyXFxuICAvKiBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTsgKi9cXHJcXG4gIC8qIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IGF1dG8gMnJlbTsgKi9cXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4ucG9wLWNvbWVudGVycy1pdGVtcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyMjUsIDIyNSk7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNXJlbTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6NzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnICB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvKiBnYXA6IDFyZW07ICovXFxyXFxufVxcclxcblxcclxcbi5mb3JtLWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuICNuYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxOCwgMTcsIDE3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4LCAxNywgMTcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDJyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBpbml0aWF0aXplQWxsTW9vdmllcyB9IGZyb20gJy4vbW9kdWxlcy9hcGlDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfSBmcm9tICcuL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGdldE1vb3YgZnJvbSAnLi9tb2R1bGVzL3BvcHVwTW9kYWwuanMnO1xuXG5pbml0aWF0aXplQWxsTW9vdmllcygpO1xuaW5pdGlhbGl6ZUxpa2VzKCk7XG5saWtlc1JlYWRlcigpO1xuZ2V0TW9vdigpO1xuLy8gY29tbWVudHNBbGdvKCk7IiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWxWYXIuanMnO1xuXG5jb25zdCBmdWxsTW9vdkFycmF5ID0gW107XG5cbmNvbnN0IGRpc3BsYXlNb292ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKFZhcmlhYmxlLnR2bWF6ZUFwaVVybCArIGlkKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBmdWxsTW9vdkFycmF5LnB1c2goanNvbik7XG4gICAgICBWYXJpYWJsZS5tb292SXRlbUltYWdlW2lkIC0gMV0uc3JjID0ganNvbi5pbWFnZS5vcmlnaW5hbDtcbiAgICAgIFZhcmlhYmxlLm1vb3ZJdGVtTmFtZVtpZCAtIDFdLnRleHRDb250ZW50ID0ganNvbi5uYW1lO1xuICAgICAgVmFyaWFibGUubW9vdklkW2lkIC0gMV0udmFsdWUgPSBqc29uLmlkO1xuICAgIH0pO1xufTtcblxuY29uc3QgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCAxMDsgaW5kZXggKz0gMSkge1xuICAgICAgZGlzcGxheU1vb3YoaW5kZXgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpbml0aWF0aXplQWxsTW9vdmllcywgZnVsbE1vb3ZBcnJheSB9O1xuIiwiY29uc3QgdHZtYXplQXBpVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJztcbmNvbnN0IGludm9sdmVtZW50QXBpVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VuRE5IanB4Y2JqbmN4NmJSeVExL2xpa2VzJztcbmNvbnN0IG1vb3ZJdGVtSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKTtcbmNvbnN0IG1vb3ZJdGVtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLW5hbWUnKTtcbmNvbnN0IG1vb3ZJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWVJZCcpO1xuY29uc3QgbW9vdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0nKTtcbmNvbnN0IGJ0bkxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuXG5leHBvcnQge1xuICBtb292SXRlbU5hbWUsXG4gIHR2bWF6ZUFwaVVybCxcbiAgbW9vdkl0ZW1JbWFnZSxcbiAgaW52b2x2ZW1lbnRBcGlVcmwsXG4gIG1vb3ZJZCxcbiAgbW9vdkl0ZW0sXG4gIGJ0bkxpa2UsXG59OyIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcblxuY29uc3QgbGlrZU1vb3YgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goVmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBsaWtlc1JlYWRlciA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9L2ApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1udW1iZXInKS5mb3JFYWNoKChpdGVtTGlrZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbUxpa2UudGV4dENvbnRlbnQgPSAoanNvbltpbmRleF0ubGlrZXMgPiAxKSA/IChgJHtqc29uW2luZGV4XS5saWtlc30gTGlrZXNgKSA6IChgJHtqc29uW2luZGV4XS5saWtlc30gTGlrZWApO1xuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplTGlrZXMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpLmZvckVhY2goKG1vb3ZpdGVtLCBpbmRleCkgPT4ge1xuICAgIG1vb3ZpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGlrZU1vb3YobW9vdml0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlSWNvbicpW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIGxpa2VzUmVhZGVyKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZUxpa2VzLCBsaWtlc1JlYWRlciB9O1xuIiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWxWYXIuanMnO1xuLy8gaW1wb3J0IHsgcG9zdENvbW1lbnQgfSBmcm9tICcuL2FwaUNvbW1lbnQuanMnO1xuLy8gaW1wb3J0IHNob3dDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG4vLyBpbXBvcnQgY291bnRDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzQ291bnRlci5qcyc7XG5cbmNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgY29uc3Qgc2VjdGlvbkNvbW1lbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbkNvbW1lbnRlci5jbGFzc05hbWUgPSAncG9wLW1vZGFsJztcbiAgc2VjdGlvbkNvbW1lbnRlci5pbm5lckhUTUwgPSBgXG4gICAgPGFydGljbGUgY2xhc3M9XCJwb3AtY29tZW50ZXJzLWl0ZW1zXCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLXNlY3Rpb25cIj5cblxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiBjbGFzcz1cImltYWdlLXBvcHVwXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtdGl0bGVcIj5NT1ZJRSBOQU1FPC9kaXY+XG4gICAgICAgICAgICA8UCBjbGFzcz1cIm1vdmllLXN1bW1hcnlcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5BYm91dDogPC9zcGFuPlwiXCI8L1A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbWllcmVkLWRhdGVcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5QcmVtaWVyZWQ6IDwvc3Bhbj4yMDEzLTAzLTA0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZC1kYXRlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+RW5kZWQ6IDwvc3Bhbj4yMDE2LTAzLTA0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+TGFuZ3VhZ2U6IDwvc3Bhbj5FbmdsaXNoPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkdlbnJlOiA8L3NwYW4+XCJEcmFtYVwiLFwiU2NpZW5jZS1GaWN0aW9uXCIsXCJUaHJpbGxlclwiPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPlJhdGluZzogPC9zcGFuPjQuNTY8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1ob2xkZXJcIj5cbiAgICAgICAgICAgIDxoMz5Db21tZW50cyAoPHNwYW4gY2xhc3M9XCJjb21tZW50cy1jb3VudGVyXCI+MDwvc3Bhbj4pPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzXCIgaWQ9XCJjb21tZW50cy1zZWNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPjwvcD5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJmb3JtXCIgaWQ9XCJmb3JtLWZpZWxkXCI+XG4gICAgICAgICAgICA8aDQ+QWRkIGEgQ29tbWVudDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgbmFtZT1cImZvcm1JZFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtb292aWVJZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHMuLi5cIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnRuXCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2FydGljbGU+XG5gO1xuICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uQ29tbWVudGVyKTtcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJyk7XG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZWN0aW9uQ29tbWVudGVyLmlubmVySFRNTCA9ICcnO1xuICAgIHNlY3Rpb25Db21tZW50ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0pO1xufTtcbmNvbnN0IGdldE1vb3YgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpLmZvckVhY2goKGJ0bk1vb3ZDb21tZW50LCBpbmRleCkgPT4ge1xuICAgIGJ0bk1vb3ZDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9vdklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZUlkJylbaW5kZXhdLnZhbHVlO1xuICAgICAgYXdhaXQgZmV0Y2goVmFyaWFibGUudHZtYXplQXBpVXJsICsgbW9vdklkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgcG9wdXAoKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtdGl0bGUnKS5pbm5lckhUTUwgPSBqc29uLm5hbWU7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXBvcHVwJykuc3JjID0ganNvbi5pbWFnZS5vcmlnaW5hbDtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtc3VtbWFyeScpLmlubmVySFRNTCA9IGpzb24uc3VtbWFyeTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbWllcmVkLWRhdGUnKS5pbm5lckhUTUwgPSBqc29uLnByZW1pZXJlZDtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRhdGUnKS5pbm5lckhUTUwgPSBqc29uLmVuZGVkO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpLmlubmVySFRNTCA9IGpzb24ubGFuZ3VhZ2U7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlJykuaW5uZXJIVE1MID0ganNvbi5nZW5yZXM7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpLmlubmVySFRNTCA9IGpzb24ucmF0aW5nLmF2ZXJhZ2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIGNvbnN0IGNvbW1lbnRzQWxnbyA9ICgpID0+IHtcbi8vICAgY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKTtcblxuLy8gICBmb3JtRmllbGQuZm9yRWFjaCgoZm9ybSwgaW5kZXgpID0+IHtcbi8vICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4vLyAgICAgICBjb25zdCBtb292SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJy5tb292aWVJZCcpW2luZGV4XS52YWx1ZTtcbi8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuLy8gICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG5cbi8vICAgICAgIGNvbnN0IGxhdGVzdENvbW1lbnQgPSB7XG4vLyAgICAgICAgIGl0ZW1faWQ6IG1vb3ZJZCxcbi8vICAgICAgICAgdXNlcm5hbWU6IHVzZXIudmFsdWUsXG4vLyAgICAgICAgIGNvbW1lbnQ6IG1lc3NhZ2UudmFsdWUsXG4vLyAgICAgICB9O1xuLy8gICAgICAgYXdhaXQgcG9zdENvbW1lbnQobGF0ZXN0Q29tbWVudCk7XG4vLyAgICAgICB1c2VyLnZhbHVlID0gJyc7XG4vLyAgICAgICBtZXNzYWdlLnZhbHVlID0gJyc7XG4vLyAgICAgICBzaG93Q29tbWVudHMobW9vdklkKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG4vLyB9O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb292OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==