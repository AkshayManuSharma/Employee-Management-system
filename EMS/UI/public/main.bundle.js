/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EmployeeDirectory.jsx */ \"./src/components/EmployeeDirectory.jsx\");\n/* harmony import */ var _components_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/EmployeeCreate.jsx */ \"./src/components/EmployeeCreate.jsx\");\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      exact: true,\n      path: \"/\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmployeeDirectory_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      path: \"/:mode/:id\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      path: \"/:mode\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null))));\n  }\n\n}\nconst root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_1__[\"createRoot\"])(document.getElementById(\"app\"));\nroot.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/components/EmployeeCreate.jsx":
/*!*******************************************!*\
  !*** ./src/components/EmployeeCreate.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/graphQLquery */ \"./src/functions/graphQLquery.js\");\n/* harmony import */ var _functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _functions_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/queries */ \"./src/functions/queries.js\");\n/* harmony import */ var _functions_queries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_functions_queries__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nclass EmployeeCreate extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      fname: \"\",\n      lname: \"\",\n      age: \"\",\n      date_of_joining: \"\",\n      title: \"\",\n      department: \"\",\n      employee_type: \"\",\n      current_status: \"\",\n      mode: \"\"\n    };\n    this.handleFNameChange = this.handleFNameChange.bind(this);\n    this.handleLNameChange = this.handleLNameChange.bind(this);\n    this.handleAgeChange = this.handleAgeChange.bind(this);\n    this.handleDOJChange = this.handleDOJChange.bind(this);\n    this.handleTitleChange = this.handleTitleChange.bind(this);\n    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);\n    this.handleEmployeeTypeChange = this.handleEmployeeTypeChange.bind(this);\n    this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleEdit = this.handleEdit.bind(this);\n  }\n\n  async componentDidMount() {\n    let mode = this.props.match.params.mode;\n    console.log(mode);\n\n    if (mode === \"view\" || mode === \"edit\") {\n      let params = this.props.match.params;\n      console.log(this.props.match.params.id);\n      console.log(params);\n      this.setState({\n        _id: params.id\n      });\n      let variables = {\n        id: params.id\n      };\n      let data = await Object(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__[\"runGraphQLQuery\"])(_functions_queries__WEBPACK_IMPORTED_MODULE_4__[\"queries\"].getEmployee, variables);\n      console.log(data);\n      this.setState({\n        fname: data.fname,\n        lname: data.lname,\n        age: data.age,\n        date_of_joining: data.date_of_joining.split(\"T\")[0],\n        title: data.title,\n        department: data.department,\n        employee_type: data.employee_type,\n        current_status: data.current_status\n      });\n    } else if (mode === \"create\") {\n      this.setState({\n        fname: \"\",\n        lname: \"\",\n        age: \"\",\n        date_of_joining: \"\",\n        title: \"\",\n        department: \"\",\n        employee_type: \"\"\n      });\n    }\n  }\n\n  handleFNameChange(e) {\n    this.setState({\n      \"fname\": e.target.value\n    });\n  }\n\n  handleLNameChange(e) {\n    this.setState({\n      \"lname\": e.target.value\n    });\n  }\n\n  handleAgeChange(e) {\n    this.setState({\n      \"age\": parseInt(e.target.value)\n    });\n  }\n\n  handleDOJChange(e) {\n    this.setState({\n      \"date_of_joining\": e.target.value\n    });\n  }\n\n  handleTitleChange(e) {\n    this.setState({\n      \"title\": e.target.value\n    });\n  }\n\n  handleDepartmentChange(e) {\n    this.setState({\n      \"department\": e.target.value\n    });\n  }\n\n  handleEmployeeTypeChange(e) {\n    this.setState({\n      \"employee_type\": e.target.value\n    });\n  }\n\n  async handleSubmit(e) {\n    e.preventDefault();\n    let {\n      id,\n      current_status,\n      mode,\n      ...data\n    } = this.state;\n    console.log(data);\n    let variables = {\n      employee: data\n    };\n    let result = await Object(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__[\"runGraphQLQuery\"])(_functions_queries__WEBPACK_IMPORTED_MODULE_4__[\"queries\"].createEmployee, variables);\n\n    if (result) {\n      alert(\"Employee Successfully Created\");\n    }\n  }\n\n  async handleEdit(e) {\n    e.preventDefault();\n    let {\n      mode,\n      ...employee\n    } = this.state;\n    console.log(employee);\n    let variables = {\n      updateEmployeeDataId: this.state._id,\n      employee: employee\n    };\n    console.log(variables);\n    let result = await Object(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__[\"runGraphQLQuery\"])(_functions_queries__WEBPACK_IMPORTED_MODULE_4__[\"queries\"].updateEmployee, variables);\n\n    if (result) {\n      alert(\"Data successfully updated\");\n    }\n  }\n\n  handleCurrentStatusChange(e) {\n    this.setState({\n      \"current_status\": parseInt(e.target.value)\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n      href: \"/\"\n    }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: \"/create\"\n    }, \"Create Employee\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"text\",\n      id: \"fname\",\n      placeholder: \"Enter First Name\",\n      value: this.state.fname,\n      onChange: this.handleFNameChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"text\",\n      id: \"lname\",\n      placeholder: \"Enter Last Name\",\n      value: this.state.lname,\n      onChange: this.handleLNameChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"number\",\n      id: \"age\",\n      placeholder: \"Enter Age\",\n      value: this.state.age,\n      onChange: this.handleAgeChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      type: \"date\",\n      id: \"date_of_joining\",\n      value: this.state.date_of_joining,\n      onChange: this.handleDOJChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"select\", {\n      id: \"title\",\n      value: this.state.title,\n      onChange: this.handleTitleChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\"\n    }, \"Select title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"VP\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"select\", {\n      id: \"department\",\n      value: this.state.department,\n      onChange: this.handleDepartmentChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\"\n    }, \"Select department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Engineering\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Marketing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"IT\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"select\", {\n      id: \"employee_type\",\n      value: this.state.employee_type,\n      onChange: this.handleEmployeeTypeChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\"\n    }, \"Select Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Fulltime\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Parttime\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Seasonal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", null, \"Contract\")), this.props.match.params.mode !== \"create\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"select\", {\n      id: \"employee_type\",\n      value: this.state.current_status,\n      onChange: this.handleCurrentStatusChange,\n      required: true,\n      disabled: this.props.match.params.mode === \"view\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      disabled: true,\n      value: \"\"\n    }, \"Select Current Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      value: 1\n    }, \"Employed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"option\", {\n      value: 0\n    }, \"Retired\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null), this.props.match.params.mode === \"create\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      type: \"submit\",\n      onClick: this.handleSubmit\n    }, \"Create Employee Record\") : this.props.match.params.mode === \"edit\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      type: \"submit\",\n      onClick: this.handleEdit\n    }, \"Update Employee Record\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"withRouter\"])(EmployeeCreate));\n\n//# sourceURL=webpack:///./src/components/EmployeeCreate.jsx?");

