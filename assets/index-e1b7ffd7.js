import{_ as m}from"./index-c333b85b.js";import{a9 as p,r as h,L as a,o as t,i as r,l,w as x,g as s,Q as v,S as _,u as g,h as z,U as w}from"./vendor-79070444.js";const k=[{cla:"sl-btn-hover-1",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-1 {
   position: relative;
   z-index: 1;
   transition: color 0.4s ease-in-out;
   overflow: hidden;   
     &::before {
       content: '';
       z-index: -1;
       position: absolute;
       top: 100%;
       right: 100%;
       width: 60px;
       height: 60px;
       border-radius: 50%;
       background-color: @default_color;
       transform-origin: center;
       transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
       transition: transform 0.45s ease-in-out;
     }
     &:hover {
       cursor: pointer;
       color: #fff;
       &:before {
         transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
       }
     }
}
\`\`\`
`}},{cla:"sl-btn-hover-2",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-2 {
   position: relative;
   z-index: 1;
   transition: color 0.4s ease-in-out;
   overflow: hidden;   
   &::before {
     content: '';
     z-index: -1;
     position: absolute;
     top: 100%;
     left: 100%;
     width: 60px;
     height: 60px;
     border-radius: 50%;
     background-color: @default_color;
     transform-origin: center;
     transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
     transition: transform 0.45s ease-in-out;
   }
   &:hover {
     cursor: pointer;
     color: #fff;
     &:before {
         transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
     }
   }
}
\`\`\`
`}},{cla:"sl-btn-hover-3",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-3 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;       
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
      transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
}
\`\`\`
`}},{cla:"sl-btn-hover-4",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-4 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;
                 
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    bottom: 100%;
    left: 100%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
      transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
    }
  }
}
  
\`\`\`
`}},{cla:"sl-btn-hover-5",text:"bubble",code:{css:`
\`\`\`css
.sl-btn-hover-5 {
  position: relative;
  z-index: 1;
  transition: color 0.4s ease-in-out;
  overflow: hidden;  
  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: @default_color;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    &:before {
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
  }
}
\`\`\`
`}},{cla:"sl-btn-slide-1",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-1 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center bottom;
      transform: scaleY(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center top;
          transform: scaleY(1);
      }
  }
 }
 \`\`\`
 `}},{cla:"sl-btn-slide-2",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-2 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center left;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center right;
          transform: scaleX(1);
      }
  }
}
\`\`\`
 `}},{cla:"sl-btn-slide-3",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-3 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center left;
          transform: scaleX(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-btn-slide-4",text:"slide",code:{css:`
\`\`\`css
.sl-btn-slide-4 {
  position: relative;
  z-index: 1;
  overflow: hidden;
 
  &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-color: @default_color;
  
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform-origin: center top;
      transform: scaleY(0);
      transition: transform 0.25s ease-in-out;
  }
  &:hover {
      cursor: pointer;
      color: #fff;
      &::before {
          transform-origin: center bottom;
          transform: scaleY(1);
      }
  }
}
\`\`\`
`}},{cla:"sl-btn-jelly",text:"jelly",code:{css:`
\`\`\`css
.sl-btn-jelly {
      // z-index: 1;
      cursor: pointer;
      &:hover {
          animation: jelly 0.5s;
      }
  }
  
  @keyframes jelly {
      0%,
      100% {
          transform: scale(1, 1);
      }
      25% {
          transform: scale(0.9, 1.1);
      }
      50% {
          transform: scale(1.1, 0.9);
      }
      75% {
          transform: scale(0.95, 1.05);
      }
  }
}
\`\`\`  
`}}];const y={class:"sl-layout-content"},C={class:"list"},j=["onClick"],X={__name:"index",setup(Y){const{proxy:i}=p();i.$pub;const c=k,n=h(null);function d(o){n.value.show({html:`
\`\`\`html
          <button class="${o.cla}">${o.text}</button>
\`\`\`
        `,css:o.code.css})}return(o,$)=>{const f=a("sl-card"),b=a("sl-code");return t(),r("div",y,[l(f,null,{default:x(()=>[s("div",C,[s("ul",null,[(t(!0),r(v,null,_(g(c),(e,u)=>(t(),r("li",{key:u,onClick:B=>d(e)},[s("button",{class:z(e.cla)},w(e.text),3)],8,j))),128))])])]),_:1}),l(b,{ref_key:"slComCode",ref:n},null,512)])}}},I=m(X,[["__scopeId","data-v-b801a12e"]]);export{I as default};
