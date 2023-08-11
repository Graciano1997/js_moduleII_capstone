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

.container {
  display: flex;
  flex-direction: column;
  background: rgba(47, 47, 47, 0.848);
}

header {
  display: flex;
  width: 100%;
  background: var(--light);
}

.main-container {
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  height: max-content;
}

.logo {
  display: flex;
  border: 1px solid var(--dark);
  border-radius: 50%;
  margin-left: 2rem;
  cursor: pointer;
  transition: all 1s 0.3s  ease-in-out;
}

.logo:hover {
  transform: scale(1.2);
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
  justify-content: space-around;
}

.nav-list {
  padding-left: 2rem;
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

button {
  border: transparent;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.831);
  border-radius: 10px;
  color: #ffff;
  text-align: center;
  padding: 2%;
}

.footer-container {
  display: flex;
  border: 2px solid var(--dark);
}

.section-main {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  height: max-content;
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
  width: 20vw;
  height: 70vh;
  background: #ffff;
  padding: 4%;
  border-radius: 15px;
  transition: all 2s 1s ease-in-out;
}

.moovie-item:hover {
  box-shadow: 5px 5px 0  black inset;
}

.moovie-item-likes,
.moovie-item-options {
  display: flex;
  flex-direction: column;
}

.moovie-item-image-container {
  display: grid;
  grid-template: 50vh / 1fr;
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
  transition: 0.5s 1s ease-in-out;
}

.heart:hover {
  color: red;
  transform: scale(1.3);
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

.noComment {
  align-items: center;
  padding-top: 4%;
  text-align: center;
  color: var(--light);
}

.popup-container {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(233, 225, 225, 0.757);
  z-index: 10;
  backdrop-filter: blur(10px);
  overflow: scroll;
  overflow-x: hidden;
}

.pop-modal {
  position: relative;
  margin: 2rem;
  margin-top: 1%;
  margin-bottom: 1rem;
  background: rgba(114, 103, 103, 0.216);
  border-radius: 15px;
  padding: 1%;
}

.pop-comenters-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-section {
  margin-top: 1%;
  width: 60vw;
  height: 75vh;
}

.image-popup {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
}

.close-popup {
  background: none;
  border: none;
  outline: none;
  width: max-content;
  height: max-content;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  padding-right: 5%;
  color: rgba(0, 0, 0, 0.851);
  transition: all 1s 1s ease-in-out;
}

.close-popup:hover {
  transform: scale(1.2);
  color: rgba(99, 23, 23, 0.813);
}

.movie-details {
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.527);
  color: white;
  width: 60vw;
}

.movie-title,
.moovie-new-comment {
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2%;
}

.tag {
  font-weight: 700;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-bottom: 1%;
  font-size: 14px;
  font-family: "lato", sans-serif;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form input {
  padding: 2%;
}

.form textarea {
  padding: 4%;
}

#name {
  display: flex;
  width: max-content;
  padding: 0.3rem 1rem;
}

#comment {
  display: flex;
  width: max-content;
  padding: 0.3rem 1rem;
}

.btnclose-section {
  position: absolute;
  top: 1%;
  left: 93%;
}

.moovie-name,
.moovie-comment,
.moovie-new-comment-title {
  font-size: 3rem;
  color: white;
  text-align: center;
}

.moovie-comment,
.moovie-new-comment-title {
  font-size: 2rem;
}

.moovie-new-comment-title {
  padding-top: 1%;
}

.movie-resume {
  margin-top: 1%;
  padding: 2%;
}

.more-info {
  display: flex;
  width: 100%;
  padding: 2%;
  justify-content: space-between;
}

.more-info li div {
  margin-top: 2%;
  margin-bottom: 2%;
}

.movie-summary {
  font-size: 1rem;
  text-align: justify;
}

.fa-star {
  color: yellow;
}

.genre-container {
  width: 100%;
}

.info-2 {
  padding-right: 3%;
}

.user-comments-container,
.moovie-form-comment {
  margin-top: 2%;
  padding-left: 4%;
}

.user-comments-container {
  background: rgba(8, 8, 8, 0.671);
  color: #fff;
  padding-bottom: 0.5%;
}

.user-comments {
  height: 15vh;
  overflow-y: scroll;
}

.moovie-form-comment {
  padding-top: 1%;
  padding-bottom: 0.5%;
}

