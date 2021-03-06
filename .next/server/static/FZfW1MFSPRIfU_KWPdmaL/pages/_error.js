module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/0+H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=void 0&&(void 0).__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var react_1=__importDefault(__webpack_require__("cDcd"));var amp_context_1=__webpack_require__("lwAK");function isInAmpMode(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$ampFirst=_ref.ampFirst,ampFirst=_ref$ampFirst===void 0?false:_ref$ampFirst,_ref$hybrid=_ref.hybrid,hybrid=_ref$hybrid===void 0?false:_ref$hybrid,_ref$hasQuery=_ref.hasQuery,hasQuery=_ref$hasQuery===void 0?false:_ref$hasQuery;return ampFirst||hybrid&&hasQuery;}exports.isInAmpMode=isInAmpMode;function useAmp(){return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));}exports.useAmp=useAmp;

/***/ }),

/***/ "/GRZ":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault2=__webpack_require__("AroE");var _classCallCheck2=_interopRequireDefault2(__webpack_require__("/GRZ"));var _createClass2=_interopRequireDefault2(__webpack_require__("i2R6"));var _possibleConstructorReturn2=_interopRequireDefault2(__webpack_require__("tCBg"));var _getPrototypeOf2=_interopRequireDefault2(__webpack_require__("T0f4"));var _inherits2=_interopRequireDefault2(__webpack_require__("48fX"));var _interopRequireDefault=__webpack_require__("KI45");exports.__esModule=true;exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__("cDcd"));var _head=_interopRequireDefault(__webpack_require__("8Kt/"));var statusCodes={400:'Bad Request',404:'This page could not be found',405:'Method Not Allowed',500:'Internal Server Error'};var Error=function(_react$default$Compon){(0,_inherits2.default)(Error,_react$default$Compon);function Error(){(0,_classCallCheck2.default)(this,Error);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Error).apply(this,arguments));}(0,_createClass2.default)(Error,[{key:"render",value:function render(){var statusCode=this.props.statusCode;var title=this.props.title||statusCodes[statusCode]||'An unexpected error has occurred';return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode,": ",title)),_react.default.createElement("div",null,_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:'body { margin: 0 }'}}),statusCode?_react.default.createElement("h1",{style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.desc},_react.default.createElement("h2",{style:styles.h2},title,"."))));}}],[{key:"getInitialProps",value:function getInitialProps(_ref){var res=_ref.res,err=_ref.err;var statusCode=res&&res.statusCode?res.statusCode:err?err.statusCode:404;return{statusCode:statusCode};}}]);return Error;}(_react.default.Component);exports.default=Error;Error.displayName='ErrorPage';var styles={error:{color:'#000',background:'#fff',fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:'100vh',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},desc:{display:'inline-block',textAlign:'left',lineHeight:'49px',height:'49px',verticalAlign:'middle'},h1:{display:'inline-block',borderRight:'1px solid rgba(0, 0, 0,.3)',margin:0,marginRight:'20px',padding:'10px 23px 10px 0',fontSize:'24px',fontWeight:500,verticalAlign:'top'},h2:{fontSize:'14px',fontWeight:'normal',lineHeight:'inherit',margin:0,padding:0}};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y");


/***/ }),

