(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{9497:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homepage",function(){return t(9964)}])},9964:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(5893),o=t(7294),c=t(4184),a=t.n(c),i=function(e){var n=e.children,t=e.onClick,o=e.type,c=(e.disabled,e.width),i=e.height,l=e.backGroundColor,s=e.textColor,d=e.border,u=e.borderColor,f=e.borderRadius,h=e.margin,p=e.marginTop,m=e.marginRight,x=e.marginBottom,g=e.marginLeft,b=e.padding,v=e.paddingTop,w=e.paddingBottom,j=e.paddingRight,y=e.paddingLeft,C=e.rounded,k=e.effects;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:t,type:o,className:a()("".concat(l,"\n           ").concat(s,"\n           ").concat(c,"\n           ").concat(i,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(f,"\n           ").concat(h,"\n           ").concat(p,"\n           ").concat(m,"\n           ").concat(x,"\n           ").concat(g,"\n           ").concat(b,"\n           ").concat(v,"\n           ").concat(w,"\n           ").concat(j,"\n           ").concat(y,"\n           ").concat(C,"\n           ").concat(k,"\n           font-bold\n           rounded-full font-Poppins")),children:n})})},l=function(e){var n=e.onValueChange,t=e.name,o=e.placeholder,c=e.value,i=void 0===c?"":c,l=e.type,s=e.width,d=e.bgColor,u=e.textColor,f=e.borderColor,h=e.margin,p=e.marginTop,m=e.marginRight,x=e.marginBottom,g=e.marginLeft,b=e.padding;e.required;return(0,r.jsx)("div",{children:(0,r.jsx)("input",{onChange:function(e){return n(e.target.value)},name:t,placeholder:o,value:i,type:l,required:!0,className:a()("".concat(f,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(s,"\n           ").concat(h,"\n           ").concat(p,"\n           ").concat(m,"\n           ").concat(x,"\n           ").concat(g,"\n           ").concat(b,"\n           font-bold rounded-full text-xs text-center\n           shadow appearance-none border-2 \n          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline"))})})},s=function(){var e=(0,o.useState)(),n=e[0],t=e[1];console.log(n);var c={method:"POST",headers:{Accept:"application/json",Authorization:"Key 4bf991280305438ba4a61e7963875886"},body:JSON.stringify({user_app_id:{user_id:"vp3fx9nhqq2j",app_id:"e8aae435af7d406696fec789ca6567fd"},inputs:[{data:{image:{url:"https://samples.clarifai.com/metro-north.jpg"}}}]})};return(0,r.jsxs)("div",{className:"flex flex-col xl:flex-row lg:flex-row bg-opacity-60 bg-clip-padding backdrop-blur-3xl bg-transparent xl:w-2/5 lg:h-1/4 lg:w-3/5 h-1/4 w-5/6 !justify-center items-center",children:[(0,r.jsx)(l,{onValueChange:function(e){return t(e)},name:"InputLink",placeholder:"Input Your Picture Here",type:"text",value:n,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0}),(0,r.jsx)(i,{onClick:function(){fetch("https://api.clarifai.com/v2/models/".concat("face-detection","/versions/").concat("6dc7e46bc9124c5c88824be4822abe105","/outputs"),c).then((function(e){return console.log(e)})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))},type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-500",textColor:"text-white",padding:"py-2",marginLeft:"lg:ml-4",effects:"hover:bg-purple-900",children:"Detect!"})]})},d=t(5675),u=t.n(d),f={src:"/_next/static/media/strategy-svgrepo-com.f9a4f7ef.svg",height:512,width:512},h=function(){return(0,r.jsxs)("div",{className:"flex w-full bg-opacity-5 bg-violet-600 bg-clip-padding backdrop-blur-lg justify-between",children:[(0,r.jsx)("div",{className:"flex w-1/2 mt-4 ml-6 justify-start mb-5 items-center",children:(0,r.jsx)(u(),{src:f,height:90,width:90})}),(0,r.jsx)("div",{className:"flex justify-end items-center mr-10 w-1/2",children:(0,r.jsx)(i,{width:"w-24",height:"h-12",backGroundColor:"bg-slate-900",borderColor:"border-black ho",textColor:"text-white",rounded:"rounded-full",type:"button",border:"border-2",effects:"hover:bg-purple-900",children:"SignOut"})})]})},p=t(4051),m=t.n(p),x=t(6868),g=t.n(x),b=t(5241);function v(e,n,t,r,o,c,a){try{var i=e[c](a),l=i.value}catch(s){return void t(s)}i.done?n(l):Promise.resolve(l).then(r,o)}var w=function(){var e=function(){var e,n=(e=m().mark((function e(n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,(0,b.R)(n);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var c=e.apply(n,t);function a(e){v(c,r,o,a,i,"next",e)}function i(e){v(c,r,o,a,i,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(g(),{id:"tsparticles",init:e,options:{background:{},fpsLimit:144,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#fff"},links:{color:"#fff",distance:150,enable:!1,opacity:.5,width:1},collisions:{enable:!1},move:{direction:"bottom",enable:!0,outModes:{default:"bounce"},random:!1,speed:1.75,straight:!1},number:{density:{enable:!0,area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{value:{min:1,max:5}}},detectRetina:!0}})})},j=function(e){return(0,r.jsxs)("div",{className:"flex flex-col text-white justify-start items-center",children:[(0,r.jsxs)("p",{className:"text-center text-2xl",children:["Hello ",e.name,", your current rank is..."]}),(0,r.jsxs)("h1",{className:"text-6xl",children:["#",e.rank]})]})},y=function(){return(0,r.jsxs)("div",{className:"h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 flex flex-col text-center justify-items-center",children:[(0,r.jsx)(w,{}),(0,r.jsx)("div",{className:"z-50 h-1/5",children:(0,r.jsx)(h,{})}),(0,r.jsx)("div",{className:"flex z-50 justify-center items-end h-2/5",children:(0,r.jsx)(j,{name:"Fernando",rank:15})}),(0,r.jsxs)("div",{className:"flex flex-col z-50 justify-center items-center h-3/5",children:[(0,r.jsx)("p",{className:"text-white mb-5 text-xl",children:"This Magic brain will detect faces in your pictures. Fit it a try."}),(0,r.jsx)(s,{})]})]})}}},function(e){e.O(0,[257,774,888,179],(function(){return n=9497,e(e.s=n);var n}));var n=e.O();_N_E=n}]);