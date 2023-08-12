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
  display: flex;
  margin-top: 3%;
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

@keyframes myAnimation {
  0% {
    transform: rotate(10deg);
  }

  25% {
    transform: rotate(40deg);
  }

  50% {
    transform: rotate(60deg);
  }

  100% {
    transform: rotate(270deg);
  }
}

.rotate {
  animation: myAnimation 2s ease-in-out 1s alternate infinite;
  width: 20%;
  height: 20%;
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
  font-size: 20px;
  cursor: pointer;
  transition: 0.5s 1s ease-in-out;
}

.heart:hover {
  color: red;
  transform: scale(1.3);
}

.likes-number {
  margin-top: 20%;
  font-size: 13px;
  font-weight: 700;
  color: rgb(133, 29, 29);
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
  margin-top: 8%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
  color: #ffff;
  padding-bottom: 2%;
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

#spin {
  font-size: 20pt;
}

.item-name {
  font-size: 16px;
  font-weight: 700;
}

.seemoreContainer {
  display: none;
}

#btnSee {
  background: rgba(99, 23, 23, 0.813);
  color: white;
  padding: 2%;
  cursor: pointer;
  transition: all 0.4s 1s ease-in-out;
}

#btnSee:hover {
  box-shadow: 5px 5px 0 black;
}

.hamburguer {
  display: block;
  border: transparent;
  margin-left: -5%;
  background: transparent;
}

.hamburguerImg {
  color: white;
}

.mooviesNumber {
  color: rgb(133, 29, 29);
}
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,sCAAsC;EACtC,0EAA0E;AAC5E;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qCAAqC;EACrC,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,2DAA2D;EAC3D,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,sCAAsC;EACtC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,gCAAgC;EAChC,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;AACX;;AAEA;;;EAGE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,gCAAgC;AAClC;;AAEA;;EAEE,gCAAgC;EAChC,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,4CAA4C;AAC9C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\r\n  --light: #e0dcdc;\r\n  --grey: #888;\r\n  --dark: #0e0e22;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(47, 47, 47, 0.848);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  background: var(--light);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  margin-top: 3%;\r\n  flex-direction: column;\r\n  height: max-content;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n  transition: all 1s 0.3s  ease-in-out;\r\n}\r\n\r\n.logo:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.logo h2 {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.logo h2 span {\r\n  color: rgb(99, 23, 23);\r\n}\r\n\r\n.nav-items {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  padding-right: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-list {\r\n  padding-left: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.nav-list ul {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.nav-list ul li a {\r\n  color: var(--dark);\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  border: transparent;\r\n  cursor: pointer;\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\n.section-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2%;\r\n  height: max-content;\r\n}\r\n\r\n.moovie-list-container {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  justify-items: center;\r\n  row-gap: 3%;\r\n}\r\n\r\n.moovie-item {\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr / 1fr;\r\n  width: 20vw;\r\n  height: 70vh;\r\n  background: #ffff;\r\n  padding: 4%;\r\n  border-radius: 15px;\r\n  transition: all 2s 1s ease-in-out;\r\n}\r\n\r\n.moovie-item:hover {\r\n  box-shadow: 5px 5px 0  black inset;\r\n}\r\n\r\n.moovie-item-likes,\r\n.moovie-item-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.moovie-item-image-container {\r\n  display: grid;\r\n  grid-template: 50vh / 1fr;\r\n}\r\n\r\n.moovie-item-image-description {\r\n  margin-top: 4%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n@keyframes myAnimation {\r\n  0% {\r\n    transform: rotate(10deg);\r\n  }\r\n\r\n  25% {\r\n    transform: rotate(40deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(60deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(270deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  animation: myAnimation 2s ease-in-out 1s alternate infinite;\r\n  width: 20%;\r\n  height: 20%;\r\n}\r\n\r\n.moovie-item-image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moovie-item-options {\r\n  margin-top: 2%;\r\n  padding-bottom: 2%;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.moovie-item-options button {\r\n  padding: 2%;\r\n  width: 90%;\r\n}\r\n\r\n#btn-reserve {\r\n  width: 95%;\r\n}\r\n\r\n.heart {\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  transition: 0.5s 1s ease-in-out;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-number {\r\n  margin-top: 20%;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  color: rgb(133, 29, 29);\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.noComment {\r\n  align-items: center;\r\n  padding-top: 4%;\r\n  text-align: center;\r\n  color: var(--light);\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: rgba(233, 225, 225, 0.757);\r\n  z-index: 10;\r\n  backdrop-filter: blur(10px);\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.pop-modal {\r\n  position: relative;\r\n  margin: 2rem;\r\n  margin-top: 1%;\r\n  margin-bottom: 1rem;\r\n  background: rgba(114, 103, 103, 0.216);\r\n  border-radius: 15px;\r\n  padding: 1%;\r\n}\r\n\r\n.pop-comenters-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.img-section {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  height: 75vh;\r\n}\r\n\r\n.image-popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: fill;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-popup {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: max-content;\r\n  height: max-content;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-right: 5%;\r\n  color: rgba(0, 0, 0, 0.851);\r\n  transition: all 1s 1s ease-in-out;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.2);\r\n  color: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.movie-details {\r\n  margin-top: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  width: 60vw;\r\n}\r\n\r\n.movie-title,\r\n.moovie-new-comment {\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  margin-top: 2%;\r\n}\r\n\r\n.tag {\r\n  font-weight: 700;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.form input {\r\n  padding: 2%;\r\n}\r\n\r\n.form textarea {\r\n  padding: 4%;\r\n}\r\n\r\n#name {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.btnclose-section {\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 93%;\r\n}\r\n\r\n.moovie-name,\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.moovie-new-comment-title {\r\n  padding-top: 1%;\r\n}\r\n\r\n.movie-resume {\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n}\r\n\r\n.more-info {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 2%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.more-info li div {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.movie-summary {\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n.fa-star {\r\n  color: yellow;\r\n}\r\n\r\n.genre-container {\r\n  width: 100%;\r\n}\r\n\r\n.info-2 {\r\n  padding-right: 3%;\r\n}\r\n\r\n.user-comments-container,\r\n.moovie-form-comment {\r\n  margin-top: 2%;\r\n  padding-left: 4%;\r\n}\r\n\r\n.user-comments-container {\r\n  background: rgba(8, 8, 8, 0.671);\r\n  color: #fff;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-comments {\r\n  height: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.moovie-form-comment {\r\n  padding-top: 1%;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-new-comments-container {\r\n  margin-top: 1%;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  background: rgba(0, 0, 0, 0.178);\r\n}\r\n\r\n.btnComment,\r\n.btn-reserve {\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.btn-reserve {\r\n  background: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.date {\r\n  font-style: oblique;\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  margin-top: 8%;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-block: 2rem;\r\n  color: #ffff;\r\n  padding-bottom: 2%;\r\n}\r\n\r\nfooter p {\r\n  transition: all 0.5s 2s ease-in-out;\r\n}\r\n\r\n.user-comments p {\r\n  margin-top: 2%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\nfooter p:hover {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.comment {\r\n  color: black;\r\n  background-color: rgba(255, 255, 255, 0.646);\r\n}\r\n\r\n#spin {\r\n  font-size: 20pt;\r\n}\r\n\r\n.item-name {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n.seemoreContainer {\r\n  display: none;\r\n}\r\n\r\n#btnSee {\r\n  background: rgba(99, 23, 23, 0.813);\r\n  color: white;\r\n  padding: 2%;\r\n  cursor: pointer;\r\n  transition: all 0.4s 1s ease-in-out;\r\n}\r\n\r\n#btnSee:hover {\r\n  box-shadow: 5px 5px 0 black;\r\n}\r\n\r\n.hamburguer {\r\n  display: block;\r\n  border: transparent;\r\n  margin-left: -5%;\r\n  background: transparent;\r\n}\r\n\r\n.hamburguerImg {\r\n  color: white;\r\n}\r\n\r\n.mooviesNumber {\r\n  color: rgb(133, 29, 29);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/mobile.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/mobile.css ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@media (max-width: 768px) {
  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pop-modal {
    margin: 1rem;
    padding: 1%;
  }

  .close-popup {
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    padding-right: 2%;
  }

  .img-section {
    margin-top: 3%;
    width: 75vw;
  }

  footer p {
    font-size: 12px;
    text-align: center;
    padding-left: 3%;
    padding-right: 3%;
  }

  .movie-details {
    margin-top: 2%;
    width: 75vw;
  }

  .comments-container {
    width: 75vw;
  }

  .genre-container {
    width: 100%;
    font-size: 13px;
  }

  .more-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2%;
  }

  .user-comments p {
    padding-top: 2%;
    font-size: 12px;
  }

  .movie-summary {
    font-size: 16px;
    text-align: left;
    letter-spacing: 1px;
  }

  .movie-resume {
    margin-top: 1%;
    padding: 4%;
    font-size: 12px;
  }

  .moovie-form-comment {
    padding-bottom: 2%;
  }

  .movie-title,
  .moovie-new-comment {
    padding-right: 1.5%;
    padding-left: 1.5%;
    font-size: 0.8rem;
  }

  .moovie-name,
  .moovie-comment,
  .moovie-new-comment-title {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .btnclose-section {
    top: 0.7%;
    left: 93%;
  }

  .nav-items li a {
    display: none;
  }

  .nav-items li h3 {
    padding-top: 2%;
    padding-bottom: 1%;
    transform: translate(-70%, 50%);
  }

  .seemoreContainer {
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }

  .main-container,
  .section-main {
    display: flex;
    flex-direction: column;
  }

  .moovie-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .moovie-item {
    transition: all 2s 1s ease-in-out;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    justify-items: center;
    padding: 4%;
    margin-left: 3%;
    margin-right: 3%;
    background: #ffffffa1;
    width: 80%;
    height: 80vh;
  }

  .hideItem {
    display: none;
  }

  .hide {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/mobile.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,WAAW;EACb;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;;IAEE,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;;;IAGE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,SAAS;IACT,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,+BAA+B;EACjC;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,cAAc;EAChB;;EAEA;;IAEE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,UAAU;IACV,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF","sourcesContent":["@media (max-width: 768px) {\r\n  .nav-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .pop-modal {\r\n    margin: 1rem;\r\n    padding: 1%;\r\n  }\r\n\r\n  .close-popup {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n    padding-right: 2%;\r\n  }\r\n\r\n  .img-section {\r\n    margin-top: 3%;\r\n    width: 75vw;\r\n  }\r\n\r\n  footer p {\r\n    font-size: 12px;\r\n    text-align: center;\r\n    padding-left: 3%;\r\n    padding-right: 3%;\r\n  }\r\n\r\n  .movie-details {\r\n    margin-top: 2%;\r\n    width: 75vw;\r\n  }\r\n\r\n  .comments-container {\r\n    width: 75vw;\r\n  }\r\n\r\n  .genre-container {\r\n    width: 100%;\r\n    font-size: 13px;\r\n  }\r\n\r\n  .more-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 2%;\r\n  }\r\n\r\n  .user-comments p {\r\n    padding-top: 2%;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .movie-summary {\r\n    font-size: 16px;\r\n    text-align: left;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  .movie-resume {\r\n    margin-top: 1%;\r\n    padding: 4%;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .moovie-form-comment {\r\n    padding-bottom: 2%;\r\n  }\r\n\r\n  .movie-title,\r\n  .moovie-new-comment {\r\n    padding-right: 1.5%;\r\n    padding-left: 1.5%;\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .moovie-name,\r\n  .moovie-comment,\r\n  .moovie-new-comment-title {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n  }\r\n\r\n  .btnclose-section {\r\n    top: 0.7%;\r\n    left: 93%;\r\n  }\r\n\r\n  .nav-items li a {\r\n    display: none;\r\n  }\r\n\r\n  .nav-items li h3 {\r\n    padding-top: 2%;\r\n    padding-bottom: 1%;\r\n    transform: translate(-70%, 50%);\r\n  }\r\n\r\n  .seemoreContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 2%;\r\n  }\r\n\r\n  .main-container,\r\n  .section-main {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .moovie-list-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    padding-top: 5%;\r\n    padding-bottom: 5%;\r\n  }\r\n\r\n  .moovie-item {\r\n    transition: all 2s 1s ease-in-out;\r\n    display: flex;\r\n    border-radius: 15px;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n    padding: 4%;\r\n    margin-left: 3%;\r\n    margin-right: 3%;\r\n    background: #ffffffa1;\r\n    width: 80%;\r\n    height: 80vh;\r\n  }\r\n\r\n  .hideItem {\r\n    display: none;\r\n  }\r\n\r\n  .hide {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/mobile.css":
/*!****************************!*\
  !*** ./src/css/mobile.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mobile.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/mobile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _css_mobile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/mobile.css */ "./src/css/mobile.css");
/* harmony import */ var _modules_apiController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/apiController.js */ "./src/modules/apiController.js");
/* harmony import */ var _modules_likeController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likeController.js */ "./src/modules/likeController.js");
/* harmony import */ var _modules_popupModal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupModal.js */ "./src/modules/popupModal.js");
/* harmony import */ var _modules_setLoadingImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setLoadingImage */ "./src/modules/setLoadingImage.js");







(0,_modules_setLoadingImage__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_2__.initiatizeAllMoovies)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_3__.initializeLikes)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_3__.likesReader)();
(0,_modules_popupModal_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_2__.seeButtonListneer)();


