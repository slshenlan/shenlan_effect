import{a9 as f,d as x,n as w,o as v,i as E,aa as b,ab as g,ac as S,ad as y,ae as I,af as k,ag as B,ah as C,j as M,k as F,g as G}from"./vendor-79070444.js";import{_ as q}from"./index-c333b85b.js";const z=n=>(M("data-v-a069c666"),n=n(),F(),n),A={class:"sl-layout-content"},D=z(()=>G("div",{id:"three-dom"},null,-1)),H=[D],L={__name:"index",setup(n){const{proxy:l}=f(),{$pub:i}=l;x(()=>{w(()=>{m()})});function m(){const{dom:a,width:o,height:c}=i.slGetThreeDom(),t=new b,s=new g(75,o/c,.1,1e3),e=new S;e.setSize(o,c),a.appendChild(e.domElement);const _=new y(.5,.5,.5),p=new I({color:65280}),u=new k(_,p);t.add(u),s.position.z=10,e.render(t,s);const r=new B(s,e.domElement);r.enableDamping=!0;const h=new C(5);t.add(h);function d(){r.update(),requestAnimationFrame(d),e.render(t,s)}d(),window.addEventListener("dblclick",()=>{document.fullscreenElement?document.exitFullscreen():e.domElement.requestFullscreen()})}return(a,o)=>(v(),E("div",A,H))}},O=q(L,[["__scopeId","data-v-a069c666"]]);export{O as default};