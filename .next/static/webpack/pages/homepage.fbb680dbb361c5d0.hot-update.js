"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./src/pages/homepage.tsx":
/*!********************************!*\
  !*** ./src/pages/homepage.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BodyHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BodyHomePage */ \"./src/components/BodyHomePage.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Particles */ \"./src/components/Particles.tsx\");\n/* harmony import */ var _components_RankDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RankDescription */ \"./src/components/RankDescription.tsx\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/UserContext */ \"./src/contexts/UserContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_6__.useUser)(), contextUser = ref.user, login = ref.login, logout = ref.logout;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(contextUser), user = ref1[0], setUser = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // Verificar se há um token de autenticação salvo nos cookies\n        var cookies = parseCookies();\n        var savedToken = cookies[\"auth.token\"];\n        if (savedToken) {\n            // Se houver um token, fazer uma requisição ao servidor para obter os dados do usuário\n            _services_api__WEBPACK_IMPORTED_MODULE_7__.api.post(\"/verifyToken\").then(function(response) {\n                // Atualizar o estado do usuário com os dados obtidos do servidor\n                login(response.data.user);\n            }).catch(function(error) {\n                // Se a verificação do token falhar, fazer logout\n                logout();\n            });\n        } else {\n            // Se não houver um token, realizar o logout\n            logout();\n        }\n    }, [\n        login\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Particles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 h-1/5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__.NavBar, {}, void 0, false, {\n                    fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col h-full overflow-y-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex z-50 justify-center mt-5 items-end h-2/5\",\n                        children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RankDescription__WEBPACK_IMPORTED_MODULE_5__.RankDescription, {\n                            name: user === null || user === void 0 ? void 0 : user.name,\n                            rank: user === null || user === void 0 ? void 0 : user.entries\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col z-20 justify-center lg:mt-28 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white mt-10 lg:text-xl text-sm\",\n                                children: \"This magic app will describe some aspects in your photo. Fit it a try.\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BodyHomePage__WEBPACK_IMPORTED_MODULE_2__.BodyHomePage, {}, void 0, false, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/homepage.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"6cO78VRfjU28zTsI4E+lmpjfFlU=\", false, function() {\n    return [\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_6__.useUser\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZXBhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2M7QUFDWjtBQUNVO0FBQ1E7QUFDZDtBQUNaOztBQUV0QyxJQUFNUSxRQUFRLEdBQUcsV0FBTTs7SUFDckIsSUFBNkNGLEdBQVMsR0FBVEEsOERBQU8sRUFBRSxFQUE5Q0csV0FBaUIsR0FBb0JILEdBQVMsQ0FBOUNHLElBQUksRUFBZUUsS0FBSyxHQUFhTCxHQUFTLENBQTNCSyxLQUFLLEVBQUVDLE1BQU0sR0FBS04sR0FBUyxDQUFwQk0sTUFBTTtJQUN4QyxJQUF3QlgsSUFBcUIsR0FBckJBLCtDQUFRLENBQUNTLFdBQVcsQ0FBQyxFQVYvQyxJQVVhLEdBQWFULElBQXFCLEdBQWxDLEVBVmIsT0FVc0IsR0FBSUEsSUFBcUIsR0FBekI7SUFFcEJELGdEQUFTLENBQUMsV0FBTTtRQUNkO1FBQ0csSUFBR2MsT0FBTyxHQUFHQyxZQUFZLEVBQUU7UUFDOUIsSUFBTUMsVUFBVSxHQUFHRixPQUFPLENBQUMsWUFBWSxDQUFDO1FBRXhDLElBQUlFLFVBQVUsRUFBRTtZQUNkO1lBQ0dULG1EQUFLLENBQUMsY0FBYyxDQUFDLENBQ3JCVyxJQUFJLENBQUNDLFNBQUFBLFFBQVEsRUFBSTtnQkFDaEI7Z0JBQ0NSLEtBQUksQ0FBQ1EsUUFBUSxDQUFDQyxJQUFJLENBQUNYLElBQUksQ0FBQyxDQUFDO2FBQzNCLENBQUMsQ0FDRFksS0FBSyxDQUFDQyxTQUFBQSxLQUFLLEVBQUk7Z0JBQ2Q7Z0JBQ0VWLE1BQUksRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ04sTUFBTTtZQUNMO1lBQ0FBLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7S0FDRixFQUFFO1FBQUNELEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFWixxQkFDRSw4REFBQ1ksS0FBRztRQUFDQyxTQUFTLEVBQUMsNkhBQTZIOzswQkFDMUksOERBQUNwQiw2REFBaUI7Ozs7cUJBQUc7MEJBQ3JCLDhEQUFDbUIsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQ3pCLDRFQUFDckIsc0RBQU07Ozs7eUJBQUc7Ozs7O3FCQUNOOzBCQUNOLDhEQUFDb0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNDQUFzQzs7a0NBQ25ELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0NBQStDO2tDQUMzRGYsSUFBSSxrQkFDSCw4REFBQ0osd0VBQWU7NEJBQUNvQixJQUFJLEVBQUVoQixJQUFJLGFBQUpBLElBQUksV0FBTSxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLElBQUksQ0FBRWdCLElBQUk7NEJBQUVDLElBQUksRUFBRWpCLElBQUksYUFBSkEsSUFBSSxXQUFTLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsSUFBSSxDQUFFa0IsT0FBTzs7Ozs7aUNBQUk7Ozs7OzZCQUV4RDtrQ0FDTiw4REFBQ0osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHlEQUF5RDs7MENBQ3RFLDhEQUFDSSxHQUFDO2dDQUFDSixTQUFTLEVBQUMscUNBQXFDOzBDQUFDLHdFQUduRDs7Ozs7cUNBQUk7MENBQ0osOERBQUN0QixrRUFBWTs7OztxQ0FBRzs7Ozs7OzZCQUNaOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWhES00sUUFBUTs7UUFDaUNGLDBEQUFPOzs7QUFEaERFLEtBQUFBLFFBQVE7QUFrRGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaG9tZXBhZ2UudHN4P2EwNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm9keUhvbWVQYWdlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9keUhvbWVQYWdlXCI7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBQYXJ0aWNsZXNIb21lUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJ0aWNsZXNcIjtcbmltcG9ydCB7IFJhbmtEZXNjcmlwdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1JhbmtEZXNjcmlwdGlvblwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyB1c2VyOiBjb250ZXh0VXNlciwgbG9naW4sIGxvZ291dCB9ID0gdXNlVXNlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShjb250ZXh0VXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBWZXJpZmljYXIgc2UgaMOhIHVtIHRva2VuIGRlIGF1dGVudGljYcOnw6NvIHNhbHZvIG5vcyBjb29raWVzXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xuICAgIGNvbnN0IHNhdmVkVG9rZW4gPSBjb29raWVzWydhdXRoLnRva2VuJ107XG4gICAgXG4gICAgaWYgKHNhdmVkVG9rZW4pIHtcbiAgICAgIC8vIFNlIGhvdXZlciB1bSB0b2tlbiwgZmF6ZXIgdW1hIHJlcXVpc2nDp8OjbyBhbyBzZXJ2aWRvciBwYXJhIG9idGVyIG9zIGRhZG9zIGRvIHVzdcOhcmlvXG4gICAgICBhcGkucG9zdChcIi92ZXJpZnlUb2tlblwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gQXR1YWxpemFyIG8gZXN0YWRvIGRvIHVzdcOhcmlvIGNvbSBvcyBkYWRvcyBvYnRpZG9zIGRvIHNlcnZpZG9yXG4gICAgICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YS51c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBTZSBhIHZlcmlmaWNhw6fDo28gZG8gdG9rZW4gZmFsaGFyLCBmYXplciBsb2dvdXRcbiAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNlIG7Do28gaG91dmVyIHVtIHRva2VuLCByZWFsaXphciBvIGxvZ291dFxuICAgICAgbG9nb3V0KCk7XG4gICAgfVxuICB9LCBbbG9naW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1mdWNoc2lhLTkwMCB0by1ibHVlLTQwMCBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICA8UGFydGljbGVzSG9tZVBhZ2UgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBoLTEvNVwiPlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB6LTUwIGp1c3RpZnktY2VudGVyIG10LTUgaXRlbXMtZW5kIGgtMi81XCI+XG4gICAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgICAgPFJhbmtEZXNjcmlwdGlvbiBuYW1lPXt1c2VyPy5uYW1lfSByYW5rPXt1c2VyPy5lbnRyaWVzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgei0yMCBqdXN0aWZ5LWNlbnRlciBsZzptdC0yOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG10LTEwIGxnOnRleHQteGwgdGV4dC1zbVwiPlxuICAgICAgICAgICAgVGhpcyBtYWdpYyBhcHAgd2lsbCBkZXNjcmliZSBzb21lIGFzcGVjdHMgaW4geW91ciBwaG90by4gRml0IGl0IGFcbiAgICAgICAgICAgIHRyeS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEJvZHlIb21lUGFnZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm9keUhvbWVQYWdlIiwiTmF2QmFyIiwiUGFydGljbGVzSG9tZVBhZ2UiLCJSYW5rRGVzY3JpcHRpb24iLCJ1c2VVc2VyIiwiYXBpIiwiSG9tZVBhZ2UiLCJ1c2VyIiwiY29udGV4dFVzZXIiLCJsb2dpbiIsImxvZ291dCIsInNldFVzZXIiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwic2F2ZWRUb2tlbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsIm5hbWUiLCJyYW5rIiwiZW50cmllcyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/homepage.tsx\n");

/***/ })

});