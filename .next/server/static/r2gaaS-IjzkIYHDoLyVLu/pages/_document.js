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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+es4":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5w0S");


/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

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

/***/ "5w0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__("8cZr");
var document_default = /*#__PURE__*/__webpack_require__.n(next_document);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "fbjs/lib/invariant"
var invariant_ = __webpack_require__("Ecjf");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js

/* harmony default export */ var unmountComponentAtNode = (external_react_dom_["unmountComponentAtNode"]);
// EXTERNAL MODULE: external "fbjs/lib/ExecutionEnvironment"
var ExecutionEnvironment_ = __webpack_require__("L1DD");
var ExecutionEnvironment_default = /*#__PURE__*/__webpack_require__.n(ExecutionEnvironment_);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js
var emptyObject = {};
var objects = {};
var ReactNativePropRegistry_prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return ReactNativePropRegistry_prefix + "-" + id;
};

var ReactNativePropRegistry = function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (false) {}

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();


// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js



function getStyle(style) {
  if (typeof style === 'number') {
    return ReactNativePropRegistry.getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (false) {}

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

/* harmony default export */ var StyleSheet_flattenStyle = (flattenStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js


var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = ReactNativePropRegistry.register(absoluteFillObject);
var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (false) { var readableStyles, len; }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (false) { var interopValidate, validate; }

      var id = styles[key] && ReactNativePropRegistry.register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: StyleSheet_flattenStyle,
  hairlineWidth: 1
};
/* harmony default export */ var StyleSheet_StyleSheet = (StyleSheet);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js



if (ExecutionEnvironment_["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet_StyleSheet.flatten;
}

/* harmony default export */ var exports_StyleSheet = (StyleSheet_StyleSheet);
// EXTERNAL MODULE: external "debounce"
var external_debounce_ = __webpack_require__("gfJU");
var external_debounce_default = /*#__PURE__*/__webpack_require__.n(external_debounce_);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/findNodeHandle/index.js


var findNodeHandle_findNodeHandle = function findNodeHandle(component) {
  var node;

  try {
    node = Object(external_react_dom_["findDOMNode"])(component);
  } catch (e) {}

  return node;
};

/* harmony default export */ var exports_findNodeHandle = (findNodeHandle_findNodeHandle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/applyLayout/index.js



var applyLayout_emptyObject = {};
var registry = {};
var applyLayout_id = 1;

var guid = function guid() {
  return "r-" + applyLayout_id++;
};

var resizeObserver;

if (ExecutionEnvironment_["canUseDOM"]) {
  if (typeof window.ResizeObserver !== 'undefined') {
    resizeObserver = new window.ResizeObserver(function (entries) {
      entries.forEach(function (_ref) {
        var target = _ref.target;
        var instance = registry[target._layoutId];
        instance && instance._handleLayout();
      });
    });
  } else {
    if (false) {}

    var triggerAll = function triggerAll() {
      Object.keys(registry).forEach(function (key) {
        var instance = registry[key];

        instance._handleLayout();
      });
    };

    window.addEventListener('resize', external_debounce_default()(triggerAll, 16), false);
  }
}

var applyLayout_observe = function observe(instance) {
  var id = guid();
  registry[id] = instance;

  if (resizeObserver) {
    var node = exports_findNodeHandle(instance);

    if (node) {
      node._layoutId = id;
      resizeObserver.observe(node);
    }
  } else {
    instance._layoutId = id;

    instance._handleLayout();
  }
};

var applyLayout_unobserve = function unobserve(instance) {
  if (resizeObserver) {
    var node = exports_findNodeHandle(instance);

    if (node) {
      delete registry[node._layoutId];
      delete node._layoutId;
      resizeObserver.unobserve(node);
    }
  } else {
    delete registry[instance._layoutId];
    delete instance._layoutId;
  }
};

var safeOverride = function safeOverride(original, next) {
  if (original) {
    return function prototypeOverride() {
      original.call(this, arguments);
      next.call(this, arguments);
    };
  }

  return next;
};

var applyLayout_applyLayout = function applyLayout(Component) {
  var componentDidMount = Component.prototype.componentDidMount;
  var componentDidUpdate = Component.prototype.componentDidUpdate;
  var componentWillUnmount = Component.prototype.componentWillUnmount;
  Component.prototype.componentDidMount = safeOverride(componentDidMount, function componentDidMount() {
    this._layoutState = applyLayout_emptyObject;
    this._isMounted = true;

    if (this.props.onLayout) {
      applyLayout_observe(this);
    }
  });
  Component.prototype.componentDidUpdate = safeOverride(componentDidUpdate, function componentDidUpdate(prevProps) {
    if (this.props.onLayout && !prevProps.onLayout) {
      applyLayout_observe(this);
    } else if (!this.props.onLayout && prevProps.onLayout) {
      applyLayout_unobserve(this);
    }
  });
  Component.prototype.componentWillUnmount = safeOverride(componentWillUnmount, function componentWillUnmount() {
    this._isMounted = false;

    if (this.props.onLayout) {
      applyLayout_unobserve(this);
    }
  });

  Component.prototype._handleLayout = function () {
    var _this = this;

    var layout = this._layoutState;
    var onLayout = this.props.onLayout;

    if (onLayout) {
      this.measure(function (x, y, width, height) {
        if (_this._isMounted) {
          if (layout.x !== x || layout.y !== y || layout.width !== width || layout.height !== height) {
            _this._layoutState = {
              x: x,
              y: y,
              width: width,
              height: height
            };
            var nativeEvent = {
              layout: _this._layoutState
            };
            Object.defineProperty(nativeEvent, 'target', {
              enumerable: true,
              get: function get() {
                return exports_findNodeHandle(_this);
              }
            });
            onLayout({
              nativeEvent: nativeEvent,
              timeStamp: Date.now()
            });
          }
        }
      });
    }
  };

  return Component;
};

/* harmony default export */ var modules_applyLayout = (applyLayout_applyLayout);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js
var buttonLikeRoles = {
  button: true,
  menuitem: true
};
/* harmony default export */ var AccessibilityUtil_buttonLikeRoles = (buttonLikeRoles);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled_isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ var AccessibilityUtil_isDisabled = (isDisabled_isDisabled);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityComponentTypeToRole = {
  button: 'button',
  none: 'presentation'
};
var accessibilityTraitsToRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region'
};
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityComponentType = _ref.accessibilityComponentType,
      accessibilityRole = _ref.accessibilityRole,
      accessibilityTraits = _ref.accessibilityTraits;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }

  if (accessibilityTraits) {
    var trait = Array.isArray(accessibilityTraits) ? accessibilityTraits[0] : accessibilityTraits;
    return accessibilityTraitsToRole[trait];
  }

  if (accessibilityComponentType) {
    return accessibilityComponentTypeToRole[accessibilityComponentType];
  }
};

/* harmony default export */ var AccessibilityUtil_propsToAriaRole = (propsToAriaRole);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js

var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
var propsToAccessibilityComponent_emptyObject = {};

var propsToAccessibilityComponent_propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = propsToAccessibilityComponent_emptyObject;
  }

  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = AccessibilityUtil_propsToAriaRole(props);

  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'] || 1;
      return "h" + level;
    }

    return roleComponents[role];
  }
};

/* harmony default export */ var AccessibilityUtil_propsToAccessibilityComponent = (propsToAccessibilityComponent_propsToAccessibilityComponent);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js




var AccessibilityUtil = {
  buttonLikeRoles: AccessibilityUtil_buttonLikeRoles,
  isDisabled: AccessibilityUtil_isDisabled,
  propsToAccessibilityComponent: AccessibilityUtil_propsToAccessibilityComponent,
  propsToAriaRole: AccessibilityUtil_propsToAriaRole
};
/* harmony default export */ var modules_AccessibilityUtil = (AccessibilityUtil);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js

