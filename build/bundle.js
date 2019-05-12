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

/***/ "./src/classes/collisions.js":
/*!***********************************!*\
  !*** ./src/classes/collisions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Collisions; });\nclass Collisions {\n\n    constructor(){\n        this.collisionDistance = 30;\n    }\n\n    getDistanceBetweenEntity(entity1,entity2) {\n        const vx = entity1.getX() - entity2.getX();\n        const vy = entity1.getY() - entity2.getY();\n        return Math.sqrt(vx*vx+vy*vy);\n    }\n\n    testCollisionEntity(entity1,entity2) {\n        const distance = this.getDistanceBetweenEntity(entity1, entity2);\n        return distance < this.collisionDistance;\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/collisions.js?");

/***/ }),

/***/ "./src/classes/enemy.js":
/*!******************************!*\
  !*** ./src/classes/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/classes/entity.js\");\n\n\nclass Enemy extends _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n}\n\n//# sourceURL=webpack:///./src/classes/enemy.js?");

/***/ }),

/***/ "./src/classes/entity.js":
/*!*******************************!*\
  !*** ./src/classes/entity.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entity; });\nclass Entity {\n    constructor({x, spdX, y, spdY, name}){\n        this.x = x;\n        this.spdX = spdX;\n        this.y = y;\n        this.spdY = spdY;\n        this.name = name;\n    }\n\n    getX(){\n        return this.x;\n    }\n\n    getSpdX(){\n        return this.spdX;\n    }\n\n    getY(){\n        return this.y;\n    }\n\n    getSpdY(){\n        return this.spdY;\n    }\n\n    getName(){\n        return this.name;\n    }\n\n    setX(input) {\n        this.x = input;\n    }\n\n    setSpdX(input) {\n        this.spdX = input;\n    }\n\n    setY(input) {\n        this.y = input;\n    }\n\n    setSpdY(input) {\n        this.spdY = input;\n    }\n\n    setName(input) {\n        this.name = input;\n    }\n\n    update(ctx, width, height, message) {\n        this.x += this.spdX;\n        this.y += this.spdY;\n\n        if (this.x < 0 || this.x > width) {\n            this.spdX = -this.spdX;\n        }\n\n        if (this.y < 0 || this.y > height) {\n            this.spdY = -this.spdY;\n        }\n\n        this.draw(ctx);\n    }\n\n    draw(ctx) {\n       ctx.fillText(this.name, this.x, this.y); \n    }\n}\n\n//# sourceURL=webpack:///./src/classes/entity.js?");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ \"./src/classes/entity.js\");\n\n\nclass Player extends _entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n}\n\n//# sourceURL=webpack:///./src/classes/player.js?");

/***/ }),

/***/ "./src/data/enemyList.json":
/*!*********************************!*\
  !*** ./src/data/enemyList.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = [{\"x\":40,\"spdX\":20,\"y\":100,\"spdY\":10,\"name\":\"E\"},{\"x\":300,\"spdX\":-20,\"y\":150,\"spdY\":9,\"name\":\"e\"},{\"x\":20,\"spdX\":-5,\"y\":20,\"spdY\":-2,\"name\":\"B\"}];\n\n//# sourceURL=webpack:///./src/data/enemyList.json?");

/***/ }),

/***/ "./src/data/playerList.json":
/*!**********************************!*\
  !*** ./src/data/playerList.json ***!
  \**********************************/
/*! exports provided: x, spdX, y, spdY, name, default */
/***/ (function(module) {

eval("module.exports = {\"x\":50,\"spdX\":30,\"y\":40,\"spdY\":5,\"name\":\"P\"};\n\n//# sourceURL=webpack:///./src/data/playerList.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/player */ \"./src/classes/player.js\");\n/* harmony import */ var _classes_enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/enemy */ \"./src/classes/enemy.js\");\n/* harmony import */ var _classes_collisions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/collisions */ \"./src/classes/collisions.js\");\n/* harmony import */ var _data_playerList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/playerList.json */ \"./src/data/playerList.json\");\nvar _data_playerList_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/playerList.json */ \"./src/data/playerList.json\", 1);\n/* harmony import */ var _data_enemyList_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/enemyList.json */ \"./src/data/enemyList.json\");\nvar _data_enemyList_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/enemyList.json */ \"./src/data/enemyList.json\", 1);\n\n\n\n\n\n\n\nconst ctx = document.getElementById('ctx').getContext('2d');\nctx.font = '30px Arial';\n\nconst HEIGHT = 500;\nconst WIDTH = 500;\n\nconst message = 'Bouncing';\n\nconst player = new _classes_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_data_playerList_json__WEBPACK_IMPORTED_MODULE_3__);\n\nconst enemyList = _data_enemyList_json__WEBPACK_IMPORTED_MODULE_4__;\n\nconst enemies = enemyList.map((enemy) => {\n    return new _classes_enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](enemy);\n});\n\nconst collisions = new _classes_collisions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nsetInterval(() => {\n    ctx.clearRect(0, 0, WIDTH, HEIGHT);\n    enemies.map((enemy) => {\n        enemy.update(ctx, WIDTH, HEIGHT, message);\n        const isColliding = collisions.testCollisionEntity(player,enemy);\n        if (isColliding) {\n            console.log('colliding');\n        }\n    })\n    player.update(ctx, WIDTH, HEIGHT, message);\n}, 40);\n\n//# sourceURL=webpack:///./src/index.js?");

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