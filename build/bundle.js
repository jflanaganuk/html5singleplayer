/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n    constructor({x, spdX, y, spdY, name}){\n        this.x = x;\n        this.spdX = spdX;\n        this.y = y;\n        this.spdY = spdY;\n        this.name = name;\n    }\n\n    getX(){\n        return this.x;\n    }\n\n    getSpdX(){\n        return this.spdX;\n    }\n\n    getY(){\n        return this.y;\n    }\n\n    getSpdY(){\n        return this.spdY;\n    }\n\n    getName(){\n        return this.name;\n    }\n\n    setX(input) {\n        this.x = input;\n    }\n\n    setSpdX(input) {\n        this.spdX = input;\n    }\n\n    setY(input) {\n        this.y = input;\n    }\n\n    setSpdY(input) {\n        this.spdY = input;\n    }\n\n    setName(input) {\n        this.name = input;\n    }\n\n    update(ctx, width, height, message) {\n        this.x += this.spdX;\n        this.y += this.spdY;\n\n        if (this.x < 0 || this.x > width) {\n            console.log(message);\n            this.spdX = -this.spdX;\n        }\n\n        if (this.y < 0 || this.y > height) {\n            console.log(message);\n            this.spdY = -this.spdY;\n        }\n\n        this.draw(ctx);\n    }\n\n    draw(ctx) {\n       ctx.fillText(this.name, this.x, this.y); \n    }\n}\n\n//# sourceURL=webpack:///./src/classes/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/player */ \"./src/classes/player.js\");\n\n\nconst ctx = document.getElementById('ctx').getContext('2d');\nctx.font = '30px Arial';\n\nconst HEIGHT = 500;\nconst WIDTH = 500;\n\nconst message = 'Bouncing';\n\nconst player = new _classes_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 50,\n    spdX: 30,\n    y: 40,\n    spdY: 5,\n    name: 'P'\n});\n\nconst enemy = new _classes_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    x: 40,\n    spdX: 20,\n    y: 100,\n    spdY: 10,\n    name: 'E'\n});\n\nsetInterval(() => {\n    ctx.clearRect(0, 0, 500, 500);\n    player.update(ctx, WIDTH, HEIGHT, message);\n    enemy.update(ctx, WIDTH, HEIGHT, message);\n}, 40);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });