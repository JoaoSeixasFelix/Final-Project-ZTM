"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./src/pages/signin.tsx":
/*!******************************!*\
  !*** ./src/pages/signin.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_joao_Desktop_Final_Project_ZTM_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_joao_Desktop_Final_Project_ZTM_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_joao_Desktop_Final_Project_ZTM_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_NavBarIcons_strategy_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/NavBarIcons/strategy-svgrepo-com.svg */ \"./public/NavBarIcons/strategy-svgrepo-com.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/UserContext */ \"./src/contexts/UserContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SignIn = function() {\n    _s();\n    var login = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__.useUser)().login;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function() {\n        var _ref = _asyncToGenerator(_home_joao_Desktop_Final_Project_ZTM_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response, _user, id, name, entries, email1, joined, token;\n            return _home_joao_Desktop_Final_Project_ZTM_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        if (!(email.length === 0)) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert(\"Email or password is invalid.\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_8__.api.post(\"/signin\", {\n                            email: email,\n                            password: password\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        if (response.status === 200) {\n                            _user = response.data.user, id = _user.id, name = _user.name, entries = _user.entries, email1 = _user.email, joined = _user.joined;\n                            token = response.data.token.token;\n                            login({\n                                id: id,\n                                name: name,\n                                entries: entries,\n                                email: email1,\n                                joined: joined,\n                                token: token\n                            }); // Aqui você está usando o método login do contexto para salvar o token nos cookies.\n                            next_router__WEBPACK_IMPORTED_MODULE_10___default().push(\"/homepage\");\n                        } else {\n                            alert(\"Erro ao fazer login. Por favor, tente novamente.\");\n                        }\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    11\n                ]\n            ]);\n        }));\n        return function(e) {\n            return _ref.apply(this, arguments);\n        };\n    }(), [\n        email,\n        password,\n        login\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-start h-1/5 mt-4 ml-6 mr-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _public_NavBarIcons_strategy_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    width: 100,\n                    height: 100\n                }, void 0, false, {\n                    fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center mt-16 h-4/5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex items-end h-1/6 w-full mb-6 text-white text-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"flex w-full h-full justify-center\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \" bg-indigo-400 bg-opacity-40 -mt-10 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-md rounded px-6 pt-6 pb-8 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Login\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                        onValueChange: function(e) {\n                                            return setEmail(e);\n                                        },\n                                        name: \"login\",\n                                        placeholder: \" Inform your email\",\n                                        type: \"email\",\n                                        value: email,\n                                        borderColor: \"border-slate-500\",\n                                        width: \"xl:w-96 lg:w-96 w-60\",\n                                        padding: \"py-3\",\n                                        bgColor: \"white\",\n                                        textColor: \"white\",\n                                        marginBottom: \"mb-3\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Password\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                        onValueChange: function(e) {\n                                            return setPassword(e);\n                                        },\n                                        name: \"password\",\n                                        placeholder: \" **********\",\n                                        type: \"password\",\n                                        value: password,\n                                        borderColor: \"border-slate-500\",\n                                        width: \"xl:w-96 lg:w-96 w-60\",\n                                        padding: \"py-3\",\n                                        bgColor: \"white\",\n                                        textColor: \"white\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mt-5 flex flex-col items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"text-sm\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/forgotpassword\",\n                                            children: \"Forgot Password?\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        type: \"submit\",\n                                        width: \"xl:w-44 lg:w-44 w-60\",\n                                        backGroundColor: \"bg-purple-900\",\n                                        textColor: \"text-white\",\n                                        padding: \"py-2 px-4\",\n                                        marginTop: \"lg:mt-0 mt-1\",\n                                        marginLeft: \"lg:ml-4\",\n                                        effects: \"rounded hover:bg-purple-900\",\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex bg-indigo-400 bg-opacity-50 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-lg\",\n                                children: \"New?\"\n                            }, void 0, false, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/signup\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"m-1 text-white no-underline hover:underline text-lg\",\n                                    children: \"Create an account.\"\n                                }, void 0, false, {\n                                    fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/signin.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_s(SignIn, \"my9vqngKJXmRgbGe7tFjMVB6n2M=\", false, function() {\n    return [\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__.useUser\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn);\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDbEIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7a0RBQzlDLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsU0FBUztrREFDdEIsNEVBQUNoQyxrREFBSTs0Q0FBQ2tELElBQUksRUFBRSxpQkFBaUI7c0RBQUUsa0JBQWdCOzs7OztpREFBTzs7Ozs7NkNBQ2xEO2tEQUNOLDhEQUFDOUMsc0RBQU07d0NBQ0xzQyxJQUFJLEVBQUUsUUFBUTt3Q0FDZFIsS0FBSyxFQUFDLHNCQUFzQjt3Q0FDNUJpQixlQUFlLEVBQUMsZUFBZTt3Q0FDL0JKLFNBQVMsRUFBQyxZQUFZO3dDQUN0QkYsT0FBTyxFQUFDLFdBQVc7d0NBQ25CTyxTQUFTLEVBQUMsY0FBYzt3Q0FDeEJDLFVBQVUsRUFBQyxTQUFTO3dDQUNwQkMsT0FBTyxFQUFDLDZCQUE2QjtrREFDdEMsU0FFRDs7Ozs7NkNBQVM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNEO2tDQUNQLDhEQUFDdkIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHNHQUFzRzs7MENBQ25ILDhEQUFDSSxHQUFDO2dDQUFDSixTQUFTLEVBQUMsU0FBUzswQ0FBQyxNQUFJOzs7OztxQ0FBSTswQ0FDL0IsOERBQUNoQyxrREFBSTtnQ0FBQ2tELElBQUksRUFBRSxTQUFTOzBDQUNuQiw0RUFBQ0ssR0FBQztvQ0FBQ3ZCLFNBQVMsRUFBQyxxREFBcUQ7OENBQUMsb0JBRW5FOzs7Ozt5Q0FBSTs7Ozs7cUNBQ0M7Ozs7Ozs2QkFDSDs7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0EvR0t2QixNQUFNOztRQUNRRiwwREFBTzs7O0FBRHJCRSxLQUFBQSxNQUFNO0FBaUhaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpZ25pbi50c3g/ZTY0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi8uLi9wdWJsaWMvTmF2QmFySWNvbnMvc3RyYXRlZ3ktc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xuICBjb25zdCB7IGxvZ2luIH0gPSB1c2VVc2VyKCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFsZXJ0KFwiRW1haWwgb3IgcGFzc3dvcmQgaXMgaW52YWxpZC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwiL3NpZ25pblwiLCB7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW50cmllcywgZW1haWwsIGpvaW5lZH0gPSByZXNwb25zZS5kYXRhLnVzZXI7XG4gICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgICBsb2dpbih7IGlkLCBuYW1lLCBlbnRyaWVzLCBlbWFpbCwgam9pbmVkLCB0b2tlbiB9KTsgLy8gQXF1aSB2b2PDqiBlc3TDoSB1c2FuZG8gbyBtw6l0b2RvIGxvZ2luIGRvIGNvbnRleHRvIHBhcmEgc2FsdmFyIG8gdG9rZW4gbm9zIGNvb2tpZXMuXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvaG9tZXBhZ2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIGZhemVyIGxvZ2luLiBQb3IgZmF2b3IsIHRlbnRlIG5vdmFtZW50ZS5cIik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyAuLi5cbiAgICAgIH1cbiAgICB9LFxuICAgIFtlbWFpbCwgcGFzc3dvcmQsIGxvZ2luXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1mdWNoc2lhLTkwMCB0by1ibHVlLTQwMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1zdGFydCBoLTEvNSBtdC00IG1sLTYgbXItNlwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtJY29ufSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG10LTE2IGgtNC81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgaC0xLzYgdy1mdWxsIG1iLTYgdGV4dC13aGl0ZSB0ZXh0LTN4bFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtZnVsbCBqdXN0aWZ5LWNlbnRlclwiPlNpZ24gSW48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLWluZGlnby00MDAgYmctb3BhY2l0eS00MCAtbXQtMTAgdGV4dC1ibGFjayBiZy1jbGlwLXBhZGRpbmcgYmFja2Ryb3AtYmx1ci0zeGwgYmctdHJhbnNwYXJlbnQgc2hhZG93LW1kIHJvdW5kZWQgcHgtNiBwdC02IHBiLTggbWItNFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlKX1cbiAgICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgIEluZm9ybSB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYm9yZGVyLXNsYXRlLTUwMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwieGw6dy05NiBsZzp3LTk2IHctNjBcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwicHktM1wiXG4gICAgICAgICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPVwibWItM1wiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiICAqKioqKioqKioqXCJcbiAgICAgICAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiYm9yZGVyLXNsYXRlLTUwMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwieGw6dy05NiBsZzp3LTk2IHctNjBcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwicHktM1wiXG4gICAgICAgICAgICAgIGJnQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9mb3Jnb3RwYXNzd29yZFwifT5Gb3Jnb3QgUGFzc3dvcmQ/PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9e1wic3VibWl0XCJ9XG4gICAgICAgICAgICAgIHdpZHRoPVwieGw6dy00NCBsZzp3LTQ0IHctNjBcIlxuICAgICAgICAgICAgICBiYWNrR3JvdW5kQ29sb3I9XCJiZy1wdXJwbGUtOTAwXCJcbiAgICAgICAgICAgICAgdGV4dENvbG9yPVwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIHBhZGRpbmc9XCJweS0yIHB4LTRcIlxuICAgICAgICAgICAgICBtYXJnaW5Ub3A9XCJsZzptdC0wIG10LTFcIlxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0PVwibGc6bWwtNFwiXG4gICAgICAgICAgICAgIGVmZmVjdHM9XCJyb3VuZGVkIGhvdmVyOmJnLXB1cnBsZS05MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctaW5kaWdvLTQwMCBiZy1vcGFjaXR5LTUwIGp1c3RpZnktY2VudGVyIHhsOnctZnVsbCBsZzp3LXctZnVsbCB3LTcyIHJvdW5kZWQgcHktMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+TmV3PzwvcD5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9zaWdudXBcIn0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtLTEgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgaG92ZXI6dW5kZXJsaW5lIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIGFuIGFjY291bnQuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkljb24iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiQnV0dG9uIiwiSW5wdXQiLCJhcGkiLCJ1c2VVc2VyIiwiUm91dGVyIiwiU2lnbkluIiwibG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXNwb25zZSIsImlkIiwibmFtZSIsImVudHJpZXMiLCJqb2luZWQiLCJ0b2tlbiIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiYWxlcnQiLCJwb3N0Iiwic3RhdHVzIiwiZGF0YSIsInVzZXIiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJvblZhbHVlQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiLCJib3JkZXJDb2xvciIsInBhZGRpbmciLCJiZ0NvbG9yIiwidGV4dENvbG9yIiwibWFyZ2luQm90dG9tIiwicmVxdWlyZWQiLCJocmVmIiwiYmFja0dyb3VuZENvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImVmZmVjdHMiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/signin.tsx\n");

/***/ })

});