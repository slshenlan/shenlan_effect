import{a9 as w,d as f,n as g,o as S,i as v,aa as C,ab as I,ac as k,ad as y,ae as b,af as B,ag as M,ah as E,a6 as d,ai as G,j as T,k as z,g as A}from"./vendor-79070444.js";import{_ as H}from"./index-c333b85b.js";const P=t=>(T("data-v-c6c9e721"),t=t(),z(),t),W={class:"sl-layout-content"},j=P(()=>A("div",{id:"three-dom"},null,-1)),q=[j],D={__name:"index",setup(t){const{proxy:p}=w(),{$pub:l}=p;f(()=>{g(()=>{_()})});function _(){const{dom:c,width:a,height:r}=l.slGetThreeDom(),o=new C,n=new I(75,a/r,.1,1e3),e=new k;e.setSize(a,r),c.appendChild(e.domElement);const m=new y(.5,.5,.5),h=new b({color:65280}),s=new B(m,h);o.add(s),n.position.z=3,e.render(o,n),new M(n,e.domElement);const u=new E(5);o.add(u);const x=new G;d.to(s.position,{x:2,duration:2,repeat:-1,onStart:()=>{},onComplete:()=>{}}),d.to(s.rotation,{x:2*Math.PI,duration:2});function i(){requestAnimationFrame(i),x.getElapsedTime(),e.render(o,n)}i()}return(c,a)=>(S(),v("div",W,q))}},N=H(D,[["__scopeId","data-v-c6c9e721"]]);export{N as default};