/***/ }),

/***/ "./src/components/EmployeeDirectory.jsx":
/*!**********************************************!*\
  !*** ./src/components/EmployeeDirectory.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmployeeDirectory; });\n/* harmony import */ var _EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeFilter.jsx */ \"./src/components/EmployeeFilter.jsx\");\n/* harmony import */ var _EmployeeCreate_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeCreate.jsx */ \"./src/components/EmployeeCreate.jsx\");\n/* harmony import */ var _EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeTable.jsx */ \"./src/components/EmployeeTable.jsx\");\n/* harmony import */ var _functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/graphQLquery */ \"./src/functions/graphQLquery.js\");\n/* harmony import */ var _functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _functions_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/queries */ \"./src/functions/queries.js\");\n/* harmony import */ var _functions_queries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_functions_queries__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\n\n\n\n\n\n\nclass EmployeeDirectory extends react__WEBPACK_IMPORTED_MODULE_5___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      data: [],\n      filteredData: []\n    };\n    this.createEmployee = this.createEmployee.bind(this);\n    this.handleDelete = this.handleDelete.bind(this);\n    this.handleEdit = this.handleEdit.bind(this);\n    this.handleView = this.handleView.bind(this);\n    this.handleFilter = this.handleFilter.bind(this);\n  }\n\n  async loadData() {\n    let response = await Object(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__[\"runGraphQLQuery\"])(_functions_queries__WEBPACK_IMPORTED_MODULE_4__[\"queries\"].getEmployeeList);\n    this.setState({\n      data: response,\n      filteredData: response\n    });\n  }\n\n  async componentDidMount() {\n    await this.loadData();\n  }\n\n  async createEmployee(employee) {\n    console.log(employee);\n    let query = `mutation AddEmployee($employee: EmployeeInput!) {\n            addEmployee(employee: $employee) {\n              id    \n            }\n          }`;\n    console.log(query);\n    employee.age = parseInt(employee.age);\n    let variables = {\n      employee\n    };\n    let response = await fetch('http://localhost:3000/graphql', {\n      method: \"POST\",\n      headers: {\n        \"Content-type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    let data = await response.json();\n    await this.loadData();\n  }\n\n  handleEdit(id) {\n    console.log(id);\n  }\n\n  handleView(id) {\n    console.log(id);\n  }\n\n  async handleDelete(id) {\n    console.log(id);\n    let variables = {\n      deleteEmployeeDataId: id\n    };\n    let result = await Object(_functions_graphQLquery__WEBPACK_IMPORTED_MODULE_3__[\"runGraphQLQuery\"])(_functions_queries__WEBPACK_IMPORTED_MODULE_4__[\"queries\"].deleteEmployee, variables);\n\n    if (result) {\n      alert(\"Data successfully deleted\");\n      await this.loadData();\n    }\n  }\n\n  handleFilter(args) {\n    let data = this.state.data.filter(v => {\n      for (var key in args) {\n        console.log(key, args[key], v[key]);\n\n        if (key === \"current_status\") {\n          if (args[key] !== \"\" && parseInt(args[key]) !== parseInt(v[key])) return false;\n        } else if (args[key] !== \"\" && args[key] !== v[key]) {\n          return false;\n        }\n      }\n\n      return true;\n    });\n    this.setState({\n      filteredData: data\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"a\", {\n      href: \"/\"\n    }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], {\n      to: \"/create\"\n    }, \"Create Employee\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_EmployeeFilter_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      filter: this.handleFilter\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_EmployeeTable_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: this.state.filteredData,\n      handleEdit: this.handleEdit,\n      handleDelete: this.handleDelete,\n      handleView: this.handleView\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"hr\", null));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/EmployeeDirectory.jsx?");

