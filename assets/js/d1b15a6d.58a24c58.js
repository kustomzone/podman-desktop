"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8532],{35318:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var n=i(27378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(i),k=a,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||r;return i?n.createElement(d,o(o({ref:t},p),{},{components:i})):n.createElement(d,o({ref:t},p))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},83905:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=i(25773),a=(i(27378),i(35318));const r={sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Minikube",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes"]},o="Building an image and testing it in Minikube",l={unversionedId:"minikube/building-an-image-and-testing-it-in-minikube",id:"minikube/building-an-image-and-testing-it-in-minikube",title:"Building and testing an image",description:"Building an image and testing it in Minikube",source:"@site/docs/minikube/building-an-image-and-testing-it-in-minikube.md",sourceDirName:"minikube",slug:"/minikube/building-an-image-and-testing-it-in-minikube",permalink:"/docs/minikube/building-an-image-and-testing-it-in-minikube",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/minikube/building-an-image-and-testing-it-in-minikube.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Building and testing an image",description:"Building an image and testing it in Minikube",keywords:["podman desktop","podman","containers","pods","migrating","kubernetes","minikube"],tags:["migrating-to-kubernetes"]},sidebar:"mySidebar",previous:{title:"Deleting your Minikube cluster",permalink:"/docs/minikube/deleting-your-minikube-cluster"},next:{title:"Push an image to Minikube",permalink:"/docs/minikube/pushing-an-image-to-minikube"}},s={},m=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],p={toc:m};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-an-image-and-testing-it-in-minikube"},"Building an image and testing it in Minikube"),(0,a.kt)("p",null,"With Podman Desktop, you can build an image with your container engine, and test it in your local Minikube-powered Kubernetes cluster."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/containers"},"You onboarded a container engine"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/minikube"},"You onboarded a Minikube cluster"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/minikube/working-with-your-local-minikube-cluster"},"You have set your Kubernetes context to your Minikube cluster"),"."),(0,a.kt)("li",{parentName:"ul"},"A container definition file: ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build your image:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images > ",(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build an image"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Containerfile path"),": select your ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Build context directory"),": optionally, select a directory different from the directory containing your ",(0,a.kt)("inlineCode",{parentName:"li"},"Containerfile")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Image Name"),": enter your image name ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cube",size:"lg"})," Build"),"."),(0,a.kt)("li",{parentName:"ol"},"Wait for the image build to finish."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done")," to get back to the images list."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push your image to your Minikube cluster:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search images"),": enter your image name ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image")," to find the image."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Minikube cluster"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test your image by creating a container:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-play",size:"lg"}))," to open the ",(0,a.kt)("strong",{parentName:"li"},"Create a container from image")," dialog."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Container name"),": enter ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container"),"."),(0,a.kt)("li",{parentName:"ol"},"Review the parameters that Podman Desktop has detected from your image definition."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-play",size:"lg"})," Start Container")," to start the container in your container engine."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test your image and container on your Minikube cluster:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Search containers"),": enter ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container")," to find the running container."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,a.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy to Kubernetes")," to open the ",(0,a.kt)("strong",{parentName:"li"},"Deploy generated pod to Kubernetes")," screen."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pod Name"),": keep the proposed value ",(0,a.kt)("inlineCode",{parentName:"li"},"my-custom-image-container-pod"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use Kubernetes Services"),": select ",(0,a.kt)("strong",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"strong"},"hostPort")," exposure on containers by Services. It is the recommended way to expose ports, as a cluster policy might prevent to use ",(0,a.kt)("inlineCode",{parentName:"strong"},"hostPort"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Expose service locally using Kubernetes LoadBalancer"),": if your container is exposing a service, you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"minikube service")," to get a web browser or an URL to use."),(0,a.kt)("li",{parentName:"ol"},"Optionally, if your container is exposing more than one port, select the port to expose."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes namespaces"),": select ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-rocket",size:"lg"})," Deploy"),"."),(0,a.kt)("li",{parentName:"ol"},"Wait for the pod to reach the state: ",(0,a.kt)("strong",{parentName:"li"},"Phase: Running"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")))),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods")," screen lists the running ",(0,a.kt)("inlineCode",{parentName:"li"},"my-image-container-pod")," pod."),(0,a.kt)("li",{parentName:"ol"},"Click on the pod name to view details and logs."),(0,a.kt)("li",{parentName:"ol"},"Optionally, if your container is exposing a service, go to the server URL: your application is running.")))}c.isMDXComponent=!0}}]);