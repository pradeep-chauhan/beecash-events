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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/_helpers/store.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/_constants/alert.constants.jsx":
/*!*************************************************************!*\
  !*** ./app/javascript/packs/_constants/alert.constants.jsx ***!
  \*************************************************************/
/*! exports provided: alertConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return alertConstants; });
var alertConstants = {
  INFO: 'ALERT_INFO',
  SUCCESS: 'ALERT_SUCCESS',
  ERROR: 'ALERT_ERROR',
  WARNING: 'ALERT_WARNING',
  CLEAR: 'ALERT_CLEAR'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/confirm.constants.jsx":
/*!***************************************************************!*\
  !*** ./app/javascript/packs/_constants/confirm.constants.jsx ***!
  \***************************************************************/
/*! exports provided: confirmConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmConstants", function() { return confirmConstants; });
var confirmConstants = {
  SHOW: 'SHOW',
  CLEAR: 'CLEAR',
  CONFIRM: 'CONFIRM'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/crud.constants.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/packs/_constants/crud.constants.jsx ***!
  \************************************************************/
/*! exports provided: crudConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudConstants", function() { return crudConstants; });
var crudConstants = {
  GET_ALL_REQUEST: 'CRUD_GET_ALL_REQUEST',
  GET_ALL_SUCCESS: 'CRUD_GET_ALL_SUCCESS',
  GET_ALL_FAILURE: 'CRUD_GET_ALL_FAILURE',
  GET_REQUEST: 'CRUD_GET_REQUEST',
  GET_SUCCESS: 'CRUD_GET_SUCCESS',
  GET_FAILURE: 'CRUD_GET_FAILURE',
  CREATE_REQUEST: 'CRUD_CREATE_REQUEST',
  CREATE_SUCCESS: 'CRUD_CREATE_SUCCESS',
  CREATE_FAILURE: 'CRUD_CREATE_FAILURE',
  UPDATE_REQUEST: 'CRUD_UPDATE_REQUEST',
  UPDATE_SUCCESS: 'CRUD_UPDATE_SUCCESS',
  UPDATE_FAILURE: 'CRUD_UPDATE_FAILURE',
  DELETE_REQUEST: 'CRUD_DELETE_REQUEST',
  DELETE_SUCCESS: 'CRUD_DELETE_SUCCESS',
  DELETE_FAILURE: 'CRUD_DELETE_FAILURE',
  ADD: 'CRUD_ADD',
  CLEAR: 'CRUD_CLEAR'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/file.constants.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/packs/_constants/file.constants.jsx ***!
  \************************************************************/
/*! exports provided: fileConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileConstants", function() { return fileConstants; });
var fileConstants = {
  UPLOAD_REQUEST: 'FILE_UPLOAD_REQUEST',
  UPLOAD_SUCCESS: 'FILE_UPLOAD_SUCCESS',
  UPLOAD_FAILURE: 'FILE_UPLOAD_FAILURE',
  CLEAR: 'FILE_CLEAR'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/index.jsx":
/*!***************************************************!*\
  !*** ./app/javascript/packs/_constants/index.jsx ***!
  \***************************************************/
/*! exports provided: loaderConstants, alertConstants, userConstants, confirmConstants, crudConstants, fileConstants, modalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.constants */ "./app/javascript/packs/_constants/loader.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loaderConstants", function() { return _loader_constants__WEBPACK_IMPORTED_MODULE_0__["loaderConstants"]; });

/* harmony import */ var _alert_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.constants */ "./app/javascript/packs/_constants/alert.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alertConstants", function() { return _alert_constants__WEBPACK_IMPORTED_MODULE_1__["alertConstants"]; });

/* harmony import */ var _user_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.constants */ "./app/javascript/packs/_constants/user.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return _user_constants__WEBPACK_IMPORTED_MODULE_2__["userConstants"]; });