/***/ }),

/***/ "./src/modules/apiController.js":
/*!**************************************!*\
  !*** ./src/modules/apiController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fullMoovArray: () => (/* binding */ fullMoovArray),
/* harmony export */   initiatizeAllMoovies: () => (/* binding */ initiatizeAllMoovies),
/* harmony export */   seeButtonListneer: () => (/* binding */ seeButtonListneer)
/* harmony export */ });
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ "./src/modules/itemCounter.js");



const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(_globalVar_js__WEBPACK_IMPORTED_MODULE_0__.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      document.querySelectorAll('.moovie-item-image')[id - 1].classList.remove('rotate');
      document.querySelectorAll('.moovie-item-image')[id - 1].src = json.image.original;
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

const seeButton = () => {
  document.querySelectorAll('.moovie-item').forEach((item, index) => {
    if (index >= 5) {
      item.classList.toggle('hideItem');
    }
  })
}

const seeButtonListneer = () => {
  document.querySelector('#btnSee').addEventListener('click', () => {
    if (document.querySelector('#btnSee').innerHTML === '<i class="fa-solid fa-eye-slash"></i> See Less') {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye"></i> See More';
    } else {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye-slash"></i> See Less';
    }
    seeButton();
  });
}




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
        // display counter items in the container
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
// count the number of items in a container

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

/***/ }),

