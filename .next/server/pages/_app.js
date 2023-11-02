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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/UserContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/UserContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst UserProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"auth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/verifyToken\").then((response)=>{\n                setUser(response.data.user);\n            }).catch((error)=>{\n                logout();\n            });\n        }\n    }, []);\n    const login = (userData)=>{\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/homepage\");\n    };\n    const signUp = (userData)=>{\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/homepage\");\n    };\n    const logout = async ()=>{\n        setUser(null);\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, \"auth.token\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            login,\n            signUp,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/contexts/UserContext.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (!context) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUY7QUFDdkQ7QUFDNEI7QUFDN0I7QUFrQmpDLE1BQU1VLFdBQVcsaUJBQUdULG9EQUFhLENBQThCVSxTQUFTLENBQUM7QUFNbEUsTUFBTUMsWUFBWSxHQUFnQyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3pFLE1BQU0sRUE1QlIsR0E0QlNDLElBQUksR0E1QmIsR0E0QmVDLE9BQU8sTUFBSVosK0NBQVEsQ0FBYyxJQUFJLENBQUM7SUFFbkRDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRSxZQUFZLEVBQUVZLEtBQUssR0FBRSxHQUFHVixxREFBWSxFQUFFO1FBQzlDLElBQUlVLEtBQUssRUFBRTtZQUNUWCwwREFBUSxDQUFDLGNBQWMsQ0FBQyxDQUN2QmEsSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUk7Z0JBQ2RKLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FDRE8sS0FBSyxDQUFDQyxDQUFBQSxLQUFLLEdBQUk7Z0JBQ2RDLE1BQU0sRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ047S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUMsS0FBSyxHQUFHLENBQUNDLFFBQWMsR0FBSztRQUNoQ2xCLGtEQUFTLENBQUNJLFNBQVMsRUFBRSxZQUFZLEVBQUVjLFFBQVEsQ0FBQ1QsS0FBSyxFQUFFO1lBQ2pEVSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25CQyxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUMsQ0FBQztRQUNIWixPQUFPLENBQUNVLFFBQVEsQ0FBQyxDQUFDO1FBQ2xCaEIsdURBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMxQjtJQUVELE1BQU1vQixNQUFNLEdBQUcsQ0FBQ0osUUFBYyxHQUFLO1FBQ2pDbEIsa0RBQVMsQ0FBQ0ksU0FBUyxFQUFFLFlBQVksRUFBRWMsUUFBUSxDQUFDVCxLQUFLLEVBQUU7WUFDakRVLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkJDLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQyxDQUFDO1FBQ0haLE9BQU8sQ0FBQ1UsUUFBUSxDQUFDLENBQUM7UUFDbEJoQix1REFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFCO0lBRUQsTUFBTWMsTUFBTSxHQUFHLFVBQTJCO1FBQ3hDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZFAsc0RBQWEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDbkM7SUFFRCxxQkFDRSw4REFBQ0UsV0FBVyxDQUFDb0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWpCLElBQUk7WUFBRVUsS0FBSztZQUFFSyxNQUFNO1lBQUVOLE1BQU07U0FBRTtrQkFDekRWLFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0gsQ0FBQztBQUVLLE1BQU1tQixPQUFPLEdBQUcsSUFBdUI7SUFDNUMsTUFBTUMsT0FBTyxHQUFHL0IsaURBQVUsQ0FBQ1EsV0FBVyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ3VCLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPRCxPQUFPLENBQUM7Q0FDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLXByb2plY3QtenRtLy4vc3JjL2NvbnRleHRzL1VzZXJDb250ZXh0LnRzeD81ZWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IHtwYXJzZUNvb2tpZXMsIHNldENvb2tpZSwgZGVzdHJveUNvb2tpZX0gZnJvbSAnbm9va2llcydcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBlbnRyaWVzOiBudW1iZXI7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGpvaW5lZDogRGF0ZTtcbiAgdG9rZW46IHN0cmluZztcbn07XG5cbnR5cGUgVXNlckNvbnRleHRUeXBlID0ge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgbG9naW46ICh1c2VyRGF0YTogVXNlcikgPT4gdm9pZDtcbiAgc2lnblVwOiAodXNlckRhdGE6IFVzZXIpID0+IHZvaWQ7XG4gIGxvZ291dDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn07XG5cbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbnR5cGUgVXNlclByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyOiBSZWFjdC5GQzxVc2VyUHJvdmlkZXJQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgJ2F1dGgudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBhcGkucG9zdChcIi92ZXJpZnlUb2tlblwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YS51c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBsb2dvdXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuICBjb25zdCBsb2dpbiA9ICh1c2VyRGF0YTogVXNlcikgPT4ge1xuICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdhdXRoLnRva2VuJywgdXNlckRhdGEudG9rZW4sIHtcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDEsIC8vIDEgaG91ciBpbiBzZWNvbmRzXG4gICAgICBwYXRoOiAnLydcbiAgICB9KTtcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcbiAgICBSb3V0ZXIucHVzaChcIi9ob21lcGFnZVwiKTtcbiAgfTtcbiAgXG4gIGNvbnN0IHNpZ25VcCA9ICh1c2VyRGF0YTogVXNlcikgPT4ge1xuICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdhdXRoLnRva2VuJywgdXNlckRhdGEudG9rZW4sIHtcbiAgICAgIG1heEFnZTogNjAgKiA2MCAqIDEsIC8vIDEgaG91ciBpbiBzZWNvbmRzXG4gICAgICBwYXRoOiAnLydcbiAgICB9KTtcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcbiAgICBSb3V0ZXIucHVzaChcIi9ob21lcGFnZVwiKTtcbiAgfTtcbiAgXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIGRlc3Ryb3lDb29raWUobnVsbCwgJ2F1dGgudG9rZW4nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgc2lnblVwLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyID0gKCk6IFVzZXJDb250ZXh0VHlwZSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlVXNlciBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVXNlclByb3ZpZGVyXCIpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwicGFyc2VDb29raWVzIiwic2V0Q29va2llIiwiZGVzdHJveUNvb2tpZSIsIlJvdXRlciIsIlVzZXJDb250ZXh0IiwidW5kZWZpbmVkIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibG9nb3V0IiwibG9naW4iLCJ1c2VyRGF0YSIsIm1heEFnZSIsInBhdGgiLCJwdXNoIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/UserContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/UserContext */ \"./src/contexts/UserContext.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNHO0FBRXFCO0FBRXZELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDSCwrREFBWTtrQkFDWCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNmLENBQ2Y7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbC1wcm9qZWN0LXp0bS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Vc2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJVc2VyUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nconst token = cookies[\"auth.token\"];\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:8080\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${token || \"\"}`\n    }\n});\napi.interceptors.request.use((config)=>{\n    const updatedConfig = {\n        ...config\n    };\n    updatedConfig.headers = updatedConfig.headers || {};\n    if (token) {\n        updatedConfig.headers.Authorization = `Bearer ${token}`;\n    }\n    return updatedConfig;\n}, (error)=>{\n    return Promise.reject(error);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ1g7QUFFdkMsTUFBTUUsT0FBTyxHQUFHRCxxREFBWSxFQUFFO0FBQzlCLE1BQU1FLEtBQUssR0FBR0QsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUVuQyxNQUFNRSxHQUFHLEdBQUdKLG1EQUFZLENBQUM7SUFDdkJNLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFSixLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7S0FDekM7Q0FDRixDQUFDO0FBRUZDLEdBQUcsQ0FBQ0ksWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFJO0lBQ3JDLE1BQU1DLGFBQWEsR0FBdUI7UUFBRSxHQUFHRCxNQUFNO0tBQUU7SUFDdkRDLGFBQWEsQ0FBQ0wsT0FBTyxHQUFHSyxhQUFhLENBQUNMLE9BQU8sSUFBSSxFQUFFO0lBQ25ELElBQUlKLEtBQUssRUFBRTtRQUNUUyxhQUFhLENBQUNMLE9BQU8sQ0FBQ00sYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFVixLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3pEO0lBQ0QsT0FBT1MsYUFBYSxDQUFDO0NBQ3RCLEVBQUVFLENBQUFBLEtBQUssR0FBSTtJQUNWLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRixLQUFLLENBQUMsQ0FBQztDQUM5QixDQUFDLENBQUM7QUFFSCxpRUFBZVYsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmluYWwtcHJvamVjdC16dG0vLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSAnbm9va2llcyc7XG5cbmNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoKTtcbmNvbnN0IHRva2VuID0gY29va2llc1snYXV0aC50b2tlbiddO1xuXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW4gfHwgJyd9YFxuICB9XG59KTtcblxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShjb25maWcgPT4ge1xuICBjb25zdCB1cGRhdGVkQ29uZmlnOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7IC4uLmNvbmZpZyB9O1xuICB1cGRhdGVkQ29uZmlnLmhlYWRlcnMgPSB1cGRhdGVkQ29uZmlnLmhlYWRlcnMgfHwge31cbiAgaWYgKHRva2VuKSB7XG4gICAgdXBkYXRlZENvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcbiAgfVxuICByZXR1cm4gdXBkYXRlZENvbmZpZztcbn0sIGVycm9yID0+IHtcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGk7Il0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiY29va2llcyIsInRva2VuIiwiYXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidXBkYXRlZENvbmZpZyIsIkF1dGhvcml6YXRpb24iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();