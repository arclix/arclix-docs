"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[79],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(m,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Commit Convention",l={unversionedId:"guidelines/commit-convention",id:"guidelines/commit-convention",title:"Commit Convention",description:"We follow a standard commit convention followed by Angular's commit convention.",source:"@site/contribution/guidelines/commit-convention.md",sourceDirName:"guidelines",slug:"/guidelines/commit-convention",permalink:"/arclix-docs/contribution/guidelines/commit-convention",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"contribution",previous:{title:"Contribution to Docs",permalink:"/arclix-docs/contribution/guidelines/contribute-docs"},next:{title:"Code Of Conduct",permalink:"/arclix-docs/contribution/guidelines/code-of-conduct"}},m={},p=[{value:"Commit Message Format",id:"commit-message-format",level:2},{value:"Types",id:"types",level:3},{value:"Examples",id:"examples",level:3},{value:"Revert",id:"revert",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Commit Message",id:"commit-message",level:3}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commit-convention"},"Commit Convention"),(0,r.kt)("p",null,"We follow a standard commit convention followed by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular's commit convention"),"."),(0,r.kt)("p",null,"So that we have the following advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get ",(0,r.kt)("strong",{parentName:"li"},"more readable messages"),"."),(0,r.kt)("li",{parentName:"ul"},"easy to follow throught ",(0,r.kt)("strong",{parentName:"li"},"project history"),"."),(0,r.kt)("li",{parentName:"ul"},"generate better ",(0,r.kt)("strong",{parentName:"li"},"change log")," for Arclix.")),(0,r.kt)("h2",{id:"commit-message-format"},"Commit Message Format"),(0,r.kt)("p",null,"The commit messages should follow the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description> (#issue id)\n\n[optional body]\n\n[optional footer(s)]\n")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"feat")),(0,r.kt)("td",{parentName:"tr",align:null},"A new feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fix")),(0,r.kt)("td",{parentName:"tr",align:null},"A bug fix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docs")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation only changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code(white-space formatting, missing semi-colons,etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refactor")),(0,r.kt)("td",{parentName:"tr",align:null},"A code change that neither fixes a bug nor adds a feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perf")),(0,r.kt)("td",{parentName:"tr",align:null},"A code change that improves performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"test")),(0,r.kt)("td",{parentName:"tr",align:null},"Adding missing tests or correcting existing tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"build")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ci")),(0,r.kt)("td",{parentName:"tr",align:null},"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chore")),(0,r.kt)("td",{parentName:"tr",align:null},"Other changes that don't modify src or test files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"revert")),(0,r.kt)("td",{parentName:"tr",align:null},"Reverts a commit")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit message with description and scope"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"feat(core): add create project (#1)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit message with ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," to draw attention to breaking change"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"refactor(core)!: remove create project (#2)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit message without scope"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"feat: add create project (#1)\n")))),(0,r.kt)("h3",{id:"revert"},"Revert"),(0,r.kt)("p",null,"If the PR reverts a previous commit, it should begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"revert: "),", followed by the header of the reverted commit."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"revert: feat(core): add create poject (#1)\n")),(0,r.kt)("h3",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"The scope could be anything specifying the place of the commit change. For example ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cli"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"generate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"deps"),", etc..."),(0,r.kt)("h3",{id:"commit-message"},"Commit Message"),(0,r.kt)("p",null,"The commit message contains a succinct description of the change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,r.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,r.kt)("li",{parentName:"ul"},"no dot (.) at the end")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"We use ",(0,r.kt)("a",{parentName:"p",href:"https://commitlint.js.org"},"commitlint")," to restrict the commit messages to follow our convention mentioned above."),(0,r.kt)("p",{parentName:"admonition"},"So do follow the commit conventions.")))}d.isMDXComponent=!0}}]);