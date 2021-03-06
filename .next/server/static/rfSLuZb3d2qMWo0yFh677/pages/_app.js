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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var TEST_ROUTE=/\/\[[^\/]+?\](?=\/|$)/;function isDynamicRoute(route){return TEST_ROUTE.test(route);}exports.isDynamicRoute=isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault2=__webpack_require__("AroE");var _classCallCheck2=_interopRequireDefault2(__webpack_require__("/GRZ"));var _createClass2=_interopRequireDefault2(__webpack_require__("i2R6"));var _possibleConstructorReturn2=_interopRequireDefault2(__webpack_require__("tCBg"));var _getPrototypeOf2=_interopRequireDefault2(__webpack_require__("T0f4"));var _inherits2=_interopRequireDefault2(__webpack_require__("48fX"));var _interopRequireDefault=__webpack_require__("KI45");exports.__esModule=true;exports.default=withRouter;var _extends2=_interopRequireDefault(__webpack_require__("htGi"));var _react=_interopRequireDefault(__webpack_require__("cDcd"));var _propTypes=_interopRequireDefault(__webpack_require__("rf6O"));function withRouter(ComposedComponent){var WithRouteWrapper=function(_react$default$Compon){(0,_inherits2.default)(WithRouteWrapper,_react$default$Compon);function WithRouteWrapper(){var _this;(0,_classCallCheck2.default)(this,WithRouteWrapper);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(WithRouteWrapper).apply(this,arguments));_this.context=void 0;return _this;}(0,_createClass2.default)(WithRouteWrapper,[{key:"render",value:function render(){return _react.default.createElement(ComposedComponent,(0,_extends2.default)({router:this.context.router},this.props));}}]);return WithRouteWrapper;}(_react.default.Component);WithRouteWrapper.displayName=void 0;WithRouteWrapper.getInitialProps=void 0;WithRouteWrapper.contextTypes={router:_propTypes.default.object};WithRouteWrapper.getInitialProps=ComposedComponent.getInitialProps;WithRouteWrapper.origGetInitialProps=ComposedComponent.origGetInitialProps;if(false){ var name; }return WithRouteWrapper;}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud");


/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault2=__webpack_require__("AroE");var _classCallCheck2=_interopRequireDefault2(__webpack_require__("/GRZ"));var _createClass2=_interopRequireDefault2(__webpack_require__("i2R6"));var _possibleConstructorReturn2=_interopRequireDefault2(__webpack_require__("tCBg"));var _getPrototypeOf2=_interopRequireDefault2(__webpack_require__("T0f4"));var _inherits2=_interopRequireDefault2(__webpack_require__("48fX"));var _regenerator=_interopRequireDefault2(__webpack_require__("vJKn"));var _interopRequireDefault=__webpack_require__("KI45");exports.__esModule=true;exports.Container=Container;exports.createUrl=createUrl;exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("htGi"));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__("+oT+"));var _react=_interopRequireDefault(__webpack_require__("cDcd"));var _propTypes=_interopRequireDefault(__webpack_require__("rf6O"));var _utils=__webpack_require__("g/15");exports.AppInitialProps=_utils.AppInitialProps;var _router=__webpack_require__("nOHt");function appGetInitialProps(_x){return _appGetInitialProps.apply(this,arguments);}function _appGetInitialProps(){_appGetInitialProps=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function _callee(_ref){var Component,ctx,pageProps;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Component=_ref.Component,ctx=_ref.ctx;_context.next=3;return(0,_utils.loadGetInitialProps)(Component,ctx);case 3:pageProps=_context.sent;return _context.abrupt("return",{pageProps:pageProps});case 5:case"end":return _context.stop();}}},_callee);}));return _appGetInitialProps.apply(this,arguments);}var App=function(_react$default$Compon){(0,_inherits2.default)(App,_react$default$Compon);function App(){(0,_classCallCheck2.default)(this,App);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(App).apply(this,arguments));}(0,_createClass2.default)(App,[{key:"getChildContext",value:function getChildContext(){return{router:(0,_router.makePublicRouterInstance)(this.props.router)};}},{key:"componentDidCatch",value:function componentDidCatch(error,_errorInfo){throw error;}},{key:"render",value:function render(){var _this$props=this.props,router=_this$props.router,Component=_this$props.Component,pageProps=_this$props.pageProps;var url=createUrl(router);return _react.default.createElement(Component,(0,_extends2.default)({},pageProps,{url:url}));}}]);return App;}(_react.default.Component);exports.default=App;App.childContextTypes={router:_propTypes.default.object};App.origGetInitialProps=appGetInitialProps;App.getInitialProps=appGetInitialProps;var warnContainer;var warnUrl;if(false){}function Container(p){if(false){}return p.children;}function createUrl(router){var pathname=router.pathname,asPath=router.asPath,query=router.query;return{get query(){if(false){}return query;},get pathname(){if(false){}return pathname;},get asPath(){if(false){}return asPath;},back:function back(){if(false){}router.back();},push:function push(url,as){if(false){}return router.push(url,as);},pushTo:function pushTo(href,as){if(false){}var pushRoute=as?href:'';var pushUrl=as||href;return router.push(pushRoute,pushUrl);},replace:function replace(url,as){if(false){}return router.replace(url,as);},replaceTo:function replaceTo(href,as){if(false){}var replaceRoute=as?href:'';var replaceUrl=as||href;return router.replace(replaceRoute,replaceUrl);}};}

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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

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

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("AroE");var _slicedToArray2=_interopRequireDefault(__webpack_require__("zoAU"));Object.defineProperty(exports,"__esModule",{value:true});function rewriteUrlForNextExport(url){var _url$split=url.split('#'),_url$split2=(0,_slicedToArray2.default)(_url$split,2),pathname=_url$split2[0],hash=_url$split2[1];var _pathname$split=pathname.split('?'),_pathname$split2=(0,_slicedToArray2.default)(_pathname$split,2),path=_pathname$split2[0],qs=_pathname$split2[1];path=path.replace(/\/$/,'');if(!/\.[^/]+\/?$/.test(path))path+="/";if(qs)path+='?'+qs;if(hash)path+='#'+hash;return path;}exports.rewriteUrlForNextExport=rewriteUrlForNextExport;

