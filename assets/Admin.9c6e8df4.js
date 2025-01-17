import{C,S as T,F as D,f as L,o as O,N as I,V as B,r as S,v as N,I as j,g as z,a as F,_ as R,T as V}from"./toastify.b95883a9.js";import{o as l,c as f,d as e,L as X,u,r,b as n,w as a,t as _,e as x,g,h as A,i as H}from"./app.e9c6fad6.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";function E(t,o){return l(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function K(t,o){return l(),f("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})])}const W={components:{Category:C,Sidebar:T,Footer:D,TransitionRoot:L,TransitionChild:O,Dialog:I,DialogOverlay:B,XMarkIcon:S,ChevronLeftIcon:K,Bars3Icon:E,Link:X,Menu:N,MenuButton:j,MenuItems:z,MenuItem:F,Logo:R},props:{closeModal:Function},data(){return{sidebarOpened:!1,isDialogMessage:!1,dialogMessage:"",dialogTitle:"",user:{},point_value:0,dp_value:0,point_link:route("test.user.point"),hide_cat_bar:"",gacha_button:{}}},mounted(){this.user=u().props.value.auth.user,this.user&&(this.point_value=this.user.point,this.dp_value=this.user.dp),this.gacha_button=u().props.value.gacha_button,this.hide_cat_bar=u().props.value.hide_cat_bar},computed:{flash(){return u().props.value.flash}},watch:{flash:function(t,o){t.type=="notification"&&this.notification(t.message),t.type=="dialog"&&(this.dialogMessage=t.message,this.dialogTitle=t.title,this.isDialogMessage=!0)}},methods:{format_number(t){return String(t).replace(/(.)(?=(\d{3})+$)/g,"$1,")},notification(t){t&&V({text:t,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!1,className:"toastify-content newClass",onClick:function(){}}).showToast()},back(){window.history.back()}}},q={class:"flex min-h-screen text-neutral-700 text-base underline-offset-2 font-medium"},G={class:"fixed h-full right-0 z-40"},J={class:"flex flex-col relative h-full w-64 bg-gray-100 border-l border-neutral-200 ml-auto"},Q={class:"flex-1 overflow-y-auto"},U={class:"flex flex-col text-neutral-700 rounded relative z-20 top-20 w-fit min-w-[12rem] max-w-md bg-neutral-50 border-l border-neutral-200 m-auto"},Y={class:"pt-3 pb-1 px-1 text-center font-bold border-b mb-2"},Z=["innerHTML"],$=e("hr",{class:"mt-3"},null,-1),ee={class:"min-h-screen w-full"},te={class:"flex-shrink-0 w-full backdrop-blur-sm z-[10] fixed bg-white border-b border-yellow-400"},oe={class:"flex justify-center xl:px-8 px-0 items-center h-[70px]"},se={class:"max-w-3xl w-full flex md:px-0 px-2 mx-auto justify-center md:gap-4 gap-2"},ne={class:"flex items-center flex-1"},re={class:"flex-shrink-0 flex items-center gap-2"},ae={class:"flex items-center md:px-3 px-1.5 rounded-full border border-neutral-600 h-full"},le=e("img",{src:"/images/icon_coin.png",class:"md:h-6 h-4"},null,-1),ie=e("span",{class:"border-l border-neutral-600 md:mx-2 mx-1 h-3"},null,-1),de={class:"relative flex-shrink-0 flex items-center"},ce=e("div",{class:"md:px-4 px-2 border rounded-full border-neutral-600 h-full text-center items-center flex"},"\u30ED\u30B0\u30A4\u30F3",-1),ue={class:"w-full pt-[70px] min-h-screen flex flex-col"},fe={class:"w-full relative flex-1 flex justify-center"},he={class:"max-w-3xl w-full"};function pe(t,o,h,me,s,_e){const v=r("XMarkIcon"),b=r("Sidebar"),d=r("TransitionChild"),p=r("TransitionRoot"),y=r("DialogOverlay"),w=r("Dialog"),k=r("Logo"),m=r("Link"),M=r("Category");return l(),f("div",q,[n(p,{show:s.sidebarOpened,class:"h-full"},{default:a(()=>[n(d,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-x-0","leave-to":"translate-x-full",as:"template"},{default:a(()=>[e("div",G,[e("div",J,[e("button",{onClick:o[0]||(o[0]=c=>s.sidebarOpened=!1),class:"absolute top-[1.125rem] md:right-4 right-2 flex items-center justify-center w-9 h-9 rounded-full focus:outline-none bg-theme bg-theme-hover",type:"button",value:"Close sidebar"},[n(v,{class:"h-5 w-5 rounded-full text-white"})]),e("div",Q,[n(b)])])])]),_:1}),n(d,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",class:"fixed z-30 w-full h-full"},{default:a(()=>[e("div",{class:"bg-neutral-600 h-full bg-opacity-50",onClick:o[1]||(o[1]=c=>s.sidebarOpened=!1)})]),_:1})]),_:1},8,["show"]),n(p,{show:s.isDialogMessage,class:"h-full"},{default:a(()=>[n(w,{open:s.isDialogMessage,onClose:o[3]||(o[3]=c=>{var i;(i=h.closeModal)==null||i.call(),s.isDialogMessage=!1}),class:"fixed h-full inset-0 z-40"},{default:a(()=>[n(d,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-y-full","enter-to":"translate-y-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-y-0","leave-to":"translate-y-full",as:"template"},{default:a(()=>[e("div",U,[e("div",Y,_(s.dialogTitle),1),e("div",{class:"px-4 text-sm text-center",innerHTML:s.dialogMessage},null,8,Z),$,e("button",{onClick:o[2]||(o[2]=c=>{var i;(i=h.closeModal)==null||i.call(),s.isDialogMessage=!1}),class:"cursor-pointer p-2 text-cyan-500 text-center text-base focus-visible:outline-0"}," OK ")])]),_:1}),n(d,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:a(()=>[n(y,{class:"fixed inset-0 bg-neutral-600 h-full bg-opacity-50"})]),_:1})]),_:1},8,["open"])]),_:1},8,["show"]),e("div",ee,[e("div",te,[e("div",oe,[e("div",se,[e("div",ne,[n(k)]),e("div",re,[n(m,{href:s.point_link,class:"text-center text-neutral-600 border border-neutral-600 rounded-full md:text-sm text-xs h-9 p-0.5 hover:bg-yellow-100",as:"button"},{default:a(()=>[e("div",ae,[le,x("\xA0\xA0\xA0"+_(s.point_value)+"\xA0PT\xA0",1),ie,x("\xA0+ ")])]),_:1},8,["href"])]),e("div",de,[this.user?(l(),f("img",{key:0,onClick:o[4]||(o[4]=c=>s.sidebarOpened=!0),class:"w-9 h-9 inline cursor-pointer rounded-full border",src:"/images/user.png"})):(l(),g(m,{key:1,href:t.route("login"),class:"border-solid rounded-full border-neutral-600 border h-9 md:text-sm text-xs p-0.5 text-neutral-600 hover:bg-yellow-100",as:"button"},{default:a(()=>[ce]),_:1},8,["href"]))])])])]),e("main",ue,[s.hide_cat_bar?A("",!0):(l(),g(M,{key:0})),e("div",fe,[e("div",he,[H(t.$slots,"default")])])])])])}const be=P(W,[["render",pe]]);export{be as A,K as r};
