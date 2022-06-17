"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 4105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ homepage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/services/api.ts

const api = external_axios_default().create({
    baseURL: "https://api.clarifai.com"
});

// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(7543);
;// CONCATENATED MODULE: ./src/components/ImageRecognition.tsx

const ImageRecognition = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center items-center mt-5 mb-5 sm:w-auto w-64",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: props.pictures,
            width: "400px"
        })
    });
};
/* harmony default export */ const components_ImageRecognition = (ImageRecognition);

// EXTERNAL MODULE: ./src/components/Input.tsx
var Input = __webpack_require__(5740);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/BodyHomePage.tsx







const BodyHomePage = ()=>{
    const { 0: link , 1: setLink  } = (0,external_react_.useState)();
    const { 0: picture , 1: setPicture  } = (0,external_react_.useState)();
    const { 0: predictionList , 1: setPredictionList  } = (0,external_react_.useState)([]);
    const USER_ID = "vp3fx9nhqq2j";
    const PAT = "4bf991280305438ba4a61e7963875886";
    const APP_ID = "d85b056a98b44bc99fe922613461ae77";
    const MODEL_ID = "general-image-recognition";
    const MODEL_VERSION = "aa7f35c01e0642fda5cf400f543e7c40";
    const IMAGE_URL = link;
    const raw = JSON.stringify({
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        inputs: [
            {
                data: {
                    image: {
                        url: IMAGE_URL
                    }
                }
            }, 
        ]
    });
    const onSubmitImage = async ()=>{
        if (link) {
            try {
                const res = await api.post(`/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`, raw, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Key " + PAT
                    }
                });
                const { data  } = res.data.outputs[0];
                console.log(res);
                setPredictionList(data.concepts);
            } catch (err) {
                alert(err);
            }
            console.log(predictionList);
            setPicture(link);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-full h-full !justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col xl:flex-row lg:flex-row bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-2/4 w-5/6 justify-center items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* Input */.I, {
                        onValueChange: (e)=>setLink(e)
                        ,
                        name: "InputLink",
                        placeholder: "Input Your Picture Here",
                        type: "text",
                        value: link,
                        borderColor: "border-slate-500",
                        width: "xl:w-96 lg:w-96 w-60",
                        padding: "py-3",
                        bgColor: "white",
                        textColor: "white",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        onClick: ()=>onSubmitImage()
                        ,
                        type: "submit",
                        width: "xl:w-44 lg:w-44 w-60",
                        backGroundColor: "bg-purple-500",
                        textColor: "text-white",
                        padding: "py-2",
                        marginTop: "lg:mt-0 mt-1",
                        marginLeft: "lg:ml-4",
                        effects: "hover:bg-purple-900",
                        children: "Detect!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()(`flex lg:flex-row lg:justify-center  ${link ? "bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent" : ""} flex-col lg:mt-10 lg:items-start items-center lg:w-2/5 h-full `),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-center h-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_ImageRecognition, {
                            pictures: picture
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:w-96 lg:h-full text-white justify-between lg:ml-8 w-60 lg:overflow-y-auto lg:text-3xl",
                        children: [
                            link ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "General"
                            }) : "",
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex lg:w-4/5 lg:h-full justify-between lg:ml-8 w-60 lg:text-3xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "text-left",
                                        children: predictionList.map((concept, indice)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: concept.name
                                            }, indice)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "lg:ml-7",
                                        children: predictionList.map((concept, indice)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: concept.value.toFixed(1) * 100 + "%"
                                            }, indice)
                                        )
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/NavBarIcons/strategy-svgrepo-com.svg
var strategy_svgrepo_com = __webpack_require__(5255);
;// CONCATENATED MODULE: ./src/components/NavBar.tsx




const NavBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-full bg-opacity-5 bg-violet-600 bg-clip-padding backdrop-blur-lg justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-1/2 mt-4 ml-6 justify-start mb-5 items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: strategy_svgrepo_com/* default */.Z,
                    height: 90,
                    width: 90
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end items-center mr-10 w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                    width: "w-24",
                    height: "h-12",
                    backGroundColor: "bg-slate-900",
                    borderColor: "border-black ho",
                    textColor: "text-white",
                    rounded: "rounded-full",
                    type: "button",
                    border: "border-2",
                    effects: "hover:bg-purple-900",
                    children: "SignOut"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(3047);
;// CONCATENATED MODULE: ./src/components/Particles.tsx




const ParticlesHomePage = ()=>{
    const particlesInit = async (main)=>{
        await (0,external_tsparticles_.loadFull)(main);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
            id: "tsparticles",
            init: particlesInit,
            options: {
                background: {},
                fpsLimit: 144,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push"
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#fff"
                    },
                    links: {
                        color: "#fff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: false
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 1.75,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 100
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 3,
                            max: 5
                        }
                    }
                },
                detectRetina: true
            }
        })
    });
};
/* harmony default export */ const Particles = (ParticlesHomePage);

;// CONCATENATED MODULE: ./src/components/RankDescription.tsx

const RankDescription = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full text-white lg:justify-end justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-center lg:text-2xl text-lg",
                children: [
                    "Hello ",
                    props.name,
                    ", your current rank is..."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                className: "lg:text-6xl text-3xl ",
                children: [
                    "#",
                    props.rank
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/homepage.tsx





const HomePage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Particles, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-50 h-1/5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-4/5 overflow-y-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex z-50 justify-center items-end h-2/5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(RankDescription, {
                            name: "Pedro",
                            rank: 1
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col z-20 justify-center lg:mt-28 items-center h-4/5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-white mb-5 lg:text-xl text-sm",
                                children: "This magical app will describe your photo. Fit it a try."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(BodyHomePage, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const homepage = (HomePage);


/***/ })

};
;