function createCSSStyleSheet(id) {
  if (ExecutionEnvironment_["canUseDOM"]) {
    var element = document.getElementById(id);

    if (element != null) {
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridColumn: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
/* harmony default export */ var modules_unitlessNumbers = (unitlessNumbers);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

/* harmony default export */ var modules_isWebColor = (isWebColor);
// EXTERNAL MODULE: external "normalize-css-color"
var external_normalize_css_color_ = __webpack_require__("DjSU");
var external_normalize_css_color_default = /*#__PURE__*/__webpack_require__.n(external_normalize_css_color_);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/processColor/index.js


var processColor_processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  }

  var int32Color = external_normalize_css_color_default()(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

/* harmony default export */ var exports_processColor = (processColor_processColor);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/normalizeColor/index.js



var normalizeColor_normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && modules_isWebColor(color)) {
    return color;
  }

  var colorInt = exports_processColor(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

/* harmony default export */ var modules_normalizeColor = (normalizeColor_normalizeColor);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js


var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !modules_unitlessNumbers[property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = modules_normalizeColor(value);
  }

  return returnValue;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js


var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue_resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  var color = modules_normalizeColor(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

/* harmony default export */ var StyleSheet_resolveShadowValue = (resolveShadowValue_resolveShadowValue);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var createCompileableStyle_defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = StyleSheet_resolveShadowValue(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || createCompileableStyle_defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = normalizeValueWithProperty(width);
  var offsetY = normalizeValueWithProperty(height);
  var blurRadius = normalizeValueWithProperty(radius);
  var color = normalizeValueWithProperty(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

/* harmony default export */ var StyleSheet_createCompileableStyle = (createCompileableStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText;

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }

      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue);

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group);
        groups[group] = {
          start: null,
          rules: [markerRule]
        };

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }

      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/flattenArray/index.js
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

/* harmony default export */ var modules_flattenArray = (flattenArray);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/I18nManager/index.js

var I18nManager_doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var I18nManager_isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var I18nManager_onDirectionChange = function onDirectionChange() {
  if (ExecutionEnvironment_default.a.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', I18nManager_isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    I18nManager_onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    I18nManager_onDirectionChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    I18nManager_onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    I18nManager_doLeftAndRightSwapInRTL = bool;
  },

  get doLeftAndRightSwapInRTL() {
    return I18nManager_doLeftAndRightSwapInRTL;
  },

  get isRTL() {
    return I18nManager_isRTL();
  }

};
/* harmony default export */ var exports_I18nManager = (I18nManager);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

/* harmony default export */ var modules_multiplyStyleLengthValue = (multiplyStyleLengthValue);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js


var i18nStyle_emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var i18nStyle_left = 'left';
var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: i18nStyle_left
};
var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: i18nStyle_left
};
var PROPERTIES_VALUE = {
  clear: true,
  float: true,
  textAlign: true
};

var i18nStyle_additiveInverse = function additiveInverse(value) {
  return modules_multiplyStyleLengthValue(value, -1);
};

var i18nStyle_i18nStyle = function i18nStyle(originalStyle) {
  var doLeftAndRightSwapInRTL = exports_I18nManager.doLeftAndRightSwapInRTL,
      isRTL = exports_I18nManager.isRTL;
  var style = originalStyle || i18nStyle_emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    }

    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    }

    if (prop === 'transitionProperty') {
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalValue]) {
        value = PROPERTIES_FLIP[originalValue];
      }
    }

    if (isRTL && prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = i18nStyle_additiveInverse(value.width);
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

/* harmony default export */ var StyleSheet_i18nStyle = (i18nStyle_i18nStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/constants.js
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif';
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js



var createReactDOMStyle_emptyObject = {};
var supportsCSS3TextDecoration = !ExecutionEnvironment_["canUseDOM"] || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));

var createReactDOMStyle_mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = normalizeValueWithProperty(transform[type], type);
  return type + "(" + value + ")";
};

var convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  var matrix = transformMatrix.join(',');
  return "matrix3d(" + matrix + ")";
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(createReactDOMStyle_mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }

  resolvedStyle.transform = transform;
};

