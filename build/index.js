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
  const [compatibiltyResult, setCompatibiltyResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("form");
  const [firstLicenseName, setFirstLicenseName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [secondLicenseName, setSecondLicenseName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const checkState = e => {
    setChecked(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  async function retrieveFirstLicenseId({
    firstLicenseName
  }) {
    try {
      const response = await fetch(`https://100080.pythonanywhere.com/api/licenses/?search_term=${firstLicenseName}&action_type=search`);
      const first_response = await response.json();
      //console.log("first response", first_response);
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
      //console.log("second response", second_response);
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
      // console.log(serviceResponse)
      return serviceResponse.status;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
  const checkLicenseCompatibilty = async e => {
    e.preventDefault();
    try {
      const firstLicenseEventId = await retrieveFirstLicenseId({
        firstLicenseName
      });
      const secondLicenseEventId = await retrieveSecondLicenseId({
        secondLicenseName
      });

      // try {
      //   const requestOptions = {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       sub_service_ids: ["DOWELL100301"],
      //       service_id: "DOWELL10030",
      //     }),
      //     redirect: "follow",
      //   };

      //   const service_url = `https://100105.pythonanywhere.com/api/v3/process-services/?type=module_service&api_key=2ab7d114-0351-418c-a149-2a50e9f70389`;

      //   const serviceResponse = await fetch(service_url, requestOptions);
      //   console.log(serviceResponse.status)
      //   //return serviceResponse.text();
      // } catch (error) {
      //   return JSON.stringify(error);
      // }

      if (firstLicenseEventId !== "" || secondLicenseEventId !== "") {
        const serviceResult = await processServicesRequest();
        //console.log("from service result", serviceResult)

        if (serviceResult === 200) {
          const data = {
            action_type: "check-compatibility",
            license_event_id_one: firstLicenseEventId,
            license_event_id_two: secondLicenseEventId
          };
          const header = {
            "API-KEY": "2ab7d114-0351-418c-a149-2a50e9f70389",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json"
          };
          const options = {
            method: "POST",
            headers: header,
            body: data
          };
          await fetch("https://100080.pythonanywhere.com/api/licenses/", data, options).then(response => {
            const data = response;
            console.log("from data", data);
            let result = "";
            if (data.percentage_of_compatibility > 70) {
              result = "Highly Recommended";
            } else if (data.percentage_of_compatibility >= 50 && data.percentage_of_compatibility <= 70) {
              result = "Recommended";
            } else {
              result = "Not Recommended";
            }
            return result;
          }).catch(error => {
            return error.message;
          });
        } else {
          console.log("You are out of Credit");
        }
      } else {
        return "Result not found";
      }
    } catch (error) {}
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.dashboard
  }, render === "form" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "check-section",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.checkSection
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-check"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "form-check-input",
    type: "checkbox",
    name: "check",
    id: "flexCheckDefault",
    checked: checked,
    onChange: checkState
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "form-check-label",
    htmlFor: "flexCheckDefault"
  }, "Check License Compatibility"))), checked === false ? "" : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license-content",
    style: {
      marginTop: 10,
      marginBottom: 10
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "terms-text card-body"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3",
    style: {
      marginBottom: 8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "firstLicenseId",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.label
  }, "First License Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "firstLicenseId",
    name: "firstLicenseName",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.input,
    onChange: e => setFirstLicenseName(e.target.value)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3",
    style: {
      marginBottom: 8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "secondLicenseId",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.label
  }, "Second License Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "secondLicenseId",
    name: "secondLicenseName",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.input,
    onChange: e => setSecondLicenseName(e.target.value)
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.buttonSection
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "btn btn-primary",
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.button,
    onClick: checkLicenseCompatibilty
  }, "Submit")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "compatibility-result"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.compatibilityResult
  }, "Compatibility: ", compatibiltyResult)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "FIRST LICENSE: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.license_name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Version: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.version), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Type : ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.type_of_license), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Decsription:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Risk:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.risk_for_choosing_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Liability:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.limitation_of_liability), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Disclaimer:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.disclaimer)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "SECOND LICENSE : ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license2.license_name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Version: ", license2.version), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Type: ", license2.type_of_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Decsription:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Risk:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.risk_for_choosing_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Liability:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.limitation_of_liability), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_2__.formStyle.h5
  }, "Disclaimer:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, " ", license2.disclaimer)))));
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
    height: 25
  },
  select: {
    fontSize: 16,
    width: 450,
    height: 30
  },
  label: {
    fontSize: 16
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