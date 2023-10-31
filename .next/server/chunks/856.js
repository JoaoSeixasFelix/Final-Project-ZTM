"use strict";
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 5856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8467);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const UserProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { "auth.token": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();
        if (token) {
            _services_api__WEBPACK_IMPORTED_MODULE_2__/* .api.post */ .h.post("/verifyToken").then((response)=>{
                setUser(response.data.user);
            }).catch((error)=>{
                logout();
            });
        }
    }, []);
    const login = (userData)=>{
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, "auth.token", userData.token, {
            maxAge: 60 * 60 * 1,
            path: "/"
        });
        setUser(userData);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/homepage");
    };
    const signUp = (userData)=>{
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, "auth.token", userData.token, {
            maxAge: 60 * 60 * 1,
            path: "/"
        });
        setUser(userData);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/homepage");
    };
    const logout = async ()=>{
        setUser(null);
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(null, "auth.token");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            login,
            signUp,
            logout
        },
        children: children
    });
};
const useUser = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};


/***/ }),

/***/ 8467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ clarifaiApi),
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);


const cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();
const token = cookies["auth.token"];
const clarifaiApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://api.clarifai.com"
});
const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token || ""}`
    }
});


/***/ })

};
;