var createReactDOMStyle_createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return createReactDOMStyle_emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = normalizeValueWithProperty(style[prop], prop);

    if (value == null) {
      return;
    }

    switch (prop) {
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }

      case 'flex':
        {
          if (value > 0) {
            resolvedStyle.flexGrow = value;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = '0%';
          } else if (value === 0) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 0;
            resolvedStyle.flexBasis = '0%';
          } else if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', SYSTEM_FONT_STACK);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = SYSTEM_FONT_STACK;
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = MONOSPACE_FONT_STACK;
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = STYLE_SHORT_FORM_EXPANSIONS[prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

/* harmony default export */ var StyleSheet_createReactDOMStyle = (createReactDOMStyle_createReactDOMStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/hash/index.js
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

/* harmony default export */ var vendor_hash = (hash);
// EXTERNAL MODULE: external "hyphenate-style-name"
var external_hyphenate_style_name_ = __webpack_require__("gwwY");
var external_hyphenate_style_name_default = /*#__PURE__*/__webpack_require__.n(external_hyphenate_style_name_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/createPrefixer"
var createPrefixer_ = __webpack_require__("eNWT");
var createPrefixer_default = /*#__PURE__*/__webpack_require__.n(createPrefixer_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/backgroundClip"
var backgroundClip_ = __webpack_require__("eZI+");
var backgroundClip_default = /*#__PURE__*/__webpack_require__.n(backgroundClip_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/crossFade"
var crossFade_ = __webpack_require__("J3ww");
var crossFade_default = /*#__PURE__*/__webpack_require__.n(crossFade_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/cursor"
var cursor_ = __webpack_require__("LnWa");
var cursor_default = /*#__PURE__*/__webpack_require__.n(cursor_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/filter"
var filter_ = __webpack_require__("kvbm");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/flex"
var flex_ = __webpack_require__("eRNP");
var flex_default = /*#__PURE__*/__webpack_require__.n(flex_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/flexboxIE"
var flexboxIE_ = __webpack_require__("eJic");
var flexboxIE_default = /*#__PURE__*/__webpack_require__.n(flexboxIE_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/flexboxOld"
var flexboxOld_ = __webpack_require__("vTM5");
var flexboxOld_default = /*#__PURE__*/__webpack_require__.n(flexboxOld_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/gradient"
var gradient_ = __webpack_require__("iJv9");
var gradient_default = /*#__PURE__*/__webpack_require__.n(gradient_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/imageSet"
var imageSet_ = __webpack_require__("bcFB");
var imageSet_default = /*#__PURE__*/__webpack_require__.n(imageSet_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/position"
var position_ = __webpack_require__("aD8d");
var position_default = /*#__PURE__*/__webpack_require__.n(position_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/sizing"
var sizing_ = __webpack_require__("krLv");
var sizing_default = /*#__PURE__*/__webpack_require__.n(sizing_);

// EXTERNAL MODULE: external "inline-style-prefixer/lib/plugins/transition"
var transition_ = __webpack_require__("+es4");
var transition_default = /*#__PURE__*/__webpack_require__.n(transition_);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/static.js












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ var prefixStyles_static = ({
  plugins: [backgroundClip_default.a, crossFade_default.a, cursor_default.a, filter_default.a, flex_default.a, flexboxIE_default.a, flexboxOld_default.a, gradient_default.a, imageSet_default.a, position_default.a, sizing_default.a, transition_default.a],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/index.js


var prefixAll = createPrefixer_default()(prefixStyles_static);
/* harmony default export */ var prefixStyles = (prefixAll);
var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style);
  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/compile.js
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function compile_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var compile_cache = {
  get: function get(property, value) {
    if (compile_cache[property] != null && compile_cache[property].hasOwnProperty(value) && compile_cache[property][value] != null) {
      return compile_cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (compile_cache[property] == null) {
      compile_cache[property] = {};
    }

    return compile_cache[property][value] = object;
  }
};
function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = compile_cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = compile_cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = compile_objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread({}, rest, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
function inline(style) {
  return prefixInlineStyles(StyleSheet_createReactDOMStyle(style));
}
function stringifyValueWithProperty(value, property) {
  var normalizedValue = normalizeValueWithProperty(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}

function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }

    case 'scrollbarWidth':
      {
        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}", selector + "{overflow:-moz-scrollbars-none;-ms-overflow-style:none;scrollbar-width:none;}");
        }

        break;
      }

    case 'pointerEvents':
      {
        var _createDeclarationBlo3;

        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _createDeclarationBlo;

            var _block3 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = 'none', _createDeclarationBlo));

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _createDeclarationBlo2;

            var _block4 = createDeclarationBlock((_createDeclarationBlo2 = {}, _createDeclarationBlo2[property] = 'auto', _createDeclarationBlo2));

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock((_createDeclarationBlo3 = {}, _createDeclarationBlo3[property] = finalValue, _createDeclarationBlo3));

        rules.push("" + selector + _block2);
        break;
      }

    default:
      {
        var _createDeclarationBlo4;

        var _block5 = createDeclarationBlock((_createDeclarationBlo4 = {}, _createDeclarationBlo4[property] = value, _createDeclarationBlo4));

        rules.push("" + selector + _block5);
        break;
      }
  }

  return rules;
}

function createDeclarationBlock(style) {
  var domStyle = prefixStyles(StyleSheet_createReactDOMStyle(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = external_hyphenate_style_name_default()(property);

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }).sort().join(';');
  return "{" + declarationsString + ";}";
}

function createIdentifier(prefix, name, value) {
  var hashedString = vendor_hash(name + stringifyValueWithProperty(value, name));
  return  false ? undefined : prefix + "-" + hashedString;
}

function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}

function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error('Invalid CSS keyframes type');
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js
var resets = ['html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', 'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
/* harmony default export */ var initialRules = (resets);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/modality.js

var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var modality_rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality_modality = function modality(insertRule) {
  insertRule(modality_rule);

  if (!ExecutionEnvironment_["canUseDOM"]) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }

  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }

  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }

  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }

  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }

  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }

  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }

  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  function onInitialPointerMove(e) {
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

/* harmony default export */ var StyleSheet_modality = (modality_modality);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js


function createStyleResolver_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      createStyleResolver_defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function createStyleResolver_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}













var createStyleResolver_emptyObject = {};
function createStyleResolver() {
  var inserted, sheet, lookup;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(STYLE_ELEMENT_ID));
    lookup = {
      byClassName: {},
      byProp: {}
    };
    StyleSheet_modality(function (rule) {
      return sheet.insert(rule, STYLE_GROUPS.modality);
    });
    initialRules.forEach(function (rule) {
      sheet.insert(rule, STYLE_GROUPS.reset);
    });
  };

  init();

  function addToLookup(className, prop, value) {
    if (!lookup.byProp[prop]) {
      lookup.byProp[prop] = {};
    }

    lookup.byProp[prop][value] = className;
    lookup.byClassName[className] = {
      prop: prop,
      value: value
    };
  }

  function getClassName(prop, value) {
    var val = stringifyValueWithProperty(value, prop);
    var cache = lookup.byProp;
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var doLeftAndRightSwapInRTL = exports_I18nManager.doLeftAndRightSwapInRTL,
        isRTL = exports_I18nManager.isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(StyleSheet_flattenStyle(id)));
      var results = atomic(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToLookup(identifier, property, value);
        rules.forEach(function (rule) {
          var group = STYLE_GROUPS.custom[property] || STYLE_GROUPS.atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }

  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      modules_flattenArray(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      props = _resolveStyle(style);
    } else {
      var flatArray = modules_flattenArray(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }

  function resolveWithNode(rnStyleNext, node) {
    function getDeclaration(className) {
      return lookup.byClassName[className] || createStyleResolver_emptyObject;
    }

    var _getDOMStyleInfo = getDOMStyleInfo(node),
        rdomClassList = _getDOMStyleInfo.classList,
        rdomStyle = _getDOMStyleInfo.style;

    var _rdomClassList$reduce = rdomClassList.reduce(function (styleProps, className) {
      var _getDeclaration = getDeclaration(className),
          prop = _getDeclaration.prop,
          value = _getDeclaration.value;

      if (prop) {
        styleProps.style[prop] = value;
      } else {
        styleProps.classList.push(className);
      }

      return styleProps;
    }, {
      classList: [],
      style: {}
    }),
        rnClassList = _rdomClassList$reduce.classList,
        rnStyle = _rdomClassList$reduce.style;

    var _resolve = resolve([StyleSheet_i18nStyle(rnStyle), rnStyleNext]),
        rdomClassListNext = _resolve.classList,
        rdomStyleNext = _resolve.style;

    var className = classListToString(rdomClassListNext.concat(rnClassList));

    var style = createStyleResolver_objectSpread({}, rdomStyle);

    rdomClassListNext.forEach(function (className) {
      var _getDeclaration2 = getDeclaration(className),
          prop = _getDeclaration2.prop;

      if (style[prop]) {
        style[prop] = '';
      }
    });

    extends_default()(style, rdomStyleNext);

    return {
      className: className,
      style: style
    };
  }

  function _resolveStyle(style, key) {
    var doLeftAndRightSwapInRTL = exports_I18nManager.doLeftAndRightSwapInRTL,
        isRTL = exports_I18nManager.isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = StyleSheet_flattenStyle(style);
    var localizedStyle = StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(flatStyle));
    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = atomic((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.values(a).forEach(function (_ref) {
              var identifier = _ref.identifier,
                  rules = _ref.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, STYLE_GROUPS.atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            }

            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = inline(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent();

      if (!ExecutionEnvironment_["canUseDOM"]) {
        init();
      }

      return {
        id: STYLE_ELEMENT_ID,
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = classic(style, name);
        Object.values(compiled).forEach(function (_ref2) {
          var identifier = _ref2.identifier,
              rules = _ref2.rules;
          resolved.css[identifier] = {
            group: group || STYLE_GROUPS.classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,
    sheet: sheet,
    resolveWithNode: resolveWithNode
  };
}

var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};

var hyphenPattern = /-([a-z])/g;

var toCamelCase = function toCamelCase(str) {
  return str.replace(hyphenPattern, function (m) {
    return m[1].toUpperCase();
  });
};

var getDOMStyleInfo = function getDOMStyleInfo(node) {
  var nodeStyle = node.style;
  var classList = Array.prototype.slice.call(node.classList);
  var style = {};

  for (var i = 0; i < nodeStyle.length; i += 1) {
    var property = nodeStyle.item(i);

    if (property) {
      style[toCamelCase(property)] = nodeStyle.getPropertyValue(property);
    }
  }

  return {
    classList: classList,
    style: style
  };
};
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js

var styleResolver_styleResolver = createStyleResolver();
/* harmony default export */ var StyleSheet_styleResolver = (styleResolver_styleResolver);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/css.js

var css = {
  create: function create(rules, group) {
    return StyleSheet_styleResolver.createCSS(rules, group);
  }
};
/* harmony default export */ var StyleSheet_css = (css);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/createDOMProps/index.js
function createDOMProps_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var createDOMProps_emptyObject = {};
var classes = StyleSheet_css.create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, STYLE_GROUPS.classicReset);
var pointerEventsStyles = exports_StyleSheet.create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var createDOMProps_defaultStyleResolver = function defaultStyleResolver(style, classList) {
  return StyleSheet_styleResolver.resolve(style, classList);
};

var createDOMProps_createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = createDOMProps_defaultStyleResolver;
  }

  if (!props) {
    props = createDOMProps_emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityStates = _props.accessibilityStates,
      classList = _props.classList,
      deprecatedClassName = _props.className,
      importantForAccessibility = _props.importantForAccessibility,
      nativeID = _props.nativeID,
      placeholderTextColor = _props.placeholderTextColor,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessible = _props.accessible,
      accessibilityComponentType = _props.accessibilityComponentType,
      accessibilityRole = _props.accessibilityRole,
      accessibilityTraits = _props.accessibilityTraits,
      domProps = createDOMProps_objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityStates", "classList", "className", "importantForAccessibility", "nativeID", "placeholderTextColor", "pointerEvents", "style", "testID", "accessible", "accessibilityComponentType", "accessibilityRole", "accessibilityTraits"]);

  var disabled = modules_AccessibilityUtil.isDisabled(props);
  var role = modules_AccessibilityUtil.propsToAriaRole(props);

  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }

  if (accessibilityLabel && accessibilityLabel.constructor === String) {
    domProps['aria-label'] = accessibilityLabel;
  }

  if (accessibilityLiveRegion && accessibilityLiveRegion.constructor === String) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }

  if (Array.isArray(accessibilityStates)) {
    for (var i = 0; i < accessibilityStates.length; i += 1) {
      domProps["aria-" + accessibilityStates[i]] = true;
    }
  }

  if (role && role.constructor === String) {
    domProps.role = role;
  }

  if (disabled) {
    domProps['aria-disabled'] = disabled;
    domProps.disabled = disabled;
  }

  var focusable = !disabled && importantForAccessibility !== 'no' && importantForAccessibility !== 'no-hide-descendants';

  if (role === 'link' || component === 'a' || component === 'button' || component === 'input' || component === 'select' || component === 'textarea') {
    if (accessible === false || !focusable) {
      domProps.tabIndex = '-1';
    } else {
      domProps['data-focusable'] = true;
    }
  } else if (modules_AccessibilityUtil.buttonLikeRoles[role] || role === 'textbox') {
    if (accessible !== false && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } else {
    if (accessible === true && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  }

  var reactNativeStyle = exports_StyleSheet.compose(pointerEvents && pointerEventsStyles[pointerEvents], exports_StyleSheet.compose(providedStyle, placeholderTextColor && {
    placeholderTextColor: placeholderTextColor
  }));
  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = component === 'a' || component === 'button' || component === 'li' || component === 'ul' || role === 'heading';
  var finalClassList = [deprecatedClassName, needsReset && classes.reset, needsCursor && classes.cursor, classList];

  var _styleResolver = styleResolver(reactNativeStyle, finalClassList),
      className = _styleResolver.className,
      style = _styleResolver.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  }

  if (nativeID && nativeID.constructor === String) {
    domProps.id = nativeID;
  }

  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + " noopener noreferrer";
  }

  if (testID && testID.constructor === String) {
    domProps['data-testid'] = testID;
  }

  return domProps;
};

/* harmony default export */ var modules_createDOMProps = (createDOMProps_createDOMProps);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ var modules_getBoundingClientRect = (getBoundingClientRect);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js


function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(modules_unitlessNumbers.hasOwnProperty(name) && modules_unitlessNumbers[name])) {
    return value + 'px';
  }

  return ('' + value).trim();
}

/* harmony default export */ var react_dom_dangerousStyleValue = (dangerousStyleValue);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js




function setValueForStyles(node, styles, getStack) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;

    if (false) {}

    var styleValue = react_dom_dangerousStyleValue(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      var name = isCustomProperty ? styleName : external_hyphenate_style_name_default()(styleName);
      style.setProperty(name, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/* harmony default export */ var react_dom_setValueForStyles = (setValueForStyles);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/UIManager/index.js



var UIManager_getRect = function getRect(node) {
  var _getBoundingClientRec = modules_getBoundingClientRect(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = modules_getBoundingClientRect(relativeNode);

      var _getRect = UIManager_getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName;

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = UIManager_getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props, component) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            react_dom_setValueForStyles(node, value, component._reactInternalInstance);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
/* harmony default export */ var exports_UIManager = (UIManager);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js




var NativeMethodsMixin = {
  blur: function blur() {
    exports_UIManager.blur(exports_findNodeHandle(this));
  },
  focus: function focus() {
    exports_UIManager.focus(exports_findNodeHandle(this));
  },
  measure: function measure(callback) {
    exports_UIManager.measure(exports_findNodeHandle(this), callback);
  },
  measureInWindow: function measureInWindow(callback) {
    exports_UIManager.measureInWindow(exports_findNodeHandle(this), callback);
  },
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    exports_UIManager.measureLayout(exports_findNodeHandle(this), relativeToNativeNode, onFail, onSuccess);
  },
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }

    var node = exports_findNodeHandle(this);

    if (node) {
      var domProps = modules_createDOMProps(null, nativeProps, function (style) {
        return StyleSheet_styleResolver.resolveWithNode(style, node);
      });
      exports_UIManager.updateView(node, domProps, this);
    }
  }
};
/* harmony default export */ var modules_NativeMethodsMixin = (NativeMethodsMixin);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/applyNativeMethods/index.js


var applyNativeMethods_applyNativeMethods = function applyNativeMethods(Component) {
  Object.keys(modules_NativeMethodsMixin).forEach(function (method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = modules_NativeMethodsMixin[method];
    }
  });
  return Component;
};

/* harmony default export */ var modules_applyNativeMethods = (applyNativeMethods_applyNativeMethods);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "react-dom/unstable-native-dependencies"
var unstable_native_dependencies_ = __webpack_require__("oDCs");
var unstable_native_dependencies_default = /*#__PURE__*/__webpack_require__.n(unstable_native_dependencies_);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js

var emptyArray = [];

var emptyFunction = function emptyFunction() {};

var normalizeNativeEvent_normalizeTouches = function normalizeTouches(touches) {
  if (!touches) {
    return emptyArray;
  }

  return Array.prototype.slice.call(touches).map(function (touch) {
    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;
    var rect;
    return {
      _normalized: true,
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,

      get locationX() {
        rect = rect || modules_getBoundingClientRect(touch.target);

        if (rect) {
          return touch.pageX - rect.left;
        }
      },

      get locationY() {
        rect = rect || modules_getBoundingClientRect(touch.target);

        if (rect) {
          return touch.pageY - rect.top;
        }
      },

      identifier: identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target,
      timestamp: Date.now()
    };
  });
};

function normalizeTouchEvent(nativeEvent) {
  var changedTouches = normalizeNativeEvent_normalizeTouches(nativeEvent.changedTouches);
  var touches = normalizeNativeEvent_normalizeTouches(nativeEvent.touches);
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  var singleChangedTouch = changedTouches[0];
  var event = {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: changedTouches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: singleChangedTouch ? singleChangedTouch.identifier : undefined,

    get locationX() {
      return singleChangedTouch ? singleChangedTouch.locationX : undefined;
    },

    get locationY() {
      return singleChangedTouch ? singleChangedTouch.locationY : undefined;
    },

    pageX: singleChangedTouch ? singleChangedTouch.pageX : nativeEvent.pageX,
    pageY: singleChangedTouch ? singleChangedTouch.pageY : nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    timestamp: Date.now(),
    touches: touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
  return event;
}

function normalizeMouseEvent(nativeEvent) {
  var rect;
  var touches = [{
    _normalized: true,
    clientX: nativeEvent.clientX,
    clientY: nativeEvent.clientY,
    force: nativeEvent.force,
    identifier: 0,

    get locationX() {
      rect = rect || modules_getBoundingClientRect(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageX - rect.left;
      }
    },

    get locationY() {
      rect = rect || modules_getBoundingClientRect(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageY - rect.top;
      }
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    screenX: nativeEvent.screenX,
    screenY: nativeEvent.screenY,
    target: nativeEvent.target,
    timestamp: Date.now()
  }];
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  return {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: touches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: touches[0].identifier,

    get locationX() {
      return touches[0].locationX;
    },

    get locationY() {
      return touches[0].locationY;
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    timestamp: touches[0].timestamp,
    touches: nativeEvent.type === 'mouseup' ? emptyArray : touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
}

function normalizeNativeEvent(nativeEvent) {
  if (!nativeEvent || nativeEvent._normalized) {
    return nativeEvent;
  }

  var eventType = nativeEvent.type || '';
  var mouse = eventType.indexOf('mouse') >= 0;

  if (mouse) {
    return normalizeMouseEvent(nativeEvent);
  } else {
    return normalizeTouchEvent(nativeEvent);
  }
}

/* harmony default export */ var modules_normalizeNativeEvent = (normalizeNativeEvent);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/ResponderEventPlugin/index.js


var ResponderEventPlugin = unstable_native_dependencies_default.a.ResponderEventPlugin,
    ResponderTouchHistoryStore = unstable_native_dependencies_default.a.ResponderTouchHistoryStore;

if (!ResponderEventPlugin.eventTypes.responderMove.dependencies) {
  var topMouseDown = 'topMouseDown';
  var topMouseMove = 'topMouseMove';
  var topMouseUp = 'topMouseUp';
  var topScroll = 'topScroll';
  var topSelectionChange = 'topSelectionChange';
  var topTouchCancel = 'topTouchCancel';
  var topTouchEnd = 'topTouchEnd';
  var topTouchMove = 'topTouchMove';
  var topTouchStart = 'topTouchStart';
  var endDependencies = [topTouchCancel, topTouchEnd, topMouseUp];
  var moveDependencies = [topTouchMove, topMouseMove];
  var startDependencies = [topTouchStart, topMouseDown];
  ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies;
  ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = [];
  ResponderEventPlugin.eventTypes.responderGrant.dependencies = [];
  ResponderEventPlugin.eventTypes.responderReject.dependencies = [];
  ResponderEventPlugin.eventTypes.responderTerminate.dependencies = [];
  ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
  ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
  ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies;
}

var lastActiveTouchTimestamp = null;
var EMULATED_MOUSE_THERSHOLD_MS = 1000;
var originalExtractEvents = ResponderEventPlugin.extractEvents;

ResponderEventPlugin.extractEvents = function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var hasActiveTouches = ResponderTouchHistoryStore.touchHistory.numberActiveTouches > 0;
  var eventType = nativeEvent.type;
  var shouldSkipMouseAfterTouch = false;

  if (eventType.indexOf('touch') > -1) {
    lastActiveTouchTimestamp = Date.now();
  } else if (lastActiveTouchTimestamp && eventType.indexOf('mouse') > -1) {
    var now = Date.now();
    shouldSkipMouseAfterTouch = now - lastActiveTouchTimestamp < EMULATED_MOUSE_THERSHOLD_MS;
  }

  if ((eventType === 'mousemove' || eventType === 'mouseup') && !hasActiveTouches || nativeEvent.button === 1 || nativeEvent.button === 2 || shouldSkipMouseAfterTouch) {
    return;
  }

  var normalizedEvent = modules_normalizeNativeEvent(nativeEvent);
  return originalExtractEvents.call(ResponderEventPlugin, topLevelType, targetInst, normalizedEvent, nativeEventTarget);
};

/* harmony default export */ var modules_ResponderEventPlugin = (ResponderEventPlugin);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js






Object(unstable_native_dependencies_["injectEventPluginsByName"])({
  ResponderEventPlugin: modules_ResponderEventPlugin
});

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var eventHandlerNames = {
  onBlur: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onResponderRelease: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};

var createElement_adjustProps = function adjustProps(domProps) {
  var onClick = domProps.onClick,
      onResponderRelease = domProps.onResponderRelease,
      role = domProps.role;
  var isButtonLikeRole = modules_AccessibilityUtil.buttonLikeRoles[role];
  var isDisabled = modules_AccessibilityUtil.isDisabled(domProps);
  var isLinkRole = role === 'link';
  Object.keys(domProps).forEach(function (propName) {
    var prop = domProps[propName];
    var isEventHandler = typeof prop === 'function' && eventHandlerNames[propName];

    if (isEventHandler) {
      if (isButtonLikeRole && isDisabled) {
        domProps[propName] = undefined;
      } else {
        domProps[propName] = function (e) {
          e.nativeEvent = modules_normalizeNativeEvent(e.nativeEvent);
          return prop(e);
        };
      }
    }
  });

  if (isLinkRole && onResponderRelease) {
    domProps.onClick = function (e) {
      if (!e.isDefaultPrevented() && !isModifiedEvent(e.nativeEvent) && !domProps.target) {
        e.preventDefault();
      }
    };
  }

  if (isButtonLikeRole && !isDisabled) {
    domProps.onKeyPress = function (e) {
      if (!e.isDefaultPrevented() && (e.which === 13 || e.which === 32)) {
        e.preventDefault();

        if (onClick) {
          onClick(e);
        }
      }
    };
  }
};

var createElement_createElement = function createElement(component, props) {
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = modules_AccessibilityUtil.propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = modules_createDOMProps(Component, props);
  createElement_adjustProps(domProps);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return external_react_default.a.createElement.apply(external_react_default.a, [Component, domProps].concat(children));
};

/* harmony default export */ var exports_createElement = (createElement_createElement);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/View/filterSupportedProps.js
var filterSupportedProps_supportedProps = {
  accessibilityComponentType: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityStates: true,
  accessibilityTraits: true,
  accessible: true,
  children: true,
  disabled: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onContextMenu: true,
  onFocus: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onScrollShouldSetResponder: true,
  onScrollShouldSetResponderCapture: true,
  onSelectionChangeShouldSetResponder: true,
  onSelectionChangeShouldSetResponderCapture: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  pointerEvents: true,
  style: true,
  testID: true,
  onScroll: true,
  onWheel: true,
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true,
  className: true,
  href: true,
  itemID: true,
  itemRef: true,
  itemProp: true,
  itemScope: true,
  itemType: true,
  onClick: true,
  onClickCapture: true,
  rel: true,
  target: true
};

var filterSupportedProps = function filterSupportedProps(props) {
  var safeProps = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (filterSupportedProps_supportedProps[prop] || prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
        safeProps[prop] = props[prop];
      }
    }
  }

  return safeProps;
};

/* harmony default export */ var View_filterSupportedProps = (filterSupportedProps);
// EXTERNAL MODULE: external "fbjs/lib/warning"
var warning_ = __webpack_require__("CKG8");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}













var calculateHitSlopStyle = function calculateHitSlopStyle(hitSlop) {
  var hitStyle = {};

  for (var prop in hitSlop) {
    if (hitSlop.hasOwnProperty(prop)) {
      var value = hitSlop[prop];
      hitStyle[prop] = value > 0 ? -1 * value : 0;
    }
  }

  return hitStyle;
};

var View_View = function (_Component) {
  _inheritsLoose(View, _Component);

  function View() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = View.prototype;

  _proto.render = function render() {
    var hitSlop = this.props.hitSlop;
    var supportedProps = View_filterSupportedProps(this.props);

    if (false) {}

    var isInAParentText = this.context.isInAParentText;
    supportedProps.classList = [this.props.className, View_classes.view];
    supportedProps.style = exports_StyleSheet.compose(isInAParentText && View_styles.inline, this.props.style);

    if (hitSlop) {
      var hitSlopStyle = calculateHitSlopStyle(hitSlop);
      var hitSlopChild = exports_createElement('span', {
        classList: [View_classes.hitSlop],
        style: hitSlopStyle
      });
      supportedProps.children = external_react_default.a.Children.toArray([hitSlopChild, supportedProps.children]);
    }

    return exports_createElement('div', supportedProps);
  };

  return View;
}(external_react_["Component"]);

View_View.displayName = 'View';
View_View.contextTypes = {
  isInAParentText: external_prop_types_["bool"]
};
View_View.propTypes =  false ? undefined : {};
var View_classes = StyleSheet_css.create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  },
  hitSlop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
});
var View_styles = exports_StyleSheet.create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ var exports_View = (modules_applyLayout(modules_applyNativeMethods(View_View)));
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js
function AppContainer_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var AppContainer_AppContainer = function (_Component) {
  AppContainer_inheritsLoose(AppContainer, _Component);

  function AppContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      mainKey: 1
    };
    return _this;
  }

  var _proto = AppContainer.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      rootTag: this.props.rootTag
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        WrapperComponent = _this$props.WrapperComponent;
    var innerView = external_react_default.a.createElement(exports_View, {
      children: children,
      key: this.state.mainKey,
      pointerEvents: "box-none",
      style: AppContainer_styles.appContainer
    });

    if (WrapperComponent) {
      innerView = external_react_default.a.createElement(WrapperComponent, null, innerView);
    }

    return external_react_default.a.createElement(exports_View, {
      pointerEvents: "box-none",
      style: AppContainer_styles.appContainer
    }, innerView);
  };

  return AppContainer;
}(external_react_["Component"]);

