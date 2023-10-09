/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LicenseCompatibility_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LicenseCompatibility.jsx */ "./src/components/LicenseCompatibility.jsx");



// require('dotenv').config()  
const App = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "app"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_LicenseCompatibility_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/LicenseCompatibility.jsx":
/*!*************************************************!*\
  !*** ./src/components/LicenseCompatibility.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/styles.js");



const LicenseCompatibility = () => {
  const [compatibilityResult, setCompatibilityResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("form");
  const [firstLicenseName, setFirstLicenseName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [secondLicenseName, setSecondLicenseName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [inputState, setInputState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    first_license_name: "",
    second_license_name: ""
  });
  const checkStatus = e => {
    setChecked(!checked);
  };
  const handleChangeState = e => {
    setInputState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const reset = () => {
    setCompatibilityResult("");
  };
  async function retrieveFirstLicenseId({
    firstLicenseName
  }) {
    try {
      const response = await fetch(`https://100080.pythonanywhere.com/api/licenses/?search_term=${firstLicenseName}&action_type=search`);
      const first_response = await response.json();
      return first_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
  async function retrieveSecondLicenseId({
    secondLicenseName
  }) {
    try {
      const response = await fetch(`https://100080.pythonanywhere.com/api/licenses/?search_term=${secondLicenseName}&action_type=search`);
      const second_response = await response.json();
      return second_response.data[0].eventId;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
  async function processServicesRequest() {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sub_service_ids: ["DOWELL100301"],
          service_id: "DOWELL10030"
        }),
        redirect: "follow"
      };
      const service_url = `https://100105.pythonanywhere.com/api/v3/process-services/?type=module_service&api_key=2ab7d114-0351-418c-a149-2a50e9f70389`;
      const serviceResponse = await fetch(service_url, requestOptions);
      return serviceResponse.status;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
  const checkLicenseCompatibility = async e => {
    e.preventDefault();
    try {
      const firstLicenseEventId = await retrieveFirstLicenseId({
        firstLicenseName
      });
      const secondLicenseEventId = await retrieveSecondLicenseId({
        secondLicenseName
      });
      if (firstLicenseEventId !== "" || secondLicenseEventId !== "") {
        const serviceStatus = await processServicesRequest();
        if (serviceStatus === 200) {
          const data = {
            action_type: "check-compatibility",
            license_event_id_one: firstLicenseEventId,
            license_event_id_two: secondLicenseEventId
          };
          const response = await fetch("https://100080.pythonanywhere.com/api/licenses/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
          const compareResult = await response.json();
          if (compareResult.percentage_of_compatibility > 70) {
            setCompatibilityResult("Highly Recommended");
          } else if (compareResult.percentage_of_compatibility >= 50 && compareResult.percentage_of_compatibility <= 70) {
            setCompatibilityResult("Recommended");
          } else {
            setCompatibilityResult("Not Recommended");
          }
        } else {
          return "You are out of Credit";
        }
      } else {
        return "Result not found";
      }
    } catch (error) {
      return error.message;
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-body"
  }, compatibilityResult !== "" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "show-recommendation"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, compatibilityResult), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.button,
    onClick: reset
  }, "Ok")) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      marginTop: 20
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "check",
    id: "flexCheckDefault",
    checked: checked,
    onChange: checkStatus,
    style: {
      width: 18,
      height: 18,
      marginRight: 5
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    style: {
      fontSize: 18,
      fontWeight: 600
    },
    htmlFor: "flexCheckDefault"
  }, "Check License Compatibility")), checked === true ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: checkLicenseCompatibility
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "firstLicense",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.label
  }, "First License Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control",
    id: "firstLicense",
    name: "first_license_name",
    value: inputState.first_license_name,
    onChange: handleChangeState,
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.input
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "secondLicense",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.label
  }, "Second License Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "secondLicense",
    name: "second_license_name",
    value: inputState.second_license_name,
    onChange: handleChangeState,
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.input
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.button
  }, "Submit"))) : ""))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LicenseCompatibility);

/***/ }),

/***/ "./src/components/styles.js":
/*!**********************************!*\
  !*** ./src/components/styles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formStyle: () => (/* binding */ formStyle)
/* harmony export */ });
const formStyle = {
  dashboard: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    maxHeight: 400,
    overflowY: "scroll",
    boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)"
  },
  checkSection: {
    fontSize: 18,
    fontWeight: 700
  },
  input: {
    fontSize: 16,
    width: 450,
    height: 25,
    marginBottom: 10,
    marginTop: 5
  },
  select: {
    fontSize: 16,
    width: 450,
    height: 30
  },
  label: {
    fontSize: 16,
    marginTop: 10
  },
  button: {
    fontSize: 18,
    fontStyle: "bold",
    padding: "8px 20px",
    backgroundColor: "#0D6EFD",
    border: "0.5px solid #0D6EFD",
    color: "#FFFFFF",
    borderRadius: 8,
    pointer: "cursor"
  },
  buttonSection: {
    width: 460,
    display: "flex",
    justifyContent: "flex-end"
  },
  compatibilityResult: {
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 700
  },
  h5: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 2
  }
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");




/**
 * Import the stylesheet for the plugin.
 */
// import './styles/main.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// Render the App component into the DOM
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('content-body'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map