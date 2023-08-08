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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/styles.js");





const LicenseCompatibility = () => {
  const [inputState, setInputState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    action_type: "",
    organization_id: "",
    user_id: "",
    license_event_id_one: "",
    license_event_id_two: ""
  });
  const [license1, setLicense1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [license2, setLicense2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const [compatibiltyResult, setCompatibiltyResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [render, setRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("form");
  const handleChange = e => {
    setInputState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const checkState = e => {
    setChecked(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _data__WEBPACK_IMPORTED_MODULE_2__.sample_data.forEach(item => {
      item.percentage_of_compatibility <= 50 ? setCompatibiltyResult("Not Recommended") : item.percentage_of_compatibility <= 70 ? setCompatibiltyResult("Recommended") : setCompatibiltyResult("Highly Recommended");
      setLicense1(item.license_1);
      setLicense2(item.license_2);
    });
  }, [license1]);
  const checkLicenseCompatibilty = async e => {
    e.preventDefault();
    const data = {
      action_type: inputState.action_type,
      organization_id: inputState.organization_id,
      user_id: inputState.user_id,
      license_event_id_one: inputState.license_event_id_one,
      license_event_id_two: inputState.license_event_id_two
    };

    // action_type: "check-compatibility",
    // organization_id: "63cf89a0dcc2a171957b290b",
    // user_id: 609,
    // license_event_id_one: "FB1010000000016839611235973491",
    // license_event_id_two: "FB1010000000016844191805602953",

    const headers = {
      "API-KEY": "de4b3cd2-4d2a-4652-ba62-29a174c037ee",
      "Content-Type": "application/json"
    };
    try {
      const response = await fetch("https://100080.pythonanywhere.com/api/public/licenses", {
        method: "PoST",
        data,
        headers
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      } else {
        const result = await response.json();
        result.forEach(item => {
          item.percentage_of_compatibility <= 50 ? setCompatibiltyResult("Not Recommended") : item.percentage_of_compatibility <= 70 ? setCompatibiltyResult("Recommended") : setCompatibiltyResult("Highly Recommended");
          setLicense1(item.license_1);
          setLicense2(item.license_2);
        });
        setRender("content");
      }
    } catch (err) {
      return err;
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.dashboard
  }, render === "form" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "check-section",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.checkSection
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
    htmlFor: "actionType",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.label
  }, "Action Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    className: "form-select",
    "aria-label": "Default select example",
    name: "action_type",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.select,
    value: inputState.action_type,
    onChange: handleChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "Select Type"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", null, "check-compatibility")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3",
    style: {
      marginBottom: 8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "organizationId",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.label
  }, "Organization ID"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "organizationId",
    name: "organization_id",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.input,
    value: inputState.organization_id,
    onChange: handleChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3",
    style: {
      marginBottom: 8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "firstLicenseId",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.label
  }, "First License ID"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "firstLicenseId",
    name: "license_event_id_one",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.input,
    value: inputState.license_event_id_one,
    onChange: handleChange
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
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.label
  }, "Second License ID"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "secondLicenseId",
    name: "license_event_id_two",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.input,
    value: inputState.license_event_id_two,
    onChange: handleChange
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-md-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-3",
    style: {
      marginBottom: 8
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "userId",
    className: "form-label",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.label
  }, "User ID"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "form-control form-control-sm",
    id: "userId",
    name: "user_id",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.input,
    value: inputState.user_id,
    onChange: handleChange,
    placeholder: "Optional"
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.buttonSection
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "btn btn-primary",
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.button,
    onClick: () => setRender("content")
  }, "Submit")))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license-details"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "compatibility-result"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.compatibilityResult
  }, "Compatibility: ", compatibiltyResult)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "FIRST LICENSE: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.license_name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Version: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.version), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Type : ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license1.type_of_license), " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Decsription:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Risk:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.risk_for_choosing_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Liability:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.limitation_of_liability), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Disclaimer:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license1.disclaimer)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "license2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "SECOND LICENSE : ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, license2.license_name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Version: ", license2.version), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Type: ", license2.type_of_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Decsription:"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Risk:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.risk_for_choosing_license), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
  }, "Liability:"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, license2.limitation_of_liability), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
    style: _styles__WEBPACK_IMPORTED_MODULE_3__.formStyle.h5
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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sample_data: () => (/* binding */ sample_data)
/* harmony export */ });
const sample_data = [{
  "is_compatible": true,
  "percentage_of_compatibility": 70,
  "license_1_event_id": "FB1010000000016839611235973491",
  "license_2_event_id": "FB1010000000016844191805602953",
  "identifier": "FB1010000000016839611235973491-FB1010000000016844191805602953",
  "license_1": {
    "license_name": "CERN Open Hardware Licence Version 2 - Weakly Reciprocal",
    "license_tags": [],
    "version": "v2.0",
    "type_of_license": "COPYLEFT",
    "short_description": "CERN Open Hardware Licence Version 2 - Weakly Reciprocal was published in March 10, 2020",
    "description": "In CERN Open Hardware Licence Version 2 - Weakly Reciprocal anyone is welcome to use it, in unmodified form only. This licence has developed to promote collaboration among hardware designers and to provide a legal tool which supports the freedom to use, study, modify, share and distribute hardware designs and products based on those designs.",
    "disclaimer": "Copyright © [year] [copyright owner name]. All rights reserved.",
    "risk_for_choosing_license": "Use of this Licence does not imply any endorsement by CERN of any Licensor or their designs nor does it imply any involvement by CERN in their development.",
    "limitation_of_liability": "The Licensor shall, to the maximum extent permitted by law, have no liability for direct, indirect, special, incidental, consequential, exemplary, punitive or other damages of any character including, without limitation, procurement of substitute goods or services, loss of use, data or profits, or business interruption, however caused and on any theory of contract, warranty, tort (including negligence), product liability or otherwise, arising in any way in relation to the Covered Source, modified Covered Source and/or the Making or Conveyance of a Product, even if advised of the possibility of such damages, and You shall hold the Licensor(s) free and harmless from any liability, costs, damages, fees and expenses, including claims by third parties, in relation to such use.",
    "license_url": "https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2",
    "logo_detail": {
      "filename": "img_281be02d-18dc-4298-8eb2-9c53a2249906.jpeg",
      "actual_filename": "Cern.jpeg",
      "file_extension": "jpeg",
      "url": "https://100080.pythonanywhere.com/media/img/img_281be02d-18dc-4298-8eb2-9c53a2249906.jpeg"
    },
    "recommendation": "",
    "is_active": true,
    "permissions": [{
      "action": "Patent Use",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Patent Grant",
      "permission": "Yes",
      "has_other_condition": false
    }],
    "conditions": [{
      "action": "Disclose Source Code",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Network Use is for Distribution",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "State Changes",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Release Under Same License",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Code can be used in closed source project",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Copied",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Reproduced",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Distributed",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Modified",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Commercial Used",
      "permission": "Yes",
      "has_other_condition": false
    }],
    "limitations": [{
      "action": "Liability",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Warranty",
      "permission": "Yes",
      "has_other_condition": true
    }, {
      "action": "Trademark use",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Redistribution",
      "permission": "Yes",
      "has_other_condition": false
    }],
    "references": [],
    "laws": "Not Fixed",
    "sources": [{
      "action": "FSF Approved",
      "permission": "No"
    }, {
      "action": "OSI Approved",
      "permission": "Yes"
    }],
    "must_includes": [{
      "action": "License",
      "permission": "Yes"
    }, {
      "action": "Copyright Notice",
      "permission": "Yes"
    }]
  },
  "license_2": {
    "license_name": "Cornell Lossless JPEG License",
    "license_tags": [],
    "version": "Cornell-Lossless-JPEG",
    "type_of_license": "PERMISSIVE",
    "short_description": "This license is permissive license.",
    "description": "Cornell Lossless JPEG License give permission to use, copy, modify, and distribute this software and its documentation for any purpose, without fee, and without written agreement is granted.",
    "disclaimer": "Copyright (c) 1993 Cornell University, Kongji Huang\nAll rights reserved.",
    "risk_for_choosing_license": "This license is a short license and does not grant liability to the users.",
    "limitation_of_liability": "IN NO EVENT SHALL THE CORNELL UNIVERSITY BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF CORNELL UNIVERSITY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.",
    "license_url": "https://www.mssl.ucl.ac.uk/~mcrw/src/20050920/proto.h",
    "logo_detail": {
      "filename": "img_1d88b9c1-5697-4243-9c09-dcfa4ab2ea8d.jpg",
      "actual_filename": "Cornell.jpg",
      "file_extension": "jpg",
      "url": "https://100080.pythonanywhere.com/media/img/img_1d88b9c1-5697-4243-9c09-dcfa4ab2ea8d.jpg"
    },
    "recommendation": "",
    "is_active": true,
    "permissions": [{
      "action": "Patent Use",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Patent Grant",
      "permission": "No",
      "has_other_condition": false
    }],
    "conditions": [{
      "action": "Disclose Source Code",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Network Use is for Distribution",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Release Under Same License",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "State Changes",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Code can be used in closed source project",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Copied",
      "permission": "Yes",
      "has_other_condition": true
    }, {
      "action": "Distributed",
      "permission": "Yes",
      "has_other_condition": true
    }, {
      "action": "Reproduced",
      "permission": "Yes",
      "has_other_condition": false
    }, {
      "action": "Modified",
      "permission": "Yes",
      "has_other_condition": true
    }, {
      "action": "Commercial Used",
      "permission": "Yes",
      "has_other_condition": true
    }],
    "limitations": [{
      "action": "Liability",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Warranty",
      "permission": "Yes",
      "has_other_condition": true
    }, {
      "action": "Trademark use",
      "permission": "No",
      "has_other_condition": false
    }, {
      "action": "Redistribution",
      "permission": "Yes",
      "has_other_condition": false
    }],
    "references": [],
    "laws": "Not Fixed",
    "sources": [{
      "action": "FSF Approved",
      "permission": "No"
    }, {
      "action": "OSI Approved",
      "permission": "No"
    }],
    "must_includes": [{
      "action": "License",
      "permission": "No"
    }, {
      "action": "Copyright Notice",
      "permission": "Yes"
    }]
  }
}];

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