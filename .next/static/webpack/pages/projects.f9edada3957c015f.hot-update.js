"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Nav = function(param) {\n    var top = param.top, middle = param.middle, bottom = param.bottom;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggleNav = ref[0], setToggleNav = ref[1];\n    var handleNavClick = function(e) {\n        setToggleNav(!toggleNav);\n        var menu = document.querySelector('.menu');\n        var nodes = Array.from(menu.children);\n        nodes.forEach(function(child) {\n            return child.classList.toggle('rotate-burger');\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"absolute w-20 md:w-24 h-1/6 top-1 left-6 cursor-pointer menu\",\n                onClick: handleNavClick,\n                __source: {\n                    fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm\",\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm\",\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"w-1/2 h-[5px] bg-green-800 mt-2 mb-2 rounded-sm\",\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            toggleNav && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    translateY: '0'\n                },\n                animate: {\n                    opacity: 1,\n                    translateY: '10px'\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"absolute navbar top-12 left-5 h-1/2 w-12 md:w-14 shadow-lg bg-gradient-to-tr from-green-200 to-green-600 rounded-md flex flex-col justify-evenly items-center text-sm\",\n                __source: {\n                    fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: top.path,\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"transform scale-75\",\n                                src: top.icon,\n                                alt: \"link to homepage\",\n                                __source: {\n                                    fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: middle.path,\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"transform scale-75\",\n                                src: middle.icon,\n                                alt: \"link to projects page\",\n                                __source: {\n                                    fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: bottom.path,\n                        __source: {\n                            fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"rounded-lg bg-white h-[11%] w-2/3 flex justify-center items-center hover:scale-110 cursor-pointer shadow\",\n                            __source: {\n                                fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                className: \"transform scale-75\",\n                                src: bottom.icon,\n                                alt: \"link to contact\",\n                                __source: {\n                                    fileName: \"/Users/matthew/development/portfolio/components/Nav.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                },\n                                __self: _this\n                            })\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Nav, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNYO0FBQ1U7OztBQVF0QyxHQUFLLENBQUNJLEdBQUcsR0FBb0IsUUFBUUMsUUFBcUIsQ0FBQztRQUEzQkMsR0FBRyxTQUFIQSxHQUFHLEVBQUVELE1BQU0sU0FBTkEsTUFBTSxFQUFFRSxNQUFNLFNBQU5BLE1BQU07O0lBQ2pELEdBQUssQ0FBNkJOLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssR0FBbERPLFNBQVMsR0FBa0JQLEdBQXdCLEtBQXhDUSxZQUFZLEdBQUlSLEdBQXdCO0lBRTFELEdBQUssQ0FBQ1MsY0FBYyxHQUFHLFFBQVEsQ0FBUEMsQ0FBbUIsRUFBSyxDQUFDO1FBQy9DRixZQUFZLEVBQUVELFNBQVM7UUFDdkIsR0FBSyxDQUFDSSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQU87UUFDM0MsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJLENBQUNNLFFBQVE7UUFDdENILEtBQUssQ0FBQ0ksT0FBTyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztZQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQWU7O0lBQ2pFLENBQUM7SUFFRCxNQUFNOztrRkFFREMsQ0FBRztnQkFDRkMsU0FBUyxFQUFDLENBQThEO2dCQUN4RUMsT0FBTyxFQUFFZixjQUFjOzs7Ozs7Ozt5RkFFdEJhLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFpRDs7Ozs7Ozs7eUZBQy9ERCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBaUQ7Ozs7Ozs7O3lGQUMvREQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQWlEOzs7Ozs7Ozs7O1lBRWpFaEIsU0FBUywwRUFDUEwscURBQVU7Z0JBQ1R1QixPQUFPLEVBQUUsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLENBQUM7b0JBQUVDLFVBQVUsRUFBRSxDQUFHO2dCQUFDLENBQUM7Z0JBQ3hDQyxPQUFPLEVBQUUsQ0FBQztvQkFBQ0YsT0FBTyxFQUFFLENBQUM7b0JBQUVDLFVBQVUsRUFBRSxDQUFNO2dCQUFDLENBQUM7Z0JBQzNDRSxVQUFVLEVBQUUsQ0FBQztvQkFBQ0MsUUFBUSxFQUFFLEdBQUc7Z0JBQUMsQ0FBQztnQkFDN0JQLFNBQVMsRUFBQyxDQUF1Szs7Ozs7Ozs7eUZBRWhMdEIsa0RBQUk7d0JBQUM4QixJQUFJLEVBQUUxQixHQUFHLENBQUMyQixJQUFJOzs7Ozs7O3VHQUNqQlYsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQTBHOzs7Ozs7OzJHQUN0SFUsQ0FBRztnQ0FDRlYsU0FBUyxFQUFDLENBQW9CO2dDQUM5QlcsR0FBRyxFQUFFN0IsR0FBRyxDQUFDOEIsSUFBSTtnQ0FDYkMsR0FBRyxFQUFDLENBQWtCOzs7Ozs7Ozs7O3lGQUkzQm5DLGtEQUFJO3dCQUFDOEIsSUFBSSxFQUFFM0IsTUFBTSxDQUFDNEIsSUFBSTs7Ozs7Ozt1R0FDcEJWLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUEwRzs7Ozs7OzsyR0FDdEhVLENBQUc7Z0NBQ0ZWLFNBQVMsRUFBQyxDQUFvQjtnQ0FDOUJXLEdBQUcsRUFBRTlCLE1BQU0sQ0FBQytCLElBQUk7Z0NBQ2hCQyxHQUFHLEVBQUMsQ0FBdUI7Ozs7Ozs7Ozs7eUZBSWhDbkMsa0RBQUk7d0JBQUM4QixJQUFJLEVBQUV6QixNQUFNLENBQUMwQixJQUFJOzs7Ozs7O3VHQUNwQlYsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQTBHOzs7Ozs7OzJHQUN0SFUsQ0FBRztnQ0FDRlYsU0FBUyxFQUFDLENBQW9CO2dDQUM5QlcsR0FBRyxFQUFFNUIsTUFBTSxDQUFDNkIsSUFBSTtnQ0FDaEJDLEdBQUcsRUFBQyxDQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUFRckMsQ0FBQztHQTFES2pDLEdBQUc7S0FBSEEsR0FBRztBQTREVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LnRzeD9lNjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9wOiB7IGljb246IHN0cmluZzsgcGF0aDogc3RyaW5nIH07XG4gIG1pZGRsZTogeyBpY29uOiBzdHJpbmc7IHBhdGg6IHN0cmluZyB9O1xuICBib3R0b206IHsgaWNvbjogc3RyaW5nOyBwYXRoOiBzdHJpbmcgfTtcbn1cblxuY29uc3QgTmF2OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyB0b3AsIG1pZGRsZSwgYm90dG9tIH0pID0+IHtcbiAgY29uc3QgW3RvZ2dsZU5hdiwgc2V0VG9nZ2xlTmF2XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVOYXZDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgc2V0VG9nZ2xlTmF2KCF0b2dnbGVOYXYpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShtZW51LmNoaWxkcmVuKTtcbiAgICBub2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlLWJ1cmdlcicpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMjAgbWQ6dy0yNCBoLTEvNiB0b3AtMSBsZWZ0LTYgY3Vyc29yLXBvaW50ZXIgbWVudVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5hdkNsaWNrfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGgtWzVweF0gYmctZ3JlZW4tODAwIG10LTIgbWItMiByb3VuZGVkLXNtXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgaC1bNXB4XSBiZy1ncmVlbi04MDAgbXQtMiBtYi0yIHJvdW5kZWQtc21cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLVs1cHhdIGJnLWdyZWVuLTgwMCBtdC0yIG1iLTIgcm91bmRlZC1zbVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7dG9nZ2xlTmF2ICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHRyYW5zbGF0ZVk6ICcwJyB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgdHJhbnNsYXRlWTogJzEwcHgnIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbmF2YmFyIHRvcC0xMiBsZWZ0LTUgaC0xLzIgdy0xMiBtZDp3LTE0IHNoYWRvdy1sZyBiZy1ncmFkaWVudC10by10ciBmcm9tLWdyZWVuLTIwMCB0by1ncmVlbi02MDAgcm91bmRlZC1tZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciB0ZXh0LXNtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e3RvcC5wYXRofT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy13aGl0ZSBoLVsxMSVdIHctMi8zIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOnNjYWxlLTExMCBjdXJzb3ItcG9pbnRlciBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybSBzY2FsZS03NVwiXG4gICAgICAgICAgICAgICAgc3JjPXt0b3AuaWNvbn1cbiAgICAgICAgICAgICAgICBhbHQ9XCJsaW5rIHRvIGhvbWVwYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPXttaWRkbGUucGF0aH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctd2hpdGUgaC1bMTElXSB3LTIvMyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpzY2FsZS0xMTAgY3Vyc29yLXBvaW50ZXIgc2hhZG93XCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gc2NhbGUtNzVcIlxuICAgICAgICAgICAgICAgIHNyYz17bWlkZGxlLmljb259XG4gICAgICAgICAgICAgICAgYWx0PVwibGluayB0byBwcm9qZWN0cyBwYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPXtib3R0b20ucGF0aH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctd2hpdGUgaC1bMTElXSB3LTIvMyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpzY2FsZS0xMTAgY3Vyc29yLXBvaW50ZXIgc2hhZG93XCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0gc2NhbGUtNzVcIlxuICAgICAgICAgICAgICAgIHNyYz17Ym90dG9tLmljb259XG4gICAgICAgICAgICAgICAgYWx0PVwibGluayB0byBjb250YWN0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIm1vdGlvbiIsIk5hdiIsIm1pZGRsZSIsInRvcCIsImJvdHRvbSIsInRvZ2dsZU5hdiIsInNldFRvZ2dsZU5hdiIsImhhbmRsZU5hdkNsaWNrIiwiZSIsIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJub2RlcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImluaXRpYWwiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJocmVmIiwicGF0aCIsImltZyIsInNyYyIsImljb24iLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.tsx\n");

/***/ })

});