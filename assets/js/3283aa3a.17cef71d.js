"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Generating component",p={unversionedId:"component-generation/generate",id:"component-generation/generate",title:"Generating component",description:"Go inside any React project including project generated by Create React App or Next.JS or Arclix to generate a component",source:"@site/docs/component-generation/generate.md",sourceDirName:"component-generation",slug:"/component-generation/generate",permalink:"/docs/component-generation/generate",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Available Scripts",permalink:"/docs/create-app/available-scripts"},next:{title:"Component Structure",permalink:"/docs/component-generation/structure"}},c={},l=[],m={toc:l},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generating-component"},"Generating component"),(0,a.kt)("p",null,"Go inside any React project including project generated by ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.JS")," or ",(0,a.kt)("a",{parentName:"p",href:"#"},"Arclix")," to generate a component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME]\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix g c [COMPONENT NAME]\n")),(0,a.kt)("p",null,"The above command will"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"create a folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"[COMPONENT NAME]")," and generate the component inside the created folder that will reside on the folder you run the command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"will automatically take ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stylings")," for the component from the React project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"generate it inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory by default If you run the command in the root folder."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))," You cannot run this command outside of ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," project ."))}s.isMDXComponent=!0}}]);