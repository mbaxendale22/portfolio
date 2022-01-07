"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendgrid";
exports.ids = ["pages/api/sendgrid"];
exports.modules = {

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "./pages/api/sendgrid.jsx":
/*!********************************!*\
  !*** ./pages/api/sendgrid.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\n/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0__);\n\n_sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().setApiKey('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');\nasync function sendEmail(req, res) {\n    try {\n        await _sendgrid_mail__WEBPACK_IMPORTED_MODULE_0___default().send({\n            to: \"mdbaxendale1@gmail.com\",\n            from: \"mdbaxendale1@gmail.com\",\n            subject: `${req.body.subject}`,\n            html: `${req.body.message}`\n        });\n    } catch (error) {\n        console.log('not working', error);\n        return res.status(error.statusCode || 500).json({\n            error: error.message\n        });\n    }\n    return res.status(200).json({\n        error: \"\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2VuZGdyaWQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUVyQ0EsK0RBQWtCLENBQUMsQ0FBdUU7ZUFFM0VFLFNBQVMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxHQUFHLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQ0osMERBQWEsQ0FBQyxDQUFDO1lBQ25CTSxFQUFFLEVBQUUsQ0FBd0I7WUFDNUJDLElBQUksRUFBRSxDQUF3QjtZQUM5QkMsT0FBTyxLQUFLTCxHQUFHLENBQUNNLElBQUksQ0FBQ0QsT0FBTztZQUM1QkUsSUFBSSxLQUFLUCxHQUFHLENBQUNNLElBQUksQ0FBQ0UsT0FBTztRQUMzQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYSxjQUFFRixLQUFLO1FBQ2hDLE1BQU0sQ0FBQ1IsR0FBRyxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksVUFBVSxJQUFJLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0wsS0FBSyxFQUFFQSxLQUFLLENBQUNELE9BQU87UUFBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxNQUFNLENBQUNQLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUUsSUFBSSxDQUFDLENBQUM7UUFBQ0wsS0FBSyxFQUFFLENBQUU7SUFBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxpRUFBZVYsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvYXBpL3NlbmRncmlkLmpzeD8yOTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZW5kZ3JpZCBmcm9tIFwiQHNlbmRncmlkL21haWxcIjtcblxuc2VuZGdyaWQuc2V0QXBpS2V5KCdTRy5mbElMaVJRVFR2Q29zQWpZT0dITUFnLnFBU29lTGllamJ2UDVJSV9oTGZQd0hLT19PazVCdElfX3I5Q1ZuWTUtbUknKTtcblxuYXN5bmMgZnVuY3Rpb24gc2VuZEVtYWlsKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG5cbiAgICBhd2FpdCBzZW5kZ3JpZC5zZW5kKHtcbiAgICAgIHRvOiBcIm1kYmF4ZW5kYWxlMUBnbWFpbC5jb21cIiwgLy8gWW91ciBlbWFpbCB3aGVyZSB5b3UnbGwgcmVjZWl2ZSBlbWFpbHNcbiAgICAgIGZyb206IFwibWRiYXhlbmRhbGUxQGdtYWlsLmNvbVwiLCAvLyB5b3VyIHdlYnNpdGUgZW1haWwgYWRkcmVzcyBoZXJlXG4gICAgICBzdWJqZWN0OiBgJHtyZXEuYm9keS5zdWJqZWN0fWAsXG4gICAgICBodG1sOiBgJHtyZXEuYm9keS5tZXNzYWdlfWAsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ25vdCB3b3JraW5nJywgZXJyb3IpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBlcnJvcjogXCJcIiB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZEVtYWlsOyJdLCJuYW1lcyI6WyJzZW5kZ3JpZCIsInNldEFwaUtleSIsInNlbmRFbWFpbCIsInJlcSIsInJlcyIsInNlbmQiLCJ0byIsImZyb20iLCJzdWJqZWN0IiwiYm9keSIsImh0bWwiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/sendgrid.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/sendgrid.jsx"));
module.exports = __webpack_exports__;

})();