AppContainer_AppContainer.childContextTypes = {
  rootTag: external_prop_types_["any"]
};

AppContainer_AppContainer.propTypes =  false ? undefined : {};
var AppContainer_styles = exports_StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/hydrate/index.js

/* harmony default export */ var hydrate = (external_react_dom_["hydrate"]);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js
function _extends() {
  _extends = Object.assign || function (target) {
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







var renderFn =  false ? undefined : hydrate;
function renderApplication(RootComponent, initialProps, rootTag, WrapperComponent, callback) {
  invariant_default()(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  renderFn(external_react_default.a.createElement(AppContainer_AppContainer, {
    WrapperComponent: WrapperComponent,
    rootTag: rootTag
  }, external_react_default.a.createElement(RootComponent, initialProps)), rootTag, callback);
}
function renderApplication_getApplication(RootComponent, initialProps, WrapperComponent) {
  var element = external_react_default.a.createElement(AppContainer_AppContainer, {
    WrapperComponent: WrapperComponent,
    rootTag: {}
  }, external_react_default.a.createElement(RootComponent, initialProps));

  var getStyleElement = function getStyleElement(props) {
    var sheet = StyleSheet_styleResolver.getStyleSheet();
    return external_react_default.a.createElement("style", _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: sheet.textContent
      },
      id: sheet.id
    }));
  };

  return {
    element: element,
    getStyleElement: getStyleElement
  };
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/index.js
function AppRegistry_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      AppRegistry_defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function AppRegistry_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var AppRegistry_emptyObject = {};
var runnables = {};

var componentProviderInstrumentationHook = function componentProviderInstrumentationHook(component) {
  return component();
};

var wrapperComponentProvider;

var AppRegistry_AppRegistry = function () {
  function AppRegistry() {}

  AppRegistry.getAppKeys = function getAppKeys() {
    return Object.keys(runnables);
  };

  AppRegistry.getApplication = function getApplication(appKey, appParameters) {
    invariant_default()(runnables[appKey] && runnables[appKey].getApplication, "Application " + appKey + " has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    return runnables[appKey].getApplication(appParameters);
  };

  AppRegistry.registerComponent = function registerComponent(appKey, componentProvider) {
    runnables[appKey] = {
      getApplication: function getApplication(appParameters) {
        return renderApplication_getApplication(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : AppRegistry_emptyObject, wrapperComponentProvider && wrapperComponentProvider(appParameters));
      },
      run: function run(appParameters) {
        return renderApplication(componentProviderInstrumentationHook(componentProvider), appParameters.initialProps || AppRegistry_emptyObject, appParameters.rootTag, wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback);
      }
    };
    return appKey;
  };

  AppRegistry.registerConfig = function registerConfig(config) {
    config.forEach(function (_ref) {
      var appKey = _ref.appKey,
          component = _ref.component,
          run = _ref.run;

      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        invariant_default()(component, 'No component provider passed in');
        AppRegistry.registerComponent(appKey, component);
      }
    });
  };

  AppRegistry.registerRunnable = function registerRunnable(appKey, run) {
    runnables[appKey] = {
      run: run
    };
    return appKey;
  };

  AppRegistry.runApplication = function runApplication(appKey, appParameters) {
    var isDevelopment =  false && false;

    if (isDevelopment) {
      var params = AppRegistry_objectSpread({}, appParameters);

      params.rootTag = "#" + params.rootTag.id;
      console.log("Running application \"" + appKey + "\" with appParams:\n", params, "\nDevelopment-level warnings: " + (isDevelopment ? 'ON' : 'OFF') + "." + ("\nPerformance optimizations: " + (isDevelopment ? 'OFF' : 'ON') + "."));
    }

    invariant_default()(runnables[appKey] && runnables[appKey].run, "Application \"" + appKey + "\" has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    runnables[appKey].run(appParameters);
  };

  AppRegistry.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(hook) {
    componentProviderInstrumentationHook = hook;
  };

  AppRegistry.setWrapperComponentProvider = function setWrapperComponentProvider(provider) {
    wrapperComponentProvider = provider;
  };

  AppRegistry.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(rootTag) {
    unmountComponentAtNode(rootTag);
  };

  return AppRegistry;
}();


// CONCATENATED MODULE: ./.expo/next_document.js
var _jsxFileName="/Users/work/dev/baobab/a/.expo/next_document.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function next_document_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var normalizeNextElements="\n/**\n * Building on the RNWeb reset:\n * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js\n */\nhtml, body, #__next {\n  width: 100%;\n  /* To smooth any scrolling behavior */\n  -webkit-overflow-scrolling: touch;\n  margin: 0px;\n  padding: 0px;\n  /* Allows content to fill the viewport and go beyond the bottom */\n  min-height: 100%;\n}\n#__next {\n  flex-shrink: 0;\n  flex-basis: auto;\n  flex-grow: 1;\n  display: flex;\n  flex: 1;\n}\nhtml {\n  font-size: 14px;\n  scroll-behavior: smooth;\n  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */\n  -webkit-text-size-adjust: 100%;\n  height: 100%;\n}\nbody {\n  display: flex;\n  /* Allows you to scroll below the viewport; default value is visible */\n  overflow-y: auto;\n  overscroll-behavior-y: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -ms-overflow-style: scrollbar;\n}\n";var next_document_ExpoDocument=function(_Document){inherits_default()(ExpoDocument,_Document);function ExpoDocument(){classCallCheck_default()(this,ExpoDocument);return possibleConstructorReturn_default()(this,getPrototypeOf_default()(ExpoDocument).apply(this,arguments));}createClass_default()(ExpoDocument,[{key:"render",value:function render(){return external_react_default.a.createElement("html",{__source:{fileName:_jsxFileName,lineNumber:61}},external_react_default.a.createElement(next_document["Head"],{__source:{fileName:_jsxFileName,lineNumber:62}},external_react_default.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge",__source:{fileName:_jsxFileName,lineNumber:63}})),external_react_default.a.createElement("body",{__source:{fileName:_jsxFileName,lineNumber:65}},external_react_default.a.createElement(next_document["Main"],{__source:{fileName:_jsxFileName,lineNumber:66}}),external_react_default.a.createElement(next_document["NextScript"],{__source:{fileName:_jsxFileName,lineNumber:67}})));}}],[{key:"getInitialProps",value:function getInitialProps(_ref){var renderPage,_AppRegistry$getAppli,getStyleElement,page,styles;return regenerator_default.a.async(function getInitialProps$(_context){while(1){switch(_context.prev=_context.next){case 0:renderPage=_ref.renderPage;AppRegistry_AppRegistry.registerComponent('Main',function(){return next_document["Main"];});_AppRegistry$getAppli=AppRegistry_AppRegistry.getApplication('Main'),getStyleElement=_AppRegistry$getAppli.getStyleElement;page=renderPage();styles=[external_react_default.a.createElement("style",{dangerouslySetInnerHTML:{__html:normalizeNextElements},__source:{fileName:_jsxFileName,lineNumber:53}}),getStyleElement()];return _context.abrupt("return",next_document_objectSpread({},page,{styles:external_react_default.a.Children.toArray(styles)}));case 6:case"end":return _context.stop();}}});}}]);return ExpoDocument;}(document_default.a);
// CONCATENATED MODULE: ./pages/_document.js
/* harmony default export */ var _document = __webpack_exports__["default"] = (next_document_ExpoDocument);

/***/ }),

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

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

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

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

