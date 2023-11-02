"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9973],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,d=k["".concat(c,".").concat(u)]||k[u]||m[u]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const o={sidebar_position:30,title:"Containers",description:"Starting a container on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},i="Starting a container on your container engine",l={unversionedId:"containers/starting-a-container",id:"containers/starting-a-container",title:"Containers",description:"Starting a container on your container engine.",source:"@site/docs/containers/starting-a-container.md",sourceDirName:"containers",slug:"/containers/starting-a-container",permalink:"/docs/containers/starting-a-container",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/containers/starting-a-container.md",tags:[{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Containers",description:"Starting a container on your container engine.",keywords:["podman desktop","podman","containers","images"],tags:["images"]},sidebar:"mySidebar",previous:{title:"Pulling an image",permalink:"/docs/containers/images/pulling-an-image"},next:{title:"Pods",permalink:"/docs/containers/creating-a-pod"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"starting-a-container-on-your-container-engine"},"Starting a container on your container engine"),(0,r.kt)("p",null,"With Podman Desktop, you can start a container from an image on your container engine.\nYou can interact with the running container by using the terminal in Podman Desktop, or by opening your browser to the exposed ports."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images")," list has your image, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/podman/hello"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,r.kt)("li",{parentName:"ol"},"On the line with your image name, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/podman/hello"),", click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})),"."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Create a container")," screen, review the configuration."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container"),".")),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Containers"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})),": Enter your image name, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"quay.io/podman/hello"),", to find your running container."),(0,r.kt)("li",{parentName:"ol"},"Click your running container name."),(0,r.kt)("li",{parentName:"ol"},"To view logs:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Logs"),"."),(0,r.kt)("li",{parentName:"ol"},"Browse the content."))),(0,r.kt)("li",{parentName:"ol"},"To inspect the container:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Inspect"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,r.kt)("kbd",null,"\u2318")," + ",(0,r.kt)("kbd",null,"F")," on macOS to start searching in the content."))),(0,r.kt)("li",{parentName:"ol"},"To generate Kubernetes YAML, when your container engine is Podman:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Kube"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the content area to activate it."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("kbd",null,"Ctrl")," + ",(0,r.kt)("kbd",null,"F")," on Windows and Linux, or ",(0,r.kt)("kbd",null,"\u2318")," + ",(0,r.kt)("kbd",null,"F")," on macOS to start searching in the content."),(0,r.kt)("li",{parentName:"ol"},"Copy the content to a YAML file."),(0,r.kt)("li",{parentName:"ol"},"Later, you can reuse this file to start a container in Podman from Kubernetes YAML, or to start a pod in Kubernetes."))),(0,r.kt)("li",{parentName:"ol"},"To interact with the container terminal:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Terminal"),"."),(0,r.kt)("li",{parentName:"ol"},"Click the content area to activate the terminal."),(0,r.kt)("li",{parentName:"ol"},"Enter your commands."))),(0,r.kt)("li",{parentName:"ol"},"To interact with the exposed ports:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-external-link",size:"lg"})),"."),(0,r.kt)("li",{parentName:"ol"},"Your browser opens a page to the first exposed port on ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),"."))),(0,r.kt)("li",{parentName:"ol"},"To deploy to your current Kubernetes context, when you container engine is Podman:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})),"."),(0,r.kt)("li",{parentName:"ol"},"Review the ",(0,r.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})),"."))),(0,r.kt)("li",{parentName:"ol"},"To stop the container:"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-stop",size:"lg"})),"."),(0,r.kt)("li",{parentName:"ol"},"To delete the container:"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("icon",{icon:"fa-solid fa-trash",size:"lg"})),".")))}m.isMDXComponent=!0}}]);