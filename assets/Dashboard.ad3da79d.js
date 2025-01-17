import{A as D}from"./ApplicationLogo.32d7f09a.js";import{q as M,A as N,x as v,m as L,o as d,c as g,d as e,i as f,J as k,_ as $,b as a,w as o,n as c,C as r,U as B,g as y,L as _,e as u,t as b,h as E,F as j,H as z}from"./app.e9c6fad6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A={class:"relative"},S={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(n){const s=n,t=m=>{l.value&&m.key==="Escape"&&(l.value=!1)};M(()=>document.addEventListener("keydown",t)),N(()=>document.removeEventListener("keydown",t));const i=v(()=>({48:"w-48"})[s.width.toString()]),p=v(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=L(!1);return(m,h)=>(d(),g("div",A,[e("div",{onClick:h[0]||(h[0]=w=>l.value=!l.value)},[f(m.$slots,"trigger")]),k(e("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=w=>l.value=!1)},null,512),[[$,l.value]]),a(B,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[k(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[r(i),r(p)]]),style:{display:"none"},onClick:h[2]||(h[2]=w=>l.value=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[f(m.$slots,"content")],2)],2),[[$,l.value]])]),_:3})]))}},C={__name:"DropdownLink",setup(n){return(s,t)=>(d(),y(r(_),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[f(s.$slots,"default")]),_:3}))}},V={__name:"NavLink",props:["href","active"],setup(n){const s=n,t=v(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,p)=>(d(),y(r(_),{href:n.href,class:c(r(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const s=n,t=v(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,p)=>(d(),y(r(_),{href:n.href,class:c(r(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},O={class:"min-h-screen bg-gray-100"},F={class:"bg-white border-b border-gray-100"},H={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},P={class:"flex justify-between h-16"},T={class:"flex"},U={class:"shrink-0 flex items-center"},q={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},J={class:"hidden sm:flex sm:items-center sm:ml-6"},R={class:"ml-3 relative"},Y={class:"inline-flex rounded-md"},G={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},I=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),K={class:"-mr-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Z={class:"px-4"},ee={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},se={class:"mt-3 space-y-1"},oe={key:0,class:"bg-white shadow"},ae={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ne={__name:"AuthenticatedLayout",setup(n){const s=L(!1);return(t,i)=>(d(),g("div",null,[e("div",O,[e("nav",F,[e("div",H,[e("div",P,[e("div",T,[e("div",U,[a(r(_),{href:t.route("dashboard")},{default:o(()=>[a(D,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",q,[a(V,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[u(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",J,[e("div",R,[a(S,{align:"right",width:"48"},{trigger:o(()=>[e("span",Y,[e("button",G,[u(b(t.$page.props.auth.user.name)+" ",1),I])])]),content:o(()=>[a(C,{href:t.route("profile.edit")},{default:o(()=>[u(" Profile ")]),_:1},8,["href"]),a(C,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[u(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",K,[e("button",{onClick:i[0]||(i[0]=p=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),g("svg",Q,[e("path",{class:c({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",W,[a(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[u(" Dashboard ")]),_:1},8,["href","active"])]),e("div",X,[e("div",Z,[e("div",ee,b(t.$page.props.auth.user.name),1),e("div",te,b(t.$page.props.auth.user.email),1)]),e("div",se,[a(x,{href:t.route("profile.edit")},{default:o(()=>[u(" Profile ")]),_:1},8,["href"]),a(x,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[u(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),g("header",oe,[e("div",ae,[f(t.$slots,"header")])])):E("",!0),e("main",null,[f(t.$slots,"default")])])]))}},re=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),ie=e("div",{class:"py-12"},[e("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[e("div",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},[e("div",{class:"p-6 text-gray-900"}," You're logged in! ")])])],-1),ce={__name:"Dashboard",setup(n){return(s,t)=>(d(),g(j,null,[a(r(z),{title:"Dashboard"}),a(ne,null,{header:o(()=>[re]),default:o(()=>[ie]),_:1})],64))}};export{ce as default};