/***/ "CKG8":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "Cg2A":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y6vh");

/***/ }),

/***/ "DjSU":
/***/ (function(module, exports) {

module.exports = require("normalize-css-color");

/***/ }),

/***/ "Ecjf":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "J3ww":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

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

/***/ "L1DD":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),

/***/ "LnWa":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "PRL6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__("w7wo");
const internalPrefixes = [/^\/_next\//, /^\/static\//];
function isInternalUrl(url) {
    for (const prefix of internalPrefixes) {
        if (prefix.test(url)) {
            return true;
        }
    }
    return false;
}
exports.isInternalUrl = isInternalUrl;
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SksO":
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

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault2=__webpack_require__("AroE");var _classCallCheck2=_interopRequireDefault2(__webpack_require__("/GRZ"));var _createClass2=_interopRequireDefault2(__webpack_require__("i2R6"));var _possibleConstructorReturn2=_interopRequireDefault2(__webpack_require__("tCBg"));var _getPrototypeOf2=_interopRequireDefault2(__webpack_require__("T0f4"));var _inherits2=_interopRequireDefault2(__webpack_require__("48fX"));var _regenerator=_interopRequireDefault2(__webpack_require__("vJKn"));var _interopRequireWildcard=__webpack_require__("5Uuq");var _interopRequireDefault=__webpack_require__("KI45");exports.__esModule=true;exports.middleware=middleware;exports.NextScript=exports.Main=exports.Head=exports.Html=exports.default=void 0;var _stringify=_interopRequireDefault(__webpack_require__("9Jkg"));var _isArray=_interopRequireDefault(__webpack_require__("p0XB"));var _keys=_interopRequireDefault(__webpack_require__("pLtp"));var _extends2=_interopRequireDefault(__webpack_require__("htGi"));var _now=_interopRequireDefault(__webpack_require__("Cg2A"));var _set=_interopRequireDefault(__webpack_require__("ttDY"));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__("+oT+"));var _propTypes=_interopRequireDefault(__webpack_require__("rf6O"));var _react=_interopRequireWildcard(__webpack_require__("cDcd"));var _utils=__webpack_require__("PRL6");var _utils2=__webpack_require__("g/15");exports.DocumentContext=_utils2.DocumentContext;exports.DocumentInitialProps=_utils2.DocumentInitialProps;exports.DocumentProps=_utils2.DocumentProps;var _htmlescape=__webpack_require__("AXZJ");var _server=_interopRequireDefault(__webpack_require__("2+G7"));var _constants=__webpack_require__("w7wo");function middleware(_x){return _middleware.apply(this,arguments);}function _middleware(){_middleware=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function _callee(_ref){var req,res;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:req=_ref.req,res=_ref.res;case 1:case"end":return _context.stop();}}},_callee);}));return _middleware.apply(this,arguments);}function dedupe(bundles){var files=new _set.default();var kept=[];for(var _iterator=bundles,_isArray2=Array.isArray(_iterator),_i=0,_iterator=_isArray2?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref3;if(_isArray2){if(_i>=_iterator.length)break;_ref3=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref3=_i.value;}var _bundle=_ref3;if(files.has(_bundle.file))continue;files.add(_bundle.file);kept.push(_bundle);}return kept;}function getOptionalModernScriptVariant(path){if(false){}return path;}var Document=function(_react$Component){(0,_inherits2.default)(Document,_react$Component);function Document(){var _this;(0,_classCallCheck2.default)(this,Document);_this=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Document).apply(this,arguments));_this.context=void 0;return _this;}(0,_createClass2.default)(Document,[{key:"getChildContext",value:function getChildContext(){return{_documentProps:this.props,_devOnlyInvalidateCacheQueryString: false?undefined:''};}},{key:"render",value:function render(){return _react.default.createElement(Html,null,_react.default.createElement(Head,null),_react.default.createElement("body",null,_react.default.createElement(Main,null),_react.default.createElement(NextScript,null)));}}],[{key:"getInitialProps",value:function getInitialProps(_ref2){return(0,_asyncToGenerator2.default)(_regenerator.default.mark(function _callee2(){var renderPage,_ref4,html,head,dataOnly,styles;return _regenerator.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:renderPage=_ref2.renderPage;_context2.next=3;return renderPage();case 3:_ref4=_context2.sent;html=_ref4.html;head=_ref4.head;dataOnly=_ref4.dataOnly;styles=(0,_server.default)();return _context2.abrupt("return",{html:html,head:head,styles:styles,dataOnly:dataOnly});case 9:case"end":return _context2.stop();}}},_callee2);}))();}}]);return Document;}(_react.Component);exports.default=Document;Document.childContextTypes={_documentProps:_propTypes.default.any,_devOnlyInvalidateCacheQueryString:_propTypes.default.string};var Html=function(_react$Component2){(0,_inherits2.default)(Html,_react$Component2);function Html(){var _this2;(0,_classCallCheck2.default)(this,Html);_this2=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Html).apply(this,arguments));_this2.context=void 0;return _this2;}(0,_createClass2.default)(Html,[{key:"render",value:function render(){var inAmpMode=this.context._documentProps.inAmpMode;return _react.default.createElement("html",(0,_extends2.default)({},this.props,{amp:inAmpMode?'':undefined,"data-ampdevmode":inAmpMode&&"production"!=='production'?'':undefined}));}}]);return Html;}(_react.Component);exports.Html=Html;Html.contextTypes={_documentProps:_propTypes.default.any};Html.propTypes={children:_propTypes.default.node.isRequired};var Head=function(_react$Component3){(0,_inherits2.default)(Head,_react$Component3);function Head(){var _this3;(0,_classCallCheck2.default)(this,Head);_this3=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Head).apply(this,arguments));_this3.context=void 0;return _this3;}(0,_createClass2.default)(Head,[{key:"getCssLinks",value:function getCssLinks(){var _this4=this;var _this$context$_docume=this.context._documentProps,assetPrefix=_this$context$_docume.assetPrefix,files=_this$context$_docume.files;if(!files||files.length===0){return null;}return files.map(function(file){if(!/\.css$/.test(file)){return null;}return _react.default.createElement("link",{key:file,nonce:_this4.props.nonce,rel:"stylesheet",href:assetPrefix+"/_next/"+encodeURI(file),crossOrigin:_this4.props.crossOrigin||undefined});});}},{key:"getPreloadDynamicChunks",value:function getPreloadDynamicChunks(){var _this5=this;var _this$context$_docume2=this.context._documentProps,dynamicImports=_this$context$_docume2.dynamicImports,assetPrefix=_this$context$_docume2.assetPrefix;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return dedupe(dynamicImports).map(function(bundle){if(!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))){return null;}return _react.default.createElement("link",{rel:"preload",key:bundle.file,href:assetPrefix+"/_next/"+encodeURI(bundle.file)+_devOnlyInvalidateCacheQueryString,as:"script",nonce:_this5.props.nonce,crossOrigin:_this5.props.crossOrigin||undefined});}).filter(Boolean);}},{key:"getPreloadMainLinks",value:function getPreloadMainLinks(){var _this6=this;var _this$context$_docume3=this.context._documentProps,assetPrefix=_this$context$_docume3.assetPrefix,files=_this$context$_docume3.files;if(!files||files.length===0){return null;}var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return files.map(function(file){if(!file.endsWith(getOptionalModernScriptVariant('.js'))){return null;}return _react.default.createElement("link",{key:file,nonce:_this6.props.nonce,rel:"preload",href:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,as:"script",crossOrigin:_this6.props.crossOrigin||undefined});}).filter(Boolean);}},{key:"render",value:function render(){var _this$context$_docume4=this.context._documentProps,styles=_this$context$_docume4.styles,ampPath=_this$context$_docume4.ampPath,inAmpMode=_this$context$_docume4.inAmpMode,assetPrefix=_this$context$_docume4.assetPrefix,hybridAmp=_this$context$_docume4.hybridAmp,canonicalBase=_this$context$_docume4.canonicalBase,__NEXT_DATA__=_this$context$_docume4.__NEXT_DATA__,dangerousAsPath=_this$context$_docume4.dangerousAsPath;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;var page=__NEXT_DATA__.page,buildId=__NEXT_DATA__.buildId;var head=this.context._documentProps.head;var children=this.props.children;if(false){}var hasAmphtmlRel=false;var hasCanonicalRel=false;head=!inAmpMode?head:_react.default.Children.map(head||[],function(child){if(!child)return child;var type=child.type,props=child.props;var badProp='';if(type==='meta'&&props.name==='viewport'){badProp='name="viewport"';}else if(type==='link'&&props.rel==='canonical'){hasCanonicalRel=true;}else if(type==='link'&&props.rel==='amphtml'){hasAmphtmlRel=true;}else if(type==='script'){if(props.src&&props.src.indexOf('ampproject')<-1||props.dangerouslySetInnerHTML&&(!props.type||props.type==='text/javascript')){badProp='<script';(0,_keys.default)(props).forEach(function(prop){badProp+=" "+prop+"=\""+props[prop]+"\"";});badProp+='/>';}}if(badProp){console.warn("Found conflicting amp tag \""+child.type+"\" with conflicting prop "+badProp+" in "+__NEXT_DATA__.page+". https://err.sh/next.js/conflicting-amp-tag");return null;}return child;});var curStyles=(0,_isArray.default)(styles)?styles:[];if(inAmpMode&&styles&&styles.props&&(0,_isArray.default)(styles.props.children)){var hasStyles=function hasStyles(el){return el&&el.props&&el.props.dangerouslySetInnerHTML&&el.props.dangerouslySetInnerHTML.__html;};styles.props.children.map(function(child){if((0,_isArray.default)(child)){child.map(function(el){return hasStyles(el)&&curStyles.push(el);});}else if(hasStyles(child)){curStyles.push(child);}});}return _react.default.createElement("head",this.props,this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("style",{"data-next-hydrating":true,dangerouslySetInnerHTML:{__html:"body{display:none}"}}),_react.default.createElement("noscript",{"data-next-hydrating":true},_react.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{display:unset}"}}))),children,head,_react.default.createElement("meta",{name:"next-head-count",content:_react.default.Children.count(head||[]).toString()}),inAmpMode&&_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"}),!hasCanonicalRel&&_react.default.createElement("link",{rel:"canonical",href:canonicalBase+(0,_utils.cleanAmpPath)(dangerousAsPath)}),_react.default.createElement("link",{rel:"preload",as:"script",href:"https://cdn.ampproject.org/v0.js"}),styles&&_react.default.createElement("style",{"amp-custom":"",dangerouslySetInnerHTML:{__html:curStyles.map(function(style){return style.props.dangerouslySetInnerHTML.__html;}).join('').replace(/\/\*# sourceMappingURL=.*\*\//g,'').replace(/\/\*@ sourceURL=.*?\*\//g,'')}}),_react.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}"}}),_react.default.createElement("noscript",null,_react.default.createElement("style",{"amp-boilerplate":"",dangerouslySetInnerHTML:{__html:"body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"}})),_react.default.createElement("script",{async:true,src:"https://cdn.ampproject.org/v0.js"})),!inAmpMode&&_react.default.createElement(_react.default.Fragment,null,!hasAmphtmlRel&&hybridAmp&&_react.default.createElement("link",{rel:"amphtml",href:canonicalBase+getAmpPath(ampPath,dangerousAsPath)}),page!=='/_error'&&_react.default.createElement("link",{rel:"preload",href:assetPrefix+getOptionalModernScriptVariant(encodeURI("/_next/static/"+buildId+"/pages"+getPageFile(page)))+_devOnlyInvalidateCacheQueryString,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}),_react.default.createElement("link",{rel:"preload",href:assetPrefix+getOptionalModernScriptVariant(encodeURI("/_next/static/"+buildId+"/pages/_app.js"))+_devOnlyInvalidateCacheQueryString,as:"script",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),this.context._documentProps.isDevelopment&&this.context._documentProps.hasCssMode&&_react.default.createElement("noscript",{id:"__next_css__DO_NOT_USE__"}),this.getCssLinks(),styles||null));}}]);return Head;}(_react.Component);exports.Head=Head;Head.contextTypes={_documentProps:_propTypes.default.any,_devOnlyInvalidateCacheQueryString:_propTypes.default.string};Head.propTypes={nonce:_propTypes.default.string,crossOrigin:_propTypes.default.string};var Main=function(_react$Component4){(0,_inherits2.default)(Main,_react$Component4);function Main(){var _this7;(0,_classCallCheck2.default)(this,Main);_this7=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Main).apply(this,arguments));_this7.context=void 0;return _this7;}(0,_createClass2.default)(Main,[{key:"render",value:function render(){var _this$context$_docume5=this.context._documentProps,inAmpMode=_this$context$_docume5.inAmpMode,html=_this$context$_docume5.html;if(inAmpMode)return'__NEXT_AMP_RENDER_TARGET__';return _react.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:html}});}}]);return Main;}(_react.Component);exports.Main=Main;Main.contextTypes={_documentProps:_propTypes.default.any,_devOnlyInvalidateCacheQueryString:_propTypes.default.string};var NextScript=function(_react$Component5){(0,_inherits2.default)(NextScript,_react$Component5);function NextScript(){var _this8;(0,_classCallCheck2.default)(this,NextScript);_this8=(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(NextScript).apply(this,arguments));_this8.context=void 0;return _this8;}(0,_createClass2.default)(NextScript,[{key:"getDynamicChunks",value:function getDynamicChunks(){var _this9=this;var _this$context$_docume6=this.context._documentProps,dynamicImports=_this$context$_docume6.dynamicImports,assetPrefix=_this$context$_docume6.assetPrefix,files=_this$context$_docume6.files;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return dedupe(dynamicImports).map(function(bundle){var modernProps={};if(false){}if(!/\.js$/.test(bundle.file)||files.includes(bundle.file))return null;return _react.default.createElement("script",(0,_extends2.default)({async:true,key:bundle.file,src:assetPrefix+"/_next/"+encodeURI(bundle.file)+_devOnlyInvalidateCacheQueryString,nonce:_this9.props.nonce,crossOrigin:_this9.props.crossOrigin||undefined},modernProps));});}},{key:"getScripts",value:function getScripts(){var _this10=this;var _this$context$_docume7=this.context._documentProps,assetPrefix=_this$context$_docume7.assetPrefix,files=_this$context$_docume7.files;if(!files||files.length===0){return null;}var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;return files.map(function(file){if(!/\.js$/.test(file)){return null;}var modernProps={};if(false){}return _react.default.createElement("script",(0,_extends2.default)({key:file,src:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,nonce:_this10.props.nonce,async:true,crossOrigin:_this10.props.crossOrigin||undefined},modernProps));});}},{key:"render",value:function render(){var _this11=this;var _this$context$_docume8=this.context._documentProps,staticMarkup=_this$context$_docume8.staticMarkup,assetPrefix=_this$context$_docume8.assetPrefix,inAmpMode=_this$context$_docume8.inAmpMode,devFiles=_this$context$_docume8.devFiles,__NEXT_DATA__=_this$context$_docume8.__NEXT_DATA__;var _devOnlyInvalidateCacheQueryString=this.context._devOnlyInvalidateCacheQueryString;if(inAmpMode){if(true){return null;}var _devFiles=[_constants.CLIENT_STATIC_FILES_RUNTIME_AMP,_constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];return _react.default.createElement(_react.default.Fragment,null,staticMarkup?null:_react.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined,dangerouslySetInnerHTML:{__html:NextScript.getInlineScriptSource(this.context._documentProps)},"data-ampdevmode":true}),_devFiles?_devFiles.map(function(file){return _react.default.createElement("script",{key:file,src:assetPrefix+"/_next/"+file+_devOnlyInvalidateCacheQueryString,nonce:_this11.props.nonce,crossOrigin:_this11.props.crossOrigin||undefined,"data-ampdevmode":true});}):null);}var page=__NEXT_DATA__.page,buildId=__NEXT_DATA__.buildId;if(false){}var pageScript=[_react.default.createElement("script",(0,_extends2.default)({async:true,"data-next-page":page,key:page,src:assetPrefix+encodeURI("/_next/static/"+buildId+"/pages"+getPageFile(page))+_devOnlyInvalidateCacheQueryString,nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}, false?undefined:{})), false&&false];var appScript=[_react.default.createElement("script",(0,_extends2.default)({async:true,"data-next-page":"/_app",src:assetPrefix+("/_next/static/"+buildId+"/pages/_app.js")+_devOnlyInvalidateCacheQueryString,key:"_app",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined}, false?undefined:{})), false&&false];return _react.default.createElement(_react.default.Fragment,null,devFiles?devFiles.map(function(file){return!file.match(/\.js\.map/)&&_react.default.createElement("script",{key:file,src:assetPrefix+"/_next/"+encodeURI(file)+_devOnlyInvalidateCacheQueryString,nonce:_this11.props.nonce,crossOrigin:_this11.props.crossOrigin||undefined});}):null,staticMarkup?null:_react.default.createElement("script",{id:"__NEXT_DATA__",type:"application/json",nonce:this.props.nonce,crossOrigin:this.props.crossOrigin||undefined,dangerouslySetInnerHTML:{__html:NextScript.getInlineScriptSource(this.context._documentProps)}}), false?undefined:null,page!=='/_error'&&pageScript,appScript,staticMarkup?null:this.getDynamicChunks(),staticMarkup?null:this.getScripts());}}],[{key:"getInlineScriptSource",value:function getInlineScriptSource(documentProps){var __NEXT_DATA__=documentProps.__NEXT_DATA__;try{var data=(0,_stringify.default)(__NEXT_DATA__);return(0,_htmlescape.htmlEscapeJsonString)(data);}catch(err){if(err.message.indexOf('circular structure')){throw new Error("Circular structure in \"getInitialProps\" result of page \""+__NEXT_DATA__.page+"\". https://err.sh/zeit/next.js/circular-structure");}throw err;}}}]);return NextScript;}(_react.Component);exports.NextScript=NextScript;NextScript.contextTypes={_documentProps:_propTypes.default.any,_devOnlyInvalidateCacheQueryString:_propTypes.default.string};NextScript.propTypes={nonce:_propTypes.default.string,crossOrigin:_propTypes.default.string};NextScript.safariNomoduleFix='!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';function getAmpPath(ampPath,asPath){return ampPath?ampPath:""+asPath+(asPath.includes('?')?'&':'?')+"amp=1";}function getPageFile(page,buildId){if(page==='/'){return buildId?"/index."+buildId+".js":'/index.js';}return buildId?page+"."+buildId+".js":page+".js";}

/***/ }),

/***/ "W8MJ":
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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aD8d":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "bcFB":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eJic":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxIE");

/***/ }),

/***/ "eNWT":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "eRNP":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flex");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "eZI+":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("AroE");var _regenerator=_interopRequireDefault(__webpack_require__("vJKn"));Object.defineProperty(exports,"__esModule",{value:true});var url_1=__webpack_require__("bzos");function execOnce(fn){var _this=this;var used=false;return function(){if(!used){used=true;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}fn.apply(_this,args);}};}exports.execOnce=execOnce;function getLocationOrigin(){var _window$location=window.location,protocol=_window$location.protocol,hostname=_window$location.hostname,port=_window$location.port;return protocol+"//"+hostname+(port?':'+port:'');}exports.getLocationOrigin=getLocationOrigin;function getURL(){var href=window.location.href;var origin=getLocationOrigin();return href.substring(origin.length);}exports.getURL=getURL;function getDisplayName(Component){return typeof Component==='string'?Component:Component.displayName||Component.name||'Unknown';}exports.getDisplayName=getDisplayName;function isResSent(res){return res.finished||res.headersSent;}exports.isResSent=isResSent;function loadGetInitialProps(Component,ctx){var message,res,props,_message;return _regenerator.default.async(function loadGetInitialProps$(_context){while(1){switch(_context.prev=_context.next){case 0:if(true){_context.next=4;break;}if(!(Component.prototype&&Component.prototype.getInitialProps)){_context.next=4;break;}message="\""+getDisplayName(Component)+".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.";throw new Error(message);case 4:res=ctx.res||ctx.ctx&&ctx.ctx.res;if(Component.getInitialProps){_context.next=7;break;}return _context.abrupt("return",{});case 7:_context.next=9;return _regenerator.default.awrap(Component.getInitialProps(ctx));case 9:props=_context.sent;if(!(res&&isResSent(res))){_context.next=12;break;}return _context.abrupt("return",props);case 12:if(props){_context.next=15;break;}_message="\""+getDisplayName(Component)+".getInitialProps()\" should resolve to an object. But found \""+props+"\" instead.";throw new Error(_message);case 15:if(false){}return _context.abrupt("return",props);case 17:case"end":return _context.stop();}}});}exports.loadGetInitialProps=loadGetInitialProps;exports.urlObjectKeys=['auth','hash','host','hostname','href','path','pathname','port','protocol','query','search','slashes'];function formatWithValidation(url,options){if(false){}return url_1.format(url,options);}exports.formatWithValidation=formatWithValidation;exports.SUPPORTS_PERFORMANCE=typeof performance!=='undefined';exports.SUPPORTS_PERFORMANCE_USER_TIMING=exports.SUPPORTS_PERFORMANCE&&typeof performance.mark==='function'&&typeof performance.measure==='function';

/***/ }),

