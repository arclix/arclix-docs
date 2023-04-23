"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,c(c({ref:t},s),{},{components:r})):a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},c="Creating an App",i={unversionedId:"create-app/create",id:"create-app/create",title:"Creating an App",description:"Create your first React Page",source:"@site/docs/create-app/create.md",sourceDirName:"create-app",slug:"/create-app/create",permalink:"/arclix-docs/docs/create-app/create",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/arclix-docs/docs/intro"},next:{title:"Project Structure",permalink:"/arclix-docs/docs/create-app/project-structure"}},p={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:3}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-an-app"},"Creating an App"),(0,n.kt)("h3",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"To create a React app run this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest create [PROJECT NAME]\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"It uses ",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," by ",(0,n.kt)("inlineCode",{parentName:"p"},"Facebook")," as a base to create a react project and add additional dependencies according to your needs.")),(0,n.kt)("p",null,"After running the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," command you'll be prompted with following questions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"What template would you like to use?",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[TEMPLATE]\n\u251c\u2500\u2500 JavaScript\n\u2514\u2500\u2500 TypeScript\n"))),(0,n.kt)("li",{parentName:"ol"},"What styling would you like to use?",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"[STYLING]\n\u251c\u2500\u2500 CSS\n\u2514\u2500\u2500 SCSS/SASS\n")))),(0,n.kt)("p",null,"Then it will create a directory named ",(0,n.kt)("inlineCode",{parentName:"p"},"[PROJECT NAME]")," inside the current folder based on the prompts."))}d.isMDXComponent=!0}}]);