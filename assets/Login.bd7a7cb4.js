import{U as w}from"./UserLayout.0ff5f811.js";import{H as y,L as g,G as v,r as l,o as i,g as k,w as n,b as d,d as e,I as L,J as u,K as V,c as f,t as p,h as b,a3 as F,n as T,e as x}from"./app.e9c6fad6.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.b95883a9.js";const C={components:{Head:y,UserLayout:w,Link:g},data:()=>({passwordFieldType:"password"}),props:{errors:Object},methods:{submit(){this.form.post(route("login"),{preserveScroll:!0,onFinish:()=>{this.form.reset("password")}})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:v({email:"",password:""})}},mounted(){}},j={class:"pt-6 px-4 mx-4 text-neutral-600"},B=e("h1",{class:"underline underline-offset-[12px] mb-8 text-center text-xl font-bold"},"\xA0\xA0\xA0\u30ED\u30B0\u30A4\u30F3\xA0\xA0\xA0",-1),H={class:"mb-6"},N=e("label",{for:"text1",class:"block text-md font-bold pl-2 mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1),D={key:0,class:"text-red-500 text-sm mt-1"},M={class:"mb-6"},S=e("label",{for:"text2",class:"block text-md font-bold pl-2 mb-2"},"\u30D1\u30B9\u30EF\u30FC\u30C9",-1),q=["type"],z={key:0,class:"text-red-500 text-sm mt-1"},E={class:"block mb-8 px-2"},G={class:"flex items-center cursor-pointer gap-2"},I=e("span",{class:"text-md"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),J={class:"mb-8 text-center border border-[#ffbb00] rounded-full p-0.5 w-fit mx-auto"},K=["disabled"],O={class:"flex gap-6 justify-center"},A={class:"mb-8 flex items-center justify-center mt-5"},P={class:"mb-8 flex items-center justify-center mt-5"};function Q(r,t,a,s,R,c){const h=l("Head"),m=l("Link"),_=l("UserLayout");return i(),k(_,null,{default:n(()=>[d(h,{title:"\u30ED\u30B0\u30A4\u30F3"}),e("div",j,[B,e("form",{onSubmit:t[3]||(t[3]=L(o=>c.submit(),["prevent"]))},[e("div",H,[N,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.email=o),id:"text1",type:"email",class:"w-full h-10 text-neutral-700 border-neutral-300 shadow-xs focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@oripa-kingdom.com"},null,512),[[V,s.form.email]]),a.errors.email?(i(),f("div",D,p(a.errors.email),1)):b("",!0)]),e("div",M,[S,u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.password=o),id:"text2",type:r.passwordFieldType,class:"w-full h-10 text-neutral-700 shadow-xs border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,q),[[F,s.form.password]]),a.errors.password?(i(),f("div",z,p(a.errors.password),1)):b("",!0)]),e("div",E,[e("label",G,[e("input",{type:"checkbox",onClick:t[2]||(t[2]=o=>c.switchVisibility()),class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),I])]),e("div",J,[e("button",{type:"submit",class:T([{"opacity-25":s.form.processing},"inline-block items-center px-10 py-1 bg-gradient-to-b from-[#ff9f2a] to-[#ffbb00] rounded-full font-semibold text-md text-white uppercase tracking-widest hover:bg-indigo-900 active:bg-indigo-900"]),disabled:s.form.processing}," \u30ED\u30B0\u30A4\u30F3 ",10,K)]),e("div",O,[e("div",A,[d(m,{href:r.route("password.request"),class:"underline text-sm text-neutral-600 hover:text-yellow-500 active:text-yellow-500"},{default:n(()=>[x("\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u306E\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])]),e("div",P,[d(m,{href:r.route("register"),class:"underline text-sm text-neutral-600 hover:text-yellow-500 active:text-yellow-500"},{default:n(()=>[x("\u65B0\u898F\u4F1A\u54E1\u767B\u9332\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])])],32)])]),_:1})}const $=U(C,[["render",Q]]);export{$ as default};
