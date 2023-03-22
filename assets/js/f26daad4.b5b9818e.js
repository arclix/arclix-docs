"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<c;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const c={sidebar_position:2},p="Project Structure",o={unversionedId:"create-app/project-structure",id:"create-app/project-structure",title:"Project Structure",description:"After running the create command.",source:"@site/docs/create-app/project-structure.md",sourceDirName:"create-app",slug:"/create-app/project-structure",permalink:"/docs/create-app/project-structure",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating an App",permalink:"/docs/create-app/create-an-app"},next:{title:"Available Scripts",permalink:"/docs/create-app/available-scripts"}},i={},s=[{value:"JavaScript Template",id:"javascript-template",level:3},{value:"TypeScript Template",id:"typescript-template",level:3}],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"After running the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," command."),(0,a.kt)("p",null,"Inside the created directory, it will initialize the project and install the dependencies based on template:"),(0,a.kt)("h3",{id:"javascript-template"},"JavaScript Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[PROJECT NAME]\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 manifest.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.js\n    \u251c\u2500\u2500 App.test.js\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 logo.svg\n    \u2514\u2500\u2500 serviceWorker.js\n    \u2514\u2500\u2500 setupTests.js\n")),(0,a.kt)("h3",{id:"typescript-template"},"TypeScript Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[PROJECT NAME]\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u2514\u2500\u2500 manifest.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 App.css\n    \u251c\u2500\u2500 App.ts\n    \u251c\u2500\u2500 App.test.ts\n    \u251c\u2500\u2500 index.css\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 logo.svg\n    \u2514\u2500\u2500 serviceWorker.ts\n    \u2514\u2500\u2500 setupTests.ts\n")))}d.isMDXComponent=!0}}]);