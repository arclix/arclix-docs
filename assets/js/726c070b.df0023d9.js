"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[6818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,N=u["".concat(p,".").concat(s)]||u[s]||c[s]||o;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},l="Additional options",i={unversionedId:"component-generation/option",id:"component-generation/option",title:"Additional options",description:"We provide additional options that configures component generation to meet users needs.",source:"@site/docs/component-generation/option.md",sourceDirName:"component-generation",slug:"/component-generation/option",permalink:"/arclix-docs/docs/component-generation/option",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Component Structure",permalink:"/arclix-docs/docs/component-generation/structure"},next:{title:"Example Component",permalink:"/arclix-docs/docs/component-generation/example"}},p={},d=[{value:"Flags",id:"flags",level:3},{value:"Generate component",id:"generate-component",level:2},{value:"And import it without folder name",id:"and-import-it-without-folder-name",level:3},{value:"Command",id:"command",level:4},{value:"Structure",id:"structure",level:4},{value:"With Scoped Style modules",id:"with-scoped-style-modules",level:3},{value:"Command",id:"command-1",level:4},{value:"Structure",id:"structure-1",level:4},{value:"Without test file",id:"without-test-file",level:3},{value:"Command",id:"command-2",level:4},{value:"Structure",id:"structure-2",level:4},{value:"At given path",id:"at-given-path",level:3},{value:"Command",id:"command-3",level:4},{value:"Structure",id:"structure-3",level:4},{value:"Without parent folder",id:"without-parent-folder",level:3},{value:"Command",id:"command-4",level:4},{value:"Structure",id:"structure-4",level:4}],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"additional-options"},"Additional options"),(0,r.kt)("p",null,"We provide additional options that configures component generation to meet users needs."),(0,r.kt)("h3",{id:"flags"},"Flags"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#and-import-it-without-folder-name"},"--addIndex")),(0,r.kt)("td",{parentName:"tr",align:null},"Let's to import component without the folder name.",(0,r.kt)("br",null)," For e.g: Instead of ",(0,r.kt)("inlineCode",{parentName:"td"},'import Sample from "./Sample/Sample"'),(0,r.kt)("br",null)," we can do ",(0,r.kt)("inlineCode",{parentName:"td"},'import { Sample } from "./Sample"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#with-scoped-style-modules"},"--scopeStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Scopes the style to the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#without-test-file"},"--skipTest")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip the test file while generating component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#at-given-path"},"-p, --path [path]")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates component based on the path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#without-parent-folder"},"-f, --flat")),(0,r.kt)("td",{parentName:"tr",align:null},"Generates component without parent folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-v, --version"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays version number of Arclix in use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides help about the use of Arclix.")))),(0,r.kt)("h2",{id:"generate-component"},"Generate component"),(0,r.kt)("h3",{id:"and-import-it-without-folder-name"},"And import it without folder name"),(0,r.kt)("p",null,"To generate component and import without foldername use ",(0,r.kt)("inlineCode",{parentName:"p"},"--addIndex")," flag."),(0,r.kt)("h4",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME] --addIndex\n")),(0,r.kt)("p",null,"This will create a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js|.ts")," file and export everything within the folder."),(0,r.kt)("p",null,"So instead of importing with foldername like ",(0,r.kt)("inlineCode",{parentName:"p"},'import [COMPONENT NAME] from "./[COMPONENT NAME]/[COMPONENT NAME]"'),"\nwe can do ",(0,r.kt)("inlineCode",{parentName:"p"},'import { [COMPONENT NAME] } from "./[COMPONENT NAME]"'),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This will create separate file named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js|.ts")," for each component")),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[COMPONENT NAME]\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 [COMPONENT NAME].css\n\u251c\u2500\u2500 [COMPONENT NAME].jsx\n\u2514\u2500\u2500 [COMPONENT NAME].test.jsx\n")),(0,r.kt)("h3",{id:"with-scoped-style-modules"},"With Scoped Style modules"),(0,r.kt)("p",null,"To generate component with scoped style modules use ",(0,r.kt)("inlineCode",{parentName:"p"},"--scopeStyle")," flag."),(0,r.kt)("h4",{id:"command-1"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME] --scopeStyle\n")),(0,r.kt)("h4",{id:"structure-1"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[COMPONENT NAME]\n\u251c\u2500\u2500 [COMPONENT NAME].module.css\n\u251c\u2500\u2500 [COMPONENT NAME].jsx\n\u2514\u2500\u2500 [COMPONENT NAME].test.jsx\n")),(0,r.kt)("h3",{id:"without-test-file"},"Without test file"),(0,r.kt)("p",null,"To generate component without test file use ",(0,r.kt)("inlineCode",{parentName:"p"},"--skipTest")," flag."),(0,r.kt)("h4",{id:"command-2"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME] --skipTest\n")),(0,r.kt)("h4",{id:"structure-2"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[COMPONENT NAME]\n\u251c\u2500\u2500 [COMPONENT NAME].css\n\u2514\u2500\u2500 [COMPONENT NAME].jsx\n")),(0,r.kt)("h3",{id:"at-given-path"},"At given path"),(0,r.kt)("p",null,"To generate component at given path use ",(0,r.kt)("inlineCode",{parentName:"p"},"--path")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag."),(0,r.kt)("h4",{id:"command-3"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'npx arclix generate component [COMPONENT NAME] --path="<some path>"\n')),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME] -p <some path>\n")),(0,r.kt)("h4",{id:"structure-3"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[SOME PATH FOLDER]\n\u2514\u2500\u2500 [COMPONENT NAME]\n    \u251c\u2500\u2500 [COMPONENT NAME].css\n    \u251c\u2500\u2500 [COMPONENT NAME].jsx\n    \u2514\u2500\u2500 [COMPONENT NAME].test.jsx\n\n")),(0,r.kt)("h3",{id:"without-parent-folder"},"Without parent folder"),(0,r.kt)("p",null,"To generate component without parent folder use ",(0,r.kt)("inlineCode",{parentName:"p"},"--flat")," flag."),(0,r.kt)("h4",{id:"command-4"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx arclix generate component [COMPONENT NAME] --flat\n")),(0,r.kt)("h4",{id:"structure-4"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [COMPONENT NAME].css\n\u251c\u2500\u2500 [COMPONENT NAME].jsx\n\u2514\u2500\u2500 [COMPONENT NAME].test.jsx\n")))}c.isMDXComponent=!0}}]);