(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{4758:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(9689)}])},5255:function(n,e){"use strict";e.Z={src:"/_next/static/media/strategy-svgrepo-com.f9a4f7ef.svg",height:512,width:512}},7543:function(n,e,t){"use strict";t.d(e,{z:function(){return i}});var r=t(5893),o=t(4184),a=t.n(o),i=(t(7294),function(n){var e=n.children,t=n.onClick,o=n.type,i=(n.disabled,n.width),c=n.height,l=n.backGroundColor,s=n.textColor,d=n.border,u=n.borderColor,f=n.borderRadius,g=n.margin,h=n.marginTop,m=n.marginRight,p=n.marginBottom,x=n.marginLeft,w=n.padding,b=n.paddingTop,v=n.paddingBottom,j=n.paddingRight,C=n.paddingLeft,y=n.rounded,N=n.effects;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:t,type:o,className:a()("".concat(l,"\n           ").concat(s,"\n           ").concat(i,"\n           ").concat(c,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(f,"\n           ").concat(g,"\n           ").concat(h,"\n           ").concat(m,"\n           ").concat(p,"\n           ").concat(x,"\n           ").concat(w,"\n           ").concat(b,"\n           ").concat(v,"\n           ").concat(j,"\n           ").concat(C,"\n           ").concat(y,"\n           ").concat(N,"\n           font-bold\n           font-Poppins")),children:e})})})},5740:function(n,e,t){"use strict";t.d(e,{I:function(){return i}});var r=t(5893),o=t(4184),a=t.n(o),i=function(n){var e=n.onValueChange,t=n.name,o=n.placeholder,i=n.value,c=void 0===i?"":i,l=n.type,s=n.width,d=n.bgColor,u=n.textColor,f=n.borderColor,g=n.margin,h=n.marginTop,m=n.marginRight,p=n.marginBottom,x=n.marginLeft,w=n.padding,b=n.required;return(0,r.jsx)("div",{children:(0,r.jsx)("input",{onChange:function(n){return e(n.target.value)},name:t,placeholder:o,value:c,type:l,required:b,className:a()("".concat(f,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(s,"\n           ").concat(g,"\n           ").concat(h,"\n           ").concat(m,"\n           ").concat(p,"\n           ").concat(x,"\n           ").concat(w,"\n           font-bold rounded-lg text-xs\n           shadow appearance-none border-2 \n          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline required"))})})}},9689:function(n,e,t){"use strict";t.r(e);var r=t(4051),o=t.n(r),a=t(5893),i=t(5675),c=t.n(i),l=t(1664),s=t.n(l),d=t(5255),u=t(7294),f=t(7543),g=t(5740),h=t(8467),m=t(5856);function p(n,e,t,r,o,a,i){try{var c=n[a](i),l=c.value}catch(s){return void t(s)}c.done?e(l):Promise.resolve(l).then(r,o)}e.default=function(){var n=(0,m.a)().login,e=(0,u.useState)(""),t=e[0],r=e[1],i=(0,u.useState)(""),l=i[0],x=i[1],w=(0,u.useCallback)(function(){var e,r=(e=o().mark((function e(r){var a,i,c,s,d,u,f,g,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),0!==t.length){e.next=4;break}return alert("Email or password is invalid."),e.abrupt("return");case 4:return e.prev=4,e.next=7,h.Z.post("/signin",{email:t,password:l});case 7:a=e.sent,i=a.data,c=i.token,s=i.user,c&&s?(d=s.id,u=s.name,f=s.entries,g=s.email,m=s.joined,n({id:d,name:u,entries:f,email:g,joined:m,token:c})):alert("Erro ao fazer login. Por favor, tente novamente."),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),alert("Erro ao fazer login. Por favor, tente novamente mais tarde."),console.error("Erro ao fazer login:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(n){p(a,r,o,i,c,"next",n)}function c(n){p(a,r,o,i,c,"throw",n)}i(void 0)}))});return function(n){return r.apply(this,arguments)}}(),[t,l,n]);return(0,a.jsxs)("div",{className:"flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center",children:[(0,a.jsx)("div",{className:"flex w-full justify-start h-1/5 mt-4 ml-6 mr-6",children:(0,a.jsx)(c(),{src:d.Z,width:100,height:100})}),(0,a.jsxs)("div",{className:"flex flex-col items-center mt-16 h-4/5",children:[(0,a.jsx)("div",{className:"flex items-end h-1/6 w-full mb-6 text-white text-3xl",children:(0,a.jsx)("p",{className:"flex w-full h-full justify-center",children:"Sign In"})}),(0,a.jsxs)("form",{onSubmit:w,className:" bg-indigo-400 bg-opacity-40 -mt-10 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-md rounded px-6 pt-6 pb-8 mb-4",children:[(0,a.jsxs)("label",{children:["Login",(0,a.jsx)(g.I,{onValueChange:function(n){return r(n)},name:"login",placeholder:" Inform your email",type:"email",value:t,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,a.jsxs)("label",{children:["Password",(0,a.jsx)(g.I,{onValueChange:function(n){return x(n)},name:"password",placeholder:" **********",type:"password",value:l,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0})]}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,a.jsx)("div",{className:"text-sm",children:(0,a.jsx)(s(),{href:"/forgotpassword",children:"Forgot Password?"})}),(0,a.jsx)(f.z,{type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-900",textColor:"text-white",padding:"py-2 px-4",marginTop:"lg:mt-0 mt-1",marginLeft:"lg:ml-4",effects:"rounded hover:bg-purple-900",children:"Sign In"})]})]}),(0,a.jsxs)("div",{className:"flex bg-indigo-400 bg-opacity-50 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center",children:[(0,a.jsx)("p",{className:"text-lg",children:"New?"}),(0,a.jsx)(s(),{href:"/signup",children:(0,a.jsx)("a",{className:"m-1 text-white no-underline hover:underline text-lg",children:"Create an account."})})]})]})]})}}},function(n){n.O(0,[942,774,888,179],(function(){return e=4758,n(n.s=e);var e}));var e=n.O();_N_E=e}]);