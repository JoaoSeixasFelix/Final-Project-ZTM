"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{5255:function(e,t){t.Z={src:"/_next/static/media/strategy-svgrepo-com.f9a4f7ef.svg",height:512,width:512}},7543:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(5893),c=n(4184),a=n.n(c),i=function(e){var t=e.children,n=e.onClick,c=e.type,i=(e.disabled,e.width),l=e.height,o=e.backGroundColor,s=e.textColor,u=e.border,d=e.borderColor,f=e.borderRadius,x=e.margin,h=e.marginTop,p=e.marginRight,g=e.marginBottom,m=e.marginLeft,v=e.padding,b=e.paddingTop,w=e.paddingBottom,j=e.paddingRight,y=e.paddingLeft,N=e.rounded,k=e.effects;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:n,type:c,className:a()("".concat(o,"\n           ").concat(s,"\n           ").concat(i,"\n           ").concat(l,"\n           ").concat(u,"\n           ").concat(d,"\n           ").concat(f,"\n           ").concat(x,"\n           ").concat(h,"\n           ").concat(p,"\n           ").concat(g,"\n           ").concat(m,"\n           ").concat(v,"\n           ").concat(b,"\n           ").concat(w,"\n           ").concat(j,"\n           ").concat(y,"\n           ").concat(N,"\n           ").concat(k,"\n           font-bold\n           rounded-full font-Poppins")),children:t})})}},5740:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(5893),c=n(4184),a=n.n(c),i=function(e){var t=e.onValueChange,n=e.name,c=e.placeholder,i=e.value,l=void 0===i?"":i,o=e.type,s=e.width,u=e.bgColor,d=e.textColor,f=e.borderColor,x=e.margin,h=e.marginTop,p=e.marginRight,g=e.marginBottom,m=e.marginLeft,v=e.padding;e.required;return(0,r.jsx)("div",{children:(0,r.jsx)("input",{onChange:function(e){return t(e.target.value)},name:n,placeholder:c,value:l,type:o,required:!0,className:a()("".concat(f,"\n           ").concat(u,"\n           ").concat(d,"\n           ").concat(s,"\n           ").concat(x,"\n           ").concat(h,"\n           ").concat(p,"\n           ").concat(g,"\n           ").concat(m,"\n           ").concat(v,"\n           font-bold rounded-lg text-xs\n           shadow appearance-none border-2 \n          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline"))})})}},4105:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(5893),c=n(4051),a=n.n(c),i=n(7294),l=n(9669),o=n.n(l)().create({baseURL:"https://api.clarifai.com"}),s=n(7543),u=function(e){return(0,r.jsx)("div",{className:"flex justify-center items-center mt-5 mb-5 sm:w-auto w-64",children:(0,r.jsx)("img",{src:e.pictures,width:"400px"})})},d=n(5740),f=n(4184),x=n.n(f);function h(e,t,n,r,c,a,i){try{var l=e[a](i),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(r,c)}var p=function(){var e=(0,i.useState)(),t=e[0],n=e[1],c=(0,i.useState)(),l=c[0],f=c[1],p=(0,i.useState)([]),g=p[0],m=p[1],v=t,b=JSON.stringify({user_app_id:{user_id:"vp3fx9nhqq2j",app_id:"d85b056a98b44bc99fe922613461ae77"},inputs:[{data:{image:{url:v}}}]}),w=function(){var e,n=(e=a().mark((function e(){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=15;break}return e.prev=1,e.next=4,o.post("/v2/models/".concat("general-image-recognition","/versions/").concat("aa7f35c01e0642fda5cf400f543e7c40","/outputs"),b,{headers:{Accept:"application/json",Authorization:"Key 4bf991280305438ba4a61e7963875886"}});case 4:n=e.sent,r=n.data.outputs[0].data,console.log(n),m(r.concepts),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0);case 13:console.log(g),f(t);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function i(e){h(a,r,c,i,l,"next",e)}function l(e){h(a,r,c,i,l,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"flex flex-col w-full h-full !justify-center items-center",children:[(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row lg:flex-row bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-2/4 w-5/6 justify-center items-center",children:[(0,r.jsx)(d.I,{onValueChange:function(e){return n(e)},name:"InputLink",placeholder:"Input Your Picture Here",type:"text",value:t,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0}),(0,r.jsx)(s.z,{onClick:function(){return w()},type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-500",textColor:"text-white",padding:"py-2",marginTop:"lg:mt-0 mt-1",marginLeft:"lg:ml-4",effects:"hover:bg-purple-900",children:"Detect!"})]}),(0,r.jsxs)("div",{className:x()("flex lg:flex-row lg:justify-center  ".concat(t?"bg-blue-700 bg-opacity-20 bg-clip-padding backdrop-blur-3xl bg-transparent":""," flex-col lg:mt-10 lg:items-start items-center lg:w-2/5 h-full ")),children:[(0,r.jsx)("div",{className:"flex justify-center h-full",children:(0,r.jsx)(u,{pictures:l})}),(0,r.jsxs)("div",{className:"flex flex-col lg:w-96 lg:h-full justify-between lg:ml-8 w-60 overflow-y-auto lg:text-3xl",children:[t?(0,r.jsx)("p",{children:"General"}):"",(0,r.jsxs)("div",{className:"flex lg:w-4/5 lg:h-full justify-between lg:ml-8 w-60 overflow-y-auto lg:text-3xl",children:[(0,r.jsx)("ul",{className:"text-left",children:g.map((function(e,t){return(0,r.jsx)("li",{children:e.name},t)}))}),(0,r.jsx)("ul",{className:"lg:ml-7",children:g.map((function(e,t){return(0,r.jsx)("li",{children:100*e.value.toFixed(1)+"%"},t)}))})]})]})]})]})},g=n(5675),m=n.n(g),v=n(5255),b=function(){return(0,r.jsxs)("div",{className:"flex w-full bg-opacity-5 bg-violet-600 bg-clip-padding backdrop-blur-lg justify-between",children:[(0,r.jsx)("div",{className:"flex w-1/2 mt-4 ml-6 justify-start mb-5 items-center",children:(0,r.jsx)(m(),{src:v.Z,height:90,width:90})}),(0,r.jsx)("div",{className:"flex justify-end items-center mr-10 w-1/2",children:(0,r.jsx)(s.z,{width:"w-24",height:"h-12",backGroundColor:"bg-slate-900",borderColor:"border-black ho",textColor:"text-white",rounded:"rounded-full",type:"button",border:"border-2",effects:"hover:bg-purple-900",children:"SignOut"})})]})},w=n(6868),j=n.n(w),y=n(5241);function N(e,t,n,r,c,a,i){try{var l=e[a](i),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(r,c)}var k=function(){var e=function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.R)(t);case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function i(e){N(a,r,c,i,l,"next",e)}function l(e){N(a,r,c,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(j(),{id:"tsparticles",init:e,options:{background:{},fpsLimit:144,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#fff"},links:{color:"#fff",distance:150,enable:!1,opacity:.5,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1.75,straight:!1},number:{density:{enable:!0,area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:3,max:5}}},detectRetina:!0}})})},C=function(e){return(0,r.jsxs)("div",{className:"flex flex-col h-full text-white lg:justify-end justify-center items-center",children:[(0,r.jsxs)("p",{className:"text-center lg:text-2xl text-lg",children:["Hello ",e.name,", your current rank is..."]}),(0,r.jsxs)("h1",{className:"lg:text-6xl text-3xl ",children:["#",e.rank]})]})},z=function(){return(0,r.jsxs)("div",{className:" h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center",children:[(0,r.jsx)(k,{}),(0,r.jsx)("div",{className:"z-50 h-1/5",children:(0,r.jsx)(b,{})}),(0,r.jsxs)("div",{className:"h-4/5 overflow-y-auto",children:[(0,r.jsx)("div",{className:"flex z-50 justify-center items-end h-2/5",children:(0,r.jsx)(C,{name:"Pedro",rank:1})}),(0,r.jsxs)("div",{className:"flex flex-col z-20 justify-center lg:mt-28 items-center h-4/5",children:[(0,r.jsx)("p",{className:"text-white mb-5 lg:text-xl text-sm",children:"This Magic app will detect in your pictures. Fit it a try."}),(0,r.jsx)(p,{})]})]})]})}}}]);