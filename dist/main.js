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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _posterman_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posterman.otf */ \"./src/posterman.otf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_posterman_otf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\r\\n    font-family: 'posterman';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('otf'),\\r\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('otf');\\r\\n    font-weight: 600;\\r\\n    font-style: normal;\\r\\n  }\\r\\n  \\r\\n  \\r\\n  .tab {\\r\\n    overflow: hidden;\\r\\n    border: 1px solid #ccc;\\r\\n    background-color: #f1f1f1;\\r\\n}\\r\\n\\r\\n.tab button {\\r\\n    background-color: inherit;\\r\\n    float: left;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    padding: 14px 16px;\\r\\n    transition: 0.3s;\\r\\n}\\r\\n\\r\\n.tab button:hover {\\r\\n    background-color: #ddd;\\r\\n}\\r\\n\\r\\n.tab button.active {\\r\\n    background-color: #ccc;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #008d99;\\r\\n    color: #fff;\\r\\n    font-family: 'posterman', sans-serif;\\r\\n}\\r\\n#content {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    margin-top: 0;;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n    display: grid;\\r\\n    grid-auto-columns: 1fr;\\r\\n    grid-row-gap: 16px;\\r\\n    grid-column-gap: 40px;   \\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    grid-template-rows: auto;\\r\\n}\\r\\n\\r\\n.content-box {\\r\\n    background-color: #f1f1f1;\\r\\n    padding: 30px;\\r\\n    margin: 60px;\\r\\n    color: #555;\\r\\n}\\r\\n\\r\\n.home-container {\\r\\n    margin: 60px;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n    margin-bottom: 30px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.contact-items {\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: 300px;\\r\\n    margin-top: 30px;\\r\\n    margin-bottom: 30px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/displayContact.js":
/*!*******************************!*\
  !*** ./src/displayContact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayContact() {\r\n    const content = document.getElementById('content');\r\n\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.classList.add('content-box');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Get in touch';\r\n\r\n    contactContainer.appendChild(title);\r\n\r\n    const contactItem = (label, link, anchorText) => {\r\n        const div = document.createElement('div');\r\n        div.classList.add('contact-items');\r\n        div.textContent = `${label}:`;\r\n\r\n        const a = document.createElement('a');\r\n        a.classList.add('contact-link');\r\n        a.textContent = anchorText;\r\n        a.href = link;\r\n        div.appendChild(a);\r\n\r\n        contactContainer.appendChild(div);\r\n    }\r\n\r\n    contactItem('Email', 'mailto:fakerestaurantemail@email.com', 'fakerestaurantemail@email.com');\r\n    contactItem('Tel', 'tel:0123456789', '0123456789');\r\n    contactItem('Github', 'https://github.com/ollyjw', 'https://github.com/ollyjw');\r\n\r\n\r\n    content.appendChild(contactContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayContact);\n\n//# sourceURL=webpack:///./src/displayContact.js?");

/***/ }),

/***/ "./src/displayHome.js":
/*!****************************!*\
  !*** ./src/displayHome.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayHome() {\r\n    const content = document.getElementById('content');\r\n\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.classList.add('home-container');\r\n\r\n\r\n    const title = document.createElement('h1');\r\n    const img = document.createElement('img');\r\n    const desc = document.createElement('p');\r\n\r\n    title.textContent = 'Welcome to... this particular restaurant';\r\n    img.src = 'https://www.cheatsheet.com/wp-content/uploads/2014/07/REST-e1405539646312.png';\r\n\r\n    desc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in dignissimos tenetur vitae quasi odio possimus, necessitatibus earum velit veniam esse blanditiis alias nisi sapiente quaerat omnis eos ullam assumenda?';\r\n\r\n    homeContainer.appendChild(title);\r\n    homeContainer.appendChild(img);\r\n    homeContainer.appendChild(desc);\r\n\r\n    content.appendChild(homeContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayHome);\n\n//# sourceURL=webpack:///./src/displayHome.js?");

/***/ }),

/***/ "./src/displayMenu.js":
/*!****************************!*\
  !*** ./src/displayMenu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction displayMenu() {\r\n    const content = document.getElementById('content');\r\n\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('content-box');\r\n\r\n    const grid = document.createElement('div');\r\n    grid.classList.add('grid');\r\n    menuContainer.appendChild(grid);\r\n\r\n    const menuCategories = (name) => {\r\n        const category = document.createElement('div');\r\n        category.classList.add('menu-category');\r\n        category.setAttribute('id', name);\r\n        grid.appendChild(category);\r\n\r\n        const h1 = document.createElement('h1');\r\n        h1.textContent = name;\r\n        category.appendChild(h1);\r\n\r\n        return category;\r\n    }\r\n\r\n    const starters = menuCategories('starters');\r\n    const mains = menuCategories('mains');\r\n    const desserts = menuCategories('desserts');\r\n\r\n    const menuItems = (name, price, category) => {\r\n        const item = document.createElement('div');\r\n        item.classList.add('menu-item');\r\n\r\n        const itemName = document.createElement('div');\r\n        itemName.textContent = name;\r\n        item.appendChild(itemName);\r\n\r\n        const itemPrice = document.createElement('div');\r\n        itemPrice.textContent = price;\r\n        item.appendChild(itemPrice);\r\n\r\n        category.appendChild(item);\r\n    };\r\n    \r\n    menuItems('Nachos n Dips', '??6', starters);\r\n    menuItems('Olives', '??5', starters);\r\n    menuItems('Prawn Crackers', '??4', starters);\r\n    menuItems('Beef burger', '??12', mains);\r\n    menuItems('Vegan burger', '??10', mains);\r\n    menuItems('Chicken somethingorother', '??12', mains);\r\n    menuItems('Banana Split', '??8', desserts);\r\n    menuItems('Apple crumble', '??8', desserts);\r\n    menuItems('Chocolate Cake', '??9', desserts);\r\n\r\n\r\n    content.appendChild(menuContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayMenu);\n\n//# sourceURL=webpack:///./src/displayMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _displayHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome.js */ \"./src/displayHome.js\");\n/* harmony import */ var _displayMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayMenu.js */ \"./src/displayMenu.js\");\n/* harmony import */ var _displayContact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayContact.js */ \"./src/displayContact.js\");\n\r\n\r\n\r\n\r\n\r\n// Load homepage on load\r\nObject(_displayHome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst homeBtn = document.getElementById('home-btn');\r\nconst menuBtn = document.getElementById('menu-btn');\r\nconst contactBtn = document.getElementById('contact-btn');\r\n\r\n// Function to wipe current content\r\nfunction clearContent() {\r\n  content.innerHTML = '';\r\n}\r\n\r\nhomeBtn.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_displayHome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\nmenuBtn.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_displayMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n})\r\n\r\ncontactBtn.addEventListener('click', () => {\r\n  clearContent();\r\n  Object(_displayContact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/posterman.otf":
/*!***************************!*\
  !*** ./src/posterman.otf ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6050438c8d9bf60f8ef6cdf487c52a1c.otf\");\n\n//# sourceURL=webpack:///./src/posterman.otf?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });