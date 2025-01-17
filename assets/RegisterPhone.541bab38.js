import{H as w,L as v,u as h,a as k,G as L,r as i,o as d,g as V,w as g,b as a,d as e,I as F,t as I,c as f,J as c,K as p,n as u,h as b,a3 as U,e as T}from"./app.e9c6fad6.js";import{_ as C}from"./Checkbox.6717d9f2.js";import{U as B}from"./UserLayout.0ff5f811.js";import{b as E,_ as H,a as N}from"./TextInput.9b797f67.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.b95883a9.js";const M={components:{Checkbox:C,Head:w,UserLayout:B,InputError:E,InputLabel:H,TextInput:N,Link:v},data:()=>({passwordFieldType:"password",step_integer:0,step_titles:["\u3054\u672C\u4EBA\u8A8D\u8A3C","\u8A8D\u8A3C\u30B3\u30FC\u30C9\u5165\u529B","\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332"],is_processing:!1,data:{}}),props:{errors:Object},methods:{submit(){this.step_integer==0?this.form.post(route("register.phone.send"),{onFinish:()=>{this.data=h().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=1)}}):this.step_integer==1?this.form.post(route("register.phone.verify"),{onFinish:()=>{this.data=h().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=2)}}):this.form.post(route("register.phone.register"),{onFinish:()=>{}})},submit_phone(){const o={phone:this.form.phone};this.is_processing=!0,k.post(route("register.phone.send"),o).then(t=>{(t.status==201||t.status==200)&&console.log(t.data),this.is_processing=!1}).catch(t=>{this.is_processing=!1,console.log(t)})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:L({phone:"",code:"",email:"",password:""})}},mounted(){}},j={class:"pt-6 md:px-2 px-4 text-neutral-300"},P={class:"mb-2 text-lg font-bold"},S=e("hr",{class:"mb-8"},null,-1),z={key:0},G={class:"mb-8"},J={class:"mb-8 text-center border border-[#ffbb00] rounded-full p-0.5 w-fit mx-auto"},K=["disabled"],O={key:1},R={class:"mb-8"},q={class:"mb-8 text-center border border-[#ffbb00] rounded-full p-0.5 w-fit mx-auto"},A=["disabled"],Q={key:2},W={class:"mb-4"},X={class:"block mb-4"},Y=["type"],Z={class:"block mb-6"},$={class:"flex items-center cursor-pointer"},ee=e("span",{class:"ml-2 text-sm text-gray-600"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),te={class:"mb-8 text-center border border-[#ffbb00] rounded-full p-0.5 w-fit mx-auto"},se=["disabled"],oe={class:"flex items-center justify-center mt-8 mb-8"};function re(o,t,ae,s,ie,m){const _=i("Head"),n=i("InputLabel"),l=i("InputError"),x=i("Link"),y=i("UserLayout");return d(),V(y,null,{default:g(()=>[a(_,{title:"\u65B0\u898F\u767B\u9332"}),e("div",j,[e("form",{onSubmit:t[5]||(t[5]=F((...r)=>m.submit&&m.submit(...r),["prevent"]))},[e("h2",P,I(o.step_titles[o.step_integer]),1),S,o.step_integer==0?(d(),f("div",z,[e("div",G,[a(n,{for:"phone",value:"\u96FB\u8A71\u756A\u53F7",class:"block text-md font-bold pl-4 mb-4"}),c(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.phone=r),id:"phone",type:"tel",class:"w-full border-neutral-300 focus:border-neutral-300 text-neutral-700 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u6570\u5B57\u306E\u307F\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[p,s.form.phone]]),a(l,{class:"mt-2",message:s.form.errors.phone},null,8,["message"])]),e("div",J,[e("button",{type:"submit",class:u([{"opacity-25":s.form.processing},"inline-block items-center px-10 py-1 bg-gradient-to-b from-[#ff9f2a] to-[#ffbb00] rounded-full font-semibold text-md text-white uppercase tracking-widest hover:bg-indigo-900 active:bg-indigo-900"]),disabled:s.form.processing}," \u8A8D\u8A3C\u3078\u9032\u3080 ",10,K)])])):b("",!0),o.step_integer==1?(d(),f("div",O,[e("div",R,[a(n,{for:"code",class:"block text-base pl-2 mb-2",value:"sms\u306B\u8A18\u8F09\u3055\u308C\u305F6\u6841\u306E\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.code=r),id:"code",type:"tel",class:"w-full border-neutral-300 focus:border-neutral-300 text-neutral-700 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[p,s.form.code]]),a(l,{class:"mt-2",message:s.form.errors.code},null,8,["message"])]),e("div",q,[e("button",{type:"submit",class:u([{"opacity-25":s.form.processing},"inline-block items-center px-10 py-1 bg-gradient-to-b from-[#ff9f2a] to-[#ffbb00] rounded-full font-semibold text-base text-white uppercase tracking-widest hover:bg-indigo-900 active:bg-indigo-900"]),disabled:s.form.processing}," \u6B21\u3078 ",10,A)])])):b("",!0),o.step_integer==2?(d(),f("div",Q,[e("div",W,[a(n,{for:"email",class:"block text-md font-bold pl-4 mb-4",value:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"}),c(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.email=r),id:"email",type:"email",class:"w-full border-neutral-300 focus:border-neutral-300 text-neutral-700 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@example.com",autocomplete:"off"},null,512),[[p,s.form.email]]),a(l,{class:"mt-2",message:s.form.errors.email},null,8,["message"])]),e("div",X,[a(n,{for:"password",class:"block text-md font-bold pl-4 mb-4",value:"\u30D1\u30B9\u30EF\u30FC\u30C9"}),c(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>s.form.password=r),id:"password",type:o.passwordFieldType,class:"w-full border-neutral-300 focus:border-neutral-300 text-neutral-700 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,Y),[[U,s.form.password]]),a(l,{class:"mt-2",message:s.form.errors.password},null,8,["message"])]),e("div",Z,[e("label",$,[e("input",{type:"checkbox",onClick:t[4]||(t[4]=r=>m.switchVisibility()),class:"rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),ee])]),e("div",te,[e("button",{type:"submit",class:u([{"opacity-25":s.form.processing},"inline-block items-center px-10 py-1 bg-gradient-to-b from-[#ff9f2a] to-[#ffbb00] rounded-full font-semibold text-base text-white uppercase tracking-widest hover:bg-indigo-900 active:bg-indigo-900"]),disabled:s.form.processing}," \u767B\u9332 ",10,se)])])):b("",!0),e("div",oe,[a(x,{href:o.route("login"),class:"underline text-sm text-cyan-500 hover:text-cyan-700 active:text-cyan-700"},{default:g(()=>[T("\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])],32)])]),_:1})}const pe=D(M,[["render",re]]);export{pe as default};
