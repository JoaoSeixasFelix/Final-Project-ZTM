(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{4758:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(9689)}])},5255:function(n,e){"use strict";e.Z={src:"/_next/static/media/strategy-svgrepo-com.f9a4f7ef.svg",height:512,width:512}},7543:function(n,e,t){"use strict";t.d(e,{z:function(){return i}});var r=t(5893),a=t(4184),o=t.n(a),i=(t(7294),function(n){var e=n.children,t=n.onClick,a=n.type,i=(n.disabled,n.width),c=n.height,l=n.backGroundColor,s=n.textColor,d=n.border,u=n.borderColor,f=n.borderRadius,h=n.margin,g=n.marginTop,p=n.marginRight,m=n.marginBottom,x=n.marginLeft,w=n.padding,b=n.paddingTop,v=n.paddingBottom,j=n.paddingRight,C=n.paddingLeft,y=n.rounded,N=n.effects;return(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:t,type:a,className:o()("".concat(l,"\n           ").concat(s,"\n           ").concat(i,"\n           ").concat(c,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(f,"\n           ").concat(h,"\n           ").concat(g,"\n           ").concat(p,"\n           ").concat(m,"\n           ").concat(x,"\n           ").concat(w,"\n           ").concat(b,"\n           ").concat(v,"\n           ").concat(j,"\n           ").concat(C,"\n           ").concat(y,"\n           ").concat(N,"\n           font-bold\n           font-Poppins")),children:e})})})},5740:function(n,e,t){"use strict";t.d(e,{I:function(){return i}});var r=t(5893),a=t(4184),o=t.n(a),i=function(n){var e=n.onValueChange,t=n.name,a=n.placeholder,i=n.value,c=void 0===i?"":i,l=n.type,s=n.width,d=n.bgColor,u=n.textColor,f=n.borderColor,h=n.margin,g=n.marginTop,p=n.marginRight,m=n.marginBottom,x=n.marginLeft,w=n.padding,b=n.required;return(0,r.jsx)("div",{children:(0,r.jsx)("input",{onChange:function(n){return e(n.target.value)},name:t,placeholder:a,value:c,type:l,required:b,className:o()("".concat(f,"\n           ").concat(d,"\n           ").concat(u,"\n           ").concat(s,"\n           ").concat(h,"\n           ").concat(g,"\n           ").concat(p,"\n           ").concat(m,"\n           ").concat(x,"\n           ").concat(w,"\n           font-bold rounded-lg text-xs\n           shadow appearance-none border-2 \n          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline required"))})})}},9689:function(n,e,t){"use strict";t.r(e);var r=t(4051),a=t.n(r),o=t(5893),i=t(5675),c=t.n(i),l=t(1664),s=t.n(l),d=t(5255),u=t(7294),f=t(7543),h=t(5740),g=t(8467),p=t(5856),m=t(1163),x=t.n(m);function w(n,e,t,r,a,o,i){try{var c=n[o](i),l=c.value}catch(s){return void t(s)}c.done?e(l):Promise.resolve(l).then(r,a)}e.default=function(){var n=(0,p.a)().login,e=(0,u.useState)(""),t=e[0],r=e[1],i=(0,u.useState)(""),l=i[0],m=i[1],b=(0,u.useCallback)(function(){var e,r=(e=a().mark((function e(r){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!(0===t.length||l.length<8)){e.next=4;break}return alert("Email or password is invalid."),e.abrupt("return");case 4:return e.prev=4,e.next=7,g.h.post("/signin",{email:t,password:l});case 7:200===(o=e.sent).status?(n({id:o.data.userId,username:o.data.username}),x().push("/homepage")):alert("Erro ao fazer login. Por favor, tente novamente."),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Erro ao fazer login. Por favor, tente novamente mais tarde."),console.error("Erro ao fazer login:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function i(n){w(o,r,a,i,c,"next",n)}function c(n){w(o,r,a,i,c,"throw",n)}i(void 0)}))});return function(n){return r.apply(this,arguments)}}(),[t,l,n]);return(0,o.jsxs)("div",{className:"flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center",children:[(0,o.jsx)("div",{className:"flex w-full justify-start h-1/5 mt-4 ml-6 mr-6",children:(0,o.jsx)(c(),{src:d.Z,width:100,height:100})}),(0,o.jsxs)("div",{className:"flex flex-col items-center mt-16 h-4/5",children:[(0,o.jsx)("div",{className:"flex items-end h-1/6 w-full mb-6 text-white text-3xl",children:(0,o.jsx)("p",{className:"flex w-full h-full justify-center",children:"Sign In"})}),(0,o.jsxs)("form",{onSubmit:b,className:" bg-indigo-400 bg-opacity-40 -mt-10 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-md rounded px-6 pt-6 pb-8 mb-4",children:[(0,o.jsxs)("label",{children:["Login",(0,o.jsx)(h.I,{onValueChange:function(n){return r(n)},name:"login",placeholder:" Inform your email",type:"email",value:t,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",marginBottom:"mb-3",required:!0})]}),(0,o.jsxs)("label",{children:["Password",(0,o.jsx)(h.I,{onValueChange:function(n){return m(n)},name:"password",placeholder:" **********",type:"password",value:l,borderColor:"border-slate-500",width:"xl:w-96 lg:w-96 w-60",padding:"py-3",bgColor:"white",textColor:"white",required:!0})]}),(0,o.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,o.jsx)("div",{className:"text-sm",children:(0,o.jsx)(s(),{href:"/forgotpassword",children:"Forgot Password?"})}),(0,o.jsx)(f.z,{type:"submit",width:"xl:w-44 lg:w-44 w-60",backGroundColor:"bg-purple-900",textColor:"text-white",padding:"py-2 px-4",marginTop:"lg:mt-0 mt-1",marginLeft:"lg:ml-4",effects:"rounded hover:bg-purple-900",children:"Sign In"})]})]}),(0,o.jsxs)("div",{className:"flex bg-indigo-400 bg-opacity-50 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center",children:[(0,o.jsx)("p",{className:"text-lg",children:"New?"}),(0,o.jsx)(s(),{href:"/signup",children:(0,o.jsx)("a",{className:"m-1 text-white no-underline hover:underline text-lg",children:"Create an account."})})]})]})]})}},8467:function(n,e,t){"use strict";t.d(e,{N:function(){return o},h:function(){return i}});var r=t(9669),a=t.n(r),o=a().create({baseURL:"https://api.clarifai.com"}),i=a().create({baseURL:"http://localhost:8000"})},1163:function(n,e,t){n.exports=t(880)}},function(n){n.O(0,[632,774,888,179],(function(){return e=4758,n(n.s=e);var e}));var e=n.O();_N_E=e}]);