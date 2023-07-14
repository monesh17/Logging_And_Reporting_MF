"use strict";
(self["webpackChunkv1688800477434"] = self["webpackChunkv1688800477434"] || []).push([[375],{

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (strict) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(2244);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: consume shared module (default) antd@^4.24.0 (strict) (fallback: ../node_modules/antd/es/index.js)
var es_index_js_ = __webpack_require__(5298);
;// CONCATENATED MODULE: ./src/Button.js


console.log(
  "REMOTE FEDERATION MANAGEMENT: using remote version: " + (__webpack_require__(4147)/* .version */ .i8)
);
const MyButton = ({ children }) => /* @__PURE__ */ index_js_default().createElement(es_index_js_.Button, {
  type: "primary",
  style: { background: "green" }
}, children);
/* harmony default export */ const Button = (MyButton);

;// CONCATENATED MODULE: ./src/Carousel.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};


const MyCarousel = (_a) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ index_js_default().createElement(es_index_js_.Carousel, __spreadValues({}, props), children);
};
/* harmony default export */ const Carousel = (MyCarousel);

;// CONCATENATED MODULE: ./src/TextField.js
var TextField_defProp = Object.defineProperty;
var TextField_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TextField_hasOwnProp = Object.prototype.hasOwnProperty;
var TextField_propIsEnum = Object.prototype.propertyIsEnumerable;
var TextField_defNormalProp = (obj, key, value) => key in obj ? TextField_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TextField_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TextField_hasOwnProp.call(b, prop))
      TextField_defNormalProp(a, prop, b[prop]);
  if (TextField_getOwnPropSymbols)
    for (var prop of TextField_getOwnPropSymbols(b)) {
      if (TextField_propIsEnum.call(b, prop))
        TextField_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


const TextField = (props) => /* @__PURE__ */ index_js_default().createElement(es_index_js_.Input, TextField_spreadValues({}, props));
/* harmony default export */ const src_TextField = (TextField);

// EXTERNAL MODULE: ../node_modules/antd/dist/antd.less
var antd = __webpack_require__(4850);
;// CONCATENATED MODULE: ./src/App.js





const App = () => /* @__PURE__ */ index_js_default().createElement("div", null, /* @__PURE__ */ index_js_default().createElement("h1", null, "DSL Test Page"), /* @__PURE__ */ index_js_default().createElement(Button, null, "Something buttony"), /* @__PURE__ */ index_js_default().createElement(src_TextField, null), /* @__PURE__ */ index_js_default().createElement(Carousel, {
  slidesToShow: 4,
  style: { maxHeight: 200 }
}, /* @__PURE__ */ index_js_default().createElement("div", null, "1"), /* @__PURE__ */ index_js_default().createElement("div", null, "2"), /* @__PURE__ */ index_js_default().createElement("div", null, "3"), /* @__PURE__ */ index_js_default().createElement("div", null, "4")));
/* harmony default export */ const src_App = (App);

// EXTERNAL MODULE: ../node_modules/react-dom/client.js
var client = __webpack_require__(7634);
;// CONCATENATED MODULE: ./src/bootstrap.js



const container = document.getElementById("root");
const root = (0,client/* createRoot */.s)(container);
root.render(/* @__PURE__ */ index_js_default().createElement(src_App, null));


/***/ }),

/***/ 2445:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = {"i8":"0.5.0"};

/***/ })

}]);