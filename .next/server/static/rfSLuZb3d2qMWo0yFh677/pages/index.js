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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+es4":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "0KO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/createDOMProps/index.js
var createDOMProps = __webpack_require__("ebBd");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__("t4TM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js + 20 modules
var styleResolver = __webpack_require__("TgPG");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__("Q/JM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__("ou6r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js


function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(unitlessNumbers["a" /* default */].hasOwnProperty(name) && unitlessNumbers["a" /* default */][name])) {
    return value + 'px';
  }

  return ('' + value).trim();
}

/* harmony default export */ var react_dom_dangerousStyleValue = (dangerousStyleValue);
// EXTERNAL MODULE: external "hyphenate-style-name"
var external_hyphenate_style_name_ = __webpack_require__("gwwY");
var external_hyphenate_style_name_default = /*#__PURE__*/__webpack_require__.n(external_hyphenate_style_name_);

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
  var _getBoundingClientRec = Object(getBoundingClientRect["a" /* default */])(node),
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
      var relativeRect = Object(getBoundingClientRect["a" /* default */])(relativeNode);

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
    exports_UIManager.blur(Object(findNodeHandle["a" /* default */])(this));
  },
  focus: function focus() {
    exports_UIManager.focus(Object(findNodeHandle["a" /* default */])(this));
  },
  measure: function measure(callback) {
    exports_UIManager.measure(Object(findNodeHandle["a" /* default */])(this), callback);
  },
  measureInWindow: function measureInWindow(callback) {
    exports_UIManager.measureInWindow(Object(findNodeHandle["a" /* default */])(this), callback);
  },
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    exports_UIManager.measureLayout(Object(findNodeHandle["a" /* default */])(this), relativeToNativeNode, onFail, onSuccess);
  },
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }

    var node = Object(findNodeHandle["a" /* default */])(this);

    if (node) {
      var domProps = Object(createDOMProps["a" /* default */])(null, nativeProps, function (style) {
        return styleResolver["a" /* default */].resolveWithNode(style, node);
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

/* harmony default export */ var modules_applyNativeMethods = __webpack_exports__["a"] = (applyNativeMethods_applyNativeMethods);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "CKG8":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "DjSU":
/***/ (function(module, exports) {

module.exports = require("normalize-css-color");

/***/ }),

/***/ "Ecjf":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "IOQU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L1DD");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gfJU");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t4TM");



var emptyObject = {};
var registry = {};
var id = 1;

var guid = function guid() {
  return "r-" + id++;
};

var resizeObserver;

if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
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

    window.addEventListener('resize', debounce__WEBPACK_IMPORTED_MODULE_1___default()(triggerAll, 16), false);
  }
}

var observe = function observe(instance) {
  var id = guid();
  registry[id] = instance;

  if (resizeObserver) {
    var node = Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(instance);

    if (node) {
      node._layoutId = id;
      resizeObserver.observe(node);
    }
  } else {
    instance._layoutId = id;

    instance._handleLayout();
  }
};

var unobserve = function unobserve(instance) {
  if (resizeObserver) {
    var node = Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(instance);

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

var applyLayout = function applyLayout(Component) {
  var componentDidMount = Component.prototype.componentDidMount;
  var componentDidUpdate = Component.prototype.componentDidUpdate;
  var componentWillUnmount = Component.prototype.componentWillUnmount;
  Component.prototype.componentDidMount = safeOverride(componentDidMount, function componentDidMount() {
    this._layoutState = emptyObject;
    this._isMounted = true;

    if (this.props.onLayout) {
      observe(this);
    }
  });
  Component.prototype.componentDidUpdate = safeOverride(componentDidUpdate, function componentDidUpdate(prevProps) {
    if (this.props.onLayout && !prevProps.onLayout) {
      observe(this);
    } else if (!this.props.onLayout && prevProps.onLayout) {
      unobserve(this);
    }
  });
  Component.prototype.componentWillUnmount = safeOverride(componentWillUnmount, function componentWillUnmount() {
    this._isMounted = false;

    if (this.props.onLayout) {
      unobserve(this);
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
                return Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this);
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

/* harmony default export */ __webpack_exports__["a"] = (applyLayout);

/***/ }),

/***/ "Iu5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rSxS");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ecjf");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(style) {
  if (typeof style === 'number') {
    return _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getByID(style);
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

/* harmony default export */ __webpack_exports__["a"] = (flattenStyle);

/***/ }),

/***/ "IybW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js
var buttonLikeRoles = {
  button: true,
  menuitem: true
};
/* harmony default export */ var AccessibilityUtil_buttonLikeRoles = (buttonLikeRoles);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ var AccessibilityUtil_isDisabled = (isDisabled);
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
var emptyObject = {};

var propsToAccessibilityComponent_propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
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
/* harmony default export */ var modules_AccessibilityUtil = __webpack_exports__["a"] = (AccessibilityUtil);

/***/ }),

