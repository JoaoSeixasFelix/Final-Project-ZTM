"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/homepage.tsx":
/*!********************************!*\
  !*** ./src/pages/homepage.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BodyHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BodyHomePage */ \"./src/components/BodyHomePage.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Particles */ \"./src/components/Particles.tsx\");\n/* harmony import */ var _components_RankDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RankDescription */ \"./src/components/RankDescription.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), user = ref[0], setUser = ref[1];\n    _services_api__WEBPACK_IMPORTED_MODULE_6__.api.get(\"/\").then(function(resp) {\n        var data = resp.data;\n        console.log(data);\n    }).catch(function(err) {\n        return console.log(err);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Particles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 h-1/5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__.NavBar, {}, void 0, false, {\n                    fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-4/5 overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex z-50 justify-center items-end h-2/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RankDescription__WEBPACK_IMPORTED_MODULE_5__.RankDescription, {\n                            name: \"Pedro\",\n                            rank: 1\n                        }, void 0, false, {\n                            fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col z-20 justify-center lg:mt-28 items-center h-4/5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mb-16 lg:text-xl text-sm\",\n                                children: \"This magic app will describe some aspects in your photo. Fit it a try.\"\n                            }, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BodyHomePage__WEBPACK_IMPORTED_MODULE_2__.BodyHomePage, {}, void 0, false, {\n                                fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joaopaulo/Desktop/Final Project - ZTM/Final-Project-ZTM/src/pages/homepage.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0U7QUFDVjtBQUNaO0FBQ1U7QUFDUTtBQUMxQjs7QUFFdEMsSUFBTU0sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQXdCTixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUnRDLElBUWEsR0FBYUEsR0FBWSxHQUF6QixFQVJiLE9BUXNCLEdBQUlBLEdBQVksR0FBaEI7SUFFcEJLLGtEQUNNLENBQUMsR0FBRyxDQUFDLENBQ1JLLElBQUksQ0FBQyxTQUFDQyxJQUFJLEVBQUs7UUFDZCxJQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0MsSUFBSTtRQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztLQUNqQixDQUFDLENBQ0RHLEtBQUssQ0FBQyxTQUFDQyxHQUFHO2VBQUtILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFcEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDhIQUErSDs7MEJBQzVJLDhEQUFDZiw2REFBaUI7Ozs7cUJBQUc7MEJBQ3JCLDhEQUFDYyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTswQkFDekIsNEVBQUNoQixzREFBTTs7Ozt5QkFBRzs7Ozs7cUJBQ047MEJBQ04sOERBQUNlLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7O2tDQUNwQyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBDQUEwQztrQ0FDdkQsNEVBQUNkLHdFQUFlOzRCQUFDZSxJQUFJLEVBQUMsT0FBTzs0QkFBQ0MsSUFBSSxFQUFFLENBQUM7Ozs7O2lDQUFJOzs7Ozs2QkFDckM7a0NBQ04sOERBQUNILEtBQUc7d0JBQUNDLFNBQVMsRUFBQywrREFBK0Q7OzBDQUM1RSw4REFBQ0csR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLHFDQUFxQzswQ0FBQyx3RUFHbkQ7Ozs7O3FDQUFJOzBDQUNKLDhEQUFDakIsa0VBQVk7Ozs7cUNBQUc7Ozs7Ozs2QkFDWjs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0EvQktLLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWlDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lcGFnZS50c3g/YTA2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb2R5SG9tZVBhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb2R5SG9tZVBhZ2VcIjtcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xuaW1wb3J0IFBhcnRpY2xlc0hvbWVQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhcnRpY2xlc1wiO1xuaW1wb3J0IHsgUmFua0Rlc2NyaXB0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUmFua0Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgYXBpXG4gICAgLmdldChcIi9cIilcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHJlc3AuZGF0YTtcbiAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLWdyYWRpZW50LXRvLWJsIGZyb20tZnVjaHNpYS05MDAgdG8tYmx1ZS00MDAgIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxQYXJ0aWNsZXNIb21lUGFnZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGgtMS81XCI+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQvNSBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHotNTAganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kIGgtMi81XCI+XG4gICAgICAgICAgPFJhbmtEZXNjcmlwdGlvbiBuYW1lPVwiUGVkcm9cIiByYW5rPXsxfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHotMjAganVzdGlmeS1jZW50ZXIgbGc6bXQtMjggaXRlbXMtY2VudGVyIGgtNC81XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0xNiBsZzp0ZXh0LXhsIHRleHQtc21cIj5cbiAgICAgICAgICAgIFRoaXMgbWFnaWMgYXBwIHdpbGwgZGVzY3JpYmUgc29tZSBhc3BlY3RzIGluIHlvdXIgcGhvdG8uIEZpdCBpdCBhXG4gICAgICAgICAgICB0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxCb2R5SG9tZVBhZ2UgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm9keUhvbWVQYWdlIiwiTmF2QmFyIiwiUGFydGljbGVzSG9tZVBhZ2UiLCJSYW5rRGVzY3JpcHRpb24iLCJhcGkiLCJIb21lUGFnZSIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsInJhbmsiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/homepage.tsx\n");

/***/ })

});