.user-new-comments-container {
  margin-top: 1%;
}

.comments-container {
  margin-top: 1%;
  width: 60vw;
  background: rgba(0, 0, 0, 0.178);
}

.btnComment,
.btn-reserve {
  background: rgba(0, 0, 0, 0.831);
  border-radius: 10px;
  color: #ffff;
  text-align: center;
  padding: 2%;
}

.btn-reserve {
  background: rgba(99, 23, 23, 0.813);
}

.date {
  font-style: oblique;
  text-decoration: underline;
}

footer {
  margin-top: 12%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
  color: #ffff;
}

footer p {
  transition: all 0.5s 2s ease-in-out;
}

.user-comments p {
  margin-top: 2%;
  margin-bottom: 1%;
}

footer p:hover {
  transform: scale(1.5);
}

.comment {
  color: black;
  background-color: rgba(255, 255, 255, 0.646);
}
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --light: #e0dcdc;\r\n  --grey: #888;\r\n  --dark: #0e0e22;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(47, 47, 47, 0.848);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  background: var(--light);\r\n}\r\n\r\n.main-container {\r\n  margin-top: 3%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: max-content;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n  transition: all 1s 0.3s  ease-in-out;\r\n}\r\n\r\n.logo:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.logo h2 {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.logo h2 span {\r\n  color: rgb(99, 23, 23);\r\n}\r\n\r\n.nav-items {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  padding-right: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-list {\r\n  padding-left: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.nav-list ul {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.nav-list ul li a {\r\n  color: var(--dark);\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  border: transparent;\r\n  cursor: pointer;\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\n.section-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2%;\r\n  height: max-content;\r\n}\r\n\r\n.moovie-list-container {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  justify-items: center;\r\n  row-gap: 3%;\r\n}\r\n\r\n.moovie-item {\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr / 1fr;\r\n  width: 20vw;\r\n  height: 70vh;\r\n  background: #ffff;\r\n  padding: 4%;\r\n  border-radius: 15px;\r\n  transition: all 2s 1s ease-in-out;\r\n}\r\n\r\n.moovie-item:hover {\r\n  box-shadow: 5px 5px 0  black inset;\r\n}\r\n\r\n.moovie-item-likes,\r\n.moovie-item-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.moovie-item-image-container {\r\n  display: grid;\r\n  grid-template: 50vh / 1fr;\r\n}\r\n\r\n.moovie-item-image-description {\r\n  margin-top: 4%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n.moovie-item-image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moovie-item-options {\r\n  margin-top: 2%;\r\n  padding-bottom: 2%;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.moovie-item-options button {\r\n  padding: 2%;\r\n  width: 90%;\r\n}\r\n\r\n#btn-reserve {\r\n  width: 95%;\r\n}\r\n\r\n.heart {\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  transition: 0.5s 1s ease-in-out;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-number {\r\n  margin-top: 20%;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.noComment {\r\n  align-items: center;\r\n  padding-top: 4%;\r\n  text-align: center;\r\n  color: var(--light);\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: rgba(233, 225, 225, 0.757);\r\n  z-index: 10;\r\n  backdrop-filter: blur(10px);\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.pop-modal {\r\n  position: relative;\r\n  margin: 2rem;\r\n  margin-top: 1%;\r\n  margin-bottom: 1rem;\r\n  background: rgba(114, 103, 103, 0.216);\r\n  border-radius: 15px;\r\n  padding: 1%;\r\n}\r\n\r\n.pop-comenters-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.img-section {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  height: 75vh;\r\n}\r\n\r\n.image-popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: fill;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-popup {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: max-content;\r\n  height: max-content;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-right: 5%;\r\n  color: rgba(0, 0, 0, 0.851);\r\n  transition: all 1s 1s ease-in-out;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.2);\r\n  color: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.movie-details {\r\n  margin-top: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  width: 60vw;\r\n}\r\n\r\n.movie-title,\r\n.moovie-new-comment {\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  margin-top: 2%;\r\n}\r\n\r\n.tag {\r\n  font-weight: 700;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.form input {\r\n  padding: 2%;\r\n}\r\n\r\n.form textarea {\r\n  padding: 4%;\r\n}\r\n\r\n#name {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.btnclose-section {\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 93%;\r\n}\r\n\r\n.moovie-name,\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.moovie-new-comment-title {\r\n  padding-top: 1%;\r\n}\r\n\r\n.movie-resume {\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n}\r\n\r\n.more-info {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 2%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.more-info li div {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.movie-summary {\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n.fa-star {\r\n  color: yellow;\r\n}\r\n\r\n.genre-container {\r\n  width: 100%;\r\n}\r\n\r\n.info-2 {\r\n  padding-right: 3%;\r\n}\r\n\r\n.user-comments-container,\r\n.moovie-form-comment {\r\n  margin-top: 2%;\r\n  padding-left: 4%;\r\n}\r\n\r\n.user-comments-container {\r\n  background: rgba(8, 8, 8, 0.671);\r\n  color: #fff;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-comments {\r\n  height: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.moovie-form-comment {\r\n  padding-top: 1%;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-new-comments-container {\r\n  margin-top: 1%;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  background: rgba(0, 0, 0, 0.178);\r\n}\r\n\r\n.btnComment,\r\n.btn-reserve {\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.btn-reserve {\r\n  background: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.date {\r\n  font-style: oblique;\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  margin-top: 12%;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-block: 2rem;\r\n  color: #ffff;\r\n}\r\n\r\nfooter p {\r\n  transition: all 0.5s 2s ease-in-out;\r\n}\r\n\r\n.user-comments p {\r\n  margin-top: 2%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\nfooter p:hover {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.comment {\r\n  color: black;\r\n  background-color: rgba(255, 255, 255, 0.646);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ "./src/modules/itemCounter.js");



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
  _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.mooviesNumber.textContent = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.moovie-list-container');
};