/***/ "J3ww":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "L1DD":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),

/***/ "LnWa":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "Q/JM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getBoundingClientRect);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/applyLayout/index.js
var applyLayout = __webpack_require__("IOQU");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/applyNativeMethods/index.js + 4 modules
var applyNativeMethods = __webpack_require__("0KO/");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js + 2 modules
var createElement = __webpack_require__("osi3");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/css.js
var css = __webpack_require__("lxpi");

// EXTERNAL MODULE: external "fbjs/lib/warning"
var warning_ = __webpack_require__("CKG8");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}











var Text_Text = function (_Component) {
  _inheritsLoose(Text, _Component);

  function Text() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      isInAParentText: true
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        dir = _this$props.dir,
        numberOfLines = _this$props.numberOfLines,
        onPress = _this$props.onPress,
        selectable = _this$props.selectable,
        style = _this$props.style,
        adjustsFontSizeToFit = _this$props.adjustsFontSizeToFit,
        allowFontScaling = _this$props.allowFontScaling,
        ellipsizeMode = _this$props.ellipsizeMode,
        lineBreakMode = _this$props.lineBreakMode,
        maxFontSizeMultiplier = _this$props.maxFontSizeMultiplier,
        minimumFontScale = _this$props.minimumFontScale,
        onLayout = _this$props.onLayout,
        onLongPress = _this$props.onLongPress,
        pressRetentionOffset = _this$props.pressRetentionOffset,
        selectionColor = _this$props.selectionColor,
        suppressHighlighting = _this$props.suppressHighlighting,
        textBreakStrategy = _this$props.textBreakStrategy,
        tvParallaxProperties = _this$props.tvParallaxProperties,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["dir", "numberOfLines", "onPress", "selectable", "style", "adjustsFontSizeToFit", "allowFontScaling", "ellipsizeMode", "lineBreakMode", "maxFontSizeMultiplier", "minimumFontScale", "onLayout", "onLongPress", "pressRetentionOffset", "selectionColor", "suppressHighlighting", "textBreakStrategy", "tvParallaxProperties"]);

    var isInAParentText = this.context.isInAParentText;

    if (false) {}

    if (onPress) {
      otherProps.accessible = true;
      otherProps.onClick = this._createPressHandler(onPress);
      otherProps.onKeyDown = this._createEnterHandler(onPress);
    }

    otherProps.classList = [this.props.className, classes.text, this.context.isInAParentText === true && classes.textHasAncestor, numberOfLines === 1 && classes.textOneLine, numberOfLines > 1 && classes.textMultiLine];
    otherProps.dir = dir !== undefined ? dir : 'auto';
    otherProps.style = [style, numberOfLines > 1 && {
      WebkitLineClamp: numberOfLines
    }, selectable === false && styles.notSelectable, onPress && styles.pressable];
    var component = isInAParentText ? 'span' : 'div';
    return Object(createElement["a" /* default */])(component, otherProps);
  };

  _proto._createEnterHandler = function _createEnterHandler(fn) {
    return function (e) {
      if (e.keyCode === 13) {
        fn && fn(e);
      }
    };
  };

  _proto._createPressHandler = function _createPressHandler(fn) {
    return function (e) {
      e.stopPropagation();
      fn && fn(e);
    };
  };

  return Text;
}(external_react_["Component"]);

Text_Text.displayName = 'Text';
Text_Text.childContextTypes = {
  isInAParentText: external_prop_types_["bool"]
};
Text_Text.contextTypes = {
  isInAParentText: external_prop_types_["bool"]
};
Text_Text.propTypes =  false ? undefined : {};
var classes = css["a" /* default */].create({
  text: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color: 'black',
    display: 'inline',
    font: '14px System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  textHasAncestor: {
    color: 'inherit',
    font: 'inherit',
    whiteSpace: 'inherit'
  },
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  }
});
var styles = StyleSheet["a" /* default */].create({
  notSelectable: {
    userSelect: 'none'
  },
  pressable: {
    cursor: 'pointer'
  }
});
/* harmony default export */ var exports_Text = (Object(applyLayout["a" /* default */])(Object(applyNativeMethods["a" /* default */])(Text_Text)));
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js + 1 modules
var View = __webpack_require__("jzUF");

