import{r as T,p as Ne,n as ae,u as m,o as _,c as $,w as g,a as Ve,R as ve,b as ke,A as ne,E as ue,d as X,e as ye,f as V,g as i,h as N,i as E,v as k,T as Ee,j as je,k as Be,l as v,m as W,q as Ue,t as ze,s as qe,x as Fe,y as Ge,z as Y,O as He,M as Ke,B as Qe,C as We,D as Ze,F as Je,G as Xe,H as Ye,I as be,J as Z,K as L,L as C,N as ee,P as et,Q as A,S as G,U as H,V as tt,W as ot,X as nt,_ as p,Y as st,Z as rt,$ as de,a0 as at,a1 as lt,a2 as it,a3 as ct,a4 as ut,a5 as dt}from"./vendor-79070444.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const mt={__name:"App",setup(e){let t=T(!0);Ne("reload",o);function o(){t.value=!1,ae(()=>{t.value=!0})}return(s,r)=>m(t)?(_(),$(m(ve),{key:0},{default:g(({Component:a})=>[(_(),$(Ve(a)))]),_:1})):ke("",!0)}},K={desc:{zh:"中文",en:"英语",ja:"日文"},key:{zh:"zh-CN",en:"en-US",ja:"ja-JP"}},se={VITE_APP_NAME:"sl_cli_pc_vite",VITE_APP_TITLE:"默认开发环境",VITE_OUTPUT_DIR:"dist",VITE_APP_ENV:"production",VITE_APP_BASE_URL:"",VITE_l7IMAGE:"https://www.ifengniao.com/upload/ybimg/",VITE_DELETE_CONSOLE:"true",VITE_USE_DEBUG:"",VITE_USE_MOCK:"",VITE_ZIP_OUTPUT_DIR:"",VITE_BUNDLE_ANALYZER:"",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I={projectName:se.VITE_APP_NAME,title:se.VITE_APP_TITLE,language:K.key.zh,request:{baseUrl:se.VITE_APP_BASE_URL,successCode:"0000",reloginCode:["RL0001","RL0002","RL0003"]},windowExternal:"aaa",cookieExpires:7,homeName:"home",loginPage:"login",permissionDeniedRedirectPage:"login"},M={cookieExpires:I.cookieExpires,token:`${I.projectName}_TOKEN`,language:`${I.projectName}_LANGUAGE`},B={set:e=>{ne.set(M.token,e,M.cookieExpires)},get:()=>ne.get(M.token),remove:()=>{ne.remove(M.token)}},pt={set:e=>{ue.localStorage.set(M.language,e)},get:()=>{const e=ue.localStorage.get(M.language);return e||I.language}};const x=(e,t)=>{const o=e.__vccOpts||e;for(const[s,r]of t)o[s]=r;return o},b=e=>(je("data-v-1cb80710"),e=e(),Be(),e),_t={class:"sl-loading"},ht={class:"sl-loading-type"},ft={key:0,class:"sl-loading-circular"},gt=b(()=>i("svg",{viewBox:"25 25 50 50",class:"loading-circular"},[i("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1)),vt=[gt],yt={key:1,class:"sl-loading-spinner"},Et=b(()=>i("i",null,null,-1)),bt=b(()=>i("i",null,null,-1)),Tt=b(()=>i("i",null,null,-1)),wt=b(()=>i("i",null,null,-1)),$t=b(()=>i("i",null,null,-1)),It=b(()=>i("i",null,null,-1)),Pt=b(()=>i("i",null,null,-1)),Dt=b(()=>i("i",null,null,-1)),Ct=b(()=>i("i",null,null,-1)),Lt=b(()=>i("i",null,null,-1)),St=b(()=>i("i",null,null,-1)),Ot=b(()=>i("i",null,null,-1)),xt=[Et,bt,Tt,wt,$t,It,Pt,Dt,Ct,Lt,St,Ot],At=b(()=>i("p",null,"加载中...",-1)),Rt={__name:"index",props:{type:{type:Number,default:1},overlay:{type:Boolean,default:!0}},setup(e){const t=T(!1),o=()=>{t.value=!0};return X(()=>{o()}),ye(()=>{}),(s,r)=>(_(),$(Ee,{name:"sl-loading",onAfterLeave:r[0]||(r[0]=a=>s.$emit("destroy"))},{default:g(()=>[V(i("div",_t,[i("div",{class:N(["sl-loading-overlay",{"overlay-color":e.overlay}])},null,2),i("div",ht,[e.type===1?(_(),E("span",ft,vt)):(_(),E("span",yt,xt)),At])],512),[[k,m(t)]])]),_:1}))}},Mt=x(Rt,[["__scopeId","data-v-1cb80710"]]),me="sl-loading";let j=null;const pe={show(e=1,t=!1){if(!document.querySelector(`.${me}`)){const s={type:e,overlay:t};j=document.createElement("div"),j.className=me;const r=v(Mt,s);W(r,j),document.body.appendChild(j.firstElementChild)}},hide(){W(null,j)}};const Nt={class:"sl-message-notice"},Vt=["innerHTML"],kt={__name:"index",props:{message:{type:String,default:""},duration:{type:Number,default:1500},onClose:{type:Function,default:function(){}},onDestroy:{type:Function,default:function(){}}},setup(e){const t=e,o=T(!1);let s=null;const r=()=>{o.value=!0,s!==null&&clearTimeout(s),t.duration>0&&(s=setTimeout(()=>{o.value=!1,t.onClose()},t.duration))};return X(()=>{r()}),ye(()=>{s!==null&&clearTimeout(s)}),(a,n)=>(_(),$(Ee,{name:"sl-message-move-up",onAfterLeave:n[0]||(n[0]=c=>a.$emit("destroy"))},{default:g(()=>[V(i("div",Nt,[i("div",{class:"sl-message-notice-content",innerHTML:e.message},null,8,Vt)],512),[[k,m(o)]])]),_:1}))}},jt=x(kt,[["__scopeId","data-v-2d388326"]]),Q="sl-message";function Bt({type:e,message:t="",duration:o=1500,onClose:s=function(){}}){const r={type:e,message:`
      <div class="${Q}-${e}">
        ${e?"<i></i>":""}
        <span>${t}</span>
      </div>
    `,duration:o,onClose:s},a=document.createElement("div"),n=v(jt,r);n.props.onDestroy=()=>{W(null,a)},W(n,a);const c=document.getElementsByClassName(Q);if(c.length)c[0].appendChild(a.firstElementChild);else{const l=document.createElement("div");l.setAttribute("style","position: fixed; z-index: 9999;top: 24px; left: 0; width: 100%;font-size: 14px; pointer-events: none;"),l.className=Q,document.body.appendChild(l),l.appendChild(a.firstElementChild)}}const Te={msg(e){return this.message("msg",e)},info(e){return this.message("info",e)},success(e){return this.message("success",e)},error(e){return this.message("error",e)},warning(e){return this.message("warning",e)},destroy(){const e=document.getElementsByClassName(Q);e.length&&(e[0].textContent="")},message(e,t){return typeof t=="string"&&(t={message:t}),t.type=e,Bt(t)}},Ut={httpCode:{error400:"错误的请求",error401:"未授权，请重新登录",error403:"拒绝访问",error404:"请求错误，未找到该资源",error405:"请求方法未允许",error408:"请求超时",error500:"服务器端出错",error501:"网络未实现",error502:"网络错误",error503:"服务不可用",error504:"网络超时",error505:"http版本不支持该请求"},page:{prev:"上一页",next:"下一页"}},zt={login:"登录",home:"首页"},qt={tab:"账户密码登录",user:"账户",password:"密码",submit:"登录",rememberMe:"自动登录",userNotEmpty:"账户不能为空",passwordNotEmpty:"密码不能为空"},Ft={base:Ut,sideBarMenu:zt,login:qt},Gt={httpCode:{error400:"Bad Request",error401:"Unauthorized",error403:"Forbidden",error404:"Not Found",error405:"Method Not Allowed",error408:"Request Time-out",error500:"Internal Server Error",error501:"Not Implemented",error502:"Bad Gateway",error503:"Service Unavailable",error504:"Gateway Time-out",error505:"HTTP Version not supported"},page:{prev:"prev",next:"next"}},Ht={base:Gt},Kt={httpCode:{error400:"リクエストが正しくありません",error401:"アクセス権限がありません、再度ログインしてください",error403:"アクセス拒否でした",error404:"リクエストが正しくありません、対象が見つかりませんでした",error405:"リクエストメソッドは承認されていません",error408:"リクエストはタイムアウトしました",error500:"サーバー側がエラーしました",error501:"ネットワークが接続不可でした",error502:"ネットワークがエラーしました",error503:"サービスは利用できません",error504:"ネットワークはタイムアウトしました",error505:"httpバージョンは当該リクエストをサポートしていません"},page:{prev:"前へ",next:"次へ"}},Qt={login:"登录-ja",home:"首页-ja"},Wt={tab:"アカウントログイン",user:"アカウント",password:"パスワード",submit:"ログイン",passwordNotEmpty:"パスワードは必須入力項目です",rememberMe:"自動ログイン",userNotEmpty:"アカウントは必須入力項目です"},Zt={base:Kt,sideBarMenu:Qt,login:Wt},J=Ue({locale:pt.get(),legacy:!1,globalInjection:!0,messages:{[K.key.zh]:{...Ft,...ze},[K.key.en]:{...Ht,...qe},[K.key.ja]:{...Zt,...Fe}}}),we=e=>{Te.error({message:e,duration:1500})},$e={show:e=>{(e==null?void 0:e.loading)!==!1&&pe.show()},hide:()=>{pe.hide()}},Jt=e=>{const t="Content-Type",o="application/json;charset=utf-8";switch(e.headers.Client=!0,e.timeout=1e4,e.method){case"get":e.paramsSerializer={serialize:s=>Ge.stringify(s,{arrayFormat:"repeat"})};break;default:e.headers[t]=o}return e},Xt=e=>{const t=B.get();return e.headers.Authorization=t,e},Yt=e=>{var a;$e.hide();const t=J.messages[J.locale].base.httpCode,o={400:t.error400,401:t.error401,403:t.error403,404:t.error404,405:t.error405,408:t.error408,500:t.error500,501:t.error501,502:t.error502,503:t.error503,504:t.error504,505:t.error505},s=500,r={status:s,msg:o[s]};if(e.code==="ECONNABORTED"&&e.message.indexOf("timeout")!=-1)r.status=504,r.msg=o[504];else if((a=e==null?void 0:e.response)!=null&&a.status){const n=e.response.status;r.status=n,r.msg=o[n]}return we(r.msg),r},eo=e=>{if(Object.prototype.toString.call(e).replace(/^$/,"").toLowerCase()==="[object object]"){const t={};for(const[o,s]of Object.entries(e))s!==""&&s!==void 0&&s!==null&&(t[o]=s);return t}else return e},O={handleToast:we,handleLoading:$e,handleChangeRequestHeader:Jt,handleConfigureAuth:Xt,handleNetworkError:Yt,handleDeleteEmptyField:eo},{baseUrl:to,successCode:oo,reloginCode:no}=I.request,_e=()=>{B.remove(),U.replace({name:I.permissionDeniedRedirectPage})};Y.defaults.baseURL=to;Y.interceptors.request.use(e=>(e=O.handleChangeRequestHeader(e),e=O.handleConfigureAuth(e),e),e=>Promise.reject(e));Y.interceptors.response.use(e=>{O.handleLoading.hide();const t=e.data,o={status:!0,data:t.detail},s=t.code;return s!==oo&&(o.status=!1,setTimeout(()=>{O.handleToast(t.msg?t.msg:t.code)},0),no.indexOf(s)>-1&&_e()),o},e=>{const t=O.handleNetworkError(e);return t.status===401&&setTimeout(()=>{_e()},300),Promise.reject(t)});const z=(e,t,o)=>new Promise((s,r)=>{const a=o&&o.url?o.url:t,n=O.handleDeleteEmptyField(o!=null&&o.data?o.data:{});O.handleLoading.show(o);const c={method:e,url:a};switch(e){case"get":c.params=n;break;default:c.data=n;break}Y(c).then(l=>{l.status?s(l.data):e==="delete"&&s({status:l.status,data:l.data})}).catch(l=>{r(l)})}),so=(e,t)=>z("get",e,t),ro=(e,t)=>z("post",e,t),ao=(e,t)=>z("put",e,t),lo=(e,t)=>z("patch",e,t),io=(e,t)=>z("delete",e,t),q={get:so,post:ro,put:ao,patch:lo,deletes:io};function co(){const e=document.getElementById("three-dom");return{dom:e,width:e.offsetWidth,height:e.offsetHeight}}const Ie={slGetQuery:He,slSetQuery:Ke,slDebounce:Qe,slDeepClone:We,slMontageString:Ze,slDeleteEmptyField:Je,slGetThreeDom:co,slArraySliceTo2D:Xe,slBasePolling:Ye},{baseUrl:uo}=I.request,{slSetQuery:mo,slMontageString:po}=Ie,_o={scanCode:`/ifengniao/cloud/common/feishu/external/getLoginQrCodePrarm
        ${mo({success:"#/main",fail:"#/"})}`,getToken:"/ifengniao/cloud/server/efengniao/token/request",getUserData:"/ifengniao/cloud/server/efengniao/user/loginer"},ie=po(_o,uo),ho=()=>q.get(ie.scanCode,{}),fo=e=>q.get(ie.getToken,e),go=e=>q.get(ie.getUserData,e),Pe={feiShuLogin:ho,getTokenByCode:fo,getUserDataByToken:go},De=be("userInfo",()=>{let e=T(B.get()),t=T(!1),o=Z([]),s=Z({avatar:"",name:""});function r(n){e.value=n,B.set(n)}function a(){try{return new Promise(n=>{Pe.getUserDataByToken({loading:!1}).then(c=>{t.value=!0,s=c.user,n(c)})})}catch{}}return{token:e,hasGetInfo:t,access:o,userMsg:s,setToken:r,getUserInfo:a}}),Ce=(e,t)=>{const o=(n,c)=>{if(!n.length||!c)return;let l=-1,h=n.length;for(;++l<h;){let u=n[l];c(u,l,n)}},s=(n,c)=>n.meta&&n.meta.access&&n.meta.access.length?!!n.meta.access.some(l=>c.indexOf(l)>-1):!0,r=n=>n.children&&n.children.length!==0;let a=[];return o(e,n=>{if(!n.meta||n.meta&&!n.meta.hideInMenu){let c={icon:n.meta&&n.meta.icon||"",name:n.name,meta:n.meta};(r(n)||n.meta&&n.meta.showAlways)&&s(n,t)&&(c.children=Ce(n.children,t)),n.meta&&n.meta.href&&(c.href=n.meta.href),s(n,t)&&a.push(c)}}),a},Le=be("app",()=>{let e=Z({}),t=T(!1),o=L(()=>{let n=De();return Ce(Se,n.access)}),s=T("appName");function r(n){s.value=n}function a(n){t.value=n}return{homeRoute:e,collapsed:t,menuList:o,appName:s,setAppName:r,setCollapsed:a}});const vo={class:"main-icon"},yo={__name:"index",props:{type:{type:String,required:!0},color:{type:String,default:""},size:{type:Number,default:20}},setup(e){return(t,o)=>{const s=C("Icon");return _(),E("div",vo,[v(s,{type:e.type,color:e.color,size:e.size},null,8,["type","color","size"]),ee(t.$slots,"default",{},void 0,!0)])}}},R=x(yo,[["__scopeId","data-v-85d9b9e6"]]);const Eo={class:"side-bar-menu"},bo={class:"menu-un-collapsed"},To={class:"title-span"},wo={class:"title-span"},$o={class:"title-span"},Io={class:"menu-collapsed"},Po={class:"flex"},Do={class:"menu-title"},Co=["onClick"],Lo={__name:"index",props:{collapsed:{type:Boolean,default:!1}},setup(e){const t=et(),o=Le(),s=T(null);let r=T("right-end"),a=Z({name:[]});const n=L(()=>o.menuList),c=L(()=>t.currentRoute.value.name);X(()=>{ae(()=>{xe()})});function l(f){h({name:f})}function h(f,P){let D=P?f.children[0].name:f.name;t.push({name:D})}function u(f){let{title:P}=f.meta;if(P)return P=f.meta&&f.meta.title||f.name,P}function y(f,P){let D=t.currentRoute.value.name;if(f.children&&f.children.length>0){if(P){if(f.children.reduce((F,oe)=>(F.push(oe.name),F),[]).indexOf(D)>-1)return!0}else if(f.children[0].name===D)return!0}else if(f.name===D)return!0;return!1}function xe(){let f=t.currentRoute.value.fullPath.split("/");a.name=[f[f.length-2]],ae(()=>{s.value.updateOpened()})}return(f,P)=>{const D=C("MenuItem"),ce=C("Submenu"),F=C("Menu"),oe=C("DropdownItem"),Ae=C("DropdownMenu"),Re=C("Dropdown"),Me=C("Tooltip");return _(),E("div",{class:N(["main-side-bar",{"min-width":e.collapsed}])},[ee(f.$slots,"default",{},void 0,!0),i("div",Eo,[V(i("div",bo,[v(F,{ref_key:"slMenu",ref:s,class:"side-bar-menu-iview",width:"200","active-name":m(c),"open-names":m(a).name,onOnSelect:l},{default:g(()=>[(_(!0),E(A,null,G(m(n),d=>(_(),E(A,null,[d.children&&d.children.length===1?(_(),$(D,{key:`${d.children[0].name}`,name:`${d.children[0].name}`},{default:g(()=>[v(m(R),{type:d.children[0].icon},{default:g(()=>[i("span",To,H(u(d.children[0])),1)]),_:2},1032,["type"])]),_:2},1032,["name"])):(_(),$(ce,{key:`${d.name}`,name:`${d.name}`},{title:g(()=>[i("div",null,[v(m(R),{type:d.icon},{default:g(()=>[i("span",wo,H(u(d)),1)]),_:2},1032,["type"])])]),default:g(()=>[(_(!0),E(A,null,G(d.children,w=>(_(),$(D,{name:`${w.name}`},{default:g(()=>[v(m(R),{type:w.icon},{default:g(()=>[i("span",$o,H(u(w)),1)]),_:2},1032,["type"])]),_:2},1032,["name"]))),256))]),_:2},1032,["name"]))],64))),256))]),_:1},8,["active-name","open-names"])],512),[[k,!e.collapsed]]),V(i("div",Io,[(_(!0),E(A,null,G(m(n),d=>(_(),E(A,null,[d.children&&d.children.length>1?(_(),$(Re,{key:`drop-menu-${d.name}`,transfer:"",placement:m(r),onOnClick:l},{list:g(()=>[v(Ae,null,{default:g(()=>[(_(!0),E(A,null,G(d.children,w=>(_(),$(oe,{name:w.name,selected:y(w)},{default:g(()=>[i("div",Po,[v(m(R),{type:w.icon},null,8,["type"]),i("span",Do,H(u(w)),1)])]),_:2},1032,["name","selected"]))),256))]),_:2},1024)]),default:g(()=>[i("p",{class:N(["dropdown-p",{"dropdown-p-selected":y(d,!0)}])},[v(m(R),{type:d.icon},null,8,["type"])],2)]),_:2},1032,["placement"])):(_(),E("div",{key:`drop-menu-${d.name}`},[v(Me,{transfer:"",content:u(d.children&&d.children[0]?d.children[0]:d),placement:"right"},{default:g(()=>[i("p",{class:N(["tooltip-p",{"tooltip-p-selected":y(d)}]),onClick:w=>h(d,!0)},[v(m(R),{type:d.icon||d.children&&d.children[0].icon},null,8,["type"])],10,Co)]),_:2},1032,["content"])]))],64))),256))],512),[[k,e.collapsed]])])],2)}}},So=x(Lo,[["__scopeId","data-v-3a08ac53"]]);const Oo={class:"main-header-bar"},xo={__name:"index",props:{collapsed:{type:Boolean,default:!1}},emits:["on-collapsed-change"],setup(e,{emit:t}){const o=e;let{collapsed:s}=tt(o);T("md-menu"),T(26);function r(){t("on-collapsed-change",!s.value)}return(a,n)=>(_(),E("div",Oo,[i("div",{class:"option-sidebar",onClick:r}),ee(a.$slots,"default",{},void 0,!0)]))}},Ao=x(xo,[["__scopeId","data-v-250e8803"]]),Ro=""+new URL("logo_min-73840552.png",import.meta.url).href;const Mo={class:"main-logo"},No={class:"sys-name"},Vo=["src"],ko={__name:"index",props:{collapsed:{type:Boolean,default:!1}},setup(e){return(t,o)=>(_(),E("div",Mo,[V(i("div",No,"效果示例",512),[[k,!e.collapsed]]),V(i("img",{key:"min-logo",src:m(Ro)},null,8,Vo),[[k,e.collapsed]])]))}},jo=x(ko,[["__scopeId","data-v-e87d2fc9"]]),he=function(){return document.addEventListener?function(e,t,o){e&&t&&o&&e.addEventListener(t,o,!1)}:function(e,t,o){e&&t&&o&&e.attachEvent("on"+t,o)}}(),fe=function(){return document.removeEventListener?function(e,t,o){e&&t&&e.removeEventListener(t,o,!1)}:function(e,t,o){e&&t&&e.detachEvent("on"+t,o)}}(),Bo=(e,t=0,o,s=500,r)=>{window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)});const a=Math.abs(t-o),n=Math.ceil(a/s*50),c=(l,h,u)=>{if(l===h){r&&r();return}let y=l+u>h?h:l+u;l>h&&(y=l-u<h?h:l-u),e===window?window.scrollTo(y,y):e.scrollTop=y,window.requestAnimationFrame(()=>c(y,h,u))};c(t,o,n)},Uo=i("i",{class:"ivu-icon ivu-icon-ios-arrow-up"},null,-1),zo=[Uo],re="ivu-back-top",qo={__name:"index",props:{height:{type:Number,default:400},bottom:{type:Number,default:30},right:{type:Number,default:30},duration:{type:Number,default:1e3},container:{type:String||null,default:window}},emits:["on-click"],setup(e,{emit:t}){const o=e;let s=T(!1);const r=L(()=>[`${re}`,{[`${re}-show`]:s.value}]),a=L(()=>({bottom:`${o.bottom}px`,right:`${o.right}px`})),n=L(()=>`${re}-inner`),c=L(()=>o.container===window?window:document.querySelector(`.${o.container}`));X(()=>{const u=c.value;he(u,"scroll",l),he(u,"resize",l)}),ot(()=>{const u=c.value;fe(u,"scroll",l),fe(u,"resize",l)});function l(){s.value=c.value.scrollTop>=o.height}function h(){const y=(typeof o.container=="string"?c.value:document.documentElement||document.body).scrollTop;Bo(c.value,y,0,o.duration),t("on-click")}return(u,y)=>(_(),E("div",{class:N(m(r)),style:nt(m(a)),onClick:h},[ee(u.$slots,"default",{},()=>[i("div",{class:N(m(n))},zo,2)])],6))}};const Fo={class:"sl-app-main"},Go={class:"sl-app-main-content"},Ho={class:"sl-app-main-content-layout"},Ko={class:"sl-app-main-content-layout-div"},Qo={__name:"index",setup(e){const t=Le(),{setCollapsed:o}=t,s=L(()=>t.collapsed);function r(a){o(a)}return(a,n)=>(_(),E("div",Fo,[v(m(So),{collapsed:m(s)},{default:g(()=>[v(m(jo),{collapsed:m(s)},null,8,["collapsed"])]),_:1},8,["collapsed"]),i("div",Go,[v(m(Ao),{collapsed:m(s),onOnCollapsedChange:r},null,8,["collapsed"]),i("div",Ho,[i("div",Ko,[v(m(qo),{container:"sl-app-main-content-layout-div"}),v(m(ve))])])])]))}},S=x(Qo,[["__scopeId","data-v-5de10a3c"]]),{t:ge}=J.global,Se=[{path:"/login",name:"login",meta:{title:ge("sideBarMenu.login"),hideInMenu:!0},component:()=>p(()=>import("./index-ffae83bf.js"),["./index-ffae83bf.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-8acab3ba.css"],import.meta.url)},{path:"/",name:"_home",redirect:"/home",component:S,meta:{hideInMenu:!1,notCache:!0},children:[{path:"/home",name:"home",meta:{hideInMenu:!1,title:ge("sideBarMenu.home"),notCache:!0},component:()=>p(()=>import("./index-62bb1d73.js"),["./index-62bb1d73.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-45388eb8.css"],import.meta.url)}]},{path:"/three",name:"three",meta:{title:"THREE"},component:S,children:[{path:"demo1",name:"threeDemo1",meta:{title:"demo1"},component:()=>p(()=>import("./index-8e5970f5.js"),["./index-8e5970f5.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-a31a04f3.css"],import.meta.url)},{path:"demo2",name:"threeDemo2",meta:{title:"demo2"},component:()=>p(()=>import("./index-e19ee604.js"),["./index-e19ee604.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-c9412cbc.css"],import.meta.url)},{path:"demo3",name:"threeDemo3",meta:{title:"demo3"},component:()=>p(()=>import("./index-33233991.js"),["./index-33233991.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-629eb875.css"],import.meta.url)},{path:"demo4",name:"threeDemo4",meta:{title:"demo4"},component:()=>p(()=>import("./index-6dc222d5.js"),["./index-6dc222d5.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-ce8ea824.css"],import.meta.url)},{path:"demo5",name:"threeDemo5",meta:{title:"demo5"},component:()=>p(()=>import("./index-f1604d06.js"),["./index-f1604d06.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-297e219a.css"],import.meta.url)},{path:"demo6",name:"threeDemo6",meta:{title:"demo6"},component:()=>p(()=>import("./index-9de8c2ee.js"),["./index-9de8c2ee.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-66725189.css"],import.meta.url)},{path:"demo7",name:"threeDemo7",meta:{title:"demo7"},component:()=>p(()=>import("./index-63f59de7.js"),["./index-63f59de7.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-844aab71.css"],import.meta.url)}]},{path:"/gsap",name:"gsap",meta:{title:"GSAP"},component:S,children:[{path:"demo1",name:"gsapDemo1",meta:{title:"demo1"},component:()=>p(()=>import("./index-5236b944.js"),["./index-5236b944.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-0382fbae.css"],import.meta.url)},{path:"demo2",name:"gsapDemo2",meta:{title:"demo2"},component:()=>p(()=>import("./index-e1985d6e.js"),["./index-e1985d6e.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-d51077cb.css"],import.meta.url)},{path:"demo3",name:"gsapDemo3",meta:{title:"demo3"},component:()=>p(()=>import("./index-090af46c.js"),["./index-090af46c.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-886cbf03.css"],import.meta.url)}]},{path:"/css",name:"css",meta:{title:"CSS"},component:S,children:[{path:"radar",name:"cssRadar",meta:{title:"radar"},component:()=>p(()=>import("./index-c7f59ae6.js"),["./index-c7f59ae6.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-5671f8b2.css"],import.meta.url)},{path:"button",name:"cssButton",meta:{title:"button"},component:()=>p(()=>import("./index-e1b7ffd7.js"),["./index-e1b7ffd7.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-02ab6890.css"],import.meta.url)},{path:"icons",name:"cssIcons",meta:{title:"icons"},component:()=>p(()=>import("./index-ea210b8e.js"),["./index-ea210b8e.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-aab05a91.css"],import.meta.url)},{path:"loading",name:"cssLoading",meta:{title:"loading"},component:()=>p(()=>import("./index-6c95e9aa.js"),["./index-6c95e9aa.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-d3426ea1.css"],import.meta.url)},{path:"input_line",name:"cssInputLine",meta:{title:"input-line"},component:()=>p(()=>import("./index-8220f970.js"),["./index-8220f970.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-31dd0fa5.css"],import.meta.url)},{path:"text_line",name:"cssTextLine",meta:{title:"text-line"},component:()=>p(()=>import("./index-ee3f9393.js"),["./index-ee3f9393.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-7f2c3a4a.css"],import.meta.url)}]},{path:"/echart",name:"echart",meta:{title:"eChart"},component:S,children:[{path:"echart-demo1",name:"echartDemo1",meta:{title:"饼图"},component:()=>p(()=>import("./index-6c954438.js"),["./index-6c954438.js","./echart-b889b177.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-5a459eb9.css"],import.meta.url)},{path:"echart-demo2",name:"echartDemo2",meta:{title:"折线图"},component:()=>p(()=>import("./index-0393b101.js"),["./index-0393b101.js","./echart-b889b177.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-144c6cdf.css"],import.meta.url)}]},{path:"/antv",name:"antv",meta:{title:"antV"},component:S,children:[{path:"demo1",name:"antvDemo1",meta:{title:"l7"},component:()=>p(()=>import("./index-931ab680.js"),["./index-931ab680.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-65766ba7.css"],import.meta.url)}]},{path:"/countup",name:"countup",meta:{title:"countup.js"},component:S,children:[{path:"demo1",name:"countupDemo1",meta:{title:"数字动画"},component:()=>p(()=>import("./index-2856e6ac.js"),["./index-2856e6ac.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-afd7bf78.css"],import.meta.url)}]}],{title:Wo,permissionDeniedRedirectPage:fn}=I,Zo=(e,t)=>{const o=l=>{let h={...l},u={...l.meta},y="";return u.title&&(typeof u.title=="function"?(u.__titleIsFunction__=!0,y=u.title(h)):y=u.title),u.title=y,h.meta=u,h},s=l=>{let{title:h}=l.meta;if(h)return h=l.meta&&l.meta.title||l.name,h};let r=Wo;const a=o(e),n=s(a),c=n?`${r} - ${n}`:r;window.document.title=c},U=st({history:rt(),routes:Se});U.beforeEach((e,t,o)=>{B.get(),De(),o()});U.afterEach(e=>{Zo(e,U.app),window.scrollTo(0,0)});const Oe={demo:"/demo",error:"/error"},Jo=e=>q.get(Oe.demo,e),Xo=e=>q.put(Oe.error,e),Yo={homeDemo:Jo,homeError:Xo},en=Object.entries(Object.assign({"./path/home.js":Yo,"./path/login.js":Pe}));let le={};en.forEach(e=>{le={...le,...e[1]}});const tn=le;function on(e){e.config.globalProperties.$config=I,e.config.globalProperties.$pub=Ie,e.config.globalProperties.$api=tn,e.config.globalProperties.$Message=de.Message,e.config.globalProperties.$Notice=de.Notice,e.config.globalProperties.$SlMessage=Te}const nn=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"}));function sn(e){e.use(J),e.use(at),e.use(lt)}const rn=Object.freeze(Object.defineProperty({__proto__:null,default:sn},Symbol.toStringTag,{value:"Module"})),an=Object.entries(Object.assign({"/src/components/common/SlCard/index.vue":()=>p(()=>import("./index-7f05fbd2.js"),["./index-7f05fbd2.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-897af3c7.css"],import.meta.url),"/src/components/common/SlCode/index.vue":()=>p(()=>import("./index-7fe38dcd.js"),["./index-7fe38dcd.js","./vendor-79070444.js","./vendor-c4cb18bc.css","./index-5761ec56.css"],import.meta.url)}));function ln(e){const t=/\/([^/]+)\/index\.vue/,o=e.match(t);return o&&o[1].startsWith("Sl")?o[1]:""}function cn(e){e.use({install:t=>{an.forEach(([o,s])=>{const r=ln(o);r&&t.component(r,it(s))})}})}const un=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"}));function dn(e){e.use(ct)}const mn=Object.freeze(Object.defineProperty({__proto__:null,default:dn},Symbol.toStringTag,{value:"Module"}));const pn=Object.entries(Object.assign({"./modules/app-global-properties.js":nn,"./modules/other-plugin.js":rn,"./modules/sl-component.js":un,"./modules/view-ui-plus.js":mn}));function _n(e){pn.forEach(t=>{t[1].default(e)})}const te=ut(mt);_n(te);te.use(dt());te.use(U);te.mount("#app");export{x as _,Le as u};