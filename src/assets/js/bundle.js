/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packs/js/index.js":
/*!***************************!*\
  !*** ./packs/js/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/sort */ \"./packs/js/parts/sort.js\");\n\nwindow.addEventListener('load', function () {\n  var data = new _parts_sort__WEBPACK_IMPORTED_MODULE_0__.CatchData();\n  data.init();\n});\n\n//# sourceURL=webpack:///./packs/js/index.js?");

/***/ }),

/***/ "./packs/js/parts/sort.js":
/*!********************************!*\
  !*** ./packs/js/parts/sort.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CatchData\": function() { return /* binding */ CatchData; }\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CatchData = /*#__PURE__*/function () {\n  function CatchData() {\n    _classCallCheck(this, CatchData);\n\n    this.fileElement = document.getElementById('file');\n    this.videoElement = document.getElementById('video');\n    this.stop_btn = document.getElementById('stop');\n    this.canvas = document.getElementById('c');\n    this.v_canvas = document.getElementById('v');\n    this.v_canvas.width = 640;\n    this.v_canvas.height = 360;\n    this.fileSrcData;\n  }\n\n  _createClass(CatchData, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var flipHorizontal = false;\n      var btn = document.getElementById('move');\n      var ctx = this.canvas.getContext('2d');\n      this.fileElement.addEventListener('change', function (e) {\n        _this.onFileChange(e);\n      });\n    }\n  }, {\n    key: \"canvas\",\n    value: function canvas(image) {\n      var ctx = this.canvas.getContext('2d');\n      var img = new Image();\n\n      img.onload = function () {\n        ctx.drawImage(image, 0, 0);\n      };\n    }\n  }, {\n    key: \"onFileChange\",\n    value: function onFileChange(e) {\n      var _this2 = this;\n\n      var fr = new FileReader();\n      var fileData = e.target.files[0];\n      fr.readAsDataURL(fileData);\n\n      if (!fileData.type.match('mp4.*')) {\n        alert('mp4を選択してください。');\n        return;\n      }\n\n      fr.onload = function (evt) {\n        _this2.fileSrcData = evt.target.result;\n        _this2.videoElement.src = _this2.fileSrcData;\n\n        _this2.canvasDraw();\n      }; // fr.readAsDataURL(fileData)\n\n    }\n  }, {\n    key: \"canvasDraw\",\n    value: function canvasDraw() {\n      var _this3 = this;\n\n      var ctx = this.canvas.getContext('2d');\n      var counter = 0;\n      this.canvas.width = 640;\n      this.canvas.height = 360;\n      ctx.clearRect(0, 0, this.videoElement.width, this.videoElement.height);\n      var image = new Image();\n      var timer = setInterval(function () {\n        _this3.videoElement = document.getElementById('video');\n        var canvas = document.getElementById('c');\n        image.src = canvas.toDataURL();\n        ctx.drawImage(_this3.videoElement, 0, 0, _this3.videoElement.width, _this3.videoElement.height);\n        posenet.load().then(function (net) {\n          var pose = net.estimateSinglePose(image, {\n            flipHorizontal: true\n          });\n          return pose;\n        }).then(function (pose) {\n          // console.log(pose);\n          _this3.viewCanvas(pose, counter);\n\n          counter++;\n        });\n      }, 1000);\n      this.stop_btn.addEventListener('click', function () {\n        clearInterval(timer);\n      }); //   image.src = this.fileSrcData;\n      //   image.onload = function(){\n      //      ctx.drawImage(this.videoElement,0,0,this.videoElement.width,this.videoElement.height);\n      //   }\n    }\n  }, {\n    key: \"viewCanvas\",\n    value: function viewCanvas(data, counter) {\n      var viewBox = this.v_canvas;\n      var ctx = viewBox.getContext('2d');\n      ctx.clearRect(0, 0, this.v_canvas.width, this.v_canvas.height);\n      var x = 0;\n      var y = 0;\n      var mx = 0;\n      var my = 0;\n      var keypoints = data.keypoints;\n      this.drawSkeleton(keypoints, 0.6, ctx);\n\n      for (var index = 0; index < keypoints.length; index++) {\n        var key_pos = keypoints[index].position;\n        x = this.v_canvas.width - Math.floor(key_pos.x);\n        y = Math.floor(key_pos.y); // ctx.beginPath();\n        // ctx.moveTo(mx,my);\n        // ctx.lineWidth = 2;\n        // ctx.strokeStyle = 'orange';\n        // ctx.lineTo(x,y);\n        // ctx.stroke();\n        // ctx.closePath();\n\n        ctx.beginPath();\n        ctx.fillStyle = 'rgba(255,255,255,0.6)';\n        ctx.arc(x, y, 5, 0, Math.PI * 2, true);\n        ctx.fill();\n        ctx.stroke();\n        ctx.closePath();\n        mx = x;\n        my = y;\n      }\n    }\n  }, {\n    key: \"drawSkeleton\",\n    value: function drawSkeleton(keypoints, minConfid, ctx) {\n      var _this4 = this;\n\n      var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n      var adjacentKeyPoints = posenet.getAdjacentKeyPoints(keypoints, minConfid);\n      adjacentKeyPoints.forEach(function (key) {\n        _this4.drawSegment(_this4.toTuple(key[0].position), _this4.toTuple(key[1].position), 'rgba(255,255,255,0.6)', scale, ctx);\n      });\n    }\n  }, {\n    key: \"toTuple\",\n    value: function toTuple(_ref) {\n      var y = _ref.y,\n          x = _ref.x;\n      var r_x = this.videoElement.width - x;\n      var r_h = this.videoElement.height;\n      return [y, r_x];\n    }\n  }, {\n    key: \"drawSegment\",\n    value: function drawSegment(_ref2, _ref3, color, scale, ctx) {\n      var _ref4 = _slicedToArray(_ref2, 2),\n          ay = _ref4[0],\n          ax = _ref4[1];\n\n      var _ref5 = _slicedToArray(_ref3, 2),\n          by = _ref5[0],\n          bx = _ref5[1];\n\n      ctx.beginPath();\n      ctx.moveTo(ax * scale, ay * scale);\n      ctx.lineTo(bx * scale, by * scale);\n      ctx.lineWidth = 2;\n      ctx.strokeStyle = 'orange';\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }]);\n\n  return CatchData;\n}();\n\n//# sourceURL=webpack:///./packs/js/parts/sort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./packs/js/index.js");
/******/ 	
/******/ })()
;