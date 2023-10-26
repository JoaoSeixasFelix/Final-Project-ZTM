"use strict";
exports.id = 689;
exports.ids = [689];
exports.modules = {

/***/ 9689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_NavBarIcons_strategy_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5255);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7543);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5740);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8467);
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5856);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);










const SignIn = ()=>{
    const { login  } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__/* .useUser */ .a)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const handleSubmit = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async (e)=>{
        e.preventDefault();
        if (email.length === 0) {
            alert("Email or password is invalid.");
            return;
        }
        try {
            const response = await _services_api__WEBPACK_IMPORTED_MODULE_7__/* .api.post */ .h.post("/signin", {
                email,
                password
            });
            if (response.status === 200) {
                login({
                    id: response.data.id,
                    username: response.data.name
                });
                next_router__WEBPACK_IMPORTED_MODULE_9___default().push("/homepage");
            } else {
                alert("Erro ao fazer login. Por favor, tente novamente.");
            }
        } catch (err) {
            alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
            console.error("Erro ao fazer login:", err);
        }
    }, [
        email,
        password,
        login
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full justify-start h-1/5 mt-4 ml-6 mr-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: _public_NavBarIcons_strategy_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    width: 100,
                    height: 100
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center mt-16 h-4/5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-end h-1/6 w-full mb-6 text-white text-3xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "flex w-full h-full justify-center",
                            children: "Sign In"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        className: " bg-indigo-400 bg-opacity-40 -mt-10 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-md rounded px-6 pt-6 pb-8 mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "Login",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .I, {
                                        onValueChange: (e)=>setEmail(e)
                                        ,
                                        name: "login",
                                        placeholder: " Inform your email",
                                        type: "email",
                                        value: email,
                                        borderColor: "border-slate-500",
                                        width: "xl:w-96 lg:w-96 w-60",
                                        padding: "py-3",
                                        bgColor: "white",
                                        textColor: "white",
                                        marginBottom: "mb-3",
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    "Password",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Input__WEBPACK_IMPORTED_MODULE_6__/* .Input */ .I, {
                                        onValueChange: (e)=>setPassword(e)
                                        ,
                                        name: "password",
                                        placeholder: " **********",
                                        type: "password",
                                        value: password,
                                        borderColor: "border-slate-500",
                                        width: "xl:w-96 lg:w-96 w-60",
                                        padding: "py-3",
                                        bgColor: "white",
                                        textColor: "white",
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-5 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-sm",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/forgotpassword",
                                            children: "Forgot Password?"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                        type: "submit",
                                        width: "xl:w-44 lg:w-44 w-60",
                                        backGroundColor: "bg-purple-900",
                                        textColor: "text-white",
                                        padding: "py-2 px-4",
                                        marginTop: "lg:mt-0 mt-1",
                                        marginLeft: "lg:ml-4",
                                        effects: "rounded hover:bg-purple-900",
                                        children: "Sign In"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex bg-indigo-400 bg-opacity-50 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg",
                                children: "New?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/signup",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "m-1 text-white no-underline hover:underline text-lg",
                                    children: "Create an account."
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);


/***/ })

};
;