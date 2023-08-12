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
  margin-bottom: 3%;
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
  padding-bottom: 10%;
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
  border-top: 2px solid black;
  margin-top: 8%;
  display: flex;
  align-items: flex-start;
  padding-block: 2rem;
  color: #ffff;
  padding-bottom: 2%;
  padding-left: 2%;
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
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,sCAAsC;EACtC,0EAA0E;AAC5E;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qCAAqC;EACrC,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,2DAA2D;EAC3D,UAAU;EACV,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,sCAAsC;EACtC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,2BAA2B;EAC3B,iCAAiC;AACnC;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,gCAAgC;EAChC,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;AACX;;AAEA;;;EAGE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,gCAAgC;AAClC;;AAEA;;EAEE,gCAAgC;EAChC,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,4CAA4C;AAC9C;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":[":root {\r\n  --light: #e0dcdc;\r\n  --grey: #888;\r\n  --dark: #0e0e22;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(47, 47, 47, 0.848);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  background: var(--light);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  flex-direction: column;\r\n  height: max-content;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n  transition: all 1s 0.3s  ease-in-out;\r\n}\r\n\r\n.logo:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.logo h2 {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.logo h2 span {\r\n  color: rgb(99, 23, 23);\r\n}\r\n\r\n.nav-items {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  padding-right: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-list {\r\n  padding-left: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.nav-list ul {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.nav-list ul li a {\r\n  color: var(--dark);\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  border: transparent;\r\n  cursor: pointer;\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\n.section-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2%;\r\n  height: max-content;\r\n  padding-bottom: 10%;\r\n}\r\n\r\n.moovie-list-container {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  justify-items: center;\r\n  row-gap: 3%;\r\n}\r\n\r\n.moovie-item {\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr / 1fr;\r\n  width: 20vw;\r\n  height: 70vh;\r\n  background: #ffff;\r\n  padding: 4%;\r\n  border-radius: 15px;\r\n  transition: all 2s 1s ease-in-out;\r\n}\r\n\r\n.moovie-item:hover {\r\n  box-shadow: 5px 5px 0  black inset;\r\n}\r\n\r\n.moovie-item-likes,\r\n.moovie-item-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.moovie-item-image-container {\r\n  display: grid;\r\n  grid-template: 50vh / 1fr;\r\n}\r\n\r\n.moovie-item-image-description {\r\n  margin-top: 4%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n@keyframes myAnimation {\r\n  0% {\r\n    transform: rotate(10deg);\r\n  }\r\n\r\n  25% {\r\n    transform: rotate(40deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(60deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(270deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  animation: myAnimation 2s ease-in-out 1s alternate infinite;\r\n  width: 20%;\r\n  height: 20%;\r\n}\r\n\r\n.moovie-item-image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moovie-item-options {\r\n  margin-top: 2%;\r\n  padding-bottom: 2%;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.moovie-item-options button {\r\n  padding: 2%;\r\n  width: 90%;\r\n}\r\n\r\n#btn-reserve {\r\n  width: 95%;\r\n}\r\n\r\n.heart {\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  transition: 0.5s 1s ease-in-out;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-number {\r\n  margin-top: 20%;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  color: rgb(133, 29, 29);\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.noComment {\r\n  align-items: center;\r\n  padding-top: 4%;\r\n  text-align: center;\r\n  color: var(--light);\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: rgba(233, 225, 225, 0.757);\r\n  z-index: 10;\r\n  backdrop-filter: blur(10px);\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.pop-modal {\r\n  position: relative;\r\n  margin: 2rem;\r\n  margin-top: 1%;\r\n  margin-bottom: 1rem;\r\n  background: rgba(114, 103, 103, 0.216);\r\n  border-radius: 15px;\r\n  padding: 1%;\r\n}\r\n\r\n.pop-comenters-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.img-section {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  height: 75vh;\r\n}\r\n\r\n.image-popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: fill;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-popup {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: max-content;\r\n  height: max-content;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-right: 5%;\r\n  color: rgba(0, 0, 0, 0.851);\r\n  transition: all 1s 1s ease-in-out;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.2);\r\n  color: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.movie-details {\r\n  margin-top: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  width: 60vw;\r\n}\r\n\r\n.movie-title,\r\n.moovie-new-comment {\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  margin-top: 2%;\r\n}\r\n\r\n.tag {\r\n  font-weight: 700;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.form input {\r\n  padding: 2%;\r\n}\r\n\r\n.form textarea {\r\n  padding: 4%;\r\n}\r\n\r\n#name {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.btnclose-section {\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 93%;\r\n}\r\n\r\n.moovie-name,\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.moovie-new-comment-title {\r\n  padding-top: 1%;\r\n}\r\n\r\n.movie-resume {\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n}\r\n\r\n.more-info {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 2%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.more-info li div {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.movie-summary {\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n.fa-star {\r\n  color: yellow;\r\n}\r\n\r\n.genre-container {\r\n  width: 100%;\r\n}\r\n\r\n.info-2 {\r\n  padding-right: 3%;\r\n}\r\n\r\n.user-comments-container,\r\n.moovie-form-comment {\r\n  margin-top: 2%;\r\n  padding-left: 4%;\r\n}\r\n\r\n.user-comments-container {\r\n  background: rgba(8, 8, 8, 0.671);\r\n  color: #fff;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-comments {\r\n  height: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.moovie-form-comment {\r\n  padding-top: 1%;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-new-comments-container {\r\n  margin-top: 1%;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  background: rgba(0, 0, 0, 0.178);\r\n}\r\n\r\n.btnComment,\r\n.btn-reserve {\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.btn-reserve {\r\n  background: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.date {\r\n  font-style: oblique;\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  border-top: 2px solid black;\r\n  margin-top: 8%;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  padding-block: 2rem;\r\n  color: #ffff;\r\n  padding-bottom: 2%;\r\n  padding-left: 2%;\r\n}\r\n\r\nfooter p {\r\n  transition: all 0.5s 2s ease-in-out;\r\n}\r\n\r\n.user-comments p {\r\n  margin-top: 2%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\nfooter p:hover {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.comment {\r\n  color: black;\r\n  background-color: rgba(255, 255, 255, 0.646);\r\n}\r\n\r\n#spin {\r\n  font-size: 20pt;\r\n}\r\n\r\n.item-name {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n.seemoreContainer {\r\n  display: none;\r\n}\r\n\r\n#btnSee {\r\n  background: rgba(99, 23, 23, 0.813);\r\n  color: white;\r\n  padding: 2%;\r\n  cursor: pointer;\r\n  transition: all 0.4s 1s ease-in-out;\r\n}\r\n\r\n#btnSee:hover {\r\n  box-shadow: 5px 5px 0 black;\r\n}\r\n\r\n.hamburguer {\r\n  display: block;\r\n  border: transparent;\r\n  margin-left: -5%;\r\n  background: transparent;\r\n}\r\n\r\n.hamburguerImg {\r\n  color: white;\r\n}\r\n\r\n.mooviesNumber {\r\n  color: rgb(133, 29, 29);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_itemsGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemsGenerator.js */ "./src/modules/itemsGenerator.js");
/* harmony import */ var _modules_likeController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likeController.js */ "./src/modules/likeController.js");
/* harmony import */ var _modules_popupModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupModal.js */ "./src/modules/popupModal.js");
/* harmony import */ var _modules_setLoadingImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/setLoadingImage.js */ "./src/modules/setLoadingImage.js");








