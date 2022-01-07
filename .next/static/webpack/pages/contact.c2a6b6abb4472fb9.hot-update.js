"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_matthew_development_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_matthew_development_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_matthew_development_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Contact = function() {\n    _s();\n    // const [fullname, setFullname] = useState('');\n    // const [email, setEmail] = useState('');\n    // const [subject, setSubject] = useState('');\n    // const [message, setMessage] = useState('');\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        fullname: '',\n        email: '',\n        subject: '',\n        message: ''\n    }), data = ref[0], setData = ref[1];\n    // console.log(email);\n    //   Form validation state\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    }), errors = ref1[0], setErrors = ref1[1];\n    //   Setting button text on form submission\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Send'), buttonText = ref2[0], setButtonText = ref2[1];\n    // Setting success or failure messages states\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showSuccessMessage = ref3[0], setShowSuccessMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showFailureMessage = ref4[0], setShowFailureMessage = ref4[1];\n    // Validation check method\n    var handleValidation = function() {\n        var tempErrors = {\n            fullname: false,\n            email: false,\n            subject: false,\n            message: false\n        };\n        var isValid = true;\n        if (data.fullname.length <= 0) {\n            tempErrors['fullname'] = true;\n            isValid = false;\n        }\n        if (data.email.length <= 0) {\n            tempErrors['email'] = true;\n            isValid = false;\n        }\n        if (data.subject.length <= 0) {\n            tempErrors['subject'] = true;\n            isValid = false;\n        }\n        if (data.message.length <= 0) {\n            tempErrors['message'] = true;\n            isValid = false;\n        }\n        setErrors(_objectSpread({\n        }, tempErrors));\n        console.log('errors', errors);\n        return isValid;\n    };\n    var handleChange = function(e) {\n        var newData = _objectSpread({\n        }, data, _defineProperty({\n        }, e.currentTarget.name, e.currentTarget.value));\n        setData(newData);\n        console.log(data);\n    };\n    var handleSubmit = _asyncToGenerator(_Users_matthew_development_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var isValidForm, res, error;\n        return _Users_matthew_development_portfolio_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    isValidForm = handleValidation();\n                    _ctx.next = 4;\n                    return fetch('/api/sendgrid', {\n                        body: JSON.stringify(data),\n                        headers: {\n                            'Content-Type': 'application/json'\n                        },\n                        method: 'POST'\n                    });\n                case 4:\n                    res = _ctx.sent;\n                    _ctx.next = 7;\n                    return res.json();\n                case 7:\n                    error = _ctx.sent.error;\n                    if (!error) {\n                        _ctx.next = 14;\n                        break;\n                    }\n                    console.log(error);\n                    setShowSuccessMessage(false);\n                    setShowFailureMessage(true);\n                    setButtonText('Send');\n                    return _ctx.abrupt(\"return\");\n                case 14:\n                    setShowSuccessMessage(true);\n                    setShowFailureMessage(false);\n                    setButtonText('Send');\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    // console.log(fullname, email, subject, message);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: \"h-screen w-screen flex justify-center items-center bg-gray-50 font-Montserrat\",\n        __source: {\n            fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n            lineNumber: 95,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"rounded-lg shadow-xl flex flex-col w-1/2 px-4 py-8 bg-white\",\n            __source: {\n                fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Get in touch\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    htmlFor: \"fullname\",\n                    className: \"mt-8\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        \"Full name\",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                            className: \"text-red-500\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 20\n                            },\n                            __self: _this,\n                            children: \"*\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    onChange: handleChange,\n                    type: \"text\",\n                    name: \"fullname\",\n                    className: \"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    htmlFor: \"email\",\n                    className: \"mt-4\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        \"E-mail\",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                            className: \"text-red-500\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"*\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    onChange: handleChange,\n                    type: \"email\",\n                    name: \"email\",\n                    className: \"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    htmlFor: \"subject\",\n                    className: \"mt-4\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        \"Subject\",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                            className: \"text-red-500\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 18\n                            },\n                            __self: _this,\n                            children: \"*\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    onChange: handleChange,\n                    type: \"text\",\n                    name: \"subject\",\n                    className: \"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"label\", {\n                    htmlFor: \"message\",\n                    className: \" mt-4\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        \"Message\",\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                            className: \"text-red-500\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 18\n                            },\n                            __self: _this,\n                            children: \"*\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"textarea\", {\n                    onChange: handleChange,\n                    name: \"message\",\n                    className: \"bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"flex flex-row items-center justify-start m-auto\",\n                    __source: {\n                        fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                        className: \"px-10 mt-8 py-2 bg-green-600 text-white rounded-md text-lg flex flex-row items-center\",\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/pages/contact.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Send\"\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Contact, \"ZzaVnqqxcNuA8cArVzKEilJ1540=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDZGUsU0FBUyxFQUFDLENBQW1HOzs7Ozs7OztxRkFFOUdELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFpRDs7Ozs7OzttR0FDN0RXLENBQU07d0JBQUNYLFNBQVMsRUFBQyxDQUF1Rjs7Ozs7OztrQ0FBQyxDQUUxRzs7Ozs7O0FBS1YsQ0FBQztHQWhKS3hDLE9BQU87S0FBUEEsT0FBTztBQWtKYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QudHN4PzI0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICAvLyBjb25zdCBbZnVsbG5hbWUsIHNldEZ1bGxuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgLy8gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIC8vIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgLy8gY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBmdWxsbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHN1YmplY3Q6ICcnLFxuICAgIG1lc3NhZ2U6ICcnXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKGVtYWlsKTtcbiAgLy8gICBGb3JtIHZhbGlkYXRpb24gc3RhdGVcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyAgIFNldHRpbmcgYnV0dG9uIHRleHQgb24gZm9ybSBzdWJtaXNzaW9uXG4gIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKCdTZW5kJyk7XG5cbiAgLy8gU2V0dGluZyBzdWNjZXNzIG9yIGZhaWx1cmUgbWVzc2FnZXMgc3RhdGVzXG4gIGNvbnN0IFtzaG93U3VjY2Vzc01lc3NhZ2UsIHNldFNob3dTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93RmFpbHVyZU1lc3NhZ2UsIHNldFNob3dGYWlsdXJlTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gVmFsaWRhdGlvbiBjaGVjayBtZXRob2RcbiAgY29uc3QgaGFuZGxlVmFsaWRhdGlvbiA9ICgpOiBib29sZWFuID0+IHtcbiAgICBsZXQgdGVtcEVycm9ycyA9IHtcbiAgICAgIGZ1bGxuYW1lOiBmYWxzZSxcbiAgICAgIGVtYWlsOiBmYWxzZSxcbiAgICAgIHN1YmplY3Q6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZmFsc2VcbiAgICB9O1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmIChkYXRhLmZ1bGxuYW1lLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzWydmdWxsbmFtZSddID0gdHJ1ZTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGRhdGEuZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRlbXBFcnJvcnNbJ2VtYWlsJ10gPSB0cnVlO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGF0YS5zdWJqZWN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzWydzdWJqZWN0J10gPSB0cnVlO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZGF0YS5tZXNzYWdlLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0ZW1wRXJyb3JzWydtZXNzYWdlJ10gPSB0cnVlO1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEVycm9ycyh7IC4uLnRlbXBFcnJvcnMgfSk7XG4gICAgY29uc29sZS5sb2coJ2Vycm9ycycsIGVycm9ycyk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKFxuICAgIGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PiB8IFJlYWN0LkZvcm1FdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApID0+IHtcbiAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhLCBbZS5jdXJyZW50VGFyZ2V0Lm5hbWVdOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUgfTtcbiAgICBzZXREYXRhKG5ld0RhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgaXNWYWxpZEZvcm0gPSBoYW5kbGVWYWxpZGF0aW9uKCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zZW5kZ3JpZCcsIHtcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBzZXRTaG93U3VjY2Vzc01lc3NhZ2UoZmFsc2UpO1xuICAgICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKHRydWUpO1xuICAgICAgc2V0QnV0dG9uVGV4dCgnU2VuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTaG93U3VjY2Vzc01lc3NhZ2UodHJ1ZSk7XG4gICAgc2V0U2hvd0ZhaWx1cmVNZXNzYWdlKGZhbHNlKTtcbiAgICBzZXRCdXR0b25UZXh0KCdTZW5kJyk7XG4gIH07XG4gIC8vIGNvbnNvbGUubG9nKGZ1bGxuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWdyYXktNTAgZm9udC1Nb250c2VycmF0XCI+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHNoYWRvdy14bCBmbGV4IGZsZXgtY29sIHctMS8yIHB4LTQgcHktOCBiZy13aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5HZXQgaW4gdG91Y2g8L2gxPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZ1bGxuYW1lXCIgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgIEZ1bGwgbmFtZTxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPio8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgYm9yZGVyLWIgcHktMiBwbC00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLW1kIGZvY3VzOnJpbmctMSByaW5nLWdyZWVuLTUwMCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgRS1tYWlsPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgYm9yZGVyLWIgcHktMiBwbC00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyb3VuZGVkLW1kIGZvY3VzOnJpbmctMSByaW5nLWdyZWVuLTUwMCBmb250LWxpZ2h0IHRleHQtZ3JheS01MDBcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViamVjdFwiIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICBTdWJqZWN0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInN1YmplY3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGJvcmRlci1iIHB5LTIgcGwtNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cm91bmRlZC1tZCBmb2N1czpyaW5nLTEgcmluZy1ncmVlbi01MDAgZm9udC1saWdodCB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCIgbXQtNFwiPlxuICAgICAgICAgIE1lc3NhZ2U8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCBib3JkZXItYiBweS0yIHBsLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJvdW5kZWQtbWQgZm9jdXM6cmluZy0xIHJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydCBtLWF1dG9cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTEwIG10LTggcHktMiBiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHRleHQtbGcgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0IiwiZnVsbG5hbWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwiZGF0YSIsInNldERhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInNob3dTdWNjZXNzTWVzc2FnZSIsInNldFNob3dTdWNjZXNzTWVzc2FnZSIsInNob3dGYWlsdXJlTWVzc2FnZSIsInNldFNob3dGYWlsdXJlTWVzc2FnZSIsImhhbmRsZVZhbGlkYXRpb24iLCJ0ZW1wRXJyb3JzIiwiaXNWYWxpZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmV3RGF0YSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJpc1ZhbGlkRm9ybSIsInJlcyIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contact.tsx\n");

/***/ })

});