/* harmony import */ var _confirm_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm.constants */ "./app/javascript/packs/_constants/confirm.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "confirmConstants", function() { return _confirm_constants__WEBPACK_IMPORTED_MODULE_3__["confirmConstants"]; });

/* harmony import */ var _crud_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud.constants */ "./app/javascript/packs/_constants/crud.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crudConstants", function() { return _crud_constants__WEBPACK_IMPORTED_MODULE_4__["crudConstants"]; });

/* harmony import */ var _file_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.constants */ "./app/javascript/packs/_constants/file.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileConstants", function() { return _file_constants__WEBPACK_IMPORTED_MODULE_5__["fileConstants"]; });

/* harmony import */ var _modal_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.constants */ "./app/javascript/packs/_constants/modal.constants.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modalConstants", function() { return _modal_constants__WEBPACK_IMPORTED_MODULE_6__["modalConstants"]; });









/***/ }),

/***/ "./app/javascript/packs/_constants/loader.constants.jsx":
/*!**************************************************************!*\
  !*** ./app/javascript/packs/_constants/loader.constants.jsx ***!
  \**************************************************************/
/*! exports provided: loaderConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderConstants", function() { return loaderConstants; });
var loaderConstants = {
  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/modal.constants.jsx":
/*!*************************************************************!*\
  !*** ./app/javascript/packs/_constants/modal.constants.jsx ***!
  \*************************************************************/
/*! exports provided: modalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalConstants", function() { return modalConstants; });
var modalConstants = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

/***/ }),

/***/ "./app/javascript/packs/_constants/user.constants.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/packs/_constants/user.constants.jsx ***!
  \************************************************************/
/*! exports provided: userConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userConstants", function() { return userConstants; });
var userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',
  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  LOGOUT: 'USERS_LOGOUT'
};

/***/ }),

/***/ "./app/javascript/packs/_helpers/store.jsx":
/*!*************************************************!*\
  !*** ./app/javascript/packs/_helpers/store.jsx ***!
  \*************************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_reducers */ "./app/javascript/packs/_reducers/index.jsx");




var loggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"], loggerMiddleware));

/***/ }),

/***/ "./app/javascript/packs/_reducers/alert.reducer.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/packs/_reducers/alert.reducer.jsx ***!
  \**********************************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

function alert() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].INFO:
      return {
        type: 'info',
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].SUCCESS:
      return {
        type: 'success',
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].WARNING:
      return {
        type: 'warning',
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].ERROR:
      return {
        type: 'error',
        message: action.message
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["alertConstants"].CLEAR:
      return null;

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/javascript/packs/_reducers/assign.reducer.jsx":
/*!***********************************************************!*\
  !*** ./app/javascript/packs/_reducers/assign.reducer.jsx ***!
  \***********************************************************/
/*! exports provided: reducerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerData", function() { return reducerData; });
var reducerData = ['form', 'formError', 'formSubmit', 'users', 'tasks', 'roles', 'permissions'];

/***/ }),

/***/ "./app/javascript/packs/_reducers/authentication.reducer.jsx":
/*!*******************************************************************!*\
  !*** ./app/javascript/packs/_reducers/authentication.reducer.jsx ***!
  \*******************************************************************/
/*! exports provided: authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication", function() { return authentication; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

var user = JSON.parse(localStorage.getItem('user'));
var initialState = user ? {
  loggedIn: true,
  user: user
} : {};
function authentication() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.data
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.data
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGIN_FAILURE:
      return {};

    case _constants__WEBPACK_IMPORTED_MODULE_0__["userConstants"].LOGOUT:
      return {};

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/javascript/packs/_reducers/confirm.reducer.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/packs/_reducers/confirm.reducer.jsx ***!
  \************************************************************/