/***/ }),

/***/ "PqPU":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});function getRouteRegex(normalizedRoute){var escapedRoute=(normalizedRoute.replace(/\/$/,'')||'/').replace(/[|\\{}()[\]^$+*?.-]/g,'\\$&');var groups={};var groupIndex=1;var parameterizedRoute=escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g,function(_,$1){return groups[$1.replace(/\\([|\\{}()[\]^$+*?.-])/g,'$1')]=groupIndex++,'/([^/]+?)';});return{re:new RegExp('^'+parameterizedRoute+'(?:/)?$','i'),groups:groups};}exports.getRouteRegex=getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});function mitt(){var all=Object.create(null);return{on:function on(type,handler){;(all[type]||(all[type]=[])).push(handler);},off:function off(type,handler){if(all[type]){all[type].splice(all[type].indexOf(handler)>>>0,1);}},emit:function emit(type){for(var _len=arguments.length,evts=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){evts[_key-1]=arguments[_key];};(all[type]||[]).slice().map(function(handler){handler.apply(void 0,evts);});}};}exports.default=mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("AroE");var _regenerator=_interopRequireDefault(__webpack_require__("vJKn"));var _slicedToArray2=_interopRequireDefault(__webpack_require__("zoAU"));var _extends2=_interopRequireDefault(__webpack_require__("1ccW"));var _classCallCheck2=_interopRequireDefault(__webpack_require__("/GRZ"));var _createClass2=_interopRequireDefault(__webpack_require__("i2R6"));var __importDefault=void 0&&(void 0).__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});var url_1=__webpack_require__("bzos");var mitt_1=__importDefault(__webpack_require__("dZ6Y"));var utils_1=__webpack_require__("g/15");var rewrite_url_for_export_1=__webpack_require__("P5f7");var route_matcher_1=__webpack_require__("gguc");var route_regex_1=__webpack_require__("YTqd");var is_dynamic_1=__webpack_require__("/jkW");function toRoute(path){return path.replace(/\/$/,'')||'/';}var Router=function(){function Router(pathname,query,as,_ref){var _this=this;var initialProps=_ref.initialProps,pageLoader=_ref.pageLoader,App=_ref.App,wrapApp=_ref.wrapApp,Component=_ref.Component,err=_ref.err,subscription=_ref.subscription;(0,_classCallCheck2.default)(this,Router);this.onPopState=function(e){if(!e.state){var _pathname=_this.pathname,_query=_this.query;_this.changeState('replaceState',utils_1.formatWithValidation({pathname:_pathname,query:_query}),utils_1.getURL());return;}if(e.state.options&&e.state.options.fromExternal){return;}if(_this._bps&&!_this._bps(e.state)){return;}var _e$state=e.state,url=_e$state.url,as=_e$state.as,options=_e$state.options;if(false){}_this.replace(url,as,options);};this.route=toRoute(pathname);this.components={};if(pathname!=='/_error'){this.components[this.route]={Component:Component,props:initialProps,err:err};}this.components['/_app']={Component:App};this.events=Router.events;this.pageLoader=pageLoader;this.pathname=pathname;this.query=query;this.asPath=is_dynamic_1.isDynamicRoute(pathname)&&__NEXT_DATA__.nextExport?pathname:as;this.sub=subscription;this.clc=null;this._wrapApp=wrapApp;if(false){}}(0,_createClass2.default)(Router,[{key:"update",value:function update(route,mod){var Component=mod.default||mod;var data=this.components[route];if(!data){throw new Error("Cannot update unavailable route: "+route);}var newData=(0,_extends2.default)({},data,{Component:Component});this.components[route]=newData;if(route==='/_app'){this.notify(this.components[this.route]);return;}if(route===this.route){this.notify(newData);}}},{key:"reload",value:function reload(){window.location.reload();}},{key:"back",value:function back(){window.history.back();}},{key:"push",value:function push(url){var as=arguments.length>1&&arguments[1]!==undefined?arguments[1]:url;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return this.change('pushState',url,as,options);}},{key:"replace",value:function replace(url){var as=arguments.length>1&&arguments[1]!==undefined?arguments[1]:url;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return this.change('replaceState',url,as,options);}},{key:"change",value:function change(method,_url,_as,options){var _this2=this;return new Promise(function(resolve,reject){if(utils_1.SUPPORTS_PERFORMANCE_USER_TIMING){performance.mark('routeChange');}var url=typeof _url==='object'?utils_1.formatWithValidation(_url):_url;var as=typeof _as==='object'?utils_1.formatWithValidation(_as):_as;if(false){}_this2.abortComponentLoad(as);if(!options._h&&_this2.onlyAHashChange(as)){_this2.asPath=as;Router.events.emit('hashChangeStart',as);_this2.changeState(method,url,as);_this2.scrollToHash(as);Router.events.emit('hashChangeComplete',as);return resolve(true);}var _url_1$parse=url_1.parse(url,true),pathname=_url_1$parse.pathname,query=_url_1$parse.query,protocol=_url_1$parse.protocol;if(!pathname||protocol){if(false){}return resolve(false);}if(!_this2.urlIsNew(as)){method='replaceState';}var route=toRoute(pathname);var _options$shallow=options.shallow,shallow=_options$shallow===void 0?false:_options$shallow;if(is_dynamic_1.isDynamicRoute(route)){var _url_1$parse2=url_1.parse(as),asPathname=_url_1$parse2.pathname;var rr=route_regex_1.getRouteRegex(route);var routeMatch=route_matcher_1.getRouteMatcher(rr)(asPathname);if(!routeMatch){console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');return resolve(false);}(0,_extends2.default)(query,routeMatch);}Router.events.emit('routeChangeStart',as);_this2.getRouteInfo(route,pathname,query,as,shallow).then(function(routeInfo){var error=routeInfo.error;if(error&&error.cancelled){return resolve(false);}Router.events.emit('beforeHistoryChange',as);_this2.changeState(method,url,as,options);var hash=window.location.hash.substring(1);if(false){ var appComp; }_this2.set(route,pathname,query,as,(0,_extends2.default)({},routeInfo,{hash:hash}));if(error){Router.events.emit('routeChangeError',error,as);throw error;}Router.events.emit('routeChangeComplete',as);return resolve(true);},reject);});}},{key:"changeState",value:function changeState(method,url,as){var options=arguments.length>3&&arguments[3]!==undefined?arguments[3]:{};if(false){}if(method!=='pushState'||utils_1.getURL()!==as){window.history[method]({url:url,as:as,options:options},null,as);}}},{key:"getRouteInfo",value:function getRouteInfo(route,pathname,query,as){var _this3=this;var shallow=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var cachedRouteInfo=this.components[route];if(shallow&&cachedRouteInfo&&this.route===route){return Promise.resolve(cachedRouteInfo);}return new Promise(function(resolve,reject){if(cachedRouteInfo){return resolve(cachedRouteInfo);}_this3.fetchComponent(route).then(function(Component){return resolve({Component:Component});},reject);}).then(function(routeInfo){var Component=routeInfo.Component;if(false){ var _require, isValidElementType; }return new Promise(function(resolve,reject){_this3.getInitialProps(Component,{pathname:pathname,query:query,asPath:as}).then(function(props){routeInfo.props=props;_this3.components[route]=routeInfo;resolve(routeInfo);},reject);});}).catch(function(err){return new Promise(function(resolve){if(err.code==='PAGE_LOAD_ERROR'){window.location.href=as;err.cancelled=true;return resolve({error:err});}if(err.cancelled){return resolve({error:err});}resolve(_this3.fetchComponent('/_error').then(function(Component){var routeInfo={Component:Component,err:err};return new Promise(function(resolve){_this3.getInitialProps(Component,{err:err,pathname:pathname,query:query}).then(function(props){routeInfo.props=props;routeInfo.error=err;resolve(routeInfo);},function(gipErr){console.error('Error in error page `getInitialProps`: ',gipErr);routeInfo.error=err;routeInfo.props={};resolve(routeInfo);});});}));});});}},{key:"set",value:function set(route,pathname,query,as,data){this.route=route;this.pathname=pathname;this.query=query;this.asPath=as;this.notify(data);}},{key:"beforePopState",value:function beforePopState(cb){this._bps=cb;}},{key:"onlyAHashChange",value:function onlyAHashChange(as){if(!this.asPath)return false;var _this$asPath$split=this.asPath.split('#'),_this$asPath$split2=(0,_slicedToArray2.default)(_this$asPath$split,2),oldUrlNoHash=_this$asPath$split2[0],oldHash=_this$asPath$split2[1];var _as$split=as.split('#'),_as$split2=(0,_slicedToArray2.default)(_as$split,2),newUrlNoHash=_as$split2[0],newHash=_as$split2[1];if(newHash&&oldUrlNoHash===newUrlNoHash&&oldHash===newHash){return true;}if(oldUrlNoHash!==newUrlNoHash){return false;}return oldHash!==newHash;}},{key:"scrollToHash",value:function scrollToHash(as){var _as$split3=as.split('#'),_as$split4=(0,_slicedToArray2.default)(_as$split3,2),hash=_as$split4[1];if(hash===''){window.scrollTo(0,0);return;}var idEl=document.getElementById(hash);if(idEl){idEl.scrollIntoView();return;}var nameEl=document.getElementsByName(hash)[0];if(nameEl){nameEl.scrollIntoView();}}},{key:"urlIsNew",value:function urlIsNew(asPath){return this.asPath!==asPath;}},{key:"prefetch",value:function prefetch(url){var _this4=this;return new Promise(function(resolve,reject){var _url_1$parse3=url_1.parse(url),pathname=_url_1$parse3.pathname,protocol=_url_1$parse3.protocol;if(!pathname||protocol){if(false){}return;}if(false){}var route=toRoute(pathname);_this4.pageLoader.prefetch(route).then(resolve,reject);});}},{key:"fetchComponent",value:function fetchComponent(route){var cancelled,cancel,Component,error;return _regenerator.default.async(function fetchComponent$(_context){while(1){switch(_context.prev=_context.next){case 0:cancelled=false;cancel=this.clc=function(){cancelled=true;};_context.next=4;return _regenerator.default.awrap(this.pageLoader.loadPage(route));case 4:Component=_context.sent;if(!cancelled){_context.next=9;break;}error=new Error("Abort fetching component for route: \""+route+"\"");error.cancelled=true;throw error;case 9:if(cancel===this.clc){this.clc=null;}return _context.abrupt("return",Component);case 11:case"end":return _context.stop();}}},null,this);}},{key:"getInitialProps",value:function getInitialProps(Component,ctx){var cancelled,cancel,App,props,status,_url_1$parse4,pathname,AppTree,err;return _regenerator.default.async(function getInitialProps$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:cancelled=false;cancel=function cancel(){cancelled=true;};this.clc=cancel;App=this.components['/_app'].Component;if(!((self.__HAS_SPR||"production"!=='production')&&Component.__NEXT_SPR)){_context2.next=11;break;}_url_1$parse4=url_1.parse(ctx.asPath||ctx.pathname),pathname=_url_1$parse4.pathname;_context2.next=8;return _regenerator.default.awrap(fetch("/_next/data"+pathname+".json").then(function(res){if(!res.ok){status=res.status;throw new Error('failed to load prerender data');}return res.json();}).catch(function(err){console.error("Failed to load data",status,err);window.location.href=pathname;return new Promise(function(){});}));case 8:props=_context2.sent;_context2.next=16;break;case 11:AppTree=this._wrapApp(App);ctx.AppTree=AppTree;_context2.next=15;return _regenerator.default.awrap(utils_1.loadGetInitialProps(App,{AppTree:AppTree,Component:Component,router:this,ctx:ctx}));case 15:props=_context2.sent;case 16:if(cancel===this.clc){this.clc=null;}if(!cancelled){_context2.next=21;break;}err=new Error('Loading initial props cancelled');err.cancelled=true;throw err;case 21:return _context2.abrupt("return",props);case 22:case"end":return _context2.stop();}}},null,this);}},{key:"abortComponentLoad",value:function abortComponentLoad(as){if(this.clc){var e=new Error('Route Cancelled');e.cancelled=true;Router.events.emit('routeChangeError',e,as);this.clc();this.clc=null;}}},{key:"notify",value:function notify(data){this.sub(data,this.components['/_app'].Component);}}],[{key:"_rewriteUrlForNextExport",value:function _rewriteUrlForNextExport(url){return rewrite_url_for_export_1.rewriteUrlForNextExport(url);}}]);return Router;}();Router.events=mitt_1.default();exports.default=Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("AroE");var _regenerator=_interopRequireDefault(__webpack_require__("vJKn"));Object.defineProperty(exports,"__esModule",{value:true});var url_1=__webpack_require__("bzos");function execOnce(fn){var _this=this;var used=false;return function(){if(!used){used=true;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}fn.apply(_this,args);}};}exports.execOnce=execOnce;function getLocationOrigin(){var _window$location=window.location,protocol=_window$location.protocol,hostname=_window$location.hostname,port=_window$location.port;return protocol+"//"+hostname+(port?':'+port:'');}exports.getLocationOrigin=getLocationOrigin;function getURL(){var href=window.location.href;var origin=getLocationOrigin();return href.substring(origin.length);}exports.getURL=getURL;function getDisplayName(Component){return typeof Component==='string'?Component:Component.displayName||Component.name||'Unknown';}exports.getDisplayName=getDisplayName;function isResSent(res){return res.finished||res.headersSent;}exports.isResSent=isResSent;function loadGetInitialProps(Component,ctx){var message,res,props,_message;return _regenerator.default.async(function loadGetInitialProps$(_context){while(1){switch(_context.prev=_context.next){case 0:if(true){_context.next=4;break;}if(!(Component.prototype&&Component.prototype.getInitialProps)){_context.next=4;break;}message="\""+getDisplayName(Component)+".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.";throw new Error(message);case 4:res=ctx.res||ctx.ctx&&ctx.ctx.res;if(Component.getInitialProps){_context.next=7;break;}return _context.abrupt("return",{});case 7:_context.next=9;return _regenerator.default.awrap(Component.getInitialProps(ctx));case 9:props=_context.sent;if(!(res&&isResSent(res))){_context.next=12;break;}return _context.abrupt("return",props);case 12:if(props){_context.next=15;break;}_message="\""+getDisplayName(Component)+".getInitialProps()\" should resolve to an object. But found \""+props+"\" instead.";throw new Error(_message);case 15:if(false){}return _context.abrupt("return",props);case 17:case"end":return _context.stop();}}});}exports.loadGetInitialProps=loadGetInitialProps;exports.urlObjectKeys=['auth','hash','host','hostname','href','path','pathname','port','protocol','query','search','slashes'];function formatWithValidation(url,options){if(false){}return url_1.format(url,options);}exports.formatWithValidation=formatWithValidation;exports.SUPPORTS_PERFORMANCE=typeof performance!=='undefined';exports.SUPPORTS_PERFORMANCE_USER_TIMING=exports.SUPPORTS_PERFORMANCE&&typeof performance.mark==='function'&&typeof performance.measure==='function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});function getRouteMatcher(routeRegex){var re=routeRegex.re,groups=routeRegex.groups;return function(pathname){var routeMatch=re.exec(pathname);if(!routeMatch){return false;}var params={};Object.keys(groups).forEach(function(slugName){var m=routeMatch[groups[slugName]];if(m!==undefined){params[slugName]=decodeURIComponent(m);}});return params;};}exports.getRouteMatcher=getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

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

/***/ "mxvI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault2=__webpack_require__("AroE");var _construct2=_interopRequireDefault2(__webpack_require__("q722"));var _interopRequireWildcard=__webpack_require__("5Uuq");var _interopRequireDefault=__webpack_require__("KI45");exports.__esModule=true;exports.useRouter=useRouter;exports.makePublicRouterInstance=makePublicRouterInstance;exports.createRouter=exports.withRouter=exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("htGi"));var _defineProperty=_interopRequireDefault(__webpack_require__("hfKm"));var _react=_interopRequireDefault(__webpack_require__("cDcd"));var _router2=_interopRequireWildcard(__webpack_require__("elyg"));exports.Router=_router2.default;exports.NextRouter=_router2.NextRouter;var _routerContext=__webpack_require__("qOIg");var _withRouter=_interopRequireDefault(__webpack_require__("0Bsm"));exports.withRouter=_withRouter.default;var singletonRouter={router:null,readyCallbacks:[],ready:function ready(cb){if(this.router)return cb();if(false){}}};var urlPropertyFields=['pathname','route','query','asPath','components'];var routerEvents=['routeChangeStart','beforeHistoryChange','routeChangeComplete','routeChangeError','hashChangeStart','hashChangeComplete'];var coreMethodFields=['push','replace','reload','back','prefetch','beforePopState'];(0,_defineProperty.default)(singletonRouter,'events',{get:function get(){return _router2.default.events;}});urlPropertyFields.forEach(function(field){(0,_defineProperty.default)(singletonRouter,field,{get:function get(){var router=getRouter();return router[field];}});});coreMethodFields.forEach(function(field){;singletonRouter[field]=function(){var router=getRouter();return router[field].apply(router,arguments);};});routerEvents.forEach(function(event){singletonRouter.ready(function(){_router2.default.events.on(event,function(){var eventField="on"+event.charAt(0).toUpperCase()+event.substring(1);var _singletonRouter=singletonRouter;if(_singletonRouter[eventField]){try{_singletonRouter[eventField].apply(_singletonRouter,arguments);}catch(err){console.error("Error when running the Router event: "+eventField);console.error(err.message+"\n"+err.stack);}}});});});function getRouter(){if(!singletonRouter.router){var message='No router instance found.\n'+'You should only use "next/router" inside the client side of your app.\n';throw new Error(message);}return singletonRouter.router;}var _default=singletonRouter;exports.default=_default;function useRouter(){return _react.default.useContext(_routerContext.RouterContext);}var createRouter=function createRouter(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}singletonRouter.router=(0,_construct2.default)(_router2.default,args);singletonRouter.readyCallbacks.forEach(function(cb){return cb();});singletonRouter.readyCallbacks=[];return singletonRouter.router;};exports.createRouter=createRouter;function makePublicRouterInstance(router){var _router=router;var instance={};for(var _iterator=urlPropertyFields,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var _property=_ref;if(typeof _router[_property]==='object'){instance[_property]=(0,_extends2.default)({},_router[_property]);continue;}instance[_property]=_router[_property];}instance.events=_router2.default.events;coreMethodFields.forEach(function(field){instance[field]=function(){return _router[field].apply(_router,arguments);};});return instance;}

/***/ }),

/***/ "pSHO":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "q722":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("qhzo");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __importStar=void 0&&(void 0).__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];}result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var React=__importStar(__webpack_require__("cDcd"));exports.RouterContext=React.createContext(null);

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "vJKn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "zoAU":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("PqPU");

var iterableToArrayLimit = __webpack_require__("mxvI");

var nonIterableRest = __webpack_require__("pSHO");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ })

/******/ });