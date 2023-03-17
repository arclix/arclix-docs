"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},o="Contribution to Core",l={unversionedId:"guidelines/contribute-core",id:"guidelines/contribute-core",title:"Contribution to Core",description:"Arclix is an open source React creation and component generation CLI made to make the work of React developers easier. If you're interested in contributing to Arclix, hopefully, this document makes the process for contributing clear.",source:"@site/contribution/guidelines/contribute-core.md",sourceDirName:"guidelines",slug:"/guidelines/contribute-core",permalink:"/arclix-docs/contribution/guidelines/contribute-core",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contribution",previous:{title:"Guidelines",permalink:"/arclix-docs/contribution/category/guidelines"},next:{title:"Contribution to Docs",permalink:"/arclix-docs/contribution/guidelines/contribute-docs"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Repo Setup",id:"repo-setup",level:3},{value:"Testing",id:"testing",level:3},{value:"Unit Tests",id:"unit-tests",level:4},{value:"Pull Request Guidelines",id:"pull-request-guidelines",level:3},{value:"Dependencies Guidelines",id:"dependencies-guidelines",level:3},{value:"Think Before Adding a Dependency",id:"think-before-adding-a-dependency",level:4}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contribution-to-core"},"Contribution to Core"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arclix.github.io/arclix-docs"},"Arclix")," is an open source React creation and component generation CLI made to make the work of React developers easier. If you're interested in contributing to Arclix, hopefully, this document makes the process for contributing clear."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," which includes ",(0,r.kt)("inlineCode",{parentName:"li"},"npm")," greater than v12.")),(0,r.kt)("h3",{id:"repo-setup"},"Repo Setup"),(0,r.kt)("p",null,"To develop and test the core ",(0,r.kt)("inlineCode",{parentName:"p"},"Arclix")," package:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i")," in Arclix root folder."),(0,r.kt)("li",{parentName:"ol"},"Do the changes you want in the Arclix."),(0,r.kt)("li",{parentName:"ol"},"Make sure you run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run test")," and check whether all the tests are passed before raising the PR."),(0,r.kt)("li",{parentName:"ol"},"Also make sure you run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build")," before raising the PR."),(0,r.kt)("li",{parentName:"ol"},"You can also do both step 3 & 4 using ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run verify"),".")),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"We do unit testing for all the module including core, utility, etc."),(0,r.kt)("h4",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"Unit tests are powered by ",(0,r.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"vitest"),". The detailed configuration of vitest is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"vitest.config.cjs")," file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run unit tests under each module using:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n"))),(0,r.kt)("li",{parentName:"ul"},"Run unit tests with coverage using:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:coverage\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do maintain the ",(0,r.kt)("inlineCode",{parentName:"p"},"branches")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"functions")," greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," in the coverage.")),(0,r.kt)("h3",{id:"pull-request-guidelines"},"Pull Request Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checkout a topic branch from a base branch (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"), and merge back against that branch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If adding a new feature:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add accompanying test case."),(0,r.kt)("li",{parentName:"ul"},"Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first, and have it approved before working on it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If fixing a bug:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you are resolving a special issue, add ",(0,r.kt)("inlineCode",{parentName:"li"},"fix: remove something (#issue id) #PR id")," in your PR title for a better release log (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"fix: remove something (#1) #2"),")."),(0,r.kt)("li",{parentName:"ul"},"Provide a detailed description of the bug in the PR. Live demo preferred."),(0,r.kt)("li",{parentName:"ul"},"Add appropriate test coverage if applicable."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It's OK to have multiple small commits as you work on the PR. GitHub can automatically squash them before merging.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure to run the following commands before raising the PR:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run format\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run verify:pr\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"No need to worry about code style as long as you have installed the dev dependencies. Modified files are automatically formatted with Prettier on commit (by invoking ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/githooks"},"Git Hooks")," via ",(0,r.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky"},"husky"),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PR title must follow the ",(0,r.kt)("a",{parentName:"p",href:"./commit-convention"},"commit message convention")," so that changelogs can be automatically generated."))),(0,r.kt)("h3",{id:"dependencies-guidelines"},"Dependencies Guidelines"),(0,r.kt)("p",null,"Arclix aims to be lightweight, and this includes being aware of the number of npm dependencies and their size."),(0,r.kt)("h4",{id:"think-before-adding-a-dependency"},"Think Before Adding a Dependency"),(0,r.kt)("p",null,"Most deps should be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," even if they are needed at runtime. Some exceptions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type packages. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"@types/*"),"."),(0,r.kt)("li",{parentName:"ul"},"Deps that cannot be properly bundled due to binary files. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"esbuild"),".")),(0,r.kt)("p",null,"Avoid deps with large transitive dependencies that result in bloated size compared to the functionality it provides. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"http-proxy")," itself plus ",(0,r.kt)("inlineCode",{parentName:"p"},"@types/http-proxy")," is a little over 1MB in size, but ",(0,r.kt)("inlineCode",{parentName:"p"},"http-proxy-middleware")," pulls in a ton of dependencies that make it 7MB(!) when a minimal custom middleware on top of ",(0,r.kt)("inlineCode",{parentName:"p"},"http-proxy")," only requires a couple of lines of code."))}d.isMDXComponent=!0}}]);