/*! exports provided: confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

function confirm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["confirmConstants"].CONFIRM:
      return {
        type: 'CONFIRM',
        confirm: true,
        data: action.data
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["confirmConstants"].SHOW:
      return {
        show: true,
        title: action.title,
        text: action.text,
        data: action.data
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__["confirmConstants"].CLEAR:
      return {
        show: false
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/javascript/packs/_reducers/crud.reducer.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/packs/_reducers/crud.reducer.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");


var crud = function crud(kind) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      // get call 
      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_REQUEST):
        return null;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_SUCCESS):
        return action.data;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_FAILURE):
        return null;
      // get all call 

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_ALL_REQUEST):
        return null;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_ALL_SUCCESS):
        return action.data;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].GET_ALL_FAILURE):
        return null;
      // create call

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].CREATE_REQUEST):
        return null;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].CREATE_SUCCESS):
        return action.data;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].CREATE_FAILURE):
        return null;
      // update call

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].UPDATE_REQUEST):
        return null;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].UPDATE_SUCCESS):
        return action.data;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].UPDATE_FAILURE):
        return null;
      // delete call

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].DELETE_REQUEST):
        return null;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].DELETE_SUCCESS):
        return action.data;

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].DELETE_FAILURE):
        return null;
      // add data

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].ADD):
        return action.data;
      // clear data

      case "".concat(kind, ".").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["crudConstants"].CLEAR):
        return null;

      default:
        return state;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (crud);

/***/ }),

/***/ "./app/javascript/packs/_reducers/file.reducer.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/packs/_reducers/file.reducer.jsx ***!
  \*********************************************************/
/*! exports provided: fileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileUpload", function() { return fileUpload; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

function fileUpload() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // upload call
    case _constants__WEBPACK_IMPORTED_MODULE_0__["fileConstants"].UPLOAD_REQUEST:
      return null;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["fileConstants"].UPLOAD_SUCCESS:
      return action.data;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["fileConstants"].UPLOAD_FAILURE:
      return action.error;
    // clear data

    case _constants__WEBPACK_IMPORTED_MODULE_0__["fileConstants"].CLEAR:
      return null;

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/javascript/packs/_reducers/index.jsx":
/*!**************************************************!*\
  !*** ./app/javascript/packs/_reducers/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.reducer */ "./app/javascript/packs/_reducers/authentication.reducer.jsx");
/* harmony import */ var _alert_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.reducer */ "./app/javascript/packs/_reducers/alert.reducer.jsx");
/* harmony import */ var _loader_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.reducer */ "./app/javascript/packs/_reducers/loader.reducer.jsx");
/* harmony import */ var _confirm_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm.reducer */ "./app/javascript/packs/_reducers/confirm.reducer.jsx");
/* harmony import */ var _file_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.reducer */ "./app/javascript/packs/_reducers/file.reducer.jsx");
/* harmony import */ var _crud_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud.reducer */ "./app/javascript/packs/_reducers/crud.reducer.jsx");
/* harmony import */ var _assign_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assign.reducer */ "./app/javascript/packs/_reducers/assign.reducer.jsx");
/* harmony import */ var _modal_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal.reducer */ "./app/javascript/packs/_reducers/modal.reducer.jsx");









var reducers = {};
reducers['authentication'] = _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__["authentication"];
reducers['loader'] = _loader_reducer__WEBPACK_IMPORTED_MODULE_3__["loader"];
reducers['alert'] = _alert_reducer__WEBPACK_IMPORTED_MODULE_2__["alert"];
reducers['confirm'] = _confirm_reducer__WEBPACK_IMPORTED_MODULE_4__["confirm"];
reducers['fileUpload'] = _file_reducer__WEBPACK_IMPORTED_MODULE_5__["fileUpload"];
reducers['modal'] = _modal_reducer__WEBPACK_IMPORTED_MODULE_8__["modal"];
_assign_reducer__WEBPACK_IMPORTED_MODULE_7__["reducerData"].forEach(function (element) {
  reducers[element] = Object(_crud_reducer__WEBPACK_IMPORTED_MODULE_6__["default"])(element);
});
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./app/javascript/packs/_reducers/loader.reducer.jsx":
/*!***********************************************************!*\
  !*** ./app/javascript/packs/_reducers/loader.reducer.jsx ***!
  \***********************************************************/