/***/ "gfJU":
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "gwwY":
/***/ (function(module, exports) {

module.exports = require("hyphenate-style-name");

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

/***/ "iJv9":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/gradient");

/***/ }),

/***/ "krLv":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "kvbm":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "oDCs":
/***/ (function(module, exports) {

module.exports = require("react-dom/unstable-native-dependencies");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pVnL":
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

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "ttDY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQQD");

/***/ }),

/***/ "vJKn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "vTM5":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxOld");

/***/ }),

/***/ "w7wo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.PHASE_EXPORT='phase-export';exports.PHASE_PRODUCTION_BUILD='phase-production-build';exports.PHASE_PRODUCTION_SERVER='phase-production-server';exports.PHASE_DEVELOPMENT_SERVER='phase-development-server';exports.PAGES_MANIFEST='pages-manifest.json';exports.BUILD_MANIFEST='build-manifest.json';exports.PRERENDER_MANIFEST='prerender-manifest.json';exports.REACT_LOADABLE_MANIFEST='react-loadable-manifest.json';exports.SERVER_DIRECTORY='server';exports.SERVERLESS_DIRECTORY='serverless';exports.CONFIG_FILE='next.config.js';exports.BUILD_ID_FILE='BUILD_ID';exports.BLOCKED_PAGES=['/_document','/_app'];exports.CLIENT_PUBLIC_FILES_PATH='public';exports.CLIENT_STATIC_FILES_PATH='static';exports.CLIENT_STATIC_FILES_RUNTIME='runtime';exports.CLIENT_STATIC_FILES_RUNTIME_PATH=exports.CLIENT_STATIC_FILES_PATH+"/"+exports.CLIENT_STATIC_FILES_RUNTIME;exports.CLIENT_STATIC_FILES_RUNTIME_MAIN=exports.CLIENT_STATIC_FILES_RUNTIME_PATH+"/main.js";exports.CLIENT_STATIC_FILES_RUNTIME_AMP=exports.CLIENT_STATIC_FILES_RUNTIME_PATH+"/amp.js";exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK=exports.CLIENT_STATIC_FILES_RUNTIME_PATH+"/webpack.js";exports.IS_BUNDLED_PAGE_REGEX=/^static[/\\][^/\\]+[/\\]pages.*\.js$/;exports.ROUTE_NAME_REGEX=/^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;exports.SERVERLESS_ROUTE_NAME_REGEX=/^pages[/\\](.*)\.js$/;

/***/ }),

/***/ "y6vh":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "zQQD":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/set");

/***/ })

/******/ });