/***/ }),

/***/ "./src/components/EmployeeFilter.jsx":
/*!*******************************************!*\
  !*** ./src/components/EmployeeFilter.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmployeeFilter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass EmployeeFilter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      title: \"\",\n      department: \"\",\n      employee_type: \"\",\n      current_status: \"\"\n    };\n    this.handleTitleChange = this.handleTitleChange.bind(this);\n    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);\n    this.handleEmployeeTypeChange = this.handleEmployeeTypeChange.bind(this);\n    this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this);\n    this.handleFilter = this.handleFilter.bind(this);\n  }\n\n  handleTitleChange(e) {\n    this.setState({\n      \"title\": e.target.value\n    });\n  }\n\n  handleDepartmentChange(e) {\n    this.setState({\n      \"department\": e.target.value\n    });\n  }\n\n  handleEmployeeTypeChange(e) {\n    this.setState({\n      \"employee_type\": e.target.value\n    });\n  }\n\n  handleCurrentStatusChange(e) {\n    this.setState({\n      \"current_status\": e.target.value\n    });\n  }\n\n  handleFilter() {\n    console.log(this.state);\n    this.props.filter(this.state);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      id: \"title\",\n      value: this.state.title,\n      onChange: this.handleTitleChange,\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"Select All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Employee\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Manager\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Director\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"VP\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      id: \"department\",\n      value: this.state.department,\n      onChange: this.handleDepartmentChange,\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"Select All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Engineering\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Marketing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"HR\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"IT\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      id: \"employee_type\",\n      value: this.state.employee_type,\n      onChange: this.handleEmployeeTypeChange,\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"Select All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Fulltime\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Parttime\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Seasonal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Contract\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      id: \"employee_type\",\n      value: this.state.current_status,\n      onChange: this.handleCurrentStatusChange,\n      required: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"Select All\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: 1\n    }, \"Employed\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: 0\n    }, \"Retired\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.handleFilter,\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"Filter\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/EmployeeFilter.jsx?");

/***/ }),