/*! exports provided: loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return loader; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

function loader() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["loaderConstants"].SHOW_LOADER:
      return true;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["loaderConstants"].HIDE_LOADER:
      return false;

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/javascript/packs/_reducers/modal.reducer.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/packs/_reducers/modal.reducer.jsx ***!
  \**********************************************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_constants */ "./app/javascript/packs/_constants/index.jsx");

var initialState = {
  open: false
};
function modal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["modalConstants"].OPEN_MODAL:
      return action.data;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["modalConstants"].CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function t(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  }

  function r(e, t) {
    Object.defineProperty(this, "kind", {
      value: e,
      enumerable: !0
    }), t && t.length && Object.defineProperty(this, "path", {
      value: t,
      enumerable: !0
    });
  }

  function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    }), Object.defineProperty(this, "rhs", {
      value: r,
      enumerable: !0
    });
  }

  function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
      value: t,
      enumerable: !0
    });
  }

  function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    });
  }

  function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", {
      value: t,
      enumerable: !0
    }), Object.defineProperty(this, "item", {
      value: r,
      enumerable: !0
    });
  }

  function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);
    return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }

  function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);
    return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }

  function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];
    var g = s.slice(0);

    if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;

        if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;

          if (c.normalize) {
            var h = c.normalize(g, d, e, t);
            h && (e = h[0], t = h[1]);
          }
        }
      }

      g.push(d);
    }

    "regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());
    var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);
    if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({
          lhs: e,
          rhs: t
        }), Array.isArray(e)) {
          var w;
          e.length;

          for (w = 0; w < e.length; w++) {
            w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);
          }

          for (; w < t.length;) {
            r(new a(g, w, new o(void 0, t[w++])));
          }
        } else {
          var x = Object.keys(e),
              S = Object.keys(t);
          x.forEach(function (n, o) {
            var i = S.indexOf(n);
            i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(void 0, t[e], r, c, g, e, p);
          });
        }

        p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }

  function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : void 0;
  }

  function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;

      for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          s(o[r.path[n]], r.index, r.item);
          break;

        case "D":
          delete o[r.path[n]];
          break;

        case "E":
        case "N":
          o[r.path[n]] = r.rhs;
      }
    } else switch (r.kind) {
      case "A":
        s(e[t], r.index, r.item);
        break;

      case "D":
        e = f(e, t);
        break;

      case "E":
      case "N":
        e[t] = r.rhs;
    }

    return e;
  }

  function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) {
        "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
      }

      switch (r.kind) {
        case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);
          break;

        case "D":
          delete n[r.path[o]];
          break;

        case "E":
        case "N":
          n[r.path[o]] = r.rhs;
      }
    }
  }

  function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;

      for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          p(o[r.path[n]], r.index, r.item);
          break;

        case "D":
          o[r.path[n]] = r.lhs;
          break;

        case "E":
          o[r.path[n]] = r.lhs;
          break;

        case "N":
          delete o[r.path[n]];
      }
    } else switch (r.kind) {
      case "A":
        p(e[t], r.index, r.item);
        break;

      case "D":
        e[t] = r.lhs;
        break;

      case "E":
        e[t] = r.lhs;
        break;

      case "N":
        e = f(e, t);
    }

    return e;
  }

  function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;

      for (o = r.path.length - 1, n = 0; n < o; n++) {
        "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
      }

      switch (r.kind) {
        case "A":
          p(i[r.path[n]], r.index, r.item);
          break;

        case "D":
          i[r.path[n]] = r.lhs;
          break;

        case "E":
          i[r.path[n]] = r.lhs;
          break;

        case "N":
          delete i[r.path[n]];
      }
    }
  }

  function h(e, t, r) {
    if (e && t) {
      var n = function n(_n) {
        r && !r(e, t, _n) || d(e, t, _n);
      };

      l(e, t, n);
    }
  }

  function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }

  function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;

    switch (t) {
      case "E":
        return [r.join("."), n, "→", o];

      case "N":
        return [r.join("."), o];

      case "D":
        return [r.join(".")];

      case "A":
        return [r.join(".") + "[" + i + "]", a];

      default:
        return [];
    }
  }

  function b(e, t, r, n) {
    var o = c(e, t);

    try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }

    o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);
      r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");

    try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }

  function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {
      case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];

      case "function":
        return e(t);

      default:
        return e;
    }
  }

  function w(e) {
    var t = e.timestamp,
        r = e.duration;
    return function (e, n, o) {
      var i = ["action"];
      return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }

  function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = void 0 === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;
    e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];
      x && (w = x.prevState, v = x.started - d);
      var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];
      A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");
      var O = i(S, j, v);

      try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }

      var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");
      if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";
        r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);
      if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";
        r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);
      if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";
        r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);
      if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";

        r[F]("%c next state", _, w);
      } else r[F]("next state", w);
      l && b(h, w, r, k);

      try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }

  function S() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;
    if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };
    if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };
    var u = [];
    return function (e) {
      var r = e.getState;
      return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);
          var c = {};
          u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;
          var s = void 0;
          if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);
          c.took = O.now() - c.started, c.nextState = n(r());
          var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;
          if (x(u, Object.assign({}, t, {
            diff: d
          })), u.length = 0, c.error) throw c.error;
          return s;
        };
      };
    };
  }

  var k,
      j,
      E = function E(e, t) {
    return new Array(t + 1).join(e);
  },
      A = function A(e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function D(e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
  },
      P = function P(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }

      return r;
    }

    return Array.from(e);
  },
      C = [];

  k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
  }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, {
    diff: {
      value: c,
      enumerable: !0
    },
    observableDiff: {
      value: l,
      enumerable: !0
    },
    applyDiff: {
      value: h,
      enumerable: !0
    },
    applyChange: {
      value: d,
      enumerable: !0
    },
    revertChange: {
      value: g,
      enumerable: !0
    },
    isConflict: {
      value: function value() {
        return "undefined" != typeof j;
      },
      enumerable: !0
    },
    noConflict: {
      value: function value() {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      },
      enumerable: !0
    }
  });

  var F = {
    E: {
      color: "#2196F3",
      text: "CHANGED:"
    },
    N: {
      color: "#4CAF50",
      text: "ADDED:"
    },
    D: {
      color: "#F44336",
      text: "DELETED:"
    },
    A: {
      color: "#2196F3",
      text: "ARRAY:"
    }
  },
      L = {
    level: "log",
    logger: console,
    logErrors: !0,
    collapsed: void 0,
    predicate: void 0,
    duration: !1,
    timestamp: !0,
    stateTransformer: function stateTransformer(e) {
      return e;
    },
    actionTransformer: function actionTransformer(e) {
      return e;
    },
    errorTransformer: function errorTransformer(e) {
      return e;
    },
    colors: {
      title: function title() {
        return "inherit";
      },
      prevState: function prevState() {
        return "#9E9E9E";
      },
      action: function action() {
        return "#03A9F4";
      },
      nextState: function nextState() {
        return "#4CAF50";
      },
      error: function error() {
        return "#F20404";
      }
    },
    diff: !1,
    diffPredicate: void 0,
    transformer: void 0
  },
      T = function T() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;
    return "function" == typeof t || "function" == typeof r ? S()({
      dispatch: t,
      getState: r
    }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
  };

  e.defaults = L, e.createLogger = S, e.logger = T, e["default"] = T, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (_typeof(obj) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (_typeof(observer) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (_typeof(actionCreators) !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : _typeof(actionCreators)) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var _Symbol = root.Symbol;

  if (typeof _Symbol === 'function') {
    if (_Symbol.observable) {
      result = _Symbol.observable;
    } else {
      result = _Symbol('observable');
      _Symbol.observable = result;
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=store-ba35c70ed0f8072f592b.js.map