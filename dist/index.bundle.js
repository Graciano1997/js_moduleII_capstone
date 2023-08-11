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
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");


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
      await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.tvmazeApiUrl + moovId)
        .then((response) => response.json())
        .then((json) => {
          const popupContainer = document.querySelector('.popup-container');
          popupContainer.classList.remove('hide');
          popup();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxL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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEcsc0VBQXNFLFdBQVc7QUFDakYsdUVBQXVFLGNBQWM7QUFDckYsZ0VBQWdFLFlBQVk7QUFDNUUsbUVBQW1FLDJFQUEyRTtBQUM5SSxTQUFTO0FBQ1QsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hcGlDb250cm9sbGVyLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2xvYmFsVmFyLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcHVwTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWxpZ2h0OiAjZTBkY2RjO1xyXG4gIC0tZ3JleTogIzg4ODtcclxuICAtLWRhcms6ICMwZTBlMjI7XHJcbiAgLS1kYW5nZXI6ICNmZjViNTc7XHJcbiAgLS1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgLS1ib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnbW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDQ3LCA0NywgMC44NDgpO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyAwLjNzICBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvZ286aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmxvZ28gaDIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmxvZ28gaDIgc3BhbiB7XHJcbiAgY29sb3I6IHJnYig5OSwgMjMsIDIzKTtcclxufVxyXG5cclxuLm5hdi1pdGVtcyB7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB1bCBsaSBhIHtcclxuICBjb2xvcjogdmFyKC0tZGFyayk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xyXG59XHJcblxyXG4uc2VjdGlvbi1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAzJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICBwYWRkaW5nOiA0JTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDAgIGJsYWNrIGluc2V0O1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tbGlrZXMsXHJcbi5tb292aWUtaXRlbS1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogNTB2aCAvIDFmcjtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jYnRuLXJlc2VydmUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oZWFydDpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbi5saWtlcy1udW1iZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ub0NvbW1lbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ucG9wdXAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI1LCAyMjUsIDAuNzU3KTtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTAzLCAxMDMsIDAuMjE2KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucG9wLWNvbWVudGVycy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uaW1hZ2UtcG9wdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1wb3B1cCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xyXG59XHJcblxyXG4ubW92aWUtZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLm1vdmllLXRpdGxlLFxyXG4ubW9vdmllLW5ldy1jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0IHtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmZvcm0gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDQlO1xyXG59XHJcblxyXG4jbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbiNjb21tZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLmJ0bmNsb3NlLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDkzJTtcclxufVxyXG5cclxuLm1vb3ZpZS1uYW1lLFxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcblxyXG4ubW92aWUtcmVzdW1lIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1vcmUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tb3JlLWluZm8gbGkgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLm1vdmllLXN1bW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZmEtc3RhciB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmdlbnJlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLTIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIsXHJcbi5tb292aWUtZm9ybS1jb21tZW50IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgOCwgOCwgMC42NzEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cyB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcclxufVxyXG5cclxuLnVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5jb21tZW50cy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xyXG59XHJcblxyXG4uYnRuQ29tbWVudCxcclxuLmJ0bi1yZXNlcnZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5idG4tcmVzZXJ2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDEyJTtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYmxvY2s6IDJyZW07XHJcbiAgY29sb3I6ICNmZmZmO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzIHAge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG5mb290ZXIgcDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NDYpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JB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QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztBQUM5Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0OiAjZTBkY2RjO1xcclxcbiAgLS1ncmV5OiAjODg4O1xcclxcbiAgLS1kYXJrOiAjMGUwZTIyO1xcclxcbiAgLS1kYW5nZXI6ICNmZjViNTc7XFxyXFxuICAtLXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg0NywgNDcsIDQ3LCAwLjg0OCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgyIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYig5OSwgMjMsIDIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgdWwgbGkgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmcjtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmY7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDAgIGJsYWNrIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tbGlrZXMsXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDUwdmggLyAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA0JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXJlc2VydmUge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtbnVtYmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Db21tZW50IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIyNSwgMjI1LCAwLjc1Nyk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3AtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDEwMywgMTAzLCAwLjIxNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbi5wb3AtY29tZW50ZXJzLWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlLFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJsYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuY2xvc2Utc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDElO1xcclxcbiAgbGVmdDogOTMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLW5hbWUsXFxyXFxuLm1vb3ZpZS1jb21tZW50LFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWNvbW1lbnQsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtcmVzdW1lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gbGkgZGl2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zdW1tYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLTIge1xcclxcbiAgcGFkZGluZy1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lcixcXHJcXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDgsIDgsIDAuNjcxKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5ldy1jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuQ29tbWVudCxcXHJcXG4uYnRuLXJlc2VydmUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVzZXJ2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTIlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1jb21tZW50cyBwIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMSU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0Nik7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBpbml0aWF0aXplQWxsTW9vdmllcyB9IGZyb20gJy4vbW9kdWxlcy9hcGlDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfSBmcm9tICcuL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGdldE1vb3YgZnJvbSAnLi9tb2R1bGVzL3BvcHVwTW9kYWwuanMnO1xuXG5pbml0aWF0aXplQWxsTW9vdmllcygpO1xuaW5pdGlhbGl6ZUxpa2VzKCk7XG5saWtlc1JlYWRlcigpO1xuZ2V0TW9vdigpOyIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcbmltcG9ydCBjb3VudGVySXRlbSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcblxuY29uc3QgZnVsbE1vb3ZBcnJheSA9IFtdO1xuXG5jb25zdCBkaXNwbGF5TW9vdiA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChWYXJpYWJsZS50dm1hemVBcGlVcmwgKyBpZClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgZnVsbE1vb3ZBcnJheS5wdXNoKGpzb24pO1xuICAgICAgVmFyaWFibGUubW9vdkl0ZW1JbWFnZVtpZCAtIDFdLnNyYyA9IGpzb24uaW1hZ2Uub3JpZ2luYWw7XG4gICAgICBWYXJpYWJsZS5tb292SXRlbU5hbWVbaWQgLSAxXS50ZXh0Q29udGVudCA9IGpzb24ubmFtZTtcbiAgICAgIFZhcmlhYmxlLm1vb3ZJZFtpZCAtIDFdLnZhbHVlID0ganNvbi5pZDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYXRpemVBbGxNb292aWVzID0gKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgMTA7IGluZGV4ICs9IDEpIHtcbiAgICAgIGRpc3BsYXlNb292KGluZGV4KTtcbiAgICB9XG4gIH0pO1xuICBWYXJpYWJsZS5tb292aWVzTnVtYmVyLnRleHRDb250ZW50ID0gY291bnRlckl0ZW0oJy5tb292aWUtbGlzdC1jb250YWluZXInKTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYXRpemVBbGxNb292aWVzLCBmdWxsTW9vdkFycmF5IH07XG4iLCJjb25zdCB0dm1hemVBcGlVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xyXG5jb25zdCBpbnZvbHZlbWVudEFwaVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VbkROSGpweGNiam5jeDZiUnlRMS8nO1xyXG4vLyBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VbkROSGpweGNiam5jeDZiUnlRMS9jb21tZW50c1xyXG5jb25zdCBtb292SXRlbUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtLWltYWdlJyk7XHJcbmNvbnN0IG1vb3ZJdGVtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLW5hbWUnKTtcclxuY29uc3QgbW9vdklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZUlkJyk7XHJcbmNvbnN0IG1vb3ZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtJyk7XHJcbmNvbnN0IGJ0bkxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xyXG5jb25zdCBtb292aWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1saXN0LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtb292aWVzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZXNOdW1iZXInKTtcclxuY29uc3QgbW9vdklkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJyk7XHJcbmNvbnN0IHVzZXJDb21tZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckNvbW1lbnQnKTtcclxuY29uc3QgdXNlck5hbWVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VzZXJOYW1lJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5cclxuZXhwb3J0IHtcclxuICBtb292SXRlbU5hbWUsXHJcbiAgdHZtYXplQXBpVXJsLFxyXG4gIG1vb3ZJdGVtSW1hZ2UsXHJcbiAgaW52b2x2ZW1lbnRBcGlVcmwsXHJcbiAgbW9vdklkLFxyXG4gIG1vb3ZJdGVtLFxyXG4gIGJ0bkxpa2UsXHJcbiAgbW9vdmllTGlzdCxcclxuICBtb292aWVzTnVtYmVyLFxyXG4gIG1vb3ZJZFBvcHVwLFxyXG4gIGZvcm0sXHJcbiAgdXNlckNvbW1lbnRQb3B1cCxcclxuICB1c2VyTmFtZVBvcHVwLFxyXG59OyIsImNvbnN0IGNvdW50ZXJJdGVtID0gKGNvbnRhaW5lcklkZW50aWZpY2F0b3IpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVySWRlbnRpZmljYXRvcik7XG4gIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudGVySXRlbTsiLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XHJcblxyXG5jb25zdCBsaWtlTW9vdiA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWxpa2VzYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGxpa2VzUmVhZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWxpa2VzL2ApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1udW1iZXInKS5mb3JFYWNoKChpdGVtTGlrZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpdGVtTGlrZS50ZXh0Q29udGVudCA9IChqc29uW2luZGV4XS5saWtlcyA+IDEpID8gKGAke2pzb25baW5kZXhdLmxpa2VzfSBMaWtlc2ApIDogKGAke2pzb25baW5kZXhdLmxpa2VzfSBMaWtlYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsaXplTGlrZXMgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYXJ0JykuZm9yRWFjaCgobW9vdml0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBtb292aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGlrZU1vb3YobW9vdml0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpa2VJY29uJylbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xyXG4gICAgICBsaWtlc1JlYWRlcigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplTGlrZXMsIGxpa2VzUmVhZGVyIH07XHJcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcclxuXHJcbmNvbnN0IHBvcHVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IHNlY3Rpb25Db21tZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgc2VjdGlvbkNvbW1lbnRlci5jbGFzc05hbWUgPSAncG9wLW1vZGFsJztcclxuICBzZWN0aW9uQ29tbWVudGVyLmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiYnRuY2xvc2Utc2VjdGlvblwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwicG9wLWNvbWVudGVycy1pdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGNsYXNzPVwiaW1hZ2UtcG9wdXBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPjxoMSBjbGFzcz1cIm1vb3ZpZS1uYW1lXCI+TU9WSUUgTkFNRTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1yZXN1bWVcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZS1zdW1tYXJ5XCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+QWJvdXQ6IDwvc3Bhbj5cIlwiPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibW9yZS1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVtaWVyZWQtZGF0ZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPlByZW1pZXJlZDogPC9zcGFuPjIwMTMtMDMtMDQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmQtZGF0ZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkVuZGVkOiA8L3NwYW4+MjAxNi0wMy0wNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+TGFuZ3VhZ2U6IDwvc3Bhbj5FbmdsaXNoPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImluZm8tMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbnJlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZ2VucmVcIj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+UmF0aW5nOiA8L3NwYW4+NC41NjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRtb292aWVcIiB2YWx1ZT1cIlwiIGNsYXNzPVwibW9vdklkXCI+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtdGl0bGVcIj48aDIgY2xhc3M9XCJtb292aWUtY29tbWVudFwiPkNvbW1lbnRzKDxzcGFuIGlkPVwiY29tbWVudHNDb3VudGVyXCI+MDwvc3Bhbj4pPC9oMj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29tbWVudHMtY29udGFpbmVyXCIgaWQ9XCJjb21tZW50cy1zZWNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItY29tbWVudHNcIiBpZD1cImNvbW1lbnRzLWl0ZW1cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLW5ldy1jb21tZW50cy1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLW5ldy1jb21tZW50XCI+PGgyIGNsYXNzPVwibW9vdmllLW5ldy1jb21tZW50LXRpdGxlXCI+QWRkIGEgQ29tbWVudDwvaDI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1mb3JtLWNvbW1lbnRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICBpZD1cInVzZXJOYW1lXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgaWQ9XCJ1c2VyQ29tbWVudFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzLi4uXCJcclxuICAgICAgICByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuYDtcclxuXHJcbiAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbW1lbnRlcik7XHJcbiAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJyk7XHJcbiAgY2xvc2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VjdGlvbkNvbW1lbnRlci5pbm5lckhUTUwgPSAnJztcclxuICAgIHNlY3Rpb25Db21tZW50ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xyXG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TW9vdiA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuQ29tbWVudCcpLmZvckVhY2goKGJ0bk1vb3ZDb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgYnRuTW9vdkNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vb3ZJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWVJZCcpW2luZGV4XS52YWx1ZTtcclxuICAgICAgYXdhaXQgZmV0Y2goVmFyaWFibGUudHZtYXplQXBpVXJsICsgbW9vdklkKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgIHBvcHVwKCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJykudmFsdWUgPSBqc29uLmlkO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZS1uYW1lJykuaW5uZXJIVE1MID0ganNvbi5uYW1lO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXBvcHVwJykuc3JjID0ganNvbi5pbWFnZS5vcmlnaW5hbDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zdW1tYXJ5JykuaW5uZXJIVE1MID0ganNvbi5zdW1tYXJ5O1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZW1pZXJlZC1kYXRlJykuaW5uZXJIVE1MID0gYFByZW1pZXJlZCBEYXRlIDoke2pzb24ucHJlbWllcmVkfWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRhdGUnKS5pbm5lckhUTUwgPSBgRW5kIERhdGU6JHtqc29uLmVuZGVkfWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UnKS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2UgOiR7anNvbi5sYW5ndWFnZX1gO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlJykuaW5uZXJIVE1MID0gYEdlbnJlOiR7anNvbi5nZW5yZXN9YDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKS5pbm5lckhUTUwgPSBgUmF0aW5nOiAke1wiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLXN0YXInPjwvaT5cIi5yZXBlYXQoTWF0aC5mbG9vcihqc29uLnJhdGluZy5hdmVyYWdlKSl9YDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TW9vdjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=