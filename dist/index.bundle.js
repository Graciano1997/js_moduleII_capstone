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
`, "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --light: #e0dcdc;\r\n  --grey: #888;\r\n  --dark: #0e0e22;\r\n  --danger: #ff5b57;\r\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n  --box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'montserrat', sans-serif;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(47, 47, 47, 0.848);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  background: var(--light);\r\n}\r\n\r\n.main-container {\r\n  display: flex;\r\n  margin-top: 3%;\r\n  flex-direction: column;\r\n  height: max-content;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: 1px solid var(--dark);\r\n  border-radius: 50%;\r\n  margin-left: 2rem;\r\n  cursor: pointer;\r\n  transition: all 1s 0.3s  ease-in-out;\r\n}\r\n\r\n.logo:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.logo h2 {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.logo h2 span {\r\n  color: rgb(99, 23, 23);\r\n}\r\n\r\n.nav-items {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  padding-right: 3rem;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.nav-list {\r\n  padding-left: 2rem;\r\n  display: flex;\r\n}\r\n\r\n.nav-list ul {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.nav-list ul li a {\r\n  color: var(--dark);\r\n  font-weight: 500;\r\n}\r\n\r\nbutton {\r\n  border: transparent;\r\n  cursor: pointer;\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.footer-container {\r\n  display: flex;\r\n  border: 2px solid var(--dark);\r\n}\r\n\r\n.section-main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 2%;\r\n  height: max-content;\r\n}\r\n\r\n.moovie-list-container {\r\n  display: grid;\r\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\r\n  justify-items: center;\r\n  row-gap: 3%;\r\n}\r\n\r\n.moovie-item {\r\n  display: grid;\r\n  grid-template: 1fr 1fr 1fr / 1fr;\r\n  width: 20vw;\r\n  height: 70vh;\r\n  background: #ffff;\r\n  padding: 4%;\r\n  border-radius: 15px;\r\n  transition: all 2s 1s ease-in-out;\r\n}\r\n\r\n.moovie-item:hover {\r\n  box-shadow: 5px 5px 0  black inset;\r\n}\r\n\r\n.moovie-item-likes,\r\n.moovie-item-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.moovie-item-image-container {\r\n  display: grid;\r\n  grid-template: 50vh / 1fr;\r\n}\r\n\r\n.moovie-item-image-description {\r\n  margin-top: 4%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n\r\n@keyframes myAnimation {\r\n  0% {\r\n    transform: rotate(10deg);\r\n  }\r\n\r\n  25% {\r\n    transform: rotate(40deg);\r\n  }\r\n\r\n  50% {\r\n    transform: rotate(60deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(270deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  animation: myAnimation 2s ease-in-out 1s alternate infinite;\r\n  width: 20%;\r\n  height: 20%;\r\n}\r\n\r\n.moovie-item-image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.moovie-item-options {\r\n  margin-top: 2%;\r\n  padding-bottom: 2%;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.moovie-item-options button {\r\n  padding: 2%;\r\n  width: 90%;\r\n}\r\n\r\n#btn-reserve {\r\n  width: 95%;\r\n}\r\n\r\n.heart {\r\n  text-align: center;\r\n  color: black;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  transition: 0.5s 1s ease-in-out;\r\n}\r\n\r\n.heart:hover {\r\n  color: red;\r\n  transform: scale(1.3);\r\n}\r\n\r\n.likes-number {\r\n  margin-top: 20%;\r\n  font-size: 13px;\r\n  font-weight: 700;\r\n  color: rgb(133, 29, 29);\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.noComment {\r\n  align-items: center;\r\n  padding-top: 4%;\r\n  text-align: center;\r\n  color: var(--light);\r\n}\r\n\r\n.popup-container {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background: rgba(233, 225, 225, 0.757);\r\n  z-index: 10;\r\n  backdrop-filter: blur(10px);\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.pop-modal {\r\n  position: relative;\r\n  margin: 2rem;\r\n  margin-top: 1%;\r\n  margin-bottom: 1rem;\r\n  background: rgba(114, 103, 103, 0.216);\r\n  border-radius: 15px;\r\n  padding: 1%;\r\n}\r\n\r\n.pop-comenters-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.img-section {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  height: 75vh;\r\n}\r\n\r\n.image-popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: fill;\r\n  border-radius: 10px;\r\n}\r\n\r\n.close-popup {\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  width: max-content;\r\n  height: max-content;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  padding-right: 5%;\r\n  color: rgba(0, 0, 0, 0.851);\r\n  transition: all 1s 1s ease-in-out;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.2);\r\n  color: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.movie-details {\r\n  margin-top: 2%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: rgba(0, 0, 0, 0.527);\r\n  color: white;\r\n  width: 60vw;\r\n}\r\n\r\n.movie-title,\r\n.moovie-new-comment {\r\n  color: black;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  margin-top: 2%;\r\n}\r\n\r\n.tag {\r\n  font-weight: 700;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: start;\r\n  padding-bottom: 1%;\r\n  font-size: 14px;\r\n  font-family: \"lato\", sans-serif;\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.form input {\r\n  padding: 2%;\r\n}\r\n\r\n.form textarea {\r\n  padding: 4%;\r\n}\r\n\r\n#name {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n#comment {\r\n  display: flex;\r\n  width: max-content;\r\n  padding: 0.3rem 1rem;\r\n}\r\n\r\n.btnclose-section {\r\n  position: absolute;\r\n  top: 1%;\r\n  left: 93%;\r\n}\r\n\r\n.moovie-name,\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 3rem;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.moovie-comment,\r\n.moovie-new-comment-title {\r\n  font-size: 2rem;\r\n}\r\n\r\n.moovie-new-comment-title {\r\n  padding-top: 1%;\r\n}\r\n\r\n.movie-resume {\r\n  margin-top: 1%;\r\n  padding: 2%;\r\n}\r\n\r\n.more-info {\r\n  display: flex;\r\n  width: 100%;\r\n  padding: 2%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.more-info li div {\r\n  margin-top: 2%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.movie-summary {\r\n  font-size: 1rem;\r\n  text-align: justify;\r\n}\r\n\r\n.fa-star {\r\n  color: yellow;\r\n}\r\n\r\n.genre-container {\r\n  width: 100%;\r\n}\r\n\r\n.info-2 {\r\n  padding-right: 3%;\r\n}\r\n\r\n.user-comments-container,\r\n.moovie-form-comment {\r\n  margin-top: 2%;\r\n  padding-left: 4%;\r\n}\r\n\r\n.user-comments-container {\r\n  background: rgba(8, 8, 8, 0.671);\r\n  color: #fff;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-comments {\r\n  height: 15vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.moovie-form-comment {\r\n  padding-top: 1%;\r\n  padding-bottom: 0.5%;\r\n}\r\n\r\n.user-new-comments-container {\r\n  margin-top: 1%;\r\n}\r\n\r\n.comments-container {\r\n  margin-top: 1%;\r\n  width: 60vw;\r\n  background: rgba(0, 0, 0, 0.178);\r\n}\r\n\r\n.btnComment,\r\n.btn-reserve {\r\n  background: rgba(0, 0, 0, 0.831);\r\n  border-radius: 10px;\r\n  color: #ffff;\r\n  text-align: center;\r\n  padding: 2%;\r\n}\r\n\r\n.btn-reserve {\r\n  background: rgba(99, 23, 23, 0.813);\r\n}\r\n\r\n.date {\r\n  font-style: oblique;\r\n  text-decoration: underline;\r\n}\r\n\r\nfooter {\r\n  margin-top: 8%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-block: 2rem;\r\n  color: #ffff;\r\n  padding-bottom: 2%;\r\n}\r\n\r\nfooter p {\r\n  transition: all 0.5s 2s ease-in-out;\r\n}\r\n\r\n.user-comments p {\r\n  margin-top: 2%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\nfooter p:hover {\r\n  transform: scale(1.5);\r\n}\r\n\r\n.comment {\r\n  color: black;\r\n  background-color: rgba(255, 255, 255, 0.646);\r\n}\r\n\r\n#spin {\r\n  font-size: 20pt;\r\n}\r\n\r\n.item-name {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n}\r\n\r\n.seemoreContainer {\r\n  display: none;\r\n}\r\n\r\n#btnSee {\r\n  background: rgba(99, 23, 23, 0.813);\r\n  color: white;\r\n  padding: 2%;\r\n  cursor: pointer;\r\n  transition: all 0.4s 1s ease-in-out;\r\n}\r\n\r\n#btnSee:hover {\r\n  box-shadow: 5px 5px 0 black;\r\n}\r\n\r\n.hamburguer {\r\n  display: block;\r\n  border: transparent;\r\n  margin-left: -5%;\r\n  background: transparent;\r\n}\r\n\r\n.hamburguerImg {\r\n  color: white;\r\n}\r\n\r\n.mooviesNumber {\r\n  color: rgb(133, 29, 29);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_itemsGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemsGenerator */ "./src/modules/itemsGenerator.js");
/* harmony import */ var _modules_likeController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likeController.js */ "./src/modules/likeController.js");
/* harmony import */ var _modules_popupModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popupModal.js */ "./src/modules/popupModal.js");
/* harmony import */ var _modules_setLoadingImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/setLoadingImage.js */ "./src/modules/setLoadingImage.js");








(0,_modules_itemsGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(10);
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
      console.log(json.id);
    });
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index <=(0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); index += 1) {
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
    for (let i = 1; i <= number; i++) {
        moovieItemContainer.innerHTML += videoItemTemplate;
    }
    document.querySelector('.section-main').append(moovieItemContainer);
}

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
      document.querySelectorAll('.nlike')[index].textContent= (parseInt(document.querySelectorAll('.nlike')[index].textContent)+1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFGQUFxRixLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0s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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEcsc0VBQXNFLFdBQVc7QUFDakYsdUVBQXVFLGNBQWM7QUFDckYsZ0VBQWdFLFlBQVk7QUFDNUUsbUVBQW1FLDJFQUEyRTtBQUM5SSxTQUFTO0FBQ1QsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDdEhvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQUs7QUFDeEMsdUJBQXVCLGdEQUFLO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL21vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL2Nzcy9tb2JpbGUuY3NzPzg5ZTUiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FwaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbW1lbnRlckNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nbG9iYWxWYXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9qc19tb2R1bGVpaV9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1zR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vanNfbW9kdWxlaWlfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3B1cE1vZGFsLmpzIiwid2VicGFjazovL2pzX21vZHVsZWlpX2NhcHN0b25lLy4vc3JjL21vZHVsZXMvc2V0TG9hZGluZ0ltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1saWdodDogI2UwZGNkYztcclxuICAtLWdyZXk6ICM4ODg7XHJcbiAgLS1kYXJrOiAjMGUwZTIyO1xyXG4gIC0tZGFuZ2VyOiAjZmY1YjU3O1xyXG4gIC0tc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIC0tYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogJ21vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCA0NywgNDcsIDAuODQ4KTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0KTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgMC4zcyAgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5sb2dvIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5sb2dvIGgyIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoOTksIDIzLCAyMyk7XHJcbn1cclxuXHJcbi5uYXYtaXRlbXMge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubmF2LWxpc3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgdWwgbGkgYSB7XHJcbiAgY29sb3I6IHZhcigtLWRhcmspO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrKTtcclxufVxyXG5cclxuLnNlY3Rpb24tbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tb292aWUtbGlzdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgcm93LWdhcDogMyU7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmcjtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgcGFkZGluZzogNCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwICBibGFjayBpbnNldDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLWxpa2VzLFxyXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGU6IDUwdmggLyAxZnI7XHJcbn1cclxuXHJcbi5tb292aWUtaXRlbS1pbWFnZS1kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBteUFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ucm90YXRlIHtcclxuICBhbmltYXRpb246IG15QW5pbWF0aW9uIDJzIGVhc2UtaW4tb3V0IDFzIGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4ubW9vdmllLWl0ZW0taW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAyJTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4jYnRuLXJlc2VydmUge1xyXG4gIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5oZWFydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oZWFydDpob3ZlciB7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcbi5saWtlcy1udW1iZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDEzMywgMjksIDI5KTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5ub0NvbW1lbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xyXG59XHJcblxyXG4ucG9wdXAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMywgMjI1LCAyMjUsIDAuNzU3KTtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtbW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDExNCwgMTAzLCAxMDMsIDAuMjE2KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ucG9wLWNvbWVudGVycy1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWctc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uaW1hZ2UtcG9wdXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBmaWxsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1wb3B1cCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xyXG59XHJcblxyXG4ubW92aWUtZGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLm1vdmllLXRpdGxlLFxyXG4ubW9vdmllLW5ldy1jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50YWcge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0IHtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmZvcm0gdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDQlO1xyXG59XHJcblxyXG4jbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbn1cclxuXHJcbiNjb21tZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcclxufVxyXG5cclxuLmJ0bmNsb3NlLXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDElO1xyXG4gIGxlZnQ6IDkzJTtcclxufVxyXG5cclxuLm1vb3ZpZS1uYW1lLFxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9vdmllLWNvbW1lbnQsXHJcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG59XHJcblxyXG4ubW92aWUtcmVzdW1lIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLm1vcmUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tb3JlLWluZm8gbGkgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLm1vdmllLXN1bW1hcnkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZmEtc3RhciB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmdlbnJlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLTIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIsXHJcbi5tb292aWUtZm9ybS1jb21tZW50IHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoOCwgOCwgOCwgMC42NzEpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjUlO1xyXG59XHJcblxyXG4udXNlci1jb21tZW50cyB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41JTtcclxufVxyXG5cclxuLnVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi5jb21tZW50cy1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xyXG59XHJcblxyXG4uYnRuQ29tbWVudCxcclxuLmJ0bi1yZXNlcnZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuXHJcbi5idG4tcmVzZXJ2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJsb2NrOiAycmVtO1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbmZvb3RlciBwIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnVzZXItY29tbWVudHMgcCB7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbmZvb3RlciBwOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbi5jb21tZW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0Nik7XHJcbn1cclxuXHJcbiNzcGluIHtcclxuICBmb250LXNpemU6IDIwcHQ7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2VlbW9yZUNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2J0blNlZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2J0blNlZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwIGJsYWNrO1xyXG59XHJcblxyXG4uaGFtYnVyZ3VlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaGFtYnVyZ3VlckltZyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW9vdmllc051bWJlciB7XHJcbiAgY29sb3I6IHJnYigxMzMsIDI5LCAyOSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxQ0FBcUM7RUFDckMscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFh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InNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1saWdodDogI2UwZGNkYztcXHJcXG4gIC0tZ3JleTogIzg4ODtcXHJcXG4gIC0tZGFyazogIzBlMGUyMjtcXHJcXG4gIC0tZGFuZ2VyOiAjZmY1YjU3O1xcclxcbiAgLS1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdtb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoNDcsIDQ3LCA0NywgMC44NDgpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDAuM3MgIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBoMiBzcGFuIHtcXHJcXG4gIGNvbG9yOiByZ2IoOTksIDIzLCAyMyk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbXMge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHVsIGxpIGEge1xcclxcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODMxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZmY7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMyU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnI7XFxyXFxuICB3aWR0aDogMjB2dztcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDJzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW06aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAwICBibGFjayBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLWxpa2VzLFxcclxcbi5tb292aWUtaXRlbS1vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0taW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlOiA1MHZoIC8gMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0taW1hZ2UtZGVzY3JpcHRpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG15QW5pbWF0aW9uIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgYW5pbWF0aW9uOiBteUFuaW1hdGlvbiAycyBlYXNlLWluLW91dCAxcyBhbHRlcm5hdGUgaW5maW5pdGU7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtaXRlbS1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1pdGVtLW9wdGlvbnMge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMiU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWl0ZW0tb3B0aW9ucyBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLXJlc2VydmUge1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydDpob3ZlciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtbnVtYmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiKDEzMywgMjksIDI5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZCB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubm9Db21tZW50IHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyMzMsIDIyNSwgMjI1LCAwLjc1Nyk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3AtbW9kYWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxMTQsIDEwMywgMTAzLCAwLjIxNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbi5wb3AtY29tZW50ZXJzLWl0ZW1zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgd2lkdGg6IDYwdnc7XFxyXFxuICBoZWlnaHQ6IDc1dmg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGZpbGw7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NTEpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY29sb3I6IHJnYmEoOTksIDIzLCAyMywgMC44MTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlLFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDElO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJsYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogNCU7XFxyXFxufVxcclxcblxcclxcbiNuYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuY2xvc2Utc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDElO1xcclxcbiAgbGVmdDogOTMlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLW5hbWUsXFxyXFxuLm1vb3ZpZS1jb21tZW50LFxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vdmllLWNvbW1lbnQsXFxyXFxuLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb292aWUtbmV3LWNvbW1lbnQtdGl0bGUge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtcmVzdW1lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDElO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gbGkgZGl2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zdW1tYXJ5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiB5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZS1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLTIge1xcclxcbiAgcGFkZGluZy1yaWdodDogMyU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lcixcXHJcXG4ubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogNCU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgsIDgsIDgsIDAuNjcxKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xcclxcbiAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyLW5ldy1jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuQ29tbWVudCxcXHJcXG4uYnRuLXJlc2VydmUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgzMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmZmO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxufVxcclxcblxcclxcbi5idG4tcmVzZXJ2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAyMywgMjMsIDAuODEzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ibG9jazogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmZjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHAge1xcclxcbiAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHA6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ2KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NwaW4ge1xcclxcbiAgZm9udC1zaXplOiAyMHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWVtb3JlQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNidG5TZWUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMjMsIDIzLCAwLjgxMyk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuU2VlOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmd1ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01JTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ3VlckltZyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb292aWVzTnVtYmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTMzLCAyOSwgMjkpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtaXRlbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnBvcC1tb2RhbCB7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICB9XHJcblxyXG4gIC5jbG9zZS1wb3B1cCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICB9XHJcblxyXG4gIC5pbWctc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLWRldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICB9XHJcblxyXG4gIC5jb21tZW50cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgfVxyXG5cclxuICAuZ2VucmUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgLm1vcmUtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgfVxyXG5cclxuICAudXNlci1jb21tZW50cyBwIHtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS1zdW1tYXJ5IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXJlc3VtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1mb3JtLWNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIH1cclxuXHJcbiAgLm1vdmllLXRpdGxlLFxyXG4gIC5tb292aWUtbmV3LWNvbW1lbnQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41JTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41JTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1uYW1lLFxyXG4gIC5tb292aWUtY29tbWVudCxcclxuICAubW9vdmllLW5ldy1jb21tZW50LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC5idG5jbG9zZS1zZWN0aW9uIHtcclxuICAgIHRvcDogMC43JTtcclxuICAgIGxlZnQ6IDkzJTtcclxuICB9XHJcblxyXG4gIC5uYXYtaXRlbXMgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtcyBsaSBoMyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCA1MCUpO1xyXG4gIH1cclxuXHJcbiAgLnNlZW1vcmVDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWluZXIsXHJcbiAgLnNlY3Rpb24tbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5tb292aWUtbGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLm1vb3ZpZS1pdGVtIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAycyAxcyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZhMTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG5cclxuICAuaGlkZUl0ZW0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2JpbGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubmF2LWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3AtbW9kYWwge1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsb3NlLXBvcHVwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMiU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1nLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxuICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA3NXZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdlbnJlLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9yZS1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnVzZXItY29tbWVudHMgcCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLXN1bW1hcnkge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtcmVzdW1lIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxyXFxuICAgIHBhZGRpbmc6IDQlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLWZvcm0tY29tbWVudCB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS10aXRsZSxcXHJcXG4gIC5tb292aWUtbmV3LWNvbW1lbnQge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjUlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vb3ZpZS1uYW1lLFxcclxcbiAgLm1vb3ZpZS1jb21tZW50LFxcclxcbiAgLm1vb3ZpZS1uZXctY29tbWVudC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0bmNsb3NlLXNlY3Rpb24ge1xcclxcbiAgICB0b3A6IDAuNyU7XFxyXFxuICAgIGxlZnQ6IDkzJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtaXRlbXMgbGkgYSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWl0ZW1zIGxpIGgzIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VlbW9yZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRhaW5lcixcXHJcXG4gIC5zZWN0aW9uLW1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vb3ZpZS1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9vdmllLWl0ZW0ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnMgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZmExO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGlkZUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2JpbGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XHJcbmltcG9ydCAnLi9jc3MvbW9iaWxlLmNzcyc7XHJcbmltcG9ydCB7IGluaXRpYXRpemVBbGxNb292aWVzLCBzZWVCdXR0b25MaXN0bmVlciB9IGZyb20gJy4vbW9kdWxlcy9hcGlDb250cm9sbGVyLmpzJztcclxuaW1wb3J0IGl0ZW1DcmVhdG9yIGZyb20gJy4vbW9kdWxlcy9pdGVtc0dlbmVyYXRvcic7XHJcbmltcG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfSBmcm9tICcuL21vZHVsZXMvbGlrZUNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgZ2V0TW9vdiBmcm9tICcuL21vZHVsZXMvcG9wdXBNb2RhbC5qcyc7XHJcbmltcG9ydCBzZXRMb2FkaW5nSW1hZ2UgZnJvbSAnLi9tb2R1bGVzL3NldExvYWRpbmdJbWFnZS5qcyc7XHJcblxyXG5pdGVtQ3JlYXRvcigxMCk7XHJcbnNldExvYWRpbmdJbWFnZSgpO1xyXG5pbml0aWF0aXplQWxsTW9vdmllcygpO1xyXG5pbml0aWFsaXplTGlrZXMoKTtcclxubGlrZXNSZWFkZXIoKTtcclxuZ2V0TW9vdigpO1xyXG5zZWVCdXR0b25MaXN0bmVlcigpO1xyXG4iLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XHJcbmltcG9ydCBjb3VudGVySXRlbSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGZ1bGxNb292QXJyYXkgPSBbXTtcclxuY29uc3QgZGlzcGxheU1vb3YgPSBhc3luYyAoaWQpID0+IHtcclxuICBhd2FpdCBmZXRjaChWYXJpYWJsZS50dm1hemVBcGlVcmwgKyBpZClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgZnVsbE1vb3ZBcnJheS5wdXNoKGpzb24pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKVtpZCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZScpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0taW1hZ2UnKVtpZCAtIDFdLnNyYyA9IGpzb24uaW1hZ2Uub3JpZ2luYWw7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLW5hbWUnKVtpZCAtIDFdLnRleHRDb250ZW50ID0ganNvbi5uYW1lO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllSWQnKVtpZCAtIDFdLnZhbHVlID0ganNvbi5pZDtcclxuICAgICAgY29uc29sZS5sb2coanNvbi5pZCk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYXRpemVBbGxNb292aWVzID0gKCkgPT4ge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PWNvdW50ZXJJdGVtKCk7IGluZGV4ICs9IDEpIHtcclxuICAgICAgZGlzcGxheU1vb3YoaW5kZXgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFZhcmlhYmxlLm1vb3ZpZXNOdW1iZXIudGV4dENvbnRlbnQgPSBjb3VudGVySXRlbSgpO1xyXG59O1xyXG5cclxuY29uc3Qgc2VlQnV0dG9uID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb292aWUtaXRlbScpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPj0gNSkge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVJdGVtJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBzZWVCdXR0b25MaXN0bmVlciA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuU2VlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNlZScpLmlubmVySFRNTCA9PT0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPiBTZWUgTGVzcycpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNlZScpLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4gU2VlIE1vcmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNlZScpLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1zbGFzaFwiPjwvaT4gU2VlIExlc3MnO1xyXG4gICAgfVxyXG4gICAgc2VlQnV0dG9uKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBpbml0aWF0aXplQWxsTW9vdmllcywgZnVsbE1vb3ZBcnJheSwgc2VlQnV0dG9uTGlzdG5lZXIsIGRpc3BsYXlNb292IH07XHJcbiIsImltcG9ydCBjb21tZW50ZXJDb3VudGVyIGZyb20gJy4vY29tbWVudGVyQ291bnRlci5qcyc7XG5pbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnRlciA9IChkYXRhLCB0eXBlKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgZWwuaW5uZXJIVE1MID0gYDxiIGNsYXNzPSdkYXRlJz4ke2RhdGEuY3JlYXRpb25fZGF0ZX08L2I+ICR7ZGF0YS51c2VybmFtZX0gOiA8c3BhbiBjbGFzcyA9XCJjb21tZW50XCI+4oCZ4oCZICR7ZGF0YS5jb21tZW50fSDigJnigJk8L3NwYW4+YDtcbiAgcmV0dXJuIGVsO1xufTtcblxuY29uc3Qgbm9Db21tZW50RnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbC5jbGFzc0xpc3QuYWRkKCdub0NvbW1lbnQnKTtcbiAgZWwudGV4dENvbnRlbnQgPSAnTm8gY29tbWVudHMgISEnO1xuICByZXR1cm4gZWw7XG59O1xuY29uc3QgY29tbWVudHNSZWFkZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7VmFyaWFibGUuaW52b2x2ZW1lbnRBcGlVcmx9Y29tbWVudHM/aXRlbV9pZD0ke2lkfWApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHdoaWxlIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1jb21tZW50cycpLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGpzb24ubGVuZ3RoID49IDApIHtcbiAgICAgICAganNvbi5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItY29tbWVudHMnKS5hcHBlbmQoY3JlYXRlQ29tbWVudGVyKGNvbW1lbnQsICdwJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gZGlzcGxheSBjb3VudGVyIGl0ZW1zIGluIHRoZSBjb250YWluZXJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzQ291bnRlcicpLmlubmVySFRNTCA9IGNvbW1lbnRlckNvdW50ZXIoKTtcbiAgICAgIH0gZWxzZSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWNvbW1lbnRzJykuYXBwZW5kKG5vQ29tbWVudEZ1bmN0aW9uKCkpOyB9XG4gICAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50TW9vdiA9IGFzeW5jIChjb21tZW50T2JqZWN0KSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWNvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGNvbW1lbnRPYmplY3QuaXRlbV9pZCxcbiAgICAgIHVzZXJuYW1lOiBjb21tZW50T2JqZWN0LnVzZXJuYW1lLFxuICAgICAgY29tbWVudDogY29tbWVudE9iamVjdC5jb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICB9KTtcbiAgY29tbWVudHNSZWFkZXIoY29tbWVudE9iamVjdC5pdGVtX2lkKTtcbn07XG5cbmV4cG9ydCB7IGNvbW1lbnRNb292LCBjb21tZW50c1JlYWRlciB9O1xuIiwiY29uc3QgY29tbWVudGVyQ291bnRlciA9ICgpID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLWl0ZW0nKTtcclxuICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudGVyQ291bnRlcjsiLCJjb25zdCB0dm1hemVBcGlVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xyXG5jb25zdCBpbnZvbHZlbWVudEFwaVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VbkROSGpweGNiam5jeDZiUnlRMS8nO1xyXG5jb25zdCBtb292SXRlbUltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtLWltYWdlJyk7XHJcbmNvbnN0IG1vb3ZJdGVtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLW5hbWUnKTtcclxuY29uc3QgbW9vdklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZUlkJyk7XHJcbmNvbnN0IG1vb3ZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1pdGVtJyk7XHJcbmNvbnN0IGJ0bkxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZScpO1xyXG5jb25zdCBtb292aWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZS1saXN0LWNvbnRhaW5lcicpO1xyXG5jb25zdCBtb292aWVzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZXNOdW1iZXInKTtcclxuY29uc3QgbW9vdklkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJyk7XHJcbmNvbnN0IHVzZXJDb21tZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckNvbW1lbnQnKTtcclxuY29uc3QgdXNlck5hbWVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VzZXJOYW1lJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG5cclxuZXhwb3J0IHtcclxuICBtb292SXRlbU5hbWUsXHJcbiAgdHZtYXplQXBpVXJsLFxyXG4gIG1vb3ZJdGVtSW1hZ2UsXHJcbiAgaW52b2x2ZW1lbnRBcGlVcmwsXHJcbiAgbW9vdklkLFxyXG4gIG1vb3ZJdGVtLFxyXG4gIGJ0bkxpa2UsXHJcbiAgbW9vdmllTGlzdCxcclxuICBtb292aWVzTnVtYmVyLFxyXG4gIG1vb3ZJZFBvcHVwLFxyXG4gIGZvcm0sXHJcbiAgdXNlckNvbW1lbnRQb3B1cCxcclxuICB1c2VyTmFtZVBvcHVwLFxyXG59OyIsImNvbnN0IGNvdW50ZXJJdGVtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdmllLWxpc3QtY29udGFpbmVyJyk7XHJcbiAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBlbGVtZW50LmNoaWxkRWxlbWVudENvdW50O1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJJdGVtOyIsImNvbnN0IHZpZGVvSXRlbVRlbXBsYXRlID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLWl0ZW0tcGljdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vb3ZpZS1pdGVtLWltYWdlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJpdGVtLW5hbWVcIj5OYW1lPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtaXRlbS1saWtlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhcnRcIiA+PGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWhlYXJ0XCIgaWQ9XCJsaWtlSWNvblwiPjwvaT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRtb292aWVcIiB2YWx1ZT1cIlwiIGNsYXNzPVwibW9vdmllSWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXMtbnVtYmVyXCI+PHNwYW4gY2xhc3M9XCJubGlrZVwiID48L3NwYW4+IGxpa2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtaXRlbS1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuQ29tbWVudFwiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXJlc2VydmVcIj5SZXNlcnZhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuXHJcbmNvbnN0IGl0ZW1DcmVhdG9yID0gKG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbW9vdmllSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9vdmllSXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb292aWUtbGlzdC1jb250YWluZXInKTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgbW9vdmllSXRlbUNvbnRhaW5lci5pbm5lckhUTUwgKz0gdmlkZW9JdGVtVGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1tYWluJykuYXBwZW5kKG1vb3ZpZUl0ZW1Db250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVtQ3JlYXRvcjsiLCJpbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XG5cbmNvbnN0IGxpa2VNb292ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke1ZhcmlhYmxlLmludm9sdmVtZW50QXBpVXJsfWxpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICB9KTtcbn07XG5cbmNvbnN0IGxpa2VzUmVhZGVyID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmZXRjaChgJHtWYXJpYWJsZS5pbnZvbHZlbWVudEFwaVVybH1saWtlcy9gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmxpa2UnKS5mb3JFYWNoKChpdGVtTGlrZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbUxpa2UudGV4dENvbnRlbnQgPSBqc29uW2luZGV4XS5saWtlcztcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZUxpa2VzID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnQnKS5mb3JFYWNoKChtb292aXRlbSwgaW5kZXgpID0+IHtcbiAgICBtb292aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxpa2VNb292KG1vb3ZpdGVtLm5leHRFbGVtZW50U2libGluZy52YWx1ZSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlrZUljb24nKVtpbmRleF0uY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmxpa2UnKVtpbmRleF0udGV4dENvbnRlbnQ9IChwYXJzZUludChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmxpa2UnKVtpbmRleF0udGV4dENvbnRlbnQpKzEpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYWxpemVMaWtlcywgbGlrZXNSZWFkZXIgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRNb292LCBjb21tZW50c1JlYWRlciB9IGZyb20gJy4vY29tbWVudENvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgKiBhcyBWYXJpYWJsZSBmcm9tICcuL2dsb2JhbFZhci5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50TGlzdGVuZXIgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaXRlbV9pZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZJZCcpLnZhbHVlLFxyXG4gICAgICB1c2VybmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJOYW1lJykudmFsdWUsXHJcbiAgICAgIGNvbW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyQ29tbWVudCcpLnZhbHVlLFxyXG4gICAgfTtcclxuICAgIGNvbW1lbnRNb292KGRhdGEpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKS5yZXNldCgpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcG9wdXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc2VjdGlvbkNvbW1lbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBzZWN0aW9uQ29tbWVudGVyLmNsYXNzTmFtZSA9ICdwb3AtbW9kYWwnO1xyXG4gIHNlY3Rpb25Db21tZW50ZXIuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJidG5jbG9zZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLXBvcHVwXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJwb3AtY29tZW50ZXJzLWl0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgY2xhc3M9XCJpbWFnZS1wb3B1cFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+PGgxIGNsYXNzPVwibW9vdmllLW5hbWVcIj5NT1ZJRSBOQU1FPC9oMT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLXJlc3VtZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vdmllLXN1bW1hcnlcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5BYm91dDogPC9zcGFuPlwiXCI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJtb3JlLWluZm9cIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZW1pZXJlZC1kYXRlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+UHJlbWllcmVkOiA8L3NwYW4+MjAxMy0wMy0wNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVuZC1kYXRlXCI+IDxzcGFuIGNsYXNzPVwidGFnXCI+RW5kZWQ6IDwvc3Bhbj4yMDE2LTAzLTA0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFuZ3VhZ2VcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5MYW5ndWFnZTogPC9zcGFuPkVuZ2xpc2g8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaW5mby0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VucmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJnZW5yZVwiPjwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpbmdcIj4gPHNwYW4gY2xhc3M9XCJ0YWdcIj5SYXRpbmc6IDwvc3Bhbj40LjU2PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZG1vb3ZpZVwiIHZhbHVlPVwiXCIgY2xhc3M9XCJtb292SWRcIj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPjxoMiBjbGFzcz1cIm1vb3ZpZS1jb21tZW50XCI+Q29tbWVudHMoPHNwYW4gaWQ9XCJjb21tZW50c0NvdW50ZXJcIj4wPC9zcGFuPik8L2gyPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1jb21tZW50cy1jb250YWluZXJcIiBpZD1cImNvbW1lbnRzLXNlY1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1jb21tZW50c1wiIGlkPVwiY29tbWVudHMtaXRlbVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItbmV3LWNvbW1lbnRzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb292aWUtbmV3LWNvbW1lbnRcIj48aDIgY2xhc3M9XCJtb292aWUtbmV3LWNvbW1lbnQtdGl0bGVcIj5BZGQgYSBDb21tZW50PC9oMj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9vdmllLWZvcm0tY29tbWVudFwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIGlkPVwidXNlck5hbWVcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBpZD1cInVzZXJDb21tZW50XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHMuLi5cIlxyXG4gICAgICAgIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5gO1xyXG5cclxuICBwb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uQ29tbWVudGVyKTtcclxuICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcclxuICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZWN0aW9uQ29tbWVudGVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgc2VjdGlvbkNvbW1lbnRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyJyk7XHJcbiAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRNb292ID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5Db21tZW50JykuZm9yRWFjaCgoYnRuTW9vdkNvbW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBidG5Nb292Q29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgbW9vdklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vb3ZpZUlkJylbaW5kZXhdLnZhbHVlO1xyXG4gICAgICBhd2FpdCBmZXRjaChWYXJpYWJsZS50dm1hemVBcGlVcmwgKyBtb292SWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgcG9wdXAoKTtcclxuICAgICAgICAgIGNvbW1lbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgY29tbWVudHNSZWFkZXIoanNvbi5pZCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vdklkJykudmFsdWUgPSBqc29uLmlkO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb3ZpZS1uYW1lJykuaW5uZXJIVE1MID0ganNvbi5uYW1lO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlLXBvcHVwJykuc3JjID0ganNvbi5pbWFnZS5vcmlnaW5hbDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1zdW1tYXJ5JykuaW5uZXJIVE1MID0ganNvbi5zdW1tYXJ5O1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZW1pZXJlZC1kYXRlJykuaW5uZXJIVE1MID0gYFByZW1pZXJlZCBEYXRlIDoke2pzb24ucHJlbWllcmVkfWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWRhdGUnKS5pbm5lckhUTUwgPSBgRW5kIERhdGU6JHtqc29uLmVuZGVkfWA7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UnKS5pbm5lckhUTUwgPSBgTGFuZ3VhZ2UgOiR7anNvbi5sYW5ndWFnZX1gO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbnJlJykuaW5uZXJIVE1MID0gYEdlbnJlOiR7anNvbi5nZW5yZXN9YDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKS5pbm5lckhUTUwgPSBgUmF0aW5nOiAke1wiPGkgY2xhc3M9J2ZhLXNvbGlkIGZhLXN0YXInPjwvaT5cIi5yZXBlYXQoTWF0aC5mbG9vcihqc29uLnJhdGluZy5hdmVyYWdlKSl9YDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0TW9vdjsiLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvYWRpbmcuc3ZnJztcclxuXHJcbmNvbnN0IHNldExvYWRpbmdJbWFnZSA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9vdmllLWl0ZW0tcGljdHVyZScpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGxvYWRpbmdJbWFnZSA9IG5ldyBJbWFnZShpbWFnZSk7XHJcbiAgICBsb2FkaW5nSW1hZ2Uuc3JjID0gaW1hZ2U7XHJcbiAgICBsb2FkaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9vdmllLWl0ZW0taW1hZ2UnKTtcclxuICAgIGxvYWRpbmdJbWFnZS5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZGluZ0ltYWdlKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNldExvYWRpbmdJbWFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=