// CONCATENATED MODULE: ./pages/index.js
var _jsxFileName="/Users/work/dev/baobab/a/pages/index.js";/* harmony default export */ var pages = __webpack_exports__["default"] = (function(){return React.createElement(View["a" /* default */],{__source:{fileName:_jsxFileName,lineNumber:3}},React.createElement(exports_Text,{__source:{fileName:_jsxFileName,lineNumber:3}},"Hi"));});

/***/ }),

/***/ "TgPG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external "fbjs/lib/ExecutionEnvironment"
var ExecutionEnvironment_ = __webpack_require__("L1DD");
var ExecutionEnvironment_default = /*#__PURE__*/__webpack_require__.n(ExecutionEnvironment_);

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
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__("ou6r");

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

  if ((property == null || !unitlessNumbers["a" /* default */][property]) && typeof value === 'number') {
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
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__("Iu5r");

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


var emptyObject = {};
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
var left = 'left';
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
  right: left
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
  start: left
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
  var style = originalStyle || emptyObject;
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
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/constants.js
var constants = __webpack_require__("yBWl");

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
          resolvedStyle[prop] = value.replace('System', constants["e" /* SYSTEM_FONT_STACK */]);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = constants["e" /* SYSTEM_FONT_STACK */];
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = constants["a" /* MONOSPACE_FONT_STACK */];
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
          var longFormProperties = constants["d" /* STYLE_SHORT_FORM_EXPANSIONS */][prop];

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
    sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(constants["b" /* STYLE_ELEMENT_ID */]));
    lookup = {
      byClassName: {},
      byProp: {}
    };
    StyleSheet_modality(function (rule) {
      return sheet.insert(rule, constants["c" /* STYLE_GROUPS */].modality);
    });
    initialRules.forEach(function (rule) {
      sheet.insert(rule, constants["c" /* STYLE_GROUPS */].reset);
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
      var style = StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(Object(flattenStyle["a" /* default */])(id)));
      var results = atomic(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToLookup(identifier, property, value);
        rules.forEach(function (rule) {
          var group = constants["c" /* STYLE_GROUPS */].custom[property] || constants["c" /* STYLE_GROUPS */].atomic;
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

    var flatStyle = Object(flattenStyle["a" /* default */])(style);
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
                sheet.insert(rule, constants["c" /* STYLE_GROUPS */].atomic);
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
        id: constants["b" /* STYLE_ELEMENT_ID */],
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
            group: group || constants["c" /* STYLE_GROUPS */].classic,
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

var styleResolver = createStyleResolver();
/* harmony default export */ var StyleSheet_styleResolver = __webpack_exports__["a"] = (styleResolver);

/***/ }),

/***/ "aD8d":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "bcFB":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ckSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "fbjs/lib/ExecutionEnvironment"
var ExecutionEnvironment_ = __webpack_require__("L1DD");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js
var ReactNativePropRegistry = __webpack_require__("rSxS");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__("Iu5r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js


var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = ReactNativePropRegistry["a" /* default */].register(absoluteFillObject);
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

      var id = styles[key] && ReactNativePropRegistry["a" /* default */].register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: flattenStyle["a" /* default */],
  hairlineWidth: 1
};
/* harmony default export */ var StyleSheet_StyleSheet = (StyleSheet);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js



if (ExecutionEnvironment_["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet_StyleSheet.flatten;
}

/* harmony default export */ var exports_StyleSheet = __webpack_exports__["a"] = (StyleSheet_StyleSheet);

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

/***/ "eZI+":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "ebBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IybW");
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lxpi");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ckSu");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TgPG");
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yBWl");
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






var emptyObject = {};
var classes = _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({
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
}, _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__[/* STYLE_GROUPS */ "c"].classicReset);
var pointerEventsStyles = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({
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

var defaultStyleResolver = function defaultStyleResolver(style, classList) {
  return _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].resolve(style, classList);
};

var createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = defaultStyleResolver;
  }

  if (!props) {
    props = emptyObject;
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
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityStates", "classList", "className", "importantForAccessibility", "nativeID", "placeholderTextColor", "pointerEvents", "style", "testID", "accessible", "accessibilityComponentType", "accessibilityRole", "accessibilityTraits"]);

  var disabled = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].isDisabled(props);
  var role = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].propsToAriaRole(props);

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
  } else if (_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].buttonLikeRoles[role] || role === 'textbox') {
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

  var reactNativeStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].compose(pointerEvents && pointerEventsStyles[pointerEvents], _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].compose(providedStyle, placeholderTextColor && {
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

/* harmony default export */ __webpack_exports__["a"] = (createDOMProps);

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "gfJU":
/***/ (function(module, exports) {

module.exports = require("debounce");

/***/ }),

/***/ "gwwY":
/***/ (function(module, exports) {

module.exports = require("hyphenate-style-name");

/***/ }),

/***/ "iJv9":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/gradient");

/***/ }),

