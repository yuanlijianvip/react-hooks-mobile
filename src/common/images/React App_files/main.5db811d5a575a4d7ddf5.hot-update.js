webpackHotUpdate("main",{

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/common/css/common.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??postcss!./src/common/css/common.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js */ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/icon_menu.png */ "./src/common/images/icon_menu.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/icon_user.png */ "./src/common/images/icon_user.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/teacher_email.png */ "./src/common/images/teacher_email.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/teacher_phone.png */ "./src/common/images/teacher_phone.png"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/line.jpg */ "./src/common/images/line.jpg"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/menu.png */ "./src/common/images/menu.png"));

// Module
exports.push([module.i, "#header {\n  height: 1.2rem;\n  background: #323436;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n}\n.menu {\n  position: absolute;\n  width: 0.53333333rem;\n  height: 0.46666667rem;\n  left: 0.26666667rem;\n  top: 0.37333333rem;\n}\n.menu a {\n  text-indent: -999px;\n  overflow: hidden;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;\n  background-size: 100% 100%;\n}\n.logo {\n  width: 2.44rem;\n  height: 0.58666667rem;\n  margin: 0 auto;\n  padding: 0.30666667rem 0.93333333rem 0;\n  /* background: url(\"../images/logo.jpg\") no-repeat; */\n  background-origin: content-box;\n  background-size: 100% auto;\n  text-indent: -999px;\n  overflow: hidden;\n}\n.user {\n  width: 0.66666667rem;\n  height: 0.70666667rem;\n  position: absolute;\n  top: 0.22666667rem;\n  right: 0.26666667rem;\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% auto;\n}\n#main {\n  position: relative;\n  z-index: 1;\n  padding-top: 1.2rem;\n  min-height: 12.82666667rem;\n  background-color: #f2f9fc;\n}\n#footer {\n  background: #323436;\n  padding-top: 0.06666667rem;\n}\n.copyright {\n  text-align: center;\n  font: 0.29333333rem / 0.90666667rem \"微软雅黑\";\n  color: #868b8d;\n  height: 0.98666667rem;\n  background: #2d2f30;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.link {\n  font: 0.32rem / 1.10666667rem fzlt;\n  padding: 0 0.26666667rem;\n}\n.link a {\n  color: #fff;\n}\n.link a:nth-of-type(1) {\n  float: left;\n  padding-right: 0.42666667rem;\n}\n.link a:nth-of-type(1)::before {\n  content: '';\n  width: 0.48rem;\n  height: 0.38666667rem;\n  display: inline-block;\n  vertical-align: top;\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat 0 0 / 100% 100%;\n  margin: 0.37333333rem 0.30666667rem 0 0.58666667rem;\n}\n.link a:nth-of-type(2) {\n  float: left;\n}\n.link a:nth-of-type(2)::before {\n  content: '';\n  width: 0.42666667rem;\n  height: 0.45333333rem;\n  display: inline-block;\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat 0 0 / 100% 100%;\n  vertical-align: top;\n  margin: 0.33333333rem 0.21333333rem 0 0.58666667rem;\n}\n.foot_nav {\n  padding: 0 0.26666667rem 0.34666667rem;\n}\n.foot_nav a {\n  float: left;\n  width: 2.36rem;\n  font: 0.32rem / 0.62666667rem \"微软雅黑\";\n  color: #adaeae;\n  text-align: center;\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat right center / 0.02666667rem 0.34666667rem;\n}\n.foot_nav a:nth-of-type(4) {\n  background: none;\n}\n#menu {\n  box-sizing: border-box;\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 1.2rem .5rem;\n  width: 4.5rem;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  z-index: 1;\n}\n#menu a {\n  display: block;\n  font: .3rem/.9rem \"宋体\";\n  border-bottom: 1px solid rgba(255, 255, 255, .3);\n  color: rgba(255, 255, 255, .8);\n}\n#menu a:before {\n  font-size: .4rem;\n  margin: 0 .1rem;\n  color: rgba(255, 255, 255, .6);\n  vertical-align: middle;\n}\n#menu a:first-child {\n  border-top: 1px solid rgba(255, 255, 255, .3);\n}\n", ""]);



/***/ }),

/***/ "./src/common/images/logo.jpg":
false

})
//# sourceMappingURL=main.5db811d5a575a4d7ddf5.hot-update.js.map