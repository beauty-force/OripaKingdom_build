import{H as k,L,G as N,r as c,o as a,c as n,b as l,w as _,F as i,d as t,t as e,f as m,e as b,g as y,h}from"./app.e9c6fad6.js";import{A as v}from"./Admin.9c6e8df4.js";import{P as A}from"./Pagination.8f4795aa.js";import{G as B}from"./GachaCard.ee0bb11e.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.b95883a9.js";import"./ChevronRightIcon.d954b372.js";import"./GachaButtons.bc8d363c.js";import"./PlayIcon.e9b44360.js";const G={components:{Head:k,AdminLayout:v,Link:L,GachaCard:B,Pagination:A},props:{errors:Object,gachas:Object,search_cond:Object,total:Number,total_exchanged:Number,total_point:Number,total_gacha:Number,id:Number},mounted(){console.log(this.gachas)},methods:{format_number(d){return String(d).replace(/(.)(?=(\d{3})+$)/g,"$1,")}},setup(d){return{form_search:N(d.search_cond)}}},H={class:"md:px-1 px-2"},P={class:"border-b w-full p-2 mb-2 font-semibold flex flex-wrap gap-4 items-center"},V=t("h3",{class:"flex-1"},"\u30AC\u30C1\u30E3\u5C65\u6B74",-1),j=t("span",null,"\u5408\u8A08:",-1),F={class:"w-full flex flex-col gap-4"},O={class:"w-full table-auto"},D=t("thead",null,[t("tr",{class:"border border-gray-400 border-collapse font-bold"},[t("td",{class:"text-center py-2"},"\u30AC\u30C1\u30E3ID"),t("td",{class:"text-center py-2"},"\u30AB\u30C6\u30B4\u30EA\u30FC"),t("td",{class:"text-center py-2"},"\u30AC\u30C1\u30E3\u65E5\u6642"),t("td",{class:"text-center py-2"},"\u88FD\u54C1\u756A\u53F7"),t("td",{class:"text-center py-2"},"\u540D\u524D"),t("td",{class:"text-center py-2"},"\u30EC\u30A2\u5EA6"),t("td",{class:"text-center py-2"},"\u7A2E\u985E"),t("td",{class:"text-center py-2"},"\u72B6\u614B"),t("td",{class:"text-center py-2"},"\u66F4\u65B0\u65E5\u6642")])],-1),S={class:"text-sm border border-gray-400"},E={class:"border-r border-t border-gray-400"},I=["rowspan"],T=["rowspan"],q=["rowspan"],z={class:"text-center py-2 border-r border-gray-200"},J={class:"text-center py-2 border-r border-gray-200"},K={class:"text-center py-2 border-r border-gray-200"},M={class:"text-center py-2 border-r border-gray-200"},Q={class:"text-center py-2 border-r border-gray-200"},R={class:"text-center py-2"},U={class:"border-r border-r-gray-400 border-t border-t-gray-200"},W={class:"text-center py-2 border-r border-gray-200"},X={class:"text-center py-2 border-r border-gray-200"},Y={class:"text-center py-2 border-r border-gray-200"},Z={class:"text-center py-2 border-r border-gray-200"},$={class:"text-center py-2 border-r border-gray-200"},tt={class:"text-center py-2"};function et(d,x,s,rt,st,u){const f=c("Head"),p=c("Link"),g=c("Pagination"),w=c("AdminLayout");return a(),n(i,null,[l(f,{title:"\u30AC\u30C1\u30E3\u5C65\u6B74"}),l(w,null,{default:_(()=>[t("div",H,[t("div",P,[V,j,t("span",null,e(s.total_gacha)+"\u56DE",1),t("span",null,e(u.format_number(s.total_point-s.total_exchanged))+"pt",1),t("span",null,"( "+e(u.format_number(s.total_point))+"pt \u4F7F\u7528\u3001"+e(u.format_number(s.total_exchanged))+"pt \u4EA4\u63DB )",1)]),t("div",F,[t("table",O,[D,t("tbody",S,[(a(!0),n(i,null,m(s.gachas,r=>(a(),n(i,null,[t("tr",E,[t("td",{class:"text-center py-2 border border-gray-400",rowspan:r.products.length},[l(p,{class:"underline text-sky-600",href:d.route("admin.gacha.edit",{id:r.gacha_id})},{default:_(()=>[b(e(r.gacha_id),1)]),_:2},1032,["href"])],8,I),t("td",{class:"text-center py-2 border border-gray-400",rowspan:r.products.length},e(r.category),9,T),t("td",{class:"text-center py-2 border border-gray-400",rowspan:r.products.length},e(r.created_at),9,q),t("td",z,[r.products[0].id>0?(a(),y(p,{key:0,class:"underline text-sky-600",href:d.route("admin.lost_product",{id:r.products[0].id})},{default:_(()=>[b(e(r.products[0].id),1)]),_:2},1032,["href"])):h("",!0)]),t("td",J,e(r.products[0].name),1),t("td",K,e(r.products[0].rare),1),t("td",M,e(r.products[0].type),1),t("td",Q,e(r.products[0].status),1),t("td",R,e(r.products[0].updated_at),1)]),(a(!0),n(i,null,m(r.products.slice(1),o=>(a(),n("tr",U,[t("td",W,[o.id>0?(a(),y(p,{key:0,class:"underline text-sky-600",href:d.route("admin.lost_product",{id:o.id})},{default:_(()=>[b(e(o.id),1)]),_:2},1032,["href"])):h("",!0)]),t("td",X,e(o.name),1),t("td",Y,e(o.rare),1),t("td",Z,e(o.type),1),t("td",$,e(o.status),1),t("td",tt,e(o.updated_at),1)]))),256))],64))),256))])]),l(g,{search_cond:{...s.search_cond,id:s.id},route_name:"admin.users.gacha_log",total:s.total},null,8,["search_cond","total"])])])]),_:1})],64)}const pt=C(G,[["render",et]]);export{pt as default};
