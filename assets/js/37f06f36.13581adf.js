"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},c="Example Component",p={unversionedId:"component-generation/example",id:"component-generation/example",title:"Example Component",description:"For example consider that your React project uses JavaScript as template and CSS as Styling and we generate component using:",source:"@site/docs/component-generation/example.md",sourceDirName:"component-generation",slug:"/component-generation/example",permalink:"/arclix-docs/docs/component-generation/example",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Additional options",permalink:"/arclix-docs/docs/component-generation/option"}},l={},i=[],s={toc:i},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-component"},"Example Component"),(0,o.kt)("p",null,"For example consider that your React project uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," as template and ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS")," as Styling and we generate component using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component Hero\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix g c Hero\n")),(0,o.kt)("p",null,"Then the component generated will have the structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hero\n\u251c\u2500\u2500 Hero.css\n\u251c\u2500\u2500 Hero.jsx\n\u2514\u2500\u2500 Hero.test.jsx\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Hero.css"',title:'"Hero.css"'},"// Type some stylings here\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Hero.jsx"',title:'"Hero.jsx"'},'import "./Hero.css";\n\nconst Hero = () => {\n    return <>// Type content here</>;\n};\n\nexport default Hero;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Hero.test.jsx"',title:'"Hero.test.jsx"'},'import { render } from "@testing-library/react";\nimport Hero from "./Hero.jsx";\n\ntest("renders Hero component", () => {\n    const { getByText } = render(<Hero />);\n    const linkElement = getByText(/Hello, World!/i);\n    expect(linkElement).toBeInTheDocument();\n});\n')))}u.isMDXComponent=!0}}]);