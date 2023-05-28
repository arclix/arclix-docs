"use strict";(self.webpackChunkarclix_docs=self.webpackChunkarclix_docs||[]).push([[237],{7105:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});var s=n(7294),r=n(7452),a=n(7462),i=n(6010);const o="featureIcon_HQSf",l="featureImg_YoaA",c="feature__card_ibvw",m=e=>{let{title:t,img:n,description:r}=e;return s.createElement("div",{className:(0,i.Z)("col col--4")},s.createElement("div",{className:`padding-horiz--md ${c}`},s.createElement("div",{className:o},s.createElement("img",{className:l,src:n,alt:"lightning icon"})),s.createElement("h3",null,t),s.createElement("p",null,r)))},p={},u=[{title:"Easy to Use",img:"img/lightning.png",description:s.createElement(s.Fragment,null,"Learning or configuring anything new is not necessary. You can instantly generate component in any React project.")},{title:"Rich Features",img:"img/tool.png",description:s.createElement(s.Fragment,null,"Out of the box support for Component Generation, TypeScript, CSS preprocessors, Storybook, Test and more.")},{title:"Flexible Config",img:"img/config.png",description:s.createElement(s.Fragment,null,"Configure how Arclix CLI should generate components according to your needs by creating arclix config file.")}];function h(){return s.createElement("section",{className:p.features},s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},u.map(((e,t)=>s.createElement(m,(0,a.Z)({key:t},e)))))))}var g=n(9960),C=n(2263);const d="heroBanner_qAaY",y="heroContainer_jhot",E="heroSection_bCav",f="heroTitle_T255",k="heroTagTitle_EPmJ",b="heroButton_jmPP",v="heroImg_walY",_="githubButton_BpDg",N="buttons_xCaw",x=()=>{const{siteConfig:e}=(0,C.Z)();return s.createElement("header",{className:(0,i.Z)("hero hero--primary grid-lines",d)},s.createElement("article",{className:`container ${y}`},s.createElement("section",{className:E},s.createElement("h3",{className:f},"Arclix"),s.createElement("h3",{className:k},"Easy To Use React CLI"),s.createElement("p",{className:"hero__subtitle"},e.tagline),s.createElement("div",{className:N},s.createElement(g.Z,{className:`button button--secondary button--lg hero__button ${b}`,to:"/docs/intro"},"GET STARTED"),s.createElement(g.Z,{className:`button button--secondary button--lg hero__button ${b} ${_}`,to:"https://github.com/arclix/core"},"GITHUB",s.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"},s.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))),s.createElement("img",{className:v,src:"svg/arclix.svg",alt:"Arclix Logo"})))},A="config__content_TJcF",S="config__title_rGZ7",T="config__code_qIty",w="config__text_jsso",B="config__btn_vYRH",H="key_U7IM",O="value_rIF6",P="container_G67E",V=e=>{let{children:t,className:n,flexDirection:r,gridTemplateColumns:a}=e;const i=n?`${P} ${n}`:P;return s.createElement("section",{className:`container ${i}`,style:{gridTemplateColumns:a,flexDirection:r}},t)},L="terminal_U8Xv",I="nav_Ykm9",M="circle_Twuc",F=e=>{let{children:t,className:n}=e;const r=n?n+" "+L:L;return s.createElement("article",{className:r},s.createElement("div",{className:I},s.createElement("div",{className:M}),s.createElement("div",{className:M}),s.createElement("div",{className:M})),t)},j={cssPreprocessor:"css",usesTypeScript:!0,scopeStyle:!1,addStory:!1,addIndex:!1,addTest:!1,flat:!1,path:"./"},D=()=>s.createElement(V,{gridTemplateColumns:"1.5fr 2fr",flexDirection:"column-reverse"},s.createElement(F,null,s.createElement("span",{style:{color:"white"}},"{\n"),s.createElement("br",null),s.createElement("span",null,"\xa0\xa0\xa0"),s.createElement("span",{className:H},'"default": '),s.createElement("span",{style:{color:"white"}},"{\n"),s.createElement("br",null),Object.keys(j).map((e=>s.createElement("article",{key:e},s.createElement("span",null,"\xa0\xa0\xa0"),s.createElement("span",null,"\xa0\xa0\xa0"),s.createElement("span",null,s.createElement("span",{className:H},`"${e}": `),s.createElement("span",{className:O},`${j[e]}\n`)),s.createElement("br",null)))),s.createElement("span",null,"\xa0\xa0\xa0"),s.createElement("span",{style:{color:"white"}},"}\n"),s.createElement("br",null),s.createElement("span",{style:{color:"white"}},"}")),s.createElement("section",{className:A},s.createElement("h1",{className:S},"Configure Arclix Generation CLI"),s.createElement("p",{className:w},'Tired of adding flags like "--flat", "--path", etc. to the command ?'),s.createElement("p",{className:w},"Configure the generation part of the CLI by creating",s.createElement("b",null," ",s.createElement("i",null,"arclix.config.json"))," ","either manually or by the following command:"),s.createElement("code",{className:T},"npx arclix@latest init"),s.createElement(g.Z,{className:B,href:"/docs/category/arclix-cli-configuration"},"Learn More"))),Z="tool_IMC5",W="tool__title_lCBf",R="tools_ePE_",$="tool__container_WG72",q="tool__row_SUX7",G="tool__img_m8Yo",U="tool__content_v_XN",Y=e=>{const t=e.className?`${$} ${e.className}`:$;return s.createElement("article",{className:t},e.tools.map((e=>s.createElement("a",{className:q,href:e.link,target:"_blank",key:e.name},s.createElement("img",{className:G,src:e.img,alt:e.name+" icon"}),s.createElement("p",{className:U},e.name)))))},z=[{name:"React",img:"img/react.png",link:"https://react.dev/"},{name:"Node",img:"img/node.png",link:"https://nodejs.dev/"},{name:"Prettier",img:"img/prettier.png",link:"https://prettier.io/"},{name:"ESLint",img:"img/eslint.png",link:"https://eslint.org/"},{name:"Vitest",img:"img/vitest.png",link:"https://vitest.dev/"},{name:"JavaScript",img:"img/javascript.png",link:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"},{name:"TypeScript",img:"img/typescript.png",link:"https://www.typescriptlang.org/"},{name:"CSS",img:"img/css.png",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{name:"Sass",img:"img/sass.png",link:"https://sass-lang.com/"}],Q=()=>s.createElement("section",{className:`container ${Z}`},s.createElement("h1",{className:W},"Tools Used in Arclix"),s.createElement(Y,{tools:z,className:R}));function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},J.apply(this,arguments)}var X={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},K=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=J({},X,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(e.stringsElement.children),r=s.length;if(r)for(var a=0;a<r;a+=1)e.strings.push(s[a].innerHTML.trim())}for(var i in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[i]=i;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendAnimationCss=function(e){var t="data-typed-js-css";if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(t,!0);var s="";e.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=s,document.body.appendChild(n))}},e}()),ee=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substr(t).charAt(0);if("<"===s||"&"===s){var r;for(r="<"===s?">":";";e.substr(t+1).charAt(0)!==r&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s=e.substr(t).charAt(0);if(">"===s||";"===s){var r;for(r=">"===s?"<":"&";e.substr(t-1).charAt(0)!==r&&!(--t<0););t--}return t},e}()),te=function(){function e(e,t){K.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)},t.typewrite=function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=ee.typeHtmlChars(e,t,n);var s=0,a=e.substr(t);if("^"===a.charAt(0)&&/^\^\d+/.test(a)){var i=1;i+=(a=/\d+/.exec(a)[0]).length,s=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+i),n.toggleBlinking(!0)}if("`"===a.charAt(0)){for(;"`"!==e.substr(t+r).charAt(0)&&(r++,!(t+r>e.length)););var o=e.substring(0,t),l=e.substring(o.length+1,t+r),c=e.substring(t+r+1);e=o+l+c,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=e.substr(0,t+=n);this.replaceText(s),this.typewrite(e,t)},t.doneTyping=function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))},t.backspace=function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=ee.backSpaceHtmlChars(e,t,n);var s=e.substr(0,t);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&s===r.substr(0,t)?t:0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),s)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}();const ne="overlayContainer_BPaV",se="terminalContainer_WPFY",re="terminalHeader_NVOg",ae="primaryText_toW3",ie="command_hHOo",oe="tick_foL8",le="created_KKz7",ce="terminal_UFE3",me="terminalHeading_ohB0",pe="terminalPara_lrwp",ue="content_EaDj",he="contentPara_au71",ge=[{name:"Vite",img:"https://vitejs.dev/logo-with-shadow.png",link:"https://vitejs.dev/"},{name:"Next",img:"https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",link:"https://nextjs.org/"},{name:"Remix",img:"img/remix.png",link:"https://remix.run/"},{name:"Gatsby",img:"img/gatsby.png",link:"https://www.gatsbyjs.com/"},{name:"Expo",img:"img/expo.png",link:"https://expo.dev/"},{name:"CRA",img:"https://create-react-app.dev/img/logo.svg",link:"https://create-react-app.dev/"}],Ce=()=>{const e=(0,s.useRef)(null),[t,n]=(0,s.useState)(!1),[r,a]=(0,s.useState)(!1),{siteConfig:{customFields:i}}=(0,C.Z)(),o=e=>{const t=e.join(", ");return s.createElement(s.Fragment,null,s.createElement("b",{className:ae},i.version)," ",s.createElement("br",null),s.createElement("br",null),s.createElement("span",{className:oe},"\u2713")," Component"," ",s.createElement("span",{className:le},t)," created")};return(0,s.useEffect)((()=>{const t=new te(e.current,{strings:["npx arclix@latest generate component Hero","npx arclix@latest generate component Heroes Hero/Heroes"],typeSpeed:65,loop:!0,backDelay:1e3,backSpeed:50,onStringTyped:e=>{0==e?(n(!0),a(!1)):(n(!1),a(!0))}});return()=>{t.destroy()}}),[]),s.createElement(s.Fragment,null,s.createElement(V,{gridTemplateColumns:"2fr 1.5fr",flexDirection:"column-reverse"},s.createElement(s.Fragment,null,s.createElement("section",{className:ne}),s.createElement("section",{className:se},s.createElement(F,{className:ce},s.createElement("h4",{className:me},"$"," ",s.createElement("span",{ref:e,className:ie})),s.createElement("p",{style:{display:t?"block":"none"},className:pe},o(["Hero"])),s.createElement("p",{style:{display:r?"block":"none"},className:pe},o(["Heroes, Heroes/Hero"]))))),s.createElement("section",{className:ue},s.createElement("h1",{className:re},"Are You a React Developer?"),s.createElement("p",{className:he},"Take react component generation to the command line. Component generation is supported in all existing React projects created by:"),s.createElement(Y,{tools:ge}))))},de="multi-component__title_gQNx",ye="multi-component__btn_adFQ",Ee="primaryText_TKYy",fe="command_wQz2",ke="tick_xATt",be="created_BBBG",ve="terminalHeading_pHsY",_e="terminalPara_rgXd",Ne="list_qVfM",xe=e=>{let{children:t}=e;return s.createElement("ul",{className:Ne},t)},Ae=()=>{const{siteConfig:{customFields:e}}=(0,C.Z)(),t=s.createElement(s.Fragment,null,s.createElement("b",{className:Ee},e.version)," ",s.createElement("br",null),s.createElement("br",null),s.createElement("span",{className:ke},"\u2713")," Component"," ",s.createElement("span",{className:be},"Heroes, Villain, Heroes/Hero")," ","created.");return s.createElement(V,{gridTemplateColumns:"repeat(2, 1fr)",flexDirection:"column"},s.createElement("article",null,s.createElement("h3",{className:de},"Multiple and Nested Components"),s.createElement(xe,null,s.createElement("li",null,"Generate nested components."),s.createElement("li",null,"Generate multiple components at once."),s.createElement("li",null,"Share same options for the components.")),s.createElement(g.Z,{className:ye,href:"/docs/component-generation/generate#generate-multiple-components"},"Learn More")),s.createElement(F,null,s.createElement("h4",{className:ve},"$"," ",s.createElement("span",{className:fe},"npx arclix@latest g c Heroes Villain Heroes/Hero")),s.createElement("p",{className:_e},t)))},Se="generatorContainer_y1Ns",Te="generatedItems_ucgi",we="item_q0dI",Be="itemIcon_EhBT",He="itemImg_MQQG",Oe=[{title:"React",img:"img/react-color.png",description:s.createElement(s.Fragment,null,"React template file ",s.createElement("b",null,"jsx")," or ",s.createElement("b",null,"tsx")," depending on your specific needs for the project.")},{title:"Style",img:"img/css-color.png",description:s.createElement(s.Fragment,null,"Style file based on the provided CSS preprocessor (e.g.,"," ",s.createElement("b",null,"CSS"),",",s.createElement("b",null,"PCSS"),", ",s.createElement("b",null,"SCSS"),", etc.).")},{title:"Storybook",img:"img/storybookjs.png",description:s.createElement(s.Fragment,null,"Story file to test the UI of the component and explore its various states.")},{title:"Test",img:"img/test-color.png",description:s.createElement(s.Fragment,null,"Test file to validate component functionality, supporting all React-compatible test frameworks.")}],Pe=()=>s.createElement(V,{gridTemplateColumns:"repeat(1, 1fr)",flexDirection:"column",className:Se},s.createElement("svg",{width:"1296",height:"432",viewBox:"0 0 1296 432",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("rect",{x:"532",y:"171",width:"200",height:"70",rx:"15",fill:"#1B1818"}),s.createElement("path",{d:"M590.302 202.562C590.131 202.024 589.9 201.541 589.61 201.115C589.326 200.683 588.985 200.316 588.589 200.014C588.192 199.706 587.739 199.473 587.23 199.313C586.727 199.153 586.174 199.073 585.57 199.073C584.546 199.073 583.623 199.337 582.8 199.863C581.978 200.39 581.327 201.162 580.847 202.18C580.374 203.192 580.137 204.432 580.137 205.9C580.137 207.374 580.377 208.62 580.856 209.638C581.336 210.656 581.993 211.428 582.827 211.955C583.662 212.482 584.612 212.745 585.677 212.745C586.665 212.745 587.526 212.544 588.26 212.141C589 211.739 589.571 211.171 589.974 210.437C590.382 209.697 590.586 208.827 590.586 207.827L591.297 207.96H586.094V205.696H593.241V207.765C593.241 209.292 592.915 210.617 592.264 211.742C591.619 212.86 590.725 213.725 589.583 214.334C588.447 214.944 587.145 215.249 585.677 215.249C584.031 215.249 582.587 214.87 581.344 214.112C580.107 213.355 579.143 212.28 578.45 210.89C577.758 209.493 577.412 207.836 577.412 205.918C577.412 204.468 577.613 203.166 578.015 202.012C578.418 200.858 578.983 199.878 579.711 199.073C580.445 198.262 581.306 197.644 582.294 197.218C583.289 196.786 584.375 196.57 585.553 196.57C586.535 196.57 587.449 196.715 588.296 197.005C589.148 197.295 589.906 197.706 590.569 198.239C591.237 198.771 591.791 199.405 592.229 200.138C592.667 200.866 592.963 201.674 593.116 202.562H590.302ZM602.387 215.275C601.044 215.275 599.887 214.988 598.916 214.414C597.951 213.834 597.205 213.02 596.679 211.973C596.158 210.919 595.897 209.685 595.897 208.271C595.897 206.874 596.158 205.643 596.679 204.577C597.205 203.512 597.939 202.681 598.88 202.083C599.827 201.485 600.934 201.186 602.201 201.186C602.97 201.186 603.716 201.313 604.438 201.568C605.16 201.822 605.808 202.222 606.382 202.766C606.956 203.311 607.409 204.018 607.741 204.888C608.072 205.752 608.238 206.803 608.238 208.04V208.981H597.398V206.992H605.636C605.636 206.294 605.494 205.675 605.21 205.137C604.926 204.592 604.527 204.163 604.012 203.849C603.503 203.536 602.905 203.379 602.218 203.379C601.473 203.379 600.822 203.562 600.265 203.929C599.715 204.29 599.289 204.764 598.987 205.35C598.691 205.93 598.543 206.56 598.543 207.241V208.794C598.543 209.706 598.703 210.481 599.022 211.12C599.348 211.76 599.801 212.248 600.381 212.585C600.961 212.917 601.638 213.082 602.414 213.082C602.917 213.082 603.376 213.011 603.79 212.869C604.204 212.721 604.562 212.502 604.864 212.212C605.166 211.922 605.397 211.564 605.557 211.138L608.069 211.591C607.868 212.331 607.507 212.979 606.986 213.535C606.471 214.086 605.823 214.515 605.042 214.822C604.266 215.124 603.381 215.275 602.387 215.275ZM613.837 206.903V215H611.183V201.364H613.731V203.583H613.9C614.213 202.861 614.704 202.281 615.373 201.843C616.048 201.405 616.897 201.186 617.921 201.186C618.85 201.186 619.664 201.381 620.363 201.772C621.061 202.157 621.603 202.731 621.987 203.494C622.372 204.258 622.564 205.202 622.564 206.326V215H619.91V206.646C619.91 205.658 619.652 204.885 619.137 204.329C618.623 203.767 617.915 203.485 617.016 203.485C616.4 203.485 615.853 203.619 615.373 203.885C614.9 204.151 614.524 204.542 614.246 205.057C613.973 205.566 613.837 206.181 613.837 206.903ZM632.001 215.275C630.658 215.275 629.501 214.988 628.53 214.414C627.565 213.834 626.82 213.02 626.293 211.973C625.772 210.919 625.512 209.685 625.512 208.271C625.512 206.874 625.772 205.643 626.293 204.577C626.82 203.512 627.554 202.681 628.495 202.083C629.442 201.485 630.548 201.186 631.815 201.186C632.584 201.186 633.33 201.313 634.052 201.568C634.774 201.822 635.422 202.222 635.996 202.766C636.571 203.311 637.023 204.018 637.355 204.888C637.686 205.752 637.852 206.803 637.852 208.04V208.981H627.012V206.992H635.251C635.251 206.294 635.109 205.675 634.825 205.137C634.54 204.592 634.141 204.163 633.626 203.849C633.117 203.536 632.519 203.379 631.833 203.379C631.087 203.379 630.436 203.562 629.88 203.929C629.329 204.29 628.903 204.764 628.601 205.35C628.305 205.93 628.157 206.56 628.157 207.241V208.794C628.157 209.706 628.317 210.481 628.637 211.12C628.962 211.76 629.415 212.248 629.995 212.585C630.575 212.917 631.253 213.082 632.028 213.082C632.531 213.082 632.99 213.011 633.404 212.869C633.818 212.721 634.176 212.502 634.478 212.212C634.78 211.922 635.011 211.564 635.171 211.138L637.683 211.591C637.482 212.331 637.121 212.979 636.6 213.535C636.085 214.086 635.437 214.515 634.656 214.822C633.881 215.124 632.996 215.275 632.001 215.275ZM640.797 215V201.364H643.363V203.53H643.505C643.753 202.796 644.191 202.219 644.819 201.799C645.452 201.373 646.168 201.159 646.967 201.159C647.133 201.159 647.328 201.165 647.553 201.177C647.784 201.189 647.965 201.204 648.095 201.222V203.761C647.988 203.731 647.799 203.699 647.527 203.663C647.254 203.622 646.982 203.601 646.71 203.601C646.082 203.601 645.523 203.734 645.032 204C644.547 204.261 644.162 204.625 643.878 205.092C643.594 205.554 643.452 206.081 643.452 206.673V215H640.797ZM654.238 215.302C653.374 215.302 652.593 215.142 651.894 214.822C651.196 214.497 650.643 214.026 650.234 213.411C649.832 212.795 649.631 212.041 649.631 211.147C649.631 210.378 649.779 209.744 650.074 209.247C650.37 208.75 650.77 208.356 651.273 208.066C651.776 207.776 652.338 207.557 652.96 207.409C653.581 207.261 654.215 207.149 654.86 207.072C655.676 206.977 656.339 206.9 656.848 206.841C657.357 206.776 657.727 206.673 657.958 206.531C658.189 206.388 658.304 206.158 658.304 205.838V205.776C658.304 205.001 658.085 204.4 657.647 203.974C657.215 203.548 656.57 203.335 655.712 203.335C654.818 203.335 654.114 203.533 653.599 203.929C653.09 204.32 652.738 204.755 652.543 205.234L650.048 204.666C650.344 203.838 650.776 203.169 651.344 202.66C651.918 202.145 652.578 201.772 653.324 201.541C654.07 201.304 654.854 201.186 655.676 201.186C656.221 201.186 656.798 201.251 657.408 201.381C658.023 201.506 658.597 201.737 659.13 202.074C659.668 202.411 660.109 202.894 660.453 203.521C660.796 204.142 660.968 204.95 660.968 205.945V215H658.375V213.136H658.269C658.097 213.479 657.84 213.816 657.496 214.148C657.153 214.479 656.712 214.754 656.174 214.973C655.635 215.192 654.99 215.302 654.238 215.302ZM654.815 213.171C655.549 213.171 656.177 213.026 656.697 212.736C657.224 212.446 657.624 212.067 657.896 211.6C658.174 211.126 658.313 210.62 658.313 210.082V208.324C658.218 208.419 658.035 208.507 657.763 208.59C657.496 208.667 657.192 208.735 656.848 208.794C656.505 208.848 656.171 208.898 655.845 208.945C655.52 208.987 655.247 209.022 655.028 209.052C654.513 209.117 654.043 209.226 653.617 209.38C653.197 209.534 652.859 209.756 652.605 210.046C652.356 210.33 652.232 210.709 652.232 211.183C652.232 211.839 652.474 212.337 652.96 212.674C653.445 213.005 654.064 213.171 654.815 213.171ZM670.869 201.364V203.494H663.42V201.364H670.869ZM665.418 198.097H668.072V210.996C668.072 211.511 668.149 211.899 668.303 212.159C668.457 212.414 668.655 212.588 668.898 212.683C669.146 212.772 669.416 212.816 669.706 212.816C669.919 212.816 670.105 212.801 670.265 212.772C670.425 212.742 670.549 212.718 670.638 212.701L671.117 214.893C670.963 214.953 670.744 215.012 670.46 215.071C670.176 215.136 669.821 215.172 669.395 215.178C668.696 215.189 668.045 215.065 667.442 214.805C666.838 214.544 666.35 214.142 665.977 213.597C665.604 213.053 665.418 212.369 665.418 211.547V198.097ZM679.536 215.275C678.192 215.275 677.035 214.988 676.064 214.414C675.1 213.834 674.354 213.02 673.827 211.973C673.306 210.919 673.046 209.685 673.046 208.271C673.046 206.874 673.306 205.643 673.827 204.577C674.354 203.512 675.088 202.681 676.029 202.083C676.976 201.485 678.083 201.186 679.349 201.186C680.119 201.186 680.864 201.313 681.586 201.568C682.308 201.822 682.957 202.222 683.531 202.766C684.105 203.311 684.557 204.018 684.889 204.888C685.22 205.752 685.386 206.803 685.386 208.04V208.981H674.546V206.992H682.785C682.785 206.294 682.643 205.675 682.359 205.137C682.075 204.592 681.675 204.163 681.16 203.849C680.651 203.536 680.053 203.379 679.367 203.379C678.621 203.379 677.97 203.562 677.414 203.929C676.863 204.29 676.437 204.764 676.135 205.35C675.839 205.93 675.691 206.56 675.691 207.241V208.794C675.691 209.706 675.851 210.481 676.171 211.12C676.496 211.76 676.949 212.248 677.529 212.585C678.109 212.917 678.787 213.082 679.562 213.082C680.065 213.082 680.524 213.011 680.938 212.869C681.353 212.721 681.711 212.502 682.013 212.212C682.314 211.922 682.545 211.564 682.705 211.138L685.217 211.591C685.016 212.331 684.655 212.979 684.134 213.535C683.619 214.086 682.971 214.515 682.19 214.822C681.415 215.124 680.53 215.275 679.536 215.275Z",fill:"url(#paint0_linear_204_35)"}),s.createElement("path",{d:"M505 191H8V417",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"511.5",cy:"190.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"7.5",cy:"422.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"568.5",cy:"260.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M568.5 267V339.5H435.5V418.5",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"435.5",cy:"424.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M754 227.5H1018V387.5H863V417",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("path",{d:"M754 227.5C754 231.09 751.09 234 747.5 234C743.91 234 741 231.09 741 227.5C741 223.91 743.91 221 747.5 221C751.09 221 754 223.91 754 227.5Z",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"863.5",cy:"424.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"691.5",cy:"156.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M691.5 149.5V24.5H1010.5V124",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("path",{d:"M1010.5 123.5L1289 122.5",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("path",{d:"M1289 121.5V416",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"1288.5",cy:"423.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"568.5",cy:"156.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"266.5",cy:"7.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M569 150.5V82H266.5V13.5",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"691.5",cy:"260.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M692 267V344.5H755",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"762.5",cy:"344.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"383.5",cy:"227.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M390 227.5H505",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"511.5",cy:"227.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("circle",{cx:"747.5",cy:"190.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("path",{d:"M754 190.5H869",stroke:"#9AA9B6",strokeOpacity:"0.2"}),s.createElement("circle",{cx:"875.5",cy:"190.5",r:"6.5",stroke:"#9AA9B6",strokeOpacity:"0.2",strokeWidth:"2"}),s.createElement("defs",null,s.createElement("linearGradient",{id:"paint0_linear_204_35",x1:"576",y1:"191",x2:"692.392",y2:"212.443",gradientUnits:"userSpaceOnUse"},s.createElement("stop",{stopColor:"#919191"}),s.createElement("stop",{offset:"0.1979",stopColor:"#EAEAEA"}),s.createElement("stop",{offset:"0.3333",stopColor:"#828181"}),s.createElement("stop",{offset:"0.7031",stopColor:"#C6C6C6"}),s.createElement("stop",{offset:"1",stopColor:"#606060"})))),s.createElement("section",{className:Te},Oe.map((e=>s.createElement("article",{key:e.title,className:we},s.createElement("div",{className:Be},s.createElement("img",{className:He,src:e.img,alt:e.title+" icon"})),s.createElement("h3",null,e.title),s.createElement("p",null,e.description))))));function Ve(){return s.createElement(r.Z,{title:"",description:"An Open Source CLI with Creation and Component Generation for React. <head />"},s.createElement(x,null),s.createElement("main",null,s.createElement(h,null),s.createElement(Ce,null),s.createElement(Pe,null),s.createElement(Ae,null),s.createElement(D,null),s.createElement(Q,null)))}}}]);