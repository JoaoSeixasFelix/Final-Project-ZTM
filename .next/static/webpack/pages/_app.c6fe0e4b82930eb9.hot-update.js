"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/UserContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/UserContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; },\n/* harmony export */   \"useUser\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);\n    var login = function(userData) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/homepage\");\n    };\n    var signUp = function(userData) {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/homepage\");\n    };\n    var logout = function() {\n        setUser(null);\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(null, \"auth.token\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user: user,\n            login: login,\n            signUp: signUp,\n            logout: logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/contexts/UserContext.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserProvider, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = UserProvider;\nvar useUser = function() {\n    _s1();\n    var context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (!context) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n};\n_s1(useUser, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBeUY7QUFFM0I7QUFDN0I7O0FBa0JqQyxJQUFNUSxXQUFXLGlCQUFHUCxvREFBYSxDQUE4QlEsU0FBUyxDQUFDO0FBTWxFLElBQU1DLFlBQVksR0FBZ0MsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbEUsSUFBd0JSLEdBQTJCLEdBQTNCQSwrQ0FBUSxDQUFjLElBQUksQ0FBQyxFQTVCckQsSUE0QmEsR0FBYUEsR0FBMkIsR0FBeEMsRUE1QmIsT0E0QnNCLEdBQUlBLEdBQTJCLEdBQS9CO0lBRXBCQyxnREFBUyxDQUFDLFdBQU0sRUFDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTVUsS0FBSyxHQUFHLFNBQUNDLFFBQWMsRUFBSztRQUNoQ1Ysa0RBQVMsQ0FBQ0ksU0FBUyxFQUFFLFlBQVksRUFBRU0sUUFBUSxDQUFDQyxLQUFLLEVBQUU7WUFDakRDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkJDLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQyxDQUFDO1FBQ0hMLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQUM7UUFDbEJSLHVEQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDMUI7SUFFRCxJQUFNYSxNQUFNLEdBQUcsU0FBQ0wsUUFBYyxFQUFLO1FBQ2pDVixrREFBUyxDQUFDSSxTQUFTLEVBQUUsWUFBWSxFQUFFTSxRQUFRLENBQUNDLEtBQUssRUFBRTtZQUNqREMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuQkMsSUFBSSxFQUFFLEdBQUc7U0FDVixDQUFDLENBQUM7UUFDSEwsT0FBTyxDQUFDRSxRQUFRLENBQUMsQ0FBQztRQUNsQlIsdURBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMxQjtJQUVELElBQU1jLE1BQU0sR0FBRyxXQUFNO1FBQ25CUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZFAsc0RBQWEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDbkM7SUFFRCxxQkFDRSw4REFBQ0UsV0FBVyxDQUFDYyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFWCxJQUFJLEVBQUpBLElBQUk7WUFBRUUsS0FBSyxFQUFMQSxLQUFLO1lBQUVNLE1BQU0sRUFBTkEsTUFBTTtZQUFFQyxNQUFNLEVBQU5BLE1BQU07U0FBRTtrQkFDekRWLFFBQVE7Ozs7O2FBQ1ksQ0FDdkI7Q0FDSCxDQUFDO0dBbENXRCxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFvQ2xCLElBQU1jLE9BQU8sR0FBRyxXQUF1Qjs7SUFDNUMsSUFBTUMsT0FBTyxHQUFHdkIsaURBQVUsQ0FBQ00sV0FBVyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ2lCLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPRCxPQUFPLENBQUM7Q0FDaEIsQ0FBQztJQU5XRCxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9Vc2VyQ29udGV4dC50c3g/NWVlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQge3BhcnNlQ29va2llcywgc2V0Q29va2llLCBkZXN0cm95Q29va2llfSBmcm9tICdub29raWVzJ1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxudHlwZSBVc2VyID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudHJpZXM6IG51bWJlcjtcbiAgZW1haWw6IHN0cmluZztcbiAgam9pbmVkOiBEYXRlO1xuICB0b2tlbjogc3RyaW5nO1xufTtcblxudHlwZSBVc2VyQ29udGV4dFR5cGUgPSB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBsb2dpbjogKHVzZXJEYXRhOiBVc2VyKSA9PiB2b2lkO1xuICBzaWduVXA6ICh1c2VyRGF0YTogVXNlcikgPT4gdm9pZDtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFVzZXJDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxudHlwZSBVc2VyUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXI6IFJlYWN0LkZDPFVzZXJQcm92aWRlclByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhOiBVc2VyKSA9PiB7XG4gICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ2F1dGgudG9rZW4nLCB1c2VyRGF0YS50b2tlbiwge1xuICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSxcbiAgICAgIHBhdGg6ICcvJ1xuICAgIH0pO1xuICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgIFJvdXRlci5wdXNoKFwiL2hvbWVwYWdlXCIpO1xuICB9O1xuICBcbiAgY29uc3Qgc2lnblVwID0gKHVzZXJEYXRhOiBVc2VyKSA9PiB7XG4gICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ2F1dGgudG9rZW4nLCB1c2VyRGF0YS50b2tlbiwge1xuICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSxcbiAgICAgIHBhdGg6ICcvJ1xuICAgIH0pO1xuICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgIFJvdXRlci5wdXNoKFwiL2hvbWVwYWdlXCIpO1xuICB9O1xuICBcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIobnVsbCk7XG4gICAgZGVzdHJveUNvb2tpZShudWxsLCAnYXV0aC50b2tlbicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luLCBzaWduVXAsIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXIgPSAoKTogVXNlckNvbnRleHRUeXBlID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZXRDb29raWUiLCJkZXN0cm95Q29va2llIiwiUm91dGVyIiwiVXNlckNvbnRleHQiLCJ1bmRlZmluZWQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9naW4iLCJ1c2VyRGF0YSIsInRva2VuIiwibWF4QWdlIiwicGF0aCIsInB1c2giLCJzaWduVXAiLCJsb2dvdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVXNlciIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/UserContext.tsx\n");

/***/ })

});