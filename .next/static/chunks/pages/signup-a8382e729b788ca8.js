(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{7805:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(7239)}])},7239:function(e,t,n){"use strict";n.r(t);var r=n(4051),l=n.n(r),i=n(5893),o=n(5675),a=n.n(o),s=n(1664),u=n.n(s),c=n(5255),d=n(7294),f=n(7543),p=n(5740),h=n(8467),m=n(1163),x=n.n(m),w=n(2438);function b(e,t,n,r,l,i,o){try{var a=e[i](o),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,l)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}t.default=function(){var e=(0,d.useState)(),t=e[0],n=e[1],r=(0,d.useState)(),o=r[0],s=r[1],m=(0,d.useState)(),g=m[0],j=m[1],y=(0,d.useState)({user:{id:"",name:"",email:"",entries:"",joined:""}}),C=y[0],N=y[1];(0,w.default)(C);var k=(0,d.useCallback)(function(){var e,n=(e=l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),void 0===t||void 0===g||void 0===o){e.next=10;break}return e.prev=2,e.next=5,h.h.post("/signup",{name:t,email:g,password:o}).then((function(e){if(200===e.status){var t=e.data;N((function(e){return v({},e,t)})),x().push("/homepage")}}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,l){var i=e.apply(t,n);function o(e){b(i,r,l,o,a,"next",e)}function a(e){b(i,r,l,o,a,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),[t,g,o]);return(0,i.jsxs)("div",{className:"flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center",children:[(0,i.jsx)("div",{className:"flex w-full justify-start h-1/5 mt-4 ml-6 mr-6",children:(0,i.jsx)(a(),{src:c.Z,width:100,height:100})}),(0,i.jsx)("div",{className:"flex items-end h-1/6 text-white text-3xl",children:(0,i.jsx)("p",{children:"Sign Up"})}),(0,i.jsx)("div",{className:"flex flex-col justify-center w-full items-center h-4/5",children:(0,i.jsxs)("form",{onSubmit:k,className:" bg-indigo-400 bg-opacity-40 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-2xl rounded px-8 pt-6 pb-8 mb-4",children:[(0,i.jsxs)("label",{children:["Nome",(0,i.jsx)(p.I,{onValueChange:function(e){return n(e)},name:"name",placeholder:" Informe seu nome completo",type:"text",value:t,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,i.jsxs)("label",{children:["Email",(0,i.jsx)(p.I,{onValueChange:function(e){return j(e)},name:"email",placeholder:" Email",type:"email",value:g,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,i.jsxs)("label",{children:["Password",(0,i.jsx)(p.I,{onValueChange:function(e){return s(e)},name:"password",placeholder:" **********",type:"password",value:o,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0})]}),(0,i.jsx)("div",{className:"mt-5 flex flex-col items-center",children:(0,i.jsx)(f.z,{type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-900",textColor:"text-white",padding:"py-2 px-4",marginTop:"lg:mt-0 mt-1",marginLeft:"lg:ml-4",effects:"hover:bg-purple-900",children:"Sign Up"})}),(0,i.jsx)("div",{className:"flex bg-indigo-400 bg-opacity-10 mt-4 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center",children:(0,i.jsx)(u(),{href:"/signin",children:(0,i.jsx)("a",{className:"m-1 text-white no-underline hover:underline text-lg",children:"Already have an account? Sign In."})})})]})})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[632,5,438,774,888,179],(function(){return t=7805,e(e.s=t);var t}));var t=e.O();_N_E=t}]);