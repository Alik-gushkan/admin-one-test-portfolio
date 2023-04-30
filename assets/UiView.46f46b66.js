import{x as v,G as b,X as P,c as R,w as e,_ as W,o as j,a as o,Y as T,f as m,g as _,j as t,d as n,u as l,i as h,z as p,Z as y,e as k,B as O,T as $,b as E,$ as z,a0 as G,a1 as J,a2 as X,a3 as Y,a4 as A,a5 as Z,a6 as f,a7 as q}from"./index.925db1b5.js";import{_ as w}from"./SectionTitle.aaaae2b9.js";import{_ as M}from"./FormField.63be3574.js";import{_ as I}from"./FormCheckRadioGroup.9315438a.js";import{C as F}from"./CardBoxComponentEmpty.ed5acf01.js";const H=t("p",null,"This is sample modal",-1),K=t("p",null,"Lorem ipsum dolor",-1),Q=t("p",null,"This is sample modal",-1),ll=t("p",null,"Lorem ipsum dolor",-1),ol=t("p",null,"This is sample modal",-1),el=t("p",null,"Lorem ipsum dolor",-1),nl={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},tl={class:"space-y-12"},al=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),il=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),ul=t("div",{class:"space-y-3"},[t("p",null,"Click to see in action")],-1),sl=t("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"},"Notifications",-1),dl={class:"flex items-center justify-center mt-6"},cl=t("b",null,"Info state",-1),rl=t("b",null,"Success state",-1),fl=t("b",null,"Warning state",-1),ml=t("b",null,"Danger state",-1),_l=t("b",null,"Contrast",-1),bl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},pl=t("div",{class:"space-y-3"},[t("p",null,"Card with title, icon & footer")],-1),Vl={__name:"UiView",setup(gl){const S=v(!1),D=v(!1),N=v(!1),U=v([]),r=b(()=>U.value.indexOf("outline")>-1),g=v([]),i=b(()=>g.value.indexOf("outline")>-1),u=b(()=>g.value.indexOf("small")>-1),s=b(()=>g.value.indexOf("disabled")>-1),d=b(()=>g.value.indexOf("rounded")>-1),x=v(["icon"]),C=b(()=>x.value.indexOf("outline")>-1),B=b(()=>x.value.indexOf("small")>-1),V=b(()=>x.value.indexOf("icon")>-1?z:null),L=P();return(vl,a)=>(j(),R(W,null,{default:e(()=>[o(T,{modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=c=>S.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[H,K]),_:1},8,["modelValue"]),o(T,{modelValue:D.value,"onUpdate:modelValue":a[1]||(a[1]=c=>D.value=c),title:"Unhandled exception",button:"danger"},{default:e(()=>[Q,ll]),_:1},8,["modelValue"]),o(T,{modelValue:N.value,"onUpdate:modelValue":a[2]||(a[2]=c=>N.value=c),title:"Success",button:"success"},{default:e(()=>[ol,el]),_:1},8,["modelValue"]),o(w,{first:""},{default:e(()=>[m("Dark mode")]),_:1}),o(h,null,{default:e(()=>[o(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[t("div",nl,[o(n,{label:"Toggle",color:"contrast",onClick:a[3]||(a[3]=c=>l(L).setDarkMode())})])]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Modal examples")]),_:1}),o(h,null,{default:e(()=>[t("div",tl,[o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[4]||(a[4]=c=>S.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(y,{title:"Please confirm action"},{default:e(()=>[o(n,{icon:l(G),color:"whiteDark",small:"","rounded-full":""},null,8,["icon"])]),_:1}),al]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[5]||(a[5]=c=>D.value=!0)},{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[o(y,{title:"Unhandled exception"}),il]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:a[6]||(a[6]=c=>N.value=!0)},{footer:e(()=>[o(n,{label:"Done",color:"success"})]),default:e(()=>[o(y,{title:"Success"}),ul]),_:1})])]),_:1}),o(w,{custom:""},{default:e(()=>[sl,t("div",dl,[o(I,{modelValue:U.value,"onUpdate:modelValue":a[7]||(a[7]=c=>U.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(h,null,{default:e(()=>[o(k,{color:"info",icon:l(J),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"info":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[cl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"success",icon:l(X),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"success":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[rl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"warning",icon:l(Y),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"warning":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[fl,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"danger",icon:l(A),outline:l(r)},{right:e(()=>[o(n,{label:"Button",color:l(r)?"danger":"white",outline:l(r),"rounded-full":"",small:""},null,8,["color","outline"])]),default:e(()=>[ml,m(". NotificationBar ")]),_:1},8,["icon","outline"]),o(k,{color:"contrast",icon:l(Z),outline:l(r)},{default:e(()=>[_l,m(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),o(w,null,{default:e(()=>[m("Buttons")]),_:1}),o(h,null,{default:e(()=>[o(_,null,{default:e(()=>[o(M,{label:"Settings"},{default:e(()=>[o(I,{modelValue:g.value,"onUpdate:modelValue":a[8]||(a[8]=c=>g.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",label:"Button",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o(O),o(p,null,{default:e(()=>[o(n,{color:"lightDark",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"contrast",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"info",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"success",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"warning",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"]),o(n,{color:"danger",icon:l(f),small:l(u),outline:l(i),disabled:l(s),"rounded-full":l(d)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Pills")]),_:1}),o(h,null,{default:e(()=>[o(_,null,{default:e(()=>[o(M,{label:"Settings"},{default:e(()=>[o(I,{modelValue:x.value,"onUpdate:modelValue":a[9]||(a[9]=c=>x.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",icon:"Icon"}},null,8,["modelValue"])]),_:1}),o(O),o(p,null,{default:e(()=>[o($,{color:"contrast",label:"Contrast",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"info",label:"Info",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"success",label:"Success",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"warning",label:"Warning",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"]),o($,{color:"danger",label:"Danger",small:l(B),outline:l(C),icon:l(V)},null,8,["small","outline","icon"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[m("Cards")]),_:1}),o(h,null,{default:e(()=>[t("div",bl,[o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[o(y,{title:"With title & icon"},{default:e(()=>[o(n,{icon:l(q),color:"whiteDark","rounded-full":""},null,8,["icon"])]),_:1}),pl]),_:1}),o(_,null,{footer:e(()=>[o(p,null,{default:e(()=>[o(n,{label:"Confirm",color:"info"}),o(n,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[m(" Just body & footer ")]),_:1})]),o(E,{icon:l(A),title:"Empty variation"},null,8,["icon"]),o(_,null,{default:e(()=>[o(F)]),_:1})]),_:1})]),_:1}))}};export{Vl as default};
