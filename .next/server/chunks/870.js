"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 870:
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
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/services/api.ts

const api = external_axios_default().create({
    baseURL: "https://api.clarifai.com"
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(3);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/Button.tsx


const Button = ({ children , onClick , type , disabled =false , width , height , backGroundColor , textColor , border , borderColor , borderRadius , margin , marginTop , marginRight , marginBottom , marginLeft , padding , paddingTop , paddingBottom , paddingRight , paddingLeft , rounded , effects  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: onClick,
            type: type,
            className: external_classnames_default()(`${backGroundColor}
           ${textColor}
           ${width}
           ${height}
           ${border}
           ${borderColor}
           ${borderRadius}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           ${padding}
           ${paddingTop}
           ${paddingBottom}
           ${paddingRight}
           ${paddingLeft}
           ${rounded}
           ${effects}
           font-bold
           rounded-full font-Poppins`),
            children: children
        })
    });
};

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

;// CONCATENATED MODULE: ./src/components/Input.tsx


const Input = ({ onValueChange , name , placeholder , value ="" , type , width , bgColor , textColor , borderColor , margin , marginTop , marginRight , marginBottom , marginLeft , padding , required  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            onChange: (e)=>onValueChange(e.target.value)
            ,
            name: name,
            placeholder: placeholder,
            value: value,
            type: type,
            required: true,
            className: external_classnames_default()(`${borderColor}
           ${bgColor}
           ${textColor}
           ${width}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           ${padding}
           font-bold rounded-lg text-xs text-center
           shadow appearance-none border-2 
          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline`)
        })
    });
};

;// CONCATENATED MODULE: ./src/components/BodyHomePage.tsx






const BodyHomePage = ()=>{
    const { 0: link , 1: setLink  } = (0,external_react_.useState)();
    const { 0: picture , 1: setPicture  } = (0,external_react_.useState)();
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
    const res = ()=>{
        api.post(`/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`, raw, {
            headers: {
                Accept: "application/json",
                Authorization: "Key " + PAT
            }
        }).then((result)=>console.log(result.data.outputs[0].data.concepts)
        ).catch((error)=>console.log("error", error)
        );
        setPicture(link);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col w-full h-full !justify-center items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col xl:flex-row lg:flex-row bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-2/4 w-5/6 justify-center items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
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
                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        onClick: ()=>res()
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
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_ImageRecognition, {
                    pictures: picture
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/NavBarIcons/strategy-svgrepo-com.svg
/* harmony default export */ const strategy_svgrepo_com = ({"src":"/_next/static/media/strategy-svgrepo-com.f9a4f7ef.svg","height":512,"width":512});
;// CONCATENATED MODULE: ./src/components/NavBar.tsx




const NavBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-full bg-opacity-5 bg-violet-600 bg-clip-padding backdrop-blur-lg justify-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-1/2 mt-4 ml-6 justify-start mb-5 items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: strategy_svgrepo_com,
                    height: 90,
                    width: 90
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end items-center mr-10 w-1/2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
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
var external_react_tsparticles_ = __webpack_require__(753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(47);
;// CONCATENATED MODULE: ./src/components/Particles.tsx




const ParticlesHomePage = ()=>{
    const particlesInit = async (main)=>{
        await (0,external_tsparticles_.loadFull)(main);
    };
    const particlesLoaded = (container)=>{};
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_tsparticles_default()), {
            id: "tsparticles",
            init: particlesInit,
            // loaded={particlesLoaded}
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
        className: "h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Particles, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-50 h-1/5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex z-50 justify-center items-end h-2/5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(RankDescription, {
                    name: "Pedro",
                    rank: 1
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col z-50 justify-center items-center h-3/5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white mb-5 lg:text-xl text-sm",
                        children: "This Magic app will detect in your pictures. Fit it a try."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(BodyHomePage, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const homepage = (HomePage);


/***/ })

};
;