/***/ "./src/modules/setLoadingImage.js":
/*!****************************************!*\
  !*** ./src/modules/setLoadingImage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_loading_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/loading.svg */ "./src/images/loading.svg");




const setLoadingImage = () => {    
        document.querySelectorAll('.moovie-item-picture').forEach(item => {
        const loadingImage = new Image(_images_loading_svg__WEBPACK_IMPORTED_MODULE_0__);
        loadingImage.src = _images_loading_svg__WEBPACK_IMPORTED_MODULE_0__;
        loadingImage.classList.add('moovie-item-image');
        loadingImage.classList.add('rotate');

        item.appendChild(loadingImage)
    }
    );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLoadingImage);

/***/ }),

/***/ "./src/images/loading.svg":
/*!********************************!*\
  !*** ./src/images/loading.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3328e1e1b15c60adf239.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZ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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUZBQXFGLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFB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QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEcsc0VBQXNFLFdBQVc7QUFDakYsdUVBQXVFLGNBQWM7QUFDckYsZ0VBQWdFLFlBQVk7QUFDNUUsbUVBQW1FLDJFQUEyRTtBQUM5SSxTQUFTO0FBQ1QsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDdEhvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdEQUFLO0FBQzVDLDJCQUEyQixnREFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9tb2JpbGUuY3NzPzg5ZTUiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2dsb2JhbFZhci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3B1cE1vZGFsLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2V0TG9hZGluZ0ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1saWdodDogI2UwZGNkYztcclxuICAtLWdyZXk6ICM4ODg7XHJcbiAgLS1kYXJrOiAjMGUwZTIyO1xyXG4gIC0tZGFuZ2VyOiAjZmY1YjU3O1xyXG4gIC0tc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuODQ4KTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5sb2dvIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoOTksIDIzLCAyMyk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxufVxyXG5cclxuLnNlY3Rpb24tbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tb292aWUtbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgcm93LWdhcDogMyU7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmcjtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwICBibGFjayBpbnNldDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWxpa2VzLFxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IDUwdmggLyAxZnI7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZS1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBteUFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlIHtcclxuICBhbmltYXRpb246IG15QW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0IDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jYnRuLXJlc2VydmUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oZWFydDpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbi5saWtlcy1udW1iZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEzMywgMjksIDI5KTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ub0NvbW1lbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ucG9wdXAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI1LCAyMjUsIDAuNzU3KTtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTAzLCAxMDMsIDAuMjE2KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucG9wLWNvbWVudGVycy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uaW1hZ2UtcG9wdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1wb3B1cCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xyXG59XHJcblxyXG4ubW92aWUtZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLm1vdmllLXRpdGxlLFxyXG4ubW9vdmllLW5ldy1jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0IHtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmZvcm0gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDQlO1xyXG59XHJcblxyXG4jbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbiNjb21tZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLmJ0bmNsb3NlLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDkzJTtcclxufVxyXG5cclxuLm1vb3ZpZS1uYW1lLFxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcblxyXG4ubW92aWUtcmVzdW1lIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1vcmUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tb3JlLWluZm8gbGkgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLm1vdmllLXN1bW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZmEtc3RhciB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmdlbnJlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLTIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIsXHJcbi5tb292aWUtZm9ybS1jb21tZW50IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgOCwgOCwgMC42NzEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cyB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcclxufVxyXG5cclxuLnVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5jb21tZW50cy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xyXG59XHJcblxyXG4uYnRuQ29tbWVudCxcclxuLmJ0bi1yZXNlcnZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5idG4tcmVzZXJ2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzIHAge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcblxyXG5mb290ZXIgcDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NDYpO1xyXG59XHJcblxyXG4jc3BpbiB7XHJcbiAgZm9udC1zaXplOiAyMHB0O1xyXG59XHJcblxyXG4uaXRlbS1uYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNlZW1vcmVDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNidG5TZWUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNidG5TZWU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCBibGFjaztcclxufVxyXG5cclxuLmhhbWJ1cmd1ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC01JTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhhbWJ1cmd1ZXJJbWcge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vb3ZpZXNOdW1iZXIge1xyXG4gIGNvbG9yOiByZ2IoMTMzLCAyOSwgMjkpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLDBFQUEwRTtBQUM1RTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOENBQThDO0VBQzlDLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSwyREFBMkQ7RUFDM0QsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0OiAjZTBkY2RjO1xcclxcbiAgLS1ncmV5OiAjODg4O1xcclxcbiAgLS1kYXJrOiAjMGUwZTIyO1xcclxcbiAgLS1kYW5nZXI6ICNmZjViNTc7XFxyXFxuICAtLXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg0NywgNDcsIDQ3LCAwLjg0OCk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLXRvcDogMyU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgyIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYig5OSwgMjMsIDIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgdWwgbGkgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbGlzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmcjtcXHJcXG4gIHdpZHRoOiAyMHZ3O1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZmY7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbTpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDAgIGJsYWNrIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tbGlrZXMsXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGU6IDUwdmggLyAxZnI7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZS1kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA0JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbXlBbmltYXRpb24ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyNSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZSB7XFxyXFxuICBhbmltYXRpb246IG15QW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0IDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1vcHRpb25zIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbiNidG4tcmVzZXJ2ZSB7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1udW1iZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMjAlO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiByZ2IoMTMzLCAyOSwgMjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5ub0NvbW1lbnQge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA0JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI1LCAyMjUsIDAuNzU3KTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTAzLCAxMDMsIDAuMjE2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1jb21lbnRlcnMtaXRlbXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLXBvcHVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogZmlsbDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogNSU7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1MSk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjb2xvcjogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxufVxcclxcblxcclxcbi50YWcge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcImxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1pbnB1dHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG5jbG9zZS1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMSU7XFxyXFxuICBsZWZ0OiA5MyU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbmFtZSxcXHJcXG4ubW9vdmllLWNvbW1lbnQsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtY29tbWVudCxcXHJcXG4ubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1yZXN1bWUge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyBsaSBkaXYge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXN1bW1hcnkge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXN0YXIge1xcclxcbiAgY29sb3I6IHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tMiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMtY29udGFpbmVyLFxcclxcbi5tb292aWUtZm9ybS1jb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgOCwgOCwgMC42NzEpO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMge1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XFxyXFxufVxcclxcblxcclxcbi5idG5Db21tZW50LFxcclxcbi5idG4tcmVzZXJ2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1yZXNlcnZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZSB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4JTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItY29tbWVudHMgcCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDElO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NDYpO1xcclxcbn1cXHJcXG5cXHJcXG4jc3BpbiB7XFxyXFxuICBmb250LXNpemU6IDIwcHQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlZW1vcmVDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0blNlZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNidG5TZWU6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ3VlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBtYXJnaW4tbGVmdDogLTUlO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJndWVySW1nIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZXNOdW1iZXIge1xcclxcbiAgY29sb3I6IHJnYigxMzMsIDI5LCAyOSk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdi1pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucG9wLW1vZGFsIHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlLXBvcHVwIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gIH1cclxuXHJcbiAgLmltZy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgfVxyXG5cclxuICAubW92aWUtZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICB9XHJcblxyXG4gIC5nZW5yZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG5cclxuICAubW9yZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICB9XHJcblxyXG4gIC51c2VyLWNvbW1lbnRzIHAge1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXN1bW1hcnkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgfVxyXG5cclxuICAubW92aWUtcmVzdW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubW9vdmllLWZvcm0tY29tbWVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGl0bGUsXHJcbiAgLm1vb3ZpZS1uZXctY29tbWVudCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG5cclxuICAubW9vdmllLW5hbWUsXHJcbiAgLm1vb3ZpZS1jb21tZW50LFxyXG4gIC5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bmNsb3NlLXNlY3Rpb24ge1xyXG4gICAgdG9wOiAwLjclO1xyXG4gICAgbGVmdDogOTMlO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtcyBsaSBhIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2LWl0ZW1zIGxpIGgzIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDUwJSk7XHJcbiAgfVxyXG5cclxuICAuc2VlbW9yZUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhaW5lcixcclxuICAuc2VjdGlvbi1tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG5cclxuICAubW9vdmllLWl0ZW0ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmExO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICB9XHJcblxyXG4gIC5oaWRlSXRlbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsU0FBUztJQUNULFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5uYXYtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcC1tb2RhbCB7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xvc2UtcG9wdXAge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWctc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgICB3aWR0aDogNzV2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMyU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLWRldGFpbHMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudHMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2VucmUtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3JlLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXNlci1jb21tZW50cyBwIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtc3VtbWFyeSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1yZXN1bWUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb292aWUtZm9ybS1jb21tZW50IHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLXRpdGxlLFxcclxcbiAgLm1vb3ZpZS1uZXctY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEuNSU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41JTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLW5hbWUsXFxyXFxuICAubW9vdmllLWNvbW1lbnQsXFxyXFxuICAubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYnRuY2xvc2Utc2VjdGlvbiB7XFxyXFxuICAgIHRvcDogMC43JTtcXHJcXG4gICAgbGVmdDogOTMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1pdGVtcyBsaSBhIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgbGkgaDMge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWVtb3JlQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tY29udGFpbmVyLFxcclxcbiAgLnNlY3Rpb24tbWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNSU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb292aWUtaXRlbSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA0JTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmYTE7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogODB2aDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oaWRlSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vYmlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vYmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9tb2JpbGUuY3NzJztcclxuaW1wb3J0IHsgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMsIHNlZUJ1dHRvbkxpc3RuZWVyIH0gZnJvbSAnLi9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTGlrZXMsIGxpa2VzUmVhZGVyIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IGdldE1vb3YgZnJvbSAnLi9tb2R1bGVzL3BvcHVwTW9kYWwuanMnO1xyXG5pbXBvcnQgc2V0TG9hZGluZ0ltYWdlIGZyb20gJy4vbW9kdWxlcy9zZXRMb2FkaW5nSW1hZ2UnO1xyXG5cclxuc2V0TG9hZGluZ0ltYWdlKCk7XHJcbmluaXRpYXRpemVBbGxNb292aWVzKCk7XHJcbmluaXRpYWxpemVMaWtlcygpO1xyXG5saWtlc1JlYWRlcigpO1xyXG5nZXRNb292KCk7XHJcbnNlZUJ1dHRvbkxpc3RuZWVyKCk7XHJcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcclxuaW1wb3J0IGNvdW50ZXJJdGVtIGZyb20gJy4vaXRlbUNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgZnVsbE1vb3ZBcnJheSA9IFtdO1xyXG5cclxuY29uc3QgZGlzcGxheU1vb3YgPSBhc3luYyAoaWQpID0+IHtcclxuICBhd2FpdCBmZXRjaChWYXJpYWJsZS50dm1hemVBcGlVcmwgKyBpZClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgZnVsbE1vb3ZBcnJheS5wdXNoKGpzb24pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKVtpZCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKVtpZCAtIDFdLnNyYyA9IGpzb24uaW1hZ2Uub3JpZ2luYWw7XHJcbiAgICAgIFZhcmlhYmxlLm1vb3ZJdGVtTmFtZVtpZCAtIDFdLnRleHRDb250ZW50ID0ganNvbi5uYW1lO1xyXG4gICAgICBWYXJpYWJsZS5tb292SWRbaWQgLSAxXS52YWx1ZSA9IGpzb24uaWQ7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYXRpemVBbGxNb292aWVzID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDEwOyBpbmRleCArPSAxKSB7XHJcbiAgICAgIGRpc3BsYXlNb292KGluZGV4KTtcclxuICAgIH1cclxuICB9KTtcclxuICBWYXJpYWJsZS5tb292aWVzTnVtYmVyLnRleHRDb250ZW50ID0gY291bnRlckl0ZW0oJy5tb292aWUtbGlzdC1jb250YWluZXInKTtcclxufTtcclxuXHJcbmNvbnN0IHNlZUJ1dHRvbiA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0nKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKGluZGV4ID49IDUpIHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlSXRlbScpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHNlZUJ1dHRvbkxpc3RuZWVyID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5TZWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuaW5uZXJIVE1MID09PSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtc2xhc2hcIj48L2k+IFNlZSBMZXNzJykge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPiBTZWUgTW9yZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPiBTZWUgTGVzcyc7XHJcbiAgICB9XHJcbiAgICBzZWVCdXR0b24oKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMsIGZ1bGxNb292QXJyYXksIHNlZUJ1dHRvbkxpc3RuZWVyIH07XHJcbiIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcclxuaW1wb3J0IGNvdW50ZXJJdGVtIGZyb20gJy4vaXRlbUNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlQ29tbWVudGVyID0gKGRhdGEsIHR5cGUpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgZWwuaW5uZXJIVE1MID0gYDxiIGNsYXNzPSdkYXRlJz4ke2RhdGEuY3JlYXRpb25fZGF0ZX08L2I+ICR7ZGF0YS51c2VybmFtZX0gOiA8c3BhbiBjbGFzcyA9XCJjb21tZW50XCI+4oCZ4oCZICR7ZGF0YS5jb21tZW50fSDigJnigJk8L3NwYW4+YDtcclxuICByZXR1cm4gZWw7XHJcbn07XHJcblxyXG5jb25zdCBub0NvbW1lbnRGdW5jdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBlbC5jbGFzc0xpc3QuYWRkKCdub0NvbW1lbnQnKTtcclxuICBlbC50ZXh0Q29udGVudCA9ICdObyBjb21tZW50cyAhISc7XHJcbiAgcmV0dXJuIGVsO1xyXG59O1xyXG5jb25zdCBjb21tZW50c1JlYWRlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWNvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICB3aGlsZSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5maXJzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChqc29uLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAganNvbi5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZChjcmVhdGVDb21tZW50ZXIoY29tbWVudCwgJ3AnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGlzcGxheSBjb3VudGVyIGl0ZW1zIGluIHRoZSBjb250YWluZXJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHNDb3VudGVyJykuaW5uZXJIVE1MID0gY291bnRlckl0ZW0oJyNjb21tZW50cy1pdGVtJyk7XHJcbiAgICAgIH0gZWxzZSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWNvbW1lbnRzJykuYXBwZW5kKG5vQ29tbWVudEZ1bmN0aW9uKCkpOyB9XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNvbW1lbnRNb292ID0gYXN5bmMgKGNvbW1lbnRPYmplY3QpID0+IHtcclxuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1jb21tZW50c2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBjb21tZW50T2JqZWN0Lml0ZW1faWQsXHJcbiAgICAgIHVzZXJuYW1lOiBjb21tZW50T2JqZWN0LnVzZXJuYW1lLFxyXG4gICAgICBjb21tZW50OiBjb21tZW50T2JqZWN0LmNvbW1lbnQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxyXG4gIH0pO1xyXG4gIGNvbW1lbnRzUmVhZGVyKGNvbW1lbnRPYmplY3QuaXRlbV9pZCk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb21tZW50TW9vdiwgY29tbWVudHNSZWFkZXIgfTtcclxuIiwiY29uc3QgdHZtYXplQXBpVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJztcclxuY29uc3QgaW52b2x2ZW1lbnRBcGlVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVW5ETkhqcHhjYmpuY3g2YlJ5UTEvJztcclxuLy8gaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVW5ETkhqcHhjYmpuY3g2YlJ5UTEvY29tbWVudHNcclxuY29uc3QgbW9vdkl0ZW1JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtaXRlbS1pbWFnZScpO1xyXG5jb25zdCBtb292SXRlbU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1uYW1lJyk7XHJcbmNvbnN0IG1vb3ZJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWVJZCcpO1xyXG5jb25zdCBtb292SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtaXRlbScpO1xyXG5jb25zdCBidG5MaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcclxuY29uc3QgbW9vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtbGlzdC1jb250YWluZXInKTtcclxuY29uc3QgbW9vdmllc051bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb292aWVzTnVtYmVyJyk7XHJcbmNvbnN0IG1vb3ZJZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZJZCcpO1xyXG5jb25zdCB1c2VyQ29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJDb21tZW50Jyk7XHJcbmNvbnN0IHVzZXJOYW1lUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1c2VyTmFtZScpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgbW9vdkl0ZW1OYW1lLFxyXG4gIHR2bWF6ZUFwaVVybCxcclxuICBtb292SXRlbUltYWdlLFxyXG4gIGludm9sdmVtZW50QXBpVXJsLFxyXG4gIG1vb3ZJZCxcclxuICBtb292SXRlbSxcclxuICBidG5MaWtlLFxyXG4gIG1vb3ZpZUxpc3QsXHJcbiAgbW9vdmllc051bWJlcixcclxuICBtb292SWRQb3B1cCxcclxuICBmb3JtLFxyXG4gIHVzZXJDb21tZW50UG9wdXAsXHJcbiAgdXNlck5hbWVQb3B1cCxcclxufTsiLCIvLyBjb3VudCB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIGEgY29udGFpbmVyXHJcblxyXG5jb25zdCBjb3VudGVySXRlbSA9IChjb250YWluZXJJZGVudGlmaWNhdG9yKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVySWRlbnRpZmljYXRvcik7XHJcbiAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJJdGVtOyIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcclxuXHJcbmNvbnN0IGxpa2VNb292ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9bGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaWQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgbGlrZXNSZWFkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9bGlrZXMvYClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzLW51bWJlcicpLmZvckVhY2goKGl0ZW1MaWtlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGl0ZW1MaWtlLnRleHRDb250ZW50ID0gKGpzb25baW5kZXhdLmxpa2VzID4gMSkgPyAoYCR7anNvbltpbmRleF0ubGlrZXN9IExpa2VzYCkgOiAoYCR7anNvbltpbmRleF0ubGlrZXN9IExpa2VgKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxpemVMaWtlcyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQnKS5mb3JFYWNoKChtb292aXRlbSwgaW5kZXgpID0+IHtcclxuICAgIG1vb3ZpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsaWtlTW9vdihtb292aXRlbS5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlrZUljb24nKVtpbmRleF0uY2xhc3NMaXN0LmFkZCgncmVkJyk7XHJcbiAgICAgIGxpa2VzUmVhZGVyKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfTtcclxuIiwiaW1wb3J0IHsgY29tbWVudE1vb3YsIGNvbW1lbnRzUmVhZGVyIH0gZnJvbSAnLi9jb21tZW50Q29udHJvbGxlci5qcyc7XHJcbmltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcclxuXHJcbmNvbnN0IGNvbW1lbnRMaXN0ZW5lciA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpdGVtX2lkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJykudmFsdWUsXHJcbiAgICAgIHVzZXJuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKS52YWx1ZSxcclxuICAgICAgY29tbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJDb21tZW50JykudmFsdWUsXHJcbiAgICB9O1xyXG4gICAgY29tbWVudE1vb3YoZGF0YSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpLnJlc2V0KCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBwb3B1cCA9ICgpID0+IHtcclxuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICBjb25zdCBzZWN0aW9uQ29tbWVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIHNlY3Rpb25Db21tZW50ZXIuY2xhc3NOYW1lID0gJ3BvcC1tb2RhbCc7XHJcbiAgc2VjdGlvbkNvbW1lbnRlci5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImJ0bmNsb3NlLXNlY3Rpb25cIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5YPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBvcC1jb21lbnRlcnMtaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiBjbGFzcz1cImltYWdlLXBvcHVwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtdGl0bGVcIj48aDEgY2xhc3M9XCJtb292aWUtbmFtZVwiPk1PVklFIE5BTUU8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcmVzdW1lXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtc3VtbWFyeVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkFib3V0OiA8L3NwYW4+XCJcIjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1vcmUtaW5mb1wiPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbWllcmVkLWRhdGVcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5QcmVtaWVyZWQ6IDwvc3Bhbj4yMDEzLTAzLTA0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW5kLWRhdGVcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5FbmRlZDogPC9zcGFuPjIwMTYtMDMtMDQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYW5ndWFnZVwiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPkxhbmd1YWdlOiA8L3NwYW4+RW5nbGlzaDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJpbmZvLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdlbnJlXCI+PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPiA8c3BhbiBjbGFzcz1cInRhZ1wiPlJhdGluZzogPC9zcGFuPjQuNTY8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkbW9vdmllXCIgdmFsdWU9XCJcIiBjbGFzcz1cIm1vb3ZJZFwiPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+PGgyIGNsYXNzPVwibW9vdmllLWNvbW1lbnRcIj5Db21tZW50cyg8c3BhbiBpZD1cImNvbW1lbnRzQ291bnRlclwiPjA8L3NwYW4+KTwvaDI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzLWNvbnRhaW5lclwiIGlkPVwiY29tbWVudHMtc2VjXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzXCIgaWQ9XCJjb21tZW50cy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1uZXctY29tbWVudHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1uZXctY29tbWVudFwiPjxoMiBjbGFzcz1cIm1vb3ZpZS1uZXctY29tbWVudC10aXRsZVwiPkFkZCBhIENvbW1lbnQ8L2gyPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtZm9ybS1jb21tZW50XCI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgaWQ9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgaWQ9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgIHJvd3M9XCIxMFwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGlkPVwidXNlckNvbW1lbnRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0cy4uLlwiXHJcbiAgICAgICAgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbmA7XHJcblxyXG4gIHBvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb25Db21tZW50ZXIpO1xyXG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xyXG4gIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlY3Rpb25Db21tZW50ZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzZWN0aW9uQ29tbWVudGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcclxuICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGdldE1vb3YgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bkNvbW1lbnQnKS5mb3JFYWNoKChidG5Nb292Q29tbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGJ0bk1vb3ZDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb292SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllSWQnKVtpbmRleF0udmFsdWU7XHJcbiAgICAgIGF3YWl0IGZldGNoKFZhcmlhYmxlLnR2bWF6ZUFwaVVybCArIG1vb3ZJZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICBwb3B1cCgpO1xyXG4gICAgICAgICAgY29tbWVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgICBjb21tZW50c1JlYWRlcihqc29uLmlkKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb292SWQnKS52YWx1ZSA9IGpzb24uaWQ7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdmllLW5hbWUnKS5pbm5lckhUTUwgPSBqc29uLm5hbWU7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtcG9wdXAnKS5zcmMgPSBqc29uLmltYWdlLm9yaWdpbmFsO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXN1bW1hcnknKS5pbm5lckhUTUwgPSBqc29uLnN1bW1hcnk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbWllcmVkLWRhdGUnKS5pbm5lckhUTUwgPSBgUHJlbWllcmVkIERhdGUgOiR7anNvbi5wcmVtaWVyZWR9YDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZGF0ZScpLmlubmVySFRNTCA9IGBFbmQgRGF0ZToke2pzb24uZW5kZWR9YDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpLmlubmVySFRNTCA9IGBMYW5ndWFnZSA6JHtqc29uLmxhbmd1YWdlfWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VucmUnKS5pbm5lckhUTUwgPSBgR2VucmU6JHtqc29uLmdlbnJlc31gO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpLmlubmVySFRNTCA9IGBSYXRpbmc6ICR7XCI8aSBjbGFzcz0nZmEtc29saWQgZmEtc3Rhcic+PC9pPlwiLnJlcGVhdChNYXRoLmZsb29yKGpzb24ucmF0aW5nLmF2ZXJhZ2UpKX1gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb292OyIsImltcG9ydCBpbWFnZSBmcm9tICcuLi9pbWFnZXMvbG9hZGluZy5zdmcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBzZXRMb2FkaW5nSW1hZ2UgPSAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtaXRlbS1waWN0dXJlJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBsb2FkaW5nSW1hZ2UgPSBuZXcgSW1hZ2UoaW1hZ2UpO1xyXG4gICAgICAgIGxvYWRpbmdJbWFnZS5zcmMgPSBpbWFnZTtcclxuICAgICAgICBsb2FkaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9vdmllLWl0ZW0taW1hZ2UnKTtcclxuICAgICAgICBsb2FkaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZCgncm90YXRlJyk7XHJcblxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZGluZ0ltYWdlKVxyXG4gICAgfVxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldExvYWRpbmdJbWFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=