import{_ as b}from"./index-c333b85b.js";import{a9 as _,r as y,L as l,o as s,i as n,l as p,w as x,g as c,Q as v,S as k,u as X}from"./vendor-79070444.js";const t=`
  input {
   font-size: 16px;
   width: 150px;
   height: 50px;
   padding: 7px 9px;
   border: 1px solid @default_border_color;
   transition: background-color 0.3s ease-in-out;
  } `,C=[{cla:"sl-input-border-type-1",code:{html:`
\`\`\`html
<div class="sl-input-border-type-1" >
    <input  type="text" placeholder="Input Outline"  />
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-1 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.5s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.bottom {
          bottom: 0;
          transform-origin: bottom right;
      }
  
      &.right {
          right: 0;
          transform-origin: top right;
      }
  
      &.top {
          top: 0;
          transform-origin: top left;
      }
  
      &.left {
          left: 0;
          transform-origin: bottom left;
      }
  }
                 
  input:focus {
      ~ .bottom {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
      ~ .right {
          transform-origin: bottom right;
          transform: scaleY(1);
      }
  
      ~ .top {
          transform-origin: top right;
          transform: scaleX(1);
      }
      ~ .left {
          transform-origin: top left;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-2",code:{html:`
\`\`\`html
<div class="sl-input-border-type-2">
  <input type="text" placeholder="Input Outline" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-2 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.5s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.top {
          top: 0;
      }
  
      &.bottom {
          bottom: 0;
      }
  
      &.left {
          left: 0;
      }
  
      &.right {
          right: 0;
      }
  }
                 
  input:focus {
      ~ .top,
      ~ .bottom {
          transform: scaleX(1);
      }
  
      ~ .left,
      ~ .right {
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-3",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-3">
  <input type="text" placeholder="Input Trace" />
  <span class="bottom"></span>
  <span class="right"></span>
  <span class="top"></span>
  <span class="left"></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-3 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
  }
                 
  span {
      position: absolute;
      background-color: @default_color;
      transition: transform 0.1s ease;
  
      &.bottom,
      &.top {
          height: 2px;
          left: 0;
          right: 0;
          transform: scaleX(0);
      }
  
      &.left,
      &.right {
          width: 2px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
      }
  
      &.bottom {
          bottom: 0;
          transform-origin: bottom right;
      }
  
      &.right {
          right: 0;
          transform-origin: top right;
          transition-delay: 0.05s;
      }
  
      &.top {
          top: 0;
          transform-origin: top left;
          transition-delay: 0.15s;
      }
  
      &.left {
          left: 0;
          transform-origin: bottom left;
          transition-delay: 0.25s;
      }
  }
                 
  input:focus {
      ~ .bottom {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
  
      ~ .right {
          transform-origin: bottom right;
          transform: scaleY(1);
      }
  
      ~ .top {
          transform-origin: top right;
          transform: scaleX(1);
      }
  
      ~ .left {
          transform-origin: top left;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-4",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-4">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-4 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
      ~ span {
          transform-origin: bottom left;
          transform: scaleX(1);
      }
  }
  span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: @default_color;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
  }
}
\`\`\`
`}},{cla:"sl-input-border-type-5",code:{html:`
\`\`\`html 
<div class="sl-input-border-type-5">
  <input type="text" placeholder="Input Underline" />
  <span></span>
</div>
\`\`\`
`,css:`
\`\`\`css
.sl-input-border-type-5 {
  position: relative;
  ${t}
  input:focus {
      outline: none;
      ~ span {
          transform: translate(-50%, 0) scaleX(1);
          opacity: 1;
      }
  }
  span {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 2px;
      opacity: 0;
      background-color: @default_color;
      transform-origin: center;
      transform: translate(-50%, 0) scaleX(0);
      transition: all 0.3s ease;
  }
}
\`\`\`
`}}];const w={class:"sl-layout-content"},I={class:"list"},Y=["innerHTML","onClick"],$={__name:"index",setup(L){const{proxy:f}=_();f.$pub;const m=C,r=y(null);function d(e,a){if(a.target.nodeName!=="INPUT"){let o=e.code;r.value.show({html:o.html,css:o.css})}}return(e,a)=>{const o=l("sl-card"),u=l("sl-code");return s(),n("div",w,[p(o,null,{default:x(()=>[c("div",I,[c("ul",null,[(s(!0),n(v,null,k(X(m),(i,h)=>(s(),n("li",{innerHTML:i.code.html,key:h,onClick:g=>d(i,g)},null,8,Y))),128))])])]),_:1}),p(u,{ref_key:"slComCode",ref:r},null,512)])}}},B=b($,[["__scopeId","data-v-130c1219"]]);export{B as default};
