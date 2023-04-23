"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),N=a,d=m["".concat(l,".").concat(N)]||m[N]||u[N]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=N;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Generating component",p={unversionedId:"component-generation/generate",id:"component-generation/generate",title:"Generating component",description:"To generate component go inside any React project created by",source:"@site/docs/component-generation/generate.md",sourceDirName:"component-generation",slug:"/component-generation/generate",permalink:"/arclix-docs/docs/component-generation/generate",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Available Scripts",permalink:"/arclix-docs/docs/create-app/available-scripts"},next:{title:"Component Structure",permalink:"/arclix-docs/docs/component-generation/structure"}},l={},c=[{value:"Generate multiple components",id:"generate-multiple-components",level:3},{value:"Structure",id:"structure",level:4},{value:"Generate nested components",id:"generate-nested-components",level:3},{value:"Structure",id:"structure-1",level:4}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generating-component"},"Generating component"),(0,a.kt)("p",null,"To generate component go inside any React project created by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://remix.run/"},"Remix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.com/"},"Gatsby")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://expo.dev/"},"Expo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arclix.github.io/arclix-docs/create-app/create"},"Arclix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"Create React App"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest generate component [COMPONENT NAME]\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest g c [COMPONENT NAME]\n")),(0,a.kt)("p",null,"The above command will"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"create a folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"[COMPONENT NAME]")," and generate the component inside the created folder that will reside on the folder you run the command.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"will automatically take ",(0,a.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stylings")," for the component from the React project.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"generate it inside ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory by default If you run the command in the root folder."))),(0,a.kt)("h3",{id:"generate-multiple-components"},"Generate multiple components"),(0,a.kt)("p",null,"To generate multiple components at once with shared options like ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"skipTest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"flat"),", etc. run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest g c [COMPONENT NAME1] [COMPONENT NAME2] [COMPONENT NAME3]\n")),(0,a.kt)("h4",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[FOLDER]\n\u2514\u2500\u2500 [COMPONENT NAME1]\n    \u251c\u2500\u2500 [COMPONENT NAME1].module.css\n    \u251c\u2500\u2500 [COMPONENT NAME1].jsx\n    \u2514\u2500\u2500 [COMPONENT NAME1].test.jsx\n\u2514\u2500\u2500 [COMPONENT NAME2]\n    \u251c\u2500\u2500 [COMPONENT NAME2].module.css\n    \u251c\u2500\u2500 [COMPONENT NAME2].jsx\n    \u2514\u2500\u2500 [COMPONENT NAME2].test.jsx\n\u2514\u2500\u2500 [COMPONENT NAME3]\n    \u251c\u2500\u2500 [COMPONENT NAME3].module.css\n    \u251c\u2500\u2500 [COMPONENT NAME3].jsx\n    \u2514\u2500\u2500 [COMPONENT NAME3].test.jsx\n")),(0,a.kt)("h3",{id:"generate-nested-components"},"Generate nested components"),(0,a.kt)("p",null,"To generate nested components at once with shared options like ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"skipTest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"flat"),", etc. run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest g c [COMPONENT NAME1] [COMPONENT NAME1]/[COMPONENT NAME2]\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," as separator to denote nesting structure of the component."),(0,a.kt)("p",{parentName:"admonition"},"For example: If you want to generate Input and nest it inside Form use the following:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix@latest g c Form Form/Input\n"))),(0,a.kt)("h4",{id:"structure-1"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[FOLDER]\n\u2514\u2500\u2500 [COMPONENT NAME1]\n    \u251c\u2500\u2500 [COMPONENT NAME1].module.css\n    \u251c\u2500\u2500 [COMPONENT NAME1].jsx\n    \u2514\u2500\u2500 [COMPONENT NAME1].test.jsx\n    \u2514\u2500\u2500 [COMPONENT NAME2]\n        \u251c\u2500\u2500 [COMPONENT NAME2].module.css\n        \u251c\u2500\u2500 [COMPONENT NAME2].jsx\n        \u2514\u2500\u2500 [COMPONENT NAME2].test.jsx\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You cannot run this command outside of ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," project .")))}u.isMDXComponent=!0}}]);