/***/ "48fX":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("qhzo");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "5fIB":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "8Kt/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importDefault=void 0&&(void 0).__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var react_1=__importDefault(__webpack_require__("cDcd"));var side_effect_1=__importDefault(__webpack_require__("Xuae"));var amp_context_1=__webpack_require__("lwAK");var head_manager_context_1=__webpack_require__("FYa8");var amp_1=__webpack_require__("/0+H");function defaultHead(){var inAmpMode=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var head=[react_1.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];if(!inAmpMode){head.push(react_1.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}));}return head;}exports.defaultHead=defaultHead;function onlyReactElement(list,child){if(typeof child==='string'||typeof child==='number'){return list;}if(child.type===react_1.default.Fragment){return list.concat(react_1.default.Children.toArray(child.props.children).reduce(function(fragmentList,fragmentChild){if(typeof fragmentChild==='string'||typeof fragmentChild==='number'){return fragmentList;}return fragmentList.concat(fragmentChild);},[]));}return list.concat(child);}var METATYPES=['name','httpEquiv','charSet','itemProp'];function unique(){var keys=new Set();var tags=new Set();var metaTypes=new Set();var metaCategories={};return function(h){if(h.key&&typeof h.key!=='number'&&h.key.indexOf('.$')===0){if(keys.has(h.key))return false;keys.add(h.key);return true;}switch(h.type){case'title':case'base':if(tags.has(h.type))return false;tags.add(h.type);break;case'meta':for(var i=0,len=METATYPES.length;i<len;i++){var metatype=METATYPES[i];if(!h.props.hasOwnProperty(metatype))continue;if(metatype==='charSet'){if(metaTypes.has(metatype))return false;metaTypes.add(metatype);}else{var category=h.props[metatype];var categories=metaCategories[metatype]||new Set();if(categories.has(category))return false;categories.add(category);metaCategories[metatype]=categories;}}break;}return true;};}function reduceComponents(headElements,props){return headElements.reduce(function(list,headElement){var headElementChildren=react_1.default.Children.toArray(headElement.props.children);return list.concat(headElementChildren);},[]).reduce(onlyReactElement,[]).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function(c,i){var key=c.key||i;return react_1.default.cloneElement(c,{key:key});});}var Effect=side_effect_1.default();function Head(_ref){var children=_ref.children;return react_1.default.createElement(amp_context_1.AmpStateContext.Consumer,null,function(ampState){return react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer,null,function(updateHead){return react_1.default.createElement(Effect,{reduceComponentsToState:reduceComponents,handleStateChange:updateHead,inAmpMode:amp_1.isInAmpMode(ampState)},children);});});}Head.rewind=Effect.rewind;exports.default=Head;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "FYa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importStar=void 0&&(void 0).__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];}result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__("cDcd"));exports.HeadManagerContext=React.createContext(null);

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "T0f4":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "Xuae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("AroE");var _classCallCheck2=_interopRequireDefault(__webpack_require__("/GRZ"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("tCBg"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__("T0f4"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__("qXWd"));var _createClass2=_interopRequireDefault(__webpack_require__("i2R6"));var _inherits2=_interopRequireDefault(__webpack_require__("48fX"));var _toConsumableArray2=_interopRequireDefault(__webpack_require__("mPvQ"));Object.defineProperty(exports,"__esModule",{value:true});var react_1=__webpack_require__("cDcd");var isServer=true;exports.default=function(){var mountedInstances=new Set();var state;function emitChange(component){state=component.props.reduceComponentsToState((0,_toConsumableArray2.default)(mountedInstances),component.props);if(component.props.handleStateChange){component.props.handleStateChange(state);}}return function(_react_1$Component){(0,_inherits2.default)(_class,_react_1$Component);(0,_createClass2.default)(_class,null,[{key:"rewind",value:function rewind(){var recordedState=state;state=undefined;mountedInstances.clear();return recordedState;}}]);function _class(props){var _this;(0,_classCallCheck2.default)(this,_class);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(_class).call(this,props));if(isServer){mountedInstances.add((0,_assertThisInitialized2.default)(_this));emitChange((0,_assertThisInitialized2.default)(_this));}return _this;}(0,_createClass2.default)(_class,[{key:"componentDidMount",value:function componentDidMount(){mountedInstances.add(this);emitChange(this);}},{key:"componentDidUpdate",value:function componentDidUpdate(){emitChange(this);}},{key:"componentWillUnmount",value:function componentWillUnmount(){mountedInstances.delete(this);emitChange(this);}},{key:"render",value:function render(){return null;}}]);return _class;}(react_1.Component);};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "i2R6":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "kG2m":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "lwAK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importStar=void 0&&(void 0).__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];}result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__("cDcd"));exports.AmpStateContext=React.createContext({});

/***/ }),

/***/ "mPvQ":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("5fIB");

var iterableToArray = __webpack_require__("rlHP");

var nonIterableSpread = __webpack_require__("kG2m");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "qXWd":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "qhzo":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "rlHP":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "tCBg":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

var assertThisInitialized = __webpack_require__("qXWd");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ })

/******/ });