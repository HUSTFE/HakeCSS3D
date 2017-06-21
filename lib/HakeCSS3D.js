(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HakeCSS3D", [], factory);
	else if(typeof exports === 'object')
		exports["HakeCSS3D"] = factory();
	else
		root["HakeCSS3D"] = factory();
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
	
	var _box = __webpack_require__(1);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _camera = __webpack_require__(6);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _color = __webpack_require__(7);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _plane = __webpack_require__(5);
	
	var _plane2 = _interopRequireDefault(_plane);
	
	var _skybox = __webpack_require__(8);
	
	var _skybox2 = _interopRequireDefault(_skybox);
	
	var _sprite = __webpack_require__(2);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _stage = __webpack_require__(9);
	
	var _stage2 = _interopRequireDefault(_stage);
	
	var _TObject = __webpack_require__(3);
	
	var _TObject2 = _interopRequireDefault(_TObject);
	
	var _orienter = __webpack_require__(10);
	
	var _orienter2 = _interopRequireDefault(_orienter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HakeCSS3D = function HakeCSS3D() {
	  _classCallCheck(this, HakeCSS3D);
	
	  this.__version = '0.1.0';
	  this.color = _color2.default;
	  this.Object = _TObject2.default;
	  this.Sprite = _sprite2.default;
	  this.Camera = _camera2.default;
	  this.Box = _box2.default;
	  this.Plane = _plane2.default;
	  this.Skybox = _skybox2.default;
	  this.Stage = _stage2.default;
	  this.Orienter = _orienter2.default;
	};
	
	exports.default = HakeCSS3D;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _sprite = __webpack_require__(2);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _plane = __webpack_require__(5);
	
	var _plane2 = _interopRequireDefault(_plane);
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Box = function (_Sprite) {
	    _inherits(Box, _Sprite);
	
	    function Box(params) {
	        _classCallCheck(this, Box);
	
	        var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, params));
	
	        _this.front = new _plane2.default();
	        _this.front.name = 'front';
	        _this.addChild(_this.front);
	
	        _this.back = new _plane2.default();
	        _this.back.name = 'back';
	        _this.addChild(_this.back);
	
	        _this.left = new _plane2.default();
	        _this.left.name = 'left';
	        _this.addChild(_this.left);
	
	        _this.right = new _plane2.default();
	        _this.right.name = 'right';
	        _this.addChild(_this.right);
	
	        _this.up = new _plane2.default();
	        _this.up.name = 'up';
	        _this.addChild(_this.up);
	
	        _this.down = new _plane2.default();
	        _this.down.name = 'down';
	        _this.addChild(_this.down);
	        return _this;
	    }
	
	    _createClass(Box, [{
	        key: 'update',
	        value: function update() {
	            _get(Box.prototype.__proto__ || Object.getPrototypeOf(Box.prototype), 'update', this).apply(this);
	            this.updateF();
	            return this;
	        }
	    }, {
	        key: 'updateS',
	        value: function updateS() {
	            var _w = _other2.default.fixed0(this.width);
	            var _h = _other2.default.fixed0(this.height);
	            var _d = _other2.default.fixed0(this.depth);
	
	            this.__orgF.x = this.width / 2;
	            this.__orgF.y = this.height / 2;
	            this.__orgF.z = this.depth / 2;
	
	            this.front.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 0, 0).updateS().updateT();
	            this.back.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 180, 0).updateS().updateT();
	            this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
	            this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
	            this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(90, 0, 0).updateS().updateT();
	            this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(-90, 0, 0).updateS().updateT();
	
	            return this;
	        }
	    }, {
	        key: 'updateM',
	        value: function updateM() {
	            if (!this.__mat) return this;
	
	            var _unique = true;
	
	            for (var i in this.__mat) {
	                switch (i) {
	                    case 'front':
	                    case 'back':
	                    case 'left':
	                    case 'right':
	                    case 'up':
	                    case 'down':
	                        if (this.__mat[i].bothsides === undefined) this.__mat[i].bothsides = false;
	                        this[i].material(this.__mat[i]).updateM();
	                        _unique = false;
	                        break;
	                }
	            }
	
	            if (_unique) {
	                if (this.__mat.bothsides === undefined) this.__mat.bothsides = false;
	                this.front.material(this.__mat).updateM();
	                this.back.material(this.__mat).updateM();
	                this.left.material(this.__mat).updateM();
	                this.right.material(this.__mat).updateM();
	                this.up.material(this.__mat).updateM();
	                this.down.material(this.__mat).updateM();
	            }
	
	            return this;
	        }
	    }, {
	        key: 'updateF',
	        value: function updateF() {
	            if (!this.__flt) return this;
	
	            this.front.filter(this.__flt).updateF();
	            this.back.filter(this.__flt).updateF();
	            this.left.filter(this.__flt).updateF();
	            this.right.filter(this.__flt).updateF();
	            this.up.filter(this.__flt).updateF();
	            this.down.filter(this.__flt).updateF();
	
	            return this;
	        }
	    }, {
	        key: 'filter',
	        value: function filter(obj) {
	            this.__flt = obj;
	            return this;
	        }
	    }]);
	
	    return Box;
	}(_sprite2.default);
	
	exports.default = Box;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _TObject2 = __webpack_require__(3);
	
	var _TObject3 = _interopRequireDefault(_TObject2);
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Sprite = function (_TObject) {
	  _inherits(Sprite, _TObject);
	
	  function Sprite(params) {
	    _classCallCheck(this, Sprite);
	
	    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, params));
	
	    _this.__name = '';
	    _this.__id = '';
	    _this.__class = '';
	
	    _this.alpha = 1;
	    _this.visible = true;
	
	    var _dom = void 0;
	
	    if (params && params.el) {
	      switch (_typeof(params.el)) {
	        case 'string':
	          _dom = document.createElement('div');
	          _dom.innerHTML = params.el;
	          break;
	        case 'object':
	          if (params.el.nodeType === 1) {
	            _dom = params.el;
	          }
	          break;
	      }
	    }
	
	    if (!_dom) {
	      _dom = document.createElement('div');
	    }
	
	    _dom.style.position = 'absolute';
	    _dom.style[_this.prefix + 'Transform'] = 'translateZ(0px)';
	    _dom.style[_this.prefix + 'TransformStyle'] = 'preserve-3d';
	    _this.el = _dom;
	    _dom.le = _this;
	    return _this;
	  }
	
	  _createClass(Sprite, [{
	    key: 'name',
	    value: function name(str) {
	      this.__name = str;
	      if (str === '') delete this.el.dataset.name;else this.el.dataset.name = str;
	      return this;
	    }
	  }, {
	    key: 'id',
	    value: function id(str) {
	      this.__id = str;
	      this.el.id = str;
	      return this;
	    }
	  }, {
	    key: 'class',
	    value: function _class(str) {
	      this.__class = str;
	      this.el.className = str;
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.updateS();
	      this.updateM();
	      this.updateO();
	      this.updateT();
	      this.updateV();
	      return this;
	    }
	  }, {
	    key: 'updateS',
	    value: function updateS() {
	      //  this.el.style[this.prefix + 'TransformOrigin'] = '50% 50%';
	      return this;
	    }
	
	    /**
	     * @description To update material of this
	     **/
	
	  }, {
	    key: 'updateM',
	    value: function updateM() {
	      if (!this.__mat) return this;
	
	      for (var i in this.__mat) {
	        switch (i) {
	          case 'bothsides':
	            this.el.style[this.prefix + 'BackfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
	            break;
	          case 'image':
	            this.el.style['background' + _other2.default.firstUpper(i)] = this.__mat[i] !== '' ? 'url(' + this.__mat[i] + ')' : '';
	            break;
	          default:
	            this.el.style['background' + _other2.default.firstUpper(i)] = this.__mat[i];
	            break;
	        }
	      }
	
	      return this;
	    }
	
	    /**
	     * @description To update origin of this
	     * */
	
	  }, {
	    key: 'updateO',
	    value: function updateO() {
	      if (typeof this.originX === 'number') {
	        var _x = _other2.default.fixed0(this.originX - this.__orgF.x);
	
	        this.__orgO.x = _x + 'px';
	        this.__orgT.x = -_x + 'px';
	      } else {
	        this.__orgO.x = this.originX;
	        this.__orgT.x = '-' + this.originX;
	      }
	
	      if (typeof this.originY === 'number') {
	        var _y = _other2.default.fixed0(this.originY - this.__orgF.y);
	
	        this.__orgO.y = _y + 'px';
	        this.__orgT.y = -_y + 'px';
	      } else {
	        this.__orgO.y = this.originY;
	        this.__orgT.y = '-' + this.originY;
	      }
	
	      if (typeof this.originZ === 'number') {
	        var _z = _other2.default.fixed0(this.originZ - this.__orgF.z);
	
	        this.__orgO.z = _z + 'px';
	        this.__orgT.z = -_z + 'px';
	      } else {
	        this.__orgO.z = this.__orgT.z = '0px';
	      }
	
	      this.el.style[this.prefix + 'TransformOrigin'] = this.__orgO.x + ' ' + this.__orgO.y + ' ' + this.__orgO.z;
	
	      return this;
	    }
	
	    /**
	     * @description To update Transform by sort order
	     * */
	
	  }, {
	    key: 'updateT',
	    value: function updateT() {
	      var _sort = _slicedToArray(this.__sort, 3),
	          _S0 = _sort[0],
	          _S1 = _sort[1],
	          _S2 = _sort[2];
	
	      this.el.style[this.prefix + 'Transform'] = 'translate3d(' + this.__orgT.x + ', ' + this.__orgT.y + ', ' + this.__orgT.z + ') ' + 'translate3d(' + _other2.default.fixed2(this.x) + 'px,' + _other2.default.fixed2(this.y) + 'px,' + _other2.default.fixed2(this.z) + 'px) ' + 'rotate' + _S0 + '(' + _other2.default.fixed2(this['rotation' + _S0]) % 360 + 'deg) ' + 'rotate' + _S1 + '(' + _other2.default.fixed2(this['rotation' + _S1]) % 360 + 'deg) ' + 'rotate' + _S2 + '(' + _other2.default.fixed2(this['rotation' + _S2]) % 360 + 'deg) ' + 'scale3d(' + _other2.default.fixed2(this.scaleX) + ', ' + _other2.default.fixed2(this.scaleY) + ', ' + _other2.default.fixed2(this.scaleZ) + ') ';
	
	      return this;
	    }
	
	    /**
	     * @description To update display and opacity.
	     * */
	
	  }, {
	    key: 'updateV',
	    value: function updateV() {
	      this.el.style.opacity = this.alpha;
	      this.el.style.display = this.visible ? 'block' : 'none';
	      return this;
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(view) {
	      _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'addChild', this).apply(this, [view]);
	      if (this.el && view.el) {
	        this.el.appendChild(view.el);
	      }
	      return this;
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(view) {
	      for (var i = this.children.length - 1; i >= 0; i--) {
	        if (this.children[i] === view) {
	          if (view.__name !== '') delete this[view.__name];
	          this.children.splice(i, 1);
	          view.parent = null;
	          this.el.removeChild(view.el);
	          return this;
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'removeAllChild',
	    value: function removeAllChild() {
	      for (var i = this.children.length - 1; i >= 0; i--) {
	        var view = this.children[i];
	
	        if (view.__name !== '') delete this[view.__name];
	        view.parent = null;
	        this.el.removeChild(view.el);
	      }
	      this.children = [];
	      return this;
	    }
	
	    /**
	     * @param events Object
	     * @description To add listener for an object
	     * */
	
	  }, {
	    key: 'on',
	    value: function on(events) {
	      if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	        for (var i in events) {
	          this.el.addEventListener(i, events[i], false);
	        }
	      } else if (arguments.length === 2) {
	        this.el.addEventListener(arguments[0], arguments[1], false);
	      } else if (arguments.length === 3) {
	        this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
	      }
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events) {
	      if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
	        for (var i in events) {
	          this.el.removeEventListener(i, events[i], false);
	        }
	      } else if (arguments.length === 2) {
	        this.el.removeEventListener(arguments[0], arguments[1], false);
	      }
	      return this;
	    }
	  }, {
	    key: 'buttonMode',
	    value: function buttonMode(bool) {
	      if (bool) {
	        this.el.style.cursor = 'pointer';
	      } else {
	        this.el.style.cursor = 'auto';
	      }
	      return this;
	    }
	  }, {
	    key: 'material',
	    value: function material(obj) {
	      this.__mat = obj;
	      return this;
	    }
	  }, {
	    key: 'visibility',
	    value: function visibility(obj) {
	      if (obj.visible !== undefined) {
	        this.visible = obj.visible;
	      }
	
	      if (obj.alpha !== undefined) {
	        this.alpha = obj.alpha;
	      }
	
	      return this;
	    }
	  }]);
	
	  return Sprite;
	}(_TObject3.default);
	
	exports.default = Sprite;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Doming on 2017/6/9.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TObject = function () {
	  function TObject(params) {
	    _classCallCheck(this, TObject);
	
	    this.x = 0;
	    this.y = 0;
	    this.z = 0;
	    this.rotationX = 0;
	    this.rotationY = 0;
	    this.rotationZ = 0;
	    this.scaleX = 1;
	    this.scaleY = 1;
	    this.scaleZ = 1;
	    this.width = 0;
	    this.height = 0;
	    this.depth = 0;
	    this.__sort = ['X', 'Y', 'Z'];
	    this.originX = '50%';
	    this.originY = '50%';
	    this.originZ = '0px';
	    this.__orgO = { x: '50%', y: '50%', z: '0px' };
	    this.__orgT = { x: '-50%', y: '-50%', z: '0px' };
	    this.__orgF = { x: 0, y: 0, z: 0 };
	    this.children = [];
	    this.prefix = _other2.default.prefixCheck();
	  }
	
	  _createClass(TObject, [{
	    key: 'position',
	    value: function position(x, y, z) {
	      this.x = !x ? this.x : x;
	      this.y = !y ? this.y : y;
	      this.z = !z ? this.z : z;
	      return this;
	    }
	  }, {
	    key: 'move',
	    value: function move(x, y, z) {
	      this.x += !x ? 0 : x;
	      this.y += !y ? 0 : y;
	      this.z += !z ? 0 : z;
	      return this;
	    }
	  }, {
	    key: 'rotation',
	    value: function rotation(x, y, z) {
	      this.rotationX = !x ? this.rotationX : x;
	      this.rotationY = !y ? this.rotationY : y;
	      this.rotationZ = !z ? this.rotationZ : z;
	      return this;
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate(x, y, z) {
	      this.rotationX += !x ? 0 : x;
	      this.rotationY += !y ? 0 : y;
	      this.rotationZ += !z ? 0 : z;
	      return this;
	    }
	  }, {
	    key: 'scale',
	    value: function scale(x, y, z) {
	      this.scaleX = !x ? this.scaleX : x;
	      this.scaleY = !y ? this.scaleY : y;
	      this.scaleZ = !z ? this.scaleZ : z;
	      return this;
	    }
	  }, {
	    key: 'size',
	    value: function size(width, height, depth) {
	      switch (arguments.length) {
	        case 1:
	          this.width = width;
	          this.height = width;
	          this.depth = width;
	          break;
	        case 2:
	          this.width = width;
	          this.height = height;
	          break;
	        case 3:
	          this.width = width;
	          this.height = height;
	          this.depth = depth;
	          break;
	      }
	      return this;
	    }
	  }, {
	    key: 'origin',
	    value: function origin(x, y, z) {
	      switch (arguments.length) {
	        case 1:
	          this.originX = x;
	          this.originY = x;
	          this.originZ = x;
	          break;
	        case 2:
	          this.originX = x;
	          this.originY = y;
	          break;
	        case 3:
	          this.originX = x;
	          this.originY = y;
	          this.originZ = z;
	          break;
	      }
	      return this;
	    }
	  }, {
	    key: 'sort',
	    value: function sort(s0, s1, s2) {
	      if (arguments.length > 3) console.error('sort arguments is wrong!');
	      this.__sort = [s0, s1, s2];
	      return this;
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(view) {
	      if (view.parent) view.parent.removeChild(view);
	      if (view.__name !== '') {
	        if (this[view.__name] !== undefined) console.log(view.__name + ' already exist!');
	        this[view.__name] = view;
	      }
	      this.children.push(view);
	      view.parent = this;
	      return this;
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(view) {
	      for (var i = this.children.length - 1; i >= 0; i--) {
	        if (this.children[i] === view) {
	          if (view.__name !== '') delete this[view.__name];
	          this.children.splice(i, 1);
	          view.parent = null;
	          return this;
	        }
	      }
	      return this;
	    }
	  }, {
	    key: 'removeAllChild',
	    value: function removeAllChild() {
	      for (var i = this.children.length - 1; i >= 0; i--) {
	        var view = this.children[i];
	
	        if (view.__name !== '') delete this[view.__name];
	        view.parent = null;
	      }
	      this.children = [];
	      return this;
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.parent !== null) {
	        this.parent.removeChild(this);
	      }
	      return this;
	    }
	  }]);
	
	  return TObject;
	}();
	
	exports.default = TObject;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Doming on 2017/6/9.
	 */
	var other = function () {
	  function other() {
	    _classCallCheck(this, other);
	  }
	
	  _createClass(other, null, [{
	    key: 'fixed0',
	    value: function fixed0(n) {
	      return Math.round(n);
	    }
	  }, {
	    key: 'fixed2',
	    value: function fixed2(n) {
	      return Math.round(n * 100) / 100;
	    }
	  }, {
	    key: 'firstUpper',
	    value: function firstUpper(str) {
	      return str[0].toUpperCase() + str.slice(1, str.length);
	    }
	  }, {
	    key: 'prefixCheck',
	    value: function prefixCheck() {
	      var _d = document.createElement('DIV'),
	          _prefix = ['', 'Webkit', 'Moz', 'Ms', 'O'];
	
	      for (var i in _prefix) {
	        if (_prefix[i] + 'Transform' in _d.style) {
	          return _prefix[i];
	        }
	      }
	
	      console.error('Your browser might not support CSS3 properly.');
	    }
	  }]);
	
	  return other;
	}();
	
	exports.default = other;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _sprite = __webpack_require__(2);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Plane = function (_Sprite) {
	  _inherits(Plane, _Sprite);
	
	  function Plane(params) {
	    _classCallCheck(this, Plane);
	
	    return _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, params));
	  }
	
	  _createClass(Plane, [{
	    key: 'update',
	    value: function update() {
	      _get(Plane.prototype.__proto__ || Object.getPrototypeOf(Plane.prototype), 'update', this).apply(this);
	      this.updateF();
	      return this;
	    }
	  }, {
	    key: 'updateS',
	    value: function updateS() {
	      this.el.style.width = _other2.default.fixed0(this.width) + 'px';
	      this.el.style.height = _other2.default.fixed0(this.height) + 'px';
	      return this;
	    }
	  }, {
	    key: 'updateF',
	    value: function updateF() {
	      if (!this.__flt) return this;
	
	      var _flt = '';
	
	      for (var i in this.__flt) {
	        _flt += this.__flt[i] !== '' ? i + '(' + this.__flt[i].join(',') + ')' : '';
	      }
	
	      if (_flt !== '') this.el.style[this.prefix + 'Filter'] = _flt;
	
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter(obj) {
	      this.__flt = obj;
	      return this;
	    }
	  }]);
	
	  return Plane;
	}(_sprite2.default);
	
	exports.default = Plane;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _TObject2 = __webpack_require__(3);
	
	var _TObject3 = _interopRequireDefault(_TObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Camera = function (_TObject) {
	  _inherits(Camera, _TObject);
	
	  function Camera(params) {
	    _classCallCheck(this, Camera);
	
	    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this, params));
	
	    _this.fov = 75;
	    return _this;
	  }
	
	  _createClass(Camera, [{
	    key: 'update',
	    value: function update() {
	      this.updateT();
	      return this;
	    }
	  }, {
	    key: 'updateS',
	    value: function updateS() {
	      return this;
	    }
	  }, {
	    key: 'updateM',
	    value: function updateM() {
	      return this;
	    }
	  }, {
	    key: 'updateT',
	    value: function updateT() {
	      if (this.stage) this.stage.updateT();
	      return this;
	    }
	  }, {
	    key: 'updateV',
	    value: function updateV() {
	      return this;
	    }
	  }]);
	
	  return Camera;
	}(_TObject3.default);
	
	exports.default = Camera;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Doming on 2017/6/9.
	 */
	var Color = function () {
	  function Color() {
	    _classCallCheck(this, Color);
	  }
	
	  _createClass(Color, null, [{
	    key: 'getRandomColor',
	    value: function getRandomColor() {
	      return '#' + ('000000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
	    }
	  }, {
	    key: 'RGBToHex',
	    value: function RGBToHex(r, g, b) {
	      return (r << 16 | g << 8 | b).toString(16);
	    }
	  }, {
	    key: 'hexToRGB',
	    value: function hexToRGB(s) {
	      var _n = Math.floor('0x' + s);
	
	      return [_n >> 16 & 255, _n >> 8 & 255, _n & 255];
	    }
	  }]);
	
	  return Color;
	}();
	
	exports.default = Color;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _box = __webpack_require__(1);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Skybox = function (_Box) {
	    _inherits(Skybox, _Box);
	
	    function Skybox() {
	        _classCallCheck(this, Skybox);
	
	        return _possibleConstructorReturn(this, (Skybox.__proto__ || Object.getPrototypeOf(Skybox)).apply(this, arguments));
	    }
	
	    _createClass(Skybox, [{
	        key: 'updateS',
	        value: function updateS() {
	            var _w = _other2.default.fixed0(this.width);
	            var _h = _other2.default.fixed0(this.height);
	            var _d = _other2.default.fixed0(this.depth);
	
	            this.__orgF.x = this.width / 2;
	            this.__orgF.y = this.height / 2;
	            this.__orgF.z = this.depth / 2;
	
	            this.front.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 0, 0).updateS().updateT();
	            this.back.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 180, 0).updateS().updateT();
	            this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
	            this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
	            this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(-90, 0, 0).updateS().updateT();
	            this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(90, 0, 0).updateS().updateT();
	
	            return this;
	        }
	    }]);
	
	    return Skybox;
	}(_box2.default);
	
	exports.default = Skybox;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _sprite = __webpack_require__(2);
	
	var _sprite2 = _interopRequireDefault(_sprite);
	
	var _camera = __webpack_require__(6);
	
	var _camera2 = _interopRequireDefault(_camera);
	
	var _other = __webpack_require__(4);
	
	var _other2 = _interopRequireDefault(_other);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Doming on 2017/6/19.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Stage = function (_Sprite) {
	  _inherits(Stage, _Sprite);
	
	  function Stage(params) {
	    _classCallCheck(this, Stage);
	
	    var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, params));
	
	    if (!(params && params.el)) {
	      _this.el.style.top = '0px';
	      _this.el.style.left = '0px';
	      _this.el.style.width = '0px';
	      _this.el.style.height = '0px';
	    }
	    _this.el.style[_this.prefix + 'Perspective'] = '800px';
	    _this.el.style[_this.prefix + 'TransformStyle'] = 'flat';
	    _this.el.style[_this.prefix + 'Transform'] = '';
	    _this.el.style.overflow = 'hidden';
	
	    _this.__rfix = new _sprite2.default();
	    _this.el.appendChild(_this.__rfix.el);
	
	    _this.__pfix = new _sprite2.default();
	    _this.__rfix.el.appendChild(_this.__pfix.el);
	
	    _this.setCamera(new _camera2.default());
	    return _this;
	  }
	
	  _createClass(Stage, [{
	    key: 'updateS',
	    value: function updateS() {
	      this.el.style.width = _other2.default.fixed0(this.width) + 'px';
	      this.el.style.height = _other2.default.fixed0(this.height) + 'px';
	      return this;
	    }
	  }, {
	    key: 'updateT',
	    value: function updateT() {
	      this.fov = _other2.default.fixed0(0.5 / Math.tan(this.camera.fov * 0.5 / 180 * Math.PI) * this.height);
	      this.el.style[this.prefix + 'Perspective'] = this.fov + 'px';
	      this.__rfix.position(_other2.default.fixed0(this.width / 2), _other2.default.fixed0(this.height / 2), this.fov).rotation(-this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT();
	      this.__pfix.position(-this.camera.x, -this.camera.y, -this.camera.z).updateT();
	      return this;
	    }
	  }, {
	    key: 'addChild',
	    value: function addChild(view) {
	      this.__pfix.addChild(view);
	      return this;
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(view) {
	      this.__pfix.removeChild(view);
	      return this;
	    }
	  }, {
	    key: 'setCamera',
	    value: function setCamera(cam) {
	      if (this.camera) {
	        this.camera.stage = null;
	      }
	      this.camera = cam;
	      this.camera.stage = this;
	      return this;
	    }
	  }]);
	
	  return Stage;
	}(_sprite2.default);
	
	exports.default = Stage;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by hust on 2017/6/20.
	 */
	var Orienter = function () {
	  function Orienter(config) {
	    _classCallCheck(this, Orienter);
	
	    var _config = config || {};
	
	    this.onOrient = _config.onOrient || function () {};
	    this.onChange = _config.onChange || function () {};
	
	    this._orient = this._orient.bind(this);
	    this._change = this._change.bind(this);
	
	    this.lon = 0;
	    this.lat = 0;
	    this.direction = window.orientation || 0;
	
	    switch (this.direction) {
	      case 0:
	        this.fix = 0;
	        break;
	      case 90:
	        this.fix = -270;
	        break;
	      case -90:
	        this.fix = -90;
	        break;
	    }
	
	    if (!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
	      this.os = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') ? 'android' : '';
	    } else {
	      this.os = 'ios';
	    }
	  }
	
	  _createClass(Orienter, [{
	    key: 'init',
	    value: function init() {
	      window.addEventListener('deviceorientation', this._orient, false);
	      window.addEventListener('orientationchange', this._change, false);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      window.removeEventListener('deviceorientation', this._orient, false);
	      window.removeEventListener('orientationchange', this._change, false);
	    }
	  }, {
	    key: '_change',
	    value: function _change(event) {
	      this.direction = window.orientation;
	
	      this.onChange(this.direction);
	    }
	  }, {
	    key: 'changeDirectionTo',
	    value: function changeDirectionTo(n) {
	      this.direction = n;
	    }
	  }, {
	    key: '_orient',
	    value: function _orient(event) {
	      switch (this.os) {
	        case 'ios':
	          switch (this.direction) {
	            case 0:
	              this.lon = event.alpha + event.gamma;
	              if (event.beta > 0) this.lat = event.beta - 90;
	              break;
	            case 90:
	              if (event.gamma < 0) {
	                this.lon = event.alpha - 90;
	              } else {
	                this.lon = event.alpha - 270;
	              }
	              if (event.gamma > 0) {
	                this.lat = 90 - event.gamma;
	              } else {
	                this.lat = -90 - event.gamma;
	              }
	              break;
	            case -90:
	              if (event.gamma < 0) {
	                this.lon = event.alpha - 90;
	              } else {
	                this.lon = event.alpha - 270;
	              }
	              if (event.gamma < 0) {
	                this.lat = 90 + event.gamma;
	              } else {
	                this.lat = -90 + event.gamma;
	              }
	              break;
	          }
	          break;
	        case 'android':
	          switch (this.direction) {
	            case 0:
	              this.lon = event.alpha + event.gamma + 30;
	              if (event.gamma > 90) {
	                this.lat = 90 - event.beta;
	              } else {
	                this.lat = event.beta - 90;
	              }
	              break;
	            case 90:
	              this.lon = event.alpha - 230;
	              if (event.gamma > 0) {
	                this.lat = 270 - event.gamma;
	              } else {
	                this.lat = -90 - event.gamma;
	              }
	              break;
	            case -90:
	              this.lon = event.alpha - 180;
	              this.lat = -90 + event.gamma;
	              break;
	          }
	          break;
	      }
	
	      this.lon += this.fix;
	      this.lon %= 360;
	      if (this.lon < 0) this.lon += 360;
	
	      this.lon = Math.round(this.lon);
	      this.lat = Math.round(this.lat);
	
	      this.onOrient({
	        a: Math.round(event.alpha),
	        b: Math.round(event.beta),
	        g: Math.round(event.gamma),
	        lon: this.lon,
	        lat: this.lat,
	        dir: this.direction
	      });
	    }
	  }]);
	
	  return Orienter;
	}();
	
	exports.default = Orienter;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=HakeCSS3D.js.map