(0,_modules_itemsGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])(12);
(0,_modules_setLoadingImage_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_2__.initiatizeAllMoovies)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_4__.initializeLikes)();
(0,_modules_likeController_js__WEBPACK_IMPORTED_MODULE_4__.likesReader)();
(0,_modules_popupModal_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_apiController_js__WEBPACK_IMPORTED_MODULE_2__.seeButtonListneer)();


/***/ }),

/***/ "./src/modules/apiController.js":
/*!**************************************!*\
  !*** ./src/modules/apiController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMoov: () => (/* binding */ displayMoov),
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
      document.querySelectorAll('.item-name')[id - 1].textContent = json.name;
      document.querySelectorAll('.moovieId')[id - 1].value = json.id;
    });
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index <= (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); index += 1) {
      displayMoov(index);
    }
  });
  _globalVar_js__WEBPACK_IMPORTED_MODULE_0__.mooviesNumber.textContent = (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

const seeButton = () => {
  document.querySelectorAll('.moovie-item').forEach((item, index) => {
    if (index >= 5) {
      item.classList.toggle('hideItem');
    }
  });
};

const seeButtonListneer = () => {
  document.querySelector('#btnSee').addEventListener('click', () => {
    if (document.querySelector('#btnSee').innerHTML === '<i class="fa-solid fa-eye-slash"></i> See Less') {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye"></i> See More';
    } else {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye-slash"></i> See Less';
    }
    seeButton();
  });
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
/* harmony import */ var _commenterCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commenterCounter.js */ "./src/modules/commenterCounter.js");
/* harmony import */ var _globalVar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalVar.js */ "./src/modules/globalVar.js");



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
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_1__.involvementApiUrl}comments?item_id=${id}`)
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
        document.querySelector('#commentsCounter').innerHTML = (0,_commenterCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      } else { document.querySelector('.user-comments').append(noCommentFunction()); }
    });
};

const commentMoov = async (commentObject) => {
  await fetch(`${_globalVar_js__WEBPACK_IMPORTED_MODULE_1__.involvementApiUrl}comments`, {
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

/***/ "./src/modules/commenterCounter.js":
/*!*****************************************!*\
  !*** ./src/modules/commenterCounter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commenterCounter = () => {
  const element = document.querySelector('#comments-item');
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commenterCounter);

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
const counterItem = () => {
  const element = document.querySelector('.moovie-list-container');
  if (element !== null) {
    return element.childElementCount;
  }
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterItem);

/***/ }),

/***/ "./src/modules/itemsGenerator.js":
/*!***************************************!*\
  !*** ./src/modules/itemsGenerator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const videoItemTemplate = `
                <div class="moovie-item">
                    <div class="moovie-item-image-container">
                        <div class="moovie-item-picture">
                        </div>
                        <div class="moovie-item-image-description">
                            <h4 class="item-name">Name</h4>
                            <div class="moovie-item-likes">
                                <p class="heart" ><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                                <input type="hidden" name="idmoovie" value="" class="moovieId">
                                  <p class="likes-number"><span class="nlike" ></span> likes</p>
                            </div>
                        </div>
                    </div>
                    <div class="moovie-item-options">
                        <button type="button" class="btnComment">Comments</button>
                        <button type="button" class="btn-reserve">Reservation</button>
                    </div>
                </div>`;

const itemCreator = (number) => {
  const moovieItemContainer = document.createElement('div');
  moovieItemContainer.classList.add('moovie-list-container');
  for (let i = 1; i <= number; i += 1) {
    moovieItemContainer.innerHTML += videoItemTemplate;
  }
  document.querySelector('.section-main').append(moovieItemContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCreator);

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
      document.querySelectorAll('.nlike').forEach((itemLike, index) => {
        itemLike.textContent = json[index].likes;
      });
    });
};

const initializeLikes = () => {
  document.querySelectorAll('.heart').forEach((moovitem, index) => {
    moovitem.addEventListener('click', () => {
      likeMoov(moovitem.nextElementSibling.value);
      document.querySelectorAll('#likeIcon')[index].classList.add('red');
      document.querySelectorAll('.nlike')[index].textContent = (parseInt(document.querySelectorAll('.nlike')[index].textContent, 10) + 1);
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
  document.querySelectorAll('.moovie-item-picture').forEach((item) => {
    const loadingImage = new Image(_images_loading_svg__WEBPACK_IMPORTED_MODULE_0__);
    loadingImage.src = _images_loading_svg__WEBPACK_IMPORTED_MODULE_0__;
    loadingImage.classList.add('moovie-item-image');
    loadingImage.classList.add('rotate');
    item.appendChild(loadingImage);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxV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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFX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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEcsc0VBQXNFLFdBQVc7QUFDakYsdUVBQXVFLGNBQWM7QUFDckYsZ0VBQWdFLFlBQVk7QUFDNUUsbUVBQW1FLDJFQUEyRTtBQUM5SSxTQUFTO0FBQ1QsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUN0SG9COztBQUUxQztBQUNBO0FBQ0EsbUNBQW1DLGdEQUFLO0FBQ3hDLHVCQUF1QixnREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9tb2JpbGUuY3NzPzg5ZTUiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRlckNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nbG9iYWxWYXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1zR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3B1cE1vZGFsLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2V0TG9hZGluZ0ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1saWdodDogI2UwZGNkYztcclxuICAtLWdyZXk6ICM4ODg7XHJcbiAgLS1kYXJrOiAjMGUwZTIyO1xyXG4gIC0tZGFuZ2VyOiAjZmY1YjU3O1xyXG4gIC0tc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuODQ4KTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5sb2dvIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoOTksIDIzLCAyMyk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxufVxyXG5cclxuLnNlY3Rpb24tbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAzJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICBwYWRkaW5nOiA0JTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDAgIGJsYWNrIGluc2V0O1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tbGlrZXMsXHJcbi5tb292aWUtaXRlbS1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogNTB2aCAvIDFmcjtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG15QW5pbWF0aW9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgfVxyXG5cclxuICAyNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5yb3RhdGUge1xyXG4gIGFuaW1hdGlvbjogbXlBbmltYXRpb24gMnMgZWFzZS1pbi1vdXQgMXMgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiNidG4tcmVzZXJ2ZSB7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmhlYXJ0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhlYXJ0OmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuLmxpa2VzLW51bWJlciB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2IoMTMzLCAyOSwgMjkpO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm5vQ29tbWVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMzLCAyMjUsIDIyNSwgMC43NTcpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcC1tb2RhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTE0LCAxMDMsIDEwMywgMC4yMTYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5wb3AtY29tZW50ZXJzLWl0ZW1zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbi5pbWFnZS1wb3B1cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1MSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBjb2xvcjogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbn1cclxuXHJcbi5tb3ZpZS1kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG59XHJcblxyXG4ubW92aWUtdGl0bGUsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnRhZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJsYXRvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uZm9ybSB0ZXh0YXJlYSB7XHJcbiAgcGFkZGluZzogNCU7XHJcbn1cclxuXHJcbiNuYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuI2NvbW1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG59XHJcblxyXG4uYnRuY2xvc2Utc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMSU7XHJcbiAgbGVmdDogOTMlO1xyXG59XHJcblxyXG4ubW9vdmllLW5hbWUsXHJcbi5tb292aWUtY29tbWVudCxcclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb292aWUtY29tbWVudCxcclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5tb3ZpZS1yZXN1bWUge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ubW9yZS1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1vcmUtaW5mbyBsaSBkaXYge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubW92aWUtc3VtbWFyeSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5mYS1zdGFyIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZ2VucmUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm8tMiB7XHJcbiAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lcixcclxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4LCA4LCA4LCAwLjY3MSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XHJcbn1cclxuXHJcbi51c2VyLWNvbW1lbnRzIHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xyXG59XHJcblxyXG4udXNlci1uZXctY29tbWVudHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE3OCk7XHJcbn1cclxuXHJcbi5idG5Db21tZW50LFxyXG4uYnRuLXJlc2VydmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmJ0bi1yZXNlcnZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnVzZXItY29tbWVudHMgcCB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbmZvb3RlciBwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0Nik7XHJcbn1cclxuXHJcbiNzcGluIHtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2VlbW9yZUNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2J0blNlZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2J0blNlZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwIGJsYWNrO1xyXG59XHJcblxyXG4uaGFtYnVyZ3VlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGFtYnVyZ3VlckltZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9vdmllc051bWJlciB7XHJcbiAgY29sb3I6IHJnYigxMzMsIDI5LCAyOSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVB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O0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1saWdodDogI2UwZGNkYztcXHJcXG4gIC0tZ3JleTogIzg4ODtcXHJcXG4gIC0tZGFyazogIzBlMGUyMjtcXHJcXG4gIC0tZGFuZ2VyOiAjZmY1YjU3O1xcclxcbiAgLS1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDQ3LCA0NywgMC44NDgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgyIHNwYW4ge1xcclxcbiAgY29sb3I6IHJnYig5OSwgMjMsIDIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtcyB7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgdWwgbGkgYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44MzEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmZjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLW1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnI7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW06aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwICBibGFjayBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWxpa2VzLFxcclxcbi5tb292aWUtaXRlbS1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0taW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA1MHZoIC8gMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0taW1hZ2UtZGVzY3JpcHRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG15QW5pbWF0aW9uIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgYW5pbWF0aW9uOiBteUFuaW1hdGlvbiAycyBlYXNlLWluLW91dCAxcyBhbHRlcm5hdGUgaW5maW5pdGU7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXJlc2VydmUge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtbnVtYmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiKDEzMywgMjksIDI5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Db21tZW50IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIyNSwgMjI1LCAwLjc1Nyk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3AtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDEwMywgMTAzLCAwLjIxNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbi5wb3AtY29tZW50ZXJzLWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlLFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJsYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuY2xvc2Utc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDElO1xcclxcbiAgbGVmdDogOTMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLW5hbWUsXFxyXFxuLm1vb3ZpZS1jb21tZW50LFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWNvbW1lbnQsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtcmVzdW1lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gbGkgZGl2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zdW1tYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLTIge1xcclxcbiAgcGFkZGluZy1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lcixcXHJcXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDgsIDgsIDAuNjcxKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5ldy1jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuQ29tbWVudCxcXHJcXG4uYnRuLXJlc2VydmUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVzZXJ2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHAge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwaW4ge1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWVtb3JlQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNidG5TZWUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuU2VlOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmd1ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01JTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ3VlckltZyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWVzTnVtYmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTMzLCAyOSwgMjkpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtaXRlbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnBvcC1tb2RhbCB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1wb3B1cCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICB9XHJcblxyXG4gIC5pbWctc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICB9XHJcblxyXG4gIC5jb21tZW50cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgfVxyXG5cclxuICAuZ2VucmUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLm1vcmUtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICAudXNlci1jb21tZW50cyBwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS1zdW1tYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXJlc3VtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXRpdGxlLFxyXG4gIC5tb292aWUtbmV3LWNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41JTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41JTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1uYW1lLFxyXG4gIC5tb292aWUtY29tbWVudCxcclxuICAubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5idG5jbG9zZS1zZWN0aW9uIHtcclxuICAgIHRvcDogMC43JTtcclxuICAgIGxlZnQ6IDkzJTtcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbXMgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtcyBsaSBoMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA1MCUpO1xyXG4gIH1cclxuXHJcbiAgLnNlZW1vcmVDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWluZXIsXHJcbiAgLnNlY3Rpb24tbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5tb292aWUtbGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1pdGVtIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG5cclxuICAuaGlkZUl0ZW0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2JpbGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3AtbW9kYWwge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlLXBvcHVwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdlbnJlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9yZS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItY29tbWVudHMgcCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLXN1bW1hcnkge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtcmVzdW1lIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICAgIHBhZGRpbmc6IDQlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS10aXRsZSxcXHJcXG4gIC5tb292aWUtbmV3LWNvbW1lbnQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vb3ZpZS1uYW1lLFxcclxcbiAgLm1vb3ZpZS1jb21tZW50LFxcclxcbiAgLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bmNsb3NlLXNlY3Rpb24ge1xcclxcbiAgICB0b3A6IDAuNyU7XFxyXFxuICAgIGxlZnQ6IDkzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgbGkgYSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW1zIGxpIGgzIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VlbW9yZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lcixcXHJcXG4gIC5zZWN0aW9uLW1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLWl0ZW0ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmExO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2JpbGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vY3NzL21vYmlsZS5jc3MnO1xuaW1wb3J0IHsgaW5pdGlhdGl6ZUFsbE1vb3ZpZXMsIHNlZUJ1dHRvbkxpc3RuZWVyIH0gZnJvbSAnLi9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IGl0ZW1DcmVhdG9yIGZyb20gJy4vbW9kdWxlcy9pdGVtc0dlbmVyYXRvci5qcyc7XG5pbXBvcnQgeyBpbml0aWFsaXplTGlrZXMsIGxpa2VzUmVhZGVyIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2VDb250cm9sbGVyLmpzJztcbmltcG9ydCBnZXRNb292IGZyb20gJy4vbW9kdWxlcy9wb3B1cE1vZGFsLmpzJztcbmltcG9ydCBzZXRMb2FkaW5nSW1hZ2UgZnJvbSAnLi9tb2R1bGVzL3NldExvYWRpbmdJbWFnZS5qcyc7XG5cbml0ZW1DcmVhdG9yKDEyKTtcbnNldExvYWRpbmdJbWFnZSgpO1xuaW5pdGlhdGl6ZUFsbE1vb3ZpZXMoKTtcbmluaXRpYWxpemVMaWtlcygpO1xubGlrZXNSZWFkZXIoKTtcbmdldE1vb3YoKTtcbnNlZUJ1dHRvbkxpc3RuZWVyKCk7XG4iLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XG5pbXBvcnQgY291bnRlckl0ZW0gZnJvbSAnLi9pdGVtQ291bnRlci5qcyc7XG5cbmNvbnN0IGZ1bGxNb292QXJyYXkgPSBbXTtcbmNvbnN0IGRpc3BsYXlNb292ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKFZhcmlhYmxlLnR2bWF6ZUFwaVVybCArIGlkKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBmdWxsTW9vdkFycmF5LnB1c2goanNvbik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKVtpZCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtLWltYWdlJylbaWQgLSAxXS5zcmMgPSBqc29uLmltYWdlLm9yaWdpbmFsO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tbmFtZScpW2lkIC0gMV0udGV4dENvbnRlbnQgPSBqc29uLm5hbWU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllSWQnKVtpZCAtIDFdLnZhbHVlID0ganNvbi5pZDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYXRpemVBbGxNb292aWVzID0gKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IGNvdW50ZXJJdGVtKCk7IGluZGV4ICs9IDEpIHtcbiAgICAgIGRpc3BsYXlNb292KGluZGV4KTtcbiAgICB9XG4gIH0pO1xuICBWYXJpYWJsZS5tb292aWVzTnVtYmVyLnRleHRDb250ZW50ID0gY291bnRlckl0ZW0oKTtcbn07XG5cbmNvbnN0IHNlZUJ1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtJykuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gNSkge1xuICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlSXRlbScpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZWVCdXR0b25MaXN0bmVlciA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNlZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuaW5uZXJIVE1MID09PSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtc2xhc2hcIj48L2k+IFNlZSBMZXNzJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNlZScpLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4gU2VlIE1vcmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPiBTZWUgTGVzcyc7XG4gICAgfVxuICAgIHNlZUJ1dHRvbigpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGluaXRpYXRpemVBbGxNb292aWVzLCBmdWxsTW9vdkFycmF5LCBzZWVCdXR0b25MaXN0bmVlciwgZGlzcGxheU1vb3YsXG59O1xuIiwiaW1wb3J0IGNvbW1lbnRlckNvdW50ZXIgZnJvbSAnLi9jb21tZW50ZXJDb3VudGVyLmpzJztcbmltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcblxuY29uc3QgY3JlYXRlQ29tbWVudGVyID0gKGRhdGEsIHR5cGUpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbC5pbm5lckhUTUwgPSBgPGIgY2xhc3M9J2RhdGUnPiR7ZGF0YS5jcmVhdGlvbl9kYXRlfTwvYj4gJHtkYXRhLnVzZXJuYW1lfSA6IDxzcGFuIGNsYXNzID1cImNvbW1lbnRcIj7igJnigJkgJHtkYXRhLmNvbW1lbnR9IOKAmeKAmTwvc3Bhbj5gO1xuICByZXR1cm4gZWw7XG59O1xuXG5jb25zdCBub0NvbW1lbnRGdW5jdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ25vQ29tbWVudCcpO1xuICBlbC50ZXh0Q29udGVudCA9ICdObyBjb21tZW50cyAhISc7XG4gIHJldHVybiBlbDtcbn07XG5jb25zdCBjb21tZW50c1JlYWRlciA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1jb21tZW50cz9pdGVtX2lkPSR7aWR9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgd2hpbGUgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWNvbW1lbnRzJykuZmlyc3RDaGlsZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAoanNvbi5sZW5ndGggPj0gMCkge1xuICAgICAgICBqc29uLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmFwcGVuZChjcmVhdGVDb21tZW50ZXIoY29tbWVudCwgJ3AnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBkaXNwbGF5IGNvdW50ZXIgaXRlbXMgaW4gdGhlIGNvbnRhaW5lclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHNDb3VudGVyJykuaW5uZXJIVE1MID0gY29tbWVudGVyQ291bnRlcigpO1xuICAgICAgfSBlbHNlIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5hcHBlbmQobm9Db21tZW50RnVuY3Rpb24oKSk7IH1cbiAgICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRNb292ID0gYXN5bmMgKGNvbW1lbnRPYmplY3QpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9Y29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogY29tbWVudE9iamVjdC5pdGVtX2lkLFxuICAgICAgdXNlcm5hbWU6IGNvbW1lbnRPYmplY3QudXNlcm5hbWUsXG4gICAgICBjb21tZW50OiBjb21tZW50T2JqZWN0LmNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gIH0pO1xuICBjb21tZW50c1JlYWRlcihjb21tZW50T2JqZWN0Lml0ZW1faWQpO1xufTtcblxuZXhwb3J0IHsgY29tbWVudE1vb3YsIGNvbW1lbnRzUmVhZGVyIH07XG4iLCJjb25zdCBjb21tZW50ZXJDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLWl0ZW0nKTtcbiAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRlckNvdW50ZXI7IiwiY29uc3QgdHZtYXplQXBpVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJztcbmNvbnN0IGludm9sdmVtZW50QXBpVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1VuRE5IanB4Y2JqbmN4NmJSeVExLyc7XG5jb25zdCBtb292SXRlbUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtLWltYWdlJyk7XG5jb25zdCBtb292SXRlbU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1uYW1lJyk7XG5jb25zdCBtb292SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllSWQnKTtcbmNvbnN0IG1vb3ZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtJyk7XG5jb25zdCBidG5MaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcbmNvbnN0IG1vb3ZpZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWxpc3QtY29udGFpbmVyJyk7XG5jb25zdCBtb292aWVzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZXNOdW1iZXInKTtcbmNvbnN0IG1vb3ZJZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZJZCcpO1xuY29uc3QgdXNlckNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyQ29tbWVudCcpO1xuY29uc3QgdXNlck5hbWVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VzZXJOYW1lJyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuZXhwb3J0IHtcbiAgbW9vdkl0ZW1OYW1lLFxuICB0dm1hemVBcGlVcmwsXG4gIG1vb3ZJdGVtSW1hZ2UsXG4gIGludm9sdmVtZW50QXBpVXJsLFxuICBtb292SWQsXG4gIG1vb3ZJdGVtLFxuICBidG5MaWtlLFxuICBtb292aWVMaXN0LFxuICBtb292aWVzTnVtYmVyLFxuICBtb292SWRQb3B1cCxcbiAgZm9ybSxcbiAgdXNlckNvbW1lbnRQb3B1cCxcbiAgdXNlck5hbWVQb3B1cCxcbn07IiwiY29uc3QgY291bnRlckl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdmllLWxpc3QtY29udGFpbmVyJyk7XG4gIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudGVySXRlbTsiLCJjb25zdCB2aWRlb0l0ZW1UZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLXBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiaXRlbS1uYW1lXCI+TmFtZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLWxpa2VzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhcnRcIiA+PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCIgaWQ9XCJsaWtlSWNvblwiPjwvaT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkbW9vdmllXCIgdmFsdWU9XCJcIiBjbGFzcz1cIm1vb3ZpZUlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlcy1udW1iZXJcIj48c3BhbiBjbGFzcz1cIm5saWtlXCIgPjwvc3Bhbj4gbGlrZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtaXRlbS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bkNvbW1lbnRcIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tcmVzZXJ2ZVwiPlJlc2VydmF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbmNvbnN0IGl0ZW1DcmVhdG9yID0gKG51bWJlcikgPT4ge1xuICBjb25zdCBtb292aWVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vb3ZpZUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9vdmllLWxpc3QtY29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSArPSAxKSB7XG4gICAgbW9vdmllSXRlbUNvbnRhaW5lci5pbm5lckhUTUwgKz0gdmlkZW9JdGVtVGVtcGxhdGU7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tbWFpbicpLmFwcGVuZChtb292aWVJdGVtQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1DcmVhdG9yOyIsImltcG9ydCAqIGFzIFZhcmlhYmxlIGZyb20gJy4vZ2xvYmFsVmFyLmpzJztcblxuY29uc3QgbGlrZU1vb3YgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9bGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgfSksXG4gICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXG4gIH0pO1xufTtcblxuY29uc3QgbGlrZXNSZWFkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWxpa2VzL2ApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ubGlrZScpLmZvckVhY2goKGl0ZW1MaWtlLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtTGlrZS50ZXh0Q29udGVudCA9IGpzb25baW5kZXhdLmxpa2VzO1xuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplTGlrZXMgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFydCcpLmZvckVhY2goKG1vb3ZpdGVtLCBpbmRleCkgPT4ge1xuICAgIG1vb3ZpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGlrZU1vb3YobW9vdml0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnZhbHVlKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaWtlSWNvbicpW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ubGlrZScpW2luZGV4XS50ZXh0Q29udGVudCA9IChwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmxpa2UnKVtpbmRleF0udGV4dENvbnRlbnQsIDEwKSArIDEpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRNb292LCBjb21tZW50c1JlYWRlciB9IGZyb20gJy4vY29tbWVudENvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICogYXMgVmFyaWFibGUgZnJvbSAnLi9nbG9iYWxWYXIuanMnO1xuXG5jb25zdCBjb21tZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb292SWQnKS52YWx1ZSxcbiAgICAgIHVzZXJuYW1lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyQ29tbWVudCcpLnZhbHVlLFxuICAgIH07XG4gICAgY29tbWVudE1vb3YoZGF0YSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKS5yZXNldCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHBvcHVwID0gKCkgPT4ge1xuICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXInKTtcbiAgY29uc3Qgc2VjdGlvbkNvbW1lbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbkNvbW1lbnRlci5jbGFzc05hbWUgPSAncG9wLW1vZGFsJztcbiAgc2VjdGlvbkNvbW1lbnRlci5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJidG5jbG9zZS1zZWN0aW9uXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cFwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwb3AtY29tZW50ZXJzLWl0ZW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctc2VjdGlvblwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiBjbGFzcz1cImltYWdlLXBvcHVwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtdGl0bGVcIj48aDEgY2xhc3M9XCJtb292aWUtbmFtZVwiPk1PVklFIE5BTUU8L2gxPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXJlc3VtZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZS1zdW1tYXJ5XCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+QWJvdXQ6IDwvc3Bhbj5cIlwiPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbWllcmVkLWRhdGVcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5QcmVtaWVyZWQ6IDwvc3Bhbj4yMDEzLTAzLTA0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZC1kYXRlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+RW5kZWQ6IDwvc3Bhbj4yMDE2LTAzLTA0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+TGFuZ3VhZ2U6IDwvc3Bhbj5FbmdsaXNoPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaW5mby0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdlbnJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImdlbnJlXCI+PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+UmF0aW5nOiA8L3NwYW4+NC41NjwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkbW9vdmllXCIgdmFsdWU9XCJcIiBjbGFzcz1cIm1vb3ZJZFwiPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtdGl0bGVcIj48aDIgY2xhc3M9XCJtb292aWUtY29tbWVudFwiPkNvbW1lbnRzKDxzcGFuIGlkPVwiY29tbWVudHNDb3VudGVyXCI+MDwvc3Bhbj4pPC9oMj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWNvbW1lbnRzLWNvbnRhaW5lclwiIGlkPVwiY29tbWVudHMtc2VjXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1jb21tZW50c1wiIGlkPVwiY29tbWVudHMtaXRlbVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLW5ldy1jb21tZW50XCI+PGgyIGNsYXNzPVwibW9vdmllLW5ldy1jb21tZW50LXRpdGxlXCI+QWRkIGEgQ29tbWVudDwvaDI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtZm9ybS1jb21tZW50XCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgaWQ9XCJ1c2VyTmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgIHJvd3M9XCIxMFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJ1c2VyQ29tbWVudFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0cy4uLlwiXG4gICAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbmA7XG5cbiAgcG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbW1lbnRlcik7XG4gIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2VjdGlvbkNvbW1lbnRlci5pbm5lckhUTUwgPSAnJztcbiAgICBzZWN0aW9uQ29tbWVudGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldE1vb3YgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Db21tZW50JykuZm9yRWFjaCgoYnRuTW9vdkNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgYnRuTW9vdkNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBtb292SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllSWQnKVtpbmRleF0udmFsdWU7XG4gICAgICBhd2FpdCBmZXRjaChWYXJpYWJsZS50dm1hemVBcGlVcmwgKyBtb292SWQpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xuICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICBwb3B1cCgpO1xuICAgICAgICAgIGNvbW1lbnRMaXN0ZW5lcigpO1xuICAgICAgICAgIGNvbW1lbnRzUmVhZGVyKGpzb24uaWQpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb292SWQnKS52YWx1ZSA9IGpzb24uaWQ7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZS1uYW1lJykuaW5uZXJIVE1MID0ganNvbi5uYW1lO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1wb3B1cCcpLnNyYyA9IGpzb24uaW1hZ2Uub3JpZ2luYWw7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXN1bW1hcnknKS5pbm5lckhUTUwgPSBqc29uLnN1bW1hcnk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZW1pZXJlZC1kYXRlJykuaW5uZXJIVE1MID0gYFByZW1pZXJlZCBEYXRlIDoke2pzb24ucHJlbWllcmVkfWA7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kYXRlJykuaW5uZXJIVE1MID0gYEVuZCBEYXRlOiR7anNvbi5lbmRlZH1gO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYW5ndWFnZScpLmlubmVySFRNTCA9IGBMYW5ndWFnZSA6JHtqc29uLmxhbmd1YWdlfWA7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlJykuaW5uZXJIVE1MID0gYEdlbnJlOiR7anNvbi5nZW5yZXN9YDtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0aW5nJykuaW5uZXJIVE1MID0gYFJhdGluZzogJHtcIjxpIGNsYXNzPSdmYS1zb2xpZCBmYS1zdGFyJz48L2k+XCIucmVwZWF0KE1hdGguZmxvb3IoanNvbi5yYXRpbmcuYXZlcmFnZSkpfWA7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vb3Y7IiwiaW1wb3J0IGltYWdlIGZyb20gJy4uL2ltYWdlcy9sb2FkaW5nLnN2Zyc7XG5cbmNvbnN0IHNldExvYWRpbmdJbWFnZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtLXBpY3R1cmUnKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbG9hZGluZ0ltYWdlID0gbmV3IEltYWdlKGltYWdlKTtcbiAgICBsb2FkaW5nSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgbG9hZGluZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ21vb3ZpZS1pdGVtLWltYWdlJyk7XG4gICAgbG9hZGluZ0ltYWdlLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZGluZ0ltYWdlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXRMb2FkaW5nSW1hZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9