import{_ as p}from"./index-c333b85b.js";import{a9 as g,r as x,L as a,o,i as r,l as i,w as h,g as s,Q as u,S as v,u as _,h as k,U as X}from"./vendor-79070444.js";const w=[{cla:"sl-text-border-1",text:"bars",code:{css:`
\`\`\`css
.sl-text-border-1 {
  position: relative;
  &:before,
  &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2d8cf0;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
                 
  &::before {
      top: 0;
  }
  &:after {
      bottom: 0;
  }  
  &:hover::before,
  &:hover::after {
      transform-origin: center left;
      transform: scaleX(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-2",text:"bars",code:{css:`
\`\`\`
.sl-text-border-2 {
  position: relative;
 
  &::before,
  &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2d8cf0;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
 
  &::before {
      top: 0;
      transform-origin: center right;
  }
 
  &:hover::before {
      transform-origin: center left;
      transform: scaleX(1);
  }
 
  &::after {
      bottom: 0;
      transform-origin: center left;
  }
 
  &:hover::after {
      transform-origin: center right;
      transform: scaleX(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-3",text:"bars",code:{css:`
\`\`\`css
.sl-text-border-3 {
  position: relative;
 
  &::before,
  &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #2d8cf0;
      transform-origin: center;
      transform: translateX(-50%) scaleX(0);
      transition: transform 0.4s ease;
  }
 
  &::before {
      top: 0;
  }
 
  &::after {
      bottom: 0;
  }
 
  &:hover::before,
  &:hover::after {
      transform: translateX(-50%) scaleX(1);
  }
}`}},{cla:"sl-text-border-4",text:"highlight",code:{css:`
\`\`\`css
.sl-text-border-4 {
  position: relative;
  z-index: 1;  
  &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: -0.25em;
      right: -0.25em;
      background-color: #2d8cf0;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
  }  
  &:hover::before {
      transform: scaleX(1);
      transform-origin: center left;
  }
}`}},{cla:"sl-text-border-5",text:"highlight",code:{css:`
\`\`\`css
.sl-text-border-5 {
  position: relative;
  z-index: 1;
  &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: -0.25em;
      right: -0.25em;
      background-color: #2d8cf0;
      transform-origin: bottom center;
      transform: scaleY(0.1);
      transition: all 0.1s ease-in-out;
  }
 
  &:hover::before {
      transform: scaleY(1);
      background-color: #2d8cf0;
  }
}
\`\`\`
`}},{cla:"sl-text-border-6",text:"overLine",code:{css:`
\`\`\`css
.sl-text-border-6 {
  position: relative;
 
  &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2d8cf0;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
 
  &:hover::before {
      transform-origin: bottom left;
      transform: scaleX(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-7",text:"overLine",code:{css:`
\`\`\`css
.sl-text-border-7 {
  position: relative;
  &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 50%;
      width: 100%;
      height: 2px;
      opacity: 0;
      background-color: #2d8cf0;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: all 0.3s ease-in-out;
  }
 
  &:hover::before {
      transform: translate(-50%, 0) scaleX(1);
      opacity: 1;
  }
}
\`\`\`
`}},{cla:"sl-text-border-8",text:"pillars",code:{css:`
\`\`\`css
.sl-text-border-8 {
  position: relative;
  &::before,
  &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #2d8cf0;
      transform-origin: center top;
      transform: scaleY(0);
      transition: transform 0.5s ease;
  }
 
  &::before {
      left: -8px;
  }
 
  &::after {
      right: -8px;
  }
 
  &:hover::before,
  &:hover::after {
      transform-origin: center bottom;
      transform: scaleY(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-9",text:"pillars",code:{css:`
\`\`\`css
.sl-text-border-9 {
  position: relative;
  &::before,
  &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #2d8cf0;
      transform: scaleY(0);
      transition: transform 0.5s ease;
  }
 
  &::before {
      left: -8px;
      transform-origin: center top;
  }
 
  &:hover::before {
      transform-origin: center bottom;
      transform: scaleY(1);
  }
 
  &::after {
      right: -8px;
      transform-origin: center bottom;
  }
 
  &:hover::after {
      transform-origin: center top;
      transform: scaleY(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-10",text:"pillars",code:{css:`
\`\`\`
.sl-text-border-10 {
  position: relative;
 
  &::before,
  &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #2d8cf0;
      transform-origin: center;
      transform: scaleY(0);
      transition: transform 0.5s ease;
  }
 
  &::before {
      left: -8px;
  }
 
  &::after {
      right: -8px;
  }
 
  &:hover::before,
  &:hover::after {
      transform: scaleY(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-11",text:"strikethrough",code:{css:`
\`\`\`
.sl-text-border-11 {
  position: relative;
  &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 3px;
      background-color: #2d8cf0;
      transform-origin: center right;
      transform: scaleX(0) translateY(-50%);
      transition: transform 0.3s ease;
  }
 
  &:hover::before {
      transform-origin: center left;
      transform: scaleX(1) translateY(-50%);
  }
}
\`\`\`
`}},{cla:"sl-text-border-12",text:"underline",code:{css:`
\`\`\`css
.sl-text-border-12 {
  position: relative;
  &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2d8cf0;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
 
  &:hover::before {
      transform-origin: bottom left;
      transform: scaleX(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-13",text:"underline",code:{css:`
\`\`\`css
.sl-text-border-13 {
  position: relative;
  &::before {
      content: '';
      position: absolute;
      height: 2px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #2d8cf0;
      transform-origin: bottom left;
      transform: scaleX(1);
      transition: transform 0.3s ease-in-out;
  }
 
  &:hover::before {
      transform: scaleX(0);
      transform-origin: bottom right;
  }
}
\`\`\`
`}},{cla:"sl-text-border-14",text:"underline",code:{css:`
\`\`\`css
.sl-text-border-14 {
  position: relative;
 
  &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #2d8cf0;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: transform 0.3s ease-in-out;
  }
 
  &:hover::before {
      transform: translate(-50%, 0) scaleX(1);
  }
}
\`\`\`
`}},{cla:"sl-text-border-15",text:"wave_css",code:{css:`
\`\`\`css
.sl-text-border-15 {
  &:hover {
      // color: #f30;
      text-decoration: none;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23ff3300' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E")
          repeat-x 0 100%;
      background-size: 20px auto;
      animation: sl-anim-text-15 1s infinite linear;
  }
}
@keyframes sl-anim-text-15 {
    from {
        background-position: 0 100%;
    }
    to {
        background-position: -20px 100%;
    }
}`}}];const C={class:"sl-layout-content"},Y={class:"list"},y=["onClick"],z={__name:"index",setup(L){const{proxy:c}=g();c.$pub;const l=w,n=x(null);function f(t){n.value.show({html:`
\`\`\`html
<button class="${t.cla}">${t.text}</button>
\`\`\`
`,css:t.code.css})}return(t,B)=>{const b=a("sl-card"),d=a("sl-code");return o(),r("div",C,[i(b,null,{default:h(()=>[s("div",Y,[s("ul",null,[(o(!0),r(u,null,v(_(l),(e,m)=>(o(),r("li",{key:m,onClick:E=>f(e)},[s("span",{class:k(e.cla)},X(e.text),3)],8,y))),128))])])]),_:1}),i(d,{ref_key:"slComCode",ref:n},null,512)])}}},I=p(z,[["__scopeId","data-v-97773c3a"]]);export{I as default};
