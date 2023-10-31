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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst UserProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"auth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/verifyToken\").then((response)=>{\n                setUser(response.data.user);\n            }).catch((error)=>{\n                logout();\n            });\n        }\n    }, []);\n    const login = (userData)=>{\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/homepage\");\n    };\n    const signUp = (userData)=>{\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"auth.token\", userData.token, {\n            maxAge: 60 * 60 * 1,\n            path: \"/\"\n        });\n        setUser(userData);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/homepage\");\n    };\n    const logout = async ()=>{\n        setUser(null);\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, \"auth.token\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            login,\n            signUp,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/joao/Desktop/Final-Project-ZTM/src/contexts/UserContext.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (!context) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvVXNlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUY7QUFDbkQ7QUFDd0I7QUFDN0I7QUFrQmpDLE1BQU1VLFdBQVcsaUJBQUdULG9EQUFhLENBQThCVSxTQUFTLENBQUM7QUFNbEUsTUFBTUMsWUFBWSxHQUFnQyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ3pFLE1BQU0sRUE1QlIsR0E0QlNDLElBQUksR0E1QmIsR0E0QmVDLE9BQU8sTUFBSVosK0NBQVEsQ0FBYyxJQUFJLENBQUM7SUFFbkRDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRSxZQUFZLEVBQUVZLEtBQUssR0FBRSxHQUFHVixxREFBWSxFQUFFO1FBQzlDLElBQUlVLEtBQUssRUFBRTtZQUNUWCxtREFBUSxDQUFDLGNBQWMsQ0FBQyxDQUN2QmEsSUFBSSxDQUFDQyxDQUFBQSxRQUFRLEdBQUk7Z0JBQ2RKLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUNOLElBQUksQ0FBQyxDQUFDO2FBQzdCLENBQUMsQ0FDRE8sS0FBSyxDQUFDQyxDQUFBQSxLQUFLLEdBQUk7Z0JBQ2RDLE1BQU0sRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1NBQ047S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTUMsS0FBSyxHQUFHLENBQUNDLFFBQWMsR0FBSztRQUNoQ2xCLGtEQUFTLENBQUNJLFNBQVMsRUFBRSxZQUFZLEVBQUVjLFFBQVEsQ0FBQ1QsS0FBSyxFQUFFO1lBQ2pEVSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25CQyxJQUFJLEVBQUUsR0FBRztTQUNWLENBQUMsQ0FBQztRQUNIWixPQUFPLENBQUNVLFFBQVEsQ0FBQyxDQUFDO1FBQ2xCaEIsdURBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMxQjtJQUVELE1BQU1vQixNQUFNLEdBQUcsQ0FBQ0osUUFBYyxHQUFLO1FBQ2pDbEIsa0RBQVMsQ0FBQ0ksU0FBUyxFQUFFLFlBQVksRUFBRWMsUUFBUSxDQUFDVCxLQUFLLEVBQUU7WUFDakRVLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkJDLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FBQyxDQUFDO1FBQ0haLE9BQU8sQ0FBQ1UsUUFBUSxDQUFDLENBQUM7UUFDbEJoQix1REFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFCO0lBRUQsTUFBTWMsTUFBTSxHQUFHLFVBQTJCO1FBQ3hDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZFAsc0RBQWEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7S0FDbkM7SUFFRCxxQkFDRSw4REFBQ0UsV0FBVyxDQUFDb0IsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWpCLElBQUk7WUFBRVUsS0FBSztZQUFFSyxNQUFNO1lBQUVOLE1BQU07U0FBRTtrQkFDekRWLFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0gsQ0FBQztBQUVLLE1BQU1tQixPQUFPLEdBQUcsSUFBdUI7SUFDNUMsTUFBTUMsT0FBTyxHQUFHL0IsaURBQVUsQ0FBQ1EsV0FBVyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ3VCLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7S0FDL0Q7SUFDRCxPQUFPRCxPQUFPLENBQUM7Q0FDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLXByb2plY3QtenRtLy4vc3JjL2NvbnRleHRzL1VzZXJDb250ZXh0LnRzeD81ZWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbmltcG9ydCB7cGFyc2VDb29raWVzLCBzZXRDb29raWUsIGRlc3Ryb3lDb29raWV9IGZyb20gJ25vb2tpZXMnXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG50eXBlIFVzZXIgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50cmllczogbnVtYmVyO1xuICBlbWFpbDogc3RyaW5nO1xuICBqb2luZWQ6IERhdGU7XG4gIHRva2VuOiBzdHJpbmc7XG59O1xuXG50eXBlIFVzZXJDb250ZXh0VHlwZSA9IHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIGxvZ2luOiAodXNlckRhdGE6IFVzZXIpID0+IHZvaWQ7XG4gIHNpZ25VcDogKHVzZXJEYXRhOiBVc2VyKSA9PiB2b2lkO1xuICBsb2dvdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG59O1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG50eXBlIFVzZXJQcm92aWRlclByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkM8VXNlclByb3ZpZGVyUHJvcHM+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7ICdhdXRoLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgYXBpLnBvc3QoXCIvdmVyaWZ5VG9rZW5cIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuICBcbiAgY29uc3QgbG9naW4gPSAodXNlckRhdGE6IFVzZXIpID0+IHtcbiAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnYXV0aC50b2tlbicsIHVzZXJEYXRhLnRva2VuLCB7XG4gICAgICBtYXhBZ2U6IDYwICogNjAgKiAxLCAvLyAxIGhvdXIgaW4gc2Vjb25kc1xuICAgICAgcGF0aDogJy8nXG4gICAgfSk7XG4gICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgUm91dGVyLnB1c2goXCIvaG9tZXBhZ2VcIik7XG4gIH07XG4gIFxuICBjb25zdCBzaWduVXAgPSAodXNlckRhdGE6IFVzZXIpID0+IHtcbiAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnYXV0aC50b2tlbicsIHVzZXJEYXRhLnRva2VuLCB7XG4gICAgICBtYXhBZ2U6IDYwICogNjAgKiAxLCAvLyAxIGhvdXIgaW4gc2Vjb25kc1xuICAgICAgcGF0aDogJy8nXG4gICAgfSk7XG4gICAgc2V0VXNlcih1c2VyRGF0YSk7XG4gICAgUm91dGVyLnB1c2goXCIvaG9tZXBhZ2VcIik7XG4gIH07XG4gIFxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBkZXN0cm95Q29va2llKG51bGwsICdhdXRoLnRva2VuJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIHNpZ25VcCwgbG9nb3V0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVXNlciA9ICgpOiBVc2VyQ29udGV4dFR5cGUgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInVzZVVzZXIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFVzZXJQcm92aWRlclwiKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFwaSIsInBhcnNlQ29va2llcyIsInNldENvb2tpZSIsImRlc3Ryb3lDb29raWUiLCJSb3V0ZXIiLCJVc2VyQ29udGV4dCIsInVuZGVmaW5lZCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImxvZ291dCIsImxvZ2luIiwidXNlckRhdGEiLCJtYXhBZ2UiLCJwYXRoIiwicHVzaCIsInNpZ25VcCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VVc2VyIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/UserContext.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"clarifaiApi\": () => (/* binding */ clarifaiApi)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nconst token = cookies[\"auth.token\"];\nconst clarifaiApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://api.clarifai.com\"\n});\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:8000\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": `Bearer ${token || \"\"}`\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ3ZDLE1BQU1FLE9BQU8sR0FBR0QscURBQVksRUFBRTtBQUM5QixNQUFNRSxLQUFLLEdBQUdELE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFFNUIsTUFBTUUsV0FBVyxHQUFHSixtREFBWSxDQUFDO0lBQ3RDTSxPQUFPLEVBQUUsMEJBQTBCO0NBQ3BDLENBQUMsQ0FBQztBQUVJLE1BQU1DLEdBQUcsR0FBR1AsbURBQVksQ0FBQztJQUM5Qk0sT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0UsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGtCQUFrQjtRQUNsQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUVMLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN6QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmFsLXByb2plY3QtenRtLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJ25vb2tpZXMnO1xuY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcygpO1xuY29uc3QgdG9rZW4gPSBjb29raWVzWydhdXRoLnRva2VuJ107XG5cbmV4cG9ydCBjb25zdCBjbGFyaWZhaUFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFwiaHR0cHM6Ly9hcGkuY2xhcmlmYWkuY29tXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbiB8fCAnJ31gXG4gIH1cbn0pOyJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsImNvb2tpZXMiLCJ0b2tlbiIsImNsYXJpZmFpQXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsImFwaSIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

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