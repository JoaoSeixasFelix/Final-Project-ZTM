(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(7239)}])},7239:function(e,t,r){"use strict";r.r(t);var n=r(4051),i=r.n(n),l=r(5893),o=r(5675),a=r.n(o),s=r(1664),u=r.n(s),c=r(5255),d=r(7294),p=r(7543),f=r(5740),h=r(8467),m=r(1163),x=r.n(m),b=r(2438);function w(e,t,r,n,i,l,o){try{var a=e[l](o),s=a.value}catch(u){return void r(u)}a.done?t(s):Promise.resolve(s).then(n,i)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}t.default=function(){var e=(0,d.useState)(),t=e[0],r=e[1],n=(0,d.useState)(),o=n[0],s=n[1],m=(0,d.useState)(),g=m[0],j=m[1],y=(0,d.useState)({user:{id:"",name:"",email:"",entries:"",joined:""}}),C=y[0],N=y[1];(0,b.default)(C);var k=(0,d.useCallback)(function(){var e,r=(e=i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),void 0===t||void 0===g||void 0===o){e.next=10;break}return e.prev=2,e.next=5,h.h.post("/signup",{name:t,email:g,password:o}).then((function(e){if(200===e.status){var t=e.data;N((function(e){return v({},e,t)})),x().push("/homepage")}}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,i){var l=e.apply(t,r);function o(e){w(l,n,i,o,a,"next",e)}function a(e){w(l,n,i,o,a,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}(),[t,g,o]);return(0,l.jsxs)("div",{className:"flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center",children:[(0,l.jsx)("div",{className:"flex w-full justify-start h-1/5 mt-4 ml-6 mr-6",children:(0,l.jsx)(a(),{src:c.Z,width:100,height:100})}),(0,l.jsx)("div",{className:"flex items-end h-1/6 text-white text-3xl",children:(0,l.jsx)("p",{children:"SignUp"})}),(0,l.jsx)("div",{className:" flex justify-center w-full items-center h-4/5",children:(0,l.jsxs)("form",{onSubmit:k,className:" bg-indigo-400 bg-opacity-40 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-2xl rounded px-8 pt-6 pb-8 mb-4",children:[(0,l.jsxs)("label",{children:["Login",(0,l.jsx)(f.I,{onValueChange:function(e){return r(e)},name:"login",placeholder:" Username",type:"text",value:t,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,l.jsxs)("label",{children:["Email",(0,l.jsx)(f.I,{onValueChange:function(e){return j(e)},name:"email",placeholder:" Email",type:"text",value:g,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,l.jsxs)("label",{children:["Password",(0,l.jsx)(f.I,{onValueChange:function(e){return s(e)},name:"password",placeholder:" **********",type:"password",value:o,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0})]}),(0,l.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,l.jsx)(p.z,{type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-900",textColor:"text-white",padding:"py-2 px-4",marginTop:"lg:mt-0 mt-1",marginLeft:"lg:ml-4",effects:"hover:bg-purple-900",children:"Sign Up"}),(0,l.jsx)("div",{className:"mt-3",children:(0,l.jsx)(u(),{href:"/signin",children:(0,l.jsx)("p",{className:"text-xs cursor-pointer",children:"Already have an account? Sign In."})})})]})]})})]})}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[632,5,438,774,888,179],(function(){return t=7805,e(e.s=t);var t}));var t=e.O();_N_E=t}]);