/***/ "./src/components/EmployeeTable.jsx":
/*!******************************************!*\
  !*** ./src/components/EmployeeTable.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EmployeeTable; });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction EmployeeTable(props) {\n  let rowStyle = {\n    border: \"1px solid silver\",\n    padding: 4\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"table\", {\n    style: {\n      borderCollapse: \"separate\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", {\n    style: rowStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Date Of Joining\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Department\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Employee Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Current Status\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"View\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n    style: rowStyle\n  }, \"Delete\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tbody\", null, props.data.map((v, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmployeeTableRow, {\n    data: v,\n    style: rowStyle,\n    key: idx,\n    edit: props.handleEdit,\n    view: props.handleView,\n    delete: props.handleDelete\n  }))));\n}\n\nfunction EmployeeTableRow(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", {\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.fname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.lname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.date_of_joining.split(\"T\")[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.department), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.employee_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, props.data.current_status == 1 ? \"Employed\" : \"Retired\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Link\"], {\n    to: `/edit/${props.data._id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"button\"\n  }, \"Edit Record\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__[\"Link\"], {\n    to: `/view/${props.data._id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"button\"\n  }, \"View Record\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n    style: props.style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: () => {\n      props.delete(props.data._id);\n    }\n  }, \"Delete Record\")));\n}\n\n//# sourceURL=webpack:///./src/components/EmployeeTable.jsx?");

/***/ }),

/***/ "./src/functions/graphQLquery.js":
/*!***************************************!*\
  !*** ./src/functions/graphQLquery.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function runGraphQLQuery(query, variables) {\n  try {\n    const response = await fetch(\"http://localhost:3000/graphql\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    const result = await response.json();\n\n    if (result.errors) {\n      const error = result.errors[0];\n\n      if (error.extensions.code === \"BAD_USER_INPUT\") {\n        const details = error.extensions.exception.errors.join('\\n ');\n        alert(`${error.message}:\\n ${details}`);\n      } else {\n        alert(`${error.extensions.code}: ${error.message}`);\n      }\n    } else {\n      let keyName = Object.keys(result.data)[0];\n      return result.data[keyName];\n    }\n  } catch (e) {\n    console.error(e);\n    alert(`Error in sending data to server: ${e.message} `);\n  }\n}\n\nmodule.exports = {\n  runGraphQLQuery\n};\n\n//# sourceURL=webpack:///./src/functions/graphQLquery.js?");

/***/ }),

/***/ "./src/functions/queries.js":
/*!**********************************!*\
  !*** ./src/functions/queries.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const queries = {\n  \"getEmployeeList\": `query Employees {\n        employees {\n          _id\n          fname\n          lname\n          age\n          date_of_joining\n          title\n          department\n          employee_type\n          current_status\n        }\n      }`,\n  \"createEmployee\": `mutation Mutation($employee: EmployeeInput!) {\n      createEmployee(employee: $employee)\n    }`,\n  \"getEmployee\": `query getEmployee($id : String!) {\n        employee(id : $id) {\n          _id\n          fname\n          lname\n          age\n          date_of_joining\n          title\n          department\n          employee_type\n          current_status\n        }\n      }`,\n  \"updateEmployee\": `mutation Mutation($updateEmployeeDataId: String!, $employee: EmployeeUpdate!) {\n        updateEmployeeData(id: $updateEmployeeDataId, employee: $employee)\n      }`,\n  \"deleteEmployee\": `mutation Mutation($deleteEmployeeDataId: String!) {\n        deleteEmployeeData(id: $deleteEmployeeDataId)\n      }`\n};\nmodule.exports = {\n  queries\n};\n\n//# sourceURL=webpack:///./src/functions/queries.js?");

/***/ })

/******/ });