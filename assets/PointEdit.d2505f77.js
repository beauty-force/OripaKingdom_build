import{H as x,G as g,r as b,o as i,c as l,b as _,w as v,F as w,d as t,I as y,J as u,K as c,t as d,h as a}from"./app.e9c6fad6.js";import{A as k}from"./Admin.9c6e8df4.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.b95883a9.js";const L={components:{Head:x,AdminLayout:k},props:{errors:Object,auth:Object,point:Object},data(){return{url:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.form.post(route("admin.point.update"),{preserveScroll:!0})},previewImage(r){const e=r.target.files[0];this.url=URL.createObjectURL(e)}},setup(r){return{form:g({id:r.point.id,title:r.point.title,point:r.point.point,amount:r.point.amount,image:""})}},mounted(){this.url=this.point.image}},U={class:"pt-6 md:px-2 px-4"},j=t("h1",{class:"mb-2 text-lg font-bold"},"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165 \u7DE8\u96C6",-1),A=t("hr",{class:"mb-8"},null,-1),C={class:"mb-4"},H=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30BF\u30A4\u30C8\u30EB\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09",-1),I={key:0,class:"text-red-500 text-sm mt-1"},O={class:"mb-4"},B=t("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u91D1\u984D\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),F={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},S=t("label",{for:"point",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),D={key:0,class:"text-red-500 text-sm mt-1"},E={class:"mb-8"},M=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",-1),R={class:"text-center w-full"},G=["src"],J={key:0,class:"text-red-500 text-sm mt-1"},K=t("div",{class:"mb-8 text-center"},[t("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function P(r,e,o,n,f,m){const p=b("Head"),h=b("AdminLayout");return i(),l(w,null,[_(p,{title:"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165 \u7DE8\u96C6"}),_(h,null,{default:v(()=>[t("div",U,[j,A,t("form",{onSubmit:e[4]||(e[4]=y(s=>m.submit(),["prevent"]))},[t("div",C,[H,u(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>n.form.title=s),id:"text1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.title]]),o.errors.title?(i(),l("div",I,d(o.errors.title),1)):a("",!0)]),t("div",O,[B,u(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>n.form.amount=s),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.amount]]),o.errors.amount?(i(),l("div",F,d(o.errors.amount),1)):a("",!0)]),t("div",N,[S,u(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>n.form.point=s),id:"point",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,n.form.point]]),o.errors.point?(i(),l("div",D,d(o.errors.point),1)):a("",!0)]),t("div",E,[M,t("div",R,[f.url?(i(),l("img",{key:0,src:f.url,class:"inline-block mt-4 h-52"},null,8,G)):a("",!0)]),t("input",{onChange:e[3]||(e[3]=(...s)=>m.previewImage&&m.previewImage(...s)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),o.errors.image?(i(),l("div",J,d(o.errors.image),1)):a("",!0)]),K],32)])]),_:1})],64)}const W=V(L,[["render",P]]);export{W as default};
