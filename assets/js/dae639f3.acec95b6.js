"use strict";(self.webpackChunkclean_code=self.webpackChunkclean_code||[]).push([[315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(n),s=a,d=k["".concat(u,".").concat(s)]||k[s]||m[s]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4797:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),a="title_3C96",l="authors_333f",i="author_2o5L",o="avatar__link_21Yn",u="avatar__photo_25CI",c="avatar__info_seck",p="bold_19F6",m={positiveko:{name:"positiveko",title:"Front End Engineer",url:"https://github.com/positiveko",image_url:"https://github.com/positiveko.png"},Xednicoder:{name:"Xednicoder",title:"Front End Engineer",url:"https://github.com/Xednicoder",image_url:"https://github.com/Xednicoder.png"},"gyuseok-dev":{name:"gyuseok-dev",title:"Back End Engineer",url:"https://github.com/gyuseok-dev",image_url:"https://github.com/gyuseok-dev.png"},shinyeong:{name:"shinyeong",title:"Front End Engineer",url:"https://github.com/bonbon0202",image_url:"https://github.com/bonbon0202.png"}};function k(e){var t=e.bookLeader,n=e.authors,k=function(e){var n=e.author,a=m[n];return r.createElement("div",{className:i},r.createElement("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:o},r.createElement("img",{src:a.image_url,alt:n,className:u})),r.createElement("div",{className:c},r.createElement("span",{className:p},a.name," ",n===t&&" \ud83c\udfc6"),r.createElement("span",null,a.title)))},s=(0,r.useCallback)((function(){return r.createElement("div",{className:l},m[t]&&r.createElement(k,{author:t}),n&&n.map((function(e){if(m[e])return r.createElement(k,{author:e,key:e})})))}),[t,n]);return r.createElement("section",null,r.createElement("span",{className:a},"written by"),s())}},1707:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(4797),o=["components"],u={sidebar_position:9},c="9\uc7a5 \ub2e8\uc704 \ud14c\uc2a4\ud2b8",p={unversionedId:"chapter_9",id:"chapter_9",isDocsHomePage:!1,title:"9\uc7a5 \ub2e8\uc704 \ud14c\uc2a4\ud2b8",description:"\uc2dc\uc791\ud558\uae30",source:"@site/docs/chapter_9.mdx",sourceDirName:".",slug:"/chapter_9",permalink:"/clean-code/docs/chapter_9",editUrl:"https://github.dev/scope-team/clean-code/blob/main/docs/chapter_9.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8\uc7a5 \uacbd\uacc4",permalink:"/clean-code/docs/chapter_8"},next:{title:"10\uc7a5 \ud074\ub798\uc2a4",permalink:"/clean-code/docs/chapter_10"}},m=[{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",children:[]},{value:"TDD \ubc95\uce59 \uc138\uac00\uc9c0",id:"tdd-\ubc95\uce59-\uc138\uac00\uc9c0",children:[]},{value:"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc720\uc9c0\ud558\uae30",id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\uc720\uc9c0\ud558\uae30",children:[{value:"\ud14c\uc2a4\ud2b8\ub294 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c\ub2e4",id:"\ud14c\uc2a4\ud2b8\ub294-\uc720\uc5f0\uc131-\uc720\uc9c0\ubcf4\uc218\uc131-\uc7ac\uc0ac\uc6a9\uc131\uc744-\uc81c\uacf5\ud55c\ub2e4",children:[]}]},{value:"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc",id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc",children:[{value:"\ub3c4\uba54\uc778\uc5d0 \ud2b9\ud654\ub41c \ud14c\uc2a4\ud2b8 \uc5b8\uc5b4",id:"\ub3c4\uba54\uc778\uc5d0-\ud2b9\ud654\ub41c-\ud14c\uc2a4\ud2b8-\uc5b8\uc5b4",children:[]},{value:"\uc774\uc911 \ud45c\uc900",id:"\uc774\uc911-\ud45c\uc900",children:[]}]},{value:"\ud14c\uc2a4\ud2b8\ub2f9 assert \ud558\ub098",id:"\ud14c\uc2a4\ud2b8\ub2f9-assert-\ud558\ub098",children:[{value:"\ud14c\uc2a4\ud2b8\ub2f9 \uac1c\ub150 \ud558\ub098",id:"\ud14c\uc2a4\ud2b8\ub2f9-\uac1c\ub150-\ud558\ub098",children:[]}]},{value:"F.I.R.S.T",id:"first",children:[]},{value:"\uacb0\ub860",id:"\uacb0\ub860",children:[]}],k={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"9\uc7a5-\ub2e8\uc704-\ud14c\uc2a4\ud2b8"},"9\uc7a5 \ub2e8\uc704 \ud14c\uc2a4\ud2b8"),(0,l.kt)(i.Z,{bookLeader:"gyuseok-dev",mdxType:"Authors"}),(0,l.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,l.kt)("p",null,"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uc911\uc694\ud558\ub2e4\ub294 \uc0ac\uc2e4\uc740 \uadc0\uac00 \ub2f3\ub3c4\ub85d \ub4e4\uc5c8\ub530!"),(0,l.kt)("p",null,"\uadf8\ub7fc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \uc65c \ud544\uc694\ud558\uace0, \uc81c\ub300\ub85c \ub41c \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub294 \uc5b4\ub5bb\uac8c \ub9cc\ub4dc\ub294 \uac83\uc778\uac00!"),(0,l.kt)("h2",{id:"tdd-\ubc95\uce59-\uc138\uac00\uc9c0"},"TDD \ubc95\uce59 \uc138\uac00\uc9c0"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc2e4\ud328\ud558\ub294 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud560 \ub54c\uae4c\uc9c0 \uc2e4\uc81c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ucef4\ud30c\uc77c\uc740 \uc2e4\ud328\ud558\uc9c0 \uc54a\uc73c\uba74\uc11c \uc2e4\ud589\uc774 \uc2e4\ud328\ud558\ub294 \uc815\ub3c4\ub85c\ub9cc \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud604\uc7ac \uc2e4\ud328\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\uacfc\ud558\ub294 \uc815\ub3c4\ub85c\ub9cc \uc2e4\uc81c \ucf54\ub4dc\ub97c \uc791\uc131\ud55c\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c\ub9cc \ud558\uba74 \uc0ac\uc2e4\uc0c1 \ubaa8\ub4e0 \ucf54\ub4dc\ub97c \ud14c\uc2a4\ud2b8\ud558\ub294 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uac00 \ub098\uc628\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc2e4\uc81c \ucf54\ub4dc\uc640 \ub9de\uba39\uc744 \uc815\ub3c4\ub85c \ubc29\ub300\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 ",(0,l.kt)("strong",{parentName:"li"},"\uc2ec\uac01\ud55c \uad00\ub9ac \ubb38\uc81c\ub97c \uc720\ubc1c"),"\ud55c\ub2e4.")),(0,l.kt)("h2",{id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc-\uc720\uc9c0\ud558\uae30"},"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc720\uc9c0\ud558\uae30"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc? \ub204\uac00 \uc54c\uc544\uc90c? \uc9c0\uc800\ubd84\ud574\ub3c4 \ube68\ub9ac!")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uc800\ubd84\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc624\ud788\ub824 \uc5c6\ub294\uac8c \ub0ab\ub2e4!"),(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uc800\ubd84\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \u2192 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\ub97c \ucd94\uac00\uc2dc\uac04 UP \u2192 \ubc30\ubcf4\ub2e4 \ubc30\uaf3d"),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\uc5d0 \uc3df\uc740 \ub178\ub825\uc774 \ud5c8\uc0ac\uac00 \ub418\uc9c0 \uc54a\uae30 \uc704\ud574\uc120 ",(0,l.kt)("strong",{parentName:"li"},"\uae68\ub057\ud55c \ub2e8\uc704\ud14c\uc2a4\ud2b8"),"\ub97c \uc791\uc131\ud574\uc57c\ud55c\ub2e4.")),(0,l.kt)("h3",{id:"\ud14c\uc2a4\ud2b8\ub294-\uc720\uc5f0\uc131-\uc720\uc9c0\ubcf4\uc218\uc131-\uc7ac\uc0ac\uc6a9\uc131\uc744-\uc81c\uacf5\ud55c\ub2e4"},"\ud14c\uc2a4\ud2b8\ub294 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \uc81c\uacf5\ud55c\ub2e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc544\ubb34\ub9ac \uc124\uacc4\ub97c \uc798\ud574\ub1a8\uc5b4\ub3c4, \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \uc5c6\uc73c\uba74 \uac1c\ubc1c\uc790\ub294 \ubcc0\uacbd\uc744 \uc8fc\uc800\ud55c\ub2e4.(\ub098..\ub108\ubb34 \ubb34\uc11c\uc6cc~~)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\uc790\ub3d9\ud654\ub41c \ub2e8\uc704 \ud14c\uc2a4\ud2b8 \uc288\ud2b8"),"\ub294 \uc124\uacc4\uc640 \uc544\ud0a4\ud14d\uccd0\ub97c \ucd5c\ub300\ud55c \uae68\ub057\ud558\uac8c \ubcf4\uc874\ud558\ub294 \uc5f4\uc1e0\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8\uac00 \uc788\uc73c\uba74 \ucc98\uc74c\uc5d0\ub294 \ubd80\uc2e4\ud55c \uad6c\uc870\uc5ec\ub3c4 \ub9c8\uc74c\uaecf \uac1c\uc120\ud560 \uc218 \uc788\ub2e4.")))),(0,l.kt)("h2",{id:"\uae68\ub057\ud55c-\ud14c\uc2a4\ud2b8-\ucf54\ub4dc"},"\uae68\ub057\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uac00\ub3c5\uc131, \uac00\ub3c5\uc131, \uac00\ub3c5\uc131")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uae08\uae4c\uc9c0 \ud074\ub9b0\ucf54\ub4dc\uc5d0\uc11c \uc81c\uc2dc\ud55c \uac83\uacfc \ub2e4\ub974\uc9c0\uc54a\ub2e4.(\uba85\ub8cc\uc131, \ub2e8\uc21c\uc131, \ud48d\ubd80\ud55c \ud45c\ud604\ub825)"),(0,l.kt)("li",{parentName:"ul"},"Testcode Best Practice (feat: BUILD-OPERATE-CHECK \ud328\ud134)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"function test_function() {\n    # BUILD - \ud14c\uc2a4\ud2b8 \uc790\ub8cc \ub9cc\ub4e4\uae30\n    # OPERATE - \ud14c\uc2a4\ud2b8 \uc790\ub8cc \uc870\uc791, \ud14c\uc2a4\ud2b8\ud560 \ud568\uc218 \uc2e4\ud589\n    # CHECK - \uc870\uc791\ud55c \uacb0\uacfc\uac00 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\n}\n"))),(0,l.kt)("li",{parentName:"ul"},"\uc911\uc694\ud55c\uac74 \ucf54\ub4dc\ub97c \uc77d\ub294 \uc0ac\ub78c\uc774 \ucf54\ub4dc\uac00 \uc218\ud589\ud558\ub294 \uae30\ub2a5\uc744 \uc7ac\ube68\ub9ac \uc774\ud574\ud574\uc57c \ud55c\ub2e4.")),(0,l.kt)("h3",{id:"\ub3c4\uba54\uc778\uc5d0-\ud2b9\ud654\ub41c-\ud14c\uc2a4\ud2b8-\uc5b8\uc5b4"},"\ub3c4\uba54\uc778\uc5d0 \ud2b9\ud654\ub41c \ud14c\uc2a4\ud2b8 \uc5b8\uc5b4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\uc220\uc801\uc778 \uc6a9\uc5b4 \ubcf4\ub2e4\ub294 \ube44\uc988\ub2c8\uc2a4 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcc4\ub3c4 \ud14c\uc2a4\ud2b8 API\ub97c \ub9cc\ub4e4\uc790.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"crawler.addPage (\uc77d\ub294 \uc0ac\ub78c: crwaler\uac00 \ubb50\uc9c0 \uc54c\uc544\uc57c\ud558\ub098?)"),(0,l.kt)("li",{parentName:"ul"},"makePage(\uc77d\ub294 \uc0ac\ub78c: \uc544 \ud14c\uc2a4\ud2b8 \uc804\uc5d0 \ud398\uc774\uc9c0\ub97c \uad6c\uc131\ud558\ub294 \ubd80\ubd84\uc774\uad6c\ub098)")))),(0,l.kt)("h3",{id:"\uc774\uc911-\ud45c\uc900"},"\uc774\uc911 \ud45c\uc900"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \ub9cc\ud07c\uc740 \uadf8\ub3d9\uc548 \uacf5\ubd80\ud55c \ud074\ub9b0\ucf54\ub4dc \uaddc\uce59\uc744 \uc704\ubc18\ud574\ub3c4 \ub41c\ub2e4\uace0?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc774\ubd80\ubd84\uc740 \uc790\uc6d0\uacfc \uba54\ubaa8\ub9ac\uac00 \ud55c\uc815\uc801\uc778 \uc784\ubca0\ub514\ub4dc \uc2dc\uc2a4\ud15c \uae30\uc900\uc758 \ub0b4\uc6a9\uc774\ubbc0\ub85c \ud328\uc4f0"))),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9cc\ud07c \uaddc\uce59\uc744 \uc704\ubc18\ud574\uc11c\ub77c\ub3c4 \uac00\ub3c5\uc131\uc774 \uc88b\uc544\uc9c8 \uc218 \uc788\ub2e4\uba74 \uadf8\ub807\uac8c \ud558\ub77c\ub294 \uc815\ub3c4\ub85c \uc774\ud574")),(0,l.kt)("h2",{id:"\ud14c\uc2a4\ud2b8\ub2f9-assert-\ud558\ub098"},"\ud14c\uc2a4\ud2b8\ub2f9 assert \ud558\ub098"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uac1c\ub150 \ub2f9 assert\ubb38 \uc218\ub97c \ucd5c\uc18c\ub85c \uc904\uc5ec\ub77c.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud655\uc2e4\ud788 assert\uac00 '\ud558\ub098'\uc774\uba74 \ud14c\uc2a4\ud2b8\uac00 \ubb34\uc5c7\uc744 \ud655\uc778\ud558\ub824\ub294\uc9c0 \uc774\ud574\ud558\uae30 \uc27d\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud55c \ud14c\uc2a4\ud2b8\uc5d0\uc11c assert\ub97c \uc5ec\ub7ec\uac1c \ud655\uc778\ud560 \uc218 \uc788\uc74c\uc5d0\ub3c4 \uc5b5\uc9c0\ub85c \ubd84\ub9ac\ud558\uba74?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub418\ub294 \ucf54\ub4dc\uac00 \ub9ce\uc544\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubb3c\ub860 ",(0,l.kt)("inlineCode",{parentName:"li"},"TEMPLATE MOTHOD \ud328\ud134"),"\uc744 \uc774\uc6a9\ud558\uc5ec \uc911\ubcf5\uc744 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc5ed\uc2dc\ub098 \ubc30\ubcf4\ub2e4 \ubc30\uaf3d"))),(0,l.kt)("li",{parentName:"ul"},"\uac1c\ubc1c \ud3b8\ud558\uac8c \ud558\ub824\uace0 \ud14c\uc2a4\ud2b8 \uc9dc\ub294\ub370, \ud14c\uc2a4\ud2b8 \uc9dc\ub2e4\uac00 \ud798 \ub2e4\ube80\ub2e4? no good~")),(0,l.kt)("h3",{id:"\ud14c\uc2a4\ud2b8\ub2f9-\uac1c\ub150-\ud558\ub098"},"\ud14c\uc2a4\ud2b8\ub2f9 \uac1c\ub150 \ud558\ub098"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud14c\uc2a4\ud2b8 \ud568\uc218\ub9c8\ub2e4 \ud55c \uac1c\ub150\ub9cc \ud14c\uc2a4\ud2b8\ud558\ub77c.")),(0,l.kt)("h2",{id:"first"},"F.I.R.S.T"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"~\ub54c\ubb38\uc5d0 \ud14c\uc2a4\ud2b8\ub97c \ubabb\ud588\ub2e4\ub294 \ud551\uacc4\ub97c \ub9cc\ub4e4 \uc218 \uc5c6\ub294 \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5b4\uc57c\ud55c\ub2e4.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fast(\ube60\ub974\uac8c)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\uac00 \ube60\ub974\uc9c0 \uc54a\uc73c\uba74 \uc790\uc8fc \ub3cc\ub9b4 \uc5c4\ub450\ub97c \ubabb\ub0b8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc544\ub2c8 \uac1c\ubc1c \ube68\ub9ac\ud558\ub824\uace0 \ud14c\uc2a4\ud2b8 \ub123\uc5c8\ub294\ub370 \ud14c\uc2a4\ud2b8\uac00 \ub290\ub824\uc11c \ubcf5\ucc3d\uc774 \ud130\uc9c4\ub2e4? no good~"))),(0,l.kt)("li",{parentName:"ul"},"Independent(\ub3c5\ub9bd\uc801\uc73c\ub85c)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uac01 \ud14c\uc2a4\ud2b8\ub294 \uc11c\ub85c \uc758\uc874\ud558\uba74 \uc548\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud68c\uc6d0\uac00\uc785 \ud14c\uc2a4\ud2b8 \uc644\ub8cc\ud55c \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0 \ud68c\uc6d0\ud0c8\ud1f4 \ud14c\uc2a4\ud2b8\ud558\ub3c4\ub85d \uc791\uc131\ud588\ub2e4\uba74?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud68c\uc6d0\uac00\uc785 \ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud558\uba74 \ud68c\uc6d0\ud0c8\ud1f4 \ud14c\uc2a4\ud2b8\ub3c4 \uc2e4\ud328 no good~"))))),(0,l.kt)("li",{parentName:"ul"},"Repeatable(\ubc18\ubcf5\uac00\ub2a5\ud558\uac8c)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \ud658\uacbd, QA \ud658\uacbd, \uc778\ud130\ub137\uc774 \uc5c6\ub294 \ud658\uacbd\uc5d0\uc11c\ub3c4 \uc2e4\ud589\ud560 \uc218 \uc788\uc5b4\uc57c\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"Self-Validationg(\uc790\uac00\uac80\uc99d\ud558\ub294)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ub294 \uc131\uacf5/\uc2e4\ud328 (bool)\ub85c \uacb0\uacfc\ub97c \ub0b4\uc57c\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8\ub97c \ud558\uace0 \ub450\uac1c\uc758 \ud30c\uc77c\uc744 \uc9c1\uc811 \ub208\uc73c\ub85c \ube44\uad50\ud574\uc57c\ud55c\ub2e4\uba74 \ud310\ub2e8\uc774 \uc8fc\uad00\uc801\uc774\ub41c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"Timely(\uc801\uc2dc\uc5d0)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub294 \ud14c\uc2a4\ud2b8\ud558\ub824\ub294 \uc2f1\uc81c \ucf54\ub4dc\ub97c \uad6c\ud604\ud558\uae30 \uc9c1\uc804\uc5d0 \uad6c\ud604\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c\ucf54\ub4dc\ub97c \uc791\uc131\ud558\uace0 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\ub824\uace0 \ud558\uba74 \ud14c\uc2a4\ud2b8\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218\uac00 \uc788\ub2e4.")))),(0,l.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc2e4\uc81c \ucf54\ub4dc \ub9cc\ud07c\uc774\ub098 \ud504\ub85c\uc81d\ud2b8 \uac74\uac15\uc5d0 \uc911\uc694\ud558\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub294 \uc2e4\uc81c \ucf54\ub4dc\uc758 \uc720\uc5f0\uc131, \uc720\uc9c0\ubcf4\uc218\uc131, \uc7ac\uc0ac\uc6a9\uc131\uc744 \ubcf4\uc874\ud558\uace0 \uac15\ud654\ud558\uae30 \ub54c\ubb38\uc774\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uac00 \ub9dd\uac00\uc9c0\uba74 \uc2e4\uc81c \ucf54\ub4dc\ub3c4 \ub9dd\uac00\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc2a4\ud2b8 API\ub97c \uad6c\ud604\ud574 \ub3c4\uba54\uc778 \ud2b9\ud654 \uc5b8\uc5b4(Domain Specific Language)\ub97c \ub9cc\ub4e4\uc790.")))}s.isMDXComponent=!0}}]);