/***/ }),

/***/ "./src/modules/commentController.js":
/*!******************************************!*\
  !*** ./src/modules/commentController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentMoov: () => (/* binding */ commentMoov),
/* harmony export */   commentsReader: () => (/* binding */ commentsReader)
/* harmony export */ });
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ "./src/modules/itemCounter.js");



const createCommenter = (data, type) => {
  const el = document.createElement(type);
  el.innerHTML = `<b class='date'>${data.creation_date}</b> ${data.username} : <span class ="comment">’’ ${data.comment} ’’</span>`;
  return el;
};

const noCommentFunction = () => {
  const el = document.createElement('p');
  el.classList.add('noComment');
  el.textContent = 'No comments !!';
  return el;
};
const commentsReader = async (id) => {
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl}comments?item_id=${id}`)
    .then((response) => response.json())
    .then((json) => {
      while (document.querySelector('.user-comments').firstChild) {
        document.querySelector('.user-comments').firstChild.remove();
      }
      if (json.length >= 0) {
        json.forEach((comment) => {
          document.querySelector('.user-comments').append(createCommenter(comment, 'p'));
        });
        document.querySelector('#commentsCounter').innerHTML = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])('#comments-item');
      } else { document.querySelector('.user-comments').append(noCommentFunction()); }
    });
};

const commentMoov = async (commentObject) => {
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl}comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: commentObject.item_id,
      username: commentObject.username,
      comment: commentObject.comment,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  commentsReader(commentObject.item_id);
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
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   involvementApiUrl: () => (/* binding */ involvementApiUrl),
/* harmony export */   moovId: () => (/* binding */ moovId),
/* harmony export */   moovIdPopup: () => (/* binding */ moovIdPopup),
/* harmony export */   moovItem: () => (/* binding */ moovItem),
/* harmony export */   moovItemImage: () => (/* binding */ moovItemImage),
/* harmony export */   moovItemName: () => (/* binding */ moovItemName),
/* harmony export */   moovieList: () => (/* binding */ moovieList),
/* harmony export */   mooviesNumber: () => (/* binding */ mooviesNumber),
/* harmony export */   tvmazeApiUrl: () => (/* binding */ tvmazeApiUrl),
/* harmony export */   userCommentPopup: () => (/* binding */ userCommentPopup),
/* harmony export */   userNamePopup: () => (/* binding */ userNamePopup)
/* harmony export */ });
const tvmazeApiUrl = 'https://api.tvmaze.com/shows/';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/';
// https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/comments
const moovItemImage = document.querySelectorAll('.moovie-item-image');
const moovItemName = document.querySelectorAll('.item-name');
const moovId = document.querySelectorAll('.moovieId');
const moovItem = document.querySelectorAll('.moovie-item');
const btnLike = document.querySelectorAll('.like');
const moovieList = document.querySelectorAll('.moovie-list-container');
const mooviesNumber = document.querySelector('.mooviesNumber');
const moovIdPopup = document.querySelector('.moovId');
const userCommentPopup = document.querySelector('#userComment');
const userNamePopup = document.querySelector('userName');
const form = document.querySelector('.form');



/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counterItem = (containerIdentificator) => {
  const element = document.querySelector(containerIdentificator);
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterItem);

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
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const likesReader = async () => {
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.involvementApiUrl}likes/`)
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
/* harmony import */ var _commentController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentController.js */ "./src/modules/commentController.js");
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");