/***/ "jzUF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/applyLayout/index.js
var applyLayout = __webpack_require__("IOQU");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/applyNativeMethods/index.js + 4 modules
var applyNativeMethods = __webpack_require__("0KO/");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js + 2 modules
var createElement = __webpack_require__("osi3");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/css.js
var css = __webpack_require__("lxpi");

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
// EXTERNAL MODULE: external "fbjs/lib/invariant"
var invariant_ = __webpack_require__("Ecjf");

// EXTERNAL MODULE: external "fbjs/lib/warning"
var warning_ = __webpack_require__("CKG8");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
    supportedProps.classList = [this.props.className, classes.view];
    supportedProps.style = StyleSheet["a" /* default */].compose(isInAParentText && styles.inline, this.props.style);

    if (hitSlop) {
      var hitSlopStyle = calculateHitSlopStyle(hitSlop);
      var hitSlopChild = Object(createElement["a" /* default */])('span', {
        classList: [classes.hitSlop],
        style: hitSlopStyle
      });
      supportedProps.children = external_react_default.a.Children.toArray([hitSlopChild, supportedProps.children]);
    }

    return Object(createElement["a" /* default */])('div', supportedProps);
  };

  return View;
}(external_react_["Component"]);

View_View.displayName = 'View';
View_View.contextTypes = {
  isInAParentText: external_prop_types_["bool"]
};
View_View.propTypes =  false ? undefined : {};
var classes = css["a" /* default */].create({
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
var styles = StyleSheet["a" /* default */].create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ var exports_View = __webpack_exports__["a"] = (Object(applyLayout["a" /* default */])(Object(applyNativeMethods["a" /* default */])(View_View)));

/***/ }),

/***/ "krLv":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "kvbm":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "lxpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TgPG");

var css = {
  create: function create(rules, group) {
    return _styleResolver__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createCSS(rules, group);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (css);

/***/ }),

/***/ "oDCs":
/***/ (function(module, exports) {

module.exports = require("react-dom/unstable-native-dependencies");

/***/ }),

/***/ "osi3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js + 4 modules
var AccessibilityUtil = __webpack_require__("IybW");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/createDOMProps/index.js
var createDOMProps = __webpack_require__("ebBd");

// EXTERNAL MODULE: external "react-dom/unstable-native-dependencies"
var unstable_native_dependencies_ = __webpack_require__("oDCs");
var unstable_native_dependencies_default = /*#__PURE__*/__webpack_require__.n(unstable_native_dependencies_);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__("Q/JM");

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
        rect = rect || Object(getBoundingClientRect["a" /* default */])(touch.target);

        if (rect) {
          return touch.pageX - rect.left;
        }
      },

      get locationY() {
        rect = rect || Object(getBoundingClientRect["a" /* default */])(touch.target);

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
      rect = rect || Object(getBoundingClientRect["a" /* default */])(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageX - rect.left;
      }
    },

    get locationY() {
      rect = rect || Object(getBoundingClientRect["a" /* default */])(nativeEvent.target);

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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

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
  var isButtonLikeRole = AccessibilityUtil["a" /* default */].buttonLikeRoles[role];
  var isDisabled = AccessibilityUtil["a" /* default */].isDisabled(domProps);
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
    accessibilityComponent = AccessibilityUtil["a" /* default */].propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = Object(createDOMProps["a" /* default */])(Component, props);
  createElement_adjustProps(domProps);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return external_react_default.a.createElement.apply(external_react_default.a, [Component, domProps].concat(children));
};

/* harmony default export */ var exports_createElement = __webpack_exports__["a"] = (createElement_createElement);

/***/ }),

/***/ "ou6r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (unitlessNumbers);

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

/***/ "rSxS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactNativePropRegistry; });
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
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



/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "t4TM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


var findNodeHandle = function findNodeHandle(component) {
  var node;

  try {
    node = Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"])(component);
  } catch (e) {}

  return node;
};

/* harmony default export */ __webpack_exports__["a"] = (findNodeHandle);

/***/ }),

/***/ "vTM5":
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxOld");

/***/ }),

/***/ "yBWl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SYSTEM_FONT_STACK; });
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

/***/ })

/******/ });