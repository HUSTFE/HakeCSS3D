(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Hake", [], factory);
	else if(typeof exports === 'object')
		exports["Hake"] = factory();
	else
		root["Hake"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _element = __webpack_require__(1);
	
	var _element2 = _interopRequireDefault(_element);
	
	__webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hake = function () {
	  function Hake() {
	    _classCallCheck(this, Hake);
	
	    this._name = 'Hake';
	    this.element = _element2.default;
	    this._version = '0.0.0';
	  }
	
	  _createClass(Hake, [{
	    key: 'name',
	    get: function get() {
	      return this._name + ' ver.' + this._version;
	    }
	  }]);
	
	  return Hake;
	}();
	
	exports.default = Hake;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Doming on 2016/10/15.
	 * Element Class is aim to build a light-weight DOM element,
	 * which consists of Virtual DOM-Tree.
	 */
	
	function isElementHasEl(el1, el2) {
	  if (el1 === el2) {
	    return true;
	  }
	  if (el2.children.length !== 0) {
	    if (el2.children.includes(el1)) {
	      return true;
	    }
	    el2.children.forEach(function (e) {
	      if (isElementHasEl(el2, e)) {
	        return true;
	      }
	    });
	  }
	  return false;
	}
	
	var Element = function () {
	  /**
	   * Constructor of Element
	   * @param tagName String
	   * @param attr Object
	   *
	   */
	
	  function Element(tagName, attr) {
	    _classCallCheck(this, Element);
	
	    if (typeof tagName === 'string' && (typeof attr === 'undefined' ? 'undefined' : _typeof(attr)) === 'object' && tagName !== '') {
	      this.tagName = tagName;
	      this.attr = attr;
	      this.children = [];
	    } else {
	      console.error("[Hake Error]: Virtual-DOM element isn't created correctly.");
	    }
	  }
	
	  _createClass(Element, [{
	    key: 'render',
	
	
	    /**
	     * Use to render Element into actual DOM-element.
	     */
	
	    value: function render() {
	      var el = document.createElement(this.tagName),
	          attribute;
	
	      for (attribute in this.attr) {
	        el.setAttribute(attribute, this.attr[attribute]);
	      }
	      this.children.forEach(function (child) {
	        var childEl = child instanceof Element ? child.render() : document.createTextNode(child);
	
	        el.appendChild(childEl);
	      });
	      return el;
	    }
	  }, {
	    key: 'appendChildren',
	
	
	    /**
	     * to append child Elements to element
	     * child element param sum has no limit.
	     * @param child Array
	     */
	
	    value: function appendChildren(child) {
	      var _this = this;
	
	      child.forEach(function (el) {
	        if (typeof el === 'string' && el instanceof Element && !isElementHasEl(_this, el)) {
	          _this.children.push(el);
	        }
	      });
	    }
	  }]);
	
	  return Element;
	}();
	
	exports.default = Element;
	
	var rootElement = exports.rootElement = function (_Element) {
	  _inherits(rootElement, _Element);
	
	  function rootElement(tagName, attr, bindElement) {
	    _classCallCheck(this, rootElement);
	
	    var _this2 = _possibleConstructorReturn(this, (rootElement.__proto__ || Object.getPrototypeOf(rootElement)).call(this, tagName, attr));
	
	    _this2.isRoot = true;
	    _this2.bindElement = bindElement;
	    return _this2;
	  }
	
	  return rootElement;
	}(Element);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.domTransTree = domTransTree;
	exports.renderVirtualTree = renderVirtualTree;
	
	var _element = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by Doming on 2016/10/21.
	                                                                                                                                                           */
	
	
	var operationType = {
	  CREATE: new Symbol('CREATE'),
	  DELETE: new Symbol('DELETE'),
	  CHANGE: new Symbol('CHANGE'),
	  MOVE: new Symbol('MOVE'),
	  ATTR: new Symbol('ATTR')
	};
	
	function domTransTree(domElement) {
	  var node = new _element.Element(domElement.tagName, domElement.attributes),
	      children = domElement.children,
	      i;
	
	  for (i = 0; i < children.length; i++) {
	    node.appendChildren(domTransTree(children[i]));
	  }
	  return node;
	}
	
	var difference = function difference(type, depth, num, change) {
	  _classCallCheck(this, difference);
	
	  this.type = type;
	  this.depth = depth;
	  this.num = num;
	  this.change = change;
	};
	
	var diffStack = function () {
	  function diffStack() {
	    _classCallCheck(this, diffStack);
	
	    this.diffs = [];
	  }
	
	  _createClass(diffStack, null, [{
	    key: 'diff',
	    value: function diff(oldNode, newNode, depth, num) {
	      depth++;
	      if (oldNode === undefined || oldNode === null) {
	        this.diffs.push(new difference(operationType.CREATE, depth, num, newNode));
	      } else if (newNode === undefined || newNode === null) {
	        this.diffs.push(new difference(operationType.DELETE, depth, num));
	      } else if (oldNode.tagName === newNode.tagName) {
	        if (JSON.stringify(newNode.attr) === JSON.stringify(oldNode.attr)) {}
	      }
	    }
	  }]);
	
	  return diffStack;
	}();
	
	function renderVirtualTree(root, newTree) {
	  var oldTree = domTransTree(root);
	  diff(oldTree, newTree, 0);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Hake.js.map