const commentListener = () => {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      item_id: document.querySelector('.moovId').value,
      username: document.querySelector('#userName').value,
      comment: document.querySelector('#userComment').value,
    };
    (0,_commentController_js__WEBPACK_IMPORTED_MODULE_0__.commentMoov)(data);
    document.querySelector('.form').reset();
  });
};

const popup = () => {
  const popupContainer = document.querySelector('.popup-container');
  const sectionCommenter = document.createElement('section');
  sectionCommenter.className = 'pop-modal';
  sectionCommenter.innerHTML = `
  <div class="btnclose-section">
        <button class="close-popup">X</button>
        </div>
    <section class="pop-comenters-items">
        <div class="img-section">
            <img src="" alt="" class="image-popup" />
        </div>
        <div class="movie-details">
            <div class="movie-title"><h1 class="moovie-name">MOVIE NAME</h1></div>
            <div class="movie-resume">
            <p class="movie-summary"> <span class="tag">About: </span>""</p>
            </div>
            <ul class="more-info">
            <li>
                <div class="premiered-date"> <span class="tag">Premiered: </span>2013-03-04</div>
                <div class="end-date"> <span class="tag">Ended: </span>2016-03-04</div>
                <div class="language"> <span class="tag">Language: </span>English</div>
            </li>
            <li class="info-2">
                <div class="genre-container">
                <h3 class="genre"></h3>
                </div>
                <div class="rating"> <span class="tag">Rating: </span>4.56</div>
                <input type="hidden" name="idmoovie" value="" class="moovId">
            </li>
        </ul> 
        </div>
        <div class="comments-container">
            <div class="movie-title"><h2 class="moovie-comment">Comments(<span id="commentsCounter">0</span>)</h2></div>
            <div class="user-comments-container" id="comments-sec">
            <div class="user-comments" id="comments-item">
            </div>
            </div>
        <div class="user-new-comments-container">
        <div class="moovie-new-comment"><h2 class="moovie-new-comment-title">Add a Comment</h2></div>
        <div class="moovie-form-comment">
        <form class="form" id="form-container">
        <div class="form-inputs">
        <input
        type="text"
        name="name"
        id="userName"
        placeholder="Your name"
        required
        />
        <textarea
        cols="30"
        rows="10"
        type="text"
        id="userComment"
        placeholder="Your insights..."
        required></textarea>
        <button class="submit-btn" type="submit">Comment</button>
        </div>
        </form>
        </div>
        </div>
    </div>
    </section>
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
  document.querySelectorAll('.btnComment').forEach((btnMoovComment, index) => {
    btnMoovComment.addEventListener('click', async () => {
      const moovId = document.querySelectorAll('.moovieId')[index].value;
      await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_1__.tvmazeApiUrl + moovId)
        .then((response) => response.json())
        .then((json) => {
          const popupContainer = document.querySelector('.popup-container');
          popupContainer.classList.remove('hide');
          popup();
          commentListener();
          (0,_commentController_js__WEBPACK_IMPORTED_MODULE_0__.commentsReader)(json.id);
          document.querySelector('.moovId').value = json.id;
          document.querySelector('.moovie-name').innerHTML = json.name;
          document.querySelector('.image-popup').src = json.image.original;
          document.querySelector('.movie-summary').innerHTML = json.summary;
          document.querySelector('.premiered-date').innerHTML = `Premiered Date :${json.premiered}`;
          document.querySelector('.end-date').innerHTML = `End Date:${json.ended}`;
          document.querySelector('.language').innerHTML = `Language :${json.language}`;
          document.querySelector('.genre').innerHTML = `Genre:${json.genres}`;
          document.querySelector('.rating').innerHTML = `Rating: ${"<i class='fa-solid fa-star'></i>".repeat(Math.floor(json.rating.average))}`;
        });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMoov);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxL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Q0g7O0FBRUEsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcGlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvY29tbWVudENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nbG9iYWxWYXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXBNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tbGlnaHQ6ICNlMGRjZGM7XHJcbiAgLS1ncmV5OiAjODg4O1xyXG4gIC0tZGFyazogIzBlMGUyMjtcclxuICAtLWRhbmdlcjogI2ZmNWI1NztcclxuICAtLXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAtLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NywgNDcsIDQ3LCAwLjg0OCk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDAuM3MgIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4ubG9nbyBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ubG9nbyBoMiBzcGFuIHtcclxuICBjb2xvcjogcmdiKDk5LCAyMywgMjMpO1xyXG59XHJcblxyXG4ubmF2LWl0ZW1zIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLm5hdi1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5hdi1saXN0IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLm5hdi1saXN0IHVsIGxpIGEge1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmZvb3Rlci1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4ubW9vdmllLWxpc3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHJvdy1nYXA6IDMlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnI7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW06aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCAgYmxhY2sgaW5zZXQ7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1saWtlcyxcclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiA1MHZoIC8gMWZyO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2UtZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiNidG4tcmVzZXJ2ZSB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmhlYXJ0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhlYXJ0OmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuLmxpa2VzLW51bWJlciB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5vQ29tbWVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMjUsIDIyNSwgMC43NTcpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcC1tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxMDMsIDEwMywgMC4yMTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5wb3AtY29tZW50ZXJzLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbi5pbWFnZS1wb3B1cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1MSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBjb2xvcjogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG59XHJcblxyXG4ubW92aWUtdGl0bGUsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJsYXRvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uZm9ybSB0ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogNCU7XHJcbn1cclxuXHJcbiNuYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuI2NvbW1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4uYnRuY2xvc2Utc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMSU7XHJcbiAgbGVmdDogOTMlO1xyXG59XHJcblxyXG4ubW9vdmllLW5hbWUsXHJcbi5tb292aWUtY29tbWVudCxcclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb292aWUtY29tbWVudCxcclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5tb3ZpZS1yZXN1bWUge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ubW9yZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1vcmUtaW5mbyBsaSBkaXYge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubW92aWUtc3VtbWFyeSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5mYS1zdGFyIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZ2VucmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm8tMiB7XHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lcixcclxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4LCA4LCA4LCAwLjY3MSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzIHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xyXG59XHJcblxyXG4udXNlci1uZXctY29tbWVudHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XHJcbn1cclxuXHJcbi5idG5Db21tZW50LFxyXG4uYnRuLXJlc2VydmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTIlO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnVzZXItY29tbWVudHMgcCB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbmZvb3RlciBwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0Nik7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7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QTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0FBQzlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tbGlnaHQ6ICNlMGRjZGM7XFxyXFxuICAtLWdyZXk6ICM4ODg7XFxyXFxuICAtLWRhcms6ICMwZTBlMjI7XFxyXFxuICAtLWRhbmdlcjogI2ZmNWI1NztcXHJcXG4gIC0tc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgLS1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuODQ4KTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxcyAwLjNzICBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ286aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDIgc3BhbiB7XFxyXFxuICBjb2xvcjogcmdiKDk5LCAyMywgMjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB1bCBsaSBhIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyO1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcXHJcXG4gIHBhZGRpbmc6IDQlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCAgYmxhY2sgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1saWtlcyxcXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogNTB2aCAvIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1vcHRpb25zIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbiNidG4tcmVzZXJ2ZSB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1udW1iZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5ub0NvbW1lbnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA0JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI1LCAyMjUsIDAuNzU3KTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTAzLCAxMDMsIDAuMjE2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1jb21lbnRlcnMtaXRlbXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLXBvcHVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1MSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjb2xvcjogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxufVxcclxcblxcclxcbi50YWcge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcImxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1pbnB1dHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5jbG9zZS1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMSU7XFxyXFxuICBsZWZ0OiA5MyU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbmFtZSxcXHJcXG4ubW9vdmllLWNvbW1lbnQsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtY29tbWVudCxcXHJcXG4ubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1yZXN1bWUge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyBsaSBkaXYge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXN1bW1hcnkge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXN0YXIge1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tMiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMtY29udGFpbmVyLFxcclxcbi5tb292aWUtZm9ybS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgOCwgOCwgMC42NzEpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMge1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxyXFxufVxcclxcblxcclxcbi5idG5Db21tZW50LFxcclxcbi5idG4tcmVzZXJ2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZXNlcnZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMiU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHAge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ2KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCB7IGluaXRpYXRpemVBbGxNb292aWVzIH0gZnJvbSAnLi9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUxpa2VzLCBsaWtlc1JlYWRlciB9IGZyb20gJy4vbW9kdWxlcy9saWtlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgZ2V0TW9vdiBmcm9tICcuL21vZHVsZXMvcG9wdXBNb2RhbC5qcyc7XG5cbmluaXRpYXRpemVBbGxNb292aWVzKCk7XG5pbml0aWFsaXplTGlrZXMoKTtcbmxpa2VzUmVhZGVyKCk7XG5nZXRNb292KCk7IiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWxWYXIuanMnO1xuaW1wb3J0IGNvdW50ZXJJdGVtIGZyb20gJy4vaXRlbUNvdW50ZXIuanMnO1xuXG5jb25zdCBmdWxsTW9vdkFycmF5ID0gW107XG5cbmNvbnN0IGRpc3BsYXlNb292ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKFZhcmlhYmxlLnR2bWF6ZUFwaVVybCArIGlkKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBmdWxsTW9vdkFycmF5LnB1c2goanNvbik7XG4gICAgICBWYXJpYWJsZS5tb292SXRlbUltYWdlW2lkIC0gMV0uc3JjID0ganNvbi5pbWFnZS5vcmlnaW5hbDtcbiAgICAgIFZhcmlhYmxlLm1vb3ZJdGVtTmFtZVtpZCAtIDFdLnRleHRDb250ZW50ID0ganNvbi5uYW1lO1xuICAgICAgVmFyaWFibGUubW9vdklkW2lkIC0gMV0udmFsdWUgPSBqc29uLmlkO1xuICAgIH0pO1xufTtcblxuY29uc3QgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMgPSAoKSA9PiB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCAxMDsgaW5kZXggKz0gMSkge1xuICAgICAgZGlzcGxheU1vb3YoaW5kZXgpO1xuICAgIH1cbiAgfSk7XG4gIFZhcmlhYmxlLm1vb3ZpZXNOdW1iZXIudGV4dENvbnRlbnQgPSBjb3VudGVySXRlbSgnLm1vb3ZpZS1saXN0LWNvbnRhaW5lcicpO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMsIGZ1bGxNb292QXJyYXkgfTtcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcbmltcG9ydCBjb3VudGVySXRlbSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcblxuY29uc3QgY3JlYXRlQ29tbWVudGVyID0gKGRhdGEsIHR5cGUpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbC5pbm5lckhUTUwgPSBgPGIgY2xhc3M9J2RhdGUnPiR7ZGF0YS5jcmVhdGlvbl9kYXRlfTwvYj4gJHtkYXRhLnVzZXJuYW1lfSA6IDxzcGFuIGNsYXNzID1cImNvbW1lbnRcIj7igJnigJkgJHtkYXRhLmNvbW1lbnR9IOKAmeKAmTwvc3Bhbj5gO1xuICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBub0NvbW1lbnRGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ25vQ29tbWVudCcpO1xuICBlbC50ZXh0Q29udGVudCA9ICdObyBjb21tZW50cyAhISc7XG4gIHJldHVybiBlbDtcbn07XG5jb25zdCBjb21tZW50c1JlYWRlciA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1jb21tZW50cz9pdGVtX2lkPSR7aWR9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgd2hpbGUgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWNvbW1lbnRzJykuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoanNvbi5sZW5ndGggPj0gMCkge1xuICAgICAgICBqc29uLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZChjcmVhdGVDb21tZW50ZXIoY29tbWVudCwgJ3AnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHNDb3VudGVyJykuaW5uZXJIVE1MID0gY291bnRlckl0ZW0oJyNjb21tZW50cy1pdGVtJyk7XG4gICAgICB9IGVsc2UgeyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZChub0NvbW1lbnRGdW5jdGlvbigpKTsgfVxuICAgIH0pO1xufTtcblxuY29uc3QgY29tbWVudE1vb3YgPSBhc3luYyAoY29tbWVudE9iamVjdCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBjb21tZW50T2JqZWN0Lml0ZW1faWQsXG4gICAgICB1c2VybmFtZTogY29tbWVudE9iamVjdC51c2VybmFtZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnRPYmplY3QuY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgfSk7XG4gIGNvbW1lbnRzUmVhZGVyKGNvbW1lbnRPYmplY3QuaXRlbV9pZCk7XG59O1xuXG5leHBvcnQgeyBjb21tZW50TW9vdiwgY29tbWVudHNSZWFkZXIgfTtcbiIsImNvbnN0IHR2bWF6ZUFwaVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyc7XG5jb25zdCBpbnZvbHZlbWVudEFwaVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VbkROSGpweGNiam5jeDZiUnlRMS8nO1xuLy8gaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVW5ETkhqcHhjYmpuY3g2YlJ5UTEvY29tbWVudHNcbmNvbnN0IG1vb3ZJdGVtSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKTtcbmNvbnN0IG1vb3ZJdGVtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLW5hbWUnKTtcbmNvbnN0IG1vb3ZJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWVJZCcpO1xuY29uc3QgbW9vdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0nKTtcbmNvbnN0IGJ0bkxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xuY29uc3QgbW9vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtbGlzdC1jb250YWluZXInKTtcbmNvbnN0IG1vb3ZpZXNOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdmllc051bWJlcicpO1xuY29uc3QgbW9vdklkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJyk7XG5jb25zdCB1c2VyQ29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJDb21tZW50Jyk7XG5jb25zdCB1c2VyTmFtZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndXNlck5hbWUnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG5leHBvcnQge1xuICBtb292SXRlbU5hbWUsXG4gIHR2bWF6ZUFwaVVybCxcbiAgbW9vdkl0ZW1JbWFnZSxcbiAgaW52b2x2ZW1lbnRBcGlVcmwsXG4gIG1vb3ZJZCxcbiAgbW9vdkl0ZW0sXG4gIGJ0bkxpa2UsXG4gIG1vb3ZpZUxpc3QsXG4gIG1vb3ZpZXNOdW1iZXIsXG4gIG1vb3ZJZFBvcHVwLFxuICBmb3JtLFxuICB1c2VyQ29tbWVudFBvcHVwLFxuICB1c2VyTmFtZVBvcHVwLFxufTsiLCJjb25zdCBjb3VudGVySXRlbSA9IChjb250YWluZXJJZGVudGlmaWNhdG9yKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcklkZW50aWZpY2F0b3IpO1xuICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRlckl0ZW07IiwiaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWxWYXIuanMnO1xuXG5jb25zdCBsaWtlTW9vdiA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBsaWtlc1JlYWRlciA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9bGlrZXMvYClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzLW51bWJlcicpLmZvckVhY2goKGl0ZW1MaWtlLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtTGlrZS50ZXh0Q29udGVudCA9IChqc29uW2luZGV4XS5saWtlcyA+IDEpID8gKGAke2pzb25baW5kZXhdLmxpa2VzfSBMaWtlc2ApIDogKGAke2pzb25baW5kZXhdLmxpa2VzfSBMaWtlYCk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVMaWtlcyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0JykuZm9yRWFjaCgobW9vdml0ZW0sIGluZGV4KSA9PiB7XG4gICAgbW9vdml0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsaWtlTW9vdihtb292aXRlbS5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpa2VJY29uJylbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgICAgbGlrZXNSZWFkZXIoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpbml0aWFsaXplTGlrZXMsIGxpa2VzUmVhZGVyIH07XG4iLCJpbXBvcnQgeyBjb21tZW50TW9vdiwgY29tbWVudHNSZWFkZXIgfSBmcm9tICcuL2NvbW1lbnRDb250cm9sbGVyLmpzJztcbmltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcblxuY29uc3QgY29tbWVudExpc3RlbmVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtX2lkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJykudmFsdWUsXG4gICAgICB1c2VybmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJOYW1lJykudmFsdWUsXG4gICAgICBjb21tZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckNvbW1lbnQnKS52YWx1ZSxcbiAgICB9O1xuICAgIGNvbW1lbnRNb292KGRhdGEpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJykucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb3B1cCA9ICgpID0+IHtcbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XG4gIGNvbnN0IHNlY3Rpb25Db21tZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNlY3Rpb25Db21tZW50ZXIuY2xhc3NOYW1lID0gJ3BvcC1tb2RhbCc7XG4gIHNlY3Rpb25Db21tZW50ZXIuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwiYnRuY2xvc2Utc2VjdGlvblwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5YPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwicG9wLWNvbWVudGVycy1pdGVtc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWFnZS1wb3B1cFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+PGgxIGNsYXNzPVwibW9vdmllLW5hbWVcIj5NT1ZJRSBOQU1FPC9oMT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1yZXN1bWVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtc3VtbWFyeVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkFib3V0OiA8L3NwYW4+XCJcIjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibW9yZS1pbmZvXCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZW1pZXJlZC1kYXRlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+UHJlbWllcmVkOiA8L3NwYW4+MjAxMy0wMy0wNDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmQtZGF0ZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkVuZGVkOiA8L3NwYW4+MjAxNi0wMy0wNDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYW5ndWFnZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkxhbmd1YWdlOiA8L3NwYW4+RW5nbGlzaDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImluZm8tMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJnZW5yZVwiPjwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPlJhdGluZzogPC9zcGFuPjQuNTY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZG1vb3ZpZVwiIHZhbHVlPVwiXCIgY2xhc3M9XCJtb292SWRcIj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+PGgyIGNsYXNzPVwibW9vdmllLWNvbW1lbnRcIj5Db21tZW50cyg8c3BhbiBpZD1cImNvbW1lbnRzQ291bnRlclwiPjA8L3NwYW4+KTwvaDI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1jb21tZW50cy1jb250YWluZXJcIiBpZD1cImNvbW1lbnRzLXNlY1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29tbWVudHNcIiBpZD1cImNvbW1lbnRzLWl0ZW1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5ldy1jb21tZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1uZXctY29tbWVudFwiPjxoMiBjbGFzcz1cIm1vb3ZpZS1uZXctY29tbWVudC10aXRsZVwiPkFkZCBhIENvbW1lbnQ8L2gyPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLWZvcm0tY29tbWVudFwiPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgIGlkPVwidXNlck5hbWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwidXNlckNvbW1lbnRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHMuLi5cIlxuICAgICAgICByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5gO1xuXG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25Db21tZW50ZXIpO1xuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcbiAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNlY3Rpb25Db21tZW50ZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgc2VjdGlvbkNvbW1lbnRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRNb292ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuQ29tbWVudCcpLmZvckVhY2goKGJ0bk1vb3ZDb21tZW50LCBpbmRleCkgPT4ge1xuICAgIGJ0bk1vb3ZDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbW9vdklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZUlkJylbaW5kZXhdLnZhbHVlO1xuICAgICAgYXdhaXQgZmV0Y2goVmFyaWFibGUudHZtYXplQXBpVXJsICsgbW9vdklkKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgcG9wdXAoKTtcbiAgICAgICAgICBjb21tZW50TGlzdGVuZXIoKTtcbiAgICAgICAgICBjb21tZW50c1JlYWRlcihqc29uLmlkKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJykudmFsdWUgPSBqc29uLmlkO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb292aWUtbmFtZScpLmlubmVySFRNTCA9IGpzb24ubmFtZTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtcG9wdXAnKS5zcmMgPSBqc29uLmltYWdlLm9yaWdpbmFsO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zdW1tYXJ5JykuaW5uZXJIVE1MID0ganNvbi5zdW1tYXJ5O1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVtaWVyZWQtZGF0ZScpLmlubmVySFRNTCA9IGBQcmVtaWVyZWQgRGF0ZSA6JHtqc29uLnByZW1pZXJlZH1gO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGF0ZScpLmlubmVySFRNTCA9IGBFbmQgRGF0ZToke2pzb24uZW5kZWR9YDtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UnKS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2UgOiR7anNvbi5sYW5ndWFnZX1gO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5yZScpLmlubmVySFRNTCA9IGBHZW5yZToke2pzb24uZ2VucmVzfWA7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpLmlubmVySFRNTCA9IGBSYXRpbmc6ICR7XCI8aSBjbGFzcz0nZmEtc29saWQgZmEtc3Rhcic+PC9pPlwiLnJlcGVhdChNYXRoLmZsb29yKGpzb24ucmF0aW5nLmF2ZXJhZ2UpKX1gO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb292OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==